<template>
    <div v-loading="loading" class="global-wrap index-wrap">
        <OtherTopBanner title="产品展示" intro="这是一段描述文字，可以自定义你想要的文字" :img="topBannerImg"></OtherTopBanner>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div flex-auto max-w-1293px text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » 产品展示</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="sidebar" w-320px>
                    <HomeCategory :category-id="category"></HomeCategory>
                    <el-affix :offset="104">
                        <HomeRecommend></HomeRecommend>
                        <NewsRecommend></NewsRecommend>
                    </el-affix>
                </div>
                <div class="main" w-1px ml-24px flex="auto">
                    <el-skeleton
                        flex="~ wrap justify-between"
                        :loading="loading"
                        animated
                        :count="9"
                    >
                        <template #template>
                            <div w="[calc((100%-48px)/3)]" bg="hex-fff" mb-24px>
                                <el-skeleton-item variant="image" class="!w-full !h-200px" />
                                <div p-14px>
                                    <el-skeleton-item variant="text" class="w-1/2 !h-44px" />
                                    <div flex items-center justify-items-between mt-16px h-29px>
                                        <el-skeleton-item variant="text" class="!w-30% !h-29px mr-16px" />
                                        <el-skeleton-item variant="text" class="!w-30% !h-29px mr-16px" />
                                        <el-skeleton-item variant="text" class="!w-30% !h-29px" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <ul class="home-ul" flex="~ wrap justify-between">
                                <li
                                    v-for="(item, index) in data1.list" :key="index"
                                    w="[calc((100%-48px)/3)]" mb-24px bg="hex-fff"
                                >
                                    <router-link :to="`/home/detail?id=${item.id}`" relative block pt="2/3" b-rd-6px overflow-hidden>
                                        <img
                                            :alt="item.title"
                                            :src="item.imgUrl"
                                            absolute top-0 left-0 w="full" h="full"
                                            object-cover scale="100" transition="all duration-.3s"
                                        >
                                    </router-link>
                                    <div p="24px t-16px">
                                        <router-link to="/">
                                            <h2 text="15px center" lh-22px font-700 line-2>{{ item.title }}</h2>
                                        </router-link>
                                        <div max-h-26px mt-12px overflow-hidden text-center lh-21px>
                                            <router-link
                                                v-for="(sub_item, sub_index) in item.tag" :key="sub_index"
                                                inline-block mr-8px p="x-8px y-4px" b-rd-4px bg="hex-f3f5f7" un-text="hex-8a8a8a 12px"
                                                :to="`/?tag=${sub_item}`" rel="tag"
                                            >
                                                {{ sub_item }}
                                            </router-link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="page" flex="~ justify-center" mb-24px>
                                <el-pagination background layout="prev, pager, next" :total="data1.total" :page-size="pageSize" @current-change="currentChange" />
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InitType, ProductsListType } from './home.types'
import { isEmpty } from '@lincy/utils'
import topBannerImg from '@/assets/images/home/page-banner.jpg'

defineOptions({
    name: 'RouterHome',
})

useHead({
    title: 'MMF小屋-产品展示',
})

const { ctx } = useGlobal()

let page = $ref<number>(1)
const pageSize = $ref<number>(12)

let data1 = $ref<ProductsListType>(productListStore)

const navigation = ref<HTMLElement>()

const route = useRoute()

async function getData() {
    const { code, data } = await $api.get<ProductsListType>('/home/getList', { page, pageSize, ...route.query })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(productListStore.value), data)) {
        data1 = data
        productListStore.value = data
    }
}

const [loading, toggleLoading] = useToggle(false)

async function init(action: InitType = 'init') {
    const { stop } = useTimeoutFn(() => toggleLoading(true), 300)
    if (action === 'watch' || action === 'change-page') {
        scrollToNav(navigation, -80)
    }
    if (action === 'watch') {
        page = 1
    }
    await Promise.all([getData()])
    stop()
    toggleLoading(false)
}

async function currentChange(newPage: number) {
    page = newPage
    init('change-page')
}

const category = $(useRouteQuery<number>('category'))
const tag = $(useRouteQuery<string>('tag'))

const fullData = computed(() => {
    return {
        category,
        tag,
    }
})

emitter.on('change-category', (newCategoryId) => {
    console.log('%c[newCategoryId] >> ', 'color: red', newCategoryId)
})

onUnmounted(() => {
    emitter.off('change-category')
})

useDataIsLoaded({
    fullData,
    dataHasError: false,
    init,
    initError: () => {},
})

useSaveScroll()

ctx.$notify.success('This is a success message.')
</script>
