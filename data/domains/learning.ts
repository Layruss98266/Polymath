import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "learning",
  icon: "📚",
  hue: "#34d399",
  category: "Mind & Self",
  name: "Learning How to Learn",
  tagline: "The meta-skill that compounds across every other domain",

  basics: "Most of what you remember from school you remember badly — because it was taught by re-reading and highlighting, which feel productive and don't work. The actually-effective methods are uncomfortable: retrieval, spacing, interleaving, and active processing. This is the meta-skill that makes every other domain cheaper.",
  whyItMatters: [
    "Learn anything faster — every domain on this app gets multiplied.",
    "Stop wasting time on study techniques that feel good and don't stick.",
    "Pass exams, interviews and certifications with less suffering.",
    "Become a credible self-teacher in adulthood — most of working life now."
  ],
  realWorldExample: "Two students study the same chapter for the same time. One re-reads and highlights. The other closes the book and tries to write down everything she remembers, then checks. A week later, the second student remembers far more. Same content, very different result — because retrieval, not exposure, is what builds memory.",

  mentors: [
    { name: "Hermann Ebbinghaus", for: "the forgetting curve + spacing", work: "Memory (1885)" },
    { name: "Robert Bjork", for: "'desirable difficulties' — struggle as a feature", work: "Decades of memory research" },
    { name: "Roediger & McDaniel", for: "retrieval practice + evidence-based study", work: "Make It Stick (2014)" },
    { name: "Barbara Oakley", for: "the most popular meta-learning course on the planet", work: "Learning How to Learn (Coursera)" },
    { name: "Anders Ericsson", for: "deliberate practice", work: "Peak (2016)" }
  ],

  diagrams: [
    { kind: "curve", title: "Forgetting curve + spacing", caption: "Each review flattens the next decay.", data: {
      x: "Time", y: "Memory strength",
      series: [
        { label: "No review", points: [[0, 10], [1, 5], [3, 2], [6, 1], [10, 0.5]] },
        { label: "Spaced reviews", points: [[0, 10], [1, 8], [3, 9], [6, 9.5], [10, 9.8]] }
      ]
    } },
    { kind: "cycle", title: "Retrieval loop", caption: "The cycle that actually builds memory.", data: { nodes: ["Encounter", "Try to recall", "Get feedback", "Space + interleave"] } }
  ],

  synthesis: [
    { concept: "Retrieval practice", linksTo: "ai_ml", note: "The cycle the FSRS scheduler runs is exactly the retrieval loop." },
    { concept: "Generation effect", linksTo: "psychology", note: "Why your concept opens with a prediction first — the struggle is the point." }
  ],

  concepts: [
    { t: "Retrieval > re-reading", short: "Closing the book and trying to recall beats re-reading every time.", deep: "The act of pulling information out of your head is what strengthens memory. Re-reading and highlighting feel productive (recognition is easy) but barely move long-term retention. Test yourself early and often.", status: "settled", reflect: "When did you last close your laptop, look away, and try to write what you'd just learned?" },
    { t: "Spaced repetition", short: "Practising at expanding intervals beats massed practice.", deep: "Ebbinghaus showed each review flattens the next forgetting curve. Tools like Anki / FSRS schedule cards just before you'd forget. The discomfort of nearly-forgetting is when the strongest learning happens.", status: "settled", reflect: "What domain would you most benefit from putting on a daily 5-minute spaced-review habit?" },
    { t: "Desirable difficulty (Bjork)", short: "If it feels easy, it isn't sticking.", deep: "Counter-intuitively, fluent practice gives the illusion of mastery without the substance. Vary contexts, interleave topics, test yourself — even though that feels worse during practice, it transfers better.", status: "settled", reflect: "Which of your current study methods feel comfortable? That's a flag." },
    { t: "Interleaving", short: "Mixing topics outperforms blocking by topic.", deep: "Practising A, B, C in rotation beats A-A-A then B-B-B for transfer, especially when topics share surface features that need discrimination. Slower-feeling, more durable.", status: "settled", reflect: "Where are you 'blocking' practice when interleaving would help (e.g. drilling one chord shape for an hour)?" },
    { t: "Generation effect", short: "Producing the answer (or guessing) before seeing it sticks better.", deep: "Even a wrong guess primes encoding of the correct answer. That's why this app asks you to predict before revealing concepts — and why open-book studying often fails: no production.", status: "settled", reflect: "When you read a book, do you predict the next paragraph's claim before reading it? Try it." },
    { t: "Deliberate practice", short: "Targeted, feedback-rich practice at the edge of your ability.", deep: "Ericsson's frame: deliberate practice is uncomfortable, specific, feedback-rich and goal-directed. 'Just doing it for years' (10k hours myth) doesn't make experts — focused practice does. The 10,000-hour rule, as Malcolm Gladwell popularised it, misrepresents Ericsson's research.", status: "debated", reflect: "What's a specific weakness in your craft? When did you last drill it on purpose?" },
    { t: "Sleep + consolidation", short: "Memory consolidates during sleep — especially the deep stages.", deep: "Skipping sleep after studying hammers retention. Naps after study help. The brain replays sequences during slow-wave sleep — it's an active process, not 'rest.'", status: "settled", reflect: "How does your sleep look in your highest-learning weeks vs your lowest?" },
    { t: "Transfer", short: "What you learn in one context often doesn't move to another — by default.", deep: "Knowing 'in theory' rarely matches doing 'in practice.' Explicit application — solving real problems in varied contexts — is what bridges learning to use. The Feynman technique (explain it in your own words to a non-expert) is a cheap transfer test.", status: "framework", reflect: "Pick something you 'know.' Could you explain it cold to a smart 12-year-old? If not, transfer is weak." }
  ],

  counterView: "Gladwell's '10,000-hour rule' isn't quite what Ericsson said. Ericsson argued for deliberate practice — most people who do something for 10,000 hours don't get world-class because most of those hours aren't deliberate. Worse, in some domains (where individual differences matter a lot, like running) practice explains far less of the variance than the popular story suggests. Treat any learning technique as a hypothesis: does it actually move your performance on a real test, not just feel productive?",

  capabilities: [
    "Run a 5-minute daily spaced-review session that actually moves retention.",
    "Replace re-reading with self-testing (free recall + quiz cards).",
    "Use the Feynman technique on a topic you 'know' and find the holes.",
    "Design a deliberate-practice block (specific, feedback-rich, edge-of-ability).",
    "Interleave related topics in one study session instead of blocking."
  ],
  cheatsheet: [
    "Retrieval > re-reading. Always.",
    "Space reviews; nearly-forgetting is when it sticks.",
    "If it feels easy, it isn't transferring. Add difficulty.",
    "Interleave topics; don't drill one in isolation.",
    "Test yourself — and let the wrong answers happen.",
    "Sleep is part of studying. Skipping it costs retention."
  ],

  roadmap: [
    { rank: "Novice", focus: "Stop the bad habits", do: "Watch Barbara Oakley's free course. Replace highlighting with self-testing for one week.", milestone: "You can name 4 evidence-based study moves.", time: "~1 week" },
    { rank: "Apprentice", focus: "Build the daily loop", do: "Use Anki / FSRS on one real subject for 30 days.", milestone: "5-minute daily review is a habit.", time: "~1 month" },
    { rank: "Practitioner", focus: "Interleave + apply", do: "Set up interleaved practice across 3 related topics. Add Feynman-technique writing.", milestone: "Transfer is measurable — you can use what you study.", time: "~2–3 months" },
    { rank: "Specialist", focus: "Deliberate practice", do: "Pick a specific weakness, get feedback, drill it weekly.", milestone: "You're improving where you stalled.", time: "~6 months" },
    { rank: "Expert", focus: "Teach + meta-study", do: "Teach what you learn; track retention vs methods.", milestone: "Your method is personalised + measurable.", time: "~1 year+" },
    { rank: "Master", focus: "Coach others", do: "Help others build their study systems.", milestone: "People you teach actually retain.", time: "~2 years+" },
    { rank: "Grandmaster", focus: "Contribute / write", do: "Publish or teach the meta-skill at scale.", milestone: "Others cite your approach.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Learning How to Learn — Barbara Oakley (Coursera, free audit)", what: "The most popular meta-learning course in the world. Free if you don't need the certificate.", url: "", verify: true, lastVerified: "2026-06" },
      { name: "Anki (open source SR flashcards)", what: "The OG spaced-repetition app. Free desktop, paid iOS. FSRS available.", url: "", verify: true, lastVerified: "2026-06" },
      { name: "Make It Stick — Brown, Roediger, McDaniel (library)", what: "Evidence-based study, accessibly written.", url: "", verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Peak — Anders Ericsson", what: "Deliberate practice from the source.", url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Ultralearning — Scott Young", what: "Project-based intensive learning playbook.", url: "", price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Anki the next thing", d: "Pick something you're studying. Make 20 cards by tonight. Review them daily for 2 weeks.", xp: 50 },
    { t: "Feynman one topic", d: "Explain something you 'know' on paper to an imaginary 12-year-old. Find the holes.", xp: 40 },
    { t: "Closed-book recall", d: "After your next learning session, write everything you remember without looking. Compare.", xp: 30 },
    { t: "Interleave a session", d: "In your next study block, switch topics every 15 minutes instead of blocking. Note retention.", xp: 30 },
    { t: "Sleep on it", d: "For one week, prioritise 7+ hours after evening study. Note retention vs nights you didn't." , xp: 40 }
  ],
  capstone: { t: "Ultralearning project", d: "Pick a real skill (a language, a tool, a topic). Build a 6-week plan using retrieval, spacing, interleaving, and feedback. Run it. Write what worked and what didn't.", xp: 200 },

  quiz: [
    { q: "Which technique builds long-term memory most reliably?", options: [
      { text: "Highlighting and re-reading.", misconception: "Feels productive; doesn't move long-term retention much." },
      { text: "Retrieval practice — closing the book and testing yourself.", correct: true },
      { text: "Listening to lectures at 2× speed.", misconception: "Throughput ≠ retention; passive exposure doesn't fix the production problem." },
      { text: "Reading the same chapter on three different days.", misconception: "Re-reading is re-reading; you need recall, not exposure." }
    ], why: "Retrieval (testing) outperforms re-reading by a wide margin in evidence-based studies.", testOut: true },
    { q: "Why does spaced repetition work?", options: [
      { text: "You forget faster, which makes you re-learn.", misconception: "Backwards — you forget more slowly with spacing, not faster." },
      { text: "Reviewing just before forgetting strengthens recall harder than easy reviews.", correct: true },
      { text: "It's the same as cramming, just slower.", misconception: "It's the opposite of cramming — cramming gives short-term recall and fast forgetting." },
      { text: "Because it feels good.", misconception: "Often feels worse than re-reading, which is part of why it works." }
    ], why: "Difficulty + retrieval at the right moment is where strong memory traces are built." },
    { q: "The 10,000-hour rule is best characterised as…", options: [
      { text: "A precise threshold for world-class expertise.", misconception: "Misreading of Ericsson — there's no clean threshold, and the type of practice matters more than the hours." },
      { text: "A popular oversimplification of Ericsson's deliberate-practice research.", correct: true },
      { text: "False entirely.", misconception: "Practice matters a lot; just not on this clean schedule, and not all practice is equal." },
      { text: "About IQ.", misconception: "Different topic entirely." }
    ], why: "Ericsson argued for deliberate practice — most 10,000-hour totals are not deliberate, and effects vary by domain." },
    { q: "Interleaving means…", options: [
      { text: "Mixing topics in a single study session rather than blocking by topic.", correct: true },
      { text: "Studying with a friend.", misconception: "Social study can help but isn't interleaving." },
      { text: "Highlighting in two colours.", misconception: "Highlighting in any colour is still recognition, not recall." },
      { text: "Using two textbooks at once.", misconception: "That can be interleaving, but the principle is about practice mix, not material count." }
    ], why: "Mixing related topics forces discrimination and improves transfer, even though it feels worse in the moment." },
    { q: "What's a quick transfer test?", options: [
      { text: "Retake the same multiple-choice quiz.", misconception: "Same surface form — measures recognition, not transfer." },
      { text: "Explain the topic in your own words to a non-expert (Feynman technique).", correct: true },
      { text: "Read the chapter again.", misconception: "Doesn't test, just re-exposes." },
      { text: "Make a Sankey diagram.", misconception: "Diagrams help, but not as the test of transfer." }
    ], why: "Explaining simply forces you to map concepts to your own words — exposes holes." }
  ],

  flashcards: [
    { front: "Retrieval vs re-reading?", back: "Retrieval (closed-book recall + self-testing) outperforms re-reading for long-term memory by a wide margin." },
    { front: "Why does spacing work?", back: "Reviewing just before forgetting flattens the forgetting curve — difficulty during recall builds stronger traces." },
    { front: "What is desirable difficulty?", back: "Bjork's idea: practice that feels harder transfers better. Easy fluency is misleading." },
    { front: "Interleaving in one line?", back: "Mix related topics in a session rather than blocking one topic at a time. Slower-feeling, stickier." },
    { front: "Generation effect?", back: "Producing (or even guessing) the answer before seeing it boosts encoding." },
    { front: "10,000-hour rule, honestly?", back: "Pop misreading of Ericsson. Deliberate practice matters; the clean threshold doesn't." },
    { front: "Role of sleep in learning?", back: "Memory consolidates during sleep (esp. deep stages). Skipping sleep after study kills retention." },
    { front: "Feynman technique?", back: "Explain a topic in your own words to a non-expert. Where you stumble = where you don't really know it." }
  ],
  glossary: [
    { term: "Retrieval practice", def: "Pulling info out of memory to strengthen it (testing > re-reading)." },
    { term: "Spaced repetition", def: "Reviews at expanding intervals — Ebbinghaus + Anki + FSRS." },
    { term: "Desirable difficulty", def: "Bjork: harder-during-practice = stronger-in-retention." },
    { term: "Interleaving", def: "Mixing related topics within a practice session." },
    { term: "Deliberate practice", def: "Focused, feedback-rich practice at edge of ability." },
    { term: "Transfer", def: "Using what you learned in a new context." },
    { term: "Feynman technique", def: "Explain it simply; the gaps reveal what you don't really know." },
    { term: "Consolidation", def: "The brain's process of stabilising memories, often during sleep." }
  ]
};

export default d;
