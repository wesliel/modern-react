import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Same handlers, running in Node for Vitest.
// Wired up in src/test/setup.ts.
export const server = setupServer(...handlers)
