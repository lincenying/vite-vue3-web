<template>
    <div class="relative h-250px w-480px">
        <div class="content">
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'TemplateComponent',
})

const piniaStore = usePiniaStore()
const { data2: _data } = $(storeToRefs(piniaStore))

const selectValue = $ref('cpu')

watch(() => selectValue, (val) => {
    piniaStore.getData2({ type: val })
})
</script>
