import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "famous_laws",
 icon: "⚛️",
 hue: "#c084fc",
 category: "World & Knowledge",
 name: "Famous Scientific Laws",
 tagline: "The rules of reality, in plain words",

 basics: "Scientific laws are short sentences that survived hundreds of years of clever people trying to break them. You don't need the maths to use them , you need the feel. Knowing F=ma in your gut changes how you push a stuck shopping trolley. Knowing entropy in your gut changes how you treat any system left alone (it gets messier, never tidier, without effort). Once you've collected maybe a dozen of these, physics and biology and chemistry stop feeling like separate school subjects and start feeling like one project , humans trying to write down how reality actually works, in the smallest possible number of words.",
 whyItMatters: [
  "You build intuition that travels across fields. The same idea (energy conserved, disorder grows, populations selected) keeps showing up.",
  "You can tell when someone's using science-sounding words to dress up a claim that isn't really science.",
  "You can read a headline about a discovery without panicking or believing it whole.",
  "Physics, biology, economics, and computation all start to feel like different chapters of the same book."
 ],
 realWorldExample: "Pour yourself a hot coffee and forget about it for an hour. The coffee cools to room temperature. The room doesn't get noticeably warmer. Heat flowed one direction, from hot to cold, by itself , and never reverses on its own. That tiny everyday observation is the second law of thermodynamics. The same law tells you why batteries always waste some energy, why your desk doesn't tidy itself, and why time only moves one direction. One idea, working everywhere, in plain sight. Once you start seeing famous laws in everyday objects, the world stops being a bunch of disconnected facts and starts being a system you can read.",

 mentors: [
  { name: "Isaac Newton", for: "the foundation of classical mechanics", work: "Principia (1687)" },
  { name: "James Clerk Maxwell", for: "unifying electricity, magnetism, and light", work: "A Treatise on Electricity and Magnetism (1873)" },
  { name: "Charles Darwin", for: "natural selection", work: "On the Origin of Species (1859)" },
  { name: "Albert Einstein", for: "special + general relativity", work: "Annus Mirabilis papers (1905); General Relativity (1915)" },
  { name: "Rudolf Clausius / Ludwig Boltzmann", for: "the second law of thermodynamics + statistical mechanics", work: "19th century papers" }
 ],

 diagrams: [
  { kind: "flow", title: "F = m·a (Newton's 2nd law)", caption: "Force on an object = mass × acceleration.", data: { steps: ["Force applied", "Mass", "Acceleration", "Motion changes"] } },
  { kind: "curve", title: "Heat flow , 2nd law of thermodynamics", caption: "Heat flows from hot to cold spontaneously. The reverse costs work.", data: { x: "Time", y: "Temperature",
   series: [
    { label: "Hot body", points: [[0, 9], [3, 7], [6, 6], [10, 5]] },
    { label: "Cold body", points: [[0, 1], [3, 3], [6, 4], [10, 5]] }
   ]
  } }
 ],

 synthesis: [
  { concept: "Entropy / messiness", linksTo: "mental_models", note: "Same intuition powers 'systems decay without effort' in management." },
  { concept: "Selection pressure", linksTo: "investing", note: "Survivorship bias is a misreading of selection , same idea, different domain." }
 ],

 subdomains: [
  { id: "mechanics", name: "Classical Mechanics" },
  { id: "thermo", name: "Thermodynamics" },
  { id: "em_relativity", name: "EM and Relativity" },
  { id: "bio_stats", name: "Biology and Statistics" },
 ],

 concepts: [
  { t: "Newton's three laws of motion",         short: "Inertia. F = m·a. Every push gets a push back.",                                                                 deep: "Three sentences that together explain almost every moving thing in your everyday life. First law: an object at rest stays at rest, and one moving stays moving, unless something pushes or pulls it. (That's why your coffee cup keeps sliding when you brake the car.) Second law: a force on something equals its mass times how fast its motion changes. (That's why pushing a shopping trolley feels easy and pushing a stuck car feels impossible , same effort, way more mass.) Third law: every push has an equal opposite push back. (That's why a rocket goes up , it pushes exhaust down, the exhaust pushes the rocket up.) The maths is high-school level. The intuition lasts forever.",                                                                                                                                                             status: "settled",  reflect: "Watch yourself for one minute. Find Newton's three laws operating right now , in how you walk, how you sit, how you breathe." },
  { t: "Conservation laws",               short: "Energy, momentum, and charge don't appear or disappear. They just change form.",                                                 deep: "If you turn on a kettle, electrical energy becomes heat. Some of that heat goes into the water; some leaks into the room. The total is conserved , none of it disappeared, even the bits that escaped your goal. This is one of the deepest patterns in physics, and once you've felt it, the question \"where did that energy go?\" becomes a useful tool everywhere. The same machinery powers chemistry (atoms rearrange, conserved), biology (calories in food turn into work, heat, and stored fat), and engineering (every system has losses you have to account for).",                                                                                                                                                                                                                     status: "settled",  reflect: "Trace one calorie of breakfast through your morning. Where did its energy go , body heat, movement, thinking, storage?" },
  { t: "The second law of thermodynamics (entropy)",   short: "Closed systems quietly drift towards disorder. To keep things tidy you have to spend energy.",                                         deep: "Leave your room alone for a month. It gets messier, never tidier. Spill a drink , it spreads, never re-gathers into the cup. Put a hot pan on a cold counter , heat flows out of the pan, never back in. The second law of thermodynamics is the universe's quiet preference for disorder, called entropy. The only way to create order locally , a clean room, a working battery, a living cell , is to spend energy. And even then, the total disorder of everything still goes up; you've just moved it around. This law is also why time only goes one direction. Eggs unscramble in films, never in life.",                                                                                                                                                                                                       status: "settled",  reflect: "What \"order\" in your life is actually you, paying entropy's bill daily? Notice how much effort that takes." },
  { t: "Maxwell's equations (the intuition, not the maths)", short: "Electricity and magnetism are two faces of the same thing. Light is one of its waves.",                                           deep: "In the 1860s James Clerk Maxwell wrote down four equations that pulled together a huge amount of disparate experiment into a single picture. The maths is heavy; the punchline is gorgeous. Electricity and magnetism aren't two separate forces , they're two sides of the same coin. A changing electric field makes a magnetic field, and vice versa. And light? Light is exactly an electromagnetic wave, oscillating its way through space at one specific speed. Radio, wifi, MRI scanners, electric motors, your phone screen, the energy hitting your skin on a sunny day , all live downstream of those four equations. One unification, an entire modern world.",                                                                                                                                                                         status: "settled",  reflect: "Pick one electrical device near you. Which Maxwell-era discovery is it leaning on?" },
  { t: "Special relativity (the everyday intuition)",   short: "Time and length depend on how fast you're moving. The speed of light is the same for everyone.",                                        deep: "At the speeds you walk around at, the effects are far too small to notice. At fractions of the speed of light , astronaut speeds, satellite speeds , clocks tick more slowly for fast-moving observers, and lengths get shorter in the direction of motion. This sounds like science fiction. It isn't. GPS satellites have to correct for these effects every day or your phone's location would drift by kilometres within hours. The engineering, not just the philosophy, depends on Einstein being right. \"Now\" isn't the same instant for two observers moving differently , it's a local fact, not a universal one.",                                                                                                                                                                                                 status: "settled",  reflect: "Two friends pass each other at high speed and check their watches. What does it mean that they don't agree on what time it is \"now\"?" },
  { t: "General relativity (the everyday intuition)",   short: "Mass bends spacetime. What we feel as gravity is just things following the curves.",                                               deep: "Newton thought gravity was a force pulling apples down. Einstein replaced the picture: mass and energy bend the fabric of spacetime itself, and things naturally follow the curves. The Earth doesn't \"pull\" the apple. The Earth bends spacetime, and the apple takes the straightest path through bent spacetime, which to us looks like falling. This sounds like poetry until you remember that GPS satellites also have to correct for general relativity (clocks run slightly faster up at orbital altitude where gravity is weaker). The Universe is genuinely stranger than Newton imagined , and engineering still has to do the maths.",                                                                                                                                                                                     status: "settled",  reflect: "If gravity is curved spacetime, what's actually pulling you to the chair right now?" },
  { t: "Natural selection (Darwin)",           short: "Variation + inheritance + a survival gap + time = adaptation. No designer needed.",                                               deep: "The simplest powerful idea biology has. If members of a population vary, and that variation is heritable, and not all of them survive and reproduce equally, then the next generation will, on average, look slightly more like the survivors. Repeat over millions of years and you get adaptation. Repeat in fast-moving systems and you get rapid change , antibiotic resistance, viral evolution, surprisingly fast shifts in animals under environmental pressure. The same logic shows up wherever something is being selected on what survives , products in a market, ideas in culture, algorithms in machine learning. No conscious designer required; selection alone is the engine.",                                                                                                                                                                 status: "settled",  reflect: "Where in your life is a 'population' (ideas, products, habits) currently being selected on by what survives this week?" },
  { t: "Statistical vs deterministic thinking",     short: "Many natural \"laws\" aren't absolute. They're statements about what almost always happens, across many trials.",                                 deep: "Newton's mechanics feels deterministic at our human scale , give me the position and momentum and I'll predict where things go. Underneath, quantum mechanics is fundamentally probabilistic; thermodynamics is statistical (one molecule could in principle do anything; trillions of molecules together behave like the second law says they should). A lot of \"laws\" you'll encounter , including the famous ones , are strong statistical regularities, true on average across many particles or many trials, not iron rules about any single case. Knowing which is which is part of becoming literate in how science actually works.",                                                                                                                                                                                       status: "settled",  reflect: "Pick a \"law\" you treat as absolute. Is it really, or is it actually a very strong statistical regularity over many cases?" }
 ],

 counterView: "Pop-science framings sometimes leak from physics into places they don't belong , Schrödinger's cat as a self-help metaphor, entropy as a productivity hack, quantum as anything mystical. Take the famous laws seriously inside their domains; resist the temptation to use them as analogies that 'prove' claims in unrelated fields. Newton works great for cannonballs, lousy for atoms; relativity works great for high speeds, doesn't replace classical mechanics in your car. The fields where 'famous laws' map cleanly onto everyday life are narrower than the way they get used in books.",

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
  { rank: "Novice",    focus: "Get the cast of characters",             do: "Watch Veritasium, PBS Spacetime, and Sixty Symbols on YouTube. Read a friendly book like Six Easy Pieces. Pick 10 famous laws and learn what each one says , in words, not equations.",                                                                                 milestone: "You can name 10 laws and the person behind each, in plain English.",                                               time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Build everyday intuition for them",           do: "Each week, find five everyday objects or situations and figure out which famous law is at work. Coffee cooling = second law. Pushing a heavy door = Newton's second. Phone receiving a call = Maxwell. You're rewiring your senses to see the laws.",                                                     milestone: "The laws feel like daily experience rather than exam material.",                                                 time: "~1 month" },
  { rank: "Practitioner", focus: "Go one discipline deeper",               do: "Pick the one that grabbed you , mechanics, thermodynamics, electromagnetism, evolution , and read a real book in it. Not a popular summary; an actual textbook or undergraduate-level treatment.",                                                                             milestone: "You can answer questions about your chosen area that go beyond the headlines you started with.",                                 time: "~2-3 months" },
  { rank: "Specialist",  focus: "Do the maths for at least one law; run a kitchen experiment", do: "Work through F = ma with real numbers. Do basic thermodynamics calculations. Try a safe at-home experiment that demonstrates a famous law (cooling rates, simple electromagnetism with a battery and wire).",                                                                         milestone: "You can derive and verify, not just recite.",                                                           time: "~6 months" },
  { rank: "Expert",    focus: "See the same idea across fields",            do: "Read where physics, biology, and computation overlap , information theory, statistical mechanics, evolutionary dynamics. The same patterns keep showing up under different names.",                                                                                     milestone: "You spot the same underlying idea in three different places without prompting.",                                         time: "~1 year+" },
  { rank: "Master",    focus: "Explain it cleanly to non-experts",           do: "Teach. Write essays. Make videos. The constraint of explaining to someone outside the field is what forces you to fully understand it.",                                                                                                         milestone: "People walk away from your explanations with intuition, not just memorised words.",                                        time: "~2 years+" },
  { rank: "Grandmaster", focus: "Contribute to the frontier or to public understanding", do: "Original research, or science writing that genuinely changes how others teach and learn the same laws.",                                                                                                                         milestone: "Other people borrow your framings without realising they came from you.",                                             time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Veritasium (YouTube)",            what: "Best general-audience physics + science explainers.",                   url: "https://www.youtube.com/@veritasium",                         verify: false, lastVerified: "2026-06" },
   { name: "PBS Spacetime (YouTube)",          what: "Modern physics, intuition-first.",                             url: "https://www.youtube.com/@pbsspacetime",                       verify: false, lastVerified: "2026-06" },
   { name: "Feynman Lectures (free online)",       what: "The original masterclass, free.",                             url: "https://www.feynmanlectures.caltech.edu/",                      verify: false, lastVerified: "2026-06" },
   { name: "Kurzgesagt (YouTube)",            what: "Beautifully animated science explainers.",                         url: "https://www.youtube.com/@kurzgesagt",                         verify: false, lastVerified: "2026-06" },
   { name: "MinutePhysics (YouTube)",          what: "Short, single-concept physics explainers.",                        url: "https://www.youtube.com/@minutephysics",                       verify: false, lastVerified: "2026-06" },
   { name: "Sixty Symbols (YouTube)",          what: "Physics with actual academic physicists.",                         url: "https://www.youtube.com/@sixtysymbols",                       verify: false, lastVerified: "2026-06" },
   { name: "Khan Academy , Physics",           what: "Free structured curriculum from absolute basics.",                     url: "https://www.khanacademy.org/science/physics",                    verify: false, lastVerified: "2026-06" },
   { name: "MIT OpenCourseWare , Physics",        what: "Real MIT physics courses, free.",                             url: "https://ocw.mit.edu/courses/physics/",                        verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia , Scientific laws named after people", what: "Index of famous named laws.",                             url: "https://en.wikipedia.org/wiki/List_of_scientific_laws_named_after_people",     verify: false, lastVerified: "2026-06" },
   { name: "Quanta Magazine",               what: "High-quality science journalism, free.",                          url: "https://www.quantamagazine.org/",                          verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Six Easy Pieces , Richard Feynman",     what: "Selected chapters from the Lectures. Excellent first read.",                url: "https://en.wikipedia.org/wiki/Six_Easy_Pieces",                   price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Order of Time , Carlo Rovelli",     what: "Beautifully written physics-as-philosophy.",                        url: "https://en.wikipedia.org/wiki/The_Order_of_Time",                  price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "On the Origin of Species , Darwin",     what: "Still the clearest exposition of the idea.",                        url: "https://en.wikipedia.org/wiki/On_the_Origin_of_Species",              price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "A Brief History of Time , Stephen Hawking", what: "The popular-physics classic.",                               url: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time",               price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Selfish Gene , Richard Dawkins",     what: "Evolution from the gene's-eye view.",                            url: "https://en.wikipedia.org/wiki/The_Selfish_Gene",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Greatest Show on Earth , Dawkins",    what: "The evidence for evolution, marshalled clearly.",                     url: "",                                         price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "QED , Richard Feynman",            what: "Quantum electrodynamics for non-mathematicians.",                     url: "https://en.wikipedia.org/wiki/QED:_The_Strange_Theory_of_Light_and_Matter",     price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Seven Brief Lessons on Physics , Rovelli",  what: "Short, lyrical introduction to modern physics.",                      url: "",                                         price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Beginning of Infinity , David Deutsch", what: "Philosophy of science + explanation.",                           url: "",                                         price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "What is Real? , Adam Becker",        what: "Quantum-foundations history, accessibly written.",                     url: "",                                         price: "verify", verify: true, lastVerified: "2026-06" }
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
   { text: "Heat flows cold → hot spontaneously.", misconception: "Opposite , heat flows hot → cold spontaneously." },
   { text: "Information is always lost.", misconception: "Related conceptually but not the law's statement." }
  ], why: "Entropy grows in closed systems; reversing it costs energy from outside." },
  { q: "Maxwell's equations matter to your daily life because…", options: [
   { text: "They predict the weather.", misconception: "Weather is fluid dynamics + thermodynamics, not Maxwell." },
   { text: "All electric motors, radio, wifi, GPS, light itself depend on what they describe.", correct: true },
   { text: "They explain digestion.", misconception: "Biology, not electromagnetism." },
   { text: "They drive evolution.", misconception: "Different field." }
  ], why: "Modern electronics, radio, wifi, light , all live downstream of Maxwell's unification." },
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
  { term: "Electromagnetic wave", def: "Self-propagating oscillation of electric and magnetic fields , including light." },
  { term: "Natural selection", def: "Mechanism of adaptation via heritable variation + differential survival." },
  { term: "Conservation law", def: "Statement that some quantity (energy, momentum, charge) is preserved across transformations." },
  { term: "Quantum", def: "Discrete unit; the framework where particles behave probabilistically at small scales." }
 ]
};

export default d;
