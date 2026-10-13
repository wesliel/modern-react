import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Network-level mocks for local development.
// Started from main.tsx when import.meta.env.DEV is true.
export const worker = setupWorker(...handlers)
