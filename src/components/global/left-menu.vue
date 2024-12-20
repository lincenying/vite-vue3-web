<template>
    <div class="left-menu" w-264px p-24px bg-hex-3f43488c>
        <p ml-8px text-16px text-hex-fff6 lh-24px>场景</p>
        <div class="left-menu-ul" mt-9px>
            <router-link to="/system-migration" exact-active-class="active" flex="~ items-center" py-15px px-16px>
                <i class="i-carbon-ibm-cloud-mass-data-migration w-24px h-24px"></i>
                <span ml-10px text-16px text-hex-fff>系统迁移</span>
            </router-link>
            <router-link to="/application-migration" exact-active-class="active" flex="~ items-center" py-15px px-16px>
                <i class="i-carbon-ibm-cloud-pak-integration w-24px h-24px"></i>
                <span ml-10px text-16px text-hex-fff>应用迁移</span>
            </router-link>
            <router-link to="/application-development" exact-active-class="active" flex="~ items-center" py-15px px-16px>
                <i class="i-carbon-cics-program w-24px h-24px"></i>
                <span ml-10px text-16px text-hex-fff>应用开发</span>
            </router-link>
            <router-link to="/performance-tuning" exact-active-class="active" flex="~ items-center" py-15px px-16px>
                <i class="i-carbon-ibm-vsi-on-vpc-for-regulated-industries w-24px h-24px"></i>
                <span ml-10px text-16px text-hex-fff>性能调优</span>
            </router-link>
        </div>
        <div my-32px border="1px solid hex-fff/15"></div>
        <div ml-8px>
            <p text-16px text-hex-fff6 lh-24px>功能介绍</p>
            <GlobalLeftMenu1 v-if="title === 'system-migration'"></GlobalLeftMenu1>
            <GlobalLeftMenu2 v-if="title === 'application-migration'"></GlobalLeftMenu2>
            <GlobalLeftMenu3 v-if="title === 'application-development'"></GlobalLeftMenu3>
            <GlobalLeftMenu4 v-if="title === 'performance-tuning'"></GlobalLeftMenu4>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'unplugin-vue-macros/macros' assert { type: 'macro' }

defineOptions({
    name: 'LeftMenu',
})
const { title } = withDefaults(definePropsRefs<{
    title?: string
}>(), {
    title: 'system-migration',
})
</script>
