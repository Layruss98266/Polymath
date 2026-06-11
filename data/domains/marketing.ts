import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "marketing",
  icon: "📣",
  hue: "#ff6b5e",
  category: "Money & Work",
  name: "Marketing",
  tagline: "Make people want things — ethically",

  basics:
    "Marketing is the work of matching what you make to people who'd be better off with it — and helping them notice. It's not the same as ads, and it's not lying. Done well, it's a clearer version of \"I built X for people like you because of Y.\"",
  whyItMatters: [
    "Every product that helps the world needs to be found — invisible good is uncaptured good.",
    "Decode every ad you see in seconds (promise + target + why-now).",
    "Even outside business — a CV, a pitch, a dating profile is positioning.",
    "Spot manipulation pre-purchase: scarcity tricks, fake reviews, anchoring."
  ],
  realWorldExample:
    "Apple's \"Shot on iPhone\" campaign worked because each billboard was a single photo, taken by an ordinary person, credited to them. No specs, no slogans. The product was the proof. That's positioning, scarcity-of-words, and social proof in three seconds.",

  mentors: [
    { name: "Philip Kotler",    for: "the 4 Ps + STP framework",            work: "Marketing Management (1967, many editions)" },
    { name: "Al Ries & Jack Trout", for: "Positioning — owning one idea in the mind", work: "Positioning: The Battle for Your Mind (1981)" },
    { name: "Seth Godin",       for: "permission marketing & remarkability", work: "Permission Marketing (1999), Purple Cow (2003)" },
    { name: "Byron Sharp",      for: "evidence-based brand growth (mental & physical availability)", work: "How Brands Grow (2010)" },
    { name: "Clayton Christensen", for: "Jobs-to-be-Done — what \"job\" did the customer hire your product for?", work: "Competing Against Luck (2016)" }
  ],

  diagrams: [
    { kind: "funnel", title: "AIDA funnel", caption: "Attention → Interest → Desire → Action. Most prospects drop off — that's normal.", data: { stages: ["Attention", "Interest", "Desire", "Action"] } },
    { kind: "quadrant", title: "Positioning map (Reach × Price)", caption: "Where the brand sits relative to alternatives.", data: { xAxis: ["Premium", "Budget"], yAxis: ["Niche", "Mass"], items: [
      { label: "Apple",    x: 0.15, y: 0.7 },
      { label: "Xiaomi",   x: 0.8,  y: 0.85 },
      { label: "Vertu",    x: 0.05, y: 0.1 },
      { label: "Nokia HMD",x: 0.65, y: 0.55 }
    ] } }
  ],

  synthesis: [
    { concept: "Social proof",       linksTo: "ai_ml",            note: "Social proof is an applied cognitive bias — same machinery you see in recommendation systems." },
    { concept: "Anchoring on price", linksTo: "personal_finance", note: "The same bias that helps marketers helps you — flagged before you buy, it loses its grip." }
  ],

  concepts: [
    { t: "The 4 Ps",                   short: "Product · Price · Place · Promotion.",                                                                                                                                                                                                                            deep: "Kotler's compact checklist. \"Promotion\" is the loudest, but most winning brands win on Product, Price, or Place. If your ad is brilliant but the product is mediocre, you're paying to teach the world your weakness faster.",                                                                                                                                                                                       status: "framework", reflect: "Pick something you sell or want (even yourself in a job hunt) — which of the 4 Ps is weakest?" },
    { t: "STP — Segmentation, Targeting, Positioning", short: "Pick a slice. Pick a slice within the slice. Own one idea in that slice's mind.",                                                                                                                                                                deep: "Trying to talk to \"everyone\" sounds like noise. STP is the discipline of choosing not-customers on purpose. Volvo owns \"safe.\" Apple, \"creative.\" That's positioning — and it's done by saying no to other identities.",                                                                                                                                                                                                  status: "framework", reflect: "What single word would you want your work to own in someone's mind?" },
    { t: "Features tell, benefits sell", short: "\"6-hour battery\" → \"a full work day without your charger.\"",                                                                                                                                                                                              deep: "A feature is a property of the product. A benefit is a change in the buyer's life. Buyers translate features into benefits internally and lazily — the best copy does it for them. Features only beat benefits when buyers are experts (spec sheets for engineers, for instance).",                                                                                                                                              status: "framework", reflect: "Pick three features of your work and convert each to a benefit using \"so you can…\"." },
    { t: "Jobs-to-be-Done",           short: "Nobody buys a quarter-inch drill — they buy a quarter-inch hole. Or really, a hung picture, or a marriage.",                                                                                                                                                                                                                                                                                deep: "Christensen's frame: ask not what your product is, but what job a buyer is firing competitors to hire yours for. McDonald's milkshakes outsold competitors as breakfast for solo commuters, not as desserts — once they understood the job, they iterated on it.",                                                                                                                                                                  status: "framework", reflect: "What \"job\" does someone hire your work to do? Look for surprising answers." },
    { t: "Social proof",              short: "We copy what people-like-us do, especially under uncertainty.",                                                                                                                                                                                                  deep: "Cialdini's research: testimonials, counters (\"used by 4M people\"), and visible queues are all social proof. The strongest social proof is people the buyer identifies with — the testimonial photo matters as much as the words. Note: faked social proof is short-term arbitrage and long-term poison.",                                                                                                                          status: "settled",   reflect: "Is your most prominent social proof from people your target identifies with — or just the most prestigious you could find?" },
    { t: "Mental & physical availability (Byron Sharp)", short: "Brands grow by being easy to remember and easy to buy.",                                                                                                                                                                                    deep: "Sharp's evidence against pure \"differentiation thinking\": brands of similar size share most customers, and customers are mostly category buyers, not loyalists. Distinctive assets (logo, colour, jingle) drive memory; distribution drives ease. Most growth comes from light buyers, not super-fans.",                                                                                                                       status: "debated",   reflect: "If a stranger glanced at your work for 200ms, would they recognise it as yours? If not, mental availability is leaking." },
    { t: "CAC vs LTV",                short: "Acquire a customer for less than they're worth over time, or it's a hobby.",                                                                                                                                                                                    deep: "CAC = cost to acquire a customer. LTV = lifetime gross profit. If CAC > LTV you lose money per customer — growth makes it worse. A healthy SaaS rule-of-thumb is LTV ≥ 3 × CAC with payback under 12 months, but the right ratio depends on your gross margin and capital cost.",                                                                                                                                                  status: "settled",   reflect: "Roughly: what does it cost you to get one new \"customer\" (paying or otherwise) — and what are they worth to you over the next year?" },
    { t: "Permission, not interruption", short: "Earn the right to message, then keep it.",                                                                                                                                                                                                                   deep: "Godin's frame: anticipated, personal, relevant messages outperform interruption ads over time. Building an email list, or a real audience, is the long game. It's slow because trust is slow, but it compounds where ad-spend does not.",                                                                                                                                                                                          status: "framework", reflect: "Where in your work are you renting attention vs owning it? What would it take to shift more to owned?" }
  ],

  counterView:
    "Byron Sharp's case (evidence-based marketing) is that most classic positioning theory is wrong in practice: brand differentiation is overclaimed, customer loyalty is statistical, and growth comes from reach to light buyers, not deepening bonds with super-fans. If true, lots of \"insight-driven\" marketing strategy is post-hoc storytelling and the boring fundamentals — distribution, distinctive assets, mass reach — explain more variance than any clever positioning workshop. Take it seriously before you spend on a brand sprint.",

  capabilities: [
    "Explain the 4 Ps to a friend in 60 seconds.",
    "Spot the promise, target, and offer in any ad within 10 seconds.",
    "Write a one-sentence positioning statement: \"For X who Y, we are the Z that A.\"",
    "Estimate CAC and LTV for a small project — and use them to decide whether to keep spending.",
    "Distinguish a feature from a benefit on a live product page."
  ],
  cheatsheet: [
    "4 Ps = Product / Price / Place / Promotion.",
    "Features tell, benefits sell. Translate every feature with \"so you can…\".",
    "If CAC > LTV, it's a hobby not a business.",
    "Own one word in the mind (Volvo = safe). Stop trying to own three.",
    "Distinctive assets (logo, colour, sound) compound; clever taglines mostly don't.",
    "Permission > interruption over time. Own your list."
  ],

  roadmap: [
    { rank: "Novice",       focus: "Learn the vocabulary",      do: "Read Made to Stick or Positioning; decode 10 ads/day using \"promise + target + why-now\".", milestone: "You can name the 4 Ps and explain positioning to someone unfamiliar.",                          time: "~1–2 weeks" },
    { rank: "Apprentice",   focus: "Write & reframe",            do: "Rewrite 5 boring product descriptions into benefit-led copy. Try Godin's purple-cow exercise on something you sell.",     milestone: "You can convert features→benefits without breaking sweat.",                  time: "~3–4 weeks" },
    { rank: "Practitioner", focus: "Run a real campaign",        do: "Ship one small campaign with a measurable goal (e.g. sign-ups). Track CAC. Compare two creatives.",                       milestone: "You've moved a real number with real spend (even ₹500).",                    time: "~1–2 months" },
    { rank: "Specialist",   focus: "Pick a channel & go deep",   do: "Choose SEO, paid social, email, content, or community. Build measurable systems in that one.",                            milestone: "Channel-attribution + cohort retention reports are second nature.",            time: "~3–6 months" },
    { rank: "Expert",       focus: "Brand + performance together", do: "Pair distinctive-asset work with funnel work; design experiments; learn pricing.",                                       milestone: "You can defend a marketing strategy across creative + finance.",              time: "~6–12 months" },
    { rank: "Master",       focus: "Strategy & teams",           do: "Lead positioning resets; build playbooks; mentor teams; read primary research, not just blogs.",                         milestone: "Multiple brands you've shaped show durable growth.",                          time: "~2+ years" },
    { rank: "Grandmaster",  focus: "Define the playbook others use", do: "Original research, books, frameworks adopted by the field.",                                                          milestone: "Other marketers cite your work.",                                              time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Seth Godin's blog",                          what: "Daily, short, original takes on marketing fundamentals and ethics.",                                   url: "https://seths.blog/",                                       verify: false, lastVerified: "2026-06" },
      { name: "Marketing Examples",                          what: "Bite-sized real campaigns explained — great pattern-library.",                                          url: "https://marketingexamples.com/",                            verify: false, lastVerified: "2026-06" },
      { name: "Harvard Business Review — Marketing topic",   what: "Free articles + classic frameworks (some paywalled, many free).",                                       url: "https://hbr.org/topic/marketing",                           verify: false, lastVerified: "2026-06" },
      { name: "Andrew Chen's essays",                        what: "Growth + marketplaces. Battle-tested, well-written.",                                                    url: "https://andrewchen.com/list-of-essays/",                    verify: false, lastVerified: "2026-06" },
      { name: "Julian Shapiro's growth handbook",            what: "Compact, opinionated, evidence-led growth marketing playbook.",                                          url: "https://www.julian.com/guide/growth/intro",                 verify: false, lastVerified: "2026-06" },
      { name: "Reforge blog (free articles)",                what: "Practical, modern growth + product marketing essays.",                                                   url: "https://www.reforge.com/blog",                              verify: false, lastVerified: "2026-06" },
      { name: "Wikipedia — Marketing",                       what: "Solid neutral overview of the field's frameworks and history.",                                          url: "https://en.wikipedia.org/wiki/Marketing",                   verify: false, lastVerified: "2026-06" },
      { name: "April Dunford — Obviously Awesome talks",     what: "Positioning, sharply. Free conference talks on YouTube.",                                                 url: "https://www.youtube.com/results?search_query=April+Dunford+positioning", verify: true, lastVerified: "2026-06" },
      { name: "Made to Stick — Heath bros (library copy)",   what: "Why some ideas survive and others die. The SUCCESs framework.",                                          url: "https://heathbrothers.com/books/made-to-stick/",            verify: false, lastVerified: "2026-06" },
      { name: "Ogilvy on Advertising — David Ogilvy",        what: "Old, opinionated, still works on copy fundamentals.",                                                   url: "https://en.wikipedia.org/wiki/Ogilvy_on_Advertising",       verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Positioning — Al Ries & Jack Trout",          what: "The original classic. Short and dense.",                                                                url: "https://en.wikipedia.org/wiki/Positioning_(marketing)",     price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "How Brands Grow — Byron Sharp",               what: "The evidence-based steelman against pure positioning theory.",                                          url: "https://en.wikipedia.org/wiki/How_Brands_Grow",             price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Competing Against Luck — Clayton Christensen", what: "Jobs-to-be-Done, with case studies.",                                                                   url: "",                                                          price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "$100M Offers — Alex Hormozi",                 what: "Practical pricing & offer design for small businesses. Hype-y voice, real models.",                       url: "",                                                          price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Influence — Robert Cialdini",                  what: "Six levers of persuasion — applies directly to marketing copy & landing pages.",                          url: "https://www.influenceatwork.com/principles-of-persuasion/", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Obviously Awesome — April Dunford",            what: "Positioning, modern + actionable. Best practical positioning book of the last decade.",                  url: "https://www.aprildunford.com/obviously-awesome",            price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Building a StoryBrand — Donald Miller",       what: "Storytelling structure applied to landing-page copy.",                                                    url: "",                                                          price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Hooked — Nir Eyal",                            what: "Habit-forming product design. Read alongside the ethics conversation.",                                  url: "https://www.nirandfar.com/hooked/",                         price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "This is Marketing — Seth Godin",              what: "Permission marketing + positioning + ethics, current edition.",                                          url: "https://seths.blog/tim/",                                   price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Marketing Management — Philip Kotler",         what: "The encyclopaedia of marketing fundamentals. Library copy is fine.",                                     url: "https://en.wikipedia.org/wiki/Marketing_Management_(textbook)", price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Decode 3 ads",          d: "Find any 3 ads in the wild (subway, YouTube, Instagram). For each, write: promise · target · why-now · which P it leans on.",                  xp: 30 },
    { t: "Positioning statement", d: "Write one for your work using the template: \"For [target] who [need], we are the [category] that [unique value], because [proof].\"",          xp: 30 },
    { t: "Feature → benefit",     d: "Pick three features of your product/work. Rewrite each as a benefit using \"so you can…\".",                                                     xp: 30 },
    { t: "Calculate CAC roughly", d: "List everything you spent (incl. time) to acquire your last 5 customers/users. Divide. Compare to what they're worth in a year.",              xp: 40 },
    { t: "Find a real customer",  d: "Have one 20-minute call with someone in your target segment. Use Rob Fitzpatrick's Mom Test — ask about their past, not your idea.",            xp: 50 }
  ],
  capstone: {
    t: "Ship one public piece of marketing", d: "Launch a landing page / ad / email / post for something real. Run for at least 7 days. Report what you'd change next time and why.", xp: 200
  },

  quiz: [
    { q: "Which of these is closest to \"positioning\" in the Ries & Trout sense?",
      options: [
        { text: "Listing every feature your product has on the homepage.",                     misconception: "More features ≠ stronger position; it dilutes the one idea you'd like to own." },
        { text: "Owning a single, clear idea in the customer's mind.",                          correct: true },
        { text: "Spending more than your competitor on ads.",                                   misconception: "Share of voice helps mental availability but isn't \"positioning\" — you can be loud and still unpositioned." },
        { text: "Using the same colours as the market leader.",                                misconception: "Copying assets erases your distinctiveness — the opposite of positioning." }
      ],
      why: "Positioning is the work of owning one idea in one mind in one category. The other answers are either tactics, mistakes, or copying.",
      testOut: true
    },
    { q: "Your CAC is $80 and the average customer pays you $30 of gross profit and churns after 2 months. You should…",
      options: [
        { text: "Spend more on ads to scale faster.",                                          misconception: "Scaling a CAC > LTV business burns money faster — growth doesn't fix the unit economics." },
        { text: "Fix retention or LTV (or kill the channel) before scaling spend.",            correct: true },
        { text: "Hire a brand agency.",                                                        misconception: "Brand work might help eventually, but it doesn't address the immediate unit-economics hole." },
        { text: "Switch to a new pricing model and hope for the best.",                       misconception: "Pricing changes without diagnosing churn are guesses; you don't yet know whether price or product fit is the leak." }
      ],
      why: "If CAC > LTV, more growth means more loss. Fix retention/LTV first or pause acquisition."
    },
    { q: "A buyer reads \"6-hour battery\". What's the benefit-led rewrite?",
      options: [
        { text: "Industry-leading 6-hour battery technology.",                                 misconception: "\"Industry-leading\" is unproven puffery, and you've still given a feature, not a benefit." },
        { text: "Lithium-ion 4000mAh.",                                                       misconception: "Spec-sheet talk works for experts buying components; most buyers tune it out." },
        { text: "A full work day without your charger.",                                       correct: true },
        { text: "Patent-pending battery design.",                                              misconception: "Buyers don't care about the patent — they care about what it lets them do." }
      ],
      why: "Convert features to benefits using \"so you can…\". \"A full work day without your charger\" is the change in their life."
    },
    { q: "Which is the most reliable, evidence-based claim about how brands grow?",
      options: [
        { text: "Loyal super-fans drive most revenue for big brands.",                         misconception: "Sharp's data shows light buyers (rare purchasers) drive most volume — super-fans are a smaller slice than felt." },
        { text: "Mass-market reach to light buyers plus distinctive assets drive growth.",      correct: true },
        { text: "Tightening targeting always increases ROI.",                                  misconception: "Narrow targeting can lift short-term ROI but caps long-term growth — both Sharp and most platforms find this." },
        { text: "Differentiating sharply from competitors is the main driver.",                misconception: "Differentiation matters less than distinctiveness — being remembered beats being unique-on-paper." }
      ],
      why: "How Brands Grow (Byron Sharp): mental + physical availability, distinctive assets, mass reach to light buyers — that's where the evidence is."
    },
    { q: "You're writing a testimonial-led landing page. What matters most?",
      options: [
        { text: "Get the most famous person you can.",                                          misconception: "Prestige helps awareness, but identification beats prestige for trust. A buyer wants to see people like themselves." },
        { text: "Testimonials from people who look like your target buyer.",                    correct: true },
        { text: "Five-star ratings — quantity over face.",                                     misconception: "Ratings help, but a single relatable face often outperforms a stack of stars." },
        { text: "Pile on as many as you can fit.",                                              misconception: "Volume without relevance reads as desperate; trust isn't a heap." }
      ],
      why: "Cialdini: social proof works strongest when the proof is people-like-us, not just impressive."
    }
  ],

  flashcards: [
    { front: "Define the 4 Ps.",                                                   back: "Product · Price · Place · Promotion. A compact checklist for marketing decisions (Kotler)." },
    { front: "What is positioning?",                                               back: "Owning one clear idea in the customer's mind, in one category, by saying no to other identities." },
    { front: "Features vs benefits — how to convert?",                              back: "Use \"so you can…\". \"6-hour battery → a full work day without your charger.\"" },
    { front: "What is Jobs-to-be-Done?",                                            back: "Buyers don't want products — they hire products to do a job in their life. Find the job, you find the design." },
    { front: "Why does CAC matter relative to LTV?",                                back: "If acquisition costs more than the customer's lifetime value, growth deepens losses. LTV ≥ 3× CAC is a healthy rule-of-thumb." },
    { front: "What's social proof?",                                                back: "We copy people-like-us under uncertainty. Strong proof comes from buyers your target identifies with." },
    { front: "Byron Sharp's main claim about brand growth?",                        back: "Mental + physical availability and distinctive assets drive growth, mostly via light buyers — not deep super-fan loyalty." },
    { front: "Permission marketing vs interruption?",                               back: "Anticipated, personal, relevant messages (Godin). Slower than ads, but compounding and trust-led." }
  ],
  glossary: [
    { term: "Positioning",            def: "Owning one clear idea in the customer's mind." },
    { term: "CAC",                    def: "Customer Acquisition Cost — total cost to land one paying customer." },
    { term: "LTV",                    def: "Lifetime Value — total gross profit a customer brings over their lifetime with you." },
    { term: "Jobs-to-be-Done (JTBD)", def: "The frame that buyers hire products to do a job in their life." },
    { term: "Mental availability",    def: "How easily the brand comes to mind in a buying moment." },
    { term: "Physical availability",  def: "How easily the brand can be bought — distribution, shelf, search results." },
    { term: "Distinctive asset",      def: "A logo, colour, sound, character that's owned and recognisable in 200ms." },
    { term: "Funnel",                 def: "A model of prospect drop-off from awareness to purchase (e.g. AIDA)." }
  ]
};

export default d;
