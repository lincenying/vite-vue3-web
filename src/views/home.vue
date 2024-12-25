<template>
    <div class="global-wrap index-wrap">
        <div class="banner-wrap" relative>
            <img src="@/assets/images/home/page-banner.jpg" max-w-full alt="">
            <div class="banner-content" flex="~ col items-center" absolute top="50%" left="50%" translate="[-50%,-50%]">
                <h3 text="hex-fff 27px" tracking-2px>产品展示</h3>
                <p mt-16px text="hex-fff 15px" tracking-1px>这是一段描述文字，可以自定义你想要的文字</p>
            </div>
        </div>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div max-w-1293px flex-auto text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » 产品展示</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="sidebar" w-320px>
                    <HomeCategory :category-id="route.query.category as unknown as number"></HomeCategory>
                    <HomeRecommend></HomeRecommend>
                    <NewsRecommend></NewsRecommend>
                </div>
                <div class="main" w-1px ml-24px flex="auto">
                    <ul class="home-ul" flex="~ wrap justify-between">
                        <li v-for="(item, index) in data1.list" :key="index" bg="hex-fff" mb-24px w="[calc((100%-48px)/3)]">
                            <router-link :to="`/home/detail?id=${item.id}`" relative block pt="[66.66%]" overflow-hidden border-rd-6px>
                                <img
                                    :alt="item.title"
                                    :src="item.imgUrl"
                                    absolute top-0 left-0 w="[100%]" h="[100%]" object-cover scale="100" transition="all duration-.3s"
                                >
                            </router-link>
                            <div p="24px t-16px">
                                <router-link to="/">
                                    <h2 text="15px center" lh-22px font-700 line-2>{{ item.title }}</h2>
                                </router-link>
                                <div max-h-26px mt-12px overflow-hidden text-center lh-21px>
                                    <router-link
                                        v-for="(sub_item, sub_index) in item.tag" :key="sub_index"
                                        inline-block mr-8px px-8px py-4px border-rd-4px bg="hex-f3f5f7" un-text="hex-8a8a8a 12px"
                                        :to="`/?tag=${sub_item}`" rel="tag"
                                    >
                                        {{ sub_item }}
                                    </router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="page" mb-24px flex="~ justify-center">
                        <el-pagination background layout="prev, pager, next" :total="data1.total" :page-size="pageSize" @current-change="currentChange" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductListType } from './home.types'
import { isEmpty } from '@lincy/utils'

defineOptions({
    name: 'RouterHome',
})

useHead({
    title: 'MMF小屋-产品展示',
})

const __name__ = 'RouterHome'
const { options: _ } = useGlobal(__name__)

let page = $ref<number>(1)
const pageSize = $ref<number>(12)

let data1 = $ref<ProductListType>(productListStore)

const navigation = ref<HTMLElement>()
function scrollToNav() {
    let top = navigation.value?.getBoundingClientRect().top
    if (top !== undefined) {
        top += window.scrollY - 80
    }
    console.log(top)
    window.scrollTo({ top: top || 0, behavior: 'smooth' })
}

async function getData() {
    const { code, data } = await $api.get<ProductListType>('/home/getList', { page, pageSize })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(productListStore.value), data)) {
        data1 = data
        productListStore.value = data
    }
}

async function currentChange(newPage: number) {
    page = newPage
    await getData()
    scrollToNav()
}

const route = useRoute()

watchEffect(() => {
    if (route.query.category || route.query.tag) {
        getData()
        scrollToNav()
    }
})

getData()
useSaveScroll()
</script>
