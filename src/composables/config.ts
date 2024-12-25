import type { CasesListType } from '~/views/cases.types'
import type { FaqsListType } from '~/views/faqs.types'
import type { ProductListType } from '~/views/home.types'
import type { NewsListType } from '~/views/news.types'
import { StorageSerializers } from '@vueuse/core'

export const userToken = useStorage('user-token', '')

export const productListStore = useStorage<ProductListType>('product-list', null, undefined, { serializer: StorageSerializers.object })
export const casesListStore = useStorage<CasesListType>('cases-list', null, undefined, { serializer: StorageSerializers.object })
export const newsListStore = useStorage<NewsListType>('news-list', null, undefined, { serializer: StorageSerializers.object })
export const faqsListStore = useStorage<FaqsListType>('faqs-list', null, undefined, { serializer: StorageSerializers.object })
