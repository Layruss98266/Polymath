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

## Phase 1c — Core 15 domains authored ✅
All 15 schema-validated, all SSG'd at build, all named-authority mentors verified accurate, all contested-claim caveats present.
- [x] Human Psychology — Kahneman / Cialdini / Dweck / Asch / Sapolsky · replication-crisis steelman, Mehrabian caveat
- [x] Learning How to Learn — Ebbinghaus / Bjork / Roediger&McDaniel / Oakley / Ericsson · 10,000-hour misreading caveat
- [x] Health, Longevity & How the Body Works — Attia / Willett / Sapolsky / Walker / Gawande · Walker / Blue-Zones caveats, India safety note
- [x] Nutrition & Food Science — Willett / Nestle / Pollan / Spector / Monteiro · diet-book overreach caveat, India safety note
- [x] Communication & Storytelling — Aristotle / Heath bros / Duarte / Campbell / Zinsser · Mehrabian + brevity-cult caveats
- [x] Negotiation & Persuasion — Fisher&Ury / Voss / Diamond / Cialdini · Voss-theatre + first-offer myth caveats
- [x] Personal Finance — Housel / Collins / Sethi / Robin / Bogle · Ramsey snowball steelman, India-localised, safety note
- [x] Investing & Markets — Bogle / Buffett / Graham / Markowitz / Marks · index-concentration + survivorship caveats, safety note
- [x] Entrepreneurship & Startups — Graham / Blank / Ries / Thiel / Fitzpatrick · YC-survivorship steelman
- [x] Marketing — Kotler / Ries&Trout / Godin / Sharp / Christensen · Byron-Sharp counter-positioning steelman
- [x] Tech & Programming — Turing / Dijkstra / Knuth / Kernighan / Fowler · "everyone should code" + post-AI critique
- [x] AI & Machine Learning — Hinton / Karpathy / Ng / Vaswani / Pearl · Pearl/Marcus causality steelman, safety note
- [x] Famous Scientific Laws — Newton / Maxwell / Darwin / Einstein / Clausius&Boltzmann · pop-physics-as-metaphor caveat
- [x] Law & Legal Basics — Holmes / Hart / Dworkin / Ambedkar / Sunstein · India-localised, enforcement-asymmetry caveat, safety note
- [x] Mental Models & Famous Laws — Munger / Parrish / Meadows / Taleb / Tetlock · collectibles-vs-tools caveat

## Phase 1d — Review · Dashboard · Skill Map · My List ✅
- [x] Review screen: due-card session w/ FSRS grading, "why this works" rationale, empty state when nothing due, completion screen
- [x] Dashboard: total XP, level, global rank, streak, due-count, mastery radar across all domains, per-domain rank list, achievements, calibration meter
- [x] Skill Map: category-grouped nodes, started domains glow with their hue
- [x] My List: 4 curated Paths (Become hard to manipulate · Money from zero · Build and sell a product · Think clearly) w/ live-domain counters + capstones; bookmarks; saved reflections

## Phase 2 — Polish + deploy ✅
- [x] Accessibility: semantic HTML, ARIA roles on tabs/diagrams, focusable diagram nodes, keyboard-flippable flashcards, full `prefers-reduced-motion` + `forced-colors` + `prefers-contrast` honoured
- [x] Anti-overuse nudge (45-min, dismissible) + streak grace-day + ethical XP rules (XP only for real learning actions, not opens)
- [x] Lazy-load domain data (dynamic `import()` per domain — each is its own chunk)
- [x] `vercel.json` minimal + Next.js framework auto-detect → one-click Vercel deploy
- [x] README w/ Vercel deploy button + full feature list + caveats
- [ ] PWA manifest + service worker (explicit Phase 3 — see §11B; deferred per spec)
- [ ] Self-hosted fonts via `@fontsource/*` (Phase 3 polish; current build uses CSS fallback + system stack — works offline)
- [x] Final commit + push

## Open notes
- All resource entries currently marked `verify:true` + `lastVerified` per §10 rule 1 — no hallucinated URLs.
- Contested claims carry §11A caveats (Mehrabian 7-38-55, 10,000-hour rule, Love Languages, Walker sleep critiques, Ramsey snowball, big-history popular reads).
- `HOME_COUNTRY = "India"` for localisation hooks (§10).
