import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "communication",
  icon: "🎤",
  hue: "#fbbf24",
  category: "People & Influence",
  name: "Communication & Storytelling",
  tagline: "Make ideas land — and stick",

  basics: "Communication is the quiet work of getting an idea out of your head, accurately and durably, into someone else's. The hard part isn't being right. The hard part is being remembered. Most good ideas die not because they were wrong, but because they were too long, too abstract, told with no story, or buried somewhere on slide 47. Fix three things — structure, specifics, and stakes — and you'll suddenly notice your ideas getting picked up, agreed to, and repeated back to you by people who heard them once.",
  whyItMatters: [
    "Your ideas get chosen over someone else's, even when theirs are technically equal.",
    "You stop having to repeat yourself in every meeting because what you said the first time actually landed.",
    "The emails, docs, and decks you send get acted on instead of skimmed and forgotten.",
    "Your work survives the hallway — meaning people can describe it to someone else without you in the room."
  ],
  realWorldExample: "Aristotle, 2,400 years ago, said all persuasion comes down to three things: ethos (who you are), pathos (what they feel), and logos (what's true). Every TED talk that's gone viral in the last decade does the same thing. The host introduces the speaker (ethos — \"and tonight, the woman who…\"). The speaker opens with a story that makes you feel something (pathos). Then somewhere in the middle, the actual point arrives, clean and short, with one piece of evidence (logos). 18 minutes later, the audience can repeat the point to a friend. That's what \"landing\" looks like. The technology changed; the structure didn't.",

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
    { t: "Ethos · Pathos · Logos",                   short: "Credibility, emotion, logic. Use all three — and most people use only logic.",                                                                                                                deep: "Aristotle's diagnosis from 2,400 years ago is uncomfortably current. Most people, when trying to convince someone, reach straight for facts: more data, more bullet points, more slides. That's logos alone — and it's the weakest single mode. The full picture also needs ethos (who you are, why you should be trusted on this) and pathos (why it matters right now, emotionally). A pitch with all three lands. A pitch with only logos bounces. Notice this in any meeting where the side with worse data won the room — they probably brought more ethos and pathos to the table.",                                                                                                                                                                                                                                                                              status: "framework", reflect: "Pick your last big pitch or email. Where are ethos, pathos, and logos in it? Which is missing?" },
    { t: "BLUF — Bottom Line Up Front",              short: "Lead with the conclusion. Then defend it.",                                                                                                                                                  deep: "McKinsey consultants and the military both arrived at the same idea: busy readers stop after the first sentence. So make that sentence carry the message. The instinct most of us have is to build to the conclusion — set context, walk through the analysis, then reveal the answer at the end. That's fine when you're telling a story. It's a disaster when you're delivering information to someone who'll read line one and then skim. Put the answer in line one. Defend it underneath. The reader who skims still leaves with the right takeaway. The reader who reads carefully gets the defence. Everyone wins.",                                                                                                                                                                                                                                                  status: "framework", reflect: "Open the last long email you sent. Where's the actual bottom line in it? If it isn't in the first sentence, what would change if you moved it there?" },
    { t: "Specifics beat abstractions",              short: "\"Fast\" is forgettable. \"0–60 in 3 seconds\" sticks.",                                                                                                                                      deep: "Your brain is built to hold pictures, not categories. \"Fast,\" \"helpful,\" \"innovative\" — these are categories. They evaporate the moment you read them. \"0–60 in 3 seconds,\" \"replied within 4 minutes,\" \"the orange one with the broken zip\" — these are pictures. The Heath brothers (Made to Stick) call this concreteness, and it's one of the strongest single moves a writer can make. Look at your last paragraph. Underline every vague word. Replace each with a specific number, a real scene, a named example. The paragraph stops being something to skim and starts being something to remember.",                                                                                                                                                                                                                                                  status: "settled",   reflect: "Take one sentence of yours and replace every abstraction with a specific. Read it back. Different paragraph?" },
    { t: "Story structure, weeknight version",       short: "Setup → trouble → choice → consequence. Most updates should follow this shape.",                                                                                                              deep: "Joseph Campbell's hero's journey is the heavy-cake version of story — the one with twelve stages and a refusal of the call. The weeknight version, the one you can actually use in a project update or a pitch, is much smaller: \"here's how things were, then something broke, here's the choice we made, here's what happened.\" Almost any work update can be told this way. The brain is genuinely built to remember story-shaped information much better than bullet-shaped information. Try it in your next status email — the same content, told as a tiny story, gets remembered and forwarded. The bulleted version gets archived.",                                                                                                                                                                                                                              status: "framework", reflect: "Take your most recent project update. Could you re-tell it as setup → trouble → choice → consequence in 60 seconds?" },
    { t: "Audience tailoring",                       short: "Same idea, different audiences, different starting points.",                                                                                                                                  deep: "A board of investors hears the same product update very differently from the engineering team that built it. The board wants the metric, the engineer wants the constraint, the customer wants the benefit, the journalist wants the story. Skilled communicators map who they're talking to and start there — not where their own thinking ended. Beginners write for themselves. Pros write for the specific person on the other side, in language that person already uses. The same idea, told to a CFO and to a designer, should be almost two different paragraphs.",                                                                                                                                                                                                                                                                                              status: "settled",   reflect: "Take a recent message you sent. How would you rewrite it if the audience knew half as much? Twice as much?" },
    { t: "Show, don't tell",                         short: "Give them the evidence; let them draw the conclusion.",                                                                                                                                       deep: "\"She was angry\" is telling. \"She slammed the door so hard the photo frame fell off the wall\" is showing. The second sentence does more work because the reader does part of it — and what readers conclude for themselves, they remember and own. Storytellers, journalists, lawyers all live by this rule. Most business writing breaks it constantly — it asserts the conclusion (\"this was a breakthrough product launch\") instead of giving the evidence (\"we hit 50,000 users in 11 days; the previous record was 40,000 in 60\"). Trust the reader to land where the evidence points. They'll trust you more for it.",                                                                                                                                                                                                                                            status: "framework", reflect: "Find one 'told' sentence in your writing. Show it instead. Read both. Which lands harder?" },
    { t: "The curse of knowledge",                   short: "Once you know something, you almost can't remember not knowing it. This is why experts explain badly.",                                                                                       deep: "The Heath brothers' clearest single observation. The moment you've understood something, the version of you that didn't understand it disappears. So you forget what bits were confusing, you skip the foundation a beginner would need, you use jargon that doesn't feel like jargon to you anymore. Every expert who's ever been told \"can you explain that more simply?\" has been bitten by this. The only honest cure is regular blank-slate feedback — let someone outside the field read or hear your explanation and tell you the first place they got lost. That place is the curse, made visible.",                                                                                                                                                                                                                                                              status: "settled",   reflect: "Show your last technical explanation to someone outside the field. Where do they trip? That's the curse, in your work." },
    { t: "Brevity",                                  short: "Cut everything that isn't earning its place. Most drafts are 30% too long.",                                                                                                                  deep: "Almost every first draft has a quiet 30% of words that aren't doing real work — qualifiers, throat-clearing openers, restatements of what you already said. Strunk and White, Zinsser, Pinker: all of them say roughly the same thing — the second draft is where writing actually happens. The cut isn't about being curt; it's about respecting the reader's time. The same idea, said in fewer words, is also harder to misread. Try this on anything long you wrote recently — cut 30%, no exceptions. Almost always, the shorter version is also the clearer one.",                                                                                                                                                                                                                                                                                              status: "settled",   reflect: "Cut your last long message by 30%. What was lost? What was gained?" }
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
    { rank: "Novice",       focus: "Start putting the conclusion first",                  do: "Read Made to Stick and On Writing Well. Practise BLUF on every email for a week — put the actual point in line one, defend it below.",                                                                                                                                                                  milestone: "Every email you send opens with the bottom line. The replies you get are faster and shorter.",                                                  time: "~2 weeks" },
    { rank: "Apprentice",   focus: "Edit ruthlessly",                                       do: "Cut every draft by 30%. Replace at least three abstractions with specifics per page. Stop using \"very,\" \"really,\" \"basically,\" \"obviously\" — they're padding.",                                                                                                                                  milestone: "Your first drafts come out tighter than other people's third drafts.",                                                                          time: "~1 month" },
    { rank: "Practitioner", focus: "Tell stories instead of bullet lists",                  do: "For your next five project updates, use setup → trouble → choice → consequence instead of bullets. Watch what gets remembered and forwarded.",                                                                                                                                                            milestone: "Updates you send don't just get read — they get retold to other people without you in the room.",                                              time: "~2–3 months" },
    { rank: "Specialist",   focus: "Get comfortable on your feet",                          do: "Give five short talks — internal demos, lunch-and-learns, Toastmasters, whatever you can find. Record each one. Watch it back. Pick one specific thing to fix next time.",                                                                                                                                milestone: "You can hold a room of 30 strangers confidently for 10 minutes, without notes, without losing them.",                                          time: "~6 months" },
    { rank: "Expert",       focus: "Lead by writing",                                       do: "Run things via written documents the way Amazon does — long-form, considered, circulated before meetings. Make decisions by writing them down first.",                                                                                                                                                    milestone: "Your written docs move projects forward without you needing to attend the meetings about them.",                                              time: "~1 year" },
    { rank: "Master",       focus: "Make other people's writing better",                    do: "Edit other people's work seriously. Teach the craft to juniors. Watching others' drafts surface the same ten mistakes will sharpen your own.",                                                                                                                                                              milestone: "The people you mentor write noticeably better than the people you don't.",                                                                      time: "~2 years+" },
    { rank: "Grandmaster",  focus: "Shape how the field communicates",                       do: "Books, essays, courses that influence how other practitioners write and think.",                                                                                                                                                                                                                            milestone: "Other writers quote your work to make their case.",                                                                                              time: "ongoing" }
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
