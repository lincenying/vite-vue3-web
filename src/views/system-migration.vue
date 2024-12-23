<template>
    <div class="global-wrap index-wrap">
        <div class="index-scroll" flex="~ auto">
            <GlobalLeftMenu title="system-migration"></GlobalLeftMenu>
            <SystemMigrationManiBox></SystemMigrationManiBox>
        </div>
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
