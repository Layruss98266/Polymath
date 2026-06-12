import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "productivity",
 icon: "⚡",
 hue: "#f59e0b",
 category: "Personal",
 name: "Productivity",
 tagline: "Do the right things, not just more things",

 basics: "Productivity is not about doing more. It is about doing the things that actually matter with the energy you actually have. Most productivity failures are not about laziness. They are about unclear priorities, poor energy management, and systems that create friction at exactly the wrong moments.",
 deepBasics: "The literature splits into two camps: task and time management (Allen 2001, Covey 1989) and cognitive energy management (Newport 2016, Schwartz). The honest meta-finding is that no single system works for everyone. The goal is to build a personal operating system that captures commitments reliably, allocates attention to high-value work, and does not require willpower to maintain.",
 whyItMatters: [
  "Every hour spent on low-value busy-work is an hour not spent on the work that compounds over years.",
  "Cognitive overload from uncaptured commitments drains energy that could go into actual thinking.",
  "Deep work is becoming rare and more valuable simultaneously. The ability to do it is a career asset.",
  "Energy is the actual constraint, not time. Most people have more time than they have energy."
 ],
 realWorldExample: "A senior engineer at a Bengaluru startup was constantly overwhelmed, working 70-hour weeks, always behind. She was the most productive person on paper: most commits, most meetings, most replies. She started time-blocking two hours every morning for her most critical work and stopped checking Slack until 11am. In six weeks her output on the actual product doubled, and she worked four fewer hours per day. The meetings and messages had felt like work but were mostly reactive noise. The two focused hours were the real work. That is the GTD and deep work insight in one story.",

 mentors: [
  { name: "David Allen", for: "Getting Things Done, trusted external system, mind like water", work: "Getting Things Done (2001)" },
  { name: "Cal Newport", for: "deep work, slow productivity, attention as a scarce resource", work: "Deep Work (2016)" },
  { name: "Stephen Covey", for: "important vs urgent matrix, begin with the end in mind", work: "The 7 Habits of Highly Effective People (1989)" },
  { name: "Oliver Burkeman", for: "finite time, anti-productivity, embracing limits", work: "Four Thousand Weeks (2021)" }
 ],

 diagrams: [
  {
   kind: "quadrant",
   title: "Eisenhower Matrix",
   caption: "Tasks sorted by urgency and importance. Most people live in Q1 and Q3. The leverage is in Q2.",
   data: {
    axes: { x: "Urgency", y: "Importance" },
    points: [
     { label: "Q1: Do now (crisis)", x: 80, y: 80 },
     { label: "Q2: Schedule (deep work, planning)", x: 20, y: 80 },
     { label: "Q3: Delegate (interruptions)", x: 80, y: 20 },
     { label: "Q4: Eliminate (time-wasters)", x: 20, y: 20 }
    ]
   }
  },
  {
   kind: "cycle",
   title: "GTD Weekly Review Cycle",
   caption: "Allen's trusted system only works if you close the loop weekly. The review is the engine.",
   data: { nodes: ["Capture", "Clarify", "Organise", "Reflect (weekly)", "Engage"] }
  }
 ],

 synthesis: [
  { concept: "Deep work", linksTo: "learning", note: "Deep work and deliberate practice are the same activity from two angles: one is about output, the other is about skill acquisition." },
  { concept: "Energy management", linksTo: "health", note: "Sleep, exercise, and nutrition are the upstream variables for all cognitive performance. Managing energy is inseparable from managing health." },
  { concept: "Weekly review", linksTo: "mental_models", note: "The weekly review is applied systems thinking: close the loop, update the model, catch drift early." },
  { concept: "GTD", linksTo: "psychology", note: "Allen's core insight is psychological: uncaptured commitments create low-level anxiety that drains working memory." }
 ],

 subdomains: [
  {
   id: "task_systems",
   name: "Task and Project Systems",
   intro: "The external systems that capture what needs to be done so your brain does not have to hold it all in RAM. GTD is the reference model.",
   capabilities: [
    "Set up a trusted inbox that captures every commitment before it leaks.",
    "Run a weekly review that leaves you with a clear picture of your commitments.",
    "Break any project into discrete next actions so you are never stuck on 'what do I do next?'"
   ]
  },
  {
   id: "time_energy",
   name: "Time and Energy Management",
   intro: "Time is fixed. Energy is renewable but finite. Managing both is more powerful than managing either alone.",
   capabilities: [
    "Time-block at least two hours of protected deep work every morning.",
    "Identify your personal peak energy hours and protect them for your most demanding work.",
    "Apply the Eisenhower matrix to your task list and spend at least 20% of time in Q2."
   ]
  },
  {
   id: "attention",
   name: "Attention and Focus",
   intro: "Attention is the real unit of productivity. Where it goes, results follow. Most environments are designed to steal it.",
   capabilities: [
    "Do 90-minute single-tasking blocks without context-switching.",
    "Reduce or batch all notifications so they do not interrupt focused work.",
    "Recognise and interrupt the low-concentration browsing that masquerades as a break."
   ]
  },
  {
   id: "review_planning",
   name: "Review and Planning",
   intro: "The weekly review and quarterly planning sessions are what turn a productivity system from reactive to intentional.",
   capabilities: [
    "Complete a full weekly review in under 45 minutes that leaves your system current.",
    "Set quarterly priorities using a goals-down approach so daily work connects to longer arcs.",
    "Run a monthly calendar audit to catch commitments that no longer deserve time."
   ]
  }
 ],

 concepts: [
  {
   t: "GTD (Getting Things Done)",
   subdomain: "task_systems",
   fullForm: "Getting Things Done",
   definition: "David Allen's productivity method built on the idea that your mind is for having ideas, not holding them. An external trusted system captures all commitments.",
   short: "Get every commitment out of your head and into a system your brain trusts. Then work from the system.",
   deep: "The core GTD insight is psychological, not tactical. Every uncaptured commitment (the email you meant to reply to, the call you promised to make, the idea you had in the shower) sits in your head as an open loop, consuming low-level background attention and generating mild anxiety. The method: capture everything into a single trusted inbox, clarify what each item is and what the next action is, organise it into lists by context or project, reflect weekly by reviewing everything, and engage by choosing actions from your system rather than from memory. The power is in the weekly review. Without it the system decays in two weeks.",
   status: "framework",
   reflect: "How many open loops are currently living in your head? What is the oldest commitment you have not processed into a clear next action?",
   generic: "Imagine your head as a browser with 47 tabs open. GTD is the practice of writing each tab down in a notebook so you can close the tabs in your head without losing the contents. You work from the notebook, not from memory.",
   expert: "Allen (2001) drew on cognitive psychology without citing it extensively. The mechanism aligns with Baddeley and Hitch's working memory model (1974): the central executive has limited capacity, and uncaptured commitments act as persistent activations that tax it. Subsequent research by Masicampo and Baumeister (2011) provided empirical support for the Zeigarnik-adjacent mechanism Allen described, finding that incomplete tasks intrude on cognition until a concrete plan is formed. GTD's main critique is implementation complexity: the full system requires significant upfront setup and weekly discipline to maintain.",
   conceptQuiz: [
    {
     q: "According to David Allen, the primary purpose of an external system in GTD is to…",
     options: [
      { text: "Free your mind from holding commitments so it can focus on actual thinking.", correct: true },
      { text: "Increase the number of tasks you can complete per day.", misconception: "GTD is not primarily about throughput. It is about clearing cognitive overhead so you can think clearly." },
      { text: "Replace calendar and email entirely.", misconception: "GTD integrates with calendar and email. It does not replace them." },
      { text: "Help you delegate tasks to others more efficiently.", misconception: "Delegation is one outcome but the primary purpose is clearing your mental RAM." }
     ],
     why: "Allen's core claim is that uncaptured commitments drain mental energy. The trusted system closes the open loops."
    },
    {
     q: "The GTD weekly review matters because…",
     options: [
      { text: "Without it, the system decays and becomes another inbox of things you are not processing.", correct: true },
      { text: "It is the only time you should add new items to your capture inbox.", misconception: "Capture is continuous. The weekly review is about processing and reflecting, not the only capture moment." },
      { text: "It forces you to complete all tasks before the weekend.", misconception: "The weekly review is about reviewing and planning, not about completing everything." },
      { text: "It is how you prioritise between projects.", misconception: "Prioritisation happens at the engagement step. The review is about keeping the system current." }
     ],
     why: "Without a regular review, open loops accumulate and the system stops being trusted. When you stop trusting the system, you go back to holding things in your head."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Do a brain dump", d: "Spend 20 minutes writing every commitment, task, idea, and loose end currently in your head. Count them. That is your current cognitive load.", xp: 15 },
    { level: "easy", t: "Set up a capture inbox", d: "Pick one tool (a physical notebook, a simple app, or email to yourself) as your single capture inbox. Commit to putting every new commitment there before it goes anywhere else.", xp: 25 },
    { level: "advanced", t: "Run your first weekly review", d: "Schedule 45 minutes this week. Process your capture inbox to zero, review all projects, check your calendar for the next two weeks, and write your three priorities for the week.", xp: 45 }
   ]
  },
  {
   t: "Time Blocking",
   subdomain: "time_energy",
   definition: "The practice of scheduling specific blocks of time for specific types of work in advance, rather than working reactively from a to-do list.",
   short: "Schedule your work like meetings. Blocks on the calendar beat tasks on a list.",
   deep: "A to-do list tells you what to do but not when. Time blocking answers the when. You assign every major work type to a specific calendar block in advance: deep work in the morning, meetings grouped in the afternoon, email in two defined windows. The result is a day designed intentionally rather than assembled reactively. Cal Newport argues that time blocking is the foundation of deep work. Without protected blocks, every piece of work competes with every other piece of work and the urgent always wins over the important. The hard part is defending the blocks when requests arrive.",
   status: "framework",
   reflect: "Look at your calendar for next week. How much time is blocked for your most important work? How much is unprotected?",
   generic: "Think of it like putting money in a savings account automatically. If you wait until the end of the month to save whatever is left, there is usually nothing left. If you schedule the savings first, the spending adjusts. Time blocking is the savings account for attention.",
   expert: "Newport (2016, 2020) popularised time blocking as the operational implementation of deep work theory. The approach overlaps with research on decision fatigue (Baumeister et al., 1998) and ego depletion: making fewer micro-decisions about what to work on next preserves executive function for the work itself. The technique aligns with Kahneman's System 2 observation that deliberate planning done in advance prevents System 1 reactive task-switching. Critics note that blocked schedules fail under unexpected urgency and require high psychological safety at work to maintain.",
   conceptQuiz: [
    {
     q: "The core advantage of time blocking over a standard to-do list is…",
     options: [
      { text: "It answers not just what to do but when, preventing reactive task-switching.", correct: true },
      { text: "It limits the number of tasks you take on each day.", misconception: "Time blocking organises when you work, not necessarily how many tasks you have." },
      { text: "It eliminates the need for a task list entirely.", misconception: "Most time blocking implementations use both a task list and a blocked calendar together." },
      { text: "It ensures you finish every task within the scheduled block.", misconception: "Tasks often overrun blocks. The discipline is replanning when that happens, not perfect estimation." }
     ],
     why: "The when is the missing dimension in most to-do lists. Blocking forces the decision to be made in advance."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Block next Monday", d: "Open your calendar and block your two most productive hours tomorrow for a specific piece of work. Do not book meetings in that block.", xp: 10 },
    { level: "easy", t: "Design your ideal week", d: "On paper, design your ideal weekly schedule: when is deep work, when are meetings, when is email, when is planning. Compare it to your actual last week.", xp: 20 },
    { level: "advanced", t: "Run a four-week block experiment", d: "Implement time blocking for four weeks. Track weekly: what was blocked, what actually happened, and where the blocks were invaded. Report what changed.", xp: 45 }
   ]
  },
  {
   t: "The Two-Minute Rule",
   subdomain: "task_systems",
   definition: "From GTD: if a task will take less than two minutes to complete, do it immediately when you encounter it rather than adding it to a list.",
   short: "If it takes less than two minutes, do it now. The overhead of managing small tasks usually exceeds the task itself.",
   deep: "The two-minute rule from Allen is a processing heuristic, not a priority rule. When you encounter an item in your inbox (physical or digital), you ask: what is this? What is the next action? If the next action takes under two minutes, do it immediately. The reasoning: the overhead of writing it down, scheduling it, reviewing it again, and then doing it later totals more than two minutes. The rule prevents the list from filling with trivial items that create the illusion of a full system. It also gives you a satisfying stream of small wins as you process.",
   status: "framework",
   reflect: "How many items on your current task list would take less than two minutes to complete? Why are they on the list instead of done?",
   conceptQuiz: [
    {
     q: "The two-minute rule is a heuristic for…",
     options: [
      { text: "Deciding whether to act immediately on an item rather than deferring it to a list.", correct: true },
      { text: "Setting a maximum response time for emails.", misconception: "The rule is about whether to act now versus defer, not about response time standards." },
      { text: "Limiting your daily task list to items under two minutes.", misconception: "The rule applies to processing decisions, not to the nature of your task list." },
      { text: "Spending only two minutes on email per session.", misconception: "The two-minute rule is about individual item handling, not email time-boxing." }
     ],
     why: "The rule is a processing decision: act now or defer. The threshold is whether the overhead of deferral exceeds the task."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Apply the rule for one day", d: "For one full day, apply the two-minute rule to everything you encounter. At the end of the day, note how many items you would normally have deferred to a list.", xp: 10 },
    { level: "easy", t: "Process your inbox to zero", d: "Using the two-minute rule plus defer and delegate, process your email inbox to zero. Do not delete. Decide for each item.", xp: 20 },
    { level: "advanced", t: "Integrate into your capture system", d: "Build a daily processing habit: once a day, process your capture inbox using clarify, two-minute, delegate, or defer. Track how long it takes per session over two weeks.", xp: 35 }
   ]
  },
  {
   t: "Eating the Frog",
   subdomain: "time_energy",
   definition: "The practice of doing your most important or most dreaded task first thing in the morning, before any other work.",
   short: "Do the thing you most want to avoid first. The day gets easier after that.",
   deep: "The metaphor is attributed to Mark Twain (the attribution is not verified) and popularised by Brian Tracy. The logic is motivational and cognitive: willpower and decision-making quality are generally higher in the morning. The task you keep deferring is the one creating the most background dread and cognitive drag. Doing it first removes the drag for the rest of the day. The practical version: identify the previous evening the single most important task for tomorrow and block the first working hour for it, before email, before meetings, before anything reactive. The task does not have to be unpleasant, it has to be important.",
   status: "framework",
   reflect: "What is the task you have been deferring that, if done, would move the needle most? Why have you not started it yet?",
   conceptQuiz: [
    {
     q: "The main productivity rationale behind 'eating the frog' is…",
     options: [
      { text: "Cognitive energy and willpower are typically strongest in the morning, so the hardest task should get the best resources.", correct: true },
      { text: "Unpleasant tasks go faster if you get them over with.", misconception: "Speed is not the core claim. The claim is about cognitive quality and removing dread-drag." },
      { text: "Morning is the only time the office is quiet.", misconception: "The method is about energy allocation, not environmental quiet, though those often coincide." },
      { text: "You should always do the easiest tasks first to build momentum.", misconception: "Easiest-first is the opposite of eat the frog. Easy tasks build false momentum while the important one waits." }
     ],
     why: "The best cognitive resources go to the most important task. Waiting until the afternoon means working on it with depleted energy."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Name tomorrow's frog", d: "Tonight, write down the single most important task you need to complete tomorrow. Set it as the first item you open when you start work.", xp: 10 },
    { level: "easy", t: "No email before the frog", d: "For one week, do not open email or messages until you have worked on your most important task for at least 30 minutes.", xp: 20 },
    { level: "advanced", t: "Track a month of frogs", d: "For 30 days, identify and record your daily frog each evening. In the morning, do it first. At month end, review: which frogs were you consistent about and which did you avoid?", xp: 40 }
   ]
  },
  {
   t: "Deep Work vs Shallow Work",
   subdomain: "attention",
   definition: "Cal Newport's distinction between cognitively demanding, focused work that creates real value (deep) and logistical, reactive tasks that are necessary but not differentiating (shallow).",
   short: "Deep work creates value. Shallow work maintains it. Most people spend most of their time on shallow work.",
   deep: "Cal Newport (2016) defines deep work as cognitively demanding tasks performed in a state of distraction-free concentration that push your cognitive abilities to their limit, creating new value and improving your skills. Shallow work includes emails, meetings, status updates, and scheduling: necessary but easily replicated and not requiring intense focus. The thesis: as knowledge work has moved online, constant connectivity has made deep work rarer and harder, while the market rewards it more. The practical prescription is to ruthlessly protect long blocks of time (at least 90 minutes, ideally more) for deep work and to batch or eliminate shallow work rather than letting it fragment the day.",
   status: "settled",
   reflect: "In the last week, how many hours did you spend in states of genuine deep concentration? How many hours on email, Slack, and meetings?",
   generic: "Think of it as the difference between a surgeon operating and a surgeon answering administrative emails. Both are work. Only one requires the surgeon's full cognitive capacity and cannot be done by anyone else. Deep work is the surgery.",
   expert: "Newport (2016) synthesised insights from Csikszentmihalyi's flow theory, Ericsson's deliberate practice research, and Winifred Gallagher's attention research. The neurological basis he cites: myelin sheathing from intense focused practice (Coyle, 2009). The economic argument draws on Brynjolfsson and McAfee's observation that high cognitive performers benefit disproportionately from technology. Critics note that the model is easiest to apply for individual knowledge workers and harder in collaborative, interdependent roles. The distinction between deep and shallow is acknowledged as a spectrum, not a binary.",
   conceptQuiz: [
    {
     q: "According to Newport, what is the defining characteristic of deep work?",
     options: [
      { text: "Cognitively demanding tasks performed in distraction-free concentration at the limit of current ability.", correct: true },
      { text: "Working longer hours than colleagues.", misconception: "Deep work is about intensity and quality of concentration, not duration or hours." },
      { text: "Any task that does not involve email or meetings.", misconception: "The distinction is about cognitive demand and focus state, not the communication medium." },
      { text: "Tasks you find personally meaningful.", misconception: "Meaningfulness is separate from depth. Shallow work can feel meaningful and deep work can feel tedious." }
     ],
     why: "Deep work is defined by cognitive intensity and distraction-free concentration, not by task type, duration, or subjective meaning."
    },
    {
     q: "Newport argues that deep work is becoming more valuable because…",
     options: [
      { text: "Technology and connectivity have made it rarer, while the knowledge economy rewards it more.", correct: true },
      { text: "Fewer people are willing to work long hours.", misconception: "Hours are irrelevant to the deep work argument. The scarcity is about concentrated focus, not working time." },
      { text: "AI is replacing shallow work, leaving only deep work for humans.", misconception: "While true in a broad sense, Newport's 2016 argument predates the current AI wave and focuses on attention economics." },
      { text: "Companies are now paying more for specialised skills.", misconception: "Specialised skills are related but the core argument is about the economics of focused concentration, not credentials." }
     ],
     why: "When distraction is the norm, the ability to focus deeply becomes a scarce competitive advantage."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Count your deep hours", d: "Track your time for three days. At the end of each day, calculate how many hours were genuinely deep (focused, difficult, creating real value). What is the number?", xp: 15 },
    { level: "easy", t: "Create a shutdown ritual", d: "Design a five-minute end-of-day shutdown ritual that clears your open loops and signals to your brain that work is done. Practice it for two weeks.", xp: 20 },
    { level: "advanced", t: "Four weeks of deep work tracking", d: "Commit to three or more hours of protected deep work per day for four weeks. Track daily hours. Review your output at week four and compare to week one.", xp: 50 }
   ]
  },
  {
   t: "Inbox Zero",
   subdomain: "task_systems",
   definition: "An email management approach where the goal is to process the inbox to empty on a regular basis by deciding on each item: delete, delegate, respond, defer, or do.",
   short: "Process email, do not store it. An empty inbox is a processed inbox, not a suppressed one.",
   deep: "Inbox zero (Merlin Mann, 2006) is about processing discipline, not frequency. The inbox is not a storage system or a to-do list. Each email gets one of five decisions: delete, delegate, respond (if under two minutes), defer to a task list, or do now. The point is not to achieve zero unread messages but to never use the inbox as a holding pattern for decisions you have not made. The most common failure mode is treating a read email as a processed email. It is not. Processed means a decision has been made and the item has been moved out of the inbox.",
   status: "framework",
   reflect: "How many items are in your email inbox right now? How many of them represent a decision you have not made?",
   conceptQuiz: [
    {
     q: "Inbox zero is primarily a method for…",
     options: [
      { text: "Processing every email to a decision so the inbox is never a storage system.", correct: true },
      { text: "Responding to every email within the day it is received.", misconception: "Inbox zero is about processing to a decision, which may include deferring. Response speed is separate." },
      { text: "Reducing the number of emails you receive.", misconception: "Inbox zero is a processing method, not a volume reduction method, though both are useful." },
      { text: "Achieving an empty inbox by archiving everything.", misconception: "Bulk-archiving without decisions defeats the purpose. The goal is a processed, not a cleared, inbox." }
     ],
     why: "The inbox is an input queue, not a storage system. The method is about making decisions, not about the number zero."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Count undecided emails", d: "Count how many emails in your inbox represent an undecided item: something you have read but not acted on. That number is your real cognitive debt.", xp: 10 },
    { level: "easy", t: "Process to zero once", d: "Schedule 45 minutes and process your inbox to zero using delete, delegate, two-minute response, defer, or do. Do not re-read items you have already decided on.", xp: 25 },
    { level: "advanced", t: "Build a batch email habit", d: "For four weeks, check and process email only twice per day at set times (e.g. 11am and 4pm). Track your stress level around email and your output on focused work.", xp: 40 }
   ]
  },
  {
   t: "Weekly Review",
   subdomain: "review_planning",
   definition: "A recurring session, typically on Friday afternoon, where you process all open loops, review projects and commitments, and set intentions for the coming week.",
   short: "One hour a week to stay on top of everything. Without it, your system drifts in two weeks.",
   deep: "The weekly review is the engine of the GTD system and the most neglected piece. Allen's protocol: get clear (collect loose papers and items, get your inbox to zero, empty your head), get current (review action lists, calendar, projects), get creative (review your someday and maybe list, look for new ideas). The output is a clear head, a current task system, and a sense of what the coming week should focus on. The review takes 45 to 90 minutes. Most people skip it because it feels like overhead. It is actually the investment that makes the other 38 work hours useful.",
   status: "framework",
   reflect: "When did you last do a formal weekly review? What is in your system right now that you have not looked at in more than a week?",
   conceptQuiz: [
    {
     q: "The weekly review is central to the GTD system because…",
     options: [
      { text: "Without it, open loops accumulate and you lose trust in your system, reverting to mental holding.", correct: true },
      { text: "It is the only time you should process your capture inbox.", misconception: "Capture is continuous. The review is about reflection and keeping the system current." },
      { text: "It is when you rank tasks by priority for the week.", misconception: "Prioritisation happens at the engagement step. The review is about ensuring nothing is missed." },
      { text: "It replaces all other planning sessions.", misconception: "Weekly review sits alongside, not instead of, quarterly or monthly planning." }
     ],
     why: "The review is what keeps the external trusted system trustworthy. Without it, the system decays and fails its core purpose."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write a review checklist", d: "Write a personal weekly review checklist with all the areas you need to check: inbox, task lists, calendar, projects, and commitments. Make it reusable.", xp: 15 },
    { level: "easy", t: "Run one weekly review", d: "Block 60 minutes this week and run your first formal weekly review using your checklist. Note how long it takes and what you found that had been missed.", xp: 25 },
    { level: "advanced", t: "Maintain four consecutive reviews", d: "Run four weekly reviews in a row without skipping. After the fourth, write a brief note on what the habit changed about your sense of clarity and control.", xp: 40 }
   ]
  },
  {
   t: "Energy Management vs Time Management",
   subdomain: "time_energy",
   definition: "The recognition that human performance depends on managing physical, emotional, mental, and spiritual energy, not just allocating hours.",
   short: "You have 24 hours every day. Your energy varies. Manage the energy, not just the calendar.",
   deep: "Jim Loehr and Tony Schwartz (The Power of Full Engagement, 2003) argued that time is a fixed resource but energy is renewable and the real limiting factor in performance. They identified four energy dimensions: physical (sleep, exercise, nutrition), emotional (relationships, recovery), mental (focus, learning), and spiritual (purpose, values). High performance requires managing all four. Practically: treating sleep as performance infrastructure, taking short recovery breaks between focused sessions, protecting time with people who energise you, and connecting daily work to longer purposes. The insight reframes burnout from a time problem to an energy depletion problem.",
   status: "framework",
   reflect: "At what time of day do you do your best thinking? When do you have the lowest energy? Does your schedule reflect these patterns?",
   conceptQuiz: [
    {
     q: "The core argument of energy management is that…",
     options: [
      { text: "Human performance depends on managing physical, emotional, mental, and spiritual energy, not just scheduling hours.", correct: true },
      { text: "Working fewer hours always produces better results.", misconception: "The argument is about energy quality, not hour quantity. Fewer hours with depleted energy still produces poor work." },
      { text: "Caffeine is a reliable substitute for sleep in high-demand periods.", misconception: "The energy management framework explicitly treats sleep as foundational, not replaceable." },
      { text: "Exercise should be done in the morning for maximum productivity benefit.", misconception: "Timing depends on individual chronotype. The principle is that physical energy supports cognitive energy, not that morning exercise is mandatory." }
     ],
     why: "Energy is the actual input to performance. Time without energy produces low-quality output. The energy dimensions interact."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Map your energy curve", d: "For three days, note your energy level (high, medium, low) every two hours. Find your personal peak energy window and your typical energy crash point.", xp: 15 },
    { level: "easy", t: "Protect your peak hours", d: "Move your most cognitively demanding work into your identified peak energy window for two weeks. Track whether quality or quantity of output changes.", xp: 25 },
    { level: "advanced", t: "Audit all four energy dimensions", d: "Score yourself on all four energy dimensions from Loehr and Schwartz (physical, emotional, mental, spiritual) on a scale of 1 to 10. Write two specific changes for the lowest-scoring dimension.", xp: 40 }
   ]
  },
  {
   t: "Single-Tasking",
   subdomain: "attention",
   definition: "The practice of giving full attention to one task at a time and finishing or intentionally pausing it before switching to another.",
   short: "Multitasking does not exist for cognitively demanding work. Every switch costs you focus and time.",
   deep: "The research on multitasking is consistent: for tasks requiring conscious processing, switching between them incurs a cognitive switching cost (Rubinstein, Meyer, Evans, 2001). You do not do two things at once. You rapidly alternate between them, and each switch requires the brain to reload the context of the task you are returning to. This costs time (estimated at 20 to 40% of productive time lost to switching) and errors. Single-tasking is the practice of doing one thing until it is done or until you have reached a natural stopping point, then deliberately switching. It is harder than it sounds in notification-rich environments.",
   status: "settled",
   reflect: "In the last hour, how many times did you switch between tasks? Did any of those switches feel necessary at the time?",
   conceptQuiz: [
    {
     q: "Research on multitasking shows that for cognitively demanding work…",
     options: [
      { text: "Task-switching incurs a measurable cognitive cost that reduces both speed and accuracy.", correct: true },
      { text: "Multitasking is possible for simple tasks but not for complex ones.", misconception: "Even for simple tasks, rapid switching incurs some cost. The research finding is directionally consistent across difficulty levels." },
      { text: "Women multitask more effectively than men, offsetting the cost.", misconception: "The small observed gender differences in switching costs do not eliminate the cost. The basic finding applies broadly." },
      { text: "The switching cost disappears after practice.", misconception: "The switching cost reduces but does not disappear. Even expert multitaskers show measurable performance decrements." }
     ],
     why: "The switching cost is consistent across studies. Attention must be reloaded each time you switch, and that overhead adds up."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Count your switches", d: "During one 90-minute work session, use a tally sheet to count how many times you switch between tasks, apps, or browser tabs. Total the number.", xp: 10 },
    { level: "easy", t: "One-tab mornings", d: "For one week, keep only one browser tab open during your morning deep work session. Note whether this changes your concentration.", xp: 20 },
    { level: "advanced", t: "Pomodoro experiment", d: "Run 25-minute single-task blocks (Pomodoro technique) for two weeks. Track the number of completed blocks per day and your subjective focus quality. Compare output to your baseline.", xp: 40 }
   ]
  },
  {
   t: "The Eisenhower Matrix",
   subdomain: "review_planning",
   definition: "A prioritisation framework that sorts tasks into four quadrants by urgency and importance, attributed to Dwight Eisenhower and popularised by Stephen Covey.",
   short: "Urgent and important are not the same thing. Most people spend too much time on urgent unimportant tasks.",
   deep: "The matrix has four quadrants. Q1 (urgent and important): crises, deadlines, genuine emergencies. Do immediately. Q2 (important, not urgent): planning, learning, relationship-building, prevention. Schedule deliberately. Q3 (urgent, not important): most interruptions, some meetings, many emails. Delegate or minimise. Q4 (not urgent, not important): time-wasters. Eliminate. Covey's insight: most high-performing people spend disproportionate time in Q2, because Q2 work prevents Q1 crises from forming. Most stressed people spend all their time in Q1 and Q3, reacting to urgency rather than investing in importance. The matrix is a mental sorting tool, not a rigid system.",
   status: "framework",
   reflect: "Look at your task list right now. Which quadrant does each item belong in? What percentage of your current week is in Q2?",
   generic: "Imagine two types of dentist visits: the emergency root canal when your tooth is already screaming (Q1 urgent and important), and the regular check-up you keep delaying (Q2 important, not urgent). Q2 investing prevents Q1 emergencies. Most people skip check-ups until the emergency arrives.",
   expert: "The matrix is attributed to Eisenhower's remark that 'what is important is seldom urgent and what is urgent is seldom important,' though the attribution is not precisely verified. Covey popularised it in The 7 Habits (1989) as the Time Management Matrix. The framework is a heuristic, not a rigorously validated decision tool. Its value is as a mental habit, not a precise sorter. The Q2 insight aligns with research on proactive versus reactive goal pursuit (Gollwitzer, 1999). The main critique is that Q designation depends on subjective assessment of importance, which varies by role and context.",
   conceptQuiz: [
    {
     q: "According to Covey, the highest-leverage quadrant for long-term effectiveness is…",
     options: [
      { text: "Q2: important but not urgent. Planning, prevention, and learning that prevents Q1 crises.", correct: true },
      { text: "Q1: urgent and important. These demand immediate attention and cannot be postponed.", misconception: "Q1 must be handled, but living primarily in Q1 signals that Q2 investments are not being made." },
      { text: "Q3: urgent but not important. These feel productive because of the urgency signal.", misconception: "Q3 tasks create the feeling of busyness without meaningful output. They are a trap, not a priority." },
      { text: "Q4: not urgent and not important. Rest is important for recovery.", misconception: "Recovery time has value but Q4 is defined by things that are genuinely wasteful, not by rest or recovery." }
     ],
     why: "Q2 is where prevention and growth live. Most Q1 crises are Q2 investments that were not made in time."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Sort this week's tasks", d: "Take your current task list and assign each item to a quadrant. Count how many are in Q2. The answer tells you how proactively you are managing your work.", xp: 10 },
    { level: "easy", t: "Q2 time block", d: "Identify one important, non-urgent task you have been delaying. Block two hours this week specifically for it. Treat the block as non-negotiable.", xp: 20 },
    { level: "advanced", t: "Q2 planning session", d: "Block 90 minutes at the start of each week for Q2 work: planning, learning, or relationship-building. Do this for four consecutive weeks and note whether Q1 crises decreased.", xp: 40 }
   ]
  }
 ],

 counterView: "The productivity industrial complex has a dirty secret: most productivity advice makes you feel busy thinking about productivity rather than actually doing anything. GTD has been called a system for people who prefer organising to doing. Inbox zero can become a compulsion that substitutes email management for real work. Time blocking fails completely in roles with unpredictable demands. And the entire deep work narrative was written by a computer science professor with a door he can close. Most workers cannot close their door. The honest answer is that context matters enormously, no system survives contact with a chaotic workplace culture, and the most productive thing most people could do is work at an organisation that does not systematically destroy their ability to concentrate.",

 capabilities: [
  "Run a weekly review in under 45 minutes that leaves you with a clear head and current system.",
  "Time-block at least two focused hours per day and defend those blocks from reactive interruptions.",
  "Process your email inbox to zero using the GTD five-decision framework.",
  "Sort any task list using the Eisenhower matrix and identify which quadrant deserves more time.",
  "Identify your peak energy hours and schedule your most demanding work inside them.",
  "Complete a brain dump and process everything into a trusted external system.",
  "Do a single-task 90-minute work block without switching context."
 ],

 cheatsheet: [
  "GTD: capture everything, clarify next action, organise by context, reflect weekly, engage from system.",
  "Weekly review: get clear, get current, get creative. The engine of the system.",
  "Time blocking: schedule the important before the urgent fills the calendar.",
  "Two-minute rule: if it takes less than two minutes, do it now. Do not defer trivialities.",
  "Eat the frog: most important task first. Best energy on highest leverage work.",
  "Deep work: 90-plus minute blocks, zero notifications, cognitively demanding single task.",
  "Eisenhower: Q2 is where prevention and growth live. Most people never get there.",
  "Energy: sleep, exercise, and recovery are performance inputs, not optional extras."
 ],

 roadmap: [
  { rank: "Novice",       focus: "Basic capture",             do: "Read GTD or a solid summary. Set up one trusted capture inbox. Write a brain dump this week.",                                       milestone: "One week of capturing everything into one place.",                       time: "1 week" },
  { rank: "Apprentice",   focus: "Processing habit",          do: "Process your capture inbox daily. Apply the two-minute rule. Try inbox zero once.",                                                   milestone: "Inbox zero achieved once. Zero open loops in your head.",                time: "2 weeks" },
  { rank: "Practitioner", focus: "Time blocking",             do: "Design your ideal week. Block two deep work hours per morning. Batch meetings in the afternoon.",                                      milestone: "Two focused hours per day maintained for four weeks.",                   time: "1 month" },
  { rank: "Specialist",   focus: "Weekly review",             do: "Run four consecutive weekly reviews. Add the Eisenhower matrix to your task processing. Track deep work hours.",                        milestone: "Four-week weekly review streak. Q2 time exceeds Q3 time.",               time: "1 month" },
  { rank: "Expert",       focus: "Energy optimisation",       do: "Map your energy curve. Schedule work by energy type. Optimise sleep and exercise as performance infrastructure.",                      milestone: "Consistent 3-plus hours of deep work per day for 8 weeks.",              time: "2 months" },
  { rank: "Master",       focus: "System design",             do: "Design a personal operating system combining task, time, and energy management. Document it. Teach someone else.",                    milestone: "Your system runs without willpower. Someone else can implement it.",      time: "6 months" },
  { rank: "Grandmaster",  focus: "Slow productivity",         do: "Read Newport's Slow Productivity and Burkeman's Four Thousand Weeks. Redesign around fewer, deeper commitments.",                    milestone: "You produce your best work ever at a sustainable pace for six months.",   time: "1 year" }
 ],

 resources: {
  free: [
   { name: "Getting Things Done summary (Nat Eliason)", what: "Comprehensive free summary of the GTD system.", url: "", kind: "article", verify: true },
   { name: "Deep Work summary and key concepts", what: "Core frameworks from Newport's book without buying it first.", url: "", kind: "article", verify: true },
   { name: "Todoist Productivity Methods guide", what: "Overview of GTD, time blocking, and other systems with practical setup tips.", url: "https://todoist.com/productivity-methods", kind: "article", weight: "popular" }
  ],
  paid: [
   { name: "Getting Things Done", what: "Allen 2001. The definitive reference for the GTD system. Read the revised 2015 edition.", url: "", kind: "book", weight: "primary", price: "approx Rs. 600 on Amazon India", verify: true },
   { name: "Deep Work", what: "Newport 2016. The strongest case for protecting focused time in a distracted world.", url: "", kind: "book", weight: "primary", price: "approx Rs. 500 on Amazon India", verify: true },
   { name: "The 7 Habits of Highly Effective People", what: "Covey 1989. The Eisenhower matrix and the foundational priorities framework.", url: "", kind: "book", weight: "primary", price: "approx Rs. 500 on Amazon India", verify: true }
  ]
 },

 missions: [
  { t: "Brain dump and process",          d: "Spend 20 minutes writing every open loop in your head. Then process each item to a clear next action or a deletion.",                                               xp: 50 },
  { t: "Design your ideal week",          d: "On paper or in your calendar, design the ideal structure of your week: deep work blocks, meeting windows, email windows, and recovery. Compare it to last week.",   xp: 60 },
  { t: "Four weekly reviews",             d: "Run a formal weekly review for four consecutive weeks. Track how long it takes and what you found that had been missed.",                                           xp: 80 },
  { t: "Deep work experiment",            d: "Commit to 90 minutes of single-tasking, notifications-off deep work every morning for two weeks. Log daily hours. Report the change in output.",                    xp: 70 },
  { t: "Eisenhower audit",                d: "Sort your entire task list into the Eisenhower matrix. Calculate the percentage of time currently in each quadrant. Commit to one change.",                         xp: 50 },
  { t: "Energy mapping",                  d: "Track your energy level every two hours for one week. Identify your peak window and your crash. Redesign one day's schedule around this data.",                     xp: 60 }
 ],

 quiz: [
  {
   q: "In David Allen's GTD, the purpose of the weekly review is…",
   options: [
    { text: "To process all open loops and keep the trusted system current so you can trust it.", correct: true },
    { text: "To set goals for the coming week.", misconception: "Goal-setting is part of quarterly or annual planning. The weekly review is about keeping the system accurate, not setting goals." },
    { text: "To delete unimportant tasks to keep the list manageable.", misconception: "Deletion happens during the clarify step of daily processing, not specifically in the weekly review." },
    { text: "To catch up on emails you missed during the week.", misconception: "Email processing is part of the capture-and-clarify cycle, not a function of the weekly review specifically." }
   ],
   why: "The weekly review keeps the system trustworthy. Without it, open loops accumulate and the system fails its core purpose."
  },
  {
   q: "Cal Newport's core claim about deep work is…",
   options: [
    { text: "The ability to perform intense, distraction-free work is becoming rarer and more economically valuable simultaneously.", correct: true },
    { text: "Working more than eight hours per day is counterproductive for knowledge workers.", misconception: "Newport does not make a claim about optimal hours. He makes a claim about the quality and depth of focused attention." },
    { text: "Social media use is the primary productivity threat for modern workers.", misconception: "Social media is one example but the core argument is about the economics of focused attention, not about any specific platform." },
    { text: "Shallow work should be eliminated entirely.", misconception: "Newport acknowledges that shallow work is necessary. His prescription is to minimise it and batch it, not eliminate it." }
   ],
   why: "The scarcity and value argument is what gives deep work its economic weight, not just the productivity benefit."
  },
  {
   q: "The Eisenhower matrix identifies which quadrant as the highest leverage for long-term effectiveness?",
   options: [
    { text: "Q2: important and not urgent.", correct: true },
    { text: "Q1: urgent and important.", misconception: "Q1 must be handled but constant Q1 living means Q2 investments are not being made." },
    { text: "Q3: urgent and not important.", misconception: "Q3 produces the feeling of productivity through urgency without creating real value." },
    { text: "Q4: not urgent and not important.", misconception: "Q4 is what you eliminate. Recovery and rest can overlap with Q2, not Q4." }
   ],
   why: "Q2 is where planning, learning, prevention, and relationship-building live. They prevent Q1 crises and compound over time."
  },
  {
   q: "The two-minute rule in GTD applies when…",
   options: [
    { text: "Processing an item that can be completed in under two minutes. Do it immediately rather than deferring.", correct: true },
    { text: "Deciding whether to respond to an email within two minutes of receiving it.", misconception: "The rule applies to item processing, not to response time standards." },
    { text: "Determining whether a task is worth doing at all.", misconception: "The two-minute threshold is about whether to do it now versus defer, not whether to do it at all." },
    { text: "Limiting time spent on any individual email to two minutes.", misconception: "The rule is a processing heuristic, not a time-boxing technique for individual emails." }
   ],
   why: "The overhead of capturing, deferring, reviewing, and re-deciding a small task often exceeds two minutes. Do it now."
  },
  {
   q: "Energy management differs from time management in that it…",
   options: [
    { text: "Treats physical, emotional, and mental energy as renewable resources that must be managed alongside time.", correct: true },
    { text: "Recommends working shorter hours to conserve energy.", misconception: "Energy management is about quality of engagement across all dimensions, not about reducing hours." },
    { text: "Focuses only on physical energy through exercise and sleep.", misconception: "The framework includes emotional, mental, and spiritual dimensions in addition to physical energy." },
    { text: "Replaces time management entirely.", misconception: "Energy management complements time management. Both dimensions matter. The argument is that energy is often the more binding constraint." }
   ],
   why: "Energy is renewable but finite. Managing it across four dimensions is what determines the quality of output per hour, not just the number of hours."
  }
 ],

 flashcards: [
  { front: "What is GTD?", back: "Getting Things Done. David Allen's system: capture everything, clarify next actions, organise by context, review weekly, engage from the system." },
  { front: "What is the two-minute rule?", back: "If a task takes less than two minutes, do it immediately rather than deferring it to a list." },
  { front: "What are the four GTD steps?", back: "Capture, Clarify, Organise, Reflect (weekly review), Engage." },
  { front: "What is deep work?", back: "Cognitively demanding tasks performed in distraction-free concentration at the limit of ability. Newport 2016." },
  { front: "What is the Eisenhower Q2?", back: "Tasks that are important but not urgent: planning, learning, prevention, relationship-building. The highest leverage quadrant." },
  { front: "What is time blocking?", back: "Scheduling specific blocks of time for specific types of work in advance rather than working reactively from a list." },
  { front: "What is eating the frog?", back: "Doing your most important or most dreaded task first thing in the morning, before any reactive work." },
  { front: "What is inbox zero?", back: "Processing every email to a decision (delete, delegate, respond, defer, or do) so the inbox is never used as storage." },
  { front: "What does energy management add to time management?", back: "Recognition that physical, emotional, mental, and spiritual energy vary and that managing them produces better output per hour." },
  { front: "What is the cognitive cost of multitasking?", back: "Task-switching incurs a reloading cost estimated at 20 to 40% of productive time. For cognitive work, true multitasking does not exist." }
 ],

 glossary: [
  { term: "GTD", def: "Getting Things Done. David Allen's external-system productivity methodology." },
  { term: "Trusted system", def: "In GTD, an external capture and organisation system your brain can rely on instead of holding commitments in working memory." },
  { term: "Open loop", def: "An uncaptured commitment or unprocessed thought that stays in your head consuming background attention." },
  { term: "Deep work", def: "Cal Newport's term for distraction-free, cognitively demanding work that creates real value." },
  { term: "Shallow work", def: "Logistical, reactive tasks that are necessary but do not require deep concentration and are easily replicated." },
  { term: "Time blocking", def: "Scheduling work into specific calendar blocks in advance rather than working reactively." },
  { term: "Eisenhower matrix", def: "A four-quadrant prioritisation tool sorting tasks by urgency and importance." },
  { term: "Inbox zero", def: "A processing discipline where the email inbox is never used as a storage or task system." },
  { term: "Brain dump", def: "The practice of writing every open loop and loose end out of your head into a capture system." },
  { term: "Weekly review", def: "A recurring session to process all open loops and keep the GTD system current." },
  { term: "Energy management", def: "Managing physical, emotional, mental, and spiritual energy alongside time as inputs to performance." },
  { term: "Cognitive switching cost", def: "The time and accuracy penalty incurred each time you switch between tasks requiring conscious attention." }
 ],

 capstone: {
  t: "Design and document your personal operating system",
  d: "Build a complete personal productivity system: a capture and processing method, a time-blocking template for your ideal week, an energy curve map with scheduling implications, and a weekly review checklist. Document it clearly enough that someone else could implement it from your description alone.",
  xp: 200
 }
};

export default d;
