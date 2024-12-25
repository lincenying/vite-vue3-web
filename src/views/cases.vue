<template>
    <div class="global-wrap cases-wrap">
        <div class="banner-wrap" relative>
            <img src="@/assets/images/home/page-banner.jpg" max-w-full alt="">
            <div class="banner-content" flex="~ col items-center" absolute top="50%" left="50%" translate="[-50%,-50%]">
                <h3 text="hex-fff 27px" tracking-2px>案例展示</h3>
                <p mt-16px text="hex-fff 15px" tracking-1px>这是一段描述文字，可以自定义你想要的文字</p>
            </div>
        </div>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div max-w-1293px flex-auto text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » 案例展示</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="sidebar" w-320px>
                    <HomeRecommend></HomeRecommend>
                    <NewsRecommend></NewsRecommend>
                </div>
                <div class="main" w-1px ml-24px flex="auto">
                    <ul class="cases-ul">
                        <li v-for="(item, index) in data1.list" :key="index" b-rd-6px flex="~ wrap items-center" p-24px overflow-hidden mb-24px bg="hex-fff">
                            <router-link b-rd-4px flex="[0_0_300px]" h-200px mr-24px overflow-hidden :to="`/cases/detail?id=${item.id}`">
                                <img
                                    :alt="item.title"
                                    :src="item.imgUrl"
                                    w="full" h="full" object-cover scale="100" transition="all duration-.3s"
                                >
                            </router-link>
                            <div flex-1>
                                <router-link :to="`/cases/detail?id=${item.id}`"><h2 text-18px line-1>{{ item.title }}</h2></router-link>
                                <p mt-16px text="hex-8a8a8a 14px" lh-20px line-4>
                                    {{ item.intro }}
                                </p>
                                <router-link block mt-24px un-text="hex-007bff" :to="`/cases/detail?id=${item.id}`">了解更多 →</router-link>
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
import type { CasesListType } from './cases.types'
import { isEmpty } from '@lincy/utils'

defineOptions({
    name: 'RouterCases',
})

useHead({
    title: 'MMF小屋-应用迁移',
})

const __name__ = 'RouterCases'
const { options: _ } = useGlobal(__name__)

let page = $ref<number>(1)
const pageSize = $ref<number>(12)

let data1 = $ref<CasesListType>(casesListStore)

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
    const { code, data } = await $api.get<CasesListType>('/cases/getList', { page, pageSize })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(casesListStore.value), data)) {
        data1 = data
        casesListStore.value = data
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
