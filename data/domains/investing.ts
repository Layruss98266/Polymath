import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "investing",
 icon: "📈",
 hue: "#22c55e",
 category: "Money & Work",
 name: "Investing & Markets",
 tagline: "Own assets that compound",

 basics: "Investing is buying a piece of something that pays you over time , a business, a bond, a property. The single boring strategy that actually works for ordinary people, in basically every long enough window: buy a low-cost index fund, hold it for decades, ignore the news, keep adding. That's it. It feels too simple. Almost every more exciting alternative is either gambling in disguise, or beats the boring version only after a level of effort and luck most people never reach. The job isn't to be a genius. The job is to be patient and not interrupt the compounding.",
 whyItMatters: [
  "Compounding is the only known force that turns a regular salary into actual freedom over time.",
  "Most active fund managers , even the famous ones , lose to a cheap index fund over 10-20 years, after their fees.",
  "Knowing the basics is a defence: a confident-and-selling relationship manager can't push you into a bad product if you can read the expense ratio.",
  "Markets fall sometimes. Whether you survive the falls is mostly about behaviour, not returns."
 ],
 realWorldExample: "In 2008 the US stock market fell about 37% in a single year. The financial news called it the end of everything. Many people sold what was left of their portfolios in panic, locking in the loss. Then over the next ten years, the same market more than tripled. The investors who didn't sell , who just kept buying their boring monthly amount through the panic , ended up far ahead. The hardest part of investing isn't picking the right thing. It's sitting still when the news is screaming at you to do something.",

 mentors: [
  { name: "John Bogle", for: "the case for low-cost index funds", work: "founded Vanguard; Common Sense on Mutual Funds" },
  { name: "Warren Buffett", for: "long-horizon ownership thinking", work: "Berkshire Hathaway letters" },
  { name: "Benjamin Graham", for: "value investing + margin of safety", work: "The Intelligent Investor (1949)" },
  { name: "Harry Markowitz", for: "modern portfolio theory + diversification", work: "Portfolio Selection (1952)" },
  { name: "Howard Marks", for: "cycles + risk", work: "The Most Important Thing (2011)" }
 ],

 diagrams: [
  { kind: "curve", title: "Time in market", caption: "Same yearly contribution, different start dates , early starts compound far ahead.", data: {
   x: "Years invested", y: "Portfolio multiple",
   series: [
    { label: "Start age 25", points: [[0, 0], [10, 2], [20, 6], [30, 14], [35, 22]] },
    { label: "Start age 35", points: [[0, 0], [10, 2], [20, 6], [25, 10]] }
   ]
  } },
  { kind: "quadrant", title: "Risk × return (rough)", caption: "Each asset class roughly sits in a quadrant. Higher returns demand more risk.", data: { xAxis: ["Lower risk", "Higher risk"], yAxis: ["Lower return", "Higher return"], items: [
   { label: "Cash", x: 0.1, y: 0.1 },
   { label: "Gov't bonds", x: 0.25, y: 0.25 },
   { label: "Corp bonds", x: 0.45, y: 0.35 },
   { label: "Index equities", x: 0.65, y: 0.7 },
   { label: "Single stocks", x: 0.85, y: 0.75 },
   { label: "Crypto", x: 0.95, y: 0.8 }
  ] } }
 ],

 synthesis: [
  { concept: "Compounding", linksTo: "personal_finance", note: "Investing is the engine; personal finance is the fuel pump." },
  { concept: "Cycles + emotion", linksTo: "psychology", note: "Loss aversion makes most investor mistakes happen at exactly the worst time." }
 ],

 subdomains: [
  { id: "compounding", name: "Compounding and Time" },
  { id: "fund_basics", name: "Funds and Fees" },
  { id: "risk", name: "Risk and Allocation" },
  { id: "behaviour", name: "Behaviour and Cycles" },
 ],

 concepts: [
  { t: "Compounding",               short: "Returns on returns. The first decade looks small. The last decade is where the curve goes vertical.",                                         deep: "Investing ₹5,000 a month at 10% returns produces about ₹12 lakh after 10 years, ₹38 lakh after 20, ₹1 crore after 25, and ₹1.6 crore after 30. The first decade looks almost linear , your money grows mostly because you keep adding it. By the last decade, the money is earning more than you're contributing, and the curve takes off. This is why the single biggest variable in investing is time, not return. A 25-year-old saving small amounts often beats a 40-year-old saving large ones. Procrastination is the most expensive thing in personal finance.",                                                                                                                                                     status: "settled",  reflect: "Where did procrastination cost you financially? Don't dwell on it , start the next thing today." },
  { t: "Index funds beat most pickers",      short: "Over 10+ years, after fees, most clever fund managers lose to the boring index.",                                                     deep: "The Indian regulator publishes a report called SPIVA. The US has the same. The result is depressingly consistent: over a 10 or 20-year window, the majority of actively managed mutual funds , even ones run by smart, well-paid people , fail to beat their benchmark index after their fees are subtracted. The reason isn't that the managers are stupid. The market is hard, fees compound against you, and most edges erode. For most of your equity allocation, the boring answer is the right answer: buy a broad index fund (Nifty 50, Total Market), keep buying it, and ignore the people trying to convince you they have a better idea.",                                                                                                             status: "settled",  reflect: "Pull up your largest actively managed fund. Compare its 10-year return after fees vs the index. Honest answer?" },
  { t: "Fee drag",                 short: "A 1% fee doesn't sound like much. Over 30 years, it eats roughly a quarter of your final pot.",                                              deep: "Two funds, same average return, only difference is the expense ratio. Fund A charges 0.1%, Fund B charges 1.5%. Over 30 years, Fund B leaves you with roughly 25-30% less money. Same effort, same idea, same returns. The fee compounds against you, silently, every year. Fees are one of the few variables you have complete control over. Before evaluating anything else about a fund, read its expense ratio. Anything above 1% needs a strong justification. Most don't have one.",                                                                                                                                                                                         status: "settled",  reflect: "What's the total fee load on your largest holding? If you don't know, that's the next 30 minutes' work." },
  { t: "Volatility isn't permanent loss",     short: "Stocks fall 30%+ sometimes. That doesn't mean you've lost the money , unless you sell.",                                                deep: "Equity markets drop sharply every few years. 2008 was 37% down in a single year. 2020 was 30% in a few weeks. These look terrifying on the way down, and the news always sounds like this is the end. But the same market that fell 37% in 2008 had more than tripled by 2018. Investors who held through it captured the recovery. Investors who panicked and sold turned a temporary fall into a permanent loss. Volatility is the cost of equity returns. You agree to handle the swings; in exchange, the long-run returns beat almost everything else. The day you sell into a panic is the day volatility becomes loss.",                                                                                                                         status: "settled",  reflect: "If equities fell 40% next year, what would you actually do? If the honest answer is 'sell,' your allocation is wrong for you, right now." },
  { t: "Diversification",             short: "Don't bet everything on one outcome , even one you're confident about.",                                                          deep: "Harry Markowitz won a Nobel for the maths, but the idea is intuitive: spreading your money across things that don't all move together reduces how much your portfolio swings, without giving up much expected return. The retail version is dull and effective , a broad equity index across many companies and countries, some debt, maybe a small bit of gold. The opposite , putting most of your money into a single company you work for, a single sector you love, or a single country you live in , is concentration risk. People discover it after the fact, when the bet they were sure about doesn't work out.",                                                                                                                       status: "settled",  reflect: "What percentage of your investable wealth sits in one company, one sector, or one country? If it's over 25%, ask honestly why." },
  { t: "Asset allocation",             short: "How you split between stocks and bonds drives most of your long-term return , far more than which stocks you pick.",                                    deep: "Decades of research keep pointing to the same uncomfortable conclusion: which specific shares or funds you pick matters much less than your overall mix between equities and debt. Brinson and follow-up studies estimate asset allocation explains 80% or more of long-run portfolio return variance. A common rough heuristic: percentage in equities = 100 (or 110) minus your age. Younger means more equity (you have time to ride out the swings), older means more bonds (you can't). The point isn't the exact number; it's having one and revisiting it deliberately, not when you're panicking.",                                                                                                                                 status: "framework", reflect: "What's your equity vs debt split right now? When did you last set it deliberately rather than reactively?" },
  { t: "Dollar-cost averaging (SIPs)",       short: "Invest the same amount every month, automatically, regardless of price.",                                                         deep: "Setting up a monthly SIP into an index fund removes the question of when to buy. You're going to buy this month no matter what the market is doing. Some months you'll buy when prices are high; some when they're low; on average you'll do fine. The maths is interesting , if you happened to have a lump sum upfront, investing it all at once usually beats spreading it out over time, because the market rises more often than it falls. But behaviorally, almost nobody does the lump-sum thing well , they wait for the \"right\" moment, which never comes. SIPs win the way the boring choice wins: they're the strategy you'll actually follow.",                                                                                                         status: "debated",  reflect: "Are you SIPing automatically? If not, when did you last actually invest , and how did you decide to?" },
  { t: "Behaviour beats strategy",         short: "The cleverest strategy you don't follow loses to the boring one you do.",                                                         deep: "Studies that compare actual investor returns to the returns of the funds they invested in keep finding a gap: the typical investor underperforms their own funds by several percent a year. The reason isn't that they pick the wrong funds. It's that they buy when prices are high (everyone's excited), sell when prices are low (everyone's scared), and chase last year's winners. The single biggest edge available to most retail investors isn't picking better , it's automating the boring stuff so emotion can't override it. A monthly SIP that runs on standing instruction will beat almost any clever strategy that depends on you doing the right thing in a market panic.",                                                                                             status: "settled",  reflect: "Look at your real trading history. Where did emotion override your plan? What did that cost?" }
 ],

 counterView: "Index investing is the dominant retail strategy for good reason, but it's not free of critiques. (1) Passive flows can distort markets; if everyone indexed, price discovery breaks. (2) Single-country index concentration is its own risk (US-heavy investors found this out in the 'Lost Decade' 2000-2010). (3) The 'buy and hold forever' story leans on US equities' unusually good 100-year run , survivorship bias. (4) Bogle himself warned about ETF over-trading. The honest version: a low-cost diversified index core is almost certainly the best starting point , but it isn't an excuse to skip thinking about valuation, region, and your own behaviour.",

 capabilities: [
  "Explain compounding, index funds, and fee drag to a friend.",
  "Compare two funds on expense ratio + benchmark , not last year's return.",
  "Set an asset allocation appropriate to your time horizon.",
  "Stick to plan through a ≥20% drawdown without selling.",
  "Spot \"hot tip\" investments and walk away."
 ],
 cheatsheet: [
  "Boring wins. Broad index + low fees + automate + decades.",
  "Fees compound against you.",
  "Asset allocation > stock picking.",
  "Volatility ≠ permanent loss.",
  "Behaviour beats strategy. The plan you actually follow > the optimal plan you don't.",
  "Don't time the market. Time in the market is the variable that matters."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Get the language and open the account",         do: "Read The Simple Path to Wealth (JL Collins) and The Psychology of Money (Housel). Open a low-cost broker account , Zerodha or Groww in India. Don't invest yet. Just get set up.",                                                                         milestone: "You can name index funds, expense ratios, and asset allocation without notes , and your broker account is live.",                         time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Automate the boring thing",                do: "Set up a monthly SIP into one broad-index fund. ₹500 a month is fine , the mechanism is the point. Let it run for a month without touching it.",                                                                                         milestone: "Investing now happens without your willpower being involved. The SIP runs even on bad weeks.",                                    time: "~1 month" },
  { rank: "Practitioner", focus: "Choose your allocation; use tax wrappers",         do: "Decide on an equity vs debt mix you can defend in writing. Use tax-advantaged options (ELSS, NPS) where they fit your situation. Read every expense ratio of every product you hold.",                                                                      milestone: "You can sit a curious friend down and explain your allocation, your fees, and your tax strategy in plain English.",                         time: "~3-6 months" },
  { rank: "Specialist",  focus: "Sit through a drawdown without selling",          do: "Markets fall sharply every few years. Sit through at least one drop of 15% or more without panicking. Rebalance back to your target allocation if you've drifted , don't react.",                                                                         milestone: "You've been tested by a real market fall and you didn't blink.",                                                   time: "~1-2 years" },
  { rank: "Expert",    focus: "Plan goal by goal, write a will",              do: "Match specific goals , house, education, retirement , to their own time horizons and portfolios. Sort estate basics: write a will, set nominees on every account.",                                                                                milestone: "Each major life goal has its own funded plan with a real date and amount.",                                             time: "~3-5 years" },
  { rank: "Master",    focus: "Project the path to 'work optional'",            do: "Run honest FIRE-style numbers , how big does the pot need to be for work to become a choice? Add advanced asset classes only if they truly fit, not because they're fashionable.",                                                                         milestone: "You can name a calendar year when your job becomes optional, with the maths to back it up.",                                     time: "~5+ years" },
  { rank: "Grandmaster", focus: "Help others; structure giving around values",        do: "Teach the people around you to skip the traps you stepped in. Set up giving or community support that reflects what you value. Plan your estate around the same values.",                                                                             milestone: "Your money, your time, and what you actually care about are all pointing the same direction.",                                    time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Zerodha Varsity , Markets & Investing",     what: "Free, India-specific, genuinely good.",               url: "https://zerodha.com/varsity/",                            verify: false, lastVerified: "2026-06" },
   { name: "Berkshire Hathaway , annual letters",      what: "Decades of clear thinking from Buffett. Free.",            url: "https://www.berkshirehathaway.com/letters/letters.html",               verify: false, lastVerified: "2026-06" },
   { name: "Howard Marks , Oaktree memos",          what: "Cycles + risk thinking. Free, decades of memos.",           url: "https://www.oaktreecapital.com/insights/memos",                    verify: false, lastVerified: "2026-06" },
   { name: "Bogleheads Wiki",                what: "Community wiki around John Bogle's philosophy. Deep + practical.",   url: "https://www.bogleheads.org/wiki/Main_Page",                      verify: false, lastVerified: "2026-06" },
   { name: "Investopedia , Investing 101",          what: "Reference-grade glossary + tutorials.",                url: "https://www.investopedia.com/investing-4427685",                    verify: false, lastVerified: "2026-06" },
   { name: "Aswath Damodaran , NYU course (free lectures)", what: "Valuation from the master. Free YouTube + materials.",         url: "https://pages.stern.nyu.edu/~adamodar/",                        verify: false, lastVerified: "2026-06" },
   { name: "Patrick O'Shaughnessy , Invest Like the Best",  what: "Long-form interviews with great investors.",             url: "https://joincolossus.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "SEBI , Investor Awareness",            what: "Indian regulator's own investor education.",             url: "https://investor.sebi.gov.in/",                            verify: false, lastVerified: "2026-06" },
   { name: "Morningstar , Investing Classroom",       what: "Free structured classes; fund + portfolio fundamentals.",       url: "https://www.morningstar.com/start-investing",                     verify: true, lastVerified: "2026-06" },
   { name: "Value Research , articles + tools",       what: "India: mutual fund + tax research.",                 url: "https://www.valueresearchonline.com/",                         verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Intelligent Investor , Benjamin Graham",   what: "Value investing classic. Margin of safety, Mr Market.",        url: "https://en.wikipedia.org/wiki/The_Intelligent_Investor",                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "A Random Walk Down Wall Street , Malkiel",    what: "The academic case for index investing.",               url: "https://en.wikipedia.org/wiki/A_Random_Walk_Down_Wall_Street",             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Most Important Thing , Howard Marks",     what: "Cycles, risk, second-level thinking.",                url: "https://www.oaktreecapital.com/",                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Common Sense on Mutual Funds , John Bogle",    what: "The case for low-cost index investing from the source.",       url: "https://en.wikipedia.org/wiki/Common_Sense_on_Mutual_Funds",              price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "One Up On Wall Street , Peter Lynch",       what: "Bottom-up stock picking, accessibly written.",            url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Little Book of Common Sense Investing , Bogle", what: "Compact version of Bogle's index-investing case.",         url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Mastering the Market Cycle , Howard Marks",    what: "Where you are in the cycle is most of the game.",           url: "https://www.oaktreecapital.com/",                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Coffee Can Investing , Saurabh Mukherjea",    what: "India-specific buy-and-hold-quality framework.",           url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Margin of Safety , Seth Klarman (out of print)", what: "Hard-to-find classic; library access if you can.",          url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Damodaran on Valuation , Aswath Damodaran",    what: "Standard valuation reference.",                    url: "https://pages.stern.nyu.edu/~adamodar/",                        price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Read your expense ratios", d: "Look up the expense ratio on every mutual fund / ETF / ULIP you hold. List anything >1%.", xp: 40 },
  { t: "Set the SIP", d: "Set up an automated SIP into a broad index fund. Even ₹500.", xp: 50 },
  { t: "Pick your allocation", d: "Decide your equity/bond/cash mix in writing. Pin it where you'll see it during the next drawdown.", xp: 40 },
  { t: "Mock a drawdown", d: "Write what you'd do if equities fell 40% tomorrow. Reread it during the next dip.", xp: 30 },
  { t: "Audit \"hot tips\"", d: "List investments people pitched you in the last year. How would each have performed? What's that worth as a lesson?", xp: 30 }
 ],
 capstone: { t: "Investment policy statement", d: "Write a one-page IPS: goals, time horizons, allocation, rebalancing rule, what would change your plan, what would not. Review yearly.", xp: 200 },

 quiz: [
  { q: "What does the evidence say about most active mutual funds vs a low-cost index over 10+ years?", options: [
   { text: "Most active funds beat the index.", misconception: "SPIVA and other studies consistently show the opposite, net of fees." },
   { text: "Most active funds underperform the index after fees.", correct: true },
   { text: "They're roughly equal.", misconception: "Active loses on average, mostly because of fees and trading costs." },
   { text: "Active wins on small-cap, loses on large-cap.", misconception: "Even in small-cap the active edge is shaky and shrinks with fees." }
  ], why: "After fees, the majority of active funds underperform their benchmark over long horizons.", testOut: true },
  { q: "Equities drop 35% next year. Your plan says hold. What's the strongest reason to follow the plan?", options: [
   { text: "Because the news will be wrong about the future.", misconception: "Maybe, maybe not , that's a bet on prediction." },
   { text: "Because permanent loss happens when you sell at the bottom; volatility through cycles is the cost of equity returns.", correct: true },
   { text: "Because all stocks always recover.", misconception: "Not always , individual stocks can go to zero. The index has historically recovered." },
   { text: "Because crypto won't drop as much.", misconception: "Crypto tends to drop more, not less." }
  ], why: "Volatility ≠ permanent loss unless you turn it into one by selling at the bottom." },
  { q: "What drives most of long-term portfolio returns?", options: [
   { text: "Stock picking.", misconception: "Decades of research: asset allocation explains the majority of variance, not picks." },
   { text: "Asset allocation.", correct: true },
   { text: "Market timing.", misconception: "Most timing attempts miss the largest single-day gains and lag." },
   { text: "Tax optimisation.", misconception: "Helps, but smaller magnitude than allocation." }
  ], why: "Brinson et al. and follow-ups: ~80-90% of long-term return variance comes from allocation." },
  { q: "The fee on Fund A is 0.1%; Fund B is 1.5%. Same return. Over 30 years, Fund B leaves you with…", options: [
   { text: "Slightly less.", misconception: "Compounded fee drag is much larger than feels intuitive." },
   { text: "Roughly 25-30% less.", correct: true },
   { text: "Nothing , you'll lose it all.", misconception: "Too strong; you still have most of it, but a quarter to a third less." },
   { text: "Twice as much (B is better).", misconception: "Higher fee = lower net return, always, all else equal." }
  ], why: "Fee drag compounds against you. Over 30 years, the gap is huge , same return, very different pots." },
  { q: "Behaviorally, what's the single biggest reason average investor returns lag fund returns?", options: [
   { text: "Bad fund selection.", misconception: "Real but smaller. Behaviour gap is the bigger driver." },
   { text: "Buying high, selling low (panic + chase).", correct: true },
   { text: "Taxes.", misconception: "Taxes lower returns but don't explain the gap." },
   { text: "Trading costs.", misconception: "Real but small relative to the behaviour gap." }
  ], why: "DALBAR-style studies repeatedly find investors panic-sell in drawdowns and chase past winners , locking in losses and buying high." }
 ],

 flashcards: [
  { front: "Why does compounding matter so much?", back: "Returns on returns produce non-linear wealth. Time is the most powerful variable , starting earlier dramatically beats investing more later." },
  { front: "Index funds vs active funds?", back: "Net of fees, most active funds underperform a broad index over long horizons." },
  { front: "Fee drag on 30 years?", back: "Same return, 0.1% vs 1.5% fees ≈ 25-30% less final pot. Fees compound against you." },
  { front: "Volatility vs permanent loss?", back: "Volatility is the price of equity returns. Permanent loss usually only happens if you sell at the bottom." },
  { front: "Asset allocation in one line?", back: "Stocks/bonds/cash mix. Drives most of long-term portfolio returns , far more than which specific stocks you pick." },
  { front: "Dollar-cost averaging?", back: "Investing the same amount on a schedule. Removes timing decisions. Behaviorally powerful even when mathematically a hair behind lump-sum." },
  { front: "Diversification (one line)?", back: "Spread across uncorrelated assets to lower portfolio volatility without losing much expected return." },
  { front: "The biggest enemy of investor returns?", back: "Your own behaviour , buying high in euphoria, selling low in panic. Discipline beats cleverness." }
 ],
 glossary: [
  { term: "Index fund", def: "Fund that tracks a market index. Low fee, no stock-picking." },
  { term: "ETF", def: "Exchange-Traded Fund , index-style fund that trades like a stock." },
  { term: "Expense ratio", def: "Annual % a fund deducts. Lower = better, all else equal." },
  { term: "Asset allocation", def: "Mix of asset classes (stocks/bonds/cash/etc.) in your portfolio." },
  { term: "Diversification", def: "Spreading risk across uncorrelated assets." },
  { term: "Drawdown", def: "Peak-to-trough loss before recovery." },
  { term: "DCA", def: "Dollar-Cost Averaging , investing the same amount on a fixed schedule." },
  { term: "Rebalancing", def: "Periodically returning your portfolio to its target allocation." }
 ],

 safetyNote: "Education, not financial advice. Past performance doesn't guarantee future returns. For real money decisions, talk to a SEBI-registered advisor whose incentives don't depend on selling you a product."
};

export default d;
