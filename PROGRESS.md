# POLYMATH — Build Progress

Spec: `POLYMATH_claude_code_prompt2.md` v5. Stack: Next.js 15 (App Router) + TS strict + Tailwind + Dexie + ts-fsrs + Zod. Hosted: Vercel.

## Phase 0 — Scaffold ✅
- [x] Next.js 15 + TS + Tailwind config
- [x] package.json deps (next, react 19, dexie, ts-fsrs, zod, canvas-confetti, lucide-react)
- [x] `.gitignore`, `vercel.json`, `tsconfig.json` (strict)
- [x] PROGRESS.md, agents.md, README.md
- [x] `git init` + remote add + first commit + push

## Phase 1a — Engine core ✅
- [x] Zod domain schema (validates §4 shape)
- [x] Dexie store + versioned migrations (IndexedDB primary, localStorage fallback)
- [x] XP / level / global rank / per-domain rank engine
- [x] Streak engine + grace-day
- [x] FSRS scheduler wrapping `ts-fsrs`
- [x] Mastery % calculator (single source of truth)
- [x] Export/import base64 save code
- [x] State store (signal-pattern) + hooks

## Phase 1b — Layout, Home, Domain detail, Diagrams
- [ ] Root layout + top bar (XP / level / streak / Review badge / theme toggle / save-load)
- [ ] Theme tokens (dark default + light, `prefers-color-scheme`, `forced-colors`, `prefers-contrast`)
- [ ] Home: hero, domain grid, category filter, search, daily quest, streak, 5/15/45 session picker, continue-learning, onboarding
- [ ] Domain detail w/ 8 tabs: Basics · Diagram · Concepts · Zero→Grandmaster · Resources · Missions · Quiz · Flashcards · Cheat-sheet · Counter-view (lazy)
- [ ] Diagram component library: funnel, pyramid, cycle, flow, curve, quadrant, spectrum, venn, tree, network, bars, timeline, sequence, gauge, labelled — theme-aware via CSS vars, a11y

## Phase 1c — Core 15 domains authored
Per §4 v5 quality bar. Mark each ✓ when QA checklist (Appendix C) passes.
- [ ] Human Psychology
- [ ] Learning How to Learn
- [ ] Health, Longevity & How the Body Works
- [ ] Nutrition & Food Science
- [ ] Communication & Storytelling
- [ ] Negotiation & Persuasion
- [ ] Personal Finance
- [ ] Investing & Markets
- [ ] Entrepreneurship & Startups
- [ ] Marketing
- [ ] Tech & Programming
- [ ] AI & Machine Learning
- [ ] Famous Scientific Laws
- [ ] Law & Legal Basics
- [ ] Mental Models & Famous Laws

## Phase 1d — Review · Dashboard · Skill Map · My List
- [ ] Review screen: due-card session, confidence calibration, misconception feedback, weakest-concepts queue, "why this works"
- [ ] Dashboard: mastery radar, total XP, streak, cards reviewed, capability log, calibration score, achievements/trophies
- [ ] Skill Map: category nodes, mastered domains glow, optional Connections graph (Phase 3)
- [ ] My List: bookmarks, notes, saved reflections, curated Paths (≥3) + capstones

## Phase 2 — Polish + deploy
- [ ] Accessibility pass (keyboard nav, ARIA, AA contrast, `prefers-reduced-motion`)
- [ ] Anti-overuse nudge + streak grace-day + ethical-XP rules surfaced
- [ ] Lazy-load domain data (dynamic import per domain)
- [ ] Self-hosted fonts via `@fontsource/*` (optional)
- [ ] vercel.json + Vercel deploy verified
- [ ] PWA manifest + service worker (Phase 3 optional)
- [ ] Final commit + push

## Open notes
- All resource entries currently marked `verify:true` + `lastVerified` per §10 rule 1 — no hallucinated URLs.
- Contested claims carry §11A caveats (Mehrabian 7-38-55, 10,000-hour rule, Love Languages, Walker sleep critiques, Ramsey snowball, big-history popular reads).
- `HOME_COUNTRY = "India"` for localisation hooks (§10).
