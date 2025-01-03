import mitt from 'mitt'

const emitter = mitt<{
    'change-category': number
}>()

// 创建并暴露mitt
export default emitter

// 清理事件
// emitter.all.clear()

// 移除事件
// emitter.off('change-category')
