import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "entrepreneurship",
 icon: "🚀",
 hue: "#60a5fa",
 category: "Money & Work",
 name: "Entrepreneurship & Startups",
 tagline: "Find a real problem and solve it",

 basics: "Entrepreneurship is the work of building something other people pay you to use. Most people who fail at it don't fail from a shortage of ideas, they fail by solving problems nobody asked them to solve, for customers who exist mostly in their pitch deck. The actual discipline is small and uncomfortable: talk to real potential buyers about their actual lives, ship the smallest possible version of your idea before you feel ready, and let reality vote on what's next. The plan is wrong. The customer is the teacher. Your job is to listen, ship, learn, repeat.",
 whyItMatters: [
  "Even if you never start a company, the underlying skills, talking to users, scrappy shipping, killing your darlings, compound everywhere.",
  "Most jobs are getting more entrepreneurial. \"Hours at desk\" is being replaced by \"outcomes shipped.\"",
  "For a lot of people without a corporate ladder, it's the fastest honest path to real income.",
  "You'll see business-model traps from a mile away, and stop putting your savings into ones friends are excited about."
 ],
 realWorldExample: "Two friends couldn't make rent on their San Francisco apartment in 2007. A design conference was coming to town and all the hotels were booked out. They blew up three airbeds in their living room, took photos, made a one-page website, and rented those spots to designers who couldn't find a hotel. Three guests showed up. That was Airbnb's first version, no platform, no funding, no app, just an airbed in a living room and someone willing to pay for it. They didn't sit in cafes whiteboarding a marketplace strategy. They tested the smallest version of the idea on real strangers, in a real city, in a real weekend. Everything they built later came from what those three guests taught them.",

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
  { concept: "Calibrated questions", linksTo: "negotiation", note: "Same skill as Voss's open questions, the Mom Test reframed." }
 ],

 subdomains: [
  { id: "discovery", name: "Customer Discovery", intro: "Finding out whether a real person will pay for your idea before you build it. Most startups die because nobody asked.", capabilities: ["Run a 20-minute problem interview without pitching your solution.", "Tell apart polite enthusiasm from a real signed-up user.", "Kill an idea early when the evidence says no, instead of building anyway."] },
  { id: "shipping", name: "Shipping and PMF", intro: "The unglamorous loop of build, ship, learn, repeat until something fits the market. The signal you want is users pulling the product, not you pushing it.", capabilities: ["Cut a feature list down to one risky assumption you can test this week.", "Spot product-market fit by retention and word of mouth, not vanity metrics.", "Ship an embarrassingly small v1 in days, not months."] },
  { id: "strategy", name: "Strategy and Niche", intro: "Where you choose to play and how you choose to win. Picking the wrong market beats most execution mistakes you can make later.", capabilities: ["Define a niche tight enough that one sentence tells the customer it's for them.", "Identify an unfair advantage you actually hold, not one you wish you had.", "Walk away from a market that looks big but has no profitable wedge."] },
  { id: "distribution", name: "Distribution", intro: "How your product reaches the people who would buy it. A mediocre product with a strong channel beats a great product nobody finds.", capabilities: ["Pick one distribution channel and double down before testing a second.", "Build a content or community loop that brings users without paid ads.", "Calculate payback period on a paid channel before scaling spend."] },
 ],

 concepts: [
  { t: "The Mom Test (Rob Fitzpatrick)",     short: "Ask about their past, not your idea. Customers lie kindly when you ask about the future.",                                                 deep: "Imagine asking your mother whether she'd buy your new app. She loves you. Of course she'll say yes. That same kindness happens with every customer you ask \"would you use this?\", they're being polite, and they're guessing about a hypothetical future they have no real data on. Useless. Rob Fitzpatrick's tiny book reframes the entire conversation: stop asking about your idea, start asking about their past behaviour. \"When did you last hit this problem? What did you do? What did it cost you? Who else tried to help?\" Past behaviour is honest, because it actually happened. Future intent is fiction. Run five conversations this way and you'll learn more than from a hundred polite \"yes I'd use it\" surveys.",                                                                     status: "framework", reflect: "Take the last customer or user interview you did. How many of your questions were about their past behaviour vs. about your idea?" },
  { t: "Build → Measure → Learn",        short: "Treat each big assumption as an experiment, not a plan.",                                                                  deep: "Eric Ries's Lean Startup put a name on something good founders already did. Every business idea is really a stack of beliefs, \"people will pay for this,\" \"they'll find us through this channel,\" \"they'll stay for a year.\" Each belief is a guess until you've tested it. The discipline is: pick the riskiest belief, build the smallest possible thing that tests it (often a spreadsheet, a landing page, a manual service done by you in person), put it in front of real people, measure what they actually do (not what they say they'd do), then update or change direction. Most startups die because they spent two years building before testing the first belief, and the first belief was wrong.",                                                                                 status: "framework", reflect: "What's the riskiest belief in your current project? What's the cheapest possible experiment that could prove it wrong?" },
  { t: "Product-market fit",           short: "When the market pulls the product out of your hands.",                                                                    deep: "Marc Andreessen coined the term and gave it a memorable description: pre-product-market fit, you're pushing your product onto people. Post-fit, they're yanking it out of your hands. Your servers keep falling over. Users are signing up faster than you can support them. They invite their friends without being asked. The product is doing something nobody else does well enough, for people who genuinely need it. Everything you do before reaching fit, clever marketing, design polish, sales tactics, is rearranging deck chairs on a ship that hasn't found land. Look for the honest signals: repeat use, real urgency to pay, unprompted referrals. Until those happen, fit is still ahead of you.",                                                                              status: "framework", reflect: "Do your users come back unprompted? Do they tell friends? If not, fit is still out there, and that's the real work." },
  { t: "Monopoly thinking (Peter Thiel)",     short: "Compete to be unique. Don't compete to be slightly better.",                                                                 deep: "Peter Thiel's spicy version: \"competition is for losers.\" Less spicy version: profitable businesses live in defensible niches where they don't have to fight every day on price and feature. The hard work is finding (or creating) a niche so specific you can dominate it, then carefully expanding outward. Most failed startups tried to be \"slightly better\" in a crowded market. The market doesn't reward slightly better; the customer can't tell the difference from outside. Better to own a small pond completely than to be the third best fish in the ocean.",                                                                                                                                                 status: "framework", reflect: "Are you trying to be slightly better in a crowded market? What much narrower niche could you fully own first?" },
  { t: "The bowling-pin strategy",        short: "Win a tiny segment completely. Use that win to knock over the next one.",                                                           deep: "Trying to capture 1% of a huge market is a slow, sad slog. Capturing 80% of a tiny market is fast and energising, and the tiny market is what gives you a base to roll outward from. Facebook didn't start as \"social network for everyone.\" It started for Harvard students only. Then Ivy League. Then US colleges. Then everyone. Airbnb didn't start as \"rent any room anywhere.\" It started as three airbeds for designers at one San Francisco conference. The first pin is small enough that you can win it completely. The win earns you the right to attempt the second.",                                                                                                                                             status: "framework", reflect: "What's the smallest, most specific niche you could fully dominate in the next 90 days?" },
  { t: "Default alive vs default dead",      short: "Project your runway and your growth honestly. Will you reach profitability before the money runs out?",                                            deep: "Paul Graham's reframing of the question every early-stage founder dodges. Take your current bank balance, your monthly burn rate, and your current growth rate. Project forward honestly. Two paths: \"default alive\" means at the current trajectory, you'll reach break-even before you run out of cash. \"Default dead\" means you'll run out first. Most founders avoid running the numbers because the result might be uncomfortable. Running them, even if the answer is \"default dead\", is the only way to make sensible decisions about hiring, fundraising, and which experiments to try next. Avoidance is more expensive than the bad news.",                                                                                                             status: "framework", reflect: "Run the numbers honestly for your project. Are you default alive or default dead? What changes if you act on the answer?" },
  { t: "Talk to users. Always. Even when it's uncomfortable.", short: "Five real conversations beat five weeks of building. The bias against this is most of why founders fail.",                                    deep: "Paul Graham has been repeating two pieces of advice for fifteen years: do things that don't scale, and talk to your users. Most founders nod and then go back to coding. Why? Because building feels productive and conversations don't. Because users sometimes say uncomfortable things. Because finding people to talk to is awkward. All true. The discipline is to push back against that comfort. Five well-run customer conversations, using Mom Test rules, will teach you more than five weeks of building. Whenever you're stuck, the answer is almost always: go talk to more users.",                                                                                                                                         status: "settled",  reflect: "When did you last talk to a real prospective user about their actual problem? If it's been more than two weeks, that's the gap." },
  { t: "Distribution often beats product",    short: "A great product nobody finds loses to a meh product with reach. Pick your channel before you build.",                                             deep: "Founders systematically over-invest in product and under-invest in distribution, because they're in love with what they're building. The uncomfortable truth across Andrew Chen, Andreessen, and most successful operators: distribution is part of the product, not the afterthought. You should pick your channel, SEO, content, paid social, partnerships, community, a specific viral mechanic, before you finish building, and design the product to fit it. \"We'll figure out marketing later\" is a sentence said before most quiet shutdowns. The companies that won were the ones that picked a distribution channel deliberately and made the product fit.",                                                                                                         status: "framework", reflect: "What's your distribution channel? If your answer is \"word of mouth, eventually\", that's not a channel, it's a wish." },
  {
   t: "Customer development (Steve Blank)",
   subdomain: "discovery",
   definition: "A four-stage process of learning who the customer is and what they will pay for, in parallel with building the product.",
   short: "Build the customer at the same speed you build the product.",
   deep: "Steve Blank's frame shifted how startups think. Before customer development, product development looked like one straight line: idea, build, ship, sell. Blank pointed out that this hides where most startups die, on the customer side, not the product side. The fix is to run a second parallel track: discovery, validation, creation, and company-building, each one testable. You hypothesise who the customer is and what problem they have, then you go talk to real people to confirm or kill the hypothesis. Only after the customer side is confirmed do you scale spend. The Lean Startup is a direct descendant. Skipping this track is the single most common reason a polished v1 ships into silence.",
   generic: "Imagine opening a tiny tea stall. You could spend a month perfecting the recipe, or you could spend a week asking the people who walk past your spot what they currently drink, when, and for how much. The second path looks slower but saves you from opening a chai stall on a street where everyone drinks coffee.",
   expert: "Articulated in Blank (2005) and refined with Dorf (2012). Four phases: customer discovery, customer validation, customer creation, company building, with pivot gates between each. Forms the empirical backbone of Lean Startup (Ries, 2011) and Business Model Canvas (Osterwalder). Common failure mode: treating discovery interviews as sales pitches, which corrupts the signal; see Mom Test corrections.",
   status: "framework",
   reflect: "Are you running a customer track in parallel with your product track, or have you only been building?",
   conceptQuiz: [
    {
     q: "Customer development runs in parallel to…",
     options: [
      { text: "Product development, as a separate testable track.", correct: true },
      { text: "Fundraising rounds, replacing them entirely.", misconception: "Customer development informs fundraising but does not replace it." },
      { text: "Hiring, as a recruitment process.", misconception: "Hiring is a downstream activity, not the parallel track Blank named." },
      { text: "Marketing campaigns only.", misconception: "Marketing is one slice; customer development covers the whole customer side." }
     ],
     why: "Blank's central move was to add a customer track alongside the product track, with its own milestones."
    },
    {
     q: "Which is the clearest sign customer discovery is being done badly?",
     options: [
      { text: "The interviews mostly pitch the product and ask if people would buy it.", correct: true },
      { text: "The interviewer takes detailed notes on past behaviour.", misconception: "Behaviour-focused notes are exactly what good discovery looks like." },
      { text: "The interviewer talks to ten different people in one week.", misconception: "Volume of conversations is a positive, not a warning sign." },
      { text: "The interviewer skips slide decks entirely.", misconception: "Skipping decks is a healthy sign in discovery interviews." }
     ],
     why: "Pitching during discovery corrupts the signal, the same problem the Mom Test was written to fix."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write the hypothesis",  d: "Write one sentence describing who your customer is and what problem they have.", xp: 10 },
    { level: "easy",     t: "Run five interviews",   d: "Talk to five people who match the hypothesis using past-behaviour questions only.", xp: 20 },
    { level: "advanced", t: "Decide pivot or persist", d: "After ten interviews, write a memo recommending pivot or persist, with the evidence.", xp: 40 }
   ]
  },
  {
   t: "Unit economics",
   subdomain: "strategy",
   definition: "The revenue and cost behaviour of a single customer or transaction, the building block of business viability.",
   short: "If you lose money on one customer, you cannot fix it by adding more.",
   deep: "Unit economics is the boring, decisive question most early founders dodge. For one customer, or one order, what does it cost you to acquire them, what do they pay you over their lifetime, and what is left after delivering the service. The two headline numbers are CAC, customer acquisition cost, and LTV, lifetime value. A healthy software business often targets an LTV at least three times CAC, with payback inside twelve months. Cash-burning startups that scale before the unit math works just amplify the loss. The fix is rarely \"more volume,\" it is raising price, lengthening retention, dropping acquisition cost, or cutting variable cost per order. Do that math before you raise growth spend, not after.",
   generic: "Imagine selling samosas for ten rupees each, and each samosa costs you twelve rupees to make and deliver. Selling more samosas does not save you. You lose two rupees every time. Unit economics is just asking, very honestly, whether one sale makes money before you celebrate a hundred sales.",
   expert: "Standard SaaS rule of thumb: LTV to CAC ratio above 3, CAC payback under 12 months, gross margin above 70 percent (David Skok, Bessemer benchmarks). For marketplaces and consumer apps, contribution margin per transaction and cohort retention curves matter more than headline LTV. Common trap: using blended CAC instead of paid CAC, which masks unsustainable channels. Sequencing: unit economics need not be positive at pre-seed, but the path to positive should be writable on a napkin before Series A.",
   status: "settled",
   reflect: "Can you write your CAC, LTV, and gross margin per customer on a napkin right now? If not, that's the gap.",
   conceptQuiz: [
    {
     q: "If a startup loses money on every customer, scaling will…",
     options: [
      { text: "Amplify the losses unless the unit economics change.", correct: true },
      { text: "Eventually fix the problem through volume discounts.", misconception: "Volume discounts on inputs can help, but rarely close a structural unit-loss." },
      { text: "Automatically improve as the brand grows.", misconception: "Brand can reduce CAC over time, but it is not automatic and not always enough." },
      { text: "Have no effect either way.", misconception: "Scaling a negative-margin business deepens the hole." }
     ],
     why: "Bad unit economics multiplied by more units is just more losses, not fewer."
    },
    {
     q: "A common healthy benchmark for SaaS unit economics is…",
     options: [
      { text: "LTV at least three times CAC with payback inside about twelve months.", correct: true },
      { text: "LTV equal to CAC, since they should balance out.", misconception: "One-to-one leaves no margin for operating costs and risk." },
      { text: "CAC higher than LTV during a growth phase.", misconception: "Sometimes tolerated short term, but it is the warning condition, not the goal." },
      { text: "Only revenue matters; CAC can be ignored.", misconception: "Ignoring CAC is the classic blitz-scale mistake." }
     ],
     why: "The widely cited 3 to 1 LTV to CAC with sub-12-month payback is the benchmark in SaaS analysis."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write CAC and LTV",  d: "Write your current CAC and estimated LTV for one customer on a single page.", xp: 10 },
    { level: "easy",     t: "Find the leak",     d: "Identify the largest variable cost per customer and one experiment to cut it.", xp: 20 },
    { level: "advanced", t: "Repair the ratio",   d: "Run a 30-day test to improve LTV to CAC ratio and document the result.", xp: 40 }
   ]
  },
  {
   t: "Founder-market fit",
   subdomain: "strategy",
   definition: "The match between a founder's background, network, and unfair advantages and the market they have chosen to enter.",
   short: "The right founder for this market has an unfair edge nobody else does.",
   deep: "Product-market fit gets all the attention, but Andy Rachleff and Marc Andreessen both point at an earlier question: are you the right founder for this market in the first place. Founder-market fit is the honest accounting of what you know, who you know, what you have lived through, and what advantages compound in the market you have picked. A career nurse building a clinical workflow tool has founder-market fit. A career nurse building a crypto exchange does not, no matter how exciting the market looks. The fit is not about credentials, it is about whether the market rewards what you uniquely bring. Founders without it can still win, they just spend their first two years buying knowledge other founders started with.",
   generic: "Picture deciding to open a restaurant. If you grew up in a family that ran one, you start with recipes, supplier contacts, and instincts about service. If you have never cooked professionally, you can still open a restaurant, you just spend a year learning what your competitor knew on day one. That gap is founder-market fit.",
   expert: "Rachleff and Andreessen surfaced the term informally; later operationalised by Tren Griffin and the a16z founder thesis literature. Components: domain expertise, distribution access, capital network, lived problem experience, and personal stamina for the specific market's pace. Distinct from product-market fit, which is a market-side signal; founder-market fit is a founder-side prerequisite that affects time-to-PMF and capital efficiency. Failure mode: chasing hot markets without honest self-audit, often masked by pattern-matching to other founders' bios.",
   status: "framework",
   reflect: "Write down three unfair advantages you bring to your chosen market. If the list is thin, that is the founder-market fit gap, and it changes what you should do next.",
   conceptQuiz: [
    {
     q: "Founder-market fit is best described as…",
     options: [
      { text: "Alignment between the founder's unfair advantages and the chosen market.", correct: true },
      { text: "Whether customers pull the product out of the founder's hands.", misconception: "That is product-market fit, a market-side signal." },
      { text: "Whether the founder has raised a seed round.", misconception: "Capital does not equal founder-market fit, and many funded founders lack it." },
      { text: "How many co-founders the team has.", misconception: "Team size is unrelated to the founder-market fit question." }
     ],
     why: "The concept is about the match between founder strengths and the market's actual demands."
    },
    {
     q: "A founder without founder-market fit can still succeed, but typically…",
     options: [
      { text: "Pays a tuition cost in time and capital to learn what better-fit founders started with.", correct: true },
      { text: "Will inevitably fail within six months.", misconception: "Determinism overstates the case; many off-fit founders win, just slower." },
      { text: "Does not need to talk to customers.", misconception: "Off-fit founders need more customer learning, not less." },
      { text: "Should hire ten employees immediately.", misconception: "Hiring does not substitute for founder-market alignment." }
     ],
     why: "The gap is paid in extra learning cycles, not in automatic failure."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "List the advantages",   d: "Write three unfair advantages you bring to your chosen market and three you lack.", xp: 10 },
    { level: "easy",     t: "Test the fit",        d: "Show your list to two operators in the market and ask whether the advantages are real or imagined.", xp: 20 },
    { level: "advanced", t: "Close the largest gap",  d: "Pick the most painful missing advantage and design a 30-day plan to close it through hires, partners, or learning.", xp: 40 }
   ]
  },
  {
   t: "Network effects",
   subdomain: "distribution",
   definition: "A property where each new user makes the product more valuable to existing users, creating defensive moats and exponential adoption curves.",
   short: "Each new user makes the product better for everyone already on it.",
   deep: "Network effects are the strongest single moat in software. A telephone with one user is useless. A telephone network of ten million users is indispensable, and the eleventh million makes it slightly more valuable to all ten million already there. The same logic powers WhatsApp, LinkedIn, Uber, and most marketplace giants. Andrew Chen and NFX classify several flavours: direct (users attract users, like messaging), two-sided (buyers attract sellers and vice versa, like marketplaces), data (more usage improves the model, like search), and social (status accrues to early participants). Founders chase network effects because they compound, but the cold-start problem is brutal, the first ten users find a half-empty product. Solutions: seed one side manually, pick a tiny first niche where critical mass is small, or layer network effects onto an already-useful single-player tool.",
   generic: "Imagine a new chat app with only you on it. Useless. With your three closest friends on it, mildly useful. With everyone you know on it, indispensable. Each person joining makes the app better for everyone already there. That is a network effect, and it is also why launching one is so hard at the start.",
   expert: "Formalised by Rohlfs (1974) and popularised through Metcalfe's law (value proportional to n squared), though empirical curves are usually shallower (Briscoe et al., 2006 argue n log n). NFX taxonomy distinguishes 14 sub-types; key strategic moves are cold-start mitigation (Chen, 2021), tipping-point thresholds, and disintermediation defence in marketplaces. Network effects are often confused with virality, scale economies, and brand, all of which are weaker moats by Hamilton Helmer's 7 Powers framework.",
   status: "settled",
   reflect: "Does your product become more valuable to existing users when a new user joins? If not, what design change could introduce that loop without breaking the core experience?",
   conceptQuiz: [
    {
     q: "A network effect exists when…",
     options: [
      { text: "Each new user adds value for users already on the product.", correct: true },
      { text: "A product launches with a large marketing budget.", misconception: "Marketing spend is not the same as a network effect." },
      { text: "Servers handle more concurrent traffic.", misconception: "Scale economies on infrastructure are a different moat type." },
      { text: "The brand becomes well known.", misconception: "Brand is a moat, but a weaker one than network effects in Helmer's framework." }
     ],
     why: "The defining property is that user growth increases value for the existing user base, not just the new user."
    },
    {
     q: "The cold-start problem in network-effect businesses refers to…",
     options: [
      { text: "Early users find a near-empty product with little value yet.", correct: true },
      { text: "Hiring engineers takes too long at the start.", misconception: "Hiring delays are universal and not specific to network effects." },
      { text: "Servers running slowly in winter conditions.", misconception: "The term has nothing to do with literal temperature." },
      { text: "Investors refusing to fund early rounds.", misconception: "Fundraising difficulty is downstream, not the cold-start problem itself." }
     ],
     why: "Network-effect products are least valuable when smallest, which makes the first users the hardest to keep."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the loop",         d: "Write one sentence describing how a new user on your product creates value for existing users.", xp: 10 },
    { level: "easy",     t: "Seed one side",         d: "Identify one user segment small enough to manually seed to critical mass and outline how you would do it.", xp: 20 },
    { level: "advanced", t: "Run a tipping test",    d: "Pick a tightly defined niche, drive it to local critical mass, and document the retention and referral lift.", xp: 40 }
   ]
  },
  {
   t: "Jobs-to-be-Done",
   subdomain: "discovery",
   fullForm: "Jobs-to-be-Done (JTBD)",
   definition: "A framework that slices markets by the functional, social, and emotional job a user hires a product to do, rather than by demographic or product category.",
   short: "Customers do not buy products. They hire them to do a job.",
   deep: "Clayton Christensen formalised Jobs-to-be-Done after watching a fast-food chain try to improve milkshake sales by surveying milkshake buyers. The survey produced minor tweaks and no growth. The JTBD reframe asked instead, what job is the milkshake being hired to do? The answer turned out to be a long, boring morning commute that needed a thick, slow, one-handed breakfast. Once the job was clear, the redesign was obvious. JTBD slices markets by progress the user is trying to make, not by age, income, or product category. The competitive set widens accordingly, your milkshake competes with bagels, bananas, and boredom, not just with other milkshakes. The discipline is to interview customers about the last time they hired a solution, then decode the functional, social, and emotional dimensions of the job. Used well, it reframes positioning, pricing, and which features actually matter.",
   generic: "Imagine a drill in a hardware shop. Nobody actually wants a drill. They want a hole in the wall to hang a photo. If a sticky strip put the photo up without a hole, the drill loses the job. JTBD just asks, what is the customer really trying to get done, and what else could you hire to do it?",
   expert: "Articulated by Christensen, Hall, Dillon, and Duncan (Competing Against Luck, 2016) building on Theodore Levitt's marketing myopia and Ulwick's outcome-driven innovation. Three job dimensions: functional, social, emotional. Standard interview format probes the last switch, the four forces (push from old solution, pull of new solution, anxiety about new, habit of old), and the hiring criteria. Distinct from personas, which describe who; JTBD describes why. Common failure: conflating activities with jobs, or stating the job at the wrong altitude.",
   status: "framework",
   reflect: "What job is your product actually being hired to do? If you described it without naming your product, would the answer point as clearly to a competitor as to you?",
   conceptQuiz: [
    {
     q: "Jobs-to-be-Done slices markets primarily by…",
     options: [
      { text: "The functional, social, and emotional job a customer is trying to get done.", correct: true },
      { text: "Customer age, income, and location.", misconception: "That is demographic segmentation, which JTBD was designed to replace." },
      { text: "Product category and price tier.", misconception: "Product-category slicing misses substitutes that do the same job differently." },
      { text: "Geography of distribution channels.", misconception: "Channel slicing is operational, not a JTBD lens." }
     ],
     why: "The frame is built around the progress the customer is trying to make, not who they are."
    },
    {
     q: "In the milkshake example, the surprise insight was that the milkshake competed with…",
     options: [
      { text: "Bagels, bananas, and a boring commute, not just other milkshakes.", correct: true },
      { text: "Only other fast-food chains' milkshakes.", misconception: "That is the category view; JTBD widens the competitive set." },
      { text: "Coffee priced at the same dollar amount.", misconception: "Price match is not the JTBD test; job match is." },
      { text: "Whatever the marketing team imagined.", misconception: "Imagined competition is exactly what JTBD interviews replace with evidence." }
     ],
     why: "Once the job was a one-handed breakfast for a long commute, every breakfast-on-the-go option was the real competitive set."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the job",           d: "Write the functional, social, and emotional job your product is hired to do, in three short sentences.", xp: 10 },
    { level: "easy",     t: "Interview the last switch", d: "Talk to a customer who recently switched to your product and map the four forces around their decision.", xp: 20 },
    { level: "advanced", t: "Reframe the competitive set", d: "List every other solution customers could hire to do the same job, then design one experiment that beats the closest substitute.", xp: 40 }
   ],
   diagram: {
    kind: "flow",
    title: "How customers hire a product",
    caption: "JTBD reframes purchase as a job. Customers fire the old solution, hire the new one, and you compete with every alternative, not just the obvious one.",
    data: {
     steps: ["Struggling moment", "Search for a fix", "Fire old solution", "Hire your product", "Job gets done"]
    }
   }
  },
  {
   t: "Product-Led Growth",
   subdomain: "distribution",
   fullForm: "Product-Led Growth (PLG)",
   definition: "A go-to-market motion in which customer acquisition, activation, expansion, and retention are driven primarily by product experience rather than sales-led outreach.",
   short: "Let the product sell, onboard, and upgrade users. Sales is the assist, not the lead.",
   deep: "Product-Led Growth was named at OpenView in 2016 after a pattern noticed across Slack, Dropbox, Calendly, Figma, and Notion. Instead of cold outbound and demos, the product itself is the front door. Users land on a free or freemium plan, get to value in minutes, invite teammates because the product gets better with them, and quietly cross the paywall when usage hits a natural limit. PLG works when three things are true: the product can demonstrate value without a salesperson, virality or team usage is built into the core loop, and self-serve pricing maps to obvious expansion triggers. It is not a substitute for sales in every market, enterprise deals with procurement still need humans, but PLG companies often compound faster and burn less because acquisition cost is paid by the product, not by marketing spend. The risk: PLG without a clear monetisation moment becomes a free tool with users, not a business.",
   generic: "Imagine a coffee shop that lets you walk in, sit down, and drink a full cup for free. You like it, you bring three friends tomorrow, and after a week you start paying for the bigger size because the small one stopped being enough. The shop never had to advertise to you. The cup did the selling. PLG works the same way for software.",
   expert: "Coined and codified by OpenView (Blake Bartlett, 2016). Distinguishes from product-led sales (PLS), which layers human sales on top of PLG signals. Core metrics: time-to-value, activation rate, product-qualified leads (PQLs), expansion revenue, and net dollar retention. Common pitfalls: free-tier abuse without conversion design, sales overlay that breaks the self-serve trust, and treating PLG as a synonym for freemium when it is actually a broader go-to-market philosophy. Reference companies: Slack, Figma, Notion, Calendly, Datadog, Atlassian's pre-IPO model.",
   status: "framework",
   reflect: "Can a new user reach a clear moment of value in your product within ten minutes, without a sales call? If not, that is where PLG breaks first.",
   conceptQuiz: [
    {
     q: "Product-Led Growth differs from traditional sales-led growth because…",
     options: [
      { text: "The product drives acquisition, activation, and expansion rather than a sales team.", correct: true },
      { text: "The product is always free and never monetises.", misconception: "PLG monetises, often through usage limits and self-serve upgrades; free is not the goal." },
      { text: "Sales teams are banned from the company.", misconception: "Many PLG companies have sales teams; they assist after product-qualified signals." },
      { text: "Marketing handles every customer interaction.", misconception: "PLG specifically shifts the work to the product, not to marketing." }
     ],
     why: "The defining shift is from human-led pipeline to product-led pipeline; sales and marketing assist rather than lead."
    },
    {
     q: "A PLG motion typically requires that…",
     options: [
      { text: "Users can reach value without a salesperson and the product has natural expansion triggers.", correct: true },
      { text: "Every feature be free forever.", misconception: "Free forever without monetisation triggers is a charity, not a business." },
      { text: "The product avoid any kind of pricing page.", misconception: "Self-serve pricing pages are central to PLG conversion." },
      { text: "The company refuse to sell to enterprises.", misconception: "PLG often layers product-led sales on enterprise expansion." }
     ],
     why: "Self-serve value and built-in expansion are the structural conditions PLG needs to compound."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Time to value",          d: "Measure how long it takes a brand-new user to reach a first clear value moment in your product, in minutes.", xp: 10 },
    { level: "easy",     t: "Find the natural limit", d: "Identify one usage limit or feature gate that maps to a natural moment when a user would willingly pay to upgrade.", xp: 20 },
    { level: "advanced", t: "Ship a PLG loop",        d: "Design and ship a self-serve onboarding flow that takes a new user from signup to paid upgrade without a sales call, and measure conversion.", xp: 40 }
   ],
   diagram: {
    kind: "cycle",
    title: "PLG growth loop",
    caption: "Each turn of the loop creates the next user. Sales is the assist; the product is the salesperson.",
    data: {
     nodes: ["Try free", "Reach value", "Invite team", "Hit usage limit", "Upgrade", "Refer others"]
    }
   }
  },
  {
   t: "Cold-start problem",
   subdomain: "distribution",
   definition: "The challenge that network-effect and marketplace products are least valuable when smallest, so the first users find a nearly empty product and leave.",
   short: "Empty rooms drive away the first guests. Seed one side manually.",
   deep: "Andrew Chen's book of the same name names the central paradox of network-effect businesses: the product only becomes valuable once a critical mass of users joins, and the first users land in an empty room and bounce. A messaging app with three people on it is useless. A marketplace with no sellers is useless. A community with no posts is useless. The four working solutions are, first, pick a niche so small that critical mass is small (Facebook started with one university), second, manually seed one side (early Reddit posts were written by the founders under fake usernames), third, layer the network on top of a single-player tool that has value alone (Instagram was a useful photo filter before it was a social network), and fourth, batch the launch so users arrive in waves that reach local density. Skipping cold-start is the single most common reason network-effect ideas die before reaching the upward part of the curve.",
   generic: "Imagine opening a new dance class. The first session has three people in a big empty hall, and nobody comes back because it felt empty. The fix is either to invite a tight group of friends so the room feels alive, or to run the first session in a smaller hall, or to combine the dance class with a yoga session that already has regulars. The lesson, do not let early users see an empty room.",
   expert: "Chen (2021) at a16z formalised the framework after running growth at Uber. The atomic network is the smallest unit that delivers core value (a single dorm at early Facebook, a single ride zone at early Uber). Hard side identification is critical, in two-sided marketplaces the harder side to acquire (drivers, hosts, professional sellers) gets the manual seeding. Distinct from launch marketing, which is downstream of cold-start. Failure modes: launching too broadly with no atomic network, ignoring the hard side, and treating supply growth as automatic once demand exists.",
   status: "framework",
   reflect: "What is the smallest atomic network that would make your product feel alive? If you cannot name it, you have not solved cold-start yet.",
   conceptQuiz: [
    {
     q: "The cold-start problem in network-effect products is that…",
     options: [
      { text: "The product is least valuable when smallest, so early users find an empty room and leave.", correct: true },
      { text: "Servers run slowly when the weather is cold.", misconception: "The term is metaphorical, not literal." },
      { text: "Early stage fundraising is hard.", misconception: "Fundraising is downstream of, not the cold-start problem itself." },
      { text: "Engineers take time to onboard.", misconception: "Hiring delays are universal, not specific to cold-start." }
     ],
     why: "Network value lags user count, which strands early adopters."
    },
    {
     q: "Which is a working solution to cold-start?",
     options: [
      { text: "Pick a niche small enough that critical mass is small, then expand outward.", correct: true },
      { text: "Wait for users to find the product organically.", misconception: "Organic discovery on an empty product produces churn, not growth." },
      { text: "Launch globally in one day with no seeding.", misconception: "Broad launch spreads users too thin to reach local density." },
      { text: "Refuse to manually seed any content.", misconception: "Manual seeding is one of the core solutions, not an anti-pattern." }
     ],
     why: "Small atomic networks let critical mass be reached locally."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the atomic network",  d: "Write one sentence describing the smallest user network that would make your product feel alive.", xp: 10 },
    { level: "easy",     t: "Seed one side manually",   d: "Pick the hard side of your network and outline a manual seeding plan for the first fifty participants.", xp: 20 },
    { level: "advanced", t: "Reach local density",      d: "Drive a tightly defined niche to local critical mass, then document retention and referral lift versus a control niche.", xp: 40 }
   ]
  },
  {
   t: "Two-sided markets",
   subdomain: "strategy",
   definition: "Platforms that match two distinct user groups, often buyers and sellers, where each side's value depends on the size and quality of the other.",
   short: "Chicken-and-egg. Pick the harder side and seed it first.",
   deep: "Two-sided markets are platforms where two different user groups must be acquired in roughly matched volume for the product to work. Uber needs drivers and riders. Airbnb needs hosts and guests. Stripe needs merchants and the payment networks. The strategic challenge is that each side's value depends on the other, so an empty marketplace fails on both sides at once. Jean Tirole won a Nobel for showing that platforms can subsidise one side to attract the other, ride-sharing apps paid drivers above market rate early to make sure cars were always nearby when riders opened the app. The hardest question in a two-sided market is which side to subsidise. The answer is usually whichever side is harder to acquire and slower to retain, supply often beats demand for this reason. Failure modes include scaling demand faster than supply (leading to long wait times) and pricing too low to keep the subsidised side engaged once subsidies end.",
   generic: "Imagine opening a farmers market. You need farmers to bring vegetables and shoppers to buy them. If farmers show up with full carts and only three shoppers come, the farmers leave and never return. If shoppers come and find no farmers, they leave and never return. You usually pay the farmers a small stipend the first few weeks to make sure they show up reliably, so shoppers eventually come and stay.",
   expert: "Rochet and Tirole (2003) formalised two-sided market pricing theory, showing that the optimal price structure can include subsidies, zero pricing, or even negative pricing on one side. Eisenmann, Parker, and Van Alstyne (2006) extended this to platform strategy. Key levers: cross-side network effects, multi-homing costs (do users join multiple competing platforms), and disintermediation risk (do matched parties leave the platform after meeting). Helmer's 7 Powers ranks scaled two-sided platforms among the strongest defensive moats. Failure modes: chasing demand at the expense of supply quality, and pricing exits that collapse one side.",
   status: "framework",
   reflect: "On your platform, which side is harder to acquire and slower to retain? That is the side you should be subsidising first.",
   conceptQuiz: [
    {
     q: "A two-sided market is defined by…",
     options: [
      { text: "Two distinct user groups whose value depends on the size and quality of the other.", correct: true },
      { text: "Two competing companies in the same category.", misconception: "Competitive dynamics are not the same as two-sidedness." },
      { text: "A product sold in two countries.", misconception: "Geographic spread is unrelated." },
      { text: "Any company with both a website and an app.", misconception: "Multi-channel distribution is not two-sided market structure." }
     ],
     why: "The defining property is interdependent value between two groups."
    },
    {
     q: "Why do most two-sided platforms subsidise one side?",
     options: [
      { text: "Because that side is harder to acquire or retain, and its presence pulls the other side in.", correct: true },
      { text: "To comply with regulation.", misconception: "Subsidy is strategic, not regulatory." },
      { text: "To reduce server costs.", misconception: "Subsidy is about user economics, not infrastructure." },
      { text: "Because both sides demand it.", misconception: "Both sides rarely demand the same subsidy; the strategic choice is which to fund." }
     ],
     why: "The harder side is the binding constraint; subsidising it unlocks the other side's value."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name both sides",          d: "Write one sentence describing each side of your platform and what value each gets from the other.", xp: 10 },
    { level: "easy",     t: "Identify the hard side",   d: "Estimate acquisition and retention cost per user on each side. The harder side is your priority.", xp: 20 },
    { level: "advanced", t: "Design a subsidy",         d: "Design and run a thirty-day subsidy experiment on the hard side and measure the cross-side effect on the easier side.", xp: 40 }
   ]
  },
  {
   t: "Bootstrapping vs venture funding",
   subdomain: "strategy",
   definition: "Two contrasting paths to fund a startup: bootstrapping uses revenue and personal capital, venture funding trades equity for outside cash and growth pressure.",
   short: "Slow and yours, or fast and partly someone else's.",
   deep: "Bootstrapping funds the company from customer revenue, founder savings, and small operating loans. The founders keep all the equity, set their own pace, and answer to customers rather than investors. Venture funding swaps equity for cash and high growth expectations, the deal is that the company commits to chase an outcome large enough to return the fund (typically a 10x or larger exit). Neither path is universally better. Bootstrapping wins for businesses where the natural market size is medium (a profitable 5 to 50 crore revenue business is great for the founders, useless for a venture fund) or where the path to revenue is short. Venture funding wins for businesses where speed matters more than ownership (winner-take-most markets), where R and D costs are heavy before revenue, or where network effects need rapid scale. The mistake is choosing the wrong path for the actual market, raising venture money for a lifestyle business creates pressure that kills the business, bootstrapping a network-effect race lets the funded competitor win.",
   generic: "Imagine opening a bakery. You can fund it from savings and grow one new oven at a time, keeping every rupee for yourself, or you can take an investor's money and open ten branches in a year while answering to them about every decision. Both paths have built bakeries that work. The right choice depends on whether the market rewards being first and big, or being steady and yours.",
   expert: "Brian Halligan and Jason Cohen articulate the bootstrapping case (Calendly, Mailchimp pre-acquisition, Basecamp). The venture path is laid out by Sequoia, a16z, and YC literature. Quantitative test: estimate steady-state revenue and growth rate honestly, then check whether a venture fund could realistically see a 10x return at its ownership percentage. If yes, venture is viable. If no, venture money will pressure the company into killing experiments to chase a return that is not there. Hybrid paths include revenue-based financing (Lighter Capital, Pipe) and venture studios (Atomic, Pioneer Square Labs). Failure modes: cargo-cult fundraising for credibility rather than need, and bootstrapping past the point where capital would have decisively won the market.",
   status: "framework",
   reflect: "Be honest about the steady-state revenue and growth rate of your business. Could a venture fund realistically see a 10x return at your stage? The answer should drive your path, not founder ego.",
   conceptQuiz: [
    {
     q: "The main trade-off between bootstrapping and venture funding is…",
     options: [
      { text: "Ownership and control versus speed and scale.", correct: true },
      { text: "Whether the founders are paid a salary.", misconception: "Salary is a secondary issue, not the structural trade-off." },
      { text: "Whether the product is software or hardware.", misconception: "Either path can fund either product type." },
      { text: "Whether the company files taxes.", misconception: "Tax filing is required for both paths." }
     ],
     why: "Equity dilution buys speed and scale; bootstrapping keeps ownership and pace."
    },
    {
     q: "When is venture funding clearly the right choice?",
     options: [
      { text: "When the market rewards speed and scale, and the company can realistically return a venture fund's target.", correct: true },
      { text: "Whenever founders want validation.", misconception: "Validation is not a strategic reason to raise; it is a vanity trap." },
      { text: "For any consumer product.", misconception: "Many consumer products bootstrap successfully (Basecamp, ConvertKit)." },
      { text: "Whenever a friend offers a cheque.", misconception: "Offered capital is not the same as needed capital." }
     ],
     why: "Venture maths only works when the outcome can plausibly clear the fund's return bar."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Estimate the ceiling",   d: "Write one estimate of the steady-state revenue and exit value of your business in five years.", xp: 10 },
    { level: "easy",     t: "Run the venture maths",  d: "Calculate whether a venture fund could see a 10x return at your stage given your ceiling estimate.", xp: 20 },
    { level: "advanced", t: "Pick the path explicitly", d: "Write a one-page memo on which funding path fits your market and commit to it for the next twelve months.", xp: 40 }
   ]
  },
  {
   t: "Fundraising stages",
   subdomain: "strategy",
   definition: "The standard sequence of equity rounds from pre-seed through Series D, each with typical check size, dilution, and milestone expectations.",
   short: "Pre-seed, seed, A, B, C, D. Each round buys time to hit the next milestone.",
   deep: "Venture-backed companies typically pass through a standard sequence of equity rounds, each with its own purpose. Pre-seed (50 lakh to 4 crore) funds the founders and a prototype, sold on conviction. Seed (4 to 25 crore) funds the search for product-market fit, sold on early traction. Series A (25 to 100 crore) funds the scale-up after PMF, sold on repeatable growth metrics like LTV to CAC ratios above three and twenty percent month over month growth. Series B (100 to 400 crore) funds geographic or product expansion. Series C and D (400 crore and up) fund market leadership, late-stage hires, and pre-IPO positioning. Each round typically dilutes 15 to 25 percent of equity, and each carries a milestone expectation, miss the milestone and the next round either does not happen or happens at a flat or down valuation. Founders who do not understand the milestone clock raise the wrong amount or pitch the wrong story for their stage.",
   generic: "Imagine climbing a ladder. Each rung is a stage. The first rung lets you build a prototype. The second rung lets you find your first customers. The third rung lets you grow. You only get to climb to the next rung if you stood on the current one and showed you could balance. Skipping rungs almost always means falling.",
   expert: "Standard ranges shift with market cycles; the structure persists. Pitchbook and CB Insights track stage benchmarks empirically. Key concepts: pre-money and post-money valuation, liquidation preferences, participating versus non-participating preferred, anti-dilution clauses, pro-rata rights, and board seats. Stage-fit is critical, raising seed money on a Series A story or vice versa signals misalignment. Down rounds and flat rounds carry signalling cost beyond the cap-table dilution. Alternative paths include SAFE notes (YC standard for early rounds), revenue-based financing, and venture debt.",
   status: "settled",
   reflect: "What stage is your company actually at, by the milestone test rather than your hopes? Are you pitching the story that fits your stage?",
   conceptQuiz: [
    {
     q: "A Series A round typically funds…",
     options: [
      { text: "Scaling a business that has demonstrated product-market fit and repeatable growth.", correct: true },
      { text: "Building the very first prototype.", misconception: "That is pre-seed territory." },
      { text: "Pre-IPO market leadership positioning.", misconception: "That is Series C or D territory." },
      { text: "Paying back venture debt.", misconception: "Debt repayment is not the purpose of equity rounds." }
     ],
     why: "Series A buys the scale-up after PMF is demonstrated."
    },
    {
     q: "The main risk of pitching a Series A story at the seed stage is…",
     options: [
      { text: "Investors see the misalignment and pass, because seed metrics rarely match Series A expectations.", correct: true },
      { text: "The founders dilute too little.", misconception: "Misalignment usually kills the round, not the dilution math." },
      { text: "The company becomes a unicorn faster.", misconception: "Pitch mismatch does not accelerate growth." },
      { text: "Regulators investigate.", misconception: "No regulatory issue applies." }
     ],
     why: "Stage-fit signals competence; mismatch signals confusion."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name your stage",         d: "Write one sentence stating which stage your company is at by milestone, not by hope.", xp: 10 },
    { level: "easy",     t: "Match the metrics",       d: "Find three benchmark metrics for your stage from CB Insights or Pitchbook and tag where you stand on each.", xp: 20 },
    { level: "advanced", t: "Build the next-stage memo", d: "Write the deck for your next round using the milestone bar of the target stage, and circulate to two stage-appropriate investors for feedback.", xp: 40 }
   ]
  },
  {
   t: "Pivots taxonomy (Ries)",
   subdomain: "shipping",
   definition: "Eric Ries's classification of ten distinct pivot types, each a deliberate change in one dimension of the business model while preserving the rest.",
   short: "Ten flavours of pivot. Most failed startups picked the wrong one.",
   deep: "Eric Ries argued that pivoting is not failure, it is the structured response to disconfirming evidence. He catalogued ten distinct pivot types, each changing one dimension while holding others constant. The customer-segment pivot keeps the product but targets a different buyer. The customer-need pivot keeps the segment but solves a different problem. The platform pivot changes from application to platform or vice versa. The business-architecture pivot moves between B2B and B2C. The value-capture pivot changes how the company makes money. The engine-of-growth pivot changes between viral, sticky, and paid acquisition. The channel pivot changes distribution. The technology pivot keeps everything but rebuilds the tech stack. The zoom-in pivot turns one feature into the whole product. The zoom-out pivot bundles the product into something larger. Naming the pivot type explicitly forces founders to specify what they are changing and what they are keeping, which prevents the common mess of changing five things at once and learning nothing.",
   generic: "Imagine a restaurant struggling to find customers. You can keep the menu and move to a busier street (channel), keep the location and change the menu (customer need), or keep both and switch from sit-down to delivery (business architecture). Each of these is a different pivot. The mistake is changing the menu, the location, and the format all at once, because then you cannot tell which change made the difference.",
   expert: "Ries (2011) enumerated the ten pivots after observing patterns across IMVU and YC alumni. Each pivot type has different operational implications and different risk profiles. Customer-segment pivots are usually cheapest, technology pivots are expensive but sometimes necessary. Distinct from a pivot is a perseverance decision (stay the course) or a full reset. Failure modes: pivoting too often (premature optimisation under noise), pivoting too late (sunk cost), and pivoting on multiple dimensions simultaneously (impossible to attribute outcomes).",
   status: "framework",
   reflect: "If you pivoted tomorrow, which of the ten types would it be? If you cannot name the type, you are probably about to change too many things at once.",
   conceptQuiz: [
    {
     q: "A customer-segment pivot keeps the product the same but…",
     options: [
      { text: "Targets a different buyer who has the problem the product already solves.", correct: true },
      { text: "Switches the technology stack entirely.", misconception: "That is a technology pivot." },
      { text: "Changes the pricing model.", misconception: "That is a value-capture pivot." },
      { text: "Adds new features for the same buyers.", misconception: "Feature work is not a pivot." }
     ],
     why: "Segment pivots keep the product and find a better-fit buyer."
    },
    {
     q: "The main risk of pivoting on multiple dimensions simultaneously is…",
     options: [
      { text: "You cannot tell which change produced the outcome, so you learn nothing.", correct: true },
      { text: "Investors approve every multi-pivot.", misconception: "Investors are usually wary of multi-pivots, not approving." },
      { text: "Multi-pivots are illegal.", misconception: "No legal issue applies." },
      { text: "The company automatically becomes profitable.", misconception: "Multi-pivots usually worsen, not improve, the situation." }
     ],
     why: "Attribution collapses when too many variables change at once."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the type",           d: "If you were to pivot tomorrow, write one sentence naming which of the ten types it would be.", xp: 10 },
    { level: "easy",     t: "Hold the rest constant",  d: "List which dimensions you would explicitly keep unchanged during the pivot to isolate the variable.", xp: 20 },
    { level: "advanced", t: "Run a real pivot",        d: "Execute a single-dimension pivot, hold every other dimension constant for ninety days, and document the learning.", xp: 40 }
   ]
  },
  {
   t: "Aggregation theory (Thompson)",
   subdomain: "strategy",
   definition: "Ben Thompson's framework that internet-era winners are platforms that aggregate demand by owning the user relationship, commoditising suppliers below them.",
   short: "Own the user. The suppliers will follow.",
   deep: "Ben Thompson's aggregation theory argues that the internet inverted twentieth-century value chains. Before, the bottleneck was supply, controlling distribution (a chain of cinemas, a newspaper, a network of stores) gave you power because the supplier-side was scarce. After the internet made distribution effectively free, the new bottleneck became demand, the user's attention. Whoever owned the user relationship could commoditise the suppliers behind them. Google aggregates web pages, Netflix aggregates content licensors, Uber aggregates drivers, Amazon aggregates third-party merchants. Each platform won by making the user experience so good that suppliers had to come to where the users were, which then forced them to compete on price and terms set by the platform. The theory has three preconditions: zero marginal cost of serving an additional user, zero acquisition cost beyond some critical mass, and supplier modularity (interchangeable suppliers downstream). Where all three hold, aggregator power compounds. Where they do not (highly regulated supply like healthcare, or non-modular supply like high-end fashion), aggregation is harder.",
   generic: "Imagine a town where every restaurant used to own its own delivery riders. Then one app gathered every diner in the town onto its platform. Restaurants had to join or lose orders. The app set the commission. The restaurants became interchangeable from the diner's view, and the app captured most of the value the town's restaurants used to keep. That shift is aggregation in action.",
   expert: "Thompson (Stratechery, 2015 onwards) builds on Christensen's modularity theory and on Schmalensee and Evans's two-sided platform economics. Distinct from network effects in that aggregation can work without direct cross-side effects, and distinct from scale economies in that the moat is user relationship, not unit cost. Helmer's 7 Powers names this as scale-economy plus counter-positioning in some cases. Failure modes: regulatory backlash (DMA in Europe), supplier revolt (musicians leaving Spotify), and substitution by an aggregator at a higher altitude (TikTok aggregating attention away from Google).",
   status: "framework",
   reflect: "In your market, who owns the user relationship? If it is not you, you are probably a supplier in someone else's aggregation play, and your margins will follow accordingly.",
   conceptQuiz: [
    {
     q: "Aggregation theory argues that internet-era winners primarily own…",
     options: [
      { text: "The user relationship, which lets them commoditise suppliers below.", correct: true },
      { text: "The largest factories.", misconception: "Factories were the pre-internet power source." },
      { text: "The most patents.", misconception: "Patents are one moat, not the aggregation moat." },
      { text: "The cheapest cloud infrastructure.", misconception: "Infrastructure cost is a sub-issue, not the aggregation lever." }
     ],
     why: "Aggregator power flows from owning demand and commoditising supply."
    },
    {
     q: "Aggregation works best when…",
     options: [
      { text: "Marginal cost is near zero, acquisition is cheap, and suppliers are modular.", correct: true },
      { text: "Supply is heavily regulated and non-modular.", misconception: "Regulation and non-modularity often prevent aggregation." },
      { text: "There is only one possible supplier in the market.", misconception: "Monopoly supply does not need aggregation to capture value." },
      { text: "The product is sold offline only.", misconception: "Offline-only markets rarely permit internet-scale aggregation." }
     ],
     why: "The three preconditions enable demand-side dominance to commoditise supply."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Map the chain",           d: "Draw your market's value chain and mark who owns the user relationship today.", xp: 10 },
    { level: "easy",     t: "Test the preconditions",  d: "Score your market against the three aggregation preconditions and identify which is the weakest.", xp: 20 },
    { level: "advanced", t: "Pick a side explicitly",  d: "Decide whether your strategy is to become the aggregator or to compete as a differentiated supplier, and write a memo defending the choice.", xp: 40 }
   ]
  }
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
  "Default alive or default dead, pick the harder question first.",
  "Most pivots are positioning, not product."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Pick a problem, not an idea",              do: "Read The Mom Test, Paul Graham's startup essays, and The Lean Startup. Then, in writing, describe the problem you'd like to solve without naming any solution. That sentence is harder than it sounds.",                                                            milestone: "You can name MVP, PMF, build-measure-learn, default alive, and you have a problem statement that doesn't smuggle in a solution.",                 time: "~2-3 weeks" },
  { rank: "Apprentice",  focus: "Talk to 20 real people",                 do: "Find 20 real potential users. Run Mom-Test-style conversations, past behaviour only. No pitch, no \"would you use this?\" Just listen and take notes.",                                                                                     milestone: "You can describe the problem in your customers' actual words, not yours. The phrasing has shifted.",                                 time: "~1-2 months" },
  { rank: "Practitioner", focus: "Ship the smallest possible thing",             do: "Build a tiny first version that tests the riskiest belief. Spreadsheet OK. Manual service done by you OK. Concierge OK. Try to charge money, even ₹100. Iterate weekly.",                                                                         milestone: "You have at least one paying user (or genuinely repeat user), even if everything is held together with tape.",                            time: "~3-6 months" },
  { rank: "Specialist",  focus: "Hunt for product-market fit",               do: "Tighten the niche further. Measure cohort retention seriously. Pick your distribution channel deliberately, not all of them, just one to run hard.",                                                                                     milestone: "The retention curve flattens, users from 3 months ago still use the thing. Strangers refer their friends.",                             time: "~6-12 months" },
  { rank: "Expert",    focus: "Scale carefully without breaking the magic",        do: "Hire your first one to three people. Write down the playbooks that worked. Find repeatable growth channels. Don't lose contact with customers.",                                                                                       milestone: "The business grows by 30%+ a quarter without your hand on every customer interaction.",                                        time: "~1-2 years" },
  { rank: "Master",    focus: "Build a real company",                   do: "Strategy, capital, team, multiple bets inside the same company. The job changes from \"build the thing\" to \"build the team that builds the thing.\"",                                                                                     milestone: "Durable business. Team ships meaningful work when you're on holiday.",                                                 time: "~3-5 years" },
  { rank: "Grandmaster", focus: "Compound, give back, mentor",                do: "Build generational wealth or sustained impact at scale. Back other founders. Help them skip the mistakes you made.",                                                                                                      milestone: "Other founders cite your earlier work as the reason they avoided a specific mistake.",                                         time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Paul Graham, essays",               what: "Decades of writing on startups, technology, and writing itself.",            url: "https://www.paulgraham.com/articles.html",                         weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Y Combinator Startup School (free)",        what: "Lecture series w/ founders + investors. Best free curriculum.",             url: "https://www.startupschool.org/",                              weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "YC Startup Library",                what: "Curated, free, deep, videos + essays from YC.",                     url: "https://www.ycombinator.com/library",                            verify: false, lastVerified: "2026-06" },
   { name: "First Round Review",                what: "Long-form, well-edited essays from operators.",                     url: "https://review.firstround.com/",                              weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Sam Altman, How to Start a Startup (Stanford)",  what: "Free video lecture series from 2014, still excellent.",                 url: "https://www.youtube.com/playlist?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Lenny's Newsletter, free posts",          what: "Product + growth writing; many free articles + podcast.",                url: "https://www.lennysnewsletter.com/",                             verify: false, lastVerified: "2026-06" },
   { name: "Andrew Chen, essay archive",            what: "Growth + marketplaces, deeply tested ideas.",                      url: "https://andrewchen.com/list-of-essays/",                          verify: false, lastVerified: "2026-06" },
   { name: "a16z, content + podcast",             what: "Free essays + podcasts from Andreessen Horowitz.",                    url: "https://a16z.com/content/",                                 verify: false, lastVerified: "2026-06" },
   { name: "Marc Andreessen blog archive",            what: "Archive of his classic blog posts (\"product-market fit\" coined here).",         url: "https://pmarchive.com/",                                  verify: false, lastVerified: "2026-06" },
   { name: "The Mom Test, Rob Fitzpatrick (excerpts)",     what: "Best single read on customer discovery, author site + samples.",            url: "https://www.momtestbook.com/",                               weight: "primary", verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Zero to One, Peter Thiel",             what: "Monopoly thinking + contrarian first-principles.",                   url: "https://en.wikipedia.org/wiki/Zero_to_One",                         price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "The Lean Startup, Eric Ries",            what: "Build-measure-learn formalised.",                            url: "https://theleanstartup.com/",                                price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "The Hard Thing About Hard Things, Ben Horowitz",  what: "What no playbook teaches you about running a company.",                 url: "https://a16z.com/",                                     price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "The Mom Test, Rob Fitzpatrick",           what: "Best single read on customer discovery. Short and ruthless.",              url: "https://www.momtestbook.com/",                               price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Crossing the Chasm, Geoffrey Moore",        what: "Adoption-curve thinking. Still relevant for B2B.",                    url: "https://en.wikipedia.org/wiki/Crossing_the_Chasm",                     price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "High Growth Handbook, Elad Gil",          what: "Scaling-stage operating playbook.",                           url: "https://eladgil.com/high-growth-handbook/",                         price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Hooked, Nir Eyal",                 what: "Habit-forming product design. Read with ethics in mind.",                url: "https://www.nirandfar.com/hooked/",                             price: "verify", weight: "popular", verify: false, lastVerified: "2026-06" },
   { name: "Founders at Work, Jessica Livingston",       what: "Interviews with early-stage founders. Pattern-rich.",                  url: "",                                             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Disciplined Entrepreneurship, Bill Aulet (MIT)",   what: "24-step playbook from MIT's entrepreneurship program.",                  url: "https://disciplinedentrepreneurship.com/",                         price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Working Backwards, Bryar & Carr (Amazon)",     what: "How Amazon turns ideas into products. PR/FAQ method.",                  url: "",                                             price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Pick a problem, not an idea", d: "Write the problem you're solving in one sentence, without naming your solution.", xp: 30 },
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
   { text: "Only talk to people who have already bought from you.", misconception: "You'd never discover anything new, pre-customer convos are the point." }
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
   { text: "It's wrong on the merits.", misconception: "Mostly directionally right, the issue is overweighted." },
   { text: "Survivorship bias, the founders who failed following the same playbook don't write books.", correct: true },
   { text: "It uses too much jargon.", misconception: "Jargon is a style issue, not a validity issue." },
   { text: "It's too old.", misconception: "Recency doesn't fix survivorship." }
  ], why: "Almost all startup books are written by survivors. Treat them as priors, not laws." },
  { q: "When should you pick your distribution channel?", options: [
   { text: "After you have product-market fit.", misconception: "Too late, channel constraints often shape the product itself." },
   { text: "Before you start building.", correct: true },
   { text: "Only once you can afford ads.", misconception: "Channel choice ≠ paid ads; can be SEO, partnerships, community." },
   { text: "Never, word of mouth is everything.", misconception: "Word of mouth without a channel design is hope, not plan." }
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
  { term: "MVP", def: "Minimum Viable Product, the smallest thing that tests a real assumption." },
  { term: "PMF", def: "Product-Market Fit, the market pulls the product." },
  { term: "Customer development", def: "Steve Blank's framework, systematic learning about customers before scaling." },
  { term: "Pivot", def: "Changing direction based on what you learned without abandoning the vision." },
  { term: "Cohort retention", def: "% of a group of users still active over time." },
  { term: "CAC / LTV", def: "Acquisition cost vs lifetime value, unit economics." },
  { term: "Default alive", def: "PG: project the runway, you'll reach profitability before cash runs out." },
  { term: "TAM", def: "Total Addressable Market, the upper-bound size of the opportunity." }
 ]
};

export default d;
