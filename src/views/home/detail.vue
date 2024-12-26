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
            <div max-w-1293px flex-auto text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » <router-link to="/">产品展示</router-link> » 产品详情</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="sidebar" w-320px>
                    <HomeCategory :category-id="data1.id"></HomeCategory>
                    <HomeRecommend></HomeRecommend>
                    <NewsRecommend></NewsRecommend>
                </div>
                <div class="main" w-1px ml-24px flex="auto">
                    <div border-rd-6px mb-24px p-32px bg="hex-fff">
                        <h1 font-bold text="center hex-202935 28px">{{ data1.title }}</h1>
                        <div flex="~ justify-center items-center" mt-16px text="hex-8a8a8a">
                            <i class="i-carbon-user-avatar" w-14px h-14px mr-5px></i>
                            <span mr-20px>{{ data1.author }}</span>
                            <i class="i-carbon-time" w-14px h-14px mr-5px></i>
                            <span mr-20px>{{ data1.date }}</span>
                            <i class="i-carbon-collapse-categories" w-14px h-14px mr-5px></i>
                            <span mr-20px>{{ data1.category }}</span>
                            <span>阅读({{ data1.views }})</span>
                        </div>
                        <div class="article-content" text-16px lh-28px text="hex-202935" pt-24px v-html="data1.content"></div>
                    </div>
                    <OtherRelatedRecom column="products" :category-id="data1.category_id"></OtherRelatedRecom>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NewsType } from '../news.types'
import { isEmpty } from '@lincy/utils'

defineOptions({
    name: 'RouterHomeDetail',
})

const title = ref('')

useHead({
    title,
})

const route = useRoute()

let data1 = $ref<NewsType>(newsDetailStore)

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
    const { code, data } = await $api.get<NewsType>('/news/detail', { id: route.query.id })
    if (code === 200 && !isEmpty(data) && !deepEqual(toRaw(newsDetailStore.value), data)) {
        data1 = data
        title.value = data.title
        newsDetailStore.value = data
    }
}

watchEffect(() => {
    if (route.query.id) {
        getData()
        scrollToNav()
    }
})

useSaveScroll()
</script>
