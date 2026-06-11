import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "investing",
  icon: "📈",
  hue: "#22c55e",
  category: "Money & Work",
  name: "Investing & Markets",
  tagline: "Own assets that compound",

  basics: "Investing is owning a piece of something that pays you over time — a business, a bond, real estate. The single most repeatable winning strategy for ordinary people is dull on purpose: buy a broad, low-cost index fund, hold it for decades, ignore the news, automate. Almost everything more exciting is either gambling in disguise or only beats this after the costs of trying really hard.",
  whyItMatters: [
    "Compounding is the only force that turns a salary into freedom.",
    "Most active funds underperform a cheap index after fees.",
    "Knowing the basics defends you from confident-but-selling people.",
    "Risk management decides whether you survive the bad years."
  ],
  realWorldExample: "The S&P 500's worst single year (2008, ~−37%) was followed by a decade where it more than tripled. Investors who panicked and sold locked in losses; investors who kept buying captured the recovery. The hardest part of investing isn't returns — it's behaviour during drawdowns.",

  mentors: [
    { name: "John Bogle", for: "the case for low-cost index funds", work: "founded Vanguard; Common Sense on Mutual Funds" },
    { name: "Warren Buffett", for: "long-horizon ownership thinking", work: "Berkshire Hathaway letters" },
    { name: "Benjamin Graham", for: "value investing + margin of safety", work: "The Intelligent Investor (1949)" },
    { name: "Harry Markowitz", for: "modern portfolio theory + diversification", work: "Portfolio Selection (1952)" },
    { name: "Howard Marks", for: "cycles + risk", work: "The Most Important Thing (2011)" }
  ],

  diagrams: [
    { kind: "curve", title: "Time in market", caption: "Same yearly contribution, different start dates — early starts compound far ahead.", data: {
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

  concepts: [
    { t: "Compounding", short: "Returns on past returns. The longer the runway, the bigger the effect.", deep: "Linear-looking returns produce non-linear wealth. Skipping a decade isn't 10% less wealth — it's often 50–70% less. Start now, even small. The biggest variable is time.", status: "settled", reflect: "Where did procrastination cost you, financially? Not as judgement — as evidence." },
    { t: "Index funds beat picking", short: "After fees, most active funds underperform a broad index over long horizons.", deep: "SPIVA reports across decades and markets keep showing the same: most active managers lose to their benchmark after fees. The right reaction isn't 'pick a better active manager' but 'own the index for the boring part of the portfolio.'", status: "settled", reflect: "Look at your actively managed mutual fund(s) vs the index over 10 years (net of fees). Honest comparison?" },
    { t: "Fee drag", short: "1% in fees compounds the wrong way for you.", deep: "Same return, 0.1% vs 1.5% expense ratio = ~25–30% less pot after 30 years. Fees are one of the few variables you can fully control. Read the expense ratio on every product before considering anything else.", status: "settled", reflect: "What's the total fee load on your largest holding? If you don't know, that's the next 30 minutes' work." },
    { t: "Risk = volatility ≠ permanent loss", short: "Stocks drop ~50% sometimes. Diversification + time turns drops into noise.", deep: "Volatility is the cost of equity returns, not the equivalent of permanent loss. Permanent loss happens when you sell at the bottom (or buy concentrated bets that go to zero). Holding through cycles is most of the game.", status: "settled", reflect: "If equities fell 40% next year, what would you actually do? If 'sell,' your allocation is wrong now." },
    { t: "Diversification", short: "Don't bet everything on one outcome.", deep: "Spreading across uncorrelated assets reduces portfolio volatility without giving up much expected return. Markowitz won a Nobel for the math. The retail version: a mix of broad equities, some bonds, in a low-cost fund of funds.", status: "settled", reflect: "What % of your investable wealth is in one company, sector, or country? If >25%, ask why." },
    { t: "Asset allocation", short: "The mix of stocks/bonds/etc. drives most of your long-term returns.", deep: "Specific stock picks matter much less than your overall stocks-vs-bonds mix. A common heuristic: equity % = 100 (or 110) − age. Tune for your time horizon and ability to stomach drawdowns.", status: "framework", reflect: "What's your equity/bond split? When did you last touch it deliberately, not in panic?" },
    { t: "Dollar-cost averaging (DCA)", short: "Investing the same amount on a schedule, regardless of price.", deep: "Removes timing decisions. Especially powerful behaviorally — you keep buying through downturns. Mathematically, lump-sum often beats DCA on expected return; behaviorally, DCA wins for most people because they actually do it.", status: "debated", reflect: "Are you DCA-ing automatically? If not, when did you last actually invest?" },
    { t: "Behaviour > strategy", short: "The investor's worst enemy is themselves.", deep: "DALBAR / Morningstar studies repeatedly show that average investor returns lag fund returns — because of buy-high-sell-low behaviour. A simple strategy you stick to beats a clever one you bail on. The boring discipline of automation is the alpha most people are missing.", status: "settled", reflect: "Look at your trading history — when did emotion override plan? What did it cost?" }
  ],

  counterView: "Index investing is the dominant retail strategy for good reason, but it's not free of critiques. (1) Passive flows can distort markets; if everyone indexed, price discovery breaks. (2) Single-country index concentration is its own risk (US-heavy investors found this out in the 'Lost Decade' 2000–2010). (3) The 'buy and hold forever' story leans on US equities' unusually good 100-year run — survivorship bias. (4) Bogle himself warned about ETF over-trading. The honest version: a low-cost diversified index core is almost certainly the best starting point — but it isn't an excuse to skip thinking about valuation, region, and your own behaviour.",

  capabilities: [
    "Explain compounding, index funds, and fee drag to a friend.",
    "Compare two funds on expense ratio + benchmark — not last year's return.",
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
    { rank: "Novice", focus: "Get the basics", do: "Read The Simple Path to Wealth + The Psychology of Money. Open a low-cost broker account.", milestone: "You can name index funds, expense ratios, asset allocation.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Automate", do: "Start an automated SIP into a broad-index fund. Even small. The mechanism is the point.", milestone: "Investing happens without your willpower.", time: "~1 month" },
    { rank: "Practitioner", focus: "Allocation + tax", do: "Set asset allocation deliberately. Use tax-advantaged accounts (ELSS / NPS / Roth where applicable).", milestone: "You can defend your allocation in writing.", time: "~3–6 months" },
    { rank: "Specialist", focus: "Survive cycles", do: "Sit through at least one ≥15% drawdown without selling. Rebalance, don't panic.", milestone: "You've been tested and didn't blink.", time: "~1–2 years" },
    { rank: "Expert", focus: "Multi-account / multi-goal", do: "Map specific goals to portfolios with their own horizons. Estate basics.", milestone: "Goal-by-goal planning is concrete and funded.", time: "~3–5 years" },
    { rank: "Master", focus: "Independence path", do: "FIRE-style projections; advanced asset classes only if they fit, not for sport.", milestone: "Work optional is a defined timeline.", time: "~5+ years" },
    { rank: "Grandmaster", focus: "Teach + structure", do: "Help others avoid traps; structure your own giving + estate around values.", milestone: "Time and money aligned with what you care about.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Zerodha Varsity — Markets & Investing modules", what: "Free, India-specific, genuinely good.", url: "", verify: true, lastVerified: "2026-06" },
      { name: "Common Sense on Mutual Funds — John Bogle (library)", what: "The case for low-cost index investing from the source.", url: "", verify: true, lastVerified: "2026-06" },
      { name: "Berkshire Hathaway annual letters", what: "Decades of clear thinking from Buffett. Free.", url: "", verify: true, lastVerified: "2026-06" },
      { name: "Howard Marks — memos (Oaktree)", what: "Cycles + risk thinking. Free, decades of memos.", url: "", verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "The Intelligent Investor — Benjamin Graham", what: "Value investing classic. Margin of safety, Mr Market.", url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "A Random Walk Down Wall Street — Burton Malkiel", what: "The academic case for index investing.", url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Most Important Thing — Howard Marks", what: "Cycles, risk, second-level thinking.", url: "", price: "verify", verify: true, lastVerified: "2026-06" }
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
      { text: "Because the news will be wrong about the future.", misconception: "Maybe, maybe not — that's a bet on prediction." },
      { text: "Because permanent loss happens when you sell at the bottom; volatility through cycles is the cost of equity returns.", correct: true },
      { text: "Because all stocks always recover.", misconception: "Not always — individual stocks can go to zero. The index has historically recovered." },
      { text: "Because crypto won't drop as much.", misconception: "Crypto tends to drop more, not less." }
    ], why: "Volatility ≠ permanent loss unless you turn it into one by selling at the bottom." },
    { q: "What drives most of long-term portfolio returns?", options: [
      { text: "Stock picking.", misconception: "Decades of research: asset allocation explains the majority of variance, not picks." },
      { text: "Asset allocation.", correct: true },
      { text: "Market timing.", misconception: "Most timing attempts miss the largest single-day gains and lag." },
      { text: "Tax optimisation.", misconception: "Helps, but smaller magnitude than allocation." }
    ], why: "Brinson et al. and follow-ups: ~80–90% of long-term return variance comes from allocation." },
    { q: "The fee on Fund A is 0.1%; Fund B is 1.5%. Same return. Over 30 years, Fund B leaves you with…", options: [
      { text: "Slightly less.", misconception: "Compounded fee drag is much larger than feels intuitive." },
      { text: "Roughly 25–30% less.", correct: true },
      { text: "Nothing — you'll lose it all.", misconception: "Too strong; you still have most of it, but a quarter to a third less." },
      { text: "Twice as much (B is better).", misconception: "Higher fee = lower net return, always, all else equal." }
    ], why: "Fee drag compounds against you. Over 30 years, the gap is huge — same return, very different pots." },
    { q: "Behaviorally, what's the single biggest reason average investor returns lag fund returns?", options: [
      { text: "Bad fund selection.", misconception: "Real but smaller. Behaviour gap is the bigger driver." },
      { text: "Buying high, selling low (panic + chase).", correct: true },
      { text: "Taxes.", misconception: "Taxes lower returns but don't explain the gap." },
      { text: "Trading costs.", misconception: "Real but small relative to the behaviour gap." }
    ], why: "DALBAR-style studies repeatedly find investors panic-sell in drawdowns and chase past winners — locking in losses and buying high." }
  ],

  flashcards: [
    { front: "Why does compounding matter so much?", back: "Returns on returns produce non-linear wealth. Time is the most powerful variable — starting earlier dramatically beats investing more later." },
    { front: "Index funds vs active funds?", back: "Net of fees, most active funds underperform a broad index over long horizons." },
    { front: "Fee drag on 30 years?", back: "Same return, 0.1% vs 1.5% fees ≈ 25–30% less final pot. Fees compound against you." },
    { front: "Volatility vs permanent loss?", back: "Volatility is the price of equity returns. Permanent loss usually only happens if you sell at the bottom." },
    { front: "Asset allocation in one line?", back: "Stocks/bonds/cash mix. Drives most of long-term portfolio returns — far more than which specific stocks you pick." },
    { front: "Dollar-cost averaging?", back: "Investing the same amount on a schedule. Removes timing decisions. Behaviorally powerful even when mathematically a hair behind lump-sum." },
    { front: "Diversification (one line)?", back: "Spread across uncorrelated assets to lower portfolio volatility without losing much expected return." },
    { front: "The biggest enemy of investor returns?", back: "Your own behaviour — buying high in euphoria, selling low in panic. Discipline beats cleverness." }
  ],
  glossary: [
    { term: "Index fund", def: "Fund that tracks a market index. Low fee, no stock-picking." },
    { term: "ETF", def: "Exchange-Traded Fund — index-style fund that trades like a stock." },
    { term: "Expense ratio", def: "Annual % a fund deducts. Lower = better, all else equal." },
    { term: "Asset allocation", def: "Mix of asset classes (stocks/bonds/cash/etc.) in your portfolio." },
    { term: "Diversification", def: "Spreading risk across uncorrelated assets." },
    { term: "Drawdown", def: "Peak-to-trough loss before recovery." },
    { term: "DCA", def: "Dollar-Cost Averaging — investing the same amount on a fixed schedule." },
    { term: "Rebalancing", def: "Periodically returning your portfolio to its target allocation." }
  ],

  safetyNote: "Education, not financial advice. Past performance doesn't guarantee future returns. For real money decisions, talk to a SEBI-registered advisor whose incentives don't depend on selling you a product."
};

export default d;
