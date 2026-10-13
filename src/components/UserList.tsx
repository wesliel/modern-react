import { useEffect, useState } from 'react'
import { fetchUsers } from '../api/users'
import type { User } from '../mocks/handlers'

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="text-neutral-500">Loading users…</p>
  if (error) return <p className="text-red-600">Error: {error}</p>

  return (
    <ul className="w-full max-w-md divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
      {users.map((user) => (
        <li key={user.id} className="px-4 py-3 text-left">
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-neutral-500">{user.email}</p>
        </li>
      ))}
    </ul>
  )
}
