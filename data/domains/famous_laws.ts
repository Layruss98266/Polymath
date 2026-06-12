import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "famous_laws",
 icon: "⚛️",
 hue: "#c084fc",
 category: "World & Knowledge",
 name: "Famous Scientific Laws",
 tagline: "The rules of reality, in plain words",

 basics: "Scientific laws are short sentences that survived hundreds of years of clever people trying to break them. You don't need the maths to use them, you need the feel. Knowing F=ma in your gut changes how you push a stuck shopping trolley. Knowing entropy in your gut changes how you treat any system left alone (it gets messier, never tidier, without effort). Once you've collected maybe a dozen of these, physics and biology and chemistry stop feeling like separate school subjects and start feeling like one project, humans trying to write down how reality actually works, in the smallest possible number of words.",
 whyItMatters: [
  "You build intuition that travels across fields. The same idea (energy conserved, disorder grows, populations selected) keeps showing up.",
  "You can tell when someone's using science-sounding words to dress up a claim that isn't really science.",
  "You can read a headline about a discovery without panicking or believing it whole.",
  "Physics, biology, economics, and computation all start to feel like different chapters of the same book."
 ],
 realWorldExample: "Pour yourself a hot coffee and forget about it for an hour. The coffee cools to room temperature. The room doesn't get noticeably warmer. Heat flowed one direction, from hot to cold, by itself, and never reverses on its own. That tiny everyday observation is the second law of thermodynamics. The same law tells you why batteries always waste some energy, why your desk doesn't tidy itself, and why time only moves one direction. One idea, working everywhere, in plain sight. Once you start seeing famous laws in everyday objects, the world stops being a bunch of disconnected facts and starts being a system you can read.",

 mentors: [
  { name: "Isaac Newton", for: "the foundation of classical mechanics", work: "Principia (1687)" },
  { name: "James Clerk Maxwell", for: "unifying electricity, magnetism, and light", work: "A Treatise on Electricity and Magnetism (1873)" },
  { name: "Charles Darwin", for: "natural selection", work: "On the Origin of Species (1859)" },
  { name: "Albert Einstein", for: "special + general relativity", work: "Annus Mirabilis papers (1905); General Relativity (1915)" },
  { name: "Rudolf Clausius / Ludwig Boltzmann", for: "the second law of thermodynamics + statistical mechanics", work: "19th century papers" }
 ],

 diagrams: [
  { kind: "flow", title: "F = m·a (Newton's 2nd law)", caption: "Force on an object = mass × acceleration.", data: { steps: ["Force applied", "Mass", "Acceleration", "Motion changes"] } },
  { kind: "curve", title: "Heat flow, 2nd law of thermodynamics", caption: "Heat flows from hot to cold spontaneously. The reverse costs work.", data: { x: "Time", y: "Temperature",
   series: [
    { label: "Hot body", points: [[0, 9], [3, 7], [6, 6], [10, 5]] },
    { label: "Cold body", points: [[0, 1], [3, 3], [6, 4], [10, 5]] }
   ]
  } }
 ],

 synthesis: [
  { concept: "Entropy / messiness", linksTo: "mental_models", note: "Same intuition powers 'systems decay without effort' in management." },
  { concept: "Selection pressure", linksTo: "investing", note: "Survivorship bias is a misreading of selection, same idea, different domain." }
 ],

 subdomains: [
  { id: "mechanics", name: "Classical Mechanics" },
  { id: "thermo", name: "Thermodynamics" },
  { id: "em_relativity", name: "EM and Relativity" },
  { id: "bio_stats", name: "Biology and Statistics" },
 ],

 concepts: [
  { t: "Newton's three laws of motion",         short: "Inertia. F = m·a. Every push gets a push back.",                                                                 deep: "Three sentences that together explain almost every moving thing in your everyday life. First law: an object at rest stays at rest, and one moving stays moving, unless something pushes or pulls it. (That's why your coffee cup keeps sliding when you brake the car.) Second law: a force on something equals its mass times how fast its motion changes. (That's why pushing a shopping trolley feels easy and pushing a stuck car feels impossible, same effort, way more mass.) Third law: every push has an equal opposite push back. (That's why a rocket goes up, it pushes exhaust down, the exhaust pushes the rocket up.) The maths is high-school level. The intuition lasts forever.",                                                                                                                                                             status: "settled",  reflect: "Watch yourself for one minute. Find Newton's three laws operating right now, in how you walk, how you sit, how you breathe." },
  { t: "Conservation laws",               short: "Energy, momentum, and charge don't appear or disappear. They just change form.",                                                 deep: "If you turn on a kettle, electrical energy becomes heat. Some of that heat goes into the water; some leaks into the room. The total is conserved, none of it disappeared, even the bits that escaped your goal. This is one of the deepest patterns in physics, and once you've felt it, the question \"where did that energy go?\" becomes a useful tool everywhere. The same machinery powers chemistry (atoms rearrange, conserved), biology (calories in food turn into work, heat, and stored fat), and engineering (every system has losses you have to account for).",                                                                                                                                                                                                                     status: "settled",  reflect: "Trace one calorie of breakfast through your morning. Where did its energy go, body heat, movement, thinking, storage?" },
  { t: "The second law of thermodynamics (entropy)",   short: "Closed systems quietly drift towards disorder. To keep things tidy you have to spend energy.",                                         deep: "Leave your room alone for a month. It gets messier, never tidier. Spill a drink, it spreads, never re-gathers into the cup. Put a hot pan on a cold counter, heat flows out of the pan, never back in. The second law of thermodynamics is the universe's quiet preference for disorder, called entropy. The only way to create order locally, a clean room, a working battery, a living cell, is to spend energy. And even then, the total disorder of everything still goes up; you've just moved it around. This law is also why time only goes one direction. Eggs unscramble in films, never in life.",                                                                                                                                                                                                       status: "settled",  reflect: "What \"order\" in your life is actually you, paying entropy's bill daily? Notice how much effort that takes." },
  { t: "Maxwell's equations (the intuition, not the maths)", short: "Electricity and magnetism are two faces of the same thing. Light is one of its waves.",                                           deep: "In the 1860s James Clerk Maxwell wrote down four equations that pulled together a huge amount of disparate experiment into a single picture. The maths is heavy; the punchline is gorgeous. Electricity and magnetism aren't two separate forces, they're two sides of the same coin. A changing electric field makes a magnetic field, and vice versa. And light? Light is exactly an electromagnetic wave, oscillating its way through space at one specific speed. Radio, wifi, MRI scanners, electric motors, your phone screen, the energy hitting your skin on a sunny day, all live downstream of those four equations. One unification, an entire modern world.",                                                                                                                                                                         status: "settled",  reflect: "Pick one electrical device near you. Which Maxwell-era discovery is it leaning on?" },
  { t: "Special relativity (the everyday intuition)",   short: "Time and length depend on how fast you're moving. The speed of light is the same for everyone.",                                        deep: "At the speeds you walk around at, the effects are far too small to notice. At fractions of the speed of light, astronaut speeds, satellite speeds, clocks tick more slowly for fast-moving observers, and lengths get shorter in the direction of motion. This sounds like science fiction. It isn't. GPS satellites have to correct for these effects every day or your phone's location would drift by kilometres within hours. The engineering, not just the philosophy, depends on Einstein being right. \"Now\" isn't the same instant for two observers moving differently, it's a local fact, not a universal one.",                                                                                                                                                                                                 status: "settled",  reflect: "Two friends pass each other at high speed and check their watches. What does it mean that they don't agree on what time it is \"now\"?" },
  { t: "General relativity (the everyday intuition)",   short: "Mass bends spacetime. What we feel as gravity is just things following the curves.",                                               deep: "Newton thought gravity was a force pulling apples down. Einstein replaced the picture: mass and energy bend the fabric of spacetime itself, and things naturally follow the curves. The Earth doesn't \"pull\" the apple. The Earth bends spacetime, and the apple takes the straightest path through bent spacetime, which to us looks like falling. This sounds like poetry until you remember that GPS satellites also have to correct for general relativity (clocks run slightly faster up at orbital altitude where gravity is weaker). The Universe is genuinely stranger than Newton imagined, and engineering still has to do the maths.",                                                                                                                                                                                     status: "settled",  reflect: "If gravity is curved spacetime, what's actually pulling you to the chair right now?" },
  { t: "Natural selection (Darwin)",           short: "Variation + inheritance + a survival gap + time = adaptation. No designer needed.",                                               deep: "The simplest powerful idea biology has. If members of a population vary, and that variation is heritable, and not all of them survive and reproduce equally, then the next generation will, on average, look slightly more like the survivors. Repeat over millions of years and you get adaptation. Repeat in fast-moving systems and you get rapid change, antibiotic resistance, viral evolution, surprisingly fast shifts in animals under environmental pressure. The same logic shows up wherever something is being selected on what survives, products in a market, ideas in culture, algorithms in machine learning. No conscious designer required; selection alone is the engine.",                                                                                                                                                                 status: "settled",  reflect: "Where in your life is a 'population' (ideas, products, habits) currently being selected on by what survives this week?" },
  { t: "Statistical vs deterministic thinking",     short: "Many natural \"laws\" aren't absolute. They're statements about what almost always happens, across many trials.",                                 deep: "Newton's mechanics feels deterministic at our human scale, give me the position and momentum and I'll predict where things go. Underneath, quantum mechanics is fundamentally probabilistic; thermodynamics is statistical (one molecule could in principle do anything; trillions of molecules together behave like the second law says they should). A lot of \"laws\" you'll encounter, including the famous ones, are strong statistical regularities, true on average across many particles or many trials, not iron rules about any single case. Knowing which is which is part of becoming literate in how science actually works.",                                                                                                                                                                                       status: "settled",  reflect: "Pick a \"law\" you treat as absolute. Is it really, or is it actually a very strong statistical regularity over many cases?" },
  {
   t: "Bayes theorem",
   subdomain: "bio_stats",
   definition: "A rule for updating your belief in a hypothesis when new evidence arrives, by combining prior probability with how well the hypothesis predicts that evidence.",
   short: "Start with what you already believed, then nudge it by the new evidence.",
   deep: "Bayes theorem says the probability of a hypothesis given some evidence is proportional to the prior probability of the hypothesis times the likelihood of the evidence under that hypothesis. In plain words, your new belief is your old belief reshaped by the new data. The classic example is a medical test. Even a 99 percent accurate test for a rare disease can produce more false positives than true positives, because the prior probability that any given person has the disease is tiny. Most people get this wrong on first encounter. Bayes is also the engine behind spam filters, modern AI inference, and good detective work.",
   generic: "If you hear a noise at night, you do not immediately assume burglar. You weigh how often that noise happens in your neighbourhood against how often it would happen if a burglar were really there. That is Bayes.",
   expert: "P(H given E) = P(E given H) times P(H) divided by P(E). See Kahneman's Thinking Fast and Slow on base-rate neglect, and Pearl's work on Bayesian networks for the modern formalism.",
   status: "settled",
   reflect: "When you last changed your mind about something, did you actually update your prior, or did you flip entirely based on one striking piece of evidence?",
   conceptQuiz: [
    {
     q: "A disease affects 1 in 1000 people. A test is 99 percent accurate. You test positive. Roughly what is the chance you actually have the disease?",
     options: [
      { text: "Around 9 percent.", correct: true },
      { text: "99 percent.", misconception: "Ignores the low base rate. Most positives in a rare disease are false." },
      { text: "50 percent.", misconception: "Common intuition but wrong. The prior matters a lot." },
      { text: "Less than 1 percent.", misconception: "Underestimates the test's signal. True positives still outnumber the rate at random." }
     ],
     why: "With a 0.1 percent base rate and a 1 percent false positive rate, false positives dominate, so the true positive probability is roughly 9 to 10 percent."
    },
    {
     q: "Which everyday system most directly uses Bayesian reasoning?",
     options: [
      { text: "Spam filters that classify email.", correct: true },
      { text: "A wall clock keeping time.", misconception: "No belief updating involved." },
      { text: "A car odometer counting miles.", misconception: "Pure accumulation, not probabilistic inference." },
      { text: "A thermostat with a fixed setpoint.", misconception: "Control loop, not Bayesian updating." }
     ],
     why: "Spam filters compute the probability an email is spam given its words, classic Bayesian updating in production."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name your prior",        d: "Pick a claim you read today. Write down your prior probability before the news, then your posterior after.", xp: 10 },
    { level: "easy",     t: "Run the medical test",   d: "Work through the rare-disease example by hand with base rate 0.1 percent and 99 percent accuracy. Confirm the answer near 9 percent.", xp: 20 },
    { level: "advanced", t: "Build a tiny classifier", d: "Code a naive Bayes spam classifier on a small public email dataset. Report accuracy and the most predictive words.", xp: 40 }
   ]
  },
  {
   t: "Power law distributions",
   subdomain: "bio_stats",
   definition: "A distribution where a small number of items account for most of the total, and frequency falls off as a power of size.",
   short: "Most of the action comes from a tiny slice. The tail is huge.",
   deep: "Many real-world quantities do not follow the familiar bell curve. City populations, book sales, earthquake magnitudes, website traffic, wealth, and citation counts all follow power laws, where the biggest item is wildly bigger than the median, and a long tail of small items still matters in total. The practical upshot, averages and standard deviations can mislead. Median, percentile, and log-scale views tell the truth. The same shape powers Pareto's 80/20 rule, Zipf's law for word frequency, and the heavy tails that crash financial models built on normal-distribution assumptions.",
   generic: "Look at any city. A handful of streets carry most of the traffic, a handful of restaurants get most of the dinners, and a few influencers get most of the attention. That lopsidedness is a power law.",
   expert: "PDF roughly p(x) proportional to x to the negative alpha. See Zipf's law, Pareto distribution, and Taleb's The Black Swan on the dangers of treating heavy-tailed phenomena as Gaussian.",
   status: "settled",
   reflect: "In your work or hobby, what fraction of your output comes from the top 20 percent of your effort? Likely more than you think.",
   conceptQuiz: [
    {
     q: "Which quantity is most likely to follow a power law rather than a normal distribution?",
     options: [
      { text: "Heights of adult humans.", misconception: "Heights are approximately Gaussian, with a clear mean and tight spread." },
      { text: "City populations worldwide.", correct: true },
      { text: "Body temperatures of healthy people.", misconception: "Tightly clustered near 37 C, classic Gaussian." },
      { text: "Daily commute times in one office.", misconception: "Usually clusters around a mean with a modest spread." }
     ],
     why: "A few megacities dwarf the median city by orders of magnitude. Classic power-law shape."
    },
    {
     q: "Why is the average a misleading summary of a power-law distribution?",
     options: [
      { text: "The average is pulled up by a few enormous outliers and misrepresents the typical case.", correct: true },
      { text: "Averages cannot be computed for power laws.", misconception: "They can be computed, they are just often uninformative." },
      { text: "The average always equals the median in power laws.", misconception: "The opposite is true, the mean is far above the median." },
      { text: "Power laws have no variance.", misconception: "Variance can be infinite for some alphas, but that is a different issue." }
     ],
     why: "Heavy tails drag the mean far above the typical value. Median and percentiles describe the distribution better."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot a power law",        d: "Find one ranked list, cities, YouTube channels, or book sales. Plot rank against value on log scale and observe the shape.", xp: 10 },
    { level: "easy",     t: "80/20 audit",             d: "For one area of your life like work output or spending, calculate what percentage comes from the top 20 percent.", xp: 20 },
    { level: "advanced", t: "Fit and test",            d: "Pull a public dataset like word frequencies. Fit a power law, report the exponent, and discuss where the fit breaks down.", xp: 40 }
   ]
  },
  {
   t: "Hooke's law",
   subdomain: "mechanics",
   definition: "Within the elastic limit of a material, the force needed to stretch or compress a spring is directly proportional to the displacement from its rest position.",
   short: "Stretch a spring twice as far, you need twice the force. Until it gives up.",
   deep: "Robert Hooke discovered in 1676 that springs and many solids behave linearly under small loads, F equals minus k times x, where k is the stiffness and x is the displacement from the natural length. The minus sign captures that the restoring force pulls the object back home. The law underlies almost every analog measurement device, from kitchen scales to suspension systems in cars, watches with hairspring oscillators, and accelerometers in your phone. Crucially it holds only inside the elastic limit. Pull too hard and the material yields, then breaks, and the relationship goes nonlinear. Civil engineers spend a lot of their lives making sure beams and cables stay well inside their Hooke regime under load.",
   generic: "A rubber band. Pull it gently, it pulls back evenly. Pull harder, you feel proportionally more resistance. Yank too hard, and it stretches out of shape or snaps. Hooke described the well-behaved middle bit.",
   expert: "F equals minus k x for a 1D spring. Generalises to stress equals Young's modulus times strain in 3D. See Halliday, Resnick and Walker for derivations and the breakdown beyond the proportional limit.",
   status: "settled",
   reflect: "Look at one mechanical device near you, a chair, a pen click, a door hinge. Where is a spring quietly obeying Hooke's law every time you use it?",
   conceptQuiz: [
    {
     q: "Hooke's law predicts the force in a spring is proportional to…",
     options: [
      { text: "The displacement from its rest position.", correct: true },
      { text: "The square of the displacement.", misconception: "That would be quadratic, not the linear regime Hooke described." },
      { text: "The mass of the object attached.", misconception: "Mass does not appear in F equals minus k x." },
      { text: "The temperature of the spring.", misconception: "Temperature can change k slightly but is not the relationship Hooke stated." }
     ],
     why: "F equals minus k x, a strictly linear relationship inside the elastic limit."
    },
    {
     q: "When does Hooke's law stop working for a real material?",
     options: [
      { text: "Past the elastic limit, where the material yields and deforms permanently.", correct: true },
      { text: "Only at absolute zero temperature.", misconception: "Hooke's law fails for many materials at room temperature once stretched too far." },
      { text: "Whenever the spring is vertical rather than horizontal.", misconception: "Orientation does not change the spring's stiffness relationship." },
      { text: "Only in vacuum.", misconception: "Air pressure has negligible effect on a normal spring's force law." }
     ],
     why: "Beyond the elastic limit, materials deform plastically and the linear relationship breaks down."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spring spotting",          d: "Find three springs in your home, pen, mattress, weighing scale. Note what each is measuring or storing.", xp: 10 },
    { level: "easy",     t: "Measure k by hand",        d: "Hang known weights from a rubber band and measure stretch. Plot force versus displacement and estimate the stiffness k.", xp: 20 },
    { level: "advanced", t: "Find the breakdown",       d: "Keep loading the same rubber band past comfort. Note the load where linearity breaks. Explain what is happening in the polymer chains.", xp: 40 }
   ]
  },
  {
   t: "Speed of light as a cosmic speed limit",
   subdomain: "em_relativity",
   definition: "In vacuum, light travels at a fixed speed c of about 299,792,458 metres per second, the same for every observer regardless of their motion, and no information or matter can travel faster.",
   short: "Light has one speed in empty space. Nothing carrying information beats it. Ever.",
   deep: "Maxwell's equations in the 1860s predicted that electromagnetic waves travel at a specific speed that does not depend on the source. Einstein in 1905 took this seriously and built special relativity on top, postulating that c is the same for all observers. From that one assumption, time dilation, length contraction, and E equals m c squared all fall out. The speed of light also acts as a strict causal limit, no signal, no influence, no chunk of matter, can move information faster than c. This is why we see the Sun as it was eight minutes ago, why GPS must correct for relativistic clock effects, and why interstellar travel and communication are genuinely hard. Some things, like the expansion of space itself or the phase velocity of certain waves, can appear faster, but no information rides along.",
   generic: "Imagine a postal system where every letter, no matter how urgent, travels at one fixed top speed and there is no overnight upgrade you can buy. The universe runs on that rule.",
   expert: "c equals 299,792,458 m per s by definition since the 1983 SI redefinition. Lorentz transformations encode invariance of c across inertial frames. See Einstein's 1905 On the Electrodynamics of Moving Bodies, and Taylor and Wheeler's Spacetime Physics for the geometric picture.",
   status: "settled",
   reflect: "If a star eighty light years away exploded last week, when would you know? What does that delay imply about every astronomical image you have ever seen?",
   conceptQuiz: [
    {
     q: "Which statement about the speed of light in vacuum is correct?",
     options: [
      { text: "It is the same for every inertial observer, regardless of their motion.", correct: true },
      { text: "It increases if the source is moving toward you.", misconception: "That would be Galilean addition of velocities, which fails for light." },
      { text: "It depends on the colour of the light in vacuum.", misconception: "All frequencies travel at c in vacuum. Colour dispersion is a medium effect." },
      { text: "It can be exceeded with a powerful enough laser.", misconception: "Energy does not change the invariant speed limit." }
     ],
     why: "Invariance of c across inertial frames is the founding postulate of special relativity."
    },
    {
     q: "Why do we say sunlight we see now actually left the Sun about 8 minutes ago?",
     options: [
      { text: "Because light takes finite time to travel the roughly 150 million km from Sun to Earth.", correct: true },
      { text: "Because the Sun pauses its emission for 8 minutes.", misconception: "The Sun emits continuously. The delay is travel time, not pause." },
      { text: "Because Earth's atmosphere slows the light by 8 minutes.", misconception: "Atmospheric slowing is microscopic compared to the 8 minute travel time." },
      { text: "Because human vision lags by 8 minutes.", misconception: "Vision lag is milliseconds, not minutes." }
     ],
     why: "Distance divided by c gives roughly 8 minutes 20 seconds, the actual transit time of light from Sun to Earth."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Light delay map",          d: "Compute the light-travel delay from Earth to the Moon, Sun, and Mars at average distance. Note what each means for radio communication.", xp: 10 },
    { level: "easy",     t: "GPS relativity check",     d: "Read a short explainer on GPS relativistic corrections. Note the size of the daily clock drift if special and general relativity were ignored.", xp: 20 },
    { level: "advanced", t: "Causality puzzle",         d: "Argue in one page why faster-than-light signalling would let an observer receive a reply before sending the question in some frame. Use a spacetime diagram.", xp: 40 }
   ]
  },
  {
   t: "Second law of thermodynamics",
   subdomain: "thermo",
   definition: "In any isolated system, the total entropy never decreases, so spontaneous processes drift toward higher disorder and define the direction of time.",
   short: "Closed systems get more disordered on their own. That is also why time has an arrow.",
   deep: "Clausius stated it in 1850: heat does not spontaneously flow from a cold body to a hot body. Boltzmann later reframed it statistically: entropy is a count of how many microscopic arrangements correspond to a given macroscopic state, and almost any random shuffle of molecules ends up in a higher count. Drop a sugar cube in tea and it dissolves; you never see the molecules spontaneously regather into a cube. Engines cannot be 100 percent efficient because some energy always leaks as low-grade heat. Refrigerators and living cells can decrease local entropy, but only by exporting more entropy to their surroundings. The arrow of time, why eggs scramble but never unscramble, is one of the strangest implications of this otherwise dry-looking law.",
   generic: "Leave any room alone for a month. It gets messier, not tidier. The second law is that tendency, written into the universe itself.",
   expert: "Clausius (1850); Boltzmann's statistical formulation S equals k log W. See Sean Carroll's From Eternity to Here for the arrow-of-time treatment, and Schrodinger's What Is Life on how living systems run on negative entropy fluxes.",
   status: "settled",
   reflect: "Where in your daily life are you quietly spending energy just to keep entropy at bay, and have you ever counted what that bill looks like?",
   conceptQuiz: [
    {
     q: "In an isolated system, the second law says the total entropy:",
     options: [
      { text: "Never decreases over time.", correct: true },
      { text: "Always returns to its starting value.", misconception: "Reversibility is an idealisation. Real processes increase entropy." },
      { text: "Decreases as the system organises itself.", misconception: "Local order requires entropy export elsewhere, not a global decrease." },
      { text: "Is unrelated to time.", misconception: "Entropy increase is exactly what gives time a direction macroscopically." }
     ],
     why: "Clausius's statement and Boltzmann's statistical version both yield the same conclusion: isolated systems do not spontaneously become more ordered."
    },
    {
     q: "Why can a refrigerator make its inside colder without violating the second law?",
     options: [
      { text: "It dumps even more heat into the room than it removes from inside.", correct: true },
      { text: "Refrigerators are exempt from thermodynamics.", misconception: "No system is exempt." },
      { text: "Cold air has zero entropy.", misconception: "Cold air still has entropy; it has less than warm air, not none." },
      { text: "Electricity does not count as energy input.", misconception: "Electricity is the energy that drives the entropy export." }
     ],
     why: "A fridge is not isolated; total entropy of fridge plus room plus power source rises even as the inside cools."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot one-way processes",   d: "List five everyday processes that go one way and never reverse on their own. Tag each with the entropy source involved.", xp: 10 },
    { level: "easy",     t: "Engine efficiency hunt",   d: "Look up the rated efficiency of a car engine, a power plant, and a kettle. Note where the wasted energy ends up.", xp: 20 },
    { level: "advanced", t: "Local order, global cost", d: "Pick one living system (a cell, a forest, a city). Write one page on how it maintains local order and where the exported entropy goes.", xp: 40 }
   ],
   diagram: {
    kind: "curve",
    title: "Entropy of an isolated system over time",
    caption: "In any spontaneous process an isolated system's entropy rises. Local order can fall, but only by exporting more disorder somewhere else.",
    data: {
     x: "Time",
     y: "Entropy (S)",
     series: [
      { label: "Isolated system",      points: [[0, 10], [1, 18], [2, 30], [3, 45], [4, 58], [5, 68], [6, 75]] },
      { label: "Reversible (ideal)",   points: [[0, 10], [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10]] }
     ]
    }
   }
  },
  {
   t: "Newton's third law",
   subdomain: "mechanics",
   definition: "When one body exerts a force on a second body, the second body simultaneously exerts an equal and opposite force on the first.",
   short: "Push on something, it pushes back, just as hard.",
   deep: "Newton's third law is the least understood of the three, even though we use it constantly. When you walk, your foot pushes the ground backward and the ground pushes you forward; without that reaction force you could not move. A rocket throws hot gas downward and the gas throws the rocket upward, that is how it climbs in vacuum where there is nothing to push against. Recoil from a fired gun, lift on an aeroplane wing, the kick of a fire hose, all are the same equation in different costumes. The key subtlety is that the two forces act on different bodies, which is why they do not just cancel out. Confusing 'equal and opposite' with 'cancelling' is the single most common error students make.",
   generic: "Try to push a friend off a skateboard while you stand on one too. You both roll away from each other. The skateboard reveals what walking on solid ground hides.",
   expert: "Newton's Principia (1687), Lex Tertia. The pair of forces is sometimes called an action-reaction pair. Reaction forces underlie conservation of momentum and Tsiolkovsky's rocket equation. See Feynman Lectures Vol I, chapter 9, for the cleanest exposition.",
   status: "settled",
   reflect: "Right now, pick any object in contact with you. Name the force you exert on it and the equal and opposite force it exerts on you. Most people skip past this every day.",
   conceptQuiz: [
    {
     q: "A horse pulls a cart and they accelerate forward. Which statement about the action-reaction pair is correct?",
     options: [
      { text: "The horse pulls the cart forward and the cart pulls the horse backward with equal force; net motion comes from the horse pushing the ground.", correct: true },
      { text: "The forces cancel so nothing moves.", misconception: "They act on different bodies, so they do not cancel for either body's motion." },
      { text: "The horse exerts more force than the cart does back.", misconception: "Third law forces are equal in magnitude, always." },
      { text: "Newton's third law does not apply on land.", misconception: "It applies in every frame." }
     ],
     why: "The horse-cart pair illustrates that action and reaction act on different bodies and that net motion depends on all forces on each body."
    },
    {
     q: "Which everyday phenomenon is the cleanest illustration of Newton's third law?",
     options: [
      { text: "A rocket accelerating in vacuum by ejecting exhaust.", correct: true },
      { text: "A pendulum swinging.", misconception: "Pendulums illustrate restoring forces, not action-reaction pairs in particular." },
      { text: "Water freezing.", misconception: "Phase change, not mechanics." },
      { text: "A magnet sticking to a fridge.", misconception: "Better illustration of forces at a distance than of the third law per se." }
     ],
     why: "Rocket propulsion needs no medium; the engine throws mass one way and is pushed the other, the third law in pure form."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the pair",          d: "Pick any push or pull in your room. Name both forces in the action-reaction pair and the two bodies they act on.", xp: 10 },
    { level: "easy",     t: "Skateboard experiment",  d: "Stand on a skateboard or office chair. Throw a heavy book away from you. Measure how far you roll. Estimate the momentum transfer.", xp: 20 },
    { level: "advanced", t: "Tsiolkovsky derivation", d: "Derive the rocket equation from Newton's third law and conservation of momentum. Apply it to a real launch profile and explain the role of staging.", xp: 40 }
   ],
   diagram: {
    kind: "sequence",
    title: "Action-reaction pairs in a rocket launch",
    caption: "The two forces in a third-law pair act on different bodies. Rockets push gas down; gas pushes the rocket up.",
    data: {
     actors: ["Rocket", "Exhaust gas"],
     messages: [
      { from: 0, to: 1, text: "Pushes gas downward (action)" },
      { from: 1, to: 0, text: "Pushes rocket upward (reaction)" },
      { from: 0, to: 1, text: "Ejects more mass" },
      { from: 1, to: 0, text: "Rocket accelerates further" }
     ]
    }
   }
  },
  {
   t: "General relativity",
   subdomain: "em_relativity",
   definition: "Einstein's 1915 theory in which mass and energy curve the four-dimensional fabric of spacetime, and what we experience as gravity is the motion of objects along that curvature.",
   short: "Mass tells spacetime how to curve; curved spacetime tells matter how to move.",
   deep: "Newton treated gravity as a force pulling masses across empty space. Einstein, in November 1915, replaced that picture: mass and energy bend spacetime, and free-falling objects simply travel along the straightest available paths through that curved geometry. A planet orbits the sun because the sun has dimpled spacetime, not because an invisible string is pulling it. The theory predicted, and observations confirmed, the bending of starlight near the sun (Eddington 1919), the precession of Mercury's perihelion, gravitational time dilation, the existence of black holes, gravitational lensing, and gravitational waves directly detected by LIGO in 2015. GPS satellites must correct for both special and general relativistic clock effects every day; without those corrections, your phone's location would drift by kilometres within hours.",
   generic: "Picture a trampoline with a heavy bowling ball in the middle. Roll a marble nearby and it curves toward the ball, not because the ball pulls it but because the surface is bent. Spacetime works like that, in four dimensions.",
   expert: "Einstein field equations: G_munu plus Lambda g_munu equals 8 pi G over c to the fourth times T_munu. See Misner, Thorne, and Wheeler's Gravitation for the canonical text, and Sean Carroll's Spacetime and Geometry for a modern course treatment. Experimental confirmations include the 1919 eclipse expedition, Pound-Rebka (1959), Hulse-Taylor binary pulsar (1974), and LIGO's 2015 detection of GW150914.",
   status: "settled",
   reflect: "If gravity is geometry rather than force, what is actually holding you in your chair right now, and how would you explain that to a curious ten-year-old in one sentence?",
   conceptQuiz: [
    {
     q: "Which statement best captures the core idea of general relativity?",
     options: [
      { text: "Mass and energy curve spacetime, and objects move along the resulting geometry.", correct: true },
      { text: "Gravity is a force carried by tiny particles called gravitons, already detected.", misconception: "Quantising gravity is open research; gravitons are not detected." },
      { text: "Gravity only matters for very large objects in space.", misconception: "GPS clocks on Earth must already correct for relativistic effects." },
      { text: "Newton's gravity has been proven wrong everywhere.", misconception: "Newton is an excellent approximation at low speeds and weak fields." }
     ],
     why: "Curvature of spacetime is the central insight; Newtonian gravity is the weak-field, low-velocity limit of general relativity."
    },
    {
     q: "Which observation is a direct confirmation of general relativity?",
     options: [
      { text: "Detection of gravitational waves from a binary black hole merger by LIGO.", correct: true },
      { text: "Apples falling from trees.", misconception: "Newton already explains that within his framework." },
      { text: "Tides on Earth.", misconception: "Newtonian gravity already accounts for tides to high precision." },
      { text: "Geosynchronous satellites staying overhead.", misconception: "Newtonian orbital mechanics suffices for that prediction." }
     ],
     why: "Direct detection of gravitational waves, predicted by Einstein and confirmed by LIGO in 2015, is a uniquely general-relativistic phenomenon."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Trampoline analogy",       d: "Draw the rubber-sheet trampoline picture. Note three places where the analogy breaks down (it is two-dimensional, it needs external gravity, etc.).", xp: 10 },
    { level: "easy",     t: "GPS clock correction",     d: "Read a short explainer on GPS relativistic corrections. Note the size of the daily drift if both special and general relativity were ignored.", xp: 20 },
    { level: "advanced", t: "Schwarzschild radius",     d: "Compute the Schwarzschild radius for the Earth, the Sun, and Sagittarius A star. Comment on what that radius means physically for each.", xp: 40 }
   ]
  },
  {
   t: "Newton's first law of motion",
   subdomain: "mechanics",
   definition: "A body at rest stays at rest, and a body in uniform motion continues in a straight line, unless acted on by a net external force.",
   short: "Things keep doing what they were doing until something pushes back.",
   deep: "Newton's first law, often called the law of inertia, was not original to Newton, Galileo had the idea, but Newton crystallised it in the Principia of 1687. It rewrote the Aristotelian intuition that motion needs a constant cause. It does not. What needs a cause is a change in motion. A puck on smooth ice keeps gliding because the only forces on it are gravity and a normal force, with negligible friction. On rough ground it stops fast because friction is a real force. The law also defines what we mean by an inertial frame, a frame where the law holds without invoking ghost forces. Engineers use it daily, seat belts in a car protect you because your body wants to keep moving forward while the car decelerates.",
   generic: "If you stop pedalling a bicycle on a smooth road, you do not stop instantly. You glide. Things keep going until something slows them.",
   expert: "Principia Mathematica 1687, Definitions and Law I. See Galileo's earlier discussion in Dialogue Concerning the Two Chief World Systems (1632). Modern phrasing leans on the concept of inertial reference frames developed in Mach and later Einstein.",
   status: "settled",
   reflect: "Pick one situation today, a coffee mug, a moving lift, a sudden brake. Where is the inertia visible?",
   conceptQuiz: [
    {
     q: "Newton's first law is best summarised as…",
     options: [
      { text: "A body keeps its velocity unless a net external force acts on it.", correct: true },
      { text: "All bodies eventually come to rest.", misconception: "Friction is the cause, not a fundamental law." },
      { text: "Force equals mass times acceleration.", misconception: "That is the second law." },
      { text: "Every action has an equal and opposite reaction.", misconception: "That is the third law." }
     ],
     why: "The first law states that velocity is constant in the absence of net force."
    },
    {
     q: "Why do passengers lurch forward when a bus brakes hard?",
     options: [
      { text: "Their bodies tend to continue in motion while the bus decelerates.", correct: true },
      { text: "Gravity acts on them more strongly during braking.", misconception: "Gravity is unrelated to braking." },
      { text: "The bus pushes them backwards.", misconception: "There is no such backwards push from the bus on the body." },
      { text: "Air resistance pulls them forward.", misconception: "Air resistance does the opposite, and is small at bus speeds." }
     ],
     why: "Inertia keeps the body moving until friction with seat or floor decelerates it."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot inertia",        d: "List five everyday examples where a body resists a change in its motion.", xp: 10 },
    { level: "easy",     t: "Inertial frames",     d: "Write a one-page note explaining why a rotating merry-go-round is not an inertial frame, and what ghost forces appear.", xp: 20 },
    { level: "advanced", t: "Galileo vs Aristotle", d: "Read excerpts from Galileo's Dialogue and an Aristotelian text. Note three arguments Galileo uses to overturn the older view.", xp: 40 }
   ]
  },
  {
   t: "Newton's second law, F = ma",
   subdomain: "mechanics",
   definition: "The net force on an object equals the rate of change of its momentum, and for constant mass this reduces to force equals mass times acceleration.",
   short: "Push harder or push lighter things to get more acceleration.",
   deep: "Newton's second law is the quantitative engine of classical mechanics. It says that the time derivative of momentum equals the net force. For constant mass m, this is the familiar F = ma. The law unifies kicks, falls, orbits, and rocket flight. A 60 kilogram cyclist who applies 300 newtons of forward thrust accelerates at 5 metres per second squared if drag and friction are ignored, less in reality. Rockets need the more general form because mass changes as fuel burns. The law works perfectly only in inertial frames, and only for speeds far below the speed of light. At high speeds relativistic momentum replaces classical momentum. The deeper insight is dimensional. Knowing the units of force as kilogram metre per second squared, called the newton, locks the whole subject together.",
   generic: "A heavier shopping trolley needs a stronger shove to move at the same pace as a lighter one. Same shove on a lighter trolley, much faster start.",
   expert: "Principia 1687, Law II. Modern textbook treatment in Kleppner and Kolenkow, An Introduction to Mechanics, chapter 2. Relativistic generalisation in Einstein 1905, special relativity papers.",
   status: "settled",
   reflect: "Estimate the average acceleration of your daily commute. How big is the average net force on your body, in newtons?",
   conceptQuiz: [
    {
     q: "Newton's second law in its most general form states that…",
     options: [
      { text: "Net force equals the time derivative of momentum.", correct: true },
      { text: "Force equals mass divided by acceleration.", misconception: "Inverts the relation incorrectly." },
      { text: "Force is always equal to weight.", misconception: "Weight is only one possible force." },
      { text: "Force equals work done.", misconception: "Confuses energy with force." }
     ],
     why: "F = dp/dt is the general form; F = ma is the constant-mass special case."
    },
    {
     q: "A 2 kg object accelerates at 3 m/s squared. What is the net force on it?",
     options: [
      { text: "6 newtons.", correct: true },
      { text: "1.5 newtons.", misconception: "Divides instead of multiplying." },
      { text: "5 newtons.", misconception: "Adds instead of multiplying." },
      { text: "2 newtons.", misconception: "Ignores the acceleration." }
     ],
     why: "F = ma = 2 times 3 equals 6 newtons."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Unit check",         d: "Write three everyday forces and convert them to newtons. Include your own weight at standard gravity.", xp: 10 },
    { level: "easy",     t: "Free body diagram",  d: "Draw a free body diagram for a car on a slope and apply F = ma along the slope to find the acceleration.", xp: 20 },
    { level: "advanced", t: "Rocket equation",    d: "Derive the Tsiolkovsky rocket equation from the general form F = dp/dt. Explain why constant mass F = ma fails for rockets.", xp: 40 }
   ]
  },
  {
   t: "Snell's law of refraction",
   subdomain: "em_relativity",
   definition: "When light passes from one medium to another, the product of the refractive index and the sine of the angle from the normal is conserved.",
   short: "Light bends toward the slower medium, by a precise ratio of sines.",
   deep: "Snell's law states that n1 sin theta1 equals n2 sin theta2, where n is the refractive index of each medium and theta is the angle from the normal. It was empirically known to Ibn Sahl in the 10th century and rediscovered by Willebrord Snell in 1621. Light slows down in denser media because of how it interacts with bound electrons. Fermat later derived the same law from his principle of least time, showing that light bends to take the fastest path, not the shortest. Snell's law explains why a straw looks broken at the water surface, why prisms split light, and why optical fibres can carry signals across oceans through total internal reflection. Above a critical angle, no refraction is possible and all light reflects.",
   generic: "A wheelchair entering a sandy patch at an angle veers, because one wheel hits the slow surface before the other. Light does the same when it crosses into glass.",
   expert: "Snell 1621, manuscript. Earlier derivation by Ibn Sahl, On Burning Mirrors and Lenses, around 984 CE. Fermat's least-time derivation 1662. Modern treatment in Hecht, Optics, chapter 4.",
   status: "settled",
   reflect: "Look at a spoon in a half-filled glass of water. Can you predict the apparent bend using Snell's law and the refractive index of water?",
   conceptQuiz: [
    {
     q: "Snell's law is mathematically expressed as…",
     options: [
      { text: "n1 sin theta1 equals n2 sin theta2.", correct: true },
      { text: "n1 cos theta1 equals n2 cos theta2.", misconception: "Uses cosine, which is incorrect." },
      { text: "n1 tan theta1 equals n2 tan theta2.", misconception: "Tangent does not appear in Snell's law." },
      { text: "n1 theta1 equals n2 theta2.", misconception: "Only an approximation for very small angles." }
     ],
     why: "Snell's law uses sines of the angles measured from the normal."
    },
    {
     q: "Above the critical angle, light going from glass to air will…",
     options: [
      { text: "Undergo total internal reflection.", correct: true },
      { text: "Refract more strongly than usual.", misconception: "It does not refract at all above the critical angle." },
      { text: "Be absorbed by the boundary.", misconception: "The boundary does not absorb; it reflects." },
      { text: "Split into two beams of equal intensity.", misconception: "Only one beam, fully reflected." }
     ],
     why: "Total internal reflection underlies optical fibres."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Bend prediction",     d: "Compute the refracted angle when light hits water at 30 degrees from the normal. Use n equal to 1.33.", xp: 10 },
    { level: "easy",     t: "Critical angle",      d: "Compute the critical angle for total internal reflection at a glass-air boundary with n equal to 1.5.", xp: 20 },
    { level: "advanced", t: "Fermat derivation",   d: "Derive Snell's law from Fermat's principle of least time. Show every step including the use of calculus.", xp: 40 }
   ]
  },
  {
   t: "Ohm's law",
   subdomain: "em_relativity",
   definition: "For most conductors at fixed temperature, the current through them is directly proportional to the voltage across them, with resistance as the constant.",
   short: "V equals I times R, the workhorse of electrical engineering.",
   deep: "Georg Ohm published his result in 1827 after careful experiments with wires of different lengths and thicknesses. The relation V = IR holds for ohmic materials such as most metals at a constant temperature. It breaks for diodes, semiconductors away from a fixed bias, gas discharge tubes, and superconductors. Resistance has a microscopic interpretation, the Drude model, in which conduction electrons scatter off lattice ions. Engineers use Ohm's law together with Kirchhoff's circuit laws to analyse every household circuit. Knowing that doubling the voltage doubles the current at fixed resistance, and that doubling the resistance halves the current at fixed voltage, gives almost intuitive control over circuit design. The dual relation P = VI tells you the power dissipated as heat.",
   generic: "Voltage is like water pressure, current is the flow rate, resistance is the narrowness of the pipe. Squeeze the pipe and less water flows for the same pressure.",
   expert: "Georg Simon Ohm, Die galvanische Kette mathematisch bearbeitet, 1827. Microscopic justification in Drude's model 1900. Modern circuit analysis: Sedra and Smith, Microelectronic Circuits.",
   status: "settled",
   reflect: "Pick one appliance at home. From its rated wattage and standard 230 volts in India, estimate the current it draws.",
   conceptQuiz: [
    {
     q: "Ohm's law is most precisely stated as…",
     options: [
      { text: "For ohmic materials at fixed temperature, current is proportional to voltage.", correct: true },
      { text: "Current is always proportional to voltage in every device.", misconception: "Diodes and many semiconductors are non-ohmic." },
      { text: "Voltage equals current divided by resistance.", misconception: "Inverts the relation." },
      { text: "Power equals current squared times voltage.", misconception: "Confuses Joule's law with Ohm's law." }
     ],
     why: "Ohm's law strictly applies to ohmic conductors and constant temperature."
    },
    {
     q: "A 10 volt source drives 2 amperes through a resistor. What is the resistance?",
     options: [
      { text: "5 ohms.", correct: true },
      { text: "20 ohms.", misconception: "Multiplies instead of dividing." },
      { text: "0.2 ohms.", misconception: "Inverts the calculation." },
      { text: "12 ohms.", misconception: "Adds instead of dividing." }
     ],
     why: "R = V over I equals 10 divided by 2 equals 5 ohms."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Power and current",  d: "Compute the current drawn by a 1500 watt geyser at 230 volts. Compare to a 60 watt bulb.", xp: 10 },
    { level: "easy",     t: "Series vs parallel", d: "Build the formula for total resistance in series and in parallel. Apply to a circuit of three resistors.", xp: 20 },
    { level: "advanced", t: "When Ohm fails",     d: "List three devices where V is not proportional to I. Sketch the I vs V curve for each and explain the physics.", xp: 40 }
   ]
  },
  {
   t: "Conservation of momentum",
   subdomain: "mechanics",
   definition: "In a closed system with no external forces, the total linear momentum stays constant in time.",
   short: "Total push of a system before equals total push after.",
   deep: "Conservation of momentum follows from Newton's third law and, more fundamentally, from the symmetry of space under translation, a result of Noether's theorem in 1918. The total vector sum of mass times velocity for every body in an isolated system does not change. The classic demonstration is two ice skaters pushing off, equal masses depart with equal speeds in opposite directions. Rockets thrust forward by hurling exhaust backward. Collisions can be elastic, where kinetic energy is also conserved, or inelastic, where energy is lost to heat and deformation but momentum is conserved either way. The principle also extends to relativistic and quantum settings, with momentum becoming a four vector in special relativity.",
   generic: "Imagine two trolleys on smooth rails. If you push one, the other will roll back so that the total motion remains the same as before you pushed.",
   expert: "Principia 1687, Law III with Law II together imply conservation. Deeper derivation in Noether 1918. Quantum extension via Ehrenfest theorem and Heisenberg picture.",
   status: "settled",
   reflect: "Two cars of equal mass collide head on at 30 km per hour each. What does conservation of momentum say about their motion just after collision?",
   conceptQuiz: [
    {
     q: "Momentum is conserved when…",
     options: [
      { text: "No net external force acts on the system.", correct: true },
      { text: "No friction is present.", misconception: "Friction is one external force, not the only one." },
      { text: "Energy is also conserved.", misconception: "Inelastic collisions conserve momentum but not kinetic energy." },
      { text: "All bodies move at the same speed.", misconception: "Not required for conservation." }
     ],
     why: "Conservation needs only that the net external force is zero."
    },
    {
     q: "A 2 kg cart at 3 m/s collides and sticks to a stationary 4 kg cart. Final speed of the combined cart?",
     options: [
      { text: "1 m/s.", correct: true },
      { text: "3 m/s.", misconception: "Ignores the added mass." },
      { text: "2 m/s.", misconception: "Wrong arithmetic." },
      { text: "0.5 m/s.", misconception: "Halves twice." }
     ],
     why: "Total momentum before equals 6, after equals 6 kg m/s on 6 kg, gives 1 m/s."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Trolley problem",   d: "Solve three one-dimensional momentum problems with given masses and speeds.", xp: 10 },
    { level: "easy",     t: "Rocket back of envelope", d: "Estimate the exhaust speed required for a small rocket of 1000 kg to gain 100 m/s while ejecting 100 kg of fuel.", xp: 20 },
    { level: "advanced", t: "Noether's theorem",  d: "Read a non-technical derivation of Noether's theorem linking translation symmetry to momentum conservation. Write a 500-word summary.", xp: 40 }
   ]
  },
  {
   t: "Central limit theorem",
   subdomain: "bio_stats",
   definition: "The sum or mean of a large number of independent random variables with finite variance tends to a normal distribution, regardless of the underlying distribution.",
   short: "Averages go Gaussian, even when the individual data are not.",
   deep: "The central limit theorem, often called the CLT, is the reason normal distributions show up everywhere in statistics. Take any random variable with a finite mean and variance, sample it many times, and the distribution of the sample mean approaches a normal distribution as the sample size grows. The convergence rate depends on the original shape, well-behaved distributions converge in samples of about 30, heavy-tailed ones need much more. The theorem powers most classical inference: confidence intervals, hypothesis tests, A/B testing, quality control charts. It also explains why measurement errors in physics tend to be Gaussian, the sum of many small unbiased noise sources approaches a normal distribution. The catch: when variance is infinite, as with power-law distributions, the CLT fails and stable laws take over.",
   generic: "Roll one die and the result can be anything from 1 to 6 with equal chance. Roll twenty dice and average them, and the average will cluster around 3.5 like a bell.",
   expert: "Laplace 1810, Lindeberg-Lévy theorem, modern treatment in Feller, An Introduction to Probability Theory, volume 2 chapter 8. Failure cases handled by Generalised CLT, Gnedenko and Kolmogorov.",
   status: "settled",
   reflect: "Pick a non-normal distribution like income or page views. Why might the CLT still help when you compare two groups by their averages?",
   conceptQuiz: [
    {
     q: "Which condition is necessary for the classical CLT to apply?",
     options: [
      { text: "Independent variables with finite mean and variance.", correct: true },
      { text: "All variables must be normally distributed already.", misconception: "Then the result is trivial; the CLT's power is for non-normal inputs." },
      { text: "All variables must be identical positive integers.", misconception: "Not required, the CLT works for many distributions." },
      { text: "Sample size of at least 1000.", misconception: "Often 30 suffices for well-behaved distributions." }
     ],
     why: "Independence plus finite variance is the classical Lindeberg-Lévy condition."
    },
    {
     q: "Where does the classical CLT FAIL to produce a normal limit?",
     options: [
      { text: "When the underlying distribution has infinite variance, like a Cauchy distribution.", correct: true },
      { text: "When the sample size is exactly 100.", misconception: "Sample size does not break the CLT, the conditions on the distribution do." },
      { text: "When the variables have a small but finite mean.", misconception: "A small mean does not affect the limit." },
      { text: "When values are positive only.", misconception: "Positive support does not break the CLT." }
     ],
     why: "Infinite variance breaks the classical CLT and pushes you to stable laws."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Dice simulation",   d: "Roll a six sided die mentally or in code 50 times and compute the running mean. Note how quickly it stabilises around 3.5.", xp: 10 },
    { level: "easy",     t: "CI on a mean",      d: "Take any dataset of 100 values. Compute a 95 percent confidence interval for the mean using the CLT approximation.", xp: 20 },
    { level: "advanced", t: "Heavy tails",       d: "Simulate sample means from a Pareto distribution with shape parameter 1.5. Observe and explain the failure of the classical CLT.", xp: 40 }
   ]
  }
 ],

 counterView: "Pop-science framings sometimes leak from physics into places they don't belong, Schrödinger's cat as a self-help metaphor, entropy as a productivity hack, quantum as anything mystical. Take the famous laws seriously inside their domains; resist the temptation to use them as analogies that 'prove' claims in unrelated fields. Newton works great for cannonballs, lousy for atoms; relativity works great for high speeds, doesn't replace classical mechanics in your car. The fields where 'famous laws' map cleanly onto everyday life are narrower than the way they get used in books.",

 capabilities: [
  "Identify Newton's three laws in everyday objects.",
  "Use entropy intuition to predict where order will decay.",
  "Spot when a science word is being used metaphorically vs literally.",
  "Read a science headline w/ rough scepticism (effect size? replication?).",
  "Connect a biological idea to a physics or math one."
 ],
 cheatsheet: [
  "F = m·a. Stuck things need either more force or less mass.",
  "Energy is conserved. Always trace it.",
  "Entropy grows in closed systems. Order costs energy.",
  "Light is an electromagnetic wave. Maxwell wins.",
  "Time isn't universal at high speeds; gravity is geometry.",
  "Natural selection needs variation + inheritance + a survival gap.",
  "Don't analogise physics into self-help."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Get the cast of characters",             do: "Watch Veritasium, PBS Spacetime, and Sixty Symbols on YouTube. Read a friendly book like Six Easy Pieces. Pick 10 famous laws and learn what each one says, in words, not equations.",                                                                                 milestone: "You can name 10 laws and the person behind each, in plain English.",                                               time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Build everyday intuition for them",           do: "Each week, find five everyday objects or situations and figure out which famous law is at work. Coffee cooling = second law. Pushing a heavy door = Newton's second. Phone receiving a call = Maxwell. You're rewiring your senses to see the laws.",                                                     milestone: "The laws feel like daily experience rather than exam material.",                                                 time: "~1 month" },
  { rank: "Practitioner", focus: "Go one discipline deeper",               do: "Pick the one that grabbed you, mechanics, thermodynamics, electromagnetism, evolution, and read a real book in it. Not a popular summary; an actual textbook or undergraduate-level treatment.",                                                                             milestone: "You can answer questions about your chosen area that go beyond the headlines you started with.",                                 time: "~2-3 months" },
  { rank: "Specialist",  focus: "Do the maths for at least one law; run a kitchen experiment", do: "Work through F = ma with real numbers. Do basic thermodynamics calculations. Try a safe at-home experiment that demonstrates a famous law (cooling rates, simple electromagnetism with a battery and wire).",                                                                         milestone: "You can derive and verify, not just recite.",                                                           time: "~6 months" },
  { rank: "Expert",    focus: "See the same idea across fields",            do: "Read where physics, biology, and computation overlap, information theory, statistical mechanics, evolutionary dynamics. The same patterns keep showing up under different names.",                                                                                     milestone: "You spot the same underlying idea in three different places without prompting.",                                         time: "~1 year+" },
  { rank: "Master",    focus: "Explain it cleanly to non-experts",           do: "Teach. Write essays. Make videos. The constraint of explaining to someone outside the field is what forces you to fully understand it.",                                                                                                         milestone: "People walk away from your explanations with intuition, not just memorised words.",                                        time: "~2 years+" },
  { rank: "Grandmaster", focus: "Contribute to the frontier or to public understanding", do: "Original research, or science writing that genuinely changes how others teach and learn the same laws.",                                                                                                                         milestone: "Other people borrow your framings without realising they came from you.",                                             time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Veritasium (YouTube)",            what: "Best general-audience physics + science explainers.",                   url: "https://www.youtube.com/@veritasium",                         weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "PBS Spacetime (YouTube)",          what: "Modern physics, intuition-first.",                             url: "https://www.youtube.com/@pbsspacetime",                       weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Feynman Lectures (free online)",       what: "The original masterclass, free.",                             url: "https://www.feynmanlectures.caltech.edu/",                      weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Kurzgesagt (YouTube)",            what: "Beautifully animated science explainers.",                         url: "https://www.youtube.com/@kurzgesagt",                         verify: false, lastVerified: "2026-06" },
   { name: "MinutePhysics (YouTube)",          what: "Short, single-concept physics explainers.",                        url: "https://www.youtube.com/@minutephysics",                       verify: false, lastVerified: "2026-06" },
   { name: "Sixty Symbols (YouTube)",          what: "Physics with actual academic physicists.",                         url: "https://www.youtube.com/@sixtysymbols",                       verify: false, lastVerified: "2026-06" },
   { name: "Khan Academy, Physics",           what: "Free structured curriculum from absolute basics.",                     url: "https://www.khanacademy.org/science/physics",                    weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "MIT OpenCourseWare, Physics",        what: "Real MIT physics courses, free.",                             url: "https://ocw.mit.edu/courses/physics/",                        weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia, Scientific laws named after people", what: "Index of famous named laws.",                             url: "https://en.wikipedia.org/wiki/List_of_scientific_laws_named_after_people",     verify: false, lastVerified: "2026-06" },
   { name: "Quanta Magazine",               what: "High-quality science journalism, free.",                          url: "https://www.quantamagazine.org/",                          verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Six Easy Pieces, Richard Feynman",     what: "Selected chapters from the Lectures. Excellent first read.",                url: "https://en.wikipedia.org/wiki/Six_Easy_Pieces",                   price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "The Order of Time, Carlo Rovelli",     what: "Beautifully written physics-as-philosophy.",                        url: "https://en.wikipedia.org/wiki/The_Order_of_Time",                  price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "On the Origin of Species, Darwin",     what: "Still the clearest exposition of the idea.",                        url: "https://en.wikipedia.org/wiki/On_the_Origin_of_Species",              price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "A Brief History of Time, Stephen Hawking", what: "The popular-physics classic.",                               url: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time",               price: "verify", weight: "popular", verify: false, lastVerified: "2026-06" },
   { name: "The Selfish Gene, Richard Dawkins",     what: "Evolution from the gene's-eye view.",                            url: "https://en.wikipedia.org/wiki/The_Selfish_Gene",                  price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "The Greatest Show on Earth, Dawkins",    what: "The evidence for evolution, marshalled clearly.",                     url: "",                                         price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "QED, Richard Feynman",            what: "Quantum electrodynamics for non-mathematicians.",                     url: "https://en.wikipedia.org/wiki/QED:_The_Strange_Theory_of_Light_and_Matter",     price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Seven Brief Lessons on Physics, Rovelli",  what: "Short, lyrical introduction to modern physics.",                      url: "",                                         price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Beginning of Infinity, David Deutsch", what: "Philosophy of science + explanation.",                           url: "",                                         price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "What is Real?, Adam Becker",        what: "Quantum-foundations history, accessibly written.",                     url: "",                                         price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "5 everyday-object Newton", d: "Identify Newton's laws operating in 5 ordinary objects. Write a sentence each.", xp: 30 },
  { t: "Entropy walk", d: "Spend 10 minutes walking through your home and noting where you're paying entropy's bill daily.", xp: 30 },
  { t: "Headline scepticism", d: "Read 3 science headlines. For each, find the actual paper. Note effect size + sample.", xp: 50 },
  { t: "Kitchen-science test", d: "Do one safe kitchen experiment that demonstrates a famous law (cooling, density, pressure).", xp: 40 },
  { t: "Maxwell device hunt", d: "Identify 5 devices in your house that wouldn't exist without Maxwell-era discoveries.", xp: 30 }
 ],
 capstone: { t: "Explain a law cold", d: "Pick one law. Write a 1-page explanation for a curious 12-year-old, with a real-world example. Test on a non-physicist.", xp: 200 },

 quiz: [
  { q: "Newton's second law says…", options: [
   { text: "Force = mass × velocity.", misconception: "Velocity ≠ acceleration." },
   { text: "Force = mass × acceleration.", correct: true },
   { text: "Energy = mass × c².", misconception: "That's Einstein, not Newton." },
   { text: "F = (1/2)mv².", misconception: "That's kinetic energy, not Newton's 2nd law." }
  ], why: "Newton's 2nd law: net force equals mass times acceleration.", testOut: true },
  { q: "What does the 2nd law of thermodynamics predict?", options: [
   { text: "Closed systems trend toward disorder unless external work is added.", correct: true },
   { text: "Energy can be created.", misconception: "1st law forbids that." },
   { text: "Heat flows cold → hot spontaneously.", misconception: "Opposite, heat flows hot → cold spontaneously." },
   { text: "Information is always lost.", misconception: "Related conceptually but not the law's statement." }
  ], why: "Entropy grows in closed systems; reversing it costs energy from outside." },
  { q: "Maxwell's equations matter to your daily life because…", options: [
   { text: "They predict the weather.", misconception: "Weather is fluid dynamics + thermodynamics, not Maxwell." },
   { text: "All electric motors, radio, wifi, GPS, light itself depend on what they describe.", correct: true },
   { text: "They explain digestion.", misconception: "Biology, not electromagnetism." },
   { text: "They drive evolution.", misconception: "Different field." }
  ], why: "Modern electronics, radio, wifi, light, all live downstream of Maxwell's unification." },
  { q: "Natural selection requires…", options: [
   { text: "Conscious intention.", misconception: "Selection is mechanical, not directed." },
   { text: "Heritable variation + differential survival + time.", correct: true },
   { text: "Mutation only.", misconception: "Mutation provides variation; selection acts on it." },
   { text: "A designer.", misconception: "Darwin's point was that you don't need one." }
  ], why: "Where variation is inherited and there's a survival gap, populations change. No designer required." },
  { q: "GPS works partly because engineers correct for…", options: [
   { text: "Newton's laws only.", misconception: "Newton gets close but not close enough for GPS precision." },
   { text: "Both special and general relativity (clock differences in motion + gravity).", correct: true },
   { text: "Quantum mechanics.", misconception: "Atomic clocks use quantum, but the GPS correction is relativistic." },
   { text: "Magnetic field reversals.", misconception: "Different topic." }
  ], why: "Satellites move fast (special relativity) and sit higher in gravity (general relativity). Both clock effects matter and are corrected for." }
 ],

 flashcards: [
  { front: "Newton's 1st law?", back: "An object at rest stays at rest, and one in motion stays in motion, unless acted on by a net force." },
  { front: "Newton's 2nd law in words?", back: "Force on an object equals its mass times its acceleration. F = ma." },
  { front: "Newton's 3rd law?", back: "For every action there is an equal and opposite reaction." },
  { front: "2nd law of thermodynamics, in plain words?", back: "Closed systems trend to disorder unless work is added. Heat flows hot → cold spontaneously." },
  { front: "What did Maxwell unify?", back: "Electricity, magnetism, and light into a single electromagnetic theory." },
  { front: "What's natural selection, minimally?", back: "Heritable variation + differential survival/reproduction + time → adaptation." },
  { front: "Special relativity headline?", back: "Time and length depend on relative motion. The speed of light is the same for all observers." },
  { front: "General relativity headline?", back: "Mass and energy bend spacetime; bent spacetime is what we feel as gravity." }
 ],
 glossary: [
  { term: "Force", def: "Push or pull that changes motion." },
  { term: "Energy", def: "Capacity to do work; conserved across transformations." },
  { term: "Entropy", def: "Measure of disorder / number of microstates consistent with a macrostate." },
  { term: "Spacetime", def: "The 4D fabric in which all events occur." },
  { term: "Electromagnetic wave", def: "Self-propagating oscillation of electric and magnetic fields, including light." },
  { term: "Natural selection", def: "Mechanism of adaptation via heritable variation + differential survival." },
  { term: "Conservation law", def: "Statement that some quantity (energy, momentum, charge) is preserved across transformations." },
  { term: "Quantum", def: "Discrete unit; the framework where particles behave probabilistically at small scales." },
  { term: "Power law", def: "Relationship where one quantity varies as a power of another, producing heavy tails." },
  { term: "Bayes' theorem", def: "Rule for updating probability of a hypothesis given new evidence." },
  { term: "Pareto principle", def: "Roughly 80 percent of effects come from 20 percent of causes." }
 ]
};

export default d;
