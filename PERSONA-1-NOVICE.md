# PERSONA 1 — Priya (19, Tier-2 India, Phone, Slow 4G)

> First-gen learner. Tried Khan Academy and BYJU'S, bounced from both. Father pays the data bill. Scared of wasting time and being made to feel stupid.

---

## Summary

- "Hub for learning anything, two minutes a day" — okay, but *what* do I actually do? Nothing here looks like a button that says "Start your first lesson." It looks like a directory.
- The goals list scared me a little. "Become hard to manipulate" — am I being manipulated? Is this a course for paranoid people? Why is that the *first* option?
- "FSRS spaced repetition" — I do not know what FSRS is. I almost closed the tab. Why is a stranger acronym on the home page?
- Personal Finance and Law felt the most India-real. Rupees, lakhs, BNS, term insurance, PPF. That earned trust. The rest feels Western-translated.
- The page loaded slow on my phone in college canteen wifi. Once it loaded, the catalogue was hidden behind a button. I should not have to click "Browse all 15 domains" before I see them on a directory.
- "No login. No analytics." — nice, but I have heard that before. I want to see a tiny *India* mention, or someone's face, or a date. Otherwise it could be anyone.
- Concept text is too long. I read 4 lines and scroll. The "deep" sections are essays. On phone, that is 6 swipes.

---

## P0 / P1 / P2 Table

| # | Sev | Location | Problem (her voice) | Concrete fix |
|---|-----|----------|----|----|
| 1 | P0 | `components/HubHero.tsx:73` (`FSRS spaced repetition` chip) | "FSRS is gibberish. I almost left." | Replace with "Daily 5-min reviews" or "Remembers what you forget." Keep FSRS for the /about page. |
| 2 | P0 | `components/Onboarding.tsx:21` (first goal: "Become hard to manipulate") | "Sounds paranoid. Is this a self-defence app?" | Move to position 5 or 6. Lead with "Get my money in order" or "Think more clearly" — both top-search intent for Indian undergrads. Reword to "Spot manipulation in ads and arguments." |
| 3 | P0 | `components/HubHero.tsx:34` ("The hub for learning anything") + no visible CTA button | "I do not know what to *click*." There is a search box but no big orange 'Start' button. | Add a single primary CTA: `Take the 60-second goal quiz` → opens Onboarding. Right now the only entry into onboarding is the auto-modal on first visit; if she dismisses it, it never returns. |
| 4 | P0 | `components/HomeShell.tsx:74-85` (catalogue hidden behind button) | "Why am I clicking 'Browse all 15 domains' on the home of a learning catalogue?" | Show the 15-tile grid by default. Keep the 4 curated picks above it as a Start Here strip. New-user gate is the wrong call here. |
| 5 | P0 | All domain pages: `data/domains/*.ts` (70-120 KB per file) | "Page took 6 seconds to open. I was about to swipe back." | Domain pages must split lazy by tab. Basics + Concepts inline; Roadmap, Resources, Cheatsheet, Counter dynamic-import on tab click. AUDIT.md P1/P6 already flagged this but it is P0 for slow-4G users. |
| 6 | P1 | `components/Onboarding.tsx` line copy | "'Things you'd like to actually change' is vague. Change *what*?" | "Pick what you want to learn this month" — anchors it to a timebox, not identity. |
| 7 | P1 | `lib/xp.ts:50-52` "Practitioner / Expert / Master / Grandmaster" | "Grandmaster sounds like chess club. I just opened the app." | Either keep playful and own it, or rename to "Comfortable / Confident / Fluent / Teacher." First-gen learners are sensitive to gamey labels that strip credibility. |
| 8 | P1 | `lib/mastery.ts:35` (concept "proven" requires reflectAnswer > 20 chars + accuracy ≥ 0.6) | "I wrote a 4-word reflection in Hinglish because I think in Hinglish. It did not count." | 20-char gate is fine; but reflection prompts should hint *acceptable length*, and accept short answers from learners who genuinely got it. Show "+15 XP earned" feedback either way. |
| 9 | P1 | `components/TrustStrip.tsx:13` ("No analytics. We don't run trackers.") | "Everyone says no tracking. Prove it." | Add one line: "Open-source, MIT licensed. Verify our code on GitHub." Link the repo. Trust = verifiability. |
| 10 | P1 | `components/HubHero.tsx:20` quickJump array hardcoded English-only | "Communication, Negotiation, Mental Models — I don't know what 'mental model' means in school." | Tooltips or 4-word sub-tagline under each chip. "Mental Models — how smart people think" works. |
| 11 | P1 | `data/domains/psychology.ts:11` basics paragraph (250+ words) + similar across all domains | "Wall of text. On my phone this is 8 swipes before I see anything I can do." | Cap "basics" at 80 words. Move the rest to "Deep dive" expandable. AUDIT.md C3 raised the opposite (more depth). Both can coexist — short summary always visible, expanded long version optional. |
| 12 | P1 | `components/HomeShell.tsx:46` HomeStats says "411 daily quotes" | "Why do I care about 411 quotes?" | Replace with "5 missions per domain. 8+ flashcards. Works offline." Concrete-utility numbers, not catalogue brag. |
| 13 | P1 | `components/Onboarding.tsx:88` "Twenty seconds. Pick the things…" | "Twenty seconds *to do what*? What happens after?" | "20 seconds. We pick 1 domain that fits you. You start a 2-min lesson." Tell her the destination. |
| 14 | P1 | `components/HubHero.tsx:73-75` stats strip "0 touched by you" | "Made me feel behind before I started." | For brand-new users, show "Start anywhere" not "0 touched by you." |
| 15 | P1 | No India language / regional cue on home | "Could be a US site. The rupee shows up only after I open Personal Finance." | Add a tiny "Made for India context — finance, law, health localised" line in Trust Strip. Already true in content, just unsurfaced. |
| 16 | P2 | `components/Coachmarks.tsx:13-17` 5-step tour | "Five popups after onboarding is a lot. I just want to read one concept." | Cut to 2 steps: Domains menu + `?` for shortcuts. The rest is discoverable. |
| 17 | P2 | Status badges "settled / debated / framework" on every concept | "What is 'framework' status? Does that mean it's wrong?" | Tooltip on first hover or one-line legend on Basics tab. "Framework = a useful lens, not a fact." |
| 18 | P2 | Goal labels in Onboarding all start with verbs in English idiom ("Get my money in order", "Make my savings work for me") | Fine, but two goals overlap: money + savings. | Merge or differentiate: "Get my money in order (budgeting, debt)" / "Grow my savings (invest, SIP)." |
| 19 | P2 | `components/HubHero.tsx:39` "Pick a domain and start" | "Start what?" | "Pick a domain. Read one concept. Two minutes." Make the action concrete. |
| 20 | P2 | `lib/xp.ts:6-18` XP table | She will not see this, but: `streakDay: 10` rewards login, not learning. Mild contradiction with "ethical XP" claim. | Move streak XP to "kept a daily review queue clean" rather than "opened the app." |
| 21 | P2 | No share-progress affordance visible on home | "I want to show my dad I used the data plan for something real." | Surface `/share` link from home stats for users with XP > 50. Already exists; just not discoverable. |
| 22 | P2 | "Free, no upsell" trust card | "Then how do you survive? Sounds suspicious." | "Built by one person. Hosted on Vercel free tier. No business model needed." One sentence of credibility. |

---

## Top 5 changes to ship next (impact-per-effort)

1. **Kill jargon on home.** Replace "FSRS spaced repetition" with plain English. (15 min. P0.)
2. **Re-order onboarding goals.** Lead with "Get my money in order" and "Think more clearly." Move "Become hard to manipulate" to position 6. Rewrite to "Spot manipulation in ads and arguments." (10 min. P0.)
3. **Show the catalogue by default on home.** Drop the "Browse all 15 domains" gate. Keep StartHereBento above the grid for first-timers. (20 min. P0.)
4. **Add a visible primary CTA in the hero.** "Take the 60-second goal quiz" button that re-opens Onboarding even if dismissed. (30 min. P0.)
5. **Split domain pages by tab.** Basics + Concepts load inline; the other 8 tabs dynamic-import on click. Cuts initial domain page from ~100 KB to ~30 KB. (2-3 hrs. P0 for 4G users, AUDIT P6 already noted.)

---

## Direct quotes (what she'd say out loud)

- "Okay so what do I press."
- "FSRS? Is that a virus?"
- "Hard to manipulate by who?"
- "I want to learn finance, why is psychology first."
- "Why does the home page hide all the courses?"
- "Bro this is loading."
- "Practitioner sounds like a yoga app."
- "It says no tracking but everyone says that."
- "Okay this finance one is actually for India. SIP, PPF, term insurance. Saved."
- "Why is the Basics section so long, I just want to know what this domain *is*."
- "If I close the popup, can I get it back?"
- "0 touched by you — yeah I know, I just got here."
- "Cool, BNS not IPC. They updated this."
- "Can I show my friend my progress?"
- "I'll come back tomorrow if it remembers me. If I have to do onboarding again I'm out."
