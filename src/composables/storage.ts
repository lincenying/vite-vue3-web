import type { CasesListType } from '~/views/cases.types'
import type { FaqsListType } from '~/views/faqs.types'
import type { ProductsListType } from '~/views/home.types'
import type { NewsListType, NewsType } from '~/views/news.types'

export function defaultList() {
    return {
        list: [],
        total: 0,
        hasNext: 0,
        pageSize: 12,
        currPage: 1,
    }
}

export const userStorage = useStorage<Nullable<UserState>>('user-info', { token: '', info: {} })

export const productListStore = useStorage<ProductsListType>('product-list', defaultList())
export const productDetailStore = useStorage<NewsType>('product-detail', {} as NewsType)

export const casesListStore = useStorage<CasesListType>('cases-list', defaultList())
export const casesDetailStore = useStorage<NewsType>('cases-detail', {} as NewsType)

export const newsListStore = useStorage<NewsListType>('news-list', defaultList())
export const newsDetailStore = useStorage<NewsType>('news-detail', {} as NewsType)

export const faqsListStore = useStorage<FaqsListType>('faqs-list', defaultList())
export const faqsDetailStore = useStorage<NewsType>('faqs-detail', {} as NewsType)
