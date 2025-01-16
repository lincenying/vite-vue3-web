import type { ProductCategory, ProductState } from './pinia.types'
import { isEmpty } from '@lincy/utils'
import { StorageSerializers } from '@vueuse/core'
import { acceptHMRUpdate } from 'pinia'

const lsKey = 'product-'

let ls1 = $(useStorage<ProductState['category']>(`${lsKey}category`, null, localStorage, { serializer: StorageSerializers.object }))

const usePiniaStore = defineStore('productStore', () => {
    const state: ProductState = reactive({
        category: [],
    })

    const setCtegory = (payload: ProductCategory[]) => {
        state.category = payload
    }

    const getCtegory = async () => {
        const { code, data } = await $api.get<ProductState['category']>('/home/getCategory', { })
        if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(ls1), data)) {
            ls1 = data
            state.category = data
        }
    }

    return {
        ...toRefs(state),
        getCtegory,
        setCtegory,
    }
})
export default usePiniaStore
export const productStoreWithout = () => usePiniaStore(piniaInit)

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePiniaStore, import.meta.hot))
}
