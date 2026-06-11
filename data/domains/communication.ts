import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "communication",
  icon: "🎤",
  hue: "#fbbf24",
  category: "People & Influence",
  name: "Communication & Storytelling",
  tagline: "Make ideas land — and stick",

  basics: "Communication is the work of installing an idea — accurately and durably — into another person's head. Most ideas die not because they're wrong but because they're forgettable: too long, too abstract, no story. The cure is structure, specifics, and stakes.",
  whyItMatters: [
    "Get your ideas chosen instead of someone else's.",
    "Lead teams and projects with less repeating yourself.",
    "Write emails / docs / decks people actually act on.",
    "Tell the story of your work in a way that survives the hallway."
  ],
  realWorldExample: "Aristotle wrote three modes of persuasion: ethos (credibility), pathos (emotion), logos (logic). 2400 years later, every TED talk that lands does some version of all three — credibility in the bio, emotion in the story, logic in the slide.",

  mentors: [
    { name: "Aristotle", for: "ethos/pathos/logos", work: "Rhetoric" },
    { name: "Chip & Dan Heath", for: "the SUCCESs framework — why some ideas stick", work: "Made to Stick (2007)" },
    { name: "Nancy Duarte", for: "structure for presentations + slides", work: "Resonate (2010)" },
    { name: "Joseph Campbell", for: "the hero's journey — story structure", work: "The Hero with a Thousand Faces (1949)" },
    { name: "William Zinsser", for: "clear non-fiction writing", work: "On Writing Well (1976)" }
  ],

  diagrams: [
    { kind: "pyramid", title: "BLUF / Pyramid Principle", caption: "Bottom-Line-Up-Front — top-down structure used in McKinsey-style writing.", data: { levels: ["Detail", "Supporting", "Argument", "Bottom Line"] } },
    { kind: "cycle", title: "Communication loop", caption: "Sender → message → receiver → feedback.", data: { nodes: ["Sender", "Message", "Receiver", "Feedback"] } }
  ],

  synthesis: [
    { concept: "Specificity beats abstraction", linksTo: "marketing", note: "The same reason a positioning statement names a target." },
    { concept: "Story structure", linksTo: "negotiation", note: "Framing in negotiation is the same skill as setting up a story." }
  ],

  concepts: [
    { t: "Ethos · Pathos · Logos", short: "Credibility · emotion · logic. Use all three.", deep: "Most ideas underweight ethos (who's saying it) and pathos (why it matters now) and overweight logos (the deck full of facts). Real persuasion balances all three; logic alone rarely moves anyone.", status: "framework", reflect: "Take your last pitch/email. Where are ethos, pathos, and logos? Which is missing?" },
    { t: "BLUF — Bottom Line Up Front", short: "Lead with the conclusion. Then the evidence.", deep: "McKinsey's pyramid principle, military comms: state the answer first, then defend it. Busy readers stop after the first sentence — make it carry the message. Save build-up for when you're telling a story, not delivering information.", status: "framework", reflect: "Open your last long email. Where's the bottom line? If it's not in line 1, what changes?" },
    { t: "Specifics beat abstractions", short: "'Fast' is forgettable. '0–60 in 3 seconds' isn't.", deep: "Concrete details give the brain something to hold. The Heath brothers call it 'concreteness' — a core of why ideas stick. Lean into named numbers, named scenes, named characters.", status: "settled", reflect: "Edit one sentence of yours: replace every abstraction with a specific. How does it read?" },
    { t: "Story structure (Campbell, lite)", short: "Setup → trouble → choice → consequence.", deep: "The hero's journey is the heavy-cake version. The weeknight version is: status quo → disruption → struggle → resolution. Any pitch, presentation, or update can borrow this shape — and most should.", status: "framework", reflect: "Take a recent project update. Could it be told as setup → trouble → choice → consequence in 60 seconds?" },
    { t: "Audience tailoring", short: "Same idea, different audiences, different starting points.", deep: "Skilled communicators map the audience's prior beliefs and start there, not at their own conclusion. A board hears the metric; an engineer hears the constraint; a customer hears the benefit.", status: "settled", reflect: "Take a recent message you sent. What would change if the audience were halved in expertise? Doubled?" },
    { t: "Show, don't tell", short: "Give them the evidence; let them draw the conclusion.", deep: "Reaching the conclusion themselves means the audience owns it. Storytellers and journalists know this — describing the scene moves more than asserting the moral. 'She slammed the door' beats 'she was angry.'", status: "framework", reflect: "Pick one 'told' sentence in your writing. Show it instead. Does it land harder?" },
    { t: "The curse of knowledge", short: "Once you know something, it's almost impossible to remember not knowing it.", deep: "Heath brothers' clearest single insight. Experts overshoot — they use jargon, skip foundations, and assume what they shouldn't. Antidote: get blank-slate feedback often.", status: "settled", reflect: "Show your last explanation to someone outside your field. Where do they get lost? That's the curse." },
    { t: "Brevity", short: "Cut everything that doesn't earn its place.", deep: "Time-pressured readers reward short. Most drafts can lose 30% with no loss of meaning. Strunk & White / Zinsser: edit ruthlessly; the second draft is where the writing is.", status: "settled", reflect: "Cut your last long message by 30%. Is anything lost? Is anything gained?" }
  ],

  counterView: "There's a popular view that 'communication is everything' — that any failure to be heard is a communication failure on the speaker's side. Take it seriously, then push back: sometimes the audience is wrong, hostile, or simply not the right audience. Over-investing in 'finding the right framing' can also be a way to avoid saying the hard true thing. And the cult of brevity has its own failures — important ideas sometimes need to be long. Mehrabian's '7-38-55' rule is misquoted constantly; treat any single dramatic stat about communication as suspect.",

  capabilities: [
    "Open any message with the bottom line and defend it in 3 lines.",
    "Replace 3 abstractions with specifics in any draft.",
    "Map a project update to setup → trouble → choice → consequence in 60 seconds.",
    "Tailor a message for a non-expert without dumbing it down.",
    "Cut a draft by 30% without losing meaning."
  ],
  cheatsheet: [
    "Lead with the bottom line. Always.",
    "Specifics > abstractions. Name names, name numbers.",
    "Ethos + Pathos + Logos. Don't only use logos.",
    "Story shape: setup → trouble → choice → consequence.",
    "Show, don't tell.",
    "Cut 30%. Then cut again."
  ],

  roadmap: [
    { rank: "Novice", focus: "Get clear", do: "Read Made to Stick + On Writing Well. Practice BLUF on every email for a week.", milestone: "Your emails open with the bottom line.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Edit hard", do: "Cut every draft by 30%. Replace 3 abstractions per page.", milestone: "Drafts get tighter without thinking.", time: "~1 month" },
    { rank: "Practitioner", focus: "Tell stories", do: "Frame project updates as setup → trouble → choice → consequence.", milestone: "Updates are remembered, not just read.", time: "~2–3 months" },
    { rank: "Specialist", focus: "Speak in public", do: "Give 5 short talks. Get recorded feedback. Iterate.", milestone: "You can hold a room of 30 confidently.", time: "~6 months" },
    { rank: "Expert", focus: "Lead by writing", do: "Run things via written docs (Amazon-style). Make decisions by writing.", milestone: "Your docs move things without meetings.", time: "~1 year" },
    { rank: "Master", focus: "Teach + coach", do: "Edit others' work; teach the craft.", milestone: "You make others' communication better.", time: "~2 years+" },
    { rank: "Grandmaster", focus: "Write at scale", do: "Books / talks / essays that shape how the field communicates.", milestone: "Others quote your work to make their case.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Paul Graham — essays",                                what: "Master class in clear, confident essay writing.",                                      url: "https://www.paulgraham.com/articles.html",                          verify: false, lastVerified: "2026-06" },
      { name: "TED Talks (official site)",                          what: "Watch with structure in mind. Notice the openings + arc.",                              url: "https://www.ted.com/talks",                                         verify: false, lastVerified: "2026-06" },
      { name: "Farnam Street — Effective Communication",            what: "Curated essays on writing + speaking clearly.",                                          url: "https://fs.blog/great-talks/",                                      verify: false, lastVerified: "2026-06" },
      { name: "Julian Shapiro — How to Write Well",                 what: "Compact, practical writing guide.",                                                      url: "https://www.julian.com/guide/write/intro",                          verify: false, lastVerified: "2026-06" },
      { name: "Stephen Pinker — The Sense of Style (free chapters)", what: "Cognitive-science-grounded writing advice.",                                            url: "https://stevenpinker.com/publications/sense-style-thinking-persons-guide-writing-21st-century", verify: false, lastVerified: "2026-06" },
      { name: "George Orwell — Politics and the English Language", what: "The essay every writer should read once a year. Free.",                                  url: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/", verify: false, lastVerified: "2026-06" },
      { name: "Strunk & White — Elements of Style (Bartleby)",      what: "Tiny, dense, classic. Free public-domain copy.",                                          url: "https://www.bartleby.com/lit-hub/the-elements-of-style/",          verify: true, lastVerified: "2026-06" },
      { name: "Toastmasters International",                          what: "Local clubs to practice speaking; some materials free.",                                  url: "https://www.toastmasters.org/",                                     verify: false, lastVerified: "2026-06" },
      { name: "Harvard Business Review — Communication topic",       what: "Many free articles on workplace communication.",                                         url: "https://hbr.org/topic/communication",                              verify: false, lastVerified: "2026-06" },
      { name: "On Writing Well — Zinsser (library copy)",           what: "The non-fiction writing classic. Short and direct.",                                    url: "https://en.wikipedia.org/wiki/On_Writing_Well",                    verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Made to Stick — Chip & Dan Heath",                    what: "Why some ideas survive (SUCCESs framework).",                                           url: "https://heathbrothers.com/books/made-to-stick/",                     price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Resonate — Nancy Duarte",                              what: "Structure for talks and decks.",                                                         url: "https://www.duarte.com/resonate/",                                   price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "The Pyramid Principle — Barbara Minto",                what: "Top-down structured writing. McKinsey gospel.",                                          url: "https://en.wikipedia.org/wiki/Pyramid_Principle",                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "On Writing Well — Zinsser",                            what: "Library or new copy. Re-read it every couple of years.",                                 url: "https://en.wikipedia.org/wiki/On_Writing_Well",                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Talk Like TED — Carmine Gallo",                       what: "What works in the best TED talks, structured.",                                           url: "",                                                                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Bird by Bird — Anne Lamott",                          what: "Writing as life-practice; humane and useful.",                                            url: "",                                                                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Story — Robert McKee",                                what: "Screenwriting structure that transfers to any narrative.",                                url: "https://mckeestory.com/",                                            price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "The Sense of Style — Steven Pinker",                  what: "Modern writing-craft book with cognitive-science roots.",                                  url: "https://stevenpinker.com/publications/sense-style-thinking-persons-guide-writing-21st-century", price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Writing Tools — Roy Peter Clark",                     what: "50 specific writing moves you can practice.",                                              url: "https://www.poynter.org/",                                           price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Slide:ology — Nancy Duarte",                          what: "Designing slides that don't undermine your talk.",                                        url: "https://www.duarte.com/slideology/",                                  price: "verify", verify: false, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "BLUF every email", d: "For one week, start every work email with the conclusion in line 1. Note responses.", xp: 30 },
    { t: "Specific-ify", d: "Take a paragraph of yours. Replace 5 abstractions with specifics. Show before/after.", xp: 30 },
    { t: "60-second story", d: "Tell a colleague a recent project as setup → trouble → choice → consequence. Time yourself.", xp: 40 },
    { t: "Cut 30%", d: "Pick a long thing you wrote. Cut 30%. Compare clarity.", xp: 30 },
    { t: "Blank-slate test", d: "Ask a non-expert to explain back what you just wrote/said. Note the gaps.", xp: 40 }
  ],
  capstone: { t: "Give a real talk", d: "Give a 10-minute talk on something you know. Record it. Watch it. Note one structural thing to fix next time.", xp: 200 },

  quiz: [
    { q: "What's the strongest single move for clarity in long writing?", options: [
      { text: "Add more facts.", misconception: "More facts can cloud the point if structure is missing." },
      { text: "Lead with the bottom line.", correct: true },
      { text: "Use longer sentences.", misconception: "Length isn't quality; structure is." },
      { text: "Add jargon to sound credible.", misconception: "Jargon erodes ethos for non-expert audiences." }
    ], why: "BLUF / pyramid principle — busy readers stop after line 1. Make it carry the message.", testOut: true },
    { q: "Ethos · Pathos · Logos refers to…", options: [
      { text: "Three brands of beer.", misconception: "No." },
      { text: "Credibility, emotion, and logic in persuasion.", correct: true },
      { text: "A modern marketing framework.", misconception: "Aristotle. Older than marketing." },
      { text: "Personality types.", misconception: "Different topic." }
    ], why: "Aristotle's three modes of persuasion. Most ideas underweight ethos and pathos." },
    { q: "The Mehrabian '7-38-55' rule is best treated as…", options: [
      { text: "Universal truth about all communication.", misconception: "Misquoted constantly. The original work was narrow." },
      { text: "Misquoted constantly — narrow original scope.", correct: true },
      { text: "Discredited entirely.", misconception: "The original study was fine; the popular use isn't." },
      { text: "About body language only.", misconception: "It was about inconsistent affect, not body language only." }
    ], why: "The original was about inconsistent emotion-communication in a lab — not the breakdown of all human communication." },
    { q: "What's the curse of knowledge?", options: [
      { text: "Knowing something makes it harder to remember not knowing it.", correct: true },
      { text: "Knowing too much makes you boring.", misconception: "Boring is a style problem, not a knowledge problem." },
      { text: "Experts are always wrong.", misconception: "Strong overshoot — they're better than non-experts on most factual questions." },
      { text: "It's a fictional concept.", misconception: "It's well-supported in cognitive psychology." }
    ], why: "Once you know something, you forget what it was like not to. Drives jargon and over-skipping by experts." },
    { q: "What's the simplest story structure for a 60-second update?", options: [
      { text: "Bullet list of milestones.", misconception: "Easy to write, hard to remember." },
      { text: "Setup → trouble → choice → consequence.", correct: true },
      { text: "Random anecdote.", misconception: "Memorable if good, but not a reliable structure." },
      { text: "Mission statement → KPIs → ask.", misconception: "Works in some boardrooms; not memorable storytelling." }
    ], why: "The compressed hero's journey works for almost any update — it's the shape humans remember." }
  ],

  flashcards: [
    { front: "Ethos / Pathos / Logos?", back: "Aristotle: credibility (who's saying it), emotion (why it matters now), logic (the evidence). Use all three." },
    { front: "BLUF?", back: "Bottom Line Up Front — lead with the conclusion, defend it after. Pyramid principle / McKinsey style." },
    { front: "Specifics or abstractions?", back: "Specifics. '0–60 in 3 seconds' beats 'fast' every time." },
    { front: "Story shape, short version?", back: "Setup → trouble → choice → consequence. Compressed hero's journey." },
    { front: "Show, don't tell — example?", back: "'She slammed the door' (show anger) beats 'she was angry' (tell)." },
    { front: "Curse of knowledge?", back: "Once you know something, it's hard to remember not knowing it. Drives jargon and skipped foundations." },
    { front: "Why cut 30%?", back: "Most drafts have 30% padding. Readers reward brevity; brevity often raises clarity." },
    { front: "Mehrabian 7-38-55 truth?", back: "Misquoted constantly. Original was a narrow lab finding about inconsistent affect, not a universal communication law." }
  ],
  glossary: [
    { term: "BLUF", def: "Bottom Line Up Front — leading with the conclusion." },
    { term: "Ethos", def: "Credibility / character of the speaker." },
    { term: "Pathos", def: "Emotional resonance in an argument." },
    { term: "Logos", def: "Logic / evidence in an argument." },
    { term: "Pyramid principle", def: "Minto's top-down structuring of arguments." },
    { term: "SUCCESs", def: "Heath brothers' framework for sticky ideas: Simple, Unexpected, Concrete, Credible, Emotional, Story." },
    { term: "Hero's journey", def: "Campbell's universal story structure (setup → call → trial → return)." },
    { term: "Curse of knowledge", def: "Inability to remember not-knowing once you know." }
  ]
};

export default d;
