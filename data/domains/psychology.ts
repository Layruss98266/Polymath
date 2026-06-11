import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "psychology",
  icon: "🧠",
  hue: "#a78bfa",
  category: "Mind & Self",
  name: "Human Psychology",
  tagline: "Why people do what they do",

  basics: "Psychology is the systematic study of mind and behaviour. Almost everything you think is a deliberate choice is mostly a fast, automatic process that you noticed late. The interesting question isn't whether you have biases — you do — it's which ones, when, and how to compensate.",
  whyItMatters: [
    "Understand your own decisions before judging others'.",
    "Spot manipulation tactics — in ads, news, conversations.",
    "Build relationships, teams, and habits that don't fight human nature.",
    "Avoid expensive mistakes that come from confidently misreading other people."
  ],
  realWorldExample: "When supermarkets play slow music, shoppers walk slower and spend more — without noticing. The decision feels fully conscious; the cause isn't. That gap between felt and actual control is most of psychology in one example.",

  mentors: [
    { name: "Daniel Kahneman", for: "fast vs slow thinking, prospect theory", work: "Thinking, Fast and Slow (2011)" },
    { name: "Robert Cialdini", for: "the 6 principles of influence", work: "Influence (1984)" },
    { name: "Carol Dweck", for: "fixed vs growth mindset", work: "Mindset (2006)" },
    { name: "Solomon Asch", for: "conformity (the line experiments)", work: "Asch conformity experiments (1951)" },
    { name: "Robert Sapolsky", for: "biology of behaviour", work: "Behave (2017)" }
  ],

  diagrams: [
    { kind: "flow", title: "System 1 vs System 2 (Kahneman)", caption: "Two modes of thinking, constantly handing off.", data: { steps: ["Input", "System 1 (fast, automatic)", "Anomaly?", "System 2 (slow, effortful)", "Decision"] } },
    { kind: "cycle", title: "Habit loop (Duhigg)", caption: "Cue → routine → reward, learned and reinforced.", data: { nodes: ["Cue", "Craving", "Routine", "Reward"] } }
  ],

  synthesis: [
    { concept: "Social proof", linksTo: "marketing", note: "The same machinery a marketer uses on you is the one you've used on yourself a thousand times today." },
    { concept: "Anchoring", linksTo: "personal_finance", note: "Why the first price you see decides what feels expensive." }
  ],

  concepts: [
    { t: "System 1 vs System 2", short: "Fast automatic thinking + slow effortful thinking — most of what you 'decide' is System 1.", deep: "Kahneman's frame. System 1 runs the show — it's pattern-matching, gut, intuition. System 2 only steps in when prompted or when System 1 hits something weird. Most cognitive biases live in System 1 getting away with answers.", status: "framework", reflect: "Name three decisions you made today that you thought were 'considered.' How much was actually System 1 in a suit?" },
    { t: "Confirmation bias", short: "We notice and remember things that fit what we already believe.", deep: "Active when reading news, evaluating people, picking stocks. Counter by deliberately seeking the strongest version of the opposing case (steelmanning), not just listening to it.", status: "settled", reflect: "Pick one strong opinion of yours. What evidence would change it? If 'nothing,' that's a flag." },
    { t: "Anchoring", short: "First number you see warps every subsequent judgment.", deep: "Even random numbers anchor estimates. Salespeople know this — that's why 'MSRP' exists. Defence: come in with your own anchor before exposure.", status: "settled", reflect: "Recall a recent negotiation/purchase. What was the first number? How did it shape your range?" },
    { t: "Loss aversion", short: "Losses hurt about twice as much as equivalent gains feel good.", deep: "Prospect theory (Kahneman & Tversky). Drives status-quo bias, sunk-cost fallacy, and lots of bad investor behaviour. Reframe choices in terms of opportunity cost, not loss.", status: "settled", reflect: "Where in your life are you avoiding a small loss at the cost of a much bigger gain?" },
    { t: "Cialdini's 6 levers of influence", short: "Reciprocity, commitment, social proof, authority, liking, scarcity.", deep: "Six robust patterns marketers and persuaders use. None are evil per se — same tools build trust as run cons. Knowing the names lets you notice when a lever is being pulled.", status: "framework", reflect: "Watch one ad with the six in mind. Name every lever used." },
    { t: "Fundamental attribution error", short: "We blame others' character and our own circumstances.", deep: "If a stranger cuts in line: they're rude. If you cut in line: you were in a rush. Asymmetric attribution corrodes relationships and team dynamics. Counter by extending the situational read both ways.", status: "settled", reflect: "Replay a recent conflict — what's the most generous situational read of the other person?" },
    { t: "Conformity (Asch)", short: "Even on obvious facts, we'll go along with the group to avoid standing out.", deep: "Solomon Asch's line-length experiments showed ~75% of people conformed at least once to an obviously wrong group answer. Conformity scales massively online. Dissent gets easier when even one other person dissents.", status: "settled", reflect: "Have you ever said something you didn't believe just to fit in? What did that cost you (or whoever was listening)?" },
    { t: "Growth vs fixed mindset", short: "Believing skill is built changes how you respond to failure.", deep: "Dweck: kids praised for effort kept trying harder problems; kids praised for being 'smart' avoided risk. The effect's been partially replicated and partially walked back — the core idea (process praise > trait praise) is solid even where the strong claims have softened.", status: "debated", reflect: "How do you praise the people you mentor (or your own kids, or yourself)? Trait or process?" }
  ],

  counterView: "Much of pop psychology rests on small, hard-to-replicate studies. The 'replication crisis' (2010s) showed a lot of famous results — priming, power posing, ego depletion, parts of the marshmallow test — don't reliably reproduce. Treat any single fascinating study as a hypothesis, not a fact, and steelman the case that human behaviour is far more situational and culturally bound than the canonical American-undergraduate experiments suggest. Also note: Mehrabian's '7-38-55' rule is wildly misquoted — its real scope was inconsistent affect-communication, not all communication.",

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
    "Praise process, not trait — even when talking to yourself."
  ],

  roadmap: [
    { rank: "Novice", focus: "Get the vocabulary", do: "Read Thinking, Fast and Slow + Cialdini's Influence.", milestone: "You can name 5 cognitive biases and 3 influence levers.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Spot in the wild", do: "Keep a 'bias log' — record one bias you observed in yourself daily for 30 days.", milestone: "You catch biases live, not just in retrospect.", time: "~1 month" },
    { rank: "Practitioner", focus: "Use ethically", do: "Apply social proof / framing / commitment to a real project — and notice when you're using them on yourself.", milestone: "You can deploy influence without crossing into manipulation.", time: "~2–3 months" },
    { rank: "Specialist", focus: "Go deeper into one tradition", do: "Pick CBT, social psychology, behavioural econ, or biology of behaviour. Read primary literature.", milestone: "You know what's settled vs. contested in your chosen branch.", time: "~6 months" },
    { rank: "Expert", focus: "Replication-aware reading", do: "Read with the replication crisis in mind. Distinguish strong from shaky claims.", milestone: "You can predict roughly which studies will replicate.", time: "~1 year+" },
    { rank: "Master", focus: "Apply across domains", do: "Integrate with marketing, negotiation, leadership, design.", milestone: "Others ask you for the model that fits.", time: "~2 years+" },
    { rank: "Grandmaster", focus: "Contribute / teach", do: "Original research, teaching, or popular writing that respects nuance.", milestone: "Your framings are used in the field.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Sapolsky — Human Behavioral Biology (Stanford)",   what: "Full course on YouTube. Biology + psychology, beautifully taught.",      url: "https://www.youtube.com/playlist?list=PL150326949691B199",                       verify: false, lastVerified: "2026-06" },
      { name: "Center for Open Science — replication",            what: "Read about what didn't replicate before quoting it.",                    url: "https://www.cos.io/",                                                            verify: false, lastVerified: "2026-06" },
      { name: "You Are Not So Smart — David McRaney",             what: "Free podcast on biases, accessibly explained.",                          url: "https://youarenotsosmart.com/",                                                  verify: false, lastVerified: "2026-06" },
      { name: "Daniel Kahneman — Nobel lecture (free PDF)",      what: "Direct from the source: prospect theory + heuristics.",                  url: "https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/lecture/",     verify: false, lastVerified: "2026-06" },
      { name: "PsyArXiv — preprint archive",                     what: "Read primary preprints before they reach pop articles.",                 url: "https://psyarxiv.com/",                                                          verify: false, lastVerified: "2026-06" },
      { name: "Wikipedia — List of cognitive biases",            what: "Comprehensive index with citations to source studies.",                  url: "https://en.wikipedia.org/wiki/List_of_cognitive_biases",                          verify: false, lastVerified: "2026-06" },
      { name: "Robert Sapolsky — public lectures (YouTube)",     what: "More accessible single-talk format.",                                    url: "https://www.youtube.com/results?search_query=Robert+Sapolsky",                    verify: true, lastVerified: "2026-06" },
      { name: "Big Think — psychology channel",                  what: "Short, expert-driven explainers.",                                       url: "https://bigthink.com/psychology/",                                               verify: false, lastVerified: "2026-06" },
      { name: "BPS Research Digest",                             what: "British Psychological Society blog summarising new psychology research.", url: "https://digest.bps.org.uk/",                                                     verify: false, lastVerified: "2026-06" },
      { name: "Thinking, Fast and Slow — Kahneman (library)",     what: "The best general-audience book on biases.",                              url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",                          verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Influence — Cialdini",                            what: "The six levers in detail.",                                              url: "https://www.influenceatwork.com/principles-of-persuasion/",                      price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Pre-Suasion — Cialdini",                          what: "What happens before the ask. Companion to Influence.",                   url: "https://www.influenceatwork.com/",                                               price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Behave — Robert Sapolsky",                        what: "Why we do what we do, from synapses to societies.",                      url: "https://www.penguinrandomhouse.com/books/314463/behave-by-robert-m-sapolsky/",   price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Mindset — Carol Dweck",                           what: "Growth vs fixed. Read the replication caveats alongside.",                url: "https://en.wikipedia.org/wiki/Mindset_(book)",                                   price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Righteous Mind — Jonathan Haidt",             what: "Moral psychology of why decent people disagree.",                        url: "https://righteousmind.com/",                                                     price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Predictably Irrational — Dan Ariely",             what: "Behavioural-economics intro w/ caveats post-replication.",                 url: "https://danariely.com/books/predictably-irrational/",                            price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Stumbling on Happiness — Daniel Gilbert",         what: "Why we mispredict what'll make us happy.",                                url: "",                                                                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Happiness Hypothesis — Jonathan Haidt",       what: "Ancient wisdom vs modern psychology.",                                   url: "https://righteousmind.com/",                                                     price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Thinking in Bets — Annie Duke",                   what: "Decision-making under uncertainty, poker-trained.",                      url: "",                                                                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Noise — Kahneman, Sibony, Sunstein",              what: "Why expert judgment varies wildly, and what to do about it.",            url: "",                                                                                price: "verify", verify: true, lastVerified: "2026-06" }
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
      { text: "Conscious deliberation that runs every decision.", misconception: "That's System 2 — and it runs far less than we think." },
      { text: "Fast, automatic, mostly invisible — runs most decisions.", correct: true },
      { text: "Only emotions; logic lives elsewhere.", misconception: "System 1 includes pattern-matching and intuition, not just emotion." },
      { text: "A part of the brain you can turn off.", misconception: "It's always on — even when System 2 is engaged." }
    ], why: "System 1 = fast/automatic; System 2 = slow/effortful. Most decisions are System 1, with System 2 stepping in for anomalies.", testOut: true },
    { q: "Loss aversion means…", options: [
      { text: "We don't notice losses.", misconception: "Opposite — we feel them ~2× more than equivalent gains." },
      { text: "Losses feel about twice as bad as equivalent gains feel good.", correct: true },
      { text: "We refuse to invest because everything is a loss.", misconception: "It explains why people hold losing investments too long, not why they avoid all investing." },
      { text: "It applies only to money.", misconception: "It applies to status, relationships, time, and identity — anywhere we can lose." }
    ], why: "Prospect theory: pain of loss is roughly 2× pleasure of equivalent gain." },
    { q: "The Mehrabian '7-38-55' rule is best characterised as…", options: [
      { text: "A universally correct breakdown of communication.", misconception: "Misquoted — Mehrabian's data was narrow (inconsistent emotion words + tone + face), not all communication." },
      { text: "Wildly misquoted — its real scope was much narrower.", correct: true },
      { text: "Discredited entirely.", misconception: "Original work was sound; popular use isn't." },
      { text: "About IQ vs EQ.", misconception: "Different topic entirely." }
    ], why: "Mehrabian's numbers describe a specific lab setup about inconsistent affect, not the breakdown of all human communication." },
    { q: "After the replication crisis, the most defensible stance is…", options: [
      { text: "Trust no psychology study.", misconception: "Too strong — many findings did replicate." },
      { text: "Some classic findings didn't replicate; weight single dramatic studies less.", correct: true },
      { text: "Replication doesn't matter.", misconception: "It's the difference between knowledge and storytelling." },
      { text: "Only neuroscience is reliable.", misconception: "Neuroscience has had its own replication issues." }
    ], why: "A bunch of headline-grabbing studies didn't reproduce. Don't ditch the field — just stop quoting single small studies as settled fact." },
    { q: "The fundamental attribution error predicts that you'll likely…", options: [
      { text: "Blame your own bad behaviour on character.", misconception: "Opposite — we blame our own behaviour on circumstance." },
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
    { term: "Attribution", def: "How we explain causes of behaviour — to character or to circumstance." },
    { term: "Anchoring", def: "First-number effect on subsequent estimates." }
  ]
};

export default d;
