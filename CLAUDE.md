# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Frontend redesign proposal for the client Kvadratkoll.se (Swedish property measurement). UI only: no backend. The site is bilingual: Swedish (primary) and English. The site is set to `noindex` because it is a concept.

Business facts, prices and contact details come from the real site kvadratkoll.se (fetched October 2026): see `src/data/site.ts`, `src/data/pricing.ts` and the dictionaries. Do not invent claims beyond that source (prices, certifications, counts, reviews, guarantees). Use clearly marked placeholder copy for anything unconfirmed. The logo, SIS badge and photos are the client's own assets from kvadratkoll.se, in `src/assets/images/` and referenced through `src/data/images.ts` (static imports for `next/image`). The favicon is `src/app/icon.png`. Kvadratkoll's real example drawing is served from `public/files/`.

## Commands

- `npm run dev`: dev server
- `npm run lint`: ESLint (flat config, `eslint-config-next`)
- `npm run typecheck`: `next typegen && tsc --noEmit` (the typegen step is needed because `LayoutProps`/`PageProps` are generated globals)
- `npm run build`: production build

There is no test suite. After changes, run lint, typecheck, and build.

## Architecture

- **i18n routing:** every route lives under `src/app/[lang]/` (`sv` | `en`, configured in `src/i18n/config.ts`). `[lang]/layout.tsx` is the root layout: it sets `<html lang>`, has `dynamicParams = false` (unknown locales give a 404), and renders the skip link, `Navbar`, `<main id="main">` and `Footer`. `next.config.ts` redirects `/` to `/sv`. 404s: `[lang]/[...rest]/page.tsx` sends unknown paths under a locale to the localized `[lang]/not-found.tsx` (the catch-all also sets the 404 title, since not-found can't export metadata). URLs without a valid locale hit `src/app/global-not-found.tsx` (experimental `globalNotFound` flag), a standalone Swedish/English page.
- **Copy:** every translatable string lives in `src/i18n/dictionaries/{sv,en}.ts`, both typed by `Dictionary` (`src/i18n/types.ts`), so adding a key means adding it to both. Server Components call `getDictionary()` / `getLocale()` from `src/i18n/get-dictionary.ts`. These read the locale through `next/root-params`, so `lang` is not prop-drilled. Client Components can't use them: pass strings down as props (see `MobileMenu`'s `labels`).
- **Links:** build internal hrefs with `homeHref(locale)` / `sectionHref(locale, sectionId)` from `src/data/site.ts`. Homepage section anchors are the `SectionId` union in `src/types`, and are the same in both locales.
- `src/app/globals.css`: the design system. Tailwind v4 `@theme` tokens (colors `canvas/surface/sand/line/ink/muted/accent`, `rounded-control` / `rounded-card`, `max-w-site`, `leading-display`, `shadow-soft`), base styles (focus ring, heading font), the `section-y` utility for section padding, and reduced-motion handling. Add new tokens here instead of using arbitrary Tailwind values.
- `src/components/ui/`: primitives that receive props only. `Button.tsx` exports `buttonStyles()` plus `Button` and `ButtonLink` (a Next `Link`) that share variants. Use `ButtonLink` for navigation CTAs.
- `src/components/layout/`: `Navbar`, `Footer` (async server), `MobileMenu` and `LanguageSwitcher` (client), `Logo` (client logo image).
- `src/components/sections/`: homepage sections, in order: `Hero`, `TrustIndicators`, `Services`, `Process`, `WhyUs`, `FloorPlanExample`, `Pricing`, `Faq`, `Booking`. They are async Server Components that read their own dictionary slice, and each uses its `SectionId` as the section `id`. `BookingForm` is a client component.
- **Data vs. copy:** locale-independent data lives in `src/data/` (`pricing.ts` price brackets and surcharge amounts, `floor-plan-example.ts` geometry). Labels are keyed by id in the dictionaries. Format numbers, areas and prices per locale with `src/lib/format.ts`.
- **Booking form:** `src/lib/booking.ts` has the `BookingRequest` type and a placeholder `submitBookingRequest()`, since there is no backend. Replace its body with the real API call when one exists. The form shows a visible "concept version" notice.
- `src/components/ui/FormField.tsx`: label/hint wrapper plus shared `fieldStyles` for inputs.
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
