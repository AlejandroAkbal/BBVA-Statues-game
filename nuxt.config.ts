export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@kevinmarrec/nuxt-pwa'],

  experimental: {
    reactivityTransform: true
  },

  unocss: {
    preflight: true
  },

  pwa: {}
})
