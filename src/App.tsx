import UserList from './components/UserList'

export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight">
        modern-react
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        React + TypeScript + Vite + Tailwind CSS + Vitest. Ready to build.
      </p>
      <div className="flex gap-3">
        <a
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer"
        >
          Vite docs
        </a>
        <a
          className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind docs
        </a>
      </div>
      <section className="flex w-full flex-col items-center gap-3">
        <h2 className="text-xl font-semibold">Mocked API demo</h2>
        <UserList />
      </section>
    </main>
  )
}
