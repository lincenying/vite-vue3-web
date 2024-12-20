<template>
    <section class="login-page">
        <div class="login-box">
            <div class="title">管理后台</div>
            <div class="login-form">
                <el-input v-model="form.username" size="small" placeholder="请输入用户名" @keyup.enter="handleLogin">
                    <template #prepend>用户名</template>
                </el-input>
                <el-input v-model="form.password" size="small" type="password" placeholder="请输入密码" @keyup.enter="handleLogin">
                    <template #prepend>密&nbsp;码</template>
                </el-input>
                <div class="login-line" />
                <el-button :disabled="loading" :loading="loading" size="small" class="login-btn" @click="handleLogin">登 录</el-button>
            </div>
            <div class="login-tip">推荐使用最新版本谷歌浏览器, 确保页面内容显示正常<br>页面分辨率为1920 x 1080</div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Login',
})

const { ctx } = useGlobal('login')

// pinia 状态管理 ===>
// const { counter, name } = storeToRefs(globalStore)
// const tmpCount = computed(() => globalStore.counter)
// 监听状态变化
// globalStore.$subscribe((mutation, state) => {
//     console.log('mutation :>> ', mutation)
//     console.log('state :>> ', JSON.stringify(state))
// })
// pinia 状态管理 <===

// 全局组件通信 ===>
const onLogin = inject(onLoginKey, () => {})
// 全局组件通信 <===

const [loading, toggleLoading] = useToggle(false)

const form = reactive({
    username: '',
    password: '',
    verifyCode: '',
    rememberMe: 'on',
})

async function handleLogin() {
    if (!form.username || !form.password) {
        ctx.$message.error('请输入用户名密码!')
        return
    }
    const config = {
        username: form.username.trim(),
        password: form.password,
        verifyCode: form.verifyCode,
        rememberMe: form.rememberMe,
    }
    toggleLoading(true)
    setTimeout(() => {
        toggleLoading(false)
        onLogin(config)
    }, 500)
}
</script>
