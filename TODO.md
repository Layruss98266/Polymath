# POLYMATH TODO

Living backlog. Recent batch closed almost everything from the prior REVIEW.md. New items added at the bottom.

## Shipped in the latest batch
- [x] Mega menu rebuild. Fixed-position, viewport-aware, backdrop dimmer, hover-bridge, body scroll lock on mobile, header + search + popular row + scrollable groups + footer
- [x] Practice dropdown that consolidates Review, Dashboard, Skill Map, My List into one nav entry
- [x] Footer rebuild: 4-card trust strip with icon tiles, 4-column brand-and-nav grid, polished bottom strip
- [x] Concepts tab overhaul. Sidebar TOC on lg+, mobile bottom-sheet TOC, 5-stage progress indicator (Predict, Read, Reflect, Check, Apply), segmented Beginner/Expert, radio-style quiz, color-coded task levels with unlock states, primary-CTA Next button when ready
- [x] Cmd+K command palette across pages + domains, arrow-key navigation
- [x] Service worker for offline (network-first navigation, cache-first assets) + ServiceWorkerRegister client
- [x] Open Graph image generation via app/opengraph-image.tsx
- [x] Source weight on Resource schema (`primary` | `secondary` | `popular`)
- [x] CSV exports in Settings: bookmarks, reflections, cards. UTF-8 BOM for Excel
- [x] Shareable progress card. 1200x630 PNG generated locally
- [x] Coachmarks: 5-step tour for first-time visitors who finished onboarding
- [x] Light theme contrast nudges on chips and panel shadow
- [x] Per-page canonical and robots meta (from previous batch)
- [x] vercel.json security headers (HSTS, X-Frame-Options, CSP, etc) (previous batch)
- [x] metadataBase, JSON-LD WebApplication (previous batch)
- [x] Hardened hydrate in lib/db.ts (previous batch)
- [x] Privacy section on /about (previous batch)
- [x] aria-pressed + sr-only "currently selected" on filter pills (previous batch)
- [x] .eslintrc.json with next/core-web-vitals (previous batch)
- [x] REVIEW.md (previous batch)

## Still pending, high priority
- [ ] Concept enrichment (definition / fullForm / prereqs / generic / expert / conceptQuiz / conceptTasks) for the remaining 12 domains. Marketing, AI/ML, Personal Finance done.
- [ ] Per-concept mini diagrams (schema permits, no authoring yet)
- [ ] Surface SourceWeight in ResourcesTab UI (chip badge + filter)
- [ ] Authoring pass: tag a sample of existing resources with `weight: "primary" | "secondary" | "popular"`

## Pending, medium
- [ ] Vitest unit tests on the pure functions: XP / mastery / streak / FSRS wrapper / schema validator
- [ ] Concept-of-the-day deep links to last concept index (remember position per domain)
- [ ] Self-hosted fonts via `@fontsource/*`
- [ ] Single self-contained `polymath.html` bundle (would need vite-plugin-singlefile or a parallel build)
- [ ] Achievement notification toast variant with confetti

## Pending, polish
- [ ] Onboarding goals also pre-bookmark recommended domains
- [ ] Streak history visualization with month labels under the heatmap
- [ ] Print stylesheet test on a real printer
- [ ] Coachmark step that highlights specific UI elements (anchor-positioned)

## New items discovered this round
- [ ] Mobile drawer top bar should include Practice section (now hidden on mobile, only desktop nav has it)
- [ ] Review session: arrow-key flip + grade shortcuts (1=Again, 2=Hard, 3=Good, 4=Easy)
- [ ] BottomNav active highlight in domain hue when on a domain page
- [ ] Make MegaMenu searchable by sub-domain text too (now name + tagline + category only)

## Voice rules locked in
- No em or en dashes anywhere in content
- Two register format per concept: Beginner and Expert
- Concept flow: Predict, Read, Reflect, Check, Apply
- No hallucinated URLs. Unknown stays `url: ""` and `verify: true`
- Status badges are not optional
- HOME_COUNTRY remains India for finance, law, and health hooks
