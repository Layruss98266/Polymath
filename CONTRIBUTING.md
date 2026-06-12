# Contributing to Polymath

This file is for humans. For AI assistants, read `AGENTS.md` first; it's stricter and more current.

## Quick start

```bash
git clone https://github.com/Layruss98266/Polymath.git
cd Polymath
npm install
npm run dev          # http://localhost:3000
```

Verify before opening a PR:

```bash
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
npm run test         # vitest
npm run build        # SSG. Zod fails on schema drift.
```

CI runs all four on every PR.

## What to contribute

### Content (easiest)

- **Add a missing concept** to any of the 15 domains. Open `data/domains/<id>.ts`, append before the closing `]` of `concepts`. Required fields: `t`, `subdomain`, `definition`, `short`, `deep`, `generic`, `expert`, `status`, `reflect`, `conceptQuiz` (≥1 question, 4 options each with exactly one `correct: true`), `conceptTasks` (3 tiers: basic, easy, advanced). Half-enriched concepts will fail the Zod build (`generic` + `expert` come together; `conceptQuiz` + `conceptTasks` come together).
- **Fix a stale URL** in `resources.free` or `resources.paid`. Update `url`, set `lastVerified: "YYYY-MM"`, and flip `verify: false`. Do not invent URLs. If you cannot verify a real one, leave `url: ""` and `verify: true`.
- **Tighten a status badge** when a claim is contested in the field. Flip `settled` to `debated`, add the citation to `expert`.
- **Translate a concept** into clearer language for a 15-year-old reader. Keep the existing `t`, `short`, `deep` if they work; rewrite `generic` first.

### Code

- **Bug fix.** Reproduce, fix, add a vitest test that fails without the fix.
- **New feature.** Open an issue describing the use case first.
- **A11y improvement.** Always welcome. Cite the WCAG criterion in the PR.

## The hard rules (project laws)

These come from the spec and are enforced by code review + CI. See `AGENTS.md` for the full set. Highlights:

1. **No em-dashes (`—`) or en-dashes (`–`).** Commas or periods. CI does not check this yet but reviewers will.
2. **No hallucinated URLs.** Unknown → `url: ""`, `verify: true`.
3. **India default.** Finance, law, health, nutrition lean on Indian regulators (RBI, SEBI, IRDAI), instruments (PPF, NPS, ELSS), and codes (BNS 2024 + BNSS 2024 + BSA 2024 replacing IPC + CrPC + Evidence Act).
4. **No backend.** No fetches off-origin. CSP forbids it.
5. **No analytics or trackers.** The privacy claim on `/about` is load-bearing.
6. **Status badges on every concept.** Settled / debated / framework.
7. **Anti-XP-farm.** Every new XP-granting action dedupes against persisted state (`quizSeen`, `reflectionSeen`, `graduatedCards`). Local React state is not enough.
8. **Enrichment pair invariant.** `conceptQuiz` ↔ `conceptTasks`. `generic` ↔ `expert`. Either both or neither.

## Commit style

Conventional Commits. Subject ≤ 50 chars. Body explains the *why*. Example:

```
fix(state): persist graduatedCards to dedupe FSRS-review XP

The previous check used in-memory prev-state which re-fired on
state-2 re-entry (Relearning → Review). Persisting the cardKey set
guarantees once-per-card XP.
```

When an AI assistant ships a commit, add:

```
Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

## Pull-request checklist

- [ ] `npm run typecheck` passes
- [ ] `npm run test` passes
- [ ] `npm run build` passes (SSG fans out every concept; schema errors surface here)
- [ ] No em-dashes / en-dashes added (grep your diff for `—` and `–`)
- [ ] Any new XP-granting action has a persisted dedupe guard
- [ ] Any new route uses `tabPath()` / `conceptPath()` / `subdomainPath()` from `lib/tabs.ts`, not a hard-coded path
- [ ] Any new resource URL is real and verified, or marked `verify: true` with `url: ""`
- [ ] Updated `AUDIT.md` and `TODO.md` if the change moves the needle on a tracked item

## Reporting issues

Open a GitHub issue at https://github.com/Layruss98266/Polymath/issues. Include:

- Browser + OS (and screen reader, if relevant)
- Reproduction steps
- Expected vs actual
- A screenshot or short video if the bug is visual

Security issues: see `SECURITY.md`. Please do not file public issues for those.

## Code of conduct

See `CODE_OF_CONDUCT.md`. Short version: be kind, assume good faith, do not personally attack contributors or maintainers, do not post other people's private information.
