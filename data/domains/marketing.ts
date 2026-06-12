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
  { concept: "Social proof",    linksTo: "ai_ml",      note: "Social proof is an applied cognitive bias, same machinery you see in recommendation systems." },
  { concept: "Anchoring on price", linksTo: "personal_finance", note: "The same bias that helps marketers helps you. Flagged before you buy, it loses its grip." }
 ],

 subdomains: [
  { id: "foundations", name: "Foundations" },
  { id: "positioning", name: "Positioning & Messaging" },
  { id: "economics", name: "Marketing Economics" },
  { id: "behaviour", name: "Buyer Behaviour" }
 ],

 concepts: [
  {
   t: "The 4 Ps",
   subdomain: "foundations",
   fullForm: "Product, Price, Place, Promotion",
   definition: "A four part checklist for any marketing decision: what you make, what you charge, where you sell it, and how you tell people.",
   short: "Product, Price, Place, Promotion. The whole business in four words.",
   deep: "Picture our bakery again. The bread (Product), what you charge (Price), where you sell it (Place: your shop, a stall, an online listing), and how you tell people about it (Promotion). When sales are flat, marketers reach for Promotion first, more ads. Almost always the wrong move. Look at your worst performing P. Usually it is the Product (the bread is just okay), the Price (you are charging supermarket prices for hand made), or the Place (your shop is on a street nobody walks). Brilliant ads for a mediocre product just teach the world your weakness faster.",
   generic: "Think of any small business near your house. They have four buttons to turn. What they sell (Product). What it costs (Price). Where you can get it (Place). How they tell you about it (Promotion). When one of those four buttons is wrong, the business struggles. Most owners only think about Promotion (advertise more) when one of the other three is the real problem.",
   expert: "Kotler's 4 Ps are a mature operational checklist, not a strategy. They sit downstream of segmentation, targeting and positioning. In digital contexts you will often see 4 Ps extended to 7 Ps (People, Process, Physical evidence) for services. They are best used as a diagnostic when growth has stalled: rank each P against the segment you are targeting, and the weakest is your binding constraint. Spending on Promotion when Product Market fit is broken simply scales the loss.",
   status: "framework",
   reflect: "Pick something you sell or want, even yourself in a job hunt. Which of the 4 Ps is weakest right now?",
   conceptQuiz: [
    {
     q: "Your sales are flat. Your first instinct should be to:",
     options: [
      { text: "Buy more ads (turn up Promotion).", misconception: "When growth stalls, the binding constraint is usually one of the other three Ps. More Promotion on a weak Product or Price just scales the loss." },
      { text: "Rank your Product, Price, Place, and Promotion. Find the weakest. Fix that first.", correct: true },
      { text: "Lower the Price to attract attention.", misconception: "Discounting can be a tactic, but only after you have diagnosed which P is actually broken. Random discounts train customers to wait for them." },
      { text: "Hire a new ad agency.", misconception: "Same root mistake as the first option, just outsourced. Diagnose first." }
     ],
     why: "The 4 Ps are most useful as a diagnostic. Find the weakest, then act."
    },
    {
     q: "Which of these is best described as a Place decision?",
     options: [
      { text: "Lowering the listing price by 10 percent.", misconception: "That is a Price decision." },
      { text: "Posting a reel showing the product in use.", misconception: "That is a Promotion decision." },
      { text: "Adding distribution through three new retailers.", correct: true },
      { text: "Adding a new feature to the product.", misconception: "That is a Product decision." }
     ],
     why: "Place is about distribution. Where, and through which channel, the product can be bought."
    },
    {
     q: "True or false: a brilliant Promotion can rescue a mediocre Product.",
     options: [
      { text: "True. Good ads sell anything for long enough.", misconception: "They sell it once. After the second use, customers churn, and the next campaign starts from zero. Brilliant ads on a bad product accelerate the bad word of mouth too." },
      { text: "False. It just teaches the world your weakness faster.", correct: true },
      { text: "True, but only in B2B markets.", misconception: "Not specifically a B2B vs B2C distinction. The principle applies across both." },
      { text: "False, unless the budget is very large.", misconception: "Larger budget makes the bad word of mouth scale faster, not slower." }
     ],
     why: "If the Product is weak, every successful campaign just exposes more people to the weakness."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Diagnose a local shop", d: "Walk past three local businesses on your street. For each, write a one line guess at which of the 4 Ps is weakest.", xp: 10 },
    { level: "easy",     t: "Rank your own 4 Ps",    d: "For something you sell or are trying to sell (your work, your CV, a side project), rate each P from 1 to 5. Lowest score is your next priority.", xp: 20 },
    { level: "advanced", t: "Fix the weakest P",     d: "Pick the weakest P from your ranking above. Make one concrete change to it this week, and write a paragraph on what shifted (or did not).", xp: 60 }
   ]
  },
  {
   t: "Segmentation, Targeting, Positioning (STP)",
   subdomain: "positioning",
   fullForm: "Segmentation, Targeting, Positioning",
   definition: "Pick a slice of the market (Segmentation), choose which slice to obsess over (Targeting), then own one clear idea in that slice's mind (Positioning).",
   prereqs: ["The 4 Ps"],
   short: "Pick a small group. Be unmissable to them. Own one word in their head.",
   deep: "Most beginners try to sell to everyone. That always fails. Everyone hears noise. The fix is brutal: pick one group of people you will obsess over (maybe first time parents who care about ingredients), and say no to everyone else. Then in that group's head, own a single clean idea. Volvo owns safe. Apple owns creative. Tata Salt owns trusted. You do not get to own two. Pick one and protect it.",
   generic: "Imagine you are starting a tiffin service in a city of three million people. You cannot please all of them. So you pick the smallest group you can genuinely delight (young office workers who skipped breakfast and want hot lunch by 1pm). You build everything around them. Over time, when people in that group think about office lunch, your name shows up. That is positioning. Everyone else can think whatever they want.",
   expert: "STP is the upstream strategy. Pricing, channel, messaging and even Product roadmap should fall out of it. Useful frames: Christensen's Jobs to be Done sharpens segmentation around situations not demographics. Ries and Trout's Positioning is the canonical reference for owning a single concept. Be careful: a positioning statement that contains the word 'and' is usually two positions, which means none.",
   status: "framework",
   reflect: "If your closest friend had to describe what you (or your work) is for in one word, what would they say? Is that the word you want?",
   conceptQuiz: [
    {
     q: "Which positioning statement is strongest?",
     options: [
      { text: "Premium quality, affordable price, friendly service, and fast delivery.", misconception: "Trying to own four ideas at once. Customers remember none. The word 'and' between positions is usually a sign of an unfocused position." },
      { text: "The lunch that arrives at your desk hot at 1pm.", correct: true },
      { text: "We are the best in our industry.", misconception: "Vague, unfalsifiable, and identical to what every competitor says. It cannot occupy a specific idea in the customer's mind." },
      { text: "World class solutions for the discerning customer.", misconception: "Pure jargon. Owns no specific idea, names no specific customer, makes no specific promise." }
     ],
     why: "A clear position picks one idea, one moment, one promise. Specific and falsifiable."
    },
    {
     q: "The 'S' in STP stands for:",
     options: [
      { text: "Segmentation.", correct: true },
      { text: "Strategy.", misconception: "Different concept. STP is a piece of strategy, not a synonym for it." },
      { text: "Specification.", misconception: "Not a marketing term in this context." },
      { text: "Sales.", misconception: "Sales is downstream of STP, not the first step." }
     ],
     why: "STP starts with Segmentation: slicing the market into groups with similar needs."
    },
    {
     q: "Tata Salt owns the word 'trusted' in many Indian households. What is the cost of that focus?",
     options: [
      { text: "It cannot easily reposition itself as 'exciting' or 'gourmet' without confusing buyers.", correct: true },
      { text: "It loses money on every packet sold.", misconception: "Has nothing to do with unit economics." },
      { text: "It cannot advertise on television.", misconception: "Unrelated. Plenty of trusted brands advertise heavily." },
      { text: "It is required to lower its price every year.", misconception: "Unrelated to positioning." }
     ],
     why: "Owning one idea has a cost: you give up the ability to own a different one without re-educating customers."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the position", d: "Pick three brands you use weekly. Write in one word the idea each one owns in your mind.", xp: 10 },
    { level: "easy",     t: "Position your work", d: "Write one positioning statement for your own work using the template 'For [target] who [need], we are the [category] that [unique benefit].'", xp: 25 },
    { level: "advanced", t: "Test the position", d: "Show your positioning statement to three people in your target segment. Ask them to repeat it back in their own words a day later. If the words drift, the position is not yet sticky.", xp: 70 }
   ]
  },
  {
   t: "Features tell, benefits sell",
   subdomain: "positioning",
   definition: "A feature is what the product has. A benefit is the change in the buyer's life. Buyers act on benefits.",
   prereqs: ["The 4 Ps"],
   short: "Don't sell the drill. Sell the picture on the wall.",
   deep: "A feature is something the product has. A benefit is something your life gains. '6 hour battery' is a feature. 'A full work day without hunting for a charger' is a benefit. People buy benefits, but products usually advertise features. So the brain has to do the translation, and most of the time it does not bother. It just scrolls past. Do the translation for them. Pick three features of your thing. After each one, write '...so you can ___.' That sentence is the ad.",
   generic: "Imagine you are buying a drill. The salesman shows you the spec sheet: rotations per minute, voltage, torque. Useless. What you actually want is a hole in the wall, so you can hang a picture, so your living room looks like a home. That is the benefit. Good marketing skips the spec sheet and shows you the picture on the wall.",
   expert: "Benefits ladder up: feature, functional benefit, emotional benefit, identity benefit. Each rung is harder to copy and more valuable. Apple does identity benefit better than most. Most B2B marketing stops at functional benefit, which is why so much of it is forgettable. Caveat: highly technical buyers (engineers picking a sensor) may genuinely want the spec sheet. Match the depth to the buyer.",
   status: "framework",
   reflect: "Take three features of your work and finish the sentence '...so you can ___' for each.",
   conceptQuiz: [
    {
     q: "Which of these is a benefit?",
     options: [
      { text: "Stainless steel body.", misconception: "Feature. Describes what the product is made of, not what changes for you." },
      { text: "8 megapixel camera.", misconception: "Feature. A spec, not a life change." },
      { text: "Photos sharp enough that your kid's smile is still recognisable on a print.", correct: true },
      { text: "Wi-Fi enabled.", misconception: "Feature. Capability, not benefit." }
     ],
     why: "Benefits describe what changes in the buyer's life."
    },
    {
     q: "Which 'so you can' translation works?",
     options: [
      { text: "Lightweight 1.2 kg laptop, so you can have a lightweight laptop.", misconception: "Circular. The translation just repeats the feature. The benefit has to be a different layer." },
      { text: "Lightweight 1.2 kg laptop, so you can stop wrecking your shoulder on the commute.", correct: true },
      { text: "Lightweight 1.2 kg laptop, so you can run more programs.", misconception: "Weight has nothing to do with how many programs run. The translation must be honest." },
      { text: "Lightweight 1.2 kg laptop, so you can sleep at night.", misconception: "Too much of a stretch. The connection has to be plausible." }
     ],
     why: "Translation should connect the feature to a real, specific change."
    },
    {
     q: "When does selling features beat selling benefits?",
     options: [
      { text: "When the buyer is a domain expert comparing specs.", correct: true },
      { text: "Never. Features are always weaker.", misconception: "Strong overshoot. Expert buyers often want the spec directly." },
      { text: "When you are out of marketing budget.", misconception: "Budget unrelated to choice of feature vs benefit." },
      { text: "When the price is high.", misconception: "Price unrelated to whether features or benefits work." }
     ],
     why: "Experts can do the translation themselves and often want the raw spec."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the feature trap", d: "Look at any product homepage. Count how many bullets are features vs benefits. Most are over 80 percent features.", xp: 10 },
    { level: "easy",     t: "Translate your own",    d: "Take three features of your work and write a 'so you can' translation for each. Read both out loud. Which sounds like a friend?", xp: 25 },
    { level: "advanced", t: "Rewrite a real page",   d: "Take your homepage. Rewrite every feature bullet as a benefit. Show both versions to two strangers. Ask which makes them more likely to try it.", xp: 70 }
   ]
  },
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
