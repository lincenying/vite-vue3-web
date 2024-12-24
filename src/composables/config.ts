import type { ProductListType } from '~/views/home.types'
import { StorageSerializers } from '@vueuse/core'

export const userToken = useStorage('user-token', '')

export const productListStore = useStorage<ProductListType>('product-list', null, undefined, { serializer: StorageSerializers.object })
