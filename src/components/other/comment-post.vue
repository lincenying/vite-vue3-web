<template>
    <div class="global-box" w="full" mb-24px p-24px bg="hex-fff" b-rd-6px>
        <div class="global-box-title" m="0 b-24px" pl-16px text="1rem hex-202935" font-bold b-l="6px bolid hex-007bff">发布评论</div>
        <div class="global-box-content">
            <div>
                <el-input v-model="form.user" class="w-340px" placeholder="请输入昵称" />
            </div>
            <div mt-24px>
                <el-input
                    v-model="form.content"
                    :rows="4"
                    type="textarea"
                    placeholder="请输入评论内容"
                />
            </div>
            <div mt-24px>
                <el-button type="primary" :disabled="loading" :loading="loading" @click="handleSubmit">发布评论</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type CommentStoreKey = keyof typeof commentStore

defineOptions({
    name: 'CommentPost',
})
const props = defineProps<{
    type: CommentStoreKey
    id: string | number
}>()

const { id, type } = $(toRefs(props))

const form = reactive({
    comment_type: type,
    comment_id: id,
    user: '',
    content: '',
})

const loading = ref(false)

async function handleSubmit() {
    if (!form.user)
        return ElMessage.warning('请输入昵称')
    if (!form.content)
        return ElMessage.warning('请输入评论内容')

    loading.value = true
    const { code } = await $api.post('/comment/post', form)
    if (code === 200) {
        ElMessage.success('评论成功')
        form.content = ''
        form.user = ''
        emitter.emit(`refresh-${props.type}-comment`)
    }
    else {
        ElMessage.error('评论失败')
    }
    loading.value = false
}
</script>
