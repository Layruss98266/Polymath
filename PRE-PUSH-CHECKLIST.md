# Pre-Push Checklist

Run every item before `git push`. No exceptions.

---

## 1. Type check

```bash
npx tsc --noEmit
```

Must exit 0 with no output. Fix every error before proceeding.

---

## 2. Production build

```bash
npx next build
```

Must show `Compiled successfully` and complete all static pages with no export errors.
Watch for `TypeError` during prerender -- these mean a page is accessing undefined data at build time.

Common traps:
- New domain files with wrong diagram data format (`axes`/`points` instead of `xAxis`/`yAxis`/`items`)
- New domains registered in DOMAIN_INDEX but missing required fields (basics, concepts, quiz, flashcards, missions, roadmap, resources, glossary, diagrams, synthesis, cheatsheet, capabilities, counterView)
- Empty arrays where the renderer expects at least one item

---

## 3. Lock file sync

```bash
npm install
git diff --stat package-lock.json
```

If `package-lock.json` changed, stage and include it in the commit.
CI uses `npm ci` which fails if lockfile is out of sync with package.json.

---

## 4. No secrets or env vars

```bash
git diff --cached | grep -Ei "(api_key|secret|token|password|sk-|ghp_|AKIA)"
```

Must return nothing. Abort and remove if anything found.

---

## 5. No debug debris

```bash
git diff --cached | grep -E "console\.(log|warn|error)|debugger"
```

Review any hits. Remove before committing.

---

## 6. No em-dashes or en-dashes

```bash
git diff --cached | grep -P "[–—]"
```

Must return nothing. Use commas or periods instead.

---

## 7. New domain files: schema compliance

For every new `data/domains/*.ts` file:

- `basics` under 80 words (overflow to `deepBasics`)
- Every concept has `status`: `settled` or `debated` or `framework`
- Every concept with `conceptQuiz` also has `conceptTasks` (pair invariant)
- Every concept with `generic` also has `expert` (pair invariant)
- No invented URLs (`url: ""` + `verify: true` for unknowns)
- No em-dashes or en-dashes anywhere in content
- India context where relevant (finance, law, health, nutrition)
- Domain registered in `data/domains.ts` DOMAIN_INDEX
- Diagram `kind: "quadrant"` uses `xAxis`/`yAxis`/`items` not `axes`/`points`

---

## 8. Commit message format

```
type(scope): short summary

Body explaining what and why. No em-dashes.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`

---

## 9. A11y regressions

For any PR touching components:

- No `role="dialog"` on elements that are not real dialogs (use `role="region"` for tours/coachmarks)
- Every `<label>` has `htmlFor` wired to a matching `id`, or wraps its control
- Every progress bar has `role="progressbar"` + `aria-valuenow/min/max`
- Every image/chart has `role="img"` + `aria-label`
- All interactive elements have visible `:focus-visible` ring
- `aria-modal="true"` on real dialog overlays with `useFocusTrap`
- No `<h1>` on DomainHeader (it is `<h2>`; only ConceptDeepPage gets `<h1>`)
- Confetti and motion: check `prefers-reduced-motion` and `data-reduceMotion` override

---

## 10. Light and dark theme parity

- No hardcoded `#fff`, `#000`, `#0b0d1a` outside of token definitions
- Use `var(--ink)`, `var(--dim)`, `var(--panel)`, `var(--bg)`, `var(--hue)`, `var(--line)`
- Test mentally in both themes, especially badges and progress bars

---

## 11. Anti-XP-farm

Every new XP-granting action must persist to a `seen` set:
- Quiz questions: `quizSeen`
- Reflections: `reflectionSeen`
- Flashcard graduations: `graduatedCards`

Local component state is not enough. Verify via `lib/state.tsx`.

---

## Quick CI check (after push)

Watch `.github/workflows/ci.yml` run. It runs:
1. `npm ci` (lockfile sync)
2. `npx tsc --noEmit`
3. `npx next build`
4. `npx vitest run`

If CI fails, fix and push a follow-up commit. Do not leave CI broken.
