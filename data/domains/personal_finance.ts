import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "personal_finance",
  icon: "💰",
  hue: "#facc15",
  category: "Money & Work",
  name: "Personal Finance",
  tagline: "Spend less than you earn, invest the rest",

  basics:
    "Personal finance is a small set of unglamorous habits — track what comes in and out, avoid high-interest debt, keep an emergency buffer, automate investing into low-cost index funds, and protect yourself with insurance. Almost everyone overestimates how clever they need to be. Most of the work is mechanics, not market-timing.",
  whyItMatters: [
    "Compounding is the closest thing to magic in real life — but only if you start.",
    "Most financial stress comes from a missing buffer, not low income.",
    "High-interest debt (credit cards, payday loans) is the biggest preventable wealth leak.",
    "Knowing the basics protects you from confident-but-wrong friends and confident-and-selling advisors."
  ],
  realWorldExample:
    "Two people both invest ₹5,000/month from age 25 to 60 into an index fund averaging 10% a year. Person A pays 0.1% in fees. Person B pays 1.5%. The fee gap eats roughly 25–30% of Person B's final pot — many lakhs of rupees, gone, with no extra service rendered. That's the entire lesson on fees in one example.",

  mentors: [
    { name: "Morgan Housel",  for: "behaviour > spreadsheets",                     work: "The Psychology of Money (2020)" },
    { name: "JL Collins",     for: "low-cost index investing in plain English",    work: "The Simple Path to Wealth (2016)" },
    { name: "Ramit Sethi",    for: "automating finances + spending on what you love", work: "I Will Teach You to Be Rich (revised 2019)" },
    { name: "Vicki Robin",    for: "money = life energy — \"enough\" is a skill",  work: "Your Money or Your Life (2008 ed.)" },
    { name: "John Bogle",     for: "the case for low-cost index funds",            work: "founded Vanguard; The Little Book of Common Sense Investing" }
  ],

  diagrams: [
    { kind: "curve", title: "Compounding", caption: "Time in the market beats timing the market. Same monthly contribution, different start dates.", data: {
      x: "Years",
      y: "Portfolio (× contributions)",
      series: [
        { label: "Started age 25",  points: [[0, 0], [10, 2], [20, 6], [30, 14], [35, 22]] },
        { label: "Started age 35",  points: [[0, 0], [10, 2], [20, 6], [25, 10]] }
      ]
    } },
    { kind: "bars", title: "Fee drag on a 30-year nest egg", caption: "Same return, different fees — fees compound the wrong way for you.", data: {
      items: [{ label: "0.1% fee", value: 100 }, { label: "0.5% fee", value: 85 }, { label: "1.0% fee", value: 73 }, { label: "1.5% fee", value: 62 }, { label: "2.0% fee", value: 53 }],
      unit: "% of pot left"
    } }
  ],

  synthesis: [
    { concept: "Compounding",         linksTo: "investing",       note: "The same engine drives both. Personal finance feeds it; investing tunes it." },
    { concept: "Anchoring on price",  linksTo: "marketing",       note: "Knowing what makes you buy makes you spend less. See Marketing → social proof + anchoring." }
  ],

  concepts: [
    { t: "Spend less than you earn",     short: "The whole game in five words.",                                                                                                                                                                                                                                deep: "Every other technique is a refinement of this one rule. Tracking what comes in and out is non-negotiable; the cleverest investing strategy can't outrun a leaking budget. Most people overestimate how much income matters and underestimate how much consistency matters.",                              status: "settled",   reflect: "Roughly, what % of your income did you spend last month? If you can't answer to the nearest 10%, that's where to start." },
    { t: "Emergency fund first",         short: "3–6 months of essential expenses, somewhere boring and accessible.",                                                                                                                                                                                          deep: "Before investing, before paying down low-interest debt, before optimising anything, build a buffer that absorbs shocks. Without it, one job loss or medical bill becomes a credit-card spiral. Keep it in a high-interest savings or liquid-fund account — not invested in stocks.",                       status: "settled",   reflect: "If your income stopped tomorrow, how many months could you cover? If under 3, that's the next goal." },
    { t: "Kill high-interest debt",       short: "Credit cards and payday loans are the priority. Always.",                                                                                                                                                                                                     deep: "Indian credit cards typically charge 30–45% annualised on revolving balances. No investment reliably beats that — paying it down is a risk-free guaranteed return at that rate. Avalanche method (highest rate first) is mathematically optimal; snowball (smallest balance first) wins on motivation.",      status: "debated",   reflect: "List every debt you have with its interest rate. Highest rate gets attacked first — unless you'd quit without an early win." },
    { t: "Pay yourself first (automation)", short: "Move money to savings/investing the day salary lands — not what's left.",                                                                                                                                                                                  deep: "Willpower is finite; automation isn't. Standing instructions / SIPs into investments at salary date mean you live on the residual. People with the same income save very different amounts depending on which side of the automation switch they're on.",                                                  status: "settled",   reflect: "What % of your last salary moved into savings/investments within 48 hours of it landing?" },
    { t: "Index funds beat picking",      short: "On average, low-cost index funds outperform most actively managed funds over long horizons.",                                                                                                                                                                deep: "After fees, the majority of active mutual funds underperform a broad index over 10–20 year periods. \"Average\" sounds boring; in practice it means top-quartile. Pick a broad equity index (Nifty 50 / Total Market), pair with debt as you near goals, automate.",                                          status: "settled",   reflect: "Look at your actively managed mutual fund(s) vs the index over the last 10 years (net of fees). Honest comparison?" },
    { t: "Compounding",                  short: "Time × return × consistency. The first variable matters most.",                                                                                                                                                                                                 deep: "A 25-year-old investing ₹5,000/month at 10% for 35 years ends up with ~₹1.6cr; a 35-year-old doing the same for 25 years ends up with ~₹6.5 lakh. Same monthly amount, 10 years of starting earlier ≈ 2.5× the result. Start now, even small.",                                                                status: "settled",   reflect: "If you started 5 years earlier, what would change about your financial position today?" },
    { t: "Inflation",                     short: "Cash quietly loses ~5–7%/yr of purchasing power in India.",                                                                                                                                                                                                    deep: "Money under a mattress (or in a low-rate savings account) loses real value over time. That's why an emergency buffer is in a liquid/high-interest product, not a tin, and long-term savings need to outpace inflation — which mostly means equities for the long part of the journey.",                       status: "settled",   reflect: "Roughly, what did 1 kg of dal cost 10 years ago vs today? That's the inflation tax in everyday language." },
    { t: "Insurance: term + health, that's the start", short: "Pure term life (if anyone depends on you) and adequate health cover. Avoid investment-linked life insurance.",                                                                                                                                  deep: "Term life is cheap, simple, and exactly what insurance should be — a payout if you die during the policy. ULIPs and traditional endowment policies bundle bad insurance with worse investing; the agent's incentive is misaligned with yours. For health, an indemnity policy that covers actual hospital bills is the baseline.",                       status: "framework", reflect: "Is anyone financially dependent on you? If yes, do you have term life that covers 10–15× your annual income?" }
  ],

  counterView:
    "Dave Ramsey's framing — kill debt aggressively, no credit cards, snowball method — is wildly popular and mathematically suboptimal in many cases (the avalanche method saves more money). Critics argue it works because it leverages behaviour over math, and the behavioural win exceeds the financial loss for most people. So: if you're disciplined, the avalanche method is better. If you're not, the snowball's motivation kick may genuinely outperform the \"optimal\" plan you don't follow. The honest answer is \"it depends on you.\" Also worth knowing: a lot of \"start a business / real estate makes you rich\" advice is survivorship bias — failed entrepreneurs don't write books.",

  capabilities: [
    "Run a one-page monthly budget (income, fixed, variable, savings).",
    "Set up a SIP/automatic transfer that runs on payday without you touching it.",
    "Explain compounding, index funds, and inflation to a friend.",
    "Compare two mutual funds on cost (expense ratio) and benchmark — not last year's return.",
    "Spot a financial product that's bad-insurance-plus-bad-investing in disguise (ULIP, endowment)."
  ],
  cheatsheet: [
    "Spend less than you earn. That's the whole game.",
    "Emergency fund (3–6 months) before investing.",
    "Kill credit-card debt before everything else.",
    "Automate savings on salary day. Live on the residual.",
    "Low-cost index funds for long-term equity. Don't pick stocks until you've maxed the boring stuff.",
    "Term insurance + health insurance — never insurance bundled with investment.",
    "Read the expense ratio. Fees compound against you."
  ],

  roadmap: [
    { rank: "Novice",       focus: "See where the money goes",   do: "Track every spend for 30 days. Open a separate high-interest savings account for the buffer.",                                                  milestone: "You know your monthly fixed + variable + savings split.",                                                  time: "~1 month" },
    { rank: "Apprentice",   focus: "Build the buffer",            do: "Reach 1 month of essential expenses in liquid savings. Set up automatic transfers on salary day.",                                                milestone: "Salary day moves money automatically, before you can spend it.",                                              time: "~3–6 months" },
    { rank: "Practitioner", focus: "Buffer + start SIP",          do: "Hit 3 months emergency fund. Start a small SIP into a low-cost index fund. Get term + health insurance.",                                          milestone: "Buffer + first SIP + basic insurance all live.",                                                              time: "~6–12 months" },
    { rank: "Specialist",   focus: "Optimise + asset allocation", do: "Tax-aware investing (ELSS / NPS where relevant). Adjust equity/debt mix as goals approach. Read the expense ratios on every product you hold.",   milestone: "You can articulate your asset allocation and the why.",                                                       time: "~1–2 years" },
    { rank: "Expert",       focus: "Goal-by-goal planning",       do: "Map specific goals (house, education, retirement) to time horizons + risk + portfolios. Estate basics — Will, nominees.",                          milestone: "Each major goal has its own funded plan.",                                                                    time: "~2–5 years" },
    { rank: "Master",       focus: "Independence path",           do: "FIRE-style calculations; tax efficiency at scale; advanced asset classes only if they fit, not for sport.",                                       milestone: "You can hit \"work optional\" within a defined timeline.",                                                     time: "~5+ years" },
    { rank: "Grandmaster",  focus: "Teach + give",                do: "Help others avoid the traps; structured giving; estate planning that fits your values.",                                                          milestone: "Your finances and your time are aligned with what you actually care about.",                                  time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Zerodha Varsity (India-specific)",                          what: "Genuinely good, free course on Indian markets, taxes, mutual funds, insurance.",                                 url: "https://zerodha.com/varsity/",                                            verify: false, lastVerified: "2026-06" },
      { name: "Morgan Housel — Collab Fund blog",                          what: "Short, behavioural-finance essays from the Psychology of Money author.",                                       url: "https://collabfund.com/blog/",                                            verify: false, lastVerified: "2026-06" },
      { name: "JL Collins — Stock Series",                                  what: "Plain-English case for index investing. US-flavoured; math is universal.",                                      url: "https://jlcollinsnh.com/stock-series/",                                    verify: false, lastVerified: "2026-06" },
      { name: "RBI — Financial Education",                                  what: "Official India: banking, lending, scams, regulation.",                                                          url: "https://www.rbi.org.in/financialeducation/Home.aspx",                       verify: true, lastVerified: "2026-06" },
      { name: "SEBI — Investor Awareness",                                  what: "Regulator's own investor-education materials. Bias-free baseline.",                                            url: "https://investor.sebi.gov.in/",                                            verify: false, lastVerified: "2026-06" },
      { name: "Bogleheads Wiki",                                            what: "Community wiki built around John Bogle's philosophy. Deep, practical.",                                          url: "https://www.bogleheads.org/wiki/Main_Page",                                verify: false, lastVerified: "2026-06" },
      { name: "Investopedia — Personal Finance",                            what: "Reference-grade glossary + tutorials.",                                                                          url: "https://www.investopedia.com/personal-finance-4427760",                    verify: false, lastVerified: "2026-06" },
      { name: "Khan Academy — Personal Finance",                            what: "Free structured intro for absolute beginners.",                                                                  url: "https://www.khanacademy.org/college-careers-more/personal-finance",        verify: false, lastVerified: "2026-06" },
      { name: "Money Control — Personal Finance",                          what: "Daily India-specific personal-finance reporting + product comparisons.",                                          url: "https://www.moneycontrol.com/personal-finance/",                           verify: false, lastVerified: "2026-06" },
      { name: "Value Research Online",                                      what: "India: mutual fund + tax research. Free articles + premium tools.",                                              url: "https://www.valueresearchonline.com/",                                     verify: false, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "The Psychology of Money — Morgan Housel",                    what: "Why behaviour beats spreadsheets. The single best general personal-finance read.",                              url: "https://www.morganhousel.com/the-psychology-of-money/",                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "I Will Teach You to Be Rich — Ramit Sethi",                  what: "Actionable system for automating money, paired with permission to spend on what you love.",                     url: "https://www.iwillteachyoutoberich.com/",                                    price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "The Simple Path to Wealth — JL Collins",                     what: "Father-to-daughter letters explaining the low-cost index path.",                                                url: "https://jlcollinsnh.com/the-simple-path-to-wealth/",                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Let's Talk Money — Monika Halan",                            what: "India-specific personal finance fundamentals from a respected author.",                                          url: "",                                                                         price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Your Money or Your Life — Vicki Robin",                      what: "Money as life energy — \"enough\" as a skill. The original FI book.",                                            url: "https://yourmoneyoryourlife.com/",                                          price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Same as Ever — Morgan Housel",                                what: "Behavioural patterns that don't change. Companion to Psychology of Money.",                                     url: "https://www.morganhousel.com/",                                            price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Total Money Makeover — Dave Ramsey",                     what: "Behaviour-first debt elimination. Math-suboptimal, behaviour-strong. (See counter-view.)",                       url: "https://www.ramseysolutions.com/store/books/the-total-money-makeover",     price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Millionaire Next Door — Stanley & Danko",                what: "Who actually accumulates wealth and how (US data).",                                                            url: "",                                                                         price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Coffee Can Investing — Saurabh Mukherjea",                   what: "India-specific long-term buy-and-hold for quality businesses.",                                                 url: "",                                                                         price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Million Dollar Question — P. V. Subramanyam (Subra)",     what: "India: tax + insurance + investing fundamentals, no-nonsense voice.",                                            url: "https://www.subramoney.com/",                                              price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "30-day spend log",         d: "Track every rupee out for 30 days. Bucket into Fixed / Variable / Savings. Pick the most surprising line item.",                                              xp: 50 },
    { t: "Build a 1-month buffer",   d: "Calculate one month of essential expenses. Open a separate high-interest savings account. Move that much in (over time if needed).",                          xp: 60 },
    { t: "Automate one transfer",    d: "Set up a standing instruction or SIP that runs on payday — even ₹500 counts. The mechanism matters more than the amount.",                                    xp: 40 },
    { t: "Check expense ratios",     d: "Look up the expense ratio on every mutual fund / ULIP / unit-linked product you hold. List anything above 1.0%.",                                              xp: 30 },
    { t: "Compare term life quotes", d: "If anyone is financially dependent on you, get quotes for pure term life cover of 10–15× annual income from 3 insurers.",                                       xp: 50 }
  ],
  capstone: {
    t: "One-page personal financial plan", d: "Write a one-page plan: income, fixed costs, savings rate, current buffer, top 3 financial goals + horizons + automated mechanisms feeding each one. Update quarterly.", xp: 200
  },

  quiz: [
    { q: "Before investing in equities, what comes first?",
      options: [
        { text: "Building an emergency fund (3–6 months of expenses).",                          correct: true },
        { text: "Picking the year's best-performing stock.",                                     misconception: "Investing without a buffer means one shock forces you to sell at the worst moment — that's how losses get locked in." },
        { text: "Buying a house with a mortgage.",                                                misconception: "A house is illiquid; it isn't an emergency fund. Tying buffer money up in property defeats the purpose." },
        { text: "Maxing out credit-card limits for points.",                                     misconception: "Credit cards revolve at 30–45% annual interest if not cleared monthly — that destroys any rewards instantly." }
      ],
      why: "Without a liquid buffer, market dips become forced sales. Buffer first, invest with what's truly long-term.",
      testOut: true
    },
    { q: "Your credit-card balance carries 36% annualised interest. You also have ₹50,000 you could invest. Best move?",
      options: [
        { text: "Invest the ₹50,000 in stocks for upside.",                                       misconception: "No reliable investment beats 36% guaranteed — you'd lose 36% of value before earning any return." },
        { text: "Pay down the card balance first.",                                                correct: true },
        { text: "Buy gold for safety.",                                                            misconception: "Gold's long-term real return doesn't come close to 36% — the card is the better \"investment\" to kill." },
        { text: "Take a personal loan to invest more aggressively.",                              misconception: "Borrowing to invest while carrying revolving debt at 36% is the textbook way to compound a hole." }
      ],
      why: "Paying off high-interest debt is a guaranteed return at the debt's rate. At 36%, nothing legal beats it."
    },
    { q: "Why do low expense ratios matter so much over decades?",
      options: [
        { text: "Cheaper funds are always better managed.",                                       misconception: "Quality varies — cheap isn't a quality signal. The point is that fees compound, not management." },
        { text: "Fees compound against you the same way returns compound for you.",                correct: true },
        { text: "Fees are tax-deductible.",                                                       misconception: "Mutual-fund expense ratios aren't separately deductible for retail investors in India." },
        { text: "Active funds beat the index on average.",                                        misconception: "The evidence is the opposite over long horizons net of fees." }
      ],
      why: "Over 30 years, the difference between a 0.1% and a 1.5% fee can be 25–30% of your final pot. Same return, vastly different outcome."
    },
    { q: "Which of these is closest to an honest fit for the word \"insurance\"?",
      options: [
        { text: "ULIP — bundled life insurance and investment.",                                  misconception: "ULIPs bundle a relatively expensive insurance with a relatively expensive investment. Agents earn commission; you pay both costs." },
        { text: "Endowment policy with guaranteed bonus.",                                        misconception: "Endowment plans typically deliver low single-digit returns and have heavy surrender penalties." },
        { text: "Term life policy — pure cover for X years, payout if you die during it.",          correct: true },
        { text: "Whole-life insurance with cash value.",                                          misconception: "Bundles two products inefficiently — separate term insurance + a low-cost index fund almost always wins." }
      ],
      why: "Term life is the pure form of insurance — paying for risk transfer, nothing else. Cheap, simple, and exactly what insurance should be."
    },
    { q: "A friend says \"I'll start investing once I earn more.\" The strongest gentle counter is…",
      options: [
        { text: "Income matters more than timing.",                                                misconception: "It's the opposite — over a working life, time in market matters more than income level for retail investors." },
        { text: "Starting earlier with small amounts often beats starting later with large ones.",  correct: true },
        { text: "They should just buy crypto.",                                                    misconception: "Adding speculation to procrastination compounds the problem." },
        { text: "Wait for the market to dip.",                                                    misconception: "Time in market beats timing the market — most attempts to time it miss the largest single-day gains." }
      ],
      why: "Compounding rewards time more than amount. ₹5,000/month starting at 25 beats ₹15,000/month starting at 40 for most reasonable return assumptions."
    }
  ],

  flashcards: [
    { front: "What's the whole game of personal finance?",            back: "Spend less than you earn, save and invest the difference, repeat." },
    { front: "How much emergency fund?",                              back: "3–6 months of essential expenses, in a liquid, accessible account — not invested in stocks." },
    { front: "Avalanche vs snowball debt repayment?",                  back: "Avalanche = highest rate first (mathematically optimal). Snowball = smallest balance first (motivationally easier). Pick what you'll actually do." },
    { front: "Why automate savings?",                                  back: "Willpower is finite; automation isn't. SIPs and standing instructions on salary day make saving the default." },
    { front: "Why prefer low-cost index funds?",                       back: "Over long horizons, after fees, most active funds underperform. Index funds keep more of the return in your pocket." },
    { front: "What's the rough cost of inflation in India?",          back: "~5–7% per year. Cash quietly loses purchasing power; long-term savings need to outpace inflation, which mostly means equities." },
    { front: "When is term life insurance the right choice?",          back: "When someone is financially dependent on you. Cheap, pure cover for 10–15× annual income for the years they're dependent." },
    { front: "Why are ULIPs/endowment usually a bad deal?",            back: "They bundle expensive insurance with expensive investment; high commissions are paid out of your money. Term + low-cost mutual fund beats them almost every time." }
  ],
  glossary: [
    { term: "Emergency fund",   def: "3–6 months of essential expenses kept liquid and accessible." },
    { term: "SIP",              def: "Systematic Investment Plan — automatic monthly investment into a mutual fund." },
    { term: "Expense ratio",    def: "Annual % a fund deducts to run itself. Lower = better, all else equal." },
    { term: "Index fund",       def: "Fund that tracks a market index (e.g. Nifty 50). Low fee, no stock-picking." },
    { term: "Term insurance",    def: "Pure life-cover for a fixed term. No payout if you survive — that's the point." },
    { term: "Inflation",        def: "General rise in prices — the silent tax on cash." },
    { term: "Compounding",      def: "Earning returns on past returns. The longer the runway, the bigger the effect." },
    { term: "ELSS",             def: "Equity-Linked Savings Scheme — tax-saving mutual fund under Section 80C in India, with a 3-year lock-in." }
  ],

  safetyNote:
    "Education, not financial advice. Tax rules, regulations and product specifics change — for real money decisions, talk to a SEBI-registered advisor whose incentives don't depend on selling you a product."
};

export default d;
