# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server (after build)
```

No test runner is configured yet.

## Architecture

**Stack:** Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript 5

**App Router** is used — all routes live under `src/app/`. The `@/*` path alias maps to `./src/*`.

**React Compiler** is enabled (`reactCompiler: true` in [next.config.ts](next.config.ts)), which automatically memoizes components. Do not add manual `useMemo`/`useCallback` unless there is a specific reason the compiler cannot handle it.

**Tailwind CSS v4** is configured via `@tailwindcss/postcss`. Theme tokens (colors, fonts) are defined as CSS variables inside `globals.css` using the `@theme inline` directive — not in a separate `tailwind.config` file.

**Fonts** are loaded via `next/font/google` in the root layout and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
