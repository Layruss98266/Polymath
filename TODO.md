# POLYMATH TODO

Consolidated backlog from user feedback after Phase 4. Worked top to bottom, pushed at each milestone. See `PROGRESS.md` for what has shipped.

## Phase 5a. Mechanical sweep (no content rewrites)
1. Strip every em dash and en dash from data files. Replace with comma or period. Keep regular hyphens in compound words like low-cost, ultra-processed.
2. Same sweep on components and pages.
3. Verify build still green; push.

## Phase 5b. Schema and engine for new concept format
1. Extend `Concept` type and Zod schema with optional fields:
   - `definition` (one line, dictionary style)
   - `fullForm` (expansion of any acronym in the concept name)
   - `prereqs` (list of prior concept ids the learner should ideally see first)
   - `generic` (explanation for someone with zero background)
   - `expert` (explanation for someone with prior domain knowledge)
   - `quiz` (3 to 5 questions tied to this single concept, separate from the domain wide quiz)
   - `tasks` (basic, easy, advanced; small actions tied to this concept)
   - `subdomain` (optional grouping label inside the domain)
2. Add a `domainQuiz` field on the domain for the cross concept quiz that already exists.
3. Bump schemaVersion and add a migration so old saves keep working.
4. Push.

## Phase 5c. Concepts UX. One concept at a time with quiz gate
1. Rebuild `ConceptsTab` so only one concept is visible at a time.
2. Order concepts by sub domain, then by prereqs, then by author order.
3. Inside the concept view:
   - Definition box on top
   - Full form (if any)
   - Prereqs (linked, one click to jump)
   - Toggle: Generic explanation vs Domain expert explanation
   - Test first prediction prompt
   - Reveal explanation
   - Reflect prompt
   - 3 to 5 concept quiz, scored
   - Tasks (basic, easy, advanced)
   - Next button unlocks when at least 60 percent of concept quiz is correct
4. Progress bar across the top of the tab showing position in the concept sequence.
5. Domain wide quiz remains under the Quiz tab.
6. Push.

## Phase 5d. Mastery tier visuals
1. Each of the seven ranks (Novice through Grandmaster) gets a distinct color, icon, and gradient.
2. Apply across DomainCard, DomainView header, Dashboard rank list, Skill Map.
3. Add subtle visual differentiation that survives both light and dark themes.
4. Push.

## Phase 5e. Daily famous quote rotation
1. `data/quotes.ts` with up to 500 real, accurately attributed quotes, grouped loosely by domain.
2. `DailyQuote` component on Home that shows one per day deterministically (date hash), with attribution.
3. Reduced motion friendly. No external fetch.
4. Push.

## Phase 5f. Resources rebalanced toward video
1. Re audit every domain resource list.
2. Target ratio per domain: about 4 to 5 articles or text resources, rest videos, courses, books.
3. Add a `kind` field (`article` | `video` | `course` | `book` | `podcast` | `tool`) so the UI can sort.
4. Push.

## Phase 5g. Sub domain support and concept variety
1. For each Core 15 domain, introduce 2 to 4 sub domains.
2. Author 4 to 6 new concepts per domain across those sub domains, using the new schema (definition, full form, prereqs, generic, expert, quiz, tasks).
3. Target ending state: 12 to 16 concepts per domain, grouped by sub domain.
4. Push after every 2 to 3 domains.

## Phase 5h. Task ladder
1. Each concept gets 3 tasks: basic (could do today), easy (could do this week), advanced (real project).
2. Each domain gets a final boss capstone (already exists, polish wording).
3. Tasks unlock progressively. Basic visible from start; advanced visible after passing concept quiz.
4. Push.

## Phase 5i. Persona audit (manual review)
Run through the app as five users:
1. Absolute beginner. Just opened the app, never heard of any of these topics.
2. Curious learner. Comfortable with one domain, wants to see how the others connect.
3. Reference seeker. Just wants to look up a definition fast.
4. Returner. Reviewing for retention, mostly uses the spaced repetition.
5. Skeptic. Pushes back, wants to see counter views and sources.
Fix the friction points each persona hits. Push.

## Phase 5j. Anything still left from the spec
Cross check against `POLYMATH_claude_code_prompt2.md`:
- Connections cross domain graph (Phase 3 polish, optional in spec)
- PWA manifest and service worker (Phase 3 polish, optional in spec)
- Self hosted fonts via `@fontsource` (offline first)
- Test out pre assessment is wired into quiz but UI could surface it more
- Weakest concepts queue surfaced in Review (engine has the data already)
- Capability log surfaced on Dashboard
- Calibration score gets more visible explanation
Implement the high value remaining items, defer or document the rest.

## Open notes
- No em or en dashes anywhere in content from Phase 5 onwards. Use commas, semicolons, parentheses, or full stops.
- Real URLs only for resources. Unknown stays `verify: true`, `url: ""`.
- Honest about uncertainty. Status badges (settled, debated, framework) are not optional.
- Single source of truth for XP table and mastery formula stays in `lib/xp.ts` and `lib/mastery.ts`.
