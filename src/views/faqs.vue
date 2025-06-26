<template>
    <div v-loading="loading" class="global-wrap faqs-wrap">
        <OtherTopBanner title="常见问题" intro="这是一段描述文字，可以自定义你想要的文字" :img="topBannerImg"></OtherTopBanner>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div flex-auto max-w-1293px text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » 常见问题</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="main" flex="auto" w-1px>
                    <el-skeleton
                        flex="~ wrap justify-between"
                        :loading="loading"
                        animated
                        :count="9"
                    >
                        <template #template>
                            <div w="[calc((100%-24px)/2)]" bg="hex-fff" mb-24px>
                                <el-skeleton-item variant="text" class="!w-1/2 !h-44px" />
                                <el-skeleton-item variant="text" class="!w-80% !h-21px" />
                                <el-skeleton-item variant="text" class="!w-80% !h-21px" />
                                <el-skeleton-item variant="text" class="!w-80% !h-21px" />
                                <el-skeleton-item variant="text" class="!w-80% !h-21px" />
                            </div>
                        </template>
                        <template #default>
                            <ul flex="~ wrap justify-between">
                                <li
                                    v-for="(item, index) in faqLists.list" :key="index"
                                    w="[calc((100%-24px)/2)]" mb-24px p-24px b-rd-6px transition="all duration-.3s" bg="hex-fff"
                                >
                                    <router-link :to="`/faqs/detail?id=${item.id}`">
                                        <h2 class="faqs-q" relative min-h-24px mb-16px pl-36px text-18px line-2>{{ item.title }}</h2>
                                    </router-link>
                                    <p class="faqs-a" relative pl-36px text="hex-8a8a8a 14px justify" lh-21px line-4>{{ item.intro }}</p>
                                </li>
                            </ul>
                            <div v-if="faqLists.total > pageSize" class="page" flex="~ justify-center" mb-24px>
                                <el-pagination background layout="prev, pager, next" :total="faqLists.total" :page-size="pageSize" @current-change="currentChange" />
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FaqsType } from './faqs.types'
import type { InitType } from './home.types'
import type { ListType } from '~/types'
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
const category = $(useRouteQuery<number>('category'))
const tag = $(useRouteQuery<string>('tag'))

let faqLists = $ref<ListType<FaqsType>>(faqsListStore)
async function getData() {
    const { code, data } = await $api.get<ListType<FaqsType>>('/faqs/getList', { page, pageSize, category, tag })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(faqsListStore.value), data)) {
        faqLists = data
        faqsListStore.value = data
    }
}

const navigation = ref<HTMLElement>()
async function initFn(action: InitType = 'init-data') {
    if (action === 'change-data' || action === 'change-page') {
        scrollToNav(navigation, -80)
    }
    if (action === 'change-data') {
        page = 1
    }
    await Promise.all([getData()])
}

const watchData = computed(() => ({ category, tag }))
const { loading } = useFetchData({
    watchData,
    dataHasError: false,
    initFn,
    errorFn: () => {},
    immediate: true,
})

async function currentChange(newPage: number) {
    page = newPage
    initFn('change-page')
}

useSaveScroll()
</script>
