import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import UserList from './UserList'

describe('UserList', () => {
  it('renders users from the mocked API', async () => {
    render(<UserList />)
    expect(await screen.findByText('Ada Lovelace')).toBeInTheDocument()
    expect(screen.getByText('grace@example.com')).toBeInTheDocument()
  })
})
