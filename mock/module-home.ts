import type { MockMethod } from './_mock.types'
import { baseApi, getRandomValue } from './_api'

interface UserListType {
    id?: string
    name: string
    password?: string
    nickName: string
    role: string
    isAdmin: number | string
    status?: number | string
    token?: string
    info?: {
        name: string
    }
    loading?: boolean
}

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

const users: UserListType[] = [{
    name: 'admin',
    nickName: 'admin',
    role: '系统管理员',
    password: '123456',
    isAdmin: '1',
    token: 'admin',
    info: {
        name: '系统管理员',
    },
}, {
    name: 'editor',
    nickName: 'admin',
    role: '系统管理员',
    password: '123456',
    isAdmin: '1',
    token: 'editor',
    info: {
        name: '编辑人员',
    },
}, {
    name: 'test',
    nickName: 'admin',
    role: '系统管理员',
    password: '123456',
    isAdmin: '1',
    token: 'test',
    info: {
        name: '测试人员',
    },
}]

export default [
    {
        url: `/${baseApi}/user/login`,
        method: 'post',
        response: ({ body }) => {
            const user = users.find((user) => {
                return body.name === user.name && body.password === user.password
            })
            if (user) {
                return {
                    code: 200,
                    data: {
                        token: user.token,
                    },
                    message: 'success',
                }
            }
            else {
                return {
                    code: 401,
                    data: null,
                    message: '用户名或密码错误',
                }
            }
        },
    } as MockMethod<any, { name: string, password: string }>,
    {
        // 分类
        url: `/${baseApi}/home/getCategory`,
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: Array.from({ length: 6 }, (_, index) => ({
                    id: index + 1,
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
                data: Array.from({ length: 4 }, (_, index) => ({
                    id: index + 1,
                    imgUrl: getRandomValue(imgUrl),
                    title: '@ctitle(7, 20)',
                })),
            }
        },
    },
    {
        // 相关推荐
        url: `/${baseApi}/home/relatedRecom`,
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
        url: `/${baseApi}/home/getList`,
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
                        category: (page - 1) * pageSize + index + 1,
                        imgUrl: getRandomValue(imgUrl),
                        title: '@ctitle(7, 20)',
                        date: '@date("yyyy-MM-dd")',
                        tag: Array.from({ length: 3 }, () => '@cword(3, 5)'),
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
