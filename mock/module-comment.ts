import type { MockMethod } from './_mock.types'
import { baseApi, getRandomNumber } from './_api'

export default [
    {
        // 列表
        url: `/${baseApi}/comment/getList`,
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
                        article: (page - 1) * pageSize + index + 1,
                        user: {
                            name: '@cname',
                            avatar: 'https://cravatar.cn/avatar/f7043d902c520089b324569ba690ea91?s=80&d=identicon&r=g',
                        },
                        date: '@date("yyyy-MM-dd HH:mm:ss")',
                        content: '@cparagraph(1, 3)',
                        children: Array.from({ length: getRandomNumber(0, 3) }, (_, sub_index) => ({
                            id: sub_index + 1,
                            article: sub_index + 1,
                            user: {
                                name: '@cname',
                                avatar: 'https://cravatar.cn/avatar/f7043d902c520089b324569ba690ea91?s=80&d=identicon&r=g',
                            },
                            date: '@date("yyyy-MM-dd HH:mm:ss")',
                            content: '@cparagraph(1, 3)',
                        })),
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
        // 发布评论
        url: `/${baseApi}/comment/post`,
        method: 'post',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: null,
            }
        },
    },
] as MockMethod[]
