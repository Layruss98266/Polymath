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

## Phase 1b — Layout, Home, Domain detail, Diagrams ✅
- [x] Root layout + top bar (XP / level / streak / Review badge / theme toggle / save-load modal w/ base64 export-import)
- [x] Theme tokens (dark default + light, `prefers-color-scheme`, `forced-colors`, `prefers-contrast`, `prefers-reduced-motion`)
- [x] Home: hero, domain grid, category filter, search, daily quest, streak chip, 5/15/45 session picker, surprise-me random
- [x] Domain detail w/ 10 tabs: Basics · Diagram · Concepts · Zero→Grandmaster · Resources · Missions · Quiz · Flashcards · Cheat-sheet · Counter-view (lazy via state)
- [x] Diagram component library: funnel, pyramid, cycle, flow, curve, quadrant, spectrum, venn, tree, network, bars, timeline, sequence, gauge, labelled — theme-aware via CSS vars, ARIA `role="img"` + focusable groups
- [x] 3 reference domains authored to v5 quality bar: Marketing · AI & ML · Personal Finance — all schema-validated, all pre-render statically
- [x] Placeholder pages for /review, /dashboard, /skill-map, /my-list so all top-bar links resolve

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

## Phase 1d — Review · Dashboard · Skill Map · My List ✅
- [x] Review screen: due-card session w/ FSRS grading, "why this works" rationale, empty state when nothing due, completion screen
- [x] Dashboard: total XP, level, global rank, streak, due-count, mastery radar across all domains, per-domain rank list, achievements, calibration meter
- [x] Skill Map: category-grouped nodes, started domains glow with their hue
- [x] My List: 4 curated Paths (Become hard to manipulate · Money from zero · Build and sell a product · Think clearly) w/ live-domain counters + capstones; bookmarks; saved reflections

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
