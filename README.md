# POLYMATH

> Learn dozens of real-world domains from absolute basics to mastery , wrapped in a daily-habit game loop (XP, ranks, streaks, spaced repetition, mastery dashboard).

A Next.js 15 + TypeScript app built to spec `POLYMATH_claude_code_prompt2.md` v5. Hosted on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Layruss98266/Polymath)

## What's in the box (current build)

- **15 Core domains** fully authored , Psychology · Learning · Communication · Negotiation · Marketing · Personal Finance · Investing · Entrepreneurship · Tech & Programming · AI & ML · Famous Scientific Laws · Law · Mental Models · Health · Nutrition
- Every domain ships: 8+ concepts (with epistemic-status badges + reflection prompts), 7-stage Novice→Grandmaster roadmap, real ranked resources (`verify: true`, `lastVerified` dates), 5+ real-world missions, a capstone "boss challenge," 5+ misconception-mapped quizzes with confidence calibration, 8+ FSRS flashcards, 8+ glossary terms, mentor strip ("Stand on giants"), 2+ theme-aware SVG diagrams, steelman counter-view, printable cheat-sheet
- **6 screens** , Home (hero + daily quest + 5/15/45 session picker + domain grid) · Domain detail (10 tabs) · Review (FSRS) · Dashboard (radar + achievements + calibration) · Skill Map · My List (bookmarks + reflections + 4 curated Paths)
- **Engine** , Zod-validated domain schema · Dexie (IndexedDB) primary + localStorage fallback · versioned save migrations · `ts-fsrs` scheduler · streak with grace-day · base64 export/import save code · ethical XP rules
- **Theme-aware diagram library** , 15 generators (funnel, pyramid, cycle, flow, curve, quadrant, spectrum, venn, tree, network, bars, timeline, sequence, gauge, labelled) , all CSS-variable-driven, working in light + dark + forced-colors
- **Anti-overuse nudge** at ~45 minutes; **streak grace-day** so one missed day doesn't nuke progress; **per-claim status badges** (settled / debated / one framework); **safety notes** on finance, investing, AI, health, nutrition, law

## How it's addictive (without being manipulative)

- **See progress → take a 2-minute action → earn XP → level up → unlock next thing → reminded tomorrow.**
- Daily quest + streak (with grace day , one missed day shouldn't nuke a long streak).
- FSRS spaced-repetition review across all started domains.
- Real-world missions you check off ("ask for one discount today").
- 5 / 15 / 45-minute session picker , fits your time, not the other way around.
- **No dark patterns.** No FOMO notifications. No infinite scroll. No guilt-tripping. XP only for genuine learning actions (recall, missions, reflections, calibrated answers , never time-on-screen).

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

The easiest path:

1. Push this repo to GitHub (or your own fork).
2. Go to vercel.com → **New Project** → import the repo. Vercel auto-detects Next.js , no configuration needed.
3. Or click the **Deploy with Vercel** button above.

Locally:

```bash
npm install -g vercel
vercel        # first deploy (preview)
vercel --prod # production deploy
```

`vercel.json` is present and minimal , framework is set to Next.js, everything else is sensible defaults.

## Stack

- **Next.js 15** App Router + **React 19** + **TypeScript strict**
- **Tailwind CSS** w/ CSS-variable theming (light + dark, `forced-colors`, `prefers-contrast`, `prefers-reduced-motion`)
- **Dexie** for IndexedDB (versioned migrations) + localStorage fallback
- **ts-fsrs** , the FSRS algorithm modern Anki uses
- **Zod** , domain schema validated at build (every domain pre-renders, so any schema mismatch breaks the build, loudly)
- **canvas-confetti** + **lucide-react** , small, optional
- **No state framework** , vanilla `useSyncExternalStore` + a tiny store

## Trust & honesty (the differentiator)

- **Per-claim status badges**: each concept declares whether it's settled, debated, or one-framework.
- **Steelman counter-view per domain** , the strongest case against this domain's conventional wisdom.
- **Resource `lastVerified` dates** + `verify: true` flag , no hallucinated URLs.
- **Contested popular claims carry caveats**: Mehrabian's 7-38-55, the "10,000-hour rule," Love Languages (where relationships ship), Ramsey snowball vs. avalanche, Walker's "Why We Sleep" critiques, Byron Sharp vs. classic positioning.
- **Sensitive domains carry the right disclaimers**: finance = not advice, medical = not advice, law = vary by country, mental health = seek professional support.
- **Localised** to `HOME_COUNTRY = "India"` for finance/legal/health hooks.

## Status

See `PROGRESS.md` for phase-by-phase build status. As of latest commit: **all 5 phases (0, 1a, 1b, 1c, 1d) complete.**

Built per spec `POLYMATH_claude_code_prompt2.md` v5.

## License

MIT.
