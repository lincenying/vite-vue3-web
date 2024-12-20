<template>
    <div class="global-wrap index-wrap" flex="~ auto">
        <GlobalLeftMenu title="application-development"></GlobalLeftMenu>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ApplicationDevelopment',
})

useHead({
    title: '算力使能赋能工具-应用开发',
})

const __name__ = 'application-development'
const { options: _ } = useGlobal(__name__)
</script>
