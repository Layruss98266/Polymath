# Polymath route-segment + enriched-concepts walkthrough

Date: 2026-06-12. Scope: end-to-end walk of psychology, ai_ml, marketing on the new route-segment architecture.

## Summary

Route-segment refactor is structurally sound. Every tab has a real page file at `app/domain/[id]/<tab>/page.tsx`. The layout shares header + safety note + tab bar + subdomain strip. `TabQueryRedirect` correctly forwards old `?tab=` URLs. `generateStaticParams` enumerates every concept and subdomain id. `notFound()` wired on bad ids and indices. `ConceptDeepPage` implements Predict → Reveal → Reflect → Check correctly and dedupes XP via `quizSeen` and `reflectionSeen`. Edge cases all pass.

Real issues are content-shape and progressive-disclosure, not routing:
- ConceptsTab sidebar TOC switches via `setIdx()` not `<Link>` — URL never updates, shareable links broken from the embedded tab view. P1.
- Many concepts have no `subdomain`, so `/sub/<id>` pages are sparse or empty. ai_ml `math` + `ethics` and marketing `behaviour` are empty subdomains. P1.
- All non-Basics/Concepts tabs locked behind `opened >= 1` per `lib/tabs.ts:27-34` — Roadmap and Resources are read-only reference and probably should not be locked.
- Stale `verify: true` flags on rows with working canonical URLs.

## Per-domain

### Psychology
13 concepts, subdomains biases / thinking / influence / mindset. All routes render. Concepts 0-7 (System 1, Confirmation, Anchoring, Loss aversion, Cialdini, FAE, Conformity, Growth mindset) are v1 thin: no `definition`, `generic`, `expert`, `conceptQuiz`, `conceptTasks`, `diagram`. None have `subdomain`. Concepts 8-12 (Dunning-Kruger, Availability, Sunk cost, Hyperbolic, DMN, Affect, Status games, Attachment) are fully enriched.

Specific issues:
- **P0 content correctness**: Habit loop diagram has 4 nodes (Cue/Craving/Routine/Reward = Clear/Atomic Habits) but caption credits Duhigg (who used 3). Mis-attribution.
- **P1**: concepts 0-7 missing `subdomain` → biases/thinking/influence/mindset only show 5/1/1/1 of 13 concepts.
- **P1**: counterView re-states Mehrabian correction already covered in quiz instead of pure steelman.
- **P2**: DMN concept inlines acronym in title but no `fullForm` field (inconsistent with ai_ml RAG/MoE/DPO).
- **P2**: 5 `verify: true` rows including Pre-Suasion at root domain, Behave with working penguinrandomhouse URL, Sapolsky pointing to YouTube search.
- **P2**: paid books Stumbling on Happiness, Thinking in Bets, Noise have empty URLs.
- **P2**: glossary (8 entries) missing terms for the enriched concepts.

### AI & ML
11 concepts, subdomains foundations / usage / math / ethics. Safety note renders. 7 enriched (Training-vs-inference, Tokens, Embeddings, RAG, MoE, DPO, CoT). 4 v1 thin: NN-and-parameters, Sup/unsup/RL, Hallucination, Bias-data, Prompting, Overfitting.

- **P0**: subdomains `math` and `ethics` declared but have zero concepts. SubdomainStrip pills render and clicking lands on empty-state.
- **P0 content correctness**: Training-vs-inference `expert` text asserts "by 2025-2026 the frontier had moved to GPT-5, Claude 4.x, and Gemini 2.x" as historical fact. Today is 2026-06; GPT-5 has not shipped publicly. Forward-looking projection rendered as fact.
- **P1**: Hallucination + Prompting are highest-traffic concepts in the domain and both are v1 thin — top backfill candidates.
- **P1**: "Supervised, unsupervised, and RL" — acronym in title, no `fullForm`.
- **P2**: 3 `verify: true` flags on rows with working URLs (Anthropic docs, Chip Huyen × 2).
- **P2**: Bishop PRML has empty URL.
- **P2**: glossary missing embedding / token / MoE / DPO / CoT despite those shipping enriched this update.

### Marketing
10 concepts, subdomains foundations / positioning / economics / behaviour. Cleanest of the three. 5 enriched (4Ps, STP, Features-vs-benefits, Conversion funnels, Brand-vs-performance), 5 v1 thin (JTBD, Social proof, Mental+physical, CAC/LTV, Permission). 0 `verify: true` rows.

- **P1**: `behaviour` subdomain declared but zero concepts. JTBD, Social proof, Mental+physical availability all belong there.
- **P1**: "CAC vs LTV" title is acronym pair, no `fullForm` field.
- **P1**: JTBD and CAC/LTV are operationally critical concepts and still v1 thin.
- **P2**: Competing Against Luck, $100M Offers, Building a StoryBrand have empty URLs.
- Glossary is solid (Positioning, CAC, LTV, JTBD, Mental availability, Physical availability, Distinctive asset, Funnel).

## Architecture / cross-cutting bugs

| Sev | Location | Problem | Fix |
| --- | --- | --- | --- |
| P1 | `components/tabs/ConceptsTab.tsx:119, 162` | TOC uses `setIdx()` not `<Link href={conceptPath}>`. URL never updates from the tab view; concept can't be shared/bookmarked from there. | Replace `<button onClick={setIdx}>` with `<Link>`. |
| P1 | `lib/tabs.ts:31-32` | Roadmap + Resources locked behind `opened >= 1`. They're read-only reference. | `unlock: () => true` on both. |
| P2 | `components/domain/TabQueryRedirect.tsx:12-17` | `useEffect` deps `[]` runs once on mount only. | Add `domainId` and `sp.get("tab")` to deps. |
| P2 | `components/tabs/ResourcesTab.tsx:48, 55, 103` | `(r as any).weight` cast three times even though Resource type has `weight?: SourceWeight`. | Type the intermediate tagged map step. |
| P2 | `components/domain/SubdomainStrip.tsx:14-17` | Concepts without `subdomain` are silently invisible. | Add "(other)" pill or backfill subdomain on every concept. |
| P2 | `app/domain/[id]/concepts/[idx]/page.tsx:7-13` | `generateStaticParams` calls `loadDomain` per domain, linear per build. | Memoise or pre-aggregate counts. |
| P2 | `app/domain/[id]/page.tsx` | BasicsTab has no CTA to concept 0. | Add "Start with the first concept" link. |

**State dedupe verification (traced from code):**
- ConceptQuiz: key `${domain.id}:concept:${conceptIdx}:${qi}` set in `ConceptDeepPage`. `lib/state.tsx:236-263` gates XP on `seen` and only appends when not seen. First answer awards `XP.quizCorrectFirstTry + XP.quizCorrectCalibrated`; reload + re-answer awards 0. Works.
- Reflection: `lib/state.tsx:194-214` gates on `!alreadyPaid && answer.trim().length > 20`, appends to `reflectionSeen`. Re-blurring with longer string pays 0. Works.

**Edge cases (verified from route handlers):**
- `/concepts/9999` → `concepts/[idx]/page.tsx:48` `n >= domain.concepts.length` → `notFound()`. ✓
- `/sub/nonexistent` → `sub/[subdomain]/page.tsx:38` `!d.subdomains?.some(...)` → `notFound()`. ✓
- `?tab=concepts` → `TabQueryRedirect` + `legacyTabRedirect` → `router.replace('/domain/<id>/concepts')`. Brief flash of Basics. ✓
- `/concepts/0` prev nav → `siblings.prev = null`, renders empty `<span />`. ✓

## Suggested next moves

1. **Backfill `subdomain` on every concept.** Highest leverage — fixes the lying SubdomainStrip in all 3 domains.
2. **Convert ConceptsTab TOC clicks to `<Link href={conceptPath(...)}>`** so URL is the source of truth.
3. **Loosen unlock on Roadmap + Resources** — read-only reference.
4. **Add `fullForm`** to DMN, "Supervised, unsupervised, and RL", "CAC vs LTV".
5. **Enrich highest-traffic thin concepts**: psychology System 1 + Cialdini + Loss aversion; ai_ml Hallucination + Prompting; marketing JTBD + CAC/LTV.
6. **Clear stale `verify: true`** on Anthropic docs, Chip Huyen, Behave, Pre-Suasion. Fix empty-URL paid books across all three.
7. **Fix Habit loop diagram attribution** — 4 nodes is Clear not Duhigg.
8. **Update ai_ml training-vs-inference expert paragraph** — asserts unshipped GPT-5 as fact, date-stamp or soften.
9. **Backfill glossary** psychology + ai_ml to include enriched-concept terms.
10. **Add "Start with the first concept" CTA** to BasicsTab footer.
