import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "negotiation",
 icon: "🤝",
 hue: "#fb7185",
 category: "People & Influence",
 name: "Negotiation & Persuasion",
 tagline: "Reach agreement without losing yourself",

 basics: "Negotiation isn't smooth talking or sneaky tricks. It's the boring, careful work of finding a deal that's better for both sides than walking away with nothing. The single biggest mistake people make is fighting about positions (\"I want ₹X\") instead of asking about interests (why each side actually wants what they're asking for). Once you separate those two things, deals that looked impossible start to feel obvious. You're not trying to win. You're trying to find the version of the deal where both of you walk out lighter than you walked in.",
 whyItMatters: [
  "Your salary, your rent, your deadline, your boundary with a difficult relative, all negotiations, all the time.",
  "Most people massively under-negotiate. A 10% higher starting salary, compounded across a career, is more money than most lottery winners take home.",
  "You get better outcomes without setting the relationship on fire, because long-term trust is part of the win.",
  "You spot bad-faith tactics when they're aimed at you, instead of feeling weirdly cornered after the meeting."
 ],
 realWorldExample: "Two sisters are fighting over the last orange in the fruit bowl. They both want it. They settle for the classic compromise, cut it in half. One sister squeezes her half for juice and throws away the peel. The other grates her half for the peel to bake a cake, and throws away the fruit. They both got half of what they wanted. If either of them had asked the other \"why do you want the orange?\", they'd both have walked away with twice as much. That's the entire trick: positions are what people say they want; interests are why. Trade on interests and almost every deal gets bigger.",

 mentors: [
  { name: "Fisher & Ury", for: "principled negotiation, BATNA", work: "Getting to Yes (1981)" },
  { name: "Chris Voss", for: "tactical empathy + calibrated questions", work: "Never Split the Difference (2016)" },
  { name: "Stuart Diamond", for: "small steps, emotion-aware", work: "Getting More (2010)" },
  { name: "Robert Cialdini", for: "influence levers in negotiation context", work: "Influence (1984)" }
 ],

 diagrams: [
  { kind: "spectrum", title: "Position vs interest", caption: "Surface position is rarely the real interest. Trade on interest.", data: { left: "Position (\"$50k\")", right: "Interest (\"financial security + growth path\")", marker: 0.7, note: "Trade on interests, not positions" } },
  { kind: "quadrant", title: "ZOPA with BATNA", caption: "Zone of Possible Agreement sits between each side's walk-away.", data: { xAxis: ["Their BATNA", "Their target"], yAxis: ["Your BATNA", "Your target"], items: [{ label: "ZOPA", x: 0.55, y: 0.55 }, { label: "No deal", x: 0.1, y: 0.1 }] } }
 ],

 synthesis: [
  { concept: "Anchoring", linksTo: "psychology", note: "First-number bias is the most powerful single tool in negotiation." },
  { concept: "Specificity", linksTo: "communication", note: "Specific asks land. 'A fair raise' doesn't." }
 ],

 subdomains: [
  { id: "foundations", name: "Foundations" },
  { id: "tactics", name: "Tactics" },
  { id: "emotion", name: "Emotion and Empathy" },
  { id: "ethics", name: "Win-Win and Ethics" },
 ],

 concepts: [
  { t: "BATNA",                 short: "Your Best Alternative To a Negotiated Agreement. Whatever you'll do if this deal falls through.",                                               deep: "Fisher and Ury's most important single idea. Your power at any negotiating table isn't your patience or your charm, it's your BATNA, the option you can walk to if this deal collapses. If your BATNA is \"go home and have a stressful conversation with my landlord,\" you're weak. If your BATNA is \"take the offer from the other company that's still on my desk,\" you're strong, and the other side can usually feel it. The best work in negotiation happens before you sit down: actually improving your BATNA. Get a second offer. Save up enough buffer to walk away. Then enter the room.",                                                                                                                               status: "framework", reflect: "What's your BATNA in your most live negotiation right now? If you can't answer in a sentence, that's the prep gap." },
  { t: "Positions versus interests",       short: "What they're demanding vs. why they want it.",                                                                         deep: "A position is the thing being asked for: \"I want ₹15 lakh.\" An interest is the reason underneath: \"I want financial security and a clear path to a senior role.\" Positions are narrow, you fight about them until someone moves. Interests are wide, there are usually five different ways to satisfy each one. The orange-sisters story works because once you ask why, suddenly there's a deal nobody saw. Almost every stuck negotiation is two people arguing about positions while their actual interests are perfectly compatible.",                                                                                                                                                             status: "framework", reflect: "Pick a recent stuck negotiation. What was the position on each side? Now ask 'why?' What's the interest underneath?" },
  { t: "ZOPA, Zone of Possible Agreement",   short: "The overlap between each side's acceptable ranges. If there's no overlap, there's no deal.",                                                 deep: "You're willing to sell your scooter for at least ₹30,000. The buyer is willing to pay up to ₹35,000. The ZOPA, the Zone of Possible Agreement, is the strip between ₹30,000 and ₹35,000. Any number in there is a deal both of you can live with. The whole negotiation is just figuring out where, in that strip, you land. If your minimum is higher than their maximum, there's no ZOPA, and no amount of clever talking will fix it. A surprising number of failed negotiations aren't disagreements; they're cases where nobody realised there was no overlap in the first place.",                                                                                                                                            status: "settled",  reflect: "Think about your last negotiation. Did you ever try to figure out where the ZOPA was? Could you have, with the right questions?" },
  { t: "Anchoring (the first number on the table)", short: "Whoever puts the first number out drags everything toward it.",                                                               deep: "Research is consistent here, including with experienced negotiators: the first specific number named in a negotiation pulls the whole conversation toward it, even when both sides know it's a starting position. You've heard \"never make the first offer\", that's not quite right. The smarter rule is: if you have a real information advantage (you've researched the market, you know the comparable salaries), make the first offer high and confident. If you don't, let them anchor, and then negotiate from there. Either way, the first number is doing a lot of work, so don't let it be a random number you didn't think about.",                                                                                                             status: "settled",  reflect: "When did anchoring last get used on you? What number would you have brought to the table first if you'd prepared?" },
  { t: "Tactical empathy (Chris Voss)",     short: "Name the emotion you sense in the other side. It defuses faster than arguing against it.",                                                   deep: "Chris Voss spent decades as the FBI's lead international hostage negotiator and brought the techniques to business. The biggest single move he teaches is the verbal label: \"It seems like you're under a lot of pressure to close this quarter.\" Naming what the other side is feeling does something almost magical, it tells them you actually heard them, defuses the heat, and often gets them to correct you or say more than they meant to. The technique is invisible if you do it cleanly. It works because most of us spend negotiations talking; almost nobody is listening enough to name what's underneath.",                                                                                                                         status: "framework", reflect: "Try labeling once today in any conversation: \"It seems like…\" Watch what happens to the other person's posture." },
  { t: "Calibrated questions",          short: "\"How am I supposed to do that?\" beats \"no\" almost every time.",                                                               deep: "Voss's other big move. When someone makes a demand you can't meet, the instinct is to refuse, and refusing puts the other side in a corner where they fight back. A calibrated question does the same job from a different angle. \"How am I supposed to do that with the budget I have?\" \"What would you do in my position?\" \"What's driving the timeline?\" The problem ends up in their lap instead of yours, they don't feel shut down, and you've quietly gathered information. The trick is asking real questions, not passive-aggressive ones disguised as questions.",                                                                                                                                               status: "framework", reflect: "Where could you replace a hard \"no\" with \"how am I supposed to do that?\" this week?" },
  { t: "The mirror",               short: "Repeat the last few words they said, as a question. They keep talking.",                                                             deep: "Almost invisible, almost free. The other side says \"…and we just don't see a path to that number this quarter.\" You say, gently: \"…this quarter?\" Nine times out of ten, they fill the silence and explain more than they meant to. You learn what's actually driving them without asking a single direct question. It works because humans are deeply uncomfortable with silence, and a small open question is irresistible. Try it for a week in normal conversations and you'll be surprised how often it cracks something open.",                                                                                                                                                                 status: "framework", reflect: "Try the mirror on your next conversation. Count how many times the other person fills the silence with something useful." },
  { t: "Win-win, or you didn't really win",   short: "If they walk out bitter, the next round is going to cost you.",                                                                 deep: "One-shot deals are rare. Most of your real negotiations, with bosses, vendors, partners, family, are part of a long sequence. A \"win\" where the other side walks out feeling cheated quietly costs you their cooperation, their referrals, and their willingness to negotiate again. The actual measure of a good outcome is: did you get a fair share of the value, and is the relationship intact? Track both. If either tanks, you didn't really win, you just borrowed a result from the future.",                                                                                                                                                                                 status: "framework", reflect: "Pick a 'win' you had recently. Is the relationship intact six months later? Did they come back to deal with you again?" }
 ],

 counterView: "Cialdini-style 'influence techniques' aren't neutral. There's a real ethical line between making your case clearly (good) and using cognitive levers against someone who'd refuse if they noticed (manipulative). Also: tactical-empathy-as-Voss-style-script can curdle into theatre if not anchored to genuine respect. The 'always make the first offer' / 'never make the first offer' debates are over-stated, the real answer is 'depends on your information advantage,' which is a less satisfying soundbite. Finally, negotiation training overweights one-shot deals; most of your real negotiations are repeated, and the relationship is part of the outcome.",

 capabilities: [
  "Identify your BATNA and theirs before any real negotiation.",
  "Separate positions from interests in a 30-second conversation.",
  "Make the first offer when you have an info advantage; not when you don't.",
  "Use labels and calibrated questions instead of hard 'no.'",
  "Walk away gracefully when there's no ZOPA."
 ],
 cheatsheet: [
  "Power = your BATNA. Improve it before the table.",
  "Trade interests, not positions.",
  "If you have info, anchor first. If not, let them.",
  "'How am I supposed to do that?' > 'no.'",
  "Label emotions. Mirror last 3 words.",
  "If they leave bitter, you didn't win."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Get the vocabulary",              do: "Read Getting to Yes (Fisher & Ury) and Never Split the Difference (Voss). One classic, one modern. Don't try to apply anything yet, get the names in your head first.",                                                                                 milestone: "You can name BATNA, ZOPA, anchoring, labels, and mirrors from memory and explain what each does.",                         time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Install a real prep ritual",           do: "For every real negotiation from now on, before you start, write down four things in a notebook: your BATNA, your target, your walk-away, your guess at theirs. Most people skip this step and improvise. You won't.",                                                         milestone: "You feel calmer entering negotiations because the prep document is doing half the work for you.",                         time: "~1 month" },
  { rank: "Practitioner", focus: "Use the small tools in low-stakes places",    do: "Practise labels and mirrors in tiny everyday situations, returns to a shop, scheduling with a vendor, asking for a small discount. Low stakes is where you learn the moves without panic.",                                                                      milestone: "Labels and mirrors come out of your mouth naturally even when you're slightly stressed.",                              time: "~2-3 months" },
  { rank: "Specialist",  focus: "Run one real high-stakes negotiation deliberately", do: "Pick one upcoming negotiation that genuinely matters, salary, a vendor contract, a property deal. Prep it fully in writing. Run it. Do an honest post-mortem afterwards.",                                                                             milestone: "You moved a real number using your method, and you can describe in writing what worked and what didn't.",                     time: "~6 months" },
  { rank: "Expert",    focus: "Multi-party and cross-cultural",         do: "Most real negotiations have more than two parties, three vendors, multiple stakeholders, cross-cultural dynamics. Learn to hold a table where the variables and the etiquette both shift.",                                                                     milestone: "You can run a complex multi-party negotiation without losing the thread.",                                     time: "~1 year+" },
  { rank: "Master",    focus: "Coach others through their own deals",      do: "Help other people prep and run their negotiations. Watching other people's situations sharpens your own framework.",                                                                                                         milestone: "The people you coach close better deals than they would have without you.",                                     time: "~2 years+" },
  { rank: "Grandmaster", focus: "Mediate, build, or write the playbook",      do: "Mediation, scholarship, or large-deal practice that shapes outcomes for hundreds of others.",                                                                                                                    milestone: "When people in your industry have a genuinely hard table, your name comes up.",                                   time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Harvard Program on Negotiation (PON), blog",     what: "PON publishes rigorous, free articles + research summaries.",             url: "https://www.pon.harvard.edu/category/daily/",         verify: false, lastVerified: "2026-06" },
   { name: "Chris Voss, public talks (YouTube)",         what: "Free way to absorb the core moves.",                          url: "https://www.youtube.com/results?search_query=Chris+Voss+negotiation", verify: true, lastVerified: "2026-06" },
   { name: "MasterClass, Chris Voss preview clips (YouTube)",   what: "Free trailers + select clips from the paid course.",                 url: "https://www.youtube.com/@MasterClass",             verify: true, lastVerified: "2026-06" },
   { name: "Wikipedia, BATNA",                  what: "Compact reference + sources for the core concept.",                  url: "https://en.wikipedia.org/wiki/Best_alternative_to_a_negotiated_agreement", verify: false, lastVerified: "2026-06" },
   { name: "Stanford Online, Negotiation samplers",        what: "Some free sampler lessons; full courses paid.",                    url: "https://online.stanford.edu/",                 verify: false, lastVerified: "2026-06" },
   { name: "FBI Crisis Negotiation Unit articles",         what: "Public articles + Behavioral Change Stairway Model.",                 url: "https://leb.fbi.gov/topics/crisis-negotiation",         verify: true, lastVerified: "2026-06" },
   { name: "Negotiate Anything, podcast (Kwame Christian)",    what: "Free, regular interviews on negotiation craft.",                    url: "https://americannegotiationinstitute.com/podcasts/",      verify: false, lastVerified: "2026-06" },
   { name: "Black Swan Group, blog (Chris Voss's company)",    what: "Articles + breakdowns from Voss's team.",                       url: "https://www.blackswanltd.com/blog",               verify: false, lastVerified: "2026-06" },
   { name: "Adam Grant, Give and Take TED talk",         what: "Negotiation through the lens of reciprocity styles.",                 url: "https://www.ted.com/speakers/adam_grant",            verify: false, lastVerified: "2026-06" },
   { name: "Getting to Yes, Fisher & Ury (library)",       what: "The original classic.",                                 url: "https://en.wikipedia.org/wiki/Getting_to_Yes",         verify: true, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Getting to Yes, Fisher & Ury",            what: "Principled negotiation, BATNA, interests vs positions.",                url: "https://en.wikipedia.org/wiki/Getting_to_Yes",         price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Never Split the Difference, Chris Voss",       what: "Tactical empathy + labels + calibrated questions.",                  url: "https://www.blackswanltd.com/",                 price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Getting More, Stuart Diamond",            what: "Emotion-aware, small-steps approach.",                         url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Influence, Robert Cialdini",             what: "Six levers used in negotiation contexts.",                       url: "https://www.influenceatwork.com/",                price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Bargaining for Advantage, G. Richard Shell",     what: "Academic Wharton classic, well-organised.",                      url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Beyond Reason, Roger Fisher & Daniel Shapiro",    what: "Emotions in negotiation, from the Getting to Yes lineage.",              url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Power of a Positive No, William Ury",       what: "Saying no without losing the relationship.",                      url: "https://williamury.com/",                    price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Negotiation Genius, Malhotra & Bazerman",       what: "Harvard professors; behavioural + practical.",                     url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Difficult Conversations, Stone/Patton/Heen",     what: "Adjacent skill, having the hard talk before the negotiation.",             url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "MasterClass, Chris Voss",               what: "Voss's full video course on negotiation.",                       url: "https://www.masterclass.com/classes/chris-voss-teaches-the-art-of-negotiation", price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Map your BATNA", d: "Pick one live negotiation. Write your BATNA, target, walk-away, and your guess at theirs.", xp: 40 },
  { t: "Label once", d: "In any conversation today, say 'It seems like…' and label an emotion. Note the response.", xp: 30 },
  { t: "Calibrated question", d: "Replace one 'no' with 'how am I supposed to do that?' Note what happens.", xp: 30 },
  { t: "Mirror experiment", d: "Repeat someone's last 1-3 words as a question. Count how often they elaborate.", xp: 30 },
  { t: "Ask for one discount", d: "Politely ask for a 5-10% discount on something today. Note the result. (Real-world stakes, low pressure.)", xp: 50 }
 ],
 capstone: { t: "Run a real negotiation with method", d: "Pick one real upcoming negotiation (salary, contract, vendor). Prep BATNA/ZOPA/interests in writing. Run it. Do a written post-mortem on outcome + relationship.", xp: 200 },

 quiz: [
  { q: "What's your BATNA?", options: [
   { text: "Best Alternative To a Negotiated Agreement.", correct: true },
   { text: "Best Acceptable Target Number Amount.", misconception: "Made-up acronym; not the term." },
   { text: "Your minimum acceptable offer.", misconception: "Close, but BATNA is your outside option, not your floor in this deal." },
   { text: "Their best offer.", misconception: "That's their target, not your BATNA." }
  ], why: "Your BATNA is what you'll do if this deal fails, it sets your real power and walk-away.", testOut: true },
  { q: "ZOPA stands for…", options: [
   { text: "Zone of Possible Agreement, overlap between both sides' acceptable ranges.", correct: true },
   { text: "Zero Other Party Agreement.", misconception: "Not a real term." },
   { text: "Zone of Personal Anchoring.", misconception: "Made up." },
   { text: "Zoning of Pricing Allowance.", misconception: "Made up." }
  ], why: "ZOPA is the overlap between each side's acceptable range. No overlap = no deal." },
  { q: "Voss's 'calibrated question' is best characterised as…", options: [
   { text: "Open-ended 'how/what' question that puts the problem in their lap without confrontation.", correct: true },
   { text: "Yes/no question to force a commitment.", misconception: "Closed questions trigger resistance; calibrated questions soften." },
   { text: "Same as a leading question.", misconception: "Leading questions are coercive; calibrated questions are open." },
   { text: "A question with a specific dollar amount.", misconception: "Specific anchors are useful; that isn't what 'calibrated' means here." }
  ], why: "'How am I supposed to do that?' makes the other side own the constraint without you saying no." },
  { q: "Should you make the first offer?", options: [
   { text: "Never, it always anchors you down.", misconception: "Anchoring usually drags toward the first number; making it first can favour you with info." },
   { text: "Always, it always works in your favour.", misconception: "Too strong; bad first offers anchor the wrong direction." },
   { text: "When you have a real information advantage. Otherwise, let them.", correct: true },
   { text: "Only at the very end.", misconception: "First offers anchor the whole conversation, so 'end' defeats the purpose." }
  ], why: "Anchoring is real and powerful, use it when you have info; let them anchor when you don't." },
  { q: "You closed a great deal but the other side feels burned. What's true?", options: [
   { text: "You won. Move on.", misconception: "Most relationships are repeated games, burning them loses future deals." },
   { text: "In a repeat game, you probably didn't win, relationship is part of outcome.", correct: true },
   { text: "Their feelings don't matter.", misconception: "Even ethically, feelings predict whether they come back." },
   { text: "Negotiation is zero-sum, always.", misconception: "Most negotiations are positive-sum if interests are surfaced." }
  ], why: "Track outcome and relationship together. A bitter counterparty usually costs you more than the deal won." }
 ],

 flashcards: [
  { front: "BATNA?", back: "Best Alternative To a Negotiated Agreement, your fallback if the deal fails. Power proportional to it." },
  { front: "ZOPA?", back: "Zone of Possible Agreement, overlap between each side's acceptable ranges. No overlap = no deal." },
  { front: "Position vs interest?", back: "Position is what they demand. Interest is why. Trade on interests, not positions." },
  { front: "Anchoring in negotiation?", back: "First number drags the conversation. Anchor first if you have info; let them anchor if you don't." },
  { front: "Tactical empathy?", back: "Label the emotion you sense ('It seems like you're under pressure to close…'). Defuses + opens information." },
  { front: "Calibrated question?", back: "Open 'how/what' question that puts the problem in their lap. 'How am I supposed to do that?' beats 'no.'" },
  { front: "The mirror?", back: "Literally repeat the last 1-3 words as a question. They keep talking; you learn more." },
  { front: "Win-win logic?", back: "In repeat games, relationship is part of outcome. A win that burns the counterparty usually loses long-run." }
 ],
 glossary: [
  { term: "BATNA", def: "Best Alternative To a Negotiated Agreement." },
  { term: "ZOPA", def: "Zone of Possible Agreement, overlap of acceptable ranges." },
  { term: "Anchor", def: "First number that biases the negotiation range." },
  { term: "Label", def: "Voss-style verbal acknowledgment of the other side's emotion." },
  { term: "Mirror", def: "Repeating the last 1-3 words to invite elaboration." },
  { term: "Position", def: "What someone is asking for on the surface." },
  { term: "Interest", def: "Why they're asking for it." },
  { term: "Principled negotiation", def: "Fisher & Ury's method, focus on interests, generate options, use objective criteria." }
 ]
};

export default d;
