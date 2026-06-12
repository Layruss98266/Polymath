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
  "Compounding is the closest thing to magic that's actually real , but it only works if you start.",
  "Most financial stress comes from not having a buffer, not from low income. People earning ₹2 lakh a month panic every month if they spend ₹2 lakh.",
  "Credit card debt is the single biggest preventable money leak in most people's lives. 30%+ interest will eat anything you build.",
  "Knowing this stuff protects you from confidently-wrong friends and confidently-selling advisors with a commission to earn."
 ],
 realWorldExample:
  "Two friends, same job, same salary, both 25. They both decide to invest ₹5,000 a month until they're 60. Same index fund, same average return , say 10% a year. The only difference: one buys a fund with a 0.1% fee, the other buys one with a 1.5% fee (his bank's relationship manager recommended it). Forty-five years later, the cheap-fund friend has roughly 25-30% more money. Lakhs of rupees, maybe over a crore. Same effort. Same income. Same idea. Different fee. Fees are a tiny percentage that compounds against you for decades. That's why expense ratios get their own chapter.",

 mentors: [
  { name: "Morgan Housel", for: "behaviour > spreadsheets",           work: "The Psychology of Money (2020)" },
  { name: "JL Collins",   for: "low-cost index investing in plain English",  work: "The Simple Path to Wealth (2016)" },
  { name: "Ramit Sethi",  for: "automating finances + spending on what you love", work: "I Will Teach You to Be Rich (revised 2019)" },
  { name: "Vicki Robin",  for: "money = life energy , \"enough\" is a skill", work: "Your Money or Your Life (2008 ed.)" },
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
  { kind: "bars", title: "Fee drag on a 30-year nest egg", caption: "Same return, different fees , fees compound the wrong way for you.", data: {
   items: [{ label: "0.1% fee", value: 100 }, { label: "0.5% fee", value: 85 }, { label: "1.0% fee", value: 73 }, { label: "1.5% fee", value: 62 }, { label: "2.0% fee", value: 53 }],
   unit: "% of pot left"
  } }
 ],

 synthesis: [
  { concept: "Compounding",     linksTo: "investing",    note: "The same engine drives both. Personal finance feeds it; investing tunes it." },
  { concept: "Anchoring on price", linksTo: "marketing",    note: "Knowing what makes you buy makes you spend less. See Marketing for social proof and anchoring." }
 ],

 subdomains: [
  { id: "fundamentals", name: "Fundamentals" },
  { id: "debt",         name: "Debt and Buffer" },
  { id: "automation",   name: "Automation and Habits" },
  { id: "products",     name: "Products and Protection" }
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
   ]
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
   ]
  },
  { t: "Kill high-interest debt first",             short: "Credit cards and payday loans first, always. Nothing else competes.",                                                                             deep: "An Indian credit card typically charges 30 to 45% a year on whatever you don't pay off in the cycle. No legal investment beats that reliably. So paying down a credit card balance is basically a risk-free 30% return , better than any stock, bond, or fund you'll be pitched. There are two playbooks. The avalanche method says: pay the highest interest rate first (mathematically optimal). The snowball method says: pay the smallest balance first (motivationally easier , you knock one debt out fast, feel a win, keep going). Pick the one you'll actually finish, not the one that looks smarter on paper.",                                                                                 status: "debated",  reflect: "Write down every debt you have with its interest rate. The biggest rate gets attacked first , unless you know you'd quit without an early small win." },
  { t: "Pay yourself first (automate it)",            short: "Move money to savings the day your salary lands. Live on what's left, not the other way around.",                                                               deep: "Willpower runs out. Automation doesn't. People with identical incomes save wildly different amounts depending on one thing: whether the saving happens automatically before they see the money. Set up a standing instruction , the day after salary credits, ₹X gets pulled into a savings account or an investment SIP. You'll adjust your spending to the leftover. If you wait until the end of the month to save \"whatever's left,\" you'll find there's nothing left. There is always nothing left.",                                                                                                                                            status: "settled",  reflect: "What percentage of your last salary moved into savings or investments within two days of it landing? If \"none,\" that's the next 30-minute fix." },
  { t: "Index funds beat picking",                short: "Over long horizons, a cheap fund that tracks the whole market beats most clever ones.",                                                                    deep: "Every year, regulators publish a report (called SPIVA) that compares actively managed mutual funds against simple index funds. The same boring result keeps showing up: over 10 or 20 years, most active funds lose to the index after their fees are taken out. That doesn't mean active managers are stupid. It means the market is hard, fees are high, and \"average\" sounds boring but in practice means \"top quartile.\" For most of your equity allocation, just buy a broad Indian index fund (Nifty 50 or Total Market), keep buying it automatically, and don't touch it. You can have a small portion for active picks if you want the entertainment. The boring part is where the money is made.",                                            status: "settled",  reflect: "Pull up your largest actively managed mutual fund. Compare its 10-year return, after fees, against the Nifty 50 over the same period. Honestly." },
  { t: "Compounding",                      short: "Time × return × consistency. Time matters more than the other two.",                                                                             deep: "A 25-year-old investing ₹5,000 a month at a 10% average return ends up around ₹1.6 crore at 60. A 35-year-old doing the exact same thing ends up around ₹65 lakh , less than half. Same amount, same fund, same returns. Just ten extra years on the front end. The first decade looks tiny on the chart; the last decade is where the curve goes vertical. The single biggest favour you can do your future self is to start now, even if \"now\" means ₹500 a month. Increase the amount later. You can't make up the years.",                                                                                                                             status: "settled",  reflect: "If you'd started investing five years earlier than you did, what would change about today? Don't dwell on it , start now." },
  { t: "Inflation",                       short: "Cash quietly loses 5-7% of its buying power every year in India.",                                                                              deep: "Your grandparents could buy a kilo of arhar dal for a few rupees. Today it's around ₹150. Same dal, way more rupees , that's inflation in everyday clothes. Cash sitting in a low-interest account is shrinking in real terms every year. That's why your emergency fund goes in something liquid that at least keeps pace (a high-interest savings account or a liquid fund), and your long-term savings have to grow faster than inflation, which mostly means equities. \"Safe\" cash that loses 5% of its buying power every year is not actually safe.",                                                                                                               status: "settled",  reflect: "What did a litre of milk cost when you were a kid? What does it cost now? That gap is your real-world inflation lesson." },
  { t: "Insurance: term + health, full stop",          short: "Pure term life (if anyone depends on you) and proper health insurance. Avoid anything that mixes insurance with investment.",                                                 deep: "Real insurance is simple and cheap: a term policy pays your family a chunk of money if you die during a set number of years. If you survive, you get nothing , which sounds bad, but that's exactly what insurance is for. The bundled products (ULIPs, endowment plans, \"return of premium\" policies) take what should be a ₹1,000-a-month problem and turn it into a ₹15,000-a-month one , because they're hiding an expensive investment inside. The agent earns a big commission. You earn a low return. Just buy term life if anyone depends on your income, and a real indemnity health policy. Invest the difference in an index fund.",                                                                         status: "framework", reflect: "Is anyone financially dependent on you? If yes, do you have term life cover worth roughly 10-15 times your annual income?" }
 ],

 counterView:
  "Two honest things worth flagging. First, Dave Ramsey , wildly popular American finance teacher , preaches the snowball method, no credit cards, kill all debt fast. On paper, his approach is mathematically worse than the avalanche method. But here's the wrinkle: people actually finish the snowball. They quit the avalanche. The behavioural win can be larger than the mathematical loss, so the \"wrong\" answer is sometimes the right one for you. The honest answer is \"it depends on whether you'll actually follow it.\" Second, a lot of \"start a business / flip property / be your own boss / passive income\" advice is survivorship bias. The people who tried the same thing and failed don't write books. Boring index investing is not the most exciting story, but it's the one that's actually worked for most people, most decades, in most markets.",

 capabilities: [
  "Run a one-page monthly budget (income, fixed, variable, savings).",
  "Set up a SIP/automatic transfer that runs on payday without you touching it.",
  "Explain compounding, index funds, and inflation to a friend.",
  "Compare two mutual funds on cost (expense ratio) and benchmark , not last year's return.",
  "Spot a financial product that's bad-insurance-plus-bad-investing in disguise (ULIP, endowment)."
 ],
 cheatsheet: [
  "Spend less than you earn. That's the whole game.",
  "Emergency fund (3-6 months) before investing.",
  "Kill credit-card debt before everything else.",
  "Automate savings on salary day. Live on the residual.",
  "Low-cost index funds for long-term equity. Don't pick stocks until you've maxed the boring stuff.",
  "Term insurance + health insurance , never insurance bundled with investment.",
  "Read the expense ratio. Fees compound against you."
 ],

 roadmap: [
  { rank: "Novice",    focus: "See the money before fixing the money", do: "For 30 days, track every rupee that leaves your account , bank app screenshots, a notebook, whatever you'll actually do. Don't try to cut anything yet. Just look. Open a separate savings account for the future buffer.",                                  milestone: "You can tell me, within ₹2,000, what last month's fixed costs, variable costs, and savings actually were.",     time: "~1 month" },
  { rank: "Apprentice",  focus: "Build a one-month buffer + automate",   do: "Now that you know where the money goes, do two things. One , reach one full month of essential expenses in that separate savings account. Two , set up a standing instruction so the day after salary lands, ₹X moves out before you can touch it.",                     milestone: "Salary day automatically moves money to savings before you even check the balance.",                 time: "~3-6 months" },
  { rank: "Practitioner", focus: "Three months covered + your first SIP",  do: "Extend the buffer to three months of expenses. Start a small SIP into a low-cost broad index fund , even ₹500 counts; the system is the win, not the size. If anyone's financially dependent on you, get a term insurance quote. Get a real health policy.",                 milestone: "Buffer of three months, an automatic SIP that runs without thinking, and basic insurance , all live and untouchable.", time: "~6-12 months" },
  { rank: "Specialist",  focus: "Tune your portfolio, learn your taxes",  do: "Pick an asset allocation (equity vs debt mix) you can defend in writing. Use tax-advantaged options , ELSS, NPS, Section 80C , where they fit your situation. Read the expense ratio of every product you hold. Anything above 1% needs a justification.",                    milestone: "You can explain your allocation and your tax strategy in plain English to a curious friend.",             time: "~1-2 years" },
  { rank: "Expert",    focus: "Goal-by-goal planning, write a will",   do: "Map specific real-life goals , a house down payment, a child's education, retirement , to their time horizons and risk levels, and fund each one separately. Also: actually write a will. Sort your nominees on every account.",                                  milestone: "Each major goal of your life has its own funded plan with a date, an amount, and a portfolio.",            time: "~2-5 years" },
  { rank: "Master",    focus: "Plan toward \"work optional\"",      do: "Do honest FIRE-style projections , how big does the pot need to be for work to become a choice? Get smart on tax efficiency at scale. Add advanced asset classes only if they genuinely fit, not because someone at a dinner party recommended one.",                      milestone: "You can name the year your job becomes optional, with the maths behind it.",                      time: "~5+ years" },
  { rank: "Grandmaster", focus: "Help others; align money with what you care about", do: "Teach the people around you to skip the traps you stepped in. Set up structured giving or community support. Plan your estate so it reflects what you value, not what's convenient.",                                                    milestone: "Your money, your time, and what you actually care about are all pointing in the same direction.",          time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Zerodha Varsity (India-specific)",             what: "Genuinely good, free course on Indian markets, taxes, mutual funds, insurance.",                 url: "https://zerodha.com/varsity/",                      verify: false, lastVerified: "2026-06" },
   { name: "Morgan Housel , Collab Fund blog",             what: "Short, behavioural-finance essays from the Psychology of Money author.",                    url: "https://collabfund.com/blog/",                      verify: false, lastVerified: "2026-06" },
   { name: "JL Collins , Stock Series",                 what: "Plain-English case for index investing. US-flavoured; math is universal.",                   url: "https://jlcollinsnh.com/stock-series/",                  verify: false, lastVerified: "2026-06" },
   { name: "RBI , Financial Education",                 what: "Official India: banking, lending, scams, regulation.",                             url: "https://www.rbi.org.in/financialeducation/Home.aspx",            verify: true, lastVerified: "2026-06" },
   { name: "SEBI , Investor Awareness",                 what: "Regulator's own investor-education materials. Bias-free baseline.",                      url: "https://investor.sebi.gov.in/",                      verify: false, lastVerified: "2026-06" },
   { name: "Bogleheads Wiki",                      what: "Community wiki built around John Bogle's philosophy. Deep, practical.",                     url: "https://www.bogleheads.org/wiki/Main_Page",                verify: false, lastVerified: "2026-06" },
   { name: "Investopedia , Personal Finance",              what: "Reference-grade glossary + tutorials.",                                     url: "https://www.investopedia.com/personal-finance-4427760",          verify: false, lastVerified: "2026-06" },
   { name: "Khan Academy , Personal Finance",              what: "Free structured intro for absolute beginners.",                                 url: "https://www.khanacademy.org/college-careers-more/personal-finance",    verify: false, lastVerified: "2026-06" },
   { name: "Money Control , Personal Finance",             what: "Daily India-specific personal-finance reporting + product comparisons.",                     url: "https://www.moneycontrol.com/personal-finance/",              verify: false, lastVerified: "2026-06" },
   { name: "Value Research Online",                   what: "India: mutual fund + tax research. Free articles + premium tools.",                       url: "https://www.valueresearchonline.com/",                   verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Psychology of Money , Morgan Housel",          what: "Why behaviour beats spreadsheets. The single best general personal-finance read.",               url: "https://www.morganhousel.com/the-psychology-of-money/",          price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "I Will Teach You to Be Rich , Ramit Sethi",         what: "Actionable system for automating money, paired with permission to spend on what you love.",           url: "https://www.iwillteachyoutoberich.com/",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Simple Path to Wealth , JL Collins",           what: "Father-to-daughter letters explaining the low-cost index path.",                        url: "https://jlcollinsnh.com/the-simple-path-to-wealth/",            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Let's Talk Money , Monika Halan",              what: "India-specific personal finance fundamentals from a respected author.",                     url: "",                                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Your Money or Your Life , Vicki Robin",           what: "Money as life energy , \"enough\" as a skill. The original FI book.",                      url: "https://yourmoneyoryourlife.com/",                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Same as Ever , Morgan Housel",                what: "Behavioural patterns that don't change. Companion to Psychology of Money.",                   url: "https://www.morganhousel.com/",                      price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Total Money Makeover , Dave Ramsey",           what: "Behaviour-first debt elimination. Math-suboptimal, behaviour-strong. (See counter-view.)",            url: "https://www.ramseysolutions.com/store/books/the-total-money-makeover",   price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Millionaire Next Door , Stanley & Danko",        what: "Who actually accumulates wealth and how (US data).",                              url: "",                                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Coffee Can Investing , Saurabh Mukherjea",          what: "India-specific long-term buy-and-hold for quality businesses.",                         url: "",                                     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Million Dollar Question , P. V. Subramanyam (Subra)",   what: "India: tax + insurance + investing fundamentals, no-nonsense voice.",                      url: "https://www.subramoney.com/",                       price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "30-day spend log",     d: "Track every rupee out for 30 days. Bucket into Fixed / Variable / Savings. Pick the most surprising line item.",                       xp: 50 },
  { t: "Build a 1-month buffer",  d: "Calculate one month of essential expenses. Open a separate high-interest savings account. Move that much in (over time if needed).",             xp: 60 },
  { t: "Automate one transfer",  d: "Set up a standing instruction or SIP that runs on payday , even ₹500 counts. The mechanism matters more than the amount.",                  xp: 40 },
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
    { text: "Picking the year's best-performing stock.",                   misconception: "Investing without a buffer means one shock forces you to sell at the worst moment , that's how losses get locked in." },
    { text: "Buying a house with a mortgage.",                        misconception: "A house is illiquid; it isn't an emergency fund. Tying buffer money up in property defeats the purpose." },
    { text: "Maxing out credit-card limits for points.",                   misconception: "Credit cards revolve at 30-45% annual interest if not cleared monthly , that destroys any rewards instantly." }
   ],
   why: "Without a liquid buffer, market dips become forced sales. Buffer first, invest with what's truly long-term.",
   testOut: true
  },
  { q: "Your credit-card balance carries 36% annualised interest. You also have ₹50,000 you could invest. Best move?",
   options: [
    { text: "Invest the ₹50,000 in stocks for upside.",                    misconception: "No reliable investment beats 36% guaranteed , you'd lose 36% of value before earning any return." },
    { text: "Pay down the card balance first.",                        correct: true },
    { text: "Buy gold for safety.",                              misconception: "Gold's long-term real return doesn't come close to 36% , the card is the better \"investment\" to kill." },
    { text: "Take a personal loan to invest more aggressively.",               misconception: "Borrowing to invest while carrying revolving debt at 36% is the textbook way to compound a hole." }
   ],
   why: "Paying off high-interest debt is a guaranteed return at the debt's rate. At 36%, nothing legal beats it."
  },
  { q: "Why do low expense ratios matter so much over decades?",
   options: [
    { text: "Cheaper funds are always better managed.",                    misconception: "Quality varies , cheap isn't a quality signal. The point is that fees compound, not management." },
    { text: "Fees compound against you the same way returns compound for you.",        correct: true },
    { text: "Fees are tax-deductible.",                            misconception: "Mutual-fund expense ratios aren't separately deductible for retail investors in India." },
    { text: "Active funds beat the index on average.",                    misconception: "The evidence is the opposite over long horizons net of fees." }
   ],
   why: "Over 30 years, the difference between a 0.1% and a 1.5% fee can be 25-30% of your final pot. Same return, vastly different outcome."
  },
  { q: "Which of these is closest to an honest fit for the word \"insurance\"?",
   options: [
    { text: "ULIP , bundled life insurance and investment.",                 misconception: "ULIPs bundle a relatively expensive insurance with a relatively expensive investment. Agents earn commission; you pay both costs." },
    { text: "Endowment policy with guaranteed bonus.",                    misconception: "Endowment plans typically deliver low single-digit returns and have heavy surrender penalties." },
    { text: "Term life policy , pure cover for X years, payout if you die during it.",     correct: true },
    { text: "Whole-life insurance with cash value.",                     misconception: "Bundles two products inefficiently , separate term insurance + a low-cost index fund almost always wins." }
   ],
   why: "Term life is the pure form of insurance , paying for risk transfer, nothing else. Cheap, simple, and exactly what insurance should be."
  },
  { q: "A friend says \"I'll start investing once I earn more.\" The strongest gentle counter is…",
   options: [
    { text: "Income matters more than timing.",                        misconception: "It's the opposite , over a working life, time in market matters more than income level for retail investors." },
    { text: "Starting earlier with small amounts often beats starting later with large ones.", correct: true },
    { text: "They should just buy crypto.",                          misconception: "Adding speculation to procrastination compounds the problem." },
    { text: "Wait for the market to dip.",                          misconception: "Time in market beats timing the market , most attempts to time it miss the largest single-day gains." }
   ],
   why: "Compounding rewards time more than amount. ₹5,000/month starting at 25 beats ₹15,000/month starting at 40 for most reasonable return assumptions."
  }
 ],

 flashcards: [
  { front: "What's the whole game of personal finance?",      back: "Spend less than you earn, save and invest the difference, repeat." },
  { front: "How much emergency fund?",               back: "3-6 months of essential expenses, in a liquid, accessible account , not invested in stocks." },
  { front: "Avalanche vs snowball debt repayment?",         back: "Avalanche = highest rate first (mathematically optimal). Snowball = smallest balance first (motivationally easier). Pick what you'll actually do." },
  { front: "Why automate savings?",                 back: "Willpower is finite; automation isn't. SIPs and standing instructions on salary day make saving the default." },
  { front: "Why prefer low-cost index funds?",            back: "Over long horizons, after fees, most active funds underperform. Index funds keep more of the return in your pocket." },
  { front: "What's the rough cost of inflation in India?",     back: "~5-7% per year. Cash quietly loses purchasing power; long-term savings need to outpace inflation, which mostly means equities." },
  { front: "When is term life insurance the right choice?",     back: "When someone is financially dependent on you. Cheap, pure cover for 10-15× annual income for the years they're dependent." },
  { front: "Why are ULIPs/endowment usually a bad deal?",      back: "They bundle expensive insurance with expensive investment; high commissions are paid out of your money. Term + low-cost mutual fund beats them almost every time." }
 ],
 glossary: [
  { term: "Emergency fund",  def: "3-6 months of essential expenses kept liquid and accessible." },
  { term: "SIP",       def: "Systematic Investment Plan , automatic monthly investment into a mutual fund." },
  { term: "Expense ratio",  def: "Annual % a fund deducts to run itself. Lower = better, all else equal." },
  { term: "Index fund",    def: "Fund that tracks a market index (e.g. Nifty 50). Low fee, no stock-picking." },
  { term: "Term insurance",  def: "Pure life-cover for a fixed term. No payout if you survive , that's the point." },
  { term: "Inflation",    def: "General rise in prices , the silent tax on cash." },
  { term: "Compounding",   def: "Earning returns on past returns. The longer the runway, the bigger the effect." },
  { term: "ELSS",       def: "Equity-Linked Savings Scheme , tax-saving mutual fund under Section 80C in India, with a 3-year lock-in." }
 ],

 safetyNote:
  "Education, not financial advice. Tax rules, regulations and product specifics change , for real money decisions, talk to a SEBI-registered advisor whose incentives don't depend on selling you a product."
};

export default d;
