export interface GlobalState {
    globalLoading: boolean
    routerLoading: boolean
    ISDEV: boolean
    ISPRE: boolean
    ISPROD: boolean
}

export interface ProductCategory {
    id: number
    title: string
}

export interface ProductState {
    category: ProductCategory[]
}

export interface UserState {
    token: string
    info: Objable
}
