module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es2021: true
  },

  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],

  plugins: [],

  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0
  }
}
