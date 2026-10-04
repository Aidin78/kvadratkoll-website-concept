# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Unofficial frontend redesign concept for Kvadratkoll.se (Swedish property measurement). UI only: no backend. The site is bilingual: Swedish (primary) and English. The site is set to `noindex` because it is a concept.

Do not invent business claims (prices, certifications, customer counts, reviews, statistics, addresses, guarantees). Use clearly marked placeholder copy instead.

## Commands

- `npm run dev`: dev server
- `npm run lint`: ESLint (flat config, `eslint-config-next`)
- `npm run typecheck`: `next typegen && tsc --noEmit` (the typegen step is needed because `LayoutProps`/`PageProps` are generated globals)
- `npm run build`: production build

There is no test suite. After changes, run lint, typecheck, and build.

## Architecture

- **i18n routing:** every route lives under `src/app/[lang]/` (`sv` | `en`, configured in `src/i18n/config.ts`). `[lang]/layout.tsx` is the root layout: it sets `<html lang>`, has `dynamicParams = false` (unknown locales give a 404), and renders the skip link, `Navbar`, `<main id="main">` and `Footer`. `next.config.ts` redirects `/` to `/sv`.
- **Copy:** every translatable string lives in `src/i18n/dictionaries/{sv,en}.ts`, both typed by `Dictionary` (`src/i18n/types.ts`), so adding a key means adding it to both. Server Components call `getDictionary()` / `getLocale()` from `src/i18n/get-dictionary.ts`. These read the locale through `next/root-params`, so `lang` is not prop-drilled. Client Components can't use them: pass strings down as props (see `MobileMenu`'s `labels`).
- **Links:** build internal hrefs with `homeHref(locale)` / `sectionHref(locale, sectionId)` from `src/data/site.ts`. Homepage section anchors are the `SectionId` union in `src/types`, and are the same in both locales.
- `src/app/globals.css`: the design system. Tailwind v4 `@theme` tokens (colors `canvas/surface/sand/line/ink/muted/accent`, `rounded-control` / `rounded-card`, `max-w-site`, `leading-display`, `shadow-soft`), base styles (focus ring, heading font), the `section-y` utility for section padding, and reduced-motion handling. Add new tokens here instead of using arbitrary Tailwind values.
- `src/components/ui/`: primitives that receive props only. `Button.tsx` exports `buttonStyles()` plus `Button` and `ButtonLink` (a Next `Link`) that share variants. Use `ButtonLink` for navigation CTAs.
- `src/components/layout/`: `Navbar`, `Footer` (async server), `MobileMenu` and `LanguageSwitcher` (client), `Logo` (placeholder wordmark).
- `src/components/sections/`: homepage sections (async Server Components that read their own dictionary slice). `[lang]/page.tsx` renders `Hero`, `TrustIndicators`, `Services`, `Process`, and then placeholders from `dict.plannedSections`. Replace each placeholder with its own section component, using its `SectionId` as the section `id`.
- `TrustIndicator.confirmed: false` renders a `*` placeholder marker plus a footnote. Keep unconfirmed figures marked this way.
- `src/lib/cn.ts`: minimal class-join helper (no clsx/tailwind-merge). It does not resolve conflicting classes, so don't pass a `className` that overrides a utility already in `buttonStyles` (e.g. `hidden` vs `inline-flex`). Wrap the element instead.

Conventions: Server Components by default, and `"use client"` only for interaction. Primary conversion action is "Boka mätning" / "Book a measurement". Touch targets are at least 44px (`min-h-11`).

## Commit rules

- Commit and push to `main` by default once a change is complete and lint, typecheck and build pass. No need to ask first.
- Split work into meaningful commits by topic.
- Commit messages are exactly one line, a single Conventional Commit title: `type(scope): summary` (e.g. `feat(home): add responsive hero section`).
- No commit body or description, no `Co-Authored-By` trailer, and no Claude/AI/assistant/generator attribution of any kind (e.g. "Generated with Claude").

## Git / packages

- Work on `main` only. Never create/delete/rename branches, merge, rebase, force push, change remotes, or rewrite history without explicit permission.
- Check whether a package is really needed before installing it. Don't upgrade dependencies or framework versions unless required.
