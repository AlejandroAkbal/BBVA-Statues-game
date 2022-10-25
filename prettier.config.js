module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: true,

  // Custom
  sortTailwindcssClasses: true,
  sortHtmlAttributes: 'vue',

  plugins: [require('prettier-plugin-tailwindcss')]
}
