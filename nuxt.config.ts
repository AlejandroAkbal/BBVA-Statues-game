export default defineNuxtConfig({
  ssr: false,

  experimental: {
    reactivityTransform: true
  },

  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@kevinmarrec/nuxt-pwa'],

  unocss: {
    preflight: true
  }

  // TODO: Configure PWA
})
