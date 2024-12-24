<template>
    <div class="global-box" w="full" p-24px mb-24px bg="hex-fff" border-rd-6px>
        <div class="global-box-title" text="1rem hex-202935" font-bold m="0 b-24px" pl-16px b-l="6px bolid hex-007bff">新闻中心</div>
        <div class="global-box-content">
            <ul>
                <li mb-16px>
                    <router-link to="/" block>
                        <h3 line-2 text-14px lh-20px>产业互联网，到底是风口还是趋势？产业互联网，到底是风口还是趋势？</h3>
                        <time text="12px hex-8a8a8a">2022-09-19</time>
                    </router-link>
                </li>
                <li mb-16px>
                    <router-link to="/" block>
                        <h3 line-2 text-14px lh-20px>产业互联网，到底是风口还是趋势？</h3>
                        <time text="12px hex-8a8a8a">2022-09-19</time>
                    </router-link>
                </li>
                <li mb-16px>
                    <router-link to="/" block>
                        <h3 line-2 text-14px lh-20px>产业互联网，到底是风口还是趋势？产业互联网，到底是风口还是趋势？</h3>
                        <time text="12px hex-8a8a8a">2022-09-19</time>
                    </router-link>
                </li>
                <li mb-16px last-mb-0>
                    <router-link to="/" block>
                        <h3 line-2 text-14px lh-20px>产业互联网，到底是风口还是趋势？</h3>
                        <time text="12px hex-8a8a8a">2022-09-19</time>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'NewsRecommend',
})

const __name__ = 'news-recommend'
const { options: _ } = useGlobal(__name__)
</script>
