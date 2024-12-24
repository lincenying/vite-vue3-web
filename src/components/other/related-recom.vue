<template>
    <div class="global-box" w="full" p-24px mb-24px bg="hex-fff" border-rd-6px>
        <div class="global-box-title" text="1rem hex-202935" font-bold m="0 b-24px" pl-16px b-l="6px bolid hex-007bff">相关推荐</div>
        <div class="global-box-content">
            <ul flex="~ wrap justify-between" mb--24px>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降 互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
                <li w="[calc((100%-24px)/2)]" mb-24px>
                    <router-link relative flex="~ items-center" to="/home/detail?id=1">
                        <i class="i-carbon-dot-mark" mr-5px></i>
                        <h3 text="14px" line-1>互联网宝宝收益率“破3” 春节前可能进一步下降</h3>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'RelatedRecom',
})

const props = defineProps({
    column: {
        type: String,
        default: '',
    },
})

console.log(props)

const __name__ = 'related-recom'
const { options: _ } = useGlobal(__name__)
</script>
