export interface FaqsType {
    id: number
    title: string
    date: string
    intro: string
}

export interface FaqsListType {
    list: FaqsType[]
    total: number
    hasNext: number
    pageSize: number
    currPage: number
}
