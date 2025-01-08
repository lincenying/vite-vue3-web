import type { CasesListType } from '~/views/cases.types'
import type { FaqsListType } from '~/views/faqs.types'
import type { ProductsListType } from '~/views/home.types'
import type { NewsListType, NewsType } from '~/views/news.types'
import { StorageSerializers } from '@vueuse/core'

export const userStorage = useStorage<Nullable<UserState>>('__user__', null, undefined, { serializer: StorageSerializers.object })

export const productListStore = useStorage<ProductsListType>('product-list', null, undefined, { serializer: StorageSerializers.object })
export const casesListStore = useStorage<CasesListType>('cases-list', null, undefined, { serializer: StorageSerializers.object })
export const newsListStore = useStorage<NewsListType>('news-list', null, undefined, { serializer: StorageSerializers.object })
export const newsDetailStore = useStorage<NewsType>('news-detail', null, undefined, { serializer: StorageSerializers.object })
export const faqsListStore = useStorage<FaqsListType>('faqs-list', null, undefined, { serializer: StorageSerializers.object })
