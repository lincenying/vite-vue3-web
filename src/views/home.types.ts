/**
 * init: 初始化时
 * watch: 监听时
 * change-page: 切换页码时
 */
export type InitType = 'init' | 'watch' | 'change-page'

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
