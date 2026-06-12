# PERSONA-2-PRO

Reviewer: Rohit, 31, mid-level EM, Bengaluru SaaS, ₹40L. Skeptical of self-help theatre. 15 min/night. Wants negotiation, communication, marketing, money — at a level a senior IC/EM cannot get from ChatGPT in 30 seconds.

Date: 2026-06-12. Walked: `/`, `/domain/negotiation`, `/domain/communication`, `/domain/marketing`, `/review`, `/dashboard`, `/settings`. No code changed.

---

## Summary

Polymath is the first "learn at depth" product I've opened that doesn't insult me. The epistemic-honesty layer (status badges, debated tags on Mehrabian, 10k-hour, growth mindset, NPS) is the real moat — Reforge sells frameworks as truth, this one tells me which ones to distrust. The negotiation, communication, and marketing concepts I sampled (BATNA, logrolling, reactive devaluation, BLUF, curse-of-knowledge, decoy effect, NPS critique) are senior-manager grade; I learned a thing or two without skim-resentment.

But the product fails at the load-bearing promise it makes to *me specifically*: "15 minutes before bed, fits your time." The SessionPicker — the only thing that operationalises a 15-min session — is hidden behind a collapsed "Show daily rituals" toggle AND gated on `started ≥ 3 || xp ≥ 100`. So a returning user with one domain has no entry point. The 45-min preset doesn't even go to `/review?minutes=45`; it dumps me into a domain page with no script. And the 15-min preset promises "reviews + one new concept" but the implementation only caps FSRS cards. There is no "new concept" half. That gap is the difference between this being a daily habit and another tab I close.

Below: P0/P1/P2, the Reforge/Lenny/Maven comparison, and the five things to ship next.

---

## P0 / P1 / P2 table

| ID | Sev | Location | Problem in his voice | Fix |
|---|---|---|---|---|
| P0-1 | P0 | `components/HomeShell.tsx` L93–106 | "I came back for 15 minutes. The session picker is hidden behind a 'Show daily rituals' fold AND only renders once I've started 3 domains. I'm not going to dig — I'll just open ChatGPT." | Pin SessionPicker above the fold for any returning user. Drop the `isActive` gate. Make 15-min the visible default. |
| P0-2 | P0 | `components/SessionPicker.tsx` L29 | "The 45-min card doesn't go to `/review?minutes=45`. It dumps me into the last domain I touched with no plan. That's not a session, that's a tab." | Either route to a 45-min scripted flow (review → 1 new concept → 1 mission) or remove the option. Don't ship dead UI. |
| P0-3 | P0 | `components/ReviewSession.tsx` L29–60 | "15-min preset says 'Reviews + one new concept.' I get the cards. Where's the new concept?" | Implement the 'one new concept' contract: after the FSRS pool drains, route to the next unseen concept in the most-touched started domain. Currently the copy lies. |
| P0-4 | P0 | `components/tabs/ConceptsTab.tsx` (Predict→Reveal→Reflect→Check→Apply) | "Each concept's five-stage loop is the right shape, but Apply = self-report 'Mark done' on a Mission. I can lie to myself for free. There's no scaffolding that I actually used it in a 1:1 today." | Add a 'commit by' date + outcome note on basic/easy/advanced tasks. Auto-resurface in Review as a 'did you do it' prompt. Tie XP to the followup, not the click. |
| P0-5 | P0 | `components/HomeShell.tsx` returning-user state | "Continue Learning just gives me the domain hub. I have to remember which concept I was on. Why?" | Persist `lastConceptByDomain` and deep-link `/domain/x?tab=concepts&i=N`. Audit U5 flags this in `AUDIT.md` — still open. |
| P0-6 | P0 | `AUDIT.md` C1, 12 domains unenriched | "Marketing, AI, Finance have full `definition / generic / expert / conceptQuiz / conceptTasks`. Negotiation and Communication only enrich ~11 of 19. The rest are paragraph dumps with no Apply layer. The two domains I came here for are half-built." | Finish enrichment on negotiation + communication first. Then psychology, mental_models, investing. |
| P1-1 | P1 | `data/domains/negotiation.ts` L11 | "'Negotiation isn't smooth talking' — fine. But the basics intro reads like a self-help book opener. Give me a Bengaluru-flavoured opener: salary review with a US-headquartered company, a vendor renewal." | Rewrite the Basics intro per domain with one India-EM-flavoured frame. Already done well on `personal_finance` (HOME_COUNTRY hook). |
| P1-2 | P1 | `components/Dashboard.tsx` Radar L203 | "The radar is decoration. Eight 5-percent points doesn't tell me what to do tomorrow. Where's 'your weakest concept this week, sharpen it'?" | Replace radar with a 'what to fix next' panel: 3 weakest concepts (already computed in ReviewSession L102 as `weakest`), plus the most-due card and the oldest unfinished mission. Demote radar to a secondary tab. |
| P1-3 | P1 | `components/FocusTimer.tsx` L15 | "Focus timer's `totalSecondsToday` is component state. Navigate away and it resets. So it doesn't actually log focused minutes." | Persist `focusedSecondsByDay` in store (same shape as `xpByDay`). Counts as evidence of effort, not XP. |
| P1-4 | P1 | `data/domains/communication.ts` BLUF concept L47 status='framework' | "BLUF is settled in technical writing literature. Calling it 'one framework' undersells. Conversely, NVC (L361) is status=framework but the empirical base is thin — that's debated." | Audit status badges per concept. Settled vs framework vs debated needs a 1-line citation policy in `agents.md`. |
| P1-5 | P1 | `components/SessionPicker.tsx` copy | "'5 min: due reviews only' is fine. '15 min: reviews + one new concept' lies (see P0-3). '45 min: deep dive: concept · quiz · mission' doesn't actually script that." | Either build the deep-dive route or replace copy with what actually happens. Promises without code = trust hit. |
| P1-6 | P1 | `app/page.tsx` / returning state | "First open of the day: I want one thing — what's due, what's new, one mission. Instead I get hero + Today + Continue + Concept-of-day + RecentActivity + Paths + Catalogue + Trust." | Compact a 'Today's 15' panel: 1 due-card count, 1 new-concept link, 1 active mission, with a single Start button. Push the rest below. |
| P1-7 | P1 | `data/domains/*.ts` 49 empty URL resources + 124 unverified | "I clicked a resource link in Negotiation, got a dead-link placeholder. Whole reason I'm here is 'no hallucinated URLs.'" | AUDIT C2 already tracks. Do the verification pass before next deploy; remove placeholders instead of shipping `url:""`. |
| P1-8 | P1 | `components/tabs/MissionsTab.tsx` | "Missions are flat. Where's the basic/easy/advanced ladder Concepts has?" | AUDIT C4 tracks. Apply level + unlock states. |
| P1-9 | P1 | `components/Dashboard.tsx` calibration score | "Calibration of 50/100 means I'm 'less than coin-flip aware of my own uncertainty'? That's a weirdly hostile number for someone who's only answered 4 quizzes." | Show n. "Calibration: 53/100 (n=4 quizzes). Comes online at n≥20." Avoid scoring noise. |
| P1-10 | P1 | Power-user gaps (entire app) | "No calendar nudge. No Slack/email digest. No public profile worth sharing. I export CSV/MD — fine — but no bulk import of saved articles from Pocket/Readwise. So my existing learning library doesn't show up here." | Ship one: an iCal feed of due-reviews. Cheapest, most defensible, no backend needed. |
| P2-1 | P2 | `components/Dashboard.tsx` "You can now" | Good idea, undersold. Add this as a downloadable CV bullet list. |
| P2-2 | P2 | `components/SettingsView.tsx` | Markdown export is great. Add Notion/Obsidian-compatible front-matter. |
| P2-3 | P2 | `components/Coachmarks.tsx` | Coachmark copy stale (AUDIT U3). |
| P2-4 | P2 | `vercel.json` | CSP allows `unsafe-inline`/`unsafe-eval`. Acceptable for v1 but contradicts the trust pitch. |
| P2-5 | P2 | `app/dashboard` route | "robots: index:false" not confirmed on personal pages (AUDIT B7). |
| P2-6 | P2 | `data/domains/marketing.ts` Byron Sharp vs Trout/Ries | Add a steelman: How Brands Grow's mental/physical availability framework challenges classic positioning. Already in mentors, not in CounterView. |

---

## Where Polymath beats Reforge / Lenny / Maven

1. **Per-claim epistemic honesty.** Reforge sells "the framework". Lenny sells "what worked at Stripe". Maven sells "the cohort with the expert". None of them tell you a thing is `debated`. Polymath flags Mehrabian, 10k-hour, growth mindset, NPS, and Love Languages as debated *inside the lesson*. That's the durable wedge.
2. **FSRS retention.** Reforge gives you a 4-week sprint and you forget 80% in three months. Lenny is a newsletter — zero retention engine. Coursera has quizzes, no spacing. Polymath schedules each card per ts-fsrs. This is the most important technical bet in the product, and it is *not communicated to Rohit anywhere on the home page or the about page in a single line he'd quote to a colleague*. Fix: "We remember it for you. You answer one card a day, you keep 90% of what you learn forever. Reforge gives you a sprint; we give you a retention engine."
3. **₹0 + local-first + no login + offline.** Maven cohorts are $300–$2000. Reforge is $1500/yr. Lenny premium is $200/yr. Coursera Plus is $400/yr. Polymath = MIT, browser-local, no email harvest. For an EM who already wastes ₹40k/yr on unread Substacks, this is the credibility play.
4. **Misconception-mapped quizzes.** Every wrong answer in a concept quiz has a `misconception` string telling Rohit *why his model was wrong*. Reforge quizzes (when they exist) just say "wrong". Lenny doesn't quiz. This is the second-best feature in the app after status badges.
5. **Steelman per domain + counter-view tab.** None of the competitors ship the strongest argument *against* their own teaching. Reforge actively can't — their authority depends on the model they're selling.
6. **No streak-shame, no FOMO, no email nags.** Lenny lives in his inbox. Reforge lives in his calendar. Maven lives in his Slack. Polymath leaves him alone. For a 31-year-old EM with a kid, that's a feature.

## Where it loses to them

1. **No cohort. No accountability. No deadline.** Maven and Reforge work because Rohit paid $1500 and his Slack channel will see him miss the assignment. Polymath is a self-report Apply step. P0-4 is the single biggest fix.
2. **No expert voice.** Lenny is *Lenny*. Reforge is Sean Ellis, Brian Balfour. Maven is the named instructor. Polymath has `mentors` (Voss, Fisher-Ury, Cialdini) as citations, but no first-person POV. Rohit doesn't trust the narrator because the narrator is anonymous. Even one named editorial voice ("audited by X, an EM at Y") would change the credibility curve. Or lean *into* the no-author angle: "edited by no single person; here are the 30 sources, click through any of them."
3. **No live applied content.** Lenny does PM interviews. Reforge runs office hours. Maven is literally live. Polymath is static. Counter: he doesn't have time for live anyway.
4. **No artefacts he can show his manager.** Reforge gives him a certificate. Maven gives him a credential. Polymath gives him a JSON export. Add a shareable rank card (`ShareCard` exists — surface it on the home page after a streak milestone, not buried in Settings).
5. **No bulk import.** Readwise wins because his Kindle highlights show up automatically. Polymath asks him to start from zero. P1-10.
6. **Sparse missions.** 5 per domain. Maven runs 12 weeks of weekly assignments. Polymath caps at "Ask for a 5% discount once." That's a starter mission, not a curriculum.

---

## Top 5 changes to ship next

1. **Reclaim the 15-minute promise** (P0-1, P0-2, P0-3 together). Pin a single "Start your 15" panel above the fold for any returning user. Behind it: a real script that does Reviews → 1 unseen concept (Predict + Reveal + 1 quiz item) → 1 mission prompt with a "I'll do this by tomorrow" commit. Kill the 45-min option until it does what it says. This is the difference between a daily habit and a graveyard tab.
2. **Finish negotiation + communication enrichment** (P0-6). Those are the two domains Rohit came for. Negotiation has 8 unenriched concepts; communication has 8. Author `definition / generic / expert / conceptQuiz / conceptTasks` for each. Budget: 2 sessions per domain. Without this, the depth pitch breaks the moment he opens BLUF or Ethos·Pathos·Logos and sees no Apply layer.
3. **Replace the radar with "what to fix next"** (P1-2). The `weakest` selector in `ReviewSession.tsx` L102 already computes it. Lift it into the Dashboard as the *first* panel: 3 weakest concepts, due-card count, oldest unfinished mission, with one-click resume into the exact concept slice. Radar becomes a footer chart for status-anxiety types.
4. **Commit-by + outcome scaffolding on missions** (P0-4). Mission completion is the entire ROI chain. Today it's `a.completeMission(d.id, i, m.xp)` on a button click. Tomorrow it's: pick a date, write a one-line outcome when you come back. XP only fires on the outcome note, not the click. Apply this to concept tasks too. Anti-farming is already a stated principle (`AUDIT.md` X0–X2); extend it to the most important action in the app.
5. **One power-user channel: iCal feed of due reviews** (P1-10). No backend needed, generate at build per anonymous user-state hash. He subscribes once in Google Calendar. The product shows up where his workday lives. Slack/email digests can come later; calendar is the lowest-cost, highest-trust integration for the no-tracking pitch.

---

## Notes on epistemic spot-check

- ✓ Mehrabian 7-38-55: correctly tagged debated in psychology + communication (`psychology.ts` L985, `communication.ts` L556, flashcard L584).
- ✓ Growth mindset: correctly debated with Sisk 2018 + Yeager 2019 cited (`psychology.ts` L316–344). Strong.
- ✓ 10,000-hour rule: correctly debated (`learning.ts` L636–662).
- ✓ NPS: correctly debated, Keiningham critique cited (`marketing.ts` L429).
- ? BLUF status=framework but functionally settled in tech-writing lit. Borderline; defensible.
- ? NVC (Rosenberg) status=framework — fine, but caveat is missing inline. Rosenberg's claims about violence-reduction are not well-evidenced.
- ? Active listening status=settled — defensible for the Rogers-original definition; weaker for the pop-psychology layered version.

The badge system earns its keep. Hold the line.
