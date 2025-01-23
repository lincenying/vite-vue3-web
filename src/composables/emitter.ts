import mitt from 'mitt'

const emitter = mitt<{
    'change-category': number
    'refresh-product-comment': any
    'refresh-case-comment': any
    'refresh-news-comment': any
    'refresh-faq-comment': any
}>()

// 创建并暴露mitt
export default emitter

// 清理事件
// emitter.all.clear()

// 移除事件
// emitter.off('change-category')
