import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "psychology",
 icon: "🧠",
 hue: "#a78bfa",
 category: "Mind & Self",
 name: "Human Psychology",
 tagline: "Why people do what they do",

 basics: "Most of what you think of as \"deciding\" already happened before you noticed. Some part of your brain handled it in a tenth of a second, and the part of you that talks to itself in words showed up afterwards to take credit. Psychology is the careful study of this gap, between what we actually do and the stories we tell about why we did it. You can't think your way out of having biases. You can learn to spot them, especially the ones that are quietly costing you money, relationships, or sleep.",
 whyItMatters: [
  "You'll understand your own bad decisions before you start judging other people's.",
  "You'll spot manipulation, in ads, news, sales calls, family arguments, instead of just feeling sold.",
  "You'll build relationships, teams, and habits that work with human nature instead of fighting it.",
  "You'll stop misreading people so confidently. A lot of expensive mistakes start there."
 ],
 realWorldExample: "Supermarkets play slow music in the evening. Shoppers move slower, spend longer per aisle, and walk out with more in the trolley. Almost nobody notices the music while they're shopping. Almost everyone, if asked, would say \"I bought what I needed.\" The whole decision felt like choice from the inside, but a music director somewhere had already shifted the dial. That's psychology in one paragraph, the gap between what runs you and what you think is running you.",

 mentors: [
  { name: "Daniel Kahneman", for: "fast vs slow thinking, prospect theory", work: "Thinking, Fast and Slow (2011)" },
  { name: "Robert Cialdini", for: "the 6 principles of influence", work: "Influence (1984)" },
  { name: "Carol Dweck", for: "fixed vs growth mindset", work: "Mindset (2006)" },
  { name: "Solomon Asch", for: "conformity (the line experiments)", work: "Asch conformity experiments (1951)" },
  { name: "Robert Sapolsky", for: "biology of behaviour", work: "Behave (2017)" }
 ],

 diagrams: [
  { kind: "flow", title: "System 1 vs System 2 (Kahneman)", caption: "Two modes of thinking, constantly handing off.", data: { steps: ["Input", "System 1 (fast, automatic)", "Anomaly?", "System 2 (slow, effortful)", "Decision"] } },
  { kind: "cycle", title: "Habit loop (Duhigg + Clear)", caption: "Duhigg's 3-step cue, routine, reward extended by James Clear's 4-step cue, craving, response, reward.", data: { nodes: ["Cue", "Craving", "Routine", "Reward"] } }
 ],

 synthesis: [
  { concept: "Social proof", linksTo: "marketing", note: "The same machinery a marketer uses on you is the one you've used on yourself a thousand times today." },
  { concept: "Anchoring", linksTo: "personal_finance", note: "Why the first price you see decides what feels expensive." }
 ],

 subdomains: [
  { id: "biases", name: "Cognitive Biases" },
  { id: "thinking", name: "Two Systems Thinking" },
  { id: "influence", name: "Influence and Social" },
  { id: "mindset", name: "Self and Mindset" },
 ],

 concepts: [
  { t: "System 1 vs System 2",        subdomain: "thinking", short: "You have two thinking modes. One's fast and runs the show. The other's slow and shows up late.",                                     deep: "Daniel Kahneman's framing: System 1 is fast, automatic, effortless, it sees a face and knows your friend is angry, before you've decided anything. System 2 is slow, careful, expensive, it's what kicks in when you balance a long bill or learn a new word. You feel like System 2 runs your life because it's the part of you that talks in sentences. It doesn't. System 1 handles 95% of your day; System 2 only gets called in when System 1 hits something it can't pattern-match. Most cognitive biases are System 1 quietly getting away with a wrong answer because System 2 never bothered to check.",                                                                                              status: "framework", reflect: "Name three decisions you made today that felt 'considered.' How much was actually System 1 dressed in a suit?" },
  { t: "Confirmation bias",          subdomain: "biases", short: "You notice things that fit what you already believe. You barely notice things that don't.",                                        deep: "Pay attention next time you read the news on a topic you have strong opinions about. You'll find yourself nodding at the parts that fit your view, and skipping past or finding clever objections to the parts that don't. That's confirmation bias, and it's running in the background all the time, in how you read people, evaluate ideas, pick stocks, judge politicians. The only real defence is uncomfortable: actively look for the best version of the opposing case (called 'steelmanning'), not just the strawman version that's easy to dismiss.",                                                                                                                                     status: "settled",  reflect: "Pick one strong opinion of yours. What evidence would change it? If your honest answer is 'nothing,' that's a flag." },
  { t: "Anchoring",              subdomain: "biases", short: "The first number you see drags everything else toward it.",                                                       deep: "If a shop sticks a sign on a jacket saying \"₹8,000, now ₹4,999,\" you feel like you got a deal. Even though the jacket may have been on the rack at ₹4,999 the whole time. The original ₹8,000 number, even when it's fake, quietly drags your sense of what's fair. Anchoring works in salary negotiations, property deals, even in psychology experiments where the anchor is a random number from a wheel. The defence: before you walk into any negotiation, decide your own number in writing. The first number you see is rarely an accident.",                                                                                                                                         status: "settled",  reflect: "In your last big negotiation or purchase, what was the first number on the table? How did it shape what felt 'fair' afterwards?" },
  { t: "Loss aversion",            subdomain: "biases", short: "Losses hurt about twice as much as the same-sized gains feel good.",                                                   deep: "Imagine you find ₹5,000 on the street. Pleasant. Now imagine you lose ₹5,000 from your wallet. That second feeling is about twice as bad. The maths is symmetric, your wealth changed by the same amount, but your brain isn't. Kahneman and Tversky's prospect theory: losses loom larger than equivalent gains. This one bias drives a huge amount of bad behaviour. People hold on to losing investments hoping to break even (they wouldn't have bought it today). They stay in jobs and relationships too long because leaving feels like a loss, even when staying is the bigger one. Reframing the choice in terms of opportunity cost (\"what am I giving up by not changing?\") helps balance the scale.",                                                                 status: "settled",  reflect: "Where in your life are you avoiding a small clear loss while paying a much bigger hidden one?" },
  { t: "Cialdini's six levers of influence",  subdomain: "influence", short: "Reciprocity, commitment, social proof, authority, liking, scarcity. Once you know the names, you see them pulled on you every day.",                   deep: "Robert Cialdini spent decades watching salespeople, fundraisers, and cult leaders and found the same six tools come up again and again. Reciprocity (free gift before the ask), commitment (small yes before the big one), social proof (everyone else is doing it), authority (a person in a white coat said so), liking (we say yes to people we like), and scarcity (only three left at this price). None of them are evil on their own, the same tools build trust and run cons. The point isn't to never use them. The point is that once you can name them, the next time a sales pitch makes you feel oddly pressured, you'll spot exactly which lever is being pulled.",                                                                                 status: "framework", reflect: "Pick one ad today and try to name every Cialdini lever in it. How many do you spot?" },
  { t: "Fundamental attribution error",    subdomain: "biases", short: "When someone else messes up, you blame their character. When you mess up, you blame the situation.",                                   deep: "A stranger cuts you off in traffic and you mutter \"what a rude driver.\" Two hours later you cut someone off and you think \"I had to, I was late.\" Same action, two completely different stories. We extend ourselves situational generosity that we don't extend to other people. Done quietly, over years, it corrodes relationships and teams, every bad behaviour from your colleague becomes evidence of who they are, while every bad behaviour from you is just bad luck. The fix is simple to describe and hard to do: extend the same situational read to the other side that you give yourself.",                                                                                                                 status: "settled",  reflect: "Replay your most recent conflict. What's the most generous situational read of the other person you could write down?" },
  { t: "Conformity (the Asch experiments)",  subdomain: "influence", short: "Even on obvious questions, most of us will go along with the group rather than stand out.",                                        deep: "Solomon Asch put one volunteer in a room with several actors and showed them two lines, one obviously longer than the other. The actors all confidently said the shorter one was longer. Around three quarters of the real volunteers cracked at least once and agreed, even though the answer was visibly wrong. That was in a small room in the 1950s. Now scale it up to social media, work meetings, family WhatsApp groups, and ask why people don't speak up about things they know. The data is hopeful in one direction though: dissent gets dramatically easier as soon as one other person dissents first. Being the second person to push back is much easier than being the first. Be the first sometimes anyway.",                                                         status: "settled",  reflect: "When did you last stay silent about something you believed, just to fit in? What did that cost, you, or whoever was listening?" },
  { t: "Growth vs fixed mindset",       subdomain: "mindset", short: "Believing skill can be built changes how you respond to failure.",                                                     deep: "Carol Dweck's research, simplified: kids praised for being \"smart\" later avoided harder problems (failing might mean they aren't smart anymore). Kids praised for effort tried the harder problems and kept improving. The thing being praised determined how they handled future setbacks. Honesty caveat: some of the bigger Dweck claims didn't replicate cleanly when other labs tried them, and the world of pop \"growth mindset\" took it further than the data supports. But the core observation, that praising effort and strategy beats praising trait, in yourself and your kids, has held up well enough to use.",                                                                                                            status: "debated",  reflect: "How do you praise people you mentor, or your own kids, or yourself? Trait (\"you're so smart\") or process (\"I love how you tried X\")?" },
  {
   t: "Dunning-Kruger effect",
   subdomain: "biases",
   definition: "A cognitive bias where people with low ability in a task tend to overestimate their ability.",
   short: "The less you know, the more confident you sound. The more you learn, the more you realise how little you know.",
   deep: "Two psychologists, David Dunning and Justin Kruger, asked people to take a test and then guess their score. The people who scored worst confidently predicted they'd done well. The people who scored best slightly underestimated themselves. The reason is uncomfortable: the same lack of skill that makes you bad at something also makes you bad at noticing you're bad at it. The classic curve, peak confidence at near-zero knowledge, a long dip as you learn enough to see the gap, then slow recovery, isn't perfectly clean in the data, but the underlying pattern shows up everywhere from new drivers to junior managers to first-year medical students.",
   generic: "Imagine someone who just watched one cooking video and now thinks they can run a restaurant. They don't know enough to know what they don't know. Meanwhile a real chef is the one who says, honestly, that they're still learning.",
   expert: "Kruger and Dunning (1999) showed that performance and self-assessment are weakly correlated at the bottom quartile, with low performers overestimating by 30+ percentile points. Subsequent work (Nuhfer et al.) argues some of the effect is a statistical artefact of regression to the mean, but the core finding, that metacognitive accuracy itself requires the skill being assessed, has held up.",
   status: "debated",
   reflect: "Where in your life are you currently confident at a level that, on reflection, might just be early-curve confidence? What would a real expert in that field say about your level?",
   conceptQuiz: [
    {
     q: "The Dunning-Kruger effect predicts that people with the LEAST skill in a task will, on average…",
     options: [
      { text: "Overestimate their ability the most.", correct: true },
      { text: "Underestimate their ability the most.", misconception: "That tends to be the pattern for high performers, who know how much they don't know." },
      { text: "Be the most accurate self-assessors.", misconception: "Accurate self-assessment requires the same skill being measured, which low performers lack." },
      { text: "Refuse to self-assess.", misconception: "The bias shows up most when low performers cheerfully do self-assess." }
     ],
     why: "Low skill carries a second cost: you can't see your own gap, so confidence runs ahead of competence."
    },
    {
     q: "What's the strongest defence against your own Dunning-Kruger blind spot?",
     options: [
      { text: "Get feedback from people who are clearly better than you in that domain.", correct: true },
      { text: "Trust your gut, you usually know how good you are.", misconception: "Gut accuracy is the exact thing that breaks at low skill levels." },
      { text: "Read more books about the topic.", misconception: "Helps build skill, but doesn't directly calibrate self-assessment without external feedback." },
      { text: "Compare yourself to people just starting out.", misconception: "Inflates confidence by picking an easy benchmark, the opposite of calibration." }
     ],
     why: "External feedback from someone genuinely more skilled is the cheapest way to see the gap your own brain is hiding from you."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the curve",      d: "List one skill you were loudly confident in early on and now realise you knew little about.", xp: 10 },
    { level: "easy",     t: "Find an honest mirror", d: "Pick a skill you currently think you're good at. Ask someone genuinely better to rate you honestly.", xp: 20 },
    { level: "advanced", t: "Calibration log",     d: "For one week, predict your performance before tasks and check the score after. Track the gap.", xp: 40 }
   ],
   diagram: {
    kind: "curve",
    title: "Confidence vs competence",
    caption: "Confidence spikes early on tiny knowledge, crashes when reality lands, then slowly recovers as real skill compounds.",
    data: {
     x: "Competence",
     y: "Confidence",
     series: [
      { label: "Self-rated confidence", points: [[0, 10], [15, 95], [30, 30], [55, 45], [80, 70], [100, 85]] },
      { label: "Actual competence", points: [[0, 0], [25, 20], [50, 45], [75, 70], [100, 95]] }
     ]
    }
   }
  },
  {
   t: "Availability heuristic",
   subdomain: "biases",
   definition: "A mental shortcut where the ease of recalling examples drives the perceived probability of an event.",
   short: "If you can picture it easily, you think it happens often. Vivid beats common, every time.",
   deep: "After watching a news report on shark attacks, you suddenly feel nervous about swimming, even though the actual odds haven't moved. Your brain confused \"easy to remember\" with \"likely to happen.\" Tversky and Kahneman called this the availability heuristic, and it explains a huge number of bad estimates. People overestimate plane-crash deaths and underestimate diabetes deaths because one is in the news and the other isn't. Politicians legislate based on the last dramatic event, not the steady boring statistics. The fix is annoying but works: when something feels common, ask whether it actually is, or whether you just heard about it three times this week.",
   generic: "Imagine asking what's more dangerous, a swimming pool or a shark. Movies make sharks feel huge in your head, so it feels obvious. The boring truth is that pools quietly kill far more people every year. Easy to remember does not equal common.",
   expert: "Tversky and Kahneman (1973) formalised availability as one of three core heuristics alongside representativeness and anchoring. The bias interacts with media salience, recency, and emotional vividness. It's a major driver of risk misperception in public policy, insurance pricing intuitions, and post-event regulatory overreach. Base-rate neglect is its frequent companion.",
   status: "settled",
   reflect: "What's one risk you've been quietly nervous about lately? Look up the actual numbers. Is your fear matched to reality, or matched to your news feed?",
   conceptQuiz: [
    {
     q: "Why do most people overestimate the risk of dying in a plane crash compared to a car crash?",
     options: [
      { text: "Plane crashes are rare but vivid and heavily covered, so they come to mind easily.", correct: true },
      { text: "Planes are actually more dangerous per mile than cars.", misconception: "The opposite, per passenger mile, commercial flying is far safer than driving." },
      { text: "People hate flying for emotional reasons unrelated to risk.", misconception: "Fear of flying exists, but the bias here is about probability estimates, not emotion alone." },
      { text: "Insurance companies inflate the numbers.", misconception: "Not the mechanism, the cognitive shortcut is what drives the perception." }
     ],
     why: "Dramatic events are easy to picture; ease of recall gets confused with actual frequency."
    },
    {
     q: "Best counter to the availability heuristic when estimating a risk?",
     options: [
      { text: "Look up the actual base-rate statistics before trusting your gut.", correct: true },
      { text: "Avoid the news entirely.", misconception: "Reduces input but doesn't teach calibration on the risks you do hear about." },
      { text: "Trust your first instinct, it's usually right.", misconception: "That's exactly the System 1 output the bias is producing." },
      { text: "Ask three friends what they think.", misconception: "They were exposed to the same vivid coverage, so you'll just average the same bias." }
     ],
     why: "Base rates are the boring statistics your brain ignores; checking them is the only reliable correction."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name a vivid fear",   d: "Write down one risk you feel nervous about and one risk you ignore that's statistically larger.", xp: 10 },
    { level: "easy",     t: "Base-rate check",    d: "Pick a fear from the news this week, look up the actual annual numbers, compare to your gut estimate.", xp: 20 },
    { level: "advanced", t: "Risk audit",       d: "List your top five life worries. Rank by gut feel. Then re-rank by actual base rates. Note the swaps.", xp: 40 }
   ]
  },
  {
   t: "Sunk cost fallacy",
   subdomain: "biases",
   definition: "The tendency to continue an endeavour once an investment in money, effort, or time has been made, even when continuing is irrational.",
   short: "You bought the ticket, you got food poisoning, you go anyway and feel awful. The money is gone either way.",
   deep: "You signed up for a year-long course and three months in you realise it's wrong for you. The honest move is to drop it. The move most people make is to stagger through to the end because they paid for it. The fee is already gone, whether you finish or not. Continuing only adds the cost of the next nine months on top. The fallacy shows up everywhere: finishing bad books, staying in dying relationships, holding losing stocks until they break even, pouring more money into a failing project to justify the first round. The cure is a clean question, asked cold, with no reference to the past: knowing what I know now, would I start this today? If the answer is no, stop.",
   generic: "Imagine you order a pizza, take one bite, and realise it tastes terrible. The fallacy is to eat the whole pizza because you paid for it. The pizza was paid for the moment you bought it. Eating it just adds a bad evening to the bill.",
   expert: "Formalised by Arkes and Blumer (1985), the sunk cost effect violates the normative principle of marginal analysis, which states only future costs and benefits should drive a decision. It interacts with loss aversion (Kahneman and Tversky) and commitment escalation (Staw, 1976). Distinguished from the sunk cost in microeconomics, which is the rational accounting concept, the fallacy is the behavioural deviation from it.",
   status: "settled",
   reflect: "What's one commitment you're still in mostly because of what it already cost you? If you walked in fresh today, would you sign up again?",
   conceptQuiz: [
    {
     q: "The sunk cost fallacy is best described as…",
     options: [
      { text: "Letting past, unrecoverable costs drive a future decision they shouldn't.", correct: true },
      { text: "Refusing to spend money you don't have.", misconception: "That's prudent budgeting, not a fallacy." },
      { text: "Forgetting how much you've spent on something.", misconception: "Opposite, the fallacy is remembering the spend too vividly and giving it weight it shouldn't have." },
      { text: "Spending more than your friends on the same thing.", misconception: "Different concept, that's social comparison, not sunk cost." }
     ],
     why: "Rational choice depends only on future costs and benefits. What's spent is gone whether you continue or stop."
    },
    {
     q: "Which question best cuts through a sunk cost trap?",
     options: [
      { text: "Knowing what I know now, would I start this today?", correct: true },
      { text: "How much have I already invested?", misconception: "That's the question that creates the trap, not the one that escapes it." },
      { text: "What will my friends think if I quit?", misconception: "Adds social pressure, doesn't clarify the economics." },
      { text: "Can I get a refund?", misconception: "Useful tactically but doesn't address whether continuing makes sense on its merits." }
     ],
     why: "Reframing as a fresh decision removes the anchor of past investment and forces a clean comparison of future costs and benefits."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name a sunk cost", d: "Write down one thing you're still doing mostly because of what you've already spent on it.", xp: 10 },
    { level: "easy",     t: "Fresh-eyes test", d: "Apply the question, would I start this today, to one ongoing commitment this week. Note the honest answer.", xp: 20 },
    { level: "advanced", t: "Quit one thing",  d: "Identify a clear sunk cost trap in your life and actually exit it. Track what you reclaim in the next 30 days.", xp: 40 }
   ],
   diagram: {
    kind: "flow",
    title: "Escaping a sunk cost trap",
    caption: "Past spend is gone either way. The escape is to reframe the choice as if you were starting fresh today.",
    data: {
     steps: ["Past spend (gone)", "Notice the trap", "Ask: start this today?", "Decide on future only"]
    }
   }
  },
  {
   t: "Hyperbolic discounting",
   subdomain: "biases",
   definition: "A pattern in which people prefer smaller immediate rewards over larger delayed ones, with the preference reversing as the delay shortens.",
   short: "₹100 today beats ₹110 next week. But ₹100 in a year versus ₹110 in a year and a week, suddenly you wait. Same gap, different feeling.",
   deep: "Ask people whether they want ₹100 today or ₹110 next week and most pick the ₹100. Ask the same people whether they want ₹100 in 52 weeks or ₹110 in 53 weeks and most happily wait the extra week. The trade-off is identical, a week's wait for ₹10, but proximity changes everything. This is why people sign up for the gym in January and skip it in February, why retirement saving feels easy in theory and impossible in practice, why diets break at 9pm. The future self gets robbed by the present self over and over. The fix is structural: take the decision out of the moment. Auto-debit savings before the salary hits your account. Pre-commit to the workout by paying a friend who collects if you skip. Don't trust the version of you that will be hungry, tired, and tempted later.",
   generic: "Imagine a kid offered one marshmallow now or two if they wait ten minutes. Many take the one. Now offer them one marshmallow in a year, or two in a year and ten minutes. Almost all wait. Same wait, same reward, but the present feels louder than the future.",
   expert: "Formalised in behavioural economics through quasi-hyperbolic discount functions (Laibson, 1997), capturing present bias that exponential discounting misses. Empirically supported by intertemporal choice experiments (Thaler, 1981; Frederick, Loewenstein, O'Donoghue, 2002). Drives time inconsistency: a plan made today is optimal but rejected in the moment of execution. Precommitment mechanisms (Ulysses contracts) are the standard behavioural countermove.",
   status: "settled",
   reflect: "Where in your life are you reliably making one decision in the calm of planning and a different one in the heat of the moment? What precommitment would lock in the planned version?",
   conceptQuiz: [
    {
     q: "Hyperbolic discounting predicts that people will…",
     options: [
      { text: "Strongly prefer small immediate rewards but happily wait when both options are far in the future.", correct: true },
      { text: "Discount all future rewards at a constant exponential rate.", misconception: "That's standard exponential discounting, the rational baseline the bias departs from." },
      { text: "Always prefer larger rewards regardless of timing.", misconception: "If that were true there'd be no bias to describe." },
      { text: "Refuse any reward delayed more than a week.", misconception: "People do wait when the trade-off is far enough out, the issue is proximity, not delay itself." }
     ],
     why: "The hyperbolic curve drops steeply near zero, making the present feel disproportionately valuable compared to even a near future."
    },
    {
     q: "Best structural defence against hyperbolic discounting?",
     options: [
      { text: "Precommit in advance so the present self can't override the future self.", correct: true },
      { text: "Use willpower in the moment.", misconception: "Willpower is exactly what the bias depletes when temptation is near, structural solutions don't rely on it." },
      { text: "Make smaller rewards feel less appealing.", misconception: "Hard to do at scale; structural change is more reliable than wishing your preferences away." },
      { text: "Avoid all financial decisions.", misconception: "Avoidance isn't a strategy, and the bias shows up in non-financial choices too." }
     ],
     why: "Precommitment, auto-savings, scheduled training, accountability stakes, removes the choice from the moment when the present bias is loudest."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the gap",     d: "Name one decision where calm-you and tired-you reliably disagree, and which one usually wins.", xp: 10 },
    { level: "easy",     t: "Add a precommitment", d: "Set up one auto-debit, calendar block, or stake that removes a future choice from in-the-moment-you.", xp: 20 },
    { level: "advanced", t: "Audit the leaks",   d: "List five recurring places present-you robs future-you (savings, food, sleep, training, study). Add a structural fix for each.", xp: 40 }
   ]
  },
  {
   t: "Default Mode Network (DMN)",
   subdomain: "thinking",
   definition: "A network of brain regions, including the medial prefrontal cortex and posterior cingulate, that becomes active during self-referential thought, mind wandering, and rest.",
   short: "The chatter in your head when nothing else is going on. Often you, replaying you.",
   deep: "When you stop focusing on a task, your brain doesn't go quiet. It switches on a default circuit that runs autobiographical memory, future planning, and social rumination. Marcus Raichle and colleagues mapped it in 2001 after noticing the same regions lit up across rest scans. The DMN is what gives you the daydream in the shower, the replay of yesterday's awkward conversation, the imagined argument with your boss. Overactive DMN activity tracks with rumination and depression. Underactive DMN connectivity shows up in some forms of meditation and psychedelic experience, where the boundary of self softens.",
   generic: "Imagine a radio that turns itself on the moment you stop talking. That station only plays songs about you, your past, your future, what others think. The Default Mode Network is that station.",
   expert: "Raichle et al. (2001) identified the DMN through consistent deactivation during goal-directed tasks. Core nodes include the medial prefrontal cortex, posterior cingulate cortex, and angular gyrus. Buckner and colleagues linked it to self-referential processing, prospection, and theory of mind. Hyperconnectivity within the DMN is associated with major depressive disorder (Sheline et al., 2009) and ruminative thought. Carhart-Harris's entropic brain hypothesis frames psychedelic-induced ego dissolution as DMN disintegration.",
   status: "settled",
   reflect: "What does your DMN replay most often when you stop concentrating? Past regrets, future fears, social comparisons? Knowing the station's playlist is the first step to changing it.",
   conceptQuiz: [
    {
     q: "The Default Mode Network is most active when you are…",
     options: [
      { text: "Resting, daydreaming, or thinking about yourself and others.", correct: true },
      { text: "Solving a focused arithmetic problem.", misconception: "Task-positive networks dominate during focused goal-directed work, the DMN actually quiets down." },
      { text: "Asleep in deep non-REM sleep.", misconception: "DMN activity is reduced in deep sleep, it is most prominent in waking rest and mind wandering." },
      { text: "Receiving a sharp physical pain.", misconception: "Acute external stimuli pull resources to sensory and attention networks, not the DMN." }
     ],
     why: "The DMN fires during inward, self-referential thought, which is why it dominates the gaps between tasks."
    },
    {
     q: "Persistent overactivity of the DMN is most strongly linked to…",
     options: [
      { text: "Rumination and depressive thought patterns.", correct: true },
      { text: "Faster reaction times on attention tasks.", misconception: "Sustained DMN activity tends to impair task focus, not enhance attentional speed." },
      { text: "Improved working memory capacity.", misconception: "Working memory recruits the central executive network, not the DMN." },
      { text: "Reduced emotional reactivity.", misconception: "Overactive DMN is associated with heightened emotional self-focus, not blunting." }
     ],
     why: "Repetitive self-focused processing is a hallmark of rumination, and DMN hyperconnectivity is a reliable correlate in depression research."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name your station",   d: "Sit quietly for two minutes and write down the first three thoughts that appear. Tag each as past, future, or social.", xp: 10 },
    { level: "easy",     t: "Interrupt the loop",  d: "When you catch a ruminative replay, redirect attention to a sensory anchor like breath or sound for sixty seconds.", xp: 20 },
    { level: "advanced", t: "Map your triggers",   d: "For one week, log the situations that reliably pull you into self-referential rumination. Look for the top three patterns.", xp: 40 }
   ]
  },
  {
   t: "Affect heuristic",
   subdomain: "biases",
   definition: "A mental shortcut where people make judgments and decisions based on their immediate emotional reaction to a stimulus rather than a deliberate analysis.",
   short: "If it feels good, you rate it as safer and better. If it feels bad, you rate it as riskier and worse. The feeling decides first.",
   deep: "Paul Slovic and colleagues showed that when people evaluate technologies, foods, investments, or people, their gut feeling arrives before any analysis and quietly sets the verdict. Ask people about nuclear power right after showing them a pleasant image and they rate it as both safer and more beneficial. Show a distressing image first and they rate it as both more dangerous and less beneficial. In reality, risk and benefit are often uncorrelated or even positively correlated, but the affect tag colours both at once. The same shortcut runs in stock picks, hiring, medical choices, and political judgments. The fix is slow and uncomfortable, separate the feeling from the assessment by writing out risks and benefits explicitly before deciding.",
   generic: "Imagine tasting a soup and instantly thinking the chef is talented, the restaurant is clean, and the prices are fair. One flavour just decided three things you never actually checked.",
   expert: "Slovic, Finucane, Peters, and MacGregor (2002) formalised the affect heuristic, showing that affective tags on stimuli drive judgments of both risk and benefit, often producing the inverse risk-benefit correlation in lay judgments. Closely linked to Damasio's somatic marker hypothesis and to dual-process accounts where System 1 supplies an affective signal that System 2 rarely overrides. Particularly powerful under time pressure, cognitive load, or low domain expertise.",
   status: "settled",
   reflect: "Think of a recent decision that felt obvious. How much of the obviousness was analysis, and how much was the feeling the option triggered before you started thinking?",
   conceptQuiz: [
    {
     q: "The affect heuristic predicts that when something feels good, people will…",
     options: [
      { text: "Rate it as both more beneficial and less risky than they otherwise would.", correct: true },
      { text: "Rate it as more beneficial but equally risky.", misconception: "Affect shifts both judgments together, that is the signature pattern Slovic identified." },
      { text: "Rate it as less beneficial because pleasure feels suspicious.", misconception: "That would be the opposite of the documented effect." },
      { text: "Ignore it entirely until they collect more data.", misconception: "The whole point of the heuristic is that the feeling arrives and decides before data is gathered." }
     ],
     why: "A positive affective tag pulls perceived benefit up and perceived risk down at the same time, even when the two are unrelated in reality."
    },
    {
     q: "Which scenario most clearly illustrates the affect heuristic?",
     options: [
      { text: "An investor backs a company because the founder is charismatic and the office feels exciting.", correct: true },
      { text: "An investor reads a ten-page report and updates a spreadsheet.", misconception: "That is deliberate analysis, the opposite of the heuristic." },
      { text: "An investor refuses to look at any data before deciding.", misconception: "Refusal to gather data is different from letting an affective tag override analysis." },
      { text: "An investor flips a coin to decide.", misconception: "Random choice is not affect-driven, it is decision avoidance." }
     ],
     why: "Charisma and atmosphere generate a positive affect tag that quietly colours the entire judgment of risk and reward."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Tag the feeling",      d: "Before your next decision, write the single emotion the option triggers in you. Just name it.", xp: 10 },
    { level: "easy",     t: "Split the columns",    d: "For one decision this week, list risks and benefits in two separate columns before checking how you feel about the choice.", xp: 20 },
    { level: "advanced", t: "Run a reversal",       d: "Take a recent decision you felt great about. Argue the opposite case in writing and see if the risk profile actually changes.", xp: 40 }
   ]
  },
  {
   t: "Status games",
   subdomain: "influence",
   definition: "The social hierarchies people compete in, divided by Henrich and Gil-White into prestige based on competence and dominance based on fear.",
   short: "Some people get respect because others want to learn from them. Some get it because others are afraid of them. Two ladders, very different climbs.",
   deep: "Joseph Henrich and Francisco Gil-White argued that humans have two distinct routes to social rank. Prestige is freely conferred by others who admire skill, knowledge, or generosity and want to learn from or affiliate with the prestigious person. Dominance is extracted through intimidation, coercion, or the threat of harm. Both routes deliver real benefits, attention, mates, resources, but they leave very different fingerprints. Prestige draws people closer, dominance keeps them at a measured distance. Most workplaces, families, and political systems run both games at once. Naming which one is being played, by you and by others, makes a lot of confusing behaviour suddenly legible. Mixing the two, trying to use dominance moves in a prestige game or vice versa, is one of the most common social mistakes.",
   generic: "Think of a teacher students cluster around after class because they want to learn more. Now think of a boss whose office goes quiet the moment they walk in. Both are at the top. They got there in completely different ways.",
   expert: "Henrich and Gil-White (2001) formalised the prestige and dominance distinction, grounding it in evolutionary anthropology. Prestige is voluntarily conferred and predicts cultural transmission, dominance is enforced and predicts compliance under monitoring. Cheng, Tracy, and Henrich (2013) showed both strategies independently predict influence in small groups, with different behavioural and physiological signatures. The framework integrates with Maner's work on power motivation and with social rank theories of mental health.",
   status: "framework",
   reflect: "Which game do you play by default at work, in your family, with friends? When you want influence, do you reach for admiration or for fear? What does that say about what you value?",
   conceptQuiz: [
    {
     q: "Prestige differs from dominance in that prestige is…",
     options: [
      { text: "Voluntarily granted by others who want to learn from or affiliate with the person.", correct: true },
      { text: "Enforced through threats and intimidation.", misconception: "That is dominance, the route prestige is contrasted with." },
      { text: "Inherited at birth and cannot be earned.", misconception: "Prestige is acquired through demonstrated competence, not lineage." },
      { text: "Identical to dominance, just with better manners.", misconception: "The two routes have distinct mechanisms and distinct social signatures." }
     ],
     why: "Prestige flows from admiration and free affiliation, dominance flows from coercion and fear."
    },
    {
     q: "A leader who relies primarily on dominance will most likely see…",
     options: [
      { text: "High compliance when monitored and low cooperation when not.", correct: true },
      { text: "Strong voluntary loyalty even when they are absent.", misconception: "Voluntary loyalty is a prestige signature, dominance compliance tends to decay without monitoring." },
      { text: "Followers spontaneously copying their habits.", misconception: "Free imitation is driven by prestige, not by fear." },
      { text: "Equal cooperation from everyone in the group.", misconception: "Dominance produces uneven, fear-modulated cooperation, not uniform engagement." }
     ],
     why: "Coerced behaviour requires enforcement, so dominance-based influence is monitoring-dependent and brittle."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the game",        d: "Pick three people you respect. For each, write whether you respect them out of admiration or out of fear.", xp: 10 },
    { level: "easy",     t: "Audit your moves",     d: "For one week, log moments when you used a prestige move and moments when you used a dominance move. Note what each one cost or earned.", xp: 20 },
    { level: "advanced", t: "Swap the strategy",    d: "Identify one relationship where you default to dominance. Try a prestige move instead for two weeks and track how the relationship shifts.", xp: 40 }
   ]
  },
  {
   t: "Attachment theory in adulthood",
   subdomain: "mindset",
   definition: "A framework describing how early caregiver relationships shape adult patterns of intimacy as secure, anxious, or avoidant attachment styles.",
   short: "How you were held as a kid shows up in how you do closeness as an adult. Three big patterns, and most of us are mostly one of them.",
   deep: "Cindy Hazan and Phillip Shaver extended John Bowlby's child-attachment work into adult romantic life in 1987. They argued that the way caregivers responded to your needs as a child sets up an internal model of relationships that quietly runs the show decades later. Secure adults trust easily, ask for support directly, and tolerate distance without panic. Anxiously attached adults crave closeness, scan for signs of rejection, and feel destabilised by perceived withdrawal. Avoidantly attached adults value independence to the point of dismissing closeness, and they tend to shut down under emotional pressure. Styles are not fixed, secure relationships and therapeutic work can shift them, but they are stable enough to predict patterns across decades of partners.",
   generic: "Imagine three kids learning to swim with very different parents. One had a parent who stayed close, cheered, caught them when they slipped. One had a parent who was sometimes there and sometimes vanished, so the kid kept anxiously looking back. One had a parent who said figure it out and walked away. Years later, those three kids approach deep water very differently. Adult relationships are a lot like that pool.",
   expert: "Hazan and Shaver (1987) translated Ainsworth's strange situation categories into adult romantic styles, validated through self-report and behavioural measures. Bartholomew and Horowitz (1991) refined the model into a four-category space crossing positive or negative models of self and others. Mikulincer and Shaver's later work mapped attachment dynamics to emotion regulation strategies, with anxious attachment linked to hyperactivation and avoidant attachment to deactivation. Earned secure attachment shows that styles are revisable through corrective relational experience.",
   status: "framework",
   reflect: "In your last few close relationships, what pattern repeated when distance or conflict appeared? Did you chase, withdraw, or stay steady? What does that pattern tell you about your default model?",
   conceptQuiz: [
    {
     q: "Anxious attachment in adulthood is most clearly characterised by…",
     options: [
      { text: "Heightened sensitivity to signs of distance and a strong drive to restore closeness.", correct: true },
      { text: "Comfort with both closeness and independence in equal measure.", misconception: "That describes secure attachment, not anxious." },
      { text: "Strong preference for independence and discomfort with emotional dependence.", misconception: "That describes avoidant attachment, the opposite pattern." },
      { text: "Total indifference to whether the partner is present or not.", misconception: "Indifference is not part of any attachment style, all styles involve attachment activation, just with different strategies." }
     ],
     why: "The anxious pattern hyperactivates the attachment system, scanning for threat and seeking reassurance."
    },
    {
     q: "Which statement about adult attachment styles is best supported by current evidence?",
     options: [
      { text: "Styles are stable but revisable through long-term secure relationships or therapy.", correct: true },
      { text: "Styles are fixed at age two and cannot change.", misconception: "Earned secure attachment shows meaningful change is possible across the lifespan." },
      { text: "Styles change completely every few years on their own.", misconception: "Styles are usually stable in the absence of significant relational or therapeutic experience." },
      { text: "Styles are purely genetic and unrelated to caregiving.", misconception: "Early caregiving experience is a major shaping factor, even if temperament also contributes." }
     ],
     why: "Attachment styles are durable working models, but they are not destiny, corrective experience can shift them."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name your default",    d: "Read short descriptions of secure, anxious, and avoidant patterns and pick the one that best fits your last close relationship.", xp: 10 },
    { level: "easy",     t: "Track the trigger",    d: "For two weeks, note moments when distance or conflict activated you. Write what you did and what you wished you had done.", xp: 20 },
    { level: "advanced", t: "Run a repair script",  d: "Pick one recurring relational pattern and design a small, concrete behaviour change. Try it for a month and review with the other person.", xp: 40 }
   ]
  },
  {
   t: "Cognitive dissonance",
   subdomain: "mindset",
   definition: "The mental discomfort that arises when a person holds two contradictory beliefs, or acts in a way that conflicts with a belief, motivating rationalisation to restore consistency.",
   short: "When your actions and your beliefs disagree, your brain quietly edits the belief so you don't have to feel like a hypocrite.",
   deep: "Leon Festinger introduced the theory in 1957 after observing a UFO cult whose prophecy failed: instead of admitting they were wrong, members doubled down on belief. Dissonance arises whenever behaviour and self-image clash, smoking while believing smoking is dangerous, lying while believing you are honest. The discomfort is real and physiological, and the brain prefers the cheapest path to relief, which is usually adjusting the belief rather than the behaviour. Classic experiments by Festinger and Carlsmith in 1959 showed people paid only one dollar to lie about a boring task later rated the task as more enjoyable than people paid twenty dollars, because the small payment gave them no external justification. Knowing the pattern does not switch it off, but it gives you a name for the squirming feeling when reality contradicts your story about yourself.",
   generic: "Imagine your phone telling you the route you just took was the wrong one. You spent thirty minutes on it. Rather than feel stupid, you say the other route had traffic anyway. That little story your mind invents to keep you feeling smart is dissonance reduction in action.",
   expert: "Festinger (1957) proposed dissonance as a drive state reduced by altering cognitions, adding consonant cognitions, or trivialising the inconsistency. Effort justification, induced compliance, and free-choice paradigms remain the canonical experimental setups. Neuroimaging (van Veen et al, 2009) links dissonance to dorsal anterior cingulate and anterior insula activation. Self-affirmation theory (Steele) shows that affirming an unrelated value can reduce the need to rationalise.",
   status: "settled",
   reflect: "Think of a decision you defended hard last year. If a stranger made the same choice, would you have judged them as harshly as you would have judged yourself before you committed?",
   conceptQuiz: [
    {
     q: "Cognitive dissonance is best described as…",
     options: [
      { text: "Discomfort from holding inconsistent beliefs or behaviours, which motivates rationalisation.", correct: true },
      { text: "An emotional reaction to other people disagreeing with you.", misconception: "Dissonance is internal inconsistency, not external disagreement." },
      { text: "A memory error caused by stress.", misconception: "Dissonance is about belief-behaviour conflict, not memory accuracy." },
      { text: "A personality trait possessed only by anxious people.", misconception: "It is a universal motivational state, not a trait." }
     ],
     why: "Festinger framed dissonance as a drive that pushes people to restore internal consistency, usually by editing the belief rather than the behaviour."
    },
    {
     q: "In the Festinger and Carlsmith study, people paid one dollar to lie rated the boring task as more enjoyable than people paid twenty dollars because…",
     options: [
      { text: "A small payment gave them no external justification, so they changed their attitude to match their behaviour.", correct: true },
      { text: "One dollar was enough money in 1959 to bias their judgment positively.", misconception: "The mechanism is justification, not the absolute value of the payment." },
      { text: "Twenty dollars made them feel guilty and the task seem worse.", misconception: "The well paid participants had ample external justification, so they felt no dissonance to reduce." },
      { text: "The task was secretly different in each condition.", misconception: "The task was identical, only the payment varied." }
     ],
     why: "When external reward is too small to justify behaviour, internal attitude shifts to fill the gap and restore consistency."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name a clash",     d: "Write one belief you hold and one behaviour you do that contradicts it.", xp: 10 },
    { level: "easy",     t: "Trace the story",  d: "For that clash, write the rationalisation you currently use to keep both alive.", xp: 20 },
    { level: "advanced", t: "Close the gap",    d: "Pick the clash. Either change the behaviour for two weeks or honestly revise the belief, and journal what shifted.", xp: 40 }
   ]
  },
  {
   t: "Bystander effect",
   subdomain: "influence",
   definition: "The social phenomenon where individuals are less likely to offer help to a victim when other people are present, because responsibility feels diffused across the group.",
   short: "The more people watching someone in trouble, the less likely any one of them does something. Everyone assumes someone else will.",
   deep: "John Darley and Bibb Latane began studying this after the 1964 Kitty Genovese murder, where early reporting claimed thirty eight witnesses did nothing. The reporting was later shown to be exaggerated, but the underlying phenomenon held up in laboratory work. In their 1968 smoke filled room study, a person alone reported smoke quickly, while a person with two passive confederates often sat through it without acting. Two mechanisms drive it: diffusion of responsibility, where each person assumes someone else will act, and pluralistic ignorance, where each looks at the calm faces of others and concludes the situation is not serious. The practical antidote is to single someone out: point at a specific person and tell them what to do, which collapses the diffusion.",
   generic: "Imagine a fire alarm going off in a room of strangers who all stay seated. You look around, see no panic, and stay seated too. Now imagine the same alarm and you are alone. You walk straight to the door. The crowd was the off switch on your instinct.",
   expert: "Darley and Latane (1968) demonstrated that helping rates drop as group size grows, with the steepest drop between one and two bystanders. A 2011 meta analysis by Fischer et al found the effect attenuates in clearly dangerous emergencies, where bystanders may even facilitate help. Mechanisms include diffusion of responsibility, evaluation apprehension, and pluralistic ignorance. The 2019 reanalysis of public CCTV footage by Philpot et al found intervention is actually more likely in real public conflicts than lab studies suggested.",
   status: "debated",
   reflect: "Recall a moment in public when something felt off and you did nothing because no one else moved. What would have changed if you had been the only person there?",
   conceptQuiz: [
    {
     q: "The bystander effect predicts that as the number of witnesses increases, the probability any single witness helps will…",
     options: [
      { text: "Decrease, because responsibility feels diffused across the group.", correct: true },
      { text: "Increase, because more eyes means more empathy.", misconception: "More witnesses tend to suppress individual action, not amplify it." },
      { text: "Stay constant regardless of group size.", misconception: "Group size is the key independent variable in the classic studies." },
      { text: "Only change if the witnesses know the victim personally.", misconception: "The effect appears among strangers and is in fact strongest there." }
     ],
     why: "Diffusion of responsibility and pluralistic ignorance reduce the felt obligation to act as group size grows."
    },
    {
     q: "The most practical countermeasure if you are the victim or a bystander wanting to break the freeze is to…",
     options: [
      { text: "Point at one specific person and give them one specific instruction.", correct: true },
      { text: "Shout at the whole crowd to do something.", misconception: "A general call to a crowd preserves diffusion, since no one feels personally addressed." },
      { text: "Wait silently and assume someone will act.", misconception: "That is the default failure mode the effect predicts." },
      { text: "Film the incident on your phone first.", misconception: "Recording without singling anyone out does not break diffusion and may delay help." }
     ],
     why: "Direct address to one named or pointed at person reassigns responsibility from the diffuse crowd to a specific individual."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot a freeze",   d: "Recall one public moment where a group froze and note how many people were present.", xp: 10 },
    { level: "easy",     t: "Pre commit",      d: "Write a one line script you will use to single someone out if you witness an emergency this month.", xp: 20 },
    { level: "advanced", t: "Run a drill",     d: "Take a certified first aid or bystander intervention course and practise the assignment of roles in a simulated scene.", xp: 40 }
   ]
  },
  {
   t: "Self-determination theory",
   subdomain: "mindset",
   definition: "A theory of human motivation proposing that intrinsic motivation and wellbeing depend on satisfying three basic psychological needs: autonomy, competence, and relatedness.",
   short: "People thrive when they feel they chose it, they are getting better at it, and someone they care about cares too. Take any of those away and motivation rots.",
   deep: "Edward Deci and Richard Ryan developed self-determination theory through the 1970s and 1980s, growing it out of experiments showing that external rewards often killed intrinsic interest. Their core claim is that humans have three innate psychological needs whose satisfaction predicts engagement, persistence, and wellbeing across cultures. Autonomy means experiencing your actions as self chosen rather than coerced. Competence means feeling effective in your activities. Relatedness means feeling connected to and cared about by others. When a job, classroom, or relationship satisfies all three, motivation is intrinsic and durable. When one is starved, performance drops, even if the external rewards stay generous. The theory has been validated across workplaces, schools, healthcare, and sport, and is one of the most replicated frameworks in modern motivation science.",
   generic: "Think of a hobby you returned to over and over without anyone paying you. Now ask why. You probably picked it freely, you were slowly getting better at it, and there were people around who saw you do it. Strip out any one of those and watch how fast you lose interest.",
   expert: "Deci and Ryan formalised SDT in their 1985 book Intrinsic Motivation and Self Determination in Human Behavior. The theory contains six mini theories, including cognitive evaluation theory and organismic integration theory. Meta analyses by Deci, Koestner, and Ryan (1999) found tangible rewards consistently undermine intrinsic motivation for interesting tasks. Cross cultural studies by Chirkov and others support the universality of the three needs, though their expression varies.",
   status: "framework",
   reflect: "Look at the activity in your life that drains you most. Which of the three needs, autonomy, competence, or relatedness, is most starved in it, and what is one structural change that could feed it?",
   conceptQuiz: [
    {
     q: "Self-determination theory proposes which three basic psychological needs as the foundation of intrinsic motivation?",
     options: [
      { text: "Autonomy, competence, and relatedness.", correct: true },
      { text: "Power, achievement, and affiliation.", misconception: "Those are McClelland's needs, a separate framework from SDT." },
      { text: "Safety, esteem, and self actualisation.", misconception: "Those come from Maslow's hierarchy, not SDT." },
      { text: "Reward, punishment, and reinforcement.", misconception: "Those are behaviourist concepts that SDT explicitly contrasts itself against." }
     ],
     why: "Deci and Ryan named autonomy, competence, and relatedness as universal needs supported by decades of cross cultural data."
    },
    {
     q: "According to SDT, offering a generous cash bonus for a task someone already enjoys often results in…",
     options: [
      { text: "Reduced intrinsic motivation once the reward is removed.", correct: true },
      { text: "Permanently higher motivation for the task.", misconception: "Tangible rewards tend to crowd out intrinsic interest in interesting tasks." },
      { text: "No change at all.", misconception: "Meta analyses show a reliable undermining effect on intrinsic motivation." },
      { text: "Increased relatedness with coworkers.", misconception: "Cash rewards do not target relatedness and may shift the activity's perceived locus of causality." }
     ],
     why: "Cognitive evaluation theory within SDT predicts that controlling rewards shift perceived causality from internal to external, undermining intrinsic motivation."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Score your week",        d: "Rate your past week from one to ten on each of autonomy, competence, and relatedness.", xp: 10 },
    { level: "easy",     t: "Feed the weakest",       d: "Pick the lowest scoring need and design one concrete change in your routine that feeds it.", xp: 20 },
    { level: "advanced", t: "Redesign a role",        d: "Take a role you hold, job, parenting, study, and redesign its structure so all three needs are reliably met for a quarter.", xp: 40 }
   ]
  },
  {
   t: "Flow state",
   subdomain: "mindset",
   definition: "A subjective state of complete absorption in an activity, characterised by deep focus, loss of self consciousness, distorted sense of time, and intrinsic reward, occurring when challenge and skill are well matched.",
   short: "That mode where the activity carries you, time disappears, and you stop thinking about yourself. It only shows up when the task is hard enough to demand you and easy enough not to break you.",
   deep: "Mihaly Csikszentmihalyi spent decades interviewing artists, athletes, surgeons, and chess players about their best moments and found they described almost the same thing. He named it flow. The conditions are tight: a clear goal, immediate feedback, and a challenge that sits just above current skill. Too easy and you get boredom; too hard and you get anxiety. Inside the channel between them, attention narrows to the task, the inner critic falls silent, and time stretches or shrinks. Flow is intrinsically rewarding, which is why people pay to climb cliffs and play instruments unpaid. You cannot summon it on demand, but you can engineer the conditions: protect uninterrupted blocks, choose tasks slightly beyond your current level, and remove ambient distractions.",
   generic: "Think of a video game level that was hard enough to keep you trying and not so hard you quit. You looked up, two hours were gone, and you had not thought about your day once. Same thing happens to a violinist on a tricky passage or a coder on a clean problem.",
   expert: "Csikszentmihalyi (1975, 1990) operationalised flow through the experience sampling method and the challenge skill balance model. Updated channel models, like Massimini and Carli's eight channel framework, refine the original three by including apathy and arousal regions. Neuroscientific work by Dietrich and others has proposed transient hypofrontality, a temporary downregulation of the prefrontal cortex, as a candidate mechanism, though this remains debated. Engagement at work studies by Bakker confirm flow predicts performance and wellbeing.",
   status: "framework",
   reflect: "When was the last time you lost an afternoon to a task and came out feeling clean rather than depleted? What were the conditions, and how often does your week reproduce them?",
   conceptQuiz: [
    {
     q: "Csikszentmihalyi's flow state is most reliably entered when…",
     options: [
      { text: "Challenge is slightly above current skill and goals plus feedback are clear.", correct: true },
      { text: "The task is far below your skill level so you cannot fail.", misconception: "Tasks well below skill level produce boredom, not flow." },
      { text: "The task is well above your skill level so you must stretch.", misconception: "Tasks well above skill level produce anxiety, which blocks flow." },
      { text: "You are working under heavy social surveillance.", misconception: "Flow typically requires reduced self consciousness, which surveillance disrupts." }
     ],
     why: "The challenge skill balance is the defining condition of the flow channel, paired with clear goals and immediate feedback."
    },
    {
     q: "Which is not a typical characteristic of flow reported in Csikszentmihalyi's interviews?",
     options: [
      { text: "Constant comparison of your performance with peers in real time.", correct: true },
      { text: "Loss of self consciousness during the activity.", misconception: "Loss of self consciousness is a core feature of flow." },
      { text: "Distortion of the sense of time.", misconception: "Time distortion is consistently reported across flow studies." },
      { text: "Intrinsic enjoyment of the activity itself.", misconception: "Autotelic experience is central to flow." }
     ],
     why: "Active social comparison pulls attention back to the self and breaks the absorption that defines flow."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Recall a session",   d: "Write a short description of your most recent flow experience, including what made it possible.", xp: 10 },
    { level: "easy",     t: "Build a block",      d: "Schedule a ninety minute distraction free block on a task at the edge of your current skill this week.", xp: 20 },
    { level: "advanced", t: "Tune the difficulty",d: "Pick one skill you are developing and design a four week progression that always keeps difficulty one notch above current ability.", xp: 40 }
   ]
  },
  {
   t: "Spotlight effect",
   subdomain: "biases",
   definition: "The tendency to overestimate how much other people notice or remember one's appearance, mistakes, or behaviour.",
   short: "You think everyone clocked the stain on your shirt. They were thinking about their own shirts.",
   deep: "Thomas Gilovich and colleagues named the spotlight effect in 2000 after a series of clever experiments. In the most famous, students were asked to wear an embarrassing Barry Manilow T shirt into a room and then estimate how many other students had noticed. They consistently estimated about twice the actual number who could correctly identify it. The pattern repeats with stutters, bad hair days, awkward comments, and visible blushes. The mechanism is anchoring on your own vivid internal experience and failing to adjust downward for the fact that others are absorbed in their own concerns. The practical lesson is calibrating: in most social moments, you are far less observed and far less remembered than your nervous system insists.",
   generic: "You walk into a party with a pimple you have been staring at all afternoon. You assume the room sees it. Half of them are worrying about their own pimples and the other half are watching the door for someone else.",
   expert: "Gilovich, Medvec, and Savitsky (2000) demonstrated the effect across multiple studies, including the Barry Manilow T shirt experiment and group discussion studies. The mechanism is anchoring and insufficient adjustment from the egocentric default, related to the illusion of transparency. Replications confirm a robust effect size of roughly twofold overestimation of being noticed. The effect is stronger under social anxiety and in adolescents.",
   status: "settled",
   reflect: "Think of the last time you felt scrutinised in public. If you asked five people in the room a week later what they remembered about you, what would they actually be able to recall?",
   conceptQuiz: [
    {
     q: "In Gilovich's classic experiment, students wearing an embarrassing T shirt estimated the number of observers who would notice it as…",
     options: [
      { text: "Roughly double the actual number who could identify it.", correct: true },
      { text: "Roughly half the actual number.", misconception: "Observers consistently underestimate, not overestimate, what others notice about themselves." },
      { text: "Approximately the same as the actual number.", misconception: "The whole point of the finding is the systematic overestimation." },
      { text: "Far lower than reality because of denial.", misconception: "The bias points in the opposite direction." }
     ],
     why: "The spotlight effect is defined by overestimating how much others notice, with about a twofold inflation in classic experiments."
    },
    {
     q: "The cognitive mechanism behind the spotlight effect is best described as…",
     options: [
      { text: "Anchoring on your vivid internal experience and underadjusting for others' actual focus.", correct: true },
      { text: "A failure of long term memory.", misconception: "The bias operates at the moment of judgement, not in memory retrieval." },
      { text: "An emotional reaction unrelated to cognition.", misconception: "It is a cognitive estimation error, even though it is driven by emotional salience." },
      { text: "A deliberate strategy people use to feel important.", misconception: "It is an automatic bias, not a conscious choice." }
     ],
     why: "The bias arises because you anchor on your own intense self awareness and fail to adjust for the fact that others are absorbed in their own concerns."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name a recent spotlight",  d: "Write one moment from the last month where you felt all eyes on you and estimate honestly how many noticed.", xp: 10 },
    { level: "easy",     t: "Check the receipts",      d: "Casually ask two people what they remember from a recent event and compare with what you assumed they noticed.", xp: 20 },
    { level: "advanced", t: "Run an exposure",         d: "Deliberately do something slightly awkward in public this week, like singing softly while waiting in line, and observe actual reactions.", xp: 40 }
   ]
  },
  {
   t: "Negativity bias",
   subdomain: "biases",
   definition: "The tendency for negative events, emotions, or information to have a stronger effect on psychological state and memory than equally intense positive events.",
   short: "Bad sticks. Good slides off. One rude comment outweighs five kind ones, and your brain treats that as a feature, not a bug.",
   deep: "Roy Baumeister captured the pattern in the title of his 2001 paper, Bad Is Stronger Than Good, after reviewing hundreds of studies across relationships, learning, memory, and emotion. Negative events are processed faster, remembered longer, and weighted more heavily in decisions than positive ones of equal magnitude. The evolutionary case is straightforward: ancestors who treated threats as urgent and rewards as patient outlived those who did the reverse. The cost in modern life is that one critical email can poison a day of good ones, and a single bad first impression takes many positive interactions to overwrite. Awareness alone does not fix it, but it lets you weight feedback more fairly, build deliberate routines for noticing positives, and stop treating every alarm as proportional to its emotional volume.",
   generic: "Imagine your phone buzzing with ten positive messages and one nasty one. You will reread the nasty one twice and forget who sent the nice ones. Same wiring kept our ancestors alive in a world where missing a friendly face cost nothing and missing a predator cost everything.",
   expert: "Baumeister, Bratslavski, Finkenauer, and Vohs (2001) and Rozin and Royzman (2001) summarised the phenomenon across domains. Marriage research by Gottman estimates roughly a five to one positive to negative interaction ratio is needed to sustain stable relationships. Neurally, amygdala and anterior cingulate respond more strongly and rapidly to negative stimuli. Cacioppo's evaluative space model formalises positivity and negativity as separable rather than opposite dimensions.",
   status: "settled",
   reflect: "Think of the last week of feedback you received at work or home. Which comments still echo, and how proportional is that echo to the actual content of the week?",
   conceptQuiz: [
    {
     q: "Negativity bias predicts that, holding intensity constant, a negative event will…",
     options: [
      { text: "Have a stronger and longer lasting psychological impact than a positive event.", correct: true },
      { text: "Be forgotten more quickly than a positive event.", misconception: "Negative events are typically remembered longer, not less." },
      { text: "Have the same impact as a positive event.", misconception: "The whole bias names an asymmetry, not symmetry." },
      { text: "Only impact people prone to anxiety.", misconception: "The asymmetry is general across populations, even if magnitude varies." }
     ],
     why: "Across emotion, memory, decision, and relationship research, negative information weighs more heavily than equally intense positive information."
    },
    {
     q: "Gottman's relationship research suggests a healthy long term relationship maintains roughly what ratio of positive to negative interactions?",
     options: [
      { text: "About five positive interactions for every one negative.", correct: true },
      { text: "About one positive for every one negative.", misconception: "A one to one ratio strongly predicts decline due to the negativity bias." },
      { text: "About one positive for every five negative.", misconception: "That ratio predicts almost certain breakdown." },
      { text: "Ratios are irrelevant to relationship stability.", misconception: "Decades of longitudinal data show ratio is one of the strongest predictors." }
     ],
     why: "Because negativity is psychologically heavier, stable relationships require a surplus of positive interactions to offset the asymmetry."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Audit your morning",  d: "List the first three things you noticed today and tag each as positive or negative.", xp: 10 },
    { level: "easy",     t: "Build a counter",     d: "Every evening for two weeks, write three specific good things from the day before bed.", xp: 20 },
    { level: "advanced", t: "Reweight feedback",   d: "Take a recent performance review and rewrite it weighting positives equally with negatives. Compare with the original and discuss with a peer.", xp: 40 }
   ]
  }
 ],

 counterView: "Much of pop psychology rests on small, hard-to-replicate studies. The 'replication crisis' (2010s) showed a lot of famous results, priming, power posing, ego depletion, parts of the marshmallow test, don't reliably reproduce. Treat any single fascinating study as a hypothesis, not a fact, and steelman the case that human behaviour is far more situational and culturally bound than the canonical American-undergraduate experiments suggest. Also note: Mehrabian's '7-38-55' rule is wildly misquoted, its real scope was inconsistent affect-communication, not all communication.",

 capabilities: [
  "Name the 6 Cialdini levers when you see them in an ad.",
  "Spot anchoring in a price tag and counter with your own number.",
  "Reframe a frustrating interaction using the fundamental attribution error.",
  "Tell a single replicated finding from a single dramatic study.",
  "Use process praise instead of trait praise."
 ],
 cheatsheet: [
  "System 1 runs most of the show. Don't trust your fluent intuitions on novel problems.",
  "Anchoring works on you. Pre-decide your number before exposure.",
  "Losses hurt ~2× gains. Reframe to opportunity cost.",
  "Six levers: reciprocity, commitment, social proof, authority, liking, scarcity.",
  "Praise process, not trait, even when talking to yourself."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Get the vocabulary in your head",        do: "Read Thinking, Fast and Slow and Cialdini's Influence. Don't try to apply anything yet, just get the names of the main biases and levers into your head so you can recognise them.",                                                      milestone: "You can name five common cognitive biases and three influence levers without notes.",                         time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Catch yourself in the act",            do: "Now that you have the names, keep a tiny bias log for 30 days. Each evening, write one bias you noticed in yourself that day. Not in your enemies, in you. You'll find patterns within a week.",                                                     milestone: "You catch your own biases while they're happening, not just in retrospect.",                             time: "~1 month" },
  { rank: "Practitioner", focus: "Use the tools without crossing the line",     do: "Apply social proof, commitment, framing to a real project, a fundraiser, a workplace pitch, a personal habit. Notice when you're using the same levers on yourself.",                                                                 milestone: "You can use influence consciously and ethically, and notice when you're about to cross into manipulation.",             time: "~2-3 months" },
  { rank: "Specialist",  focus: "Go deep in one tradition",             do: "Psychology is huge. Pick one branch, cognitive behavioural therapy, social psychology, behavioural economics, biology of behaviour, and read primary papers, not just popular books, in that branch.",                                                 milestone: "You know what's settled, what's debated, and what's pop-science overreach in your chosen branch.",                  time: "~6 months" },
  { rank: "Expert",    focus: "Read the field with healthy scepticism",     do: "Read every study with the replication crisis in mind. Look at sample size, pre-registration, effect size, who funded it. Learn to tell which findings will probably hold up and which probably won't.",                                                 milestone: "You can predict, with surprising accuracy, which dramatic new studies will fail to replicate.",                    time: "~1 year+" },
  { rank: "Master",    focus: "Apply across other domains",            do: "Connect what you've learned to marketing, negotiation, leadership, design, public policy. Psychology is a foundation for almost every people-facing field.",                                                                       milestone: "People in other fields ask you for the psychological lens that fits their problem.",                          time: "~2 years+" },
  { rank: "Grandmaster", focus: "Contribute or teach with nuance",         do: "Original research, teaching, or popular writing that respects the field's actual uncertainty rather than overclaiming.",                                                                                         milestone: "Other practitioners use your framings without noticing they came from you.",                              time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Sapolsky, Human Behavioral Biology (Stanford)",  what: "Full course on YouTube. Biology + psychology, beautifully taught.",   url: "https://www.youtube.com/playlist?list=PL150326949691B199",            weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Center for Open Science, replication",      what: "Read about what didn't replicate before quoting it.",          url: "https://www.cos.io/",                              verify: false, lastVerified: "2026-06" },
   { name: "You Are Not So Smart, David McRaney",       what: "Free podcast on biases, accessibly explained.",             url: "https://youarenotsosmart.com/",                         weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Daniel Kahneman, Nobel lecture (free PDF)",   what: "Direct from the source: prospect theory + heuristics.",         url: "https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/lecture/",   weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "PsyArXiv, preprint archive",           what: "Read primary preprints before they reach pop articles.",         url: "https://psyarxiv.com/",                             verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia, List of cognitive biases",      what: "Comprehensive index with citations to source studies.",         url: "https://en.wikipedia.org/wiki/List_of_cognitive_biases",             weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Robert Sapolsky, public lectures (YouTube)",   what: "More accessible single-talk format.",                  url: "https://www.youtube.com/results?search_query=Robert+Sapolsky",          verify: true, lastVerified: "2026-06" },
   { name: "Big Think, psychology channel",         what: "Short, expert-driven explainers.",                    url: "https://bigthink.com/psychology/",                        verify: false, lastVerified: "2026-06" },
   { name: "BPS Research Digest",               what: "British Psychological Society blog summarising new psychology research.", url: "https://digest.bps.org.uk/",                           weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Thinking, Fast and Slow, Kahneman (library)",   what: "The best general-audience book on biases.",               url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",             weight: "popular", verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Influence, Cialdini",              what: "The six levers in detail.",                       url: "https://www.influenceatwork.com/principles-of-persuasion/",           price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Pre-Suasion, Cialdini",             what: "What happens before the ask. Companion to Influence.",          url: "https://www.influenceatwork.com/",                        price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Behave, Robert Sapolsky",            what: "Why we do what we do, from synapses to societies.",           url: "https://www.penguinrandomhouse.com/books/314463/behave-by-robert-m-sapolsky/",  price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Mindset, Carol Dweck",              what: "Growth vs fixed. Read the replication caveats alongside.",        url: "https://en.wikipedia.org/wiki/Mindset_(book)",                  price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "The Righteous Mind, Jonathan Haidt",       what: "Moral psychology of why decent people disagree.",            url: "https://righteousmind.com/",                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Predictably Irrational, Dan Ariely",       what: "Behavioural-economics intro w/ caveats post-replication.",         url: "https://danariely.com/books/predictably-irrational/",              price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Stumbling on Happiness, Daniel Gilbert",     what: "Why we mispredict what'll make us happy.",                url: "",                                        price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Happiness Hypothesis, Jonathan Haidt",    what: "Ancient wisdom vs modern psychology.",                  url: "https://righteousmind.com/",                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Thinking in Bets, Annie Duke",          what: "Decision-making under uncertainty, poker-trained.",           url: "",                                        price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Noise, Kahneman, Sibony, Sunstein",       what: "Why expert judgment varies wildly, and what to do about it.",      url: "",                                        price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "30-day bias log", d: "Each day, write one bias you caught in yourself. End of month, look for patterns.", xp: 60 },
  { t: "Name the lever", d: "Watch 5 ads or sales pages. For each, name the Cialdini lever(s) used.", xp: 30 },
  { t: "Anchor flip", d: "In your next negotiation, name your number first. Compare what happens to your usual approach.", xp: 40 },
  { t: "Steelman the opposite", d: "Pick a strong opinion you hold. Write the best version of the opposing case, in writing.", xp: 50 },
  { t: "Process praise", d: "For a week, replace 'you're so smart/talented' with 'I love how you tried X.' Notice the response.", xp: 30 }
 ],
 capstone: { t: "Run a personal experiment", d: "Pick one belief about yourself or others. Design a 2-week experiment that could falsify it. Run it. Report what changed.", xp: 200 },

 quiz: [
  { q: "Which of these best describes Kahneman's System 1?", options: [
   { text: "Conscious deliberation that runs every decision.", misconception: "That's System 2, and it runs far less than we think." },
   { text: "Fast, automatic, mostly invisible, runs most decisions.", correct: true },
   { text: "Only emotions; logic lives elsewhere.", misconception: "System 1 includes pattern-matching and intuition, not just emotion." },
   { text: "A part of the brain you can turn off.", misconception: "It's always on, even when System 2 is engaged." }
  ], why: "System 1 = fast/automatic; System 2 = slow/effortful. Most decisions are System 1, with System 2 stepping in for anomalies.", testOut: true },
  { q: "Loss aversion means…", options: [
   { text: "We don't notice losses.", misconception: "Opposite, we feel them ~2× more than equivalent gains." },
   { text: "Losses feel about twice as bad as equivalent gains feel good.", correct: true },
   { text: "We refuse to invest because everything is a loss.", misconception: "It explains why people hold losing investments too long, not why they avoid all investing." },
   { text: "It applies only to money.", misconception: "It applies to status, relationships, time, and identity, anywhere we can lose." }
  ], why: "Prospect theory: pain of loss is roughly 2× pleasure of equivalent gain." },
  { q: "The Mehrabian '7-38-55' rule is best characterised as…", options: [
   { text: "A universally correct breakdown of communication.", misconception: "Misquoted, Mehrabian's data was narrow (inconsistent emotion words + tone + face), not all communication." },
   { text: "Wildly misquoted, its real scope was much narrower.", correct: true },
   { text: "Discredited entirely.", misconception: "Original work was sound; popular use isn't." },
   { text: "About IQ vs EQ.", misconception: "Different topic entirely." }
  ], why: "Mehrabian's numbers describe a specific lab setup about inconsistent affect, not the breakdown of all human communication." },
  { q: "After the replication crisis, the most defensible stance is…", options: [
   { text: "Trust no psychology study.", misconception: "Too strong, many findings did replicate." },
   { text: "Some classic findings didn't replicate; weight single dramatic studies less.", correct: true },
   { text: "Replication doesn't matter.", misconception: "It's the difference between knowledge and storytelling." },
   { text: "Only neuroscience is reliable.", misconception: "Neuroscience has had its own replication issues." }
  ], why: "A bunch of headline-grabbing studies didn't reproduce. Don't ditch the field, just stop quoting single small studies as settled fact." },
  { q: "The fundamental attribution error predicts that you'll likely…", options: [
   { text: "Blame your own bad behaviour on character.", misconception: "Opposite, we blame our own behaviour on circumstance." },
   { text: "Blame other people's bad behaviour on character and your own on circumstance.", correct: true },
   { text: "Treat everyone the same.", misconception: "If true, the error wouldn't have a name." },
   { text: "Only happens in conflict.", misconception: "Active in daily perception, not just conflict." }
  ], why: "We extend ourselves situational generosity we don't extend to others." }
 ],

 flashcards: [
  { front: "System 1 vs System 2?", back: "System 1 = fast/automatic; System 2 = slow/effortful. Most decisions are System 1." },
  { front: "What's confirmation bias?", back: "Noticing and remembering evidence that supports what you already believe." },
  { front: "How big is loss aversion?", back: "Losses feel ~2× as bad as equivalent gains feel good (prospect theory)." },
  { front: "Cialdini's 6 levers?", back: "Reciprocity, commitment, social proof, authority, liking, scarcity." },
  { front: "Fundamental attribution error?", back: "Blame others' character; blame your own circumstance." },
  { front: "Asch conformity headline?", back: "~75% of people conformed to obviously wrong group answers at least once." },
  { front: "What's the replication crisis?", back: "Lots of classic psychology findings didn't reproduce in larger, pre-registered studies. Be skeptical of single dramatic studies." },
  { front: "Process vs trait praise?", back: "Praising effort/strategy ('I love how you tried X') outperforms praising trait ('you're so smart')." }
 ],
 glossary: [
  { term: "Heuristic", def: "Mental shortcut that's fast but sometimes wrong." },
  { term: "Bias", def: "Systematic error in thinking, not random noise." },
  { term: "Prospect theory", def: "Kahneman/Tversky model: losses loom larger than gains." },
  { term: "Steelman", def: "The strongest possible version of an opposing argument." },
  { term: "Replication", def: "Re-running a study to see if the result holds up." },
  { term: "Conformity", def: "Adjusting behaviour to match a group, even against private judgment." },
  { term: "Attribution", def: "How we explain causes of behaviour, to character or to circumstance." },
  { term: "Anchoring", def: "First-number effect on subsequent estimates." },
  { term: "Default Mode Network", def: "Brain regions active during self-referential thought and mind-wandering, tied to rumination and creativity." },
  { term: "Affect heuristic", def: "Leaning on immediate emotion to judge a probability or value." },
  { term: "Status games", def: "Ranking by prestige (competence-based) vs dominance (fear-based) in any social group." },
  { term: "Attachment style", def: "Secure, anxious, or avoidant relational patterns shaped by early caregiving." },
  { term: "Cognitive dissonance", def: "The discomfort of holding two conflicting beliefs, often resolved by changing one." },
  { term: "Bystander effect", def: "The more people present, the less likely any one of them acts." },
  { term: "Flow state", def: "The absorption experienced when challenge and skill are balanced (Csikszentmihalyi)." },
  { term: "Spotlight effect", def: "Overestimating how much other people notice you." },
  { term: "Negativity bias", def: "Bad events register more strongly than good ones of the same magnitude." },
  { term: "Self-determination theory", def: "Motivation grows from autonomy, competence, and relatedness." },
  { term: "Hyperbolic discounting", def: "Future rewards are devalued sharply, then more slowly." },
  { term: "Sunk cost fallacy", def: "Letting past spending influence a forward-looking choice." },
  { term: "Implementation intention", def: "If-then plan (when X happens, I will do Y) (Gollwitzer)." }
 ]
};

export default d;
