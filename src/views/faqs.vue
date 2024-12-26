<template>
    <div class="global-wrap faqs-wrap">
        <OtherTopBanner title="常见问题" intro="这是一段描述文字，可以自定义你想要的文字" :img="topBannerImg"></OtherTopBanner>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div flex-auto max-w-1293px text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » 常见问题</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="main" flex="auto" w-1px>
                    <ul flex="~ wrap justify-between">
                        <li
                            v-for="(item, index) in data1.list" :key="index"
                            w="[calc((100%-24px)/2)]" mb-24px p-24px b-rd-6px transition="all duration-.3s" bg="hex-fff"
                        >
                            <router-link :to="`/faqs/detail?id=${item.id}`">
                                <h2 class="faqs-q" relative min-h-24px mb-16px pl-36px text-18px line-2>{{ item.title }}</h2>
                            </router-link>
                            <p class="faqs-a" relative pl-36px text="hex-8a8a8a 14px justify" lh-21px line-4>{{ item.intro }}</p>
                        </li>
                    </ul>
                    <div class="page" flex="~ justify-center" mb-24px>
                        <el-pagination background layout="prev, pager, next" :total="data1.total" :page-size="pageSize" @current-change="currentChange" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FaqsListType } from './faqs.types'
import { isEmpty } from '@lincy/utils'
import topBannerImg from '@/assets/images/home/page-banner.jpg'

defineOptions({
    name: 'RouterFaqs',
})

useHead({
    title: 'MMF小屋-常见问题',
})

let page = $ref<number>(1)
const pageSize = $ref<number>(12)

let data1 = $ref<FaqsListType>(faqsListStore)

const navigation = ref<HTMLElement>()
function scrollToNav() {
    let top = navigation.value?.getBoundingClientRect().top
    if (top !== undefined) {
        top += window.scrollY - 80
    }
    window.scrollTo({ top: top || 0, behavior: 'smooth' })
}

const route = useRoute()

async function getData() {
    const { code, data } = await $api.get<FaqsListType>('/faqs/getList', { page, pageSize, ...route.query })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(faqsListStore.value), data)) {
        data1 = data
        faqsListStore.value = data
    }
}

async function currentChange(newPage: number) {
    page = newPage
    await getData()
    scrollToNav()
}

watch([
    () => route.query.category,
    () => route.query.tag,
], () => {
    page = 1
    getData()
    scrollToNav()
}, {
    immediate: true,
})

useSaveScroll()
</script>
