# Polymath route-segment architecture audit

Scope: tabs-as-route-segments refactor under `app/domain/[id]/`, helpers in `lib/tabs.ts`, shared components in `components/domain/`, and every internal link that targets a domain page.

## Summary

- Two real bugs in the new components: `ConceptDeepPage` and `SubdomainPage` early-return BEFORE their hooks (`useState`/`useMemo`), violating Rules of Hooks. Render path is normally `notFound()`-guarded in the page so it never crashes today, but any concept whose index passes the page guard yet still resolves falsy will explode.
- `loadDomain` is called twice per request (once in `layout.tsx`, once in `page.tsx`) and is NOT wrapped in React `cache()`. Cheap today because data is in-memory, still wasteful and easy to fix.
- Three links in non-domain components bypass the new path helpers: `components/ConceptOfTheDay.tsx:52,54`, `components/SearchView.tsx:233`, `components/MyList.tsx:174`, `components/tabs/BasicsTab.tsx:27`. Plus `BasicsTab` uses `<a>` not `<Link>` so the cross-domain link is a full page reload.
- Active-tab logic in `DomainTabBar` quietly falls back to `"basics"` for `/sub/*` URLs, so on a subdomain page the Basics chip is highlighted even though the user is NOT on the Basics page. Misleads users about where they are.
- SEO + a11y gaps: per-domain pages share an OG image but the per-tab pages (`/quiz`, `/flashcards`, ...) have no `openGraph`/`twitter` metadata. No `error.tsx` boundary at the `[id]` level. Overflow tab menu has no outside-click / Escape close. Concept deep page has no skip-link to nav.

---

## P0 bugs (must fix before deploy)

### 1. `ConceptDeepPage` violates Rules of Hooks on a falsy concept
- Location: `components/domain/ConceptDeepPage.tsx:22-27`
- Problem: `const concept = domain.concepts[conceptIdx]; if (!concept) return <p>...</p>;` runs BEFORE `useState`/`useMemo` calls below. If `concept` is ever falsy on first render and truthy on a re-render (or vice-versa), React throws "Rendered fewer hooks than expected." The page guard at `app/domain/[id]/concepts/[idx]/page.tsx:44` only blocks `n >= length`, not e.g. a deliberately undefined slot or a future schema change.
- Fix: move the falsy-check guard above the `useState` calls only after relocating all hooks, OR (better) gate at the page level by calling `notFound()` when `domain.concepts[n]` is falsy, and drop the in-component check entirely.

### 2. `SubdomainPage` violates Rules of Hooks on missing subdomain
- Location: `components/domain/SubdomainPage.tsx:11-19`
- Problem: same shape. `if (!sub) return ...` returns BEFORE the `useMemo` calls at lines 20, 24, 25. The page does call `notFound()` at `app/domain/[id]/sub/[subdomain]/page.tsx:39`, so the path is defensive — but any reuse of `<SubdomainPage>` outside that route will crash.
- Fix: delete the in-component fallback; `notFound()` already handles it. OR pull the `useMemo` calls above the early return.

### 3. `ConceptOfTheDay` "Open" button does NOT open the concept it advertises
- Location: `components/ConceptOfTheDay.tsx:52,54`
- Problem: both Open buttons go to `/domain/${data.domainId}/concepts` (the concepts index) instead of `/domain/${data.domainId}/concepts/${conceptIdx}` (the deep page for that concept). The user clicks "Open" on a specific concept-of-the-day card and lands on the list. Either rewire to `conceptPath(domainId, idx)` or rename the button.
- Fix: import `conceptPath` from `@/lib/tabs` and use `conceptPath(data.domainId, data.conceptIndex)`.

---

## P1 bugs (should fix soon)

### 4. `loadDomain` called twice per request, no `cache()`
- Location: `app/domain/[id]/layout.tsx:28` + every `app/domain/[id]/**/page.tsx` (e.g. `concepts/page.tsx:24`, `quiz/page.tsx:23`, ...). Also `concepts/[idx]/page.tsx:21,43` calls it twice (metadata + render) inside the same request.
- Problem: in Next.js App Router, layout and page run in parallel but `loadDomain` is invoked separately by each. Not memoized.
- Fix: wrap `loadDomain` in React `cache()` in `data/domains.ts`:
  ```ts
  import { cache } from "react";
  export const loadDomain = cache(async (id: string) => { /* ... */ });
  ```
  Same for `findEntry` is unnecessary (sync). After this, layout/page/generateMetadata share one resolved promise per request.

### 5. `activeTabFromPath` misleads on subdomain pages
- Location: `components/domain/DomainTabBar.tsx:20-31`
- Problem: line 28 returns `"basics"` when first segment is `sub`. Effect: on `/domain/psychology/sub/biases` the Basics tab chip is highlighted with the hue ring even though the user is not on Basics. Confusing — Basics suggests "you are here," but the URL says otherwise.
- Fix: return `null` (or a sentinel) when first segment is `sub`, and in the render path only apply `isActive` styling when `active === t.id` AND `active !== null`. Subdomain context is already shown by the `SubdomainStrip` highlight.

### 6. `TabQueryRedirect` runs only when `?tab=` is present, but `useEffect` still mounts on every page
- Location: `components/domain/TabQueryRedirect.tsx:9-17`
- Problem: behaviour is correct (no redirect when `dest` is null), but the component re-mounts on every layout navigation because it lives in `DomainLayout`. Side effect: `useSearchParams()` triggers client-side rendering opt-out unless wrapped — it IS wrapped in `<Suspense>` in `layout.tsx:34-36`, so OK. Minor: the empty-deps eslint-disable hides that if the user navigates from `?tab=foo` to `?tab=bar` without unmount, the second redirect won't fire. Unlikely in practice.
- Fix (optional): change deps to `[sp]` and add an `if (!sp?.get("tab")) return;` guard early. Or leave as-is and document.

### 7. Concept deep page prev/next is subdomain-scoped — last concept in a subdomain dead-ends prematurely
- Location: `components/domain/ConceptDeepPage.tsx:47-56`
- Problem: when `concept.subdomain` is set, navigation only walks siblings in the same subdomain. If a domain has 30 concepts spread across 3 subdomains, finishing subdomain A pushes the user "Back to all concepts" instead of into subdomain B's first concept. That breaks the linear-reading mental model.
- Fix: keep same-subdomain as preferred, but on `prev: null` / `next: null` fall back to the global prev/next concept (`conceptIdx - 1` / `conceptIdx + 1`) and label it e.g. "Next subdomain: ...". Or surface a clear "End of {subdomain.name}" hint plus a link to the next subdomain's first concept.

### 8. No `error.tsx` boundary inside `app/domain/[id]/`
- Location: missing file `app/domain/[id]/error.tsx`
- Problem: `not-found.tsx` exists but if any non-notFound error escapes (e.g. a future async fetch in a tab), users see the root `app/error.tsx` without the domain header/tabs/breadcrumb. Loss of context.
- Fix: add `app/domain/[id]/error.tsx` that renders a small panel inside the existing layout chrome. Optional `reset` button.

### 9. Cross-domain link in `BasicsTab` is a full reload
- Location: `components/tabs/BasicsTab.tsx:27`
- Problem: `<a href={...}>` triggers a hard navigation. Loses Zustand state hydration timing, scroll position, and the user sees a flash.
- Fix: import `Link` from `next/link` and replace.

---

## P2 improvements (nice to have)

### 10. Hard-coded paths bypass helpers
- `components/SearchView.tsx:216,233` — should use `conceptPath()` / `tabPath(..., "concepts")`.
- `components/MyList.tsx:174` — should use `conceptPath()`.
- `components/ConceptOfTheDay.tsx:52,54` — see P0 #3.
- Why it matters: if the URL shape ever changes again, every hard-coded site is a missed migration. Helpers are the single source of truth.

### 11. `DomainTabBar` overflow menu has no outside-click / Escape close
- Location: `components/domain/DomainTabBar.tsx:82-117`
- Problem: opening "More" then clicking elsewhere on the page leaves the menu open. No `Escape` key handler. `aria-haspopup="menu"` is set but keyboard navigation inside the menu is not managed (no roving focus, no arrow keys).
- Fix: add `useEffect` with `mousedown`/`keydown` listeners that close on outside-click and Escape. For full a11y, add arrow-key navigation between menu items.

### 12. `DomainTabBar` re-derives `unlocked` set on every render
- Location: `components/domain/DomainTabBar.tsx:45-49`
- Problem: minor — `useMemo` already covers it, but the dependency `[m, opened, total]` causes a recompute whenever mastery changes (frequent on practice tabs). Acceptable cost.
- Fix: none required; flagging only.

### 13. `SubdomainStrip` shows "(0)" for subdomains with zero concepts
- Location: `components/domain/SubdomainStrip.tsx:34`
- Problem: line 34 `{n > 0 && <span ...>({n})</span>}` correctly hides the count when zero, but the chip still renders and clicking lands on a subdomain page that shows the "No concepts in this subdomain yet" panel. Fine UX-wise — the empty-state panel exists at `SubdomainPage.tsx:50`. Confirmed graceful.
- Improvement: consider hiding subdomains with zero concepts entirely on the strip, OR adding a `dim` class to those chips so users see the empty state coming.

### 14. `DomainProvider` `startDomain` re-fires on tab navigation if `domainId` changes via different layout instance
- Location: `components/domain/DomainProvider.tsx:9`
- Problem: layout is shared within `[id]` so `domainId` doesn't change on tab nav and `startDomain` fires once. Confirmed correct. No bug.

### 15. `opengraph-image.tsx` is keyed only at the domain level
- Location: `app/domain/[id]/opengraph-image.tsx`
- Problem: every tab page (`/quiz`, `/flashcards`, ...) inherits the same OG image. Acceptable, but per-tab OG images would let social previews show e.g. a "Quiz" badge.
- Fix: add `opengraph-image.tsx` per tab dir, OR per-tab title overlay in a parameterized handler. Low priority.

---

## Accessibility findings

### A1. Overflow menu lacks keyboard close + focus management
- Location: `components/domain/DomainTabBar.tsx:82-117`
- See P2 #11.

### A2. `ConceptDeepPage` lacks a skip-link to main content
- Location: `components/domain/ConceptDeepPage.tsx:66`
- Problem: screen-reader users have to traverse breadcrumb, header, bookmark button, etc. before reaching the explanation. Add `<a href="#explanation" className="sr-only focus:not-sr-only">Skip to explanation</a>`.

### A3. Predict textarea is unlabeled-but-aria-labelled, fine, but the textarea is also never persisted
- Location: `components/domain/ConceptDeepPage.tsx:116-121`
- Problem: prediction is intentionally throwaway, but a screen reader user typing then accidentally clicking "Reveal explanation" loses input with no warning. Acceptable but consider an aria-describedby explaining "prediction will not be saved".

### A4. Bookmark button uses `aria-pressed` correctly but `<span className="sr-only">` text duplicates the icon
- Location: `components/domain/ConceptDeepPage.tsx:96`
- Minor: `aria-pressed` already communicates state; the sr-only label "Bookmarked" / "Bookmark" is redundant with `title`. Acceptable.

### A5. `DomainTabBar` `<nav>` lacks `aria-labelledby` for a `<h1>` partner
- Location: `components/domain/DomainTabBar.tsx:62-65`
- Has `aria-label="Domain sections"` — fine. Could also wire `aria-orientation="horizontal"` for screen reader hints on the chip row.

### A6. `SubdomainPage` headings jump from h2 to h3 cleanly, but breadcrumb (concept page) lacks a current-step `aria-current="page"`
- Location: `components/domain/ConceptDeepPage.tsx:68-80`
- Fix: add `aria-current="page"` to the final `<span>` so screen readers announce "current page" on the leaf.

---

## SEO findings

### S1. Per-tab pages have canonicals but no OG / Twitter cards
- Location: every `app/domain/[id]/<tab>/page.tsx` except `concepts/[idx]/page.tsx` and the basics `page.tsx`.
- Problem: only `canonical` + `title` + `description`. Missing `openGraph` and `twitter`. Social shares of `/domain/psychology/quiz` will show generic site preview, not a quiz-specific one.
- Fix: add `openGraph: { title, description, type: "article", url: ... }` and `twitter: { card: "summary_large_image", title, description }` consistent with the Basics page (`page.tsx:16-17`).

### S2. Concept deep page has correct LearningResource JSON-LD but no `BreadcrumbList` JSON-LD
- Location: `app/domain/[id]/concepts/[idx]/page.tsx:46-54`
- Improvement: add a `BreadcrumbList` JSON-LD pointing Concepts → Subdomain (if any) → Concept. Helps Google render rich breadcrumbs in SERPs.

### S3. `app/sitemap.ts` includes subdomain routes — confirmed
- Location: `app/sitemap.ts:25-27`
- Verified: subdomain priority 0.6 (above concepts at 0.5, below domain root at 0.7). Reasonable.
- Improvement: tabs all share `priority: 0.55` regardless of tab. Consider boosting `concepts` (0.65) and `roadmap` (0.6) above `counter`/`cheatsheet`/`missions` (0.4) — they're the canonical learning entry points.

### S4. Sitemap does not filter tabs by `unlock()` — that is correct
- Reason: locked tabs still need to be crawlable so users hitting them directly via search can see them. Confirmed not a bug.

### S5. Per-tab titles are unique but lower-case-ish ("psychology quiz")
- Location: `app/domain/[id]/quiz/page.tsx:14` etc.
- Improvement: titles use `${name} quiz` — fine — but no app suffix. Add `| Polymath` so search results show brand. E.g. `Human Psychology quiz | Polymath`. Either set in each `generateMetadata` or in `app/layout.tsx` via `metadata.title.template`.

### S6. Concept deep page title is `${concept.t}. ${entry.name}` — no Polymath brand
- Location: `app/domain/[id]/concepts/[idx]/page.tsx:24`
- Improvement: same as S5.

---

## Cleanup / dead-code candidates

### C1. `ConceptDeepPage` and `SubdomainPage` early-return branches become unreachable after fixing the page-level guards (P0 #1, #2)
- After fix: delete the `if (!concept)` and `if (!sub)` blocks. `notFound()` from the page handles it.

### C2. `agents.md` and `TODO.md` still document the old `?tab=` routing model in multiple places
- Locations: `TODO.md:72, 121, 125`, `agents.md:22`, `README.md:21`.
- Fix: per the user's own rule ("doc drift is a bug"), update README to describe route segments, mark TODO `?tab=` items as resolved, remove the long-term migration note (already done).

### C3. `lib/tabs.ts` exports `RESERVED_SEGMENTS` but no caller imports it
- Location: `lib/tabs.ts:39-42`
- Either wire it into a build-time collision check (assert no subdomain id matches a reserved segment) or remove it.

### C4. `DomainTabBar` `lockedHidden` computed even when not needed
- Location: `components/domain/DomainTabBar.tsx:59`
- Cheap, leave it. Flagged only.

### C5. `Loading` skeleton renders 8 tab chips but the new tab system has 10
- Location: `app/domain/[id]/loading.tsx:17`
- Trivial: change `length: 8` to `length: 10` for visual consistency, OR keep at 8 to match initial unlocked-tab count.

### C6. `Suspense fallback={null}` around `TabQueryRedirect` will silently hide errors
- Location: `app/domain/[id]/layout.tsx:34`
- Required because `useSearchParams` opts the subtree into client rendering. A `null` fallback is correct. No action.
