import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "mental_models",
 icon: "🧩",
 hue: "#f472b6",
 category: "Mind & Self",
 name: "Mental Models & Famous Laws",
 tagline: "A latticework for clearer thinking",

 basics: "A mental model is a compact, transferable way of thinking , a lens you can pull out and apply to a brand new problem. Charlie Munger (Warren Buffett's partner) called it \"a latticework\" , a small set of strong ideas borrowed from different fields, sitting in your head ready to use. You don't need a thousand. You need maybe twenty really good ones , from physics, biology, economics, maths, psychology , and the habit of asking, when you're stuck, \"which model fits this problem?\" People who think with a latticework consistently make better calls than people who only know their own field, even when the second group knows more facts.",
 whyItMatters: [
  "Better decisions, faster, with less information than the other person has.",
  "You spot patterns that single-discipline thinkers miss , because the same idea (selection pressure, compounding, equilibrium) shows up under different names in different fields.",
  "You avoid the expensive classics: sunk-cost reasoning, second-order surprises, confidently misreading a system.",
  "You can communicate complex ideas in shorthand to anyone else who shares the vocabulary."
 ],
 realWorldExample: "There's a tiny mental model called inversion. Instead of asking \"how do I succeed at this?\", you ask \"what would absolutely guarantee failure?\" Most of the time, the second question is shockingly easy to answer , and avoiding those things does more for you than chasing brilliance. The Stoics used it. Engineers use it (failure-mode analysis). Charlie Munger built a career on it. One sentence, repeatable forever, used right it changes real decisions every week. That's what a good mental model looks like , small, portable, and quietly doing work in the background of your life.",

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

 subdomains: [
  { id: "decision", name: "Decision Tools" },
  { id: "reasoning", name: "Reasoning Tools" },
  { id: "systems", name: "Systems and Cycles" },
  { id: "thinking_traps", name: "Thinking Traps" },
 ],

 concepts: [
  { t: "Inversion",               short: "Instead of asking \"how do I succeed?\" ask \"what would guarantee failure?\" Avoid those.",                                                 deep: "Charlie Munger's favourite trick. Imagine you want to be a great spouse. Asking \"how do I have a great marriage?\" is huge, fuzzy, paralysing. Asking \"what would guarantee a terrible marriage?\" produces an answerable list in two minutes: never listen, hold grudges, take them for granted, lie about money. Stop doing those things and you're 80% of the way there. Engineers use this every day in failure-mode analysis: instead of designing for success, design out failure. Stoics used it 2,000 years ago. It works on most ill-defined problems , career, parenting, fitness , because failure is much easier to describe than success.",                                                                                                                 status: "framework", reflect: "Pick a goal of yours. List the things that would guarantee its failure. Are you doing any of them?" },
  { t: "Opportunity cost",            short: "Every choice quietly costs you the next-best thing you could have done instead.",                                                      deep: "You spend two hours scrolling Instagram tonight. Free, right? No. The real cost is the next-best thing those two hours could have bought you , a chapter of a book, an early night, time with someone you love, a walk. The reason most of our decisions feel free is that we never name the alternative. Once you do, the choice often changes. Time is the most precious resource you have because you can't make more of it. Money you can earn back. Hours you can't.",                                                                                                                                                                                                       status: "settled",  reflect: "How did you spend the last two hours? What was the genuine next-best thing you could have done instead?" },
  { t: "Second-order thinking",          short: "Don't stop at \"this causes X.\" Keep going. \"…which causes Y. Which causes Z.\"",                                                     deep: "Howard Marks's framing. First-order thinkers stop at the obvious effect: \"this regulation will help small businesses.\" Second-order thinkers keep going: \"…which raises costs, which raises prices, which hurts the customers it was supposed to help.\" Most policy mistakes, investing mistakes, and parenting mistakes are first-order , the surprising consequence happened one step past where the thinker stopped. The edge isn't being smarter. It's being willing to take the obvious answer and ask \"and then what?\" once or twice more.",                                                                                                                                                               status: "framework", reflect: "Pick a decision you made recently. Trace it two steps forward. What do you see at step two that you didn't at step one?" },
  { t: "Sunk cost",               short: "What you've already spent shouldn't decide what you do next.",                                                                deep: "You bought concert tickets for ₹5,000. The day of the show, you've come down with a cold. The honest question is just: would I rather be at this concert tonight, or in bed? The ₹5,000 is gone either way. Yet most people drag themselves to the concert because they don't want to \"waste\" the money. They end up wasting the evening as well. Same with relationships you've outgrown, businesses that aren't working, courses you're not enjoying. The money and time are gone whether you continue or quit. The only honest question is what's best from here.",                                                                                                                                                       status: "settled",  reflect: "Where are you stuck in something because of what it already cost, rather than what it'll bring you next?" },
  { t: "Occam's razor",             short: "When two explanations fit the facts, default to the simpler one.",                                                              deep: "Named after a 14th-century friar. It's not \"the simplest answer is always right\" , sometimes the world is genuinely complicated. It's \"start with the simpler explanation, and only add complexity when the evidence forces you to.\" Your colleague didn't reply for two hours: was she ignoring you, or is she in a meeting? Conspiracy theories tend to violate this rule , they require a huge coordinated effort to be true when a smaller, messier explanation fits just as well.",                                                                                                                                                                                             status: "framework", reflect: "What recent claim did you believe that was more complicated than necessary? What was the simpler version?" },
  { t: "Hanlon's razor",             short: "Never assume malice when stupidity or circumstance explains it just as well.",                                                       deep: "A cheap, useful antidote to the fundamental attribution error. Someone forgot your birthday. Were they thoughtless on purpose, or just busy? Your boss snapped at you. Was it personal, or did her morning go sideways? Most slights, missed messages, and small frustrations aren't aimed at you at all , you just happened to be in the path of someone else's bad day. Default charitable. Downgrade only when there's real evidence of intent. You'll be wrong sometimes, and even when wrong, you'll have spent less energy stewing.",                                                                                                                                                                     status: "framework", reflect: "Take a slight you've taken personally recently. What's the most charitable explanation that still fits the facts?" },
  { t: "Antifragility (Nassim Taleb)",      short: "Things that don't just survive disorder , they get stronger from it.",                                                            deep: "Most things break under stress (fragile). Some resist it (robust). A few rare things actually improve from it , that's antifragile. Your bones get denser when you load them. Your muscles get bigger when you strain them. A startup that survives one near-death pivot is often better than one that never had to. The interesting question Taleb forces is: how do I build a life that gains from shocks rather than just one that hopes to avoid them? Usually the answers involve skin-in-the-game, redundancy, optionality, and not betting everything on calm conditions continuing.",                                                                                                                                                 status: "debated",  reflect: "Where is your life fragile to a shock you can't predict? What would it take to make that part antifragile instead?" },
  { t: "Eisenhower matrix",            short: "Urgent and important is a 2×2. The trap is the important-not-urgent quadrant, eaten by urgent-not-important.",                                       deep: "Sort every task by two axes: is it urgent (must be done soon)? Is it important (will it matter in five years)? You get four quadrants. Urgent + important: do now. Urgent + not important: this is the trap , emails, notifications, last-minute requests, the noisy stuff that feels productive and isn't. Not urgent + important: health, relationships, learning, deep work , the stuff that quietly determines your life. Not urgent + not important: drop it. The single biggest move most people can make is to schedule the not-urgent-but-important and protect it from the not-important-but-urgent. Otherwise the urgent always wins, every day, until the years are gone.",                                                                                                 status: "framework", reflect: "What's the most important not-urgent thing you've been pushing off for weeks? Put it in your calendar today, not next week." }
 ],

 counterView: "Mental models can become collectible knick-knacks , names you sprinkle in conversation rather than tools you use. Treat 'I learned 100 mental models' as a warning sign; treat 'I changed 3 decisions this year using inversion' as the goal. Also, models from one discipline imported into another can mislead , Taleb's antifragility is mathematically narrow even though its vibe is broadly applied. Some popular 'laws' (Pareto's 80/20, Parkinson's, Murphy's) are heuristics, not laws , useful, not predictive. Beware confident lists of '50 mental models to think clearly' , they're often just clear-sounding restatements of common sense.",

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
  "Hanlon's razor: not malice , circumstance.",
  "Important + not-urgent is the trap. Schedule it.",
  "Models are tools, not collectibles. Use 3 well > know 30."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Build a small, useful latticework",         do: "Read The Great Mental Models Vol 1 and Charlie Munger's USC speech. Pick 10 models you'll actually use , not 100 to collect. Quality over quantity.",                                                                                       milestone: "You can name and explain 10 models from memory, not glance at a list of 100.",                                         time: "~1 month" },
  { rank: "Apprentice",  focus: "Use them on real decisions every week",        do: "Once a week, run a real decision through inversion, opportunity cost, and second-order thinking. Write the reasoning down. After a few weeks you'll start using them automatically.",                                                                         milestone: "Your decisions visibly change , you catch traps you'd previously have walked into.",                                       time: "~1-2 months" },
  { rank: "Practitioner", focus: "Pull from multiple disciplines",            do: "Deliberately borrow models from physics, biology, economics, maths, psychology. The point is to escape one-discipline thinking, especially in your own field.",                                                                                    milestone: "You catch one-discipline tunnel-vision in colleagues , without being insufferable about it.",                                   time: "~3-6 months" },
  { rank: "Specialist",  focus: "Systems thinking and feedback loops",         do: "Read Donella Meadows's Thinking in Systems. Apply leverage-point thinking to a real organisation or problem you're working on. Most surprising failures are systems failures.",                                                                             milestone: "You can map a real system on a whiteboard, with feedback loops, and identify where small changes would matter most.",                       time: "~6 months" },
  { rank: "Expert",    focus: "Calibrate your predictions",              do: "Read Tetlock's Superforecasting. Start making calibrated predictions about real events, score yourself, adjust. Most people never measure how often they're right , and stay confidently wrong forever.",                                                                 milestone: "Your predictions are measurably better than they were a year ago. You can quote your hit rate.",                                 time: "~1 year+" },
  { rank: "Master",    focus: "Teach others to think clearly",             do: "Help others use the models. Coaching them sharpens your own framing. Write essays. Explain things in plain words.",                                                                                                         milestone: "People around you borrow your framings without crediting them , the highest compliment.",                                     time: "~2 years+" },
  { rank: "Grandmaster", focus: "Contribute new framings that travel",         do: "Original mental models or research that other thinkers find useful and adopt.",                                                                                                                             milestone: "Other people cite your models when describing how they think.",                                                 time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Farnam Street , Mental Models hub",         what: "Best free curated index of mental models, with essays.",             url: "https://fs.blog/mental-models/",                            verify: false, lastVerified: "2026-06" },
   { name: "Charlie Munger , Psychology of Human Misjudgement", what: "Foundational speech / transcript freely available.",               url: "https://fs.blog/great-talks/psychology-human-misjudgement/",              verify: false, lastVerified: "2026-06" },
   { name: "Donella Meadows , \"Leverage Points\" essay",    what: "Free, short, foundational systems-thinking essay.",               url: "https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/", verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia , List of cognitive biases",       what: "Comprehensive index with primary citations.",                   url: "https://en.wikipedia.org/wiki/List_of_cognitive_biases",                verify: false, lastVerified: "2026-06" },
   { name: "Tetlock , Good Judgment Project (public)",     what: "Public-facing materials on forecasting + calibration.",             url: "https://www.gjopen.com/",                               verify: false, lastVerified: "2026-06" },
   { name: "Nassim Taleb , Twitter + essay archive",      what: "Essays + book chapters posted freely. Spiky, useful.",              url: "https://www.fooledbyrandomness.com/",                          verify: false, lastVerified: "2026-06" },
   { name: "LessWrong , Sequences",               what: "Long-form essays on rationality + biases (variable quality, often deep).",     url: "https://www.lesswrong.com/library",                           verify: false, lastVerified: "2026-06" },
   { name: "Naval Ravikant , How to Get Rich (free podcast)",  what: "Practical mental models for compounding wealth and learning.",          url: "https://nav.al/rich",                                 verify: false, lastVerified: "2026-06" },
   { name: "Shane Parrish , The Knowledge Project podcast",  what: "Free, long-form interviews about thinking clearly.",               url: "https://fs.blog/knowledge-project-podcast/",                      verify: false, lastVerified: "2026-06" },
   { name: "Sive Maguire , Mental Model Index",         what: "Free, browsable mental-models index.",                      url: "https://untools.co/",                                 verify: true, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Great Mental Models (Vol 1-4) , Parrish",    what: "Most accessible curated set.",                          url: "https://fs.blog/tgmm/",                                price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Thinking in Systems , Donella Meadows",       what: "Systems thinking made teachable.",                        url: "https://donellameadows.org/archives/thinking-in-systems-a-primer/",           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Antifragile , Nassim Taleb",            what: "Spiky, useful, sometimes wrong, always provocative.",               url: "https://en.wikipedia.org/wiki/Antifragile_(book)",                   price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Superforecasting , Philip Tetlock & Dan Gardner", what: "Calibration + foxes-vs-hedgehogs.",                        url: "https://www.goodjudgment.com/superforecasting-book/",                 price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Poor Charlie's Almanack , Charlie Munger",     what: "Munger's collected speeches + framework.",                    url: "https://www.poorcharliesalmanack.com/",                        price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Seeking Wisdom , Peter Bevelin",          what: "Mental-models book that distils Munger and Buffett.",              url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Black Swan , Nassim Taleb",           what: "Fat-tailed events + uncertainty.",                        url: "https://en.wikipedia.org/wiki/The_Black_Swan_(Taleb_book)",              price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Skin in the Game , Nassim Taleb",          what: "Asymmetric risk + ethics. Read with critique in mind.",             url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Thinking, Fast and Slow , Kahneman",        what: "Foundational; cross-listed with Psychology.",                   url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Range , David Epstein",               what: "The generalist case + cross-domain transfer.",                  url: "https://davidepstein.com/the-range/",                         price: "verify", verify: true, lastVerified: "2026-06" }
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
   { text: "Optimism reframing , focus on the upside.", misconception: "Different move. Inversion = visualise failure to avoid it." },
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
   { text: "They make you slower.", misconception: "Used well, the opposite , faster, clearer decisions." },
   { text: "There's no risk.", misconception: "There is , name-dropping models you don't use is intellectual cosplay." }
  ], why: "The goal is changed decisions, not a longer vocabulary list." }
 ],

 flashcards: [
  { front: "Inversion?", back: "Ask 'what would guarantee failure?' and avoid those. Often easier + more decisive than chasing success." },
  { front: "Opportunity cost?", back: "The cost of any choice is the next-best alternative you didn't take." },
  { front: "Second-order thinking?", back: "Ask 'and then what?' Most surprises live one step past the obvious effect." },
  { front: "Sunk cost?", back: "What's already spent is gone. Future decisions should depend only on future costs vs benefits." },
  { front: "Occam's razor?", back: "Prefer the simplest explanation that fits the evidence , as a default, not a law." },
  { front: "Hanlon's razor?", back: "Don't blame malice for what circumstance or stupidity explains." },
  { front: "Antifragility?", back: "Things that gain from disorder, not just resist it. Build for it via skin-in-the-game, optionality, redundancy." },
  { front: "Eisenhower matrix?", back: "Urgent × Important. The trap: important + not-urgent (health, learning) gets eaten by urgent + not-important." }
 ],
 glossary: [
  { term: "Mental model", def: "A compact, transferable way of thinking , a lens for decisions." },
  { term: "Latticework", def: "Munger: a small set of strong models from many fields, used together." },
  { term: "Inversion", def: "Solving by avoiding failure modes instead of chasing success." },
  { term: "Opportunity cost", def: "Next-best alternative forgone." },
  { term: "Sunk cost", def: "Money/time already spent and unrecoverable." },
  { term: "Steelman", def: "Strongest possible version of an opposing argument." },
  { term: "Antifragile", def: "Improves under disorder , beyond just robust." },
  { term: "Second-order effect", def: "Consequence of the consequence." }
 ]
};

export default d;
