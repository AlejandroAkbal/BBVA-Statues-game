import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('Render', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  test('Main screen', async () => {
    const response = await $fetch('/')

    expect(response).toContain('>Statues<')
  })
})
