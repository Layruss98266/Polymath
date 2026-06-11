import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "entrepreneurship",
  icon: "🚀",
  hue: "#60a5fa",
  category: "Money & Work",
  name: "Entrepreneurship & Startups",
  tagline: "Find a real problem and solve it",

  basics: "Entrepreneurship is the work of building something people pay for. The usual mistake isn't a lack of ideas — it's solving made-up problems for imaginary customers. The discipline is talking to actual buyers, shipping a small version fast, and letting reality (not your pitch deck) decide what to build next.",
  whyItMatters: [
    "Even if you never start a company, the skills (problem discovery, scrappy shipping, talking to users) compound everywhere.",
    "Most jobs are getting more entrepreneurial — outcomes over hours.",
    "The fastest path to real income for a lot of people without a corporate ladder.",
    "Spot bad-business-model traps before you put time/money in."
  ],
  realWorldExample: "Airbnb's founders couldn't pay rent. They put an air mattress in their living room and rented it to designers in town for a conference. Three guests. That was the MVP — no platform, no Series A, just enough of the thing to learn whether anyone would pay. The product was the test.",

  mentors: [
    { name: "Paul Graham", for: "the YC playbook + clear thinking on startups", work: "essays at paulgraham.com" },
    { name: "Steve Blank", for: "customer development", work: "The Four Steps to the Epiphany (2005)" },
    { name: "Eric Ries", for: "build-measure-learn / lean startup", work: "The Lean Startup (2011)" },
    { name: "Peter Thiel", for: "monopoly thinking + zero-to-one", work: "Zero to One (2014)" },
    { name: "Rob Fitzpatrick", for: "asking customers about their lives, not your idea", work: "The Mom Test (2013)" }
  ],

  diagrams: [
    { kind: "venn", title: "Desirable · Viable · Feasible", caption: "The hard sweet spot where someone wants it, it makes money, and you can build it.", data: { sets: ["Desirable", "Viable", "Feasible"], centre: "Product-market fit" } },
    { kind: "cycle", title: "Build-Measure-Learn", caption: "Each loop is a cheap experiment about a specific risky belief.", data: { nodes: ["Idea", "Build", "Measure", "Learn"] } }
  ],

  synthesis: [
    { concept: "Positioning + JTBD", linksTo: "marketing", note: "Most startup pivots are positioning failures, not product failures." },
    { concept: "Calibrated questions", linksTo: "negotiation", note: "Same skill as Voss's open questions — the Mom Test reframed." }
  ],

  concepts: [
    { t: "The Mom Test (Rob Fitzpatrick)", short: "Ask about their life, not your idea.", deep: "Customers lie kindly. Asking 'would you use this?' returns garbage; asking 'when did you last hit this problem? What did you do? What did it cost you?' returns truth. Best single book on customer discovery, full stop.", status: "framework", reflect: "Take the last customer/user 'interview' you did. How many questions were about their past behaviour vs your idea?" },
    { t: "Build → Measure → Learn", short: "Ship cheap, measure honestly, update beliefs.", deep: "Lean Startup's contribution: treat each big assumption as an experiment, not a plan. Build the smallest version that tests it, measure the actual behaviour (not opinions), then update or pivot.", status: "framework", reflect: "What's the riskiest belief in your current project? What's the cheapest experiment that could falsify it?" },
    { t: "Product-market fit (PMF)", short: "When people pull the product out of your hands.", deep: "Marc Andreessen's working definition: the market pulls. You can't 'execute' your way to fit; you find it. Pre-PMF, every other tactic is rearranging deck chairs. Look for repeat use, organic referrals, real urgency to pay.", status: "framework", reflect: "Do users come back unprompted? Do they tell friends? If not, PMF is still out there." },
    { t: "Monopoly thinking (Thiel)", short: "Compete to be unique, not to be slightly better.", deep: "Thiel's argument: profits live in monopolies, not in commoditised competition. Find a niche so specific you dominate it, then expand. 'Competition is for losers' is the spicy version of an honest point.", status: "framework", reflect: "Are you trying to be slightly better in a crowded market? What niche could you fully own?" },
    { t: "The bowling-pin / niche strategy", short: "Win a tiny segment completely. Roll into the next.", deep: "Don't try to take a 1% share of a big market. Take 80% of a tiny one. Facebook started in one university. Airbnb started with air mattresses for designers at a single conference. Specificity is the cheat code.", status: "framework", reflect: "What's the smallest, most specific 'first pin' you could go win in 90 days?" },
    { t: "Default alive vs default dead", short: "Will you reach break-even on current cash + growth?", deep: "Paul Graham's reframing: most early-stage founders don't know whether they're default alive (project the runway, you'll get to profitability before cash runs out) or default dead. The number is unromantic but defining.", status: "framework", reflect: "Forecast your project's runway and growth honestly. Default alive or default dead?" },
    { t: "Talk to users (always)", short: "There is no substitute. Especially when it's uncomfortable.", deep: "PG's repeated advice: do things that don't scale + talk to users. The bias against this is exactly the comfortable founder problem. You learn more in 5 well-run conversations than 5 weeks of building.", status: "settled", reflect: "When did you last talk to a real prospective user about their problem? If >2 weeks ago, that's the issue." },
    { t: "Distribution beats product (often)", short: "A great product nobody hears about loses to a meh product with reach.", deep: "Founders systematically over-invest in product and under-invest in distribution. Marc Andreessen, Andrew Chen, and many others: pick the distribution channel before you build, design the product to use it. Distribution is part of the product, not the afterthought.", status: "framework", reflect: "What's your distribution channel? If 'word of mouth, eventually' — that's a wish, not a plan." }
  ],

  counterView: "Startup advice is wildly biased by survivorship: we read the founders who won. The ones who followed identical playbooks and lost don't write books. 'Just do the lean thing and talk to users' is true but underweights luck, market timing, and capital availability. PG's writing is excellent for software startups in San Francisco from 2005–2015; it's less universal than it reads. Also, most 'entrepreneurship is the path to freedom' framing ignores that most small businesses fail and even the survivors trade salary stability for high-variance income. Treat books as priors to be updated by your specific context, not gospel.",

  capabilities: [
    "Run a Mom Test-style customer conversation that returns honest signal.",
    "Pick the smallest possible MVP to test the riskiest belief.",
    "Identify a tiny 'first pin' niche to dominate.",
    "Calculate whether your project is default alive or default dead.",
    "Pick a distribution channel before building the product."
  ],
  cheatsheet: [
    "Talk to users. Always. About their lives, not your idea.",
    "Build the smallest thing that could be wrong (and measure honestly).",
    "Specificity wins. Own a tiny niche; expand later.",
    "Distribution is part of the product. Don't ship without it.",
    "Default alive or default dead — pick the harder question first.",
    "Most pivots are positioning, not product."
  ],

  roadmap: [
    { rank: "Novice", focus: "Get the vocabulary", do: "Read The Mom Test + PG's essays + The Lean Startup. Pick a problem (not an idea).", milestone: "You can name MVP, PMF, build-measure-learn, default alive.", time: "~2–3 weeks" },
    { rank: "Apprentice", focus: "Talk to 20 users", do: "Talk to 20 real potential users about their lives. No pitch, only past-behaviour questions.", milestone: "You can describe the problem in customers' own words.", time: "~1–2 months" },
    { rank: "Practitioner", focus: "Ship the MVP", do: "Build the smallest possible thing. Charge money if at all possible. Iterate weekly.", milestone: "You have paying users / repeat use, even if tiny.", time: "~3–6 months" },
    { rank: "Specialist", focus: "Find PMF", do: "Tighten the niche; measure retention; pick the distribution channel deliberately.", milestone: "Retention curve flattens. Organic referrals show up.", time: "~6–12 months" },
    { rank: "Expert", focus: "Scale carefully", do: "Hire 1–3 people. Document playbooks. Find repeatable growth channels.", milestone: "The thing grows without your hand on every customer.", time: "~1–2 years" },
    { rank: "Master", focus: "Build the company", do: "Strategy, capital, team. Multiple bets within the company.", milestone: "Durable business with team that ships without you in the room.", time: "~3–5 years" },
    { rank: "Grandmaster", focus: "Compound", do: "Generational wealth or impact at scale. Mentor other founders.", milestone: "You back other founders + help them avoid your mistakes.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Paul Graham essays (paulgraham.com)", what: "Decades of writing on startups, technology, and writing itself.", url: "", verify: true, lastVerified: "2026-06" },
      { name: "Y Combinator Startup School (free)", what: "Lecture series w/ founders + investors. Best free curriculum.", url: "", verify: true, lastVerified: "2026-06" },
      { name: "The Mom Test — Rob Fitzpatrick (audiobook/short)", what: "Best single read on customer discovery. Short and ruthless.", url: "", verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Zero to One — Peter Thiel", what: "Monopoly thinking + contrarian first-principles.", url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Lean Startup — Eric Ries", what: "Build-measure-learn formalised.", url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Hard Thing About Hard Things — Ben Horowitz", what: "What no playbook teaches you about running a company.", url: "", price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Pick a problem, not an idea", d: "Write the problem you're solving in one sentence — without naming your solution.", xp: 30 },
    { t: "Mom Test 5 people", d: "Run 5 customer conversations using past-behaviour questions ('When did you last…? What did you do? What did it cost?'). Notes only.", xp: 60 },
    { t: "Smallest MVP", d: "Design the smallest version that could test your riskiest belief. Spreadsheet OK. Manual OK. Concierge OK.", xp: 50 },
    { t: "Default alive check", d: "Project runway + growth honestly. Are you default alive or default dead? Write the number down.", xp: 30 },
    { t: "Pick the channel", d: "Pick one distribution channel and the first 3 experiments to test it. Before more building.", xp: 40 }
  ],
  capstone: { t: "Ship a tiny v1 + get one paying user", d: "Ship the smallest possible version of your idea and get at least one person to pay (even ₹100). Write a 1-page post-mortem on what surprised you.", xp: 200 },

  quiz: [
    { q: "The Mom Test is best summarised as…", options: [
      { text: "Don't talk to your mom about business.", misconception: "Title joke; not the lesson." },
      { text: "Ask about the past and their life, not your idea.", correct: true },
      { text: "Use a structured survey.", misconception: "Surveys are usually worse than conversations." },
      { text: "Only talk to people who have already bought from you.", misconception: "You'd never discover anything new — pre-customer convos are the point." }
    ], why: "Customers are kind and lie about hypothetical futures. Their past behaviour is the only signal that matters.", testOut: true },
    { q: "Product-market fit is best detected by…", options: [
      { text: "A nice deck.", misconception: "Decks lie; markets don't." },
      { text: "Repeat use, organic referrals, real urgency to pay.", correct: true },
      { text: "Press coverage.", misconception: "Press correlates with hype, not PMF." },
      { text: "Vanity metrics like signups.", misconception: "Signups without retention are noise." }
    ], why: "PMF is the market pulling the product out of your hands. Retention + referrals + urgency are the honest signals." },
    { q: "Default alive means…", options: [
      { text: "Your project will reach break-even on current cash + growth, without raising.", correct: true },
      { text: "Your project has been funded already.", misconception: "Funding ≠ default alive; you can be well-funded and still default dead." },
      { text: "Your team is happy.", misconception: "Important, but different question." },
      { text: "Your product compiles.", misconception: "Code quality isn't financial runway." }
    ], why: "PG's question: project the runway and the growth, and decide whether you'll reach profitability before cash runs out." },
    { q: "What's the single biggest critique of standard startup advice?", options: [
      { text: "It's wrong on the merits.", misconception: "Mostly directionally right — the issue is overweighted." },
      { text: "Survivorship bias — the founders who failed following the same playbook don't write books.", correct: true },
      { text: "It uses too much jargon.", misconception: "Jargon is a style issue, not a validity issue." },
      { text: "It's too old.", misconception: "Recency doesn't fix survivorship." }
    ], why: "Almost all startup books are written by survivors. Treat them as priors, not laws." },
    { q: "When should you pick your distribution channel?", options: [
      { text: "After you have product-market fit.", misconception: "Too late — channel constraints often shape the product itself." },
      { text: "Before you start building.", correct: true },
      { text: "Only once you can afford ads.", misconception: "Channel choice ≠ paid ads; can be SEO, partnerships, community." },
      { text: "Never — word of mouth is everything.", misconception: "Word of mouth without a channel design is hope, not plan." }
    ], why: "Distribution is part of the product. Choose it first; design the product to fit it." }
  ],

  flashcards: [
    { front: "What does The Mom Test prescribe?", back: "Ask about customers' past behaviour and life, not their opinions on your idea." },
    { front: "Build → Measure → Learn?", back: "Treat each big assumption as an experiment. Ship the smallest thing that tests it, measure behaviour, update." },
    { front: "Product-market fit signals?", back: "Repeat use, organic referrals, urgency to pay. The market pulls the product." },
    { front: "Monopoly thinking (Thiel)?", back: "Compete to be unique, not better. Profits live in defensible niches." },
    { front: "First pin / bowling-pin strategy?", back: "Win a tiny niche completely before rolling outward." },
    { front: "Default alive vs default dead?", back: "Default alive = current cash + growth gets you to break-even. Default dead = it doesn't." },
    { front: "What dominates founder behaviour bias?", back: "Building over talking to users; comfortable over uncomfortable. Push the other way." },
    { front: "Distribution beats product?", back: "Often. A great product nobody hears about loses to a meh product with reach. Pick channel first." }
  ],
  glossary: [
    { term: "MVP", def: "Minimum Viable Product — the smallest thing that tests a real assumption." },
    { term: "PMF", def: "Product-Market Fit — the market pulls the product." },
    { term: "Customer development", def: "Steve Blank's framework — systematic learning about customers before scaling." },
    { term: "Pivot", def: "Changing direction based on what you learned without abandoning the vision." },
    { term: "Cohort retention", def: "% of a group of users still active over time." },
    { term: "CAC / LTV", def: "Acquisition cost vs lifetime value — unit economics." },
    { term: "Default alive", def: "PG: project the runway, you'll reach profitability before cash runs out." },
    { term: "TAM", def: "Total Addressable Market — the upper-bound size of the opportunity." }
  ]
};

export default d;
