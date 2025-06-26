import type { MockMethod } from './_mock.types'
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
        // 相关推荐
        url: `/${baseApi}/news/relatedRecom`,
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: Array.from({ length: 10 }, (_, index) => ({
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
                    hasPrev: page > 1 ? 1 : 0,
                    hasNext: 1,
                    total: 100,
                    pageSize: Number(pageSize),
                    currPage: Number(page),
                },
            }
        },
    } as MockMethod<{ page: number, pageSize: number }>,
    {
        // 推荐
        url: `/${baseApi}/news/detail`,
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    id: 1,
                    title: '@ctitle(10, 20)',
                    author: '@cname',
                    date: '@date("yyyy-MM-dd")',
                    category: '@ctitle(3, 5)',
                    category_id: '@integer(1, 1000)',
                    intro: '@cparagraph(10, 15)',
                    content: '<p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p><p>@cparagraph(10, 15)</p>',
                    imgUrl: '@image("800x400", "#4A7BF7", "#FFF", "png", "img")',
                    views: '@integer(100, 1000)',
                },
            }
        },
    },
] as MockMethod[]
