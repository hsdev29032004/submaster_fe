import type { StorybookConfig } from '@storybook-vue/nuxt'

const config: StorybookConfig = {
    stories: [
        '../components/**/*.mdx',
        '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/experimental-addon-test',
    ],
    framework: {
        name: '@storybook-vue/nuxt',
        options: {},
    },
    viteFinal: async (config) => {
        if (!config.resolve) config.resolve = {}
        if (!config.resolve.alias) config.resolve.alias = {}

        config.resolve.alias['reka-ui'] = '/dev/null'

        return config
    },
}
export default config
