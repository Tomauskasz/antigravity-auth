import { describe, expect, it } from 'bun:test'
import { fileURLToPath } from 'node:url'

import { Host } from '@opencode-ai/plugin/host'

const packageRoot = fileURLToPath(new URL('..', import.meta.url))
describe('OpenCode 2 package manifest', () => {
  it('resolves the built server entry through the real host resolver', () => {
    const entrypoints = Host.resolve({
      directory: packageRoot,
      name: '@cortexkit/opencode-v2-antigravity-auth',
    })

    expect(entrypoints.server).toBe(
      new URL('../dist/plugin.js', import.meta.url).href,
    )
    expect(fileURLToPath(entrypoints.server!)).toStartWith(packageRoot)
  })
})
