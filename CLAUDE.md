# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Unofficial frontend redesign concept for Kvadratkoll.se (Swedish property measurement). UI only: no backend. Site copy is Swedish (`<html lang="sv">`). The site is set to `noindex` because it is a concept.

Do not invent business claims (prices, certifications, customer counts, reviews, statistics, addresses, guarantees). Use clearly marked placeholder copy instead.

## Commands

- `npm run dev`: dev server
- `npm run lint`: ESLint (flat config, `eslint-config-next`)
- `npm run typecheck`: `next typegen && tsc --noEmit` (the typegen step is needed because `LayoutProps`/`PageProps` are generated globals)
- `npm run build`: production build

There is no test suite. After changes, run lint, typecheck, and build.

## Architecture

- `src/app/`: App Router. `layout.tsx` renders the skip link, `Navbar`, `<main id="main">` and `Footer` around every page, and loads fonts (Inter body, Inter Tight display) as CSS variables.
- `src/app/globals.css`: the design system. Tailwind v4 `@theme` tokens (colors `canvas/surface/sand/line/ink/muted/accent`, `rounded-control` / `rounded-card`, `max-w-site`, `leading-display`, `shadow-soft`), base styles (focus ring, heading font), the `section-y` utility for section padding, and reduced-motion handling. Add new tokens here instead of using arbitrary Tailwind values.
- `src/data/`: structured content kept separate from components. `site.ts` holds site meta, the `sectionIds` homepage anchors (shared by nav and page), `primaryCta`, and nav/footer links.
- `src/components/ui/`: primitives. `Button.tsx` exports `buttonStyles()` plus `Button` and `ButtonLink` (a Next `Link`) that share variants. Use `ButtonLink` for navigation CTAs.
- `src/components/layout/`: `Navbar` (server) + `MobileMenu` (the only client component so far), `Footer`, `Logo` (placeholder wordmark).
- `src/components/sections/`: homepage sections. `app/page.tsx` renders `Hero` and then a `plannedSections` list of placeholders. Replace each placeholder with its own section component, keeping its `id`.
- `src/lib/cn.ts`: minimal class-join helper (no clsx/tailwind-merge). It does not resolve conflicting classes, so don't pass a `className` that overrides a utility already in `buttonStyles` (e.g. `hidden` vs `inline-flex`). Wrap the element instead.

Conventions: Server Components by default, and `"use client"` only for interaction. Primary conversion action is "Boka mätning". Touch targets are at least 44px (`min-h-11`).

## Commit rules

- Never create a commit automatically. Only commit when explicitly told to.
- When asked for a commit message, suggest it and wait for explicit approval before committing.
- Commit messages are exactly one line, a single Conventional Commit title: `type(scope): summary` (e.g. `feat(home): add responsive hero section`).
- No commit body or description, no `Co-Authored-By` trailer, and no Claude/AI/assistant/generator attribution of any kind (e.g. "Generated with Claude").

## Git / packages

- Never create/delete/rename branches, merge, rebase, push, pull, change remotes, or rewrite history without explicit permission.
- Check whether a package is really needed before installing it. Don't upgrade dependencies or framework versions unless required.
