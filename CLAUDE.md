# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A marketing/landing page site built with Vite + React 19 + TypeScript + Tailwind CSS v4. Single-page layout, no routing library.

## Commands

```
npm run dev      # start dev server (Vite, HMR)
npm run build    # tsc -b (typecheck) then vite build
npm run preview  # preview the production build locally
npm run lint     # oxlint
```

There is no test runner configured. There is no per-file/single-test command since no test framework is present.

## Architecture

- `src/App.tsx` composes the page from section components in `src/components/`: `Navbar`, `Hero`, `Features`, `Cta`, `Footer`. Each section is self-contained (own markup + Tailwind classes); there's no shared layout wrapper or routing — add new sections by creating a component and importing it into `App.tsx`.
- Styling is Tailwind-only via the `@tailwindcss/vite` plugin (configured in `vite.config.ts`). `src/index.css` is just `@import "tailwindcss";` — there is no separate global stylesheet or CSS-in-JS; all styling is done with utility classes in JSX. Dark mode is handled via Tailwind's `dark:` variant (driven by `prefers-color-scheme`, not a class toggle).
- Static assets referenced from components (e.g. `hero.png`) live in `src/assets/` and are imported directly so Vite fingerprints them. Files that must be served as-is at a fixed URL (e.g. `favicon.svg`, `icons.svg`) live in `public/` instead.
- TypeScript project is split into `tsconfig.json` (root, references-only) + `tsconfig.app.json` (app source) + `tsconfig.node.json` (Vite config itself) — this is the standard Vite TS template split, not custom.
- Linting uses **oxlint**, not ESLint (`.oxlintrc.json`). Type-aware lint rules are not enabled by default (see README for how to add `oxlint-tsgolint` if needed).
