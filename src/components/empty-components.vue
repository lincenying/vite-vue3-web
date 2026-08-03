<template>
    <div>{{ title }}</div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'EmptyComponents',
})

withDefaults(defineProps<{
    title?: string
}>(), {
    title: 'title',
})
</script>
