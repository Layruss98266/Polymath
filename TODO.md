# POLYMATH TODO

Living backlog. Most of Phase 5 plus the world-class polish pass shipped. Remaining items grouped by priority below.

## Shipped in the latest sessions
- All Phase 5 sub-phases (5a through 5f, 5g, parts of 5h/5i, all 5j High Priority)
- World-class polish 1: 690 dash artifacts fixed, hero glow, error boundary, 404 page, skip-to-content, focus outlines, panel.lift hover, onboarding scoped to Home
- World-class polish 2: Toaster (XP, achievements, missions), Review smart empty state
- World-class polish 3: Keyboard shortcuts (G H/S/R/D/M/L, /, ?, Esc), loading skeleton for Domain detail, Concept of the day on Home
- Settings + SEO: /settings page (theme, sound, stats, base64 + JSON export/import, reset, wipe), sitemap.xml, robots.txt, per-domain dynamic metadata + Open Graph + Twitter cards
- Streak heatmap with real per-day XP logging (xpByDay), reading time chip on concepts, mobile bottom nav (Home / Review / Search / Stats / Map), Connections graph on Skill Map

## Pending, high priority
- [ ] Concept enrichment (full new format) for the remaining 12 domains
- [ ] Per-concept mini diagrams (schema permits, no authoring yet)
- [ ] Self-hosted fonts via @fontsource (currently skipped due to local disk; not a blocker for Vercel deploys)

## Pending, medium priority
- [ ] Single self-contained polymath.html bundle (would need vite-plugin-singlefile or parallel build)
- [ ] Service worker for full PWA offline (manifest is shipped)
- [ ] Achievement notification toast variant with confetti
- [ ] Shareable progress card export (PNG generated client-side)
- [ ] CSV export of progress data
- [ ] Streak history visualization with month labels under the heatmap
- [ ] Deeper persona audit writeup

## Pending, polish
- [ ] Light theme audit (subtle contrast issues on a couple of chips)
- [ ] Print stylesheet test on a real printer (looks fine in preview)
- [ ] Open Graph image (currently uses Twitter summary card with no image)
- [ ] Onboarding goals also pre-bookmark recommended domains
- [ ] First-time tour / coachmarks on the empty Dashboard

## Voice rules locked in
- No em or en dashes anywhere in content
- Two register format per concept: Beginner and Expert
- Concept first definition, then beginner explanation, then expert, then prediction, then reveal, then reflect, then concept quiz, then task ladder
- No hallucinated URLs. Unknown stays `url: ""` and `verify: true`
- Status badges (settled, debated, framework) are not optional
- HOME_COUNTRY remains India for finance, law, and health localisation hooks
