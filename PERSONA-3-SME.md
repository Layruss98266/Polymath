# Polymath — Persona 3 Review: Dr Anita Rao, Behavioural Economics PhD

Review filter: 47-year-old NUS PhD, behavioural-econ, Mumbai policy think-tank. Reads journal papers daily. Allergic to pop-psych overclaim, vague citations, and the Mehrabian misquote. Wants something she'd send a colleague.

## Summary

Polymath has clearly had a thoughtful pass on the behavioural canon. The replication-crisis register is genuinely audible — loss aversion is correctly tagged `debated` with Gal & Rucker (2018); Dweck is hedged with Sisk et al (2018) and the Yeager 2019 RCT; Asch's 75% figure is right; Bond & Smith's 1996 meta is cited; Mehrabian is named and corrected in three places. This is materially better than 90% of free behavioural-science content on the open web. I would send a colleague here.

The remaining problems cluster in three places. (1) A handful of overclaims survive in the "thin" v1 concepts in psychology that haven't been enriched yet — and crucially in cross-domain reuse (marketing's Social Proof is tagged `settled` with no replication note; investing/personal_finance lean on Cialdini and Thaler without nuance). (2) The `expert` field is largely well-cited but a few claims are still bare assertions — particularly cycle-time/effect-size figures and 1:5 Gottman ratio. (3) Safety notes are competent for a free educational site but the law disclaimer is unusually thin given India's regulatory complexity, and the health note skips a crucial line on supplements/drug interactions. The Habit-loop attribution (4-node Clear vs 3-node Duhigg) is still mis-credited in the diagram caption per FINDINGS-3 — that one I'd fix before anything else, because it's a literal factual error on the front-most diagram of the highest-traffic domain.

## P0 factual issues (with citation expected)

| Severity | Location | Problem (her voice) | Fix |
|---|---|---|---|
| P0 | `data/domains/psychology.ts:30` (`diagrams[1]`) | Caption: "Duhigg's 3-step cue, routine, reward extended by James Clear's 4-step cue, craving, response, reward." The diagram only renders 4 nodes labelled Cue/Craving/Response/Reward. That is the Clear (2018) model. Calling the 4-node diagram a "Duhigg + Clear" hybrid mis-attributes the visible artefact. Duhigg (2012) is 3-step. Either render two diagrams, or relabel honestly. | Either show two separate cycles (Duhigg 3-node, Clear 4-node) or rename to "Habit loop (Clear, 2018; extends Duhigg 2012)" and drop the implication that the 4-node is jointly authored. |
| P0 | `data/domains/psychology.ts:876` (Negativity bias `expert`) | "Marriage research by Gottman estimates roughly a five to one positive to negative interaction ratio is needed to sustain stable relationships." Stated as fact. The 5:1 "magic ratio" is from Gottman & Levenson (1992) on conflict episodes specifically, not all interactions, has not replicated cleanly (Heyman & Slep have critiqued it), and the predictive precision Gottman claims has been contested by Stanley & Markman among others. Should be flagged `debated` or hedged. | Add: "The precise ratio has been contested in subsequent work and applies to conflict interactions, not all interactions." Drop "needed to sustain" — that's causal language the data doesn't support. |
| P0 | `data/domains/psychology.ts:828` (Flow `expert`) | "Neuroscientific work by Dietrich and others has proposed transient hypofrontality... though this remains debated." The hedge is there, but the citation is hand-wavy ("Dietrich and others"). Give the paper: Dietrich (2003) *Consciousness and Cognition*. Also, the "engagement at work studies by Bakker" — name the year (Bakker, 2008). | Add years and journal stubs. A behavioural-econ PhD will spot bare-name citations. |
| P0 | `data/domains/personal_finance.ts:200` (Pay yourself first `expert`) | "Behavioural economics calls this commitment device design (Thaler and Benartzi, Save More Tomorrow, 2004)." The SMarT paper is Thaler & Benartzi 2004, *JPE* — correct. But the conceptual lineage runs through Ainslie (1975) and Strotz (1955), not just Thaler. Minor — but for a behavioural-econ audience, citing Thaler without Strotz is like citing Kahneman without Tversky. | Add Strotz (1955) as the conceptual origin. |
| P0 | `data/domains/marketing.ts:225` (Social proof) | Tagged `status: "settled"` with no replication-crisis hedge. Cialdini's social proof in marketing rests on Asch and on field studies (the hotel towel reuse RCT was Goldstein, Cialdini, Griskevicius 2008, *J. Consumer Research*). The mechanism replicates; the magnitude does not, and several "social-norm nudge" RCTs have produced near-zero effects (DellaVigna & Linos, 2022, on behavioural-nudge RCTs in government). | Either downgrade to `debated`, or keep `settled` and add a one-line caveat with the DellaVigna & Linos finding. |

## P1 overclaims and missing caveats

| Severity | Location | Problem | Fix |
|---|---|---|---|
| P1 | `data/domains/psychology.ts:50-86` (System 1 vs System 2) | `status: "settled"`. The two-systems framing is *useful* but Keren & Schul (2009) and Melnikoff & Bargh (2018, *TICS*) argue it's empirically suspect as a strict taxonomy. The `expert` field acknowledges this — but the badge says `settled`. Inconsistent. | Downgrade to `framework`. The expert text already explains why. |
| P1 | `data/domains/psychology.ts:280-313` (Conformity) | Status `settled`, claims 75% conformed "at least once across 12 critical trials." Correct number from Asch (1956). But: only ~37% of *all* critical responses conformed, and Bond & Smith (1996) found the effect has *decreased* over historical period — the modern replication baseline is materially lower. Quiz answer "About three quarters" is correct strictly on the lifetime-conformity stat but reads as if conformity is the modal response. | Add one sentence to `expert`: modern replications find lower conformity rates than 1950s baseline. |
| P1 | `data/domains/psychology.ts:683-708` (Cognitive dissonance) | Status `settled`. Festinger & Carlsmith (1959) replicates broadly, but the *mechanism* (drive-reduction vs self-perception vs self-affirmation) is genuinely contested — Bem (1967) offered an alternative explanation that the field has never cleanly resolved. | Add Bem (1967) self-perception alternative to the `expert` field. Keep `settled` for the phenomenon, but note mechanism is debated. |
| P1 | `data/domains/psychology.ts:719-746` (Bystander effect) | Already `debated`. Philpot et al (2019) cited, good. But the canonical Kitty Genovese reframing — the original "38 witnesses" number was Manning, Levine, Collins (2007) *American Psychologist* — should be cited by name. The expert field says "later shown to be exaggerated" without naming who showed it. | Add Manning et al (2007) citation. |
| P1 | `data/domains/psychology.ts:643-678` (Attachment theory adult) | Status `framework` — correct call. But the four-category Bartholomew & Horowitz model is presented as more validated than it is; the dimensional model (Brennan, Clark, Shaver 1998, ECR scale) has largely replaced the categorical model in research practice. A behavioural-econ-adjacent PhD will know this. | Add: "Modern research (Brennan, Clark, Shaver 1998) treats attachment dimensionally rather than as discrete categories." |
| P1 | `data/domains/psychology.ts:909` (counterView) | The replication-crisis paragraph is excellent — names priming, power posing, ego depletion, marshmallow. But it omits the *specific* finding most relevant to a behavioural-econ reader: Open Science Collaboration (2015) reproduced only 39% of psych studies sampled. Naming the headline number gives it teeth. | Add: "The Open Science Collaboration's 2015 *Science* paper found only ~39% of 100 psychology studies replicated with the original effect size." |
| P1 | `data/domains/mental_models.ts:111-148` (Lindy effect) | Tagged `debated` — appropriate. But the `expert` field calls Lindy "mathematically a power-law-style survival distribution" without noting the formal critique (Lindy is conditional life expectancy growing linearly with age; empirically holds for some classes of cultural artefact and not others). Briefly fine; a finance reader will know the gap. | Acceptable as-is, but a sentence on selection-effect (we don't observe ideas that died young) would tighten it. |
| P1 | `data/domains/mental_models.ts:270-308` (Antifragility) | Status `framework`. The counterView already flags Taleb is "mathematically narrow even though its vibe is broadly applied" — good. But within the concept itself, the example "Startups that survive one near-death pivot are often better" is exactly the survivorship-bias pattern flagged elsewhere in the same domain. Internal inconsistency. | Add a one-line "(beware survivorship bias in this anecdote)" inside the deep field or remove the startup example. |
| P1 | `data/domains/mental_models.ts:348-385` (Pareto principle) | Status `framework`. Correctly hedged as a heuristic. Strong. No issue. | None. |
| P1 | `data/domains/marketing.ts:226` (Mental + physical availability / Byron Sharp) | Status `debated`. Correct call — Sharp's *How Brands Grow* is contested. The `deep` field presents it more confidently than the `debated` badge suggests. | Add to deep: "Sharp's framework is influential among Ehrenberg-Bass Institute researchers but disputed by brand-equity scholars who emphasise emotional/relational drivers (Aaker, Keller)." |
| P1 | `data/domains/personal_finance.ts:809` (counterView) | The Dave Ramsey snowball-vs-avalanche framing is sharp. But the survivorship-bias point about "start a business" is given without a single citation. A behavioural-econ reader expects at least Shane Frederick or the SBA-failure-rate base rate. | Add one citation, e.g. "Hendricks & Singhal (2003) on the base-rate of new-venture failure within five years." |
| P1 | `data/domains/health.ts:552` (counterView) | The Walker "Why We Sleep" critique is correct — Alexey Guzey's takedown is widely cited in the sleep-research community. Strong. But: "red meat causes cancer headlines usually move risk by a few percent, not 100" — better to cite the WHO IARC 2015 monograph and its absolute-vs-relative risk distinction explicitly. | Add IARC 2015 / Group 2A classification + the 17% relative increase per 100g/day finding. |
| P1 | `data/domains/nutrition.ts:583` (counterView) | Excellent. Names ultra-processed food as the consistent finding. But omits the specific paper — Hall et al (2019) *Cell Metabolism* metabolic-ward RCT on UPF — which would lend it citation muscle. | Add Hall et al (2019). |
| P1 | `data/domains/communication.ts:476` (counterView) | Re-states Mehrabian correction. Good. But "communication is everything" steelman is too short; a critical reader wants to know who actually holds this view (Schein? Goleman?). | Name a proponent for the steelman. |
| P1 | `data/domains/negotiation.ts:494` (counterView) | Strong. Voss tactical-empathy critique is exactly right. No P1 issue. | None. |

## P2 polish

| Severity | Location | Problem | Fix |
|---|---|---|---|
| P2 | `data/domains/psychology.ts:30` | Diagram caption mixes 3-step and 4-step models in one sentence (also P0 above). | Already flagged. |
| P2 | `data/domains/psychology.ts:528` (DMN) | Concept title inlines "(DMN)" but no `fullForm` field. Inconsistent with ai_ml RAG/MoE/DPO concepts that have `fullForm`. Flagged in FINDINGS-3 already. | Add `fullForm: "Default Mode Network"`. |
| P2 | `data/domains/psychology.ts:909` | Counter-view paragraph contains the Mehrabian correction, but the same correction appears in three other places (quiz, flashcards, communication.ts). Counter-view should *steelman* the strongest opposition to a psychological-science worldview (e.g., "much of behaviour is biological/evolutionary, not learned"; or "cultural psychology challenges WEIRD-based generalisations") — not re-flag a misquote already covered. FINDINGS-3 caught this too. | Replace the Mehrabian sentence in counterView with a genuine steelman. |
| P2 | `data/domains/psychology.ts:938-960` (resources) | Multiple `verify: true` on books with empty URLs (Stumbling on Happiness, Thinking in Bets, Noise). Behave/Pre-Suasion have working publisher URLs but `verify: false`. Inconsistent. Flagged in FINDINGS-3. | Verify and flip. |
| P2 | `data/domains/psychology.ts:1015-1037` (glossary) | Missing terms for newly enriched concepts: DMN, affect heuristic (defined but only as the concept itself), status games, attachment. Actually DMN, affect heuristic, status games, attachment ARE in glossary — good. Acceptable. | None. |
| P2 | `data/domains/mental_models.ts:50-56` | First 8 concepts (Inversion through Eisenhower) are v1 thin — no `definition`, `generic`, `expert`, `conceptQuiz`. The later concepts (margin of safety, Lindy, Chesterton's, etc.) are fully enriched. Domain looks two-tier on the inside. | Backfill to match the later format. |
| P2 | `data/domains/mental_models.ts:51` (Inversion at v1 thin) AND `mental_models.ts:387` (Inversion fully enriched) | Same concept appears twice in the concepts array — the v1 thin one at index 0 and the enriched one at index later. Duplicate. | Delete the v1 entry. |
| P2 | `data/domains/personal_finance.ts:947` (safetyNote) | "Tax rules, regulations and product specifics change, for real money decisions, talk to a SEBI-registered advisor whose incentives don't depend on selling you a product." Good. But: a behavioural-econ reader will notice it doesn't mention RIA (Registered Investment Advisor) vs MFD (Mutual Fund Distributor) — the fee-only vs commission distinction is *the* legally relevant phrasing in SEBI's 2020 RIA Regulations. | Add: "Prefer SEBI-registered RIAs (fee-only) over MFDs (commission-paid)." |
| P2 | `data/domains/law.ts:704` (safetyNote) | "Educational, not legal advice... consult a qualified lawyer in your jurisdiction." Standard but thin. Should explicitly mention BNS/BNSS/BSA transition (1 July 2024) since some content is pre-transition and might be stale by the time a reader acts. | Add: "Indian criminal law transitioned from IPC/CrPC/Evidence Act to BNS/BNSS/BSA on 1 July 2024 — verify current statute citation before relying on any criminal-law point." |
| P2 | `data/domains/health.ts:674` (safetyNote) | "Educational, not medical advice. For symptoms... talk to a qualified doctor. For emergencies in India, the standard number is 112." Good. Missing: supplement/drug interactions, particularly relevant to the longevity-medicine content that mentions ApoB, NAD+, etc. | Add: "Supplements interact with prescription drugs (e.g., berberine with metformin, fish oil with anticoagulants) — disclose all supplements to your doctor." |
| P2 | `data/domains/nutrition.ts:707` (safetyNote) | Strong. Explicitly mentions diabetes, kidney, eating disorders, pregnancy, allergies. Best of the four. | None. |
| P2 | `data/domains/ai_ml.ts:749` (safetyNote) | "AI tools change fast and confidently get things wrong. Verify anything high-stakes against primary sources, and never paste secrets/PII into untrusted endpoints." Fine for a tech-literate audience. | None. |

## Per-domain credibility verdict

**Ready to send a colleague (5):**
- `psychology` — once Habit-loop diagram fix lands and the System 1/System 2 badge is downgraded to `framework`. Replication-crisis register is genuinely good. The enriched 5 concepts (DMN, affect heuristic, status games, attachment, dissonance, bystander, flow, SDT, spotlight, negativity) are journal-paper-grade.
- `mental_models` — once duplicate Inversion is removed and the v1 thin first 8 concepts are backfilled. The enriched second half is among the cleanest content in the project.
- `negotiation` — counterView is sharp, no overclaim spotted in the parts walked.
- `communication` — Mehrabian handled correctly across three places.
- `nutrition` — strongest safety note, accurate counterView on diet wars, ICMR-NIN 2024 caveat present.

**Needs work (5):**
- `marketing` — Social Proof tagged `settled` without DellaVigna & Linos nuance is the main P0. Otherwise solid.
- `personal_finance` — Budget 2025-26 numbers are correct; missing RIA/MFD distinction in safety note; survivorship-bias point in counterView needs a citation.
- `health` — Walker critique is correct; need IARC citation and supplement-interaction line.
- `investing` — Margin-of-safety / Graham content is strong; not deeply walked here but the behavioural overlap (loss aversion, anchoring) needs cross-domain consistency check.
- `law` — BNS/BNSS/BSA transition is technically correct; safety note should explicitly flag the transition date.

**Not ready (5):**
- `ai_ml` — GPT-5 "frontier had moved" claim in Training-vs-Inference expert text (FINDINGS-3 P0) is unshipped projection presented as fact. Two empty subdomains (math, ethics).
- `learning` — not walked; flag for review.
- `tech` — not walked.
- `entrepreneurship` — not walked.
- `famous_laws` — not walked; the "laws as heuristics not laws" framing needs careful handling.

## Top 5 corrections to ship next

1. **Fix the Habit-loop diagram attribution** (`data/domains/psychology.ts:30`). The 4-node diagram is Clear, not Duhigg-plus-Clear. This is the single most visible factual error on the highest-traffic domain. Two options: render two cycles, or rename to "Habit loop (Clear, 2018, extending Duhigg 2012)."

2. **Downgrade Social Proof to `debated` or add the DellaVigna & Linos (2022) nudge-RCT caveat** (`data/domains/marketing.ts:225`). Cross-domain reuse of Cialdini concepts shouldn't lose the replication nuance that psychology.ts already gets right.

3. **Hedge the Gottman 5:1 ratio** (`data/domains/psychology.ts:876`). Either drop it or flag it as the contested conflict-interaction ratio, not the universal relationship constant the current text implies.

4. **Fix the GPT-5 forward-projection-as-fact in ai_ml** (FINDINGS-3 P0 already documents this). A behavioural-econ-PhD-grade reader will notice and stop trusting other dated claims.

5. **Replace the Mehrabian sentence in psychology's counterView with a real steelman** (`data/domains/psychology.ts:909`). Genuine opposition to a psychological-science worldview is biology/evolution-first (Pinker, Tooby & Cosmides) or cultural-psychology / WEIRD-critique (Henrich) — not a debunked misquote that's already corrected in three other places. Also remove the duplicate Inversion entry in mental_models.

Bonus that didn't make the top 5 but is one-line cheap: add RIA-vs-MFD distinction to personal_finance safetyNote, and BNS-transition date to law safetyNote.
