import type { AnyFn, MaybeRef } from '@vueuse/core'

export type RefOrComputedRef<T> = Ref<T> | ComputedRef<T>

export interface LoadedType<T, E> {
    watchData?: MaybeRef<T>
    dataHasError?: MaybeRef<E>
    initFn: AnyFn
    errorFn?: AnyFn
}
