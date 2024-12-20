<template>
    <div class="relative h-250px w-480px">
        <div v-loading="loading" class="content">
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'TemplateComponent',
})

const props = defineProps<{
    componentKey?: string
    fullData: Nullable<Objable>
}>()

// pinia 状态管理 ===>
// const indexStore = useIndexStore()
// const { counter, name } = $(storeToRefs(indexStore))
// const tmpCount = computed(() => indexStore.counter)
// 监听状态变化
// indexStore.$subscribe((mutation, state) => {
//     console.log('mutation :>> ', mutation)
//     console.log('state :>> ', JSON.stringify(state))
// })
// pinia 状态管理 <===

// 父子组件通讯 ===>
const { componentKey: _, fullData } = $(toRefs(props))
// 父子组件通讯 <===

// 全局组件通信 ===>
// const dataIsReady = inject(dataIsReadyKey, ref(0))
const dataHasError = inject(dataHasErrorKey, ref(false))
const updateParent = inject(updateParentKey, () => {})
// 全局组件通信 <===

const [loading, toggleLoading] = useToggle(false)

let data1 = $ref<Nullable<any[]>>()

console.log(data1)

async function getData1() {
    if (fullData) {
        data1 = fullData.rightTop
    }
}

const selectValue = $ref('cpu')
watch(() => selectValue, updateParent)

async function init() {
    toggleLoading(true)
    await Promise.all([getData1()])
    toggleLoading(false)
}

function initError() {
    return toggleLoading(false)
}

useDataIsLoaded({
    fullData: $$(fullData),
    dataHasError,
    init,
    initError,
})
</script>
