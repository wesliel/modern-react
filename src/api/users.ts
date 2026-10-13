import type { User } from '../mocks/handlers'

async function request<T>(path: string): Promise<T> {
  const res = await fetch(path)
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<T>
}

export function fetchUsers(): Promise<User[]> {
  return request<User[]>('/api/users')
}

export function fetchUser(id: number): Promise<User> {
  return request<User>(`/api/users/${id}`)
}
