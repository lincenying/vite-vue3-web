export interface ProductsType {
    id: string
    imgUrl: string
    title: string
    date: string
    category: string
    category_id: number
    tag: string[]
}

export interface ProductsListType {
    list: ProductsType[]
    total: number
    hasNext: number
    pageSize: number
    currPage: number
}
