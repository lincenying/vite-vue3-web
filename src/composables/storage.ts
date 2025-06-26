import type { CommentType } from '~/components/other/comments.types'
import type { ListType } from '~/types'
import type { CasesType } from '~/views/cases.types'
import type { FaqsType } from '~/views/faqs.types'
import type { ProductsType } from '~/views/home.types'
import type { NewsType } from '~/views/news.types'

export function defaultList() {
    return {
        list: [],
        total: 0,
        hasPrev: 0,
        hasNext: 0,
        pageSize: 12,
        currPage: 1,
        totalPage: 0,
    }
}

export const userStorage = useStorage<Nullable<UserState>>('user-info', { token: '', info: {} })

export const productListStore = useStorage<ListType<ProductsType>>('product-list', defaultList())
export const productDetailStore = useStorage<NewsType>('product-detail', {} as NewsType)

export const casesListStore = useStorage<ListType<CasesType>>('cases-list', defaultList())
export const casesDetailStore = useStorage<CasesType>('cases-detail', {} as CasesType)

export const newsListStore = useStorage<ListType<NewsType>>('news-list', defaultList())
export const newsDetailStore = useStorage<NewsType>('news-detail', {} as NewsType)

export const faqsListStore = useStorage<ListType<FaqsType>>('faqs-list', defaultList())
export const faqsDetailStore = useStorage<FaqsType>('faqs-detail', {} as FaqsType)

export const productCommentStore = useStorage<CommentType>('product-comment-list', defaultList())
export const caseCommentStore = useStorage<CommentType>('case-comment-list', defaultList())
export const newsCommentStore = useStorage<CommentType>('news-comment-list', defaultList())
export const faqCommentStore = useStorage<CommentType>('faq-comment-list', defaultList())

export const commentStore = {
    product: productCommentStore,
    case: caseCommentStore,
    news: newsCommentStore,
    faq: faqCommentStore,
}
