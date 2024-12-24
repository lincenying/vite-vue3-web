<template>
    <div class="global-header" h="80px!" flex="~ none justify-center items-center" bg-hex-fff fixed left-0 top-0 w-full z-999>
        <div flex="~ auto" max-w-1293px>
            <img :src="NavLogo" class="w-109px h-31px" alt="">
            <div flex="~ items-center" ml-64px>
                <el-dropdown mr-32px @command="handleCommand">
                    <span class="el-dropdown-link">
                        <router-link un-text="16px hex-202935" lh-32px to="/">产品展示</router-link>
                        <el-icon class="el-icon--right">
                            <ArrowDown />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item, index) in category" :key="index" :command="item.id">{{ item.title }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <router-link mr-32px text-16px lh-32px to="/cases">案例展示</router-link>
                <router-link mr-32px text-16px lh-32px to="/news">新闻中心</router-link>
                <router-link mr-32px text-16px lh-32px to="/faqs">常见问题</router-link>
            </div>
        </div>
    </div>
    <div h-80px></div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

import NavLogo from '@/assets/images/nav-logo.png'

defineOptions({
    name: 'GlobalHeader',
})
const router = useRouter()

const productStore = useProductStore()
const { category } = storeToRefs(productStore)

function handleCommand(command: string) {
    router.push(`/?id=${command}`)
}
</script>
