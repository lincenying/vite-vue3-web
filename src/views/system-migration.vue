<template>
    <div class="global-wrap index-wrap" flex="~ auto">
        <GlobalLeftMenu title="system-migration"></GlobalLeftMenu>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'SystemMigration',
})

useHead({
    title: '算力使能赋能工具-系统迁移',
})

const __name__ = 'system-migration'
const { options: _ } = useGlobal(__name__)
</script>
