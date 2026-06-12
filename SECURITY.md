# Security Policy

## Scope

Polymath is a static client-side learning app. It has no backend, no login, no analytics, no third-party scripts, no telemetry, and no privileged endpoints. All user state lives in IndexedDB (with a localStorage fallback) inside the visitor's browser. The app never sends user data anywhere.

That said, "no server" is not a free pass. The app still runs JavaScript in the user's browser; bugs in our code can still hurt people. Security disclosures are taken seriously.

## Reporting a vulnerability

**Please do not open a public GitHub issue** for security problems. Instead:

- Email: surya@polymath.local (replace with maintainer's address when available)
- Or, open a **private security advisory** in this repo: https://github.com/Layruss98266/Polymath/security/advisories/new

Include:

- A description of the issue
- Steps to reproduce, or a proof-of-concept
- The browser + version + OS where you saw the issue
- Your assessment of impact (data loss, XP farm, XSS, etc.)

We will acknowledge receipt within **7 days** and aim for a fix or risk-accepted decision within **30 days**.

## What counts as a security issue

In rough priority order:

1. **XSS via authored content.** A concept title, description, or resource name that breaks out of the inline `<script type="application/ld+json">` tag. Defence: `lib/jsonLd.ts` escapes `</script>`, `<!--`, U+2028, U+2029.
2. **Privacy claim violation.** Any code path that sends user data off-origin, beacons a tracker, or violates the `connect-src 'self'` CSP. The privacy claim on `/about` is load-bearing; breaking it is a P0.
3. **XP / streak farms.** Any client-side input that lets a user inflate XP, streak, or rank without doing the underlying learning. Three known dedupe sets exist: `quizSeen`, `reflectionSeen`, `graduatedCards`. A new farm vector that bypasses these is a security issue.
4. **State corruption via save-code import.** `importCode` round-trips a base64 payload through `JSON.parse` and the migration runner. A crafted payload that bricks IndexedDB or escalates trust is a security issue.
5. **Service-worker hijack.** Anything in `public/sw.js` that could be tricked into serving wrong content, persisting cross-origin requests, or breaking the cache namespace.
6. **DPDPA / privacy-regime exposure.** Code that incidentally collects, stores, or transmits data in a way that conflicts with India's DPDPA 2023 or other applicable privacy regimes.

## What does NOT count

- "An old paid book has a broken URL." That is a content issue. Open a normal issue.
- "ESLint isn't configured perfectly." That is a code-quality issue.
- "I disagree with a status badge." That is a content debate; flip it in a PR with a citation.
- "The app uses IndexedDB, which I distrust." IndexedDB is the storage primitive every modern browser provides; the alternative is no persistence at all.

## Security model in one paragraph

- The app is fully client-side. No server, no auth, no DB.
- CSP forbids off-origin scripts and connections: `default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'`.
- HSTS is set with `preload`. Cross-Origin-Opener-Policy and Cross-Origin-Resource-Policy are `same-origin`.
- `dangerouslySetInnerHTML` is used in exactly two places (root layout + concept deep page) for JSON-LD; both route through `lib/jsonLd.safeJsonLd`.
- All XP-granting actions persist a "seen" set so they cannot be farmed.

## Disclosure

Once a fix lands, the security advisory is published with credit (unless the reporter prefers anonymity). The fix commit references the advisory by id. The `CHANGELOG.md` records the fix.

## Past advisories

None yet.
