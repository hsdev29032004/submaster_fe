import type { StorybookConfig } from '@storybook-vue/nuxt'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
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
    // Đảm bảo alias tồn tại
    config.resolve ??= {}
    config.resolve.alias ??= {}

    // Fake 'reka-ui' bằng file rỗng
    config.resolve.alias['reka-ui'] = resolve('./.storybook/.mocks/reka-ui.ts')

    return config
  }
}

export default config
