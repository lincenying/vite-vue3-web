import { createAlova } from 'alova'
import { useFetcher, useForm, usePagination, useRequest, useSerialRequest, useSerialWatcher, useWatcher } from 'alova/client'
import adapterFetch from 'alova/fetch'
import VueHook from 'alova/vue'

const alovaInstance = createAlova({
    baseURL: import.meta.env.VITE_APP_API,
    statesHook: VueHook,
    requestAdapter: adapterFetch(),
    // 函数参数为一个method实例，包含如url、params、data、headers等请求数据
    // 你可以自由修改这些数据
    beforeRequest(method) {
    // 假设我们需要添加token到请求头
        method.config.headers.token = 'token'
    },
    // 使用 responded 对象分别指定请求成功的拦截器和请求失败的拦截器
    responded: {
        // 请求成功的拦截器
        // 当使用 `alova/fetch` 请求适配器时，第一个参数接收Response对象
        // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
        onSuccess: async (response, _method) => {
            if (response.status >= 400) {
                throw new Error(response.statusText)
            }
            const json = await response.json()
            if (json.code !== 200) {
                // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
                throw new Error(json.message)
            }

            // 解析的响应数据将传给method实例的transform钩子函数，这些函数将在后续讲解
            return json.data
        },

        // 请求失败的拦截器
        // 请求错误时将会进入该拦截器。
        // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
        onError: (err, _method) => {
            console.warn(err.message)
        },

        // 请求完成的拦截器
        // 当你需要在请求不论是成功、失败、还是命中缓存都需要执行的逻辑时，可以在创建alova实例时指定全局的`onComplete`拦截器，例如关闭请求 loading 状态。
        // 接收当前请求的method实例
        onComplete: async (_method) => {
            // 处理请求完成逻辑
        },
    },
})

const { Get, Post, Put, Delete } = alovaInstance

export default alovaInstance
export { Delete, Get, Post, Put }
export { useFetcher, useForm, usePagination, useRequest, useSerialRequest, useSerialWatcher, useWatcher }
