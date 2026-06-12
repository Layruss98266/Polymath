<!-- Thanks for opening a PR. Tick what applies. -->

## What this PR does

<!-- 1-3 sentence summary. The "why" matters more than the "what". -->

## Type of change

- [ ] Bug fix
- [ ] Feature
- [ ] Content (concepts, glossary, resources, missions)
- [ ] Refactor
- [ ] Documentation
- [ ] Accessibility
- [ ] Performance
- [ ] Security

## Checklist

- [ ] `npm run typecheck` passes
- [ ] `npm run test` passes
- [ ] `npm run build` passes (SSG fans out every concept; schema errors surface here)
- [ ] No em-dashes / en-dashes added (grep your diff for `—` and `–`)
- [ ] Any new XP-granting action has a persisted dedupe guard (`quizSeen`, `reflectionSeen`, `graduatedCards`, or a new field)
- [ ] Any new path uses `tabPath()` / `conceptPath()` / `subdomainPath()` from `lib/tabs.ts`
- [ ] Any new resource URL is real and verified, or `verify: true` + `url: ""`
- [ ] `AUDIT.md` and `TODO.md` updated when the change moves the needle on a tracked item

## Screenshots / videos

<!-- Visual changes only. -->

## Related issues

<!-- Closes #123 -->
