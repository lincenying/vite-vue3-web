import type { RouteRecordRaw } from 'vue-router'
import { createRouter } from 'vue-router'

const views = import.meta.glob('../views/**/*.vue')

let routes: RouteRecordRaw[] = []
Object.keys(views).forEach((path: string) => {
    const math = path.match(/\.\/views(.*)\.vue$/)
    if (math) {
        const name = math[1].toLowerCase()
        routes.push({
            name: name.replace('/', ''),
            path: name === '/home' ? '/' : name,
            component: views[path], // () => import('./views/**/*.vue')
        })
    }
    return {}
})

routes = routes.concat([{ path: '/:pathMatch(.*)', redirect: '/' }])

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
