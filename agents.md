# AGENTS.md

Single source of truth for any AI assistant or new contributor working on Polymath. Read this first. (Lowercase `agents.md` is the same content; Windows-safe duplicate.)

## What this is

Static Next.js 15 daily-learning encyclopaedia. 15 curated domains, 202 concepts, 411 daily quotes, FSRS spaced repetition, real missions, India-aware. Fully client-side, no backend, no login, no analytics. Deployed on Vercel at `polymath-virid.vercel.app`.

Spec source of truth: `POLYMATH_claude_code_prompt2.md` (v5).

## Stack

- **Next.js 15** App Router, **React 19**, **TypeScript strict**
- **Tailwind CSS** with CSS-variable theming (`--bg`, `--panel`, `--ink`, `--dim`, `--line`, `--hue`, `--good`, `--bad`)
- **Dexie** (IndexedDB) + localStorage fallback, versioned migrations
- **ts-fsrs** for spaced repetition
- **Zod** for schema validation at build (every domain validated at SSG)
- **lucide-react** for icons (named imports only)
- **canvas-confetti** gated on `prefers-reduced-motion`
- Vanilla state store via `useSyncExternalStore` in `lib/state.tsx`. No Redux, no Zustand.
- Service worker at `public/sw.js`. Cache key tied to `NEXT_PUBLIC_BUILD_ID`.
- `next/og` for OpenGraph image generation (per-domain).
- **vitest** for unit + schema tests.

## Run, build, test

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # SSG. Zod fails the build on any schema drift.
npm run typecheck    # tsc --noEmit
npm run test         # vitest run
npm run lint         # ESLint + next/core-web-vitals (react-hooks/exhaustive-deps as error)
```

CI runs `tsc → lint → test → build` on every PR (`.github/workflows/ci.yml`).

## Route map

Public:
- `/` Home (`HomeShell`: hero → stats → today → continue/concept-of-day → recent activity / "more for you" → featured paths → catalogue gate → trust strip → daily rituals).
- `/about`, `/search`, `/share?d=<base64>`, `/domains.rss`, `/sitemap.xml`, `/robots.txt`.

Per-domain (every tab is a real route; no `?tab=` query):
- `/domain/[id]` — Basics overview.
- `/domain/[id]/concepts` — concepts list.
- `/domain/[id]/concepts/[idx]` — single concept canonical share URL with JSON-LD `LearningResource`.
- `/domain/[id]/quiz | flashcards | diagram | roadmap | resources | missions | cheatsheet | counter`.
- `/domain/[id]/sub/[subdomain]` — subdomain page with intro + capabilities + filtered concepts + tagged resources.

Personal (every one is `robots: noindex` AND listed in `robots.txt` disallow):
- `/review`, `/dashboard`, `/skill-map`, `/my-list`, `/settings`, `/share`, `/search`.

## Key files

- `lib/state.tsx` — the store. Every XP-granting action MUST dedupe against persisted state. Patterns: `quizSeen`, `reflectionSeen`, `graduatedCards`.
- `lib/tabs.ts` — single source of truth for tab routing. Use `tabPath()`, `conceptPath()`, `subdomainPath()` everywhere. Never hard-code `/concepts` etc.
- `lib/schema.ts` — Zod. Enforces the enrichment pair invariant (`conceptQuiz`/`conceptTasks` come together; `generic`/`expert` come together). Build fails on drift.
- `lib/mastery.ts` — proven-not-opened formula. Opening = 8%; proven (opened + reflected + quiz ≥ 60%) = 22%; capstone = 20%. Mild concave curve.
- `lib/xp.ts` — rank thresholds raised in round 9. Master = 90%, Grandmaster = 97%.
- `lib/streak.ts` — weekly ISO-week grace. `todayKey` is local-time YYYY-MM-DD.
- `lib/jsonLd.ts` — `safeJsonLd` escapes `</script>` for any `dangerouslySetInnerHTML`.
- `lib/save.ts` — `utf8ToBase64` / `base64ToUtf8` (deprecated `escape`/`unescape` removed).
- `lib/shareRank.ts` — single shallow-mastery estimator used by SettingsView share link and ShareCard.
- `lib/focusTrap.ts` — modal focus trap. Applied to Onboarding, CommandPalette, SaveLoadModal.
- `data/domains/*.ts` — 15 domain content modules. Each default-exports a `Domain`.
- `data/conceptStats.ts` — total concept count snapshot for HomeStats.
- `data/quotes.ts` — 411 quotes. Real attribution only.

## Hard rules

These are project laws.

1. **No em-dashes (—) and no en-dashes (–).** Anywhere. Commas or periods.
2. **No hallucinated URLs.** Unknown → `url: ""`, `verify: true`. Never invent.
3. **`HOME_COUNTRY` = India.** Finance, law, health, nutrition default to Indian context (SEBI, RBI, IRDAI, BNS, BNSS, BSA, FSSAI, NPS, PPF, ELSS, Sec 80C/80D, ICMR-NIN, DPDPA 2023).
4. **Theme tokens.** Dark `--hue: #ff6b5e` and `--bg: #0b0d1a`. Light overrides `--hue: #d94a3d` for AA contrast on white. Do not change.
5. **No backend.** CSP enforces `connect-src 'self'`. No fetch off-origin.
6. **Privacy is the product.** No analytics, no tracking, no third-party scripts.
7. **Status badges on every concept.** Settled / debated / framework. Not optional.
8. **Anti-XP-farm.** Every XP-granting action persists a "seen" set: `quizSeen`, `reflectionSeen`, `graduatedCards`. Local component state is not enough.
9. **Enrichment pair invariant.** `conceptQuiz` ↔ `conceptTasks` come together. `generic` ↔ `expert` come together. Zod enforces.

## Common gotchas

- `DOMAIN_INDEX` is an **array** of meta entries. Use `.find(d => d.id === ...)` not bracket indexing.
- Full domain content is dynamic-imported per id via `loadDomain(id)`. Wrapped in React `cache()`.
- Tabs are real routes. Backward-compat: `/domain/[id]?tab=concepts` redirects via `components/domain/TabQueryRedirect.tsx`.
- Print mode hides header, footer, BottomNav, FAB. CheatsheetTab is the only print-designed surface.
- ServiceWorker registers only in production. SW cache key is `polymath-<NEXT_PUBLIC_BUILD_ID>`.

## What NOT to do

- Don't re-introduce `?tab=` style routing.
- Don't grant XP without the dedupe guard pattern.
- Don't hard-code paths; use `lib/tabs.ts` helpers.
- Don't add a backend dependency without rewriting the privacy claim on `/about`.
- Don't ship a concept with only half the enrichment pair (Zod will fail the build).
- Don't ship em or en dashes.
- Don't write to `localStorage` from a non-React-tree module; go through `lib/db.ts`.

## File map

- `app/` — Next.js App Router routes, root layout, sitemap, robots, RSS, icon generators.
- `components/`
  - `components/domain/` — route-segment domain chrome (Header, TabBar, SubdomainStrip, Provider, TabQueryRedirect, ConceptDeepPage, SubdomainPage).
  - `components/tabs/` — per-tab content.
  - Home strip: `HomeShell`, `HomeStats`, `StartHereBento`, `MoreForYouRow`, `RecentActivityRail`, `FeaturedPaths`, `TrustStrip`, `TodayCard`.
  - Surfaces: `TopBar`, `BottomNav`, `Footer`, `MegaMenu`, `PracticeMenu`, `CommandPalette`, `SearchView`, `ReviewSession`, `Dashboard`, `MyList`, `SettingsView`, `AboutView`, `ShareView`, `ShareCard`, `Onboarding`, `Coachmarks`, `Toaster`, `RouteAnnouncer`, `OveruseNudge`, `KeyboardShortcuts`, `ScrollTopFab`.
- `lib/` — engine.
- `data/` — content modules.
- `tests/` — vitest (`xp`, `streak`, `mastery`, `save`, `schema`, `quotes`).
- `public/` — `sw.js`, `manifest.webmanifest`.
- `.github/workflows/ci.yml` — CI pipeline.

## Where context lives

- `README.md` — public README.
- `AUDIT.md` — living issue list with status markers.
- `TODO.md` — working backlog.
- `PROGRESS.md` — phase-by-phase build notes.
- `PLAN.md` — current architecture plan.
- `REVIEW.md` — persona + stack audit (early).
- `IMPROVEMENTS.md`, `FINDINGS-3.md`, `CODE-REVIEW-A.md`, `CODE-REVIEW-B.md` — audit outputs.
- `TEST-*.md` — per-domain end-to-end test reports.
- `PERSONA-*.md` — persona-based UX/strategy reviews (5 personas).
- `research_notes.md` — Antigravity research deliverables.
- `POLYMATH_claude_code_prompt2.md` — original spec (v5).
- `CONTRIBUTING.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md`, `CHANGELOG.md` — project meta.

When you finish a substantive change, update `AUDIT.md` AND `TODO.md` AND this file in the same commit.

## Commit hygiene

- Conventional Commits format. Subject ≤ 50 chars. Body explains why, not just what.
- Never push without permission. Run `tsc --noEmit` first.
- Never amend pushed commits. Never force push.
- No secrets ever. No env vars. Nothing to leak.

## Co-author tag

When AI assistants ship a commit:

```
Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```
