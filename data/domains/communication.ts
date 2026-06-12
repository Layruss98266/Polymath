import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "communication",
 icon: "🎤",
 hue: "#fbbf24",
 category: "People & Influence",
 name: "Communication & Storytelling",
 tagline: "Make ideas land, and stick",

 basics: "Communication is the quiet work of getting an idea out of your head, accurately and durably, into someone else's. The hard part isn't being right. The hard part is being remembered. Most good ideas die not because they were wrong, but because they were too long, too abstract, told with no story, or buried somewhere on slide 47. Fix three things, structure, specifics, and stakes, and you'll suddenly notice your ideas getting picked up, agreed to, and repeated back to you by people who heard them once.",
 whyItMatters: [
  "Your ideas get chosen over someone else's, even when theirs are technically equal.",
  "You stop having to repeat yourself in every meeting because what you said the first time actually landed.",
  "The emails, docs, and decks you send get acted on instead of skimmed and forgotten.",
  "Your work survives the hallway, meaning people can describe it to someone else without you in the room."
 ],
 realWorldExample: "Aristotle, 2,400 years ago, said all persuasion comes down to three things: ethos (who you are), pathos (what they feel), and logos (what's true). Every TED talk that's gone viral in the last decade does the same thing. The host introduces the speaker (ethos, \"and tonight, the woman who…\"). The speaker opens with a story that makes you feel something (pathos). Then somewhere in the middle, the actual point arrives, clean and short, with one piece of evidence (logos). 18 minutes later, the audience can repeat the point to a friend. That's what \"landing\" looks like. The technology changed; the structure didn't.",

 mentors: [
  { name: "Aristotle", for: "ethos/pathos/logos", work: "Rhetoric" },
  { name: "Chip & Dan Heath", for: "the SUCCESs framework, why some ideas stick", work: "Made to Stick (2007)" },
  { name: "Nancy Duarte", for: "structure for presentations + slides", work: "Resonate (2010)" },
  { name: "Joseph Campbell", for: "the hero's journey, story structure", work: "The Hero with a Thousand Faces (1949)" },
  { name: "William Zinsser", for: "clear non-fiction writing", work: "On Writing Well (1976)" }
 ],

 diagrams: [
  { kind: "pyramid", title: "BLUF / Pyramid Principle", caption: "Bottom-Line-Up-Front, top-down structure used in McKinsey-style writing.", data: { levels: ["Detail", "Supporting", "Argument", "Bottom Line"] } },
  { kind: "cycle", title: "Communication loop", caption: "Sender → message → receiver → feedback.", data: { nodes: ["Sender", "Message", "Receiver", "Feedback"] } }
 ],

 synthesis: [
  { concept: "Specificity beats abstraction", linksTo: "marketing", note: "The same reason a positioning statement names a target." },
  { concept: "Story structure", linksTo: "negotiation", note: "Framing in negotiation is the same skill as setting up a story." }
 ],

 subdomains: [
  { id: "foundations", name: "Foundations", intro: "The basic mechanics of getting an idea from your head into someone else's intact. Most miscommunication starts at this layer, not in the words.", capabilities: ["State the one thing you want the reader to do after they finish.", "Listen long enough to repeat back the other person's point in their words.", "Drop jargon when the audience isn't already inside your field."] },
  { id: "structure", name: "Structure and Story", intro: "How you order information so the listener stays with you. Lead with the answer, then back it up; humans follow stories better than lists.", capabilities: ["Open any update with the bottom line, then the supporting detail.", "Frame a proposal as a short before-and-after story.", "Cut any paragraph that doesn't move the reader toward your point."] },
  { id: "audience", name: "Audience and Tailoring", intro: "Shaping the same message differently for an exec, a peer, or a beginner. The content stays true; the angle and depth change.", capabilities: ["Rewrite the same one-pager for three audiences in under 30 minutes.", "Predict the first question your reader will ask and answer it upfront.", "Match formality, length, and channel to what the audience actually uses."] },
  { id: "clarity", name: "Clarity and Brevity", intro: "Saying more with fewer words, in plain language. Short sentences, concrete nouns, and active verbs do most of the work.", capabilities: ["Cut a draft by 30 percent without losing meaning.", "Replace any abstract noun with a verb whenever possible.", "Read your draft aloud and fix every sentence you stumble on."] },
 ],

 concepts: [
  { t: "Ethos · Pathos · Logos",          short: "Credibility, emotion, logic. Use all three, and most people use only logic.",                                                        deep: "Aristotle's diagnosis from 2,400 years ago is uncomfortably current. Most people, when trying to convince someone, reach straight for facts: more data, more bullet points, more slides. That's logos alone, and it's the weakest single mode. The full picture also needs ethos (who you are, why you should be trusted on this) and pathos (why it matters right now, emotionally). A pitch with all three lands. A pitch with only logos bounces. Notice this in any meeting where the side with worse data won the room, they probably brought more ethos and pathos to the table.",                                                                                                                                       status: "framework", reflect: "Pick your last big pitch or email. Where are ethos, pathos, and logos in it? Which is missing?" },
  { t: "BLUF, Bottom Line Up Front",       short: "Lead with the conclusion. Then defend it.",                                                                         deep: "McKinsey consultants and the military both arrived at the same idea: busy readers stop after the first sentence. So make that sentence carry the message. The instinct most of us have is to build to the conclusion, set context, walk through the analysis, then reveal the answer at the end. That's fine when you're telling a story. It's a disaster when you're delivering information to someone who'll read line one and then skim. Put the answer in line one. Defend it underneath. The reader who skims still leaves with the right takeaway. The reader who reads carefully gets the defence. Everyone wins.",                                                                                                                         status: "framework", reflect: "Open the last long email you sent. Where's the actual bottom line in it? If it isn't in the first sentence, what would change if you moved it there?" },
  { t: "Specifics beat abstractions",       short: "\"Fast\" is forgettable. \"0-60 in 3 seconds\" sticks.",                                                                   deep: "Your brain is built to hold pictures, not categories. \"Fast,\" \"helpful,\" \"innovative\", these are categories. They evaporate the moment you read them. \"0-60 in 3 seconds,\" \"replied within 4 minutes,\" \"the orange one with the broken zip\", these are pictures. The Heath brothers (Made to Stick) call this concreteness, and it's one of the strongest single moves a writer can make. Look at your last paragraph. Underline every vague word. Replace each with a specific number, a real scene, a named example. The paragraph stops being something to skim and starts being something to remember.",                                                                                                                         status: "settled",  reflect: "Take one sentence of yours and replace every abstraction with a specific. Read it back. Different paragraph?" },
  { t: "Story structure, weeknight version",    short: "Setup → trouble → choice → consequence. Most updates should follow this shape.",                                                       deep: "Joseph Campbell's hero's journey is the heavy-cake version of story, the one with twelve stages and a refusal of the call. The weeknight version, the one you can actually use in a project update or a pitch, is much smaller: \"here's how things were, then something broke, here's the choice we made, here's what happened.\" Almost any work update can be told this way. The brain is genuinely built to remember story-shaped information much better than bullet-shaped information. Try it in your next status email, the same content, told as a tiny story, gets remembered and forwarded. The bulleted version gets archived.",                                                                                                               status: "framework", reflect: "Take your most recent project update. Could you re-tell it as setup → trouble → choice → consequence in 60 seconds?" },
  { t: "Audience tailoring",            short: "Same idea, different audiences, different starting points.",                                                                 deep: "A board of investors hears the same product update very differently from the engineering team that built it. The board wants the metric, the engineer wants the constraint, the customer wants the benefit, the journalist wants the story. Skilled communicators map who they're talking to and start there, not where their own thinking ended. Beginners write for themselves. Pros write for the specific person on the other side, in language that person already uses. The same idea, told to a CFO and to a designer, should be almost two different paragraphs.",                                                                                                                                               status: "settled",  reflect: "Take a recent message you sent. How would you rewrite it if the audience knew half as much? Twice as much?" },
  { t: "Show, don't tell",             short: "Give them the evidence; let them draw the conclusion.",                                                                    deep: "\"She was angry\" is telling. \"She slammed the door so hard the photo frame fell off the wall\" is showing. The second sentence does more work because the reader does part of it, and what readers conclude for themselves, they remember and own. Storytellers, journalists, lawyers all live by this rule. Most business writing breaks it constantly, it asserts the conclusion (\"this was a breakthrough product launch\") instead of giving the evidence (\"we hit 50,000 users in 11 days; the previous record was 40,000 in 60\"). Trust the reader to land where the evidence points. They'll trust you more for it.",                                                                                                                      status: "framework", reflect: "Find one 'told' sentence in your writing. Show it instead. Read both. Which lands harder?" },
  { t: "The curse of knowledge",          short: "Once you know something, you almost can't remember not knowing it. This is why experts explain badly.",                                            deep: "The Heath brothers' clearest single observation. The moment you've understood something, the version of you that didn't understand it disappears. So you forget what bits were confusing, you skip the foundation a beginner would need, you use jargon that doesn't feel like jargon to you anymore. Every expert who's ever been told \"can you explain that more simply?\" has been bitten by this. The only honest cure is regular blank-slate feedback, let someone outside the field read or hear your explanation and tell you the first place they got lost. That place is the curse, made visible.",                                                                                                                               status: "settled",  reflect: "Show your last technical explanation to someone outside the field. Where do they trip? That's the curse, in your work." },
  { t: "Brevity",                 short: "Cut everything that isn't earning its place. Most drafts are 30% too long.",                                                         deep: "Almost every first draft has a quiet 30% of words that aren't doing real work, qualifiers, throat-clearing openers, restatements of what you already said. Strunk and White, Zinsser, Pinker: all of them say roughly the same thing, the second draft is where writing actually happens. The cut isn't about being curt; it's about respecting the reader's time. The same idea, said in fewer words, is also harder to misread. Try this on anything long you wrote recently, cut 30%, no exceptions. Almost always, the shorter version is also the clearer one.",                                                                                                                                               status: "settled",  reflect: "Cut your last long message by 30%. What was lost? What was gained?" },
  {
   t: "Active listening",
   subdomain: "foundations",
   definition: "Listening with the goal of understanding the speaker rather than preparing your reply.",
   short: "Most people listen to respond. Listen to understand instead.",
   deep: "Active listening is older than every framework that wraps it, Carl Rogers named it in the 1950s. The core move is to slow down, stop drafting your rebuttal while the other person is still talking, and reflect back what you heard before adding your own view. \"So what you're saying is, the deadline isn't the real problem, the scope keeps changing.\" That sentence does three things at once: it proves you were paying attention, it lets the speaker correct you cheaply, and it forces you to compress what they said, which usually exposes the real point. Try it for a week in any tense conversation. You will be surprised how often the other person, once they feel heard, drops the defensive tone and starts solving the problem with you.",
   generic: "Imagine someone tells you a long story and at the end you say \"so basically your sister borrowed your charger again and didn't return it, right?\" They feel heard, and you make sure you got it right. That is active listening. Most of us instead nod while planning what we want to say next, and miss half of what was actually said.",
   expert: "Rooted in Rogerian client-centred therapy (Rogers, 1957) and later operationalised by Gordon's Parent Effectiveness Training and the Harvard Negotiation Project. Distinguish from reflective listening (mechanical paraphrase) by the additional inference of underlying need, similar to Voss's labelling. Evidence base is strong for therapeutic and conflict-resolution outcomes; weaker for pure information transfer where structured note-taking dominates.",
   status: "settled",
   reflect: "In your last difficult conversation, were you listening to understand, or rehearsing your reply while they spoke?",
   conceptQuiz: [
    {
     q: "Active listening differs from ordinary listening primarily because…",
     options: [
      { text: "The listener checks understanding by reflecting the message back.", correct: true },
      { text: "The listener takes detailed written notes.", misconception: "Notes can help, but the defining move is verbal reflection back to the speaker." },
      { text: "The listener stays completely silent.", misconception: "Silence alone does not prove or build understanding." },
      { text: "The listener asks more aggressive questions.", misconception: "Aggressive probing tends to shut speakers down rather than open them up." }
     ],
     why: "Reflecting the content back is the move that verifies understanding and signals it to the speaker."
    },
    {
     q: "Which of these is the clearest active-listening response?",
     options: [
      { text: "So the deadline isn't the real problem, the scope keeps moving. Is that fair?", correct: true },
      { text: "Right, but here is what I would do instead.", misconception: "Jumping to your own advice skips the verification step." },
      { text: "Why do you always complain about deadlines?", misconception: "Accusatory framing kills openness rather than building it." },
      { text: "Okay, noted. Next item on the agenda.", misconception: "Acknowledging receipt is not the same as reflecting understanding." }
     ],
     why: "Reflecting the underlying concern back and inviting a correction is the signature move."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Reflect once",      d: "In one conversation today, reflect what you heard back in one sentence before replying.", xp: 10 },
    { level: "easy",     t: "Ban inner rehearsal", d: "For a full meeting, refuse to draft your reply while others speak. Notice the difference.", xp: 20 },
    { level: "advanced", t: "Defuse a real conflict", d: "In a tense conversation, reflect the other side's view fully before stating yours.", xp: 40 }
   ],
   diagram: { kind: "cycle", title: "Active listening loop", caption: "A loop that keeps you in the speaker's frame, not your own.", data: { stages: ["Attend (eyes, body, silence)", "Hear without rehearsing", "Reflect what you heard", "Ask one clarifying question", "Confirm before replying"] } }
  },
  {
   t: "Steel-manning",
   subdomain: "foundations",
   definition: "Restating the opposing argument in its strongest possible form before responding to it.",
   short: "Argue against the best version of their idea, not the silly one.",
   deep: "A straw man is the cartoon version of an opposing argument, easy to knock over and dishonest. A steel man is the opposite, the strongest possible reading of what the other side is saying, often stronger than they made it themselves. Steel-manning forces you to actually understand the view before you reject it. It also disarms the conversation: when the other side hears their position said back to them fairly, they stop bracing for attack and start engaging. Daniel Dennett's rules for criticism start here. The discipline is uncomfortable at first because it admits the other side has a point. That is the entire point. If your argument only beats the cartoon version, your argument is not actually strong yet.",
   generic: "Picture an argument with your sibling about chores. The lazy version is to mock their excuse and laugh it off. The steel-man version is to say, out loud, the best reason they could possibly have, then respond to that. It is harder, it is more honest, and it usually ends the fight faster.",
   expert: "Formalised by Daniel Dennett's four-step rule (Intuition Pumps, 2013): restate the opposing view so clearly that the opponent says \"thanks, I wish I had put it that way.\" Linked to ideological Turing test (Bryan Caplan) and to charitable interpretation in analytic philosophy. Empirically reduces reactance and improves persuasion outcomes in deliberative settings; underused because it is cognitively expensive and socially risky.",
   status: "framework",
   reflect: "In your last disagreement, could you have stated the other side's view so well that they would have said \"yes, exactly\"? If not, you were arguing with a straw man.",
   conceptQuiz: [
    {
     q: "What is a steel man?",
     options: [
      { text: "The strongest possible version of an opposing argument, stated honestly.", correct: true },
      { text: "An especially harsh attack on the other side.", misconception: "Aggression is closer to a straw man than to a steel man." },
      { text: "Refusing to engage with the other side at all.", misconception: "Steel-manning requires deep engagement, not silence." },
      { text: "Repeating your own argument more forcefully.", misconception: "Restating your own view is not the same as restating theirs." }
     ],
     why: "The point is to argue against the strongest, fairest version of the opposing view."
    },
    {
     q: "Why does steel-manning tend to defuse conversations?",
     options: [
      { text: "The other side hears their view stated fairly and stops bracing for attack.", correct: true },
      { text: "It tricks the other side into agreeing with you.", misconception: "It is not a trick; the openness is real, not strategic theatre." },
      { text: "It avoids the disagreement entirely.", misconception: "Steel-manning engages disagreement directly; it does not dodge it." },
      { text: "It bores them into silence.", misconception: "Engagement increases, not decreases, with a strong restatement." }
     ],
     why: "Hearing your position said back fairly lowers defensive posture and opens dialogue."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write the steel man",  d: "Write the strongest version of a view you disagree with in three sentences.", xp: 10 },
    { level: "easy",     t: "Test it out loud",    d: "Restate someone's view back to them and ask if you got the strong version right.", xp: 20 },
    { level: "advanced", t: "Steel man in public",  d: "In a real debate, open by stating the other side's best argument before your own.", xp: 40 }
   ]
  },
  {
   t: "Pyramid principle (Minto)",
   subdomain: "structure",
   definition: "A top-down structure where the main conclusion sits at the top, supported by grouped, mutually exclusive arguments beneath it.",
   short: "Start with the answer. Group the reasons. Drill down only when asked.",
   deep: "Barbara Minto formalised the pyramid principle at McKinsey in the 1960s, and it remains the backbone of how consultants, analysts, and serious operators write. The structure is simple to describe and hard to do. At the top of the page sits one sentence, the governing claim. Beneath it sit two to four reasons that support that claim, grouped so they are mutually exclusive and collectively exhaustive. Beneath each reason sits the evidence. A reader who stops after the first sentence still leaves with the right takeaway. A reader who reads further gets the structured defence in the order their questions naturally arise. The discipline is hardest at the planning stage, you have to know your own conclusion before you start writing, which most drafts quietly avoid.",
   generic: "Picture telling a friend why you want to move flats. You could ramble through five complaints in any order, or you could say, top of the pyramid, that the current flat is no longer worth its rent. Then group three reasons underneath, cost, commute, noise. Each reason has its own evidence. They follow the headline rather than wander toward it.",
   expert: "Minto (1987) draws on rhetorical inheritance from classical syllogism and the journalistic inverted pyramid. The MECE rule (mutually exclusive, collectively exhaustive) governs grouping. Pair with SCQA (Situation, Complication, Question, Answer) at the introduction level for executive memos. Empirically, top-down structures outperform narrative structures for retention in time-pressured readers, see Doumont (2009) on professional communication.",
   status: "framework",
   reflect: "Open the last memo you wrote. Could you draw it as a pyramid in one minute? If not, the structure is hiding from you and your reader.",
   conceptQuiz: [
    {
     q: "At the top of a Minto pyramid sits…",
     options: [
      { text: "A single governing claim that answers the reader's question.", correct: true },
      { text: "A list of every piece of evidence you have.", misconception: "Evidence sits at the bottom of the pyramid, not the top." },
      { text: "A neutral background paragraph.", misconception: "Background is part of the situation setup, not the apex." },
      { text: "Open questions for the reader to answer.", misconception: "The pyramid delivers answers, not questions." }
     ],
     why: "The apex is the one sentence the reader should remember if they read nothing else."
    },
    {
     q: "MECE grouping requires that supporting arguments be…",
     options: [
      { text: "Mutually exclusive and collectively exhaustive.", correct: true },
      { text: "Ranked by emotional weight.", misconception: "Emotional ranking belongs to story structure, not pyramid logic." },
      { text: "Limited to exactly two reasons.", misconception: "Two to four is typical, but the rule is non-overlap and completeness, not count." },
      { text: "Listed in the order the writer thought of them.", misconception: "Order should follow reader logic, not author chronology." }
     ],
     why: "MECE is the structural rule that prevents overlap and gaps in the supporting layer."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Draw the pyramid",     d: "Sketch your last memo as a pyramid with one apex sentence and two or three grouped reasons.", xp: 10 },
    { level: "easy",     t: "Rewrite top down",     d: "Rewrite a recent long email so the conclusion sits in line one and the reasons follow in MECE groups.", xp: 20 },
    { level: "advanced", t: "Ship a Minto memo",    d: "Write a one-page decision memo using strict pyramid structure and circulate it before the next meeting.", xp: 40 }
   ],
   diagram: { kind: "pyramid", title: "Minto pyramid", caption: "Answer at the top; MECE reasons below; evidence at the base.", data: { levels: ["Governing claim (one sentence)", "Two to four MECE reasons", "Supporting evidence and data"] } }
  },
  {
   t: "Story spine (Kenn Adams)",
   subdomain: "structure",
   definition: "A simple eight-beat scaffold for any story: once upon a time, every day, until one day, because of that, because of that, until finally, and ever since then.",
   short: "Eight short beats that turn any update into a story your audience can retell.",
   deep: "Kenn Adams developed the story spine in the late 1980s for improv theatre, and Pixar's story team adopted it as a planning tool. The eight beats are: Once upon a time. Every day. Until one day. Because of that. Because of that. Because of that. Until finally. And ever since then. The spine forces you to name a steady state, a disruption, a chain of consequences, and a new equilibrium. It works for fairy tales, product launches, post-mortems, and onboarding stories. It is not a creative cage. It is a structural minimum that catches the missing beat in most updates, usually the because of that chain, where speakers tend to jump from problem straight to resolution without showing the mechanism.",
   generic: "Imagine telling a friend about a small adventure. You could just say what happened, or you could walk them through it: things were normal, then something changed, that change caused this, which caused that, and now things are different. They will follow it and remember it. Most rambling updates are missing one of these beats.",
   expert: "Adams (2007) systematised the spine from improv exercises; Pixar's Emma Coats codified it within their 22 rules of storytelling. It maps cleanly to the Freytag triangle (exposition, rising action, climax, falling action, resolution) and to the compressed three-act structure. Compared to the full hero's journey (Campbell, 1949), the spine is lighter weight and better suited to non-fiction operational storytelling where heroic transformation is overkill.",
   status: "framework",
   reflect: "Take your most recent project update. Can you tell it in the eight beats of the story spine without inventing anything? If a beat is missing, that is usually the gap your audience felt.",
   conceptQuiz: [
    {
     q: "The story spine's because of that beats exist to…",
     options: [
      { text: "Show the chain of consequences that link disruption to resolution.", correct: true },
      { text: "Pad the story with extra detail.", misconception: "The beats are mechanism, not filler." },
      { text: "Provide optional commentary the speaker can skip.", misconception: "Skipping the chain is exactly the failure mode the spine fixes." },
      { text: "Repeat the once upon a time setup.", misconception: "Setup belongs in the first beats, not the chain." }
     ],
     why: "Without the consequence chain, listeners jump from problem to outcome with no understanding of how."
    },
    {
     q: "Compared to the hero's journey, the story spine is…",
     options: [
      { text: "Lighter weight and better suited to short operational updates.", correct: true },
      { text: "More elaborate and only used in epic fiction.", misconception: "The spine is intentionally smaller than Campbell's journey." },
      { text: "Identical in structure with different names.", misconception: "The spine compresses many of Campbell's stages into one chain." },
      { text: "Only useful for children's stories.", misconception: "Pixar and corporate communicators use it for adult audiences regularly." }
     ],
     why: "The spine is the compressed scaffold, the hero's journey is the heavyweight version for transformation arcs."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Fill the eight beats",  d: "Write your most recent project update in the eight spine beats, one sentence per beat.", xp: 10 },
    { level: "easy",     t: "Tell it out loud",    d: "Verbally walk a colleague through a recent story using the spine, then ask which beat felt weakest.", xp: 20 },
    { level: "advanced", t: "Open a talk with it",  d: "Use the story spine to open a five-minute talk or pitch and watch which beats land hardest.", xp: 40 }
   ]
  },
  {
   t: "Inverted pyramid",
   subdomain: "structure",
   definition: "A journalistic structure that leads with the most critical news first, then layers supporting detail and background in descending order of importance.",
   short: "Most important news in line one. Background last. If the reader stops anywhere, they still got the point.",
   deep: "The inverted pyramid emerged in nineteenth-century journalism, partly because telegraph lines were unreliable and editors needed stories that still made sense if the wire cut off mid-transmission. The structure stuck because it matches how readers actually scan: who, what, where, when, why in the lead, then the second-most-important details, then context and quotes, then background trivia. A reader who stops after the first sentence still leaves with the news. A reader who stops after the first paragraph leaves with the news plus the key facts. It is closely related to BLUF and the Minto pyramid, but it is specifically a news structure, not an argument structure. The discipline forces the writer to decide, before drafting, what the single most important thing actually is. That decision is the hard part.",
   generic: "Imagine telling a friend about a fire on your street. You do not start with where you were that morning, what you had for breakfast, or how you heard the sirens. You say, fire on our street, two houses damaged, no one hurt. Then you fill in the rest. That is the inverted pyramid in everyday speech.",
   expert: "Standardised in late nineteenth-century American journalism and codified in twentieth-century AP and Reuters style guides. The five Ws plus H sit in the lead paragraph; subsequent paragraphs add detail in descending priority. Distinct from the Minto pyramid (argument structure with MECE supports) and BLUF (military and consulting brevity convention), though all three share the lead-with-the-conclusion principle. Failure modes: burying the lead, front-loading background, or treating chronology as importance.",
   status: "settled",
   reflect: "Take your last news-style update or announcement. If the reader stops after sentence one, did they get the actual news, or did they get the setup?",
   conceptQuiz: [
    {
     q: "The inverted pyramid puts at the top of the story…",
     options: [
      { text: "The most critical news, often answering who, what, where, when, why.", correct: true },
      { text: "Background context the reader needs to understand the story.", misconception: "Background goes at the bottom of an inverted pyramid, not the top." },
      { text: "A chronological account starting with the earliest event.", misconception: "Chronology is not importance; the pyramid sorts by news value." },
      { text: "Quotes from every person involved.", misconception: "Quotes typically come after the lead, ranked by importance." }
     ],
     why: "The structure exists so readers who stop after one sentence still get the news."
    },
    {
     q: "The inverted pyramid emerged partly because…",
     options: [
      { text: "Telegraph lines were unreliable and stories had to make sense if cut off.", correct: true },
      { text: "Editors wanted to keep the punchline secret until the end.", misconception: "That is the opposite of the inverted pyramid; it withholds nothing." },
      { text: "Readers preferred fiction-style narrative arcs in news.", misconception: "News structure diverged from fiction precisely to avoid this." },
      { text: "Printing presses required a triangular column layout.", misconception: "The metaphor is structural, not literal page geometry." }
     ],
     why: "Telegraph reliability and reader scanning habits both pushed the lead to the top of the story."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write the lead",         d: "Take a recent announcement and rewrite it so sentence one carries the actual news in 25 words or fewer.", xp: 10 },
    { level: "easy",     t: "Rank the rest",          d: "List the remaining facts and rank them by importance, then write the story top to bottom in that order.", xp: 20 },
    { level: "advanced", t: "Ship a wire-style post", d: "Publish a real update using strict inverted-pyramid structure and ask three readers what they remembered after one paragraph.", xp: 40 }
   ]
  },
  {
   t: "Reader maturity",
   subdomain: "audience",
   definition: "The degree of prior knowledge and motivation a reader brings, which determines how much background, definition, and signposting the writer must provide.",
   short: "Write to the reader you actually have, not the one you wish you had.",
   deep: "Reader maturity is the technical writer's version of audience tailoring, sharpened into a working dial. A junior engineer reading her first kernel patch is a low-maturity reader for that domain, she needs background, defined terms, and a clear path through. A senior architect reviewing the same patch is high-maturity, she wants the diff and the rationale and nothing else. Writing for the wrong maturity wastes both sides' time. JoAnn Hackos and the technical-writing tradition recommend explicitly naming the assumed reader at the top of any long document, so the writer can hold a consistent altitude throughout. The most common failure is writing for yourself, which by definition is the highest-maturity reader the document will ever see.",
   generic: "Imagine giving directions to your house. If your friend has visited many times, you just say turn at the post office. If a delivery driver has never been, you spell out every turn and landmark. The destination is the same. The maturity of the listener changes how much you say.",
   expert: "Hackos and Redish (1998) formalise the reader analysis matrix across experience, subject expertise, task familiarity, and cultural distance. The DITA standard encodes audience metadata on each topic. Pair with the curse of knowledge: high-maturity authors writing for low-maturity readers under-provide context unless the assumed reader is named in writing. Failure modes: mixed-maturity documents that bore experts and confuse novices simultaneously, and the documentation anti-pattern of writing for the reader who would not need the document.",
   status: "framework",
   reflect: "For your last technical document, name the assumed reader in one sentence. Does the document hold that altitude all the way through, or does it drift?",
   conceptQuiz: [
    {
     q: "Reader maturity is best described as…",
     options: [
      { text: "The reader's prior knowledge and motivation in the document's domain.", correct: true },
      { text: "The reader's age in years.", misconception: "Chronological age is unrelated to domain maturity." },
      { text: "The number of pages the reader has read this week.", misconception: "Reading volume is not the maturity dimension." },
      { text: "The writer's level of experience.", misconception: "That is writer maturity, not reader maturity." }
     ],
     why: "Maturity is the reader's domain readiness, not a demographic."
    },
    {
     q: "The most common reader-maturity failure is…",
     options: [
      { text: "Writing for yourself, which is the highest-maturity reader the document will ever see.", correct: true },
      { text: "Adding too many diagrams.", misconception: "Diagrams help across maturities; they are not the failure mode." },
      { text: "Using bullet lists for steps.", misconception: "Lists are neutral; the issue is altitude, not format." },
      { text: "Capitalising headings.", misconception: "Typography choices are downstream of the structural issue." }
     ],
     why: "Author-as-reader writing under-provides context and over-uses jargon."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the reader",      d: "At the top of your next document, write one sentence stating the assumed reader's maturity.", xp: 10 },
    { level: "easy",     t: "Test the altitude",   d: "Ask a low-maturity and a high-maturity reader to read the same document and report where each got bored or lost.", xp: 20 },
    { level: "advanced", t: "Split the document",  d: "Take a mixed-maturity document and split it into a quick-start for low-maturity readers and a reference for high-maturity ones.", xp: 40 }
   ]
  },
  {
   t: "Active voice vs passive voice",
   subdomain: "clarity",
   definition: "Active voice names the actor and the action directly. Passive voice hides the actor behind the verb. Active is usually clearer; passive has narrow legitimate uses.",
   short: "Subject does verb to object. Passive hides the subject.",
   deep: "Active voice puts the actor in front of the verb. The developer shipped the patch. Passive voice flips it. The patch was shipped by the developer. The passive version is one word longer, and the actor can quietly disappear entirely. The patch was shipped, by whom, when, why. Bureaucracies love passive voice because it removes responsibility, mistakes were made is the canonical example. Good writers default to active, then switch to passive only when the object genuinely matters more than the actor (the law was passed in 1947) or when the actor is unknown or irrelevant. The discipline is to run a grep for was, were, been, being, by the and ask whether each instance earns its passivity.",
   generic: "Imagine telling a friend who broke the vase. Active voice says, my cousin broke the vase. Passive voice says, the vase was broken. Notice that the second sentence does not name the cousin at all. Sometimes you genuinely do not know who broke it. Most of the time you do, and active voice tells the truth faster.",
   expert: "Strunk and White's omit needless words pairs with Orwell's rule never use the passive where you can use the active. Pinker (2014) gives a more nuanced view: passive voice is appropriate when the patient is the topic or when the agent is unknown, generic, or strategically suppressed. Style guides at AP, Reuters, and most engineering teams default to active. Detection heuristic: forms of to be plus past participle plus an optional by phrase. Conversion rule: identify the actor, promote to subject, demote the patient.",
   status: "settled",
   reflect: "Open your last document and search for was, were, been. How many are honest passives, and how many are hiding the actor?",
   conceptQuiz: [
    {
     q: "Which sentence is active voice?",
     options: [
      { text: "The team shipped the feature on Friday.", correct: true },
      { text: "The feature was shipped by the team on Friday.", misconception: "That construction is passive; the patient sits in the subject position." },
      { text: "The feature got shipped on Friday.", misconception: "Get-passives are still passive in voice if not in form." },
      { text: "Shipping happened on Friday.", misconception: "Nominalisation hides the actor more than passive voice does." }
     ],
     why: "Active voice puts the actor in the subject slot."
    },
    {
     q: "When is passive voice legitimately the better choice?",
     options: [
      { text: "When the patient or topic matters more than the actor, or the actor is unknown.", correct: true },
      { text: "Whenever the sentence sounds more formal.", misconception: "Formality is style, not justification." },
      { text: "Whenever you want to avoid blame.", misconception: "Avoiding blame is the classic abuse, not a legitimate use." },
      { text: "Never; active is always correct.", misconception: "Overstated rule; passive has narrow legitimate uses." }
     ],
     why: "Passive is appropriate when the actor is unknown, generic, or genuinely less important than the patient."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the passives",     d: "Highlight every passive verb in your last document and tag each as earned or hiding.", xp: 10 },
    { level: "easy",     t: "Convert ten",            d: "Rewrite ten unearned passives as active sentences and read both versions out loud.", xp: 20 },
    { level: "advanced", t: "Ship an active draft",  d: "Edit a real document for active voice throughout, then test reading speed and comprehension with two readers.", xp: 40 }
   ]
  },
  {
   t: "SCQA framework (Minto)",
   subdomain: "structure",
   definition: "A four-beat introduction structure: Situation, Complication, Question, Answer. Opens any executive memo by orienting the reader before delivering the conclusion.",
   short: "Set the scene, name the trouble, ask the question, give the answer.",
   deep: "Barbara Minto's SCQA is the standard introduction structure inside the pyramid principle. Situation states the shared starting context that everyone agrees on. Complication names the change or problem that disrupts it. Question makes the reader's question explicit, what should we do, what does this mean, why now. Answer delivers your governing claim in one sentence, which then becomes the apex of the rest of the document. Done well, SCQA produces an opening paragraph that orients the reader, builds tension, and lands the conclusion in four sentences. A common failure is starting at Answer without the first three beats, which lands the conclusion in a vacuum the reader cannot yet feel the weight of. Another is over-elaborating Situation, which loses the reader before the complication arrives.",
   generic: "Imagine telling your parents you want to change careers. You could open with I want to quit, but they have no context for the decision yet. Instead, you say, I have been working at the bank for five years (situation). The hours have started costing me my health (complication). The question is what to do about that (question). I have decided to retrain as a teacher (answer). The same news lands very differently.",
   expert: "Minto (1987) embeds SCQA inside the pyramid principle as the introduction layer. Maps cleanly to journalism's nut graf, screenwriting's inciting incident, and the academic abstract's background-problem-question-contribution sequence. Used heavily in McKinsey, BCG, and Bain executive memos. Failure modes: skipping situation under the assumption that everyone already knows it (they often do not), and posing a question different from the answer that follows.",
   status: "framework",
   reflect: "Open your last memo. Can you point to a clean Situation, Complication, Question, and Answer in the first paragraph? If not, the opening probably feels abrupt or meandering.",
   conceptQuiz: [
    {
     q: "The four beats of SCQA are…",
     options: [
      { text: "Situation, Complication, Question, Answer.", correct: true },
      { text: "Setup, Climax, Quote, Aftermath.", misconception: "Those names are invented; not the Minto framework." },
      { text: "Subject, Context, Query, Argument.", misconception: "Close but not the canonical naming." },
      { text: "Story, Cliffhanger, Quiz, Anecdote.", misconception: "Not the structure." }
     ],
     why: "Minto's four beats are Situation, Complication, Question, Answer."
    },
    {
     q: "The Answer beat should…",
     options: [
      { text: "State the governing claim that becomes the pyramid apex.", correct: true },
      { text: "List every supporting fact in detail.", misconception: "Details sit below the apex, not inside the Answer beat." },
      { text: "Restate the Situation.", misconception: "Repetition is filler, not structure." },
      { text: "Ask another question.", misconception: "The Answer beat resolves the Question rather than extending it." }
     ],
     why: "Answer delivers the one-sentence claim that the rest of the memo defends."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Label the beats",       d: "Underline the four beats in the opening of any well-written memo or article you can find.", xp: 10 },
    { level: "easy",     t: "Write an SCQA open",    d: "Rewrite the opening of a recent memo of yours using the four beats, each in one sentence.", xp: 20 },
    { level: "advanced", t: "Ship a strict memo",    d: "Publish a real decision memo with a strict SCQA opening, then ask three readers whether the conclusion felt earned.", xp: 40 }
   ]
  },
  {
   t: "Non-violent communication (Rosenberg)",
   subdomain: "foundations",
   definition: "A four-step communication structure separating observation, feeling, need, and request, designed to defuse conflict without suppressing honesty.",
   short: "Observation, feeling, need, request. Four beats that stop fights from escalating.",
   deep: "Marshall Rosenberg's non-violent communication, often abbreviated NVC, gives a four-step scaffold for emotionally charged conversations. Step one is observation, what you saw without evaluation: you arrived at 9.30 rather than you were late again. Step two is feeling, what arose in you: I felt frustrated. Step three is need, the underlying value or want: because I need predictability to plan my day. Step four is request, what would help: would you be willing to message me if you will be late. The structure works because it separates the four things that usually get tangled into one accusation, and it removes the moral judgement that triggers defence. NVC has critics who say it can feel scripted or therapeutic in business contexts, and that is a fair caution, the goal is to internalise the four steps rather than recite them.",
   generic: "Imagine telling your flatmate the kitchen sink keeps being left full. You could accuse them and start a fight. Or you could say, when I see dishes in the sink three mornings in a row (observation), I feel frustrated (feeling) because I need a clear counter to make breakfast (need), and would you be willing to wash up the same night (request). Same complaint, very different temperature.",
   expert: "Rosenberg (2003) draws on Rogerian client-centred therapy and Buddhist ethics. Distinct from active listening in providing a four-step expression structure rather than a reflection structure. The OFNR sequence (Observation, Feeling, Need, Request) is the formal acronym. Empirically used in mediation, education, and conflict zones (Rwanda, Israel-Palestine). Critiques: can feel formulaic if recited mechanically, can mask genuine power asymmetries by treating both sides as symmetric, and conflates needs with wants in some applications.",
   status: "framework",
   reflect: "In your last hard conversation, did you mix observation, feeling, need, and request into one accusation? Which of the four steps did you skip?",
   conceptQuiz: [
    {
     q: "The four steps of non-violent communication are…",
     options: [
      { text: "Observation, feeling, need, request.", correct: true },
      { text: "Argument, evidence, conclusion, action.", misconception: "Those are debate moves, not NVC steps." },
      { text: "See, judge, decide, demand.", misconception: "Judgement and demand are exactly what NVC tries to avoid." },
      { text: "Listen, agree, comply, move on.", misconception: "Compliance is not the goal of NVC." }
     ],
     why: "Rosenberg's OFNR sequence is observation, feeling, need, request."
    },
    {
     q: "Why does the observation step exclude evaluation?",
     options: [
      { text: "Evaluations trigger defence, while pure observations let the other side stay open.", correct: true },
      { text: "Evaluations are illegal in formal conversations.", misconception: "No legal restriction applies." },
      { text: "Observations are always more accurate than evaluations.", misconception: "Both can be accurate; the issue is reactivity, not accuracy." },
      { text: "Evaluations are required at the end instead.", misconception: "NVC does not move evaluation to the end; it tries to separate it from observation." }
     ],
     why: "Evaluative language activates defence and shuts the channel."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write the four steps",  d: "Pick a recent frustration and write each of the four NVC steps in one sentence.", xp: 10 },
    { level: "easy",     t: "Test it out loud",      d: "Use the four-step structure in one low-stakes conversation and note whether the temperature rose or fell.", xp: 20 },
    { level: "advanced", t: "Run it under heat",     d: "Use NVC in a genuinely difficult conversation, then write a post-mortem on what worked and what felt forced.", xp: 40 }
   ]
  },
  {
   t: "Plain-language writing (Orwell)",
   subdomain: "clarity",
   definition: "A small set of rules for writing prose that resists jargon, vagueness, and political fog, summarised in George Orwell's six rules.",
   short: "Short word over long. Active over passive. Cut a word if you can.",
   deep: "George Orwell's 1946 essay Politics and the English Language argued that bad writing enables bad thinking, and bad thinking enables political abuse. His six rules are deceptively simple: never use a metaphor you are used to seeing in print, never use a long word where a short one will do, if it is possible to cut a word out always cut it out, never use the passive where you can use the active, never use a foreign phrase or jargon if there is an everyday English equivalent, and break any of these rules sooner than say anything outright barbarous. The point is not the rules themselves but the discipline they impose, every sentence should be defended on grounds of clarity, not impressiveness. Modern plain-language movements (UK Plain English Campaign, US plainlanguage.gov) extend Orwell's logic into legal, medical, and government writing where opacity is actively harmful.",
   generic: "Imagine reading a letter from your phone company that explains a fee. The official version is two pages of legal nouns. The plain-language version is three sentences and tells you what you owe and why. The first version protects the company. The second respects the reader. Orwell's rules just ask which kind of letter you are writing.",
   expert: "Orwell (1946) sits in a lineage from Strunk and White to Pinker's Sense of Style (2014). Plain-language regulations include the US Plain Writing Act (2010) and the UK Gunning Fog index tradition. Empirical evidence is strong that plain-language financial disclosures, medical consent forms, and tax instructions improve comprehension and reduce error rates. Caveats: highly technical fields require specialist vocabulary, and plain language is not the same as simplistic content. The discipline is to use the smallest word that carries the full meaning, not the smallest word available.",
   status: "settled",
   reflect: "Take any sentence you wrote this week. Could a smart twelve-year-old understand it on first reading? If not, which of Orwell's rules did you break?",
   conceptQuiz: [
    {
     q: "Orwell's last rule states that…",
     options: [
      { text: "Break any of the rules sooner than say anything outright barbarous.", correct: true },
      { text: "All rules must be obeyed at all times.", misconception: "Orwell explicitly leaves an escape hatch for the rules themselves." },
      { text: "Always use Latin where possible.", misconception: "Orwell's rule says the opposite, prefer everyday English." },
      { text: "Always write in the passive voice.", misconception: "Orwell's rule is the opposite, prefer active voice." }
     ],
     why: "The escape clause prevents the rules from producing inhumane prose."
    },
    {
     q: "Plain-language writing is most clearly valuable in…",
     options: [
      { text: "Legal, medical, and financial documents where opacity actively harms readers.", correct: true },
      { text: "Personal poetry.", misconception: "Poetry has its own conventions; plain language is not the universal target." },
      { text: "Academic philosophy alone.", misconception: "Many fields benefit; the law and medicine show the highest harm from opacity." },
      { text: "Headlines only.", misconception: "Headlines are part, not the whole, of plain-language practice." }
     ],
     why: "These domains carry the highest comprehension cost when written opaquely."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Audit one paragraph",   d: "Take a paragraph of yours and mark every word that breaks one of Orwell's six rules.", xp: 10 },
    { level: "easy",     t: "Rewrite in plain words", d: "Rewrite that paragraph under Orwell's six rules and compare reading speed with the original.", xp: 20 },
    { level: "advanced", t: "Ship a plain version",   d: "Take a real public-facing document at your workplace and produce a plain-language version, then test comprehension with two non-expert readers.", xp: 40 }
   ]
  },
  {
   t: "Apology architecture",
   subdomain: "foundations",
   definition: "A four-part structure for a meaningful apology: name the harm, accept responsibility, repair what can be repaired, and commit to change.",
   short: "Name harm, own it, repair, change. Skip a step and the apology fails.",
   deep: "An effective apology has four working parts. First, name the harm specifically and from the harmed party's view, not your own. Second, accept responsibility without excuses, the word but is the most common failure point. Third, attempt repair, whether material, emotional, or relational. Fourth, commit credibly to the change that prevents recurrence. Aaron Lazare's research on apology shows that the missing element is almost always either specificity (vague sorry) or repair (sorry but no follow-through). Public-relations apologies often skip step two by passing voice (mistakes were made) and step four by speaking only of regret rather than change. The architecture is not about performing remorse, it is about making the harmed party feel seen and giving them honest grounds to forgive.",
   generic: "Imagine you bump into your friend's coffee and spill it. A weak apology says, sorry it happened. A real apology says, I bumped into your cup and ruined your shirt (name the harm), that was my fault for not looking (responsibility), can I buy you another coffee and pay your dry cleaning (repair), I will pay more attention when carrying things in a crowded cafe (change). Same incident, very different repair.",
   expert: "Lazare (2004) at UMass Worcester systematised the four-part structure. Pair with restorative justice frameworks where the harmed party defines the repair. Distinct from non-violent communication in being asymmetric (one party caused harm) rather than symmetric. Failure modes: the if-apology (I am sorry if anyone was offended), the but-apology (I am sorry but you also), and the abstract regret apology that names no specific harm. Public-figure apology research (Schumann, 2014) shows audiences detect missing components reliably and downgrade sincerity accordingly.",
   status: "framework",
   reflect: "Recall an apology you gave that did not land. Which of the four steps did you skip, and what did the other side actually need?",
   conceptQuiz: [
    {
     q: "The four parts of a meaningful apology are…",
     options: [
      { text: "Name the harm, accept responsibility, attempt repair, commit to change.", correct: true },
      { text: "Express regret, blame circumstances, move on, change subject.", misconception: "Those are the failure modes the architecture is designed to prevent." },
      { text: "Listen, agree, comply, retreat.", misconception: "Compliance and retreat are not the same as responsibility and repair." },
      { text: "Defend, deflect, deny, dismiss.", misconception: "Those are anti-apology behaviours." }
     ],
     why: "Lazare's four-part structure names harm, responsibility, repair, and change."
    },
    {
     q: "Why does the word but usually weaken an apology?",
     options: [
      { text: "It signals that the speaker is about to retract responsibility just accepted.", correct: true },
      { text: "It is too short to carry weight.", misconception: "Length is not the issue." },
      { text: "It is grammatically incorrect.", misconception: "It is grammatically fine; the issue is rhetorical." },
      { text: "Audiences do not understand it.", misconception: "Audiences understand it perfectly, which is why it weakens the apology." }
     ],
     why: "But almost always introduces a justification that cancels the responsibility just accepted."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Audit a public apology",  d: "Find a recent public-figure apology and tag which of the four parts are present, partial, or missing.", xp: 10 },
    { level: "easy",     t: "Draft the four parts",   d: "Draft a real apology you owe, with one sentence for each of the four parts.", xp: 20 },
    { level: "advanced", t: "Deliver and follow through", d: "Deliver the apology, complete the repair you committed to, and write a short note on how the relationship shifted.", xp: 40 }
   ]
  }
 ],

 counterView: "There's a popular view that 'communication is everything', that any failure to be heard is a communication failure on the speaker's side. Take it seriously, then push back: sometimes the audience is wrong, hostile, or simply not the right audience. Over-investing in 'finding the right framing' can also be a way to avoid saying the hard true thing. And the cult of brevity has its own failures, important ideas sometimes need to be long. Mehrabian's '7-38-55' rule is misquoted constantly; treat any single dramatic stat about communication as suspect.",

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
  { rank: "Novice",    focus: "Start putting the conclusion first",         do: "Read Made to Stick and On Writing Well. Practise BLUF on every email for a week, put the actual point in line one, defend it below.",                                                                                 milestone: "Every email you send opens with the bottom line. The replies you get are faster and shorter.",                         time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Edit ruthlessly",                    do: "Cut every draft by 30%. Replace at least three abstractions with specifics per page. Stop using \"very,\" \"really,\" \"basically,\" \"obviously\", they're padding.",                                                                 milestone: "Your first drafts come out tighter than other people's third drafts.",                                     time: "~1 month" },
  { rank: "Practitioner", focus: "Tell stories instead of bullet lists",         do: "For your next five project updates, use setup → trouble → choice → consequence instead of bullets. Watch what gets remembered and forwarded.",                                                                              milestone: "Updates you send don't just get read, they get retold to other people without you in the room.",                       time: "~2-3 months" },
  { rank: "Specialist",  focus: "Get comfortable on your feet",             do: "Give five short talks, internal demos, lunch-and-learns, Toastmasters, whatever you can find. Record each one. Watch it back. Pick one specific thing to fix next time.",                                                                milestone: "You can hold a room of 30 strangers confidently for 10 minutes, without notes, without losing them.",                     time: "~6 months" },
  { rank: "Expert",    focus: "Lead by writing",                    do: "Run things via written documents the way Amazon does, long-form, considered, circulated before meetings. Make decisions by writing them down first.",                                                                          milestone: "Your written docs move projects forward without you needing to attend the meetings about them.",                       time: "~1 year" },
  { rank: "Master",    focus: "Make other people's writing better",          do: "Edit other people's work seriously. Teach the craft to juniors. Watching others' drafts surface the same ten mistakes will sharpen your own.",                                                                               milestone: "The people you mentor write noticeably better than the people you don't.",                                   time: "~2 years+" },
  { rank: "Grandmaster", focus: "Shape how the field communicates",            do: "Books, essays, courses that influence how other practitioners write and think.",                                                                                                              milestone: "Other writers quote your work to make their case.",                                               time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Paul Graham, essays",                what: "Master class in clear, confident essay writing.",                   url: "https://www.paulgraham.com/articles.html",             weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "TED Talks (official site)",             what: "Watch with structure in mind. Notice the openings + arc.",               url: "https://www.ted.com/talks",                     verify: false, lastVerified: "2026-06" },
   { name: "Farnam Street, Effective Communication",      what: "Curated essays on writing + speaking clearly.",                     url: "https://fs.blog/great-talks/",                   verify: false, lastVerified: "2026-06" },
   { name: "Julian Shapiro, How to Write Well",         what: "Compact, practical writing guide.",                           url: "https://www.julian.com/guide/write/intro",             weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Stephen Pinker, The Sense of Style (free chapters)", what: "Cognitive-science-grounded writing advice.",                      url: "https://stevenpinker.com/publications/sense-style-thinking-persons-guide-writing-21st-century", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "George Orwell, Politics and the English Language", what: "The essay every writer should read once a year. Free.",                 url: "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Strunk & White, Elements of Style (Bartleby)",   what: "Tiny, dense, classic. Free public-domain copy.",                     url: "https://www.bartleby.com/lit-hub/the-elements-of-style/",     weight: "popular", verify: false, lastVerified: "2026-06" },
   { name: "Toastmasters International",             what: "Local clubs to practice speaking; some materials free.",                 url: "https://www.toastmasters.org/",                   verify: false, lastVerified: "2026-06" },
   { name: "Harvard Business Review, Communication topic",    what: "Many free articles on workplace communication.",                     url: "https://hbr.org/topic/communication",               verify: false, lastVerified: "2026-06" },
   { name: "On Writing Well, Zinsser (library copy)",      what: "The non-fiction writing classic. Short and direct.",                  url: "https://en.wikipedia.org/wiki/On_Writing_Well",          verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Made to Stick, Chip & Dan Heath",          what: "Why some ideas survive (SUCCESs framework).",                      url: "https://heathbrothers.com/books/made-to-stick/",           price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Resonate, Nancy Duarte",               what: "Structure for talks and decks.",                             url: "https://www.duarte.com/resonate/",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Pyramid Principle, Barbara Minto",        what: "Top-down structured writing. McKinsey gospel.",                     url: "https://en.wikipedia.org/wiki/Minto_Pyramid_Principle",    price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "On Writing Well, Zinsser",              what: "Library or new copy. Re-read it every couple of years.",                 url: "https://en.wikipedia.org/wiki/On_Writing_Well",          price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Talk Like TED, Carmine Gallo",            what: "What works in the best TED talks, structured.",                      url: "",                                  price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Bird by Bird, Anne Lamott",             what: "Writing as life-practice; humane and useful.",                      url: "",                                  price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Story, Robert McKee",                what: "Screenwriting structure that transfers to any narrative.",                url: "https://mckeestory.com/",                      price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Sense of Style, Steven Pinker",         what: "Modern writing-craft book with cognitive-science roots.",                 url: "https://stevenpinker.com/publications/sense-style-thinking-persons-guide-writing-21st-century", price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Writing Tools, Roy Peter Clark",           what: "50 specific writing moves you can practice.",                       url: "https://www.goodreads.com/book/show/44123.Writing_Tools", price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Slide:ology, Nancy Duarte",             what: "Designing slides that don't undermine your talk.",                    url: "https://www.duarte.com/slideology/",                 price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "BLUF every email", d: "For one week, start every work email with the conclusion in line 1. Note responses.", xp: 50 },
  { t: "Specific-ify", d: "Take a paragraph of yours. Replace 5 abstractions with specifics. Show before/after.", xp: 15 },
  { t: "60-second story", d: "Tell a colleague a recent project as setup → trouble → choice → consequence. Time yourself.", xp: 25 },
  { t: "Cut 30%", d: "Pick a long thing you wrote. Cut 30%. Compare clarity.", xp: 25 },
  { t: "Blank-slate test", d: "Ask a non-expert to explain back what you just wrote/said. Note the gaps.", xp: 40 },
  { t: "Rewrite last week's email", d: "Pick one email you sent last week. Rewrite it BLUF style with the conclusion in line 1 and post both versions side by side in a doc.", xp: 15 },
  { t: "Halve a LinkedIn post", d: "Take one of your last LinkedIn posts and cut its word count in half without losing the core point. Publish or save the new version.", xp: 25 },
  { t: "Memo instead of meeting", d: "This week, replace one meeting you would have scheduled with a written summary memo. Send it and track what decisions actually got made.", xp: 60 }
 ],
 capstone: { t: "Give a real talk", d: "Give a 10-minute talk on something you know. Record it. Watch it. Note one structural thing to fix next time.", xp: 200 },

 quiz: [
  { q: "What's the strongest single move for clarity in long writing?", options: [
   { text: "Add more facts.", misconception: "More facts can cloud the point if structure is missing." },
   { text: "Lead with the bottom line.", correct: true },
   { text: "Use longer sentences.", misconception: "Length isn't quality; structure is." },
   { text: "Add jargon to sound credible.", misconception: "Jargon erodes ethos for non-expert audiences." }
  ], why: "BLUF / pyramid principle, busy readers stop after line 1. Make it carry the message.", testOut: true },
  { q: "Ethos · Pathos · Logos refers to…", options: [
   { text: "Three brands of beer.", misconception: "No." },
   { text: "Credibility, emotion, and logic in persuasion.", correct: true },
   { text: "A modern marketing framework.", misconception: "Aristotle. Older than marketing." },
   { text: "Personality types.", misconception: "Different topic." }
  ], why: "Aristotle's three modes of persuasion. Most ideas underweight ethos and pathos." },
  { q: "The Mehrabian '7-38-55' rule is best treated as…", options: [
   { text: "Universal truth about all communication.", misconception: "Misquoted constantly. The original work was narrow." },
   { text: "Misquoted constantly, narrow original scope.", correct: true },
   { text: "Discredited entirely.", misconception: "The original study was fine; the popular use isn't." },
   { text: "About body language only.", misconception: "It was about inconsistent affect, not body language only." }
  ], why: "The original was about inconsistent emotion-communication in a lab, not the breakdown of all human communication." },
  { q: "What's the curse of knowledge?", options: [
   { text: "Knowing something makes it harder to remember not knowing it.", correct: true },
   { text: "Knowing too much makes you boring.", misconception: "Boring is a style problem, not a knowledge problem." },
   { text: "Experts are always wrong.", misconception: "Strong overshoot, they're better than non-experts on most factual questions." },
   { text: "It's a fictional concept.", misconception: "It's well-supported in cognitive psychology." }
  ], why: "Once you know something, you forget what it was like not to. Drives jargon and over-skipping by experts." },
  { q: "What's the simplest story structure for a 60-second update?", options: [
   { text: "Bullet list of milestones.", misconception: "Easy to write, hard to remember." },
   { text: "Setup → trouble → choice → consequence.", correct: true },
   { text: "Random anecdote.", misconception: "Memorable if good, but not a reliable structure." },
   { text: "Mission statement → KPIs → ask.", misconception: "Works in some boardrooms; not memorable storytelling." }
  ], why: "The compressed hero's journey works for almost any update, it's the shape humans remember." }
 ],

 flashcards: [
  { front: "Ethos / Pathos / Logos?", back: "Aristotle: credibility (who's saying it), emotion (why it matters now), logic (the evidence). Use all three." },
  { front: "BLUF?", back: "Bottom Line Up Front, lead with the conclusion, defend it after. Pyramid principle / McKinsey style." },
  { front: "Specifics or abstractions?", back: "Specifics. '0-60 in 3 seconds' beats 'fast' every time." },
  { front: "Story shape, short version?", back: "Setup → trouble → choice → consequence. Compressed hero's journey." },
  { front: "Show, don't tell, example?", back: "'She slammed the door' (show anger) beats 'she was angry' (tell)." },
  { front: "Curse of knowledge?", back: "Once you know something, it's hard to remember not knowing it. Drives jargon and skipped foundations." },
  { front: "Why cut 30%?", back: "Most drafts have 30% padding. Readers reward brevity; brevity often raises clarity." },
  { front: "Mehrabian 7-38-55 truth?", back: "Misquoted constantly. Original was a narrow lab finding about inconsistent affect, not a universal communication law." }
 ],
 glossary: [
  { term: "BLUF", def: "Bottom Line Up Front, leading with the conclusion." },
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
