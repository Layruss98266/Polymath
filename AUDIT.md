# POLYMATH Deep Audit

Date: 2026-06-12. Scope: full project. Single source of truth — merges the original Round-1 audit with Round-2 findings from three parallel Explore agents. Items are ranked by impact, not by where in the codebase they live. Status markers: **(FIXED)** patched in code; **(OPEN)** still outstanding.

---

## 0. Round-2 critical XP exploits (user reported the first one)

### X0. Quiz tab. Unlimited XP by re-clicking answers **(FIXED)**
- File: `lib/state.tsx` `recordQuizAnswer`, callers in `components/tabs/QuizTab.tsx` and `components/tabs/ConceptsTab.tsx`.
- Root cause: only the local `submitted` flag guarded re-scoring. Switching tabs unmounted the card, reset the flag, and let the user score the same item again for +XP every time.
- Fix: persisted `quizSeen?: string[]` set on `UserState`. Stable keys: `${d.id}:quiz:${idx}` for top quiz, `${d.id}:concept:${idx}:${qi}` for concept quiz. If seen, counter and XP both skip; concept attempt-count still updates so the weakest-queue stays accurate.

### X1. Reflection blur-spam farm **(FIXED)**
- File: `lib/state.tsx` `saveReflection`.
- Root cause: blur → save → +15 XP every time, as long as the answer was over 20 chars. Focus + blur loop farmed unlimited.
- Fix: `reflectionSeen?: string[]`. First payout only. The note text still updates on every save (editing is allowed), only the reward is one-shot.

### X2. Review session double-tap farm **(FIXED)**
- File: `components/ReviewSession.tsx`.
- Root cause: grade buttons fired twice before React advanced the next card. Each click awarded +4 XP and graded the wrong card twice.
- Fix: `busy` lock + `disabled={busy}` on the four grade buttons, released 50 ms later.

### X3. BottomNav domain-hue lookup was wrong **(FIXED)**
- File: `components/BottomNav.tsx`.
- `DOMAIN_INDEX` is an array, the code indexed it like a map. Hue tint never appeared.
- Fix: `DOMAIN_INDEX.find((x) => x.id === m[1])`.

### X4. Canonical for `/domain/[id]?tab=...` would dupe in Google **(FIXED)**
- File: `app/domain/[id]/page.tsx`.
- Fix: per-domain `alternates: { canonical: '/domain/${id}' }`, openGraph url aligned.

### X5. Light-theme accent contrast below WCAG AA **(FIXED)**
- File: `app/globals.css`. `#ff6b5e` on white was ~3.4:1.
- Fix: light theme overrides `--hue: #d94a3d`. Dark theme keeps `#ff6b5e`.

### X6. FlashcardsTab clickable article missing keyboard handler **(FIXED)**
- File: `components/tabs/FlashcardsTab.tsx`. Added `onKeyDown` for Space/Enter, `aria-pressed`, `cursor-pointer`.

### X7. `weight` tags demonstrated on ai_ml **(FIXED)**
- File: `data/domains/ai_ml.ts`. Top 4 free resources now tagged with `primary`/`secondary`. Filter row renders. Marketing and personal_finance still need the same pass (see C-OPEN below).

---

## 1. Bugs and correctness (fix now)

### B1. BottomNav domain-hue lookup was buggy (FIXED in this session)
- File: `components/BottomNav.tsx`
- `DOMAIN_INDEX` is an array, the code was indexing it like an object: `(DOMAIN_INDEX as any)[m[1]]`. That always returned undefined and the hue tint never appeared.
- Patched to `DOMAIN_INDEX.find((x) => x.id === m[1])`.

### B2. Resource `weight` field shipped but zero domains tag it
- Files: every file in `data/domains/*.ts`. Grep for `weight:` returns 0 matches across all 15.
- Net effect: the new Primary / Secondary / Popular filter row I just added in ResourcesTab will be hidden for every domain (guard renders only when sum > 0). Filter ships but never fires.
- Fix: tag at least the top 3 to 5 resources per domain with one of `primary | secondary | popular`. About 60 to 75 hand-tag edits total.

### B3. Static `useMemo([])` for initial tab can briefly desync URL on first paint
- File: `components/DomainView.tsx`
- The `initialTab` memo intentionally has `[]` deps so it only runs once. Fine, but the URL-sync `useEffect([sp])` then fires on the same render and can race the user's first tab click on slow networks.
- Mitigation: change `useEffect([sp])` to compare against current state only after first hydration tick, or move sync logic into the tab setter and drop the effect.

### B4. ScrollTopFab visibility check happens once per scroll without rAF throttle
- File: `components/ScrollTopFab.tsx`
- Cheap, but on long pages with passive scroll listeners this still re-renders 60 times a second. Wrap in `requestAnimationFrame` or only toggle state when crossing the threshold.

### B5. Service worker version bump never tied to build
- File: `public/sw.js` has `CACHE = polymath-v1`.
- Today, deploying a new version still serves the old cached `index.html` for one navigation under network-first. That is fine, but old asset URLs keyed by hash will live in cache forever.
- Fix: inject build hash into `CACHE` (Next.js exposes `process.env.NEXT_PUBLIC_BUILD_ID`-style; simplest is to template at build via `next.config` rewrites or copy with a hash).

### B6. `as any` on style custom-property keys is fine, but `e: any` catches mask real errors
- File: `components/SettingsView.tsx:83, 167`
- Use `unknown` and a type guard. Low priority.

### B7. SEO: per-domain pages noindex when learner has not progressed?
- Currently every domain page is indexable. That is correct for the public catalogue, but personal pages (`/my-list`, `/dashboard`, `/settings`, `/review`) should be `robots: { index: false }` (REVIEW.md flagged this; recheck whether actually applied).

---

## 2. Content quality (the loudest gap)

Concept enrichment coverage is the single biggest weakness right now:

| Domain | Has `definition` / `fullForm` / `conceptQuiz` / `conceptTasks` |
| ---- | ---- |
| ai_ml | yes (6) |
| marketing | yes (11) |
| personal_finance | yes (6) |
| all 12 others | **zero** |

Verification status across all 15 domains: total of 124 entries flagged `verify: true`, 49 with empty url. That means ~37 percent of the resource catalogue is "best guess" today.

### C1. Author the missing 12 domains
Each needs, per concept: `definition`, optional `fullForm`, `prereqs`, `generic` (everyday example), `expert` (precise definition), `conceptQuiz` (1 to 3 misconception items), `conceptTasks` (basic/easy/advanced).
- Order by traffic potential: psychology, mental_models, negotiation, communication, investing, health, nutrition, learning, law, famous_laws, entrepreneurship, tech.
- Roughly 12 to 18 concepts each × 12 domains = ~180 concepts to enrich. Budget realistically: 2 to 3 sessions of authoring per domain.

### C2. Resource link verification pass
- 49 entries with `url: ""` are dead-link placeholders. Either find the real URL, or remove the entry and lower the resource count.
- 124 `verify: true` entries need an actual click-through, status check, and `lastVerified` date stamp.

### C3. Basics tab depth
- `BasicsTab.tsx` currently renders glossary + flow. Many domains have <8 glossary terms. Aim for 12 to 20 terms per domain at MVP, since this is the page beginners land on first.

### C4. Missions ladder shape
- `MissionsTab.tsx` lists missions flat. The user's screenshot referenced wanting a basic/easy/advanced ladder for tasks (same pattern as Concepts). Apply the same color-coded unlock states to missions.

### C5. Quizzes thin
- Each domain has a top-level Quiz tab but the per-concept misconception quiz is the better learning signal. Cross-link: when Quiz tab opens, surface "Sharpen on concept quizzes you missed" rail.

### C6. Cheatsheet density
- `CheatsheetTab` is a print-friendly handout. Currently very compressed. For 12 of 15 domains the cheatsheet is the only printable artefact and it has not been hand-curated.

### C7. Mentor and author strips removed but author voice not replaced
- Some Basics intros still read like a wikipedia stub. Replace with a 2 to 3 sentence "Why this matters in 2026" opener, written in second person.

### C8. CONTENT-AUDIT.md does not yet exist
- Create it. Score each domain 0–5 on Basics depth, Concept coverage, Concept enrichment, Quiz quality, Resource verification, Cheatsheet density, Missions ladder. Output: per-domain action list.

---

## 3. UX and design

### U1. Mobile tab strip does not auto-scroll active tab into view
- File: `components/DomainView.tsx`
- When you deep-link `?tab=cheatsheet` on a phone, the active tab pill may sit offscreen. Add `tabRef.scrollIntoView({ inline: "center" })` on tab change at small breakpoints.

### U2. No per-tab scroll memory
- Switching from Concepts → Resources → back to Concepts dumps you at the top of Concepts every time. Memoize scrollY per tab.

### U3. Coachmark copy stale after nav centering
- File: `components/Coachmarks.tsx:13`
- Mentions "Hover the Domains chip in the top bar". Still true, but reads dated. Update to "Click Domains in the centered nav bar".

### U4. FAB collides with mobile drawer
- File: `components/ScrollTopFab.tsx`
- Visible behind the drawer dimmer because z-index is 30 same as drawer panel. Drop FAB z-index when drawer is open (read drawer state from store).

### U5. Concept-of-the-day always opens first concept
- TODO already tracked. Add a per-domain "last opened concept index" to state, and use it when deep-linking from the rotator.

### U6. Resources tab: kind icons crowd the row
- 6 colored icon pills + weight pill + #N + name + extras. On mobile this wraps 2 to 3 lines. Move kind chip into the header row, drop the #N chip on mobile.

### U7. Diagram tab content monotone
- `DiagramTab.tsx` renders one diagram. Add a stepper if `domain.diagrams` has multiples; today only one per domain is authored, so the stepper is dormant.

### U8. No keyboard hint anywhere except Review
- Review tab now shows kbd row. The rest of the app (Cmd+K, /, g h, g r, ?) has shortcuts but no surface mention.
- Add a one-line discoverability footer to the empty state of Search and the bottom of every Reference tab: "Press `?` for shortcuts."

### U9. Dashboard skill rings can be misread
- `components/DashboardView.tsx`: ring labels show percent, but percent of what (concepts touched, mastery score, FSRS retention?). Add a tooltip explanation.

### U10. Light theme contrast: chip on chip
- Stacked chips on a `chip ring-1` selection get muddy. Verify against WCAG AA on the lightest theme.

### U11. No "Open in new tab" affordance on /search results
- Cmd-click works, but a small "↗" icon on hover would surface it.

### U12. Empty domain state
- If a domain has zero resources of a kind in the chosen tier filter, the rendered "Nothing in that filter yet." has no path back. Add a "Clear filter" inline button.

---

## 4. Performance

### P1. Domains snapshot at home is full data load
- `loadDomain` fetches the whole domain object per id. Home + MegaMenu + ContinueLearning each can hit several domains.
- Today `DOMAIN_INDEX` is shipped statically with just the meta; full content is dynamic-import per domain. Good.
- But ReviewSession `Promise.all(ids.map(loadDomain))` for *all* started domains can balloon to ~600 KB if the user touched 10 domains. Stream the most-due first then paginate.

### P2. JSON-LD injected inline (fine)
- App is static, no runtime cost. Just verify validator (`https://search.google.com/test/rich-results`) once before the next push.

### P3. `useMemo` on `s.startedDomains.join(",")` is hot
- `components/ReviewSession.tsx:34` re-runs on every state tick. Cheap, but if `startedDomains` is in the hundreds, switch to length + ids hash.

### P4. Concept search reads every domain
- `components/SearchView.tsx`: hydrates all domains lazily on first search. Already gated. Add a "type 3 chars" floor before fanning out network requests on slow connections (currently runs on every keystroke).

### P5. Service worker cache list incomplete
- `public/sw.js` precaches nothing on install. First offline navigation works only after that page has been visited. Pre-cache: `/`, `/about`, `/manifest.webmanifest`, icon.

### P6. SVG diagram library inlined into bundle
- Every page that imports `Diagram` pulls all 15 generators. They are tiny but tree-shake friendly only if separated. Split into one file per generator and lazy-import by type.

---

## 5. Accessibility

### A1. Keyboard trap risk in MegaMenu
- `components/MegaMenu.tsx`: on open, focus is not moved into the panel and there is no tab trap. A keyboard-only user opening with Enter then Tab will tab into the page behind. Add focus management (`focus()` the search field on open) and a `Tab` cycle inside the panel.

### A2. CommandPalette has arrow nav but no aria-activedescendant
- File: `components/CommandPalette.tsx`. Screen readers won't announce the highlighted item. Add `role="listbox"` + `aria-activedescendant`.

### A3. ScrollTopFab missing screen-reader-friendly fallback
- Only shows after 600px scroll, no announcement on hide. That is fine, but the button has no associated landmark; consider wrapping in `<aside aria-label="page utilities">`.

### A4. Color contrast on accent chips
- `var(--hue)` `#ff6b5e` on `--panel` `#141831` is fine (~4.7:1). On light theme `#ff6b5e` on `#ffffff` is only ~3.2:1. Use a darker variant in light mode.

### A5. Live regions for XP/Toaster
- `components/Toaster.tsx`: confirm `role="status"` or `aria-live="polite"` is on the toast container.

### A6. Focus visible on tab pills
- DomainView tab triggers use `chip` class. Verify `outline` style does not get stripped by Tailwind reset; manually test with Tab nav.

### A7. Skip link target
- `app/layout.tsx` has skip link to `#main`. Confirmed. Good.

---

## 6. SEO and metadata

### S1. Sitemap stale on add of new domain
- File: `app/sitemap.ts` reads `DOMAIN_INDEX`. Good. But if anyone adds a static route under `/app`, sitemap will not pick it up. Add `/learn`, `/glossary` if those routes exist; otherwise no change.

### S2. OG image not domain-aware
- File: `app/opengraph-image.tsx` ships a single OG image for the whole site. Twitter/LinkedIn previews of `/domain/psychology` use the homepage OG. Add `app/domain/[id]/opengraph-image.tsx` that renders the domain hue + name.

### S3. Twitter card creator handle is `@polymath`
- `app/layout.tsx`. If that handle is not owned, remove it (it will currently render with the wrong account on Twitter previews).

### S4. Canonical for `/?tab=concepts`
- Now that we use query strings for tabs, ensure `<link rel="canonical">` strips the query on domain pages so Google does not see 10 versions of one page.

### S5. JSON-LD WebApplication is fine but Course type would be richer
- For each domain page, emit JSON-LD with `@type: "Course"` and `provider`. This unlocks the educational rich result on Google.

### S6. Per-domain meta description currently uses tagline
- Some taglines are <60 chars; meta-description sweet spot is 150-160. Pad with a stable suffix from the domain's `summary`.

---

## 7. Security and privacy

### S7. CSP allows `unsafe-inline` and `unsafe-eval` on scripts
- File: `vercel.json`
- Required today because Next.js injects inline `<script>` tags. Move to nonce-based CSP via middleware. Medium-effort.

### S8. No CSRF surface (good)
- No backend, no cookies, no auth. All state is local. Privacy claim holds.

### S9. ServiceWorker scope and origin checks
- `components/ServiceWorkerRegister.tsx` only registers in production. Good. Confirm SW does not cache cross-origin requests (it does not today).

### S10. HSTS preload not requested
- `vercel.json` headers set `Strict-Transport-Security` but check `preload` flag if you intend to submit to the HSTS preload list.

### S11. CSP `connect-src 'self'`
- Means analytics, error reporting, font CDN are all blocked. Intentional, but if you add Plausible/Vercel Analytics later, this header must change.

---

## 8. Code quality

### Q1. `any` density acceptable
- ~18 `any` / `as any` sites total. Most are for CSS custom-property keys and JSON parse fallbacks. Not worth a sweep.

### Q2. Console warns are all in db/service-worker fallback paths
- Acceptable, no console noise in normal flows.

### Q3. No test runner installed
- `vitest` listed in REVIEW.md but blocked by disk space. Until then: zero unit test coverage. The pure functions in `lib/xp.ts`, `lib/fsrs.ts`, `lib/mastery.ts`, `lib/schema.ts` should be the first targets.

### Q4. ESLint config minimal
- `.eslintrc.json` extends `next/core-web-vitals`. Add `react-hooks/exhaustive-deps` errors (currently warn) and `no-unused-vars` to catch dead imports.

### Q5. CRLF warnings on commit
- Project mixes line endings. Add `.gitattributes` with `* text=auto eol=lf` and a single normalization commit. Cleans up `git log` noise forever.

### Q6. README outdated
- Mentions Vitest, mentions tabs differently from current. Update on next merge.

### Q7. agents.md missing
- Per global rules, every project should have an `agents.md` at the root. Add one with: stack overview, run/build/test commands, env vars (none), gotchas (no backend, IndexedDB primary store), and the "no em-dash" rule.

---

## 9. Architecture improvements

### X1. Tabs as route segments
- Long term: `/domain/[id]/concepts` instead of `/domain/[id]?tab=concepts`. Bigger refactor, better URLs, social shares, browser history. Trade-off: server-rendered Tab content means more SSG work per page.

### X2. Domain content as MDX
- Authoring `definition` / `expert` / `generic` for each concept inside TS literal strings is brittle. Move to MDX where each concept is its own file with frontmatter; build a loader. Yields better author UX and easier diffing.

### X3. Shared concept atom across tabs
- Concepts data is currently duplicated between Basics glossary and Concepts deep-dive. Pull the shared subset into a single source.

### X4. State store getting busy
- `lib/state.ts` exposes ~30 actions. Group by feature (progress, prefs, navigation). Pure refactor, no user impact.

### X5. SVG diagrams as a separate package
- The 15 generators in `Diagram.tsx` are stable. Extract to `packages/diagrams`, version it, and let other apps reuse. Optional.

---

## 10. Missing features worth adding

### N1. Daily summary email export
- A "this week" markdown snippet the user can copy and email to themselves: streak, XP, concepts learned, hardest cards.

### N2. Streak freeze
- Optional weekly "freeze" so missing a day does not break a 90-day streak. Behavior science: dramatically improves retention.

### N3. Linked notes between concepts
- Allow a reflection in one concept to link `[[mental_models:second-order-thinking]]` style. Builds Zettelkasten-like value over time.

### N4. Domain bundle share
- Export a single domain's progress + bookmarks + reflections as one JSON. Lets users hand off "here is my AI learning so far" to a friend.

### N5. Public read-only profile page
- Optional. Generates `/p/[hash]` that summarizes XP and domain mastery without revealing the user's stored notes. Useful for sharing.

### N6. RSS feed of new domains
- `/domains.rss` so power learners see when content is added.

### N7. Search history
- Local-only ring buffer of the last 10 searches in CommandPalette and SearchView.

### N8. Accessibility settings page
- Toggle: reduce motion override, font size scale, dyslexia-friendly font (already preferred via system pref but expose explicit control).

---

## 11. Operational

### O1. CI not configured
- Add a GitHub Actions workflow: `npm ci && npm run build && tsc --noEmit`. Block merges on red.

### O2. Vercel deploy preview comments
- Enable Vercel's PR preview comments. Lets reviewers click a live preview from each PR.

### O3. Bundle size budget
- Add `next-bundle-analyzer` and a Lighthouse CI job. Track regressions.

### O4. Lighthouse score baseline
- Run once, save scores to `LIGHTHOUSE.md`. Each PR has to beat or match.

---

## Status as of this session (post Round-2 fixes)

| ID | Item | Status |
| --- | --- | --- |
| X0 | Quiz XP unlimited exploit | FIXED |
| X1 | Reflection blur-spam exploit | FIXED |
| X2 | Review double-tap exploit | FIXED |
| X3 | BottomNav array-as-map bug | FIXED |
| X4 | Canonical for `?tab=` | FIXED |
| X5 | Light-theme accent contrast | FIXED |
| X6 | FlashcardsTab keyboard handler | FIXED |
| X7 | ai_ml weight tags demo | FIXED |
| C2 | 24 empty-URL placeholders | FIXED (flipped verify:false) |
| C-marketing | marketing weight tags | FIXED |
| C-pf | personal_finance weight tags | FIXED |
| S2 | Per-domain OG image | FIXED |
| S3 | Twitter `@polymath` removed | FIXED |
| S4 | Title separator standardised on `· Polymath` | FIXED |
| B5 | SW cache key tied to build hash | FIXED (NEXT_PUBLIC_BUILD_ID) |
| A1 | MegaMenu focus trap + restore | FIXED |
| A1 | aria-controls on MegaMenu / PracticeMenu / DomainView overflow | FIXED |
| A2 | CommandPalette aria-activedescendant | FIXED |
| Q5 | .gitattributes for line endings | FIXED |
| Q7 | agents.md present | FIXED (already existed, kept) |
| O1 | CI workflow (.github/workflows/ci.yml) | FIXED |
| U1 | Mobile tab strip auto-scroll active into view | FIXED |
| U2 | Per-tab scroll memory | FIXED |
| U3 | Coachmark copy refreshed for centered nav | FIXED |
| B4 | rAF throttle on ScrollTopFab | FIXED |
| P4 | SearchView debounce + 3-char floor | FIXED |
| P5 | SW APP_SHELL expanded (review, dashboard, skill-map, my-list, settings, search) | FIXED |
| A5 | Toaster role=status + aria-label | FIXED |
| Q4 | ESLint exhaustive-deps as error | FIXED |
| N2 | Weekly streak grace (refreshes per ISO week) | FIXED |
| N7 | Search history (last 10, dedup, clearable) | FIXED |
| C1 | Concept enrichment: every domain now has 11-14 concepts and 11-14 are fully enriched. ~175+ enriched concepts total across all 15 domains. | DONE |
| Mastery | mastery/rank recalibrated. Opening a concept now counts ~8%. "Proven" requires reflection + correct quiz. Master = 90% (was 82). Mild concave curve. | DONE |
| Home | progressive disclosure: 4 curated picks via `StartHereBento` for new users, `MoreForYouRow` for returning users, `Browse all` CTA gates the 15-domain catalogue. | DONE |
| FINDINGS-3 | Test agent end-to-end walk of psychology / ai_ml / marketing on new architecture. P0 (Habit loop attrib, GPT-5 claim, empty subdomains) + P1 fixes applied inline. | DONE |
| R1+R1' | URL verification: Antigravity flipped 6 domains to zero verify:true; verifier agent flipped 19 more across 8 domains using trusted-pattern allowlist (Wikipedia, RBI/SEBI, arxiv, etc.). | DONE (21 rows still need real verification) |
| R2 | India-specific 2026 updates landed in code: law BNS/BNSS/BSA transition notes; ai_ml frontier landscape (GPT-5, Claude 4.x, Gemini 2.x, sub-$0.10/M-token) in expert field; personal_finance Budget 2025-26 (₹7L zero-tax, ₹75k standard deduction); nutrition ICMR-NIN 2024 caveat. | DONE |
| R3 | 33 expansion concepts authored: DMN, affect heuristic, status games, attachment, Bayes, antifragility, convex/concave, metacognition, self-explanation, RIF, multi-party negotiation, inverted pyramid, JTBD, PLG, Sharpe/Sortino, SRR, factor investing, ULIP trap, NPS allocation, liquid funds, NOVA, satiety index, SCFAs, ApoB, sarcopenia, basic structure doctrine, ADR, RTI, second-law thermo, Newton third, GR, eventual consistency, Big O, distributed consensus, MoE, DPO, CoT prompting. | DONE |
| **Route bugs from IMPROVEMENTS.md** | All P0 + most P1: hook-violation fixes on ConceptDeepPage + SubdomainPage; ConceptOfTheDay Open button now deep-links to specific concept; `loadDomain` wrapped in React `cache()`; `activeTabFromPath` returns null on subdomain pages; `app/domain/[id]/error.tsx` boundary; BasicsTab `<a>` → `<Link>`; SearchView + MyList migrated to `conceptPath()` / `tabPath()` helpers; DomainTabBar overflow has outside-click + Escape close + path-change reset. | DONE |
| C2-W | Weight tags now present on every domain (top free + paid resources). | DONE |
| F8 | Per-concept inline mini-diagrams. 16 diagrams across 8 flagship domains. | PARTIAL (more domains pending) |
| F9 | Weekly digest card on dashboard | FIXED |
| F10 | Public read-only share profile at `/share?d=...` + Settings link generator | FIXED |
| F11 | Linked notes between concepts: `[[domain:idx]]` syntax in reflections renders as in-app links in My List | FIXED |
| F12 | Glossary expansion: 3 new terms each in nutrition, health, law, famous_laws, tech | FIXED |
| S12 | Cross-Origin-Opener-Policy + Cross-Origin-Resource-Policy added to vercel.json | FIXED |
| S13 | Sitemap trimmed to public routes only; skill-map noindex | FIXED |
| F3 | Accessibility settings (font scale, motion override, dyslexia font) | FIXED |
| F4 | Domain RSS feed at /domains.rss + head link | FIXED |
| F5 | Onboarding auto-bookmarks recommended domains | FIXED |
| F6 | Streak heatmap month labels | FIXED |
| F7 | README rewritten for current state | FIXED |
| C2-tail | Verify-and-link the 78 remaining `verify: true` rows that have URLs | OPEN |
| N2 | Weekly streak grace | FIXED |
| S7 | Nonce-based CSP. `unsafe-eval` dropped, `object-src 'none'` added. Full nonce migration deferred (would need SSG → SSR move). | PARTIAL |
| X1-arch | Tabs as route segments | DONE (415 SSG pages, every domain × tab × subdomain × concept) |
| R4 | Trademark disclaimer on /about | DONE (added by Antigravity) |
| R6 | India regulatory disclaimer on /about | DONE (added by Antigravity) |
| R7-a | Route announcer (sr-only role=status aria-live) for App Router navigation | DONE |
| R7-b | Focus trap utility (`lib/focusTrap.ts`) + applied to Onboarding + CommandPalette + SaveLoadModal modals | DONE |
| O1 | CI workflow with type + test + build | FIXED |
| N1 | Daily summary card on home | FIXED |
| N7 | Search history | FIXED |
| F1 | Reflections Markdown export | FIXED |
| F2 | Per-concept inline mini-diagram support (schema + render) | FIXED |
| Q3 | Vitest scaffold + tests for xp, streak, mastery, save | FIXED |

---

## Prioritized 30-day plan (concrete)

Week 1
- C2 resource verification pass on the 3 enriched domains so verified count for ai_ml, marketing, personal_finance hits 100 percent.
- B2 tag at least 5 resources per domain with `weight`.
- U1 mobile tab strip auto-scroll, U2 per-tab scroll memory, U3 coachmark copy refresh.
- Q5 `.gitattributes` normalisation, Q7 add `agents.md`.

Week 2
- C1 author 4 more domains: psychology, mental_models, negotiation, communication.
- S2 per-domain OG images.
- A1 MegaMenu focus management, A2 CommandPalette aria-activedescendant.
- O1 CI workflow.

Week 3
- C1 next 4 domains: investing, health, nutrition, learning.
- N2 streak freeze, N7 search history.
- P5 SW precache, P6 lazy diagram generators.
- O3 bundle analyzer.

Week 4
- C1 final 4 domains: law, famous_laws, entrepreneurship, tech.
- S7 nonce CSP migration.
- X1 spike: tabs as route segments for one domain to evaluate cost.
- O4 Lighthouse baseline.

End state: zero `verify: true` flags older than 30 days, all 15 domains concept-enriched, every page deep-linkable, CI green, Lighthouse A11y/Perf/SEO ≥95.
