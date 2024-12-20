import type { CSSOptions } from 'vite'

const charsetRemoval = function () {
    return {
        postcssPlugin: 'internal:charset-removal',
        AtRule: {
            charset: (atRule: any) => {
                if (atRule.name === 'charset') {
                    atRule.remove()
                }
            },
        },
    }
}

const config: CSSOptions = {
    preprocessorOptions: {
        scss: {
            api: 'modern-compiler',
            // 忽略scss global-builtin, import 提示3.0将删除的警告
            silenceDeprecations: ['global-builtin', 'import'],
        },
    },
    postcss: {
        plugins: [
            charsetRemoval(),
        ],
    },
}

export default config
