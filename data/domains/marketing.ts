import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "marketing",
 icon: "📣",
 hue: "#ff6b5e",
 category: "Money & Work",
 name: "Marketing",
 tagline: "Make people want things, ethically",

 basics:
  "Imagine you run a small bakery. Your bread is genuinely better than the supermarket's, but nobody walks past your door. Marketing is the work you do so the right people walk past, notice, try, and come back. That's it. It isn't ads. It isn't tricking anyone. It's the bridge between something useful and the person who'd be glad they found it. Get good at marketing and the bakery thrives. Get bad at it and you make great bread for an empty room.",
 whyItMatters: [
  "Even if you never sell a product, you market yourself, in interviews, dating profiles, asking for raises.",
  "You stop wasting money on ads that don't work, because you can read them.",
  "You spot the tricks (fake scarcity, manufactured reviews, anchored prices) before they get your wallet.",
  "Anything good you make needs to be findable. Invisible good helps nobody."
 ],
 realWorldExample:
  "In 2014, Apple put up giant billboards in cities everywhere. Each billboard was just one photo, taken by a regular person, on an iPhone, with their name printed at the bottom. No specs, no slogans, no \"world's most advanced.\" Just: this picture, this phone, this neighbour. People started looking at their own phones and thinking \"could I shoot something like that?\" Almost no words, almost no claims, and yet it sold millions of phones. That's marketing, making the product its own evidence.",

 mentors: [
  { name: "Philip Kotler",  for: "the 4 Ps + STP framework",      work: "Marketing Management (1967, many editions)" },
  { name: "Al Ries & Jack Trout", for: "Positioning, owning one idea in the mind", work: "Positioning: The Battle for Your Mind (1981)" },
  { name: "Seth Godin",    for: "permission marketing & remarkability", work: "Permission Marketing (1999), Purple Cow (2003)" },
  { name: "Byron Sharp",   for: "evidence-based brand growth (mental & physical availability)", work: "How Brands Grow (2010)" },
  { name: "Clayton Christensen", for: "Jobs-to-be-Done, what \"job\" did the customer hire your product for?", work: "Competing Against Luck (2016)" }
 ],

 diagrams: [
  { kind: "funnel", title: "AIDA funnel", caption: "Attention → Interest → Desire → Action. Most prospects drop off, that's normal.", data: { stages: ["Attention", "Interest", "Desire", "Action"] } },
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
   ],
   diagram: {
    kind: "quadrant",
    title: "The 4 Ps mix",
    caption: "Each P sits in a different corner of the marketing mix: what you make, what you charge, where to find it, and how people hear about it.",
    data: {
     xAxis: ["Inside the firm", "Out in the market"],
     yAxis: ["Operational", "Strategic"],
     items: [
      { label: "Product", x: 0.2, y: 0.8 },
      { label: "Price", x: 0.3, y: 0.25 },
      { label: "Place", x: 0.75, y: 0.3 },
      { label: "Promotion", x: 0.8, y: 0.75 }
     ]
    }
   }
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
   ],
   diagram: {
    kind: "flow",
    title: "STP: from market to mind",
    caption: "Slice the market, pick the slice to obsess over, then own one idea in that slice's head.",
    data: {
     steps: ["Whole market", "Segment", "Target one slice", "Own one idea"]
    }
   }
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
  { t: "Jobs-to-be-Done",               subdomain: "behaviour", short: "Nobody buys a drill, they buy a hole. Really, they buy a picture on the wall, hung straight, by tonight.",               deep: "Christensen's question: what \"job\" does someone hire your product to do in their life? McDonald's couldn't figure out why their milkshakes sold so well early in the morning. Until they actually watched. Lone commuters bought them: long drive, one hand on the wheel, nothing else to do, breakfast that takes 20 minutes to finish, exactly. Once McDonald's saw the job (\"keep me awake and not bored on a commute\"), they made the shake thicker and added flavour bits, sales went up. Stop asking \"what features should we add?\" Start asking \"what job did they hire us for?\"",                                                                                                 status: "framework", reflect: "When someone uses your work, what's the real job they're hiring it to do? It's often weirder than you'd guess." },
  { t: "Social proof",                subdomain: "behaviour", short: "We copy people who look like us, especially when we're unsure.",                                      deep: "Standing outside two restaurants, both new, one empty and one half full, which do you walk into? Half full. Every time. That instinct is social proof. It shows up in testimonials, reviews, \"used by 50,000 teams,\" the queue outside the new café. The trick: it has to come from people your buyer recognises themselves in. A glowing quote from a CEO won't help a teenager pick sneakers; a glowing TikTok from someone their age will. Fake reviews work for a quarter, then poison you for years.",                                                                                                                                     status: "settled",  reflect: "Look at your most visible social proof. Are those people the target audience would identify with, or just the most impressive you could find?" },
  { t: "Mental + physical availability (Byron Sharp)", subdomain: "behaviour", short: "Be easy to remember. Be easy to buy. The rest is mostly noise.",                                     deep: "Byron Sharp spent years digging through brand data and found something uncomfortable: the way most people talk about marketing is wrong. Brands don't grow because customers feel a deep emotional connection. They grow because they're easy to think of (mental availability) and easy to grab (physical availability). Coca-Cola's win isn't your love for the brand, it's that you can name it instantly and buy it on every street corner. Distinctive logos, colours, jingles, characters do the remembering work. Distribution does the grabbing work. Both compound; clever taglines mostly don't.",                                                                                         status: "debated",  reflect: "If a stranger saw your logo for one fifth of a second, would they recognise it? If not, mental availability is leaking." },
  { t: "CAC vs LTV",                  subdomain: "economics", short: "Cost to win a customer (CAC) must be lower than what they're worth to you (LTV). Otherwise you're paying to lose money.",         deep: "Two numbers run almost every business: what it costs you to land a customer (Customer Acquisition Cost), and what that customer is worth to you over their lifetime (Lifetime Value). If CAC is ₹500 and LTV is ₹2,000, beautiful, every new customer leaves you ₹1,500 ahead. If CAC is ₹800 and LTV is ₹600, you're losing money on each sale. Worse, scaling makes the hole bigger. This is the difference between a business and an expensive hobby. A rough healthy target: LTV should be at least 3× CAC, and you should make your money back within a year.",                                                                                                         status: "settled",  reflect: "Rough back-of-envelope: what does it cost you to get one new customer (or follower, or reader), and what are they worth to you over the next year?" },
  { t: "Permission, not interruption",        subdomain: "behaviour", short: "Earn the right to send the next message. Then keep earning it.",                                      deep: "Seth Godin's distinction. Most ads interrupt, you're watching something else, they break in. Permission marketing is the opposite. Someone gives you their email because what you send is genuinely worth reading; then they read the next one, and the next. It's slower than buying ads because trust is slow. But trust compounds. Five years of consistent newsletter writing builds an audience that ad money can't buy back. Renting attention is fine for now; owning it is the long game.",                                                                                                                                         status: "framework", reflect: "Where in your work are you renting attention (ads, algorithms) versus owning it (email list, real audience)?" },
  {
   t: "Conversion funnels",
   subdomain: "foundations",
   definition: "A conversion funnel is the count of people at each stage of a buying journey, from first visit to paid customer, so you can see exactly where they drop off.",
   short: "Count people at every step. The biggest leak is your next fix.",
   deep: "Picture 1,000 people who saw your ad. 200 clicked. 50 added to cart. 12 paid. That shape, wide at the top, narrow at the bottom, is your funnel. Most beginners obsess over the very top (more traffic) when the biggest gain often sits in the middle (the cart abandonment step lost you 76 percent). The discipline is to measure each step honestly, find the worst conversion rate, and fix that one thing before adding more traffic. Doubling a one percent step to two percent doubles your revenue. Doubling traffic just doubles your costs.",
   generic: "Imagine a leaky water pipe with five joints. Topping up the tank does not help if one joint is spraying water everywhere. You walk the pipe, find the worst leak, fix it, then move to the next. A conversion funnel is the same exercise for customers.",
   expert: "Funnel analysis sits inside any modern analytics tool (GA4, Mixpanel, Amplitude). Key metrics: step-to-step conversion rate, time-to-convert, drop-off cohort by source. The classic AIDA model is a teaching tool; real funnels are messier with loops and re-entries. Beware aggregating across segments, a healthy total can hide a broken mobile flow. Pair funnel data with qualitative session replays (Hotjar, FullStory) so you see why the drop-off happens, not just where.",
   status: "framework",
   reflect: "For the last thing you tried to sell or get signed up for, what were the rough numbers at each step? If you do not know, that is the first thing to instrument.",
   conceptQuiz: [
    {
     q: "Your funnel shows 10,000 visits, 1,000 sign-ups, 50 paid. Where should you focus first?",
     options: [
      { text: "Buy more traffic to the top.", misconception: "More traffic multiplies the leak. The 5 percent sign-up to paid step is the binding constraint." },
      { text: "Fix the sign-up to paid step (the worst conversion).", correct: true },
      { text: "Redesign the logo.", misconception: "Logo work is rarely where funnels leak. The numbers point you somewhere specific." },
      { text: "Lower the price by 1 percent.", misconception: "Random price tweaks without diagnosis are guesses. Find the worst step first." }
     ],
     why: "The lowest conversion rate in the funnel is usually the highest-leverage fix."
    },
    {
     q: "Why is a healthy overall conversion rate sometimes misleading?",
     options: [
      { text: "It can hide a broken segment (e.g. mobile users) inside the average.", correct: true },
      { text: "Averages are always wrong.", misconception: "Averages are not always wrong; they just lose detail. The point is segment-level breakdowns." },
      { text: "Conversion cannot be measured.", misconception: "It can be measured. The whole point of a funnel is to measure it." },
      { text: "It only matters in B2C.", misconception: "Funnels apply to B2B too. SaaS, enterprise, services all have funnels." }
     ],
     why: "Always split funnel data by source, device, and segment. A 5 percent average can be 8 percent on desktop and 1 percent on mobile."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Sketch a funnel",    d: "For any product you have launched or used, draw the five stages from awareness to payment on paper. Guess the percentages at each step.", xp: 10 },
    { level: "easy",     t: "Instrument one step", d: "Add basic analytics (GA4, Plausible, or Posthog) to a real page and track one conversion event. Read the rate after a week.", xp: 20 },
    { level: "advanced", t: "Run a fix experiment", d: "Identify your weakest funnel step. Make one targeted change (copy, form length, price clarity). Compare conversion over the next two weeks against the baseline.", xp: 40 }
   ]
  },
  {
   t: "Brand vs performance marketing",
   subdomain: "economics",
   definition: "Brand marketing builds long-run memory and preference. Performance marketing drives a measurable action this week. Both are needed; trading one off entirely for the other is the most common mistake.",
   short: "Brand is the future demand. Performance is harvesting today. You need both.",
   deep: "Performance marketing is the search ad that converts in an hour. Brand marketing is the billboard you saw last year that made you think of this company today. Performance is easy to measure, so finance teams love it, and most companies overspend on it. Brand is slow to measure, so it gets cut first in a downturn, and then sales decline a year later and nobody can quite explain why. The Les Binet and Peter Field research suggests a roughly 60 to 40 split between brand and performance for most B2C categories, with B2B closer to 50 to 50. Pure performance starves your future. Pure brand starves your present.",
   generic: "Imagine a farm. Performance marketing is harvesting the crops ripe today. Brand marketing is planting next season's seeds. Skip the harvest and you starve this week. Skip the planting and you starve next year. Most companies forget one or the other.",
   expert: "Les Binet and Peter Field's IPA work (The Long and the Short of It, 2013) is the canonical reference. Brand effects compound over 6 to 24 months and lift performance ROI; performance effects appear in days but decay quickly. Measurement asymmetry biases budget allocation: brand outcomes need brand-tracking studies and incrementality testing, not last-click attribution. Caveats: very early stage startups often need performance first to survive long enough to build a brand. Mature category leaders frequently need the opposite rebalance.",
   status: "debated",
   reflect: "Of your last quarter's marketing spend, what split went to building long-term memory vs harvesting this week's demand? Was that deliberate?",
   conceptQuiz: [
    {
     q: "A CFO cuts the brand budget to fund more performance ads. The most likely outcome over 18 months is:",
     options: [
      { text: "Performance ROI declines as fewer people start the journey already aware of the brand.", correct: true },
      { text: "Performance ROI improves forever.", misconception: "Without brand, the cheap, ready-to-buy audience runs out. CPA rises over time." },
      { text: "No change, because brand does not matter.", misconception: "Decades of IPA data show brand drives the base demand that performance harvests." },
      { text: "The company becomes a category leader.", misconception: "Category leadership tends to require sustained mental availability, which is brand work." }
     ],
     why: "Brand and performance are linked. Killing brand starves the top of the funnel, which performance then has to pay more to refill."
    },
    {
     q: "Which is the strongest signal that you are over-indexed on performance?",
     options: [
      { text: "Every campaign is measured by last-click ROAS and CPAs are slowly rising.", correct: true },
      { text: "Your logo is well-recognised.", misconception: "That is a brand-health signal, not a problem." },
      { text: "You have an email list.", misconception: "An email list is neutral. Could support either side." },
      { text: "You have monthly attribution reports.", misconception: "Reports are tools. The signal is in the numbers and the trend, not the existence of the report." }
     ],
     why: "Rising CPAs on identical creative and audience often mean the brand-built pool of warm prospects is being depleted faster than it is being refilled."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the split",      d: "Look at any company's marketing you can see (ads, sponsorships, search results). Classify each touchpoint as brand or performance.", xp: 10 },
    { level: "easy",     t: "Audit your own split", d: "List your last 10 marketing activities. Tag each as brand or performance. Total the cost and time on each side. Note the ratio.", xp: 20 },
    { level: "advanced", t: "Rebalance deliberately", d: "Based on your audit, move one item from the over-funded side to the under-funded side for the next month. Track lead quality and CPA changes.", xp: 40 }
   ]
  },
  {
   t: "AIDA model",
   subdomain: "foundations",
   fullForm: "Attention, Interest, Desire, Action",
   definition: "A classic four-stage model of how a buyer moves from first noticing a product to acting on it: Attention, Interest, Desire, Action.",
   short: "Get noticed. Hold interest. Build desire. Trigger action.",
   deep: "Elias St Elmo Lewis sketched AIDA in 1898 for life-insurance salespeople, and it remains the simplest working model of how attention becomes a purchase. Stage one is Attention, the buyer notices you, often within milliseconds. Stage two is Interest, they pause long enough to learn what you do. Stage three is Desire, they imagine themselves using the product and want it. Stage four is Action, they actually click, sign up, or pay. The model is more useful as a diagnostic than as a script. Look at any ad or landing page and ask which stage it actually serves, most beginner copy tries to do all four in one paragraph and fails at all of them. Modern critiques note that AIDA misses post-purchase loyalty, treats the funnel as linear when buyers loop and re-enter, and over-credits attention as the scarce resource (sometimes desire is the bottleneck). The fix is to use AIDA as a checklist, then layer retention on top.",
   generic: "Imagine walking past a chai stall. First, the smell catches you (attention). You look at the menu and notice they have your favourite (interest). You picture yourself sitting down for fifteen minutes with that cup (desire). You walk in and order (action). Most marketing tries to skip straight to action, which is why most marketing fails.",
   expert: "Lewis (1898) and Strong (1925) formalised the model. Modern variants include AIDAS (adding Satisfaction), AIDCAS (adding Conviction and Satisfaction), and Lavidge and Steiner's six-stage hierarchy. Sharp critiques AIDA as too linear and too attention-centric, arguing that mental availability and distinctive assets do most of the work that AIDA assigns to attention. Best used in copywriting and ad diagnosis rather than as a strategy framework. Failure modes: writing all four stages into one headline, treating action as the only stage worth measuring, and ignoring re-entry from previously dormant prospects.",
   status: "framework",
   reflect: "Pick your last ad or landing page. Which of the four AIDA stages does each section actually serve? Where does it try to do all four at once?",
   conceptQuiz: [
    {
     q: "AIDA stands for…",
     options: [
      { text: "Attention, Interest, Desire, Action.", correct: true },
      { text: "Awareness, Investment, Decision, Approval.", misconception: "Invented; not the canonical names." },
      { text: "Audience, Idea, Distribution, Analytics.", misconception: "Different marketing dimensions, not the AIDA model." },
      { text: "Anchor, Influence, Discount, Authority.", misconception: "Mixed-up persuasion levers, not the AIDA stages." }
     ],
     why: "Lewis's 1898 acronym names the four stages buyers move through."
    },
    {
     q: "The main critique of AIDA is that…",
     options: [
      { text: "It treats the funnel as linear and over-credits attention as the bottleneck.", correct: true },
      { text: "It only applies to print advertising.", misconception: "AIDA generalises across channels." },
      { text: "It requires a large budget.", misconception: "Budget size is unrelated." },
      { text: "It cannot be measured at all.", misconception: "Each stage can be instrumented in modern funnels." }
     ],
     why: "Buyers loop and re-enter, and desire is sometimes the binding constraint."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Tag your copy",         d: "Pick any landing page and label each section with the AIDA stage it primarily serves.", xp: 10 },
    { level: "easy",     t: "Diagnose the gap",      d: "Identify which AIDA stage is weakest on your own page and write one paragraph to strengthen it.", xp: 20 },
    { level: "advanced", t: "Run a stage test",      d: "Ship two versions of your page that vary one AIDA stage each, and measure which lifts conversion in a two-week test.", xp: 40 }
   ]
  },
  {
   t: "Cohort analysis basics",
   subdomain: "economics",
   definition: "Grouping users by a shared start date or event, then tracking their behaviour over time, so you can see retention, revenue, and habit patterns clearly.",
   short: "Group users by when they joined. Then watch what they do over months.",
   deep: "A cohort is a group of users who share a defining start event, usually the month they signed up or first paid. Cohort analysis tracks each cohort separately over time, so you can see retention curves, revenue per cohort, and feature adoption without the noise of new users hiding old churn. Aggregate metrics lie. A company growing twenty percent month over month can look healthy while every individual cohort churns to zero by month three, because new signups mask the loss. Cohort tables fix this by showing each row as a cohort and each column as months since signup, the diagonals reveal whether the product is getting stickier or shakier over time. The discipline is to compare cohorts directly (January's month-three retention versus June's month-three retention) rather than read aggregate trend lines. Tools like Mixpanel, Amplitude, and even Excel can do this in minutes once the event data is clean.",
   generic: "Imagine a gym tracking who actually keeps coming back. Aggregate numbers say membership is up. But if you look at every group of people who joined in January, February, and March, and ask how many still come three months later, you might see that only ten percent stick. The total looks healthy because new joiners keep replacing the ones who quietly left. Cohort analysis is just looking at each joining group on its own.",
   expert: "Standardised in growth analytics by Greylock, Mixpanel, and Reforge curricula. Key views: retention cohort heatmaps, revenue cohort tables (LTV by signup month), and event funnels filtered by cohort. The smile curve (retention dips then recovers) versus the slide curve (retention monotonically decays) is a key shape distinction. Pair with N-day active definitions matched to the product's natural frequency. Failure modes: cohorting on the wrong event (last visit instead of signup), ignoring sample size in early cohorts, and confusing cohort improvements with seasonality.",
   status: "settled",
   reflect: "Pull your last three months of signups, split into cohorts, and check month-one retention for each. If the numbers are flat or declining, the headline growth is borrowed time.",
   conceptQuiz: [
    {
     q: "A cohort in analytics is best described as…",
     options: [
      { text: "A group of users who share a defining start event, tracked together over time.", correct: true },
      { text: "Any random sample of users.", misconception: "Random samples are not cohorts because they lack the shared start." },
      { text: "The top one percent of customers by revenue.", misconception: "That is a customer segment, not a cohort." },
      { text: "All users who logged in yesterday.", misconception: "Same-day activity is a snapshot, not a cohort." }
     ],
     why: "The shared starting event is what makes cohort comparison meaningful."
    },
    {
     q: "Why can aggregate retention metrics hide a churn problem?",
     options: [
      { text: "New signups mask old churn in the headline number, so each cohort's true behaviour gets averaged away.", correct: true },
      { text: "Aggregates always include bot traffic.", misconception: "Bot traffic is a separate concern; cohort analysis fixes a different problem." },
      { text: "Retention is impossible to measure.", misconception: "It is measurable; the issue is which view you use." },
      { text: "All users behave the same way.", misconception: "If they did, cohorts would not differ; the point is they do differ." }
     ],
     why: "Splitting by signup month reveals patterns the aggregate hides."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Build one cohort",      d: "Pick last month's signups and write down how many are still active today.", xp: 10 },
    { level: "easy",     t: "Build the heatmap",     d: "Build a six-month cohort retention heatmap in any tool and compare diagonals.", xp: 20 },
    { level: "advanced", t: "Diagnose and act",      d: "Identify the weakest cohort, find a hypothesis for the drop-off, and run a thirty-day intervention measured against the next cohort.", xp: 40 }
   ]
  },
  {
   t: "Funnel vs flywheel",
   subdomain: "foundations",
   definition: "Two contrasting growth models: the funnel pushes prospects one-way from awareness to purchase, the flywheel reinvests each customer's success into new prospect acquisition.",
   short: "Funnel ends at the sale. Flywheel uses the sale to drive the next one.",
   deep: "The classic funnel ends at purchase, marketing pushes a prospect down the cone, sales closes them, and the relationship resets for the next prospect. The flywheel, popularised by Jim Collins for company strategy and adapted to growth by HubSpot, treats each happy customer as the starting energy for acquiring the next one. Referrals, reviews, case studies, and product-led virality all feed back into the top of the system. The flywheel is more honest about reality, modern buyers research extensively, ask peers, and rarely encounter a brand only through advertising. The funnel is still useful as a diagnostic tool to find drop-off, but a company organised purely as a funnel under-invests in delight, retention, and advocacy, because those activities live downstream of the sale and outside the funnel diagram. The shift from funnel to flywheel is part of why product-led growth, customer success, and community work have become first-class growth investments.",
   generic: "Imagine a baker. The funnel mindset says, advertise to passers-by, sell them bread, and start over tomorrow. The flywheel mindset says, sell bread that is so good the first customer tells two neighbours, who tell four more, and within a year half the queue is people sent by previous customers. Same bread. Different way of thinking about what each sale does for the next sale.",
   expert: "Collins (2001) introduced the flywheel for company strategy in Good to Great. HubSpot adapted it to growth in 2018. The mathematical version is a viral loop with cycle time and viral coefficient k greater than one. Where the funnel diagnoses leak (where do prospects drop off), the flywheel diagnoses friction (what slows the spin) and force (what speeds it). Pair with NPS, referral programs, and product-led growth loops. Failure modes: declaring flywheel philosophy without measuring referral rate or retention, and using the metaphor as cover for ignoring sales mechanics entirely.",
   status: "framework",
   reflect: "Of your last hundred customers, how many came through a previous customer? If the share is small, you are running a funnel, not a flywheel.",
   conceptQuiz: [
    {
     q: "The main difference between a funnel and a flywheel is…",
     options: [
      { text: "The funnel ends at the sale; the flywheel uses the sale to feed new acquisition.", correct: true },
      { text: "The funnel is a sales tool; the flywheel is a marketing tool.", misconception: "Both are growth models, not one-sided tools." },
      { text: "Funnels are for B2C only.", misconception: "Both apply across business types." },
      { text: "Flywheels require larger budgets.", misconception: "Budget size is unrelated to which model fits." }
     ],
     why: "Reinvestment of customer success into acquisition is the flywheel's structural shift."
    },
    {
     q: "A company purely organised as a funnel tends to under-invest in…",
     options: [
      { text: "Retention, delight, and customer advocacy, because they live downstream of the sale.", correct: true },
      { text: "Television advertising.", misconception: "TV ad spend is unrelated to funnel versus flywheel." },
      { text: "Pre-sales engineering.", misconception: "Pre-sales sits inside the funnel; it does not get under-invested." },
      { text: "Office space.", misconception: "Office investment is unrelated." }
     ],
     why: "Funnel diagrams stop at the sale, which leaves post-sale work unmeasured."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Audit the model",          d: "Look at your team's growth diagrams. Are they funnel-shaped or flywheel-shaped?", xp: 10 },
    { level: "easy",     t: "Measure the loop",         d: "Calculate what share of your last hundred customers came from a previous customer's recommendation.", xp: 20 },
    { level: "advanced", t: "Ship a flywheel lever",    d: "Design and ship one referral or advocacy mechanism, measure the lift in cycle time and customer-driven acquisition over sixty days.", xp: 40 }
   ]
  },
  {
   t: "NPS and its critiques",
   subdomain: "economics",
   fullForm: "Net Promoter Score (NPS)",
   definition: "A single-question survey asking how likely a customer is to recommend a product on a zero to ten scale, used as a headline loyalty metric despite ongoing methodological debate.",
   short: "One question, popular, useful as a trend, weak as a prediction.",
   deep: "Fred Reichheld introduced NPS in 2003 with a single question: on a scale of zero to ten, how likely are you to recommend us. Scores of nine and ten are promoters, seven and eight are passives, zero to six are detractors. NPS equals promoters minus detractors, expressed as a number between minus one hundred and one hundred. The appeal is simplicity, every executive understands one number. The critiques are serious. Tim Keiningham and others have shown that NPS correlates weakly with actual referral behaviour and revenue growth, that the eleven-point scale loads information unevenly, and that benchmark comparisons across industries are nearly meaningless. NPS is still useful as a trend line within the same company over time, especially when paired with the open-text follow-up that asks why, but treating it as a primary predictor of growth or as a cross-industry benchmark is statistical theatre. The discipline is to track NPS as one signal among many and to read the verbatim comments seriously.",
   generic: "Imagine asking people leaving a restaurant whether they would recommend it on a scale of zero to ten. The number gives you a quick sense of whether more people loved it than hated it. But the number alone does not tell you why, and comparing your restaurant's score to a hotel's score does not really work because the contexts are different. Useful as your own trend, weak as a comparison.",
   expert: "Reichheld (2003) Harvard Business Review. Critiques in Keiningham et al. (2007, 2008) and Schneider et al. (2008) document weak correlation with actual referral behaviour and growth. Mathematical concerns include the asymmetric scale loading (six categories of detractor versus two of promoter), the loss of information from collapsing eleven points into three categories, and Goodhart's law effects when NPS is tied to compensation. Best practice: pair the score with verbatim follow-up, track within-company trend rather than industry benchmark, and supplement with churn, repurchase, and actual referral measurement.",
   status: "debated",
   reflect: "Look at your last NPS report. Did anyone read the verbatim comments, or did the number alone drive the conversation? The comments are usually where the signal is.",
   conceptQuiz: [
    {
     q: "NPS is calculated as…",
     options: [
      { text: "Percentage of promoters minus percentage of detractors.", correct: true },
      { text: "Average of all responses divided by the maximum score.", misconception: "Not the formula; the categories matter, not the raw average." },
      { text: "Total responses above five.", misconception: "Above five includes passives and promoters but ignores the deduction." },
      { text: "Number of nine and ten responses only.", misconception: "Detractors must be subtracted, not ignored." }
     ],
     why: "Promoters minus detractors yields the headline NPS number."
    },
    {
     q: "The most serious critique of NPS is that…",
     options: [
      { text: "It correlates weakly with actual referral behaviour and growth across industries.", correct: true },
      { text: "It is too expensive to administer.", misconception: "It is among the cheapest surveys to run." },
      { text: "It requires advanced statistical training.", misconception: "Computation is trivial; the issue is interpretation." },
      { text: "It can only be used in B2C.", misconception: "It is used heavily in B2B too; the critique applies to both." }
     ],
     why: "Empirical correlation with referral and growth is the weakest link."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Calculate yours",          d: "Run a small NPS survey of your last twenty customers and compute the score.", xp: 10 },
    { level: "easy",     t: "Read the verbatims",       d: "Read every open-text comment from the survey and cluster the themes into three buckets.", xp: 20 },
    { level: "advanced", t: "Pair with behaviour",      d: "Cross-check NPS with actual repurchase and referral rates over ninety days, and write a memo on which signal predicted growth more reliably.", xp: 40 }
   ]
  },
  {
   t: "AARRR pirate metrics",
   subdomain: "economics",
   fullForm: "Acquisition, Activation, Retention, Referral, Revenue",
   definition: "Dave McClure's five-stage growth framework covering acquisition, activation, retention, referral, and revenue, with one or two metrics per stage.",
   short: "Five stages. One or two numbers each. Arrr.",
   deep: "Dave McClure created AARRR in 2007 for early-stage startups that were drowning in vanity metrics. Acquisition asks how users find you. Activation asks whether their first experience reaches the moment of value. Retention asks whether they come back. Referral asks whether they bring others. Revenue asks whether they pay. The discipline is to pick one or two metrics per stage and ignore the rest until those move. Most startups over-index on Acquisition (signups feel like progress) and under-invest in Activation and Retention (where the leaks usually are). McClure's repeated lesson is that retention is the foundation, fix it before pouring money into the top of the funnel. Modern variants reorder the stages (RARRA puts Retention first, reflecting the post-2015 mobile reality that user acquisition is expensive enough that without retention, growth is just renting users).",
   generic: "Imagine running a juice stall. Acquisition is how many people walk past. Activation is how many actually taste your juice. Retention is how many come back next week. Referral is how many bring friends. Revenue is how many pay full price. If only one in fifty tasters returns, no amount of foot traffic will save you. Fix that one number first.",
   expert: "McClure (2007) developed the framework at 500 Startups. RARRA reorder (Thomas Petit, 2017) argues that Retention should be measured first because mobile economics changed. Typical metrics: Acquisition (unique visitors, signups), Activation (percent reaching key event in first session), Retention (day-one, day-seven, day-thirty active percent), Referral (k-factor or viral coefficient), Revenue (ARPU, MRR, payback period). Failure modes: tracking all twenty possible metrics instead of one per stage, ignoring activation, and conflating signups with acquisition value.",
   status: "framework",
   reflect: "If you had to pick the single weakest stage of your AARRR funnel right now, which one is it? That is where your next bet should land.",
   conceptQuiz: [
    {
     q: "The five stages of AARRR are…",
     options: [
      { text: "Acquisition, Activation, Retention, Referral, Revenue.", correct: true },
      { text: "Awareness, Action, Repurchase, Recommendation, Renewal.", misconception: "Plausible but invented; not McClure's framework." },
      { text: "Audience, Algorithm, Ranking, Reviews, Revenue.", misconception: "Not the AARRR stages." },
      { text: "Acquisition, Adoption, Reach, Reuse, Recurring.", misconception: "Made-up rephrasing." }
     ],
     why: "McClure's acronym is Acquisition, Activation, Retention, Referral, Revenue."
    },
    {
     q: "The RARRA reorder argues that…",
     options: [
      { text: "Retention should be measured and fixed before pouring spend into Acquisition.", correct: true },
      { text: "Revenue is the only metric that matters.", misconception: "RARRA reorders, it does not collapse to one metric." },
      { text: "Referral is the easiest stage to fix.", misconception: "Referral is rarely the easiest; it depends on retention." },
      { text: "Acquisition is irrelevant in mobile.", misconception: "Acquisition still matters; it just should not be prioritised before retention." }
     ],
     why: "Mobile economics made acquisition expensive enough that retention has to come first."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "List the five stages",     d: "Write your current metric for each of the five AARRR stages on one page.", xp: 10 },
    { level: "easy",     t: "Find the weakest",          d: "Identify which stage has the worst conversion and outline one experiment to lift it.", xp: 20 },
    { level: "advanced", t: "Run a single-stage bet",   d: "Pick one stage, run a focused thirty-day experiment, and measure the lift before considering the next stage.", xp: 40 }
   ]
  },
  {
   t: "Decoy effect",
   subdomain: "behaviour",
   definition: "A pricing or choice phenomenon where adding a deliberately inferior third option makes one of the original options look more attractive by comparison.",
   short: "Add a worse option to make the option you want look obvious.",
   deep: "The decoy effect, formally asymmetric dominance, was documented by Joel Huber and colleagues in 1982. When customers face two roughly equal options, adding a third option that is clearly worse than one of them shifts the choice toward the dominating option. The Economist's famous subscription example offered online only at 59 dollars, print only at 125 dollars, and print plus online at 125 dollars. Almost nobody picked print only, but its presence made print plus online look obviously the best deal, and the share choosing the expensive bundle rose dramatically. Restaurants use the same trick, an absurdly expensive bottle of wine makes the second-most-expensive one look reasonable. The discipline as a marketer is to use decoys honestly to clarify a complex choice, not to manipulate buyers into options that hurt them. The discipline as a buyer is to notice when a third option exists to push you toward a more profitable one, and to compare the two real options without the decoy.",
   generic: "Imagine choosing between a small popcorn for fifty rupees and a large for one hundred and twenty. Hard call. Now the cinema adds a medium for one hundred and ten. Suddenly the large looks like a steal at just ten rupees more, and most people pick it. The medium was never really meant to sell. It was there to make the large look obvious.",
   expert: "Huber, Payne, and Puto (1982) at Duke; popularised by Dan Ariely (Predictably Irrational, 2008). Distinct from anchoring, which biases via the first number, the decoy operates via asymmetric dominance in the choice set. Robust across categories (subscriptions, real estate, restaurants, dating profiles). Mechanism is hypothesised as reduction of choice difficulty by introducing an obviously dominated alternative, which lowers cognitive load. Ethical caveat: regulators in the EU and UK have flagged decoy framing as a potential dark pattern when the dominated option is never actually deliverable.",
   status: "settled",
   reflect: "Look at your last pricing page. Is one of the three tiers a decoy? If yes, is it honest help to the customer or manipulation toward the option that helps you most?",
   conceptQuiz: [
    {
     q: "The decoy effect predicts that…",
     options: [
      { text: "Adding a clearly inferior third option shifts choice toward the option it dominates.", correct: true },
      { text: "Customers always choose the cheapest option.", misconception: "Decoy work shows preferences shift away from the cheapest in many cases." },
      { text: "Three options always confuse customers.", misconception: "Three options can clarify or muddy depending on structure." },
      { text: "Adding any third option doubles revenue.", misconception: "The effect depends on dominance structure, not option count alone." }
     ],
     why: "Asymmetric dominance makes the targeted option look obviously better."
    },
    {
     q: "The Economist subscription example showed that…",
     options: [
      { text: "Adding a dominated print-only option pushed buyers toward the more expensive bundle.", correct: true },
      { text: "Online-only was the most popular option overall.", misconception: "Bundle uptake rose dramatically with the decoy present." },
      { text: "Price drops always raise demand.", misconception: "Not the lesson; the lesson is about choice architecture, not price level." },
      { text: "Subscribers prefer free trials.", misconception: "Free trials are a separate mechanism." }
     ],
     why: "The dominated option made the bundle look like an obvious deal."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the decoy",         d: "Find three pricing pages and identify any decoy options in their tiers.", xp: 10 },
    { level: "easy",     t: "Audit your own page",    d: "Review your own pricing tiers and tag whether any tier exists only as a decoy.", xp: 20 },
    { level: "advanced", t: "Test a decoy ethically",  d: "Run an A/B test adding one transparently inferior tier that helps customers compare, and measure both conversion and post-purchase satisfaction.", xp: 40 }
   ]
  }
 ],

 counterView:
  "Most marketing books, including the ones quoted in this domain, are written by people who, in some honest way, sell positioning workshops or brand strategy. Byron Sharp's case (which has a lot of data behind it) is uncomfortable for them: brand love is mostly a marketer's fantasy, customer \"loyalty\" is statistical noise, and most growth comes from boring stuff like being available in more shops and being easier to remember. If he's even half right, a lot of insight-driven marketing strategy is post-hoc storytelling, the brand sprint felt important, but the growth came from distribution. Before you spend a year on positioning, ask: am I just hard to find and hard to remember? If yes, fix that first.",

 capabilities: [
  "Explain the 4 Ps to a friend in 60 seconds.",
  "Spot the promise, target, and offer in any ad within 10 seconds.",
  "Write a one-sentence positioning statement: \"For X who Y, we are the Z that A.\"",
  "Estimate CAC and LTV for a small project, and use them to decide whether to keep spending.",
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
  { rank: "Practitioner", focus: "Run something real, even small",     do: "Ship one tiny campaign with a measurable goal, could be ₹500 in ads for a side project, a newsletter signup form, anything where you can count something. Run two versions. Compare.",         milestone: "You've moved a real number, with real money, with a system you can repeat.",                                time: "~1-2 months" },
  { rank: "Specialist",  focus: "Go deep in one channel",         do: "Pick one channel you actually like, SEO, email, paid social, content, community. Build real systems there. Ignore the other five for now. Master one before adding another.",             milestone: "You can read an attribution report and a retention cohort without flinching.",                               time: "~3-6 months" },
  { rank: "Expert",    focus: "Brand and performance, together",    do: "Now zoom out. Pair the distinctive-asset work (logo, voice, memorability) with the funnel work (conversion, retention, LTV). Learn pricing. Design experiments your CFO would respect.",         milestone: "You can defend a marketing strategy to a creative team and a finance team in the same meeting.",                      time: "~6-12 months" },
  { rank: "Master",    focus: "Lead, teach, set strategy",       do: "Run real positioning resets for products that matter. Build the playbooks your team uses. Mentor juniors. Read primary research, not just blog posts.",                         milestone: "Multiple brands you've worked on show durable, boring, repeatable growth.",                                 time: "~2+ years" },
  { rank: "Grandmaster", focus: "Define the playbook others borrow",   do: "Publish your own frameworks. Write the book or the long essay other marketers reference. Hire and develop the next layer.",                                       milestone: "When marketers in your space describe how they think, they cite your work without noticing.",                       time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Seth Godin's blog",             what: "Daily, short, original takes on marketing fundamentals and ethics.",                  url: "https://seths.blog/",                    weight: "primary",   verify: false, lastVerified: "2026-06" },
   { name: "Marketing Examples",             what: "Bite-sized real campaigns explained, great pattern-library.",                     url: "https://marketingexamples.com/",              weight: "primary",   verify: false, lastVerified: "2026-06" },
   { name: "Harvard Business Review, Marketing topic",  what: "Free articles + classic frameworks (some paywalled, many free).",                    url: "https://hbr.org/topic/marketing",              weight: "popular",   verify: false, lastVerified: "2026-06" },
   { name: "Andrew Chen's essays",            what: "Growth + marketplaces. Battle-tested, well-written.",                          url: "https://andrewchen.com/list-of-essays/",          weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Julian Shapiro's growth handbook",      what: "Compact, opinionated, evidence-led growth marketing playbook.",                     url: "https://www.julian.com/guide/growth/intro",         weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Reforge blog (free articles)",        what: "Practical, modern growth + product marketing essays.",                          url: "https://www.reforge.com/blog",               verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia, Marketing",            what: "Solid neutral overview of the field's frameworks and history.",                     url: "https://en.wikipedia.org/wiki/Marketing",          verify: false, lastVerified: "2026-06" },
   { name: "April Dunford, Obviously Awesome talks",   what: "Positioning, sharply. Free conference talks on YouTube.",                         url: "https://www.youtube.com/results?search_query=April+Dunford+positioning", verify: false, lastVerified: "2026-06" },
   { name: "Made to Stick, Heath bros (library copy)",  what: "Why some ideas survive and others die. The SUCCESs framework.",                     url: "https://heathbrothers.com/books/made-to-stick/",      verify: false, lastVerified: "2026-06" },
   { name: "Ogilvy on Advertising, David Ogilvy",    what: "Old, opinionated, still works on copy fundamentals.",                          url: "https://www.goodreads.com/book/show/10419.Ogilvy_on_Advertising", verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Positioning, Al Ries & Jack Trout",     what: "The original classic. Short and dense.",                                url: "https://en.wikipedia.org/wiki/Positioning_(marketing)",   price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "How Brands Grow, Byron Sharp",        what: "The evidence-based steelman against pure positioning theory.",                     url: "https://en.wikipedia.org/wiki/Byron_Sharp",       price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Competing Against Luck, Clayton Christensen", what: "Jobs-to-be-Done, with case studies.",                                  url: "",                             price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "$100M Offers, Alex Hormozi",         what: "Practical pricing & offer design for small businesses. Hype-y voice, real models.",            url: "",                             price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Influence, Robert Cialdini",         what: "Six levers of persuasion, applies directly to marketing copy & landing pages.",             url: "https://www.influenceatwork.com/principles-of-persuasion/", price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Obviously Awesome, April Dunford",      what: "Positioning, modern + actionable. Best practical positioning book of the last decade.",         url: "https://www.aprildunford.com/obviously-awesome",      price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Building a StoryBrand, Donald Miller",    what: "Storytelling structure applied to landing-page copy.",                          url: "",                             price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Hooked, Nir Eyal",              what: "Habit-forming product design. Read alongside the ethics conversation.",                 url: "https://www.nirandfar.com/hooked/",             price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "This is Marketing, Seth Godin",       what: "Permission marketing + positioning + ethics, current edition.",                     url: "https://seths.blog/tim/",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Marketing Management, Philip Kotler",     what: "The encyclopaedia of marketing fundamentals. Library copy is fine.",                   url: "https://en.wikipedia.org/wiki/Philip_Kotler", price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Decode 3 ads",     d: "Find any 3 ads in the wild (subway, YouTube, Instagram). For each, write: promise · target · why-now · which P it leans on.",         xp: 30 },
  { t: "Positioning statement", d: "Write one for your work using the template: \"For [target] who [need], we are the [category] that [unique value], because [proof].\"",     xp: 30 },
  { t: "Feature → benefit",   d: "Pick three features of your product/work. Rewrite each as a benefit using \"so you can…\".",                           xp: 30 },
  { t: "Calculate CAC roughly", d: "List everything you spent (incl. time) to acquire your last 5 customers/users. Divide. Compare to what they're worth in a year.",       xp: 40 },
  { t: "Find a real customer", d: "Have one 20-minute call with someone in your target segment. Use Rob Fitzpatrick's Mom Test, ask about their past, not your idea.",      xp: 50 }
 ],
 capstone: {
  t: "Ship one public piece of marketing", d: "Launch a landing page / ad / email / post for something real. Run for at least 7 days. Report what you'd change next time and why.", xp: 200
 },

 quiz: [
  { q: "Which of these is closest to \"positioning\" in the Ries & Trout sense?",
   options: [
    { text: "Listing every feature your product has on the homepage.",           misconception: "More features ≠ stronger position; it dilutes the one idea you'd like to own." },
    { text: "Owning a single, clear idea in the customer's mind.",             correct: true },
    { text: "Spending more than your competitor on ads.",                  misconception: "Share of voice helps mental availability but isn't \"positioning\", you can be loud and still unpositioned." },
    { text: "Using the same colours as the market leader.",                misconception: "Copying assets erases your distinctiveness, the opposite of positioning." }
   ],
   why: "Positioning is the work of owning one idea in one mind in one category. The other answers are either tactics, mistakes, or copying.",
   testOut: true
  },
  { q: "Your CAC is $80 and the average customer pays you $30 of gross profit and churns after 2 months. You should…",
   options: [
    { text: "Spend more on ads to scale faster.",                     misconception: "Scaling a CAC > LTV business burns money faster, growth doesn't fix the unit economics." },
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
    { text: "Patent-pending battery design.",                       misconception: "Buyers don't care about the patent, they care about what it lets them do." }
   ],
   why: "Convert features to benefits using \"so you can…\". \"A full work day without your charger\" is the change in their life."
  },
  { q: "Which is the most reliable, evidence-based claim about how brands grow?",
   options: [
    { text: "Loyal super-fans drive most revenue for big brands.",             misconception: "Sharp's data shows light buyers (rare purchasers) drive most volume, super-fans are a smaller slice than felt." },
    { text: "Mass-market reach to light buyers plus distinctive assets drive growth.",   correct: true },
    { text: "Tightening targeting always increases ROI.",                 misconception: "Narrow targeting can lift short-term ROI but caps long-term growth, both Sharp and most platforms find this." },
    { text: "Differentiating sharply from competitors is the main driver.",        misconception: "Differentiation matters less than distinctiveness, being remembered beats being unique-on-paper." }
   ],
   why: "How Brands Grow (Byron Sharp): mental + physical availability, distinctive assets, mass reach to light buyers, that's where the evidence is."
  },
  { q: "You're writing a testimonial-led landing page. What matters most?",
   options: [
    { text: "Get the most famous person you can.",                     misconception: "Prestige helps awareness, but identification beats prestige for trust. A buyer wants to see people like themselves." },
    { text: "Testimonials from people who look like your target buyer.",          correct: true },
    { text: "Five-star ratings, quantity over face.",                   misconception: "Ratings help, but a single relatable face often outperforms a stack of stars." },
    { text: "Pile on as many as you can fit.",                       misconception: "Volume without relevance reads as desperate; trust isn't a heap." }
   ],
   why: "Cialdini: social proof works strongest when the proof is people-like-us, not just impressive."
  }
 ],

 flashcards: [
  { front: "Define the 4 Ps.",                          back: "Product · Price · Place · Promotion. A compact checklist for marketing decisions (Kotler)." },
  { front: "What is positioning?",                        back: "Owning one clear idea in the customer's mind, in one category, by saying no to other identities." },
  { front: "Features vs benefits, how to convert?",               back: "Use \"so you can…\". \"6-hour battery → a full work day without your charger.\"" },
  { front: "What is Jobs-to-be-Done?",                      back: "Buyers don't want products, they hire products to do a job in their life. Find the job, you find the design." },
  { front: "Why does CAC matter relative to LTV?",                back: "If acquisition costs more than the customer's lifetime value, growth deepens losses. LTV ≥ 3× CAC is a healthy rule-of-thumb." },
  { front: "What's social proof?",                        back: "We copy people-like-us under uncertainty. Strong proof comes from buyers your target identifies with." },
  { front: "Byron Sharp's main claim about brand growth?",            back: "Mental + physical availability and distinctive assets drive growth, mostly via light buyers, not deep super-fan loyalty." },
  { front: "Permission marketing vs interruption?",                back: "Anticipated, personal, relevant messages (Godin). Slower than ads, but compounding and trust-led." }
 ],
 glossary: [
  { term: "Positioning",      def: "Owning one clear idea in the customer's mind." },
  { term: "CAC",          def: "Customer Acquisition Cost, total cost to land one paying customer." },
  { term: "LTV",          def: "Lifetime Value, total gross profit a customer brings over their lifetime with you." },
  { term: "Jobs-to-be-Done (JTBD)", def: "The frame that buyers hire products to do a job in their life." },
  { term: "Mental availability",  def: "How easily the brand comes to mind in a buying moment." },
  { term: "Physical availability", def: "How easily the brand can be bought, distribution, shelf, search results." },
  { term: "Distinctive asset",   def: "A logo, colour, sound, character that's owned and recognisable in 200ms." },
  { term: "Funnel",         def: "A model of prospect drop-off from awareness to purchase (e.g. AIDA)." }
 ]
};

export default d;
