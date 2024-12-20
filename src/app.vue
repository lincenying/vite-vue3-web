<template>
    <div id="root" flex="~ col">
        <template v-if="!needLogin">
            <globalHeader page="home" />
            <router-view v-slot="{ Component }" class="body">
                <transition
                    v-if="!globalLoading" name="fade" mode="out-in"
                    @before-enter="handleBeforeEnter"
                    @after-enter="handleAfterEnter"
                    @after-leave="handleAfterLeave"
                >
                    <keep-alive v-if="!globalLoading" :include="cacheComponents">
                        <component :is="Component" />
                    </keep-alive>
                </transition>
            </router-view>
        </template>
        <pageLogin v-else />
    </div>
</template>

<script setup lang="ts">
import pageLogin from '@/login.vue'

defineOptions({
    name: 'AppRoot',
})

// pinia 状态管理 ===>
const globalStore = useGlobalStore()
const { globalLoading } = storeToRefs(globalStore)
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

const [needLogin, toggledLogin] = useToggle(false)

// 全局组件通信 ===>
provide(onLoginKey, (payload: boolean) => {
    toggledLogin(false)
    console.log('payload :>> ', payload)
})
// 全局组件通信 <===

async function init() {
    globalStore.setGlobalLoading(false)
}

function handleBeforeEnter() {
}
function handleAfterEnter() {
}
function handleAfterLeave() {
}

onMounted(async () => {
    init()
})
</script>
