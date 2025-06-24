<template>
    <div id="root" v-loading="globalLoading" flex="~ col" element-loading-text="数据加载中...">
        <template v-if="!needLogin">
            <template v-if="!globalLoading">
                <globalHeader />
                <router-view v-slot="{ Component }" class="body">
                    <transition
                        v-if="Component"
                        name="fade" mode="out-in"
                        @before-enter="handleBeforeEnter"
                        @after-enter="handleAfterEnter"
                        @after-leave="handleAfterLeave"
                    >
                        <keep-alive :include="cacheComponents">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                    <OtherLoading v-else></OtherLoading>
                </router-view>
                <globalFooter />
            </template>
        </template>
        <pageLogin v-else />
    </div>
</template>

<script setup lang="ts">
import { sleep } from '@lincy/utils'

import OtherLoading from '@/components/other/loading.vue'
import pageLogin from '@/login.vue'

defineOptions({
    name: 'AppRoot',
})

// pinia 状态管理 ===>
const globalStore = useGlobalStore()
const { globalLoading } = storeToRefs(globalStore)

const userStore = useUserStore()
const { token } = storeToRefs(userStore)

const needLogin = computed(() => !token.value)

const productStore = useProductStore()
// const tmpCount = computed(() => globalStore.counter)
// 监听状态变化
globalStore.$subscribe((mutation, state) => {
    if (mutation.events) {
        let _Array = mutation.events
        if (!Array.isArray(_Array)) {
            _Array = [_Array]
        }
        _Array.forEach((item) => {
            console.log(`%c[${mutation.storeId}.${item?.key}] <${mutation.type}> >>> ${item?.oldValue} => ${item?.newValue}`, 'color: red')
        })
    }
    console.log('%c[state] >> ', 'color: red')
    console.log(state)
    console.log('%c<< [state]', 'color: red')
})
// pinia 状态管理 <===

const cacheComponents = ref('abc')

// 全局组件通信 ===>
provide(onLoginKey, (payload: string) => {
    userStore.setToken(payload)
    console.log('payload :>> ', payload)
})
// 全局组件通信 <===

async function init() {
    if (import.meta.env.VITE_APP_ENV === 'pre-release') {
        // 防止mock劫持不到, 添加点延迟
        await sleep(500)
    }
    await productStore.getCtegory()
    globalStore.setGlobalLoading(false)
}

function handleBeforeEnter() {
}
function handleAfterEnter() {
}
function handleAfterLeave() {
}

onMounted(async () => {
    await init()
})
</script>
