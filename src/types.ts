import type { AnyFn, MaybeRef } from '@vueuse/core'

export type RefOrComputedRef<T> = Ref<T> | ComputedRef<T>

export interface LoadedType<T, E> {
    fullData?: MaybeRef<T>
    dataHasError?: MaybeRef<E>
    init: AnyFn
    initError?: AnyFn
}
