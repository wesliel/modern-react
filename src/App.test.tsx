import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the project heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /modern-react/i })).toBeInTheDocument()
  })

  it('renders links to the docs', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /vite docs/i })).toHaveAttribute('href', 'https://vite.dev')
    expect(screen.getByRole('link', { name: /tailwind docs/i })).toHaveAttribute('href', 'https://tailwindcss.com')
  })
})
