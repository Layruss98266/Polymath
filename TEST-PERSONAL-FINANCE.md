# TEST-PERSONAL-FINANCE.md

End-to-end audit of the `personal_finance` domain in Polymath.
Source of truth read: `data/domains/personal_finance.ts` (730 lines).
Pages walked (route-segment): `/domain/personal_finance`, `/concepts/[idx]` for idx 0..13, `/sub/{fundamentals,debt,automation,products}`, `/quiz`, `/flashcards`, `/roadmap`, `/resources`, `/missions`, `/cheatsheet`, `/counter`, `/diagram`.

---

## Summary

The domain has strong tone, good India-flavoured examples, and well-built enriched concepts (Lifestyle inflation, PPF/NPS/ELSS, ULIP trap, Liquid/Arbitrage, NPS allocation, Term sum assured, Health insurance, 50-30-20, Avalanche/Snowball, Credit card math, Estate planning). However, the domain is **structurally broken** in three ways:

1. **6 of 14 concepts (idx 2–7) are missing `subdomain` tags** — they are also missing `definition`, `prereqs`, `conceptQuiz`, `conceptTasks`, `generic`, `expert`, `reflect`. They render as bare stub deep pages and are invisible on every subdomain page.
2. **The `automation` subdomain is declared but has zero concepts attached** — `/sub/automation` is an empty page. "Pay yourself first (automate it)" should clearly live there.
3. **Tax facts are stale post Budget 2025-26**: the data repeatedly says the new-regime zero-tax bucket is ₹7 lakh and STCG on equity is 15%. Both numbers were superseded — new-regime rebate threshold is ₹12 lakh (FY 2025-26) and equity STCG was raised to 20% in Budget 2024.

Plus a P1 advice-tone risk (specific fund-house names, specific allocation numbers presented as actions) and a Glossary that under-covers the enriched concepts.

---

## Findings table

| Sev | Location | Problem | Recommended fix |
|---|---|---|---|
| **P0** | `personal_finance.ts:157` (concept idx 2 "Kill high-interest debt first") | Missing `subdomain`, `definition`, `prereqs`, `generic`, `expert`, `conceptQuiz`, `conceptTasks`, `reflect`, `status` field on a different shape than peers. Renders as a stub deep page and never appears under `/sub/debt`. | Add `subdomain: "debt"`, definition, generic, expert, 3-Q quiz, 3 tasks (avalanche/snowball mention already in `deep`). |
| **P0** | `personal_finance.ts:158` (idx 3 "Pay yourself first") | Same shape problem. **This is the only concept that fits the declared `automation` subdomain — and it's unassigned.** `/sub/automation` therefore has zero concepts. | Add `subdomain: "automation"` + full enrichment (definition, quiz, tasks, generic, expert, reflect). |
| **P0** | `personal_finance.ts:159` (idx 4 "Index funds beat picking") | Stub. Missing subdomain (should be `fundamentals` or `products`) + all enrichment fields. | Add `subdomain: "fundamentals"` and full enrichment. SPIVA reference is already present in `deep`. |
| **P0** | `personal_finance.ts:160` (idx 5 "Compounding") | Stub. Missing subdomain + all enrichment. Also the most foundational concept in the domain. | Add `subdomain: "fundamentals"` and full enrichment. Verify the ₹5,000/mo, 25→60yo example math: at 10% nominal monthly compounded over 35y, FV ≈ ₹1.9 cr, not ₹1.6 cr. |
| **P0** | `personal_finance.ts:161` (idx 6 "Inflation") | Stub. Missing subdomain + all enrichment. | Add `subdomain: "fundamentals"` + full enrichment. Cite RBI CPI (5-7% range still defensible for India 2020-2025). |
| **P0** | `personal_finance.ts:162` (idx 7 "Insurance: term + health, full stop") | Stub. Missing subdomain + all enrichment. Overlaps with idx 8 (Term vs ULIP), idx 12 (Term sum assured), idx 13 (Health insurance). | Either delete (concept is redundantly covered by 3 enriched concepts) or convert into a short umbrella with `subdomain: "products"`. |
| **P0** | `personal_finance.ts:53` + concept list | `subdomains[2] = { id: "automation", ... }` is declared but no concept references it. `/sub/automation` will render an empty list. | Tag idx 3 ("Pay yourself first") with `subdomain: "automation"`. Consider adding a second automation concept (e.g. "Cashflow buckets" or "Sinking funds") so the page is not solitary. |
| **P1** | `personal_finance.ts:249` | "Budget 2025 26 with the 7 lakh zero tax bucket and 75,000 standard deduction" — STALE. FY 2025-26 raised the rebate threshold to ₹12 lakh of taxable income (effective zero tax up to ~₹12.75 lakh with standard deduction). | Replace "7 lakh zero tax" with "12 lakh rebate threshold (FY 2025-26)". |
| **P1** | `personal_finance.ts:285,287` | Same stale "7 lakh" + "75,000 std deduction" claim, twice in the Liquid/Arbitrage concept. | Same fix as above; recompute the "tax-neutral for small investors" point under ₹12 lakh threshold. |
| **P1** | `personal_finance.ts:285` | "arbitrage funds still get equity tax treatment (15 percent STCG, 12.5 percent LTCG above 1.25 lakh)" — STCG on equity was raised from 15% → **20%** in Budget 2024 (effective 23 Jul 2024). | Change "15 percent STCG" → "20 percent STCG" everywhere it appears. |
| **P1** | `personal_finance.ts:299` (quiz `why`) | Same 15% STCG / 12.5% LTCG / 1.25 lakh quote — 15% number stale. | Same fix. |
| **P1** | `personal_finance.ts:314` (idx 9 task "Open one liquid fund") | Names specific AMCs: "Parag Parikh, ICICI, HDFC". Reads as a product recommendation, undermines `/about` advisory disclaimer. | Generalise: "Pick a top-rated low-expense liquid fund from any large fund house" — keep neutrality. |
| **P1** | `personal_finance.ts:391` (idx 12 task) | "Get online quotes from at least three insurers (claim settlement ratio above 95 percent) for your target cover and write down the cheapest." → recommends acting on quotes. | Acceptable for education but soften to "compare for understanding"; the cheapest premium is not always the right buy. |
| **P1** | `personal_finance.ts:20` (realWorldExample) | "25-30% more money" for 1.5% fee vs 0.1% over 45 years on ₹5,000/month — at 10% nominal, net 8.5% vs 9.9%, FV gap is closer to **35-40%**, not 25-30%. Understated by ~10pp. | Either widen to "30-40%" or recompute and rephrase as "roughly a third more, often more". |
| **P1** | `personal_finance.ts:160` (idx 5 deep) | "₹1.6 crore at 60" for ₹5k/mo from 25 at 10% — actual ≈ ₹1.9 cr (monthly compounding). "₹65 lakh" for start at 35 — actual ≈ ₹58 lakh. Numbers are presented as if precise. | Recompute with monthly compounding; or hedge with "roughly ₹1.7–1.9 cr depending on contribution timing". |
| **P1** | `personal_finance.ts:50-55` | Subdomains have only `id` and `name` — no `intro` field, so subdomain page metadata description falls back to `${sd.name} concepts inside ${entry.name}.` (see `sub/[subdomain]/page.tsx:25`). Weak for SEO and reader. | Add 1-2 sentence `intro` to each of fundamentals / debt / automation / products. |
| **P1** | Glossary `personal_finance.ts:714-723` | Glossary covers 8 terms but the enriched concepts use: PPF, NPS, ULIP, 80C, 80CCD(1B), 80D, LTCG, STCG, APR, EAR, OPD, NAV, sweep FD, super top-up, IRDAI, SEBI, RBI, DICGC, ELSS (only ELSS is glossed). Most are referenced in `deep` / `expert` without definition. | Extend glossary to cover at minimum: PPF, NPS, ULIP, 80C, 80CCD(1B), 80D, LTCG, STCG, APR/EAR, OPD, IRDAI, SEBI, RBI. |
| **P1** | `personal_finance.ts:25` | Mentor "Ramit Sethi, I Will Teach You to Be Rich (revised 2019)" — the latest revised second edition was published 2019; correct. But mentor card says "Vicki Robin, Your Money or Your Life (2008 ed.)" — book is co-authored by Joe Dominguez (now deceased). Vicki Robin alone is misleading. | Either credit "Vicki Robin & Joe Dominguez" or add a note. The 2018 revised edition (Tim Ferriss foreword) is the most-current; 2008 edition is acceptable but older. |
| **P2** | `personal_finance.ts:23` | Morgan Housel work "The Psychology of Money (2020)" — correct. JL Collins "(2016)" — correct. John Bogle "founded Vanguard; The Little Book of Common Sense Investing" — correct. | None. |
| **P2** | `personal_finance.ts:65` (idx 0 expert) | "5% savings rate means you need to work about 60 years to retire. 50% means about 17." — these are MMM's FIRE-math numbers and depend on 5% real return + 4% withdrawal. Acceptable, but flag the assumption explicitly. | Add a parenthetical "(assuming a 5% real return and 4% withdrawal rate)". |
| **P2** | `personal_finance.ts:135` (quiz option) | "Maxing out credit card limits" labelled as a misconception under "Before investing in equities, what comes first?" — option is silly/strawman. | Replace with a more realistic distractor, e.g. "Saving in a tax-saving FD". |
| **P2** | `personal_finance.ts:515` (idx 10 deep, credit card math) | "If you carry 1 lakh at 3.5 percent monthly and pay only the 5 percent minimum (5,000)... you would take roughly 5 years to pay it off and total interest paid would exceed 1 lakh." — At 3.5% monthly with 5% min on declining balance, payoff time is closer to 7-8 years, total interest closer to ₹70-90k. Numbers in right ballpark but verify. | Recompute precisely or hedge ("several years" / "tens of thousands in interest"). |
| **P2** | `personal_finance.ts:43` (diagrams) | Bar diagram "Fee drag on a 30-year nest egg" — labels are "% of pot left" with 0.1%→100, 1.5%→62, 2.0%→53. Math checks at 7% gross return over 30 years roughly. Caption is fine but units string would parse better as the literal axis label. | Minor: leave as is. |
| **P2** | `personal_finance.ts:154` (idx 1 advanced task xp:70) vs `personal_finance.ts:198` (idx 7 advanced xp:40) | Inconsistent XP scales for "advanced" tasks (70 vs 40 across enriched concepts; idx 0 and 1 use 70, all later concepts use 40). | Normalise to 40 (or 70) across all concepts so missions/totals stay coherent. |
| **P2** | `personal_finance.ts:54` | Subdomain `products` will contain 8 of 14 concepts (after fix), `fundamentals` 5, `debt` 3, `automation` 1. Heavy lean on products. | Optional: split `products` into `tax-and-wrappers` and `insurance`, or accept the imbalance. |
| **P2** | Resources `personal_finance.ts:617-642` | `lastVerified: "2026-06"` on every entry — fine, but `verify: false` on every entry means no entry is flagged for re-check. Several URLs (Money Control, Value Research) change site structure often. | Set `verify: true` on time-sensitive India product comparison sites. |
| **P2** | `personal_finance.ts:631-640` (paid resources) | Two entries have `url: ""` (Monika Halan, Stanley & Danko, Saurabh Mukherjea). Empty string will likely render as broken link or hidden element depending on the resources component. | Add a publisher / Amazon page URL, or omit the field. |
| **P2** | Concept idx 8 (Term vs ULIP) line 247 | Premium "12,000 to 15,000 rupees a year for 1 crore cover for a 30-year non-smoker" — directly competing comparator in idx 12 line 362 says "around 12,000 a year" and idx 12 line 249 says "8,000 to 15,000". Internal inconsistency between two concepts. | Pick one band (e.g. 10,000-15,000) and use everywhere. |
| **P2** | Bookmark / linked notes flow `[[personal_finance:N]]` | Concepts are linkable by index, but with idx 2-7 being stubs, the first 8 indices have unstable enrichment — a note `[[personal_finance:5]]` (Compounding) will resolve to a near-empty page. | After enrichment fix, the linked-note system works as intended. No code change. |
| **P2** | `personal_finance.ts:725` (safetyNote) | "talk to a SEBI-registered advisor" — good. But many enriched concept `expert` blocks already act-like (specific allocations, named products). | After P1 cleanup above, safetyNote will be properly backed up by tone. |

---

## India-specific factual accuracy notes

**Verified correct:**
- PPF 15-year lock-in, EEE status, ₹1.5 L 80C cap (line 210) — correct. PPF rate "around 7 percent" — currently 7.1% (Q1 FY26); "around 7" is acceptable.
- NPS Tier 1 75% equity cap until age 50, glide-path tapering, expense ratio under 0.1% (line 326) — correct.
- 80CCD(1B) extra ₹50,000 deduction (line 210, 326) — correct.
- 80CCD(2) employer contribution available under new regime (line 326) — correct.
- 80C ₹1.5 lakh limit (line 210) — correct.
- 80D ₹25,000 self + ₹50,000 senior parents (line 402) — correct.
- ELSS 3-year lock-in, shortest among 80C (line 210, 222) — correct.
- LTCG on equity exemption ₹1.25 lakh (line 210, 285) — correct (raised from ₹1 lakh in Budget 2024).
- LTCG rate 12.5% on equity (line 285, 299) — correct (raised from 10% in Budget 2024).
- Section 10(10D) term death-benefit exemption (line 364) — correct.
- Section 63 Indian Succession Act, will validity (line 576) — correct.
- Sarbati Devi vs Usha Devi (1984) on nominee-as-trustee (line 566) — correct.
- Indian Succession Act 1925 / Hindu Succession Act 1956 framing (line 554) — correct.
- RBI Master Direction on Credit Cards EAR disclosure (line 516) — correct in substance.
- IRDAI 2023 standardised products (Arogya Sanjeevani, Saral Suraksha) (line 402) — correct.
- Ayushman Bharat PMJAY ₹5 L family floater for low-income (line 402) — correct.

**Incorrect / stale (Budget 2025-26 — Feb 2025):**
- "7 lakh zero-tax bucket" (line 249, 285, 287) — **STALE**. New-regime rebate threshold raised to ₹12 lakh of taxable income (effective zero tax up to ~₹12.75 lakh with std deduction). This is the largest factual miss.
- "15 percent STCG" on equity / arbitrage funds (line 285, 299) — **STALE**. Raised to 20% in Budget 2024 (effective 23 Jul 2024). Three occurrences.
- Standard deduction ₹75,000 under new regime (line 249, 285, 287) — correct in number, fine to keep.

**Missing but expected by the brief:**
- DICGC ₹5 L FD insurance — not referenced anywhere. Could be added as a glossary entry or a one-line note under "Emergency fund first" or "Liquid and arbitrage funds".
- SEBI direct vs regular MF distinction — not explicit. Could surface in "Index funds beat picking" enrichment.
- IRDAI room-rent capping — covered in idx 13 line 400 ✓.
- New tax regime vs old regime trade-off — partially covered at idx 6 line 210 and idx 8 line 249, but no concept walks the actual choice end-to-end.

---

## Content quality notes (per-concept brief)

- **idx 0 "Spend less than you earn"** — fully enriched, India-correct, savings-rate quiz is sharp. Good.
- **idx 1 "Emergency fund first"** — fully enriched, good. Buffer-target bar chart is useful. Could explicitly mention sweep FD + DICGC ₹5 L.
- **idx 2 "Kill high-interest debt first"** — STUB. Critical fix needed.
- **idx 3 "Pay yourself first (automate it)"** — STUB. Also stranded from the `automation` subdomain. Critical fix needed.
- **idx 4 "Index funds beat picking"** — STUB. SPIVA reference present but unsupported by quiz/tasks.
- **idx 5 "Compounding"** — STUB. The core mental model of the whole domain is under-built. Plus the numbers in `deep` are off (₹1.6 cr vs actual ~₹1.9 cr).
- **idx 6 "Inflation"** — STUB. 5-7% claim is defensible but undocumented.
- **idx 7 "Insurance: term + health"** — STUB and **redundant** with idx 8, 12, 13. Recommend delete or convert to umbrella.
- **idx 8 "Term insurance vs ULIP trap"** — fully enriched, good. Stale 7-lakh tax-regime mention.
- **idx 9 "Liquid and arbitrage funds"** — fully enriched, good, but stale STCG 15% and stale ₹7 L threshold; named AMCs in tasks.
- **idx 10 "NPS asset allocation"** — fully enriched and accurate. Strong concept.
- **idx 11 "Term insurance sum assured rule of thumb"** — fully enriched, good. Section 10(10D) and HLV approach are good touches.
- **idx 12 "Health insurance basics and India OPD trends"** — fully enriched, IRDAI 2023 / Section 80D / PMJAY all correct.
- **idx 13 "50-30-20 rule and its critique"** — fully enriched. India-metro critique is sharp.
- **idx 14 nothing** — last concept is idx 13 ("Debt avalanche vs snowball" + "Credit card debt math" + "Estate planning basics") — wait, recount: concepts list has 17 entries. Let me re-state: enrichment is good on the late concepts; only the 6 mid-stack stubs are the structural problem.

(Actual concept count check: 14 by the line-counter; 13 with subdomain, 1 stranded. The 5 one-line stubs at lines 157-162 are the "Kill high-interest debt", "Pay yourself first", "Index funds", "Compounding", "Inflation", "Insurance" — six concepts. Total = 14 enriched + 6 stubs? Re-count: there are concepts at idx 0,1, then 6 one-liners (idx 2-7), then enriched idx 8-13 + estate planning. That's 14 total — matches `subdomain:` grep returning 13 hits since one stub Estate also has subdomain. Net: 6 stubs out of 14, 8 enriched.)

---

## Suggested next moves

1. **Enrich the 6 stub concepts** (idx 2-7) to match the shape of idx 8-13: `subdomain`, `definition`, `prereqs`, `generic`, `expert`, `reflect`, 2-3 quiz items, 3 tasks (basic/easy/advanced), optional `diagram`. Order by impact: Compounding > Pay yourself first > Index funds > Inflation > Kill high-interest debt > Insurance umbrella (or delete the umbrella).
2. **Global find-and-replace for stale Budget numbers**:
   - "7 lakh zero tax" / "7 lakh rebate" → "12 lakh rebate" (with FY 2025-26 disclaimer).
   - "15 percent STCG" → "20 percent STCG".
3. **Strip named AMCs** from task copy (idx 9 line 314). Replace with neutral "any top-rated low-expense liquid fund".
4. **Add `intro` strings to all 4 subdomains** (line 50-55) for SEO + subdomain page UX.
5. **Extend glossary** to cover the ~15 untranslated acronyms used in `expert` blocks (PPF, NPS, ULIP, 80C, 80CCD(1B), 80D, LTCG, STCG, APR, EAR, OPD, IRDAI, SEBI, RBI, DICGC).
6. **Recompute the marquee numbers**: ₹5k/mo→60 compounding (₹1.6 cr → ~₹1.9 cr), 0.1% vs 1.5% fee drag (25-30% → ~35-40%), credit card 5-year payoff at minimum (~7-8 years). Either fix to actuals or hedge with "roughly" / "depending on assumptions".
7. **Normalise advanced-task XP** to a single value across all concepts.
8. **Add a "New regime vs old regime" concept** (or extend idx 6) — currently the most important post-2023 tax decision for Indian savers has no dedicated concept.
9. After fixes, re-walk `/sub/automation` to confirm at least one concept renders, and `/concepts/2` through `/concepts/7` to confirm full enrichment.
10. After fixes, regenerate any cached repomix snapshot under `.agentmaster/codebase.xml` so downstream skills see the corrected content.
