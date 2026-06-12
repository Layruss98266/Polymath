# Polymath, Agent Notes

## Project
Single-page-ish learning app teaching ~75 real-world domains from basics to mastery, wrapped in a daily-habit game loop (XP, ranks, streaks, FSRS spaced-repetition flashcards, mastery dashboard, skill map). Built to spec `POLYMATH_claude_code_prompt2.md` v5.

## Stack
- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript strict
- **Styling:** Tailwind CSS w/ CSS variables (theme-aware light/dark)
- **Storage:** Dexie (IndexedDB) primary, localStorage fallback, versioned schema migrations
- **Spaced repetition:** `ts-fsrs` (FSRS, what modern Anki uses)
- **Validation:** Zod (domain schema validated at load)
- **Icons:** lucide-react
- **Confetti:** canvas-confetti (gated on `prefers-reduced-motion`)
- **Host:** Vercel

## Layout
- `app/`, routes: `/`, `/domain/[id]`, `/review`, `/dashboard`, `/skill-map`, `/my-list`
- `app/layout.tsx`, root shell w/ top bar
- `app/globals.css`, theme tokens
- `lib/`, engine: schema, fsrs, xp, persistence, state
- `components/`, diagram library (`components/diagrams/*`), UI pieces
- `data/domains/`, one TS module per domain (typed, validated at load)
- `data/paths.ts`, `data/achievements.ts`
- `PROGRESS.md`, phase-by-phase build tracker (READ this before resuming work)

## Run
```
npm install
npm run dev      # localhost:3000
npm run build
npm run start
npm run typecheck
```

## Hard rules (from spec §0)
1. **No hallucinated facts/resources/links/prices.** Unknown link → `url: ""` + `verify: true`. Better 7 real than 10 w/ 3 fake.
2. **Depth > breadth.** Author domains one at a time using Appendix C QA checklist. No `// TODO` placeholders in shipped build.
3. **Sound like the field's best minds (§11A).** Real mentors, accurate quotes (or none), caveats for contested popular claims (Mehrabian 7-38-55, 10,000-hour rule, Love Languages, Ramsey snowball, Walker sleep critiques).

## Sensitive-domain rules (§10)
`HOME_COUNTRY = "India"`. Finance/Investing/Crypto → "education, not financial advice." Law → universal + local-portal pointer. Medical/Nutrition/Fitness/Sleep/First Aid → "educational, not medical advice." Mental Health → de-stigmatising, never list specific crisis methods, prompt professional help. Sexual Health → clinical/respectful, consent-front. Spirituality → comparative & pluralistic. History → multi-perspective.

## What to avoid
- Don't read the whole `POLYMATH_claude_code_prompt2.md` mid-session unless you need it, work from PROGRESS.md + already-loaded context.
- Don't add domains without running Appendix C QA checklist.
- Don't introduce a state framework, vanilla React + Dexie + tiny store is enough.
- Don't fake URLs to pad resource lists. Mark `verify: true` instead.
- Don't break the "open & run" promise, no server-only features that block static deploy.

## Vercel deploy
`vercel.json` present. `next build` produces `.next/`, Vercel auto-detects. Static-friendly (no server functions required for MVP). Connect Git repo → Vercel imports.
