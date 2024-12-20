import { createHead } from '@unhead/vue'
import { createApp } from 'vue'

import App from '@/app.vue'
import globalPlugin from '@/plugin/global'

import router from './router'

//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖镇楼                  BUG辟易
//          佛曰:
//                  写字楼里写字间，写字间里程序员；
//                  程序人员写程序，又拿程序换酒钱。
//                  酒醒只在网上坐，酒醉还来网下眠；
//                  酒醉酒醒日复日，网上网下年复年。
//                  但愿老死电脑间，不愿鞠躬老板前；
//                  奔驰宝马贵者趣，公交自行程序员。
//                  别人笑我忒疯癫，我笑自己命太贱；
//                  不见满街漂亮妹，哪个归得程序员？
import 'default-passive-events'
import '@/polyfill/toFixed'

import 'uno.css'
import './assets/icon-font/icon-font.css'
import './assets/scss/global/animate.min.css'
import './assets/scss/global/global.scss'
import './assets/scss/style.scss'

console.log(`VITE_APP_ENV: ${import.meta.env.VITE_APP_ENV}`)

const app = createApp(App)
const head = createHead()

setupPinia(app).use(head).use(router).use(globalPlugin).mount('#app')

// test mock server
// if (import.meta.env.VITE_APP_ENV === 'test') {
//     import('./mockProdServer').then(({ setupProdMockServer }) => {
//         setupProdMockServer()
//     })
// }
