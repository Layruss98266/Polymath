# POLYMATH TODO

Living backlog. Most of Phase 5 shipped in this session. Remaining items listed at the bottom.

## Phase 5 status. SHIPPED in this session
- [x] 5a. Em and en dash sweep across all source and markdown files.
- [x] 5b. Mentor strip hidden from UI. Mentors made optional in schema and types.
- [x] 5c. Concept schema extended with optional fullForm, definition, subdomain, prereqs, generic, expert, conceptQuiz (3 to 5), conceptTasks (basic / easy / advanced). Resource adds optional kind. Domain adds optional subdomains list.
- [x] 5d. ConceptsTab rewritten as one concept at a time with progress bar, definition box, prereq chips, Beginner / Expert toggle, prediction prompt, autosaving reflection, inline 3 to 5 concept quiz with misconception feedback, task ladder, Previous / Next gated by quiz pass at 60%.
- [x] 5e. RankBadge component with 7 distinct gradient tiers (I through VII), used in DomainCard, DomainView header, Dashboard rank list.
- [x] 5f. Daily quote rotation. data/quotes.ts seeded with 411 real attributed quotes.
- [x] 5g. Resource kind field. Resources tab shows colored chip + filter by kind with counts. Heuristic infers kind from name when not declared.
- [x] 5h. Subdomains arrays added to all 15 Core domains. Marketing, AI/ML, Personal Finance also have their first 2 to 3 concepts fully populated with definitions, prereqs, generic, expert, conceptQuiz, conceptTasks.
- [x] 5i. Task ladder template demonstrated on 5 concepts across 3 domains (basic / easy / advanced with XP 10 / 25 / 70).
- [x] 5j High Priority. Onboarding (skippable 20s, 12 goals), Achievements expanded (21 definitions), Confetti on level up (gated on prefers-reduced-motion), Weakest concepts queue on Review, Test-out chip and explainer on quiz items, Global search across domains + concepts + glossary at /search, Capability log on Dashboard with mastery-based reveal, Calibration explanation block, Continue learning section on Home, PWA manifest, Optional Web Audio sounds with global mute toggle, Focus timer on Home (5 / 15 / 25 / 45 min), Content changelog per domain on the Basics tab.

## Still pending (would benefit from a follow up session)
- [ ] Concept enrichment for the remaining 12 domains. Subdomain metadata is in place; concept-level definition / generic / expert / conceptQuiz / conceptTasks authoring is shipped only on 7 concepts (Marketing 3, AI/ML 2, Personal Finance 2). Each remaining domain needs 4 to 6 concepts upgraded.
- [ ] Per-concept mini diagrams. Schema permits, no authoring yet.
- [ ] Self-hosted fonts via @fontsource. Skipped this session due to local disk space constraint.
- [ ] Single self-contained polymath.html bundle. Would require vite-plugin-singlefile or a parallel build. Skipped due to portability risk vs Next.js routing.
- [ ] Service worker for full PWA offline. Manifest is shipped; SW would need next-pwa or hand-rolled work. Skipped.
- [ ] Persona audit beyond the small fixes. Hero copy and the Continue learning addition shipped. A deeper audit per persona has not been written up.

## Voice rules locked in
- No em or en dashes anywhere in content.
- Two register format per concept: Beginner and Expert.
- Concept first definition, then beginner explanation, then expert, then prediction, then reveal, then reflect, then concept quiz, then task ladder.
- No hallucinated URLs. Unknown stays `url: ""` and `verify: true`.
- Status badges (settled, debated, framework) are not optional.
- HOME_COUNTRY remains India for finance, law, and health localisation hooks.
