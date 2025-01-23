import type { AnyFn } from '@vueuse/core'
import type { LoadedType } from '@/types'
import { isInt } from '@lincy/utils'
import ls from 'store2'

export function useGlobal(key?: string) {
    let ins = getCurrentInstance()!
    if (key) {
        if (!ins) {
            ins = (window as any)[`$$${key}`] || {}
        }

        else {
            (window as any)[`$$${key}`] = ins
        }
    }

    const ctx = ins.appContext.config.globalProperties
    const options = ins.type

    return {
        ctx,
        options,
    }
}

/**
 * 竞态锁
 * @param fn 回调函数
 * @param autoUnlock 是否自动解锁
 * @description
 * ```
 * autoUnlock === true 不管 fn 返回什么, 都自动解锁
 * autoUnlock === false 不管 fn 返回什么, 都不自动解锁
 * autoUnlock === 'auto' 当 fn 返回 false 时, 不自动解锁, 返回其他值时, 自动解锁
 * ```
 * @example
 * ```
 * const Fn = useLockFn(async (key) => {
 *  console.log(key)
 * }
 *
 * <div v-on:click="Fn(123)"></div>
 * ```
 */
export function useLockFn(fn: AnyFn, autoUnlock: boolean | 'auto' = 'auto') {
    const lock = ref(false)
    return async (...args: any[]) => {
        if (lock.value) {
            return
        }
        lock.value = true
        try {
            const $return: any = await fn(...args)
            if (autoUnlock === true || (autoUnlock === 'auto' && $return !== false)) {
                lock.value = false
            }
        }
        catch (e) {
            lock.value = false
            throw e
        }
    }
}

export function useAutoRefresh(fn: AnyFn, timer: number) {
    const ins = getCurrentInstance()!
    const options = ins.type
    const log = (text: string, color = 'blue') => {
        const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
        console.log(`%c[${options.name}]  >> `, `color: ${color}`, `${text} <<-- (${formatted.value})`)
    }

    if (!timer) {
        return null
    }
    if (!isInt(timer)) {
        console.warn(`[${options.name}]  >> 定时器配置必须为数值型`)
        return null
    }
    log(`定时器计时开始: ${timer}秒`)
    const $$timer = useTimeoutFn(async () => {
        log('定时器计时结束, 开始刷新数据')
        await fn()
        log(`定时器计时开始: ${timer}秒`)
        $$timer.start()
    }, timer * 1000)

    const visibility = useDocumentVisibility()
    const stopWatch = watch(visibility, (current, previous) => {
        if (current === 'visible' && previous === 'hidden') {
            log(`定时器计时开始: ${timer}秒`)
            $$timer.stop()
            $$timer.start()
        }
        else {
            log('定时器已清理')
            $$timer.stop()
        }
    })

    onUnmounted(() => {
        if ($$timer) {
            log('定时器已清理')
            $$timer.stop()
        }
        if (stopWatch) {
            stopWatch()
        }
    })
    return $$timer
}

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

    const { watchData, dataHasError, initFn, errorFn } = payload

    const [loading, toggleLoading] = useToggle(false)

    if (typeof watchData === 'undefined' && initFn) {
        onMounted(async () => {
            const { stop } = useTimeoutFn(() => toggleLoading(true), 300)
            log('未发现监听数据, 直接执行初始化函数')
            await (initFn && initFn())
            stop()
            toggleLoading(false)
        })
    }
    if (typeof watchData === 'undefined' || typeof dataHasError === 'undefined') {
        return {
            scope: () => {},
            loading: false,
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

    onMounted(async () => {
        if (resolveUnref(watchData)) {
            const { stop } = useTimeoutFn(() => toggleLoading(true), 300)
            log('发现监听数据, 执行初始化函数')
            await (initFn && initFn())
            stop()
            toggleLoading(false)
        }
        else {
            log('未发现监听数据, 跳过初始化函数')
        }
    })

    onBeforeUnmount(() => {
        scope.stop()
        log('停止监听')
    })

    return {
        scope,
        loading,
    }
}

/**
 * 保存和恢复滚动位置的钩子函数
 *
 * 该函数在组件挂载时恢复滚动位置，并在路由离开时保存滚动位置。
 */
export function useSaveScroll() {
    const route = useRoute()

    onMounted(() => {
        // 从本地存储中获取当前路由的滚动位置，如果没有则默认为0
        const scrollTop = ls.get(route.fullPath) || 0
        // 将页面滚动到获取到的滚动位置
        window.scrollTo({ top: scrollTop || 0, behavior: 'smooth' })
        // 从本地存储中移除当前路由的滚动位置
        ls.remove(route.fullPath)
    })

    onBeforeRouteLeave((_to, from, next) => {
        // 将当前页面的滚动位置保存到本地存储中
        ls.set(from.fullPath, window.scrollY || 0)
        // 调用路由导航函数
        next()
    })
}

/**
 * 滚动到导航元素的位置
 *
 * 该函数用于平滑滚动页面，使指定的导航元素滚动到可视区域的顶部，并可进行额外的位置调整。
 *
 * @param {Ref<HTMLElement | undefined>} navigation - 一个响应式引用，指向要滚动到的导航元素
 * @param {number} [adjust] - 可选参数，用于调整滚动位置的偏移量
 * @returns {void}
 */
export function scrollToNav(navigation: Ref<HTMLElement | undefined>, adjust: number = 0) {
    // 获取导航元素相对于视口的顶部位置
    let top = navigation.value?.getBoundingClientRect().top
    // 如果导航元素存在
    if (top !== undefined) {
        // 计算最终的滚动位置，包括当前的垂直滚动位置和额外的调整值
        top += window.scrollY + adjust
    }
    // 平滑滚动到计算出的位置
    window.scrollTo({ top: top || 0, behavior: 'smooth' })
}

/**
 * 滚动到评论的位置
 *
 * 该函数用于平滑滚动页面，使指定的导航元素滚动到可视区域的顶部，并可进行额外的位置调整。
 *
 * @param {Ref<HTMLElement | undefined>} commentBox - 一个响应式引用，指向要滚动到的导航元素
 * @param {number} [adjust] - 可选参数，用于调整滚动位置的偏移量
 * @returns {void}
 */
export function scrollToComment(commentBox: Ref<HTMLElement | undefined>, adjust: number = 0) {
    // 获取导航元素相对于视口的顶部位置
    let top = commentBox.value?.getBoundingClientRect().top
    // 如果导航元素存在
    if (top !== undefined) {
        // 计算最终的滚动位置，包括当前的垂直滚动位置和额外的调整值
        top += window.scrollY + adjust
    }
    // 平滑滚动到计算出的位置
    window.scrollTo({ top: top || 0, behavior: 'smooth' })
}
