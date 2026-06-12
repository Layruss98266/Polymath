# TODO-PERSONAS.md

Consolidated backlog from the 5 persona reports (`PERSONA-1-NOVICE.md` through `PERSONA-5-LD.md`). Items are deduplicated and ranked by impact × convergence (how many personas surfaced the same gap). Highest-impact first.

Status: as of round 16 dispatch.

---

## TIER S — converged P0s (3+ personas flagged)

### S1. Doubled `<h1>` on every concept page (a11y + SEO)
- Source: PERSONA-4 #1, also flagged by SME (semantic hierarchy)
- Where: `components/domain/DomainHeader.tsx:28` + `components/domain/ConceptDeepPage.tsx:95`
- Fix: change DomainHeader `<h1>` → `<h2>`. Single page h1 lives on the concept deep page itself.
- **Inline**

### S2. Mobile drawer pretends to be a dialog, isn't
- Source: PERSONA-4 #2
- Where: `components/TopBar.tsx:166-236`
- Fix: `useFocusTrap` + `aria-modal="true"` + focus the close button on open + restore focus to hamburger on close + Escape closes.
- **Inline**

### S3. Quiz misconception text silently inserted (the pedagogical core is invisible to SR users)
- Source: PERSONA-4 #3
- Where: `components/tabs/QuizTab.tsx:72-76` + `components/domain/ConceptDeepPage.tsx:220-224`
- Fix: wrap misconception `<p>` with `role="alert"`, OR `aria-describedby={misconception-id}` from the option button.
- **Inline**

### S4. 8 bare `<label>` elements in Settings / Onboarding / SaveLoad (no `htmlFor`/`id` pairs)
- Source: PERSONA-4 #4, also part of PERSONA-1 trust note
- Where: `components/SettingsView.tsx:164,181,191,214,220,240,251,264`; `components/Onboarding.tsx:125-130`; `components/domain/ConceptDeepPage.tsx:125-130, 175-182`
- Fix: real `<label htmlFor>` + matching `id`, OR `aria-labelledby` from visible prompt.
- **Inline**

### S5. Focus-visible only declared on `.btn`/`.chip` — every bare `<a>` invisible on focus
- Source: PERSONA-4 #6
- Where: `app/globals.css:51`
- Fix: add a global `a:focus-visible, [role="button"]:focus-visible, button:focus-visible, [tabindex]:focus-visible { outline: 2px solid var(--hue); outline-offset: 2px; border-radius: 4px; }` rule.
- **Inline**

### S6. Habit-loop diagram still mis-attributes Clear's 4-step as joint Duhigg + Clear
- Source: PERSONA-3 P0 (#1)
- Where: `data/domains/psychology.ts:30`
- Fix: re-render as TWO cycles (Duhigg 3-node + Clear 4-node) OR rename to "Habit loop (Clear, 2018; extends Duhigg 2012)" and drop the implication of joint authorship.
- **Agent A** (content)

### S7. ai_ml Training-vs-inference still cites GPT-5 as fact
- Source: PERSONA-3 P0 (training-vs-inference expert text)
- Where: `data/domains/ai_ml.ts` (training-vs-inference expert field)
- Fix: soften the speculative bit. Cite only released models (Claude 3.5/3.7, Gemini 2.0, GPT-4o/4.1).
- **Agent A** (content)

### S8. Confetti ignores user's `reducedMotionOverride`
- Source: PERSONA-4 #9
- Where: `lib/state.tsx:14-19` (`celebrate` function)
- Fix: read `document.documentElement.dataset.reduceMotion === "1"` and short-circuit before firing canvas-confetti.
- **Inline**

---

## TIER A — high-impact P0s (1-2 personas flagged, but very high ROI)

### A1. Hero search jargon — "FSRS spaced repetition" alienates first-time visitors
- Source: PERSONA-1 #1
- Where: `components/HubHero.tsx:73`
- Fix: replace `FSRS spaced repetition` with `Daily 5-min reviews` or `Remembers what you forget`. Keep technical term on `/about`.
- **Inline**

### A2. Onboarding first goal "Become hard to manipulate" reads paranoid
- Source: PERSONA-1 #2
- Where: `components/Onboarding.tsx:21`
- Fix: re-order goals. Lead with `Get my money in order` or `Think more clearly`. Rephrase "manipulation" goal to "Spot manipulation in ads and arguments".
- **Inline**

### A3. SessionPicker hidden behind ritual toggle + gated on `started ≥ 3`
- Source: PERSONA-2 P0-1
- Where: `components/HomeShell.tsx:93-106`
- Fix: surface SessionPicker above the fold for any returning user. Drop the `isActive` gate. Default to the 15-min preset visibly.
- **Inline**

### A4. SessionPicker 45-min preset routes to a domain with no scripted flow
- Source: PERSONA-2 P0-2
- Where: `components/SessionPicker.tsx:29`
- Fix: either build a real 45-min scripted flow (review → 1 new concept → 1 mission), OR remove the 45-min option. No dead UI.
- **Inline (remove if no time to script)**

### A5. 15-min preset advertises "+ one new concept" but only caps FSRS cards
- Source: PERSONA-2 P0-3
- Where: `components/ReviewSession.tsx:29-60`
- Fix: after the FSRS pool drains, route to the next unseen concept in the most-touched started domain.
- **Inline**

### A6. ConceptOfTheDay "Continue" doesn't deep-link to specific concept on home
- Source: PERSONA-2 P0-5 (separate from earlier ConceptOfTheDay fix)
- Where: `components/HomeShell.tsx` returning-user state + `ContinueLearning` component
- Fix: persist `lastConceptByDomain` and deep-link `/domain/<id>/concepts/<n>`.
- **Inline**

### A7. Hero CTA missing — Priya doesn't know what to click
- Source: PERSONA-1 #3
- Where: `components/HubHero.tsx:34`
- Fix: add a single primary CTA button: `Take the 60-second goal quiz` that opens Onboarding even after the auto-modal was dismissed.
- **Inline**

### A8. Catalogue hidden behind "Browse all 15 domains" CTA — wrong for a directory hub
- Source: PERSONA-1 #4
- Where: `components/HomeShell.tsx:74-85`
- Fix: show the 15-tile grid by default (collapsed/compact). Keep StartHereBento above it. Gate is the wrong call for a learning catalogue.
- **Inline**

### A9. Mission XP economy honour-system; no commit-by date, no follow-up resurface
- Source: PERSONA-2 P0-4
- Where: `components/tabs/MissionsTab.tsx`, `lib/state.tsx`
- Fix: add `commitBy?: string` and `outcomeNote?: string` to mission state. Resurface as a "did you do it?" prompt at commit-by date in Review.
- **Deferred (multi-day; not in this round)**

---

## TIER B — content polish (single persona, high credibility ROI)

### B1. Negotiation + Communication concept enrichment finish-line
- Source: PERSONA-2 P0-6
- Where: `data/domains/negotiation.ts`, `data/domains/communication.ts`
- Fix: not every concept in these two domains has `definition` + `generic` + `expert` + `conceptQuiz` + `conceptTasks`. Audit and enrich the gaps.
- **Agent B**

### B2. Status badge precision pass
- Source: PERSONA-3 P1 items (System 1 vs 2 → `framework`, Mehrabian counterView fix, BLUF settled, NVC debated, multiple psychology nuance adds)
- Where: `data/domains/psychology.ts`, `data/domains/communication.ts`, `data/domains/marketing.ts`, `data/domains/mental_models.ts`
- Fix: ~10 surgical status / citation tweaks per PERSONA-3-SME findings.
- **Agent C**

### B3. Citations: name papers + years where currently bare
- Source: PERSONA-3 P0 (Flow Dietrich 2003, Pay-yourself-first Strotz 1955, Bystander Manning et al 2007, OSC 2015 in counterView)
- Where: psychology + personal_finance + a few others
- Fix: add year + journal stubs where currently bare-name.
- **Agent C** (bundled with B2)

### B4. Negativity bias / Gottman 5:1 ratio over-stated
- Source: PERSONA-3 P0
- Where: `data/domains/psychology.ts:876`
- Fix: flag debated; add the precise scope (conflict episodes only, not all interactions); cite Heyman & Slep / Stanley & Markman critiques.
- **Agent C** (bundled with B2)

### B5. Marketing Social Proof needs DellaVigna & Linos 2022 nudge-RCT caveat
- Source: PERSONA-3 P0
- Where: `data/domains/marketing.ts:225`
- Fix: either downgrade to `debated`, or keep `settled` + add the one-line nudge-RCT-meta caveat.
- **Agent C** (bundled with B2)

### B6. Basics paragraphs too long for phone — 250+ words wall of text
- Source: PERSONA-1 #11
- Where: every `data/domains/*.ts` basics field
- Fix: cap basics at ~80 words. Move the rest to a new optional `deepBasics?: string` field that renders below a "Read more" toggle on BasicsTab.
- **Agent D**

---

## TIER C — UX polish (single persona)

### C1. Status badges have no legend or tooltip for first-time users
- Source: PERSONA-1 #17
- Where: `components/StatusBadge.tsx` (or where it's defined), BasicsTab
- Fix: tooltip on first hover or one-line legend on BasicsTab. "Framework = a useful lens, not a fact."
- **Inline**

### C2. `quickJump` array hard-coded English — no India language cue
- Source: PERSONA-1 #10
- Where: `components/HubHero.tsx:20`
- Fix: 4-word sub-tagline under each chip. "Mental Models — how smart people think" etc.
- **Inline**

### C3. HomeStats messaging shifts away from "411 quotes" brag
- Source: PERSONA-1 #12 (the persona disagrees with the round-15 stats card I just shipped)
- Where: `components/HomeStats.tsx`
- Fix: replace `daily quotes` stat with `Works offline`. Add `5 missions per domain` and `Status badges on every claim` as utility brags.
- **Inline**

### C4. TrustStrip needs verifiability — link the repo for "no analytics" claim
- Source: PERSONA-1 #9
- Where: `components/TrustStrip.tsx`
- Fix: add `Open-source, MIT licensed. Verify our code on GitHub.` with link.
- **Inline**

### C5. India context unsurfaced on home (only visible after opening Personal Finance)
- Source: PERSONA-1 #15
- Where: TrustStrip
- Fix: add a tiny "Made for India context — finance, law, health localised" line.
- **Inline**

### C6. Domain rank labels (Practitioner / Master / Grandmaster) sound chess-club gamey
- Source: PERSONA-1 #7
- Where: `lib/xp.ts:50-52`
- Fix: leave as-is for now (subjective). Optional: provide a setting to switch to `Comfortable / Confident / Fluent / Teacher` labels.
- **Deferred**

### C7. Coachmarks: 5-step tour is too long
- Source: PERSONA-1 #16
- Where: `components/Coachmarks.tsx:13-17`
- Fix: cut to 2 steps. Domains menu + `?` shortcuts. Rest is discoverable.
- **Inline**

### C8. Calibration score shows zero context for low-n
- Source: PERSONA-2 P1-9, PERSONA-1 #20
- Where: `components/Dashboard.tsx`
- Fix: show `n`. "Calibration: 53/100 (n=4 quizzes). Comes online at n≥20."
- **Inline**

### C9. Dashboard radar replace with "what to fix next" panel
- Source: PERSONA-2 P1-2
- Where: `components/Dashboard.tsx:203`
- Fix: build a "weakest 3 concepts + most-due card + oldest unfinished mission" panel. Demote radar to a secondary tab/toggle.
- **Deferred (significant lift; not this round)**

### C10. FocusTimer doesn't persist
- Source: PERSONA-2 P1-3
- Where: `components/FocusTimer.tsx:15`
- Fix: persist `focusedSecondsByDay` in store (same shape as `xpByDay`).
- **Inline**

---

## TIER D — a11y polish (PERSONA-4 P1/P2 items)

### D1. Dashboard radar: per-vertex labels + textual fallback list
### D2. StreakHeatmap: wrap in `role="img"` + summary `aria-label`; mark cells `aria-hidden`
### D3. Review flip card: add `aria-pressed={flipped}` + live-region "Answer revealed, grade options available"
### D4. SaveLoadModal + Settings restore: `role="alert"` on error `<p>`
### D5. Coachmarks: drop `role="dialog"` (it isn't one) → `role="region" aria-label="Quick tour"`
### D6. PracticeMenu + TopBar More dropdown: APG arrow-key navigation
### D7. BottomNav `aria-label="Mobile primary"` to disambiguate from TopBar
### D8. Calibration + mastery progress bars: `role="progressbar"` + `aria-valuenow`
### D9. Light-theme white-on-`--hue` badges: switch to `color: #0b0d1a`
### D10. `<main id="main" tabIndex={-1}>` so skip link moves focus reliably
### D11. `.btn:hover transform` move into `prefers-reduced-motion: no-preference` block
- All in `components/Dashboard.tsx`, `components/StreakHeatmap.tsx`, `components/ReviewSession.tsx`, `components/TopBar.tsx`, `components/BottomNav.tsx`, `components/Coachmarks.tsx`, `components/PracticeMenu.tsx`, `app/layout.tsx`, `app/globals.css`
- **Agent E** (a11y batch)

---

## TIER E — enterprise gaps (PERSONA-5; mostly deferred to roadmap)

Vikram's list is a roadmap, not a sprint. None ship this round; document for future scoping:

- SCORM 1.2 export per domain (single zip + manifest + iframe + cmi hooks)
- xAPI statements posted to a configurable LRS
- LTI 1.3 connector
- PDF completion certificate per domain rank
- Cohort console (`enterprise.polymath.app` separate SKU)
- Real Privacy Policy + DPA + DPO contact (DPDPA Significant Data Fiduciary obligation)
- POSH 2013 module (workplace_safety domain)
- Agile/Scrum/SAFe `delivery_methods` domain
- DPDPA-as-a-workshop module + ISO 27001 + anti-bribery + AML compliance
- Custom domain (polymath.in)
- Encrypted-short share IDs for enterprise SKU
- Public cohort-recap page (opt-in)
- Facilitator mode (speaker notes, timer per concept, printable facilitator guide)
- Indian mentors per relevant domain (Bagchi, Pattanaik, Gopalakrishnan)
- Move repo under `polymath-edu` org
- Workshop packs (PDF handout + role-plays + facilitator script)
- B2B-safe tone variant for finance + insurance commentary
- Domain version + content hash + `?pin=hash` for cohort lock-in
- `/changes.rss` per-concept update feed

All tracked here for the round-17 scoping conversation. None ship in round 16.

---

## Round-16 execution order

1. **Inline**: S1-S5, S8, A1-A3, A5-A8, C1-C5, C7, C8, C10. ~20 small surgical edits.
2. **Agent A** (content / citations): S6 + S7 — Habit-loop diagram fix + ai_ml expert paragraph softening.
3. **Agent B** (content / enrichment): B1 — finish negotiation + communication enrichment gaps.
4. **Agent C** (content / status badges + citations): B2 + B3 + B4 + B5 — ~12 surgical status/citation tweaks across psychology + mental_models + marketing + communication.
5. **Agent D** (content / basics shortening): B6 — cap basics fields at ~80 words; add optional `deepBasics?: string` for the rest.
6. **Agent E** (a11y batch): D1-D11 — radar labels, heatmap role=img, flip card aria-pressed, progressbar roles, dropdown APG, white-on-hue badges, etc.

After ship, dispatch 3 review agents to verify the round-16 work hasn't regressed earlier wins.
