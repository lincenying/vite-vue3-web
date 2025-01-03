<template>
    <div class="global-box" w="full" mb-24px p-24px bg="hex-fff" b-rd-6px>
        <div class="global-box-title" m="0 b-24px" pl-16px text="1rem hex-202935" font-bold b-l="6px bolid hex-007bff">产品推荐</div>
        <div class="global-box-content">
            <ul flex="~ wrap justify-between" mt--16px>
                <li v-for="(item, index) in data1" :key="index" w-128px mt-16px>
                    <router-link :to="`/home/detail?id=${item.id}`" block>
                        <div relative w-full h-86px mb-4px b-rd-4px overflow-hidden>
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
import type { ProductsType } from '~/views/home.types'
import { isEmpty } from '@lincy/utils'

defineOptions({
    name: 'ProductRecommend',
})

let ls = $(useStorage<ProductsType[]>('product-recommend', []))
let data1 = $ref<ProductsType[]>(ls)

async function getData() {
    const { code, data } = await $api.get<ProductsType[]>('/home/getRecommend', { })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(ls), data)) {
        data1 = data
        ls = data
    }
}

getData()
</script>
