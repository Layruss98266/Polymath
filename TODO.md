# POLYMATH TODO

Consolidated backlog. Audited against `POLYMATH_claude_code_prompt2.md` v5 plus user feedback. Worked top to bottom, pushed at each phase.

## Already shipped (cross referenced with spec)
See `PROGRESS.md` for the full list. Spec sections covered:
- §0 to §4 schema, voice, build order
- §5 diagram component library (15 generators)
- §6 XP, levels, ranks, streak, daily quest, FSRS review, dashboard, skill map, achievements (starter set), search (domain grid level), notes, bookmarks, random domain, save and load, theme toggle
- §7 all six screens
- §9 IndexedDB primary, localStorage fallback, versioned saves, lazy domain loading, Zod validation at build
- §9A Next.js + Tailwind + Dexie + ts-fsrs + Zod + canvas-confetti + lucide-react
- §10 safety notes on finance, investing, AI, health, nutrition, law, India localised
- §11A canonical authorities woven into content (now optionally hidden from UI per user request)
- §11B paths (4 live), capstones per domain, mentor wisdom feed (deferred), onboarding (queued)
- §11C status badges, steelman counter view, lastVerified dates, 5 or 15 or 45 minute session picker, anti overuse nudge, streak grace day, ethical XP rules
- §12 acceptance checklist mostly green; remaining items called out below

## Phase 5a. Dash sweep. SHIPPED
- [x] All em dashes and en dashes removed across data, components, app, lib.
- [x] Build clean. Pushed.

## Phase 5b. Author removal. SHIPPED in this batch
- [x] MentorStrip component hidden from the Domain detail page.
- [x] `mentors` made optional in Zod schema so future domains do not need to provide one.
- [x] Data files keep their `mentors` array for now; can be stripped later if user wants total removal.

## Phase 5c. Concept format upgrade. NEXT
1. Extend Concept type with optional fields:
   - `definition` one line dictionary style
   - `fullForm` expansion of acronyms in the concept title
   - `prereqs` list of prior concept ids in this domain
   - `generic` plain English explanation for someone with zero background
   - `expert` denser explanation for someone with domain knowledge
   - `conceptQuiz` 3 to 5 multiple choice items per concept
   - `conceptTasks` basic plus easy plus advanced tasks per concept
   - `subdomain` optional grouping label inside the domain
2. Bump schemaVersion and add migration so existing saves keep working.
3. Push.

## Phase 5d. One concept at a time UX
1. Rebuild `ConceptsTab` so only one concept shows at a time.
2. Inside that view, in order:
   - Subdomain breadcrumb when present
   - Title plus full form when present
   - Definition box
   - Prereq chips that scroll to those earlier concepts
   - Toggle between Beginner explanation and Expert explanation
   - Prediction prompt before reveal
   - Reflect prompt with save
   - Concept quiz (3 to 5 items, scored, must reach ~60% to advance)
   - Tasks (basic visible right away, easy visible after reading, advanced visible after passing the quiz)
   - Previous and Next navigation
3. Top of tab shows position in the concept sequence with a progress bar.
4. Domain wide quiz remains in the Quiz tab.
5. Push.

## Phase 5e. Mastery tier visuals
1. Each of the seven ranks gets its own colour, icon, gradient.
2. Apply across DomainCard, DomainView header, Dashboard rank list, Skill Map.
3. Survives both light and dark themes.
4. Push.

## Phase 5f. Daily quote rotation
1. `data/quotes.ts` with as many real, accurately attributed quotes as budget allows (target up to 500 over time).
2. `DailyQuote` component on Home showing one per day deterministically.
3. Reduced motion friendly. No fetch.
4. Push.

## Phase 5g. Resources rebalance
1. Per domain target ratio. About 4 to 5 articles or text resources. Rest videos, courses, books, podcasts.
2. Add a `kind` field (`article` | `video` | `course` | `book` | `podcast` | `tool`) so the UI can sort and badge.
3. Push.

## Phase 5h. Sub domain support and concept variety
1. For each Core 15 domain introduce 2 to 4 sub domains.
2. Author 4 to 6 new concepts per domain across those sub domains, using the new schema.
3. Target ending state 12 to 16 concepts per domain, grouped by sub domain.
4. Push after every 2 to 3 domains.

## Phase 5i. Task ladder
1. Each concept gets three tasks. Basic could do today. Easy could do this week. Advanced is a small real project.
2. Domain capstone stays as the final boss.
3. Tasks unlock progressively. Basic visible from start. Advanced visible after passing the concept quiz.
4. Push.

## Phase 5j. Spec items still pending (audited from §6, §7, §11B, §11C, §12)
Sorted by priority then complexity.

High priority, ship soon
- [ ] Onboarding (skippable, 20 seconds, pick 2 to 3 goals, recommend a domain or a Path) §11B
- [ ] Achievements expanded: First Blood, Streak x7, Polyglot of Domains (touched 10), Quiz Slayer (perfect quiz), 100 Cards. Trophy shelf UI on Dashboard §6
- [ ] Weakest concepts surfaced as a queue on Review §11C
- [ ] Test out / pre assessment UI surface (data already supports it) §11C
- [ ] Global search across domain names, concepts, glossary (currently only domain grid level) §6
- [ ] Capability log surfaced clearly on Dashboard §11C
- [ ] Calibration score with an explanation block, not just a bar §11C
- [ ] Confetti tied to level up and capstone completion (canvas-confetti is already a dependency) §6

Medium priority
- [ ] Mentor wisdom feed on Home rotating one quote per day with attribution §11B (deferred from §11A removal, keep author free if needed)
- [ ] Adaptive quiz that resurfaces missed concepts more often by tying into FSRS §11B
- [ ] Focus timer (Pomodoro) that logs focused minutes and can kick off a Review session §11B
- [ ] Connections cross domain graph (Phase 3 polish, optional in spec) §11B
- [ ] Shareable rank card PNG (Phase 3 polish, optional in spec) §11B

Polish and platform
- [ ] Self host fonts via `@fontsource/*` for true offline first §9A
- [ ] Optional sounds on XP gain and level up with global mute §6
- [ ] Single self contained `polymath.html` bundle as a second artefact §9
- [ ] PWA manifest plus minimal service worker (Phase 3 optional) §11B
- [ ] Per domain content changelog visible §11C
- [ ] Onboarding stores chosen goals so Dashboard and Home can use them later
- [ ] Per concept mini diagrams (Concept may carry its own diagram per §4) §4

## Phase 5k. Persona audit
Run through the app as five users.
1. Absolute beginner. Just opened the app.
2. Curious learner. Comfortable with one domain.
3. Reference seeker. Wants to look up a definition fast.
4. Returner. Reviewing for retention.
5. Skeptic. Wants to see counter views and sources.
Fix the friction each persona hits. Push.

## Voice rules locked in
- No em dashes or en dashes anywhere in content
- Two register format per concept: Beginner and Expert
- Concept first definition, then beginner explanation, then expert, then prediction, then reveal, then reflect, then quiz, then tasks
- No hallucinated URLs. Unknown stays `url: ""` and `verify: true`
- Status badges (settled, debated, framework) are not optional
- HOME_COUNTRY remains India for finance and law and health localisation hooks
