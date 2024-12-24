<template>
    <div class="global-box" w="full" p-24px mb-24px bg="hex-fff" border-rd-6px>
        <div class="global-box-title" text="1rem hex-202935" font-bold m="0 b-24px" pl-16px b-l="6px bolid hex-007bff">产品展示</div>
        <div class="global-box-content">
            <ul class="cat-list">
                <li v-for="(item, index) in category" :key="index" pl-22px hover="bg-hex-f3f5f7 b-rd-4px" transition="all duration-.3s" :class="{ 'cat-list-active': item.id === categoryId }">
                    <router-link block text-14px lh-32px hover="text-hex-007bff" :to="`/?category=${item.id}`">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ProductCategory',
})

const props = defineProps<{
    categoryId: number
}>()
const { categoryId } = toRefs(props)

const __name__ = 'product-category'
const { options: _ } = useGlobal(__name__)

const productStore = useProductStore()
const { category } = storeToRefs(productStore)
</script>
