<template>
    <div v-loading="loading" class="global-wrap index-wrap">
        <OtherTopBanner title="案例展示" intro="这是一段描述文字，可以自定义你想要的文字" :img="topBannerImg"></OtherTopBanner>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div max-w-1293px flex-auto text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » <router-link to="/cases">案例展示</router-link> » 案例详情</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="sidebar" w-320px>
                    <el-affix :offset="104">
                        <HomeRecommend></HomeRecommend>
                        <NewsRecommend></NewsRecommend>
                    </el-affix>
                </div>
                <div class="main" w-1px ml-24px flex="auto">
                    <el-skeleton :loading="loading" animated>
                        <template #template>
                            <div bg="hex-fff" mb-24px p-32px>
                                <div flex="~ items-center col">
                                    <el-skeleton-item variant="text" class="!w-1/2 !h-44px" />
                                    <el-skeleton-item variant="text" class="!w-50% !h-21px mt-16px" />
                                </div>
                                <div v-for="i in 6" :key="i" mt-21px>
                                    <el-skeleton-item variant="text" class="!h-21px ml-32px !w-80%" />
                                    <el-skeleton-item v-for="item in 4" :key="`${i}-${item}`" variant="text" class="!h-21px mt-6px" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div v-if="caseDetail" b-rd-6px mb-24px p-32px bg="hex-fff">
                                <h1 font-bold text="center hex-202935 28px">{{ caseDetail.title }}</h1>
                                <div flex="~ justify-center items-center" mt-16px text="hex-8a8a8a">
                                    <i class="i-carbon-user-avatar" w-14px h-14px mr-5px></i>
                                    <span mr-20px>{{ caseDetail.author }}</span>
                                    <i class="i-carbon-time" w-14px h-14px mr-5px></i>
                                    <span mr-20px>{{ caseDetail.date }}</span>
                                    <i class="i-carbon-collapse-categories" w-14px h-14px mr-5px></i>
                                    <span mr-20px>{{ caseDetail.category }}</span>
                                    <span>阅读({{ caseDetail.views }})</span>
                                </div>
                                <div class="article-content" pt-24px text="hex-202935 16px" lh-28px v-html="caseDetail.content"></div>
                            </div>
                        </template>
                    </el-skeleton>
                    <OtherRelatedRecom column="cases"></OtherRelatedRecom>
                    <OtherComments :id="caseDetail.id" type="case"></OtherComments>
                    <OtherCommentPost :id="caseDetail.id" type="case"></OtherCommentPost>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InitType } from '../home.types'
import type { NewsType } from '../news.types'
import { isEmpty } from '@lincy/utils'
import topBannerImg from '@/assets/images/home/page-banner.jpg'

defineOptions({
    name: 'RouterCasesDetail',
})

const title = ref('')
useHead({
    title,
})

const id = $(useRouteQuery<string>('id'))

let caseDetail = $ref<NewsType>(casesDetailStore)
async function getData() {
    const { code, data } = await $api.get<NewsType>('/news/detail', { id })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(newsDetailStore.value), data)) {
        caseDetail = data
        title.value = data.title
        newsDetailStore.value = data
    }
}

const navigation = ref<HTMLElement>()
async function initFn(action: InitType = 'init-data') {
    await Promise.all([getData()])
    if (action === 'change-data')
        scrollToNav(navigation, -80)
}

const watchData = computed(() => ({ id }))
const { loading } = useFetchData({
    watchData,
    dataHasError: false,
    initFn,
    errorFn: () => {},
})

useSaveScroll()
</script>
