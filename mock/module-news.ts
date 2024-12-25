import type { MockMethod } from 'vite-plugin-mock'
import { baseApi } from './_api'

export default [
    {
        // 推荐
        url: `/${baseApi}/news/getRecommend`,
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: Array.from({ length: 4 }, (_, index) => ({
                    id: index + 1,
                    date: '@date("yyyy-MM-dd")',
                    title: '@ctitle(10, 30)',
                })),
            }
        },
    },
    {
        // 列表
        url: `/${baseApi}/news/getList`,
        method: 'get',
        response: (opt: any) => {
            const query = opt.query
            const page = query.page || 1
            const pageSize = query.pageSize || 12
            return {
                code: 200,
                message: 'ok',
                data: {
                    list: Array.from({ length: pageSize }, (_, index) => ({
                        id: (page - 1) * pageSize + index + 1,
                        title: '@ctitle(7, 20)',
                        date: '@date("yyyy-MM-dd")',
                        intro: '@cparagraph(10, 15)',
                    })),
                    hasNext: 1,
                    total: 100,
                    pageSize,
                    currPage: Number(page),
                },
            }
        },
    },
] as MockMethod[]
