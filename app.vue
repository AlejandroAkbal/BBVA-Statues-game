<script setup>
useHead({
  title: 'BBVA Statues game',

  htmlAttrs: {
    lang: 'en'
  },

  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },

    { hid: 'description', name: 'description', content: 'BBVA Statues game' },

    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: '/social.jpg' }
  ],

  link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
