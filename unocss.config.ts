import { webConfig } from '@lincy/unocss-base-config'

const baseConfig = webConfig()

export default {
    ...baseConfig,
    safelist: [
        ...(baseConfig.safelist || []),
        ...Array.from({ length: 10 }, (_, i) => `i-fad-digital${i}`),
    ],
    theme: {
        breakpoints: {
            m1440: '1440px',
            m1360: '1360.1px',
        },
    },
}
