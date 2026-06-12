import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "mental_models",
  icon: "🧩",
  hue: "#f472b6",
  category: "Mind & Self",
  name: "Mental Models & Famous Laws",
  tagline: "A latticework for clearer thinking",

  basics: "A mental model is a compact, transferable way of thinking — a lens you can pull out and apply to a brand new problem. Charlie Munger (Warren Buffett's partner) called it \"a latticework\" — a small set of strong ideas borrowed from different fields, sitting in your head ready to use. You don't need a thousand. You need maybe twenty really good ones — from physics, biology, economics, maths, psychology — and the habit of asking, when you're stuck, \"which model fits this problem?\" People who think with a latticework consistently make better calls than people who only know their own field, even when the second group knows more facts.",
  whyItMatters: [
    "Better decisions, faster, with less information than the other person has.",
    "You spot patterns that single-discipline thinkers miss — because the same idea (selection pressure, compounding, equilibrium) shows up under different names in different fields.",
    "You avoid the expensive classics: sunk-cost reasoning, second-order surprises, confidently misreading a system.",
    "You can communicate complex ideas in shorthand to anyone else who shares the vocabulary."
  ],
  realWorldExample: "There's a tiny mental model called inversion. Instead of asking \"how do I succeed at this?\", you ask \"what would absolutely guarantee failure?\" Most of the time, the second question is shockingly easy to answer — and avoiding those things does more for you than chasing brilliance. The Stoics used it. Engineers use it (failure-mode analysis). Charlie Munger built a career on it. One sentence, repeatable forever, used right it changes real decisions every week. That's what a good mental model looks like — small, portable, and quietly doing work in the background of your life.",

  mentors: [
    { name: "Charlie Munger", for: "the latticework of mental models", work: "Poor Charlie's Almanack" },
    { name: "Shane Parrish", for: "modern popularisation of mental models", work: "Farnam Street + The Great Mental Models series" },
    { name: "Donella Meadows", for: "systems thinking + leverage points", work: "Thinking in Systems (2008)" },
    { name: "Nassim Taleb", for: "fragility, antifragility, fat tails", work: "Antifragile (2012)" },
    { name: "Philip Tetlock", for: "calibration + 'foxes vs hedgehogs'", work: "Superforecasting (2015)" }
  ],

  diagrams: [
    { kind: "network", title: "Munger's latticework", caption: "Several strong models from different fields > many shallow ones from one field.", data: { nodes: ["Physics", "Biology", "Econ", "Psych", "Math", "Engineering"], edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,3],[1,4]] } },
    { kind: "quadrant", title: "Eisenhower matrix", caption: "Urgent × Important. Most of life is unimportant + urgent, and we let it eat important + not-urgent.", data: { xAxis: ["Not urgent", "Urgent"], yAxis: ["Not important", "Important"], items: [
      { label: "Schedule", x: 0.2, y: 0.85 },
      { label: "Do now", x: 0.85, y: 0.85 },
      { label: "Drop", x: 0.2, y: 0.15 },
      { label: "Delegate", x: 0.85, y: 0.15 }
    ] } }
  ],

  synthesis: [
    { concept: "Second-order thinking", linksTo: "investing", note: "Most investing edge comes from going one level past the obvious." },
    { concept: "Steelmanning", linksTo: "psychology", note: "The discipline of arguing against your own bias." }
  ],

  concepts: [
    { t: "Inversion", short: "Instead of asking 'how do I succeed?' ask 'what would guarantee failure?'", deep: "Avoiding stupidity is often easier than seeking brilliance, and frequently more decisive. Used by Stoics, engineers, and Munger. Strong default for ill-defined problems.", status: "framework", reflect: "Pick a goal of yours. List the things that would guarantee its failure. Are you doing any of them?" },
    { t: "Opportunity cost", short: "The cost of any choice is the next-best alternative.", deep: "Time/money/attention spent on A is unspent on B. Most decisions feel free because we don't surface the next-best alternative. Naming it changes the choice.", status: "settled", reflect: "What's the opportunity cost of how you spent the last 2 hours?" },
    { t: "Second-order thinking", short: "And then what?", deep: "First-order: 'this raises X.' Second-order: 'which causes Y, which causes Z.' Most surprises are second-order effects. Investing edge, policy design, parenting — all reward going one step past the obvious.", status: "framework", reflect: "Pick a decision you made. Trace it 2 steps forward. What do you see?" },
    { t: "Sunk cost", short: "Money/time already spent shouldn't drive future decisions.", deep: "Whether to continue depends only on future costs vs future benefits. The energy you already burned is gone whether you continue or not. Humans (and committees) systematically over-weight sunk cost.", status: "settled", reflect: "Where are you stuck in something because of what it cost, not because of what it'll return?" },
    { t: "Occam's razor", short: "Prefer the simplest explanation that fits the evidence.", deep: "Not 'simplest is always right' — 'simpler is your default until the evidence forces complexity.' Saves you from conspiracy-theory-shaped reasoning.", status: "framework", reflect: "What recent claim did you believe that was more complicated than necessary?" },
    { t: "Hanlon's razor", short: "Never attribute to malice what's adequately explained by stupidity (or by circumstance).", deep: "A cheap antidote to the fundamental attribution error. Most slights, missed messages, and small frustrations aren't aimed at you. Default to charitable, downgrade only with evidence.", status: "framework", reflect: "A recent slight you took personally — what's the most charitable explanation?" },
    { t: "Antifragility (Taleb)", short: "Things that gain from disorder, not just resist it.", deep: "Fragile breaks under stress. Robust resists. Antifragile improves. Bones get stronger with load; muscles with strain. Build systems and lives that gain from shocks (skin in the game, optionality, redundancy), not ones that bet everything on calm conditions.", status: "debated", reflect: "Where is your life fragile to a shock you can't see coming?" },
    { t: "Eisenhower matrix", short: "Urgent × important — and the trap is the urgent unimportant.", deep: "Most of life is unimportant + urgent (emails, notifications) — and we let it eat the important + not urgent (health, relationships, learning). Schedule the important not-urgent; delegate or drop the rest.", status: "framework", reflect: "What 'important not-urgent' thing have you been pushing for weeks? Schedule it." }
  ],

  counterView: "Mental models can become collectible knick-knacks — names you sprinkle in conversation rather than tools you use. Treat 'I learned 100 mental models' as a warning sign; treat 'I changed 3 decisions this year using inversion' as the goal. Also, models from one discipline imported into another can mislead — Taleb's antifragility is mathematically narrow even though its vibe is broadly applied. Some popular 'laws' (Pareto's 80/20, Parkinson's, Murphy's) are heuristics, not laws — useful, not predictive. Beware confident lists of '50 mental models to think clearly' — they're often just clear-sounding restatements of common sense.",

  capabilities: [
    "Use inversion on at least one real decision per week.",
    "Name the opportunity cost of important choices out loud.",
    "Spot sunk-cost reasoning in yourself and others.",
    "Steelman an opposing argument before dismissing it.",
    "Schedule important non-urgent work weekly (Eisenhower)."
  ],
  cheatsheet: [
    "Invert. What would guarantee failure?",
    "Name the opportunity cost.",
    "Ask 'and then what?' (second-order).",
    "Sunk cost is sunk. Decide on future.",
    "Hanlon's razor: not malice — circumstance.",
    "Important + not-urgent is the trap. Schedule it.",
    "Models are tools, not collectibles. Use 3 well > know 30."
  ],

  roadmap: [
    { rank: "Novice", focus: "Get a small lattice", do: "Read 'The Great Mental Models' Vol 1 + Munger's Almanack speeches. Pick 10 models to actually use.", milestone: "You can name and apply 10 models, not 100.", time: "~1 month" },
    { rank: "Apprentice", focus: "Apply weekly", do: "Use inversion + opportunity cost + second-order thinking on real decisions. Journal once a week.", milestone: "Your decisions change visibly.", time: "~1–2 months" },
    { rank: "Practitioner", focus: "Cross-discipline import", do: "Pull models from physics, biology, econ, math, psych deliberately.", milestone: "You catch one-discipline thinking in others.", time: "~3–6 months" },
    { rank: "Specialist", focus: "Systems thinking", do: "Read Donella Meadows; apply leverage-point thinking to a real org/system.", milestone: "You can map a system with feedback loops.", time: "~6 months" },
    { rank: "Expert", focus: "Calibrate", do: "Tetlock-style forecasting: make calibrated predictions, score them, adjust.", milestone: "Your predictions get measurably better.", time: "~1 year+" },
    { rank: "Master", focus: "Teach + write", do: "Help others think clearly; write/teach the models.", milestone: "Others borrow your framings.", time: "~2 years+" },
    { rank: "Grandmaster", focus: "Contribute new models", do: "Original framings that travel.", milestone: "Your models get cited.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Farnam Street — Mental Models hub",                 what: "Best free curated index of mental models, with essays.",                          url: "https://fs.blog/mental-models/",                                                        verify: false, lastVerified: "2026-06" },
      { name: "Charlie Munger — Psychology of Human Misjudgement", what: "Foundational speech / transcript freely available.",                              url: "https://fs.blog/great-talks/psychology-human-misjudgement/",                            verify: false, lastVerified: "2026-06" },
      { name: "Donella Meadows — \"Leverage Points\" essay",       what: "Free, short, foundational systems-thinking essay.",                              url: "https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/",  verify: false, lastVerified: "2026-06" },
      { name: "Wikipedia — List of cognitive biases",              what: "Comprehensive index with primary citations.",                                     url: "https://en.wikipedia.org/wiki/List_of_cognitive_biases",                                verify: false, lastVerified: "2026-06" },
      { name: "Tetlock — Good Judgment Project (public)",          what: "Public-facing materials on forecasting + calibration.",                          url: "https://www.gjopen.com/",                                                              verify: false, lastVerified: "2026-06" },
      { name: "Nassim Taleb — Twitter + essay archive",            what: "Essays + book chapters posted freely. Spiky, useful.",                            url: "https://www.fooledbyrandomness.com/",                                                   verify: false, lastVerified: "2026-06" },
      { name: "LessWrong — Sequences",                              what: "Long-form essays on rationality + biases (variable quality, often deep).",         url: "https://www.lesswrong.com/library",                                                     verify: false, lastVerified: "2026-06" },
      { name: "Naval Ravikant — How to Get Rich (free podcast)",   what: "Practical mental models for compounding wealth and learning.",                    url: "https://nav.al/rich",                                                                  verify: false, lastVerified: "2026-06" },
      { name: "Shane Parrish — The Knowledge Project podcast",    what: "Free, long-form interviews about thinking clearly.",                              url: "https://fs.blog/knowledge-project-podcast/",                                            verify: false, lastVerified: "2026-06" },
      { name: "Sive Maguire — Mental Model Index",                 what: "Free, browsable mental-models index.",                                            url: "https://untools.co/",                                                                  verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "The Great Mental Models (Vol 1–4) — Parrish",       what: "Most accessible curated set.",                                                    url: "https://fs.blog/tgmm/",                                                                price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Thinking in Systems — Donella Meadows",             what: "Systems thinking made teachable.",                                                url: "https://donellameadows.org/archives/thinking-in-systems-a-primer/",                     price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Antifragile — Nassim Taleb",                        what: "Spiky, useful, sometimes wrong, always provocative.",                             url: "https://en.wikipedia.org/wiki/Antifragile_(book)",                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Superforecasting — Philip Tetlock & Dan Gardner",  what: "Calibration + foxes-vs-hedgehogs.",                                                url: "https://www.goodjudgment.com/superforecasting-book/",                                  price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Poor Charlie's Almanack — Charlie Munger",          what: "Munger's collected speeches + framework.",                                        url: "https://www.poorcharliesalmanack.com/",                                                price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Seeking Wisdom — Peter Bevelin",                    what: "Mental-models book that distils Munger and Buffett.",                            url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Black Swan — Nassim Taleb",                     what: "Fat-tailed events + uncertainty.",                                                url: "https://en.wikipedia.org/wiki/The_Black_Swan_(Taleb_book)",                            price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Skin in the Game — Nassim Taleb",                   what: "Asymmetric risk + ethics. Read with critique in mind.",                          url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Thinking, Fast and Slow — Kahneman",                what: "Foundational; cross-listed with Psychology.",                                     url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Range — David Epstein",                              what: "The generalist case + cross-domain transfer.",                                    url: "https://davidepstein.com/the-range/",                                                  price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Invert one decision", d: "Pick a goal. List everything that would guarantee its failure. Stop doing any of them.", xp: 40 },
    { t: "Opportunity-cost audit", d: "Track one full day's hours. Tag each block with its opportunity cost. Note the surprises.", xp: 50 },
    { t: "Sunk-cost flag", d: "Find one project/relationship/habit you continue mostly because of past investment. Decide on future alone.", xp: 40 },
    { t: "Schedule the important", d: "Pick the most important non-urgent thing. Put it in your calendar this week.", xp: 30 },
    { t: "Steelman", d: "Pick a strong opinion. Write the best version of the opposing case in 200 words.", xp: 30 }
  ],
  capstone: { t: "Decision journal", d: "For 30 days, write one decision per day with the model used + expected outcome. After 30, review which models actually helped.", xp: 200 },

  quiz: [
    { q: "What's inversion, as a thinking tool?", options: [
      { text: "Optimism reframing — focus on the upside.", misconception: "Different move. Inversion = visualise failure to avoid it." },
      { text: "Ask 'what would guarantee failure?' instead of 'how do I succeed?'", correct: true },
      { text: "Doing the opposite of what's recommended.", misconception: "That's contrarianism, not inversion." },
      { text: "A math operation.", misconception: "Borrowed from math, but here a thinking tool." }
    ], why: "Avoiding stupidity is often easier and more decisive than chasing brilliance. Munger's go-to.", testOut: true },
    { q: "Sunk-cost fallacy is best described as…", options: [
      { text: "Investing more time in something because you already spent time on it.", correct: true },
      { text: "Refusing to invest in anything new.", misconception: "Opposite-ish. Sunk-cost is about clinging to what you already invested in." },
      { text: "Always selling at the bottom.", misconception: "Different bias (panic / loss aversion)." },
      { text: "Ignoring opportunity cost.", misconception: "Related but distinct. Opportunity cost = next-best alternative; sunk-cost = past investment." }
    ], why: "Future decisions should depend only on future costs vs benefits. What's already spent is gone." },
    { q: "Hanlon's razor says…", options: [
      { text: "Never attribute to malice what is adequately explained by stupidity or circumstance.", correct: true },
      { text: "Always assume the worst.", misconception: "Opposite of Hanlon's razor." },
      { text: "Stupidity is malice.", misconception: "Wrong direction." },
      { text: "Only experts can be trusted.", misconception: "Different topic." }
    ], why: "Cheap antidote to the fundamental attribution error. Default charitable, downgrade only with evidence." },
    { q: "Second-order thinking is…", options: [
      { text: "Asking 'and then what?' beyond the first effect.", correct: true },
      { text: "Thinking twice before acting.", misconception: "Loose paraphrase that misses the chained-effects core." },
      { text: "Using two brains.", misconception: "Joke answer." },
      { text: "Only used in finance.", misconception: "Used across investing, policy, parenting, engineering." }
    ], why: "Most surprises are second-order. Going one step past the obvious is where edge lives." },
    { q: "Risk of accumulating mental models?", options: [
      { text: "They become collectibles you cite, not tools you use.", correct: true },
      { text: "You forget your first language.", misconception: "Joke answer." },
      { text: "They make you slower.", misconception: "Used well, the opposite — faster, clearer decisions." },
      { text: "There's no risk.", misconception: "There is — name-dropping models you don't use is intellectual cosplay." }
    ], why: "The goal is changed decisions, not a longer vocabulary list." }
  ],

  flashcards: [
    { front: "Inversion?", back: "Ask 'what would guarantee failure?' and avoid those. Often easier + more decisive than chasing success." },
    { front: "Opportunity cost?", back: "The cost of any choice is the next-best alternative you didn't take." },
    { front: "Second-order thinking?", back: "Ask 'and then what?' Most surprises live one step past the obvious effect." },
    { front: "Sunk cost?", back: "What's already spent is gone. Future decisions should depend only on future costs vs benefits." },
    { front: "Occam's razor?", back: "Prefer the simplest explanation that fits the evidence — as a default, not a law." },
    { front: "Hanlon's razor?", back: "Don't blame malice for what circumstance or stupidity explains." },
    { front: "Antifragility?", back: "Things that gain from disorder, not just resist it. Build for it via skin-in-the-game, optionality, redundancy." },
    { front: "Eisenhower matrix?", back: "Urgent × Important. The trap: important + not-urgent (health, learning) gets eaten by urgent + not-important." }
  ],
  glossary: [
    { term: "Mental model", def: "A compact, transferable way of thinking — a lens for decisions." },
    { term: "Latticework", def: "Munger: a small set of strong models from many fields, used together." },
    { term: "Inversion", def: "Solving by avoiding failure modes instead of chasing success." },
    { term: "Opportunity cost", def: "Next-best alternative forgone." },
    { term: "Sunk cost", def: "Money/time already spent and unrecoverable." },
    { term: "Steelman", def: "Strongest possible version of an opposing argument." },
    { term: "Antifragile", def: "Improves under disorder — beyond just robust." },
    { term: "Second-order effect", def: "Consequence of the consequence." }
  ]
};

export default d;
