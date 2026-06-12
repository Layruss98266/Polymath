import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "mental_models",
 icon: "🧩",
 hue: "#f472b6",
 category: "Mind & Self",
 name: "Mental Models & Famous Laws",
 tagline: "A latticework for clearer thinking",

 basics: "A mental model is a compact, transferable way of thinking, a lens you can pull out and apply to a brand new problem. Charlie Munger (Warren Buffett's partner) called it \"a latticework\", a small set of strong ideas borrowed from different fields, sitting in your head ready to use.",
 deepBasics: "You don't need a thousand. You need maybe twenty really good ones, from physics, biology, economics, maths, psychology, and the habit of asking, when you're stuck, \"which model fits this problem?\" People who think with a latticework consistently make better calls than people who only know their own field, even when the second group knows more facts.",
 whyItMatters: [
  "Better decisions, faster, with less information than the other person has.",
  "You spot patterns that single-discipline thinkers miss, because the same idea (selection pressure, compounding, equilibrium) shows up under different names in different fields.",
  "You avoid the expensive classics: sunk-cost reasoning, second-order surprises, confidently misreading a system.",
  "You can communicate complex ideas in shorthand to anyone else who shares the vocabulary."
 ],
 realWorldExample: "There's a tiny mental model called inversion. Instead of asking \"how do I succeed at this?\", you ask \"what would absolutely guarantee failure?\" Most of the time, the second question is shockingly easy to answer, and avoiding those things does more for you than chasing brilliance. The Stoics used it. Engineers use it (failure-mode analysis). Charlie Munger built a career on it. One sentence, repeatable forever, used right it changes real decisions every week. That's what a good mental model looks like, small, portable, and quietly doing work in the background of your life.",

 mentors: [
  { name: "Charlie Munger", for: "the latticework of mental models", work: "Poor Charlie's Almanack" },
  { name: "Shane Parrish", for: "modern popularisation of mental models", work: "Farnam Street + The Great Mental Models series" },
  { name: "Donella Meadows", for: "systems thinking + leverage points", work: "Thinking in Systems (2008)" },
  { name: "Nassim Taleb", for: "fragility, antifragility, fat tails", work: "Antifragile (2012)" },
  { name: "Philip Tetlock", for: "calibration + 'foxes vs hedgehogs'", work: "Superforecasting (2015)" }
 ],

 diagrams: [
  { kind: "network", title: "Munger's latticework", caption: "Several strong models from different fields > many shallow ones from one field.", data: { nodes: ["Physics", "Biology", "Econ", "Psych", "Math", "Engineering"], edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,3],[1,4]] } },
  { kind: "quadrant", title: "Eisenhower matrix", caption: "Urgent × Important. Most of life is unimportant + urgent, and we let it eat important + not-urgent.", data: { xAxis: ["Not urgent", "Urgent"], yAxis: ["Not important", "Important"], items: [
   { label: "Schedule", x: 0.2, y: 0.85 },
   { label: "Do now", x: 0.85, y: 0.85 },
   { label: "Drop", x: 0.2, y: 0.15 },
   { label: "Delegate", x: 0.85, y: 0.15 }
  ] } }
 ],

 synthesis: [
  { concept: "Second-order thinking", linksTo: "investing", note: "Most investing edge comes from going one level past the obvious." },
  { concept: "Steelmanning", linksTo: "psychology", note: "The discipline of arguing against your own bias." }
 ],

 subdomains: [
  { id: "decision", name: "Decision Tools", intro: "Lightweight frameworks for choosing well under uncertainty: expected value, inversion, second-order effects. Pull them out before the choice, not after.", capabilities: ["Run a 30-second pre-mortem on any plan you make.", "Use inversion: ask what would guarantee failure, then avoid it.", "Trade gut alone for gut plus a one-page expected value check."] },
  { id: "reasoning", name: "Reasoning Tools", intro: "Ways to think more clearly: first principles, Occam's razor, Bayes. They cut through stories and back to what the evidence supports.", capabilities: ["Strip a problem down to first principles before copying a solution.", "Update your belief by a noticeable amount when new evidence arrives.", "Pick the simpler explanation when both fit the same facts."] },
  { id: "systems", name: "Systems and Cycles", intro: "Most outcomes come from feedback loops and stocks, not lone events. Seeing the system makes intervention smarter and less heroic.", capabilities: ["Map a problem as stocks, flows, and feedback loops on one page.", "Spot a reinforcing loop quietly running away from you.", "Find the leverage point where a small change moves the whole system."] },
  { id: "thinking_traps", name: "Thinking Traps", intro: "The recurring failures of thought: survivorship bias, narrative fallacy, sunk cost. Easier to dodge once you can name them.", capabilities: ["Notice survivorship bias inside any success story you read.", "Ignore sunk cost when deciding whether to continue a project.", "Catch yourself building a tidy narrative around a noisy outcome."] },
 ],

 concepts: [
  { t: "Inversion",               short: "Instead of asking \"how do I succeed?\" ask \"what would guarantee failure?\" Avoid those.",                                                 deep: "Charlie Munger's favourite trick. Imagine you want to be a great spouse. Asking \"how do I have a great marriage?\" is huge, fuzzy, paralysing. Asking \"what would guarantee a terrible marriage?\" produces an answerable list in two minutes: never listen, hold grudges, take them for granted, lie about money. Stop doing those things and you're 80% of the way there. Engineers use this every day in failure-mode analysis: instead of designing for success, design out failure. Stoics used it 2,000 years ago. It works on most ill-defined problems, career, parenting, fitness, because failure is much easier to describe than success.",                                                                                                                 status: "framework", reflect: "Pick a goal of yours. List the things that would guarantee its failure. Are you doing any of them?" },
  { t: "Opportunity cost",            short: "Every choice quietly costs you the next-best thing you could have done instead.",                                                      deep: "You spend two hours scrolling Instagram tonight. Free, right? No. The real cost is the next-best thing those two hours could have bought you, a chapter of a book, an early night, time with someone you love, a walk. The reason most of our decisions feel free is that we never name the alternative. Once you do, the choice often changes. Time is the most precious resource you have because you can't make more of it. Money you can earn back. Hours you can't.",                                                                                                                                                                                                       status: "settled",  reflect: "How did you spend the last two hours? What was the genuine next-best thing you could have done instead?" },
  { t: "Second-order thinking",          short: "Don't stop at \"this causes X.\" Keep going. \"…which causes Y. Which causes Z.\"",                                                     deep: "Howard Marks's framing. First-order thinkers stop at the obvious effect: \"this regulation will help small businesses.\" Second-order thinkers keep going: \"…which raises costs, which raises prices, which hurts the customers it was supposed to help.\" Most policy mistakes, investing mistakes, and parenting mistakes are first-order, the surprising consequence happened one step past where the thinker stopped. The edge isn't being smarter. It's being willing to take the obvious answer and ask \"and then what?\" once or twice more.",                                                                                                                                                               status: "framework", reflect: "Pick a decision you made recently. Trace it two steps forward. What do you see at step two that you didn't at step one?" },
  { t: "Sunk cost",               short: "What you've already spent shouldn't decide what you do next.",                                                                deep: "You bought concert tickets for ₹5,000. The day of the show, you've come down with a cold. The honest question is just: would I rather be at this concert tonight, or in bed? The ₹5,000 is gone either way. Yet most people drag themselves to the concert because they don't want to \"waste\" the money. They end up wasting the evening as well. Same with relationships you've outgrown, businesses that aren't working, courses you're not enjoying. The money and time are gone whether you continue or quit. The only honest question is what's best from here.",                                                                                                                                                       status: "settled",  reflect: "Where are you stuck in something because of what it already cost, rather than what it'll bring you next?" },
  { t: "Occam's razor",             short: "When two explanations fit the facts, default to the simpler one.",                                                              deep: "Named after a 14th-century friar. It's not \"the simplest answer is always right\", sometimes the world is genuinely complicated. It's \"start with the simpler explanation, and only add complexity when the evidence forces you to.\" Your colleague didn't reply for two hours: was she ignoring you, or is she in a meeting? Conspiracy theories tend to violate this rule, they require a huge coordinated effort to be true when a smaller, messier explanation fits just as well.",                                                                                                                                                                                             status: "framework", reflect: "What recent claim did you believe that was more complicated than necessary? What was the simpler version?" },
  { t: "Hanlon's razor",             short: "Never assume malice when stupidity or circumstance explains it just as well.",                                                       deep: "A cheap, useful antidote to the fundamental attribution error. Someone forgot your birthday. Were they thoughtless on purpose, or just busy? Your boss snapped at you. Was it personal, or did her morning go sideways? Most slights, missed messages, and small frustrations aren't aimed at you at all, you just happened to be in the path of someone else's bad day. Default charitable. Downgrade only when there's real evidence of intent. You'll be wrong sometimes, and even when wrong, you'll have spent less energy stewing.",                                                                                                                                                                     status: "framework", reflect: "Take a slight you've taken personally recently. What's the most charitable explanation that still fits the facts?" },
  { t: "Antifragility (Nassim Taleb)",      short: "Things that don't just survive disorder, they get stronger from it.",                                                            deep: "Most things break under stress (fragile). Some resist it (robust). A few rare things actually improve from it, that's antifragile. Your bones get denser when you load them. Your muscles get bigger when you strain them. A startup that survives one near-death pivot is often better than one that never had to. The interesting question Taleb forces is: how do I build a life that gains from shocks rather than just one that hopes to avoid them? Usually the answers involve skin-in-the-game, redundancy, optionality, and not betting everything on calm conditions continuing.",                                                                                                                                                 status: "debated",  reflect: "Where is your life fragile to a shock you can't predict? What would it take to make that part antifragile instead?" },
  { t: "Eisenhower matrix",            short: "Urgent and important is a 2×2. The trap is the important-not-urgent quadrant, eaten by urgent-not-important.",                                       deep: "Sort every task by two axes: is it urgent (must be done soon)? Is it important (will it matter in five years)? You get four quadrants. Urgent + important: do now. Urgent + not important: this is the trap, emails, notifications, last-minute requests, the noisy stuff that feels productive and isn't. Not urgent + important: health, relationships, learning, deep work, the stuff that quietly determines your life. Not urgent + not important: drop it. The single biggest move most people can make is to schedule the not-urgent-but-important and protect it from the not-important-but-urgent. Otherwise the urgent always wins, every day, until the years are gone.",                                                                                                 status: "framework", reflect: "What's the most important not-urgent thing you've been pushing off for weeks? Put it in your calendar today, not next week." },
  {
   t: "Margin of safety",
   subdomain: "decision",
   definition: "A buffer built into a plan or estimate that absorbs error, surprise, or worst-case conditions.",
   short: "Don't build a bridge that holds exactly the weight you expect. Build one that holds twice.",
   deep: "Engineers don't design a bridge to carry exactly the weight forecast. They design it to carry two or three times that, because trucks get heavier, materials weaken, and the forecast is never perfect. Benjamin Graham brought the same idea to investing: only buy when the price is well below your estimate of value, so you can be wrong by a lot and still come out fine. The principle generalises. Keep more cash than you think you need. Take on less debt than you can technically service. Promise a deadline you can hit even when something goes wrong. The point isn't pessimism. It's recognising that your forecasts are wrong more often than your confidence suggests, and a buffer is what turns a survivable surprise into a fatal one.",
   generic: "Imagine packing food for a hiking trip. You don't pack exactly what you'll eat, you pack a little extra, in case the trip runs long or someone drops a sandwich. That extra is your margin of safety. Boring until you need it, then it's the only thing that matters.",
   expert: "Originated formally by Benjamin Graham in The Intelligent Investor (1949) and codified in value investing as buying assets at a meaningful discount to intrinsic value. Cross-applied in engineering as factor of safety, in risk management as capital buffers, and in Taleb's framework as a way to survive fat-tailed events. Often confused with conservatism; it's actually about asymmetric payoffs under uncertainty.",
   status: "framework",
   reflect: "Where in your life are you running with no margin, financially, professionally, or emotionally? What would a 2x buffer there cost you, and what would it protect?",
   conceptQuiz: [
    {
     q: "Margin of safety, in its core sense, is best described as…",
     options: [
      { text: "A buffer built in so you can be wrong and still survive.", correct: true },
      { text: "Always picking the safest option available.", misconception: "Different idea, that's risk aversion. Margin of safety still allows risky bets, just with a buffer." },
      { text: "Refusing to make any forecast.", misconception: "You still forecast, you just don't bet the whole farm on the forecast being right." },
      { text: "Only investing in government bonds.", misconception: "A specific application, not the principle. The principle works across investing, engineering, and life." }
     ],
     why: "The point is to survive the gap between your estimate and reality, not to avoid estimating at all."
    },
    {
     q: "Why does Benjamin Graham's margin of safety reduce risk in investing?",
     options: [
      { text: "Buying well below estimated value means you can be wrong about value and still profit.", correct: true },
      { text: "It guarantees the stock will go up.", misconception: "Nothing guarantees that. The margin makes losses survivable, not impossible." },
      { text: "It only applies to dividend stocks.", misconception: "Graham used it across the board, not just income stocks." },
      { text: "It works by avoiding all risky companies.", misconception: "Graham bought plenty of risky companies, just at prices that gave him room to be wrong." }
     ],
     why: "If you're wrong about value by 30% but bought at a 50% discount, you still come out fine. That gap is the margin."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot a thin margin",  d: "Name one part of your finances or schedule where you have no buffer at all.", xp: 10 },
    { level: "easy",     t: "Add one buffer",    d: "Pick one area and add a concrete margin this week (extra savings, an earlier deadline, a backup plan).", xp: 20 },
    { level: "advanced", t: "Stress test",      d: "Take a major plan and write what breaks if your forecast is wrong by 30%. Rebuild it with the right margin.", xp: 40 }
   ],
   diagram: {
    kind: "bars",
    title: "Buffer size vs room to be wrong",
    caption: "Margin of safety is the gap between your estimate and the breaking point. Bigger buffer, more room to be wrong without ruin.",
    data: {
     items: [
      { label: "No margin", value: 0 },
      { label: "Thin", value: 10 },
      { label: "Healthy", value: 30 },
      { label: "Graham", value: 50 }
     ],
     unit: "%"
    }
   }
  },
  {
   t: "Lindy effect",
   subdomain: "reasoning",
   definition: "For non-perishable things, the longer something has existed, the longer it's likely to keep existing.",
   short: "If a book has been read for 200 years, it's probably going to be read for another 200.",
   deep: "A new restaurant is fragile. It could close next year. A restaurant that's been around for 80 years is much less likely to close next year, because it has already survived recessions, competitors, fashion changes, and bad reviews. The same logic applies to ideas, books, technologies, and practices that aren't perishable. Euclid's geometry has been useful for 2,300 years and will probably still be useful in 2300 years. Last week's viral self-help tweet probably won't. Taleb popularised this as a guide to filtering: when in doubt, trust the old book over the new one, the old technique over the new fad, the old institution over the latest disruptor. Not because old is always right, but because old has already passed a survival test that new hasn't.",
   generic: "Think of it like this. If a song has been played for 50 years, it's probably going to be played for many more. If a song came out last week, you don't know yet. Time is a filter. Things that survive a long time tend to keep surviving.",
   expert: "Formalised by Nassim Taleb in Antifragile (2012), building on a concept from Mandelbrot. Applies to non-perishable categories (ideas, technologies, brands), not biological organisms, which have the opposite property. Mathematically a power-law-style survival distribution. Useful as a Bayesian prior under uncertainty, but vulnerable to selection bias and confounding when applied carelessly to specific cases.",
   status: "debated",
   reflect: "Look at your reading list, your software stack, your habits. How many of them have existed for over 20 years? What does that ratio tell you about your filter?",
   conceptQuiz: [
    {
     q: "Lindy effect predicts that, between a 50-year-old book and a 1-year-old book, the more likely to still be read in 50 years is…",
     options: [
      { text: "The 50-year-old book.", correct: true },
      { text: "The 1-year-old book, because it's more relevant.", misconception: "Relevance fades fast. The old book has already proven its staying power." },
      { text: "Both equally likely.", misconception: "The whole point of Lindy is that age changes expected future lifespan for non-perishable things." },
      { text: "Neither, books are dying.", misconception: "Even if the medium shifts, ideas with long histories tend to persist across mediums." }
     ],
     why: "Surviving 50 years is evidence the book passes a real selection test, the new book hasn't faced that test yet."
    },
    {
     q: "Lindy effect does NOT apply to which of these?",
     options: [
      { text: "A 90-year-old human's remaining lifespan.", correct: true },
      { text: "An ancient mathematical theorem still in use.", misconception: "Ideas are non-perishable, Lindy applies. The longer it's been useful, the longer it's likely to remain useful." },
      { text: "A technology that's been around for 100 years.", misconception: "Technologies fit the non-perishable category Lindy was designed for." },
      { text: "A religious tradition centuries old.", misconception: "Long-surviving traditions are a classic Lindy case." }
     ],
     why: "Lindy applies to non-perishable things. Biological organisms get less expected lifespan with age, not more."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Old-shelf audit",    d: "List five books or ideas you use that are over 50 years old. Then five under 5 years old.", xp: 10 },
    { level: "easy",     t: "Lindy filter",     d: "Before adopting a new tool or method this month, ask, is the older alternative still working? If yes, default to it.", xp: 20 },
    { level: "advanced", t: "Trim the new",     d: "Cut one trendy practice from your routine that's under 5 years old, replace with a Lindy-tested alternative. Track results for a month.", xp: 40 }
   ]
  },
  {
   t: "Chesterton's fence",
   subdomain: "reasoning",
   definition: "A principle that before removing a rule, structure, or tradition, you should first understand why it exists.",
   short: "Before you tear down a fence in the middle of a field, find out why someone put it there.",
   deep: "G.K. Chesterton imagined a reformer walking through a field, finding a fence with no obvious purpose, and announcing he'll tear it down. Chesterton's reply: go away and find out why it was built, then come back. If you still don't see a reason, fine. But until you understand it, you have no business removing it. The point isn't conservatism for its own sake. The point is that many rules, processes, and traditions look pointless from the outside because their original problem is no longer visible. Companies discover this every time a new manager removes a weird-looking process and three months later the problem it was silently preventing comes roaring back. Apply this before you rewrite the team's onboarding doc, drop your grandmother's recipe step, or repeal a regulation.",
   generic: "Imagine you move into a house and there's a strange step halfway up the staircase. You think, ugly, I'll remove it. Then you find out the original builder put it there because the floor below shifts. The fence, the step, the weird rule, often has a reason you can't see from where you're standing.",
   expert: "Articulated by G.K. Chesterton in The Thing (1929). Closely related to Hayek's notion of spontaneous order and to Lindy reasoning, long-surviving institutions encode information that current observers may not have access to. Standard caveat: the principle does not protect rules that were demonstrably built for bad reasons (racist statutes, captured regulations). It protects against the cheap confidence of the newcomer, not against deliberate critique with full information.",
   status: "framework",
   reflect: "Pick a rule or process at work, in your family, or in your routine that you've been quietly itching to remove. Do you actually know why it exists? If not, can you find out before you act?",
   conceptQuiz: [
    {
     q: "Chesterton's fence advises that before removing a rule or tradition, you should…",
     options: [
      { text: "Understand why it was put there in the first place.", correct: true },
      { text: "Get a vote from the affected group.", misconception: "Useful sometimes, but it's not the principle. You can vote it down and still not understand it." },
      { text: "Find a replacement first.", misconception: "Not the principle, you might decide no replacement is needed, but only after understanding the original reason." },
      { text: "Wait at least a year.", misconception: "Time isn't the constraint, understanding is." }
     ],
     why: "Many rules exist because of a problem that's no longer obvious. Understanding the original reason is what tells you whether the problem is still there."
    },
    {
     q: "Chesterton's fence is most likely to lead you astray when…",
     options: [
      { text: "The original reason was bad or unjust, and the rule should be removed on its own merits.", correct: true },
      { text: "The rule is recent.", misconception: "Recency doesn't determine whether the principle applies, understanding the reason does." },
      { text: "Someone you disagree with put the rule there.", misconception: "Source isn't the test. A rule from someone you dislike can still be solving a real problem." },
      { text: "The rule is written down.", misconception: "Written vs unwritten isn't the variable that decides applicability." }
     ],
     why: "The principle protects against ignorant removal, not against informed removal of rules that were unjust or obsolete to begin with."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot a fence",     d: "Name one rule or process in your life or workplace whose origin you don't actually know.", xp: 10 },
    { level: "easy",     t: "Find the reason",  d: "Investigate that fence. Ask the person who set it up, read the original doc, or trace the history. Write what you learn.", xp: 20 },
    { level: "advanced", t: "Decide on purpose", d: "After investigating three fences, choose, with full reasoning, which to keep, modify, or remove. Document the decision so the next person doesn't repeat the cycle.", xp: 40 }
   ],
   diagram: {
    kind: "flow",
    title: "Chesterton's fence: the right order",
    caption: "Don't remove what you don't understand. Investigate the original reason first, then decide on full information.",
    data: {
     steps: ["See the fence", "Ask why it exists", "Find the original reason", "Keep, modify, or remove"]
    }
   }
  },
  {
   t: "Circle of competence",
   subdomain: "decision",
   definition: "The mental boundary around the domains in which you actually have the knowledge and judgment to make reliable decisions.",
   short: "Know what you know. More importantly, know the edge of it, and stop pretending it doesn't exist.",
   deep: "Warren Buffett's idea, sharpened by Charlie Munger. Everyone has a circle of competence, a set of topics where they genuinely understand the dynamics, can spot the traps, and have a working track record. The size of the circle matters far less than knowing where its edge is. A person with a small but clearly mapped circle, and the discipline to refuse decisions outside it, will outperform a brilliant generalist who keeps wandering into terrain they don't understand. Most expensive mistakes happen one step past the edge: a great surgeon who loses money on a friend's restaurant, a senior engineer who gives confident parenting advice, a finance expert who weighs in on geopolitics like it's the same job. Expanding the circle is fine and slow. Pretending the edge isn't there is what ruins people.",
   generic: "Imagine a really good football player who's never played basketball. On the football field, they're elite. On the basketball court, they're just another beginner. The football skill doesn't transfer just because both involve a ball. Knowing what game you're actually good at, and not pretending you're good at the next one, is the whole idea.",
   expert: "Popularised by Warren Buffett in Berkshire Hathaway shareholder letters and developed in Munger's framework. Related to Tetlock's foxes vs hedgehogs, and to the Dunning-Kruger effect at the edge of competence. Not to be confused with strict specialisation, the principle is compatible with broad reading; the constraint is on decision-making, not curiosity. The discipline is to size bets to the depth of the circle, not the breadth of the curiosity.",
   status: "framework",
   reflect: "List three domains you make confident decisions in. Now honestly mark which are inside your circle, which are at the edge, and which are outside. Where have you been confusing curiosity for competence?",
   conceptQuiz: [
    {
     q: "The circle of competence framework says the most important variable is…",
     options: [
      { text: "Knowing where the edge of your circle is, not how big the circle is.", correct: true },
      { text: "Making the circle as large as possible.", misconception: "Breadth without honesty about the edge is exactly what gets people into trouble." },
      { text: "Specialising in one narrow topic for life.", misconception: "Compatible but not required. The principle is about decision discipline, not career strategy." },
      { text: "Only trusting your circle when others agree with you.", misconception: "Crowd agreement isn't the test of competence." }
     ],
     why: "A small, clearly bounded circle plus the discipline to refuse outside it beats a large fuzzy one almost every time."
    },
    {
     q: "Which behaviour most clearly violates the circle of competence?",
     options: [
      { text: "Making a confident, sized-up decision in a domain you've never seriously studied.", correct: true },
      { text: "Reading widely outside your specialty.", misconception: "Reading outside is healthy. The violation is acting confidently on it, not learning about it." },
      { text: "Asking an expert in another field for advice.", misconception: "Outsourcing is the opposite of the violation, it's the correct response when you're outside the circle." },
      { text: "Refusing to invest in something you don't understand.", misconception: "That's the principle in action, not a violation." }
     ],
     why: "Competence and confidence should track together. Confident action outside the circle is the predictable path to expensive mistakes."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Map your circle", d: "Write down three domains where you're genuinely competent, and three where you're not but sometimes act like you are.", xp: 10 },
    { level: "easy",     t: "Say no once",    d: "This week, decline one decision or opinion that sits clearly outside your circle. Note how it feels and what you learn.", xp: 20 },
    { level: "advanced", t: "Outsource on purpose", d: "Pick one outside-the-circle decision you have to make and deliberately route it through someone whose circle covers it. Document the process and the outcome.", xp: 40 }
   ]
  },
  {
   t: "Bayes' theorem",
   subdomain: "reasoning",
   definition: "A rule from probability theory that specifies how to update the probability of a hypothesis when new evidence arrives.",
   short: "Start with how likely something is. Get new info. Adjust your number, do not throw the old one away.",
   deep: "Most people, when shown new evidence, swing all the way toward the evidence and forget the base rate they started with. Bayes' theorem keeps both. It says your new belief is your old belief multiplied by how much the new evidence favours that belief over its rivals. The famous medical example: a test that is 99 percent accurate for a disease that affects 1 in 10,000 people will, when positive, still mean you probably do not have the disease, because the prior is so low. Doctors regularly get this wrong. So do investors, juries, and journalists. You do not need the formula on a napkin to use it, you just need to ask two questions before reacting to new information. How likely was this before, and how strongly does the new evidence really point this way.",
   generic: "Imagine someone tells you a friend was rude at a party. Before deciding what to think, remember how often that friend is rude at parties in general. If almost never, one report should barely shift your view. If often, it should shift it more. Bayes is the discipline of not forgetting the before.",
   expert: "Formally, P(H|E) equals P(E|H) times P(H) divided by P(E). The theorem is the foundation of Bayesian inference, used across machine learning, medical diagnosis, and intelligence analysis. Common failure modes include base-rate neglect (Kahneman and Tversky, 1973) and the prosecutor's fallacy. Bayesian reasoning is closely tied to Tetlock's work on superforecasters, who update incrementally rather than dramatically.",
   status: "settled",
   reflect: "When did you last let a single piece of vivid evidence flip your view on something completely? What was the base rate you ignored to get there?",
   conceptQuiz: [
    {
     q: "Bayes' theorem says your updated belief should depend on…",
     options: [
      { text: "Both your prior belief and how strongly the new evidence favours the hypothesis.", correct: true },
      { text: "Only the new evidence, the prior should be discarded.", misconception: "Discarding priors is base-rate neglect, the classic error Bayes prevents." },
      { text: "Only the prior, new evidence is unreliable.", misconception: "Refusing to update on real evidence is the opposite failure." },
      { text: "Whichever of the two feels more emotionally compelling.", misconception: "Emotional weight has no place in the formula, that is the affect heuristic talking." }
     ],
     why: "Posterior belief is a product of prior and likelihood ratio, both inputs matter."
    },
    {
     q: "A test with 99 percent accuracy comes back positive for a disease that affects 1 in 10,000 people. A Bayesian thinker concludes…",
     options: [
      { text: "There is still a high chance the person does not have the disease because the base rate is very low.", correct: true },
      { text: "There is a 99 percent chance the person has the disease.", misconception: "That ignores the base rate, the most common Bayesian failure." },
      { text: "The test is useless and should be thrown out.", misconception: "The test is informative, it just cannot overpower an extremely low prior on its own." },
      { text: "The person definitely has the disease and should start treatment.", misconception: "Certainty after one test ignores both prior and the false-positive rate." }
     ],
     why: "When priors are very low, even an accurate test produces mostly false positives, this is the canonical Bayesian result."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the prior",      d: "Before reacting to a piece of news today, write down how likely you thought the underlying claim was before you saw it.", xp: 10 },
    { level: "easy",     t: "Update by degree",    d: "For one week, when new evidence appears, write your old probability, your new probability, and one sentence on why the shift is that size.", xp: 20 },
    { level: "advanced", t: "Run the medical case", d: "Work through the 1-in-10,000 disease test example with pen and paper. Then apply the same structure to a current decision in your life.", xp: 40 }
   ]
  },
  {
   t: "Antifragility",
   subdomain: "systems",
   definition: "A property of systems that gain in capability or value from exposure to stressors, volatility, and disorder, going beyond mere robustness.",
   short: "Fragile things break under stress. Robust things resist it. Antifragile things actually get stronger from it.",
   deep: "Nassim Taleb's framing: most discussions treat resilience as the goal, but resilience just survives the shock. Antifragile systems use the shock as fuel. Muscles get stronger from controlled load. Immune systems learn from manageable infection. Startups that survive a downturn often emerge tougher and clearer about what works (beware survivorship bias here). The key is the dose and the structure. Too much stress destroys, the right amount with recovery builds. Antifragility also explains why centralised systems often look strong but shatter under rare shocks, while decentralised messy ones absorb and learn. The practical move is to deliberately introduce small, survivable stressors into the parts of your life and work that you want to grow, and to remove the artificial smoothness that keeps them weak.",
   generic: "Imagine three glass jars, three plastic jars, and three muscles. Drop the glass and it breaks. Drop the plastic and it bounces back unchanged. Lift the muscle, and a week later it has grown to handle more. The muscle is antifragile, the plastic is robust, the glass is fragile.",
   expert: "Taleb's Antifragile (2012) formalises the concept and contrasts it with robustness on a triad of fragile, robust, and antifragile. The mathematical signature is a convex response to volatility, where variance produces upside on average. Closely linked to optionality, barbell strategies, and via negativa. Critics note that the framework is loosely defined and sometimes oversold across domains where the mathematical conditions for convex response do not hold cleanly.",
   status: "framework",
   reflect: "Where in your life are you protecting something from all stress when it actually needs small, survivable stress to grow? Your body, your career, your relationships, your portfolio?",
   conceptQuiz: [
    {
     q: "Antifragility differs from robustness because antifragile systems…",
     options: [
      { text: "Gain capability from exposure to stress, not just survive it.", correct: true },
      { text: "Avoid stress entirely by isolating themselves.", misconception: "Avoidance is closer to fragility hiding behind protection, not antifragility." },
      { text: "Resist stress without changing in any way.", misconception: "That is robustness, which Taleb explicitly contrasts with antifragility." },
      { text: "Are mathematically identical to resilient systems.", misconception: "The whole point of the triad is to separate antifragile from robust or resilient." }
     ],
     why: "Robust systems are unchanged by stress, antifragile systems improve, that is the defining asymmetry."
    },
    {
     q: "Which is the clearest example of antifragility in practice?",
     options: [
      { text: "Strength training that uses progressive overload with recovery to build muscle.", correct: true },
      { text: "Storing all wealth in a single low-volatility savings account.", misconception: "That seeks robustness through avoidance of stress, not gains from it." },
      { text: "Avoiding all difficult conversations to preserve a relationship.", misconception: "Avoidance prevents the small stresses that could strengthen the relationship." },
      { text: "Banning failure from a school curriculum.", misconception: "Removing manageable failure makes learners more fragile, not less." }
     ],
     why: "Progressive overload is the textbook case, controlled stress plus recovery yields a system that handles more next time."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find the muscle",      d: "Name one area of your life where small, survivable stress would build capability you currently lack.", xp: 10 },
    { level: "easy",     t: "Add a stressor",       d: "Introduce one small controlled stressor this week, a hard conversation, a cold exposure, a public draft, and note the response.", xp: 20 },
    { level: "advanced", t: "Audit the smoothness", d: "Identify three areas where you have over-protected yourself. Design a graded exposure plan for one of them across a month.", xp: 40 }
   ]
  },
  {
   t: "Convex vs concave payoff",
   subdomain: "decision",
   definition: "A framing of decisions by the shape of their payoff curve, where convex payoffs have asymmetric upside from small inputs and concave payoffs have asymmetric downside.",
   short: "Some bets have small downside and huge upside. Some have small upside and huge downside. Spot which shape you are in.",
   deep: "Taleb's framing, borrowed from finance and decision theory: think of payoff not as a single number but as a curve. A convex bet, like buying a cheap option or trying many small startup ideas, costs little if it fails and pays a lot if it works. A concave bet, like picking up nickels in front of a steamroller or running a heavily leveraged business in a quiet market, pays a steady small amount until one rare event wipes it out. The trap is that concave bets feel safer most of the time because the downside is rare and the upside arrives reliably. Convex bets feel worse most of the time because they fail often. Over a long enough horizon, the curve shape dominates the average outcome. The strategic move is to load up on convex exposures where the cost of failure is bounded and avoid concave exposures where one bad draw ends the game.",
   generic: "Imagine two friends. One buys ten cheap lottery-style scratchcards each weekend, loses most weeks, but might one day win big. The other lends money to a slightly shady friend at a good interest rate, gets paid back nineteen times in a row, and then one day loses everything. Same average week, very different long-run outcomes.",
   expert: "Convexity refers to a positive second derivative of payoff with respect to a variable, concavity to a negative second derivative. Convex payoffs benefit from volatility through Jensen's inequality, concave payoffs are punished by it. Taleb's barbell strategy combines extreme safety with extreme convex exposure to capture upside while bounding downside. Closely linked to option pricing, venture capital portfolio construction, and the precautionary principle for tail risks.",
   status: "framework",
   reflect: "Look at your current bets, in money, career, and relationships. Which are convex with bounded downside, and which are concave with rare but catastrophic downside? Are you tilted the way you think you are?",
   conceptQuiz: [
    {
     q: "A convex payoff is best described as one where…",
     options: [
      { text: "Downside is bounded and small, while upside is large and asymmetric.", correct: true },
      { text: "Downside is large and rare while upside is small and steady.", misconception: "That describes concave payoffs, the opposite shape." },
      { text: "Outcomes are perfectly symmetric around zero.", misconception: "Symmetric payoffs are neither convex nor concave in the asymmetric sense being used here." },
      { text: "There is no upside at all.", misconception: "Convex bets are defined by their meaningful asymmetric upside." }
     ],
     why: "Convexity is the shape where small inputs can produce disproportionately large positive outputs while losses stay capped."
    },
    {
     q: "Which activity is most clearly concave in its payoff shape?",
     options: [
      { text: "Running a highly leveraged trading book that earns steady small profits until a rare crash.", correct: true },
      { text: "Buying out-of-the-money options on a cheap basket of stocks.", misconception: "That is convex, bounded loss with rare large upside." },
      { text: "Submitting many short stories to many magazines.", misconception: "Cheap submissions with rare big breaks is a convex pattern." },
      { text: "Holding a small diversified index portfolio for decades.", misconception: "Broad indexing is closer to a balanced profile, not the steamroller-style concave bet." }
     ],
     why: "Steady earnings punctuated by rare catastrophic loss is the textbook concave shape, where one bad draw ends the game."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Sketch one bet",        d: "Pick a current decision and sketch its rough payoff curve. Mark the worst case and the best case.", xp: 10 },
    { level: "easy",     t: "Sort your exposures",   d: "List five active exposures in your life and tag each as convex, concave, or roughly linear.", xp: 20 },
    { level: "advanced", t: "Build a small barbell", d: "Design a small barbell allocation, very safe core plus a few cheap convex bets, in a domain you care about. Run it for a quarter and review.", xp: 40 }
   ]
  },
  {
   t: "Pareto principle",
   subdomain: "systems",
   fullForm: "80/20 rule",
   definition: "An empirical observation that for many outcomes, roughly eighty percent of the effects come from twenty percent of the causes.",
   short: "A small slice of inputs causes most of the output. Find that slice, double down, ignore the rest.",
   deep: "Vilfredo Pareto noticed in 1896 that twenty percent of Italians owned eighty percent of the land. Joseph Juran later generalised the pattern as the vital few and the trivial many, applying it to quality defects, customer revenue, software bugs, and many other systems. The split is rarely exactly eighty twenty, sometimes it is ninety ten or seventy thirty, but the underlying observation is consistent: outcomes follow a heavy tailed distribution rather than a uniform one. The practical move is to find your twenty percent, the customers, features, tasks, or hours that drive most of the value, and protect them ruthlessly. The trap is treating the rule as a law: it is a heuristic that often holds, not a prediction you can compute against. Many things are flatter than eighty twenty, and a few are far more extreme.",
   generic: "Look at your closet. You probably wear twenty percent of the clothes eighty percent of the time. Same with the apps on your phone, the friends you actually call, the recipes you cook. Most of the action lives in a small slice.",
   expert: "Pareto's original observation was about wealth distribution and is formally a power law with exponent near one. Juran popularised it as the vital few principle. The split varies by system and depends on the underlying distribution. Treat eighty twenty as a useful prior, not a measurement, and verify with actual data before betting on it.",
   status: "framework",
   reflect: "Look at your last quarter at work. Which twenty percent of your activities produced most of the value, and how much of your time did the other eighty percent eat?",
   conceptQuiz: [
    {
     q: "The Pareto principle is best described as…",
     options: [
      { text: "A heuristic that a small fraction of causes often drives most of the outcomes, with the exact ratio varying.", correct: true },
      { text: "A mathematical law requiring exactly eighty percent of effects from exactly twenty percent of causes.", misconception: "It is an empirical heuristic, and the actual ratio varies widely." },
      { text: "A claim that all systems distribute outcomes uniformly.", misconception: "It is precisely the opposite, it describes heavy tailed distributions." },
      { text: "A theorem proved by Pareto for all economic systems.", misconception: "Pareto observed a pattern in wealth distribution, he did not prove a general theorem." }
     ],
     why: "Pareto distributions are empirically common but not universal, and the eighty twenty number is a rough rule of thumb."
    },
    {
     q: "The most useful action a Pareto lens suggests for personal productivity is to…",
     options: [
      { text: "Identify the small set of activities driving most of your results and protect time for them.", correct: true },
      { text: "Cut all activities, since most are low value.", misconception: "The principle is about reweighting, not eliminating eighty percent of life." },
      { text: "Distribute effort evenly across all activities.", misconception: "Even distribution is exactly what Pareto thinking pushes against." },
      { text: "Always work on the hardest task first.", misconception: "Difficulty and impact are different axes, Pareto is about impact." }
     ],
     why: "The lens is most valuable as a reweighting tool, focusing scarce attention on the disproportionately impactful inputs."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "List the vital few",  d: "Write your top three weekly outputs and the three activities that produce them.", xp: 10 },
    { level: "easy",     t: "Audit your calendar", d: "Tag every meeting last week as high impact or low impact. Note the share of time in each bucket.", xp: 20 },
    { level: "advanced", t: "Run a quarterly cut", d: "Identify the bottom twenty percent of your work commitments by impact and renegotiate or drop them. Track output for the next quarter.", xp: 40 }
   ]
  },
  {
   t: "Inversion",
   subdomain: "reasoning",
   definition: "A problem solving technique that starts from the undesired outcome and works backward to identify the actions or conditions most likely to produce it, then avoids them.",
   short: "Instead of asking how to win, ask how to fail. Then do not do those things.",
   deep: "Carl Jacobi's advice, invert, always invert, became a Charlie Munger staple. The move is simple: in any problem where positive paths are hard to see, list the surest ways to make it worse, then refuse to do them. To build a great team, ask what would destroy a team and avoid those moves. To be a good investor, ask how the worst investors lose money and route around it. To live well, ask what a wasted life looks like and remove its ingredients. Inversion works because failures are often more specific and concrete than successes, which take many forms, and because removing one disastrous habit usually beats adding a clever one. The danger is treating inversion as the whole story: avoiding failure does not guarantee success, it just keeps you in the game.",
   generic: "Trying to make a soup taste good can stall you. Asking what would make a soup taste terrible, too much salt, burnt onions, stale spices, is easy. Avoid those and the soup probably comes out fine.",
   expert: "Inversion is closely related to via negativa in Taleb and to the engineering practice of failure mode and effects analysis. Mathematically it corresponds to proving the contrapositive. Munger emphasises its use in investing as the avoid stupidity over seek brilliance principle. Premortems are a structured inversion technique.",
   status: "framework",
   reflect: "Pick the goal you have been struggling to make progress on. Write the five surest ways to guarantee its failure. How many of them are quietly in your routine right now?",
   conceptQuiz: [
    {
     q: "Inversion as a reasoning technique asks you to…",
     options: [
      { text: "Identify how to guarantee failure and then avoid those actions.", correct: true },
      { text: "Reverse the order of the steps in your plan.", misconception: "Inversion is about reversing the target of analysis, not the order of execution." },
      { text: "Argue the opposite of your own opinion.", misconception: "That is steelmanning, a related but distinct practice." },
      { text: "Solve the problem from the end of the timeline backward.", misconception: "Backward planning is a different technique focused on scheduling, not failure modes." }
     ],
     why: "Inversion targets the failure case directly, since failure modes are typically more concrete and avoidable than success recipes."
    },
    {
     q: "Which problem is inversion most clearly well suited to?",
     options: [
      { text: "Designing a long term retirement strategy where avoiding ruin matters more than maximising upside.", correct: true },
      { text: "Picking a paint colour for a single room.", misconception: "Low stakes aesthetic choices do not benefit much from systematic failure analysis." },
      { text: "Solving a one step arithmetic problem.", misconception: "Inversion adds little value to small deterministic problems." },
      { text: "Choosing which film to watch tonight.", misconception: "The technique is overkill for low consequence reversible choices." }
     ],
     why: "Inversion shines in high stakes domains where failure is catastrophic and success has many acceptable shapes."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Invert a goal",    d: "Pick one current goal and write three ways to guarantee its failure.", xp: 10 },
    { level: "easy",     t: "Inverted checklist", d: "Convert the failure modes into a checklist of things you will not do this month.", xp: 20 },
    { level: "advanced", t: "Run a premortem",  d: "For an active project, run a one hour premortem with collaborators, listing all the ways it could fail, and update the plan to remove the top three risks.", xp: 40 }
   ]
  },
  {
   t: "OODA loop",
   subdomain: "decision",
   fullForm: "Observe, Orient, Decide, Act",
   definition: "A decision cycle developed by John Boyd for fast adaptive action, in which an agent continuously observes the environment, orients to its meaning, decides on a course, and acts, then loops.",
   short: "See, make sense of it, choose, move. Then loop. Speed of cycle beats quality of single choice in a fight.",
   deep: "John Boyd was a US Air Force fighter pilot and military strategist who built the OODA loop from his experience in air combat. He noticed that pilots who completed the observe orient decide act cycle faster than their opponents could put their opponents inside their own loop, forcing them to react to stale information. Orientation is the heart of the model: how you interpret what you see is shaped by culture, prior experience, and current mental models, and getting it wrong corrupts everything downstream. The loop has spread far beyond combat into business strategy, emergency response, and software incident management because most adversarial or fast moving situations reward cycle speed over deliberation. The trap is treating OODA as a linear checklist instead of a continuous loop where new observations constantly disturb your orientation.",
   generic: "Imagine boxing. You see a punch coming, you read whether it is real or a feint, you choose to slip or block, you move. By the time you have moved, the next punch is already on its way, so you are looping continuously.",
   expert: "Boyd developed the OODA loop in unpublished briefings during the 1970s and 1980s, formalised posthumously by writers like Robert Coram. Orientation is explicitly the most weighted node, drawing on Polanyi and Popper. Faster loop time creates decision advantage, but Boyd also stressed that disrupting the opponent's orientation is more decisive than purely cycling faster. Influence on military strategy, agile software, and incident response is well documented.",
   status: "framework",
   reflect: "Think of the last decision you got wrong under pressure. Which node failed, were you looking at the wrong thing, misinterpreting it, choosing late, or acting timidly?",
   conceptQuiz: [
    {
     q: "Boyd's OODA loop stands for…",
     options: [
      { text: "Observe, Orient, Decide, Act.", correct: true },
      { text: "Order, Optimise, Deliver, Audit.", misconception: "That is a project management style framing, not Boyd's OODA." },
      { text: "Operate, Organise, Document, Adjust.", misconception: "Unrelated initialism, not Boyd's model." },
      { text: "Overview, Outline, Define, Apply.", misconception: "Not the OODA loop." }
     ],
     why: "Boyd named the cycle observe, orient, decide, act and emphasised orient as its most weighted node."
    },
    {
     q: "Boyd argued that decision advantage in conflict primarily comes from…",
     options: [
      { text: "Cycling through the loop faster than the opponent and disrupting their orientation.", correct: true },
      { text: "Always picking the best possible decision regardless of time taken.", misconception: "Boyd explicitly preferred fast adequate decisions over slow optimal ones in conflict." },
      { text: "Avoiding decisions until you have full information.", misconception: "That is the opposite of OODA, full information is rarely available in adversarial conditions." },
      { text: "Memorising a fixed playbook of moves.", misconception: "Boyd considered rigid playbooks a vulnerability against an adaptive opponent." }
     ],
     why: "Cycle speed and orientation disruption are the two levers Boyd weighted most heavily for decision advantage."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name your loop",    d: "For a recurring decision in your work or sport, write what observation, orientation, decision, and action look like.", xp: 10 },
    { level: "easy",     t: "Time the loop",     d: "Time how long one full loop takes for that decision today. Note where the delay sits.", xp: 20 },
    { level: "advanced", t: "Halve the loop",    d: "Redesign the process or environment to cut your loop time in half. Run it for two weeks and measure outcomes.", xp: 40 }
   ]
  },
  {
   t: "Steelmanning",
   subdomain: "reasoning",
   definition: "The practice of constructing and engaging with the strongest possible version of an opposing argument, rather than its weakest or caricatured form.",
   short: "Before attacking an idea, make it as strong as you can. Then see if you still disagree.",
   deep: "Steelmanning is the deliberate opposite of strawmanning. Where a strawman attacks a feeble distortion of an opponent's view, a steelman improves the view first, sometimes beyond what the original speaker said, and then engages with that. The discipline forces you to actually understand the argument rather than the speaker, exposes gaps in your own position you had hidden behind a weak opponent, and earns intellectual credibility in serious disagreement. It also tends to lower the emotional temperature of a debate, because the other side feels heard. The trap is fake steelmanning, where you build a slightly nicer strawman and call it a steelman, or where you steelman so generously you abandon any actual disagreement. Used well, it changes some of your own minds and surfaces the real cruxes of disagreement faster.",
   generic: "Imagine you want to fight a champion boxer. You can either fight a cardboard cutout in their shape and declare victory, or you can put on the gloves and actually go. The first proves nothing. Steelmanning is choosing the second.",
   expert: "The term gained popularity in the rationalist community through writers like Eliezer Yudkowsky and Julia Galef. It is closely related to the principle of charity in philosophy and to John Stuart Mill's argument that the strongest test of a belief is being able to argue its opposite. Empirically it correlates with reduced backfire effects in persuasion and improved updating in good faith debate.",
   status: "framework",
   reflect: "Pick a position you hold strongly. Can you state the strongest version of the opposing view well enough that a thoughtful opponent would say you got it right?",
   conceptQuiz: [
    {
     q: "Steelmanning an opposing argument means…",
     options: [
      { text: "Stating the strongest, most charitable version of the opposing view before engaging with it.", correct: true },
      { text: "Attacking the weakest version of the opposing view.", misconception: "That is strawmanning, the opposite of steelmanning." },
      { text: "Refusing to engage with the opposing view at all.", misconception: "Steelmanning is engagement at the highest level, not avoidance." },
      { text: "Agreeing with the opposing view to avoid conflict.", misconception: "Steelmanning does not require agreement, only honest representation." }
     ],
     why: "Steelmanning improves the opposing argument before engaging with it, which surfaces real disagreement rather than caricature."
    },
    {
     q: "The biggest practical benefit of disciplined steelmanning is…",
     options: [
      { text: "Surfacing the actual cruxes of disagreement so the debate can move forward.", correct: true },
      { text: "Always changing the other person's mind.", misconception: "Steelmanning does not guarantee persuasion, it improves clarity." },
      { text: "Letting you win arguments faster.", misconception: "It typically slows down winning in favour of better understanding." },
      { text: "Avoiding all conflict.", misconception: "Steelmanning intensifies real disagreement by removing fake disagreement, not the other way around." }
     ],
     why: "By collapsing strawmen, steelmanning isolates the genuine point of disagreement, where productive debate actually happens."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write the steelman", d: "Pick a view you reject and write a one paragraph steelman of it.", xp: 10 },
    { level: "easy",     t: "Submit for review",  d: "Show your steelman to someone who actually holds the view and ask whether you captured it.", xp: 20 },
    { level: "advanced", t: "Run a debate",       d: "Hold a structured debate where you must defend the opposing view well enough that a neutral observer cannot tell your real position.", xp: 40 }
   ]
  },
  {
   t: "Survivorship bias",
   subdomain: "thinking_traps",
   definition: "The logical error of drawing conclusions from a sample that has passed some selection process while ignoring the cases that did not, leading to overestimation of success rates and misidentification of causes.",
   short: "If you only listen to the winners, you will copy habits that had nothing to do with winning. The losers had them too.",
   deep: "Abraham Wald's analysis of World War Two bombers is the canonical example. The Navy wanted to armour the parts of returning planes that showed the most bullet holes. Wald pointed out that the holes were on the planes that survived. The planes that did not return had probably been hit in the unmarked areas. They needed armour where the survivors had not been hit. The pattern shows up everywhere: successful founders telling you the habits that made them rich while the equally habitual failures are silent, books on what billionaires read in the morning, biographies of generals who happened to win. Survivorship bias inflates apparent success rates, attributes outcomes to incidental traits, and quietly rewrites probability with selection. The fix is to ask, deliberately, what does the full distribution look like, including the ones that did not make it.",
   generic: "Imagine asking everyone in the lottery winners club for their secret. They will all tell you they bought tickets every Wednesday. You will not learn that most Wednesday ticket buyers got nothing because they are not in the room.",
   expert: "Wald's analysis at the Statistical Research Group during World War Two remains the canonical illustration. In finance, hedge fund index returns are inflated by survivorship bias when failed funds are dropped from the dataset. Mlodinow and Taleb discuss it extensively. Empirical correction requires explicit inclusion of the unobserved or failed sample, often via inverse probability weighting or matched comparison.",
   status: "settled",
   reflect: "Pick one piece of success advice you take seriously. Can you name three people who did the same thing and failed, and how do you know that thing helped the success cases?",
   conceptQuiz: [
    {
     q: "Survivorship bias is the error of…",
     options: [
      { text: "Generalising from cases that passed a selection filter while ignoring those that did not.", correct: true },
      { text: "Believing that survivors are biased against newcomers.", misconception: "That is a different concept and not what the term means." },
      { text: "Trusting only people older than you.", misconception: "Age is irrelevant to the technical meaning of the bias." },
      { text: "Refusing to study failure at all.", misconception: "Refusal to study failure is a related habit but not the definition of the bias." }
     ],
     why: "The bias arises whenever conclusions are drawn from a sample filtered by survival, with the failed cases invisible."
    },
    {
     q: "Wald's bomber armour example illustrates that you should reinforce…",
     options: [
      { text: "The areas of returning planes that have no bullet holes, since planes hit there did not return.", correct: true },
      { text: "The areas of returning planes that have the most bullet holes.", misconception: "That is the intuitive but wrong answer, which is exactly what Wald corrected." },
      { text: "All areas of the plane equally regardless of data.", misconception: "Equal armouring ignores the data Wald used to make the correct inference." },
      { text: "The cockpit only, regardless of where the holes are.", misconception: "Wald's argument depended on the actual distribution of holes, not a fixed rule." }
     ],
     why: "Survivors received hits in non critical areas, so the unmarked areas on survivors are where lost planes were hit fatally."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot a survivor sample",  d: "Find one popular advice article and name the unobserved failures it ignores.", xp: 10 },
    { level: "easy",     t: "Find the dead bombers",   d: "Pick a field you care about and list at least five people who tried a similar path and failed.", xp: 20 },
    { level: "advanced", t: "Reweight a decision",     d: "Take a current decision you are making by copying a successful person and explicitly model the base rate of failure for that path before committing.", xp: 40 }
   ]
  },
  {
   t: "Premortem",
   subdomain: "decision",
   definition: "A planning exercise in which a team imagines that a project has already failed and works backward to identify the most likely causes, then redesigns the plan to mitigate them.",
   short: "Before launch, imagine the project failed. List the reasons. Now fix them while you still can.",
   deep: "Gary Klein popularised the premortem in a 2007 Harvard Business Review article, building on prospective hindsight research showing that imagining a future outcome as already realised improves the quality of causal reasoning. The setup is simple: gather the team, say the project failed badly, and ask each person to silently write the reasons. Sharing the lists exposes risks that polite optimism had suppressed, surfaces concerns that junior members felt awkward raising, and converts vague unease into specific mitigations. It works because hindsight, even imagined, breaks the planning fallacy and the desire to look confident in front of peers. The trap is treating it as a single workshop ritual instead of a discipline you repeat as new information arrives, or running it so late that the plan is already locked in.",
   generic: "Imagine you are about to send a long love letter you spent a week writing. Before you hit send, picture the worst possible reply you might get. The reasons you came up with for that reply are exactly what you should fix in the letter first.",
   expert: "Klein (2007) and related work by Mitchell, Russo, and Pennington (1989) on prospective hindsight show that imagining the failure as already occurred increases the specificity and diversity of failure reasons identified. Premortems are a structured form of inversion. They are most effective when run before commitment is irreversible and when conducted with anonymous initial brainstorming to defuse social pressure.",
   status: "framework",
   reflect: "Pick the project you are most invested in right now. Spend ten minutes imagining it failed badly a year from now. What are the three reasons that stand out, and which can you act on this week?",
   conceptQuiz: [
    {
     q: "A premortem in Klein's sense is performed…",
     options: [
      { text: "Before a project starts, by imagining it has already failed and listing the causes.", correct: true },
      { text: "After a project finishes, to analyse what actually went wrong.", misconception: "That is a postmortem, not a premortem." },
      { text: "During execution, after the first failure has occurred.", misconception: "Premortems are designed to surface risks before commitment, not after first failures." },
      { text: "Only by external auditors, never by the team itself.", misconception: "Klein specifically advocates running it with the team about to do the work." }
     ],
     why: "The premortem uses prospective hindsight before commitment, which improves the quality of risk identification."
    },
    {
     q: "The cognitive mechanism that makes premortems more effective than ordinary risk brainstorming is…",
     options: [
      { text: "Prospective hindsight, where treating an outcome as already realised generates more specific causal reasoning.", correct: true },
      { text: "Group consensus pressure, which surfaces hidden agreement.", misconception: "Premortems are designed to break consensus pressure, not amplify it." },
      { text: "External expert audit, which catches what insiders miss.", misconception: "External audit is a different technique, not the premortem mechanism." },
      { text: "Strict time pressure, which forces quick answers.", misconception: "Premortems benefit from unrushed silent reflection, not pure speed." }
     ],
     why: "Prospective hindsight is the cognitive lever Klein cites, drawing on Mitchell, Russo, and Pennington's research."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Solo premortem",     d: "Spend ten minutes writing the reasons your current top project might fail badly within a year.", xp: 10 },
    { level: "easy",     t: "Mitigation pass",    d: "Pick the top three reasons and write one concrete prevention or response for each.", xp: 20 },
    { level: "advanced", t: "Team premortem",     d: "Facilitate a one hour premortem with your team before the next major commitment. Anonymise the initial brainstorm and capture the mitigations in the plan.", xp: 40 }
   ]
  }
 ],

 counterView: "Mental models can become collectible knick-knacks, names you sprinkle in conversation rather than tools you use. Treat 'I learned 100 mental models' as a warning sign; treat 'I changed 3 decisions this year using inversion' as the goal. Also, models from one discipline imported into another can mislead, Taleb's antifragility is mathematically narrow even though its vibe is broadly applied. Some popular 'laws' (Pareto's 80/20, Parkinson's, Murphy's) are heuristics, not laws, useful, not predictive. Beware confident lists of '50 mental models to think clearly', they're often just clear-sounding restatements of common sense.",

 capabilities: [
  "Use inversion on at least one real decision per week.",
  "Name the opportunity cost of important choices out loud.",
  "Spot sunk-cost reasoning in yourself and others.",
  "Steelman an opposing argument before dismissing it.",
  "Schedule important non-urgent work weekly (Eisenhower)."
 ],
 cheatsheet: [
  "Invert. What would guarantee failure?",
  "Name the opportunity cost.",
  "Ask 'and then what?' (second-order).",
  "Sunk cost is sunk. Decide on future.",
  "Hanlon's razor: not malice, circumstance.",
  "Important + not-urgent is the trap. Schedule it.",
  "Models are tools, not collectibles. Use 3 well > know 30."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Build a small, useful latticework",         do: "Read The Great Mental Models Vol 1 and Charlie Munger's USC speech. Pick 10 models you'll actually use, not 100 to collect. Quality over quantity.",                                                                                       milestone: "You can name and explain 10 models from memory, not glance at a list of 100.",                                         time: "~1 month" },
  { rank: "Apprentice",  focus: "Use them on real decisions every week",        do: "Once a week, run a real decision through inversion, opportunity cost, and second-order thinking. Write the reasoning down. After a few weeks you'll start using them automatically.",                                                                         milestone: "Your decisions visibly change, you catch traps you'd previously have walked into.",                                       time: "~1-2 months" },
  { rank: "Practitioner", focus: "Pull from multiple disciplines",            do: "Deliberately borrow models from physics, biology, economics, maths, psychology. The point is to escape one-discipline thinking, especially in your own field.",                                                                                    milestone: "You catch one-discipline tunnel-vision in colleagues, without being insufferable about it.",                                   time: "~3-6 months" },
  { rank: "Specialist",  focus: "Systems thinking and feedback loops",         do: "Read Donella Meadows's Thinking in Systems. Apply leverage-point thinking to a real organisation or problem you're working on. Most surprising failures are systems failures.",                                                                             milestone: "You can map a real system on a whiteboard, with feedback loops, and identify where small changes would matter most.",                       time: "~6 months" },
  { rank: "Expert",    focus: "Calibrate your predictions",              do: "Read Tetlock's Superforecasting. Start making calibrated predictions about real events, score yourself, adjust. Most people never measure how often they're right, and stay confidently wrong forever.",                                                                 milestone: "Your predictions are measurably better than they were a year ago. You can quote your hit rate.",                                 time: "~1 year+" },
  { rank: "Master",    focus: "Teach others to think clearly",             do: "Help others use the models. Coaching them sharpens your own framing. Write essays. Explain things in plain words.",                                                                                                         milestone: "People around you borrow your framings without crediting them, the highest compliment.",                                     time: "~2 years+" },
  { rank: "Grandmaster", focus: "Contribute new framings that travel",         do: "Original mental models or research that other thinkers find useful and adopt.",                                                                                                                             milestone: "Other people cite your models when describing how they think.",                                                 time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Farnam Street, Mental Models hub",         what: "Best free curated index of mental models, with essays.",             url: "https://fs.blog/mental-models/",                            weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Charlie Munger, Psychology of Human Misjudgement", what: "Foundational speech / transcript freely available.",               url: "https://fs.blog/great-talks/psychology-human-misjudgement/",              weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Donella Meadows, \"Leverage Points\" essay",    what: "Free, short, foundational systems-thinking essay.",               url: "https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia, List of cognitive biases",       what: "Comprehensive index with primary citations.",                   url: "https://en.wikipedia.org/wiki/List_of_cognitive_biases",                verify: false, lastVerified: "2026-06" },
   { name: "Tetlock, Good Judgment Project (public)",     what: "Public-facing materials on forecasting + calibration.",             url: "https://www.gjopen.com/",                               verify: false, lastVerified: "2026-06" },
   { name: "Nassim Taleb, Twitter + essay archive",      what: "Essays + book chapters posted freely. Spiky, useful.",              url: "https://www.fooledbyrandomness.com/",                          verify: false, lastVerified: "2026-06" },
   { name: "LessWrong, Sequences",               what: "Long-form essays on rationality + biases (variable quality, often deep).",     url: "https://www.lesswrong.com/library",                           weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Naval Ravikant, How to Get Rich (free podcast)",  what: "Practical mental models for compounding wealth and learning.",          url: "https://nav.al/rich",                                 weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Shane Parrish, The Knowledge Project podcast",  what: "Free, long-form interviews about thinking clearly.",               url: "https://fs.blog/knowledge-project-podcast/",                      verify: false, lastVerified: "2026-06" },
   { name: "Sive Maguire, Mental Model Index",         what: "Free, browsable mental-models index.",                      url: "https://untools.co/",                                 verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Great Mental Models (Vol 1-4), Parrish",    what: "Most accessible curated set.",                          url: "https://fs.blog/tgmm/",                                price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Thinking in Systems, Donella Meadows",       what: "Systems thinking made teachable.",                        url: "https://donellameadows.org/archives/thinking-in-systems-a-primer/",           price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Antifragile, Nassim Taleb",            what: "Spiky, useful, sometimes wrong, always provocative.",               url: "https://en.wikipedia.org/wiki/Antifragile_(book)",                   price: "verify", weight: "popular", verify: false, lastVerified: "2026-06" },
   { name: "Superforecasting, Philip Tetlock & Dan Gardner", what: "Calibration + foxes-vs-hedgehogs.",                        url: "https://www.goodjudgment.com/superforecasting-book/",                 price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Poor Charlie's Almanack, Charlie Munger",     what: "Munger's collected speeches + framework.",                    url: "https://www.poorcharliesalmanack.com/",                        price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Seeking Wisdom, Peter Bevelin",          what: "Mental-models book that distils Munger and Buffett.",              url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Black Swan, Nassim Taleb",           what: "Fat-tailed events + uncertainty.",                        url: "https://en.wikipedia.org/wiki/The_Black_Swan_(Taleb_book)",              price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Skin in the Game, Nassim Taleb",          what: "Asymmetric risk + ethics. Read with critique in mind.",             url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Thinking, Fast and Slow, Kahneman",        what: "Foundational; cross-listed with Psychology.",                   url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",                price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Range, David Epstein",               what: "The generalist case + cross-domain transfer.",                  url: "https://en.wikipedia.org/wiki/Range:_Why_Generalists_Triumph_in_a_Specialized_World", price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Invert one decision", d: "Pick a goal. List everything that would guarantee its failure. Stop doing any of them.", xp: 40 },
  { t: "Opportunity-cost audit", d: "Track one full day's hours. Tag each block with its opportunity cost. Note the surprises.", xp: 50 },
  { t: "Sunk-cost flag", d: "Find one project/relationship/habit you continue mostly because of past investment. Decide on future alone.", xp: 40 },
  { t: "Schedule the important", d: "Pick the most important non-urgent thing. Put it in your calendar this week.", xp: 30 },
  { t: "Steelman", d: "Pick a strong opinion. Write the best version of the opposing case in 200 words.", xp: 30 }
 ],
 capstone: { t: "Decision journal", d: "For 30 days, write one decision per day with the model used + expected outcome. After 30, review which models actually helped.", xp: 200 },

 quiz: [
  { q: "What's inversion, as a thinking tool?", options: [
   { text: "Optimism reframing, focus on the upside.", misconception: "Different move. Inversion = visualise failure to avoid it." },
   { text: "Ask 'what would guarantee failure?' instead of 'how do I succeed?'", correct: true },
   { text: "Doing the opposite of what's recommended.", misconception: "That's contrarianism, not inversion." },
   { text: "A math operation.", misconception: "Borrowed from math, but here a thinking tool." }
  ], why: "Avoiding stupidity is often easier and more decisive than chasing brilliance. Munger's go-to.", testOut: true },
  { q: "Sunk-cost fallacy is best described as…", options: [
   { text: "Investing more time in something because you already spent time on it.", correct: true },
   { text: "Refusing to invest in anything new.", misconception: "Opposite-ish. Sunk-cost is about clinging to what you already invested in." },
   { text: "Always selling at the bottom.", misconception: "Different bias (panic / loss aversion)." },
   { text: "Ignoring opportunity cost.", misconception: "Related but distinct. Opportunity cost = next-best alternative; sunk-cost = past investment." }
  ], why: "Future decisions should depend only on future costs vs benefits. What's already spent is gone." },
  { q: "Hanlon's razor says…", options: [
   { text: "Never attribute to malice what is adequately explained by stupidity or circumstance.", correct: true },
   { text: "Always assume the worst.", misconception: "Opposite of Hanlon's razor." },
   { text: "Stupidity is malice.", misconception: "Wrong direction." },
   { text: "Only experts can be trusted.", misconception: "Different topic." }
  ], why: "Cheap antidote to the fundamental attribution error. Default charitable, downgrade only with evidence." },
  { q: "Second-order thinking is…", options: [
   { text: "Asking 'and then what?' beyond the first effect.", correct: true },
   { text: "Thinking twice before acting.", misconception: "Loose paraphrase that misses the chained-effects core." },
   { text: "Using two brains.", misconception: "Joke answer." },
   { text: "Only used in finance.", misconception: "Used across investing, policy, parenting, engineering." }
  ], why: "Most surprises are second-order. Going one step past the obvious is where edge lives." },
  { q: "Risk of accumulating mental models?", options: [
   { text: "They become collectibles you cite, not tools you use.", correct: true },
   { text: "You forget your first language.", misconception: "Joke answer." },
   { text: "They make you slower.", misconception: "Used well, the opposite, faster, clearer decisions." },
   { text: "There's no risk.", misconception: "There is, name-dropping models you don't use is intellectual cosplay." }
  ], why: "The goal is changed decisions, not a longer vocabulary list." }
 ],

 flashcards: [
  { front: "Inversion?", back: "Ask 'what would guarantee failure?' and avoid those. Often easier + more decisive than chasing success." },
  { front: "Opportunity cost?", back: "The cost of any choice is the next-best alternative you didn't take." },
  { front: "Second-order thinking?", back: "Ask 'and then what?' Most surprises live one step past the obvious effect." },
  { front: "Sunk cost?", back: "What's already spent is gone. Future decisions should depend only on future costs vs benefits." },
  { front: "Occam's razor?", back: "Prefer the simplest explanation that fits the evidence, as a default, not a law." },
  { front: "Hanlon's razor?", back: "Don't blame malice for what circumstance or stupidity explains." },
  { front: "Antifragility?", back: "Things that gain from disorder, not just resist it. Build for it via skin-in-the-game, optionality, redundancy." },
  { front: "Eisenhower matrix?", back: "Urgent × Important. The trap: important + not-urgent (health, learning) gets eaten by urgent + not-important." }
 ],
 glossary: [
  { term: "Mental model", def: "A compact, transferable way of thinking, a lens for decisions." },
  { term: "Latticework", def: "Munger: a small set of strong models from many fields, used together." },
  { term: "Inversion", def: "Solving by avoiding failure modes instead of chasing success." },
  { term: "Opportunity cost", def: "Next-best alternative forgone." },
  { term: "Sunk cost", def: "Money/time already spent and unrecoverable." },
  { term: "Steelman", def: "Strongest possible version of an opposing argument." },
  { term: "Antifragile", def: "Improves under disorder, beyond just robust." },
  { term: "Second-order effect", def: "Consequence of the consequence." }
 ]
};

export default d;
