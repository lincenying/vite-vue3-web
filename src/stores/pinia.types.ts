import type { EchartsData, LeftBottom, TestBox6, TestSvg1, TextBox1 } from '@/views/home.types'

export interface GlobalState {
    globalLoading: boolean
    routerLoading: boolean
    ISDEV: boolean
    ISPRE: boolean
    ISPROD: boolean

}
export interface PiniaRoot {
    data1: Nullable<LeftBottom>
    data2: Nullable<TextBox1[]>
    data3: Nullable<TextBox1[]>
    data4: Nullable<TestBox6>
    data5: Nullable<TestSvg1>
    data6: Nullable<EchartsData>
}
