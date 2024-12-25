export interface NewsType {
    id: number
    title: string
    date: string
    intro: string
}

export interface NewsListType {
    list: NewsType[]
    total: number
    hasNext: number
    pageSize: number
    currPage: number
}
