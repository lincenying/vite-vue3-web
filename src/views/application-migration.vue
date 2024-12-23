<template>
    <div class="global-wrap index-wrap" flex="~ auto">
        <GlobalLeftMenu title="application-migration"></GlobalLeftMenu>
        <ApplicationMigrationManiBox></ApplicationMigrationManiBox>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ApplicationMigration',
})

useHead({
    title: '算力使能赋能工具-应用迁移',
})

const __name__ = 'application-migration'
const { options: _ } = useGlobal(__name__)
</script>
