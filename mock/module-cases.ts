import type { MockMethod } from './_mock.types'
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
                    pageSize,
                    currPage: Number(page),
                },
            }
        },
    } as MockMethod<{ page: number, pageSize: number }>,
] as MockMethod[]
