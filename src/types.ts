import type { AnyFn, MaybeRef } from '@vueuse/core'

export type RefOrComputedRef<T> = Ref<T> | ComputedRef<T>

export interface LoadedType<T, E> {
    /** 观察数据 */
    watchData?: MaybeRef<T>
    /** 父级数据是否报错 */
    dataHasError?: MaybeRef<E>
    /** 初始化函数 */
    initFn: AnyFn
    /** 错误处理函数 */
    errorFn?: AnyFn
    /**
     * 当有观察数据时, 是否立即执行初始化函数
     * (观察数据变化才执行初始化函数时, 设置为false, 默认要执行初始化函数时, 设置为true)
     */
    immediate?: boolean
}
