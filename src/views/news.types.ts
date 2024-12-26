export interface NewsType {
    id: number
    title: string
    author: string
    date: string
    category: string
    category_id: number
    intro: string
    content: string
    imgUrl: string
    views: number
}

export interface NewsListType {
    list: NewsType[]
    total: number
    hasNext: number
    pageSize: number
    currPage: number
}
