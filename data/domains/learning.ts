import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "learning",
 icon: "📚",
 hue: "#34d399",
 category: "Mind & Self",
 name: "Learning How to Learn",
 tagline: "The meta-skill that compounds across every other domain",

 basics: "Almost everything school taught you about studying is wrong, not by accident, but because the wrong things feel productive. Re-reading a chapter, highlighting half the page, watching the lecture twice, they all feel like learning while you do them. Then a week later you've forgotten everything. The methods that actually work feel worse in the moment: closing the book and trying to remember, taking a test before you feel ready, mixing topics together, struggling. The uncomfortable feeling is the work happening. Once you get this, learning anything new gets a lot cheaper for the rest of your life.",
 whyItMatters: [
  "Every other domain on this app gets multiplied. Better study methods are leverage.",
  "Stop wasting your evenings on highlighters and feeling busy without remembering anything.",
  "Pass the exam, the interview, the certification, with less time and less suffering.",
  "Adult life is now mostly self-teaching. Whoever's good at it has a massive unfair advantage."
 ],
 realWorldExample: "Two students study the same chapter for the same 30 minutes. Riya re-reads it twice, highlighting things. Arjun reads it once, closes the book, and tries to write down everything he remembers, gets some right, gets some wrong, checks. They take the same test a week later. Arjun crushes it. He spent the same time and remembered far more, because the act of trying to pull the information out of his head is what stamped it in. Riya felt more confident at the time. Arjun did more learning. That gap, feeling like learning versus actually learning, is the entire game.",

 mentors: [
  { name: "Hermann Ebbinghaus", for: "the forgetting curve + spacing", work: "Memory (1885)" },
  { name: "Robert Bjork", for: "'desirable difficulties', struggle as a feature", work: "Decades of memory research" },
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
  { concept: "Generation effect", linksTo: "psychology", note: "Why your concept opens with a prediction first, the struggle is the point." }
 ],

 subdomains: [
  { id: "mechanics", name: "Mechanics of Memory" },
  { id: "practice", name: "Practice Methods" },
  { id: "transfer", name: "Transfer and Application" },
  { id: "habits", name: "Habits and Sleep" },
 ],

 concepts: [
  { t: "Retrieval beats re-reading. Always.",          short: "Closing the book and trying to remember crushes re-reading the same page twice.",                                                 deep: "Re-reading feels productive. Highlighting feels productive. You sit down for an hour and your brain says \"good work.\" The problem: you're recognising the material, not remembering it. And recognition fades fast. The brutally simple alternative, close the book, look away, and try to write down what you just read, is uncomfortable because you discover how little you actually retained. That discomfort is the work happening. The act of pulling information out is what builds the path back to it next time. Self-test early, self-test often, get the wrong answer cheerfully and move on.",                                                                                                     status: "settled",  reflect: "When did you last actually close your laptop, look away, and try to write down what you'd just learned? If never, try it tonight." },
  { t: "Spaced repetition",                   short: "Review just as you're about to forget, and the next forgetting is a lot slower.",                                                 deep: "Hermann Ebbinghaus, working alone in the 1880s with nonsense syllables, showed that forgetting is sharp at first and then slows down. Each well-timed review flattens the next forgetting curve. Tools like Anki, and the FSRS algorithm this app uses, automate the scheduling for you. The cards you nearly remember resurface; the easy ones wait days, weeks, months. It feels harder than just re-reading. That's why it works. You can install 5 minutes of this into your day and learn more durably than someone studying for an hour the wrong way.",                                                                                                                                 status: "settled",  reflect: "What's one topic in your life that would compound the most if you put it on a daily 5-minute spaced-review habit?" },
  { t: "Desirable difficulty (Robert Bjork)",          short: "If your practice feels easy, your practice probably isn't working.",                                                        deep: "This one is genuinely uncomfortable to accept. The methods that feel best while you do them, fluent re-reading, highlighting, watching a lecture twice, produce the least transfer. The methods that feel awkward and slow, testing yourself before you're ready, mixing in topics that don't quite fit, struggling, produce the most. Bjork called the good kind of awkwardness \"desirable difficulty.\" If you finish a study session feeling smooth and confident, that's a flag, you probably spent the time on something that didn't stretch you.",                                                                                                                                 status: "settled",  reflect: "Which of your current study techniques feel comfortable? Look at those first, they're often where the leak is." },
  { t: "Interleaving",                     short: "Mix related topics within a session instead of drilling one for an hour.",                                                     deep: "Imagine learning three guitar chords. The intuitive way: practice the first chord for 20 minutes, then the second, then the third. The better way: rotate between all three for the whole hour, even though it feels worse. Same with maths problems, vocab, anything where you'll later have to choose between similar-looking options. The brain spends some of the practice time learning to tell them apart, not just learning each one. Interleaving feels slower and worse in the moment. It's reliably more useful when you actually need the skill in the wild.",                                                                                                                         status: "settled",  reflect: "Where in your current learning are you 'blocking' practice when you could be interleaving?" },
  { t: "The generation effect",                 short: "Trying to produce the answer, even badly, beats reading the answer.",                                                       deep: "Two students read the same sentence: \"Honey doesn't spoil because of its low water content.\" Student A then closes the book and tries to write the explanation in their own words. Student B reads the sentence again. A week later, Student A remembers more, even though Student B technically read it more times. Producing, and especially producing badly, then correcting, beats receiving. Even a wrong guess primes you to remember the right answer better. This is why every concept in this app asks you to predict before it reveals the explanation. The small struggle is the whole point.",                                                                                                             status: "settled",  reflect: "When you read a non-fiction book, do you predict what the next paragraph will say before reading it? Try it. It changes the experience." },
  { t: "Deliberate practice (Ericsson, with caveats)",     short: "Focused, feedback-rich practice at the edge of your current ability. Not just hours.",                                                deep: "Anders Ericsson studied world-class performers and found a pattern: they don't just put in hours, they put in hours of practice that's targeted at a specific weakness, designed by a coach or by themselves, and immediately followed by feedback. Most people stop practising specific skills the moment they get \"good enough\", and then plateau forever. The popular \"10,000-hour rule\" you've heard of is Malcolm Gladwell's compression of Ericsson's work, and Ericsson himself disagreed with how it was popularised. Hours matter, but the kind of hours matter more. \"Just do it for 10 years\" doesn't make you elite if the 10 years are unfocused.",                                                                              status: "debated",  reflect: "Pick a specific weakness in your craft. When did you last drill it on purpose, with feedback?" },
  { t: "Sleep and memory consolidation",            short: "Skip sleep after studying and you basically erase a chunk of what you just learned.",                                               deep: "Your brain doesn't just go offline at night. It replays the day's learning during deep sleep, strengthening the patterns and moving them from short-term to long-term storage. This is why pulling an all-nighter before an exam is one of the worst study strategies humans invented, you're learning more material while shutting down the system that would have stored it. The opposite is also true: a short nap after a study session can measurably boost retention. Sleep is part of learning, not its enemy.",                                                                                                                                                   status: "settled",  reflect: "Compare your sleep in a week where you remembered a lot to a week where you didn't. Does the pattern match?" },
  { t: "Transfer",                       short: "Knowing it in one context doesn't mean you can use it in another. That bridge has to be built deliberately.",                                    deep: "You can ace the chemistry exam and still not understand what's happening when you bake bread. You can read every leadership book and still fumble your first team review. \"Knowing in theory\" and \"doing in practice\" live on opposite sides of a gap most learners ignore. The bridge is deliberate application, solving real problems with what you've learned, in varied contexts, until it's automatic. The fastest cheap test of transfer is the Feynman technique: try to explain the topic in plain words to a smart 12-year-old. Where you stumble, that's where you actually don't get it.",                                                                                                               status: "framework", reflect: "Pick something you 'know.' Could you explain it cold, no notes, to a smart 12-year-old? If not, transfer is weak, and that's the next move." }
 ],

 counterView: "Gladwell's '10,000-hour rule' isn't quite what Ericsson said. Ericsson argued for deliberate practice, most people who do something for 10,000 hours don't get world-class because most of those hours aren't deliberate. Worse, in some domains (where individual differences matter a lot, like running) practice explains far less of the variance than the popular story suggests. Treat any learning technique as a hypothesis: does it actually move your performance on a real test, not just feel productive?",

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
  "Test yourself, and let the wrong answers happen.",
  "Sleep is part of studying. Skipping it costs retention."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Stop the methods that don't work",         do: "Watch Barbara Oakley's free course (one weekend). For one week, replace re-reading and highlighting with closed-book recall. You'll feel worse and remember more.",                                                                    milestone: "You can name the four study moves that have real evidence behind them.",                                    time: "~1 week" },
  { rank: "Apprentice",  focus: "Install the daily review loop",            do: "Pick one real subject. Make 30 Anki / FSRS flashcards by the end of week one. Review them daily for 30 days. The amount of work per day is tiny. The compounding is enormous.",                                                              milestone: "Five minutes a day of spaced review is now as automatic as brushing your teeth.",                               time: "~1 month" },
  { rank: "Practitioner", focus: "Interleave, apply, and self-explain",         do: "Set up interleaved practice across two or three related topics in your current learning. Use the Feynman technique once a week, write a one-page plain explanation of something you're studying.",                                                     milestone: "You can use what you've studied in the wild, not just describe it in a quiz.",                                 time: "~2-3 months" },
  { rank: "Specialist",  focus: "Deliberate practice on your actual weaknesses",    do: "Pick one specific weakness in your craft. Drill it deliberately, with feedback, for a weekly session. Most people skip this step forever and stay stuck.",                                                                         milestone: "You're improving in the exact place you'd been plateaued for years.",                                     time: "~6 months" },
  { rank: "Expert",    focus: "Teach what you learn",                 do: "Teaching forces transfer. Start writing publicly, or coach a junior. Notice which methods produced retention for you and which didn't, your method becomes personalised and measurable.",                                                          milestone: "Your study system is something you can describe in writing, and it produces results you can point to.",                    time: "~1 year+" },
  { rank: "Master",    focus: "Help others build their systems",           do: "Coach others through their own learning. Watch what works for different people. The variation will sharpen your own method.",                                                                                       milestone: "The people you teach actually retain, measurably, not just nominally.",                                    time: "~2 years+" },
  { rank: "Grandmaster", focus: "Teach the meta-skill at scale",             do: "Write a book, a course, an essay series. Help thousands of people learn how to learn better.",                                                                                                       milestone: "Other teachers cite your approach without knowing it came from you.",                                     time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Learning How to Learn, Oakley (Coursera, free audit)", what: "The most popular meta-learning course on the planet.",                 url: "https://www.coursera.org/learn/learning-how-to-learn",               verify: false, lastVerified: "2026-06" },
   { name: "Anki (open-source spaced repetition)",         what: "The OG SR flashcard app. Free desktop, paid iOS. Supports FSRS.",            url: "https://apps.ankiweb.net/",                             verify: false, lastVerified: "2026-06" },
   { name: "Andy Matuschak, notes & essays",            what: "Modern, dense, original writing on knowledge work + memory.",              url: "https://andymatuschak.org/",                             verify: false, lastVerified: "2026-06" },
   { name: "Augmenting Long-term Memory, Michael Nielsen",     what: "Foundational essay on SR + active recall, freely available.",              url: "https://augmentingcognition.com/ltm.html",                      verify: false, lastVerified: "2026-06" },
   { name: "Ness Labs, Anne-Laure Le Cunff",            what: "Mindful productivity + learning research, distilled.",                 url: "https://nesslabs.com/",                               verify: false, lastVerified: "2026-06" },
   { name: "Robert Bjork, Bjork Learning & Forgetting Lab",    what: "UCLA lab page + selected papers on desirable difficulty.",               url: "https://bjorklab.psych.ucla.edu/",                          verify: false, lastVerified: "2026-06" },
   { name: "Khan Academy, Learn How to Learn",           what: "Free short course adaptation for younger learners + beginners.",             url: "https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities", verify: true, lastVerified: "2026-06" },
   { name: "Wikipedia, Spaced repetition",             what: "Solid neutral overview w/ research citations.",                     url: "https://en.wikipedia.org/wiki/Spaced_repetition",                   verify: false, lastVerified: "2026-06" },
   { name: "RemNote (free tier)",                  what: "Note-taking app with SR baked in.",                            url: "https://www.remnote.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "Make It Stick, Roediger et al. (library)",       what: "Evidence-based study, accessibly written.",                       url: "https://makeitstick.net/",                              verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Peak, Anders Ericsson",                what: "Deliberate practice from the source.",                          url: "https://en.wikipedia.org/wiki/Peak:_Secrets_from_the_New_Science_of_Expertise",   price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Ultralearning, Scott Young",              what: "Project-based intensive learning playbook.",                       url: "https://www.scotthyoung.com/ultralearning/",                     price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "A Mind for Numbers, Barbara Oakley",         what: "The book that grew into the course. Especially good for STEM learners.",         url: "https://barbaraoakley.com/books/a-mind-for-numbers/",                 price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Make It Stick, Brown, Roediger, McDaniel",      what: "Authoritative + readable; the evidence-based canon.",                  url: "https://makeitstick.net/",                              price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Range, David Epstein",                 what: "Generalists vs specialists; transfer across domains.",                  url: "https://davidepstein.com/the-range/",                         price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "How We Learn, Benedict Carey",            what: "Friendly tour of cognitive-science learning research.",                 url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Talent Code, Daniel Coyle",            what: "Deliberate practice from a different angle.",                      url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Mastery, Robert Greene",               what: "Long-arc skill-building, biography-rich.",                        url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Art of Learning, Josh Waitzkin",         what: "Chess + tai-chi champion on how mastery actually happens.",               url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Building a Second Brain, Tiago Forte",         what: "Personal knowledge management for the digital age.",                   url: "https://www.buildingasecondbrain.com/",                        price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Anki the next thing", d: "Pick something you're studying. Make 20 cards by tonight. Review them daily for 2 weeks.", xp: 50 },
  { t: "Feynman one topic", d: "Explain something you 'know' on paper to an imaginary 12-year-old. Find the holes.", xp: 40 },
  { t: "Closed-book recall", d: "After your next learning session, write everything you remember without looking. Compare.", xp: 30 },
  { t: "Interleave a session", d: "In your next study block, switch topics every 15 minutes instead of blocking. Note retention.", xp: 30 },
  { t: "Sleep on it", d: "For one week, prioritise 7+ hours after evening study. Note retention vs nights you didn't.", xp: 40 }
 ],
 capstone: { t: "Ultralearning project", d: "Pick a real skill (a language, a tool, a topic). Build a 6-week plan using retrieval, spacing, interleaving, and feedback. Run it. Write what worked and what didn't.", xp: 200 },

 quiz: [
  { q: "Which technique builds long-term memory most reliably?", options: [
   { text: "Highlighting and re-reading.", misconception: "Feels productive; doesn't move long-term retention much." },
   { text: "Retrieval practice, closing the book and testing yourself.", correct: true },
   { text: "Listening to lectures at 2× speed.", misconception: "Throughput ≠ retention; passive exposure doesn't fix the production problem." },
   { text: "Reading the same chapter on three different days.", misconception: "Re-reading is re-reading; you need recall, not exposure." }
  ], why: "Retrieval (testing) outperforms re-reading by a wide margin in evidence-based studies.", testOut: true },
  { q: "Why does spaced repetition work?", options: [
   { text: "You forget faster, which makes you re-learn.", misconception: "Backwards, you forget more slowly with spacing, not faster." },
   { text: "Reviewing just before forgetting strengthens recall harder than easy reviews.", correct: true },
   { text: "It's the same as cramming, just slower.", misconception: "It's the opposite of cramming, cramming gives short-term recall and fast forgetting." },
   { text: "Because it feels good.", misconception: "Often feels worse than re-reading, which is part of why it works." }
  ], why: "Difficulty + retrieval at the right moment is where strong memory traces are built." },
  { q: "The 10,000-hour rule is best characterised as…", options: [
   { text: "A precise threshold for world-class expertise.", misconception: "Misreading of Ericsson, there's no clean threshold, and the type of practice matters more than the hours." },
   { text: "A popular oversimplification of Ericsson's deliberate-practice research.", correct: true },
   { text: "False entirely.", misconception: "Practice matters a lot; just not on this clean schedule, and not all practice is equal." },
   { text: "About IQ.", misconception: "Different topic entirely." }
  ], why: "Ericsson argued for deliberate practice, most 10,000-hour totals are not deliberate, and effects vary by domain." },
  { q: "Interleaving means…", options: [
   { text: "Mixing topics in a single study session rather than blocking by topic.", correct: true },
   { text: "Studying with a friend.", misconception: "Social study can help but isn't interleaving." },
   { text: "Highlighting in two colours.", misconception: "Highlighting in any colour is still recognition, not recall." },
   { text: "Using two textbooks at once.", misconception: "That can be interleaving, but the principle is about practice mix, not material count." }
  ], why: "Mixing related topics forces discrimination and improves transfer, even though it feels worse in the moment." },
  { q: "What's a quick transfer test?", options: [
   { text: "Retake the same multiple-choice quiz.", misconception: "Same surface form, measures recognition, not transfer." },
   { text: "Explain the topic in your own words to a non-expert (Feynman technique).", correct: true },
   { text: "Read the chapter again.", misconception: "Doesn't test, just re-exposes." },
   { text: "Make a Sankey diagram.", misconception: "Diagrams help, but not as the test of transfer." }
  ], why: "Explaining simply forces you to map concepts to your own words, exposes holes." }
 ],

 flashcards: [
  { front: "Retrieval vs re-reading?", back: "Retrieval (closed-book recall + self-testing) outperforms re-reading for long-term memory by a wide margin." },
  { front: "Why does spacing work?", back: "Reviewing just before forgetting flattens the forgetting curve, difficulty during recall builds stronger traces." },
  { front: "What is desirable difficulty?", back: "Bjork's idea: practice that feels harder transfers better. Easy fluency is misleading." },
  { front: "Interleaving in one line?", back: "Mix related topics in a session rather than blocking one topic at a time. Slower-feeling, stickier." },
  { front: "Generation effect?", back: "Producing (or even guessing) the answer before seeing it boosts encoding." },
  { front: "10,000-hour rule, honestly?", back: "Pop misreading of Ericsson. Deliberate practice matters; the clean threshold doesn't." },
  { front: "Role of sleep in learning?", back: "Memory consolidates during sleep (esp. deep stages). Skipping sleep after study kills retention." },
  { front: "Feynman technique?", back: "Explain a topic in your own words to a non-expert. Where you stumble = where you don't really know it." }
 ],
 glossary: [
  { term: "Retrieval practice", def: "Pulling info out of memory to strengthen it (testing > re-reading)." },
  { term: "Spaced repetition", def: "Reviews at expanding intervals, Ebbinghaus + Anki + FSRS." },
  { term: "Desirable difficulty", def: "Bjork: harder-during-practice = stronger-in-retention." },
  { term: "Interleaving", def: "Mixing related topics within a practice session." },
  { term: "Deliberate practice", def: "Focused, feedback-rich practice at edge of ability." },
  { term: "Transfer", def: "Using what you learned in a new context." },
  { term: "Feynman technique", def: "Explain it simply; the gaps reveal what you don't really know." },
  { term: "Consolidation", def: "The brain's process of stabilising memories, often during sleep." }
 ]
};

export default d;
