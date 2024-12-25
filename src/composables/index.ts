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
 * // 不依赖父级组件数据
 * useDataIsLoaded({ init: () => {} })
 * // 依赖父级组件数据 fullData
 * useDataIsLoaded({ fullData, dataHasError, init, initError })
 * ```
 */
export function useDataIsLoaded<T, E>(payload: LoadedType<T, E>) {
    const ins = getCurrentInstance()!
    const options = ins.type

    const log = (text: string, color = 'blue') => {
        const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
        console.log(`%c[${options.name}]  >> `, `color: ${color}`, `${text} <<-- (${formatted.value})`)
    }

    const { fullData, dataHasError, init, initError } = payload

    const scope = effectScope()

    scope.run(() => {
        if (typeof fullData === 'undefined' && init) {
            onMounted(() => {
                log('init in mounted')
                init()
            })
        }
        if (typeof fullData === 'undefined' || typeof dataHasError === 'undefined') {
            return
        }

        log('watch start')
        watch(
            resolveRef(fullData),
            () => {
                log('Parent component data has changed')
                init && init()
            },
            {
                deep: true,
            },
        )
        watch(
            resolveRef(dataHasError),
            () => {
                log('Parent component data has error')
                initError && initError()
            },
        )

        onBeforeUnmount(() => {
            scope.stop()
            log('watch stopped')
        })

        onMounted(() => {
            if (resolveUnref(fullData)) {
                log('Parent component data has been loaded')
                init && init()
            }
            else {
                log('Wait for parent data loading to complete')
            }
        })
    })

    return scope
}

export function useSaveScroll() {
    const route = useRoute()

    onMounted(() => {
        const scrollTop = ls.get(route.fullPath) || 0
        window.scrollTo({ top: scrollTop || 0, behavior: 'smooth' })
        ls.remove(route.fullPath)
    })

    onBeforeRouteLeave((_to, from, next) => {
        ls.set(from.fullPath, window.scrollY || 0)
        next()
    })
}
