<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
