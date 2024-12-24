<template>
    <div class="global-box" w="full" p-24px mb-24px bg="hex-fff" border-rd-6px>
        <div class="global-box-title" text="1rem hex-202935" font-bold m="0 b-24px" pl-16px b-l="6px bolid hex-007bff">产品推荐</div>
        <div class="global-box-content">
            <ul mt--16px flex="~ wrap justify-between">
                <li v-for="(item, index) in data1" :key="index" w-128px mt-16px>
                    <router-link :to="`/home/detail?id=${item.id}`" block>
                        <div mb-4px b-rd-4px overflow-hidden w-full h-86px pos-relative>
                            <img
                                :src="item.imgUrl" :alt="item.title"
                                w-full transition="all duration-.3s" hover="scale-110"
                            >
                        </div>
                        <h3 text="14px" line-2 lh-20px>{{ item.title }}</h3>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { isEmpty } from '@lincy/utils'

defineOptions({
    name: 'ProductRecommend',
})

const __name__ = 'product-recommend'
const { options: _ } = useGlobal(__name__)

interface DataType {
    id: string
    title: string
    imgUrl: string
}

let ls = $(useStorage<DataType[]>('product-recommend', []))
let data1 = $ref<DataType[]>(ls)

async function getData() {
    const { code, data } = await $api.get<DataType[]>('/home/getRecommend', { })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(ls), data)) {
        data1 = data
        ls = data
        console.log(data1)
    }
}

getData()
</script>
