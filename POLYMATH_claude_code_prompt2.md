# BUILD PROMPT FOR CLAUDE CODE — "POLYMATH" (v5)

> Paste everything below the line into Claude Code. It is a complete build spec.
> Edit the **`HOME_COUNTRY`** line in §10 first (localises law/finance/resources; default India).
>
> **New in v5 — the app should make people *measurably better*, not just busier.** Added a learning-effectiveness & trust layer (§11C): test-first recall, misconception-mapped quiz distractors, confidence calibration, capability statements ("you can now…"), apply-to-your-life reflection, per-claim epistemic-status badges, a steelman counter-view per domain, time-boxed 5/15/45-min sessions, test-out pre-assessment, a weakest-concepts queue, printable cheat-sheets, a streak grace-day, and anti-overuse guardrails. Architecture hardened (schema validation, versioned/migratable saves, IndexedDB, lazy loading). Some flashy features are now explicitly **optional/Phase 3**. Plus a single-domain **authoring template + QA checklist** (Appendix C) so domains are added one-at-a-time, deep, not in one shallow batch.
>
> *Earlier:* v4 grounded every domain in the field's real authorities (§11A) and made diagrams a theme-aware SVG component library (§5); v3 set the core engine, schema, and gamification.
>
> *Latest update:* the **domain catalogue (§3) is expanded to ~75 domains across 8 categories** (added Creative & Expression and Practical Life & Systems, plus many new domains), and a **best-in-class toolchain (§9A)** is specified — FSRS spaced repetition (`ts-fsrs`), Dexie for IndexedDB, Zod validation, self-hosted fonts, and an optional Vite + TypeScript track — without breaking the "opens by double-click, offline" guarantee.

---

## 0. YOUR ROLE

You are a senior front-end engineer **and** a polymath curriculum designer. Build a single-page, offline-capable web app called **POLYMATH** that teaches dozens of real-world domains from absolute basics to mastery, wrapped in an addictive game loop (XP, levels, ranks, streaks, daily quests, spaced-repetition flashcards, a skill map, and a mastery dashboard).

A working reference version already exists (13 domains, XP/level/rank system, daily quest, save/load). Treat its structure and writing voice as the **baseline quality bar** and make everything below it bigger, deeper, more visual, and more interactive. If I paste that reference file alongside this prompt, reuse its data verbatim for those 13 domains and expand outward.

**Three rules that override everything else:**
1. **Never invent resources, authors, prices, statistics, or URLs.** If you're not certain a book/course/site exists, either omit it or mark it `"verify": true` and leave the link blank. It is far better to ship 7 real resources than 10 with 3 hallucinated ones. Where you have web access, verify current titles, authors and links and use real URLs; otherwise leave `url: ""` and add a `"verify": true` flag the UI will surface as a small "check link" note.
2. **Build for depth, not just breadth.** A half-empty domain is worse than a missing one. Fully author the **Core 15** first (§3), ship a working app, then expand. Do not stub domains with `// TODO` placeholder content in the shipped build.
3. **Sound like the field's best minds, not like a generic summary (§11A).** Every domain's concepts, examples and frameworks must reflect the people and models the field actually reveres — name them, use their real frameworks, and quote them only when the quote is accurate (otherwise paraphrase). Where a popular idea is contested (e.g. Mehrabian's 7-38-55 rule, the "10,000-hour rule" misreading of Ericsson, single-study health claims), present it with the caveat rather than as settled fact. Attributing wisdom to the wrong person, or dressing a generic platitude up as an authority's framework, is a failure.

---

## 1. THE CONCEPT (what makes it addictive)

The hook is a tight learning loop the user wants to repeat daily:

**See progress → take a 2-minute action → earn XP → level up a rank → unlock the next thing → get reminded tomorrow.**

Concretely, "addictive but actually educational" comes from:
- **Visible momentum** — XP bar, level ring, per-domain mastery %, global rank, and per-domain ranks that visibly climb.
- **Daily quest + streak** — one small thing a day; breaking the streak should sting a little.
- **Spaced-repetition flashcards** — the single most effective learning mechanic; this is the "just one more card" loop. Cards resurface on an Anki-style schedule.
- **Real-world missions** — short tasks done OUTSIDE the app ("ask for one discount today") that the user checks off. This is what stops it being trivia.
- **Surprise & variety** — random-domain button, achievements/badges, confetti on level-up.
- **Zero friction** — opens instantly, no login, progress saved locally, works offline.

Do **not** make it manipulative (no fake urgency, no dark patterns, no infinite-scroll dopamine traps). The reward should always be tied to genuine learning actions.

---

## 2. SCOPE & BUILD ORDER (read this before coding)

Ship in phases so the app is always runnable:

- **Phase 1 — Engine + Core 15 fully authored.** All systems working (XP, ranks, streaks, flashcards, dashboard, save/load) with 15 complete domains.
- **Phase 2 — Expand to the full catalogue (§3).** Add remaining domains using the same schema and quality bar.
- **Phase 3 — Polish.** Diagrams for every domain, achievements, skill-map view, search, theme toggle, accessibility pass.

At the end of each phase the app must run by simply opening `index.html`. Tell me clearly which phase you completed and what's left.

**Depth beats breadth.** Author domains **one at a time** using the template + QA checklist in Appendix C, and run that checklist before moving on. Five excellent domains beat fifteen shallow ones; it's fine to ship fewer than 15 in Phase 1 if that's what depth requires — just tell me which you completed. Resource lists rot, so treat §11A/§11C verification as part of "done," not a nicety.

---

## 3. DOMAIN CATALOGUE

This is the full **menu** (~75 domains across 8 categories) — not a Phase-1 commitment. Each domain has a stable `id`, an emoji `icon`, and an accent `hue` (distinct, accessible). **Core 15** are marked ★ — author these first, to full v5 depth, before widening. Per §2, fewer-but-deeper wins: it is fine to ship the Core 15 in Phase 1 and grow into the rest one domain at a time (Appendix C). Keep ≥30 domains total over the project and all 15 Core domains.

**MIND & SELF**
- ★ Human Psychology
- ★ Learning How to Learn *(meta-skill — surface it prominently)*
- Mental Health & Emotional Regulation
- Philosophy & Critical Thinking
- Logic, Reasoning & Argument *(fallacies, Bayesian thinking, debate)*
- Mental Models & Famous "Laws" *(Pareto, Murphy, Occam…)*
- Habits & Productivity
- Focus, Attention & Deep Work
- Memory & Mnemonics
- Creativity & Idea Generation
- Emotional Intelligence
- Decision-Making Under Uncertainty
- Spirituality, Meaning & Contemplative Practice

**BODY & HEALTH**
- ★ Health, Longevity & How the Body Works
- ★ Nutrition & Food Science
- Fitness, Strength & Movement
- Sleep & Recovery
- Stress & the Nervous System
- Sexual Health & Intimacy *(see §10 for required tone/scope)*
- How Medicine & the Healthcare System Work *(being a literate patient)*
- First Aid & Survival

**PEOPLE & INFLUENCE**
- ★ Communication & Storytelling
- ★ Negotiation & Persuasion
- Body Language
- Public Speaking & Presence
- Sales
- Conflict Resolution & Difficult Conversations
- Relationships & Dating
- Parenting & Raising Kids
- Leadership & Management
- Networking & Social Capital
- Cross-Cultural Fluency

**MONEY & WORK**
- ★ Personal Finance
- ★ Investing & Markets
- Crypto & Web3
- ★ Entrepreneurship & Startups
- ★ Marketing
- Sales Funnels & Growth
- Economics *(micro, macro, game theory basics)*
- Accounting & Financial Literacy *(reading a P&L / balance sheet)*
- Taxes & You
- Real Estate & Housing
- Freelancing & The Solo Business
- Career Strategy & Job-Hunting
- Content Creation & Personal Brand
- Product & Project Management

**TECH & FUTURE**
- ★ Tech & Programming
- ★ AI & Machine Learning *(how it works + how to use it well)*
- Working With AI / Prompt Engineering *(practical, distinct from the theory above)*
- Data Science & Analytics
- Cybersecurity & Privacy
- Data, Statistics & Probability
- The Internet & How Computers Work
- No-Code & Automation
- Cloud, DevOps & How Software Ships *(intro)*

**WORLD & KNOWLEDGE**
- ★ Famous Scientific Laws
- ★ Law & Legal Basics
- History & Geopolitics
- Civics & How Systems Work
- Economics of the News *(media literacy & misinformation)*
- Geography & The Map of the World
- Climate, Energy & The Environment
- Space & Astronomy
- Comparative Religion & Belief Systems
- Ethics & Moral Reasoning

**CREATIVE & EXPRESSION** *(new)*
- Writing & Rhetoric
- Design & Visual Thinking
- Music: Theory & Appreciation
- Photography & Video
- Drawing & Art Fundamentals
- Cooking & The Science of Flavour

**PRACTICAL LIFE & SYSTEMS** *(new)*
- Time & Life Management
- Personal Organisation & Digital Hygiene
- Home, Repairs & Maintenance
- Travel & Navigation
- Emergency Preparedness
- Learning a New Language *(the practical method)*

(You may merge/split where it improves clarity. Tag overlaps with `synthesis` links rather than duplicating content — e.g. Stress ↔ Mental Health, Prompt Engineering ↔ AI/ML, Media Literacy ↔ Critical Thinking.)

---

## 4. PER-DOMAIN CONTENT SCHEMA

Every domain is a data object. Author content to this exact shape so the UI can render generically. Keep the writing **punchy, concrete, motivating** — short sentences, vivid examples, zero fluff (match the reference app's voice).

```js
{
  id: "marketing",
  icon: "📣",
  hue: "#ff6b5e",
  category: "Money & Work",
  name: "Marketing",
  tagline: "Make people want things — ethically",

  basics: "2–4 sentences in plain language: what it is, why a total beginner should care.",
  whyItMatters: ["3–4 concrete payoffs/uses, one line each"],
  realWorldExample: "One vivid, specific story that makes the abstract click (like 'Shot on iPhone').",

  // NEW: the field's authorities — see §11A. Real people/works only; accurate quotes or none.
  mentors: [
    { name: "Robert Cialdini", for: "the psychology of persuasion", work: "Influence (1984)", quote: "" }
  ],

  // NEW: one or more theme-aware inline-SVG diagrams, built from the §5 component library.
  // Prefer referencing a library `kind` + supplying data over hand-writing raw <svg>.
  diagrams: [
    { kind: "funnel", title: "The Marketing Funnel (AIDA)", caption: "Where prospects drop off", data: { stages: ["Attention","Interest","Desire","Action"] } }
  ],

  // NEW: cross-domain links — the polymath payoff (see §11B). Connect a concept here to one elsewhere.
  synthesis: [
    { concept: "Social proof", linksTo: "psychology", note: "This is an applied cognitive bias — see Human Psychology." }
  ],

  // 8–12 concepts. `deep` is the expandable explanation. Optional mini-diagram per concept.
  // NEW (v5): `status` = epistemic honesty badge: "settled" | "debated" | "framework" (one thinker's lens, not fact).
  // NEW (v5): `reflect` = an apply-to-your-life prompt; the user's answer saves to Notes (transfer > recall).
  concepts: [
    { t: "The 4 Ps", short: "Product, Price, Place, Promotion.", deep: "2–4 sentences going deeper, with a why-it-matters.",
      status: "framework", reflect: "Pick something you sell or want (even yourself in a job hunt) — which of the 4 Ps is weakest?" },
    // ...
  ],

  // NEW (v5): the strongest honest case against this domain's conventional wisdom. Steelman, don't strawman.
  counterView: "e.g. 'Much marketing spend is unmeasurable and brand effects are overclaimed — Byron Sharp vs classic funnel thinking.'",

  // NEW (v5): plain capability statements unlocked as the user progresses — shown instead of bare XP.
  capabilities: ["Explain the 4 Ps to a friend", "Spot the promise + target in any ad", "Write a positioning statement"],

  // NEW (v5): a one-screen printable summary (the most-loved, lowest-effort feature).
  cheatsheet: ["4 Ps = Product/Price/Place/Promotion", "Features tell, benefits sell", "If CAC > LTV, it's a hobby not a business"],

  // 7-stage ladder, Novice → Grandmaster. Each stage = a real phase of mastery.
  roadmap: [
    { rank: "Novice",      focus: "Learn the vocabulary", do: "specific actions", milestone: "you can do X", time: "~1–2 weeks" },
    { rank: "Apprentice",  ... },
    { rank: "Practitioner",... },
    { rank: "Specialist",  ... },
    { rank: "Expert",      ... },
    { rank: "Master",      ... },
    { rank: "Grandmaster", ... }
  ],

  // Up to 10 FREE + 10 PAID, RANKED for someone starting from scratch (best first).
  // Real items only. Unknown link -> url:"" and verify:true. NEW (v5): `lastVerified` date; UI shows "checked <date>".
  resources: {
    free: [ { name: "...", what: "1-line what + why it's ranked here", url: "", verify: true, lastVerified: "2025-01" }, ... ],
    paid: [ { name: "...", what: "...", url: "", price: "verify", verify: true, lastVerified: "2025-01" }, ... ]
  },

  // 5–8 real-world tasks done outside the app.
  missions: [ { t: "Decode 3 ads", d: "specific instruction", xp: 30 }, ... ],

  // 5–8 MCQs. NEW (v5): options are objects; each WRONG option names the specific misconception it represents,
  // so picking it triggers a targeted correction (not a generic "wrong"). `testOut:true` marks pre-assessment items.
  quiz: [
    { q: "...",
      options: [
        { text: "Right answer", correct: true },
        { text: "Plausible wrong answer", misconception: "Why a learner believes this, and the precise fix." }
      ],
      why: "explanation shown after answering",
      testOut: true } , ...
  ],

  // NEW: 8–15 spaced-repetition cards (front/back). These feed the global review system.
  flashcards: [ { front: "What does CAC stand for and why does it matter?", back: "Customer Acquisition Cost; if CAC > LTV you lose money per customer." }, ... ],

  // NEW: 8–15 key terms.
  glossary: [ { term: "Positioning", def: "Owning one clear idea in the customer's mind." }, ... ]
}
```

**Quality bar per domain:** ≥8 concepts (each with an epistemic-status badge + reflect prompt), full 7-stage roadmap, ≥12 real resources total (each `lastVerified`), ≥5 missions, ≥5 quiz questions (wrong options misconception-mapped), ≥8 flashcards, ≥8 glossary terms, **≥3 named mentors, ≥2 theme-aware diagrams, ≥2 cross-domain synthesis links, a steelman `counterView`, ≥5 `capabilities`, and a `cheatsheet`.** The reference app's existing entries already meet much of this — upgrade them to the full v5 shape.

---

## 5. THE DIAGRAM SYSTEM (theme-aware inline SVG — expanded)

Diagrams are a first-class feature, not decoration. Every domain ships **≥2** original, **theme-aware, inline-SVG** framework diagrams, plus optional mini-diagrams on individual concepts. No external image files, no raster, no copyrighted figures — generate original SVG.

**Build it as a reusable component library, not 60 hand-drawn SVGs.** Write one well-made, theme-aware generator per diagram `kind` below; each domain then declares `{ kind, title, caption, data }` and the renderer draws it. This keeps diagrams consistent, themeable, and ~10x smaller than bespoke markup.

### 5.1 Diagram component library (build each generator once)

| `kind` | What it shows | `data` shape (example) |
|---|---|---|
| `funnel` | Stage drop-off | `{ stages:["Attention","Interest","Desire","Action"] }` |
| `pyramid` | Layered hierarchy (Maslow) | `{ levels:["Physiological","Safety","Belonging","Esteem","Self-actualisation"] }` |
| `cycle` | Self-reinforcing loop | `{ nodes:["Cue","Craving","Response","Reward"] }` |
| `flow` | Ordered pipeline w/ arrows | `{ steps:["DNS","Connect","HTTP request","Render"] }` |
| `curve` | One or more lines on axes | `{ x:"Time", y:"Value", series:[{label:"8%/yr", points:[[0,1],[9,2],[18,4]]}] }` |
| `quadrant` | 2×2 matrix w/ plotted items | `{ xAxis:["Low risk","High risk"], yAxis:["Low return","High return"], items:[{label:"Index fund", x:0.4, y:0.7}] }` |
| `spectrum` | A scale between two poles w/ a marker | `{ left:"Position", right:"Interest", marker:0.7, note:"Trade on interests" }` |
| `venn` | 2–3 overlapping sets | `{ sets:["Desirable","Viable","Feasible"], centre:"Product-market fit" }` |
| `tree` | Root → branches | `{ root:"Law", children:[{label:"Criminal"},{label:"Civil",children:[...]}] }` |
| `network` | Nodes + edges (latticework / knowledge graph) | `{ nodes:[...], edges:[[0,1],[1,2]] }` |
| `bars` | Labelled comparison bars | `{ items:[{label:"0.1% fee", value:9}, {label:"1.5% fee", value:25}], unit:"% of pot lost" }` |
| `timeline` | Events along an axis | `{ events:[{when:"1776", what:"Wealth of Nations"}, ...] }` |
| `sequence` | Actor lanes exchanging messages | `{ actors:["You","Seller"], messages:[{from:0,to:1,text:"Anchor low"}] }` |
| `gauge` | Single value on a dial | `{ value:0.6, label:"Risk tolerance" }` |
| `labelled` | A base shape with callouts (anatomy/brain regions) | `{ base:"<simple svg path>", callouts:[{x,y,text}] }` |

Suggested per-domain assignments (pick what genuinely clarifies — don't force one):
- Marketing → `funnel` (AIDA), `quadrant` (positioning map).
- Psychology → `flow` (System 1 / System 2), `cycle` (habit loop).
- Body Language → `labelled` (comfort/discomfort cues), `spectrum` (baseline → deviation).
- Famous Laws → `flow` (F=ma cause→effect), `curve` (entropy / heat flow).
- Mental Models → `network` (Munger's latticework), `quadrant` (Eisenhower).
- Law → `tree` (criminal vs civil), `flow` (IRAC reasoning).
- Personal Finance → `curve` (compound interest), `bars` (debt avalanche).
- Investing → `quadrant` (risk/return), `curve` (time in market), `bars` (fee drag).
- Crypto → `flow` (transaction → block → chain), `sequence` (send between wallets).
- Tech → `flow` ("what happens when you type a URL"), `tree` (data structures).
- AI/ML → `flow` (data → train → model → inference), `curve` (over/underfitting).
- Negotiation → `spectrum` (positions vs interests), `quadrant` (ZOPA with BATNA marker).
- Communication → `cycle` (sender→message→receiver→feedback), `pyramid` (BLUF).
- Learning → `curve` (Ebbinghaus forgetting curve + spacing), `cycle` (recall loop).
- Entrepreneurship → `venn` (desirable/viable/feasible), `cycle` (build-measure-learn).
- Economics → `curve` (supply & demand equilibrium), `quadrant` (4 macro quadrants).
- Health/Nutrition → `labelled` (body systems), `bars` (energy balance).
- Spirituality → `network` (traditions & shared practices), `pyramid` (states of practice).

### 5.2 Theme-awareness — hard requirements

1. **No hard-coded colours in SVG.** Every stroke/fill/text colour comes from CSS custom properties: `--ink` (text), `--dim` (muted), `--bg`/`--panel` (surfaces), `--line` (borders/grid), `--hue` (the domain accent), `--good`/`--bad` (semantic). Prefer `currentColor` and set `color` on the container.
2. **Works in light AND dark.** Define both token sets; toggling the theme must instantly recolour every diagram with no broken contrast. Verify both themes before shipping.
3. **Respect user preferences:** `prefers-reduced-motion` (no auto-animation), `prefers-contrast: more` (thicker strokes, stronger text), and `@media (forced-colors: active)` (fall back to system colours so Windows High Contrast works).
4. **Crisp at any size:** use `viewBox`, `width:100%`, sensible `max-height`, and `preserveAspectRatio`. Never rasterise. Type is set via CSS, not hard-coded `font-family` attributes.

### 5.3 Accessibility & interactivity

- Each diagram: `<svg role="img" aria-labelledby="t d">` with a `<title>` and `<desc>`, plus the visible `caption`. Provide a concise text equivalent so the meaning survives with images/CSS off.
- Interactive nodes are focusable `<g tabindex="0">` with `aria-label`; hover **or** tap reveals a tooltip/popover carrying the matching concept's explanation (reuse concept copy — don't duplicate it).
- Animate-in on scroll via `IntersectionObserver`, **gated on** `prefers-reduced-motion`. Motion should clarify (e.g. a funnel filling, a curve drawing) — never just sparkle.

### 5.4 Implementation notes

- Hand-roll data shapes (curves/bars) as SVG `<path>`/`<polyline>`/`<rect>`; a chart library is optional and, if used, must load from CDN with a graceful fallback if blocked.
- Keep generators pure (`data → SVG string/DOM`) so they're testable and reusable across domains and the dashboard's mastery radar.
- The dashboard radar and skill-map (§6) should reuse `network`/`curve`/`gauge` generators — one diagram engine, used everywhere.

---

## 6. GAMIFICATION & INTERACTIVITY SPEC

Keep everything from the reference app and add the starred items:

- **XP & Levels** — global XP, level = floor(xp / XP_PER_LEVEL)+1. Level-up modal + confetti.
- **Global rank ladder** — playful titles (Curious Newcomer → … → Certified Polymath). Keep/extend the reference's ladder.
- **★ Per-domain ranks** — each domain shows the user's rank within it (Novice→Grandmaster) based on that domain's completion, and visibly promotes them as they progress.
- **Streaks + Daily Quest** — one rotating daily task; streak counter; gentle "don't break your streak" nudge. Streak persists across days via stored last-active date (don't fake it within one session).
- **★ Spaced-repetition review** — a dedicated "Review" screen that pulls due flashcards across ALL domains the user has started, scheduled with **FSRS** (via `ts-fsrs`; grades Again / Hard / Good / Easy → next interval). SM-2 only as a no-dependency fallback. This is the daily-habit centrepiece. Persist per-card state.
- **★ Mastery Dashboard** — a radar/spider chart (or bar grid) of mastery % across categories, total XP, longest streak, cards reviewed, domains mastered, achievements earned.
- **★ Skill Map view** — domains as nodes grouped by category (a simple SVG/flex map, not a heavy graph lib); mastered domains glow.
- **★ Achievements/Badges** — e.g. "First Blood" (first mission), "Streak x7", "Polyglot of Domains" (touched 10 domains), "Quiz Slayer" (perfect quiz), "100 Cards". Show a trophy shelf.
- **★ Search** — global search across domain names, concepts, and glossary terms.
- **★ Notes** — let the user write a private note on any concept (persisted).
- **★ Bookmarks/Favourites** — star concepts/resources to a "My List".
- **Random domain** ("🎲 Surprise me").
- **Save / Load** — localStorage autosave **plus** an export/import code (base64 of state) so progress survives across devices/browsers.
- **Theme toggle** — dark (default) + light; respect `prefers-color-scheme` on first load.
- **Subtle feedback** — micro-animations + optional sound on XP gain/level-up, with a global mute and full `prefers-reduced-motion` support.

Progress model (keep it simple & legible): a domain's mastery % = weighted blend of tabs read + concepts expanded + missions done + quiz answered + flashcards graduated. Define the weights in one place.

---

## 7. INFORMATION ARCHITECTURE / SCREENS

1. **Home** — hero + level ring + global rank, daily quest, streak (with grace-day state), **a 5/15/45-min "Start a session" picker**, "Continue learning" (last domain), and the domain grid (filter by category, search box).
2. **Domain detail** — tabbed: `Basics` · `Diagram` · `Concepts` (test-first reveal, status badges, reflect prompts) · `Zero→Grandmaster` (roadmap + capabilities) · `Resources` (free/paid toggle, `lastVerified`) · `Missions` · `Quiz` (confidence + misconception feedback) · `Flashcards` · `Cheat-sheet` (printable) · `Counter-view`. Lazy-render the active tab.
3. **Review** — spaced-repetition session across all started domains, plus a **Weakest concepts** queue.
4. **Dashboard** — mastery radar, stats, achievements, capability log, calibration score.
5. **Skill Map** — category node map; optional **Connections** graph (Phase 3).
6. **My List** — bookmarks, notes (incl. saved reflections), and the **Paths** tracks.

Add a lightweight, skippable **onboarding** (pick 2–3 goals → suggested domain/Path) on first run.

Top bar persists everywhere: logo, XP chip, level chip, streak chip, Review button (with due-count badge), theme toggle, Save/Load.

---

## 8. VISUAL DESIGN DIRECTION

- Dark, premium, slightly "arcade-meets-study-app" — like the reference (deep indigo bg, coral/gold/mint/violet accents, soft radial glows). Light theme = clean, high-contrast.
- Fonts: a characterful display face for headings (e.g. Unbounded) + a clean UI face (e.g. Inter Tight). Load via Google Fonts with `preconnect`; degrade gracefully if offline.
- Rounded cards, soft borders, generous spacing, smooth (but reduced-motion-aware) transitions.
- Each domain's `hue` themes its card, detail accent, meter, and diagram.
- Mobile-first responsive; the level ring and grid must reflow cleanly on phones.
- Don't over-decorate. Clarity and readability beat flash.

---

## 9. TECHNICAL REQUIREMENTS

- **Output:** a real project, runnable by opening `index.html` with **no build step**. Preferred layout for maintainability:
  - `index.html`, `styles.css`, `app.js`, and `data/` (one JS or JSON file per category, or one `domains.js`). Embedding everything in one HTML is acceptable if you keep it organised, but with 30+ domains a split is cleaner — your call, optimise for "I can open it and it works."
  - Also produce a single self-contained `polymath.html` bundle (everything inlined) as a second artifact, since I want one file I can move around easily.
- **Vanilla JS by default, no framework required** (see §9A for the recommended best-in-class stack and the optional Vite+TypeScript track). No server. Fully offline once loaded (self-host fonts per §9A).
- **Persistence (v5):** primary store is **IndexedDB** (localStorage's ~5MB cap and silent eviction will bite at 30 domains + per-card SR state), with a localStorage fallback. Saves are **versioned** with a `schemaVersion`, and you must write **migration** functions so a new build never wipes old progress. Keep the base64 export/import code, validate it on import, and add a periodic, dismissible "export your progress" nudge.
- **Content integrity (v5):** define the domain schema as a JSON Schema (or TS types) and **validate every domain object at load**; a missing/!malformed field must fail loudly in dev (console error + a visible dev badge), not silently render a broken card.
- **Performance (v5):** **lazy-load domain data** (dynamic import / fetch per domain or per category) so first paint stays fast with 30 domains; render only the open domain/tab on demand.
- **Accessibility:** semantic HTML, keyboard navigable (tabs, cards, quiz options, diagram nodes), visible focus, ARIA where needed, contrast ≥ WCAG AA, full `prefers-reduced-motion`.
- **Robustness:** never crash on missing data fields; guard with sensible defaults. Validate the import code.
- Keep dependencies near-zero. If you add any CDN lib (e.g. a confetti or chart helper), the app must still work if it fails to load.

---

## 9A. BUILD WITH THE BEST TOOLS (recommended stack)

Use current best-in-class tools, but **never at the cost of the core promise: a self-contained `polymath.html` that runs by opening it, offline, with no server.** Resolve the tension with two tracks — pick Track A unless the project clearly needs Track B, and either way emit the inlined bundle.

**Track A — zero-build, portable (default).** Vanilla **ES modules** + modern CSS. Pull the few genuinely best-in-class libraries below as ESM (self-vendored into the repo, or `esm.sh`/`jsDelivr` with a graceful fallback if blocked). This keeps "double-click to run" true.

**Track B — pro toolchain (optional, if maintainability at 30+ domains demands it).** **Vite + TypeScript (strict)**. Gives instant HMR, tree-shaking, and type safety, but you **must** add a step that outputs the single inlined `polymath.html` (e.g. `vite-plugin-singlefile`) so the portability guarantee survives the build. Provide `npm run dev` and `npm run build`.

**Best-in-class libraries (small, proven, well-maintained):**
- **Spaced repetition → `ts-fsrs`** (the **FSRS** algorithm — what modern Anki now uses; markedly better retention/efficiency than SM-2). Make FSRS the scheduler; keep an SM-2 fallback only if a dependency-free build is required.
- **Local storage → `Dexie.js`** (the best IndexedDB wrapper: clean async API, versioned schema upgrades that pair perfectly with the §9 migration requirement).
- **Schema validation → `Zod`** (TS-first; validate every domain object at load per §9; in Track A use it as ESM or a tiny hand-rolled validator).
- **Fonts → self-host via `@fontsource/*`** instead of the Google Fonts CDN, so the app is genuinely offline-first (fixes the "degrade gracefully if offline" caveat).
- **Icons → `lucide`** (clean, consistent, themeable SVGs; tree-shakeable).
- **Charts/diagrams → hand-rolled SVG first** (§5). Only reach for **`D3`** (or `uPlot` for fast line charts) if a visualisation genuinely exceeds what the §5 generators handle. Avoid heavy chart frameworks.
- **Confetti / celebration → `canvas-confetti`** (tiny, optional, gated on reduced-motion).
- **Markdown (if any rich copy) → `markdown-it`**; sanitise with **`DOMPurify`** if you ever render user/external HTML.
- **PWA (Phase 3, optional) → `vite-plugin-pwa` / Workbox** for the manifest + service worker.

**Quality tooling (Track B, strongly recommended):**
- **TypeScript strict** + **ESLint** + **Prettier** for a clean, consistent codebase.
- **Vitest** for unit tests on the pure functions (XP math, FSRS scheduling, mastery %, schema validation, diagram generators).
- **Playwright** for a couple of end-to-end smoke tests (open a domain → answer a quiz → earn XP → progress persists across reload).
- **`@axe-core/playwright`** to automatically catch accessibility regressions against the §9 a11y bar.

**Selection rules:** prefer no dependency over a small one, and a small focused library over a framework. Every third-party piece must be actively maintained, permissively licensed, and degrade gracefully if it fails to load. Pin versions. Don't add a state framework (React/Vue) unless you can justify it against the bundle-size and portability cost — vanilla + a tiny signal/store pattern is enough for this app.

---

## 10. ACCURACY, SAFETY & SENSITIVE-DOMAIN RULES

`HOME_COUNTRY = "India"`  // used to localise law/finance/resources; keep universal concepts + a "local specifics" note.

- **No hallucinated facts/resources/links/prices** (restating rule 1). Add an unobtrusive footer line: resource names are real but editions/prices/links change — verify before buying. Flag `verify:true` items in the UI with a tiny "check current link" hint.
- **Finance / Investing / Crypto:** label clearly as **education, not financial advice**. No "guaranteed returns." Crypto domain must teach scam-recognition and self-custody risk honestly.
- **Law:** universal concepts + "laws vary by country; for `HOME_COUNTRY` start with official government/citizen-advice portals; for real stakes consult a professional."
- **Medical / Nutrition / Fitness / Sleep / First Aid:** **educational, not medical advice**; First Aid must say it's **not a substitute for certified training or emergency services** and point to local emergency numbers.
- **Mental Health:** supportive, de-stigmatising, evidence-based; explicit line that it's **not a substitute for professional care**, with a neutral prompt to reach out to a qualified professional or local helpline if someone is struggling. Do not list specific crisis methods; do encourage seeking help.
- **Sexual Health & Intimacy:** treat as **adult health & relationships education**, clinical and respectful — **not explicit/pornographic**. In scope: anatomy & how bodies work, **consent** (front and centre), communication with partners, contraception & STI prevention, sexual health check-ups, common myths vs facts, emotional intimacy and healthy vs unhealthy relationship patterns, where to find reputable health resources. Out of scope: graphic descriptions, "technique" content framed for titillation, anything sexualising minors. Keep the tone like a good doctor or sex-educator, not a magazine.
- **Spirituality:** cover **comparatively and pluralistically** — major traditions, meditation/contemplative practices, philosophy of meaning, secular and religious approaches — without asserting any one belief as true or pushing the user toward a faith. Respectful, inclusive, "here are the maps people use," not "here is The Truth."
- **History & Geopolitics:** present contested topics with multiple perspectives; distinguish fact from interpretation; avoid partisanship.

---

## 11. DATA AUTHORING GUIDELINES (the writing)

- Voice: confident, warm, concrete. Prefer a vivid example over an abstract definition.
- Every concept should pass the "so what?" test — say why it matters or how it's used.
- Examples should be specific and picturable (numbers, named scenarios), not generic.
- Resources ranked for a **scratch-starter**: the #1 item is genuinely where a beginner should start, not the most advanced.
- Missions must be doable in the real world today, with a clear done/not-done state.
- Quiz explanations should teach, not just confirm.
- Flashcards: one idea per card, question on the front, crisp answer on the back.

---

## 11A. BEST MINDS & CANONICAL FRAMEWORKS (ground every domain here)

This is what separates POLYMATH from a generic info dump. Each domain must be built on the people and frameworks the field genuinely reveres. Surface them in the UI as a **"Stand on giants" mentor strip** on each domain (avatar-initials chip + name + their one big idea), and weave their real frameworks through the concepts and roadmap. Use accurate quotes or none. Flag contested popular ideas with a caveat.

Starter map (verify, extend, and add the field's frameworks — not exhaustive):

- **Marketing** — Philip Kotler (4 Ps, STP), Al Ries & Jack Trout (Positioning), Seth Godin (permission marketing), David Ogilvy, Byron Sharp (*How Brands Grow*), Clayton Christensen (Jobs-to-be-Done).
- **Human Psychology** — Kahneman & Tversky (heuristics, prospect theory), Pavlov & Skinner (conditioning), Festinger (dissonance), Asch (conformity), Maslow, Carol Dweck (mindset), Robert Sapolsky.
- **Body Language** — Joe Navarro (comfort/discomfort), Paul Ekman (microexpressions, FACS), Allan & Barbara Pease. *Caveat: Mehrabian's "7-38-55" is widely misquoted — note its real, narrow scope.*
- **Famous Scientific Laws** — Newton, Einstein, Carnot/Clausius/Boltzmann (thermodynamics), Maxwell & Faraday, Darwin.
- **Mental Models** — Charlie Munger (latticework), Shane Parrish (Farnam Street), Donella Meadows (systems), Nassim Taleb, Philip Tetlock.
- **Law** — frameworks first: common vs civil law, IRAC reasoning, burden/standard of proof; jurisprudence via Holmes, H.L.A. Hart, Dworkin.
- **Personal Finance** — Morgan Housel (*Psychology of Money*), JL Collins, Ramit Sethi, Vicki Robin. *Caveat: Dave Ramsey's debt-snowball is motivational, not mathematically optimal — present alongside the avalanche.*
- **Investing** — John Bogle (index funds), Graham & Buffett (value), Markowitz (MPT/diversification), Fama (EMH/factors), Malkiel (*Random Walk*), Howard Marks (cycles).
- **Crypto & Web3** — Satoshi Nakamoto (Bitcoin whitepaper), Hal Finney, Nick Szabo (smart contracts), Vitalik Buterin (Ethereum), Andreas Antonopoulos.
- **Tech & Programming** — Turing, Dijkstra, Knuth, Kernighan & Ritchie (C), Linus Torvalds, Martin Fowler (refactoring), John Ousterhout (*A Philosophy of Software Design*).
- **AI & ML** — Turing, Hinton/LeCun/Bengio (deep learning), Andrew Ng, Andrej Karpathy, Vaswani et al. (*Attention Is All You Need* — transformers), Judea Pearl (causality). Frameworks: bias-variance, gradient descent, train/test, RLHF.
- **Negotiation** — Fisher & Ury (*Getting to Yes*, BATNA, principled negotiation), Chris Voss (tactical empathy), Stuart Diamond, Cialdini.
- **Communication & Storytelling** — Aristotle (ethos/pathos/logos), Chip & Dan Heath (*Made to Stick*), Nancy Duarte, Joseph Campbell (hero's journey), William Zinsser.
- **Learning How to Learn** — Ebbinghaus (forgetting curve), Barbara Oakley, Robert Bjork (desirable difficulty), Roediger & McDaniel (*Make It Stick*), Anders Ericsson (deliberate practice), Feynman. *Caveat: the "10,000-hour rule" misreads Ericsson — correct it.*
- **Entrepreneurship** — Paul Graham (YC essays), Steve Blank (customer development), Eric Ries (Lean Startup, build-measure-learn), Peter Thiel (*Zero to One*), Rob Fitzpatrick (*The Mom Test*).
- **Economics** — present plural schools: Smith, Keynes, Hayek & Friedman, Sowell, Ha-Joon Chang, Banerjee & Duflo (RCTs), Schelling (game theory), Thaler (behavioural).
- **Sales** — Neil Rackham (SPIN), Daniel Pink (*To Sell Is Human*), Cialdini, Zig Ziglar.
- **Cybersecurity** — Bruce Schneier, Kevin Mitnick (social engineering), Troy Hunt; frameworks: CIA triad, defence-in-depth, threat modelling, zero trust, OWASP, NIST.
- **Habits & Productivity** — James Clear (*Atomic Habits*), BJ Fogg (Fogg Behaviour Model), Cal Newport (deep work), David Allen (GTD), Charles Duhigg.
- **Philosophy & Critical Thinking** — Socrates, the Stoics (Marcus Aurelius, Epictetus, Seneca), Hume, Kant, Karl Popper (falsifiability), Carl Sagan (baloney-detection kit). Frameworks: logical fallacies, Socratic method, steelmanning.
- **Health & Longevity / Nutrition** — Peter Attia (*Outlive*), Walter Willett, Marion Nestle, Michael Pollan, Tim Spector (microbiome). *Keep evidence-based; flag single-study and contested claims (incl. some popular books).*
- **Sleep** — Borbély's two-process model; Matthew Walker (*Why We Sleep* — note scientific critiques of specific claims).
- **Sexual Health & Intimacy** — anchor to WHO / NHS / reputable bodies; Emily Nagoski (dual-control model, responsive desire), Esther Perel, John Gottman; **consent frameworks front and centre** (see §10).
- **Relationships & Dating** — John Gottman (Four Horsemen, research-based), attachment theory (Bowlby/Ainsworth), Sue Johnson (EFT), Esther Perel. *Caveat: "Love Languages" is popular but weakly evidenced — present as a lens, not science.*
- **Spirituality** — pluralistic: William James (*Varieties of Religious Experience*), Viktor Frankl (meaning), Jon Kabat-Zinn (secular mindfulness/MBSR), Thich Nhat Hanh, Alan Watts, Joseph Campbell. Present traditions comparatively (§10).
- **History & Geopolitics** — multiple lenses, not one narrative: Jared Diamond, Paul Kennedy, Tony Judt, geopolitical theories (Mackinder/Mahan) and contemporary takes; flag popular big-picture books as interpretation, not consensus.
- **Leadership & Management** — Drucker, Andy Grove (*High Output Management*), Daniel Goleman (EQ), Kim Scott (Radical Candor), Simon Sinek.
- **Data & Statistics** — R.A. Fisher, Edward Tufte (data viz), Judea Pearl (causality), Hans Rosling (*Factfulness*); frameworks: base rates, distributions, Bayes, p-value misuse.

---

## 11B. ADVANCED FEATURES — GO FURTHER (the "more")

Layer these on top of §6 once the core loop works. **Priority:** Paths, capstones, adaptive quizzes, mentor feed and onboarding add real learning value — do these first. The **Connections network graph, shareable rank card, and PWA/offline are explicitly optional Phase-3 polish** — high complexity, low learning value — so never let them block or dilute the core build.

- **Cross-domain synthesis** — render each domain's `synthesis` links as tappable connections ("Social proof → Human Psychology"), and add a **Connections** view: a `network` graph of how concepts across domains relate. This is the literal payoff of being a *polymath* — show the lattice.
- **Curated Paths (multi-domain tracks)** — guided journeys that pull lessons from several domains, e.g. *"Become hard to manipulate"* (Psychology + Body Language + Negotiation + Marketing defence), *"Money from zero"* (Finance → Investing → a dash of Economics), *"Build & sell a product"* (Entrepreneurship + Marketing + Sales + Communication), *"Think clearly"* (Mental Models + Philosophy + Data/Stats + Learning). Each Path has its own progress bar and capstone.
- **Capstone "Boss" challenge per domain** — a single real-world project that proves mastery (e.g. Marketing: "ship one public piece of marketing and report results"; AI: "build one workflow that saves you an hour"). Big XP, unlocks the Grandmaster rank.
- **Mentor wisdom feed** — a rotating, accurate quote/idea from the §11A minds tied to today's domain; a "Mental model of the day" and "Concept of the day."
- **Adaptive quizzes** — track per-concept accuracy; resurface missed concepts more often (tie into the spaced-repetition scheduler so weak spots get more reps).
- **Focus timer** — an optional built-in Pomodoro that logs focused minutes into stats and can launch a Review session.
- **Shareable rank card** — render the user's level, top domains and streak to an off-screen `<canvas>` they can download as a PNG to share. No external upload; generated locally.
- **Onboarding** — a 20-second start: pick 2–3 goals → recommend a starting domain or Path. Skippable.
- **Installable PWA / offline** — add a manifest + a minimal service worker so it installs to a phone home screen and runs fully offline after first load. Keep it optional and degrade gracefully if unsupported.
- **Learning-science honesty** — the scheduler should be real (**FSRS** preferred, SM-2 fallback), interleave across domains, and lead with retrieval. Add a tiny "Why this works" note explaining spacing/retrieval so users trust the method.

---

## 11C. LEARNING-EFFECTIVENESS, TRUST & ETHICAL ENGAGEMENT (v5 — the point of the whole app)

The success metric is **did the user get better**, not *did they tap a lot*. Build these in; several override the default "show then test" flow.

**Make it teach (learning science):**
- **Test-first, not read-first.** When a user opens a concept they haven't seen, present a quick prediction/recall prompt *before* the explanation, then reveal. The struggle to retrieve (the generation effect) is where learning happens. Make this the default concept-open behaviour, with a "just show me" escape.
- **Misconception-mapped feedback.** Use the `misconception` field on wrong quiz options to correct the *specific* false belief the user holds, not a generic "incorrect."
- **Confidence calibration.** Before revealing a quiz answer, ask "How sure? (guess / fairly / certain)." Reward calibrated confidence; gently flag confident-and-wrong. Trains metacognition and attacks the "fluent but wrong" trap the app itself warns about.
- **Capability statements over points.** On progress, surface the `capabilities` ("You can now write a positioning statement") *alongside* XP, never XP alone. Intrinsic markers outlast points.
- **Apply-to-your-life reflection.** Surface each concept's `reflect` prompt; the user's answer saves to Notes. Transfer to real life is where knowledge sticks or dies.

**Make it trustworthy (epistemic honesty — a real differentiator):**
- **Per-claim status badges.** Render each concept's `status` as a small badge: **settled** / **debated** / **one framework**. Most learning apps flatten everything into confident fact; labelling certainty is rare and valuable.
- **Steelman the counter-view.** Show each domain's `counterView` as a "Strongest counter-argument" block — especially in nutrition, economics, psychology, where confident consensus is often overstated.
- **"Last verified" + changelog.** Show resource `lastVerified` dates and keep a visible per-domain content changelog so stale links are obvious and trust is earned.

**Make it fit the learner (adaptivity):**
- **Time-boxed sessions.** A **5 / 15 / 45-minute** mode that assembles a session (due reviews + one new concept + a mission) to fit the time available. This is the single feature most likely to build a daily habit — prioritise it.
- **Test-out / pre-assessment.** Let users answer the `testOut` items to skip what they already know instead of being bored into quitting; mark those concepts "proven."
- **Weakest-concepts queue.** A view across all started domains of lowest-accuracy concepts, feeding straight into the spaced-repetition scheduler so weak spots get more reps.

**Make it ethical (respect attention — the anti-dark-pattern stance):**
- **XP only for real learning actions** (recall attempts, missions, reflections, calibrated answers) — never for mere opens or time-on-screen. This guards against the app's own **Goodhart's Law** lesson: if XP becomes the target, users farm points instead of learning. State the XP rules in one place.
- **Streak grace-day.** One missed day shouldn't nuke a long streak — allow a single auto-applied grace day before it resets. Motivating, not manipulative.
- **Anti-overuse guardrails.** A gentle "you've been at this ~45 min — breaks help memory consolidate" nudge; **no FOMO notifications, no infinite scroll, no guilt-tripping.** Building a genuinely respectful learning tool is a deliberate stance.
- **"Why this works" notes.** Briefly explain spacing, retrieval and interleaving where they appear, so users trust the method rather than feeling gamed.

---

## 12. DELIVERABLES & ACCEPTANCE CHECKLIST

Definition of done for the shipped build:
- [ ] Opens with no build step; works offline; no console errors.
- [ ] Core 15 domains fully authored to the §4 quality bar (no placeholders).
- [ ] All six screens work: Home, Domain detail (8 tabs), Review, Dashboard, Skill Map, My List.
- [ ] XP, levels, global rank, per-domain ranks, streak, daily quest all function and persist.
- [ ] Spaced-repetition Review pulls due cards across started domains using an FSRS schedule (or documented SM-2 fallback).
- [ ] Dashboard radar + stats + achievements render from real state.
- [ ] Diagrams render from a reusable theme-aware SVG component library; each authored domain has ≥2; all recolour instantly on theme toggle and pass `forced-colors`.
- [ ] Each domain shows a mentor strip (≥3 real authorities) and ≥2 working cross-domain synthesis links.
- [ ] At least 3 curated Paths and per-domain capstone "boss" challenges exist and award XP.
- [ ] Concepts use test-first reveal + status badges + reflect prompts; quizzes use confidence calibration + misconception-mapped feedback.
- [ ] Time-boxed 5/15/45-min session mode, test-out pre-assessment, and a weakest-concepts queue all work.
- [ ] Each domain has a printable cheat-sheet, a steelman counter-view, capability statements, and `lastVerified` resource dates.
- [ ] XP is awarded only for genuine learning actions; streak grace-day works; anti-overuse nudge present; no dark patterns.
- [ ] Saves are versioned with working migration; IndexedDB used (localStorage fallback); domain objects validated against the schema at load.
- [ ] Search, notes (incl. reflections), bookmarks, theme toggle, save/load (auto + export code) all work.
- [ ] Fully responsive; keyboard-navigable; `prefers-reduced-motion` honoured; AA contrast.
- [ ] No hallucinated resources; `verify:true` flags surfaced; safety notes present on every sensitive domain.
- [ ] A single inlined `polymath.html` bundle is also produced.
- [ ] A short README + the per-domain authoring template (Appendix C); each domain passed its QA checklist.

---

## 13. SUGGESTED BUILD ORDER FOR YOU

1. Scaffold files + design tokens (CSS variables, themes, fonts).
2. Build the data layer + one fully-authored sample domain; render Home grid + Domain detail tabs generically from data.
3. Implement XP/level/rank/streak/daily engine + persistence + save/load.
4. Implement Quiz, Missions, then the **Flashcard + spaced-repetition Review** loop.
5. Author the remaining Core 15 domains (and their diagrams).
6. Build Dashboard (radar + achievements), Skill Map, Search, Notes, My List.
7. Accessibility + responsive + reduced-motion pass; produce the inlined bundle + README.
8. Phase 2: expand to the full catalogue. Phase 3: polish.

Confirm the plan in one short paragraph, then start building Phase 1. Report what's complete and what remains at each phase boundary.

---

### APPENDIX A — sample authored domain (quality reference)

Use this shape/voice. (Resources here are illustrative starting points — **verify before shipping**, replace unverifiable ones.)

```js
{
  id: "ai_ml",
  icon: "🤖",
  hue: "#6db5ff",
  category: "Tech & Future",
  name: "AI & Machine Learning",
  tagline: "Understand the machines that are rewriting everything",
  basics: "Machine learning is software that improves from examples instead of being told every rule. Modern AI (large language models, image models) is pattern-matching at massive scale: feed it oceans of data, and it learns to predict the next word, pixel, or action. It isn't magic and it isn't conscious — but knowing how it actually works turns it from a black box into a power tool.",
  whyItMatters: [
    "Use AI tools 10x better once you know what they can and can't do",
    "Spot hype, bias, and confident-but-wrong answers (hallucinations)",
    "AI literacy is becoming as basic as internet literacy for almost every job"
  ],
  realWorldExample: "When you type a prompt, an LLM doesn't 'look up' an answer — it predicts the most likely next chunk of text, one piece at a time, based on patterns in its training. That's why it can write a fluent paragraph and also state a wrong fact with total confidence: it's optimised for plausible, not for true.",
  mentors: [
    { name: "Geoffrey Hinton", for: "deep learning", work: "backpropagation, 2018 Turing Award", quote: "" },
    { name: "Andrej Karpathy", for: "making ML learnable", work: "'Neural Networks: Zero to Hero'", quote: "" },
    { name: "Vaswani et al.", for: "the transformer", work: "'Attention Is All You Need' (2017)", quote: "" }
  ],
  diagrams: [
    { kind: "flow", title: "Training vs inference", caption: "Data → train → model → prompt in → prediction out", data: { steps: ["Data","Train (set weights)","Model","Prompt","Predict next token"] } },
    { kind: "curve", title: "Under- vs over-fitting", caption: "The sweet spot generalises", data: { x:"Model complexity", y:"Error", series:[{label:"Test error", points:[[0,9],[3,3],[6,2],[9,7]]},{label:"Train error", points:[[0,9],[9,1]]}] } }
  ],
  synthesis: [
    { concept: "Hallucination", linksTo: "philosophy", note: "A lesson in epistemics — plausible ≠ true (see Critical Thinking)." },
    { concept: "Prompting", linksTo: "communication", note: "Clear input → clear output: the same skill as good writing." }
  ],
  concepts: [
    { t: "Training vs inference", short: "Learning vs using.", deep: "Training = the slow, expensive phase where the model adjusts millions/billions of parameters to fit data. Inference = the fast phase where you actually use the trained model. Your prompts hit inference; they don't teach the model." },
    { t: "Tokens", short: "AI reads in chunks, not letters.", deep: "Text is split into tokens (~¾ of a word). Models predict the next token. This explains context limits, pricing, and why they miscount letters." },
    { t: "Neural networks & parameters", short: "Tunable knobs that store patterns.", deep: "Layers of simple math units; 'learning' = nudging billions of weights so outputs match examples. Scale of parameters roughly tracks capability." },
    { t: "Supervised / unsupervised / reinforcement", short: "Three ways to learn.", deep: "From labelled answers, from raw structure, or from reward signals. Modern chatbots blend pretraining + reinforcement from human feedback (RLHF)." },
    { t: "Hallucination", short: "Confident wrongness.", deep: "Because models optimise for plausible text, they fabricate facts that look right. Always verify high-stakes outputs." },
    { t: "Bias & data quality", short: "Garbage in, bias out.", deep: "Models inherit the biases and gaps of their training data. 'The model is objective' is a myth." },
    { t: "Prompting", short: "Clear input, better output.", deep: "Specificity, examples, role, and step-by-step instructions dramatically change results. Prompting is a real, learnable skill." },
    { t: "Overfitting & generalisation", short: "Memorising vs understanding.", deep: "A model that memorises training data fails on new data. The goal is patterns that generalise." }
  ],
  roadmap: [
    { rank: "Novice", focus: "Demystify it", do: "Watch one solid explainer; use an LLM daily and notice its wins/fails.", milestone: "You can explain training vs inference and what a token is.", time: "~1 week" },
    { rank: "Apprentice", focus: "Prompt well", do: "Learn prompting patterns; build 3 useful personal workflows.", milestone: "You reliably get good outputs and catch hallucinations.", time: "~2–3 weeks" },
    { rank: "Practitioner", focus: "Mental model of the math", do: "Understand neural nets, gradient descent, train/test splits at an intuitive level.", milestone: "You can read an AI news story and call BS.", time: "~1–2 months" },
    { rank: "Specialist", focus: "Hands on code", do: "Run notebooks; train a tiny model; call APIs; try fine-tuning or RAG.", milestone: "You built something that uses ML.", time: "~2–3 months" },
    { rank: "Expert", focus: "Pick a track", do: "Go deep in NLP, vision, or applied ML engineering; ship a real project.", milestone: "Portfolio project real users touch.", time: "~6 months" },
    { rank: "Master", focus: "Systems & evaluation", do: "MLOps, evaluation, safety, scaling, reading papers fluently.", milestone: "You can design and ship reliable ML systems.", time: "~1 year+" },
    { rank: "Grandmaster", focus: "Frontier", do: "Original research or architecting novel systems; contribute to the field.", milestone: "Others learn from your work.", time: "ongoing" }
  ],
  resources: {
    free: [
      { name: "3Blue1Brown — Neural Networks series (YouTube)", what: "The clearest visual intuition for how networks learn. Start here.", url: "", verify: true },
      { name: "Elements of AI (free course)", what: "Gentle, non-technical intro to core concepts.", url: "", verify: true },
      { name: "Google Machine Learning Crash Course", what: "Free hands-on fundamentals with exercises.", url: "", verify: true },
      { name: "fast.ai — Practical Deep Learning", what: "Top-down: build real models fast, theory later.", url: "", verify: true },
      { name: "Andrej Karpathy — 'Neural Networks: Zero to Hero' (YouTube)", what: "Build models from scratch with a leading researcher.", url: "", verify: true }
    ],
    paid: [
      { name: "Andrew Ng — Machine Learning Specialisation (Coursera)", what: "The classic structured on-ramp to the fundamentals.", url: "", price: "verify", verify: true },
      { name: "DeepLearning.AI short courses", what: "Focused, practical modules on prompting, RAG, agents.", url: "", price: "verify", verify: true },
      { name: "'Hands-On Machine Learning' — Aurélien Géron", what: "The go-to practical ML book with code.", url: "", price: "verify", verify: true }
    ]
  },
  missions: [
    { t: "Catch a hallucination", d: "Ask an AI a niche factual question you can verify, then fact-check it. Document one confident error.", xp: 30 },
    { t: "Prompt A/B test", d: "Solve one task with a lazy prompt, then a detailed one (role + example + steps). Compare outputs.", xp: 40 },
    { t: "Explain tokens", d: "Explain in 3 sentences why an LLM struggles to count letters in a word.", xp: 30 },
    { t: "Build a workflow", d: "Create one repeatable AI workflow that saves you time this week.", xp: 60 },
    { t: "Run a notebook", d: "Open any beginner ML notebook and change one thing; observe the effect.", xp: 50 }
  ],
  quiz: [
    { q: "When you chat with an LLM, you are using…", options: ["Training", "Inference", "Backpropagation", "Labelling"], answer: 1, why: "Training already happened; chatting runs the finished model (inference). Your messages don't retrain it." },
    { q: "Why do LLMs hallucinate?", options: ["They run out of memory", "They optimise for plausible text, not verified truth", "Bad WiFi", "They're conscious"], answer: 1, why: "They predict likely next tokens, so fluent-but-false output is a built-in failure mode." },
    { q: "A token is roughly…", options: ["One letter", "About ¾ of a word", "One sentence", "One pixel"], answer: 1, why: "Models read/write in sub-word tokens, which drives context limits and pricing." }
  ],
  flashcards: [
    { front: "Training vs inference?", back: "Training = slow, costly learning that sets the model's weights. Inference = fast use of the trained model. Chatting = inference." },
    { front: "What is a hallucination?", back: "A confident, fluent output that is factually wrong — a built-in risk because models optimise for plausible, not true." },
    { front: "Why are models biased?", back: "They inherit the biases and gaps of their training data." },
    { front: "What is RLHF (in one line)?", back: "Reinforcement Learning from Human Feedback — tuning a model using human ratings to make it more helpful/safe." }
  ],
  glossary: [
    { term: "Parameter", def: "A tunable weight inside a model adjusted during training." },
    { term: "RAG", def: "Retrieval-Augmented Generation — giving a model external documents to ground its answers." },
    { term: "Overfitting", def: "Memorising training data so the model fails on new inputs." },
    { term: "Inference", def: "Using a trained model to produce outputs." }
  ]
}
```

### APPENDIX B — the existing 13 reference domains

If I provide the reference `POLYMATH` HTML, ingest its `D = [...]` array as-is for: Marketing, Human Psychology, Body Language, Famous Scientific Laws, Mental Models & Laws, Law & Legal Basics, Personal Finance, Investing & Markets, Crypto & Web3, Tech & Programming, Negotiation & Persuasion, Communication & Storytelling, Learning How to Learn. Upgrade each to the §4 schema by adding: a diagram, flashcards, glossary, and a full 7-stage roadmap (the reference uses 5 stages — extend to 7).

### APPENDIX C — single-domain authoring template + QA checklist (use for EVERY domain, one at a time)

Author one domain fully, run the checklist, *then* move to the next. This is the guardrail against shallow-but-broad content.

**Fill in order:**
1. `id, icon, hue, category, name, tagline`
2. `mentors` (≥3 real authorities + their one big idea) — these anchor the content; write them first.
3. `basics`, `whyItMatters` (3–4), `realWorldExample` (specific, picturable).
4. `concepts` (≥8): each needs `short`, `deep`, `status` (settled/debated/framework), and a `reflect` prompt.
5. `counterView` (steelman), `capabilities` (≥5), `cheatsheet` (one screen).
6. `roadmap` (7 stages, Novice→Grandmaster, each with do/milestone/time).
7. `diagrams` (≥2 by `kind` + data), `synthesis` (≥2 links to other domains).
8. `resources` (ranked, real, each `lastVerified`), `missions` (≥5), `quiz` (≥5, wrong options `misconception`-mapped, some `testOut`), `flashcards` (≥8), `glossary` (≥8).

**QA checklist — a domain is NOT done until every box is true:**
- [ ] Every named person/work/quote is real and accurately attributed (no invented authorities).
- [ ] Every resource exists; unknown links are `url:""` + `verify:true`; dates set.
- [ ] Contested popular claims carry a caveat; `counterView` is a genuine steelman, not a strawman.
- [ ] Each concept has a status badge and a reflect prompt; examples are concrete, not generic.
- [ ] Quiz wrong-answers each map to a real misconception with a precise fix.
- [ ] Both diagrams render correctly in light AND dark themes and via keyboard.
- [ ] Synthesis links point to domains that actually exist (or are queued).
- [ ] Sensitive-domain rules (§10) applied where relevant.
- [ ] Schema validation passes for the object; no missing required fields.

*End of build prompt.*
