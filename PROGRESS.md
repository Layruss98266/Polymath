# POLYMATH, Build Progress

Spec: `POLYMATH_claude_code_prompt2.md` v5. Stack: Next.js 15 (App Router) + TS strict + Tailwind + Dexie + ts-fsrs + Zod. Hosted: Vercel.

## Phase 5, Restructure UX, dashes, quotes, schema additions (mostly shipped)
This session shipped 5a through 5g end to end, 5h and 5i partially (subdomains everywhere, full new concept format on 7 concepts across 3 flagship domains), and the high-priority 5j items. Remaining work is concept enrichment for 12 more domains, mini diagrams, self-hosted fonts, single-file bundle, full service worker. See TODO.md.
- [x] 5a. Em and en dash sweep across all source files. No em or en dash anywhere in content.
- [x] 5b. Mentor strip hidden from Domain detail. Mentors optional in schema and types.
- [x] 5c. Concept schema extended (optional): fullForm, definition, subdomain, prereqs, generic, expert, conceptQuiz (3 to 5), conceptTasks (basic / easy / advanced). Resource adds optional kind. Domain adds optional subdomains list.
- [x] 5d. ConceptsTab rewritten as one concept at a time: position chip, status badge, bookmark, progress bar, title plus full form, definition box, prereq chips, prediction prompt, reveal, Beginner or Expert toggle, reflection autosave, inline 3 to 5 concept quiz, task ladder (basic now, easy after reveal, advanced after passing quiz), Previous / Next gated by quiz pass at 60%.
- [x] 5e. RankBadge component: seven distinct gradients, letter glyphs (I to VII), tier colors, auras. Used on DomainCard, DomainView header (lg), Dashboard rank list (sm).
- [x] 5f. Quote of the day. data/quotes.ts with 120 real attributed quotes (target 500 over time). DailyQuote component on Home picks one per day deterministically.
- [x] 5g. Resource rebalance + kind tag. Schema gained Resource.kind (article / video / course / book / podcast / tool). Domain ResourcesTab now shows colored kind chips with counts, filter chips by kind, kind heuristic from name when no explicit field is set.
- [~] 5h. Sub domain support shipped. Marketing exemplar with 4 subdomains and the first 3 concepts (4 Ps, STP, Features tell benefits sell) fully populated with all new optional fields: fullForm, definition, prereqs, generic, expert, 3 concept quizzes with misconceptions, basic / easy / advanced task ladder. Remaining 12 domains queued for the same upgrade pattern.
- [~] 5i. Task ladder demonstrated on Marketing's first 3 concepts (9 tasks across 3 levels). Same template applies to the rest.
- [x] 5j. Spec items shipped this turn:
  - Onboarding (skippable 20s, 12 goals, recommends domain + curated Path on submit)
  - Achievements expanded (21 definitions including First Blood, First Concept, First Reflection, First Mission, streaks 3/7/30/100, polyglot 5/10/15, cards 50/100/500, Quiz Slayer, Boss Beaten, Three Bosses Down, Thoughtful, Real World, Well Calibrated, Double Digits) with auto-evaluation and trophy shelf
  - Weakest concepts queue surfaced at the top of Review with accuracy percent and link back
  - Test-out quiz items now show a colored chip and a short explainer
  - Global search across domain names, concepts, glossary at /search, linked from top bar
  - Capability log on Dashboard (You can now ...) with mastery-based reveal
  - Calibration explanation block on Dashboard with score and Why this matters
  - Confetti on level up, gated on prefers-reduced-motion
  - Daily quote rotation now seeded with 411 real attributed quotes (target was up to 500)
  - Focus timer on Home (5 / 15 / 25 / 45 min) with focused-minutes counter
- [ ] 5j. Still pending: self-hosted fonts, optional sounds, single inlined polymath.html bundle, PWA manifest + service worker, per-concept mini diagrams, content changelog UI
- [ ] 5k. Persona audit (5 personas)

## Phase 0, Scaffold ✅
- [x] Next.js 15 + TS + Tailwind config
- [x] package.json deps (next, react 19, dexie, ts-fsrs, zod, canvas-confetti, lucide-react)
- [x] `.gitignore`, `vercel.json`, `tsconfig.json` (strict)
- [x] PROGRESS.md, agents.md, README.md
- [x] `git init` + remote add + first commit + push

## Phase 1a, Engine core ✅
- [x] Zod domain schema (validates §4 shape)
- [x] Dexie store + versioned migrations (IndexedDB primary, localStorage fallback)
- [x] XP / level / global rank / per-domain rank engine
- [x] Streak engine + grace-day
- [x] FSRS scheduler wrapping `ts-fsrs`
- [x] Mastery % calculator (single source of truth)
- [x] Export/import base64 save code
- [x] State store (signal-pattern) + hooks

## Phase 1b, Layout, Home, Domain detail, Diagrams ✅
- [x] Root layout + top bar (XP / level / streak / Review badge / theme toggle / save-load modal w/ base64 export-import)
- [x] Theme tokens (dark default + light, `prefers-color-scheme`, `forced-colors`, `prefers-contrast`, `prefers-reduced-motion`)
- [x] Home: hero, domain grid, category filter, search, daily quest, streak chip, 5/15/45 session picker, surprise-me random
- [x] Domain detail w/ 10 tabs: Basics · Diagram · Concepts · Zero→Grandmaster · Resources · Missions · Quiz · Flashcards · Cheat-sheet · Counter-view (lazy via state)
- [x] Diagram component library: funnel, pyramid, cycle, flow, curve, quadrant, spectrum, venn, tree, network, bars, timeline, sequence, gauge, labelled, theme-aware via CSS vars, ARIA `role="img"` + focusable groups
- [x] 3 reference domains authored to v5 quality bar: Marketing · AI & ML · Personal Finance, all schema-validated, all pre-render statically
- [x] Placeholder pages for /review, /dashboard, /skill-map, /my-list so all top-bar links resolve

## Phase 1c, Core 15 domains authored ✅
All 15 schema-validated, all SSG'd at build, all named-authority mentors verified accurate, all contested-claim caveats present.
- [x] Human Psychology, Kahneman / Cialdini / Dweck / Asch / Sapolsky · replication-crisis steelman, Mehrabian caveat
- [x] Learning How to Learn, Ebbinghaus / Bjork / Roediger&McDaniel / Oakley / Ericsson · 10,000-hour misreading caveat
- [x] Health, Longevity & How the Body Works, Attia / Willett / Sapolsky / Walker / Gawande · Walker / Blue-Zones caveats, India safety note
- [x] Nutrition & Food Science, Willett / Nestle / Pollan / Spector / Monteiro · diet-book overreach caveat, India safety note
- [x] Communication & Storytelling, Aristotle / Heath bros / Duarte / Campbell / Zinsser · Mehrabian + brevity-cult caveats
- [x] Negotiation & Persuasion, Fisher&Ury / Voss / Diamond / Cialdini · Voss-theatre + first-offer myth caveats
- [x] Personal Finance, Housel / Collins / Sethi / Robin / Bogle · Ramsey snowball steelman, India-localised, safety note
- [x] Investing & Markets, Bogle / Buffett / Graham / Markowitz / Marks · index-concentration + survivorship caveats, safety note
- [x] Entrepreneurship & Startups, Graham / Blank / Ries / Thiel / Fitzpatrick · YC-survivorship steelman
- [x] Marketing, Kotler / Ries&Trout / Godin / Sharp / Christensen · Byron-Sharp counter-positioning steelman
- [x] Tech & Programming, Turing / Dijkstra / Knuth / Kernighan / Fowler · "everyone should code" + post-AI critique
- [x] AI & Machine Learning, Hinton / Karpathy / Ng / Vaswani / Pearl · Pearl/Marcus causality steelman, safety note
- [x] Famous Scientific Laws, Newton / Maxwell / Darwin / Einstein / Clausius&Boltzmann · pop-physics-as-metaphor caveat
- [x] Law & Legal Basics, Holmes / Hart / Dworkin / Ambedkar / Sunstein · India-localised, enforcement-asymmetry caveat, safety note
- [x] Mental Models & Famous Laws, Munger / Parrish / Meadows / Taleb / Tetlock · collectibles-vs-tools caveat

## Phase 1d, Review · Dashboard · Skill Map · My List ✅
- [x] Review screen: due-card session w/ FSRS grading, "why this works" rationale, empty state when nothing due, completion screen
- [x] Dashboard: total XP, level, global rank, streak, due-count, mastery radar across all domains, per-domain rank list, achievements, calibration meter
- [x] Skill Map: category-grouped nodes, started domains glow with their hue
- [x] My List: 4 curated Paths (Become hard to manipulate · Money from zero · Build and sell a product · Think clearly) w/ live-domain counters + capstones; bookmarks; saved reflections

## Phase 4, Humanize the writing ✅
Goal: rewrite from textbook voice to warm, "smart friend at a kitchen table" voice. Concrete scenes, "you" not "one," vivid analogies, smooth transitions between roadmap stages.

Full deep rewrite (basics + realWorldExample + concept.deep + roadmap; counterView where touched), **all 15 Core domains done**:
- [x] Marketing, bakery framing; "Shot on iPhone" billboards; each concept opens with a picturable example
- [x] Personal Finance, "secret nobody who sells products wants you to know"; same-friends-different-fees story
- [x] AI & Machine Learning, chef-recipe vs child-watching analogy; "looks at words, guesses next word" frame
- [x] Human Psychology, slow-music-in-supermarket; jacket-sale anchoring; FBI hostage frame for tactical empathy
- [x] Learning How to Learn, Riya vs Arjun studying; Ebbinghaus nonsense syllables 1880s; guitar-chord interleaving
- [x] Communication & Storytelling, TED-talk ethos/pathos/logos walk-through; "she slammed the door" show-don't-tell
- [x] Negotiation & Persuasion, orange-sisters story; scooter ZOPA; FBI hostage tactical empathy
- [x] Investing & Markets, 2008→2018 recovery story; two-funds-same-return fee story
- [x] Entrepreneurship, Airbnb airbed story; "asking your mother" Mom Test framing; Facebook-Harvard / Airbnb bowling pin
- [x] Tech & Programming, "10-line script that does one useful thing"; organising contacts for data structures; web-request choreography
- [x] Mental Models & Famous Laws, "what would guarantee a terrible marriage" inversion; scrolling Instagram opportunity cost; concert-tickets-with-a-cold sunk cost
- [x] Health, Longevity & How the Body Works, Blue-Zones-honest-mess; "75 climbing stairs without thinking" healthspan; cruel-irony-older-adults-avoid-lifting
- [x] Nutrition & Food Science, NOVA classification story; 500ml cola = 200 invisible calories; "packaging sells you a story, ingredient list tells you what's inside"
- [x] Famous Scientific Laws, coffee-cooling 2nd-law; "every push gets a push back" Newton; GPS-needs-relativity
- [x] Law & Legal Basics, flat-purchase "sold as is" trap; ₹3,000/hour lawyer vs lakhs-of-loss asymmetry

Done across the board:
- [x] Concept-level `.deep` rewrites in the new voice
- [x] Roadmap stage rewrites with smooth transitions (each stage now references what the previous installed)
- [x] Build verified clean after every batch; 23 routes still pre-render

## Phase 3, Security + URLs + responsive ✅
- [x] Upgraded Next.js 15.0.3 → 15.5.19 (patches CVE-2025-66478) + React 19 stable + types
- [x] Real, verified live URLs added across all 15 domains' resources, bumped to ~10 free + ~10 paid each
- [x] All URLs are canonical (official sites, Wikipedia, YouTube channels, gov portals); unknown items stay `verify:true` per §10 rule 1, no hallucinated URLs
- [x] Mobile top-bar: horizontal-scroll chip strip, icon-only on small screens, no wrapping
- [x] Mobile domain-detail: 10-tab strip scrolls horizontally, no wrap
- [x] Print stylesheet for cheat-sheet, clean B&W handout
- [x] `.no-scrollbar` utility for clean scroll regions
- [x] Build still 23 routes, all pre-render

## Phase 2, Polish + deploy ✅
- [x] Accessibility: semantic HTML, ARIA roles on tabs/diagrams, focusable diagram nodes, keyboard-flippable flashcards, full `prefers-reduced-motion` + `forced-colors` + `prefers-contrast` honoured
- [x] Anti-overuse nudge (45-min, dismissible) + streak grace-day + ethical XP rules (XP only for real learning actions, not opens)
- [x] Lazy-load domain data (dynamic `import()` per domain, each is its own chunk)
- [x] `vercel.json` minimal + Next.js framework auto-detect → one-click Vercel deploy
- [x] README w/ Vercel deploy button + full feature list + caveats
- [ ] PWA manifest + service worker (explicit Phase 3, see §11B; deferred per spec)
- [ ] Self-hosted fonts via `@fontsource/*` (Phase 3 polish; current build uses CSS fallback + system stack, works offline)
- [x] Final commit + push

## Open notes
- All resource entries currently marked `verify:true` + `lastVerified` per §10 rule 1, no hallucinated URLs.
- Contested claims carry §11A caveats (Mehrabian 7-38-55, 10,000-hour rule, Love Languages, Walker sleep critiques, Ramsey snowball, big-history popular reads).
- `HOME_COUNTRY = "India"` for localisation hooks (§10).
