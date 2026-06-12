# Changelog

Notable changes per round. Reverse chronological. See git log for the full history.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) loosely. The project does not yet ship versioned releases.

## Round 15 — `b9ad85f` (2026-06-13)

### Fixed
- **Two XP-farm vectors closed.** `upsertCard` now persists a `graduatedCards` set so the FSRS-Review graduation XP fires once per cardKey lifetime (a fail-then-pass cycle no longer re-awards +25 XP). `FlashcardsTab.gradeAndNext` got the same busy-lock pattern as `ReviewSession.onGrade`.
- **JSON-LD escape hardening.** New `lib/jsonLd.safeJsonLd` escapes `</script>`, `<!--`, U+2028, U+2029. Both `dangerouslySetInnerHTML` call sites route through it.
- **Counts no longer lie.** `HomeStats` now reads `CONCEPT_COUNT_TOTAL` from `data/conceptStats.ts` (was hardcoded "175+" while the actual count grew to 202). `app/opengraph-image.tsx` derives domain + quote counts from the live arrays.
- **Save codec modernised.** `lib/save.ts` exports `utf8ToBase64` / `base64ToUtf8` built on `TextEncoder` / `TextDecoder`. Removed the deprecated `escape`/`unescape` pair. ShareView + SettingsView share-link generator use the shared helpers.
- **Shared rank estimator.** `lib/shareRank.SHARE_RANK_DEFAULT_TOTALS` exported as the single content-medians constant. SettingsView and ShareCard reference it; the two surfaces no longer disagree about rank.

### Added
- `eslint` + `eslint-config-next` as devDependencies so CI lint passes without `--if-present`.

## Round 14 — `0cb2883` (2026-06-13)

### Fixed
- Mission XP economy in `communication`, `nutrition`, `famous_laws` redistributed across basic/medium/capstone bands. 9 new missions total.
- Habit-loop diagram nodes corrected to Clear's canonical 4-step.
- 3 cross-domain `synthesis` entries added to psychology (Loss aversion → investing, Growth mindset → learning, Status games → negotiation, Confirmation bias → ai_ml).
- 3 YouTube search URLs replaced with canonical channels / playlists.

### Added
- Schema-level enrichment-pair invariant (`lib/schema.ts` `.superRefine`). Half-enriched concepts fail validation.
- `tests/schema.test.ts` walks every domain through validation.
- `tests/quotes.test.ts` asserts count + dedupe.
- `lib/shareRank.ts` single shallow-mastery estimator.
- ReviewSession reads `?minutes=` and caps the pool to roughly that many cards.
- ConceptOfTheDay deps array cleaned. Onboarding "See the curated Path" passes `?highlight=`; MyList scrolls + glows the matching path.

## Round 13 — `211d3be` (2026-06-13)

### Added
- Home redesign: `HomeStats` (4 quick numbers), `FeaturedPaths` (4 curated bundles), `TrustStrip` (no login / no analytics / status badges / free), `RecentActivityRail` (last 4 opened concepts for returning users).
- `app/icon.tsx` + `app/apple-icon.tsx` generate favicon and touch icon at build via `next/og`.

### Fixed
- 20+ P1s from round-11 audit reports.
- 6 personal_finance v1 stubs enriched. 8 psychology v1 thin concepts enriched.
- 60 subdomain pages now have `intro` + `capabilities`.
- Status badges flipped on Anchoring, Loss aversion, Confirmation bias, FAE (psychology); GR + power laws (famous_laws); Sleep architecture + RHR (health).

## Round 12 — `6ad0ce4` (2026-06-12)

### Fixed
- 12 P0s from the 5-agent round-11 audit: SW `as any` cast, FlashcardsTab no-XP, QuizTab stale closure, WeeklyDigest UTC, HubHero dead-until-catalogue, TopBar anchor mismatch, 49 empty-URL `verify` flag, quotes count comment, Budget 2025-26 numbers.

## Rounds 1 to 11 — squashed history

See git log for the per-round detail and the 5 audit reports (`CODE-REVIEW-A.md`, `CODE-REVIEW-B.md`, `TEST-PSYCHOLOGY.md`, `TEST-PERSONAL-FINANCE.md`, `TEST-CROSS-CUTTING.md`) for what those rounds shipped.
