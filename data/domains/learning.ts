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
  { t: "Transfer",                       short: "Knowing it in one context doesn't mean you can use it in another. That bridge has to be built deliberately.",                                    deep: "You can ace the chemistry exam and still not understand what's happening when you bake bread. You can read every leadership book and still fumble your first team review. \"Knowing in theory\" and \"doing in practice\" live on opposite sides of a gap most learners ignore. The bridge is deliberate application, solving real problems with what you've learned, in varied contexts, until it's automatic. The fastest cheap test of transfer is the Feynman technique: try to explain the topic in plain words to a smart 12-year-old. Where you stumble, that's where you actually don't get it.",                                                                                                               status: "framework", reflect: "Pick something you 'know.' Could you explain it cold, no notes, to a smart 12-year-old? If not, transfer is weak, and that's the next move." },
  {
   t: "The Feynman technique",
   subdomain: "transfer",
   definition: "A four-step method for testing and deepening understanding by explaining a concept in plain language as if teaching a beginner.",
   short: "If you can't explain it simply, you don't really understand it. The simpler the words, the clearer the gaps.",
   deep: "Richard Feynman, the physicist, used to say that the test of really understanding something was whether you could explain it in plain words to a freshman. The method that grew out of that is brutal in its honesty. Pick a topic. Write down what you know about it as if you were teaching someone with zero background. Notice every place you reach for jargon, hand-wave, or feel a fog roll in. Those are the gaps. Go back to the source material, fill the gap, and try again. Three rounds of this on a topic you thought you knew will expose more holes than a dozen re-reads. It works because jargon hides confusion from yourself. Plain words don't let you.",
   generic: "Imagine your little cousin asks you how WiFi works. You try to explain. The moment you say \"electromagnetic waves\" and they look confused, you realise you don't actually know either, you just memorised the phrase. That moment of stuck is where the real learning starts.",
   expert: "Attributed to Richard Feynman though never written up by him directly, popularised through Mortimer Adler-style teaching and Scott Young's ultralearning. Mechanistically combines the generation effect, self-explanation, and metacognitive monitoring. Empirically supported by studies on self-explanation prompts (Chi et al., 1994) and the protege effect in teaching-to-learn paradigms.",
   status: "framework",
   reflect: "Pick the most recent topic you told yourself you understood. Can you explain it cold, in plain words, in under three minutes? Try it out loud. Where do you trail off?",
   conceptQuiz: [
    {
     q: "The Feynman technique is most useful for…",
     options: [
      { text: "Finding the specific places where your understanding is shallow.", correct: true },
      { text: "Memorising lots of facts quickly.", misconception: "Different goal. Feynman is about depth and gap-finding, not raw memorisation. Spaced repetition is the better tool for that." },
      { text: "Sounding impressive at parties.", misconception: "Almost the opposite, the technique strips jargon out, not in." },
      { text: "Speeding up your reading.", misconception: "It's a slow-down technique, on purpose." }
     ],
     why: "Forcing plain language exposes the spots where you were leaning on jargon to hide confusion from yourself."
    },
    {
     q: "Which sign means your Feynman attempt has exposed a real gap?",
     options: [
      { text: "You feel the need to reach for technical terms a beginner wouldn't know.", correct: true },
      { text: "Your explanation is too short.", misconception: "Short isn't bad, sometimes it's clarity. Length isn't the signal." },
      { text: "You use an analogy.", misconception: "Analogies are a sign of depth, not a gap. Good Feynman explanations lean heavily on them." },
      { text: "You explain it without looking at notes.", misconception: "That's a sign of strong recall, not a gap." }
     ],
     why: "Jargon is where understanding hides. When you can't say it plainly, you're borrowing someone else's words instead of having your own."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Pick and try",      d: "Pick one topic you 'know' and write a one-page explanation as if to a 12-year-old.", xp: 10 },
    { level: "easy",     t: "Find three gaps",    d: "Mark every spot in your explanation where you used jargon or hand-waved. Go back to the source for each.", xp: 20 },
    { level: "advanced", t: "Teach it for real",   d: "Explain the topic out loud to an actual non-expert. Note where their questions stop you cold. Rewrite.", xp: 40 }
   ],
   diagram: { kind: "flow", title: "Feynman loop", caption: "Loop until the explanation needs no jargon.", data: { steps: ["Pick a topic", "Explain to a 12-year-old", "Spot jargon / hand-waves", "Re-study the gaps", "Simplify and analogise"] } }
  },
  {
   t: "Active recall",
   subdomain: "practice",
   definition: "A study method in which the learner actively retrieves information from memory rather than passively reviewing it.",
   short: "Stop staring at the page. Cover it up and try to say what was on it. That's where memory is built.",
   deep: "Open the book, close the book, look away, and try to say or write what was on the page you just read. That uncomfortable moment of grasping for the words is doing more for your memory than another twenty minutes of re-reading ever will. Active recall is the engine under spaced repetition, retrieval practice, the generation effect, and almost every evidence-based study technique. It works because pulling something out of your head, even imperfectly, strengthens the path back to it, while reading the same passage again just gives your brain another easy ride past the material. The catch is it feels worse, slower, less productive than re-reading, which is exactly why most students don't do it.",
   generic: "Think of memory like a path through a forest. Re-reading is like flying over the path in a helicopter, you can see it, but you're not walking it. Active recall is walking the path yourself, stumbling, sometimes getting lost, then finding it. The next time, the path is clearer because you actually used it.",
   expert: "Active recall is the underlying mechanism of the testing effect (Roediger & Karpicke, 2006), retrieval practice, and the generation effect. Implementations range from free recall after a study block, to flashcards, to practice questions. Effect sizes for testing-versus-restudy are large and robust across age groups and content types. The phenomenology of fluency illusion explains why learners underuse it despite the evidence.",
   status: "settled",
   reflect: "When you read or watch something to learn, do you ever stop to test yourself before moving on? If the answer is rarely, that's the cheapest single upgrade to your learning available.",
   conceptQuiz: [
    {
     q: "What's the core mechanism that makes active recall effective?",
     options: [
      { text: "The effort of pulling information out of memory strengthens the retrieval path.", correct: true },
      { text: "It exposes you to the material more times.", misconception: "Re-reading also exposes you more times, and it doesn't work as well. Exposure isn't the active ingredient." },
      { text: "It feels productive.", misconception: "Active recall usually feels less productive than re-reading, which is part of why people skip it." },
      { text: "It increases reading speed.", misconception: "Different skill, and not the mechanism. Active recall slows you down on purpose." }
     ],
     why: "The act of retrieval, even imperfect, is what builds durable memory traces, not the act of reading."
    },
    {
     q: "Why do most learners under-use active recall despite strong evidence?",
     options: [
      { text: "Re-reading feels easier and more productive in the moment.", correct: true },
      { text: "It's expensive.", misconception: "Active recall costs nothing but discomfort. No tools required." },
      { text: "It only works for STEM subjects.", misconception: "Effect holds across humanities, languages, vocational training, and STEM." },
      { text: "Teachers actively discourage it.", misconception: "Most teachers actively encourage it, students still skip it." }
     ],
     why: "Fluency illusion: re-reading feels smooth and confident, active recall feels rough and uncertain, so learners pick the wrong signal."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "One closed-book minute", d: "After your next reading, close the book and write what you remember for 60 seconds.", xp: 10 },
    { level: "easy",     t: "Replace one re-read",  d: "For one week, swap re-reading for free recall after every study block. Note the discomfort and the retention.", xp: 20 },
    { level: "advanced", t: "Build a recall routine", d: "Set up a system (Anki, written prompts, or self-quizzes) that forces active recall on every topic you study for 30 days.", xp: 40 }
   ],
   diagram: { kind: "curve", title: "Forgetting curve vs recall practice", caption: "Each retrieval flattens the next forgetting curve.", data: { x: "Days since learning", y: "Retention", series: [{ label: "Re-reading only", points: [[0, 1], [1, 0.55], [3, 0.35], [7, 0.22], [14, 0.15]] }, { label: "Active recall", points: [[0, 1], [1, 0.85], [3, 0.8], [7, 0.78], [14, 0.76]] }] } }
  },
  {
   t: "Chunking",
   subdomain: "mechanics",
   definition: "The process of grouping individual pieces of information into larger, meaningful units to expand effective working memory.",
   short: "Your working memory holds about four things. The trick isn't a bigger brain. It's bundling small things into bigger ones.",
   deep: "Working memory is tiny. Most people hold around four items at a time, give or take. Yet a chess grandmaster can glance at a board for five seconds and reconstruct it perfectly. They aren't seeing 32 separate pieces. They're seeing a handful of familiar patterns, this is the Sicilian opening, that's a fork threat, there's a king-side castle. Each chunk holds dozens of pieces inside it. The same trick is how an experienced doctor reads a chart, a senior coder skims a function, a musician sight-reads a phrase. Beginners see notes; experts see motifs. Practice doesn't expand your raw capacity. It teaches you to bundle related items into larger units, freeing slots for the next layer. This is also why deep expertise feels effortless, the cognitive load actually went down because the chunks got bigger.",
   generic: "Try to remember the string XBOXNBABBCFBIIRS. Almost impossible. Now look again: XBOX, NBA, BBC, FBI, IRS. Five chunks. Easy. Same letters, same brain. The difference is whether you grouped them into things you already know.",
   expert: "Coined by George Miller (1956) in his classic paper on the magical number seven plus or minus two, later refined by Cowan (2001) to roughly four chunks in working memory. Chase and Simon (1973) demonstrated the expertise effect in chess. Chunking is the mechanism underlying schema acquisition in cognitive load theory (Sweller) and a major reason why deliberate practice produces what looks like superhuman recall in domain experts. Distinct from rote memorisation, chunks must be meaningful to function as a single retrievable unit.",
   status: "settled",
   reflect: "Pick a domain you're learning. Are you still handling individual atoms, or have you started recognising patterns that bundle them? If it still feels heavy, you haven't chunked yet.",
   conceptQuiz: [
    {
     q: "Chunking expands what you can hold in working memory by…",
     options: [
      { text: "Bundling small items into larger meaningful units that count as one slot each.", correct: true },
      { text: "Physically enlarging working memory capacity.", misconception: "The raw slot count stays about the same. What changes is how much information each slot can hold." },
      { text: "Repeating items until they stick.", misconception: "That's rote rehearsal, different mechanism, and far less powerful than meaningful grouping." },
      { text: "Writing things down so you don't have to remember them.", misconception: "Externalising helps, but it isn't chunking. Chunking happens inside the head." }
     ],
     why: "The number of chunks stays small. The amount of information packed inside each chunk is what grows with expertise."
    },
    {
     q: "Why can a chess master reconstruct a real board after a brief glance but struggle with a random arrangement?",
     options: [
      { text: "Real positions form familiar chunks; random ones don't fit any existing pattern.", correct: true },
      { text: "Random boards are physically harder to see.", misconception: "The boards look identical visually, the difference is purely cognitive." },
      { text: "Masters refuse to memorise random positions.", misconception: "They try and fail, just like beginners do." },
      { text: "Random positions have more pieces.", misconception: "Same number of pieces in both conditions, that was the point of the original study." }
     ],
     why: "Chase and Simon's finding: expertise builds a library of meaningful patterns, and that library only fires on real positions, not noise."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find a chunk",     d: "Pick a topic you're learning. Name three small items that should already be one bundle in your head, but aren't yet.", xp: 10 },
    { level: "easy",     t: "Build a pattern",  d: "Spend a session deliberately practising one common pattern in your domain until you recognise it without effort.", xp: 20 },
    { level: "advanced", t: "Layer the chunks", d: "Map five chunks you've built and identify what bigger pattern they could combine into. Practise until the bigger pattern fires as one unit.", xp: 40 }
   ]
  },
  {
   t: "Dual coding",
   subdomain: "mechanics",
   definition: "Combining verbal and visual representations of the same information to create two routes to recall instead of one.",
   short: "Words and pictures together stick better than either alone. Two roads in, two roads out.",
   deep: "Allan Paivio's dual coding theory: your brain has separate channels for verbal information and visual information, and when both fire on the same idea, you get two independent paths back to it later. That's why a well-drawn diagram next to a paragraph beats either by itself, why mind maps can outperform pure notes, and why a teacher who sketches on the board as they explain something is doing real cognitive work, not just keeping students entertained. The catch: this is not about decorating slides with stock photos. The visual has to carry meaning, an arrow showing direction, a curve showing trade-off, a shape encoding a relationship. A pretty image unrelated to the concept does nothing. Done right, dual coding makes retrieval more reliable because either channel, the words or the picture, can trigger the whole memory.",
   generic: "Imagine learning how a heart works from a textbook with only words, or from a diagram with labelled arrows showing blood flow. Most people remember the diagram version far longer, even months later. Same idea, two channels, double the grip.",
   expert: "Allan Paivio's dual coding theory (1971) proposes independent verbal and imagery subsystems that interact at retrieval. Mayer's cognitive theory of multimedia learning (2001) extends it, formalising principles like the multimedia, contiguity, and coherence principles. Effect sizes are robust when visuals are integrated and meaningful; decorative graphics are neutral at best and counterproductive at worst (seductive details effect). Distinct from learning styles, which lacks evidence, dual coding is about modality combination, not learner preference.",
   status: "settled",
   reflect: "Look at the notes you take. Are they all words? When was the last time you drew the relationship between ideas instead of writing it? Try sketching your next study session.",
   conceptQuiz: [
    {
     q: "Dual coding works because…",
     options: [
      { text: "Verbal and visual representations create two independent retrieval paths to the same idea.", correct: true },
      { text: "Pictures are more memorable than words on their own.", misconception: "Pictures alone aren't reliably better. The strength comes from combining channels, not from one beating the other." },
      { text: "Some learners are visual and some are verbal.", misconception: "That's the learning styles myth, which doesn't hold up empirically. Dual coding benefits learners broadly, not just visual ones." },
      { text: "Brains process images faster than text.", misconception: "Speed isn't the mechanism. Memory durability through redundant encoding is." }
     ],
     why: "Two encoding channels means two routes back to the memory at recall time, even if one channel fails the other can fire."
    },
    {
     q: "Which use of visuals actually helps learning rather than just feeling good?",
     options: [
      { text: "A diagram whose structure encodes the relationship between concepts being learned.", correct: true },
      { text: "A stock photo of a smiling student next to the text.", misconception: "Decorative images are neutral or harmful, this is the seductive details effect, not dual coding." },
      { text: "A logo at the top of every slide.", misconception: "Pure branding, no cognitive integration with the content." },
      { text: "A meme that's loosely related to the topic.", misconception: "Entertaining, but it doesn't encode the structure of the idea you're trying to remember." }
     ],
     why: "The visual must carry the meaning of the concept. Decoration without structure adds load without adding paths."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Sketch one idea",  d: "Take one concept you studied today and draw it as a labelled diagram, no full sentences allowed.", xp: 10 },
    { level: "easy",     t: "Pair your notes", d: "For one week, after each text-only note you write, sketch a small diagram or visual map of the same idea.", xp: 20 },
    { level: "advanced", t: "Teach dual-coded", d: "Prepare a short explanation of a topic using paired words and diagrams. Test a listener's recall a week later versus a words-only version.", xp: 40 }
   ]
  },
  {
   t: "Metacognition",
   subdomain: "practice",
   definition: "The capacity to monitor, evaluate, and regulate one's own thinking and learning processes.",
   short: "Thinking about your thinking. Catching yourself studying badly while you are still doing it.",
   deep: "John Flavell coined the term in 1979 to capture the often missing layer above ordinary learning, the part of you that watches the part of you that studies. Strong metacognition asks three questions in a loop, do I actually understand this, is the method I am using working, and what should I do differently next. Most novices skip all three. They study by re-reading until it feels familiar and then mistake familiarity for understanding. Skilled learners pause, predict, self-test, and update their plan mid-session. The research is consistent, students trained to monitor their comprehension outperform peers with the same hours but no monitoring habit. The practical version is small and almost free, after every chunk of study, ask out loud what you just learned and how confident you are, then check.",
   generic: "Imagine driving with a coach in the passenger seat who asks every few minutes, are you sure that was the right lane, why did you brake there, would you do it again. After a few drives you start asking those questions yourself. That coach is metacognition.",
   expert: "Flavell (1979) divided metacognition into metacognitive knowledge, knowledge of self, task, and strategy, and metacognitive regulation, planning, monitoring, and evaluation. Nelson and Narens (1990) formalised the monitoring and control loop between meta and object levels. Evidence-based teaching reviews (Hattie, Dunlosky) consistently rank metacognitive strategies among the highest-impact interventions. Calibration accuracy, the match between predicted and actual performance, is a key measurable signature of strong metacognition.",
   status: "settled",
   reflect: "After your last study session, how confident were you that you had learned the material, and how well did you actually perform on it later? The gap between those two is your metacognitive blind spot.",
   conceptQuiz: [
    {
     q: "Metacognition is best described as…",
     options: [
      { text: "Monitoring and regulating your own thinking and learning processes.", correct: true },
      { text: "Memorising large amounts of information quickly.", misconception: "That is a study tactic, not the monitoring layer that decides which tactic to use." },
      { text: "Studying for as many hours as possible.", misconception: "Hours alone are not metacognition, the regulation of those hours is." },
      { text: "Avoiding all difficult material.", misconception: "Avoidance is the opposite of regulating learning, strong metacognition pushes you toward productive difficulty." }
     ],
     why: "Flavell's original definition centres on the monitoring and control of one's own cognitive processes."
    },
    {
     q: "Which practice most directly trains metacognition?",
     options: [
      { text: "Predicting your performance on a self-test, then checking the actual result and updating your plan.", correct: true },
      { text: "Highlighting passages while reading.", misconception: "Highlighting feels active but does not include monitoring or calibration." },
      { text: "Listening to a lecture passively.", misconception: "Passive intake offers no self-assessment loop." },
      { text: "Re-reading the same chapter five times.", misconception: "Repetition without prediction and feedback does not build calibration." }
     ],
     why: "Calibration through prediction and feedback is the core training move for metacognitive regulation."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Predict and check",    d: "Before your next quiz or self-test, predict your score. Compare to the actual result and note the gap.", xp: 10 },
    { level: "easy",     t: "Run the three checks", d: "After every study chunk this week, ask what you learned, how confident you are, and what you will change next session.", xp: 20 },
    { level: "advanced", t: "Calibration log",      d: "For one month, keep a log of predicted versus actual performance across study sessions. Look for systematic over or under confidence.", xp: 40 }
   ]
  },
  {
   t: "Self-explanation",
   subdomain: "practice",
   definition: "A learning strategy in which the learner generates explanations of new material aloud or in writing, linking it to prior knowledge.",
   short: "Talk to yourself about why each step is true. The act of explaining is where the learning happens.",
   deep: "Michelene Chi and colleagues watched students study physics worked examples and noticed that the highest performers did something the others did not, they paused after each step and explained to themselves why that step followed. The lower performers read each line and moved on. The self-explainers were doing extra cognitive work, connecting the new step to principles they already understood, catching their own confusion, and patching it before it compounded. The effect generalises far beyond physics, it shows up in maths, biology, programming, and reading comprehension. The strategy is cheap and surprisingly underused, after every new claim or step, ask yourself why it is true and how it connects to what you already know. If you cannot answer, you have just found the gap that needs work.",
   generic: "Imagine reading a recipe and at each step asking out loud, why does the butter go in cold, why do we rest the dough. The cook who asks ends up understanding bread. The cook who just follows the steps ends up with a loaf and no idea what to do when something goes wrong.",
   expert: "Chi, Bassok, Lewis, Reimann, and Glaser (1989) documented the self-explanation effect in physics learning, with strong follow-up by Chi and Roy. Mechanisms include integration with prior knowledge, repair of mental models, and increased monitoring of comprehension. Effect sizes are robust across domains in reviews by Dunlosky and colleagues. Distinct from teaching others, the audience is the self, and from simple summarisation, which lacks the why-and-how-it-connects structure.",
   status: "settled",
   reflect: "When you last learned something new, did you pause at each step and explain it back to yourself, or did you just keep reading until the page ended?",
   conceptQuiz: [
    {
     q: "Self-explanation improves learning primarily because it…",
     options: [
      { text: "Forces the learner to integrate new material with prior knowledge and notice gaps.", correct: true },
      { text: "Makes the material easier to read on the page.", misconception: "It changes what the learner does, not what the text looks like." },
      { text: "Replaces the need for any practice problems.", misconception: "Self-explanation complements practice, it does not replace it." },
      { text: "Slows the learner down so they cover less material.", misconception: "It does slow coverage, but the benefit is comprehension and retention, not reduced volume." }
     ],
     why: "Generating why-this-follows explanations is what links new content to existing schemas and exposes weak spots."
    },
    {
     q: "Which behaviour is closest to genuine self-explanation?",
     options: [
      { text: "After reading a worked example, the student says out loud why each step is justified by an underlying principle.", correct: true },
      { text: "The student copies the worked example into a notebook without comment.", misconception: "Copying is transcription, no integration with prior knowledge takes place." },
      { text: "The student highlights every sentence in the example.", misconception: "Highlighting marks the text but does not generate explanations." },
      { text: "The student reads the example twice quickly.", misconception: "Re-reading without generating reasons is exactly what the Chi studies showed produces weaker learning." }
     ],
     why: "Generating justifications, not just reading or marking, is the active ingredient."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Why this step",         d: "Take one worked example today and explain out loud why each step follows. Note where you cannot answer.", xp: 10 },
    { level: "easy",     t: "Pair with prior",       d: "For one week, after each new concept, write two sentences linking it to something you already know well.", xp: 20 },
    { level: "advanced", t: "Audio explanation",     d: "Record yourself self-explaining a chapter as you study it. Listen back and mark every confused or vague passage for re-study.", xp: 40 }
   ]
  },
  {
   t: "Retrieval-induced forgetting (RIF)",
   subdomain: "mechanics",
   definition: "A memory phenomenon in which actively recalling some items from a category suppresses the later recall of related but uncalled items from the same category.",
   short: "Pulling one memory out can quietly push related ones further down. Retrieval shapes what you remember and what fades.",
   deep: "Michael Anderson and colleagues showed in 1994 that when you practise recalling a subset of items from a studied category, you not only get better at those items, you actively become worse at recalling the related items you did not practise. Study a list of fruits and vegetables, then drill yourself on apple and pear, and later you will recall banana and grape worse than fruits you never saw at all. The effect comes from inhibitory control, the brain suppresses competing memories to make the target one easier to retrieve, and the suppression lingers. This has implications everywhere, in eyewitness testimony where repeated questioning about some details fades others, in studying where over-drilling a narrow slice can damage adjacent knowledge, and in conversations where re-telling one version of an event can erode alternatives.",
   generic: "Imagine a closet with many shirts. Every time you pull out the blue one, you push the others slightly further back. After a month of always reaching for blue, the red one is harder to find even though it has been there the whole time. Memory works the same way.",
   expert: "Anderson, Bjork, and Bjork (1994) introduced the retrieval practice paradigm that demonstrates RIF, with the effect operationalised as reduced recall of unpractised items from practised categories versus unpractised baseline categories. Mechanistically linked to inhibitory executive control rather than simple associative interference. Robustly replicated across verbal, autobiographical, and applied settings, with applications to eyewitness memory research by Macrae and others.",
   status: "settled",
   reflect: "When you keep re-telling one version of a past event, what alternative details might you be quietly forgetting because you never retrieve them?",
   conceptQuiz: [
    {
     q: "Retrieval-induced forgetting predicts that practising recall of some items from a category will…",
     options: [
      { text: "Improve recall of the practised items and reduce recall of related unpractised items.", correct: true },
      { text: "Improve recall of all items in the category equally.", misconception: "If true, there would be no forgetting effect to name." },
      { text: "Have no effect on unpractised items.", misconception: "The signature finding is below-baseline recall for related unpractised items." },
      { text: "Reduce recall of every item including the practised ones.", misconception: "Practised items are remembered better, the cost falls on the related neighbours." }
     ],
     why: "Selective retrieval strengthens the targets and inhibits their competitors, producing forgetting of the neighbours."
    },
    {
     q: "A practical implication of RIF for studying is that…",
     options: [
      { text: "Over-drilling a narrow slice of a topic can quietly damage recall of related but uncovered material.", correct: true },
      { text: "Self-testing is always harmful and should be avoided.", misconception: "Self-testing is one of the most effective study tools, RIF just warns about narrowness, not about retrieval itself." },
      { text: "You should never study related topics together.", misconception: "Related topics still benefit from study together, the risk is uneven drilling within them." },
      { text: "Forgetting is permanent and cannot be reversed.", misconception: "RIF effects are real but often recoverable with broader retrieval practice across the category." }
     ],
     why: "The fix is to spread retrieval practice across the whole category, not to abandon testing."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the closet",       d: "Pick one topic you study heavily and list three adjacent areas you rarely retrieve. Note which ones feel hardest to recall.", xp: 10 },
    { level: "easy",     t: "Broaden the drills",    d: "For one week, every time you self-test on a sub-topic, add one question from a related but rarely drilled area.", xp: 20 },
    { level: "advanced", t: "Run the experiment",    d: "Pick a category with eight items. Drill four for a week and leave four alone, then test all eight at the end and compare recall.", xp: 40 }
   ]
  },
  {
   t: "Deliberate practice",
   subdomain: "practice",
   definition: "A structured form of practice defined by Anders Ericsson, characterised by specific goals, immediate feedback, focused attention on weaknesses, and progressive difficulty just beyond current ability.",
   short: "Hours alone do not make you good. Hours on the specific thing you cannot yet do, with feedback, do.",
   deep: "Anders Ericsson built the concept across decades of studies of expert performers in music, chess, sport, and medicine. His central finding was that mere experience plateaus quickly and that true expertise comes from a specific kind of effortful, uncomfortable practice. Deliberate practice has four hallmarks: a clear goal targeting a specific weakness, full attention rather than autopilot, immediate informative feedback, and repetition at the edge of current ability with progressive difficulty. Most amateurs play whole songs or whole games; experts isolate the seven seconds that keep going wrong and drill those until they stop. The ten thousand hour rule attributed to Gladwell oversimplified Ericsson, the number is a rough average for some domains and irrelevant in others, and the quality of those hours matters far more than the count. The trap is mistaking sustained effort for deliberate practice when no feedback loop is closing.",
   generic: "A casual tennis player rallies for an hour and feels good. A serious one hits two hundred backhands down the line because that shot has been letting them down, watches their form on video, and adjusts every twenty hits. Same hour, different outcome.",
   expert: "Ericsson, Krampe, and Tesch Romer (1993) defined the construct in their study of violinists at the Berlin music academy. Later work extended it to chess, medicine, and surgery. Macnamara, Hambrick, and Oswald (2014) meta analysis found practice explains a meaningful but variable share of expertise depending on domain, much higher for games with stable rules than for sports with high physical demands. The construct requires a teacher or feedback mechanism able to diagnose specific weaknesses.",
   status: "framework",
   reflect: "Look at your last week of practice in any skill. How much of it was deliberate practice in Ericsson's sense, and how much was comfortable repetition of what you already know?",
   conceptQuiz: [
    {
     q: "Which of the following is required for practice to count as deliberate in Ericsson's sense?",
     options: [
      { text: "A specific goal targeting a weakness, full attention, immediate feedback, and edge of ability difficulty.", correct: true },
      { text: "Putting in at least ten thousand cumulative hours regardless of focus.", misconception: "Time alone does not satisfy Ericsson's criteria, the quality of those hours is what matters." },
      { text: "Practising only with peers at your own level.", misconception: "Deliberate practice typically requires feedback from someone who can diagnose weaknesses you cannot." },
      { text: "Doing the activity at full intensity for at least two hours every day.", misconception: "Intensity alone without targeted feedback and difficulty is not deliberate practice." }
     ],
     why: "Ericsson named goal, attention, feedback, and edge of ability difficulty as the four hallmarks of deliberate practice."
    },
    {
     q: "The ten thousand hour rule popularised by Malcolm Gladwell is best characterised as…",
     options: [
      { text: "A rough average from selected domains that oversimplifies Ericsson's work.", correct: true },
      { text: "A universal threshold below which no one can achieve expertise.", misconception: "Ericsson himself critiqued the rule as too rigid and not universal across domains." },
      { text: "A precise prediction validated across all human skills.", misconception: "The number is a rough average from a subset of domains, not a universal law." },
      { text: "Irrelevant to deliberate practice theory.", misconception: "It is related but oversimplified, not unrelated." }
     ],
     why: "Ericsson's data showed wide variation by domain and emphasised quality of practice over a fixed hour count."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name a weakness",    d: "Pick one skill you are developing and write the single most limiting weakness in it.", xp: 10 },
    { level: "easy",     t: "Design a drill",     d: "Build a ten minute daily drill targeting only that weakness, with a clear success criterion and feedback source.", xp: 20 },
    { level: "advanced", t: "Run a cycle",        d: "Do the drill for thirty days, log feedback after each session, and have a coach or peer assess your progress at the end.", xp: 40 }
   ]
  },
  {
   t: "Forgetting curve",
   subdomain: "mechanics",
   definition: "Hermann Ebbinghaus's empirical finding that newly learned information is forgotten rapidly at first, then more slowly, following an exponential decay unless reinforced by review.",
   short: "You forget most of what you just learned within a day. Time the review before the forgetting, not after.",
   deep: "Hermann Ebbinghaus ran the experiment on himself in 1885, memorising lists of nonsense syllables and testing recall at varying delays. The result was an exponential decay curve: roughly half of what he had memorised was gone within an hour, and only a small fraction remained after a few days unless he reviewed. The shape of the curve is robust across replication, including a careful 2015 replication by Murre and Dros. The practical implication is the foundation of spaced repetition: review just before predicted forgetting, which flattens the curve and lengthens retention with each successful retrieval. Most students re read the same material in the same week, which feels productive but does not match the curve. The trap is reviewing too early, when nothing has been forgotten yet, or too late, when the trace is already gone.",
   generic: "Imagine writing your shopping list on a beach. Each wave that comes in washes away part of it. If you trace the letters again just before they fade, they stay clear. If you wait for the wave, they are gone.",
   expert: "Ebbinghaus (1885) used himself as the sole subject and nonsense syllables to minimise prior associations. Murre and Dros (2015) replicated the curve with modern methodology. The underlying decay is approximately exponential, with subsequent reviews flattening the slope. Modern spaced repetition algorithms like SuperMemo's SM 2 and Anki's variants are direct descendants, scheduling reviews near the predicted moment of forgetting.",
   status: "settled",
   reflect: "Think of something you learned last week that mattered. Without checking notes, how much can you reproduce now, and when did you last actively retrieve it?",
   conceptQuiz: [
    {
     q: "Ebbinghaus's forgetting curve shows that retention of newly learned information…",
     options: [
      { text: "Drops sharply within hours and then more gradually, following an exponential decay.", correct: true },
      { text: "Stays constant for several days and then drops suddenly.", misconception: "Decay starts immediately and is steepest in the first hours." },
      { text: "Increases over the first day and then decays.", misconception: "There is no general boost in the first day before decay begins." },
      { text: "Is unrelated to time and depends only on intelligence.", misconception: "The curve depends primarily on time and review, with intelligence playing a smaller role." }
     ],
     why: "The exponential decay shape, steep at first then flatter, is the central finding of Ebbinghaus's experiment."
    },
    {
     q: "The practical lesson of the forgetting curve for study scheduling is to…",
     options: [
      { text: "Review material just before it would otherwise be forgotten, then at expanding intervals.", correct: true },
      { text: "Review material in massed sessions on the same day to build redundancy.", misconception: "Massing on the same day does not slow decay as effectively as spaced reviews." },
      { text: "Never review, since retention is set at the moment of learning.", misconception: "The curve specifically shows that without review most material is lost quickly." },
      { text: "Review only after material has been completely forgotten.", misconception: "Re learning from zero is costly compared with reinforcing a partially decayed trace." }
     ],
     why: "Spaced repetition schedules reviews near the point of predicted forgetting, which is precisely what the curve recommends."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Map your decay",     d: "Test yourself today on something you learned a week ago and note how much you can reproduce without notes.", xp: 10 },
    { level: "easy",     t: "Schedule reviews",   d: "Set up a one, three, seven, fourteen day review schedule for a small batch of new material this week.", xp: 20 },
    { level: "advanced", t: "Run a deck",         d: "Build a spaced repetition deck of one hundred cards for a domain you are studying and maintain daily reviews for sixty days.", xp: 40 }
   ]
  },
  {
   t: "Elaboration",
   subdomain: "practice",
   definition: "A learning strategy that involves explaining and connecting new information to prior knowledge through self generated questions and examples, deepening understanding and retention.",
   short: "Do not just read the fact. Explain why it is true, where else it shows up, and how it connects to what you already know.",
   deep: "Elaborative interrogation, the structured form of elaboration, asks why is this true and how does this fit with what I already know after each new fact. Studies by Pressley, McDaniel, and others through the 1980s and 1990s consistently showed that learners who elaborated outperformed learners who simply re read, even when total study time was matched. The mechanism is the creation of multiple retrieval routes: every connection you build becomes a path back to the original idea, so the more dense the web, the more reliable the recall. Elaboration also exposes the gaps you did not know you had, because trying to explain why often reveals you only know that. The trap is generating plausible sounding but incorrect explanations, which is why pairing elaboration with checking against a reliable source matters.",
   generic: "A child told that ice floats because it is less dense than water can repeat the fact. A child who asks why and learns that ice has a crystal lattice with gaps now also understands why pipes burst in winter and why icebergs sit mostly underwater. Same fact, very different web.",
   expert: "Dunlosky et al (2013) rated elaborative interrogation as having moderate utility, with strongest effects for factual content and learners who already have relevant prior knowledge. Pressley, McDaniel, Turnure, Wood, and Ahmad (1987) provided early experimental support. The effect generally requires the elaboration to be accurate, which is why pairing with feedback or source checking strengthens it.",
   status: "settled",
   reflect: "Pick the last interesting fact you learned. Can you explain why it is true and connect it to two other things you already know? If not, what does that say about how you learned it?",
   conceptQuiz: [
    {
     q: "Elaboration as a learning strategy primarily involves…",
     options: [
      { text: "Explaining why new information is true and how it connects to existing knowledge.", correct: true },
      { text: "Re reading the same passage multiple times slowly.", misconception: "Re reading is a different, much less effective strategy." },
      { text: "Memorising verbatim text without interpretation.", misconception: "Verbatim memorisation does not build the connective web that elaboration relies on." },
      { text: "Avoiding any reference to prior knowledge while learning new material.", misconception: "Elaboration explicitly depends on linking new and prior knowledge." }
     ],
     why: "Generating explanations and connections is the operational definition of elaboration in the learning sciences."
    },
    {
     q: "Dunlosky and colleagues found elaborative interrogation works best when…",
     options: [
      { text: "The learner already has relevant prior knowledge and the content is factual.", correct: true },
      { text: "The learner has no prior knowledge of the topic at all.", misconception: "Without prior knowledge, elaboration generates fewer useful connections." },
      { text: "The material is purely procedural with no conceptual content.", misconception: "Elaboration is most effective for factual and conceptual material." },
      { text: "The learner avoids checking the accuracy of their explanations.", misconception: "Accuracy checking is important because plausible but wrong elaborations can entrench errors." }
     ],
     why: "Elaboration depends on a web of prior knowledge to attach to and on accurate generated explanations."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Ask why",          d: "After reading one short article today, write a one paragraph answer to why is this true.", xp: 10 },
    { level: "easy",     t: "Build two bridges", d: "For three concepts you learn this week, connect each to two things you already know and write the link.", xp: 20 },
    { level: "advanced", t: "Teach with elaboration", d: "Prepare a one hour lesson on a topic you are learning, structured around why and how questions rather than what questions. Deliver it and collect questions.", xp: 40 }
   ]
  },
  {
   t: "Bloom's taxonomy",
   subdomain: "transfer",
   definition: "A hierarchical classification of cognitive learning objectives, originally proposed by Benjamin Bloom in 1956 and revised in 2001, ordering thinking from remember through understand, apply, analyse, evaluate, and create.",
   short: "There is a ladder from knowing a fact to using it to inventing something new. Most teaching parks at the bottom rung.",
   deep: "Benjamin Bloom and colleagues built the taxonomy in 1956 as a way for educators to write more diverse learning objectives. The original six levels were knowledge, comprehension, application, analysis, synthesis, and evaluation. Anderson and Krathwohl's 2001 revision renamed and reordered them as remember, understand, apply, analyse, evaluate, and create, with create at the top. The taxonomy is descriptive rather than strictly hierarchical, you do not have to fully master one level before the next, but higher levels generally require some grasp of lower ones. The practical use is auditing your own learning: if you can only remember and understand a topic, you cannot reliably apply or analyse it. Most school assessments target the bottom two levels because they are easier to grade, which is exactly why those graduates often cannot transfer what they learned to a new context.",
   generic: "Think of cooking. Reciting a recipe is remember. Knowing why you sear the meat is understand. Cooking dinner from the recipe is apply. Diagnosing why a dish flopped is analyse. Judging which of three recipes is best for your guests is evaluate. Inventing your own dish is create.",
   expert: "Bloom et al (1956) Taxonomy of Educational Objectives, Handbook I, Cognitive Domain. Anderson and Krathwohl (2001) revised the framework with explicit verb categories. The taxonomy is widely used in instructional design and assessment writing. Critics note that the levels are not strictly cumulative and that the original hierarchy oversimplified the relationship between creativity and evaluation.",
   status: "framework",
   reflect: "Pick a topic you say you know. At which level of the taxonomy does your actual competence stop, and what would the next level require you to do that you currently cannot?",
   conceptQuiz: [
    {
     q: "The revised Anderson and Krathwohl version of Bloom's taxonomy orders cognitive levels as…",
     options: [
      { text: "Remember, understand, apply, analyse, evaluate, create.", correct: true },
      { text: "Create, evaluate, analyse, apply, understand, remember.", misconception: "That is the inverse order, the original ascends from remember upward." },
      { text: "Knowledge, skill, attitude, behaviour, outcome, mastery.", misconception: "Those terms belong to a different framework, not Bloom." },
      { text: "Awareness, interest, desire, action, retention, loyalty.", misconception: "That is a marketing funnel, not Bloom's taxonomy." }
     ],
     why: "Anderson and Krathwohl's 2001 revision names the six levels in that ascending order with create at the top."
    },
    {
     q: "A typical multiple choice exam that asks students to recall definitions is targeting which level?",
     options: [
      { text: "Remember, the lowest level of the taxonomy.", correct: true },
      { text: "Create, the highest level.", misconception: "Recall of definitions does not require generating anything new." },
      { text: "Evaluate, requiring judgement.", misconception: "Definition recall does not require judging the value of alternatives." },
      { text: "Apply, requiring use in a new context.", misconception: "Recall in the original form is not application to a new context." }
     ],
     why: "Definition recall is the canonical example of the remember level, which is why critics argue most assessments cluster there."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Place your skill",  d: "Pick one topic and write the highest Bloom level at which you can perform without notes.", xp: 10 },
    { level: "easy",     t: "Climb one rung",    d: "Design one task that requires the next level up and complete it this week.", xp: 20 },
    { level: "advanced", t: "Audit a curriculum", d: "Take a course or book you are studying. Tag each assessment by Bloom level and redesign one of them to target a higher level.", xp: 40 }
   ]
  },
  {
   t: "Implementation intentions",
   subdomain: "habits",
   definition: "A self regulation strategy formulated by Peter Gollwitzer, in which a person specifies in advance the exact when, where, and how of acting on a goal, in the form if situation X arises, then I will do Y.",
   short: "Goals do not run. Plans do. Decide in advance the exact cue and the exact action, and the brain executes it almost automatically.",
   deep: "Peter Gollwitzer introduced implementation intentions in 1999 as a complement to goal intentions. A goal intention says I want to exercise more. An implementation intention says if it is seven am on a weekday, then I will put on my running shoes and leave the house within five minutes. The second form ties the action to a specific situational cue and a specific response, which offloads control from effortful deliberation to the cue itself. Meta analyses by Gollwitzer and Sheeran show medium to large effects on goal attainment across health, study, and behaviour change domains. The mechanism is automatic activation: once the cue is well rehearsed, the behaviour is initiated without renegotiation. The trap is vague plans masquerading as implementation intentions, like I will exercise when I have time, which lack a concrete cue and provide no automaticity.",
   generic: "Telling yourself you will floss more rarely works. Putting the floss next to your toothbrush and deciding if I have just finished brushing then I will floss for thirty seconds works, because the decision is already made before the moment arrives.",
   expert: "Gollwitzer (1999) Implementation intentions: strong effects of simple plans. Gollwitzer and Sheeran (2006) meta analysis across ninety four studies found a medium to large effect size on goal attainment. Mechanisms include heightened perceptual readiness for the cue and automatic initiation of the response when the cue is detected, supported by neuroimaging evidence.",
   status: "settled",
   reflect: "Pick a goal you have repeatedly failed to follow through on. What was your plan, and was it actually an implementation intention with a specific cue and response, or just a wish?",
   conceptQuiz: [
    {
     q: "An implementation intention as Gollwitzer defined it has the form…",
     options: [
      { text: "If situation X arises, then I will do behaviour Y.", correct: true },
      { text: "I would like to do behaviour Y sometime soon.", misconception: "That is a vague goal intention, not an implementation intention." },
      { text: "I will try to be a better person.", misconception: "Trait based aspirations are not implementation intentions." },
      { text: "I will do behaviour Y for thirty days no matter what.", misconception: "A duration commitment without a cue is not an implementation intention." }
     ],
     why: "The if then structure with a specific situational cue and specific response is the defining form of an implementation intention."
    },
    {
     q: "The primary psychological mechanism behind implementation intentions is…",
     options: [
      { text: "Automatic activation of the planned behaviour when the rehearsed cue is detected.", correct: true },
      { text: "Increased willpower at the moment of action.", misconception: "Implementation intentions specifically reduce reliance on in the moment willpower." },
      { text: "Higher general motivation across all goals.", misconception: "The effect is specific to the cued behaviour, not diffuse motivation." },
      { text: "Improved understanding of the goal.", misconception: "Understanding is the goal intention level, not the implementation level." }
     ],
     why: "The link between cue and response becomes automatic with rehearsal, which is why these plans work even under cognitive load."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write one if then",  d: "Pick one current goal and write a single if then plan with a specific cue and action.", xp: 10 },
    { level: "easy",     t: "Run the plan",       d: "Execute the if then plan for fourteen days and tally how often the cue triggered the action.", xp: 20 },
    { level: "advanced", t: "Stack five",         d: "Design five linked implementation intentions covering a key part of your day. Run them for a month and compare with the prior month.", xp: 40 }
   ]
  },
  {
   t: "Cognitive load theory",
   subdomain: "mechanics",
   fullForm: "CLT",
   definition: "An instructional design framework by John Sweller that models learning as constrained by limited working memory, distinguishing intrinsic load from extraneous and germane load.",
   short: "Working memory is tiny. Bad design wastes it on confusing layout. Good design spends it on the actual idea.",
   deep: "John Sweller introduced cognitive load theory in the 1980s, drawing on Miller's seven plus or minus two and on schema theory. The model identifies three sources of load. Intrinsic load is the inherent difficulty of the material, set by how many elements must be held together to make sense. Extraneous load is the avoidable cost of poor instruction, split attention, decorative graphics, unclear language. Germane load is the productive effort of building schemas. Effective teaching minimises extraneous load and channels capacity toward germane load, while keeping intrinsic load just below overflow. The theory generates concrete design moves: worked examples for novices, faded scaffolding as learners progress, integrating text with diagrams instead of placing them apart, and pre training on isolated elements before integrating them. The trap is treating all load as bad and aiming for the easiest possible presentation, which strips out the germane effort that builds skill.",
   generic: "Think of a kitchen with knives in one drawer, boards in another, ingredients in a third room. You spend most of your effort fetching things instead of cooking. That fetching is extraneous load. A well laid out kitchen lets you spend the same energy actually cooking.",
   expert: "Sweller (1988) Cognitive load during problem solving. Sweller, Ayres, and Kalyuga (2011) extended the framework with explicit effects, including the split attention effect, redundancy effect, expertise reversal effect, and modality effect. Working memory limits are based on Baddeley's model, with intrinsic, extraneous, and germane load summing toward an overall capacity ceiling.",
   status: "framework",
   reflect: "Pick a course or tutorial that left you exhausted but with little real learning. Which of intrinsic, extraneous, or germane load was being wasted, and what design change would have helped?",
   conceptQuiz: [
    {
     q: "Cognitive load theory distinguishes three types of load, which are…",
     options: [
      { text: "Intrinsic, extraneous, and germane.", correct: true },
      { text: "Visual, auditory, and kinesthetic.", misconception: "Those are learning style categories, a separate and contested framework." },
      { text: "Short term, medium term, and long term.", misconception: "Those are memory time scales, not types of cognitive load." },
      { text: "Easy, medium, and hard.", misconception: "Difficulty is a property of material, not a type of load in CLT." }
     ],
     why: "Sweller's framework specifically names intrinsic, extraneous, and germane load as the three components."
    },
    {
     q: "The split attention effect predicts that learners do worse when…",
     options: [
      { text: "Related information is presented in spatially or temporally separated sources that must be integrated.", correct: true },
      { text: "Information is presented in a single integrated diagram.", misconception: "Integrated presentation is the recommended design, not the failure mode." },
      { text: "Material is too easy for the learner.", misconception: "The split attention effect is about presentation, not difficulty." },
      { text: "Learners study in groups rather than alone.", misconception: "The effect is about presentation format, not social context." }
     ],
     why: "Forcing learners to mentally integrate physically separated sources wastes working memory on coordination rather than understanding."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the waste",     d: "Pick one tutorial you have used recently and identify one source of extraneous load in it.", xp: 10 },
    { level: "easy",     t: "Integrate a diagram", d: "Take a piece of teaching material with separated text and diagram and redesign it so the labels sit on the diagram itself.", xp: 20 },
    { level: "advanced", t: "Design a worked example sequence", d: "Build a sequence of three worked examples with progressively faded scaffolding for a skill you teach or are learning. Test it with a peer and revise.", xp: 40 }
   ]
  }
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
   { name: "Learning How to Learn, Oakley (Coursera, free audit)", what: "The most popular meta-learning course on the planet.",                 url: "https://www.coursera.org/learn/learning-how-to-learn",               weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Anki (open-source spaced repetition)",         what: "The OG SR flashcard app. Free desktop, paid iOS. Supports FSRS.",            url: "https://apps.ankiweb.net/",                             weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Andy Matuschak, notes & essays",            what: "Modern, dense, original writing on knowledge work + memory.",              url: "https://andymatuschak.org/",                             weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Augmenting Long-term Memory, Michael Nielsen",     what: "Foundational essay on SR + active recall, freely available.",              url: "https://augmentingcognition.com/ltm.html",                      weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Ness Labs, Anne-Laure Le Cunff",            what: "Mindful productivity + learning research, distilled.",                 url: "https://nesslabs.com/",                               verify: false, lastVerified: "2026-06" },
   { name: "Robert Bjork, Bjork Learning & Forgetting Lab",    what: "UCLA lab page + selected papers on desirable difficulty.",               url: "https://bjorklab.psych.ucla.edu/",                          verify: false, lastVerified: "2026-06" },
   { name: "Khan Academy, Learn How to Learn",           what: "Free short course adaptation for younger learners + beginners.",             url: "https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities", verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia, Spaced repetition",             what: "Solid neutral overview w/ research citations.",                     url: "https://en.wikipedia.org/wiki/Spaced_repetition",                   verify: false, lastVerified: "2026-06" },
   { name: "RemNote (free tier)",                  what: "Note-taking app with SR baked in.",                            url: "https://www.remnote.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "Make It Stick, Roediger et al. (library)",       what: "Evidence-based study, accessibly written.",                       url: "https://makeitstick.net/",                              weight: "popular", verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Peak, Anders Ericsson",                what: "Deliberate practice from the source.",                          url: "https://en.wikipedia.org/wiki/Peak:_Secrets_from_the_New_Science_of_Expertise",   price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Ultralearning, Scott Young",              what: "Project-based intensive learning playbook.",                       url: "https://www.scotthyoung.com/ultralearning/",                     price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "A Mind for Numbers, Barbara Oakley",         what: "The book that grew into the course. Especially good for STEM learners.",         url: "https://barbaraoakley.com/books/a-mind-for-numbers/",                 price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Make It Stick, Brown, Roediger, McDaniel",      what: "Authoritative + readable; the evidence-based canon.",                  url: "https://makeitstick.net/",                              price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Range, David Epstein",                 what: "Generalists vs specialists; transfer across domains.",                  url: "https://en.wikipedia.org/wiki/Range:_Why_Generalists_Triumph_in_a_Specialized_World", price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "How We Learn, Benedict Carey",            what: "Friendly tour of cognitive-science learning research.",                 url: "",                                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Talent Code, Daniel Coyle",            what: "Deliberate practice from a different angle.",                      url: "",                                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Mastery, Robert Greene",               what: "Long-arc skill-building, biography-rich.",                        url: "",                                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Art of Learning, Josh Waitzkin",         what: "Chess + tai-chi champion on how mastery actually happens.",               url: "",                                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Building a Second Brain, Tiago Forte",         what: "Personal knowledge management for the digital age.",                   url: "https://www.buildingasecondbrain.com/",                        price: "verify", verify: false, lastVerified: "2026-06" }
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
