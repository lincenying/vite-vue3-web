export interface ProductType {
    id: string
    imgUrl: string
    title: string
    date: string
    tag: string[]
}

export interface ProductListType {
    list: ProductType[]
    total: number
    hasNext: number
    pageSize: number
    currPage: number
}
