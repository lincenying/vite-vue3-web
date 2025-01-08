<template>
    <section class="login-page">
        <div class="login-box">
            <div class="title">用户登录</div>
            <div class="login-form">
                <el-input v-model="form.name" size="small" placeholder="请输入用户名" @keyup.enter="handleLogin">
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
    name: 'admin',
    password: '123456',
})

async function login(params: { name: string, password: string }) {
    const { code, data } = await $api.post<{ token: string }>('/user/login', params)
    if (code === 200 && data) {
        return data.token
    }
    return null
}

async function handleLogin() {
    if (!form.name || !form.password) {
        ctx.$message.error('请输入用户名密码!')
        return
    }
    const config = {
        name: form.name.trim(),
        password: form.password,
    }
    toggleLoading(true)
    const token = await login(config)
    onLogin(token)
}
</script>
