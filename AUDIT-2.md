# POLYMATH Multi-Agent Audit. Round 2

Date: 2026-06-12. Three parallel Explore agents ran a deep audit on XP/state mutations, content/schema, and a11y/perf/SEO. Findings below, plus the patches landed in this session.

---

## CRITICAL bugs fixed this session

### XP exploit. Unlimited XP by clicking Quiz answers (the bug user reported)
- Files: `lib/state.tsx`, `components/tabs/QuizTab.tsx`, `components/tabs/ConceptsTab.tsx`, `lib/types.ts`.
- Root cause: `recordQuizAnswer` had no server-side dedupe. The local `submitted` state was the only guard, and it resets when the component unmounts. Switch tabs → remount → score the same question again → +XP every time.
- Fix: added `quizSeen?: string[]` to UserState and a stable `quizKey` parameter to `recordQuizAnswer`. If the key is already in `quizSeen`, the counter and XP are skipped (concept-progress attempt-count still updates so the weakest-queue stays accurate).
- Call sites:
  - QuizTab uses key `${d.id}:quiz:${idx}`
  - ConceptsTab uses key `${d.id}:concept:${idx}:${qi}`

### XP exploit. Reflection blur-spam
- File: `lib/state.tsx` `saveReflection`.
- Root cause: textarea fires save on every blur. As long as the answer is over 20 chars, +15 XP every blur. Focus and blur over and over to farm.
- Fix: added `reflectionSeen?: string[]`. The 20-char XP bonus pays out the first time per key, never again. Note text still updates on every save (lets the user edit), only the reward is one-shot.

### XP exploit. Review double-tap on grade buttons
- File: `components/ReviewSession.tsx`.
- Root cause: grade buttons could be clicked twice before React advanced to the next card, awarding +4 XP per click and grading the wrong card twice.
- Fix: `busy` lock for 50 ms after every `onGrade`, plus `disabled={busy}` on the four buttons.

### BottomNav domain-hue lookup. Indexed array as map
- File: `components/BottomNav.tsx`.
- Root cause: `DOMAIN_INDEX` is an array, the code was doing `(DOMAIN_INDEX as any)[m[1]]`. The hue tint never appeared.
- Fix: `DOMAIN_INDEX.find((x) => x.id === m[1])`.

### Canonical for `/domain/[id]?tab=...` would dupe in Google index
- File: `app/domain/[id]/page.tsx`.
- Root cause: tab deep linking via `?tab=` is great for users, but Googlebot would see 10 variants per domain.
- Fix: per-domain `alternates: { canonical: '/domain/${id}' }` plus `openGraph.url` aligned.

### Light-theme accent contrast below WCAG AA
- File: `app/globals.css`.
- Root cause: `--hue: #ff6b5e` on a white panel scores about 3.3 to 3.5:1, below the AA threshold of 4.5:1.
- Fix: light theme now overrides `--hue: #d94a3d` (darker coral). Dark theme keeps the brighter `#ff6b5e`.

### FlashcardsTab clickable article had no keyboard handler
- File: `components/tabs/FlashcardsTab.tsx`.
- Fix: added `onKeyDown` for Space and Enter, `aria-pressed`, and `cursor-pointer` so the affordance is clear.

### `weight` tags added to ai_ml top 4 free resources (demonstration)
- File: `data/domains/ai_ml.ts`.
- Now the Primary / Secondary filter row actually renders for at least one domain. Marketing and personal_finance still need the same pass.

---

## Agent A. XP and state-mutation surfaces

The agent confirmed the user-reported bug and surfaced two more vectors.

| Action | Dedupe before fix | Severity | Fixed |
| --- | --- | --- | --- |
| recordQuizAnswer | none | HIGH (farmable) | yes |
| saveReflection | partial (text updated) | HIGH (blur loop) | yes |
| addXP (Review) | none, relied on UI | MEDIUM (double-tap) | yes |
| openConcept | yes (existing.opened) | low | safe |
| completeMission | yes (missionsDone.includes) | low | safe |
| completeCapstone | yes (capstoneDone) | low | safe |
| completeDailyQuest | yes (dailyQuest.done) | low | safe |
| toggleBookmark | toggle only | none | safe |
| refreshDailyQuest | yes (date guard) | none | safe |
| achievement checks | yes (!have.has) | none | safe |

All HIGH severity items are now patched.

---

## Agent B. Content and schema

Top findings:

1. **No em-dashes, no `" , "` debris, no schema violations across all 15 domains.** The previous content sweeps held.
2. **24 resources flagged `verify: true` AND have empty `url: ""`.** Pure placeholders. Either fill or mark `verify: false`. Distribution:
   - law: 5+, famous_laws: 3+, communication / entrepreneurship / investing / negotiation / personal_finance: 2 each, ai_ml: 1.
3. **Concept enrichment** (`conceptQuiz`, `conceptTasks`) only on **ai_ml, marketing, personal_finance** (3 of 15). The remaining 12 domains have zero. This is the biggest single content gap.
4. **`weight` tags** for the new resource-tier filter exist in ai_ml only after this session. Marketing and personal_finance still untagged.
5. **`price: "verify"`** appears across many paid resources as a legacy placeholder. Either price it or drop.
6. **Wikipedia and other major institutional sources** appear in 7+ domains. Expected, not a bug.
7. Per-domain content-stats table is preserved in the agent transcript.

---

## Agent C. A11y, performance, SEO

A11y
- **Missing `aria-controls`** on every menu trigger: MegaMenu, PracticeMenu, DomainView overflow, ConceptsTab mobile drawer. Easy fix, plumb `id` onto the panel and reference it from the trigger.
- **No focus trap** in any full-screen modal: Onboarding, CommandPalette, mobile drawer, SaveLoadModal. Tabbing escapes the modal into the page behind.
- **No focus restoration** on modal close. The previously-focused element should regain focus.
- **Diagram SVG `<g>` groups with `tabIndex={0}` and `aria-label`** are semantically weak. Wrap in `<button>` or add Enter/Space keyboard handlers.
- **Light theme contrast** for `--hue` was 3.5:1 (FIXED).
- **FlashcardsTab keyboard handler** was missing (FIXED).
- Globally: `focus-visible` styles correct, skip link in place, no clickable `<div>` patterns beyond what was fixed.

Performance
- **lucide-react imports all named.** No tree-shake risk.
- **All `useEffect` cleanups present.** No leaked listeners.
- **CSS transitions use `transform`.** No layout thrash.
- **SW cache version is hardcoded `polymath-v1`.** New deploys do not invalidate HTML cache automatically. Inject a build hash next time.
- **No `useMemo` thrashing.** Deps are tight.

SEO
- **`?tab=` canonical risk** would have spawned duplicate index entries (FIXED).
- **Title separator inconsistency:** layout template uses `· Polymath`, layout default uses `. Polymath`. Pick one.
- **No per-domain OG image.** Single global image for 15 different domain pages. Would need an `app/domain/[id]/opengraph-image.tsx` to render with the domain hue.
- **Sitemap `lastModified: now`** on every entry. Use the actual content timestamp.
- **Twitter card `creator: "@polymath"`** referenced in layout. If the handle is not owned, drop it.

---

## Still outstanding (next session)

Top of the list:
1. Tag `weight` on top resources of marketing and personal_finance (mirror what was done for ai_ml).
2. Verify or de-verify the 24 empty-URL resources flagged `verify: true`.
3. Per-domain OG image generator.
4. `aria-controls` plumbing on all menu triggers.
5. Focus trap utility for modals (write once, reuse on Onboarding / CommandPalette / SaveLoadModal / mobile drawer).
6. SW cache key tied to build hash so deploys cleanly invalidate.
7. Concept enrichment for the remaining 12 domains (the slow one).
8. Title separator consistency: standardise on `· Polymath`.
9. Sitemap `lastModified` from actual content metadata, not `now`.

---

## How the XP exploit chain worked, plainly

The Quiz tab card lived in local state: `picked`, `submitted`. The guard `if (submitted) return;` is correct *for that mount of the component*. But:

1. User picks an option in QuizTab. XP awarded.
2. User clicks Concepts tab. The QuizTab tree unmounts. State erased.
3. User clicks back to Quiz. New mount. `picked = null`, `submitted = false`.
4. User clicks the same option. XP awarded again.

Multiply by 5 quiz questions per domain × 15 domains × infinite tab clicks. Hence "unlimited".

Same shape for reflection (mount / unmount cycle on Concepts tab), and same shape for Review grade buttons (rapid clicks before next card mounts).

The fix moves the "is this answered already?" memory from React component state into the persisted global store, so unmounting can never reset it. Two new fields: `quizSeen[]`, `reflectionSeen[]`. No migration headache — both optional with `??[]` defaults.
