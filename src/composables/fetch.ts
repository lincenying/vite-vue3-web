import type { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { LoadedType } from '@/types'
import axios from 'axios'
import { userStorage } from './storage'

const userStore = useUserStore(piniaInit)

const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
}

const baseConfig = {
    headers,
    timeout: 5000,
    withCredentials: false,
}

if (import.meta.env.VITE_APP_ENV === 'production') {
    baseConfig.timeout = 300000
}

axios.interceptors.request.use(
    config => config,
    error => Promise.resolve(error.response || error),
)

axios.interceptors.response.use(
    response => response,
    (error) => {
        const response = {} as AxiosResponse
        response.config = error.config
        response.data = null
        response.headers = error.config.headers
        response.status = error.code
        response.statusText = error.message
        response.request = error.request
        return Promise.resolve(response)
    },
)

function checkStatus(response: AxiosResponse): ResponseData<any> {
    if (response.status === 200 || response.status === 304) {
        return response.data
    }
    if (response.status === 401) {
        return {
            code: 401,
            info: response.statusText || response.toString(),
            data: response.statusText || response.toString(),
            message: `您还没有登录, 或者登录超时!`,

        }
    }
    return {
        code: -404,
        info: response.statusText || response.toString(),
        data: response.statusText || response.toString(),
        message: `接口返回数据错误, 错误代码: ${response.status || '未知'}`,
    }
}

function checkCodeFn(data: ResponseData<any>) {
    const code = [0, 200, 1000]
    if (data.code === 401) {
        userStorage.value = {
            info: {},
            token: '',
        }
        // const pathname = encodeURIComponent(window.location.pathname)
        // if (!window.$$lock) {
        //     window.$$lock = true
        //     loginMsgBox('当前登录状态已失效, 请重新登录', pathname)
        // }
        userStore.setToken('')
    }
    else if (!code.includes(Number(data.code))) {
        showMsg(data.message)
    }
    else {
        data.code = 200
    }
    return data
}

/**
 * axios Api 封装
 * ```
    get<T>(url: string, params?: Objable, header?: Objable, checkCode?: boolean): Promise<ResponseData<T>>
    post<T>(url: string, data?: Objable, header?: Objable, checkCode?: boolean): Promise<ResponseData<T>>
    put<T>(url: string, data?: Objable, header?: Objable, checkCode?: boolean): Promise<ResponseData<T>>
    delete<T>(url: string, data?: Objable, header?: Objable, checkCode?: boolean): Promise<ResponseData<T>>
 * ```
 */
const api: ApiType = {
    post(url: string, data?: Objable, header?: Objable, checkCode = true) {
        return this.RESTful(url, 'post', data, header, checkCode)
    },
    get(url: string, data?: Objable, header?: Objable, checkCode = true) {
        return this.RESTful(url, 'get', data, header, checkCode)
    },
    put(url: string, data?: Objable, header?: Objable, checkCode = true) {
        return this.RESTful(url, 'put', data, header, checkCode)
    },
    delete(url: string, data?: Objable, header?: Objable, checkCode = true) {
        return this.RESTful(url, 'delete', data, header, checkCode)
    },
    async downFile(url, method = 'get', data) {
        const config: AxiosRequestConfig = {
            ...baseConfig,
            responseType: 'arraybuffer',
            method,
            url: import.meta.env.VITE_APP_API + url,
        }
        if (method === 'get') {
            config.params = data
        }
        else {
            config.data = data
        }

        if (url.includes('NoTimeout')) {
            config.timeout = 9999999
        }
        const response = await axios<ArrayBuffer>(config)
        return response && response.data
    },

    async RESTful(url, method = 'get', data, header, checkCode) {
        const xhr = await this.$RESTful(url, method, data, header)
        if (checkCode) {
            return checkCodeFn(xhr)
        }
        return xhr
    },
    async $RESTful(url, method = 'get', data, header) {
        // if (url.split('/')[1] === '' || url.split('/')[1] === '') {
        // } else {
        url = import.meta.env.VITE_APP_API + url
        // }
        const config: AxiosRequestConfig = {
            ...baseConfig,
            headers: {
                ...baseConfig.headers,
                ...header,
            },
            method,
            url,
        }
        if (userStorage.value && userStorage.value.token) {
            (config.headers as AxiosHeaders).Authorization = `Bearer ${userStorage.value.token}`
        }

        if (method === 'get') {
            config.params = data
        }
        else {
            config.data = data
        }

        if (url.includes('NoTimeout')) {
            config.timeout = 9999999
        }
        const response = await axios(config)
        return checkStatus(response)
    },
}
window.axios = axios
window.$$api = api
export const $api = api

/**
 * 依赖的父级数据加载完成 或者 当前组件已经 mounted
 * @example
 * ```
 * 不依赖数据
 * useFetchData({ initFn: () => {} })
 * 依赖数据 watchData
 * useFetchData({ watchData, dataHasError, init, initError })
 * ```
 */
export function useFetchData<T, E>(payload: LoadedType<T, E>) {
    const ins = getCurrentInstance()!
    const options = ins.type

    const log = (text: string, color = 'blue') => {
        const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
        console.log(`%c[${options.name}]  >> `, `color: ${color}`, `${text} <<-- (${formatted.value})`)
    }

    const { watchData, dataHasError, initFn, errorFn, immediate } = payload

    const [loading, toggleLoading] = useToggle(false)

    if (typeof watchData === 'undefined') {
        if (typeof initFn === 'function') {
            onMounted(async () => {
                const { stop } = useTimeoutFn(() => toggleLoading(true), 300)
                log('未发现监听数据, 直接执行初始化函数')
                await (initFn && initFn())
                stop()
                toggleLoading(false)
            })
        }
        if (typeof dataHasError === 'undefined') {
            return {
                scope: () => {},
                loading: false,
            }
        }
    }

    const scope = effectScope()

    scope.run(() => {
        log('监听开始')
        watch(
            resolveRef(watchData),
            async (val, oldVal) => {
                const { stop } = useTimeoutFn(() => toggleLoading(true), 300)
                log('监听数据发生变化, 执行初始化函数')
                log(`旧值: ${JSON.stringify(oldVal)}`)
                log(`新值: ${JSON.stringify(val)}`)
                await (initFn && initFn('change-data'))
                stop()
                toggleLoading(false)
            },
            {
                deep: true,
                immediate: immediate ?? false,
            },
        )
        watch(
            resolveRef(dataHasError),
            async () => {
                const { stop } = useTimeoutFn(() => toggleLoading(true), 300)
                log('数据加载失败, 执行错误函数')
                await (errorFn && errorFn())
                stop()
                toggleLoading(false)
            },
        )
    })

    // onMounted(async () => {
    //     if (resolveUnref(watchData)) {
    //         const { stop } = useTimeoutFn(() => toggleLoading(true), 300)
    //         log('发现监听数据, 执行初始化函数')
    //         await (initFn && initFn())
    //         stop()
    //         toggleLoading(false)
    //     }
    //     else {
    //         log('未发现监听数据, 跳过初始化函数')
    //     }
    // })

    onBeforeUnmount(() => {
        scope.stop()
        log('停止监听')
    })

    return {
        scope,
        loading,
    }
}
