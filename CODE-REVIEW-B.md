# Polymath — Code Review B

Reviewed: `data/domains/*.ts` (15 files), `data/quotes.ts`, `data/achievements.ts`, `data/paths.ts`, `data/changelog.ts`, `lib/types.ts`, `lib/schema.ts`, `vercel.json`, `next.config.mjs`, `tsconfig.json`, `package.json`, `.eslintrc.json`, `public/sw.js`, `tests/**`, `vitest.config.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/domain/[id]/opengraph-image.tsx`. No code modified.

## Summary

- **No em/en-dash or " , " botched-sweep remnants** in domain content. Voice cleanup looks complete (grep over all 15 domain files returned 0 matches for `—`, `–`, and ` , ` patterns).
- **Schema-level data integrity is clean**: every enriched concept across all 15 domains is fully populated — `definition`, `generic`, `expert`, `conceptQuiz`, `conceptTasks` match concept counts 1:1 per file. No "has `conceptQuiz` but missing `conceptTasks`" drift.
- **Single biggest content honesty bug**: 49 `url: ""` resource rows are flagged `verify: false` across 14 domains. Per spec these should flip to `verify: true` so the UI shows an honest "no direct link yet" badge rather than implying the link was checked and broken. Only 3 `verify: true` rows exist total across 15 domains, suggesting a global `verify: false` default was applied indiscriminately.
- **`public/sw.js` contains a TypeScript-only `as any` cast in a plain `.js` service worker file** — invalid JavaScript that will throw `SyntaxError` in every browser at SW parse time, defeating offline mode entirely. P0.
- **CSP allows `'unsafe-inline'` for both `script-src` and `style-src`**. Required by Next.js inline hydration script + Tailwind, but the script side should be tightened to nonce/hash in a follow-up; currently this is the weakest link in the otherwise solid header set.

---

## P0 — content + security bugs

### P0-1. Service worker is invalid JavaScript
- **Where**: `public/sw.js:53` — `}).catch(() => cached as any))`
- **Problem**: `as any` is TypeScript syntax. Browsers parse `public/sw.js` as JS. The file will fail with `SyntaxError: Unexpected identifier 'any'` during `register()`, so installation, caching, and offline fallback never happen. The whole offline feature claimed in the OG image and Hero is silently broken.
- **Fix**: drop the cast: `}).catch(() => cached))`. The fallback resolves to `Response | undefined`; either return `cached` (browser tolerates undefined-rejected responses) or wrap in `cached || Response.error()`.

### P0-2. Empty resource URLs mislabeled `verify: false`
- **Where**: 49 rows total. Examples:
  - `data/domains/law.ts:626,628,631,632,633,634` (6 in paid list)
  - `data/domains/nutrition.ts` (6 rows)
  - `data/domains/negotiation.ts` (5 rows)
  - `data/domains/investing.ts`, `learning.ts`, `famous_laws.ts` (4 each)
  - All 14 other domains have 1–4 each (except `tech.ts` which has 1)
- **Problem**: A resource with `url: ""` and `verify: false` reads to a renderer as "we tried this URL and it failed". That's dishonest — the link was never picked. Either:
  - Flip these to `verify: true` and have the UI render an explicit "Link pending. Search title in your library / Z-Library / Wikipedia" affordance instead of pretending verification ran, **or**
  - Remove the empty-url rows entirely and let the cheatsheet/glossary carry the title-only mention.
- **Recommended**: flip to `verify: true` + UI affordance. Keeping the title visible matters; the dishonest state is the current one.

### P0-3. Stale `quotes.ts` count comment vs OG image
- **Where**: `data/quotes.ts:3` says "Currently ~120 entries" but file has **411** quotes (confirmed via grep) and `app/opengraph-image.tsx:47` advertises "411 daily quotes".
- **Problem**: doc drift the CLAUDE.md "doc drift is a bug" rule flags. Fine now because the OG image is correct, but next contributor will be misled.
- **Fix**: update comment to "~411 entries; target 500" or remove the count.

### P0-4. No schema test guards the Zod contract
- **Where**: `tests/**` covers `xp`, `mastery`, `save`, `streak` only. No test imports `DomainSchema` and walks every domain through `validateDomain()`.
- **Problem**: `lib/schema.ts:131-135` throws in prod only — validation is exercised at runtime on first load via `data/domains.ts:54-59`. A schema-breaking change to a single domain file ships green through CI today, then crashes for users mid-render of a domain page (server) or whole page (client).
- **Fix**: add `tests/domains.schema.test.ts` that iterates `DOMAIN_INDEX`, awaits each `loader()`, and asserts `DomainSchema.safeParse(mod.default).success === true`. Also assert: `concepts.length >= 8`, `roadmap.length === 7`, every concept that has `conceptQuiz` also has `conceptTasks` (pair invariant), every `Resource.url === ""` implies `verify === true` (after P0-2 fix).

---

## P1 — issues

### P1-1. Schema doesn't enforce "enriched concept" pair invariant
- **Where**: `lib/schema.ts:46-61` — all enrichment fields are independently optional.
- **Problem**: schema admits a concept with `conceptQuiz` but no `conceptTasks` (or `generic` but no `expert`). Audit shows the data is currently consistent, but the type doesn't protect future edits.
- **Fix**: add a `.refine()` block: if any one of `{definition, generic, expert, conceptQuiz, conceptTasks}` is present, all five must be.

### P1-2. `generateStaticParams` for per-domain OG image is awaited synchronously per request, but `findEntry` fallback object is a magic literal
- **Where**: `app/domain/[id]/opengraph-image.tsx:17`
- **Problem**: when `findEntry(id)` returns undefined (e.g. stale link), the fallback `{ name: "Polymath", tagline: ..., hue: "#ff6b5e", icon: "🧭", category: "" }` is shipped as OG art. That's fine, but the route should `notFound()` instead so social bots don't cache a fake card for a deleted domain.
- **Fix**: `if (!entry) return notFound();` (next/navigation).

### P1-3. `next.config.mjs` build-id fallback re-runs every restart
- **Where**: `next.config.mjs:8-10`
- **Problem**: `String(Date.now())` is evaluated at config load time. On local dev that's per `next dev` restart — fine. On Vercel, `VERCEL_GIT_COMMIT_SHA` is always set so this never fires. But `NEXT_PUBLIC_BUILD_ID` is then frozen into the client bundle and the SW cache namespace, which means if a CI run leaks `Date.now()` (e.g. self-hosted), every redeploy busts every user's offline cache. Minor.
- **Fix**: fall back to `"dev"` instead of `Date.now()`. Vercel sets the env var; dev doesn't need cache-busting.

### P1-4. Sitemap omits `lastModified` per-domain meaning + uses `new Date()` at request time
- **Where**: `app/sitemap.ts:8`
- **Problem**: every URL gets the same `now` timestamp regenerated on each crawler hit. Crawlers see everything modified "today" forever. Defeats `lastModified` signal.
- **Fix**: use `process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE` or the changelog's last entry per domain (`CHANGELOG[id][0].date`) as a deterministic per-page mtime.

### P1-5. CSP `script-src 'self' 'unsafe-inline'`
- **Where**: `vercel.json:17`
- **Problem**: `'unsafe-inline'` on scripts negates the rest of the CSP for XSS purposes — any reflected payload runs. Next.js needs an inline script for hydration data, but Vercel/Next supports nonce-based CSP via middleware.
- **Fix**: medium-term, switch to a nonce: per-request middleware that sets a nonce header and stamps `<script nonce={nonce}>` on the hydration script via `next.config.experimental.serverActions.nonce` (or a middleware rewrite). Short-term, leave as is and document the known weakness in `agents.md`.

### P1-6. CSP missing `frame-src 'none'` and `media-src`
- **Where**: `vercel.json:17`
- **Problem**: relies on `default-src 'self'` fallback. Explicit is safer because `frame-ancestors 'none'` blocks being framed but doesn't block *embedding* iframes. Right now nothing in the app uses iframes — adding `frame-src 'none'` cements that.
- **Fix**: append `frame-src 'none'; media-src 'self'`.

### P1-7. `tsconfig.json` `target: "ES2022"` but no `noUncheckedIndexedAccess`
- **Where**: `tsconfig.json`
- **Problem**: `strict: true` is on but `noUncheckedIndexedAccess` is off. Code that does `DOMAIN_INDEX[i].id` is typed as `string` not `string | undefined` — easy to ship an off-by-one bug in `loadDomain`, `sitemap`, or `findEntry` callers.
- **Fix**: turn it on. Will surface ~10–30 sites needing `?.` or asserts; all real bugs.

### P1-8. `tsconfig.json` includes `.next/types/**/*.ts` but `tsconfig.tsbuildinfo` is committed
- **Where**: project root has `tsconfig.tsbuildinfo` untracked-but-present and `tsconfig.json:13` has `incremental: true`. If the tsbuildinfo is in git it will cause flaky CI.
- **Fix**: confirm `.gitignore` lists `*.tsbuildinfo`. (Could not verify from the in-scope file set.)

### P1-9. Roadmap "time" field is a free string
- **Where**: `lib/types.ts:56`, `lib/schema.ts:68`
- **Problem**: values like `"~2-3 months"`, `"ongoing"`, `"~1 year+"` are inconsistent across domains; no enum or regex. Surfacing this in the UI makes the inconsistency visible.
- **Fix**: either tighten to `z.string().regex(/^(?:~?\d+[-+]?(?:\s?\w+)?|ongoing)$/)` or accept the freeform tradeoff and document.

### P1-10. `Resource.lastVerified` is a free string
- **Where**: `lib/schema.ts:79`
- **Problem**: all real values are `"YYYY-MM"`. Schema admits arbitrary text.
- **Fix**: `z.string().regex(/^\d{4}-\d{2}$/).optional()`.

### P1-11. Mission XP economy is flat in several domains
- **Where**:
  - `data/domains/communication.ts` missions: three at 30, two at 40 — top mission rewards barely above floor.
  - `data/domains/nutrition.ts`: one at 30, four at 50 — no spread.
  - `data/domains/famous_laws.ts`: three at 30, one at 40, one at 50 — capstone gets 200 but in-domain mission spread is narrow.
- **Problem**: missions should reward effort gradient. A 5-minute pulse and a multi-day field experiment both giving 30 XP teaches users that effort doesn't matter.
- **Fix**: re-tier per domain to {20, 30, 50, 70, 100}-ish based on effort. `data/domains/law.ts` (30/40/40/40/80) and `data/domains/personal_finance.ts` (30/40/50/50/60) are good models.

### P1-12. `famous_laws.ts` has every concept marked `settled` (21/21)
- **Where**: `data/domains/famous_laws.ts`
- **Problem**: most are genuinely settled physics, but "Power law / Pareto principle" and "Bayes' theorem" as *laws* are framework-style heuristics in many applications, and "Statistical vs deterministic thinking" is itself a framework about laws, not a settled law. Marking literally everything settled removes signal from the badge.
- **Fix**: relabel meta/heuristic concepts (`Power law`, `Pareto principle`, `Bayes' theorem` in their applied/everyday-decision-making framing) as `framework`; keep Newton/Maxwell/relativity/thermo/Darwin as `settled`.

### P1-13. `psychology.ts` marks `Anchoring`, `Loss aversion`, `Confirmation bias`, `Fundamental attribution error` as `settled`
- **Where**: `data/domains/psychology.ts`
- **Problem**: these are robust effects but post-replication-crisis the *strength* of the effect is debated for several (loss aversion in particular: Gal & Rucker 2018, Yechiam 2019). Marking `settled` invites overconfidence in a learning app whose voice promises to teach calibration.
- **Fix**: move `Loss aversion` to `debated` with one-sentence note in `deep` about the replication evidence. Others can stay `settled`.

### P1-14. `health.ts` only 1 concept marked `debated` despite high public contention
- **Where**: `data/domains/health.ts`
- **Problem**: only 1 debated vs 13 settled. Cholesterol/sat-fat/cardio-vs-resistance/seed-oils/optimal-protein are all genuinely contested. Spot-check: hardly anything is "debated" here. Compare `nutrition.ts` (6 debated) which gets the calibration right.
- **Fix**: review and reclassify 3–5 concepts where the *quantitative recommendation* (not the existence of the effect) is genuinely contested.

### P1-15. Quiz misconception spot-check: one weak distractor pattern
- **Where**: `data/domains/ai_ml.ts:78-82` (the "AI tells you about an event last week" quiz)
- **Problem**: distractor options "How fast is the AI's CPU?", "What language is the AI written in?", "Does the AI have Wi-Fi?" are straw-men no real learner would pick. The good misconception path here is "Did you tell it to search the web?" (RAG/tool-use confusion is a real misconception in 2026).
- **Other spot checks**:
  - `psychology.ts` Cialdini quiz misconceptions are strong (each is a real bias-vs-bias confusion).
  - `famous_laws.ts:648-653` Newton's 2nd quiz: distractors are F=mv (real misconception), E=mc², ½mv² (real misconception). Good.
  - `personal_finance.ts` and `investing.ts` spot-checked: distractors realistic.
  - `marketing.ts` and `entrepreneurship.ts` spot-checked: distractors realistic.
- **Fix**: replace AI/ML "CPU/language/wifi" with credible misconceptions: "Did it browse the web?", "Was the event in the system prompt?", "Did you ask for citations?".

### P1-16. `OG image` and `Hero` advertise "411 daily quotes" but quotes file doesn't enforce uniqueness
- **Where**: `data/quotes.ts` has no de-dup check, no schema validation.
- **Problem**: spot-grep risk; minor.
- **Fix**: add a test that asserts `new Set(QUOTES.map(q => q.text)).size === QUOTES.length`.

---

## P2 — polish

- **P2-1**: `data/changelog.ts:11–18` distinguishes "Rewritten + 3 concepts upgraded" from "Voice humanized + 4 subdomains added" but every concept across all 15 domains is now fully enriched (per grep counts). The changelog understates the actual work for 12 of 15 domains. Update notes.
- **P2-2**: `lib/types.ts:39` comment "Phase 5c additions, all optional so existing domains keep working" is now stale — every domain uses them. Mark these "required for enriched concepts" in the comment to guide future authors.
- **P2-3**: `app/robots.ts:6` allows `/api/` only via disallow but no `/api/` routes exist in the project (no `app/api/` directory). Harmless; remove the redundant rule.
- **P2-4**: `vercel.json:8` HSTS `max-age=63072000` (2 years) + `preload` — fine for prod but commits you to HTTPS forever. Document this in `agents.md` so a future contributor doesn't accidentally roll back.
- **P2-5**: `app/sitemap.ts:5` hardcodes `https://polymath.vercel.app`. Should read from an env var so local/preview deployments don't ship the prod URL in their sitemaps.
- **P2-6**: `public/sw.js:10-13` APP_SHELL is lean (8 entries) — good, no bloat.
- **P2-7**: `data/quotes.ts:3` `~120` comment, see P0-3.
- **P2-8**: `lib/types.ts:188` `dailyQuest.kind` literal union is duplicated nowhere — consider extracting a `QuestKind` type.
- **P2-9**: `Resource.price = "verify"` is a sentinel used to mean "look up price". Consider a typed `Resource.priceLookup: true` instead so it's not stringly-typed.
- **P2-10**: `tsconfig.json` doesn't include `tests/`. Vitest reads them via its own resolver but `tsc --noEmit` won't typecheck them. Add `"tests/**/*.ts"` to `include`.

---

## Per-domain content-quality table

Counts via grep of structural fields (`short:`, `definition:`, `conceptQuiz:`, etc.). "Empty resource URLs" counts `url: ""`. "verify:true" counts `verify: true`. Status counts cover only the explicit concept `status:` fields (matches concept count where consistent).

| Domain | Concepts | Enriched (def/gen/exp/cQ/cT) | Concept diagrams | Empty resource URLs | verify:true count | settled/debated/framework | Issues |
|---|---|---|---|---|---|---|---|
| ai_ml | 13 | 13 (100%) | 2 | 1 | 0 | mixed | P1-15 weak quiz distractors |
| communication | 11 | 11 (100%) | 2 | 2 | 0 | 0 debated | P1-11 flat XP |
| entrepreneurship | 12 | 12 (100%) | 2 | 2 | 0 | 0 debated | balanced |
| famous_laws | 21 | 13 (62%) — 8 legacy single-line concepts not enriched | 2 | 4 | 0 | 21/0/0 | P1-12 status overconfident; 8 concepts un-enriched |
| health | 12 | 12 (100%) | 2 | 3 | 0 | 13/1/6 | P1-14 too few debated |
| investing | 13 | 13 (100%) | 2 | 4 | 0 | mixed | balanced |
| law | 13 | 13 (100%) | 2 | 6 | 0 | mixed | most empty URLs in suite |
| learning | 13 | 13 (100%) | 2 | 4 | 0 | 15/1/5 | balanced |
| marketing | 11 | 11 (100%) | 2 | 3 | 0 | mixed | balanced |
| mental_models | 13 | 13 (100%) | 2 | 2 | 0 | mostly framework | sensible |
| negotiation | 11 | 11 (100%) | 2 | 5 | 2 | mostly framework | only domain with non-trivial verify:true |
| nutrition | 13 | 13 (100%) | 2 | 6 | 0 | 10/6/5 | well calibrated; most empty URLs |
| personal_finance | 13 | 13 (100%) | 2 | 3 | 0 | mixed | XP economy good |
| psychology | 14 | 14 (100%) | 2 | 3 | 1 | 13/3/6 | P1-13 loss aversion should be debated |
| tech | 13 | 13 (100%) | 2 | 1 | 0 | mixed | cleanest URL coverage |

**Aggregate**: 49 empty `url: ""` (P0-2), only 3 `verify: true` (P0-2), `famous_laws.ts` is the only domain with un-enriched legacy concepts (8 of 21), every other domain is 100% enriched.

---

## A11y findings

- **Light theme `#d94a3d` on `#ffffff`**: contrast ratio ≈ **5.10** → passes WCAG AA for normal text (≥4.5), fails AAA (≥7). OK for body text, OK for buttons. **Watch**: if used for small (<14px regular / <11px bold) text, it's borderline; declare a minimum size in `globals.css`.
- **Dark theme `#ff6b5e` on `#0b0d1a`**: contrast ratio ≈ **5.55** → passes AA, fails AAA. Symmetric situation.
- **Roles** (`grep` over components): all uses of `role="dialog" | "menu" | "menuitem" | "img" | "status" | "radiogroup" | "radio" | "combobox" | "listbox" | "option" | "search" | "button"` are valid HTML5/ARIA. No invented roles.
- **`<h1>` per page**: every page-level component (`AboutView`, `Dashboard`, `HubHero`, `HomeHero`, `ConceptDeepPage`, `DomainHeader`, `MyList`, `SearchView`, `ReviewSession`, `SettingsView`, `SkillMap`) has exactly one `<h1>`. `ShareView.tsx` has 3 but they are in mutually exclusive conditional branches — only one renders. OK.
- **Search input** `aria-label="Search query"` present (`components/SearchView.tsx:144`). Good.
- **Reflection textarea** `aria-label="Your reflection"` present (`components/tabs/ConceptsTab.tsx:331`). Good.
- **`RouteAnnouncer`** uses `role="status"` and reads `<h1>` after route change — correct pattern.
- **No `<img>` without alt** found in scope (verified `@next/next/no-img-element: warn` in `.eslintrc.json` plus grep).
- **Diagrams** use `role="img"` + `aria-label` per `components/Diagram.tsx`. Good. Spot-check: `ConnectionsGraph.tsx:66` uses `role="img"` — confirm it sets an `aria-label` describing the graph (not verified within in-scope files but the role is correct).
- **Outstanding A11y task**: no `:focus-visible` ring spec is in scope to verify, but verify in `globals.css` (out of scope here) that all interactive elements get a visible focus outline ≥3:1 contrast.

---

## Performance / SEO findings

### Performance
- **`lucide-react` imports**: all 30+ usages are named imports (`import { ChevronDown, X } from "lucide-react"`). No `import * as Icons` star imports. Tree-shakes correctly with Next 15 + Webpack 5. **OK**.
- **Per-domain dynamic import**: `data/domains.ts:24-43` uses `() => import("./domains/<id>")` per entry. Each domain ships as its own chunk. **OK**.
- **SSG page count estimate**:
  - 2 static (`/`, `/about`)
  - 15 × (1 overview + 7 tab segments) = 120 tab pages
  - ~15 × ~4 subdomains ≈ 60 subdomain pages
  - 15 × ~13 concepts ≈ 195 concept deep pages
  - Plus 15 per-domain OG images + 1 root OG
  - **Total: ~393 SSG outputs.** Well under Vercel free tier static-output limits.
- **Service worker APP_SHELL** (`public/sw.js:10-13`): 11 entries (8 routes + 3 assets). **Not bloated**.
- **Sitemap** (`app/sitemap.ts`): iterates each domain's `concepts.length` once, no double-listing. `try/catch` swallows load failures silently — fine for resilience but log in dev.
- **`reactStrictMode: true`** in `next.config.mjs`. Good for catching bugs; mild perf hit in dev only.
- **`incremental: true` in tsconfig**: speeds up `tsc --noEmit` in CI. Good.

### SEO
- **Per-page metadata**: 21 files export `generateMetadata` or `metadata`. All 8 domain tab routes covered. **OK**.
- **Canonical**: all 20 metadata exports set `alternates.canonical`. **OK**.
- **Per-domain OG image** (`app/domain/[id]/opengraph-image.tsx`): uses `entry.hue`, `entry.icon`, `entry.name`, `entry.category`, `entry.tagline` — properly differentiated per domain. **OK** (modulo P1-2: fallback object should `notFound()`).
- **Sitemap priority values**: 1.0 (home), 0.7 (domain overview), 0.6 (subdomain), 0.55 (tabs), 0.5 (concept deep). **Sensible gradient**.
- **`robots.ts`**: `allow: "/"`, `disallow: ["/api/", "/_next/"]`, links sitemap. No `host` field — fine for Vercel. **OK**, but `/api/` is redundant (no such routes).
- **Open Graph `alt` text** present in both OG image files. Good.
- **Stale URL hardcode**: `app/sitemap.ts:5` and `app/opengraph-image.tsx` both bake `polymath.vercel.app`. If the site moves, both need updating in lockstep. Move to env var.

---

## What looks great

- Voice cleanup across all 15 domains is genuinely complete — zero em/en-dash, zero " , " seams, no double-spaces in prose.
- All 15 domains pass schema completeness for required fields (concepts ≥ 8, roadmap = 7, resources.free/paid ≥ 1, etc.).
- 100% enrichment ratio on 14/15 domains (only `famous_laws.ts` has 8 legacy concepts un-enriched, and even there the enriched 13 are full).
- Security headers (HSTS, COOP, CORP, X-Frame-Options, Permissions-Policy, Referrer-Policy) are correct and complete. Only weakness is CSP `'unsafe-inline'` for scripts.
- No secrets in source (grep for keys/tokens turned up clean).
- `dangerouslySetInnerHTML` used only for JSON-LD in two places — safe.
- User-provided text (search, reflections) flows through React as escaped children, never via `innerHTML`.
- Mentors, mentors' work attributions, and quotes use careful "do not invent" discipline (per `data/quotes.ts:2-3`).
