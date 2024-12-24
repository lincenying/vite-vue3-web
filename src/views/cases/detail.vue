<template>
    <div class="global-wrap index-wrap">
        <div class="banner-wrap" relative>
            <img src="@/assets/images/home/page-banner.jpg" max-w-full alt="">
            <div class="banner-content" flex="~ col items-center" absolute top="50%" left="50%" translate="[-50%,-50%]">
                <h3 text="hex-fff 27px" tracking-2px>案例展示</h3>
                <p mt-16px text="hex-fff 15px" tracking-1px>这是一段描述文字，可以自定义你想要的文字</p>
            </div>
        </div>
        <div class="navigation" flex="~ justify-center items-center" h-42px bg-hex-fff>
            <div max-w-1293px flex-auto text-hex-8a8a8a lt-m1360="mx-24px">当前位置：<router-link to="/">首页</router-link> » <router-link to="/cases">案例展示</router-link> » 案例详情</div>
        </div>
        <div flex="~ justify-center" mt-24px lt-m1360="mx-24px">
            <div flex="~ auto justify-between" max-w-1293px>
                <div class="sidebar" w-320px>
                    <HomeRecommend></HomeRecommend>
                    <NewsRecommend></NewsRecommend>
                </div>
                <div class="main" w-1px ml-24px flex="auto">
                    <div border-rd-6px mb-24px p-32px bg="hex-fff">
                        <h1 font-bold text="center hex-202935 28px">产业互联网，到底是风口还是趋势？</h1>
                        <div flex="~ justify-center items-center" mt-16px text="hex-8a8a8a">
                            <i class="i-carbon-user-avatar" w-14px h-14px mr-5px></i>
                            <span mr-20px>张三</span>
                            <i class="i-carbon-time" w-14px h-14px mr-5px></i>
                            <span mr-20px>2022-09-19</span>
                            <i class="i-carbon-collapse-categories" w-14px h-14px mr-5px></i>
                            <span mr-20px>时尚袜子</span>
                            <span>阅读(1421)</span>
                        </div>
                        <div class="article-content" text-16px lh-28px text="hex-202935" pt-24px>
                            <p>我们在《新时代的摩西，如何带领团队跨过红海？》这篇文章中文提过，每个行业都有三个红利期。</p>
                            <p>第一个红利期叫风口红利期，也就是谁做谁赚钱的蓝海市场。</p>
                            <p>第二个红利期是技术红利期，当参与者已经很多，已经进入红海市场了，如果你的产品有自己的特点，有技术创新，并且被消费者认可，就会得到很好的发展。比如像苹果、华为都是技术红利期的企业。而红海市场继续发展就会进入到更残酷的竞争，叫做血海，这时相应的第三个红利期就是管理红利期。</p>
                            <p>第三个红利期是管理红利期，管理红利期讲究成本和效率，你用一百块钱能干的事，人家八十块钱就能干，还能挣钱。你用两年干的事，人家一年就能干，还比你干得好。管理红利期的代表企业是富士康和老干妈。老干妈是价格比它高的卖不动，比它低的亏本，可以说是把管理做到了极限。管理红利期的特点是垄断，形成双寡头或三寡头，来获取市场红利。当三个红利期过后，行业的风口会重来，这个行业也会重新运转，以此循环。</p>
                            <p>罗纳德·科斯关于企业的起源的解释是：企业组织劳动分工的交易费用低于市场组织劳动分工的交易费用。而产业互联网普及导致市场组织交易成本的降低，企业内职能被外包至专业化平台，这样社会分工协作就会进一步细化，设备利用率和劳动生产率都会提高。这样一个过程，会比消费领域的分享所带来的驱动力会更强，因为只要真金白银省了钱，产业互联网的参与者就会行动。大量的行动自然会加速行业的重新运转。</p>
                            <p>我们在《新时代的摩西，如何带领团队跨过红海？》这篇文章中文提过，每个行业都有三个红利期。</p>
                            <p>第一个红利期叫风口红利期，也就是谁做谁赚钱的蓝海市场。</p>
                            <p>第二个红利期是技术红利期，当参与者已经很多，已经进入红海市场了，如果你的产品有自己的特点，有技术创新，并且被消费者认可，就会得到很好的发展。比如像苹果、华为都是技术红利期的企业。而红海市场继续发展就会进入到更残酷的竞争，叫做血海，这时相应的第三个红利期就是管理红利期。</p>
                            <p>第三个红利期是管理红利期，管理红利期讲究成本和效率，你用一百块钱能干的事，人家八十块钱就能干，还能挣钱。你用两年干的事，人家一年就能干，还比你干得好。管理红利期的代表企业是富士康和老干妈。老干妈是价格比它高的卖不动，比它低的亏本，可以说是把管理做到了极限。管理红利期的特点是垄断，形成双寡头或三寡头，来获取市场红利。当三个红利期过后，行业的风口会重来，这个行业也会重新运转，以此循环。</p>
                            <p>罗纳德·科斯关于企业的起源的解释是：企业组织劳动分工的交易费用低于市场组织劳动分工的交易费用。而产业互联网普及导致市场组织交易成本的降低，企业内职能被外包至专业化平台，这样社会分工协作就会进一步细化，设备利用率和劳动生产率都会提高。这样一个过程，会比消费领域的分享所带来的驱动力会更强，因为只要真金白银省了钱，产业互联网的参与者就会行动。大量的行动自然会加速行业的重新运转。</p>
                        </div>
                    </div>
                    <OtherRelatedRecom column="cases"></OtherRelatedRecom>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'RouterHomeDetail',
})

useHead({
    title: '算力使能赋能工具-系统迁移',
})

const __name__ = 'RouterHomeDetail'
const { options: _ } = useGlobal(__name__)
</script>
