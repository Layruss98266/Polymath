# POLYMATH

> Learn dozens of real-world domains from absolute basics to mastery — wrapped in a daily-habit game loop (XP, ranks, streaks, spaced repetition, mastery dashboard).

A Next.js 15 + TypeScript app built to spec `POLYMATH_claude_code_prompt2.md` v5. Hosted on Vercel.

## What it teaches
~75 domains across 8 categories — psychology, learning, communication, negotiation, marketing, personal finance, investing, entrepreneurship, AI/ML, programming, law, scientific laws, mental models, health, nutrition, and more. Each domain ships with: 8+ concepts (epistemic-status badged), 7-stage roadmap, real ranked resources, real-world missions, misconception-mapped quizzes, FSRS flashcards, glossary, mentor strip, theme-aware diagrams, steelman counter-view, printable cheat-sheet, cross-domain synthesis links.

## How it's addictive (without being manipulative)
- **See progress → take 2-minute action → earn XP → level up → unlock next thing → reminded tomorrow.**
- Daily quest + streak (w/ grace day — one missed day shouldn't nuke a long streak).
- FSRS spaced-repetition review across all started domains.
- Real-world missions you check off ("ask for one discount today").
- 5 / 15 / 45-minute session picker — fits your time, not the other way around.
- **No dark patterns:** no FOMO notifications, no infinite scroll, no guilt-tripping. XP is awarded only for genuine learning actions.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build for Vercel
```bash
npm run build
```
Push to GitHub, import in Vercel — it auto-detects Next.js.

## Stack
- **Next.js 15** App Router + **React 19** + **TypeScript strict**
- **Tailwind CSS** w/ CSS-variable theming (light + dark, `forced-colors`, `prefers-contrast`)
- **Dexie** for IndexedDB (versioned migrations) + localStorage fallback
- **ts-fsrs** — the FSRS algorithm modern Anki uses
- **Zod** — domain schema validated at load
- **canvas-confetti** — gated on `prefers-reduced-motion`
- **lucide-react** — icons

## Trust & honesty
- Per-claim epistemic-status badges: **settled** / **debated** / **one framework**.
- Each domain ships a steelman **counter-view** for its conventional wisdom.
- Resource `lastVerified` dates shown in the UI.
- Contested popular claims carry caveats: Mehrabian 7-38-55, the "10,000-hour rule," Love Languages, Ramsey snowball, big-picture history books.
- Sensitive domains carry the right disclaimers (finance = not advice, medical = not advice, law = vary by country, mental health = seek professional support).

## Status
See `PROGRESS.md` for phase-by-phase build status.

## License
MIT
