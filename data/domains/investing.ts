import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "investing",
 icon: "📈",
 hue: "#22c55e",
 category: "Money & Work",
 name: "Investing & Markets",
 tagline: "Own assets that compound",

 basics: "Investing is buying a piece of something that pays you over time, a business, a bond, a property. The single boring strategy that actually works for ordinary people, in basically every long enough window: buy a low-cost index fund, hold it for decades, ignore the news, keep adding. That's it. It feels too simple. Almost every more exciting alternative is either gambling in disguise, or beats the boring version only after a level of effort and luck most people never reach. The job isn't to be a genius. The job is to be patient and not interrupt the compounding.",
 whyItMatters: [
  "Compounding is the only known force that turns a regular salary into actual freedom over time.",
  "Most active fund managers, even the famous ones, lose to a cheap index fund over 10-20 years, after their fees.",
  "Knowing the basics is a defence: a confident-and-selling relationship manager can't push you into a bad product if you can read the expense ratio.",
  "Markets fall sometimes. Whether you survive the falls is mostly about behaviour, not returns."
 ],
 realWorldExample: "In 2008 the US stock market fell about 37% in a single year. The financial news called it the end of everything. Many people sold what was left of their portfolios in panic, locking in the loss. Then over the next ten years, the same market more than tripled. The investors who didn't sell, who just kept buying their boring monthly amount through the panic, ended up far ahead. The hardest part of investing isn't picking the right thing. It's sitting still when the news is screaming at you to do something.",

 mentors: [
  { name: "John Bogle", for: "the case for low-cost index funds", work: "founded Vanguard; Common Sense on Mutual Funds" },
  { name: "Warren Buffett", for: "long-horizon ownership thinking", work: "Berkshire Hathaway letters" },
  { name: "Benjamin Graham", for: "value investing + margin of safety", work: "The Intelligent Investor (1949)" },
  { name: "Harry Markowitz", for: "modern portfolio theory + diversification", work: "Portfolio Selection (1952)" },
  { name: "Howard Marks", for: "cycles + risk", work: "The Most Important Thing (2011)" }
 ],

 diagrams: [
  { kind: "curve", title: "Time in market", caption: "Same yearly contribution, different start dates, early starts compound far ahead.", data: {
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
  { t: "Compounding",               short: "Returns on returns. The first decade looks small. The last decade is where the curve goes vertical.",                                         deep: "Investing ₹5,000 a month at 10% returns produces about ₹12 lakh after 10 years, ₹38 lakh after 20, ₹1 crore after 25, and ₹1.6 crore after 30. The first decade looks almost linear, your money grows mostly because you keep adding it. By the last decade, the money is earning more than you're contributing, and the curve takes off. This is why the single biggest variable in investing is time, not return. A 25-year-old saving small amounts often beats a 40-year-old saving large ones. Procrastination is the most expensive thing in personal finance.",                                                                                                                                                     status: "settled",  reflect: "Where did procrastination cost you financially? Don't dwell on it, start the next thing today." },
  { t: "Index funds beat most pickers",      short: "Over 10+ years, after fees, most clever fund managers lose to the boring index.",                                                     deep: "The Indian regulator publishes a report called SPIVA. The US has the same. The result is depressingly consistent: over a 10 or 20-year window, the majority of actively managed mutual funds, even ones run by smart, well-paid people, fail to beat their benchmark index after their fees are subtracted. The reason isn't that the managers are stupid. The market is hard, fees compound against you, and most edges erode. For most of your equity allocation, the boring answer is the right answer: buy a broad index fund (Nifty 50, Total Market), keep buying it, and ignore the people trying to convince you they have a better idea.",                                                                                                             status: "settled",  reflect: "Pull up your largest actively managed fund. Compare its 10-year return after fees vs the index. Honest answer?" },
  { t: "Fee drag",                 short: "A 1% fee doesn't sound like much. Over 30 years, it eats roughly a quarter of your final pot.",                                              deep: "Two funds, same average return, only difference is the expense ratio. Fund A charges 0.1%, Fund B charges 1.5%. Over 30 years, Fund B leaves you with roughly 25-30% less money. Same effort, same idea, same returns. The fee compounds against you, silently, every year. Fees are one of the few variables you have complete control over. Before evaluating anything else about a fund, read its expense ratio. Anything above 1% needs a strong justification. Most don't have one.",                                                                                                                                                                                         status: "settled",  reflect: "What's the total fee load on your largest holding? If you don't know, that's the next 30 minutes' work." },
  { t: "Volatility isn't permanent loss",     short: "Stocks fall 30%+ sometimes. That doesn't mean you've lost the money, unless you sell.",                                                deep: "Equity markets drop sharply every few years. 2008 was 37% down in a single year. 2020 was 30% in a few weeks. These look terrifying on the way down, and the news always sounds like this is the end. But the same market that fell 37% in 2008 had more than tripled by 2018. Investors who held through it captured the recovery. Investors who panicked and sold turned a temporary fall into a permanent loss. Volatility is the cost of equity returns. You agree to handle the swings; in exchange, the long-run returns beat almost everything else. The day you sell into a panic is the day volatility becomes loss.",                                                                                                                         status: "settled",  reflect: "If equities fell 40% next year, what would you actually do? If the honest answer is 'sell,' your allocation is wrong for you, right now." },
  { t: "Diversification",             short: "Don't bet everything on one outcome, even one you're confident about.",                                                          deep: "Harry Markowitz won a Nobel for the maths, but the idea is intuitive: spreading your money across things that don't all move together reduces how much your portfolio swings, without giving up much expected return. The retail version is dull and effective, a broad equity index across many companies and countries, some debt, maybe a small bit of gold. The opposite, putting most of your money into a single company you work for, a single sector you love, or a single country you live in, is concentration risk. People discover it after the fact, when the bet they were sure about doesn't work out.",                                                                                                                       status: "settled",  reflect: "What percentage of your investable wealth sits in one company, one sector, or one country? If it's over 25%, ask honestly why." },
  { t: "Asset allocation",             short: "How you split between stocks and bonds drives most of your long-term return, far more than which stocks you pick.",                                    deep: "Decades of research keep pointing to the same uncomfortable conclusion: which specific shares or funds you pick matters much less than your overall mix between equities and debt. Brinson and follow-up studies estimate asset allocation explains 80% or more of long-run portfolio return variance. A common rough heuristic: percentage in equities = 100 (or 110) minus your age. Younger means more equity (you have time to ride out the swings), older means more bonds (you can't). The point isn't the exact number; it's having one and revisiting it deliberately, not when you're panicking.",                                                                                                                                 status: "framework", reflect: "What's your equity vs debt split right now? When did you last set it deliberately rather than reactively?" },
  { t: "Dollar-cost averaging (SIPs)",       short: "Invest the same amount every month, automatically, regardless of price.",                                                         deep: "Setting up a monthly SIP into an index fund removes the question of when to buy. You're going to buy this month no matter what the market is doing. Some months you'll buy when prices are high; some when they're low; on average you'll do fine. The maths is interesting, if you happened to have a lump sum upfront, investing it all at once usually beats spreading it out over time, because the market rises more often than it falls. But behaviorally, almost nobody does the lump-sum thing well, they wait for the \"right\" moment, which never comes. SIPs win the way the boring choice wins: they're the strategy you'll actually follow.",                                                                                                         status: "debated",  reflect: "Are you SIPing automatically? If not, when did you last actually invest, and how did you decide to?" },
  { t: "Behaviour beats strategy",         short: "The cleverest strategy you don't follow loses to the boring one you do.",                                                         deep: "Studies that compare actual investor returns to the returns of the funds they invested in keep finding a gap: the typical investor underperforms their own funds by several percent a year. The reason isn't that they pick the wrong funds. It's that they buy when prices are high (everyone's excited), sell when prices are low (everyone's scared), and chase last year's winners. The single biggest edge available to most retail investors isn't picking better, it's automating the boring stuff so emotion can't override it. A monthly SIP that runs on standing instruction will beat almost any clever strategy that depends on you doing the right thing in a market panic.",                                                                                             status: "settled",  reflect: "Look at your real trading history. Where did emotion override your plan? What did that cost?" },
  {
   t: "Margin of safety",
   subdomain: "risk",
   definition: "Buying an asset at a price comfortably below your honest estimate of its underlying value, so being wrong still leaves you whole.",
   short: "Pay less than the thing is worth, so being a bit wrong still doesn't ruin you.",
   deep: "Benjamin Graham's central idea, adopted by Buffett and most disciplined value investors. You estimate what a business or asset is genuinely worth, then refuse to pay anything close to that number. The gap between your estimate and the price you pay is the margin of safety. If your valuation is off by 20%, you still don't lose money because you paid 40% below it. Example: if you think a stock is worth ₹1,000 a share, you might only buy below ₹600. The same logic applies to a house, a bond, even a job offer. It is a cushion against being wrong, and you will be wrong sometimes.",
   generic: "Like building a bridge to hold a 30 tonne truck when the heaviest truck you expect is 10 tonnes. The extra capacity is not waste, it is what keeps the bridge standing on the day something unexpected rolls across it.",
   expert: "Graham, The Intelligent Investor, chapter 20. Formalised as price well below intrinsic value, where intrinsic value is estimated via discounted cash flows, asset value, or earnings power. The discount absorbs estimation error, model risk, and adverse selection. Conceptually adjacent to Taleb's barbell and engineering safety factors.",
   status: "framework",
   reflect: "On your largest single holding, what is your honest estimate of fair value, and what discount did you actually demand before buying?",
   conceptQuiz: [
    {
     q: "What does margin of safety primarily protect against?",
     options: [
      { text: "Being wrong about the asset's true value.", correct: true },
      { text: "Short term price volatility.", misconception: "Volatility happens regardless of price paid; margin of safety addresses estimation error, not noise." },
      { text: "Currency fluctuations.", misconception: "Currency risk is a separate concern handled by hedging or diversification." },
      { text: "Tax changes.", misconception: "Tax policy risk is unrelated to the gap between price and intrinsic value." }
     ],
     why: "The cushion exists because your valuation might be wrong; paying well below it absorbs the error."
    },
    {
     q: "You estimate a stock is worth ₹500. Which purchase price reflects the strongest margin of safety?",
     options: [
      { text: "₹300.", correct: true },
      { text: "₹490.", misconception: "Almost no cushion; one bad quarter erases it." },
      { text: "₹520.", misconception: "Above your estimate; this is the opposite of a margin of safety." },
      { text: "₹450.", misconception: "Only a 10% cushion, fine for low uncertainty but thin for most real businesses." }
     ],
     why: "₹300 is 40% below your estimate, giving meaningful room for valuation error."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write your valuation", d: "Pick one stock you own and write down what you think it is worth per share, in one paragraph.", xp: 10 },
    { level: "easy", t: "Check the discount", d: "Compare your written valuation to the current market price and note the percentage gap.", xp: 20 },
    { level: "advanced", t: "Set a buy rule", d: "Define a written rule for the minimum discount to intrinsic value you require before adding to any position, and pin it next to your portfolio.", xp: 40 }
   ],
   diagram: { kind: "bars", title: "Margin of safety", caption: "Bigger gap between price and value = more room to be wrong.", data: { items: [{ label: "Intrinsic value (estimate)", value: 500 }, { label: "Target buy price (40% MoS)", value: 300 }, { label: "Market price today", value: 420 }], unit: "₹/share" } }
  },
  {
   t: "Rebalancing",
   subdomain: "risk",
   definition: "Periodically selling assets that have grown above your target weights and buying those that have fallen below, to return the portfolio to its planned allocation.",
   short: "Trim what won, top up what lagged, so your risk stays where you set it.",
   deep: "You set an allocation, say 70% equities and 30% debt. A year later equities have run hard and now make up 80% of your portfolio. Without doing anything, you have quietly become a more aggressive investor than you signed up for. Rebalancing means selling some equity and buying debt to get back to 70/30. It feels wrong, you are selling the thing that just did well, but that is the point. It enforces buy low, sell high mechanically, without needing a forecast. Most retail investors should rebalance once a year, or when an allocation drifts more than 5 percentage points from target.",
   generic: "Like trimming a hedge that grew unevenly. You cut back the side that shot up so the whole hedge keeps the shape you wanted, instead of letting one branch take over the garden.",
   expert: "Calendar based or threshold based rebalancing. Studies (Vanguard, others) show modest return improvements and meaningful risk control over multi decade horizons. Threshold rules (rebalance when drift exceeds a band) often dominate fixed calendar rules on a tax adjusted basis. Tax loss harvesting and new contributions can be used to rebalance without realising gains.",
   status: "framework",
   reflect: "When did you last check whether your actual allocation still matches your target? If it has drifted, are you comfortable with the new risk level?",
   conceptQuiz: [
    {
     q: "Why does rebalancing feel emotionally hard?",
     options: [
      { text: "You sell what is winning and buy what is lagging.", correct: true },
      { text: "It usually loses money.", misconception: "Long run evidence shows it controls risk and often improves risk adjusted returns." },
      { text: "It requires market timing skill.", misconception: "Rebalancing is mechanical and rule based, not predictive." },
      { text: "It triggers margin calls.", misconception: "Rebalancing is not leveraged and has nothing to do with margin." }
     ],
     why: "Selling winners to fund laggards goes against momentum instincts, which is exactly why a rule helps."
    },
    {
     q: "Your target is 60/40 equity/debt. After a year equity has grown to 72% of the portfolio. The disciplined response is to…",
     options: [
      { text: "Sell some equity and buy debt to return to 60/40.", correct: true },
      { text: "Leave it; the trend is your friend.", misconception: "Letting drift run silently raises your risk above what you chose." },
      { text: "Sell everything and wait for a crash.", misconception: "That is market timing, not rebalancing." },
      { text: "Add more equity to ride the winner.", misconception: "This compounds the drift away from your planned risk level." }
     ],
     why: "Rebalancing restores the risk profile you originally chose, regardless of which side ran hot."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Check current drift", d: "Calculate your current equity vs debt percentages and compare them to your target allocation.", xp: 10 },
    { level: "easy", t: "Set a rule", d: "Write a one sentence rule for when you will rebalance, either an annual date or a drift threshold.", xp: 20 },
    { level: "advanced", t: "Execute a rebalance", d: "If you have drifted more than 5 percentage points from target, place the trades to return to plan and document the rationale.", xp: 40 }
   ],
   diagram: { kind: "cycle", title: "Rebalancing loop", caption: "A mechanical cycle that pulls allocation back to target.", data: { stages: ["Set target allocation", "Let market move weights", "Measure drift", "Sell winners, buy laggards", "Back to target"] } }
  },
  {
   t: "Risk premium",
   subdomain: "risk",
   definition: "The extra return investors demand above a safe rate to hold a riskier asset.",
   short: "The bonus return you earn for taking on uncertainty instead of parking cash in a safe rate.",
   deep: "If a government treasury pays 7% and equities historically deliver around 12% in India over long horizons, that 5 percentage point gap is the equity risk premium. It is not a gift; it is compensation for sitting through drawdowns, business failures, and years where the safe asset wins. Premiums exist across asset classes: corporate bonds over government bonds (credit risk premium), small caps over large caps (size premium), illiquid private assets over public ones. The premium is real on average across decades, but never guaranteed in any given year. Investors who forget this either chase yield in the calm and panic in the storm, or refuse all risk and quietly lose to inflation.",
   generic: "Like the extra pay a worker demands for a job with night shifts and rough weather. You would not accept the same wage as a desk job; the premium is what makes the harder job worth doing.",
   expert: "Equity risk premium (ERP) is the expected return of equities minus the risk free rate. Estimated historically (Dimson, Marsh, Staunton triumph of the optimists data) or implied from current valuations (Damodaran updates monthly). Long run global ERP estimates cluster around 3 to 5%. Premia also appear across factors: value, size, momentum, quality, low volatility (Fama and French).",
   status: "framework",
   reflect: "What return do you implicitly expect from your equity allocation, and what risk free rate are you comparing it to?",
   conceptQuiz: [
    {
     q: "Why does the equity risk premium exist?",
     options: [
      { text: "It compensates investors for bearing volatility and the chance of permanent loss.", correct: true },
      { text: "It is a regulated bonus paid by governments.", misconception: "No regulator sets equity returns; the premium emerges from market pricing." },
      { text: "Because equities never lose money over 5 years.", misconception: "Equities can and do lose money over multi year windows; the premium reflects exactly that risk." },
      { text: "It is the same as the dividend yield.", misconception: "Dividend yield is one component of return, not the risk premium." }
     ],
     why: "Investors demand extra expected return to accept the swings and drawdowns equities deliver."
    },
    {
     q: "If the Indian 10 year government bond yields 7% and you expect equities to return 11% long run, what is the implied equity risk premium?",
     options: [
      { text: "About 4 percentage points.", correct: true },
      { text: "About 11 percentage points.", misconception: "That is the total expected return, not the premium over the safe rate." },
      { text: "0, because both are positive.", misconception: "Premium is the difference, not whether returns are positive." },
      { text: "About 18 percentage points.", misconception: "You add the rates, but premium is the gap between them." }
     ],
     why: "Risk premium is expected equity return minus the risk free rate, 11 minus 7 equals 4."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Find the safe rate", d: "Look up the current 10 year Indian government bond yield and write it down.", xp: 10 },
    { level: "easy", t: "Estimate your premium", d: "Subtract that safe rate from your honest long run expected equity return to get your implied risk premium.", xp: 20 },
    { level: "advanced", t: "Stress test the premium", d: "Recompute your retirement plan assuming the equity risk premium is 2 percentage points lower than you expect, and note what changes.", xp: 40 }
   ]
  },
  {
   t: "Mean reversion",
   subdomain: "behaviour",
   definition: "The tendency for extreme returns, valuations, or performance to drift back toward long term averages over time.",
   short: "Hot streaks cool, ice cold runs warm. Extreme numbers usually drift back to average.",
   deep: "Mean reversion is the quiet force behind why last year's star fund is often next year's laggard, and why a sector that crashed 60% often outperforms over the following decade. It does not mean every overpriced asset crashes on schedule or every cheap one rallies tomorrow; markets can stay extreme far longer than feels reasonable. But across long horizons, valuations, profit margins, and relative returns tend to revert. The practical implication is humility about extrapolation. Buying the fund with the best 3 year record is often buying near a peak. Selling an asset class after a bad decade often locks in the bottom. Rebalancing is mean reversion turned into a rule.",
   generic: "Like a stretched rubber band. The further it has been pulled in one direction, the harder it pulls back toward its resting shape. You do not know when it snaps back, only that the stretch is not permanent.",
   expert: "Empirically observed in valuation ratios (Shiller CAPE), profit margins (Hussman, Grantham), and relative country and factor performance. Bouchaud and others model it as an Ornstein Uhlenbeck process around a slow moving mean. Crucially, mean reversion is not a timing tool; the half life of valuation reversion in equities is often measured in 5 to 15 years.",
   status: "debated",
   reflect: "What recent winner are you tempted to chase? What recent loser are you tempted to abandon? How does mean reversion change that view?",
   conceptQuiz: [
    {
     q: "Which of these is the cleanest example of mean reversion in investing?",
     options: [
      { text: "A fund with the top 3 year record often underperforms over the next 3 years.", correct: true },
      { text: "Stocks always rise over any 1 year period.", misconception: "Stocks do not always rise short term; this is not about reversion." },
      { text: "Crypto doubles every cycle.", misconception: "Trend extrapolation, the opposite of mean reversion." },
      { text: "Bond yields stay constant.", misconception: "Yields move; constancy is not mean reversion." }
     ],
     why: "Performance chasing fails partly because extreme runs revert toward the average."
    },
    {
     q: "What is the biggest danger of trusting mean reversion?",
     options: [
      { text: "Assuming it happens on your timetable.", correct: true },
      { text: "It only applies to bonds.", misconception: "It shows up across asset classes." },
      { text: "It is illegal to act on it.", misconception: "There is no regulation against it; it is a statistical pattern." },
      { text: "It guarantees profits.", misconception: "It implies tendency, not certainty or timing." }
     ],
     why: "Markets can stay overvalued or undervalued far longer than a reversion bet can survive."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Spot the streak", d: "Pick one fund or sector with a great last 3 years and write down its 10 year average return alongside.", xp: 10 },
    { level: "easy", t: "Apply the lens", d: "Compare current Nifty 50 valuation (PE or CAPE) to its 20 year average and note whether you are above, at, or below the mean.", xp: 20 },
    { level: "advanced", t: "Reversion rebalance rule", d: "Write a one page rule for how you will tilt new contributions toward whichever of your allocations has drifted furthest below target, and run it for a quarter.", xp: 40 }
   ]
  },
  {
   t: "Sharpe and Sortino ratios",
   subdomain: "risk",
   definition: "Metrics of risk adjusted return. Sharpe divides excess return by total volatility; Sortino divides only by downside volatility.",
   short: "Two ways of asking, am I being paid enough for the bumps I am sitting through?",
   deep: "Two funds both return 12 percent a year. Fund A swings wildly between +40 and minus 20 each year. Fund B is a smooth ride. Same return, very different ride. Sharpe ratio captures that by dividing the return above the risk free rate by the standard deviation of returns. Higher Sharpe means more return per unit of bumpiness. Sortino refines it by only counting the downside swings, because most investors do not actually mind upside surprises. An Indian large cap fund returning 14 percent with a Sharpe of 0.8 is usually a better risk adjusted bet than a small cap returning 18 percent with a Sharpe of 0.4. Look at the ratio, not just the headline return.",
   generic: "Like rating a taxi by how fast it gets you there divided by how scary the driving was. Two cabs reach the same place at the same time, but the calm one is the better service even though the meter reads identical.",
   expert: "Sharpe (1966) ratio = (Rp minus Rf) divided by sigma_p. Sortino (1994) replaces sigma with downside deviation against a minimum acceptable return. Both are point estimates with significant noise on short samples; rolling 3 to 5 year windows are more honest. Limitations: assume return distributions are roughly stable, miss tail risk, sensitive to the chosen risk free rate. For Indian funds, use the 91 day T bill as Rf. Morningstar and Value Research publish both for most mutual funds.",
   status: "framework",
   reflect: "What is the Sharpe ratio of your largest equity fund? If you do not know, do you know how bumpy the ride has actually been?",
   conceptQuiz: [
    {
     q: "What does the Sortino ratio capture that Sharpe does not?",
     options: [
      { text: "It penalises only downside volatility, not upside swings.", correct: true },
      { text: "It adjusts for currency risk.", misconception: "Neither ratio addresses currency exposure directly." },
      { text: "It removes the risk free rate from the calculation.", misconception: "Sortino still subtracts a minimum acceptable return, often the risk free rate." },
      { text: "It guarantees a higher return.", misconception: "It is a measurement tool, not a return forecast." }
     ],
     why: "Investors care about losses more than equal sized gains; Sortino reflects that asymmetry."
    },
    {
     q: "Fund X has Sharpe 1.2, Fund Y has Sharpe 0.4, both same category. The cleanest reading is...",
     options: [
      { text: "Fund X delivered more return per unit of total volatility.", correct: true },
      { text: "Fund X will outperform next year.", misconception: "Past Sharpe is not a forecast of future returns." },
      { text: "Fund Y is safer.", misconception: "Lower Sharpe usually means worse risk adjusted return, not lower risk." },
      { text: "Fund X has lower fees.", misconception: "Sharpe says nothing about fees directly." }
     ],
     why: "Higher Sharpe means a smoother path for the same return, or more return for the same bumpiness."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Look up the numbers", d: "Find the Sharpe and Sortino ratios for your largest equity fund on Value Research or Morningstar.", xp: 10 },
    { level: "easy", t: "Compare three funds", d: "Pick three funds in the same category and rank them by Sharpe ratio over a 5 year window.", xp: 20 },
    { level: "advanced", t: "Risk adjusted rebuild", d: "Replace one holding whose Sharpe is in the bottom quartile of its category with one in the top quartile, and document the reasoning.", xp: 40 }
   ]
  },
  {
   t: "Sequence of returns risk",
   subdomain: "risk",
   fullForm: "Sequence of Returns Risk (SRR)",
   definition: "The risk that the order of investment returns in early retirement deplete capital faster than the same returns in a different order would have.",
   short: "Bad years early in retirement hurt far more than the same bad years later.",
   deep: "Two retirees draw 4 percent a year from the same starting corpus and experience the same average return over 30 years. One gets the bad years up front, the other at the end. The one who hits the storm early often runs out of money a decade before the other, even though the average return is identical. The reason is brutal: when you sell during a drawdown to fund withdrawals, you lock in losses and the surviving capital has less to recover with. Bengen's original 1994 study established the 4 percent rule and surfaced exactly this asymmetry. For an Indian retiree drawing from a corpus across NPS, equity funds, and FDs, a 2008 style crash in year two can be terminal in a way that the same crash in year 25 is not. The fix is structural: hold 2 to 3 years of expenses in cash or short debt so equities are never forced sellers in a bad year.",
   generic: "Like climbing down a ladder while someone shakes it. The same shakes near the bottom barely matter, you are almost down. The same shakes at the top can throw you off entirely. Order matters, not just the total amount of shaking.",
   expert: "Bengen (1994) Determining Withdrawal Rates Using Historical Data, Journal of Financial Planning. Foundational for the 4 percent safe withdrawal rate. SRR magnitude is highest in the first 5 to 10 years of decumulation when the corpus is largest and withdrawals compound losses. Mitigations: bond tent (rising equity glide path in retirement, per Pfau and Kitces), cash buffer of 2 to 3 years of expenses, dynamic withdrawal rules (Guyton Klinger guardrails), variable spending. India specific: NPS Tier 1 annuitisation forces 40 percent into annuities at 60, which partially hedges SRR but at the cost of growth.",
   status: "framework",
   reflect: "If equities fell 35 percent in your first year of retirement, how would you fund the next two years of spending without selling equity at the bottom?",
   conceptQuiz: [
    {
     q: "Two retirees have the same average return over 30 years. Why might one run out of money and the other not?",
     options: [
      { text: "The order of returns matters when you are withdrawing from the corpus.", correct: true },
      { text: "Averages are the only thing that matters.", misconception: "Averages hide the path; withdrawal portfolios are path dependent." },
      { text: "One must have had lower fees.", misconception: "The scenario fixes returns, so fees are not the driver." },
      { text: "Annuity rules forced one to convert.", misconception: "Plausible in some structures but not the core mechanism of SRR." }
     ],
     why: "Selling into early drawdowns locks in losses; the surviving capital has less to compound back."
    },
    {
     q: "Which mitigation most directly reduces sequence of returns risk?",
     options: [
      { text: "Holding 2 to 3 years of expenses in cash or short debt.", correct: true },
      { text: "Going 100 percent equity in retirement.", misconception: "Amplifies SRR exactly when it bites hardest." },
      { text: "Picking only dividend stocks.", misconception: "Dividend cuts in drawdowns can still force sales or shortfalls." },
      { text: "Trading more frequently.", misconception: "Higher turnover does not reduce path dependence." }
     ],
     why: "A cash buffer lets equities recover without being sold at the bottom."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Map your first 3 retirement years", d: "Estimate your annual essential expenses at retirement and write down where the money for years 1 to 3 comes from.", xp: 10 },
    { level: "easy", t: "Simulate a bad start", d: "Run a simple spreadsheet where your portfolio falls 30 percent in year 1 and recovers later; see how long the corpus lasts at 4 percent withdrawals.", xp: 20 },
    { level: "advanced", t: "Build a bond tent", d: "Draft a glide path that increases debt allocation from 30 to 50 percent in the 5 years before retirement and back down after, and document the rationale.", xp: 40 }
   ]
  },
  {
   t: "Factor investing (smart beta)",
   subdomain: "fund_basics",
   definition: "Tilting an index portfolio toward systematic return drivers like Value, Momentum, Quality, Size, or Low Volatility, rather than simple market cap weighting.",
   short: "Index investing with a small, rules based bet that certain attributes have historically paid more.",
   deep: "A plain Nifty 50 fund weights companies by market cap. A factor fund instead weights by, say, value (low PE, low PB) or quality (high return on equity, low debt) or momentum (recent winners). Fama and French in 1993 showed that value and size explained a chunk of long run returns that market beta alone could not. Indian fund houses now offer Nifty 200 Momentum 30, Nifty 100 Low Volatility 30, and Nifty Quality 30 ETFs at expense ratios close to plain index funds. The catch: factors have long, painful droughts. Value underperformed growth for over a decade in the 2010s globally. Factor investing rewards patience, not cleverness. If you cannot hold through a 5 year underperformance window, stick to a plain market cap index.",
   generic: "Like ordering a salad with a specific dressing instead of the house default. The base is still a salad, and on average one dressing might suit you better, but if you cannot tolerate it on the bad days, just take the house version and eat in peace.",
   expert: "Fama and French (1993) The Cross Section of Expected Stock Returns. Core factors: Market, Size (SMB), Value (HML), later Profitability (RMW), Investment (CMA), Momentum (UMD per Carhart 1997). Smart beta ETFs implement these as rules based, transparent products with expense ratios typically 0.2 to 0.5 percent. India: Nifty 200 Momentum 30, Nifty Alpha Low Vol 30, Nifty Quality 30 available as ETFs. Risks: factor crowding, regime dependence, multi year underperformance. Asness and others document that factor premia persist net of trading costs but are noisy on sub decade horizons.",
   status: "debated",
   reflect: "Have you ever held an underperforming holding for 5 plus years on the conviction that the strategy was still right? Honestly, would you?",
   conceptQuiz: [
    {
     q: "What is the central claim of factor investing?",
     options: [
      { text: "Certain systematic attributes have historically delivered returns above plain market cap weighting.", correct: true },
      { text: "Active stock pickers always beat index funds.", misconception: "Factor investing is rules based, not stock picking, and the evidence is mostly the opposite." },
      { text: "Factors guarantee outperformance in every year.", misconception: "Factors have long underperformance windows; that is the whole risk." },
      { text: "It only works for hedge funds.", misconception: "Smart beta ETFs make it accessible to retail at low cost." }
     ],
     why: "Factors like value, momentum, and quality have shown historical premia across markets and decades."
    },
    {
     q: "The hardest part of holding a factor strategy is...",
     options: [
      { text: "Sitting through multi year stretches where the factor lags the plain index.", correct: true },
      { text: "Paying high expense ratios.", misconception: "Smart beta ETFs are typically cheap." },
      { text: "Filling out tax forms.", misconception: "Tax treatment is the same as other equity ETFs in India." },
      { text: "Finding the funds.", misconception: "Several Indian AMCs now offer factor ETFs." }
     ],
     why: "Value underperformed growth for over a decade; behaviour, not access, is the binding constraint."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Identify one factor ETF", d: "Find one Indian smart beta ETF (Momentum, Quality, Low Volatility) and note its expense ratio and 5 year return vs Nifty 50.", xp: 10 },
    { level: "easy", t: "Pick one tilt", d: "Decide whether you would tilt 10 to 20 percent of your equity allocation toward one factor, and write down why.", xp: 20 },
    { level: "advanced", t: "Hold through drought test", d: "Look up the worst 3 year stretch for your chosen factor globally and write what you would do if your tilt underperformed by 15 percent over 3 years.", xp: 40 }
   ]
  },
  {
   t: "Modern portfolio theory",
   subdomain: "risk",
   definition: "A framework that builds portfolios by combining assets to maximise expected return for a given level of risk, where risk is measured as the variance of returns.",
   short: "Mix uncorrelated assets so the portfolio swings less than its parts, for the same expected return.",
   deep: "Harry Markowitz showed in 1952 that the right unit of analysis is not a single asset but the whole portfolio. Two assets with the same expected return but low correlation will, when combined, deliver smoother returns than either alone. The efficient frontier is the curve of portfolios that give the highest expected return at each level of risk. Example: an Indian investor mixing Nifty 50 with 10 year G-Secs gets a smoother ride than 100 percent equities, often with only modestly lower expected return. The critique, formalised by Mandelbrot and later Taleb, is that real returns are fat tailed, correlations spike to one in a crash, and variance badly understates true risk.",
   generic: "Like cooking with several spices instead of one. Each spice has its own intensity, but the mix tastes balanced because no single flavour dominates, even when one is unusually strong that day.",
   expert: "Markowitz (1952), Portfolio Selection, Journal of Finance. Mean variance optimisation requires expected returns, variances, and a covariance matrix as inputs, all of which are unstable. Black Litterman (1990) handles input sensitivity. Mandelbrot showed return distributions are leptokurtic, breaking the Gaussian assumption. In India, post 2020 evidence shows equity bond correlations rose during the COVID drawdown, weakening the diversification benefit exactly when investors needed it most.",
   status: "framework",
   reflect: "Do you actually know the correlation between your largest holdings, or are you assuming diversification you do not have?",
   conceptQuiz: [
    {
     q: "What is the key insight of modern portfolio theory?",
     options: [
      { text: "Combining uncorrelated assets reduces portfolio risk without proportionally cutting return.", correct: true },
      { text: "The highest return asset should dominate the portfolio.", misconception: "Concentration raises portfolio variance even if the asset has high expected return." },
      { text: "Bonds always beat stocks long term.", misconception: "Historically equities have higher long run returns; MPT is about mixing them." },
      { text: "Markets are random so allocation does not matter.", misconception: "MPT explicitly says allocation drives most risk and return." }
     ],
     why: "The diversification benefit comes from correlation below one, not from picking the best asset."
    },
    {
     q: "What is the strongest critique of mean variance optimisation?",
     options: [
      { text: "Real return distributions have fat tails and correlations spike in crises.", correct: true },
      { text: "It is too complex to compute today.", misconception: "Solvers handle it in milliseconds; complexity is not the binding issue." },
      { text: "It requires daily data.", misconception: "It works with monthly or annual data; sampling frequency is not the core problem." },
      { text: "It assumes only one asset class.", misconception: "MPT is built for multi asset portfolios by construction." }
     ],
     why: "Mandelbrot and Taleb showed Gaussian variance understates tail risk, and crisis correlations destroy the diversification math."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Note your asset mix", d: "Write down your current equity, debt, and gold percentages.", xp: 10 },
    { level: "easy", t: "Estimate correlations", d: "Look up the rolling 5 year correlation between Nifty 50 and a 10 year G-Sec index and note the number.", xp: 20 },
    { level: "advanced", t: "Stress test the assumption", d: "Look up what your asset mix did in March 2020 and write whether diversification held or broke when you needed it most.", xp: 40 }
   ]
  },
  {
   t: "Efficient market hypothesis",
   subdomain: "behaviour",
   definition: "The idea that asset prices reflect all available information, so consistently beating the market through analysis or timing is extremely difficult.",
   short: "Prices already bake in what is known, so finding a free lunch is rare and shrinking.",
   deep: "Eugene Fama set out three forms. Weak form: past prices are already in the current price, so chart patterns alone do not predict returns. Semi strong: all public information is reflected, so reading the same annual report as everyone else gives no edge. Strong: even private information is priced in, which most evidence rejects. The practical takeaway for Indian retail investors is humbling: SPIVA India shows over 80 percent of large cap active funds lag the Nifty 100 over 10 years, consistent with semi strong efficiency in liquid large caps. Markets can be inefficient in small caps, frontier markets, and short term sentiment driven moves, but exploiting this consistently requires edge most investors do not have.",
   generic: "Like a busy second hand market where any obvious bargain gets snapped up in minutes. The longer the market has existed, the harder it gets to find a real mispricing without specialised knowledge.",
   expert: "Fama (1970), Efficient Capital Markets, Journal of Finance. Three forms tested by event studies, momentum and reversal anomalies (De Bondt Thaler, Jegadeesh Titman), and post earnings drift challenge strict efficiency. Grossman Stiglitz paradox: if markets were fully efficient, no one would have incentive to gather information, so some inefficiency must persist to pay for the information work. Indian small caps and SME segment show weaker efficiency than large caps, consistent with global patterns.",
   status: "debated",
   reflect: "Do you have a specific edge, information, analytical, or behavioural, that justifies picking individual stocks instead of indexing?",
   conceptQuiz: [
    {
     q: "Which form of EMH does evidence support most strongly?",
     options: [
      { text: "Weak and semi strong forms in large, liquid markets.", correct: true },
      { text: "Strong form in all markets.", misconception: "Evidence on insider trading profits rejects strong form efficiency." },
      { text: "Only weak form is supported.", misconception: "Semi strong holds reasonably well in large cap liquid markets per SPIVA data." },
      { text: "None of the forms are supported.", misconception: "Most academic evidence supports weak and semi strong in mature markets." }
     ],
     why: "Weak and semi strong forms broadly hold in liquid large cap segments; strong form does not."
    },
    {
     q: "What does the Grossman Stiglitz paradox imply?",
     options: [
      { text: "Some inefficiency must persist to reward those who gather information.", correct: true },
      { text: "All markets are perfectly efficient.", misconception: "The paradox argues against perfect efficiency, not for it." },
      { text: "Indexing is impossible.", misconception: "Indexing thrives precisely because most markets are mostly efficient." },
      { text: "Insider trading is legal.", misconception: "The paradox is about information economics, not legality." }
     ],
     why: "If prices reflected everything, no one would research, so a small inefficiency must remain to fund research."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Read SPIVA India", d: "Look up the latest SPIVA India scorecard and write down the percentage of large cap active funds that beat the benchmark over 10 years.", xp: 10 },
    { level: "easy", t: "Name your edge", d: "Write one sentence describing what edge you have over the market if you pick individual stocks. If you cannot, default to index.", xp: 20 },
    { level: "advanced", t: "Anomaly test", d: "Pick one alleged market anomaly (momentum, value, post earnings drift) and look up whether it has persisted in Indian equity data over the last decade.", xp: 40 }
   ]
  },
  {
   t: "Value vs growth investing",
   subdomain: "fund_basics",
   definition: "Two competing equity styles: value buys companies cheap relative to fundamentals, growth buys companies with high expected earnings expansion regardless of current valuation.",
   short: "Value pays less for the dollar of earnings today; growth pays more, betting on much bigger earnings tomorrow.",
   deep: "Value investors hunt for low price to book, low price to earnings, or high dividend yield names, the idea being that the market has overlooked something solid. Growth investors pay premium multiples for companies they expect to compound revenue and earnings at 20 percent plus. In the Indian context, HDFC Bank historically traded at growth multiples while PSU banks like SBI traded as value. The honest answer is both styles work over very long horizons but go through brutal multi year droughts. Value lagged growth for over a decade globally from 2010 to 2020. Fama and French documented a long run value premium, but it has been erratic and possibly arbitraged down by ETFs.",
   generic: "Like buying a used Maruti at half price versus paying full sticker for a new Tesla. The Maruti has known flaws but is cheap; the Tesla bets on a future that may or may not arrive.",
   expert: "Fama French (1992), three factor model, with HML (value minus growth) as the value premium. Value premium estimated at 3 to 5 percent annualised long run, but post 2007 the premium collapsed. Asness et al argue value is still real but cyclical. In India, Nifty 500 Value 50 vs Nifty 500 Growth indices show the value index underperformed for the post 2014 decade then rotated sharply in 2022. Investing style drift inside Indian active funds is a hidden risk that distorts portfolio exposure.",
   status: "debated",
   reflect: "Look at your largest equity holding. Is it value, growth, or blend, and do you actually know why you own that style?",
   conceptQuiz: [
    {
     q: "What primarily distinguishes value from growth investing?",
     options: [
      { text: "The valuation multiple paid relative to fundamentals like earnings or book value.", correct: true },
      { text: "Whether the stock is in India or abroad.", misconception: "Geography is unrelated to value or growth classification." },
      { text: "Whether the company pays dividends or not.", misconception: "Many value names pay dividends but not all; growth names sometimes do too." },
      { text: "Whether the company is large or small cap.", misconception: "Both styles exist across all market caps." }
     ],
     why: "Value pays a low multiple of fundamentals; growth pays a high multiple, betting on rapid expansion."
    },
    {
     q: "The strongest argument for owning value despite recent underperformance is...",
     options: [
      { text: "Long run academic evidence shows a value premium, though it is cyclical.", correct: true },
      { text: "Value funds always beat growth funds.", misconception: "Growth crushed value through the 2010s; the premium is not constant." },
      { text: "Value stocks never lose money.", misconception: "Value stocks can absolutely lose money in drawdowns." },
      { text: "Growth investing is illegal in India.", misconception: "Growth is a legitimate and widely used investing style in India." }
     ],
     why: "Fama French documented a long run value premium, but acknowledge it is cyclical with long droughts."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Classify your funds", d: "For each equity fund you own, find the prospectus stated style: value, growth, or blend.", xp: 10 },
    { level: "easy", t: "Compare two ETFs", d: "Look up the 10 year returns of Nifty 500 Value 50 vs a growth index ETF and write down the gap.", xp: 20 },
    { level: "advanced", t: "Style audit", d: "Calculate the weighted average price to earnings of your equity portfolio and compare to the Nifty 50 PE. Decide if your style tilt matches your intent.", xp: 40 }
   ]
  },
  {
   t: "Dividend investing",
   subdomain: "fund_basics",
   definition: "An equity strategy focused on holding companies that pay regular cash dividends, often prized for income and signalling discipline.",
   short: "Buy companies that send cash to shareholders regularly; treat the dividend as the real signal.",
   deep: "Dividends are real cash leaving the company, hard to fake, unlike earnings which can be massaged. A high and stable dividend record signals durable cash flow and disciplined capital allocation. Indian large caps like ITC, Coal India, and Hindustan Zinc have historically paid hefty dividends. The trade off: dividends are taxed in the investor hand at slab rate after the 2020 reform, which makes them less efficient than capital gains for high earners (LTCG at 12.5 percent over 1.25 lakh for equities). Also, chasing the highest yield often catches you a value trap, a company whose price collapsed because the dividend is about to be cut. Useful framing: focus on dividend growth rate and payout ratio sustainability, not headline yield.",
   generic: "Like preferring a rental property that sends you cheques every month over a vacant plot that might be worth more later. The cheques are real and now, but the rental can also break down.",
   expert: "Dividend Discount Model (Gordon, 1959), price equals next dividend divided by (cost of equity minus growth). Dividend aristocrats (S&P 500) require 25 plus years of growing dividends. Indian Nifty Dividend Opportunities 50 index tracks high dividend names. Post the Finance Act 2020, dividends are taxed in hands of investors at slab rates and TDS applies above ten thousand rupees per company per year, which materially lowers after tax yield for high bracket investors.",
   status: "framework",
   reflect: "Are you chasing yield, or are you actually picking companies with growing free cash flow that happen to pay dividends?",
   conceptQuiz: [
    {
     q: "What is a value trap in dividend investing?",
     options: [
      { text: "A high yield stock where the dividend is unsustainable and likely to be cut.", correct: true },
      { text: "A growth stock that pays no dividend.", misconception: "Growth stocks not paying dividends are simply growth stocks, not traps." },
      { text: "A government bond with falling yield.", misconception: "That is duration sensitivity, not a value trap." },
      { text: "A fund with high expense ratio.", misconception: "Fees matter but a value trap is specifically a deceptive high yield equity." }
     ],
     why: "Yield rises because price falls; if the falling price reflects a deteriorating business, the dividend will be cut."
    },
    {
     q: "After the 2020 Indian tax reform, dividend income is taxed how?",
     options: [
      { text: "At the investor's slab rate, with TDS above the threshold.", correct: true },
      { text: "Exempt from tax entirely.", misconception: "DDT was abolished, but dividends are now taxable in hands of the investor." },
      { text: "Flat 10 percent for all investors.", misconception: "The 10 percent DDT was abolished in 2020." },
      { text: "Same as long term capital gains at 12.5 percent.", misconception: "LTCG and dividend tax treatment are separate; dividends use slab rates." }
     ],
     why: "Finance Act 2020 shifted dividend taxation to the recipient at applicable slab rates, plus TDS above set thresholds."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "List dividend holdings", d: "List every stock or fund in your portfolio that paid a dividend last year.", xp: 10 },
    { level: "easy", t: "Compute payout ratio", d: "For your highest yielding holding, look up the payout ratio (dividends divided by earnings) and assess sustainability.", xp: 20 },
    { level: "advanced", t: "After tax yield", d: "Calculate the after tax dividend yield on your top three dividend names, given your slab rate, and compare to a tax efficient growth alternative.", xp: 40 }
   ]
  },
  {
   t: "Bond duration",
   subdomain: "risk",
   definition: "A measure of how sensitive a bond's price is to changes in interest rates, expressed in years.",
   short: "Higher duration means the bond price moves more when rates change.",
   deep: "Duration is the weighted average time to receive a bond's cash flows. A bond with duration 7 will lose roughly 7 percent if interest rates rise by 1 percentage point, and gain about 7 percent if rates fall by the same amount. Indian investors saw this brutally in 2022 when the RBI hiked repo rates sharply: long duration G-Sec funds dropped 5 to 8 percent while short duration liquid funds were nearly flat. The lesson: duration is the bond market's volatility dial. If you do not know your fund's modified duration, you do not know your interest rate risk. SEBI mandates schemes disclose Macaulay duration in factsheets. Match your bond duration to your time horizon: short for under 3 years, medium for 3 to 7, long only if you can sit through rate shocks.",
   generic: "Like a long lever versus a short one. The same small push moves the long lever a lot more at the far end. Duration is the lever length for interest rate moves.",
   expert: "Macaulay duration is the time weighted average of cash flows. Modified duration equals Macaulay divided by (1 plus yield), and gives the percentage price change for a 1 percent yield change. Convexity captures the second order curvature. Indian dynamic bond funds and gilt funds typically carry 5 to 10 year duration; liquid funds run under 91 days. The RBI's terminal rate decisions and global yield moves drive duration risk; investors in 2022 to 2023 saw textbook duration losses materialise in real portfolios.",
   status: "framework",
   reflect: "Do you know the modified duration of every debt fund you own, and does each one match the time horizon for the goal funding it?",
   conceptQuiz: [
    {
     q: "A bond fund with duration 6 will roughly lose how much if interest rates rise by 1 percentage point?",
     options: [
      { text: "About 6 percent.", correct: true },
      { text: "Nothing, because the yield rises.", misconception: "Yield rises but the underlying bond prices fall to reflect the new yield." },
      { text: "About 1 percent.", misconception: "The price change is duration times the rate change, not the rate change alone." },
      { text: "It is unpredictable.", misconception: "Duration gives a first order estimate of the price change." }
     ],
     why: "Duration times the rate move gives the rough percentage price impact, here 6 times 1 percent equals 6 percent."
    },
    {
     q: "Which Indian debt fund category carries the lowest duration risk?",
     options: [
      { text: "Liquid funds.", correct: true },
      { text: "Long duration gilt funds.", misconception: "Long duration funds carry the highest interest rate risk." },
      { text: "Dynamic bond funds.", misconception: "Dynamic bond funds actively shift duration and can run high." },
      { text: "Credit risk funds.", misconception: "These carry credit risk; duration can still be moderate but is not the lowest." }
     ],
     why: "Liquid funds invest in instruments under 91 days, keeping duration near zero and shielding from rate moves."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Find your duration", d: "For every debt fund you hold, look up the modified duration from the latest factsheet.", xp: 10 },
    { level: "easy", t: "Match to horizon", d: "Map each debt holding to the goal it funds, and flag any duration mismatch greater than 3 years.", xp: 20 },
    { level: "advanced", t: "Rate shock scenario", d: "Estimate the loss your debt portfolio would suffer if rates rose 1.5 percentage points, and decide if you can hold through it.", xp: 40 }
   ]
  },
  {
   t: "Sovereign Gold Bonds (India)",
   subdomain: "fund_basics",
   definition: "Government securities denominated in grams of gold, issued by the RBI, offering a fixed interest coupon plus the underlying gold price return.",
   short: "Gold exposure plus 2.5 percent annual interest, backed by the Government of India, in paper form.",
   deep: "SGBs were introduced in 2015 as an alternative to physical gold. You buy bonds priced per gram, receive 2.5 percent annual interest on the issue price (paid half yearly), and on maturity get back the prevailing gold price in rupees. The 8 year holding has no capital gains tax if held to maturity, which beats physical gold or gold ETFs on after tax basis. The interest is taxable at slab rate. The catch: the RBI has paused new SGB issuances since 2024 amid fiscal concerns over the open ended liability, so future tranches are uncertain. Existing SGBs trade on exchanges at varying discounts to NAV, often 2 to 5 percent below intrinsic value due to low liquidity. For long term gold exposure with tax efficiency, SGBs are structurally superior to gold ETFs, but availability and liquidity are real constraints.",
   generic: "Like buying a fixed deposit that also tracks the price of gold. You get a steady small coupon plus whatever the metal does over the term, all on paper, no locker needed.",
   expert: "Issued under Government Securities Act, 2006. Interest rate fixed at 2.5 percent on the issue value, taxable as interest income at slab. Capital gains on redemption at maturity are exempt under Section 47(viic) of the Income Tax Act. STCG and LTCG rules apply if sold on exchange before maturity. As of 2024 25, RBI has indicated future issuances will be limited; the cumulative SGB outstanding exceeded 70,000 crore and the government's effective cost rose sharply with gold's run, making the scheme fiscally expensive.",
   status: "framework",
   reflect: "If you allocate to gold, are you in the most tax efficient vehicle for your situation, or are you holding gold ETFs or physical gold because they are easier?",
   conceptQuiz: [
    {
     q: "What is the tax treatment of capital gains on SGBs held to maturity?",
     options: [
      { text: "Fully exempt under Section 47(viic).", correct: true },
      { text: "Taxed as LTCG at 12.5 percent.", misconception: "LTCG rules apply only if you sell before maturity on exchange." },
      { text: "Taxed at slab rate.", misconception: "Slab rate applies to the coupon interest, not maturity proceeds." },
      { text: "Flat 30 percent.", misconception: "No flat 30 percent rate applies; SGBs at maturity are explicitly exempt." }
     ],
     why: "Section 47(viic) exempts capital gains arising on redemption of SGBs at maturity for individuals."
    },
    {
     q: "What is the main structural advantage of SGBs over gold ETFs?",
     options: [
      { text: "Tax free maturity gains plus 2.5 percent annual interest.", correct: true },
      { text: "Higher liquidity on exchanges.", misconception: "SGB exchange liquidity is generally worse than gold ETFs." },
      { text: "Daily NAV publication.", misconception: "Both publish daily values; ETFs are typically more closely tracked." },
      { text: "No counterparty risk at all.", misconception: "SGBs do carry sovereign risk, though it is low for India." }
     ],
     why: "The tax exemption on maturity gains and the additional fixed coupon make SGBs structurally more tax efficient than ETFs."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Check your gold form", d: "List the form you hold gold in: physical, ETF, SGB, or digital gold.", xp: 10 },
    { level: "easy", t: "Compute after tax yield", d: "For your gold holding, estimate the after tax annualised return assuming a 5 year hold and a 30 percent slab.", xp: 20 },
    { level: "advanced", t: "Switch decision", d: "Decide whether to switch some of your gold holdings to existing SGB tranches on exchange, accounting for discount to NAV, liquidity, and tax basis.", xp: 40 }
   ]
  }
 ],

 counterView: "Index investing is the dominant retail strategy for good reason, but it's not free of critiques. (1) Passive flows can distort markets; if everyone indexed, price discovery breaks. (2) Single-country index concentration is its own risk (US-heavy investors found this out in the 'Lost Decade' 2000-2010). (3) The 'buy and hold forever' story leans on US equities' unusually good 100-year run, survivorship bias. (4) Bogle himself warned about ETF over-trading. The honest version: a low-cost diversified index core is almost certainly the best starting point, but it isn't an excuse to skip thinking about valuation, region, and your own behaviour.",

 capabilities: [
  "Explain compounding, index funds, and fee drag to a friend.",
  "Compare two funds on expense ratio + benchmark, not last year's return.",
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
  { rank: "Novice",    focus: "Get the language and open the account",         do: "Read The Simple Path to Wealth (JL Collins) and The Psychology of Money (Housel). Open a low-cost broker account, Zerodha or Groww in India. Don't invest yet. Just get set up.",                                                                         milestone: "You can name index funds, expense ratios, and asset allocation without notes, and your broker account is live.",                         time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Automate the boring thing",                do: "Set up a monthly SIP into one broad-index fund. ₹500 a month is fine, the mechanism is the point. Let it run for a month without touching it.",                                                                                         milestone: "Investing now happens without your willpower being involved. The SIP runs even on bad weeks.",                                    time: "~1 month" },
  { rank: "Practitioner", focus: "Choose your allocation; use tax wrappers",         do: "Decide on an equity vs debt mix you can defend in writing. Use tax-advantaged options (ELSS, NPS) where they fit your situation. Read every expense ratio of every product you hold.",                                                                      milestone: "You can sit a curious friend down and explain your allocation, your fees, and your tax strategy in plain English.",                         time: "~3-6 months" },
  { rank: "Specialist",  focus: "Sit through a drawdown without selling",          do: "Markets fall sharply every few years. Sit through at least one drop of 15% or more without panicking. Rebalance back to your target allocation if you've drifted, don't react.",                                                                         milestone: "You've been tested by a real market fall and you didn't blink.",                                                   time: "~1-2 years" },
  { rank: "Expert",    focus: "Plan goal by goal, write a will",              do: "Match specific goals, house, education, retirement, to their own time horizons and portfolios. Sort estate basics: write a will, set nominees on every account.",                                                                                milestone: "Each major life goal has its own funded plan with a real date and amount.",                                             time: "~3-5 years" },
  { rank: "Master",    focus: "Project the path to 'work optional'",            do: "Run honest FIRE-style numbers, how big does the pot need to be for work to become a choice? Add advanced asset classes only if they truly fit, not because they're fashionable.",                                                                         milestone: "You can name a calendar year when your job becomes optional, with the maths to back it up.",                                     time: "~5+ years" },
  { rank: "Grandmaster", focus: "Help others; structure giving around values",        do: "Teach the people around you to skip the traps you stepped in. Set up giving or community support that reflects what you value. Plan your estate around the same values.",                                                                             milestone: "Your money, your time, and what you actually care about are all pointing the same direction.",                                    time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Zerodha Varsity, Markets & Investing",     what: "Free, India-specific, genuinely good.",               url: "https://zerodha.com/varsity/",                            weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Berkshire Hathaway, annual letters",      what: "Decades of clear thinking from Buffett. Free.",            url: "https://www.berkshirehathaway.com/letters/letters.html",               weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Howard Marks, Oaktree memos",          what: "Cycles + risk thinking. Free, decades of memos.",           url: "https://www.oaktreecapital.com/insights/memos",                    weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Bogleheads Wiki",                what: "Community wiki around John Bogle's philosophy. Deep + practical.",   url: "https://www.bogleheads.org/wiki/Main_Page",                      weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Investopedia, Investing 101",          what: "Reference-grade glossary + tutorials.",                url: "https://www.investopedia.com/investing-4427685",                    verify: false, lastVerified: "2026-06" },
   { name: "Aswath Damodaran, NYU course (free lectures)", what: "Valuation from the master. Free YouTube + materials.",         url: "https://pages.stern.nyu.edu/~adamodar/",                        verify: false, lastVerified: "2026-06" },
   { name: "Patrick O'Shaughnessy, Invest Like the Best",  what: "Long-form interviews with great investors.",             url: "https://joincolossus.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "SEBI, Investor Awareness",            what: "Indian regulator's own investor education.",             url: "https://investor.sebi.gov.in/",                            weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Morningstar, Investing Classroom",       what: "Free structured classes; fund + portfolio fundamentals.",       url: "https://www.morningstar.com/start-investing",                     verify: false, lastVerified: "2026-06" },
   { name: "Value Research, articles + tools",       what: "India: mutual fund + tax research.",                 url: "https://www.valueresearchonline.com/",                         verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Intelligent Investor, Benjamin Graham",   what: "Value investing classic. Margin of safety, Mr Market.",        url: "https://en.wikipedia.org/wiki/The_Intelligent_Investor",                price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "A Random Walk Down Wall Street, Malkiel",    what: "The academic case for index investing.",               url: "https://en.wikipedia.org/wiki/A_Random_Walk_Down_Wall_Street",             price: "verify", weight: "popular", verify: false, lastVerified: "2026-06" },
   { name: "The Most Important Thing, Howard Marks",     what: "Cycles, risk, second-level thinking.",                url: "https://www.oaktreecapital.com/",                            price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Common Sense on Mutual Funds, John Bogle",    what: "The case for low-cost index investing from the source.",       url: "https://en.wikipedia.org/wiki/Common_Sense_on_Mutual_Funds",              price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "One Up On Wall Street, Peter Lynch",       what: "Bottom-up stock picking, accessibly written.",            url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Little Book of Common Sense Investing, Bogle", what: "Compact version of Bogle's index-investing case.",         url: "",                                           price: "verify", weight: "secondary", verify: true, lastVerified: "2026-06" },
   { name: "Mastering the Market Cycle, Howard Marks",    what: "Where you are in the cycle is most of the game.",           url: "https://www.oaktreecapital.com/",                            price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Coffee Can Investing, Saurabh Mukherjea",    what: "India-specific buy-and-hold-quality framework.",           url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Margin of Safety, Seth Klarman (out of print)", what: "Hard-to-find classic; library access if you can.",          url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Damodaran on Valuation, Aswath Damodaran",    what: "Standard valuation reference.",                    url: "https://pages.stern.nyu.edu/~adamodar/",                        price: "verify", verify: false, lastVerified: "2026-06" }
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
   { text: "Because the news will be wrong about the future.", misconception: "Maybe, maybe not, that's a bet on prediction." },
   { text: "Because permanent loss happens when you sell at the bottom; volatility through cycles is the cost of equity returns.", correct: true },
   { text: "Because all stocks always recover.", misconception: "Not always, individual stocks can go to zero. The index has historically recovered." },
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
   { text: "Nothing, you'll lose it all.", misconception: "Too strong; you still have most of it, but a quarter to a third less." },
   { text: "Twice as much (B is better).", misconception: "Higher fee = lower net return, always, all else equal." }
  ], why: "Fee drag compounds against you. Over 30 years, the gap is huge, same return, very different pots." },
  { q: "Behaviorally, what's the single biggest reason average investor returns lag fund returns?", options: [
   { text: "Bad fund selection.", misconception: "Real but smaller. Behaviour gap is the bigger driver." },
   { text: "Buying high, selling low (panic + chase).", correct: true },
   { text: "Taxes.", misconception: "Taxes lower returns but don't explain the gap." },
   { text: "Trading costs.", misconception: "Real but small relative to the behaviour gap." }
  ], why: "DALBAR-style studies repeatedly find investors panic-sell in drawdowns and chase past winners, locking in losses and buying high." }
 ],

 flashcards: [
  { front: "Why does compounding matter so much?", back: "Returns on returns produce non-linear wealth. Time is the most powerful variable, starting earlier dramatically beats investing more later." },
  { front: "Index funds vs active funds?", back: "Net of fees, most active funds underperform a broad index over long horizons." },
  { front: "Fee drag on 30 years?", back: "Same return, 0.1% vs 1.5% fees ≈ 25-30% less final pot. Fees compound against you." },
  { front: "Volatility vs permanent loss?", back: "Volatility is the price of equity returns. Permanent loss usually only happens if you sell at the bottom." },
  { front: "Asset allocation in one line?", back: "Stocks/bonds/cash mix. Drives most of long-term portfolio returns, far more than which specific stocks you pick." },
  { front: "Dollar-cost averaging?", back: "Investing the same amount on a schedule. Removes timing decisions. Behaviorally powerful even when mathematically a hair behind lump-sum." },
  { front: "Diversification (one line)?", back: "Spread across uncorrelated assets to lower portfolio volatility without losing much expected return." },
  { front: "The biggest enemy of investor returns?", back: "Your own behaviour, buying high in euphoria, selling low in panic. Discipline beats cleverness." }
 ],
 glossary: [
  { term: "Index fund", def: "Fund that tracks a market index. Low fee, no stock-picking." },
  { term: "ETF", def: "Exchange-Traded Fund, index-style fund that trades like a stock." },
  { term: "Expense ratio", def: "Annual % a fund deducts. Lower = better, all else equal." },
  { term: "Asset allocation", def: "Mix of asset classes (stocks/bonds/cash/etc.) in your portfolio." },
  { term: "Diversification", def: "Spreading risk across uncorrelated assets." },
  { term: "Drawdown", def: "Peak-to-trough loss before recovery." },
  { term: "DCA", def: "Dollar-Cost Averaging, investing the same amount on a fixed schedule." },
  { term: "Rebalancing", def: "Periodically returning your portfolio to its target allocation." }
 ],

 safetyNote: "Education, not financial advice. Past performance doesn't guarantee future returns. For real money decisions, talk to a SEBI-registered advisor whose incentives don't depend on selling you a product."
};

export default d;
