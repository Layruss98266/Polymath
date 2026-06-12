# POLYMATH master plan

Date: 2026-06-12. Goal: rebuild the project as a proper "master encyclopedia" with route-segment URLs for every domain, subdomain, tab, and concept; tighten the architecture; expand the content; and validate end-to-end with parallel test agents.

Split into:
- **Part 1** — work I can do in code without external information.
- **Part 2** — work that needs real-world research, use Antigravity for these.
- **Part 3** — testing + improvement-report loop.

---

## Part 1. Architecture refactor (no research needed)

### 1.A. Route plan

Today every domain page lives at `/domain/[id]` and switches tabs via a `?tab=` query string. The user wants real pages per tab AND per subdomain. Final routes:

```
/                                       home
/about                                  about
/share                                  read-only profile snapshot
/domains.rss                            RSS feed
/sitemap.xml                            sitemap

/domain/[id]                            domain overview (was: Basics tab)
/domain/[id]/concepts                   concepts index
/domain/[id]/concepts/[idx]             single concept deep page (Predict, Read, Reflect, Check, Apply)
/domain/[id]/quiz                       domain quiz
/domain/[id]/flashcards                 FSRS practice for this domain
/domain/[id]/diagram                    diagrams
/domain/[id]/roadmap                    7-stage roadmap
/domain/[id]/resources                  free + paid, weight-filtered
/domain/[id]/missions                   real-world missions
/domain/[id]/cheatsheet                 printable handout
/domain/[id]/counter                    counter-view / steelman

/domain/[id]/sub/[subdomain]            subdomain page (filtered concepts + intro)

/review, /dashboard, /skill-map, /my-list, /search, /settings
```

Why `/sub/[subdomain]` and not bare `/domain/[id]/[subdomain]`:
- Reserves the simple `[slug]` segment for the 10 tab slugs.
- Avoids name collision between a tab id (e.g. `concepts`) and a subdomain id (e.g. `behaviour`).
- Predictable, fail-loudly URL shape.

### 1.B. File structure

```
app/
  domain/
    [id]/
      layout.tsx                  ← shared header, tab bar, mastery, hue
      page.tsx                    ← Basics
      concepts/
        page.tsx                  ← Concepts index (list view, click to deep page)
        [idx]/
          page.tsx                ← single concept deep page
      quiz/page.tsx
      flashcards/page.tsx
      diagram/page.tsx
      roadmap/page.tsx
      resources/page.tsx
      missions/page.tsx
      cheatsheet/page.tsx
      counter/page.tsx
      sub/
        [subdomain]/page.tsx      ← per-subdomain page
      opengraph-image.tsx         ← per-domain OG (already exists)
```

Every page is statically generated. `generateStaticParams` enumerates: 15 domains × (1 + 10 tabs + N concepts + N subdomains).

### 1.C. Component decomposition

Current `components/DomainView.tsx` is a 300+ line mega-component. Split into:

| New file | Responsibility |
| --- | --- |
| `components/domain/DomainHeader.tsx` | Icon, category, name, tagline, mastery bar, rank badge. Stateless except for live store reads. |
| `components/domain/DomainTabBar.tsx` | Link-based tab navigation. Active-state from `usePathname`. Progressive disclosure (Discover / Practice / Reference, More overflow). |
| `components/domain/SubdomainStrip.tsx` | Horizontal scrollable list of subdomain chips with concept counts. Lives below the tab bar on every page so subdomain context is always reachable. |
| `components/domain/DomainProvider.tsx` | Client component that wraps children and calls `startDomain(id)` once on mount (so opening any tab counts as "started"). |
| `components/domain/ConceptDeepPage.tsx` | The Predict → Read → Reflect → Check → Apply flow, currently embedded in ConceptsTab. Lifts to its own component for use at `/concepts/[idx]`. |
| `components/domain/SubdomainPage.tsx` | Subdomain intro + filtered concept grid + relevant resources. |

Remove `DomainView.tsx` after migration.

### 1.D. State and URL sync

- `?tab=` query string sync is replaced by the URL itself; remove the `useEffect([sp])` dance.
- BUT keep backwards compat: if a visitor hits `/domain/psychology?tab=concepts`, a small client-side redirect in `app/domain/[id]/layout.tsx` strips the query and pushes them to `/domain/psychology/concepts`. One-time, no infinite-loop risk.
- Per-tab scroll memory: still in localStorage, keyed by `pathname` instead of `tab`.

### 1.E. Subdomain page contents

Each `/domain/[id]/sub/[subdomain]` page renders:
- Subdomain title and intro paragraph (NEW field on schema, optional).
- Concept grid filtered to that subdomain. Click → concept deep page.
- Glossary terms whose `subdomain` field matches.
- Resources tagged for that subdomain (NEW optional field on Resource).
- "Up to domain" breadcrumb.
- Same DomainHeader + DomainTabBar above so users don't feel lost.

### 1.F. Concept deep page

`/domain/[id]/concepts/[idx]` is the single-concept canonical URL. It renders:
- The full Predict / Read / Reflect / Check / Apply flow that ConceptsTab currently embeds.
- The inline mini-diagram (if `concept.diagram` present).
- Prev / Next concept navigation (with subdomain awareness).
- Sidebar (lg+) with TOC across the subdomain.
- JSON-LD `LearningResource` structured data (SEO + accessibility for assistive tech).

This is the URL users share when they want to point a friend at "this exact idea."

### 1.G. Schema additions

Add to `lib/types.ts`:

```ts
export type Subdomain = {
 id: string;
 name: string;
 intro?: string;        // NEW: 2-4 sentence overview for the subdomain page
 capabilities?: string[]; // NEW: optional "what you'll be able to do" bullets
};

export type Resource = {
 // ...existing...
 subdomains?: string[]; // NEW: optional subdomain ids this resource is most relevant to
};
```

Backwards compat: optional fields. No migration needed.

### 1.H. Sitemap + RSS update

- Sitemap enumerates every public domain route AND every concept deep page.
- RSS feed: add an `<atom:link>` to each domain's `concepts/[idx]/[N]` items so readers see new content as it's added.

### 1.I. Tabs as route segments. Backward-compat redirects

Old links:
- `/domain/psychology?tab=concepts` should land at `/domain/psychology/concepts`.

Implementation:
- `app/domain/[id]/layout.tsx` reads search params via a client component, redirects to the canonical route, replaces history.
- Internal Links across the app updated to point at the new routes.

### 1.J. Architecture cleanup wins

Items to do during the refactor (not separate tasks):
- Pull all per-tab type definitions into `lib/tabs.ts` (single source of truth for tab id, label, unlock rule, group).
- Move `recordQuizAnswer`, `saveReflection`, `openConcept` keys into a single `lib/keys.ts` module so call sites can't accidentally diverge.
- Remove `DomainView.tsx` once empty.
- Update `agents.md` and `AUDIT.md` to reflect the new file layout.
- Update CI to run `npm test`, `tsc --noEmit`, build, AND a fresh `next-bundle-analyzer` artifact.

### 1.K. Test plan

After refactor, spawn 3 agents in parallel. Each picks a different domain (psychology, ai_ml, marketing) and walks every page end-to-end: header, tab bar, every subdomain page, every concept deep page, every resource link, every quiz item. They write per-domain test reports.

I then consolidate into `IMPROVEMENTS.md` with categories: bug, copy fix, missing content, broken link, accessibility regression, performance regression, suggestion.

---

## Part 2. Antigravity research tasks

I cannot verify URLs, look up current prices, fetch live regulatory updates, or read 2025-2026 papers. Use Antigravity for the following. Each task is scoped tightly so you can hand it off one at a time.

### R1. Resource URL verification sweep
- Target: every resource with `verify: true` in `data/domains/*.ts` (~78 rows).
- Per row, fetch the URL, confirm a 200, confirm the title still matches, confirm the resource hasn't moved domain. Update `lastVerified` to today's date and flip `verify: false` where green.
- For dead links, find a stable replacement (Wayback Machine archive, publisher's official page, author's site) and propose the new URL.

### R2. Resource refresh per domain (find better primary sources)
For each domain, ask Antigravity to:
- Confirm the top 3 free resources are still the strongest intros in 2026.
- Surface any major 2024-2026 release that should be added (new edition, new course, new book).
- Flag any resource whose recommendation is no longer defensible (e.g. dated frameworks, debunked claims).

Per-domain Antigravity prompts to draft:
- **psychology**: surface 2024-2026 replication-crisis updates per existing concept. Confirm Mehrabian, Asch, growth-mindset caveats are still phrased correctly.
- **personal_finance** (India): current PPF rate, NPS tier structure, ELSS lock-in vs new tax regime impact, latest SEBI MF expense-ratio caps, latest income-tax slabs.
- **investing**: latest Indian index fund recommendations (TER under 0.5 percent), Bogleheads India equivalents, current SEBI rules on direct vs regular plans.
- **law** (India): post-2024 BNS / BNSS / BSA replacement of IPC / CrPC / Evidence Act. Update every reference and add `expert` notes that flag the transition.
- **health / nutrition**: current WHO and Indian Council of Medical Research guidance on protein, fibre, sodium, sugar, alcohol. Update any concept whose evidence base has shifted.
- **ai_ml**: 2025-2026 model landscape (GPT-5, Claude 4.x, Gemini 2.x), latest open-source models worth naming, current cost-per-token. Any concept that mentions GPT-4 specifically should be widened.
- **tech**: latest Big O / system-design references (Designing Data-Intensive Applications still primary? Refer to Alex Xu vol. 1 + 2?). Live URLs.
- **marketing**: any new framework worth adding (e.g. April Dunford's positioning has held; check if Jobs-to-be-Done has new canonical resources).
- **negotiation**: confirm Voss's Never Split the Difference + Black Swan group resources still live at the URLs shown.
- **communication**: current best-practice for written communication in distributed teams (Pyramid principle, BLUF, async-first writing references).
- **mental_models / learning / famous_laws / entrepreneurship**: light pass, mostly URL verification.

### R3. Expansion list per domain
For each domain, ask Antigravity to surface 3-5 OBJECTIVE candidate concepts the domain is missing that a master encyclopedia should cover. Examples it should consider:
- psychology: Default network, Default-mode regret, Affect heuristic, Status games, Polyvagal theory, Attachment styles.
- mental_models: Bayes' theorem, Antifragility, Convex / concave payoff, Optionality, Via negativa.
- negotiation: Cultural negotiation differences, Multi-party negotiation, Auction theory, Reservation price math.
- investing: Sharpe / Sortino, Tail risk, Modern portfolio theory critique, Factor investing.
- personal_finance: Health insurance basics in India, Term insurance vs ULIP, NPS Tier 1 vs 2, HUF as tax structure.
- and so on.

For each candidate Antigravity should return:
- concept title
- 1-line definition (Antigravity's draft, I'll re-author in voice)
- best free + paid source URL with `lastVerified`
- one historical anchor (paper, author, year)

I take this list and use parallel content-authoring agents to write the full enrichment in voice.

### R4. Image / icon licensing audit
- The project ships emoji icons. No external images. Confirm every brand name (Apple, Vanguard, Zerodha) referenced in text is being used in a fair-use / nominative way and nothing risks trademark.

### R5. Vercel deploy + domain considerations
- Confirm `polymath-virid.vercel.app` is the canonical, or whether a custom domain should be acquired.
- If custom domain: HSTS preload submission, OpenGraph base URL update, sitemap base URL update, RSS feed base URL update.

### R6. India regulatory + medical disclaimer review
- Have a India-licensed solicitor review the safety notes on `/about` and the per-domain `safetyNote` text on personal_finance, investing, law, health, nutrition. Confirm the disclaimers shield the project and are accurate as of June 2026.

### R7. Accessibility live test
- Run a live screen-reader pass (NVDA + JAWS + VoiceOver) on the deployed app. Report what is announced vs what should be.
- Run Lighthouse a11y + perf + SEO on each route. Capture baseline scores.

### R8. Service worker validation in production
- Test the SW cache key invalidation on a real Vercel deploy. Confirm a redeploy invalidates the old client cache and serves new HTML.

---

## Part 3. Test + improvement loop

After Part 1 ships:

1. Spawn 3 parallel test agents:
   - Agent A walks every page of `psychology` end to end.
   - Agent B walks every page of `ai_ml`.
   - Agent C walks every page of `marketing`.

2. Each writes a per-domain test report covering:
   - Every page in the route table renders correctly.
   - The header, tab bar, subdomain strip behave identically across pages.
   - Tab `aria-current` is correct.
   - Concept deep pages have prev/next navigation that wraps correctly at boundaries.
   - The mobile drawer, command palette, mega menu still work on the new routes.
   - Every internal link uses the new routes (no leftover `?tab=` URLs).
   - tsc, lint, build pass.

3. I consolidate findings into `IMPROVEMENTS.md` with a per-issue table. Each row: severity (P0/P1/P2), category, location, suggested fix.

4. Apply the P0/P1 fixes inline; queue P2 for the next session.

---

## Execution order

1. Approve this plan.
2. I implement Part 1 (architecture refactor) end to end. Single commit-ready batch. ~2 hours of work.
3. You hand R1, R2, R3 to Antigravity. I review the returned data and merge.
4. I run the Part 3 test loop with 3 agents.
5. I consolidate findings into `IMPROVEMENTS.md`, fix the P0/P1 items, ship round 7.

If you want to start Antigravity now, R1 (URL verification) is the most parallelisable and the biggest current debt. R2 per-domain is the most valuable, do it next.
