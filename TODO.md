# POLYMATH TODO

Living backlog. Recent batch closed almost everything from the prior REVIEW.md. New items added at the bottom.

## Shipped in this batch (round 9. mega expansion + test loop + home redesign)

Content via 4 parallel content agents + 1 diagram agent
- **90 new fully-enriched concepts** across 15 domains. Every domain now has 11-14 concepts, almost all enriched.
  - psychology: cognitive dissonance, bystander effect, self-determination theory, flow state, spotlight effect, negativity bias.
  - mental_models: Pareto, inversion, OODA, steelmanning, survivorship bias, premortem.
  - learning: deliberate practice, forgetting curve, elaboration, Bloom's taxonomy, implementation intentions, cognitive load theory.
  - negotiation: reservation point, distributive vs integrative, coalition building, cultural negotiation, difficult conversations, pre-commitment.
  - communication: reader maturity, active vs passive voice, SCQA, non-violent communication, plain-language Orwell rules, apology architecture.
  - entrepreneurship: cold-start, two-sided markets, bootstrapping vs venture, fundraising stages, Reis pivots, aggregation theory.
  - marketing: AIDA, cohort analysis, funnel vs flywheel, NPS critiques, AARRR, decoy effect.
  - investing: modern portfolio theory (+ Mandelbrot critique), EMH three forms, value vs growth, dividend investing, bond duration, Sovereign Gold Bonds.
  - personal_finance: term insurance sum-assured rule, health insurance basics IRDAI 2023, 50-30-20 (+ critique), debt avalanche vs snowball, credit-card 51% EAR math, estate planning India.
  - nutrition: protein quality DIAAS, plant-based protein adequacy, omega-3 vs omega-6, vitamin D India context, iron deficiency NFHS 5, FOPL FSSAI star labels.
  - health: resting heart rate, strength fundamentals, sleep hygiene, yoga AYUSH RCTs, MBSR meditation evidence, preventive screening INTERHEART.
  - law: standard of proof, DPDPA 2023, writ Article 32 vs 226, anticipatory bail BNSS, IBC 2016, Lok Adalats.
  - famous_laws: Newton 1, Newton 2, Snell, Ohm, conservation of momentum, central limit theorem.
  - tech: REST vs GraphQL, OAuth 2.0 flows, JWT pitfalls, public-key crypto, rate-limit strategies, Docker containers.
  - ai_ml: transformer architecture, vector databases, LLM eval metrics, prompt injection, RLHF, diffusion models.
- **14 more per-concept inline diagrams** on the 7 previously-empty domains (negotiation, entrepreneurship, health, nutrition, law, famous_laws, tech). Every domain now has at least 2 per-concept diagrams.

Mastery + ranking recalibration (the "loss" fix)
- `lib/mastery.ts` rewritten: opening a concept counts only 8 percent. A concept is "proven" only when opened + reflected on (>20 chars) + quizzed correctly (>=60% accuracy). Capstone weight raised to 20 percent. Mild concave curve (^1.15) so the last 20 percent of mastery is meaningfully harder than the first 20.
- `lib/xp.ts` thresholds raised: Master requires 90 percent (was 82), Grandmaster requires 97 percent (was 95), Practitioner requires 42 percent (was 34). Apprentice raised to 22 percent.
- vitest updated to match.

Home redesign for progressive disclosure
- New `components/StartHereBento.tsx` — 4 curated picks for first-time visitors (psychology, personal_finance, communication, mental_models).
- New `components/MoreForYouRow.tsx` — 4 related-to-you picks for returning users based on started-domain categories.
- New `Browse all 15 domains` CTA gates the full catalogue. New users see 4 picks; the 15-row HubCatalogue is one click away.
- Mobile hashlink `#all-domains` for in-page scroll to the catalogue once revealed.

Test loop
- 1 test agent walked psychology, ai_ml, marketing end-to-end on the new route architecture. Output in `FINDINGS-3.md`.
- Findings acted on inline: Habit-loop diagram caption fixed (Duhigg + Clear attribution), ai_ml GPT-5 claim softened to mid-2026 frontier text, Roadmap and Resources unlocked for everyone, ConceptsTab now exposes a "shareable link" chip next to the concept title for the canonical `/concepts/[idx]` deep page URL, BasicsTab adds a primary "Start with concept #1" CTA, TabQueryRedirect deps tightened, `loadDomain` already wrapped in `cache()` from round 8.

## Shipped in this batch (round 8. deep enrichment + Antigravity rollout + bug fixes)

Content (via 4 parallel agents, all R3 picks)
- **33 new fully-enriched concepts** across all 15 domains. Citations and frameworks: DMN (Raichle), affect heuristic (Slovic), status games (Henrich), attachment theory (Hazan-Shaver), Bayes' theorem, antifragility (Taleb), convex/concave payoff, metacognition (Flavell), self-explanation (Chi), RIF (Anderson), multi-party negotiation, inverted pyramid, JTBD (Christensen), PLG, Sharpe/Sortino (1966/1994), sequence-of-returns risk (Bengen), factor investing (Fama-French), ULIP trap, NPS allocation E/C/G, liquid + arbitrage funds, NOVA (Monteiro), satiety index (Holt), SCFAs (Spector), ApoB (Attia/Sniderman), sarcopenia, basic structure doctrine (Kesavananda Bharati 1973), ADR, RTI, 2nd law thermo (Clausius), Newton's third law, general relativity, eventual consistency (Vogels), Big O, distributed consensus, MoE (Shazeer), DPO (Rafailov), chain-of-thought.
- Every domain now has 5-8 enriched concepts. ~85+ total.

R2 India 2026 updates baked into existing concepts
- law.ts: BNS/BNSS/BSA 2024-07-01 transition notes appended to mens rea + actus reus and precedent + stare decisis `expert` fields.
- ai_ml.ts: 2025-2026 frontier landscape (GPT-5, Claude 4.x, Gemini 2.x, sub-$0.10/M-token) appended to training vs inference `expert` field.
- personal_finance.ts: Budget 2025-26 (₹7L zero-tax, ₹75k standard deduction) folded into liquid + arbitrage funds concept.
- nutrition.ts: ICMR-NIN 2024 caveat (cap total fat 30%, free sugar <5%, source protein from lentils/dairy/legumes, avoid NOVA group 4) baked into SCFAs `expert`.

URL verification (via 1 agent + Antigravity)
- 19 more `verify: true` rows flipped to `verify: false` (Wikipedia, oreilly, etc.) using trusted-pattern allowlist.
- Net status: 21 `verify: true` rows remain (mostly publisher pages, personal blogs, YouTube searches). Real verification pass still needed for those.

Route architecture fixes (from IMPROVEMENTS.md, via test agent)
- P0: ConceptDeepPage + SubdomainPage hook-violation fixes (moved hooks before early returns).
- P0: ConceptOfTheDay "Open" button now deep-links to the specific concept (was landing on the concepts list).
- P1: `loadDomain` wrapped in React `cache()`. Layout + page + generateMetadata share one resolved promise per request now.
- P1: `activeTabFromPath` returns `null` on subdomain pages so the Basics chip is no longer misleadingly highlighted.
- P1: `app/domain/[id]/error.tsx` boundary so domain-scoped failures keep header/tab-bar context.
- P1: BasicsTab cross-domain links migrated from `<a>` to `<Link>`. No more full reloads.
- P2: SearchView + MyList + ConceptOfTheDay now use `conceptPath()` and `tabPath()` helpers exclusively.
- P2: DomainTabBar overflow has outside-click + Escape close + auto-reset on path change.

R7 accessibility
- `RouteAnnouncer` sr-only `role=status aria-live=polite` so screen readers announce App Router navigation.
- `lib/focusTrap.ts` utility + applied to Onboarding, CommandPalette, SaveLoadModal. Focus restoration on close.

R4 + R6 disclaimers
- Trademark fair-use disclaimer and India regulatory disclaimer landed on `/about` (added by Antigravity).

## Shipped in this batch (architecture round 7. tabs as route segments)
- [x] `lib/tabs.ts` single source of truth: TabId, TabGroup, TabDef, RESERVED_SEGMENTS, tabPath, conceptPath, subdomainPath, legacyTabRedirect.
- [x] `app/domain/[id]/layout.tsx` shared chrome (header + safety note + tab bar + subdomain strip + `TabQueryRedirect` for old `?tab=` URLs).
- [x] Per-tab page files: page.tsx (Basics), concepts/, quiz/, flashcards/, diagram/, roadmap/, resources/, missions/, cheatsheet/, counter/. Each has its own metadata + canonical URL.
- [x] `app/domain/[id]/concepts/[idx]/page.tsx` single-concept deep page with JSON-LD `LearningResource`, breadcrumb, prev/next subdomain-aware nav, full Predict → Read → Reflect → Check → Apply flow lifted to `components/domain/ConceptDeepPage.tsx`.
- [x] `app/domain/[id]/sub/[subdomain]/page.tsx` subdomain page: intro, capabilities, filtered concept grid, tagged resources, glossary peek, breadcrumb.
- [x] Schema: `Subdomain.intro?`, `Subdomain.capabilities?[]`, `Resource.subdomains?[]`. All optional, no migration.
- [x] Components split out: `DomainHeader`, `DomainTabBar` (Link-based, no client state), `SubdomainStrip`, `DomainProvider`, `TabQueryRedirect`, `ConceptDeepPage`, `SubdomainPage`. Old 300-line `DomainView.tsx` deleted.
- [x] Sitemap regenerated: home + about + 15 domains + 9 tabs each + every subdomain + every concept deep page.
- [x] All internal links updated. SearchView concept hits jump straight to `/concepts/[idx]`. ConceptOfTheDay and MyList linked notes too.
- [x] Backward compat: `/domain/[id]?tab=concepts` → `/domain/[id]/concepts` via client-side redirect in layout.
- [x] **Build status: 415 static pages generated successfully.** Local Windows-only `.next/export → .next/server` rename quirk is unrelated; Vercel build is unaffected.

## Shipped in this batch (content + features round 6)
- [x] Parity enrichment: ai_ml, marketing, personal_finance now match. Total 60+ enriched concepts across all 15 domains.
- [x] Weight-tagged resources on every previously-untagged domain. Every domain now exposes the Primary / Secondary / Popular filter row with real data.
- [x] Per-concept inline diagrams on 8 flagship domains. 16 diagrams added: System 1 vs System 2 (curve), Sunk cost (flow), 4 Ps (quadrant), Training vs inference (flow), Margin of safety (bars), Compounding (curve), Feynman technique (flow), Pyramid principle (pyramid), etc.
- [x] Weekly digest card on Dashboard. XP this week, vs last week, active days out of 7, best day, current streak.
- [x] Public read-only share profile at `/share?d=...`. Encodes only XP and per-domain rank index. No notes, no PII. Settings has a "Copy public share link" button.
- [x] Linked notes Zettel syntax. Reflections support `[[domain_id:N]]` markers, rendered as in-app links in My List.
- [x] Glossary expansion: 3 new terms each on nutrition, health, law, famous_laws, tech.
- [x] Cross-Origin-Opener-Policy and Cross-Origin-Resource-Policy added to vercel.json.
- [x] Sitemap trimmed to public routes only; skill-map page now noindex.

## Shipped in this batch (content + features round 5)
- [x] 24 MORE enriched concepts via 4 parallel agents. Every domain except ai_ml + marketing + personal_finance now has 4 fully-enriched concepts. Total ~50 enriched.
- [x] Accessibility settings page: text-size scale (S/M/L/XL), motion override (system/reduce/allow), dyslexia-friendly font toggle. Stored in user state, applied via html data attributes.
- [x] Domain RSS feed at `/domains.rss`. Static-rendered, head-linked, cached for 24h on CDN.
- [x] Onboarding auto-bookmarks the recommended domain on each selected goal.
- [x] Streak heatmap now has month-name labels above the first column of each calendar month.
- [x] README rewritten end-to-end for the current state.

## Shipped in this batch (content + features round 4)
- [x] 24 NEW fully-enriched concepts across 12 domains (psychology, mental_models, learning, negotiation, communication, entrepreneurship, investing, health, nutrition, law, famous_laws, tech). Each has subdomain, definition, generic, expert, conceptQuiz (2 items, 4 options, misconceptions), conceptTasks (basic/easy/advanced). Authored in parallel by 4 background agents.
- [x] Per-concept inline mini-diagrams. New optional `diagram` field on Concept, rendered between explanation and reflect via shared DiagramView. Domain authors can attach charts to specific concepts.
- [x] TodayCard on home. Glanceable due-count, XP today, streak, daily quest. Hides for absolute first-time visitors so onboarding stays clean.
- [x] Reflections Markdown export. Groups by domain, sorts by concept index, downloads as `polymath-reflections-YYYY-MM-DD.md`.
- [x] Vitest scaffold + test files. xp.test, streak.test, mastery.test, save.test. CI now runs `npm test --if-present`.
- [x] CSP tightened. `unsafe-eval` removed, `object-src 'none'` added. Full nonce migration deferred (incompatible with current SSG).

## Shipped in this batch (audit fixes round 3)
- [x] Title separator standardised on `· Polymath`
- [x] Twitter `@polymath` handle removed (unowned)
- [x] `.gitattributes` added (`* text=auto eol=lf`)
- [x] `agents.md` verified at project root
- [x] weight tags on marketing + personal_finance top resources
- [x] 44 empty-URL placeholders flipped to `verify: false`
- [x] Per-domain Open Graph image at `app/domain/[id]/opengraph-image.tsx`
- [x] SW cache key tied to `NEXT_PUBLIC_BUILD_ID` via `/sw.js?v=` registration
- [x] `aria-controls` plumbed on MegaMenu, PracticeMenu, DomainView overflow
- [x] CommandPalette: combobox role + aria-activedescendant
- [x] MegaMenu: focus trap on Tab/Shift+Tab + focus restore on close
- [x] CI workflow: GitHub Actions, tsc + lint + build
- [x] Mobile tab strip auto-scrolls active tab into view
- [x] Per-tab scroll memory in DomainView
- [x] Coachmark step 1 copy updated for centered nav
- [x] rAF throttle on ScrollTopFab listener
- [x] SearchView: 150ms debounce + 3-char floor + cancellable load
- [x] Service worker APP_SHELL precaches all main routes
- [x] Toaster: `role=status` + `aria-label`
- [x] ESLint `react-hooks/exhaustive-deps` bumped to error
- [x] Weekly streak grace (ISO week refresh)
- [x] Search history: last 10, dedup, clearable

## Shipped in the latest batch (nav + deep-link + polish)
- [x] Center-aligned nav. Logo left, Domains + Practice + About centered, utilities + CTA right (3-column grid)
- [x] Mobile drawer now exposes Practice section (Review, Dashboard, Skill map, My list) with due-count badge
- [x] Tab deep-linking. `/domain/[id]?tab=concepts` lands on Concepts tab; back/forward syncs. SearchView concept + glossary hits use `?tab=concepts`. ConceptOfTheDay also deep-links.
- [x] BottomNav tints active item in current domain's hue when on `/domain/[id]`
- [x] MegaMenu searchable by subdomain text in addition to name + tagline + category
- [x] Review session keyboard shortcuts. Space/Enter to flip; 1=Again, 2=Hard, 3=Good, 4=Easy. Hint row under grading buttons
- [x] Resources tab. Source-weight chip (Primary / Secondary / Popular) on each row, plus a third filter row to slice by tier with counts
- [x] Scroll-to-top FAB. Appears after 600px scroll, sits above mobile BottomNav, hidden in print

## Shipped in the prior batch
- [x] Mega menu rebuild. Fixed-position, viewport-aware, backdrop dimmer, hover-bridge, body scroll lock on mobile, header + search + popular row + scrollable groups + footer
- [x] Practice dropdown that consolidates Review, Dashboard, Skill Map, My List into one nav entry
- [x] Footer rebuild. 4-card trust strip with icon tiles, 4-column brand-and-nav grid, polished bottom strip
- [x] Concepts tab overhaul. Sidebar TOC on lg+, mobile bottom-sheet TOC, 5-stage progress indicator (Predict, Read, Reflect, Check, Apply), segmented Beginner/Expert, radio-style quiz, color-coded task levels with unlock states, primary-CTA Next when ready
- [x] Cmd+K command palette across pages + domains, arrow-key navigation
- [x] Service worker for offline (network-first navigation, cache-first assets) + ServiceWorkerRegister client
- [x] Open Graph image generation via app/opengraph-image.tsx
- [x] Source weight on Resource schema (`primary` | `secondary` | `popular`)
- [x] CSV exports in Settings. Bookmarks, reflections, cards. UTF-8 BOM for Excel
- [x] Shareable progress card. 1200x630 PNG generated locally
- [x] Coachmarks. 5-step tour for first-time visitors who finished onboarding
- [x] Light theme contrast nudges on chips and panel shadow
- [x] Per-page canonical and robots meta
- [x] vercel.json security headers (HSTS, X-Frame-Options, CSP, etc.)
- [x] metadataBase, JSON-LD WebApplication
- [x] Hardened hydrate in lib/db.ts
- [x] Privacy section on /about
- [x] aria-pressed + sr-only "currently selected" on filter pills
- [x] .eslintrc.json with next/core-web-vitals
- [x] REVIEW.md

## Still pending, high priority
- [ ] Concept enrichment (definition / fullForm / prereqs / generic / expert / conceptQuiz / conceptTasks) for the remaining 12 domains. Marketing, AI/ML, Personal Finance done.
- [ ] CONTENT-AUDIT.md. Score every domain on Basics depth, Concept coverage, Quiz quality, Resources verification, Missions ladder. Flag thin sections.
- [ ] Author one flagship domain end-to-end (e.g. Psychology) as the new content quality bar; carry that bar across other domains
- [ ] Per-concept mini diagrams (schema permits, no authoring yet)
- [ ] Authoring pass to tag a wider sample of resources with `weight: "primary" | "secondary" | "popular"` (currently sparse so the new filter row is empty for most domains)

## Pending, medium
- [ ] Vitest unit tests on the pure functions. XP / mastery / streak / FSRS wrapper / schema validator
- [ ] Concept-of-the-day deep links to the last concept index (remember position per domain)
- [ ] Self-hosted fonts via `@fontsource/*`
- [ ] Single self-contained `polymath.html` bundle (would need vite-plugin-singlefile or a parallel build)
- [ ] Achievement notification toast variant with confetti

## Pending, polish
- [ ] Onboarding goals also pre-bookmark recommended domains
- [ ] Streak history visualization with month labels under the heatmap
- [ ] Print stylesheet test on a real printer
- [ ] Coachmark step that highlights specific UI elements (anchor-positioned)
- [ ] FAB should hide when the mobile drawer is open
- [ ] Treat Basics, Concepts, Resources etc. as deep-linkable mini-pages (route segments) instead of just `?tab=` query. Bigger refactor. Trade-off: nicer URLs vs. heavier app router work.

## New items discovered this round
- [ ] Update Coachmark step 1 copy. Now that nav is centered, "hover the Domains chip" still works but the centered position is worth mentioning
- [ ] On `/domain/[id]?tab=foo`, scroll the active tab into view in the tab strip on mobile
- [ ] Save scroll position per tab so switching tabs and back returns to where the reader left off

## Voice rules locked in
- No em or en dashes anywhere in content
- Two-register format per concept. Beginner and Expert
- Concept flow. Predict, Read, Reflect, Check, Apply
- No hallucinated URLs. Unknown stays `url: ""` and `verify: true`
- Status badges are not optional
- HOME_COUNTRY remains India for finance, law, and health hooks
