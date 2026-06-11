import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "negotiation",
  icon: "🤝",
  hue: "#fb7185",
  category: "People & Influence",
  name: "Negotiation & Persuasion",
  tagline: "Reach agreement without losing yourself",

  basics: "Negotiation isn't manipulation or charm — it's the systematic work of finding a deal that's better for both sides than not-dealing. The single biggest mistake people make is conflating positions ('I want $X') with interests (why they want $X). Once you separate them, the trades become visible.",
  whyItMatters: [
    "Salaries, prices, deadlines, relationship boundaries — all negotiations.",
    "Most people massively under-negotiate, leaving years of value on the table.",
    "Better outcomes without burning relationships.",
    "Spot bad-faith tactics aimed at you."
  ],
  realWorldExample: "Two sisters fight over an orange. They split it. One uses her half for juice and throws the peel away; the other uses her peel for baking and throws the juice away. Positions: each wanted 'the orange.' Interests: one wanted juice, the other peel. Asking 'why' once would've doubled both their outcomes.",

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

  concepts: [
    { t: "BATNA", short: "Best Alternative To a Negotiated Agreement — your fallback.", deep: "Fisher & Ury: your power in any negotiation is proportional to your BATNA, not your patience. Improve it before you sit down. The other side's BATNA matters too — that's the floor of what they'll accept.", status: "framework", reflect: "What's your BATNA in your most live negotiation? If you don't know, that's the prep gap." },
    { t: "Position vs interest", short: "What they're demanding vs why they want it.", deep: "Positions get stuck; interests open trades. 'I want $100k' is a position; 'I want financial security and a clear path to senior' is an interest — and there are five ways to give you that.", status: "framework", reflect: "Pick a recent stuck negotiation. What was the position? What was the interest under it?" },
    { t: "ZOPA — Zone of Possible Agreement", short: "Where both sides' acceptable ranges overlap.", deep: "If your minimum > their maximum, there's no deal. Most negotiations fail not from disagreement but from not knowing whether a ZOPA exists. Calibrated questions surface it.", status: "settled", reflect: "In your last negotiation, did you ever figure out the ZOPA? Could you have?" },
    { t: "Anchoring (first offer)", short: "First number drags the whole conversation toward it.", deep: "Real and large effect — research shows even experienced negotiators are anchored. Common myth: 'never make the first offer.' Often it's best to anchor first if you have good info; let them anchor if you don't.", status: "settled", reflect: "When did anchoring last hit you? What number would you make first instead?" },
    { t: "Tactical empathy (Voss)", short: "Label the emotion you sense before negotiating against it.", deep: "'It sounds like you're under a lot of pressure to close this quarter.' Naming defuses, builds rapport, and often gets the other side to correct or expand. Voss's biggest single contribution.", status: "framework", reflect: "Try labeling once today: 'It seems like…' Watch what happens." },
    { t: "Calibrated questions", short: "'How am I supposed to do that?' beats 'no.'", deep: "Open-ended questions that start with 'how' or 'what' put the problem in their lap without confrontation. They feel respected; you avoid hard 'no.' Voss's other big move.", status: "framework", reflect: "Where could 'how am I supposed to do that?' replace a hard 'no' for you this week?" },
    { t: "The mirror", short: "Repeat the last 3 words. They keep talking.", deep: "A cheap, almost invisible tool: literally repeat the last 1–3 words as a question. The other side elaborates. Information asymmetry shifts your way without you having to ask anything.", status: "framework", reflect: "Try this on your next conversation. Count how often they fill the silence." },
    { t: "Win-win or no deal", short: "If they leave bitter, you didn't really win.", deep: "Repeat games dominate one-shots. A 'win' that poisons the relationship usually loses on the second round. Track outcome + relationship together; if either tanks, you didn't actually win.", status: "framework", reflect: "Look at a 'win' you had recently. Is the relationship intact? Did they come back?" }
  ],

  counterView: "Cialdini-style 'influence techniques' aren't neutral. There's a real ethical line between making your case clearly (good) and using cognitive levers against someone who'd refuse if they noticed (manipulative). Also: tactical-empathy-as-Voss-style-script can curdle into theatre if not anchored to genuine respect. The 'always make the first offer' / 'never make the first offer' debates are over-stated — the real answer is 'depends on your information advantage,' which is a less satisfying soundbite. Finally, negotiation training overweights one-shot deals; most of your real negotiations are repeated, and the relationship is part of the outcome.",

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
    { rank: "Novice", focus: "Vocabulary", do: "Read Getting to Yes + Never Split the Difference.", milestone: "You can name BATNA, ZOPA, anchoring, labels.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Prep ritual", do: "For every real negotiation, write BATNA, target, walk-away, ZOPA estimate before starting.", milestone: "Preparation > improvisation.", time: "~1 month" },
    { rank: "Practitioner", focus: "Use the tools live", do: "Practice labels + mirrors in low-stakes settings (returns, scheduling).", milestone: "Tools feel natural under pressure.", time: "~2–3 months" },
    { rank: "Specialist", focus: "Big stakes", do: "Run a real high-stakes negotiation with prep + post-mortem.", milestone: "You move a real number with documented method.", time: "~6 months" },
    { rank: "Expert", focus: "Multi-party / cross-cultural", do: "Negotiate across cultures, between groups, with multiple counterparties.", milestone: "You can hold a complex multi-party table.", time: "~1 year+" },
    { rank: "Master", focus: "Teach", do: "Coach others through real negotiations.", milestone: "Your students close better deals.", time: "~2 years+" },
    { rank: "Grandmaster", focus: "Build / write / mediate", do: "Mediation, scholarship, or large-deal practice that shapes outcomes for others.", milestone: "Others come to you for the hardest tables.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Harvard Program on Negotiation (PON) — blog",         what: "PON publishes rigorous, free articles + research summaries.",                          url: "https://www.pon.harvard.edu/category/daily/",                  verify: false, lastVerified: "2026-06" },
      { name: "Chris Voss — public talks (YouTube)",                  what: "Free way to absorb the core moves.",                                                    url: "https://www.youtube.com/results?search_query=Chris+Voss+negotiation", verify: true, lastVerified: "2026-06" },
      { name: "MasterClass — Chris Voss preview clips (YouTube)",     what: "Free trailers + select clips from the paid course.",                                  url: "https://www.youtube.com/@MasterClass",                         verify: true, lastVerified: "2026-06" },
      { name: "Wikipedia — BATNA",                                    what: "Compact reference + sources for the core concept.",                                    url: "https://en.wikipedia.org/wiki/Best_alternative_to_a_negotiated_agreement", verify: false, lastVerified: "2026-06" },
      { name: "Stanford Online — Negotiation samplers",               what: "Some free sampler lessons; full courses paid.",                                        url: "https://online.stanford.edu/",                                  verify: false, lastVerified: "2026-06" },
      { name: "FBI Crisis Negotiation Unit articles",                  what: "Public articles + Behavioral Change Stairway Model.",                                  url: "https://leb.fbi.gov/topics/crisis-negotiation",                  verify: true, lastVerified: "2026-06" },
      { name: "Negotiate Anything — podcast (Kwame Christian)",       what: "Free, regular interviews on negotiation craft.",                                       url: "https://americannegotiationinstitute.com/podcasts/",            verify: false, lastVerified: "2026-06" },
      { name: "Black Swan Group — blog (Chris Voss's company)",       what: "Articles + breakdowns from Voss's team.",                                              url: "https://www.blackswanltd.com/blog",                              verify: false, lastVerified: "2026-06" },
      { name: "Adam Grant — Give and Take TED talk",                  what: "Negotiation through the lens of reciprocity styles.",                                  url: "https://www.ted.com/speakers/adam_grant",                       verify: false, lastVerified: "2026-06" },
      { name: "Getting to Yes — Fisher & Ury (library)",              what: "The original classic.",                                                                 url: "https://en.wikipedia.org/wiki/Getting_to_Yes",                  verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Getting to Yes — Fisher & Ury",                        what: "Principled negotiation, BATNA, interests vs positions.",                                url: "https://en.wikipedia.org/wiki/Getting_to_Yes",                  price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Never Split the Difference — Chris Voss",              what: "Tactical empathy + labels + calibrated questions.",                                    url: "https://www.blackswanltd.com/",                                  price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Getting More — Stuart Diamond",                        what: "Emotion-aware, small-steps approach.",                                                  url: "",                                                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Influence — Robert Cialdini",                          what: "Six levers used in negotiation contexts.",                                              url: "https://www.influenceatwork.com/",                                price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Bargaining for Advantage — G. Richard Shell",          what: "Academic Wharton classic, well-organised.",                                            url: "",                                                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Beyond Reason — Roger Fisher & Daniel Shapiro",        what: "Emotions in negotiation, from the Getting to Yes lineage.",                            url: "",                                                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Power of a Positive No — William Ury",             what: "Saying no without losing the relationship.",                                            url: "https://williamury.com/",                                        price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Negotiation Genius — Malhotra & Bazerman",             what: "Harvard professors; behavioural + practical.",                                          url: "",                                                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Difficult Conversations — Stone/Patton/Heen",         what: "Adjacent skill — having the hard talk before the negotiation.",                          url: "",                                                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "MasterClass — Chris Voss",                              what: "Voss's full video course on negotiation.",                                              url: "https://www.masterclass.com/classes/chris-voss-teaches-the-art-of-negotiation", price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Map your BATNA", d: "Pick one live negotiation. Write your BATNA, target, walk-away, and your guess at theirs.", xp: 40 },
    { t: "Label once", d: "In any conversation today, say 'It seems like…' and label an emotion. Note the response.", xp: 30 },
    { t: "Calibrated question", d: "Replace one 'no' with 'how am I supposed to do that?' Note what happens.", xp: 30 },
    { t: "Mirror experiment", d: "Repeat someone's last 1–3 words as a question. Count how often they elaborate.", xp: 30 },
    { t: "Ask for one discount", d: "Politely ask for a 5–10% discount on something today. Note the result. (Real-world stakes, low pressure.)", xp: 50 }
  ],
  capstone: { t: "Run a real negotiation with method", d: "Pick one real upcoming negotiation (salary, contract, vendor). Prep BATNA/ZOPA/interests in writing. Run it. Do a written post-mortem on outcome + relationship.", xp: 200 },

  quiz: [
    { q: "What's your BATNA?", options: [
      { text: "Best Alternative To a Negotiated Agreement.", correct: true },
      { text: "Best Acceptable Target Number Amount.", misconception: "Made-up acronym; not the term." },
      { text: "Your minimum acceptable offer.", misconception: "Close, but BATNA is your outside option, not your floor in this deal." },
      { text: "Their best offer.", misconception: "That's their target, not your BATNA." }
    ], why: "Your BATNA is what you'll do if this deal fails — it sets your real power and walk-away.", testOut: true },
    { q: "ZOPA stands for…", options: [
      { text: "Zone of Possible Agreement — overlap between both sides' acceptable ranges.", correct: true },
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
      { text: "Never — it always anchors you down.", misconception: "Anchoring usually drags toward the first number; making it first can favour you with info." },
      { text: "Always — it always works in your favour.", misconception: "Too strong; bad first offers anchor the wrong direction." },
      { text: "When you have a real information advantage. Otherwise, let them.", correct: true },
      { text: "Only at the very end.", misconception: "First offers anchor the whole conversation, so 'end' defeats the purpose." }
    ], why: "Anchoring is real and powerful — use it when you have info; let them anchor when you don't." },
    { q: "You closed a great deal but the other side feels burned. What's true?", options: [
      { text: "You won. Move on.", misconception: "Most relationships are repeated games — burning them loses future deals." },
      { text: "In a repeat game, you probably didn't win — relationship is part of outcome.", correct: true },
      { text: "Their feelings don't matter.", misconception: "Even ethically, feelings predict whether they come back." },
      { text: "Negotiation is zero-sum, always.", misconception: "Most negotiations are positive-sum if interests are surfaced." }
    ], why: "Track outcome and relationship together. A bitter counterparty usually costs you more than the deal won." }
  ],

  flashcards: [
    { front: "BATNA?", back: "Best Alternative To a Negotiated Agreement — your fallback if the deal fails. Power proportional to it." },
    { front: "ZOPA?", back: "Zone of Possible Agreement — overlap between each side's acceptable ranges. No overlap = no deal." },
    { front: "Position vs interest?", back: "Position is what they demand. Interest is why. Trade on interests, not positions." },
    { front: "Anchoring in negotiation?", back: "First number drags the conversation. Anchor first if you have info; let them anchor if you don't." },
    { front: "Tactical empathy?", back: "Label the emotion you sense ('It seems like you're under pressure to close…'). Defuses + opens information." },
    { front: "Calibrated question?", back: "Open 'how/what' question that puts the problem in their lap. 'How am I supposed to do that?' beats 'no.'" },
    { front: "The mirror?", back: "Literally repeat the last 1–3 words as a question. They keep talking; you learn more." },
    { front: "Win-win logic?", back: "In repeat games, relationship is part of outcome. A win that burns the counterparty usually loses long-run." }
  ],
  glossary: [
    { term: "BATNA", def: "Best Alternative To a Negotiated Agreement." },
    { term: "ZOPA", def: "Zone of Possible Agreement — overlap of acceptable ranges." },
    { term: "Anchor", def: "First number that biases the negotiation range." },
    { term: "Label", def: "Voss-style verbal acknowledgment of the other side's emotion." },
    { term: "Mirror", def: "Repeating the last 1–3 words to invite elaboration." },
    { term: "Position", def: "What someone is asking for on the surface." },
    { term: "Interest", def: "Why they're asking for it." },
    { term: "Principled negotiation", def: "Fisher & Ury's method — focus on interests, generate options, use objective criteria." }
  ]
};

export default d;
