import type { MockMethod } from '@lincy/vite-plugin-mock'
import { baseApi, getRandomValue } from './_api'

const imgUrl = [
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/44f683a84163b35-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/9f61408e3afb633-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/a684eceee76fc52-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/4c56ff4ce4aaf95-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/c74d97b01eae257-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/da4fb5c6e93e74d-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/3c59dc048e88502-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/8e296a067a37563-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/68d30a9594728bc-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/93db85ed909c138-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/8613985ec49eb8f-300x200.jpg',
    'https://demo.themebetter.com/mok/wp-content/uploads/sites/17/2022/09/ea5d2f1c4608232-300x200.jpg',
]

export default [
    {
        // 分类
        url: `/${baseApi}/home/getCategory`,
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: Array.from({ length: 6 }, () => ({
                    id: '@id',
                    title: '@cword(3, 5)',
                })),
            }
        },
    },
    {
        // 推荐
        url: `/${baseApi}/home/getRecommend`,
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: Array.from({ length: 4 }, () => ({
                    id: '@id',
                    imgUrl: getRandomValue(imgUrl),
                    title: '@ctitle(7, 20)',
                })),
            }
        },
    },
    {
        // 右上
        url: `/${baseApi}/index/getRightTop`,
        method: 'get',
        response: () => {
            /* 请求参数-GET
             * id: id
             */
            /* 请求参数-POST
             * Null
             */
            /* 返回数据
            {
                code: 200, // 状态码, 200正常, 401未登录, 其他为异常
                message: 'ok', // 异常时抛出的错误信息
                data: object = {
                    usage: number = '使用率'
                }
            }
             */
            return {
                code: 200,
                message: 'ok',
                data: Array.from({ length: 50 }, () => ({
                    title: '@csentence',
                    date: '@date("yyyy-MM-dd")',
                })),
            }
        },
    },
    {
        // 右下
        url: `/${baseApi}/index/getRightBottom`,
        method: 'get',
        response: () => {
            /* 请求参数-GET
             * id: id
             */
            /* 请求参数-POST
             * Null
             */
            /* 返回数据
            {
                code: 200, // 状态码, 200正常, 401未登录, 其他为异常
                message: 'ok', // 异常时抛出的错误信息
                data: object = {
                    vcpu_usage_average: number = 'CPU使用率均值'
                    vcpu_usage_peak: number = 'CPU使用率峰值'
                    vmemory_usage_average: number = '内存使用率均值'
                    memory_usage_peak: number = '内存使用率峰值'
                    storage_usage_s: number = '存储使用率'
                }
            }
             */
            return {
                code: 200,
                message: 'ok',
                data: {
                    vcpu_usage_average: '@integer(60, 100)',
                    vcpu_usage_peak: '@integer(60, 100)',
                    vmemory_usage_average: '@integer(60, 100)',
                    memory_usage_peak: '@integer(60, 100)',
                    storage_usage_s: '@integer(60, 100)',
                },
            }
        },
    },
    {
        // 中间
        url: `/${baseApi}/index/getCenter`,
        method: 'get',
        response: () => {
            /* 请求参数-GET
             * id: id
             */
            /* 请求参数-POST
             * Null
             */
            /* 返回数据
            {
                code: 200, // 状态码, 200正常, 401未登录, 其他为异常
                message: 'ok', // 异常时抛出的错误信息
                data: object = {
                    cloud_tenants: number = '云租户数'
                    virtual_machine: number = '虚拟机数'
                    host_machine: number = '宿主机数'
                    tier1_tenant: number = '大数据一级租户'
                    big_data_server: number = '大数据服务器'
                    big_data_cluster: number = '大数据集群'
                }
            }
             */
            return {
                code: 200,
                message: 'ok',
                data: {
                    cloud_tenants: '@integer(60, 100)',
                    virtual_machine: '@integer(60, 100)',
                    host_machine: '@integer(60, 100)',
                    tier1_tenant: '@integer(60, 100)',
                    big_data_server: '@integer(60, 100)',
                    big_data_cluster: '@integer(60, 100)',
                },
            }
        },
    },
    {
        // 中间
        url: `/${baseApi}/index/getEcharts`,
        method: 'get',
        response: () => {
            /* 请求参数-GET
             * id: id
             */
            /* 请求参数-POST
             * Null
             */
            /* 返回数据
            {
                code: 200, // 状态码, 200正常, 401未登录, 其他为异常
                message: 'ok', // 异常时抛出的错误信息
                data: object = {
                    cloud: number = '云租户数'
                }
            }
             */
            return {
                code: 200,
                message: 'ok',
                data: {
                    cloud: 80,
                },
            }
        },
    },
    {
        // 租户总览
        url: `/${baseApi}/index/tenantOverview`,
        method: 'get',
        response: ({ query }) => {
            /* 请求参数-GET
             * page: number = 分页
             * pageSize: number = 每页数量
             */
            /* 请求参数-POST
             * Null
             */
            /* 返回数据
            {
                code: 200, // 状态码, 200正常, 401未登录, 其他为异常
                message: 'ok', // 异常时抛出的错误信息
                data: object = {
                    total: 100, // 总条数
                    currPage: 1, // 当前页数
                    pageSize: 10, // 每页数量
                    data: array = [{
                        id: string = '主键',
                        date: string = '日期;
                        name: string = '姓名;
                        address: string = '地址;
                    }]
                }
            }
             */
            const page = query.page || 1
            const pageSize = query.pageSize || 10
            return {
                code: 200,
                message: 'ok',
                data: {
                    total: 100,
                    pageSize,
                    currPage: Number(page),
                    data: Array.from({ length: pageSize }, (_, index) => ({
                        id: (page - 1) * pageSize + index + 1,
                        date: '@date',
                        name: '@cname()',
                        address: '@city()',
                    })),
                },
            }
        },
    },
] as MockMethod[]
