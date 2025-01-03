<template>
    <div class="global-box" w="full" mb-24px p-24px bg="hex-fff" b-rd-6px>
        <div class="global-box-title" m="0 b-24px" pl-16px text="1rem hex-202935" font-bold b-l="6px bolid hex-007bff">相关推荐</div>
        <div class="global-box-content">
            <ul flex="~ wrap justify-between" mb--24px>
                <template v-if="column === 'products'">
                    <li v-for="(item, index) in productsRelatedRecom" :key="index" w="[calc((100%-24px)/2)]" mb-24px>
                        <router-link relative flex="~ items-center" :to="`/home/detail?id=${item.id}`">
                            <i class="i-carbon-dot-mark" mr-5px></i>
                            <h3 text="14px" line-1>{{ item.title }}</h3>
                        </router-link>
                    </li>
                </template>
                <template v-if="column === 'cases'">
                    <li v-for="(item, index) in casesRelatedRecom" :key="index" w="[calc((100%-24px)/2)]" mb-24px>
                        <router-link relative flex="~ items-center" :to="`/cases/detail?id=${item.id}`">
                            <i class="i-carbon-dot-mark" mr-5px></i>
                            <h3 text="14px" line-1>{{ item.title }}</h3>
                        </router-link>
                    </li>
                </template>
                <template v-if="column === 'news'">
                    <li v-for="(item, index) in newsRelatedRecom" :key="index" w="[calc((100%-24px)/2)]" mb-24px>
                        <router-link relative flex="~ items-center" :to="`/news/detail?id=${item.id}`">
                            <i class="i-carbon-dot-mark" mr-5px></i>
                            <h3 text="14px" line-1>{{ item.title }}</h3>
                        </router-link>
                    </li>
                </template>
                <template v-if="column === 'faqs'">
                    <li v-for="(item, index) in faqsRelatedRecom" :key="index" w="[calc((100%-24px)/2)]" mb-24px>
                        <router-link relative flex="~ items-center" :to="`/faqs/detail?id=${item.id}`">
                            <i class="i-carbon-dot-mark" mr-5px></i>
                            <h3 text="14px" line-1>{{ item.title }}</h3>
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CasesType } from '~/views/cases.types'
import type { FaqsType } from '~/views/faqs.types'
import type { ProductsType } from '~/views/home.types'
import type { NewsType } from '~/views/news.types'
import { isEmpty } from '@lincy/utils'

defineOptions({
    name: 'RelatedRecom',
})

const { column, categoryId } = defineProps<{
    column: string
    categoryId?: number
}>()

const productsRelatedRecom = ref<ProductsType[]>([])
const casesRelatedRecom = ref<CasesType[]>([])
const newsRelatedRecom = ref<NewsType[]>([])
const faqsRelatedRecom = ref<FaqsType[]>([])

async function getProductsRelatedRecom() {
    const { code, data } = await $api.get<ProductsType[]>(`/home/relatedRecom?categoryId=${categoryId}`, { })
    if (code === 200 && !isEmpty(data)) {
        productsRelatedRecom.value = data
    }
}
async function getCasesRelatedRecom() {
    const { code, data } = await $api.get<CasesType[]>('/cases/relatedRecom', { })
    if (code === 200 && !isEmpty(data)) {
        casesRelatedRecom.value = data
    }
}
async function getNewsRelatedRecom() {
    const { code, data } = await $api.get<NewsType[]>('/news/relatedRecom', { })
    if (code === 200 && !isEmpty(data)) {
        newsRelatedRecom.value = data
    }
}
async function getFaqsRelatedRecom() {
    const { code, data } = await $api.get<FaqsType[]>('/faqs/relatedRecom', { })
    if (code === 200 && !isEmpty(data)) {
        faqsRelatedRecom.value = data
    }
}

if (column === 'products') {
    getProductsRelatedRecom()
}
else if (column === 'cases') {
    getCasesRelatedRecom()
}
else if (column === 'news') {
    getNewsRelatedRecom()
}
else if (column === 'faqs') {
    getFaqsRelatedRecom()
}
</script>
