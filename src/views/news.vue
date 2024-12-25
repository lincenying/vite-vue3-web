<template>
    <div class="global-wrap news-wrap">
        <div class="banner-wrap" relative>
            <img src="@/assets/images/home/page-banner.jpg" max-w-full alt="">
            <div class="banner-content" flex="~ col items-center" absolute top="50%" left="50%" translate="[-50%,-50%]">
                <h3 text="hex-fff 27px" tracking-2px>新闻中心</h3>
                <p mt-16px text="hex-fff 15px" tracking-1px>这是一段描述文字，可以自定义你想要的文字</p>
            </div>
        </div>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div max-w-1293px flex-auto text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » 新闻中心</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="sidebar" w-320px>
                    <HomeRecommend></HomeRecommend>
                    <NewsRecommend></NewsRecommend>
                </div>
                <div class="main" w-1px ml-24px flex="auto">
                    <ul>
                        <li
                            v-for="(item, index) in data1.list" :key="index"
                            mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s"
                        >
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>{{ UTC2Date(item.date, 'dd') }}</span>{{ UTC2Date(item.date, 'yyyy-mm') }}
                            </div>
                            <div flex-1>
                                <router-link :to="`/news/detail?id=${item.id}`"><h2 text="18px" lh-26px>{{ item.title }}</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>{{ item.intro }}</p>
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
import type { NewsListType } from './news.types'
import { isEmpty, UTC2Date } from '@lincy/utils'

defineOptions({
    name: 'RouterNews',
})

useHead({
    title: 'MMF小屋-应用开发',
})

const __name__ = 'RouterNews'
const { options: _ } = useGlobal(__name__)

let page = $ref<number>(1)
const pageSize = $ref<number>(12)

let data1 = $ref<NewsListType>(newsListStore)

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
    const { code, data } = await $api.get<NewsListType>('/news/getList', { page, pageSize })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(newsListStore.value), data)) {
        data1 = data
        newsListStore.value = data
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
