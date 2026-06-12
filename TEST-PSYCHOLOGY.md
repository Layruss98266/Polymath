# Psychology Domain End-to-End Test Report

Walked `data/domains/psychology.ts` (740 lines) and every page under `/domain/psychology/*` as a real learner. The domain is in good shape: prose is sharp, the 14 enriched concepts read like a senior writer wrote them, the new Habit-loop caption is correctly fixed, the mastery curve is honest. Most defects are content polish (empty resource URLs, missing subdomain `intro`/`capabilities`, a couple of cross-link gaps), not structural bugs.

## Summary

- **Concept count is 22, not 14** as the prompt assumed: 8 v1 thin concepts (no `definition`/`generic`/`expert`/`conceptQuiz`/`conceptTasks`) followed by 14 enriched concepts (Dunning-Kruger through Negativity bias). The thin ones degrade gracefully (ConceptDeepPage falls back to `short`+`deep`, no quiz section, no tasks, no Beginner/Expert toggle) — but a learner clicking from concept #1 to #8 then hitting #9 will feel a sudden quality cliff.
- **Habit-loop diagram caption is fixed and accurate**, but the underlying `data.nodes` (`["Cue","Craving","Routine","Reward"]`) is a hybrid: Duhigg uses "Routine", Clear uses "Response". Minor wording drift between caption and nodes.
- **Three paid resources ship with empty URLs** (Stumbling on Happiness, Thinking in Bets, Noise) despite being industry-standard titles with obvious destinations — looks like data was abandoned mid-fill.
- **Subdomain pages render bare**: psychology declares no `intro` or `capabilities` on any of `biases / thinking / influence / mindset`, so the SubdomainPage header has only the name and the concept grid. Compared to richer domains this looks unfinished.
- **BasicsTab does NOT render `SubdomainStrip`** itself — the strip lives in `app/domain/[id]/layout.tsx`, so it appears on every tab as a chrome element. The strip correctly shows concept counts: Cognitive Biases (11), Two Systems Thinking (2), Influence and Social (4), Self and Mindset (5). Functions as described — the prompt's "does the SubdomainStrip render with correct concept counts" passes.

## Findings table

| Severity | Location | Problem | Recommended fix |
|---|---|---|---|
| P0 | `data/domains/psychology.ts:656` | Resource "Stumbling on Happiness, Daniel Gilbert" has empty `url: ""`. Well-known book, learner sees "no direct link yet" chip. | Set `url: "https://www.danielgilbert.com/"` or publisher page. |
| P0 | `data/domains/psychology.ts:658` | Resource "Thinking in Bets, Annie Duke" has empty `url`. | Set `url: "https://www.annieduke.com/books/"`. |
| P0 | `data/domains/psychology.ts:659` | Resource "Noise, Kahneman, Sibony, Sunstein" has empty `url`. | Set `url: "https://www.hachettebookgroup.com/titles/daniel-kahneman/noise/9780316451406/"` or similar. |
| P1 | `data/domains/psychology.ts:38-43` | Subdomains have no `intro` or `capabilities`. `SubdomainPage` header collapses to just the subdomain name → bare-looking page. | Add 1–2 sentence `intro` and 3 `capabilities` per subdomain. e.g. for `biases`: "The recurring shortcuts your brain uses, and the predictable ways they go wrong." |
| P1 | `data/domains/psychology.ts:30` | Habit-loop diagram caption now correctly says "Duhigg 3-step + Clear 4-step" (fixed). But `data.nodes` lists `["Cue","Craving","Routine","Reward"]` — that's a hybrid, neither model exactly. Duhigg = cue/routine/reward; Clear = cue/craving/response/reward. | Change nodes to Clear's canonical `["Cue","Craving","Response","Reward"]` to match the 4-step it visualises, or split into two diagrams. |
| P1 | `data/domains/psychology.ts:8-22` | First 8 concepts (v1 thin) lack `definition`, `generic`, `expert`, `conceptQuiz`, `conceptTasks`, `diagram`. ConceptDeepPage degrades cleanly (no toggle, no quiz section, no tasks), but the jump from concept #8 (Growth vs fixed mindset, thin) to #9 (Dunning-Kruger, fully enriched) is jarring. | Enrich concepts 1–8 to parity (definition + generic + expert + 2 quiz items + 3 tasks each), or move enriched concepts to the front so the linear reader experiences improving, not declining, depth. |
| P1 | `data/domains/psychology.ts:33-36` | Only 2 `synthesis` cross-domain links (Social proof → marketing, Anchoring → personal_finance). Multiple obvious ones missing: loss aversion → investing, growth mindset → learning, status games → negotiation. | Add 3–5 more synthesis entries. |
| P2 | `data/domains/psychology.ts:638` | Sapolsky Stanford playlist URL `PL150326949691B199` is correct but `verify: false` while `verify: true` is on line 644 — inconsistent. | Standardise: leave `verify` field absent or false on hand-verified entries, true only on stale/needs-check. |
| P2 | `data/domains/psychology.ts:736` | Glossary term "Implementation intention" (Gollwitzer) defined but not referenced anywhere in concepts, missions, or roadmap. Dead term. | Either drop it, or cite it in the Hyperbolic discounting `deep` ("an implementation intention is one form of precommitment") or in a roadmap stage. |
| P2 | `data/domains/psychology.ts:644` | Sapolsky public-lectures resource uses a YouTube search URL (`/results?search_query=...`), not a stable channel/playlist. Search results drift. | Link to Sapolsky's official Stanford profile or a curated playlist. |
| P2 | `components/tabs/BasicsTab.tsx:48-55` | Basics page renders subdomains AGAIN as chips (no link, no counts) below the `SubdomainStrip` that the layout already shows above. Duplication. | Drop the chip strip from BasicsTab — the layout's `SubdomainStrip` (with counts and links) handles this. |
| P2 | `data/domains/psychology.ts:711` | Flashcard "Asch conformity headline?" says "~75% conformed at least once." Original Asch found ~37% conformed on a given trial; ~75% conformed at least once across 12 trials. Phrasing is technically correct ("at least once") but easy to misread. | Tighten: "~75% conformed at least once across 12 trials; ~37% per trial." |
| P2 | `data/domains/psychology.ts:609` | counterView mentions "parts of the marshmallow test" failed replication, but no concept covers the marshmallow test (closest is Hyperbolic discounting #12, which uses a marshmallow analogy in `generic`). Loose reference. | Either add a brief marshmallow note to Hyperbolic discounting `expert`, or drop the marshmallow reference. |
| P2 | `data/domains/psychology.ts:53` | Growth-vs-fixed-mindset `deep` correctly notes replication caveats, status `"debated"` — honest. But the concept is thin (no quiz/tasks/diagram), so a learner cannot test the nuance. | Enrich this concept; its replication caveat is exactly the kind of thing a quiz misconception should cover. |
| P2 | `data/domains/psychology.ts:46-52` | First 8 concept titles use 2-space indented `{ t: ... }` one-liners, enriched ones use multi-line. Just style noise but the diff/grep is messier. | Format-pass after the enrichment fill. |
| P2 | `data/domains/psychology.ts:230` | DMN concept: `subdomain: "thinking"`. Defensible since the DMN is a brain-network/two-modes story, but a reader might expect a `neuroscience` subdomain. | Either accept it under thinking (current), or add a `neuroscience` subdomain if more brain-system concepts get added (anterior cingulate, prefrontal cortex). |
| P2 | `app/domain/[id]/page.tsx:11` | BasicsTab CTA says "Start with concept #1: System 1 vs System 2" — correct for psychology since concept[0] is System 1/2. Good. Reflect prompts for concept #1 are good too. No issue. | — (verification: this passes). |
| P2 | `data/domains/psychology.ts:42` | Trailing comma after the last subdomain object: `{ id: "mindset", name: "Self and Mindset" },`. TypeScript allows, style inconsistent with the rest of the file. | Drop the trailing comma OR add them uniformly. Cosmetic only. |

## Content quality notes (per-concept brief)

**Thin v1 concepts (no enrichment):**
1. **System 1 vs System 2** — sharp `short`, excellent `deep`, status `framework` correct. Reflect prompt is great.
2. **Confirmation bias** — settled, strong steelman framing. Reflect ("What evidence would change it?") is a real test.
3. **Anchoring** — Indian rupee example grounds it; good defence ("decide your number in writing first").
4. **Loss aversion** — accurate 2× framing, opportunity-cost reframe is honest.
5. **Cialdini six levers** — names all six, no inflation. Reflect ("name every lever in one ad") is a real task.
6. **Fundamental attribution error** — traffic example is the canonical illustration. Solid.
7. **Conformity (Asch)** — correctly cites ~75% (at least once); flashcard #6 should match this nuance (see findings).
8. **Growth vs fixed mindset** — to its credit, explicitly flags replication issues. Honest `"debated"` status.

**Enriched v2 concepts:**
9. **Dunning-Kruger** — diagram (curve) matches the concept, caption accurate. Quiz misconceptions are sharp ("Trust your gut" trap). `"debated"` honest.
10. **Availability heuristic** — strong base-rate framing. Quiz Q2 ("Best counter…") is a real test, not a vocabulary check.
11. **Sunk cost fallacy** — pizza analogy in `generic` is canonical and clean. Diagram (flow) matches. Reflect prompt cuts.
12. **Hyperbolic discounting** — Ulysses contract referenced in `expert`; the marshmallow analogy works. No diagram, which is a minor gap — a curve diagram (exponential vs hyperbolic) would land here.
13. **Default Mode Network** — `expert` cites Raichle, Buckner, Sheline, Carhart-Harris — accurate and well-sourced. Status `settled` reasonable (entropic-brain bit is more contested but kept in `expert` not in body).
14. **Affect heuristic** — Slovic + Damasio properly named. Risk-benefit-inversion finding correctly stated. Quiz Q2 (charismatic founder) is a textbook illustration.
15. **Status games** — Henrich + Gil-White + Cheng/Tracy citations correct. Prestige vs dominance correctly framed as a `framework`. Reflect prompt is sharp and personal.
16. **Attachment theory in adulthood** — Hazan/Shaver, Bartholomew/Horowitz, Mikulincer/Shaver properly cited. Earned-secure flagged. Honest.
17. **Cognitive dissonance** — Festinger/Carlsmith 1959 study explained with the right mechanism (small payment ⇒ no external justification). Excellent quiz Q2.
18. **Bystander effect** — Kitty Genovese clearly flagged as "early reporting exaggerated". Philpot 2019 reanalysis included. Status `"debated"` honest. "Point at one person" defence is the canonical countermeasure.
19. **Self-determination theory** — Deci/Ryan, ACR (Autonomy/Competence/Relatedness) correctly named. Distinguished from McClelland and Maslow in the quiz — excellent misconception design.
20. **Flow state** — Csikszentmihalyi correctly cited, channel-skill balance accurately framed. Transient hypofrontality flagged as "remains debated" — honest. Quiz Q2 (which is NOT typical of flow) is well-constructed.
21. **Spotlight effect** — Gilovich Barry Manilow study, twofold inflation finding cited correctly.
22. **Negativity bias** — Baumeister "Bad Is Stronger Than Good" and Gottman 5:1 ratio cited. Solid.

All enriched concepts pass the structural checklist: each `conceptQuiz` item has exactly 4 options with one `correct: true` and three `misconception` strings, each `conceptTasks` has the basic/easy/advanced ladder with rising XP (10/20/40). Misconception strings are explanatory, not just "wrong" — they teach.

## Suggested next moves

1. **Backfill the 3 empty paid-resource URLs** — 30 seconds of work, immediate visible improvement.
2. **Enrich the 8 thin v1 concepts to v2 parity.** They are good prose but a learner clicking through them in order experiences the quality cliff in reverse (cliff at the boundary then plateau). Highest leverage: add quizzes to Loss aversion, Cialdini six levers, FAE, Asch — they're the most quizzable.
3. **Add `intro` (1–2 sentences) and `capabilities` (3 bullets) to each of the 4 subdomains.** Currently `/domain/psychology/sub/biases` renders just a title + concept grid. Fast to fix, big visible win.
4. **Add 3–5 cross-domain synthesis links** — loss aversion → investing, growth mindset → learning, status games → negotiation, social proof → marketing (already there), confirmation bias → mental_models. The BasicsTab "Cross-domain links" section currently feels sparse with only 2 entries.
5. **Fix the Habit-loop diagram nodes** to match Clear's canonical 4-step (`["Cue","Craving","Response","Reward"]`) since the caption emphasises Clear's extension.
6. **Either use or remove the "Implementation intention" glossary term** — it's defined but unused.
7. **Consider re-ordering concepts so the enriched ones appear first**, or interleave by subdomain so a linear reader doesn't experience a depth cliff.
