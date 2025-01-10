import type { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

declare module '*.vue' {
    import type { defineComponent } from 'vue'

    const Component: ReturnType<typeof defineComponent>
    export default Component
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $msgbox: typeof ElMessageBox
        $alert: typeof ElMessageBox.alert
        $confirm: typeof ElMessageBox.confirm
        $prompt: typeof ElMessageBox.prompt
        $message: typeof ElMessage
        $notify: typeof ElNotification
    }
}

export {}
