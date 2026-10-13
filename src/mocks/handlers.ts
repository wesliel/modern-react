import { http, HttpResponse } from 'msw'

export interface User {
  id: number
  name: string
  email: string
}

// Mock data shaped like the real API contract.
// When the backend is ready, delete this file's usage —
// the app code stays untouched.
const mockUsers: User[] = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 2, name: 'Grace Hopper', email: 'grace@example.com' },
  { id: 3, name: 'Margaret Hamilton', email: 'margaret@example.com' },
]

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(mockUsers)
  }),

  http.get('/api/users/:id', ({ params }) => {
    const user = mockUsers.find((u) => u.id === Number(params.id))
    if (!user) {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 })
    }
    return HttpResponse.json(user)
  }),
]
