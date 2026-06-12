import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "famous_laws",
  icon: "⚛️",
  hue: "#c084fc",
  category: "World & Knowledge",
  name: "Famous Scientific Laws",
  tagline: "The rules of reality, in plain words",

  basics: "Scientific laws are short sentences that survived hundreds of years of clever people trying to break them. You don't need the maths to use them — you need the feel. Knowing F=ma in your gut changes how you push a stuck shopping trolley. Knowing entropy in your gut changes how you treat any system left alone (it gets messier, never tidier, without effort). Once you've collected maybe a dozen of these, physics and biology and chemistry stop feeling like separate school subjects and start feeling like one project — humans trying to write down how reality actually works, in the smallest possible number of words.",
  whyItMatters: [
    "You build intuition that travels across fields. The same idea (energy conserved, disorder grows, populations selected) keeps showing up.",
    "You can tell when someone's using science-sounding words to dress up a claim that isn't really science.",
    "You can read a headline about a discovery without panicking or believing it whole.",
    "Physics, biology, economics, and computation all start to feel like different chapters of the same book."
  ],
  realWorldExample: "Pour yourself a hot coffee and forget about it for an hour. The coffee cools to room temperature. The room doesn't get noticeably warmer. Heat flowed one direction, from hot to cold, by itself — and never reverses on its own. That tiny everyday observation is the second law of thermodynamics. The same law tells you why batteries always waste some energy, why your desk doesn't tidy itself, and why time only moves one direction. One idea, working everywhere, in plain sight. Once you start seeing famous laws in everyday objects, the world stops being a bunch of disconnected facts and starts being a system you can read.",

  mentors: [
    { name: "Isaac Newton", for: "the foundation of classical mechanics", work: "Principia (1687)" },
    { name: "James Clerk Maxwell", for: "unifying electricity, magnetism, and light", work: "A Treatise on Electricity and Magnetism (1873)" },
    { name: "Charles Darwin", for: "natural selection", work: "On the Origin of Species (1859)" },
    { name: "Albert Einstein", for: "special + general relativity", work: "Annus Mirabilis papers (1905); General Relativity (1915)" },
    { name: "Rudolf Clausius / Ludwig Boltzmann", for: "the second law of thermodynamics + statistical mechanics", work: "19th century papers" }
  ],

  diagrams: [
    { kind: "flow", title: "F = m·a (Newton's 2nd law)", caption: "Force on an object = mass × acceleration.", data: { steps: ["Force applied", "Mass", "Acceleration", "Motion changes"] } },
    { kind: "curve", title: "Heat flow — 2nd law of thermodynamics", caption: "Heat flows from hot to cold spontaneously. The reverse costs work.", data: { x: "Time", y: "Temperature",
      series: [
        { label: "Hot body", points: [[0, 9], [3, 7], [6, 6], [10, 5]] },
        { label: "Cold body", points: [[0, 1], [3, 3], [6, 4], [10, 5]] }
      ]
    } }
  ],

  synthesis: [
    { concept: "Entropy / messiness", linksTo: "mental_models", note: "Same intuition powers 'systems decay without effort' in management." },
    { concept: "Selection pressure", linksTo: "investing", note: "Survivorship bias is a misreading of selection — same idea, different domain." }
  ],

  concepts: [
    { t: "Newton's laws of motion", short: "Inertia. F = m·a. Action = reaction.", deep: "1st: an object stays at rest or in uniform motion unless acted on. 2nd: force = mass × acceleration. 3rd: every action has an equal and opposite reaction. Together, they're a model for almost all everyday motion.", status: "settled", reflect: "Where do you experience all three in one minute of daily life?" },
    { t: "Conservation laws", short: "Energy, momentum, and charge are conserved — they don't appear or disappear, they transform.", deep: "Conservation is one of physics' deepest patterns. 'Where did that energy go?' is always a useful question. Same machinery powers chemistry, biology, and engineering thinking.", status: "settled", reflect: "Trace one calorie of breakfast through your morning. Where did its energy go?" },
    { t: "The 2nd law of thermodynamics (entropy)", short: "Closed systems trend toward disorder without external work.", deep: "Heat flows hot → cold. Disorder grows on average. To create order locally (a clean room, a living cell), energy must be spent — and overall disorder still increases. This is the arrow of time at a deep level.", status: "settled", reflect: "What 'order' in your life is you, paying entropy's bill, daily?" },
    { t: "Maxwell's equations (lite)", short: "Electricity and magnetism are two faces of one thing — and light is one of its waves.", deep: "Four equations that together unified electricity, magnetism, and optics. You don't need the math to know the punchline: a changing electric field makes a magnetic one and vice versa, and light is an electromagnetic wave. Modern radio, wifi, electric motors all live downstream of this.", status: "settled", reflect: "Pick one device near you. Which Maxwell-era discovery did it depend on?" },
    { t: "Special relativity (intuition)", short: "Time and length depend on relative motion. The speed of light is the same to everyone.", deep: "At everyday speeds, the effects are too small to notice. At fractions of the speed of light, clocks run slower for fast-moving observers and lengths contract. GPS satellites correct for these effects — the engineering, not just the philosophy, depends on it.", status: "settled", reflect: "What does it mean that 'now' isn't the same for two observers in different motion?" },
    { t: "General relativity (intuition)", short: "Mass and energy bend spacetime; bent spacetime is gravity.", deep: "Not 'apples are pulled by a force' but 'apples follow straight lines in curved spacetime.' Predicts everything from light bending around the sun to black holes. GPS depends on this too.", status: "settled", reflect: "If gravity is curvature, what's pulling you to the chair right now?" },
    { t: "Natural selection (Darwin)", short: "Heritable variation + differential survival + time → adaptation.", deep: "The simplest powerful idea: where there's variation, inheritance, and a survival/reproduction gap, populations change. Drives all of biology — and shows up in algorithms, business strategy, and cultural evolution.", status: "settled", reflect: "Where in your life is a 'population' (ideas, products, habits) being selected on by what survives the week?" },
    { t: "Statistical-vs-deterministic thinking", short: "Many natural laws are statistical, not absolute.", deep: "Newton looks deterministic at our scale. Underneath, quantum mechanics is fundamentally probabilistic; thermodynamics is statistical. Many 'laws' are statements about what happens on average given lots of particles or trials.", status: "settled", reflect: "Pick a 'law' you treat as absolute. Is it really, or is it a strong statistical regularity?" }
  ],

  counterView: "Pop-science framings sometimes leak from physics into places they don't belong — Schrödinger's cat as a self-help metaphor, entropy as a productivity hack, quantum as anything mystical. Take the famous laws seriously inside their domains; resist the temptation to use them as analogies that 'prove' claims in unrelated fields. Newton works great for cannonballs, lousy for atoms; relativity works great for high speeds, doesn't replace classical mechanics in your car. The fields where 'famous laws' map cleanly onto everyday life are narrower than the way they get used in books.",

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
    { rank: "Novice", focus: "Get the cast", do: "Watch Veritasium, Sixty Symbols, PBS Spacetime. Pick 10 famous laws and learn the words.", milestone: "You can name 10 laws + who's behind them.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Build intuition", do: "Apply Newton + entropy intuitions to 5 everyday objects per week.", milestone: "Laws feel like daily experience, not exam material.", time: "~1 month" },
    { rank: "Practitioner", focus: "One discipline deeper", do: "Pick one (mechanics / thermodynamics / electromagnetism / biology) and read a real book.", milestone: "You can answer questions outside the headline.", time: "~2–3 months" },
    { rank: "Specialist", focus: "Math + lab", do: "Do the math for one law (F=ma, simple thermodynamics). Try a kitchen-science experiment.", milestone: "You can derive + verify, not just recite.", time: "~6 months" },
    { rank: "Expert", focus: "Cross-discipline", do: "Read where physics + biology + computation meet (information theory, statistical mechanics).", milestone: "You see the same idea in 3 places.", time: "~1 year+" },
    { rank: "Master", focus: "Teach", do: "Write or teach the laws clearly to non-experts.", milestone: "People walk away with intuition, not just words.", time: "~2 years+" },
    { rank: "Grandmaster", focus: "Frontier or original explainers", do: "Contribute to science writing or research that adds clarity.", milestone: "Others borrow your framing.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Veritasium (YouTube)",                       what: "Best general-audience physics + science explainers.",                                     url: "https://www.youtube.com/@veritasium",                                                 verify: false, lastVerified: "2026-06" },
      { name: "PBS Spacetime (YouTube)",                    what: "Modern physics, intuition-first.",                                                         url: "https://www.youtube.com/@pbsspacetime",                                              verify: false, lastVerified: "2026-06" },
      { name: "Feynman Lectures (free online)",             what: "The original masterclass, free.",                                                          url: "https://www.feynmanlectures.caltech.edu/",                                            verify: false, lastVerified: "2026-06" },
      { name: "Kurzgesagt (YouTube)",                       what: "Beautifully animated science explainers.",                                                  url: "https://www.youtube.com/@kurzgesagt",                                                 verify: false, lastVerified: "2026-06" },
      { name: "MinutePhysics (YouTube)",                    what: "Short, single-concept physics explainers.",                                                url: "https://www.youtube.com/@minutephysics",                                              verify: false, lastVerified: "2026-06" },
      { name: "Sixty Symbols (YouTube)",                    what: "Physics with actual academic physicists.",                                                 url: "https://www.youtube.com/@sixtysymbols",                                              verify: false, lastVerified: "2026-06" },
      { name: "Khan Academy — Physics",                     what: "Free structured curriculum from absolute basics.",                                         url: "https://www.khanacademy.org/science/physics",                                       verify: false, lastVerified: "2026-06" },
      { name: "MIT OpenCourseWare — Physics",               what: "Real MIT physics courses, free.",                                                          url: "https://ocw.mit.edu/courses/physics/",                                               verify: false, lastVerified: "2026-06" },
      { name: "Wikipedia — Scientific laws named after people", what: "Index of famous named laws.",                                                          url: "https://en.wikipedia.org/wiki/List_of_scientific_laws_named_after_people",          verify: false, lastVerified: "2026-06" },
      { name: "Quanta Magazine",                             what: "High-quality science journalism, free.",                                                    url: "https://www.quantamagazine.org/",                                                    verify: false, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Six Easy Pieces — Richard Feynman",          what: "Selected chapters from the Lectures. Excellent first read.",                               url: "https://en.wikipedia.org/wiki/Six_Easy_Pieces",                                     price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Order of Time — Carlo Rovelli",          what: "Beautifully written physics-as-philosophy.",                                                url: "https://en.wikipedia.org/wiki/The_Order_of_Time",                                   price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "On the Origin of Species — Darwin",          what: "Still the clearest exposition of the idea.",                                               url: "https://en.wikipedia.org/wiki/On_the_Origin_of_Species",                            price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "A Brief History of Time — Stephen Hawking",  what: "The popular-physics classic.",                                                              url: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time",                              price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "The Selfish Gene — Richard Dawkins",         what: "Evolution from the gene's-eye view.",                                                       url: "https://en.wikipedia.org/wiki/The_Selfish_Gene",                                    price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "The Greatest Show on Earth — Dawkins",       what: "The evidence for evolution, marshalled clearly.",                                          url: "",                                                                                  price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "QED — Richard Feynman",                       what: "Quantum electrodynamics for non-mathematicians.",                                          url: "https://en.wikipedia.org/wiki/QED:_The_Strange_Theory_of_Light_and_Matter",         price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Seven Brief Lessons on Physics — Rovelli",    what: "Short, lyrical introduction to modern physics.",                                           url: "",                                                                                  price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Beginning of Infinity — David Deutsch",  what: "Philosophy of science + explanation.",                                                     url: "",                                                                                  price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "What is Real? — Adam Becker",                what: "Quantum-foundations history, accessibly written.",                                         url: "",                                                                                  price: "verify", verify: true, lastVerified: "2026-06" }
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
      { text: "Heat flows cold → hot spontaneously.", misconception: "Opposite — heat flows hot → cold spontaneously." },
      { text: "Information is always lost.", misconception: "Related conceptually but not the law's statement." }
    ], why: "Entropy grows in closed systems; reversing it costs energy from outside." },
    { q: "Maxwell's equations matter to your daily life because…", options: [
      { text: "They predict the weather.", misconception: "Weather is fluid dynamics + thermodynamics, not Maxwell." },
      { text: "All electric motors, radio, wifi, GPS, light itself depend on what they describe.", correct: true },
      { text: "They explain digestion.", misconception: "Biology, not electromagnetism." },
      { text: "They drive evolution.", misconception: "Different field." }
    ], why: "Modern electronics, radio, wifi, light — all live downstream of Maxwell's unification." },
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
    { term: "Electromagnetic wave", def: "Self-propagating oscillation of electric and magnetic fields — including light." },
    { term: "Natural selection", def: "Mechanism of adaptation via heritable variation + differential survival." },
    { term: "Conservation law", def: "Statement that some quantity (energy, momentum, charge) is preserved across transformations." },
    { term: "Quantum", def: "Discrete unit; the framework where particles behave probabilistically at small scales." }
  ]
};

export default d;
