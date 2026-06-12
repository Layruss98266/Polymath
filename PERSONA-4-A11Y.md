# PERSONA-4-A11Y — Manish (NVDA + JAWS + VoiceOver, senior FE)

Walking every primary surface with screen reader on, keyboard only, reduced motion ON. Reviewed markup directly. Verdicts strictly against WCAG 2.2 AA + ARIA APG. No code modified.

## Summary

Polymath ships a lot of the *right* primitives — `<main>` landmark + skip link, `RouteAnnouncer`, `useFocusTrap` for a couple of modals, role="img" + `<title>/<desc>` on every diagram kind, reduced-motion CSS gating, theme tokens with a darker `--hue` in light mode for AA contrast, font-scale + dyslexic-font + motion override controls in settings. That much is genuinely above average for an indie learning app and I will say so.

But the floor is uneven. Several surfaces I would publish about:

- **Two `<h1>` on every concept page** (DomainHeader + ConceptDeepPage) — and the deep nav title is buried under the domain title, so screen reader users lose the "where am I in the document" anchor. This recurs on `/review`, `/dashboard`, and `/search` too: the page-level h1 is fine *because* there's no DomainHeader, but on `/domain/[id]/concepts/0` the doubled h1 is a real failure of WCAG 1.3.1.
- **TopBar mobile drawer pretends to be a dialog but isn't one**: `role="dialog"` with no `aria-modal`, no focus trap, no focus restore, no initial focus. Tab order falls through into the page behind the dim overlay. On a phone with VoiceOver this is the difference between "this app respects me" and "I'm shouting at a wall."
- **Quiz misconception text is not announced**. Visually, picking a wrong answer reveals a one-line red explanation that says *why* you were wrong. With NVDA it's silently inserted into the DOM — no `aria-live`, no `role="alert"`, no `aria-describedby` from the option. The single most pedagogically important moment in this product is screen-reader-invisible.
- **Form labels in Settings, Onboarding's Predict textarea, and SaveLoadModal use bare `<label>` with no `htmlFor` / no `id` on the input**. They render as visible text but are not programmatically associated. Save code, restore code, JSON upload, paste-code, public share link — all of them. Hard 1.3.1 / 3.3.2 fail.
- **Focus-visible only covers `.btn` and `.chip`**. Every `<Link>` rendered as a bare `<a>` (TopBar NAV, MegaMenu domain rows, PracticeMenu rows, breadcrumbs, BottomNav, Footer columns, in-content "open" links) inherits the browser default. Combined with the dark theme's near-black bg, the default Chrome focus ring is barely visible; in dark theme + Safari macOS the default ring effectively disappears against `#0b0d1a`. WCAG 2.4.7 fail across most clickable surfaces.
- **The "card" in /review is a `<article role="button" tabIndex=0>` with click+keydown** — fine — but `aria-pressed`/`aria-expanded` is missing for the flipped state, and the grade buttons (Again/Hard/Good/Easy) appear *after* flip with no live-region announcement that they're now available. Keyboard users press space, hear nothing, then have to discover the grading row via Tab.
- **The Diagram component** does a good job — `role="img"`, `<title>/<desc>`, focusable `<g>` per data point with aria-label. This is genuinely the strongest a11y surface in the app. **But the Dashboard radar `<svg>`** is a separate implementation that only labels the *whole* svg as "Mastery radar" — none of the 15 vertices are individually accessible, no textual fallback list of `{domain: pct}`. Same data is in the "Per-domain mastery" ranks section right below, so it's recoverable, but the chart itself is fully invisible to me.
- **StreakHeatmap**: 365 `<span>`s each with `aria-label="YYYY-MM-DD: N XP"` but they are not focusable, not in a list, not wrapped in `role="img"` with a single summary label. NVDA announces 365 spans on the dashboard page, one at a time, on virtual-cursor sweep. This is worse than no labels at all.
- **Coachmarks dialog** has `role="dialog"` but no `aria-modal`, no focus management, no Escape handler.

Tone summary for the blog post I would write: Polymath is *almost* the rare edtech app I can hold up as the good example. The author clearly thought about reduced motion, theme contrast, and a skip link. But the doubled h1, drawer-without-trap, unlabelled inputs, and silent quiz misconception are the kind of things a single afternoon's audit would have caught. The harm scales to every blind student who lands on it.

## P0 / P1 / P2 table

| # | Sev | Location | Problem | Fix |
|---|---|---|---|---|
| 1 | **P0** | `components/domain/DomainHeader.tsx:28` + `components/domain/ConceptDeepPage.tsx:95` | Two `<h1>` on `/domain/[id]/concepts/[idx]`. Repeats on every concept page. Violates WCAG 1.3.1 and breaks screen reader heading nav. | DomainHeader should use `<h2>` (or `<p class="font-display">` if not a heading); keep ConceptDeepPage's `<h1>{concept.t}</h1>` as the single page h1. Same fix for `/domain/[id]` BasicsTab pages — pick one. |
| 2 | **P0** | `components/TopBar.tsx:166-236` | Mobile drawer: `role="dialog"` with no `aria-modal="true"`, no focus trap, no focus restore on close, no initial focus on the dialog. Tab leaves the dialog and lands in the dimmed page behind. | Wrap with `useFocusTrap`, add `aria-modal="true"`, focus the close button on open, return focus to the hamburger on close. |
| 3 | **P0** | `components/tabs/QuizTab.tsx:72-76` and `components/domain/ConceptDeepPage.tsx:220-224` | Misconception explanation after wrong answer is silently inserted. No `aria-live`, no `role="alert"`, no `aria-describedby`. Core pedagogical moment is invisible to SR users. | Wrap the misconception `<p>` in `role="alert"` (or `aria-live="assertive"` region updated on submit), or set `aria-describedby={misconception-id}` on the option button so NVDA reads it after the option name. |
| 4 | **P0** | `components/SettingsView.tsx:164,181,191,214,220,240,251,264` | Eight `<label>` elements with text but no `htmlFor`; corresponding inputs have no `id` and no `aria-labelledby`. 1.3.1 / 3.3.2 fail across save code, restore, share link, JSON, CSV, dyslexic font. | Add `htmlFor`/`id` pairs, or wrap input *inside* label, or use `aria-label` on the input. |
| 5 | **P0** | `components/Onboarding.tsx:125-130` and `components/domain/ConceptDeepPage.tsx:125-130, 175-182` | Predict and Reflect textareas: `aria-label` is present but the *visible* prompt above is not programmatically connected — a sighted/keyboard user sees one label, a SR user hears another. Predict textarea has no associated visible label at all in ConceptDeepPage. | Use real `<label htmlFor>`, or `aria-labelledby` pointing at the visible prompt id. |
| 6 | **P0** | `app/globals.css:51` | `:focus-visible` outline only declared for `.btn` and `.chip`. Bare `<a>` (every Link in TopBar NAV, MegaMenu rows, PracticeMenu rows, breadcrumbs, BottomNav, Footer columns) has no visible focus indicator. 2.4.7 fail. | Add `a:focus-visible, [role="button"]:focus-visible, button:focus-visible, [tabindex]:focus-visible { outline: 2px solid var(--hue); outline-offset: 2px; border-radius: 4px; }` to globals.css. |
| 7 | **P1** | `components/Dashboard.tsx:203-237` | Radar `<svg role="img" aria-label="Mastery radar">` has no per-vertex labels and no textual fallback. 15 data points completely invisible. | Per-point `<g tabIndex={0} aria-label="{name}: {pct}%">` like Diagram.tsx already does; or add a visually-hidden `<ul>` reading "name: pct" for each point. |
| 8 | **P1** | `components/StreakHeatmap.tsx:78-87` | 365 `<span aria-label>` on a non-focusable, non-list element. SR users get a 365-span spam on virtual cursor traversal. | Wrap in `role="img"` with `aria-label="Activity heatmap: ${active} active days, ${total} XP"`, mark cells `aria-hidden="true"`; keep the textual summary below. Optionally provide a `<details>` with a textual table. |
| 9 | **P1** | `lib/state.tsx:14-19` (`celebrate`) | Confetti only checks `prefers-reduced-motion`, ignores the user's explicit `reducedMotionOverride` setting. User says "reduce motion" in Settings, still gets confetti. | Read `document.documentElement.dataset.reduceMotion === "1"` (or pass the store value) and short-circuit. |
| 10 | **P1** | `components/ReviewSession.tsx:229-250` | Flip card is `role="button" tabIndex=0` but missing `aria-pressed={flipped}` (or `aria-expanded`). Grade buttons appear after flip with no live-region announcement that "Answer revealed, grade options now available." | Add `aria-pressed={flipped}` to the card; add `aria-live="polite"` to the grading-row container or a sibling `<div role="status" class="sr-only">` that says "Answer shown. Choose Again, Hard, Good, or Easy." |
| 11 | **P1** | `components/TopBar.tsx:257` (SaveLoadModal) and `components/SettingsView.tsx:266` | `err` message renders as plain `<p>` after a failed import. No `role="alert"`, no `aria-live="assertive"`. User pastes bad code, nothing announced. 3.3.1 fail. | `role="alert"` on the err `<p>`. |
| 12 | **P1** | `components/Coachmarks.tsx:52` | `role="dialog"` with no `aria-modal`, no focus management, no Esc handler, focus does not move into the panel on open. | Add `aria-modal="true"`, focus the Next button on open, Esc closes, restore focus to the page on close. Or downgrade to `role="region" aria-label="Quick tour"` and stop calling it a dialog. |
| 13 | **P1** | `components/PracticeMenu.tsx` | Same `role="menu"` pattern as MegaMenu but no focus trap, no first-item focus on open, no arrow-key navigation between menuitems. APG menu pattern violation. | Either implement APG menu (Arrow keys, Home/End, type-ahead) or drop `role="menu"`/`menuitem` and call it a popover with links. |
| 14 | **P1** | `components/TopBar.tsx:126-145` | "More options" dropdown `role="menu"` with `role="menuitem"` children but no arrow-key navigation, no focus management. Same as above. | Same fix. |
| 15 | **P1** | `app/layout.tsx:114` | `<Footer>` is rendered as a `<footer>` but `<BottomNav>` is also `<nav aria-label="Primary">` *and* TopBar contains `<nav aria-label="Primary">` — two landmarks with identical accessible name. AT lists "Primary navigation" twice. | Rename BottomNav `aria-label="Mobile primary"` (or just "Mobile") to distinguish. |
| 16 | **P1** | `components/HubHero.tsx:51` | `<input type="search">` exposes the visible "Quick jump" pills as a `<ul>` of links *outside* the form's search role, so SR users get a search landmark with no listbox. Acceptable, but no combobox semantics despite the obvious combobox shape. | Either drop the `role="search"` and present pills as filter tags (clearer), or wire as combobox with the catalogue grid as listbox. |
| 17 | **P1** | `components/Dashboard.tsx:217` | Calibration progress bar is a plain `<div>` with width %; no `role="progressbar"`, no `aria-valuenow`, no `aria-valuemax`. | `role="progressbar" aria-valuenow={calib} aria-valuemin={0} aria-valuemax={100} aria-label="Calibration score"`. |
| 18 | **P1** | `components/domain/DomainHeader.tsx:41-43` | Mastery bar same issue: no `progressbar` role. | Same fix. |
| 19 | **P2** | `components/CommandPalette.tsx:107` | `aria-expanded="true"` hard-coded as string; should be boolean to match attribute conventions. Minor — works in current AT, but brittle. | `aria-expanded={true}`. |
| 20 | **P2** | `components/BottomNav.tsx:33` | `<nav aria-label="Primary">` duplicates TopBar's primary nav label. See item 15. | Same fix. |
| 21 | **P2** | `app/globals.css:46` | `.btn:hover { transform: translateY(-1px) }` not gated on reduced motion (only the heavier `.lift` is). Minor jitter for vestibular users. | Move into `@media (prefers-reduced-motion: no-preference)` block, mirror the `.lift` rule. |
| 22 | **P2** | Light theme `var(--hue)` `#d94a3d` + `color: "#fff"` badges (e.g. due-count badge `TopBar.tsx:191`, BottomNav badge) | Contrast ~4.0:1 on 10–12px small text — fails AA non-large text (4.5:1). | Use `color: "#0b0d1a"` on hue background (already used elsewhere) instead of `#fff`. |
| 23 | **P2** | `components/MegaMenu.tsx:201-216` | Domain link `<span aria-hidden>{d.icon}</span>` is fine; but the link's accessible name is just the domain name with no indication of "started" status that the orange left border conveys visually. | Append "started" to the accessible name when `touched`, e.g. `aria-label="{name}, started"`. |
| 24 | **P2** | `components/SearchView.tsx:24` | `<mark>` used for highlight — good; but the highlight is purely visual, not announced. Acceptable, but consider `<span aria-label="match">…</span>` for first match per result. Low priority. | Optional. |
| 25 | **P2** | `app/layout.tsx:101` | Skip link target is `#main` which exists. Works. But the link has no `aria-label`, relies on visible text — fine. After activation, `<main id="main">` is not `tabindex="-1"`, so focus does not actually move to main on some browsers. | Add `tabIndex={-1}` to `<main id="main">` to guarantee focus moves there cross-browser. |

## WCAG 2.2 AA verdict, criterion-by-criterion

| Criterion | Verdict | Note |
|---|---|---|
| 1.1.1 Non-text content | PASS | Icons consistently have aria-hidden or accompanying text; lucide icons inside labelled buttons inherit correctly. |
| 1.3.1 Info and relationships | **FAIL** | Doubled h1 on domain/concept pages; bare labels in Settings/Onboarding/SaveLoad not associated with inputs; calibration & mastery bars have no progressbar semantics; StreakHeatmap not a list/img. |
| 1.3.2 Meaningful sequence | PASS | DOM order matches visual order; no reordering via CSS that breaks SR flow. |
| 1.3.3 Sensory characteristics | PASS | No "click the red button" prompts; status uses both color + chip label. |
| 1.3.4 Orientation | PASS | Layout reflows. |
| 1.3.5 Identify input purpose | PARTIAL | Search inputs use type="search", but Settings inputs lack `autocomplete` hints (acceptable for non-PII). |
| 1.4.1 Use of color | PASS | Quiz right/wrong uses border-color + icon (BadgeCheck/AlertCircle), not color alone. |
| 1.4.3 Contrast minimum | PARTIAL | Body text PASS in both themes. Light-theme white badges on `--hue` ≈ 4.0:1 — FAIL for small text. |
| 1.4.4 Resize text | PASS | Settings provides 0.9/1.0/1.1/1.25 font scale; rem-based. |
| 1.4.5 Images of text | PASS | No images of text. |
| 1.4.10 Reflow | PASS | Reflows to 320px; horizontal scroll only on intentional rails marked `no-scrollbar`. |
| 1.4.11 Non-text contrast | PARTIAL | Button borders use `--line` rgba(255,255,255,0.08) — ~1.5:1 against `--panel`. UI component borders fail 3:1. |
| 1.4.12 Text spacing | PASS | No fixed line-height that breaks at 1.5. |
| 1.4.13 Content on hover/focus | PARTIAL | MegaMenu hover-bridge exists but Escape works; PracticeMenu has no Escape (just outside-click). |
| 2.1.1 Keyboard | PARTIAL | All primary surfaces reachable. Review card flip works via Space/Enter. But MegaMenu+PracticeMenu menus don't support arrow-key APG navigation despite `role="menu"`. |
| 2.1.2 No keyboard trap | PASS | Modals can be exited via Esc or close button. |
| 2.1.4 Character key shortcuts | PARTIAL | `?` opens shortcuts, `/` jumps to search, G+H/G+R chord — but no way to disable. Risk for voice-input users typing into a text field that then loses focus. Mitigated by check `if (target?.isContentEditable)` in ReviewSession, but global `KeyboardShortcuts` needs verification. |
| 2.4.1 Bypass blocks | PASS | Skip link present + `<main id="main">`. (Add tabindex=-1 to main, see item 25.) |
| 2.4.2 Page titled | PASS | Next.js metadata templates. |
| 2.4.3 Focus order | PARTIAL | Mobile drawer breaks order. Modals otherwise OK. |
| 2.4.4 Link purpose | PASS | All links have meaningful text. |
| 2.4.6 Headings and labels | **FAIL** | See 1.3.1 — doubled h1. |
| 2.4.7 Focus visible | **FAIL** | Only .btn/.chip have focus-visible style. |
| 2.4.11 Focus not obscured (2.2 new) | PASS | No sticky elements obscure focus targets after scroll. |
| 2.4.12 Focus appearance (2.2 best practice AAA) | FAIL | Only thin 2px outline on btn/chip. |
| 2.5.1 Pointer gestures | PASS | No multi-pointer required. |
| 2.5.7 Dragging movements (2.2 new) | PASS | No drag-required UI. |
| 2.5.8 Target size minimum (2.2 new) | PARTIAL | BottomNav targets 5-column grid on mobile, each ~76px wide × 44px tall — passes 24×24. But chip-sized close buttons (`btn !p-2`) compute to ~28×28 — borderline. |
| 3.1.1 Language of page | PASS | `<html lang="en">`. |
| 3.2.1 On focus | PASS | No focus-triggered context changes. |
| 3.2.2 On input | PASS | Inputs filter live, no surprise navigation. |
| 3.2.6 Consistent help (2.2 new) | PASS | Footer "About" link consistent on every page. |
| 3.3.1 Error identification | **FAIL** | SaveLoadModal and Settings restore errors are visual-only `<p>`, not announced. |
| 3.3.2 Labels or instructions | **FAIL** | See item 4. |
| 3.3.7 Redundant entry (2.2 new) | PASS | No re-entry of data required. |
| 3.3.8 Accessible authentication (2.2 new) | N/A | No authentication. |
| 4.1.2 Name, role, value | PARTIAL | Flip card lacks aria-pressed. Calibration/mastery bars lack progressbar. |
| 4.1.3 Status messages | **FAIL** | Quiz misconception, restore-error, "Answer revealed" not announced. |

## Top 10 fixes ranked by harm-prevented per effort

1. **Add a global `:focus-visible` ring (item 6).** 4 lines in globals.css. Fixes 2.4.7 across the entire app. Highest ROI on this list.
2. **Fix doubled h1 (item 1).** Change DomainHeader's `<h1>` to `<h2>`. One line. Restores heading-nav across `/domain/*/concepts/*`.
3. **Wire `htmlFor`/`id` on Settings labels (item 4).** ~16 attribute additions. Closes 3.3.2 for the surface most likely to be visited by power users (which Manish absolutely is — he migrates progress between machines).
4. **Add `role="alert"` to quiz misconception text (item 3).** Two spans. Saves the single most pedagogically important UX moment for SR users. This is the one I would lead the blog post with.
5. **Drawer focus trap + aria-modal (item 2).** Already have `useFocusTrap` — just call it. Restores mobile-first parity for SR users.
6. **`role="alert"` on Settings/SaveLoad error `<p>` (item 11).** Two attributes. Closes 3.3.1.
7. **`aria-pressed` on flip card + live announcement of grade options (item 10).** Three lines. Makes /review actually usable with NVDA.
8. **`role="progressbar"` with valuenow/min/max on mastery + calibration bars (items 17, 18).** Four attributes. Closes 4.1.2 for the data-density screens.
9. **Wrap StreakHeatmap in `role="img"` with single summary label; mark cells aria-hidden (item 8).** Two attributes + 365 aria-hidden additions (or just hide via parent role="img"). Eliminates the worst SR experience in the app.
10. **Honor `reducedMotionOverride` in `celebrate()` (item 9).** Five lines. Confetti shouldn't fire when the user explicitly asked for no motion — this is a respect-the-setting bug, and Manish would dunk on it specifically.

Bonus pass each takes minutes; pass 1–4 alone would flip my verdict from "I would publish a post" to "I would write a positive case study."
