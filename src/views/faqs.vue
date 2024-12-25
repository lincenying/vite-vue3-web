<template>
    <div class="global-wrap faqs-wrap">
        <div class="banner-wrap" relative>
            <img src="@/assets/images/home/page-banner.jpg" max-w-full alt="">
            <div class="banner-content" flex="~ col items-center" absolute top="50%" left="50%" translate="[-50%,-50%]">
                <h3 text="hex-fff 27px" tracking-2px>常见问题</h3>
                <p mt-16px text="hex-fff 15px" tracking-1px>这是一段描述文字，可以自定义你想要的文字</p>
            </div>
        </div>
        <div ref="navigation" class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div max-w-1293px flex-auto text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » 常见问题</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="main" w-1px flex="auto">
                    <ul flex="~ wrap justify-between">
                        <li
                            v-for="(item, index) in data1.list" :key="index"
                            w="[calc((100%-24px)/2)]" b-rd-6px p-24px transition="all duration-.3s" mb-24px bg="hex-fff"
                        >
                            <router-link :to="`/faqs/detail?id=${item.id}`">
                                <h2 class="faqs-q" min-h-24px mb-16px relative pl-36px text-18px line-2>{{ item.title }}</h2>
                            </router-link>
                            <p class="faqs-a" text="hex-8a8a8a 14px" lh-21px relative pl-36px text-justify line-4>{{ item.intro }}</p>
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
import type { FaqsListType } from './faqs.types'
import { isEmpty } from '@lincy/utils'

defineOptions({
    name: 'RouterFaqs',
})

useHead({
    title: 'MMF小屋-性能调优',
})

const __name__ = 'RouterFaqs'
const { options: _ } = useGlobal(__name__)

let page = $ref<number>(1)
const pageSize = $ref<number>(12)

let data1 = $ref<FaqsListType>(faqsListStore)

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
    const { code, data } = await $api.get<FaqsListType>('/faqs/getList', { page, pageSize })
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
