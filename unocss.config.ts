import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  shortcuts: [['focus-util', 'outline-none ring-2 ring-indigo-500']],
  presets: [
    presetUno(),
    presetForms(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',

      fonts: {
        sans: 'Inter',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
