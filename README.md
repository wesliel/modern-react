# modern-react

A modern React starter: **React 19 + TypeScript + Vite**, styled with **Tailwind CSS v4**,
tested with **Vitest + Testing Library**, linted with **Oxlint**.

## Getting started

```sh
npm install
npm run dev
```

## Scripts

| Script            | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR  |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run test`    | Run unit tests once (Vitest)        |
| `npm run test:watch` | Run tests in watch mode          |
| `npm run lint`    | Lint with Oxlint                    |

## Conventions

- Components live in `src/` as `*.tsx`; colocate tests as `*.test.tsx` next to them.
- Global styles: `src/index.css` (Tailwind v4 — use `@import "tailwindcss"` and the `@theme` directive for design tokens).
- Test setup (jest-dom matchers): `src/test/setup.ts`, wired via `vite.config.ts`.
