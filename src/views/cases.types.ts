export interface CasesType {
    id: string
    imgUrl: string
    title: string
    date: string
    intro: string
}

export interface CasesListType {
    list: CasesType[]
    total: number
    hasNext: number
    pageSize: number
    currPage: number
}
