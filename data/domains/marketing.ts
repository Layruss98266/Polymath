import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "marketing",
 icon: "📣",
 hue: "#ff6b5e",
 category: "Money & Work",
 name: "Marketing",
 tagline: "Make people want things , ethically",

 basics:
  "Imagine you run a small bakery. Your bread is genuinely better than the supermarket's , but nobody walks past your door. Marketing is the work you do so the right people walk past, notice, try, and come back. That's it. It isn't ads. It isn't tricking anyone. It's the bridge between something useful and the person who'd be glad they found it. Get good at marketing and the bakery thrives. Get bad at it and you make great bread for an empty room.",
 whyItMatters: [
  "Even if you never sell a product, you market yourself , in interviews, dating profiles, asking for raises.",
  "You stop wasting money on ads that don't work, because you can read them.",
  "You spot the tricks (fake scarcity, manufactured reviews, anchored prices) before they get your wallet.",
  "Anything good you make needs to be findable. Invisible good helps nobody."
 ],
 realWorldExample:
  "In 2014, Apple put up giant billboards in cities everywhere. Each billboard was just one photo , taken by a regular person, on an iPhone, with their name printed at the bottom. No specs, no slogans, no \"world's most advanced.\" Just: this picture, this phone, this neighbour. People started looking at their own phones and thinking \"could I shoot something like that?\" Almost no words, almost no claims, and yet it sold millions of phones. That's marketing , making the product its own evidence.",

 mentors: [
  { name: "Philip Kotler",  for: "the 4 Ps + STP framework",      work: "Marketing Management (1967, many editions)" },
  { name: "Al Ries & Jack Trout", for: "Positioning , owning one idea in the mind", work: "Positioning: The Battle for Your Mind (1981)" },
  { name: "Seth Godin",    for: "permission marketing & remarkability", work: "Permission Marketing (1999), Purple Cow (2003)" },
  { name: "Byron Sharp",   for: "evidence-based brand growth (mental & physical availability)", work: "How Brands Grow (2010)" },
  { name: "Clayton Christensen", for: "Jobs-to-be-Done , what \"job\" did the customer hire your product for?", work: "Competing Against Luck (2016)" }
 ],

 diagrams: [
  { kind: "funnel", title: "AIDA funnel", caption: "Attention → Interest → Desire → Action. Most prospects drop off , that's normal.", data: { stages: ["Attention", "Interest", "Desire", "Action"] } },
  { kind: "quadrant", title: "Positioning map (Reach × Price)", caption: "Where the brand sits relative to alternatives.", data: { xAxis: ["Premium", "Budget"], yAxis: ["Niche", "Mass"], items: [
   { label: "Apple",  x: 0.15, y: 0.7 },
   { label: "Xiaomi",  x: 0.8, y: 0.85 },
   { label: "Vertu",  x: 0.05, y: 0.1 },
   { label: "Nokia HMD",x: 0.65, y: 0.55 }
  ] } }
 ],

 synthesis: [
  { concept: "Social proof",    linksTo: "ai_ml",      note: "Social proof is an applied cognitive bias , same machinery you see in recommendation systems." },
  { concept: "Anchoring on price", linksTo: "personal_finance", note: "The same bias that helps marketers helps you , flagged before you buy, it loses its grip." }
 ],

 concepts: [
  { t: "The 4 Ps",                   short: "Product · Price · Place · Promotion. The whole business in four words.",                                deep: "Picture our bakery again. The bread (Product), what you charge (Price), where you sell it , your shop, a corner, online (Place), and how you tell people about it (Promotion). When sales are flat, marketers reach for Promotion (more ads!) first. Almost always the wrong move. Look at your worst-performing P. Usually it's the Product (the bread is just okay), the Price (you're charging supermarket prices for hand-made), or the Place (your shop is on a street nobody walks). Brilliant ads for a mediocre product just teach the world your weakness faster.",                                                                                         status: "framework", reflect: "Pick something you sell or want , even yourself in a job hunt. Which of the 4 Ps is weakest right now?" },
  { t: "Segmentation, Targeting, Positioning (STP)", short: "Pick a small group. Be unmissable to them. Own one word in their head.",                                  deep: "Most beginners try to sell to \"everyone.\" That always fails. \"Everyone\" hears noise. The fix is brutal: pick one group of people you'll obsess over , maybe \"first-time parents who care about ingredients\" , and say no to everyone else. Then, in that group's head, own a single clean idea. Volvo owns \"safe.\" Apple owns \"creative.\" Tata Salt owns \"trusted.\" You don't get to own two. Pick one and protect it.",                                                                                                                                                            status: "framework", reflect: "If your closest friend had to describe what you (or your work) is for in one word, what would they say? Is that the word you want?" },
  { t: "Features tell, benefits sell",        short: "Don't sell the drill , sell the picture on the wall.",                                           deep: "A feature is something the product has. A benefit is something your life gains. \"6-hour battery\" is a feature. \"A full work day without hunting for a charger\" is a benefit. People buy benefits, but products usually advertise features. So the brain has to do the translation, and most of the time it doesn't bother , it just scrolls past. Do the translation for them. Pick three features of your thing. After each one, write \"…so you can ___.\" That sentence is the ad.",                                                                                                                                 status: "framework", reflect: "Take three features of your work and finish the sentence \"…so you can ___\" for each." },
  { t: "Jobs-to-be-Done",               short: "Nobody buys a drill , they buy a hole. Really, they buy a picture on the wall, hung straight, by tonight.",               deep: "Christensen's question: what \"job\" does someone hire your product to do in their life? McDonald's couldn't figure out why their milkshakes sold so well early in the morning. Until they actually watched. Lone commuters bought them: long drive, one hand on the wheel, nothing else to do, breakfast that takes 20 minutes to finish , exactly. Once McDonald's saw the job (\"keep me awake and not bored on a commute\"), they made the shake thicker and added flavour bits , sales went up. Stop asking \"what features should we add?\" Start asking \"what job did they hire us for?\"",                                                                                                 status: "framework", reflect: "When someone uses your work, what's the real job they're hiring it to do? It's often weirder than you'd guess." },
  { t: "Social proof",                short: "We copy people who look like us, especially when we're unsure.",                                      deep: "Standing outside two restaurants, both new, one empty and one half full , which do you walk into? Half full. Every time. That instinct is social proof. It shows up in testimonials, reviews, \"used by 50,000 teams,\" the queue outside the new café. The trick: it has to come from people your buyer recognises themselves in. A glowing quote from a CEO won't help a teenager pick sneakers; a glowing TikTok from someone their age will. Fake reviews work for a quarter, then poison you for years.",                                                                                                                                     status: "settled",  reflect: "Look at your most visible social proof. Are those people the target audience would identify with, or just the most impressive you could find?" },
  { t: "Mental + physical availability (Byron Sharp)", short: "Be easy to remember. Be easy to buy. The rest is mostly noise.",                                     deep: "Byron Sharp spent years digging through brand data and found something uncomfortable: the way most people talk about marketing is wrong. Brands don't grow because customers feel a deep emotional connection. They grow because they're easy to think of (mental availability) and easy to grab (physical availability). Coca-Cola's win isn't your love for the brand , it's that you can name it instantly and buy it on every street corner. Distinctive logos, colours, jingles, characters do the remembering work. Distribution does the grabbing work. Both compound; clever taglines mostly don't.",                                                                                         status: "debated",  reflect: "If a stranger saw your logo for one fifth of a second, would they recognise it? If not, mental availability is leaking." },
  { t: "CAC vs LTV",                  short: "Cost to win a customer (CAC) must be lower than what they're worth to you (LTV). Otherwise you're paying to lose money.",         deep: "Two numbers run almost every business: what it costs you to land a customer (Customer Acquisition Cost), and what that customer is worth to you over their lifetime (Lifetime Value). If CAC is ₹500 and LTV is ₹2,000, beautiful , every new customer leaves you ₹1,500 ahead. If CAC is ₹800 and LTV is ₹600, you're losing money on each sale. Worse, scaling makes the hole bigger. This is the difference between a business and an expensive hobby. A rough healthy target: LTV should be at least 3× CAC, and you should make your money back within a year.",                                                                                                         status: "settled",  reflect: "Rough back-of-envelope: what does it cost you to get one new customer (or follower, or reader), and what are they worth to you over the next year?" },
  { t: "Permission, not interruption",        short: "Earn the right to send the next message. Then keep earning it.",                                      deep: "Seth Godin's distinction. Most ads interrupt , you're watching something else, they break in. Permission marketing is the opposite. Someone gives you their email because what you send is genuinely worth reading; then they read the next one, and the next. It's slower than buying ads because trust is slow. But trust compounds. Five years of consistent newsletter writing builds an audience that ad money can't buy back. Renting attention is fine for now; owning it is the long game.",                                                                                                                                         status: "framework", reflect: "Where in your work are you renting attention (ads, algorithms) versus owning it (email list, real audience)?" }
 ],

 counterView:
  "Most marketing books , including the ones quoted in this domain , are written by people who, in some honest way, sell positioning workshops or brand strategy. Byron Sharp's case (which has a lot of data behind it) is uncomfortable for them: brand love is mostly a marketer's fantasy, customer \"loyalty\" is statistical noise, and most growth comes from boring stuff like being available in more shops and being easier to remember. If he's even half right, a lot of insight-driven marketing strategy is post-hoc storytelling , the brand sprint felt important, but the growth came from distribution. Before you spend a year on positioning, ask: am I just hard to find and hard to remember? If yes, fix that first.",

 capabilities: [
  "Explain the 4 Ps to a friend in 60 seconds.",
  "Spot the promise, target, and offer in any ad within 10 seconds.",
  "Write a one-sentence positioning statement: \"For X who Y, we are the Z that A.\"",
  "Estimate CAC and LTV for a small project , and use them to decide whether to keep spending.",
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
  { rank: "Novice",    focus: "See marketing everywhere",      do: "For two weeks, look at every ad like a detective. For each one, write down three things: who's it for, what are they promising, why-now. Read Positioning (Ries & Trout) or Made to Stick on the side.", milestone: "You can look at any billboard and say, in a sentence, who it's for and what trick it's using.",                      time: "~1-2 weeks" },
  { rank: "Apprentice",  focus: "Write copy that doesn't sound like copy", do: "Take five boring product descriptions and rewrite each one in your own voice, using the \"…so you can ___\" trick. Try the same for your own bio, CV, or About page.",                 milestone: "You can convert any feature list into benefit-led copy without thinking.",                                 time: "~3-4 weeks" },
  { rank: "Practitioner", focus: "Run something real, even small",     do: "Ship one tiny campaign with a measurable goal , could be ₹500 in ads for a side project, a newsletter signup form, anything where you can count something. Run two versions. Compare.",         milestone: "You've moved a real number, with real money, with a system you can repeat.",                                time: "~1-2 months" },
  { rank: "Specialist",  focus: "Go deep in one channel",         do: "Pick one channel you actually like , SEO, email, paid social, content, community. Build real systems there. Ignore the other five for now. Master one before adding another.",             milestone: "You can read an attribution report and a retention cohort without flinching.",                               time: "~3-6 months" },
  { rank: "Expert",    focus: "Brand and performance, together",    do: "Now zoom out. Pair the distinctive-asset work (logo, voice, memorability) with the funnel work (conversion, retention, LTV). Learn pricing. Design experiments your CFO would respect.",         milestone: "You can defend a marketing strategy to a creative team and a finance team in the same meeting.",                      time: "~6-12 months" },
  { rank: "Master",    focus: "Lead, teach, set strategy",       do: "Run real positioning resets for products that matter. Build the playbooks your team uses. Mentor juniors. Read primary research, not just blog posts.",                         milestone: "Multiple brands you've worked on show durable, boring, repeatable growth.",                                 time: "~2+ years" },
  { rank: "Grandmaster", focus: "Define the playbook others borrow",   do: "Publish your own frameworks. Write the book or the long essay other marketers reference. Hire and develop the next layer.",                                       milestone: "When marketers in your space describe how they think, they cite your work without noticing.",                       time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Seth Godin's blog",             what: "Daily, short, original takes on marketing fundamentals and ethics.",                  url: "https://seths.blog/",                    verify: false, lastVerified: "2026-06" },
   { name: "Marketing Examples",             what: "Bite-sized real campaigns explained , great pattern-library.",                     url: "https://marketingexamples.com/",              verify: false, lastVerified: "2026-06" },
   { name: "Harvard Business Review , Marketing topic",  what: "Free articles + classic frameworks (some paywalled, many free).",                    url: "https://hbr.org/topic/marketing",              verify: false, lastVerified: "2026-06" },
   { name: "Andrew Chen's essays",            what: "Growth + marketplaces. Battle-tested, well-written.",                          url: "https://andrewchen.com/list-of-essays/",          verify: false, lastVerified: "2026-06" },
   { name: "Julian Shapiro's growth handbook",      what: "Compact, opinionated, evidence-led growth marketing playbook.",                     url: "https://www.julian.com/guide/growth/intro",         verify: false, lastVerified: "2026-06" },
   { name: "Reforge blog (free articles)",        what: "Practical, modern growth + product marketing essays.",                          url: "https://www.reforge.com/blog",               verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia , Marketing",            what: "Solid neutral overview of the field's frameworks and history.",                     url: "https://en.wikipedia.org/wiki/Marketing",          verify: false, lastVerified: "2026-06" },
   { name: "April Dunford , Obviously Awesome talks",   what: "Positioning, sharply. Free conference talks on YouTube.",                         url: "https://www.youtube.com/results?search_query=April+Dunford+positioning", verify: true, lastVerified: "2026-06" },
   { name: "Made to Stick , Heath bros (library copy)",  what: "Why some ideas survive and others die. The SUCCESs framework.",                     url: "https://heathbrothers.com/books/made-to-stick/",      verify: false, lastVerified: "2026-06" },
   { name: "Ogilvy on Advertising , David Ogilvy",    what: "Old, opinionated, still works on copy fundamentals.",                          url: "https://en.wikipedia.org/wiki/Ogilvy_on_Advertising",    verify: true, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Positioning , Al Ries & Jack Trout",     what: "The original classic. Short and dense.",                                url: "https://en.wikipedia.org/wiki/Positioning_(marketing)",   price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "How Brands Grow , Byron Sharp",        what: "The evidence-based steelman against pure positioning theory.",                     url: "https://en.wikipedia.org/wiki/How_Brands_Grow",       price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Competing Against Luck , Clayton Christensen", what: "Jobs-to-be-Done, with case studies.",                                  url: "",                             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "$100M Offers , Alex Hormozi",         what: "Practical pricing & offer design for small businesses. Hype-y voice, real models.",            url: "",                             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Influence , Robert Cialdini",         what: "Six levers of persuasion , applies directly to marketing copy & landing pages.",             url: "https://www.influenceatwork.com/principles-of-persuasion/", price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Obviously Awesome , April Dunford",      what: "Positioning, modern + actionable. Best practical positioning book of the last decade.",         url: "https://www.aprildunford.com/obviously-awesome",      price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Building a StoryBrand , Donald Miller",    what: "Storytelling structure applied to landing-page copy.",                          url: "",                             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Hooked , Nir Eyal",              what: "Habit-forming product design. Read alongside the ethics conversation.",                 url: "https://www.nirandfar.com/hooked/",             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "This is Marketing , Seth Godin",       what: "Permission marketing + positioning + ethics, current edition.",                     url: "https://seths.blog/tim/",                  price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Marketing Management , Philip Kotler",     what: "The encyclopaedia of marketing fundamentals. Library copy is fine.",                   url: "https://en.wikipedia.org/wiki/Marketing_Management_(textbook)", price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Decode 3 ads",     d: "Find any 3 ads in the wild (subway, YouTube, Instagram). For each, write: promise · target · why-now · which P it leans on.",         xp: 30 },
  { t: "Positioning statement", d: "Write one for your work using the template: \"For [target] who [need], we are the [category] that [unique value], because [proof].\"",     xp: 30 },
  { t: "Feature → benefit",   d: "Pick three features of your product/work. Rewrite each as a benefit using \"so you can…\".",                           xp: 30 },
  { t: "Calculate CAC roughly", d: "List everything you spent (incl. time) to acquire your last 5 customers/users. Divide. Compare to what they're worth in a year.",       xp: 40 },
  { t: "Find a real customer", d: "Have one 20-minute call with someone in your target segment. Use Rob Fitzpatrick's Mom Test , ask about their past, not your idea.",      xp: 50 }
 ],
 capstone: {
  t: "Ship one public piece of marketing", d: "Launch a landing page / ad / email / post for something real. Run for at least 7 days. Report what you'd change next time and why.", xp: 200
 },

 quiz: [
  { q: "Which of these is closest to \"positioning\" in the Ries & Trout sense?",
   options: [
    { text: "Listing every feature your product has on the homepage.",           misconception: "More features ≠ stronger position; it dilutes the one idea you'd like to own." },
    { text: "Owning a single, clear idea in the customer's mind.",             correct: true },
    { text: "Spending more than your competitor on ads.",                  misconception: "Share of voice helps mental availability but isn't \"positioning\" , you can be loud and still unpositioned." },
    { text: "Using the same colours as the market leader.",                misconception: "Copying assets erases your distinctiveness , the opposite of positioning." }
   ],
   why: "Positioning is the work of owning one idea in one mind in one category. The other answers are either tactics, mistakes, or copying.",
   testOut: true
  },
  { q: "Your CAC is $80 and the average customer pays you $30 of gross profit and churns after 2 months. You should…",
   options: [
    { text: "Spend more on ads to scale faster.",                     misconception: "Scaling a CAC > LTV business burns money faster , growth doesn't fix the unit economics." },
    { text: "Fix retention or LTV (or kill the channel) before scaling spend.",      correct: true },
    { text: "Hire a brand agency.",                            misconception: "Brand work might help eventually, but it doesn't address the immediate unit-economics hole." },
    { text: "Switch to a new pricing model and hope for the best.",            misconception: "Pricing changes without diagnosing churn are guesses; you don't yet know whether price or product fit is the leak." }
   ],
   why: "If CAC > LTV, more growth means more loss. Fix retention/LTV first or pause acquisition."
  },
  { q: "A buyer reads \"6-hour battery\". What's the benefit-led rewrite?",
   options: [
    { text: "Industry-leading 6-hour battery technology.",                 misconception: "\"Industry-leading\" is unproven puffery, and you've still given a feature, not a benefit." },
    { text: "Lithium-ion 4000mAh.",                            misconception: "Spec-sheet talk works for experts buying components; most buyers tune it out." },
    { text: "A full work day without your charger.",                    correct: true },
    { text: "Patent-pending battery design.",                       misconception: "Buyers don't care about the patent , they care about what it lets them do." }
   ],
   why: "Convert features to benefits using \"so you can…\". \"A full work day without your charger\" is the change in their life."
  },
  { q: "Which is the most reliable, evidence-based claim about how brands grow?",
   options: [
    { text: "Loyal super-fans drive most revenue for big brands.",             misconception: "Sharp's data shows light buyers (rare purchasers) drive most volume , super-fans are a smaller slice than felt." },
    { text: "Mass-market reach to light buyers plus distinctive assets drive growth.",   correct: true },
    { text: "Tightening targeting always increases ROI.",                 misconception: "Narrow targeting can lift short-term ROI but caps long-term growth , both Sharp and most platforms find this." },
    { text: "Differentiating sharply from competitors is the main driver.",        misconception: "Differentiation matters less than distinctiveness , being remembered beats being unique-on-paper." }
   ],
   why: "How Brands Grow (Byron Sharp): mental + physical availability, distinctive assets, mass reach to light buyers , that's where the evidence is."
  },
  { q: "You're writing a testimonial-led landing page. What matters most?",
   options: [
    { text: "Get the most famous person you can.",                     misconception: "Prestige helps awareness, but identification beats prestige for trust. A buyer wants to see people like themselves." },
    { text: "Testimonials from people who look like your target buyer.",          correct: true },
    { text: "Five-star ratings , quantity over face.",                   misconception: "Ratings help, but a single relatable face often outperforms a stack of stars." },
    { text: "Pile on as many as you can fit.",                       misconception: "Volume without relevance reads as desperate; trust isn't a heap." }
   ],
   why: "Cialdini: social proof works strongest when the proof is people-like-us, not just impressive."
  }
 ],

 flashcards: [
  { front: "Define the 4 Ps.",                          back: "Product · Price · Place · Promotion. A compact checklist for marketing decisions (Kotler)." },
  { front: "What is positioning?",                        back: "Owning one clear idea in the customer's mind, in one category, by saying no to other identities." },
  { front: "Features vs benefits , how to convert?",               back: "Use \"so you can…\". \"6-hour battery → a full work day without your charger.\"" },
  { front: "What is Jobs-to-be-Done?",                      back: "Buyers don't want products , they hire products to do a job in their life. Find the job, you find the design." },
  { front: "Why does CAC matter relative to LTV?",                back: "If acquisition costs more than the customer's lifetime value, growth deepens losses. LTV ≥ 3× CAC is a healthy rule-of-thumb." },
  { front: "What's social proof?",                        back: "We copy people-like-us under uncertainty. Strong proof comes from buyers your target identifies with." },
  { front: "Byron Sharp's main claim about brand growth?",            back: "Mental + physical availability and distinctive assets drive growth, mostly via light buyers , not deep super-fan loyalty." },
  { front: "Permission marketing vs interruption?",                back: "Anticipated, personal, relevant messages (Godin). Slower than ads, but compounding and trust-led." }
 ],
 glossary: [
  { term: "Positioning",      def: "Owning one clear idea in the customer's mind." },
  { term: "CAC",          def: "Customer Acquisition Cost , total cost to land one paying customer." },
  { term: "LTV",          def: "Lifetime Value , total gross profit a customer brings over their lifetime with you." },
  { term: "Jobs-to-be-Done (JTBD)", def: "The frame that buyers hire products to do a job in their life." },
  { term: "Mental availability",  def: "How easily the brand comes to mind in a buying moment." },
  { term: "Physical availability", def: "How easily the brand can be bought , distribution, shelf, search results." },
  { term: "Distinctive asset",   def: "A logo, colour, sound, character that's owned and recognisable in 200ms." },
  { term: "Funnel",         def: "A model of prospect drop-off from awareness to purchase (e.g. AIDA)." }
 ]
};

export default d;
