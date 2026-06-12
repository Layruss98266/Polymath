# POLYMATH

> Learn 15 real-world domains from absolute basics to mastery. Daily-habit game loop, FSRS spaced repetition, concept quizzes that map misconceptions, real-world missions, no dark patterns.

A Next.js 15 + React 19 + TypeScript app. All state lives in the browser. No backend, no login, no analytics, no tracking. Deployed on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Layruss98266/Polymath)

---

## What's in the box

### Content
- **15 core domains.** Psychology · Mental Models · Learning · Communication · Negotiation · Marketing · Personal Finance · Investing · Entrepreneurship · AI & ML · Tech · Health · Nutrition · Law · Famous Laws.
- Each domain ships: 8 to 12 concepts (with epistemic-status badges, reflection prompts, beginner + expert registers, misconception-mapping concept quizzes, basic/easy/advanced tasks), 7-stage Novice → Grandmaster roadmap, real ranked free + paid resources (`weight: primary/secondary/popular`, `verify` + `lastVerified` dates), 5+ real-world missions, a capstone boss challenge, 5+ misconception-mapped domain quizzes, 8+ FSRS flashcards, 8+ glossary terms, mentor strip, 2+ theme-aware SVG diagrams, steelman counter-view, printable cheat sheet, optional per-concept inline mini diagram.
- **411 daily quotes** in rotation.
- **Concept enrichment**: every domain has at least 4 fully-enriched concepts (definition, full-form, prereqs, generic, expert, conceptQuiz, conceptTasks). Long-tail enrichment ongoing.

### Screens
- **Home.** Hub-style. Hero + Today summary card + continue-learning rail + concept of the day + catalogue + collapsible ritual strip (daily quote, daily quest, session picker, focus timer).
- **Domain detail.** 10 tabs progressively disclosed (Basics, Concepts, Quiz, Flashcards, Diagram, Roadmap, Resources, Missions, Cheat sheet, Counter view). URL-deep-linkable via `?tab=`.
- **Review.** FSRS scheduler. Keyboard shortcuts (Space flip, 1 Again, 2 Hard, 3 Good, 4 Easy).
- **Dashboard.** Radar + achievements + calibration score + streak heatmap with month labels.
- **Skill map.** Per-domain mastery rings, started vs. unstarted.
- **My list.** Bookmarks + reflections + 4 curated Paths.
- **Search.** Across domains, concepts, glossary. Debounced, 3-char floor, with recent-search history.
- **Settings.** Save / load (base64 + JSON + CSV + Markdown), accessibility (font scale, reduced-motion override, dyslexia-friendly font), reset / wipe.
- **About + Privacy.**

### Engine
- Vanilla state store via `useSyncExternalStore`. Zero state-management dependency.
- Zod schema validated at build (every domain pre-renders, schema mismatch breaks the build loudly).
- Dexie (IndexedDB) primary + localStorage fallback. Versioned migrations.
- `ts-fsrs` for spaced repetition.
- Weekly streak grace (one missed day per ISO week doesn't break the streak).
- Ethical XP. No XP for time-on-screen, only for genuine learning actions. All XP-granting actions deduped against persisted state — anti-farming guards on quiz answers, reflections, and review grades.

### UX
- **Centered SaaS-style nav.** Domains mega menu + Practice dropdown (Review / Dashboard / Skill map / My list) + About.
- **Command palette.** Cmd/Ctrl + K from anywhere.
- **Mobile drawer + bottom nav.** Both surface Practice items with due-count badges.
- **Onboarding** with goal-based domain recommendation + auto-bookmark of recommended domain.
- **Coachmarks** (5-step tour after onboarding).
- **Service worker.** Network-first for navigation, cache-first for hashed assets. Cache key bumps per Vercel deploy.
- **PWA manifest + icons.**
- **A11y.** Focus trap on mega menu, focus restore, `aria-controls` on every menu trigger, `aria-activedescendant` on the command palette, WCAG AA accent contrast on both themes, full keyboard nav including Review.
- **SEO.** Per-page metadata, per-domain Open Graph image, JSON-LD WebApplication, sitemap, RSS feed at `/domains.rss`.
- **Security headers** via `vercel.json`. HSTS w/ preload, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, CSP (`object-src 'none'`, no `unsafe-eval`).

### Diagram library
15 theme-aware SVG generators (funnel, pyramid, cycle, flow, curve, quadrant, spectrum, venn, tree, network, bars, timeline, sequence, gauge, labelled). All CSS-variable driven. Work in light + dark + `forced-colors`. Available at the domain level AND inline per concept.

---

## How the loop works

See progress → take a 2-minute action → earn XP → level up → unlock next thing → daily-quest reminder tomorrow → spaced-repetition review surfaces what's slipping.

No FOMO notifications. No infinite scroll. No streak-shame. No analytics. Anything you write stays in your browser.

---

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # SSG build, fails on any Zod validation error
npm test             # vitest. Pure-function unit tests
npm run typecheck    # tsc --noEmit
npm run lint         # next/core-web-vitals + react-hooks/exhaustive-deps as error
```

CI (`.github/workflows/ci.yml`) runs typecheck, lint, test, build on every PR.

---

## Deploy to Vercel

The easiest path:

1. Push this repo to GitHub.
2. vercel.com → New Project → import. Vercel auto-detects Next.js.
3. Or click the **Deploy with Vercel** button above.

Locally:

```bash
npm install -g vercel
vercel        # preview
vercel --prod # production
```

`vercel.json` ships the security headers. `NEXT_PUBLIC_BUILD_ID` is wired from `VERCEL_GIT_COMMIT_SHA` so the service worker invalidates cleanly per deploy.

---

## Stack

- **Next.js 15** App Router · **React 19** · **TypeScript strict**
- **Tailwind** with CSS-variable theming (light + dark + `forced-colors` + `prefers-contrast` + `prefers-reduced-motion`)
- **Dexie** (IndexedDB) + localStorage fallback
- **ts-fsrs**
- **Zod**
- **lucide-react** (named imports only, no star)
- **canvas-confetti** (gated on `prefers-reduced-motion`)
- **vitest** for unit tests
- No state-management framework

---

## Trust & honesty (the differentiator)

- **Per-claim status badges** on every concept. Settled, debated, or one-framework.
- **Steelman counter-view per domain.** The strongest case against this domain's conventional wisdom.
- **Resource `lastVerified` dates** + `verify` flag. No hallucinated URLs.
- **Contested popular claims carry caveats.** Mehrabian's 7-38-55, 10,000-hour rule, Love Languages, Ramsey snowball vs. avalanche, Walker's *Why We Sleep* critiques, Byron Sharp vs. classic positioning, etc.
- **Sensitive domains carry disclaimers.** Finance = not advice, medical = not advice, law = country-specific, mental health = seek professional support.
- **Localised** to `HOME_COUNTRY = India` for finance, legal, health hooks where it changes the answer.

---

## Project docs

| File | What it covers |
| --- | --- |
| `agents.md` | What an AI assistant or new contributor needs to know first. |
| `AUDIT.md` | Living issue list with status markers per item. |
| `REVIEW.md` | Persona + stack audit from an earlier round. |
| `TODO.md` | Working backlog. |
| `PROGRESS.md` | Phase-by-phase build notes. |
| `POLYMATH_claude_code_prompt2.md` | Original spec (v5). |

---

## License

MIT.
