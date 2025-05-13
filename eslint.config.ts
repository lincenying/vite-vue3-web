import { readFile } from 'node:fs/promises'
import lincy from '@lincy/eslint-config'

const autoImport = JSON.parse(
    (await readFile(new URL('./.eslintrc-auto-import.json', import.meta.url))).toString(),
)

const config = lincy(
    {
        formatters: {
            css: false,
            graphql: true,
            html: true,
            markdown: true,
        },
        toml: false,
        pnpm: false,
        overrides: {
            stylistic: {
                'style/jsx-max-props-per-line': ['error', { maximum: 4 }],
            },
            ignores: [
                '**/assets',
                '**/static',
            ],
        },
    },
    {
        languageOptions: {
            globals: {
                ...autoImport.globals,
            },
        },
    },
)

export default config
