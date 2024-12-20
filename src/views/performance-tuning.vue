<template>
    <div class="global-wrap index-wrap" flex="~ auto">
        <GlobalLeftMenu title="performance-tuning"></GlobalLeftMenu>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'PerformanceTuning',
})

useHead({
    title: '算力使能赋能工具-性能调优',
})

const __name__ = 'PerformanceTuning'
const { options: _ } = useGlobal(__name__)
</script>
