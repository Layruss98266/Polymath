import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "entrepreneurship",
 icon: "🚀",
 hue: "#60a5fa",
 category: "Money & Work",
 name: "Entrepreneurship & Startups",
 tagline: "Find a real problem and solve it",

 basics: "Entrepreneurship is the work of building something other people pay you to use. Most people who fail at it don't fail from a shortage of ideas , they fail by solving problems nobody asked them to solve, for customers who exist mostly in their pitch deck. The actual discipline is small and uncomfortable: talk to real potential buyers about their actual lives, ship the smallest possible version of your idea before you feel ready, and let reality vote on what's next. The plan is wrong. The customer is the teacher. Your job is to listen, ship, learn, repeat.",
 whyItMatters: [
  "Even if you never start a company, the underlying skills , talking to users, scrappy shipping, killing your darlings , compound everywhere.",
  "Most jobs are getting more entrepreneurial. \"Hours at desk\" is being replaced by \"outcomes shipped.\"",
  "For a lot of people without a corporate ladder, it's the fastest honest path to real income.",
  "You'll see business-model traps from a mile away , and stop putting your savings into ones friends are excited about."
 ],
 realWorldExample: "Two friends couldn't make rent on their San Francisco apartment in 2007. A design conference was coming to town and all the hotels were booked out. They blew up three airbeds in their living room, took photos, made a one-page website, and rented those spots to designers who couldn't find a hotel. Three guests showed up. That was Airbnb's first version , no platform, no funding, no app, just an airbed in a living room and someone willing to pay for it. They didn't sit in cafes whiteboarding a marketplace strategy. They tested the smallest version of the idea on real strangers, in a real city, in a real weekend. Everything they built later came from what those three guests taught them.",

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
  { concept: "Calibrated questions", linksTo: "negotiation", note: "Same skill as Voss's open questions , the Mom Test reframed." }
 ],

 concepts: [
  { t: "The Mom Test (Rob Fitzpatrick)",     short: "Ask about their past, not your idea. Customers lie kindly when you ask about the future.",                                                 deep: "Imagine asking your mother whether she'd buy your new app. She loves you. Of course she'll say yes. That same kindness happens with every customer you ask \"would you use this?\" , they're being polite, and they're guessing about a hypothetical future they have no real data on. Useless. Rob Fitzpatrick's tiny book reframes the entire conversation: stop asking about your idea, start asking about their past behaviour. \"When did you last hit this problem? What did you do? What did it cost you? Who else tried to help?\" Past behaviour is honest, because it actually happened. Future intent is fiction. Run five conversations this way and you'll learn more than from a hundred polite \"yes I'd use it\" surveys.",                                                                     status: "framework", reflect: "Take the last customer or user interview you did. How many of your questions were about their past behaviour vs. about your idea?" },
  { t: "Build → Measure → Learn",        short: "Treat each big assumption as an experiment, not a plan.",                                                                  deep: "Eric Ries's Lean Startup put a name on something good founders already did. Every business idea is really a stack of beliefs , \"people will pay for this,\" \"they'll find us through this channel,\" \"they'll stay for a year.\" Each belief is a guess until you've tested it. The discipline is: pick the riskiest belief, build the smallest possible thing that tests it (often a spreadsheet, a landing page, a manual service done by you in person), put it in front of real people, measure what they actually do (not what they say they'd do), then update or change direction. Most startups die because they spent two years building before testing the first belief , and the first belief was wrong.",                                                                                 status: "framework", reflect: "What's the riskiest belief in your current project? What's the cheapest possible experiment that could prove it wrong?" },
  { t: "Product-market fit",           short: "When the market pulls the product out of your hands.",                                                                    deep: "Marc Andreessen coined the term and gave it a memorable description: pre-product-market fit, you're pushing your product onto people. Post-fit, they're yanking it out of your hands. Your servers keep falling over. Users are signing up faster than you can support them. They invite their friends without being asked. The product is doing something nobody else does well enough, for people who genuinely need it. Everything you do before reaching fit , clever marketing, design polish, sales tactics , is rearranging deck chairs on a ship that hasn't found land. Look for the honest signals: repeat use, real urgency to pay, unprompted referrals. Until those happen, fit is still ahead of you.",                                                                              status: "framework", reflect: "Do your users come back unprompted? Do they tell friends? If not, fit is still out there , and that's the real work." },
  { t: "Monopoly thinking (Peter Thiel)",     short: "Compete to be unique. Don't compete to be slightly better.",                                                                 deep: "Peter Thiel's spicy version: \"competition is for losers.\" Less spicy version: profitable businesses live in defensible niches where they don't have to fight every day on price and feature. The hard work is finding (or creating) a niche so specific you can dominate it , then carefully expanding outward. Most failed startups tried to be \"slightly better\" in a crowded market. The market doesn't reward slightly better; the customer can't tell the difference from outside. Better to own a small pond completely than to be the third best fish in the ocean.",                                                                                                                                                 status: "framework", reflect: "Are you trying to be slightly better in a crowded market? What much narrower niche could you fully own first?" },
  { t: "The bowling-pin strategy",        short: "Win a tiny segment completely. Use that win to knock over the next one.",                                                           deep: "Trying to capture 1% of a huge market is a slow, sad slog. Capturing 80% of a tiny market is fast and energising , and the tiny market is what gives you a base to roll outward from. Facebook didn't start as \"social network for everyone.\" It started for Harvard students only. Then Ivy League. Then US colleges. Then everyone. Airbnb didn't start as \"rent any room anywhere.\" It started as three airbeds for designers at one San Francisco conference. The first pin is small enough that you can win it completely. The win earns you the right to attempt the second.",                                                                                                                                             status: "framework", reflect: "What's the smallest, most specific niche you could fully dominate in the next 90 days?" },
  { t: "Default alive vs default dead",      short: "Project your runway and your growth honestly. Will you reach profitability before the money runs out?",                                            deep: "Paul Graham's reframing of the question every early-stage founder dodges. Take your current bank balance, your monthly burn rate, and your current growth rate. Project forward honestly. Two paths: \"default alive\" means at the current trajectory, you'll reach break-even before you run out of cash. \"Default dead\" means you'll run out first. Most founders avoid running the numbers because the result might be uncomfortable. Running them , even if the answer is \"default dead\" , is the only way to make sensible decisions about hiring, fundraising, and which experiments to try next. Avoidance is more expensive than the bad news.",                                                                                                             status: "framework", reflect: "Run the numbers honestly for your project. Are you default alive or default dead? What changes if you act on the answer?" },
  { t: "Talk to users. Always. Even when it's uncomfortable.", short: "Five real conversations beat five weeks of building. The bias against this is most of why founders fail.",                                    deep: "Paul Graham has been repeating two pieces of advice for fifteen years: do things that don't scale, and talk to your users. Most founders nod and then go back to coding. Why? Because building feels productive and conversations don't. Because users sometimes say uncomfortable things. Because finding people to talk to is awkward. All true. The discipline is to push back against that comfort. Five well-run customer conversations , using Mom Test rules , will teach you more than five weeks of building. Whenever you're stuck, the answer is almost always: go talk to more users.",                                                                                                                                         status: "settled",  reflect: "When did you last talk to a real prospective user about their actual problem? If it's been more than two weeks, that's the gap." },
  { t: "Distribution often beats product",    short: "A great product nobody finds loses to a meh product with reach. Pick your channel before you build.",                                             deep: "Founders systematically over-invest in product and under-invest in distribution , because they're in love with what they're building. The uncomfortable truth across Andrew Chen, Andreessen, and most successful operators: distribution is part of the product, not the afterthought. You should pick your channel , SEO, content, paid social, partnerships, community, a specific viral mechanic , before you finish building, and design the product to fit it. \"We'll figure out marketing later\" is a sentence said before most quiet shutdowns. The companies that won were the ones that picked a distribution channel deliberately and made the product fit.",                                                                                                         status: "framework", reflect: "What's your distribution channel? If your answer is \"word of mouth, eventually\" , that's not a channel, it's a wish." }
 ],

 counterView: "Startup advice is wildly biased by survivorship: we read the founders who won. The ones who followed identical playbooks and lost don't write books. 'Just do the lean thing and talk to users' is true but underweights luck, market timing, and capital availability. PG's writing is excellent for software startups in San Francisco from 2005-2015; it's less universal than it reads. Also, most 'entrepreneurship is the path to freedom' framing ignores that most small businesses fail and even the survivors trade salary stability for high-variance income. Treat books as priors to be updated by your specific context, not gospel.",

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
  "Default alive or default dead , pick the harder question first.",
  "Most pivots are positioning, not product."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Pick a problem, not an idea",              do: "Read The Mom Test, Paul Graham's startup essays, and The Lean Startup. Then, in writing, describe the problem you'd like to solve without naming any solution. That sentence is harder than it sounds.",                                                            milestone: "You can name MVP, PMF, build-measure-learn, default alive , and you have a problem statement that doesn't smuggle in a solution.",                 time: "~2-3 weeks" },
  { rank: "Apprentice",  focus: "Talk to 20 real people",                 do: "Find 20 real potential users. Run Mom-Test-style conversations , past behaviour only. No pitch, no \"would you use this?\" Just listen and take notes.",                                                                                     milestone: "You can describe the problem in your customers' actual words, not yours. The phrasing has shifted.",                                 time: "~1-2 months" },
  { rank: "Practitioner", focus: "Ship the smallest possible thing",             do: "Build a tiny first version that tests the riskiest belief. Spreadsheet OK. Manual service done by you OK. Concierge OK. Try to charge money , even ₹100. Iterate weekly.",                                                                         milestone: "You have at least one paying user (or genuinely repeat user) , even if everything is held together with tape.",                            time: "~3-6 months" },
  { rank: "Specialist",  focus: "Hunt for product-market fit",               do: "Tighten the niche further. Measure cohort retention seriously. Pick your distribution channel deliberately , not all of them, just one to run hard.",                                                                                     milestone: "The retention curve flattens , users from 3 months ago still use the thing. Strangers refer their friends.",                             time: "~6-12 months" },
  { rank: "Expert",    focus: "Scale carefully without breaking the magic",        do: "Hire your first one to three people. Write down the playbooks that worked. Find repeatable growth channels. Don't lose contact with customers.",                                                                                       milestone: "The business grows by 30%+ a quarter without your hand on every customer interaction.",                                        time: "~1-2 years" },
  { rank: "Master",    focus: "Build a real company",                   do: "Strategy, capital, team, multiple bets inside the same company. The job changes from \"build the thing\" to \"build the team that builds the thing.\"",                                                                                     milestone: "Durable business. Team ships meaningful work when you're on holiday.",                                                 time: "~3-5 years" },
  { rank: "Grandmaster", focus: "Compound, give back, mentor",                do: "Build generational wealth or sustained impact at scale. Back other founders. Help them skip the mistakes you made.",                                                                                                      milestone: "Other founders cite your earlier work as the reason they avoided a specific mistake.",                                         time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Paul Graham , essays",               what: "Decades of writing on startups, technology, and writing itself.",            url: "https://www.paulgraham.com/articles.html",                         verify: false, lastVerified: "2026-06" },
   { name: "Y Combinator Startup School (free)",        what: "Lecture series w/ founders + investors. Best free curriculum.",             url: "https://www.startupschool.org/",                              verify: false, lastVerified: "2026-06" },
   { name: "YC Startup Library",                what: "Curated, free, deep , videos + essays from YC.",                     url: "https://www.ycombinator.com/library",                            verify: false, lastVerified: "2026-06" },
   { name: "First Round Review",                what: "Long-form, well-edited essays from operators.",                     url: "https://review.firstround.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "Sam Altman , How to Start a Startup (Stanford)",  what: "Free video lecture series from 2014, still excellent.",                 url: "https://startupclass.samaltman.com/",                            verify: true, lastVerified: "2026-06" },
   { name: "Lenny's Newsletter , free posts",          what: "Product + growth writing; many free articles + podcast.",                url: "https://www.lennysnewsletter.com/",                             verify: false, lastVerified: "2026-06" },
   { name: "Andrew Chen , essay archive",            what: "Growth + marketplaces, deeply tested ideas.",                      url: "https://andrewchen.com/list-of-essays/",                          verify: false, lastVerified: "2026-06" },
   { name: "a16z , content + podcast",             what: "Free essays + podcasts from Andreessen Horowitz.",                    url: "https://a16z.com/content/",                                 verify: false, lastVerified: "2026-06" },
   { name: "Marc Andreessen blog archive",            what: "Archive of his classic blog posts (\"product-market fit\" coined here).",         url: "https://pmarchive.com/",                                  verify: false, lastVerified: "2026-06" },
   { name: "The Mom Test , Rob Fitzpatrick (excerpts)",     what: "Best single read on customer discovery , author site + samples.",            url: "https://www.momtestbook.com/",                               verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Zero to One , Peter Thiel",             what: "Monopoly thinking + contrarian first-principles.",                   url: "https://en.wikipedia.org/wiki/Zero_to_One",                         price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Lean Startup , Eric Ries",            what: "Build-measure-learn formalised.",                            url: "https://theleanstartup.com/",                                price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Hard Thing About Hard Things , Ben Horowitz",  what: "What no playbook teaches you about running a company.",                 url: "https://a16z.com/",                                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Mom Test , Rob Fitzpatrick",           what: "Best single read on customer discovery. Short and ruthless.",              url: "https://www.momtestbook.com/",                               price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Crossing the Chasm , Geoffrey Moore",        what: "Adoption-curve thinking. Still relevant for B2B.",                    url: "https://en.wikipedia.org/wiki/Crossing_the_Chasm",                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "High Growth Handbook , Elad Gil",          what: "Scaling-stage operating playbook.",                           url: "https://eladgil.com/high-growth-handbook/",                         price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Hooked , Nir Eyal",                 what: "Habit-forming product design. Read with ethics in mind.",                url: "https://www.nirandfar.com/hooked/",                             price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Founders at Work , Jessica Livingston",       what: "Interviews with early-stage founders. Pattern-rich.",                  url: "",                                             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Disciplined Entrepreneurship , Bill Aulet (MIT)",   what: "24-step playbook from MIT's entrepreneurship program.",                  url: "https://disciplinedentrepreneurship.com/",                         price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Working Backwards , Bryar & Carr (Amazon)",     what: "How Amazon turns ideas into products. PR/FAQ method.",                  url: "",                                             price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Pick a problem, not an idea", d: "Write the problem you're solving in one sentence , without naming your solution.", xp: 30 },
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
   { text: "Only talk to people who have already bought from you.", misconception: "You'd never discover anything new , pre-customer convos are the point." }
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
   { text: "It's wrong on the merits.", misconception: "Mostly directionally right , the issue is overweighted." },
   { text: "Survivorship bias , the founders who failed following the same playbook don't write books.", correct: true },
   { text: "It uses too much jargon.", misconception: "Jargon is a style issue, not a validity issue." },
   { text: "It's too old.", misconception: "Recency doesn't fix survivorship." }
  ], why: "Almost all startup books are written by survivors. Treat them as priors, not laws." },
  { q: "When should you pick your distribution channel?", options: [
   { text: "After you have product-market fit.", misconception: "Too late , channel constraints often shape the product itself." },
   { text: "Before you start building.", correct: true },
   { text: "Only once you can afford ads.", misconception: "Channel choice ≠ paid ads; can be SEO, partnerships, community." },
   { text: "Never , word of mouth is everything.", misconception: "Word of mouth without a channel design is hope, not plan." }
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
  { term: "MVP", def: "Minimum Viable Product , the smallest thing that tests a real assumption." },
  { term: "PMF", def: "Product-Market Fit , the market pulls the product." },
  { term: "Customer development", def: "Steve Blank's framework , systematic learning about customers before scaling." },
  { term: "Pivot", def: "Changing direction based on what you learned without abandoning the vision." },
  { term: "Cohort retention", def: "% of a group of users still active over time." },
  { term: "CAC / LTV", def: "Acquisition cost vs lifetime value , unit economics." },
  { term: "Default alive", def: "PG: project the runway, you'll reach profitability before cash runs out." },
  { term: "TAM", def: "Total Addressable Market , the upper-bound size of the opportunity." }
 ]
};

export default d;
