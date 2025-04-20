// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  css: ['@/assets/css/main.css', '@/assets/scss/main.scss'],
  app: {
    head: {
      title: 'Sub Master - Bilingual subtitles from any youtube video',
      meta: [
        { name: 'description', content: 'Bilingual subtitles from any youtube video' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link:[
        { rel: 'icon', type: 'image/png', href: 'images/LogoIcon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap' }
      ]
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
})
