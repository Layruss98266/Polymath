import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "personal_finance",
 icon: "💰",
 hue: "#facc15",
 category: "Money & Work",
 name: "Personal Finance",
 tagline: "Spend less than you earn, invest the rest",

 basics:
  "Here's a secret nobody who sells financial products wants you to know: doing personal finance well is mostly boring, and almost everyone overestimates how clever they need to be. You only have to do a handful of unglamorous things and stick with them. Spend less than you earn. Keep some cash for when life surprises you (it will). Pay off credit cards like your hair's on fire. Set up an automatic monthly transfer into a low-cost index fund. Buy term insurance if anyone depends on you. That's most of it. The rest is patience.",
 whyItMatters: [
  "Compounding is the closest thing to magic that's actually real, but it only works if you start.",
  "Most financial stress comes from not having a buffer, not from low income. People earning ₹2 lakh a month panic every month if they spend ₹2 lakh.",
  "Credit card debt is the single biggest preventable money leak in most people's lives. 30%+ interest will eat anything you build.",
  "Knowing this stuff protects you from confidently-wrong friends and confidently-selling advisors with a commission to earn."
 ],
 realWorldExample:
  "Two friends, same job, same salary, both 25. They both decide to invest ₹5,000 a month until they're 60. Same index fund, same average return, say 10% a year. The only difference: one buys a fund with a 0.1% fee, the other buys one with a 1.5% fee (his bank's relationship manager recommended it). Forty-five years later, the cheap-fund friend has roughly 25-30% more money. Lakhs of rupees, maybe over a crore. Same effort. Same income. Same idea. Different fee. Fees are a tiny percentage that compounds against you for decades. That's why expense ratios get their own chapter.",

 mentors: [
  { name: "Morgan Housel", for: "behaviour > spreadsheets",           work: "The Psychology of Money (2020)" },
  { name: "JL Collins",   for: "low-cost index investing in plain English",  work: "The Simple Path to Wealth (2016)" },
  { name: "Ramit Sethi",  for: "automating finances + spending on what you love", work: "I Will Teach You to Be Rich (revised 2019)" },
  { name: "Vicki Robin",  for: "money = life energy, \"enough\" is a skill", work: "Your Money or Your Life (2008 ed.)" },
  { name: "John Bogle",   for: "the case for low-cost index funds",      work: "founded Vanguard; The Little Book of Common Sense Investing" }
 ],

 diagrams: [
  { kind: "curve", title: "Compounding", caption: "Time in the market beats timing the market. Same monthly contribution, different start dates.", data: {
   x: "Years",
   y: "Portfolio (× contributions)",
   series: [
    { label: "Started age 25", points: [[0, 0], [10, 2], [20, 6], [30, 14], [35, 22]] },
    { label: "Started age 35", points: [[0, 0], [10, 2], [20, 6], [25, 10]] }
   ]
  } },
  { kind: "bars", title: "Fee drag on a 30-year nest egg", caption: "Same return, different fees, fees compound the wrong way for you.", data: {
   items: [{ label: "0.1% fee", value: 100 }, { label: "0.5% fee", value: 85 }, { label: "1.0% fee", value: 73 }, { label: "1.5% fee", value: 62 }, { label: "2.0% fee", value: 53 }],
   unit: "% of pot left"
  } }
 ],

 synthesis: [
  { concept: "Compounding",     linksTo: "investing",    note: "The same engine drives both. Personal finance feeds it; investing tunes it." },
  { concept: "Anchoring on price", linksTo: "marketing",    note: "Knowing what makes you buy makes you spend less. See Marketing for social proof and anchoring." }
 ],

 subdomains: [
  { id: "fundamentals", name: "Fundamentals", intro: "The non-negotiable basics: spend less than you earn, track where it goes, and build savings before lifestyle. Everything else is decoration.", capabilities: ["Run your last three months through a simple needs, wants, savings split.", "Set a savings rate as a percent of income, not a leftover at month end.", "Resist lifestyle creep when your salary or freelance income jumps."] },
  { id: "debt",         name: "Debt and Buffer", intro: "Killing high-cost debt and building an emergency fund of 3 to 6 months of expenses. In India that means credit cards and personal loans first, EMIs second.", capabilities: ["List every debt by interest rate and attack the highest one first.", "Park 6 months of expenses in a liquid fund or sweep FD before investing more.", "Refuse a credit card EMI on anything that depreciates."] },
  { id: "automation",   name: "Automation and Habits", intro: "Set-and-forget systems that move money before you can touch it. SIPs, sweep accounts, and standing instructions beat willpower every month.", capabilities: ["Set up a salary-day SIP into an index fund before any spending happens.", "Split income across separate accounts for spending, bills, and savings.", "Review your money once a month, not once a day."] },
  { id: "products",     name: "Products and Protection", intro: "The financial instruments you actually need in India: term insurance, health cover, EPF, PPF, and index funds. Most other products are sold, not bought.", capabilities: ["Buy pure term life cover of 10 to 15 times your annual income.", "Carry a family floater health policy of at least 10 lakh in a metro.", "Reject any product that mixes insurance and investment under one premium."] }
 ],

 concepts: [
  {
   t: "Spend less than you earn",
   subdomain: "fundamentals",
   definition: "The whole subject in five words. Income minus spending leaves the surplus that everything else builds on.",
   short: "The entire game, in five words.",
   deep: "Everything else in personal finance is a footnote on this rule. The cleverest investing strategy in the world can't fix a leaking budget. Income matters less than the gap between what comes in and what goes out. That's why people on huge salaries go broke and people on modest ones quietly become wealthy. You don't have to track every chai. You do have to know, roughly, what slice of last month's income made it out alive. If you can't answer that, you can't fix anything else.",
   generic: "Imagine a leaky bucket. Whether the tap (your income) is wide or narrow does not matter if the hole at the bottom is leaking it all out. Patching the bucket beats turning up the tap, almost always. The patching is spending less.",
   expert: "The savings rate is the most important single number in personal finance. Doubling your savings rate roughly cuts your required working years in half (rough rule from FIRE math). 5% savings rate means you need to work about 60 years to retire. 50% means about 17. The math is in posts like Mr Money Mustache's 'Shockingly Simple Math Behind Early Retirement'. Beware of lifestyle inflation: as income rises, costs creep up and the savings rate stays put. Lock the percent first, not the rupee amount.",
   status: "settled",
   reflect: "Roughly what percentage of your income did you spend last month? If you can't answer to the nearest 10%, that's the first thing to fix.",
   conceptQuiz: [
    {
     q: "Your income just doubled. The most likely outcome for your savings rate is:",
     options: [
      { text: "It doubles automatically.", misconception: "Without a deliberate lock on the percent, lifestyle creep usually swallows most of the raise." },
      { text: "It stays roughly the same unless you deliberately lock the percent.", correct: true },
      { text: "It crashes to zero.", misconception: "Some people do this, but it is not the typical outcome." },
      { text: "It is unaffected by income.", misconception: "It is connected; the point is whether you keep the percent constant or let costs creep." }
     ],
     why: "Lifestyle inflation is the silent killer of high earners. Lock your savings rate as a percent of income, automatically, before the new spending shows up."
    },
    {
     q: "Two friends earn the same salary. Friend A saves 20%, Friend B saves 5%. Twenty years later:",
     options: [
      { text: "A is roughly four times wealthier than B.", correct: true },
      { text: "They are roughly even because both saved.", misconception: "The gap compounds. 4x the contributions over 20 years at the same return is a huge gap." },
      { text: "B is wealthier because B 'lived more'.", misconception: "Living more is a real choice. But measured in financial wealth, A wins overwhelmingly." },
      { text: "Cannot be determined.", misconception: "We can estimate well using the savings rate alone." }
     ],
     why: "Savings rate is the single most predictive number for medium-term wealth accumulation."
    },
    {
     q: "Where should the very first 30 minutes of personal-finance effort go?",
     options: [
      { text: "Pick the right index fund.", misconception: "Premature. You cannot tune the engine before you know the fuel level." },
      { text: "Get a rough number for how much you spent last month.", correct: true },
      { text: "Read three books before doing anything.", misconception: "Books help, but they delay action. The first 30 minutes is a real number, not theory." },
      { text: "Find a financial advisor.", misconception: "An advisor cannot help you until you know your own basic numbers." }
     ],
     why: "You cannot manage what you cannot see. Knowing the rough number is the first lever."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot check your spending", d: "Open your bank app right now. Estimate last month's total spending to the nearest 10%. Then look at the real number. Note the gap.", xp: 10 },
    { level: "easy",     t: "Pick a savings rate",       d: "Decide a savings rate as a percentage of income (start with 10% if unsure). Write it down. That is the target for next month.", xp: 25 },
    { level: "advanced", t: "Lock it in",               d: "Set up a standing instruction so the chosen percent of your next salary moves to a separate account or SIP within 48 hours of landing. The mechanism is the win, not the size.", xp: 70 }
   ],
   diagram: { kind: "flow", title: "Salary surplus flow", caption: "Surplus is what is left after fixed and variable spend.", data: { steps: ["Salary lands", "Auto-debit savings (e.g. 20%)", "Pay fixed bills (rent, EMIs)", "Spend on variable (food, transport)", "Leftover = real surplus"] } }
  },
  {
   t: "Emergency fund first",
   subdomain: "debt",
   definition: "A liquid cash buffer of three to six months of essential expenses, kept in a boring high-interest account you can access in a day.",
   prereqs: ["Spend less than you earn"],
   short: "Three to six months of essential spending, in a boring place you can grab in a day.",
   deep: "Imagine your phone breaks, your car needs a new battery, and you lose your job. All in the same month. Without a cash buffer, those small disasters become a credit card spiral that takes years to pay back. With one, they're inconvenient and survivable. That's the entire job of an emergency fund. Three months of essential expenses to start with, six if your income is irregular. Put it in a high-interest savings account or a liquid mutual fund. Not in stocks (markets fall hardest exactly when you need the money), not in a tin (inflation eats it). The point is boring access, not return.",
   generic: "Think of it as a financial seatbelt. You hope you never need it. When a shock hits (job loss, medical bill, sudden home repair), it stops the shock from turning into a financial disaster.",
   expert: "The buffer size depends on income stability and obligations. Salaried with a partner: 3 months. Single-income freelancer with kids: 6 to 12 months. Place it in instruments with same-day or T+1 liquidity. Liquid funds in India yield close to short-term FD rates with better liquidity. The opportunity cost of holding cash vs equity is real but the optionality value is higher than most spreadsheets credit. Inflation matters but the buffer should not chase yield; chase it elsewhere.",
   status: "settled",
   reflect: "If your salary stopped landing tomorrow, how many months could you actually keep paying rent and groceries? If the answer is under three, that's the goal.",
   conceptQuiz: [
    {
     q: "Where should an emergency fund live?",
     options: [
      { text: "In stocks for higher return.", misconception: "Markets fall hardest exactly when you need the money. The point of an emergency fund is access, not return." },
      { text: "In a high-interest savings account or a liquid mutual fund.", correct: true },
      { text: "In a tin under the bed.", misconception: "Inflation eats the buying power. Theft is also a real risk." },
      { text: "In long-term FDs.", misconception: "Lock-ins defeat the purpose; you cannot access the money quickly when you need it." }
     ],
     why: "Liquidity beats yield for an emergency buffer. Three months in a boring liquid place."
    },
    {
     q: "Before investing in equities, what comes first?",
     options: [
      { text: "Pick the best stock.", misconception: "Premature. One forced sale in a downturn can erase the gains." },
      { text: "Building a 3 to 6 month emergency fund.", correct: true },
      { text: "Buying a house.", misconception: "House is illiquid and tied up. It is not an emergency fund." },
      { text: "Maxing out credit card limits.", misconception: "Credit cards are debt, not savings. At 30 to 45% interest in India, they destroy wealth fast." }
     ],
     why: "Without a buffer, market dips force you to sell at the worst time. Buffer first, then invest."
    },
    {
     q: "Your buffer should cover how many months of expenses if you are a salaried single earner with stable income?",
     options: [
      { text: "1 month.", misconception: "Too thin. One bad month wipes it out." },
      { text: "3 months (then build to 6).", correct: true },
      { text: "12 months.", misconception: "Overkill for stable salaried income; the opportunity cost gets large." },
      { text: "5 years.", misconception: "Way too much cash drag. Better directed elsewhere." }
     ],
     why: "Three months as the starting target, six months if income is irregular or you have dependents."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Calculate one month",  d: "Add up your essential monthly expenses: rent, groceries, utilities, basic transport, EMIs. That's your one-month buffer target.", xp: 10 },
    { level: "easy",     t: "Open a separate account", d: "Open a high-interest savings account (or buy units of a liquid fund) used only for the emergency fund. Keep it separate from your spending account.", xp: 25 },
    { level: "advanced", t: "Build to 3 months",     d: "Transfer enough to reach three months over the next few cycles. Once hit, leave it alone. Touch only in actual emergencies.", xp: 70 }
   ],
   diagram: { kind: "bars", title: "Buffer target by income type", caption: "Months of essential expenses to hold in liquid cash.", data: { items: [{ label: "Salaried, dual income", value: 3 }, { label: "Salaried, single income", value: 4 }, { label: "Freelancer / variable", value: 6 }, { label: "Single income + dependents", value: 9 }], unit: "months" } }
  },
  {
   t: "Kill high-interest debt first",
   subdomain: "debt",
   definition: "A rule that says any debt above roughly 15 percent annual interest must be cleared before serious investing begins, because paying it down is a guaranteed return at that rate.",
   short: "Credit cards and payday loans first, always. Nothing else competes.",
   deep: "An Indian credit card typically charges 30 to 45% a year on whatever you don't pay off in the cycle. No legal investment beats that reliably. So paying down a credit card balance is basically a risk-free 30% return, better than any stock, bond, or fund you'll be pitched. There are two playbooks. The avalanche method says: pay the highest interest rate first (mathematically optimal). The snowball method says: pay the smallest balance first (motivationally easier, you knock one debt out fast, feel a win, keep going). Pick the one you'll actually finish, not the one that looks smarter on paper.",
   generic: "Imagine a bucket with one big hole and three small holes. Patching the big hole first slows the leak the most. High interest debt is the big hole; investing alongside it is filling the bucket while the hole keeps draining.",
   expert: "RBI data shows Indian credit card APRs cluster between 36 and 48 percent, with monthly rates of 3 to 4 percent compounding to effective annualised rates above 50 percent. No retail asset class (Nifty 50, gold, debt funds) has delivered a comparable risk free return historically. Section 80C deductions cannot offset card interest, and credit card interest is not tax deductible in India. The avalanche method is mathematically optimal because it minimises total interest paid; Gal and McShane (2012) showed snowball drives higher completion rates due to the goal gradient effect. For balances above 1 lakh, evaluate a personal loan at 12 to 16 percent or an EMI conversion (read processing fees) as a refinance route.",
   status: "debated",
   reflect: "Write down every debt you have with its interest rate. The biggest rate gets attacked first, unless you know you'd quit without an early small win.",
   conceptQuiz: [
    {
     q: "Why is paying down a 40 percent APR credit card often the best use of spare cash?",
     options: [
      { text: "It is a guaranteed risk free return at 40 percent that no legal investment reliably beats.", correct: true },
      { text: "Credit card debt is tax deductible.", misconception: "Credit card interest carries no tax deduction in India." },
      { text: "Banks waive the balance after one year.", misconception: "Banks pursue defaulters; balances do not vanish." },
      { text: "Investing always returns more than 40 percent.", misconception: "No reliable retail asset class clears 40 percent post tax over the long run." }
     ],
     why: "Eliminating a 40 percent compounding cost is mathematically equivalent to earning a 40 percent risk free return, an opportunity no normal investment offers."
    },
    {
     q: "When should the snowball method be preferred over the avalanche method?",
     options: [
      { text: "When past financial plans show a pattern of quitting before completion, so visible early wins matter.", correct: true },
      { text: "When the highest interest debt is also the smallest.", misconception: "In that case avalanche and snowball coincide; the question is irrelevant." },
      { text: "When you have no debts at all.", misconception: "Neither method applies without debts." },
      { text: "When all debts have identical interest rates.", misconception: "If rates are identical, balance size is the only differentiator anyway." }
     ],
     why: "Snowball trades a small amount of optimality for behavioural completion. For self admitted plan quitters, that trade is often worth it."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "List every debt",     d: "Write down every debt with lender, balance, APR, and minimum payment. No editing, just the list.", xp: 10 },
    { level: "easy",     t: "Choose a method",     d: "Pick avalanche (highest rate first) or snowball (smallest balance first) based on your honest track record, and commit it in writing.", xp: 20 },
    { level: "advanced", t: "Refinance the worst", d: "If any debt is above 30 percent APR, evaluate a personal loan at 12 to 16 percent or an EMI conversion, and execute the cheapest legal route to lower the cost.", xp: 40 }
   ]
  },
  {
   t: "Pay yourself first (automate it)",
   subdomain: "automation",
   definition: "A budgeting discipline that routes a fixed percentage of income into savings and investments automatically on or just after payday, before any discretionary spending decisions are made.",
   short: "Move money to savings the day your salary lands. Live on what's left, not the other way around.",
   deep: "Willpower runs out. Automation doesn't. People with identical incomes save wildly different amounts depending on one thing: whether the saving happens automatically before they see the money. Set up a standing instruction, the day after salary credits, ₹X gets pulled into a savings account or an investment SIP. You'll adjust your spending to the leftover. If you wait until the end of the month to save \"whatever's left,\" you'll find there's nothing left. There is always nothing left.",
   generic: "Like packing your lunch the night before. If you wait until the morning rush, you skip it. If it is ready in the fridge, you grab it without thinking. Automation moves the decision to a calmer moment.",
   expert: "Behavioural economics calls this commitment device design (Thaler and Benartzi, Save More Tomorrow, 2004). The default option dominates: when saving is opt out rather than opt in, participation and savings rates rise sharply. In India, SEBI registered SIPs, NACH mandates, and bank standing instructions provide the infrastructure. Pair with the new tax regime under Budget 2025-26 where the rebate threshold is ₹12 lakh and the standard deduction is ₹75,000, so additional 80C linked products are less load bearing and a plain SIP into a low cost index or ELSS fund often dominates. Lock the percent of gross, not a rupee amount, so the percentage holds as income rises.",
   status: "settled",
   reflect: "What percentage of your last salary moved into savings or investments within two days of it landing? If \"none,\" that's the next 30-minute fix.",
   conceptQuiz: [
    {
     q: "Why does paying yourself first beat saving whatever is left at month end?",
     options: [
      { text: "Willpower decays through the month; automating before discretionary spending starts removes the decision.", correct: true },
      { text: "Banks pay higher interest on payday transfers.", misconception: "Interest rates do not depend on transfer timing." },
      { text: "Saving at month end is illegal in India.", misconception: "There is no such regulation." },
      { text: "Salary credits earn bonus interest if untouched.", misconception: "No such bonus exists in standard Indian banking." }
     ],
     why: "The mechanism, automation before discretion, is what holds. Intent at the end of the month rarely survives the month."
    },
    {
     q: "Two friends with the same salary commit to save 20 percent. One sets a standing instruction on payday, the other plans to save what is left. After one year:",
     options: [
      { text: "The automated saver almost always ends up closer to the 20 percent target.", correct: true },
      { text: "Both end up saving exactly 20 percent because intent is equal.", misconception: "Intent is equal; execution is not. Behavioural data consistently shows the gap." },
      { text: "The manual saver does better because they think about money more.", misconception: "More thinking does not produce more saving; structure does." },
      { text: "Neither saves because salaries always vanish.", misconception: "Automation breaks exactly this pattern." }
     ],
     why: "Save More Tomorrow and decades of default option research confirm that automation drives a structural advantage over intent based saving."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Pick the percent",        d: "Decide what percent of your gross salary should automatically move to savings or investments. Start with 10 percent if unsure. Write it down.", xp: 10 },
    { level: "easy",     t: "Set the standing instruction", d: "Set up a bank standing instruction or SIP mandate that fires on or one day after your payday, for the chosen percent.", xp: 20 },
    { level: "advanced", t: "Raise it with every raise",  d: "Write a personal rule: every salary increment raises the automated transfer by the same percentage of the raise, the same week the raise lands. Pre-commit it.", xp: 40 }
   ]
  },
  {
   t: "Index funds beat picking",
   subdomain: "products",
   definition: "An investment approach where a passive low cost fund replicates a market index (such as the Nifty 50) rather than trying to pick winning stocks, on the basis that after fees most active managers lose to the index over long horizons.",
   short: "Over long horizons, a cheap fund that tracks the whole market beats most clever ones.",
   deep: "Every year, regulators publish a report (called SPIVA) that compares actively managed mutual funds against simple index funds. The same boring result keeps showing up: over 10 or 20 years, most active funds lose to the index after their fees are taken out. That doesn't mean active managers are stupid. It means the market is hard, fees are high, and \"average\" sounds boring but in practice means \"top quartile.\" For most of your equity allocation, just buy a broad Indian index fund (Nifty 50 or Total Market), keep buying it automatically, and don't touch it. You can have a small portion for active picks if you want the entertainment. The boring part is where the money is made.",
   generic: "Imagine a race with 100 runners. Instead of betting on which one will win, you buy a tiny slice of every runner. You will not get the gold medal payout, but you will not be wiped out either, and historically the average of all runners beats most expert picks after the bookmaker's cut.",
   expert: "S&P SPIVA India Scorecard 2023 shows over 80 percent of large cap active funds underperform the S&P BSE 100 over 10 years after fees. Bogle's cost matters hypothesis: in a zero sum market before costs, the average active investor must underperform the index by the cost differential. SEBI regulates Indian index funds and ETFs; total expense ratios on Nifty 50 index funds run 0.05 to 0.20 percent versus 1.0 to 2.25 percent on active equity funds. Under Budget 2025-26 the new regime taxes equity LTCG at 12.5 percent above 1.25 lakh per year and STCG at 20 percent, applying equally to index and active funds, so the fee gap is the cleanest edge.",
   status: "settled",
   reflect: "Pull up your largest actively managed mutual fund. Compare its 10-year return, after fees, against the Nifty 50 over the same period. Honestly.",
   conceptQuiz: [
    {
     q: "What is the strongest evidence based reason to prefer index funds over active equity funds in India?",
     options: [
      { text: "SPIVA India data shows most active large cap funds underperform the index over 10 years after fees.", correct: true },
      { text: "Index funds are guaranteed by the government.", misconception: "No equity product is government guaranteed; index funds rise and fall with the market." },
      { text: "Active funds are illegal in India.", misconception: "Active funds are legal and widely sold; the issue is cost net performance, not legality." },
      { text: "Index funds pay no tax.", misconception: "Equity LTCG above 1.25 lakh per year is taxed at 12.5 percent regardless of active or index." }
     ],
     why: "The fee gap of 1 to 2 percent per year compounds into a 20 to 30 percent shortfall over 20 to 30 years for the average active investor."
    },
    {
     q: "An active fund returned 12 percent versus the Nifty 50's 11 percent last year. Is that proof active beats index?",
     options: [
      { text: "No. One year tells you almost nothing; survivorship and luck dominate short horizons.", correct: true },
      { text: "Yes, definitively.", misconception: "A single year of outperformance is statistically meaningless against the cost drag over time." },
      { text: "Yes, because fees are recovered in one year.", misconception: "Fees compound year after year; one year of alpha does not lock in lifetime outperformance." },
      { text: "No, because active funds are illegal.", misconception: "They are legal; the issue is statistical, not legal." }
     ],
     why: "The honest comparison is 10 to 20 year rolling returns net of fees, where the index wins for the majority of funds."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find one expense ratio", d: "Pull up your largest equity mutual fund and write down its total expense ratio (TER). Anything above 1 percent needs a why.", xp: 10 },
    { level: "easy",     t: "Open one index fund SIP", d: "Start a small SIP into a Nifty 50 or Nifty Total Market index fund with a TER below 0.25 percent. The mechanism is the win, not the amount.", xp: 20 },
    { level: "advanced", t: "Run the SPIVA check",  d: "Look up the latest S&P SPIVA India Scorecard, find your category, and write down the 10 year underperformance rate. Decide whether to migrate your active holdings.", xp: 40 }
   ]
  },
  {
   t: "Compounding",
   subdomain: "fundamentals",
   definition: "The process by which returns earned in earlier periods themselves earn returns in later periods, so that a portfolio's growth curve accelerates over time rather than rising in a straight line.",
   short: "Time × return × consistency. Time matters more than the other two.",
   deep: "A 25-year-old investing ₹5,000 a month at a 10% average return ends up around ₹1.6 crore at 60. A 35-year-old doing the exact same thing ends up around ₹65 lakh, less than half. Same amount, same fund, same returns. Just ten extra years on the front end. The first decade looks tiny on the chart; the last decade is where the curve goes vertical. The single biggest favour you can do your future self is to start now, even if \"now\" means ₹500 a month. Increase the amount later. You can't make up the years.",
   generic: "Imagine a snowball at the top of a long hill. The first few rolls add almost nothing. Halfway down it is the size of a football. Near the bottom it is the size of a car. Same hill, same snow, the speed comes from how many rolls have already happened.",
   expert: "Mathematically, future value equals principal times (1 plus r) to the n, where small changes in n (years) dominate when r is in the 8 to 12 percent range typical of Indian equity. Einstein attribution aside, Bernoulli formalised continuous compounding. The Rule of 72 approximates doubling time: at 12 percent, money doubles roughly every 6 years. SEBI mandated standardised CAGR disclosures help investors compare on a compounded basis. In India, ELSS and index fund SIPs benefit from equity LTCG taxation of 12.5 percent above 1.25 lakh per year under Budget 2025-26, keeping more of the compounded gain. The single largest lever for retail investors is not return optimisation but time in market.",
   status: "settled",
   reflect: "If you'd started investing five years earlier than you did, what would change about today? Don't dwell on it, start now.",
   conceptQuiz: [
    {
     q: "Which lever has the largest effect on long term wealth for a typical retail investor?",
     options: [
      { text: "Time in market, because compounding rewards extra years exponentially.", correct: true },
      { text: "Picking the single best stock each year.", misconception: "Almost no retail investor sustains stock selection edge over decades; time in market dominates." },
      { text: "Timing the market perfectly.", misconception: "Missing even a handful of the best market days drastically lowers long term returns; reliable timing is not achievable." },
      { text: "Switching banks every year.", misconception: "Bank choice has marginal effect; compounding inside investments is where growth happens." }
     ],
     why: "Compounding is exponential in n (years); doubling time at 12 percent is roughly 6 years (Rule of 72), so an extra decade often doubles the final corpus."
    },
    {
     q: "A 25 year old and a 35 year old both invest 5,000 per month at 10 percent until age 60. Roughly how does the 25 year old's final corpus compare?",
     options: [
      { text: "Roughly 2 to 2.5 times the 35 year old's corpus.", correct: true },
      { text: "Slightly larger, maybe 10 percent more.", misconception: "Ten extra years of compounding produces a far larger gap than 10 percent." },
      { text: "About the same; the 35 year old catches up.", misconception: "The 35 year old cannot catch up at equal contributions; the years cannot be replayed." },
      { text: "Smaller, because the older investor has more career income.", misconception: "The question fixes contributions; income outside is irrelevant to the math." }
     ],
     why: "The last decade of a long horizon is where the curve goes vertical; the 25 year old captures it, the 35 year old does not."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Apply the Rule of 72",  d: "Pick an expected annual return (say 10 percent), divide 72 by it, and write down the rough years for money to double. Repeat for 8 and 14 percent.", xp: 10 },
    { level: "easy",     t: "Model two start dates", d: "Use any SIP calculator. Model 5,000 per month at 10 percent starting today versus starting 5 years from now, both ending at age 60. Note the gap.", xp: 20 },
    { level: "advanced", t: "Start the engine now",  d: "Set up the smallest viable SIP into a low cost index fund today, even 500 per month counts. The point is to begin compounding the n in the equation immediately.", xp: 40 }
   ]
  },
  {
   t: "Inflation",
   subdomain: "fundamentals",
   definition: "The sustained rise in the general price level of goods and services over time, which reduces the purchasing power of a unit of currency.",
   short: "Cash quietly loses 5-7% of its buying power every year in India.",
   deep: "Your grandparents could buy a kilo of arhar dal for a few rupees. Today it's around ₹150. Same dal, way more rupees, that's inflation in everyday clothes. Cash sitting in a low-interest account is shrinking in real terms every year. That's why your emergency fund goes in something liquid that at least keeps pace (a high-interest savings account or a liquid fund), and your long-term savings have to grow faster than inflation, which mostly means equities. \"Safe\" cash that loses 5% of its buying power every year is not actually safe.",
   generic: "Imagine the ruler you measure prices with quietly shrinking every year. A loaf of bread is the same loaf; it just takes more rupee marks to cover it. The bread did not get richer; your rupee got smaller.",
   expert: "RBI targets CPI inflation at 4 percent within a 2 to 6 percent tolerance band under the flexible inflation targeting framework (Monetary Policy Framework Agreement, 2015). India's average CPI inflation has run 5 to 7 percent over the last decade with food and fuel as primary drivers. Real return equals (1 plus nominal return) divided by (1 plus inflation) minus 1, so a savings account paying 3.5 percent against 6 percent CPI delivers a negative real return of around minus 2.4 percent. Equity historically delivers a positive real return of 6 to 8 percent in India; debt funds and FDs hover near zero real return post tax for higher slab investors. Under Budget 2025-26, debt fund LTCG indexation was removed, so post tax real returns on debt are even tighter.",
   status: "settled",
   reflect: "What did a litre of milk cost when you were a kid? What does it cost now? That gap is your real-world inflation lesson.",
   conceptQuiz: [
    {
     q: "Your savings account pays 3.5 percent and CPI inflation is 6 percent. What is the rough real return?",
     options: [
      { text: "Negative, roughly minus 2.4 percent.", correct: true },
      { text: "Positive 3.5 percent because the bank pays interest.", misconception: "Nominal interest ignores the falling purchasing power; real return is net of inflation." },
      { text: "Zero, because both numbers cancel.", misconception: "They do not cancel; 3.5 minus 6 is minus 2.5, and the compounding formulation is slightly worse." },
      { text: "Positive 6 percent.", misconception: "6 percent is the inflation rate, not the return." }
     ],
     why: "Real return = (1+nominal)/(1+inflation) - 1. At 3.5 percent nominal and 6 percent inflation, that is about minus 2.4 percent."
    },
    {
     q: "Why are equities usually preferred over FDs for goals more than 10 years away?",
     options: [
      { text: "Indian equities have historically delivered a positive real return after inflation; FDs and savings accounts often deliver near zero or negative real returns.", correct: true },
      { text: "Equities are guaranteed by SEBI.", misconception: "SEBI regulates, it does not guarantee returns. Equities can fall in any short period." },
      { text: "FDs do not pay interest.", misconception: "FDs pay interest; the issue is post inflation and post tax real return." },
      { text: "Inflation does not affect equities.", misconception: "Inflation affects every asset; equities historically outpace it, FDs often do not." }
     ],
     why: "Over long horizons, equity returns of 10 to 13 percent nominal substantially outpace 5 to 7 percent inflation, while FD returns of 6 to 7 percent barely match it pre tax."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find current CPI",     d: "Look up the latest RBI CPI inflation print and write it down. Note how it compares to your savings account rate.", xp: 10 },
    { level: "easy",     t: "Compute one real return", d: "Pick your largest non equity holding (FD, savings account, debt fund). Compute its post tax post inflation real return for your slab.", xp: 20 },
    { level: "advanced", t: "Restructure long term cash", d: "For any cash earmarked for goals more than 7 years away, move a meaningful share into an index fund SIP. Document the rationale and the expected real return gap.", xp: 40 }
   ]
  },
  {
   t: "Insurance: term + health, full stop",
   subdomain: "products",
   definition: "A protection strategy that uses pure term life insurance to replace lost income for dependants and a separate indemnity health policy for medical costs, deliberately avoiding bundled products that mix protection with investment.",
   short: "Pure term life (if anyone depends on you) and proper health insurance. Avoid anything that mixes insurance with investment.",
   deep: "Real insurance is simple and cheap: a term policy pays your family a chunk of money if you die during a set number of years. If you survive, you get nothing, which sounds bad, but that's exactly what insurance is for. The bundled products (ULIPs, endowment plans, \"return of premium\" policies) take what should be a ₹1,000-a-month problem and turn it into a ₹15,000-a-month one, because they're hiding an expensive investment inside. The agent earns a big commission. You earn a low return. Just buy term life if anyone depends on your income, and a real indemnity health policy. Invest the difference in an index fund.",
   generic: "Like an umbrella. It does one job, keep the rain off, and it does it cheaply. A combined umbrella plus suitcase plus chair sounds clever in the shop, but in actual rain you would rather just have a good umbrella and a separate suitcase.",
   expert: "IRDAI regulates Indian life and health insurance. Pure term cover for a healthy non smoker aged 30 is typically priced at 10,000 to 15,000 INR per year for 1 crore sum assured, compared to 80,000 to 1,20,000 for the same effective cover bundled inside a ULIP. ULIP charges include premium allocation (up to 6 percent year 1), policy admin, fund management (up to 1.35 percent), and mortality deductions. Health insurance: a 30 year old can get 10 to 25 lakh family floater cover for roughly 18,000 to 30,000 per year, with critical exclusions including room rent caps, pre existing disease waiting (2 to 4 years), and co pay clauses. Section 80D allows 25,000 deduction for self and family plus 50,000 for senior parents, available under the old regime; the new regime under Budget 2025-26 with the ₹12 lakh rebate threshold and ₹75,000 standard deduction makes 80D less load bearing for many earners. Death benefit is tax free under Section 10(10D).",
   status: "framework",
   reflect: "Is anyone financially dependent on you? If yes, do you have term life cover worth roughly 10-15 times your annual income?",
   conceptQuiz: [
    {
     q: "Why is pure term insurance plus a separate index fund usually preferred over a ULIP?",
     options: [
      { text: "Term gives much higher cover per rupee of premium, and a separate index fund avoids the ULIP's stacked allocation and mortality charges.", correct: true },
      { text: "ULIPs are illegal in India.", misconception: "ULIPs are legal and regulated by IRDAI; the issue is cost transparency, not legality." },
      { text: "Term insurance pays a maturity bonus.", misconception: "Pure term pays nothing on survival; that absence of maturity is precisely what makes premium so low." },
      { text: "Index funds carry no fees.", misconception: "Index funds have low TER (0.05 to 0.25 percent), still non zero, but far below ULIP charges." }
     ],
     why: "The bundled charges inside a ULIP eat returns. Unbundling typically leaves the investor 30 to 50 percent richer after 20 years with the same effective cover."
    },
    {
     q: "Who does NOT strictly need term life insurance?",
     options: [
      { text: "A single adult with no financial dependants and no co signed loans.", correct: true },
      { text: "A parent with a working spouse and two young children.", misconception: "Dependants need income replacement if the earner dies; term cover provides it cheaply." },
      { text: "Anyone earning above 12 lakh.", misconception: "Income level is unrelated to whether dependants exist." },
      { text: "Everyone above age 30.", misconception: "Age does not create the need; financial dependence does." }
     ],
     why: "Insurance is for dependants, not the insured. Without dependants or co signed liabilities, the lump sum death benefit serves no one."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Map your dependants",   d: "Write down who is financially dependent on your income today, and roughly how many years of income they would need replaced.", xp: 10 },
    { level: "easy",     t: "Quote pure term",       d: "Get online quotes from three IRDAI registered insurers (claim settlement ratio above 95 percent) for term cover of 10 to 15 times your annual income.", xp: 20 },
    { level: "advanced", t: "Buy and unbundle",      d: "Buy the term policy, get a 10 to 25 lakh family floater health policy, and if you hold any ULIP or endowment, run the surrender or paid up math and redirect the difference to a low cost index or ELSS SIP. Document the decision in writing.", xp: 40 }
   ]
  },
  {
   t: "Lifestyle inflation",
   subdomain: "fundamentals",
   definition: "Lifestyle inflation is the silent creep where spending rises in lockstep with income, so a bigger salary leaves you with the same savings rate as before.",
   short: "Raises do not make you wealthier if your costs rise the same week.",
   deep: "You get a 30 percent raise. You feel rich for a weekend. Then the better apartment, the nicer car EMI, the upgraded phone plan, the more expensive coffee habit all show up over the next six months, and at the end of the year your savings rate is exactly where it was. This is lifestyle inflation. It is not bad in moderation, you should enjoy some of what you earn. The danger is unconscious creep, where every fixed cost ratchets up and never down. The fix is mechanical: when income rises, raise the automatic savings transfer the same week, before the spending finds it. Lock the percent, then enjoy the rest.",
   generic: "Imagine a river that swells in monsoon. If you build wider banks to match, the river stays inside them. If you do not, it floods. Income is the river. Spending habits are the banks. Lifestyle inflation is what happens when the banks grow at exactly the river's pace and nothing is left for the reservoir.",
   expert: "Behavioural finance literature calls this the hedonic treadmill applied to consumption: subjective satisfaction adapts to the new baseline within months, so the long-run happiness gain from a raise is small while the long-run savings drag is large. Fix by anchoring savings as a percentage of gross, with automatic increases pegged to salary revisions. Indian context: HRA, LTA, and bonus components can be partially routed to investments before they hit the spending account. Mr Money Mustache's writing on this is the canonical popular treatment.",
   status: "settled",
   reflect: "Compared to three years ago, your income is probably higher. Is your savings rate higher by the same percentage, or has spending eaten the gap?",
   conceptQuiz: [
    {
     q: "The cleanest defence against lifestyle inflation is:",
     options: [
      { text: "Trying harder to spend less.", misconception: "Willpower decays. The mechanism, not the intent, is what holds." },
      { text: "Automatically raising the savings percentage the same week a raise arrives.", correct: true },
      { text: "Never accepting a raise.", misconception: "Strange and unnecessary. The raise itself is fine. The unconscious spending of it is the problem." },
      { text: "Switching to cash only.", misconception: "Useful for tracking, but does not address the structural fix of locking the percent." }
     ],
     why: "Move the money before you see it. Spending adjusts to whatever lands in the account."
    },
    {
     q: "Two friends both got 40 percent raises last year. One saved 40 percent of the raise; the other saved 0 percent of it. Over 20 years, the difference is:",
     options: [
      { text: "Negligible because both got the same raise.", misconception: "The raise was the same. What they did with it was not. Compounding amplifies that gap massively." },
      { text: "Significant: the saver builds a substantially larger nest egg with no extra effort.", correct: true },
      { text: "Negative for the saver, because they enjoyed less.", misconception: "Subjective utility is real but not what the question measures. Financially, the saver wins clearly." },
      { text: "The same because lifestyle equalises everyone.", misconception: "Lifestyle inflation is a tendency, not a law. Anyone can opt out by locking the percent." }
     ],
     why: "A raise that is saved compounds for decades. A raise that is spent is gone within months, with only a new baseline of fixed costs to show for it."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Compare two years",        d: "Pull your monthly expenses from two years ago vs today. Note which fixed costs have ratcheted up and which have not.", xp: 10 },
    { level: "easy",     t: "Pre-commit the next raise", d: "Write down, today, what percentage of your next raise will go straight into investments. Set the automation now, before the raise lands.", xp: 20 },
    { level: "advanced", t: "Cut one creeping cost",    d: "Identify one fixed cost that crept up in the last two years without adding real value. Cut or downgrade it, and redirect the difference to a SIP for at least six months.", xp: 40 }
   ]
  },
  {
   t: "Tax-advantaged accounts in India (PPF, NPS, ELSS)",
   subdomain: "products",
   fullForm: "Public Provident Fund, National Pension System, Equity Linked Savings Scheme",
   definition: "Government-backed accounts that reduce your tax bill today, grow tax-free or tax-deferred, and have specific lock-ins, used to compound long-term savings more efficiently than a regular taxable account.",
   prereqs: ["Spend less than you earn", "Index funds beat picking"],
   short: "Three Indian wrappers that let your savings compound with less tax drag.",
   deep: "Imagine two identical investments, same return, same time. One pays tax every year on its gains. The other does not. The second one ends up dramatically larger after 20 years. That is the point of tax-advantaged accounts. In India, the big three for individuals are PPF (a 15 year government-backed fixed-income account with tax-free interest and Section 80C deduction), NPS (a low-cost retirement account with extra 80CCD(1B) deduction up to 50,000 rupees, locked until 60), and ELSS (equity mutual funds with the shortest 80C lock-in of 3 years and full equity upside). Most beginners should fill 80C with a mix of ELSS and PPF before touching plain taxable investing, and add NPS for the extra 50,000 deduction if the lock-in is acceptable.",
   generic: "Think of three different envelopes the government hands you. Each says, put your savings inside me and we will charge less tax. They have different rules about when you can open them again and what they can hold inside. Using the envelopes before plain pockets is one of the easiest legal upgrades to your savings.",
   expert: "PPF: 15 year lock-in, EEE tax status, rate around 7 percent annual (reset quarterly), 1.5 lakh annual cap shared under 80C. NPS: Tier 1 locked until 60 with annuitisation rules, 80C eligible plus extra 50,000 under 80CCD(1B), low expense ratios (under 0.1 percent), choice of equity/corporate/government bond allocation. ELSS: 3 year lock-in (shortest among 80C), equity exposure, gains taxed as LTCG above 1.25 lakh per year. Rules and limits change with each Union Budget, verify current year before acting. The new tax regime removes many 80C benefits, so the optimal mix depends on which regime you opt for.",
   status: "framework",
   reflect: "Which tax regime did you file under last year, and did you use the 80C and 80CCD(1B) limits fully under the regime that allowed them?",
   conceptQuiz: [
    {
     q: "Which of these has the shortest lock-in among 80C investments?",
     options: [
      { text: "PPF.", misconception: "PPF has a 15 year lock-in with limited partial withdrawals. The longest of the three." },
      { text: "ELSS.", correct: true },
      { text: "NPS Tier 1.", misconception: "NPS Tier 1 is locked until age 60 with annuitisation requirements. Effectively the longest practical lock-in." },
      { text: "Tax-saving FD.", misconception: "Tax-saving FDs have a 5 year lock-in, longer than ELSS." }
     ],
     why: "ELSS funds have a 3 year lock-in, the shortest in the 80C basket, while offering equity returns."
    },
    {
     q: "Why is filling tax-advantaged accounts often a better first move than a taxable index fund?",
     options: [
      { text: "Because taxable funds always lose money.", misconception: "Not true. They can earn well; they just lose more to tax over time." },
      { text: "Because lower tax drag means more of the return compounds for you.", correct: true },
      { text: "Because tax-advantaged accounts are government-guaranteed to outperform.", misconception: "Returns are not guaranteed. ELSS rises and falls with the market. The advantage is the tax wrapper, not a return guarantee." },
      { text: "Because they have no fees.", misconception: "They have fees too. NPS is among the cheapest in the world, but PPF and ELSS still have costs or opportunity costs." }
     ],
     why: "Tax saved on the way in plus tax not owed on the way out leaves more capital working for you. Compounded over decades, the effect is large."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Check your regime",   d: "Find out which tax regime (old or new) you filed under last year and what deductions you actually claimed.", xp: 10 },
    { level: "easy",     t: "Open one wrapper",    d: "If you do not have one already and the old regime suits you, open a PPF account or start a small ELSS SIP this month, the minimum amount is enough.", xp: 20 },
    { level: "advanced", t: "Build a 12 month plan", d: "Write a one page plan for the year: how much you will route through PPF, ELSS, and NPS to use 80C and 80CCD(1B) fully, given your regime and lock-in tolerance. Automate the contributions.", xp: 40 }
   ]
  },
  {
   t: "Term insurance vs ULIP trap",
   subdomain: "products",
   fullForm: "Unit Linked Insurance Plan (ULIP)",
   definition: "Buy pure life cover (term insurance) and invest separately in low cost mutual funds, rather than buying a bundled product (ULIP, endowment, money back) that hides charges inside an insurance wrapper.",
   short: "Insurance is insurance, investing is investing. Mixing them is how banks get rich, not you.",
   deep: "Walk into any Indian bank and the relationship manager will pitch you a ULIP or endowment plan, dressed up as a smart combination of insurance plus investment. The maths is brutal once you unbundle it. A 30 year old non smoker can buy 1 crore of pure term cover for around 12,000 to 15,000 rupees a year. The same person paying 1 lakh a year into a ULIP gets perhaps 10 to 15 lakh of cover plus an investment component eaten by allocation charges, fund management charges, mortality charges, and policy admin charges that easily total 4 to 6 percent in early years. Bogle warned globally; Subramoney repeats the Indian version: separate the two. Buy pure term insurance equal to 10 to 15 times your annual income. Invest the rest in a low cost index fund or ELSS. After 20 years the unbundled version typically leaves you 30 to 50 percent richer with the same cover.",
   generic: "Like buying a combined washing machine plus refrigerator. The salesman swears it is more efficient, but each function is worse than a dedicated appliance and the repair costs are higher. Two separate boxes, each doing one job well, almost always wins.",
   expert: "ULIPs carry premium allocation charges (up to 6 percent in year 1), policy admin charges, fund management charges (up to 1.35 percent), and mortality charges deducted as units. IRDAI capped some charges post 2010 but the bundling still hides total cost. Term insurance is pure mortality risk, no investment component; for a healthy 30 year old, 1 crore cover is typically 8,000 to 15,000 INR per year. Section 80C covers both, but the new tax regime under Budget 2025 26 with the 7 lakh zero tax bucket and 75,000 standard deduction has reduced the 80C lure. For most earners, term plus ELSS or index fund dominates ULIP on both return and flexibility.",
   status: "settled",
   reflect: "If anyone is financially dependent on you, do you have 10 to 15 times your annual income in pure term cover, and is your investing happening in a separate vehicle?",
   conceptQuiz: [
    {
     q: "Why does separating term insurance from investment usually beat a ULIP?",
     options: [
      { text: "Bundled products hide allocation and mortality charges that compound against returns.", correct: true },
      { text: "Term insurance pays a higher death benefit than ULIPs.", misconception: "For the same premium, term cover is much higher, but the point is cost transparency on the investment side." },
      { text: "ULIPs are illegal.", misconception: "They are legal and regulated by IRDAI, just expensive." },
      { text: "Mutual funds are tax free.", misconception: "Equity funds pay LTCG above 1.25 lakh per year." }
     ],
     why: "The charges inside a ULIP eat returns in a way a plain index fund or ELSS plus separate term plan does not."
    },
    {
     q: "A healthy 30 year old earning 12 lakh a year needs roughly how much pure term cover?",
     options: [
      { text: "Around 1.2 to 1.8 crore (10 to 15 times income).", correct: true },
      { text: "Around 5 lakh.", misconception: "Far too low to replace lost income for dependents." },
      { text: "Around 10 crore.", misconception: "Excess cover wastes premium without proportionate benefit." },
      { text: "Zero, since they are healthy.", misconception: "Insurance is for the dependents, not the insured. Health does not remove the need." }
     ],
     why: "10 to 15 times annual income is the standard rule of thumb to replace earning capacity for dependents."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit your policies", d: "List every life insurance and ULIP policy you hold, with annual premium, sum assured, and surrender value.", xp: 10 },
    { level: "easy", t: "Quote pure term", d: "Get pure term insurance quotes for 1 crore cover from three insurers using PolicyBazaar or directly.", xp: 20 },
    { level: "advanced", t: "Unbundle and redirect", d: "If you hold a ULIP, run the maths on surrendering or making it paid up, buying pure term, and redirecting the difference to an index fund or ELSS SIP. Document the decision.", xp: 40 }
   ]
  },
  {
   t: "Liquid and arbitrage funds",
   subdomain: "products",
   definition: "Low volatility Indian mutual fund categories used as parking spots for emergency cash or short term goals, with tax treatment that often beats a bank savings account or short FD.",
   short: "Boring funds that hold short paper or hedged equity, useful as a smarter cash bucket.",
   deep: "A bank savings account in India pays around 3 to 4 percent and is fully taxed at slab. A liquid fund holds money market instruments maturing under 91 days and historically delivers close to 6 to 7 percent with same day or T plus 1 liquidity. Arbitrage funds hedge equity by going long cash and short futures, capturing a small spread that has averaged 5 to 7 percent annually. Both are useful slots for an emergency fund or a goal due in 1 to 3 years. The tax angle changed in 2024: debt mutual funds bought after April 2023 are taxed at slab rates without indexation, so the old advantage shrank, but arbitrage funds still get equity tax treatment (20 percent STCG, 12.5 percent LTCG above 1.25 lakh per Budget 2024). Under the new tax regime in Budget 2025 26, the rebate threshold was raised to 12 lakh and the standard deduction to 75,000, so small investors with income below 12.75 lakh are close to tax neutral, and the choice between liquid and arbitrage is mainly about liquidity and stability, not yield optimisation.",
   generic: "Like keeping your spare cash in a sealed jar instead of a leaky tin. Both are within reach, but one quietly grows and the other quietly shrinks. The jar is not exciting, it just does its boring job better than the tin.",
   expert: "Liquid funds: avg maturity under 91 days, regulated by SEBI as low duration, low credit risk; mark to market accounting since 2019. Post April 2023, debt funds (including liquid) lose indexation; gains taxed at slab. Arbitrage funds: classified as equity for tax (20 percent STCG and 12.5 percent LTCG above 1.25 lakh per Budget 2024), structurally hedged so beta to equity is near zero. Yields track repo and short money market rates. Budget 2025 26 raised the rebate threshold to 12 lakh and kept the 75,000 standard deduction in the new regime. For emergency funds, split between sweep FD and liquid fund; for 1 to 3 year goals, arbitrage funds dominate on a post tax basis above the 12 lakh income line.",
   status: "framework",
   reflect: "Where is your emergency fund parked right now? What is its post tax yield versus a liquid or arbitrage fund?",
   conceptQuiz: [
    {
     q: "Why might an arbitrage fund beat a liquid fund on a post tax basis for someone in the 20 to 30 percent slab?",
     options: [
      { text: "Arbitrage funds get equity tax treatment, while liquid funds are taxed at slab after April 2023.", correct: true },
      { text: "Arbitrage funds always earn double the return.", misconception: "Returns are similar; the tax wrapper is the edge." },
      { text: "Liquid funds are riskier.", misconception: "Both are low risk; the difference is mostly tax." },
      { text: "Arbitrage funds are government guaranteed.", misconception: "Neither has a sovereign guarantee." }
     ],
     why: "Equity classification gives arbitrage funds 12.5 percent LTCG above 1.25 lakh, often beating slab taxation on liquid funds."
    },
    {
     q: "Which is the best home for a 6 month emergency fund for a salaried Indian earner?",
     options: [
      { text: "A liquid fund or sweep FD, optimised for T plus 1 access not yield.", correct: true },
      { text: "A small cap equity fund for higher long term return.", misconception: "Equity drawdowns hit hardest when you need the buffer." },
      { text: "Cryptocurrency.", misconception: "Volatile and illiquid in stress; the opposite of an emergency fund." },
      { text: "A 5 year tax saving FD.", misconception: "Locked in for 5 years; cannot be accessed for emergencies." }
     ],
     why: "Liquidity and stability beat yield for an emergency fund; liquid funds and sweep FDs give both."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Find the post tax yield", d: "Look up the 1 year return of a top rated liquid fund and your savings account interest. Compute post tax yield for both at your slab.", xp: 10 },
    { level: "easy", t: "Open one liquid fund", d: "Start a small SIP or lump sum into a low expense liquid fund (Parag Parikh, ICICI, HDFC) used as your emergency parking spot.", xp: 20 },
    { level: "advanced", t: "Split the buffer", d: "Restructure your emergency fund as 1 month in sweep FD plus 2 to 5 months in a liquid or arbitrage fund, and document the post tax yield improvement.", xp: 40 }
   ]
  },
  {
   t: "NPS asset allocation",
   subdomain: "products",
   fullForm: "National Pension System (NPS)",
   definition: "Actively choosing the split between Equity (E), Corporate Debt (C), and Government Securities (G) inside the NPS, rather than defaulting to the auto choice glide path.",
   short: "Inside NPS you can dial up Equity, Corporate Debt, and Government Securities. The default is conservative for most working age earners.",
   deep: "NPS Tier 1 lets you pick Active Choice across three asset classes: Equity (E, capped at 75 percent until age 50, then tapering), Corporate Debt (C), and Government Securities (G). The Auto Choice default starts at moderate equity and reduces it sharply with age, which suits the regulator more than the saver. A 30 year old with a 30 year horizon usually wants close to the 75 percent E cap, with the balance split between C and G. The fees are stunning: NPS expense ratios are under 0.1 percent, among the cheapest pension products in the world. Pair this with the 50,000 additional 80CCD(1B) deduction (still available even within the new tax regime for employer contributions under 80CCD(2)) and NPS becomes one of the most efficient retirement vehicles available. The trade off is rigidity: 40 percent of the corpus must be annuitised at 60, which locks in current annuity rates and limits flexibility.",
   generic: "Like choosing the seasoning on a meal that the canteen will cook for you for 30 years. The default is bland and safe. You are allowed to ask for more spice when you are young and tone it down as you age, but only if you actually ask.",
   expert: "PFRDA rules: Active Choice allows E up to 75 percent (cap reduces 2.5 percent annually after 50 to 50 percent at 60); C and G unrestricted. Auto Choice glide paths: Aggressive (LC75), Moderate (LC50), Conservative (LC25). Expense ratio capped at 0.09 percent. Section 80C up to 1.5 lakh plus 80CCD(1B) extra 50,000; 80CCD(2) for employer contribution up to 10 percent of basic + DA (14 percent for govt) is available even under the new tax regime. At 60: 60 percent lump sum tax free, 40 percent mandatory annuity (taxable in retirement). Active Choice typically dominates Auto Choice for 25 to 45 year olds on total expected corpus, with the trade off being more equity volatility en route.",
   status: "framework",
   reflect: "If you have an NPS account, are you on Active or Auto choice, and what is your current E,C,G split? Does it match your horizon?",
   conceptQuiz: [
    {
     q: "What is the equity cap under Active Choice in NPS for an investor under 50?",
     options: [
      { text: "75 percent.", correct: true },
      { text: "100 percent.", misconception: "PFRDA caps equity at 75 percent to ensure some diversification." },
      { text: "50 percent.", misconception: "That is closer to the Moderate Auto Choice (LC50) glide path." },
      { text: "25 percent.", misconception: "That is the Conservative Auto Choice (LC25) starting point." }
     ],
     why: "Active Choice lets equity go up to 75 percent until age 50, then tapers."
    },
    {
     q: "Why might a 32 year old prefer Active Choice over Auto Choice in NPS?",
     options: [
      { text: "Auto Choice reduces equity faster than a 30 year horizon needs.", correct: true },
      { text: "Active Choice has lower fees.", misconception: "Fees are the same across Active and Auto Choice." },
      { text: "Active Choice gives a government guaranteed return.", misconception: "Returns are market linked in both modes." },
      { text: "Active Choice removes the annuity requirement.", misconception: "The 40 percent annuitisation rule applies regardless of choice mode." }
     ],
     why: "Long horizons reward higher equity exposure; Active Choice lets you stay near the 75 percent cap longer."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Find your current split", d: "Log into your NPS account (CRA portal) and note your current Active or Auto choice and E,C,G percentages.", xp: 10 },
    { level: "easy", t: "Switch one allocation", d: "If you are under 45 and on Auto Choice Moderate or Conservative, evaluate switching to Active Choice with 70 to 75 percent E, and document why.", xp: 20 },
    { level: "advanced", t: "Plan to 60", d: "Project your NPS corpus to age 60 at your current contribution and allocation, then re project with a 5 percent higher equity allocation. Compare and decide.", xp: 40 }
   ]
  },
  {
   t: "Term insurance sum assured rule of thumb",
   subdomain: "products",
   definition: "A guideline for how much life cover a term policy should provide, typically 10 to 20 times annual income plus outstanding liabilities.",
   short: "Cover should equal at least 10 to 20 times yearly income plus debts, paid out as tax free lump sum.",
   deep: "If you earn 12 lakh a year and have a 50 lakh home loan, your dependants will need roughly 12 lakh times 15, or 1.8 crore, plus the 50 lakh loan, for a total cover of around 2.3 crore. The logic: the lump sum, if invested at 7 percent post tax, should generate enough to replace your income for 20 plus years while clearing debts. Indian term cover is cheap, a healthy 30 year old non smoker can get 1 crore for around 12,000 a year. Yet 80 percent of working Indians are underinsured because they either bought ULIPs (which mix savings and insurance badly) or relied on employer cover (which dies when the job does). The most common mistake is buying too little because the premium quote feels manageable.",
   generic: "Like having enough fuel to finish the journey, not just to reach the next petrol pump. The cover has to last your family decades, not a few years.",
   expert: "Human Life Value approach (Solomon Huebner). Modified human capital approach discounts future income streams to present value, typically using a 6 to 7 percent real rate. Section 10(10D) of the Income Tax Act exempts death benefit from tax. IRDAI data shows under penetration, life insurance penetration in India was around 3 percent of GDP in 2023, with most cover skewed to investment linked plans rather than pure protection.",
   status: "framework",
   reflect: "If you died tonight, would your sum assured genuinely fund your family for 20 years plus clear all liabilities, or is the number a guess?",
   conceptQuiz: [
    {
     q: "Why is term insurance preferable to ULIPs for protection?",
     options: [
      { text: "Term offers much higher cover per rupee of premium, pure protection without bundled investment.", correct: true },
      { text: "Term policies build cash value over time.", misconception: "Term has no cash value; that is precisely what makes it cheap." },
      { text: "ULIPs are illegal in India.", misconception: "ULIPs are legal and regulated; they are simply inefficient for protection alone." },
      { text: "Term pays a guaranteed return.", misconception: "Term pays nothing if you survive the term; that is the trade off for cheap cover." }
     ],
     why: "Pure protection without bundled investment means premium per crore of cover is a fraction of ULIP cost."
    },
    {
     q: "You earn 15 lakh per year and have a 70 lakh home loan. Your minimum term cover should be roughly...",
     options: [
      { text: "Around 2.5 crore.", correct: true },
      { text: "Around 50 lakh.", misconception: "Less than your loan alone; family would still owe the bank." },
      { text: "Around 5 crore.", misconception: "Possible but well above the 10 to 20 times rule for this income." },
      { text: "Around 15 lakh.", misconception: "One year of income; nowhere near sufficient for 20 plus years of replacement." }
     ],
     why: "15 lakh times 12 to 15, plus the 70 lakh loan, lands around 2.5 to 3 crore as a reasonable target."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Calculate target cover", d: "Compute your target sum assured as 15 times annual income plus all outstanding loans.", xp: 10 },
    { level: "easy", t: "Compare quotes", d: "Get online quotes from at least three insurers (claim settlement ratio above 95 percent) for your target cover and write down the cheapest.", xp: 20 },
    { level: "advanced", t: "Buy and disclose", d: "Buy a term policy matching your target cover, disclose every health condition honestly, and add a riders review (critical illness, accidental death) decision in writing.", xp: 40 }
   ]
  },
  {
   t: "Health insurance basics and India OPD trends",
   subdomain: "products",
   definition: "A medical insurance policy that reimburses or cashlessly pays hospital and increasingly outpatient costs, against an annual premium.",
   short: "Annual premium buys you cashless hospital cover plus, increasingly, outpatient cover.",
   deep: "A single hospitalisation in a tier 1 Indian city can run 5 to 15 lakh; ICU days for serious illness easily cross 25 lakh. A 30 year old in Bengaluru can get 10 lakh family floater cover for roughly 18,000 to 25,000 per year. The traditional Indian health policy covered only inpatient hospitalisation over 24 hours, missing the 70 percent of healthcare spend that happens at OPD, diagnostics, and pharmacy. Since 2023, IRDAI has pushed standardised products and insurers like Niva Bupa, HDFC Ergo, and Star have launched OPD add ons covering teleconsult, lab tests, and outpatient pharmacy. Critical exclusions to read: pre existing disease waiting (typically 2 to 4 years), room rent capping (huge bill shock source), and no claim bonus terms. Buying young matters: premiums rise sharply after 45 and pre existing conditions trigger lifelong loadings.",
   generic: "Like a maintenance contract on a car that covers breakdowns but not service. Newer contracts now also cover routine service, but you pay more for them.",
   expert: "IRDAI's 2023 standardisation introduced the Arogya Sanjeevani and Saral Suraksha policy families with mandated cover features. Ayushman Bharat PMJAY provides 5 lakh family cover for low income households. Private retail health insurance penetration remains under 5 percent of population. Section 80D of the Income Tax Act allows premium deduction up to 25,000 for self and family, plus 50,000 for senior citizen parents.",
   status: "framework",
   reflect: "Does your current health cover account for room rent capping, pre existing disease waiting, and your family's likely medical inflation over the next decade?",
   conceptQuiz: [
    {
     q: "What is the biggest hidden cost in many Indian health policies?",
     options: [
      { text: "Room rent capping that proportionately scales down all other bill items.", correct: true },
      { text: "GST on the premium.", misconception: "GST is a real cost but disclosed up front and small relative to claim deductions." },
      { text: "Mandatory annual medical tests.", misconception: "Most policies do not require annual tests; one off underwriting tests at issue are common." },
      { text: "Free OPD consultations.", misconception: "Free OPD is a feature, not a cost." }
     ],
     why: "If your room costs 8,000 and the cap is 5,000 (50 percent of cap), all associated charges, ICU, surgery, doctor fees, are scaled proportionately, slashing claim payouts."
    },
    {
     q: "Why does buying health insurance young matter?",
     options: [
      { text: "Premiums and exclusions lock in based on health at issue; waiting periods complete before you likely need cover.", correct: true },
      { text: "Young people get free cover.", misconception: "No insurer offers free cover; premiums are just lower." },
      { text: "Indian law mandates cover under 30.", misconception: "There is no such mandate." },
      { text: "Pre existing conditions are ignored after age 30.", misconception: "Pre existing conditions trigger lifetime loadings or exclusions whenever discovered." }
     ],
     why: "Health insurance prices for health risk at issue, and waiting periods need to complete before serious claims; starting late stacks the deck against you."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit your policy", d: "Read your current health policy and write down the sum insured, room rent cap, pre existing waiting period, and co pay clauses.", xp: 10 },
    { level: "easy", t: "Shop floater plans", d: "Get quotes for a 10 to 25 lakh family floater with no room rent capping and OPD add on; compare against your current policy.", xp: 20 },
    { level: "advanced", t: "Build a multi layer cover", d: "Set up a base floater of 10 lakh plus a 50 lakh super top up policy, and document the trigger threshold and claims process.", xp: 40 }
   ]
  },
  {
   t: "50-30-20 rule and its critique",
   subdomain: "fundamentals",
   definition: "A budgeting heuristic that allocates 50 percent of post tax income to needs, 30 percent to wants, and 20 percent to savings and debt repayment.",
   short: "Half on needs, 30 percent on wants, 20 percent on savings and debt; a starting frame, not a law.",
   deep: "Popularised by Elizabeth Warren, the rule gives a quick mental model for someone who has never budgeted. For a Bengaluru software engineer earning 1 lakh take home, that suggests 50,000 for rent, food, transport, EMIs; 30,000 for entertainment, eating out, travel; 20,000 for SIPs and debt prepayment. The critique: in high cost Indian metros, rent alone for a young professional often consumes 35 to 40 percent of income, blowing past the 50 percent needs bucket. The 20 percent savings rate is also too low for someone aiming for early retirement (FIRE target is typically 40 to 60 percent savings rate). For high earners, fixed needs may drop to 25 percent and the savings rate should climb proportionately. Use the rule as a sanity check, not a prescription, and revisit ratios as income grows.",
   generic: "Like a recipe that says one cup flour to half cup water. Works for the standard loaf, but if you are baking a thin flatbread, you adjust. Same with budgets across income levels.",
   expert: "Warren and Tyagi (2005), All Your Worth, the Ultimate Lifetime Money Plan. The rule originated in US middle income context with vastly different housing and healthcare costs. Behavioural finance research (Thaler, mental accounting) supports the value of category buckets for self control, even when the specific ratios are imperfect. FIRE literature (Vicki Robin, Mr Money Mustache) advocates inverting the ratios to 25 to 35 percent needs and 50 plus percent savings for accelerated financial independence.",
   status: "debated",
   reflect: "What percentage of your take home actually goes to savings each month, and how does that compare to the goal you have set for yourself?",
   conceptQuiz: [
    {
     q: "What is the strongest critique of the 50-30-20 rule for Indian metro earners?",
     options: [
      { text: "Rent and essential costs often exceed 50 percent of take home in tier 1 cities, breaking the needs bucket.", correct: true },
      { text: "The rule is illegal in India.", misconception: "It is a private heuristic, not regulated." },
      { text: "The maths does not add up to 100.", misconception: "50 plus 30 plus 20 equals 100; the issue is calibration, not arithmetic." },
      { text: "Savings should be zero for young people.", misconception: "Starting savings early is one of the highest leverage moves; the rule actually supports this." }
     ],
     why: "In Bengaluru, Mumbai, Delhi, basic rent and essentials often exceed 50 percent, forcing tight wants or savings."
    },
    {
     q: "For someone pursuing FIRE, what savings rate is typically targeted?",
     options: [
      { text: "40 to 60 percent of post tax income.", correct: true },
      { text: "10 to 15 percent.", misconception: "Too low; FIRE math requires high savings rates to retire decades early." },
      { text: "Exactly 20 percent, per Warren's rule.", misconception: "FIRE explicitly pushes well beyond the conventional 20 percent." },
      { text: "100 percent of income.", misconception: "Impossible to live on nothing; the target is high but not absolute." }
     ],
     why: "FIRE practitioners show that retiring 20 plus years early requires consistent savings rates of 40 percent and up."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Compute actual ratios", d: "Over the last 3 months, compute your actual needs, wants, and savings percentages from bank and credit card statements.", xp: 10 },
    { level: "easy", t: "Set personal targets", d: "Based on your goals (FIRE, normal retirement, house down payment), write personal target percentages and pin them on your wall.", xp: 20 },
    { level: "advanced", t: "Engineer the bump", d: "Identify one structural change (move to cheaper rent, switch jobs, cut a subscription stack) that bumps savings rate by 5 percentage points and execute within 60 days.", xp: 40 }
   ]
  },
  {
   t: "Debt avalanche vs snowball",
   subdomain: "debt",
   definition: "Two competing strategies for paying off multiple debts: avalanche prioritises highest interest rate first; snowball prioritises smallest balance first.",
   short: "Avalanche saves more money; snowball gives faster wins. Pick the one you will actually finish.",
   deep: "You have a 2 lakh credit card balance at 42 percent APR, a 5 lakh personal loan at 14 percent, and a 50,000 BNPL at 24 percent. The avalanche method targets the credit card first, mathematically optimal because the highest rate compounds against you fastest. The snowball method targets the 50,000 BNPL first, you clear an account quickly, get a behavioural win, and momentum carries you to the next. Dave Ramsey, who popularised snowball, argues openly that the maths is worse but people actually finish the snowball, whereas avalanche plans get abandoned at month 7 when no debt is closed yet. Honest answer: if you have proven discipline, run avalanche. If your past pattern is starting plans and quitting, run snowball. The behavioural win compounds.",
   generic: "Like cleaning a messy house: the avalanche way says start with the biggest mess first, snowball says clear one small corner so you can see progress. The right answer depends on whether you will keep going.",
   expert: "Gal and McShane (2012) studied snowball behaviour and confirmed that small wins increase persistence. The behavioural mechanism is the goal gradient effect (Hull, Kivetz et al), where progress closer to a sub goal accelerates effort. Avalanche is the mathematically optimal solution but ignores motivation drift. NCDLI data and US household debt repayment studies show snowball drives higher completion rates among lower discipline households.",
   status: "debated",
   reflect: "When you started past financial plans, did you finish them? If not, snowball's behavioural win may matter more for you than avalanche's math.",
   conceptQuiz: [
    {
     q: "Which strategy mathematically minimises total interest paid?",
     options: [
      { text: "Avalanche, paying highest interest rate first.", correct: true },
      { text: "Snowball, paying smallest balance first.", misconception: "Snowball is suboptimal mathematically but better for motivation." },
      { text: "Paying all debts equally.", misconception: "Equal payments waste money on lower rate debts while higher rate debts compound." },
      { text: "Pay only minimums forever.", misconception: "Minimums on high APR debts can compound indefinitely; principal barely moves." }
     ],
     why: "Avalanche targets the highest cost compounding first, minimising lifetime interest paid."
    },
    {
     q: "Why does the snowball method work for many people despite worse math?",
     options: [
      { text: "Closing small accounts creates visible wins that sustain motivation through the plan.", correct: true },
      { text: "Smaller debts have lower interest rates.", misconception: "Balance size is unrelated to rate; the BNPL example shows this." },
      { text: "Tax law favours small debts.", misconception: "No such tax provision exists." },
      { text: "Banks waive smaller debts.", misconception: "Banks do not waive debts based on size." }
     ],
     why: "The behavioural goal gradient effect: visible early wins make people more likely to finish the full plan."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "List every debt", d: "Write down every debt: lender, balance, APR, and minimum payment.", xp: 10 },
    { level: "easy", t: "Pick a method", d: "Choose avalanche or snowball based on your honest track record of finishing plans, and commit it in writing.", xp: 20 },
    { level: "advanced", t: "Execute and track", d: "Set up auto pay for minimums plus surplus to the target debt, and track payoff dates. Recalibrate monthly until first debt is closed.", xp: 40 }
   ]
  },
  {
   t: "Credit card debt math",
   subdomain: "debt",
   definition: "The compounding cost of carrying balances on credit cards, where typical Indian APRs of 36 to 48 percent silently consume household wealth.",
   short: "At 42 percent APR, an unpaid 1 lakh becomes 2 lakh in under 2 years if you only pay minimums.",
   deep: "Indian credit cards advertise interest in percent per month (commonly 3 to 3.6 percent), which translates to 36 to 43 percent annualised. If you carry 1 lakh at 3.5 percent monthly and pay only the 5 percent minimum (5,000), the math goes like this: month 1 interest is 3,500, so only 1,500 of the 5,000 actually reduces principal. At this rate, you would take roughly 5 years to pay it off and total interest paid would exceed 1 lakh. The killer move: never carry a balance past the grace period. If you cannot pay full statement balance, you do not afford the card. For existing balances, transfer to a personal loan at 12 to 16 percent or seek a 0 percent EMI conversion (read the processing fee fine print). RBI data shows credit card outstanding crossed 2.5 lakh crore in 2024; the silent disaster is in revolved balances.",
   generic: "Like running with a backpack full of bricks. Each month you do not put down the bricks, more bricks get added. At some point the pace at which bricks pile on exceeds your speed.",
   expert: "Effective annualised rate (EAR) compounds monthly rates: (1 plus monthly rate) to the 12th, minus 1. A 3.5 percent monthly rate yields EAR around 51 percent. Minimum payment trap: most cards mandate the higher of 5 percent of outstanding or 200 rupees, which guarantees decades of carrying for any meaningful balance. RBI data 2024 shows credit card delinquencies (90 plus days past due) rising in urban India, particularly among under 35s. Section 3 of the RBI Master Direction on Credit Cards mandates disclosure of EAR.",
   status: "settled",
   reflect: "Are you carrying any credit card balance past the grace period? If yes, what is the actual EAR you are paying, and how does it compare to your highest investment return?",
   conceptQuiz: [
    {
     q: "If a credit card charges 3.5 percent per month, what is the rough effective annualised rate?",
     options: [
      { text: "Around 51 percent.", correct: true },
      { text: "Exactly 3.5 percent times 12 equals 42 percent.", misconception: "That is the simple rate; effective rate compounds the monthly cost." },
      { text: "Around 10 percent.", misconception: "Far below the true compounded cost." },
      { text: "Zero, if you pay minimums.", misconception: "Minimums keep you in the trap longer, not free." }
     ],
     why: "Monthly compounding: (1.035 to the 12th) minus 1 ≈ 51 percent annualised."
    },
    {
     q: "What is the safest rule for using credit cards?",
     options: [
      { text: "Pay the full statement balance every month within the grace period.", correct: true },
      { text: "Pay the minimum due always.", misconception: "Minimums trap you in compounding interest, often for years." },
      { text: "Use multiple cards to rotate balances.", misconception: "Rotation does not eliminate the underlying interest cost." },
      { text: "Avoid using cards entirely.", misconception: "Cards used responsibly build credit and offer fraud protection; the issue is revolving." }
     ],
     why: "Within the grace period, no interest accrues; revolving any balance triggers full APR compounding."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Check your statement", d: "Read your latest credit card statement and write down the monthly rate, EAR, and your current balance.", xp: 10 },
    { level: "easy", t: "Build the payoff plan", d: "If you carry a balance, calculate the actual months to payoff at current payment level, and the total interest you will pay.", xp: 20 },
    { level: "advanced", t: "Refinance or convert", d: "If carrying over 50,000, evaluate a personal loan at 14 percent or an EMI conversion (with processing fee) and execute the lower total cost route.", xp: 40 }
   ]
  },
  {
   t: "Estate planning basics (India: will, nominee vs heir)",
   subdomain: "products",
   definition: "The process of arranging how your assets will pass to family on death, through wills, nominations, and joint ownership, in line with Indian succession law.",
   short: "Without a will, Indian succession law (not your wishes) decides who gets what.",
   deep: "The critical Indian gotcha: a nominee on your bank account, mutual fund, or insurance policy is a trustee, not the legal heir. The Supreme Court has held repeatedly (Sarbati Devi vs Usha Devi, 1984) that nominations under most acts are administrative conveniences; the asset still goes to legal heirs as per succession law. The exception is shares under the Companies Act, where Supreme Court rulings (Jayanand Salgaonkar 2016) have wavered but the Securities and Exchange Board has clarified the equity treatment. The fix is simple: write a will. A handwritten will, signed and witnessed by two adults who are not beneficiaries, is legally valid in India and costs nothing. Probate is mandatory only in Mumbai, Kolkata, and Chennai for certain wills. Update your will every major life event: marriage, divorce, child, property purchase, parent death.",
   generic: "Like leaving handwritten instructions for your house keys before a long trip. The note that says give it to Ravi is what actually matters, not the box you wrote on it.",
   expert: "Indian Succession Act 1925 governs intestacy for non Hindus (Hindus, Sikhs, Jains, Buddhists follow Hindu Succession Act 1956). Section 30 of HSA grants testamentary freedom; you can will away self acquired property to anyone. Joint family or ancestral property has restrictions. Probate is mandatory for wills made in or relating to property in Mumbai, Kolkata, Chennai jurisdiction (HC presidency towns). Recent reforms: 2024 SEBI guidelines on nomination claim resolution for deceased investors.",
   status: "settled",
   reflect: "Do you have a written will, or are you assuming nominations on your accounts will sort everything out?",
   conceptQuiz: [
    {
     q: "What is the legal status of a nominee on a bank account in India?",
     options: [
      { text: "Trustee who must transfer the asset to legal heirs under succession law.", correct: true },
      { text: "Absolute owner once the account holder dies.", misconception: "Supreme Court has held nominations do not override succession; nominee is a trustee." },
      { text: "Only valid for tax purposes.", misconception: "Nominations have legal effect, but limited to administrative transfer." },
      { text: "Invalid without notarisation.", misconception: "Standard bank nominations need no notarisation to be valid." }
     ],
     why: "Sarbati Devi vs Usha Devi (1984) and later judgments confirm nominees hold assets in trust for heirs, not as owners."
    },
    {
     q: "What makes a simple Indian will valid?",
     options: [
      { text: "Written, signed by the testator, and witnessed by two adults who are not beneficiaries.", correct: true },
      { text: "Must be on stamp paper of high denomination.", misconception: "Wills require no stamp duty in India." },
      { text: "Must be notarised by a sub registrar.", misconception: "Registration is optional and not required for validity." },
      { text: "Must be on a printed template only.", misconception: "Handwritten wills are equally valid if other formalities are met." }
     ],
     why: "Section 63 of the Indian Succession Act requires writing, signature, and two attesting witnesses."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "List your assets", d: "List every financial and physical asset, account, fund, property, with current approximate value.", xp: 10 },
    { level: "easy", t: "Draft a simple will", d: "Write a one page will distributing your assets, sign it, and have two non beneficiary adults witness it.", xp: 20 },
    { level: "advanced", t: "Build the full estate kit", d: "Combine the will with updated nominations on every account, a power of attorney for medical decisions, and a sealed letter to family with passwords and asset locations.", xp: 40 }
   ]
  }
 ],

 counterView:
  "Two honest things worth flagging. First, Dave Ramsey, wildly popular American finance teacher, preaches the snowball method, no credit cards, kill all debt fast. On paper, his approach is mathematically worse than the avalanche method. But here's the wrinkle: people actually finish the snowball. They quit the avalanche. The behavioural win can be larger than the mathematical loss, so the \"wrong\" answer is sometimes the right one for you. The honest answer is \"it depends on whether you'll actually follow it.\" Second, a lot of \"start a business / flip property / be your own boss / passive income\" advice is survivorship bias. The people who tried the same thing and failed don't write books. Boring index investing is not the most exciting story, but it's the one that's actually worked for most people, most decades, in most markets.",

 capabilities: [
  "Run a one-page monthly budget (income, fixed, variable, savings).",
  "Set up a SIP/automatic transfer that runs on payday without you touching it.",
  "Explain compounding, index funds, and inflation to a friend.",
  "Compare two mutual funds on cost (expense ratio) and benchmark, not last year's return.",
  "Spot a financial product that's bad-insurance-plus-bad-investing in disguise (ULIP, endowment)."
 ],
 cheatsheet: [
  "Spend less than you earn. That's the whole game.",
  "Emergency fund (3-6 months) before investing.",
  "Kill credit-card debt before everything else.",
  "Automate savings on salary day. Live on the residual.",
  "Low-cost index funds for long-term equity. Don't pick stocks until you've maxed the boring stuff.",
  "Term insurance + health insurance, never insurance bundled with investment.",
  "Read the expense ratio. Fees compound against you."
 ],

 roadmap: [
  { rank: "Novice",    focus: "See the money before fixing the money", do: "For 30 days, track every rupee that leaves your account, bank app screenshots, a notebook, whatever you'll actually do. Don't try to cut anything yet. Just look. Open a separate savings account for the future buffer.",                                  milestone: "You can tell me, within ₹2,000, what last month's fixed costs, variable costs, and savings actually were.",     time: "~1 month" },
  { rank: "Apprentice",  focus: "Build a one-month buffer + automate",   do: "Now that you know where the money goes, do two things. One, reach one full month of essential expenses in that separate savings account. Two, set up a standing instruction so the day after salary lands, ₹X moves out before you can touch it.",                     milestone: "Salary day automatically moves money to savings before you even check the balance.",                 time: "~3-6 months" },
  { rank: "Practitioner", focus: "Three months covered + your first SIP",  do: "Extend the buffer to three months of expenses. Start a small SIP into a low-cost broad index fund, even ₹500 counts; the system is the win, not the size. If anyone's financially dependent on you, get a term insurance quote. Get a real health policy.",                 milestone: "Buffer of three months, an automatic SIP that runs without thinking, and basic insurance, all live and untouchable.", time: "~6-12 months" },
  { rank: "Specialist",  focus: "Tune your portfolio, learn your taxes",  do: "Pick an asset allocation (equity vs debt mix) you can defend in writing. Use tax-advantaged options, ELSS, NPS, Section 80C, where they fit your situation. Read the expense ratio of every product you hold. Anything above 1% needs a justification.",                    milestone: "You can explain your allocation and your tax strategy in plain English to a curious friend.",             time: "~1-2 years" },
  { rank: "Expert",    focus: "Goal-by-goal planning, write a will",   do: "Map specific real-life goals, a house down payment, a child's education, retirement, to their time horizons and risk levels, and fund each one separately. Also: actually write a will. Sort your nominees on every account.",                                  milestone: "Each major goal of your life has its own funded plan with a date, an amount, and a portfolio.",            time: "~2-5 years" },
  { rank: "Master",    focus: "Plan toward \"work optional\"",      do: "Do honest FIRE-style projections, how big does the pot need to be for work to become a choice? Get smart on tax efficiency at scale. Add advanced asset classes only if they genuinely fit, not because someone at a dinner party recommended one.",                      milestone: "You can name the year your job becomes optional, with the maths behind it.",                      time: "~5+ years" },
  { rank: "Grandmaster", focus: "Help others; align money with what you care about", do: "Teach the people around you to skip the traps you stepped in. Set up structured giving or community support. Plan your estate so it reflects what you value, not what's convenient.",                                                    milestone: "Your money, your time, and what you actually care about are all pointing in the same direction.",          time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Zerodha Varsity (India-specific)",             what: "Genuinely good, free course on Indian markets, taxes, mutual funds, insurance.",                 url: "https://zerodha.com/varsity/",                      weight: "primary",   verify: false, lastVerified: "2026-06" },
   { name: "Morgan Housel, Collab Fund blog",             what: "Short, behavioural-finance essays from the Psychology of Money author.",                    url: "https://collabfund.com/blog/",                      weight: "primary",   verify: false, lastVerified: "2026-06" },
   { name: "JL Collins, Stock Series",                 what: "Plain-English case for index investing. US-flavoured; math is universal.",                   url: "https://jlcollinsnh.com/stock-series/",                  weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "RBI, Financial Education",                 what: "Official India: banking, lending, scams, regulation.",                             url: "https://www.rbi.org.in/financialeducation/Home.aspx",            weight: "primary",   verify: false, lastVerified: "2026-06" },
   { name: "SEBI, Investor Awareness",                 what: "Regulator's own investor-education materials. Bias-free baseline.",                      url: "https://investor.sebi.gov.in/",                      weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Bogleheads Wiki",                      what: "Community wiki built around John Bogle's philosophy. Deep, practical.",                     url: "https://www.bogleheads.org/wiki/Main_Page",                verify: false, lastVerified: "2026-06" },
   { name: "Investopedia, Personal Finance",              what: "Reference-grade glossary + tutorials.",                                     url: "https://www.investopedia.com/personal-finance-4427760",          verify: false, lastVerified: "2026-06" },
   { name: "Khan Academy, Personal Finance",              what: "Free structured intro for absolute beginners.",                                 url: "https://www.khanacademy.org/college-careers-more/personal-finance",    verify: false, lastVerified: "2026-06" },
   { name: "Money Control, Personal Finance",             what: "Daily India-specific personal-finance reporting + product comparisons.",                     url: "https://www.moneycontrol.com/personal-finance/",              verify: false, lastVerified: "2026-06" },
   { name: "Value Research Online",                   what: "India: mutual fund + tax research. Free articles + premium tools.",                       url: "https://www.valueresearchonline.com/",                   verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Psychology of Money, Morgan Housel",          what: "Why behaviour beats spreadsheets. The single best general personal-finance read.",               url: "https://www.collabfund.com/blog/the-psychology-of-money/",          price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "I Will Teach You to Be Rich, Ramit Sethi",         what: "Actionable system for automating money, paired with permission to spend on what you love.",           url: "https://www.iwillteachyoutoberich.com/",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Simple Path to Wealth, JL Collins",           what: "Father-to-daughter letters explaining the low-cost index path.",                        url: "https://jlcollinsnh.com/the-simple-path-to-wealth/",            price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Let's Talk Money, Monika Halan",              what: "India-specific personal finance fundamentals from a respected author.",                     url: "",                                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Your Money or Your Life, Vicki Robin",           what: "Money as life energy, \"enough\" as a skill. The original FI book.",                      url: "https://yourmoneyoryourlife.com/",                     price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Same as Ever, Morgan Housel",                what: "Behavioural patterns that don't change. Companion to Psychology of Money.",                   url: "https://www.morganhousel.com/",                      price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Total Money Makeover, Dave Ramsey",           what: "Behaviour-first debt elimination. Math-suboptimal, behaviour-strong. (See counter-view.)",            url: "https://www.ramseysolutions.com/store/books/the-total-money-makeover",   price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Millionaire Next Door, Stanley & Danko",        what: "Who actually accumulates wealth and how (US data).",                              url: "",                                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Coffee Can Investing, Saurabh Mukherjea",          what: "India-specific long-term buy-and-hold for quality businesses.",                         url: "",                                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Million Dollar Question, P. V. Subramanyam (Subra)",   what: "India: tax + insurance + investing fundamentals, no-nonsense voice.",                      url: "https://www.subramoney.com/",                       price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "30-day spend log",     d: "Track every rupee out for 30 days. Bucket into Fixed / Variable / Savings. Pick the most surprising line item.",                       xp: 50 },
  { t: "Build a 1-month buffer",  d: "Calculate one month of essential expenses. Open a separate high-interest savings account. Move that much in (over time if needed).",             xp: 60 },
  { t: "Automate one transfer",  d: "Set up a standing instruction or SIP that runs on payday, even ₹500 counts. The mechanism matters more than the amount.",                  xp: 40 },
  { t: "Check expense ratios",   d: "Look up the expense ratio on every mutual fund / ULIP / unit-linked product you hold. List anything above 1.0%.",                       xp: 30 },
  { t: "Compare term life quotes", d: "If anyone is financially dependent on you, get quotes for pure term life cover of 10-15× annual income from 3 insurers.",                    xp: 50 }
 ],
 capstone: {
  t: "One-page personal financial plan", d: "Write a one-page plan: income, fixed costs, savings rate, current buffer, top 3 financial goals + horizons + automated mechanisms feeding each one. Update quarterly.", xp: 200
 },

 quiz: [
  { q: "Before investing in equities, what comes first?",
   options: [
    { text: "Building an emergency fund (3-6 months of expenses).",             correct: true },
    { text: "Picking the year's best-performing stock.",                   misconception: "Investing without a buffer means one shock forces you to sell at the worst moment, that's how losses get locked in." },
    { text: "Buying a house with a mortgage.",                        misconception: "A house is illiquid; it isn't an emergency fund. Tying buffer money up in property defeats the purpose." },
    { text: "Maxing out credit-card limits for points.",                   misconception: "Credit cards revolve at 30-45% annual interest if not cleared monthly, that destroys any rewards instantly." }
   ],
   why: "Without a liquid buffer, market dips become forced sales. Buffer first, invest with what's truly long-term.",
   testOut: true
  },
  { q: "Your credit-card balance carries 36% annualised interest. You also have ₹50,000 you could invest. Best move?",
   options: [
    { text: "Invest the ₹50,000 in stocks for upside.",                    misconception: "No reliable investment beats 36% guaranteed, you'd lose 36% of value before earning any return." },
    { text: "Pay down the card balance first.",                        correct: true },
    { text: "Buy gold for safety.",                              misconception: "Gold's long-term real return doesn't come close to 36%, the card is the better \"investment\" to kill." },
    { text: "Take a personal loan to invest more aggressively.",               misconception: "Borrowing to invest while carrying revolving debt at 36% is the textbook way to compound a hole." }
   ],
   why: "Paying off high-interest debt is a guaranteed return at the debt's rate. At 36%, nothing legal beats it."
  },
  { q: "Why do low expense ratios matter so much over decades?",
   options: [
    { text: "Cheaper funds are always better managed.",                    misconception: "Quality varies, cheap isn't a quality signal. The point is that fees compound, not management." },
    { text: "Fees compound against you the same way returns compound for you.",        correct: true },
    { text: "Fees are tax-deductible.",                            misconception: "Mutual-fund expense ratios aren't separately deductible for retail investors in India." },
    { text: "Active funds beat the index on average.",                    misconception: "The evidence is the opposite over long horizons net of fees." }
   ],
   why: "Over 30 years, the difference between a 0.1% and a 1.5% fee can be 25-30% of your final pot. Same return, vastly different outcome."
  },
  { q: "Which of these is closest to an honest fit for the word \"insurance\"?",
   options: [
    { text: "ULIP, bundled life insurance and investment.",                 misconception: "ULIPs bundle a relatively expensive insurance with a relatively expensive investment. Agents earn commission; you pay both costs." },
    { text: "Endowment policy with guaranteed bonus.",                    misconception: "Endowment plans typically deliver low single-digit returns and have heavy surrender penalties." },
    { text: "Term life policy, pure cover for X years, payout if you die during it.",     correct: true },
    { text: "Whole-life insurance with cash value.",                     misconception: "Bundles two products inefficiently, separate term insurance + a low-cost index fund almost always wins." }
   ],
   why: "Term life is the pure form of insurance, paying for risk transfer, nothing else. Cheap, simple, and exactly what insurance should be."
  },
  { q: "A friend says \"I'll start investing once I earn more.\" The strongest gentle counter is…",
   options: [
    { text: "Income matters more than timing.",                        misconception: "It's the opposite, over a working life, time in market matters more than income level for retail investors." },
    { text: "Starting earlier with small amounts often beats starting later with large ones.", correct: true },
    { text: "They should just buy crypto.",                          misconception: "Adding speculation to procrastination compounds the problem." },
    { text: "Wait for the market to dip.",                          misconception: "Time in market beats timing the market, most attempts to time it miss the largest single-day gains." }
   ],
   why: "Compounding rewards time more than amount. ₹5,000/month starting at 25 beats ₹15,000/month starting at 40 for most reasonable return assumptions."
  }
 ],

 flashcards: [
  { front: "What's the whole game of personal finance?",      back: "Spend less than you earn, save and invest the difference, repeat." },
  { front: "How much emergency fund?",               back: "3-6 months of essential expenses, in a liquid, accessible account, not invested in stocks." },
  { front: "Avalanche vs snowball debt repayment?",         back: "Avalanche = highest rate first (mathematically optimal). Snowball = smallest balance first (motivationally easier). Pick what you'll actually do." },
  { front: "Why automate savings?",                 back: "Willpower is finite; automation isn't. SIPs and standing instructions on salary day make saving the default." },
  { front: "Why prefer low-cost index funds?",            back: "Over long horizons, after fees, most active funds underperform. Index funds keep more of the return in your pocket." },
  { front: "What's the rough cost of inflation in India?",     back: "~5-7% per year. Cash quietly loses purchasing power; long-term savings need to outpace inflation, which mostly means equities." },
  { front: "When is term life insurance the right choice?",     back: "When someone is financially dependent on you. Cheap, pure cover for 10-15× annual income for the years they're dependent." },
  { front: "Why are ULIPs/endowment usually a bad deal?",      back: "They bundle expensive insurance with expensive investment; high commissions are paid out of your money. Term + low-cost mutual fund beats them almost every time." }
 ],
 glossary: [
  { term: "Emergency fund",  def: "3-6 months of essential expenses kept liquid and accessible." },
  { term: "SIP",       def: "Systematic Investment Plan, automatic monthly investment into a mutual fund." },
  { term: "Expense ratio",  def: "Annual % a fund deducts to run itself. Lower = better, all else equal." },
  { term: "Index fund",    def: "Fund that tracks a market index (e.g. Nifty 50). Low fee, no stock-picking." },
  { term: "Term insurance",  def: "Pure life-cover for a fixed term. No payout if you survive, that's the point." },
  { term: "Inflation",    def: "General rise in prices, the silent tax on cash." },
  { term: "Compounding",   def: "Earning returns on past returns. The longer the runway, the bigger the effect." },
  { term: "ELSS",       def: "Equity-Linked Savings Scheme, tax-saving mutual fund under Section 80C in India, with a 3-year lock-in." }
 ],

 safetyNote:
  "Education, not financial advice. Tax rules, regulations and product specifics change, for real money decisions, talk to a SEBI-registered advisor whose incentives don't depend on selling you a product."
};

export default d;
