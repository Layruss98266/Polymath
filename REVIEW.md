# Polymath Review

A multi-persona and full-stack engineering audit of the app as of commit `c6a721f`.

## Persona reviews

### 1. Absolute beginner. Just landed.
- **What works.** Hub hero is short, search is prominent, catalogue is grouped by category, first-time hint chip pushes them toward picking a domain. Onboarding modal pops with 12 goals.
- **What is missing.** No video or animated explainer on the hero. No example concept inline ("see what a concept looks like before you commit").
- **Recommend.** A 15-second screencast or inline animated SVG of a concept being opened. Skip if performance budget tight.

### 2. Casual learner. Returns weekly.
- **What works.** Continue learning strip surfaces top 3 recent domains. Daily quote + concept of the day. Streak with a grace day so a missed Sunday doesn't nuke a 30-day streak.
- **What is missing.** No "where you left off" deep-link into the exact concept the user was on. No reminder system beyond the daily quote.
- **Recommend.** Remember last concept index per domain, deep link Continue Learning to that index. Optional opt-in email summary using Resend or similar (out of scope for an offline-first app).

### 3. Power user. Daily heavy use.
- **What works.** Keyboard shortcuts (G H/S/R/D/M/L, /, ?, Esc). Save/load JSON. Settings page with reset and wipe. Focus timer. Mega menu.
- **What is missing.** Bulk operations (mark all flashcards as easy, export all reflections as a single document). No CSV export.
- **Recommend.** Settings page already has the framework for export. Add CSV export of reflections + JSON export of cards by domain.

### 4. Mobile-only user.
- **What works.** Top bar collapses to hamburger drawer. Bottom nav (Home, Review, Search, Stats, Map) is sticky. Hero scales sensibly.
- **What is missing.** Some tab strips on /domain/[id] still horizontally scroll. The flashcard tap target could be bigger. Some panels have padding that wastes phone space.
- **Recommend.** Increase concept quiz option tap targets to 44 px minimum. Reduce panel padding to 12 px on small screens.

### 5. Vision-impaired user. Screen reader and high contrast.
- **What works.** Skip-to-content link. ARIA labels on diagrams. Status badges + dim text are semantically marked. Theme respects `prefers-color-scheme`. forced-colors fallback in globals.css.
- **What is missing.** Toaster live region is `aria-live=polite` but doesn't announce achievement details consistently. Some hue-only color indicators (active route, active filter) need a non-color signal.
- **Recommend.** Add a visually-hidden text marker on active filter pills ("(active)"). Verify Toaster announces achievement name + description. Test with NVDA or VoiceOver.

### 6. Low-bandwidth user. Throttled to 3G.
- **What works.** Static export. Lazy import per domain. First Load JS shared is 103 kB, no remote fonts. Confetti and audio code-split. Manifest is small.
- **What is missing.** No service worker for repeat visits to be near-zero kB. No image optimization (we don't have images, so this is fine).
- **Recommend.** Ship a minimal service worker that caches the build assets. Falls back to network for fresh content. Already in TODO.

### 7. Skeptical learner. Cares about epistemic honesty.
- **What works.** Per-claim status badges (settled, debated, framework). Steelman counter view per domain. lastVerified resource dates. Contested claims carry caveats inline.
- **What is missing.** No citation links inline within concepts. No source weight indicator on resources (peer-reviewed vs blog).
- **Recommend.** Optional `sourceWeight` field on Resource schema (`primary`, `secondary`, `popular`). Filter chip on the Resources tab.

### 8. Educator. Teaches a class with this.
- **What works.** Printable cheat sheet. Misconception-mapped quiz options. Concept quizzes that gate progression.
- **What is missing.** No teacher mode (multi-user, classroom dashboard). No way to share a curated list.
- **Recommend.** Out of scope for the offline-first single-user app. Could be a separate sister site.

### 9. Reference seeker. Wants a definition fast.
- **What works.** Global search at `/search` covers names + concepts + glossary with live highlights. `/` keyboard shortcut.
- **What is missing.** No "open in command palette" pattern (Cmd+K style overlay). Current search is a page, not a modal.
- **Recommend.** Add a Cmd+K command palette overlay that searches from anywhere without leaving the page.

### 10. Returner. Comes back after 6 months.
- **What works.** Streak with grace day, save code, JSON export. Versioned migration so old saves upgrade automatically.
- **What is missing.** No "what changed since you were last here" prompt.
- **Recommend.** On hydrate, if user has not been active in 30 days, show a "Welcome back, here is what changed in your domains" card based on the content changelog already shipped.

### 11. SEO/discoverer. Finds the site via search engines.
- **What works.** Sitemap.xml, robots.txt, per-domain dynamic metadata with Open Graph and Twitter cards. Static export so every page is crawlable.
- **What is missing.** No canonical URL meta tag. No OG image. Robots.txt currently has only the default rules.
- **Recommend.** Add canonical URLs via `metadataBase` in root layout. Generate an OG image (can be a static SVG-to-PNG export). Add structured data (JSON-LD) for the educational content type.

### 12. Privacy-conscious user.
- **What works.** No login. No tracking. No third-party scripts. No analytics. Data stored entirely client-side. Save code is portable. Settings has Wipe.
- **What is missing.** No explicit privacy statement on the site.
- **Recommend.** Add a short Privacy section to /about. One paragraph: no servers, no analytics, no cookies.

## Full-stack engineering audit

### Type safety
- **TypeScript strict** enabled in tsconfig.json. Zod schemas validate every domain at build (any mismatch fails the build loudly).
- **Gap.** No automated tests on the pure functions (XP math, mastery percentage, streak grace-day, FSRS wrapper).
- **Fix.** Add Vitest with a small suite for these. Spec already calls this out (Track B quality tooling).

### Performance
- **Bundle.** Shared first-load 103 kB, largest route 180 kB. No images. Confetti and audio are dynamically imported. Lazy load per domain.
- **Gap.** No font self-hosting. No service worker.
- **Fix.** Both in TODO. Lower priority since the system fonts fallback works fine.

### Accessibility
- **Pass.** Skip link, focus-visible outlines, prefers-reduced-motion honoured, forced-colors, ARIA on diagrams, role=tab on the domain tabs.
- **Gap.** Some active-state indicators are color-only (filter pills). Toaster may not always announce contents.
- **Fix.** Add a visually-hidden "current" sr-only text on active filter pills. Verify Toaster announces with NVDA.

### SEO
- **Pass.** Sitemap + robots. Per-domain titles + descriptions + OG/Twitter cards.
- **Gap.** No canonical, no `metadataBase`, no OG image, no JSON-LD.
- **Fix.** Add `metadataBase` to root layout. Generate static OG image. Add JSON-LD for `LearningResource` type.

### Security
- **Pass.** Static export, no server APIs to attack. No localStorage of secrets. No external script tags.
- **Gap.** No CSP header. No `X-Frame-Options`. No `Referrer-Policy`.
- **Fix.** Add security headers via `vercel.json`.

### State & data
- **Pass.** Dexie primary + localStorage fallback. Versioned migrations. Base64 + JSON export.
- **Gap.** A corrupt local store would crash on hydrate. Migration only runs forward.
- **Fix.** Wrap hydrate with try/catch that falls back to defaultState on parse failure. Already partially done in db.ts.

### Error handling
- **Pass.** `app/error.tsx` global error boundary. `app/not-found.tsx` 404.
- **Gap.** No per-route error.tsx. Throwing in a tab would surface in the global boundary which is fine but ugly.
- **Fix.** Acceptable as is. Per-route boundaries are nice-to-have.

### Dev experience
- **Gap.** No ESLint config beyond Next's default. No Prettier. No CI.
- **Fix.** Add `.eslintrc.json` extending `next/core-web-vitals`. Add a GitHub Actions workflow (build + typecheck) when ready.

### Code organization
- **Pass.** Clear separation. `app/` routes, `components/` UI, `data/` content + helpers, `lib/` engine.
- **Gap.** A few components grew (HomeShell, DomainView). Could split tabs into their own folder (already done).
- **Fix.** Not urgent.

### Build & deploy
- **Pass.** Next 15.5.19 patched. 28 static routes. Vercel auto-deploys main. Vercel.json minimal.
- **Gap.** No staging environment. No preview branches workflow.
- **Fix.** Standard Vercel branch previews already happen. Nothing to do.

## Priority actions

The actions I will implement next, in order of impact:
1. Security headers via `vercel.json` (CSP, X-Frame-Options, Referrer-Policy).
2. `metadataBase` + canonical on root layout.
3. JSON-LD for educational content type.
4. Privacy statement section in /about.
5. SR-only active-state markers on filter pills.
6. ESLint config file.
7. Robust hydrate wrap in db.ts for corrupt stores.

Out of scope but logged in TODO.md:
- Vitest suite, OG image generation, service worker, font self-hosting, command palette, last-concept deep linking.
