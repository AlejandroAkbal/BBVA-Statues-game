import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  test('Main game screen renders', async () => {
    const response = await $fetch('/')

    expect(response).toContain('>Statues<')
  })
})
