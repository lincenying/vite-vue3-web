import type { MockMethod } from './_mock.types'
import { baseApi, getRandomValue } from './_api'

const imgUrl = [
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000728181.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000728182.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000728183.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000728184.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000728185.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000728187.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000730136.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000730972.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000731521.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000733344.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000735216.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000738908.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000740006.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000741226.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000742156.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000742898.jpg/300x200',
    'http://cdn.mmxiaowu.com/temp/76056adf_20191222000744502.jpg/300x200',
]

export default [
    {
        // 相关推荐
        url: `/${baseApi}/cases/relatedRecom`,
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
        url: `/${baseApi}/cases/getList`,
        method: 'get',
        response: (opt) => {
            const query = opt.query
            const page = query.page || 1
            const pageSize = query.pageSize || 12
            return {
                code: 200,
                message: 'ok',
                data: {
                    list: Array.from({ length: pageSize }, (_, index) => ({
                        id: (page - 1) * pageSize + index + 1,
                        imgUrl: getRandomValue(imgUrl),
                        title: '@ctitle(7, 20)',
                        date: '@date("yyyy-MM-dd")',
                        intro: '@cparagraph(10, 15)',
                    })),
                    hasNext: 1,
                    total: 100,
                    pageSize: Number(pageSize),
                    currPage: Number(page),
                },
            }
        },
    } as MockMethod<{ page: number, pageSize: number }>,
] as MockMethod[]
