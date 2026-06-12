# Polymath — Code Review A

Reviewer pass focused on architecture, state integrity, route handlers, and cross-feature consistency. Findings are ordered by severity inside each section. Locations are `file:line` against the working tree.

---

## Summary

- **Two real correctness bugs.** Main-domain quiz never grants calibration XP because `calibrated` is read from stale render state in `QuizTab.pick`. `WeeklyDigest` keys days in UTC while the rest of the app keys in local time, so weekly buckets and the "today" comparison drift around midnight in any non-UTC tz.
- **Mastery formula has a phantom input.** `masteryPct` weighs `flashcardsGraduated` at 22%, but nothing in the codebase ever increments `DomainProgress.flashcardsGraduated` — the field is dead. `FlashcardsTab` grants neither XP nor any progress counter on grade. Mastery is silently capped at ~78% for users who only do flashcards.
- **State-integrity guards are mostly intact** (`recordQuizAnswer` dedupes via `quizSeen`, `saveReflection` via `reflectionSeen`, `completeMission`/`completeCapstone` via the per-domain progress record). The only outlier is `ReviewSession`'s `addXP(4, "review")` per grade, which has no dedupe key but is bounded by the FSRS due-now pool, so the farm vector is small.
- **Routing is mostly clean but redundant.** Every child of `app/domain/[id]/` re-declares `generateStaticParams`, which is unnecessary — the parent layout already declares it and children inherit. `TabQueryRedirect` is correctly gated (only fires when `?tab=` is present) and idempotent.
- **Cross-feature consistency is broken in 6 places.** Bare `/domain/${id}` paths leak across `BasicsTab`, `StartHereBento`, `MoreForYouRow`, `CommandPalette`, `SearchView`, `MyList`, and `ReviewSession` instead of going through `tabPath()` / `conceptPath()` from `lib/tabs.ts`. Future tab-routing changes won't propagate.

---

## P0 bugs (must fix before next deploy)

### 1. `QuizTab.pick` uses stale `calibrated` flag — calibration XP never paid out
**Location:** `components/tabs/QuizTab.tsx:30-36`
**Problem:** `calibrated` is computed in render scope from `submitted && right` — but `submitted = picked !== null`, and at the moment `pick(i)` runs `picked` is still null. The closure captures `calibrated = false` from the render where the button was rendered, so `recordQuizAnswer(d.id, i === correctIdx, calibrated, ...)` *always* passes `false`. The calibration XP bonus (`XP.quizCorrectCalibrated = 8`) is never granted on the main domain quiz. (The concept-quiz at `ConceptDeepPage.tsx:71` and `ConceptsTab.tsx:91` hardcodes `true`, which is the opposite problem — always claims calibrated.)
**Fix:** Inside `pick(i)`, recompute against the just-picked index:
```ts
const right = i === correctIdx;
const isCalibrated = (right && conf !== "guess") || (!right && conf === "guess");
a.recordQuizAnswer(d.id, right, isCalibrated, undefined, `${d.id}:quiz:${idx}`);
```
And in the two concept-quiz callers, derive calibration from a confidence picker rather than hardcoding `true`.

### 2. `WeeklyDigest` day keys are UTC, mismatching `todayKey()`
**Location:** `components/WeeklyDigest.tsx:11-13`
**Problem:** `dayKey(d) = d.toISOString().slice(0, 10)` returns the UTC date. Everywhere else in the app (`lib/streak.ts:5-10`, `lib/state.tsx` `xpByDay` writes, `TodayCard.tsx:19`) uses local-time `YYYY-MM-DD`. For any user not on UTC, the bucket keys in `WeeklyDigest` will not match the keys written by the store, so XP-this-week and best-day calculations either undercount or read from the wrong day. The `today` comparison at `WeeklyDigest.tsx:61` is also wrong for the same reason.
**Fix:** Replace local `dayKey` with `todayKey(d)` from `lib/streak.ts` (or import it directly and pass dates through).

### 3. `FlashcardsTab` grants no XP and never increments `flashcardsGraduated`
**Location:** `components/tabs/FlashcardsTab.tsx:34-39`
**Problem:** `gradeAndNext` calls `a.upsertCard(next)` only. No `XP.flashcardReviewed` (4), no `XP.flashcardGraduated` (25), and no increment of `DomainProgress.flashcardsGraduated`. The mastery formula in `lib/mastery.ts:47` reads `p.flashcardsGraduated / d.flashcards.length` at 22% weight, so users who lean on flashcards never see that 22% pay out — the per-domain mastery is hard-capped at ~78%.
**Fix:** In the store, add a `gradeFlashcard(domainId, cardKey, prevState, nextState)` action that (a) calls `upsertCard`, (b) grants `XP.flashcardReviewed` always, (c) when `prevState !== 2 (Review)` and `nextState === 2 (Review)` grants `XP.flashcardGraduated` and increments `flashcardsGraduated`, deduped against a new `graduatedCards: string[]` set in `UserState` so re-lapse + re-grad doesn't double-pay.

---

## P1 bugs (should fix soon)

### 4. `ReviewSession` keyboard handler captures stale `onGrade`
**Location:** `components/ReviewSession.tsx:72-89`
**Problem:** `useEffect` deps are `[card?.cardKey, flipped]` with `eslint-disable-next-line react-hooks/exhaustive-deps`. The handler closes over `onGrade`, which itself closes over the current `s.cards`. When `s.cards` updates between renders but `card.cardKey` doesn't change yet (e.g. another tab dispatches a store update mid-session), the keyboard handler keeps the old `onGrade`, which calls `grade(existing, g)` where `existing` is stale. The card update path normally bumps `card.cardKey` because `i` advances, masking the bug, but it can still produce the wrong scheduled time on edge cases.
**Fix:** Use a `useRef` for the latest `onGrade` and call `ref.current(g)` from the listener, then deps are just `[]`.

### 5. `SearchView` domain-load race overwrites concurrent batches
**Location:** `components/SearchView.tsx:79`
**Problem:** `const next = { ...loaded }` snapshots `loaded` from the closure. The effect deps exclude `loaded` (with eslint-disable). If two queries 200ms apart both fire `Promise.all`, the slower one resolves against an outdated `loaded` and clobbers entries the faster one set.
**Fix:** `setLoaded((prev) => ({ ...prev, ...newMap }))`. Same pattern is correctly used elsewhere in the file via state updaters.

### 6. `MyList` bookmark link drops user on basics instead of the concept
**Location:** `components/MyList.tsx:100-106`
**Problem:** Bookmark row says "concept #N" but `Link href={\`/domain/${domainId}\`}` lands on the basics tab. User has to click again. Reflection rows at line 146 have the same issue.
**Fix:** Use `conceptPath(domainId, Number(idx))` for both.

### 7. `Onboarding` dialog has no Escape close
**Location:** `components/Onboarding.tsx:73-132`
**Problem:** Modal has `role="dialog" aria-modal="true"` and a focus trap, but no `keydown` listener for Escape. Keyboard users have to tab to "Skip" which is an accessibility footgun on a *first-visit* modal.
**Fix:** Add `useEffect` listener that calls `a.skipOnboarding()` on Escape, scoped to `dialogOpen`.

### 8. `ConceptsTab` mobile TOC sheet has no focus trap and no Escape
**Location:** `components/ConceptsTab.tsx:148-177`
**Problem:** Bottom-sheet TOC is `role="dialog"` but missing `aria-modal`, no focus trap, no Escape close. Backdrop click works but keyboard users are stuck. Compare `CommandPalette.tsx` which does it right.
**Fix:** Reuse `useFocusTrap(showTOC, ref)` and add a keydown listener that closes on Escape.

### 9. Redundant `generateStaticParams` on every child route
**Location:** `app/domain/[id]/{concepts,quiz,flashcards,diagram,roadmap,resources,missions,cheatsheet,counter}/page.tsx`
**Problem:** Parent layout at `app/domain/[id]/layout.tsx:15-17` already declares `generateStaticParams`. Children inherit by default in Next 14+ App Router. Re-declaring runs `DOMAIN_INDEX.map` eight extra times during build and dilutes the single source of truth.
**Fix:** Delete `generateStaticParams` from the eight tab `page.tsx` files. Keep it on `concepts/[idx]/page.tsx` and `sub/[subdomain]/page.tsx` which enumerate new params.

### 10. `ConceptsTab` variable shadowing `idx`
**Location:** `components/ConceptsTab.tsx:239-241`
**Problem:** Inside `STAGES.map` the inner `const idx = STAGES.findIndex(...)` shadows the outer `idx` (current concept index). Confusing for any future maintainer touching the stage indicator.
**Fix:** Rename inner to `currentStageIdx` / `stageIdx`.

### 11. `QuizTab` does not honour `testOut` semantics
**Location:** `components/tabs/QuizTab.tsx:35`, `lib/types` `QuizQuestion.testOut`
**Problem:** When `q.testOut === true` and the user answers correctly, the spec (and the chip's tooltip text on line 49) says the related concept should be marked proven. There is no link from the quiz question to a concept index, and `recordQuizAnswer` is never called with the related `conceptIndex`. The "Test out" affordance is decorative only.
**Fix:** Extend `QuizQuestion` schema with optional `forConceptIndex: number`, thread it through `pick`, and when `testOut && right`, call a new `markConceptProven(domainId, conceptIndex)` action that sets `accuracy = 1` and `attempts = max(2, existing)` so the mastery "proven" gate at `lib/mastery.ts:35` is crossed.

### 12. `Onboarding.finish` skips early when `picked` is empty
**Location:** `components/Onboarding.tsx:61-70`, `Onboarding.tsx:118`
**Problem:** Clicking "Open domain" on a recommendation triggers `finish()`. `finish` calls `a.toggleBookmark` for every picked id. If the user picked 3 goals all mapping to the same `recDomainId` (e.g. picks `psychology` twice), `toggleBookmark` toggles off the second time. Edge case, but the bookmark either appears or vanishes depending on duplicates.
**Fix:** Dedupe `picked` recDomainIds before bookmarking, or use `setBookmark(key, true)` semantics rather than toggle.

---

## P2 improvements (nice to have)

### 13. Cross-feature consistency — bare paths to `/domain/${id}`
**Locations:**
- `components/tabs/BasicsTab.tsx:16` and `:41`
- `components/StartHereBento.tsx:37`
- `components/MoreForYouRow.tsx:40`
- `components/CommandPalette.tsx:64`
- `components/SearchView.tsx:200`
- `components/MyList.tsx:56`, `:100`, `:146`, `:175`
- `components/ReviewSession.tsx:112`, `:236`
- `app/domains.rss/route.ts:22-23` (sitemap parallel uses bare paths too, by design for XML)

**Problem:** Each is a hard-coded `/domain/${id}` instead of `tabPath(id, "basics")`. The whole point of `lib/tabs.ts` is to centralise this so a future refactor (e.g. moving basics under `/domain/${id}/basics`) is one-line. Today every link would have to be hunted down.
**Fix:** Import and use `tabPath(id, "basics")` in all client components. RSS/sitemap can stay literal since they're URL strings, but at least pull `SITE` from a single constant.

### 14. Multiple `as any` casts where a real type exists
**Locations:**
- `components/CommandPalette.tsx:73` `router.push(it.href as any)` — `it.href` is a string; Next's typed routes API is what's complaining. Use `router.push(it.href as Route)` or widen `Item.href` to `Route`.
- `components/tabs/ResourcesTab.tsx:50,55,60,125` `(r as any).weight` — `Resource` already has `weight?: "primary" | "secondary" | "popular"` (per `lib/schema.ts:78`). Drop the cast; use `r.weight` directly.
- `components/ReviewSession.tsx:204` `["--hue" as any]: domHue` — the legitimate pattern is `as React.CSSProperties` on the wrapper. The `DomainHeader.tsx:30` version does it correctly; copy that.

### 15. `Sitemap` missing standalone routes
**Location:** `app/sitemap.ts:9`
**Problem:** Only `/` and `/about` are in `staticRoutes`. `/dashboard`, `/review`, `/my-list`, `/skill-map` are marked `robots: noindex` in their page metadata (correct), but `/search` and `/skill-map` are indexable per their metadata, and should be in the sitemap.
**Fix:** Add `/search` and `/skill-map` to `staticRoutes`. Keep the noindex pages out.

### 16. Duplicate `SITE` constant
**Location:** `app/layout.tsx:17`, `app/sitemap.ts:5`, `app/robots.ts:7`, `app/domains.rss/route.ts:3`
**Fix:** Extract `lib/site.ts` exporting `SITE = "https://polymath.vercel.app"` and import everywhere.

### 17. `useMemo` on identity values
**Location:** `components/domain/SubdomainPage.tsx:15` `useMemo(() => domain.glossary, [domain.glossary])`
**Problem:** Wraps a pass-through value. The memo never saves anything.
**Fix:** Just use `domain.glossary` directly.

### 18. `ConceptsTab` recomputes `wordCount`/`readMins` every render
**Location:** `components/ConceptsTab.tsx:75-76`
**Problem:** `explanation.split(/\s+/).length` is fine for short strings but re-runs every keystroke into the reflection textarea. Cheap, but the pattern compounds.
**Fix:** Wrap in `useMemo(() => …, [explanation])`.

### 19. `useTodayKey` first-render value is empty string
**Location:** `lib/state.tsx:354-358`
**Problem:** Returns `""` on first render then resolves after `useEffect`. Callers must handle the empty case or they render a stale `dailyQuest?.day === ""` comparison as truthy-mismatched.
**Fix:** Either expose `useTodayKey(): string | null` so callers handle null explicitly, or initialise from a SSR-safe `todayKey()` and accept the one-frame mismatch (the existing comment says it's deliberate, but it's still a footgun).

### 20. `tabPath` returns the bare domain page for `basics`
**Location:** `lib/tabs.ts:46-50`
**Note:** Not a bug, but `tabPath(id, "basics")` returns `/domain/${id}` while the `<Link>` target in `DomainTabBar` (`tabPath(domain.id, t.id)` on line 91) renders an "active" chip for that bare URL. Routing is consistent. The reason this works is the `t.segment === ""` short-circuit on line 48. Anyone replacing the basics segment with `"basics"` needs to update three places: this function, the layout child structure, and `activeTabFromPath` at `DomainTabBar.tsx:22-31`. Worth a comment in `tabs.ts`.

### 21. `RESERVED_SEGMENTS` never enforced
**Location:** `lib/tabs.ts:39-42`
**Note:** Documented as "used to avoid collisions with subdomain ids," but nothing actually checks subdomain ids against it. A subdomain named `quiz` would silently break routing. Add a runtime assertion in `data/domains.ts:loadDomain` after `validateDomain`:
```ts
for (const sd of mod.default.subdomains ?? []) {
  if (RESERVED_SEGMENTS.has(sd.id)) throw new Error(`Subdomain id "${sd.id}" collides with reserved segment`);
}
```

### 22. `CommandPalette` Cmd+K not scoped to non-input targets
**Location:** `components/CommandPalette.tsx:39-47`
**Note:** Listener fires globally; if a future textarea ever rebinds Cmd+K (e.g. for a markdown link insertion), the palette will steal it. `ReviewSession.tsx:74-77` correctly guards on `INPUT|TEXTAREA|SELECT`/`isContentEditable`. Mirror that pattern.

### 23. `ReviewSession` deps include `s.startedDomains.join(",")`
**Location:** `components/ReviewSession.tsx:34`
**Note:** Hash-as-string anti-pattern. Use `useMemo` on the id list with a stable identity instead, or accept that the array identity changes on every store emit (it does, today, because `useUserState` returns a fresh object via `useSyncExternalStore`).

### 24. `addXP` ignores `_reason`
**Location:** `lib/state.tsx:133`
**Note:** Argument is underscored, only call site passes "review". If you intend to track XP by source for the dashboard, wire it through `xpByDay` or a `xpBySource` field. Otherwise drop the parameter.

### 25. `migrate` order is suspect for backfill
**Location:** `lib/migrations.ts:23`
**Note:** `{ ...defaultState(), ...s, schemaVersion: CURRENT_SCHEMA_VERSION }` means a stored state with `xpByDay: undefined` would be backfilled from defaults, which doesn't include `xpByDay`. Newer optional fields like `quizSeen`, `reflectionSeen`, `xpByDay`, `calibrationScore`, `graceUsedOn`, `dailyQuest`, `goals`, `onboarded`, `muteSound`, `fontScale`, `dyslexicFont`, `reducedMotionOverride` should appear in `defaultState()` so the spread fills them in. Currently the spread is harmless because every action checks `(s.xpByDay ?? {})` etc., but the defensiveness is repeated all over the store.

### 26. `RouteAnnouncer` and other layout children mount on every page
**Location:** `app/layout.tsx:99-114`
**Note:** `StoreProvider`, `Toaster`, `OveruseNudge`, `KeyboardShortcuts`, `Coachmarks`, `Onboarding`, `CommandPalette`, `ServiceWorkerRegister`, `ScrollTopFab`, `RouteAnnouncer` are *all* client components mounted at the root layout. That collapses the server-tree boundary to the root. Consider wrapping the always-mounted overlays in one client component (`<AppOverlays/>`) so the layout itself can stay server-only when possible.

---

## Architectural observations (notes for next session)

- **Store design is sound.** `vanilla store + useSyncExternalStore` is the right call for this scale, and dedupe-via-persisted-sets (`quizSeen`, `reflectionSeen`) is the right pattern. New actions that grant XP or move a counter must follow that pattern; the audit checklist is: "is there a state-keyed set of seen-keys for this action?" If not, it can be farmed.
- **Tab routing is a one-way valve.** Every link goes out through `lib/tabs.ts`, but reads (in `activeTabFromPath`) only loosely understand the URL shape. A small `parseDomainUrl(pathname)` helper that returns `{ domainId, tabId, subdomainId, conceptIdx }` would centralise both ends.
- **`loadDomain` is a perfect `cache()`'d server accessor** for SSG; client callers (`SearchView`, `Dashboard`, `ReviewSession`) hit the same import path. That said, each client invocation re-runs Zod validation per import. Consider a `loadDomainClient` that skips Zod in production (Zod only runs once at build-time anyway for SSG).
- **`generateStaticParams` over-enumerates.** The concept-deep route walks every concept in every domain at build time — 15 domains × ~10 concepts = 150 routes generated. Today that's fine. Once a domain hits 50 concepts (some already do — `concepts.min(8)` schema), build time becomes notable. Consider `dynamicParams = true` and let the rest stream.
- **`DomainProvider` side-effect timing.** `startDomain` fires on every mount under `/domain/[id]/*`. The dedupe guard inside the action (`if (s.startedDomains.includes(id)) return s;`) makes it idempotent, but the action still runs through `applyAchievements` every time. Cheap, but worth knowing.
- **Mastery's "proven" definition couples three signals** (`opened` + `reflectAnswer > 20` + `accuracy >= 0.6`). The accuracy threshold relies on `ConceptProgress.attempts` and `accuracy`, which are written only inside `recordQuizAnswer` when `conceptIndex` is provided. `QuizTab` (main domain quiz) calls without `conceptIndex`, so domain quizzes never contribute to "proven." That's a deliberate choice but worth documenting in `lib/mastery.ts`.
- **Review-session XP is intentionally untracked per-card.** Across-domain reviews never bump per-domain mastery counters (e.g. `flashcardsGraduated`), only the global XP. That's why finding 3 above matters — without `FlashcardsTab` or `ReviewSession` driving the counter, the field is unreachable.

---

## Dead code / cleanup candidates

- `DomainProgress.flashcardsGraduated` — declared in `lib/types`, weighted at 22% in `lib/mastery.ts:47`, never written anywhere. **Decision:** wire up (finding 3) or remove from the formula.
- `XP.flashcardReviewed` / `XP.flashcardGraduated` / `XP.testOutProven` constants in `lib/xp.ts:11,12,17` — defined, never referenced. Either wire up or delete.
- `UserState.capabilityLog` — listed in `defaultState`, never written, never read.
- `RESERVED_SEGMENTS` exported from `lib/tabs.ts:39` — exported but no caller. Either enforce (finding 21) or drop the export.
- `addXP` second parameter `_reason` (`lib/state.tsx:133`) — only one caller passes a value, never read.
- The eight tab `generateStaticParams` duplicates (finding 9).
- Duplicated `SITE` constant in four files (finding 16).
- `components/tabs/CounterViewTab.tsx`, `components/tabs/DiagramTab.tsx` — server components rendering only static content. Fine, but they could be inlined into the route `page.tsx` to drop a file.
- `useMemo(() => domain.glossary, [domain.glossary])` in `SubdomainPage.tsx:15` (finding 17).
- Multiple `(r as any).weight` casts in `ResourcesTab.tsx` (finding 14).
