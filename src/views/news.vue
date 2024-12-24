<template>
    <div class="global-wrap news-wrap">
        <div class="banner-wrap" relative>
            <img src="@/assets/images/home/page-banner.jpg" max-w-full alt="">
            <div class="banner-content" flex="~ col items-center" absolute top="50%" left="50%" translate="[-50%,-50%]">
                <h3 text="hex-fff 27px" tracking-2px>新闻中心</h3>
                <p mt-16px text="hex-fff 15px" tracking-1px>这是一段描述文字，可以自定义你想要的文字</p>
            </div>
        </div>
        <div class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
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
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                        <li mb-24px bg="hex-fff" border-rd-6px relative top-0 flex="~ items-center" p-24px transition="all duration-.3s">
                            <div b-rd-4px flex="[0_0_80px]" h-80px p="x-0 y-16px" mr-16px text="hex-8a8a8a 12px center" bg="hex-eee">
                                <span block font-bold text="hex-007bff 24px" lh-30px>19</span>2022-09
                            </div>
                            <div flex-1>
                                <router-link to="/news/detail?id=1"><h2 text="18px" lh-26px>产业互联网，到底是风口还是趋势？</h2></router-link>
                                <p text="14px hex-8a8a8a" lh-21px line-3>
                                    消费互联网的特征是赢家通吃一家独大，而产业互联网的特征是细分领域比较垂直。在中央反复强调“着力振兴实体经济”的时代背景下，产业互联网也是许多创业者的选择，今天我们就来阐述一下什么是产业互联网？它的逻辑是什么？又该如何利用这个逻辑做大做强。
                                    ...
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="page" mb-24px flex="~ justify-center">
                        <el-pagination background layout="prev, pager, next" :total="1000" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'RouterNews',
})

useHead({
    title: 'MMF小屋-应用开发',
})

const __name__ = 'RouterNews'
const { options: _ } = useGlobal(__name__)
</script>
