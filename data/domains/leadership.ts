import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "leadership",
 icon: "🧭",
 hue: "#ef4444",
 category: "Career",
 name: "Leadership",
 tagline: "Get things done through people, not despite them",

 basics: "Leadership is the capacity to influence people toward a shared purpose. It is not about rank or title. It is about creating conditions where people can do their best work, building trust fast enough to ask hard things of people, and making decisions with incomplete information without freezing.",
 deepBasics: "The research on effective leadership converges on a few durable findings: psychological safety enables performance (Edmondson), clear expectations and honest feedback build trust faster than praise, delegation done well is the highest-leverage activity a manager can take, and most leadership failures are failures of communication, not strategy. Indian organisational contexts add layers: hierarchy is culturally encoded, feedback norms are indirect, and managing across generations in family businesses produces unique dynamics.",
 whyItMatters: [
  "Leadership is the primary determinant of team performance in knowledge work, and team performance compounds over time.",
  "Understanding psychological safety helps you build environments where problems are raised early, before they become expensive.",
  "Most professionals will manage others before they feel ready. Having a framework prevents the most common beginner mistakes.",
  "In India's fast-growing startup and enterprise ecosystems, the gap between technical talent and management capability is one of the most common growth blockers."
 ],
 realWorldExample: "A VP of Engineering at a Bengaluru unicorn had an outstanding team that delivered slowly. In her 1:1s, problems were always discovered late. Post-mortems revealed issues that had been visible for weeks before they escalated. She ran a psychological safety survey. Her team scored low on 'I can raise a concern without it being used against me.' She ran a month of deliberate norm-setting: explicitly rewarding early problem-raising in team meetings, never reacting with criticism when someone flagged bad news, and personally sharing a recent mistake of her own. In 90 days, issues were raised an average of two weeks earlier. One flagged early saved a three-month delay in the roadmap. That is psychological safety converting directly to organisational performance.",

 mentors: [
  { name: "Amy Edmondson", for: "psychological safety, teaming, the fearless organisation", work: "The Fearless Organization (2018)" },
  { name: "Kim Scott", for: "radical candor, caring personally while challenging directly", work: "Radical Candor (2017)" },
  { name: "Michael Watkins", for: "first 90 days framework for new leaders", work: "The First 90 Days (2003)" },
  { name: "Paul Hersey and Ken Blanchard", for: "situational leadership model, matching leadership style to employee development level", work: "Management of Organizational Behavior (1969, multiple editions)" }
 ],

 diagrams: [
  {
   kind: "quadrant",
   title: "Radical Candor Framework (Kim Scott)",
   caption: "Two axes: care personally and challenge directly. Radical candor is high on both. The other three quadrants are failure modes.",
   data: {
    xAxis: ["Low challenge", "High challenge"],
    yAxis: ["Low care", "High care"],
    items: [
     { label: "Radical Candor", x: 0.85, y: 0.85 },
     { label: "Ruinous Empathy", x: 0.15, y: 0.85 },
     { label: "Obnoxious Aggression", x: 0.85, y: 0.15 },
     { label: "Manipulative Insincerity", x: 0.15, y: 0.15 }
    ]
   }
  },
  {
   kind: "quadrant",
   title: "Situational Leadership (Hersey and Blanchard)",
   caption: "Leadership style should match the employee's development level. Telling for low capability/high commitment. Coaching, supporting, delegating as both capability and commitment develop.",
   data: {
    xAxis: ["Low direction", "High direction"],
    yAxis: ["Low support", "High support"],
    items: [
     { label: "Telling (D1)", x: 0.85, y: 0.15 },
     { label: "Coaching (D2)", x: 0.85, y: 0.85 },
     { label: "Supporting (D3)", x: 0.15, y: 0.85 },
     { label: "Delegating (D4)", x: 0.15, y: 0.15 }
    ]
   }
  }
 ],

 synthesis: [
  { concept: "Psychological safety", linksTo: "psychology", note: "Psychological safety is applied cognitive safety theory. The fear response that inhibits honest speech in unsafe environments is the same System 1 threat-detection that Kahneman describes." },
  { concept: "OKRs", linksTo: "entrepreneurship", note: "OKRs were developed in the startup context by Andy Grove at Intel and popularised by John Doerr. They are as relevant in established companies as in startups." },
  { concept: "Radical candor", linksTo: "communication", note: "Radical candor is the leadership application of the broader communication principle: say what you mean, make it specific, and deliver it with care for the other person." },
  { concept: "Feedback frameworks", linksTo: "mental_models", note: "The SBI feedback model is a first-principles application of the principle that observations and interpretations should be kept separate." }
 ],

 subdomains: [
  {
   id: "trust_safety",
   name: "Trust and Psychological Safety",
   intro: "Teams that feel safe to speak up, flag problems, and take risks outperform those that do not. Building safety is the foundational leadership task.",
   capabilities: [
    "Assess the psychological safety level of your team using a structured survey or observation.",
    "Respond to bad news from your team in a way that rewards the messenger.",
    "Run a team norm-setting session that makes psychological safety an explicit shared value."
   ]
  },
  {
   id: "feedback_candor",
   name: "Feedback and Candor",
   intro: "Feedback is the primary tool for growing people. Most managers give too little, too late, and too vaguely.",
   capabilities: [
    "Deliver a specific, observation-based piece of critical feedback using the SBI framework.",
    "Distinguish between ruinous empathy and radical candor in your own feedback patterns.",
    "Create a culture where feedback flows in all directions, not just from manager to report."
   ]
  },
  {
   id: "execution",
   name: "Delegation and Execution",
   intro: "The shift from doing to leading requires genuine delegation: handing off the problem, not just the task, while maintaining accountability without micromanaging.",
   capabilities: [
    "Use the 70% rule to identify tasks appropriate to delegate.",
    "Delegate an outcome, not a process, and check in at milestones rather than continuously.",
    "Set OKRs for your team that connect individual work to organisational goals."
   ]
  },
  {
   id: "leadership_transition",
   name: "Leadership Transitions",
   intro: "New leaders fail most often in the first 90 days. The patterns are predictable and avoidable.",
   capabilities: [
    "Map the stakeholders, culture, and situation type in the first 30 days of a new role.",
    "Distinguish between situations that require action immediately and those that require learning first.",
    "Build early wins that create credibility without overcommitting to the wrong priorities."
   ]
  }
 ],

 concepts: [
  {
   t: "Situational Leadership (Hersey and Blanchard)",
   subdomain: "execution",
   definition: "A leadership model that prescribes matching the style of leadership (telling, coaching, supporting, delegating) to the development level of the individual employee for a specific task.",
   short: "There is no single best leadership style. The right approach depends on the person and the task.",
   deep: "Hersey and Blanchard's model identifies four development levels: D1 (low competence, high commitment: new to the task but eager), D2 (some competence, low commitment: has tried and discovered it is harder than expected), D3 (high competence, variable commitment: capable but not always motivated), D4 (high competence, high commitment: expert who just needs to be left alone). Each level calls for a different style: Telling (S1: high direction, low support), Coaching (S2: high direction, high support), Supporting (S3: low direction, high support), Delegating (S4: low direction, low support). In Indian organisations with strong hierarchy, the natural default is Telling regardless of employee capability. The model's insight is that telling a D4 employee (high competence, high commitment) what to do is demotivating and inefficient.",
   status: "framework",
   reflect: "For each person you manage, which development level would you assign them for their main current task? Is your leadership style matched to that level?",
   generic: "Think of how you would teach someone to ride a bike. At first you run alongside holding the seat (high direction, high support). Then you give less instruction but stay close. Eventually you just wave from the porch. The right involvement depends on where they are, not on a consistent preference for hands-on or hands-off.",
   expert: "Hersey and Blanchard first published the model as Life Cycle Theory of Leadership in 1969 and refined it in subsequent editions. The framework has been critiqued for weak empirical support for its specific stage claims (Graeff, 1983; Vecchio, 1987). Replication studies have found mixed results for the core proposition that style-situation matching improves outcomes over consistent high-relationship approaches. The model is most useful as a cognitive tool for managers to think about why a standard approach may not be working, not as a prescriptive algorithm. The framework status reflects the gap between its widespread practical adoption and limited experimental validation.",
   conceptQuiz: [
    {
     q: "In situational leadership, which style is appropriate for an employee who is highly capable but currently disengaged from a specific task?",
     options: [
      { text: "Supporting (S3): low direction, high support. Focus on motivation, not instruction.", correct: true },
      { text: "Telling (S1): high direction, low support. Ensure they know what to do.", misconception: "Telling is for low-competence employees who need instruction. A capable but disengaged person does not need more direction." },
      { text: "Delegating (S4): low direction, low support. Trust them to handle it.", misconception: "Delegating suits D4 (high competence, high commitment). Disengagement signals a commitment gap that requires support." },
      { text: "Coaching (S2): high direction, high support. Teach them how to re-engage.", misconception: "Coaching is for D2 employees who need both instruction and encouragement. A D3 employee has the skill." }
     ],
     why: "D3 has the capability but variable commitment. S3 supporting addresses the motivation gap without re-teaching skills they already have."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Assess your team's development levels", d: "For each person who reports to you (or a team you observe), assign a D1 to D4 level for their primary current task. Write the evidence for each rating.", xp: 15 },
    { level: "easy", t: "Match style to level", d: "For your lowest-scoring D-level person, describe how you would change your leadership approach this week. What specifically would you stop doing and start doing?", xp: 25 },
    { level: "advanced", t: "Quarterly development map", d: "Create a quarterly development plan for each direct report using the situational leadership model: current D-level, target D-level by quarter-end, and the specific style shifts you will make.", xp: 45 }
   ]
  },
  {
   t: "Psychological Safety (Amy Edmondson)",
   subdomain: "trust_safety",
   definition: "The shared belief among team members that the team is safe for interpersonal risk-taking: speaking up, asking questions, admitting mistakes, and raising concerns without fear of punishment or humiliation.",
   short: "When people fear speaking up, problems hide. Psychological safety is what makes information flow.",
   deep: "Amy Edmondson's research (1999, 2018) began with a paradox: in hospital settings, the most competent teams reported more errors. The explanation: they were not making more errors. They felt safe enough to report them. High psychological safety teams surface problems before they escalate. Low psychological safety teams hide problems until they become expensive. The effect generalises across industries, including software teams (Google's Project Aristotle, 2016) and manufacturing. The manager's role in creating safety: being accessible (responding to raised concerns without punishment), being fallible (sharing their own mistakes), and being explicit about uncertainty (saying 'I don't know' when that is true). In India, where hierarchy strongly shapes communication norms, psychological safety must be explicitly constructed by leaders who signal it is safe to contradict or correct them.",
   status: "settled",
   reflect: "In your current team or organisation, would people tell you something was going wrong if they feared it would make them look bad? What evidence do you have?",
   generic: "Think of a doctor who asks 'any concerns?' at the end of an appointment in a way that signals they are already walking to the door. Most patients have concerns but say nothing. Now think of the same question asked while sitting down and making eye contact. The second doctor will hear things the first never does. Psychological safety is the difference between these two postures, applied to teams every day.",
   expert: "Edmondson (1999) first published the construct in an inductive study of hospital nursing teams. The seminal finding that higher-performing teams reported more errors challenged prevailing assumptions about error suppression. Subsequent large-scale validation includes Baer and Frese (2003) in German companies and Google's Project Aristotle (Rozovsky, 2016) which identified psychological safety as the strongest predictor of team effectiveness across 180 teams at Google. The cross-cultural generalisability has been explored by Carmeli, Reiter-Palmon, and Ziv (2010). In high power-distance cultures like India, the magnitude of the psychological safety effect may be larger because the baseline safety level is lower.",
   conceptQuiz: [
    {
     q: "Amy Edmondson's original finding about medical errors showed that…",
     options: [
      { text: "The most competent teams reported more errors, because they felt safe enough to raise them rather than hide them.", correct: true },
      { text: "Better-trained teams made fewer errors and also reported fewer.", misconception: "The finding was the opposite: reporting and error incidence were decoupled by safety, not by competence." },
      { text: "Psychological safety was only present in highly hierarchical teams.", misconception: "Psychological safety was inversely related to hierarchy. Flatter, more open teams showed higher safety." },
      { text: "Error reporting was primarily driven by mandatory reporting systems, not safety culture.", misconception: "Edmondson's insight was that reporting was driven by the interpersonal safety climate, not by external requirements." }
     ],
     why: "The reporting-competence paradox was the founding insight: safety determines what information reaches the surface, independent of actual error rates."
    },
    {
     q: "In a high power-distance culture like India, building psychological safety is especially important because…",
     options: [
      { text: "Hierarchy norms already suppress dissent and bad news. Without deliberate safety-building, problems stay hidden even longer.", correct: true },
      { text: "Indian team members are less capable of identifying problems than teams in other cultures.", misconception: "The issue is communication norms, not analytical capability. Hierarchy suppresses transmission, not perception." },
      { text: "Indian organisations have fewer formal error reporting systems.", misconception: "The psychological safety effect operates independently of formal systems. The culture of communication is the mechanism." },
      { text: "Safety is less important in individual tasks than in collaborative ones.", misconception: "Individual task safety and team safety both matter. The research finding is about team dynamics specifically." }
     ],
     why: "High power distance means the gap between what is visible to frontline workers and what reaches leaders is already large. Safety-building must work harder to close it."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Run a psychological safety survey", d: "Use Edmondson's seven-item scale (available publicly) to survey your team or a team you observe. Calculate a team score and identify the lowest-scoring items.", xp: 20 },
    { level: "easy", t: "Respond differently to bad news", d: "In your next three interactions where someone brings a problem or failure, practice the response: acknowledge, ask what happened, what was learned, not who to blame. Note the reactions you get.", xp: 25 },
    { level: "advanced", t: "Run a team norm-setting session", d: "Facilitate a 60-minute team session to explicitly define psychological safety norms: what does it mean for us to feel safe raising problems? Write the norms and post them visibly.", xp: 50 }
   ]
  },
  {
   t: "Delegation: The 70% Rule",
   subdomain: "execution",
   definition: "The management principle that work should be delegated when someone else can do it at least 70% as well as you, because the long-term development benefits to them and the time freed for you outweigh the short-term quality gap.",
   short: "If someone can do it 70% as well as you, delegate it. Doing it yourself is a long-term loss.",
   deep: "The 70% rule addresses the most common delegation failure: not delegating because no one does it as well as you. The rule's logic: if you do every task yourself to ensure 100% quality, you never develop your team, you become the bottleneck on every decision, and your highest-leverage work never gets done because you are doing everyone else's work at a 20% premium. The correct frame: delegation is an investment with a time horizon. The delegate will do it at 70% the first time, 85% the second, and 95% by the fifth. You have freed your time for higher-leverage work and developed a team member simultaneously. The caveat: tasks requiring your specific authority, external relationships, or unique judgment should not be delegated. Everything else should be evaluated against the 70% threshold.",
   status: "framework",
   reflect: "What tasks are you currently doing that someone else could do at 70% of your quality? Why have you not delegated them yet?",
   conceptQuiz: [
    {
     q: "The core argument for the 70% delegation rule is…",
     options: [
      { text: "The long-term benefit of team development and time freed for higher-leverage work outweighs the short-term quality gap.", correct: true },
      { text: "Speed is more important than quality in most tasks.", misconception: "The rule is not about valuing speed over quality. It is about the total cost of doing it yourself versus developing someone else." },
      { text: "70% quality is acceptable for all tasks.", misconception: "The rule does not claim 70% is fine for every task. It claims 70% is the threshold below which development time is worth the quality gap." },
      { text: "Managers are always better at tasks than their reports.", misconception: "The rule assumes the manager does it better, but argues that long-term development makes delegation more valuable anyway." }
     ],
     why: "The frame is investment, not quality threshold. Developing someone who can eventually do it at 100% requires accepting 70% initially."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "List delegable tasks", d: "Write down every recurring task you do in a week. Mark each with: must be me, could be 70%, or should already be delegated. The last two columns are your action list.", xp: 15 },
    { level: "easy", t: "Delegate one task fully", d: "Pick one task from your list. Delegate it this week with a clear outcome, timeline, and check-in point. Do not take it back when the result is not exactly how you would have done it.", xp: 25 },
    { level: "advanced", t: "Build a delegation ladder", d: "For three tasks you currently own, build a development ladder: current capability of your delegate, what skills they need to take it over fully, and a 90-day timeline to transfer ownership.", xp: 45 }
   ]
  },
  {
   t: "Radical Candor (Kim Scott)",
   subdomain: "feedback_candor",
   definition: "Kim Scott's framework for effective feedback, defined as caring personally about the person while challenging them directly with honest, specific, and timely feedback.",
   short: "Say what you mean because you care about the person, not despite caring about them.",
   deep: "Kim Scott identified two axes: care personally (genuine investment in the person's wellbeing and growth) and challenge directly (willingness to give honest, specific feedback). The four quadrants: Radical Candor (high care, high challenge): the goal. Ruinous Empathy (high care, low challenge): niceness that withholds honest feedback and fails the person. Obnoxious Aggression (low care, high challenge): harsh feedback without relationship. Manipulative Insincerity (low care, low challenge): political, uncommitted. Most managers fall into ruinous empathy. The Indian workplace context: indirect communication norms often push feedback toward vagueness even when the manager genuinely cares. Radical candor requires specific, observation-based feedback delivered in private and in real time, not in annual reviews.",
   status: "framework",
   reflect: "Think of the most important developmental feedback you have not given someone who reports to you. What is stopping you from giving it? Is it care or is it avoidance?",
   generic: "Think of a friend who has spinach in their teeth. Ruinous empathy says nothing to avoid embarrassment. Radical candor says 'hey, spinach.' The friend is grateful and slightly embarrassed. The alternative is they spend the day at an important meeting looking like that. Feedback is what you give people because you care, not despite it.",
   expert: "Kim Scott coined the term and popularised the framework in Radical Candor (2017), drawing on her experiences at Google and Apple. The framework synthesises principles from direct communication research and management literature. It overlaps with Buckingham and Goodall's strengths-based feedback critique (Nine Lies About Work, 2019) in recognising the failure mode of vague positive feedback, though Buckingham and Goodall argue that the framing of weaknesses is counterproductive in ways Scott does not. The framework is widely adopted in tech companies but its transferability to high power-distance contexts requires adaptation of the directness norms.",
   conceptQuiz: [
    {
     q: "A manager praises their report's work in a meeting despite privately believing the quality was mediocre. According to radical candor, this is…",
     options: [
      { text: "Ruinous empathy: the manager is prioritising short-term comfort over the report's actual development.", correct: true },
      { text: "Radical candor because it publicly supports the report.", misconception: "Public praise without private honesty is the definition of ruinous empathy in Scott's framework." },
      { text: "Appropriate if the work is visible to stakeholders.", misconception: "Visibility makes honest feedback more important, not less. Allowing mediocre work to be presented as strong is a disservice." },
      { text: "Acceptable because positive feedback builds confidence.", misconception: "Unearned praise undermines trust when the person eventually discovers the manager's real assessment." }
     ],
     why: "Ruinous empathy is niceness that withholds the honest feedback that would actually help the person. It feels kind and is harmful."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit your feedback patterns", d: "Think of the last five pieces of feedback you gave. Plot each on the radical candor grid. What quadrant do you land in most often?", xp: 15 },
    { level: "easy", t: "Give one piece of specific critical feedback", d: "Identify one developmental area for someone you work with. Give the feedback today using the SBI framework (situation, behaviour, impact). Deliver it in private.", xp: 25 },
    { level: "advanced", t: "Build a feedback culture", d: "Introduce a lightweight feedback mechanism in your team: weekly check-ins, monthly one-on-ones with explicit feedback time, or a retro with a safety-first norm. Run it for four weeks and note what changes.", xp: 50 }
   ]
  },
  {
   t: "OKRs",
   subdomain: "execution",
   fullForm: "Objectives and Key Results",
   definition: "A goal-setting framework where ambitious qualitative objectives are paired with measurable key results that define what success looks like.",
   short: "Where are we going and how will we know we got there? OKRs answer both questions in one structure.",
   deep: "Objectives are ambitious, qualitative, and motivating: 'Become the most trusted loan provider for first-time borrowers in India.' Key results are specific, measurable, time-bound outcomes that define what achieving the objective looks like: 'NPS for first-loan customers reaches 70 by Q4.' OKRs were developed by Andy Grove at Intel and popularised by John Doerr at Google (Measure What Matters, 2018). Key principles: OKRs are not a performance review tool. Consistently hitting 70 to 80% of key results is the target (if you hit 100%, the objective was not ambitious enough). OKRs are transparent across the organisation. Teams connect their OKRs to the company OKRs. The failure mode: OKRs become a bureaucratic exercise rather than a genuine alignment tool when they are not discussed, not revisited, or not connected to actual work.",
   status: "framework",
   reflect: "What are your current OKRs or goals? If you have them, are they specific enough to tell you on any given day whether your work is moving them?",
   generic: "An objective is 'climb Everest.' A key result is 'reach base camp by March 15, summit by May 20, descend by May 25.' The objective tells you where to go. The key results tell you if you are on track without someone checking in on you every day. That is the power of OKRs: they let ambitious goals be pursued without micromanagement.",
   expert: "Grove introduced the OKR methodology at Intel in the 1970s, building on Peter Drucker's management by objectives. Doerr documented the modern form in Measure What Matters (2018) with case studies from Google, Bono's ONE campaign, and others. The framework is widely used in technology companies but has been critiqued for creating goal-gaming behaviour, narrow focus that misses important work not captured in key results, and cultural mismatch in organisations with low psychological safety (Sutton and Rao, 2014). The framework's effectiveness is heavily implementation-dependent rather than a function of the structure itself.",
   conceptQuiz: [
    {
     q: "If a team consistently hits 100% of its key results, the most likely interpretation is…",
     options: [
      { text: "The key results were not ambitious enough. The OKR system is designed to reach 70 to 80% with properly ambitious targets.", correct: true },
      { text: "The team is performing at an exceptional level and should be recognised.", misconception: "In the OKR framework, 100% consistently signals under-ambitious targets rather than exceptional performance." },
      { text: "The key results were well-calibrated and should be used as a template.", misconception: "Well-calibrated OKRs should stretch the team beyond what is certain to be achieved." },
      { text: "The objective was not ambitious enough to require hard key results.", misconception: "Both the objective and key results should be ambitious. Consistent 100% on both signals the entire OKR was too conservative." }
     ],
     why: "OKRs are designed with stretch targets. Hitting 100% consistently means the targets were not stretching."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write one OKR", d: "Write one objective and three key results for your current role or project. Check: is the objective qualitative and motivating? Are the key results specific and measurable?", xp: 15 },
    { level: "easy", t: "Connect personal OKRs to team OKRs", d: "If you have team or company OKRs, write your personal OKRs so that each key result supports at least one team key result. Show the chain of alignment.", xp: 25 },
    { level: "advanced", t: "Run a quarterly OKR cycle", d: "Set OKRs at the start of a quarter. Run three weekly check-ins where you update progress on each key result. At quarter end, score each key result and write a one-paragraph retrospective.", xp: 50 }
   ]
  },
  {
   t: "One-on-Ones",
   subdomain: "feedback_candor",
   definition: "Regular, structured, private meetings between a manager and each direct report, primarily focused on the report's priorities, blockers, development, and wellbeing.",
   short: "The one-on-one is the most important meeting a manager has. It belongs to the report, not the manager.",
   deep: "Effective one-on-ones are the report's meeting, not the manager's. The report sets the agenda. The manager listens. The goals: surface what the manager would not otherwise hear, provide coaching and feedback in context, track development over time, and maintain the relationship that makes candid conversation possible. Poorly run one-on-ones become status updates: the manager asks what the person is working on, the person answers, and both feel like the time was wasted. The best one-on-ones cover: what is going well, what is blocked, what the manager can help with, what the report wants to work on developmentally, and one piece of feedback in both directions. In Indian corporate cultures, where hierarchy makes it rare for reports to give feedback to managers, explicitly inviting upward feedback in a private setting is a meaningful leadership act.",
   status: "settled",
   reflect: "In your last one-on-one with your manager or a direct report, who did most of the talking? Whose agenda was it serving?",
   conceptQuiz: [
    {
     q: "The biggest failure mode in one-on-ones, according to management research, is…",
     options: [
      { text: "Turning them into status updates, where the manager asks about work progress instead of the report's priorities and development.", correct: true },
      { text: "Making them too frequent, which reduces the significance of each meeting.", misconception: "Frequency (weekly vs biweekly) is a much smaller issue than the nature of what is discussed." },
      { text: "Allowing the report to set the agenda, which removes structure.", misconception: "Report-led agendas are the recommendation, not the failure mode. Manager-dominated agendas are the problem." },
      { text: "Mixing feedback with general discussion, which creates anxiety.", misconception: "Mixing feedback with relationship-building is the goal. Saving all feedback for one moment creates higher anxiety." }
     ],
     why: "Status updates can be covered in a written update. The one-on-one is for what cannot be written: blockers, growth, trust, and honest two-way feedback."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write a one-on-one template", d: "Design a one-on-one agenda template with five questions that make the meeting the report's, not the manager's. Share it with the person you meet with.", xp: 10 },
    { level: "easy", t: "Invite upward feedback", d: "In your next one-on-one with someone who reports to you, explicitly ask: 'What is one thing I am doing that makes your job harder? What could I do differently?' Write down what you hear.", xp: 25 },
    { level: "advanced", t: "Run four consecutive effective one-on-ones", d: "For one month, run weekly one-on-ones with one direct report. Use a consistent template, take notes, and follow up on action items. After four sessions, ask the report to rate the meetings.", xp: 40 }
   ]
  },
  {
   t: "Managing Up",
   subdomain: "leadership_transition",
   definition: "The practice of proactively managing your relationship with your manager, ensuring alignment on priorities, surfacing information they need, and negotiating for resources or decisions.",
   short: "Your manager has information and decisions you need. Managing up is how you get them without being dependent or passive.",
   deep: "Managing up is often misunderstood as corporate politics. It is actually the practice of creating the conditions for your own effectiveness. It includes: understanding your manager's priorities and pressure points well enough to frame your requests in terms of what matters to them; proactively sharing information they need before they have to ask; flagging problems early rather than presenting solved problems only; being explicit about what decisions you need and by when; and calibrating the level of detail they want versus the level you are tempted to give. In hierarchical Indian organisations, managing up requires navigating the tension between respecting authority and surfacing critical information that leaders may not want to hear. Building a relationship where bad news is safe to deliver is the foundation.",
   status: "framework",
   reflect: "Does your manager know what you are working on, what you need from them, and what problems are developing that they should be aware of? If not, what is preventing you from telling them?",
   conceptQuiz: [
    {
     q: "Managing up is best described as…",
     options: [
      { text: "Proactively creating the conditions for your effectiveness by keeping your manager aligned, informed, and engaged.", correct: true },
      { text: "Making your manager look good to their superiors.", misconception: "That is a possible outcome but not the definition. Managing up is about your own effectiveness, not managing perception." },
      { text: "Escalating decisions and problems to your manager when they arise.", misconception: "Escalation is one tool. Managing up is a continuous relationship practice, not just escalation management." },
      { text: "Flattering your manager to build political capital.", misconception: "This is the toxic version of what managing up can become. The practice is about alignment and communication, not flattery." }
     ],
     why: "Managing up is about creating the information flows and decision access you need to be effective. It is a professional skill, not a political game."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Map your manager's priorities", d: "Write down the top three things your manager is measured on or most concerned about this quarter. Then write how your current work connects to each of them.", xp: 10 },
    { level: "easy", t: "Weekly proactive update", d: "For four weeks, send your manager a structured weekly update before they ask for one: progress on priorities, current blockers, and one thing you need a decision on. Note whether the relationship changes.", xp: 20 },
    { level: "advanced", t: "Negotiate for a resource", d: "Identify one resource (headcount, budget, tool, decision authority) that would most improve your team's effectiveness. Build the business case and present it to your manager using their priority frame.", xp: 45 }
   ]
  },
  {
   t: "The First 90 Days (Watkins)",
   subdomain: "leadership_transition",
   definition: "Michael Watkins' framework for accelerating a transition into a new leadership role, built around diagnosing the situation, securing early wins, and building credibility before taking significant action.",
   short: "New leaders fail because they move too fast without understanding the situation. The first 90 days is a listening and learning period.",
   deep: "Watkins (2003) identified five types of business situations a new leader might enter: Startup (build from scratch), Turnaround (save a failing unit), Accelerated growth (manage rapid scaling), Realignment (re-energise a successful but stagnating unit), and Sustaining success (maintain a performing unit). Each calls for a different approach. A leader who uses turnaround tactics in a realignment will destroy what was already working. The common failure: new leaders impose their previous context on their new situation. The framework's prescriptions: in the first 30 days, listen and learn. Build a stakeholder map. Diagnose the culture. Find the early wins that create credibility without overcommitting. In Indian family businesses and promoter-led organisations, the first 90 days must also include understanding the informal power structures that are often more consequential than the org chart.",
   status: "framework",
   reflect: "Think of the last time you took on a new role. How much time did you spend listening before you started changing things? What would have been different if you had spent more?",
   conceptQuiz: [
    {
     q: "Watkins identifies five situation types for new leaders. The most dangerous error is…",
     options: [
      { text: "Applying the approach from a previous context (e.g., turnaround tactics) to a different situation type (e.g., sustaining success).", correct: true },
      { text: "Moving too slowly and missing early decision windows.", misconception: "Speed is a concern but the primary failure mode Watkins identifies is situation misdiagnosis and approach mismatch." },
      { text: "Building relationships before demonstrating results.", misconception: "Watkins recommends both in the first 90 days. Relationship-building and early wins are complementary, not competing." },
      { text: "Following your predecessor's approach too closely.", misconception: "This can be a problem but is secondary to applying the right approach for the actual situation type." }
     ],
     why: "Each situation type requires a different leadership approach. Misdiagnosis leads to applying the right tactics in the wrong context."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Diagnose your situation type", d: "Using Watkins' five types, diagnose your current role or a recent role transition. What evidence supports your classification? What does that imply for your approach?", xp: 15 },
    { level: "easy", t: "Build a stakeholder map", d: "In a new or current role, map your stakeholders: who has influence over your success, what they care about, and what your relationship currently looks like. Identify two high-priority relationships to invest in.", xp: 25 },
    { level: "advanced", t: "Write a 90-day plan", d: "Write a 90-day plan for your current role or a hypothetical new one: 30-day listening and learning priorities, 60-day early win targets, and 90-day credibility goals. Present it to a mentor or peer for critique.", xp: 50 }
   ]
  },
  {
   t: "Feedback Frameworks: The SBI Model",
   subdomain: "feedback_candor",
   fullForm: "Situation, Behaviour, Impact",
   definition: "A structured feedback model that separates observable facts (situation, behaviour) from interpretation (impact), making feedback specific, concrete, and less likely to trigger defensiveness.",
   short: "Situation, behaviour, impact. Three parts that make feedback specific, fair, and actionable.",
   deep: "SBI stands for: Situation (the specific context: 'In the team meeting on Tuesday'), Behaviour (the observable action, not the interpretation: 'you interrupted two people before they finished their points'), Impact (the effect, preferably on you or the team, not a judgment: 'I found it hard to hear both ideas and I think others stopped contributing after that'). The model works because it separates fact from interpretation. Most defensive reactions to feedback are reactions to interpreted motives ('you don't listen') rather than observed behaviour ('you interrupted'). SBI gives the recipient something specific to act on without attacking their character. In the Indian workplace context, giving direct critical feedback to peers or seniors is culturally difficult. The SBI structure helps because it grounds feedback in observable facts, which are harder to dispute than character judgements.",
   status: "settled",
   reflect: "Think of the last piece of critical feedback you gave or received. Was it specific enough to act on? Could the recipient describe the exact behaviour they should change?",
   generic: "Compare 'you are not a good listener' to 'in yesterday's call, when the client was explaining their budget constraint, you started talking about our new features before they finished. I think they felt unheard, and we lost the chance to understand the constraint.' The second gives someone something to do differently. The first gives them a verdict to dispute.",
   expert: "The SBI model was developed by the Center for Creative Leadership and is widely taught in management development programmes. It operationalises the distinction between descriptive and evaluative feedback from communication research (Gibb, 1961) and aligns with Nonviolent Communication (Rosenberg, 2003) in its separation of observations from evaluations. Research on feedback efficacy (Kluger and DeNisi, 1996) shows that feedback directed at the task level produces the most consistent positive effects on performance, while feedback directed at the person level is less reliable. SBI is a task-level and behaviour-level framework by design.",
   conceptQuiz: [
    {
     q: "The primary reason the SBI framework reduces defensive reactions to feedback is…",
     options: [
      { text: "It anchors feedback in observable behaviour rather than interpreted character, giving the recipient something specific to act on.", correct: true },
      { text: "It makes feedback feel more positive by separating it into structured components.", misconception: "SBI is not about making feedback feel positive. It is about making it specific and behaviour-focused." },
      { text: "It requires the feedback-giver to identify the impact, which shows they care.", misconception: "The impact component matters for completeness but the reduction in defensiveness comes from the behaviour specificity, not the impact demonstration." },
      { text: "It prevents the feedback-giver from using emotion in the conversation.", misconception: "Emotion is not excluded. First-person impact statements ('I found it hard to...') can include emotion. The key is separating the observable behaviour from the judgment." }
     ],
     why: "Behaviour is observable and specific. Character judgements are disputable. SBI gives people something to change rather than something to argue with."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Convert three pieces of vague feedback", d: "Take three pieces of feedback you have given or heard recently. Rewrite each using the SBI format. Compare the before and after versions for specificity and actionability.", xp: 15 },
    { level: "easy", t: "Deliver SBI feedback today", d: "Identify one piece of constructive feedback you have been avoiding. Deliver it today using the SBI framework, in private, and as close to the event as possible.", xp: 25 },
    { level: "advanced", t: "Teach SBI to your team", d: "Run a 30-minute workshop with your team on the SBI model. Practice with role plays. Commit to using SBI for all formal feedback for one month. Survey the team at month end on feedback quality.", xp: 45 }
   ]
  },
  {
   t: "Span of Control",
   subdomain: "execution",
   definition: "The number of direct reports a manager can effectively supervise, which varies based on the complexity of work, the capability of reports, and the amount of collaboration required.",
   short: "More direct reports is not better leadership. The right span depends on the work and the people.",
   deep: "The classic recommendation is 5 to 7 direct reports as an effective span for knowledge work. Too narrow a span (1 to 2 reports): the manager is likely micromanaging and the organisation is over-layered. Too wide a span (12 to 15 reports): the manager cannot give adequate attention to each person's development, blockers, or performance issues. The right span depends on several factors: how much the reports' work overlaps and can be managed in groups, how experienced and autonomous the reports are, how much the manager's own individual work competes with management time, and whether the team is stable or undergoing change. In India's fast-growing tech companies, hyper-growth often leads to spans of 10 to 15 while managers are also individual contributors. This produces the common failure mode: everyone has a manager but no one is being managed.",
   status: "framework",
   reflect: "If you have direct reports, how many do you have? Do you have enough time to have meaningful one-on-ones, track development, and unblock each one? If not, which ones are being underserved?",
   conceptQuiz: [
    {
     q: "A manager with 14 direct reports who is also a significant individual contributor is most likely experiencing…",
     options: [
      { text: "Insufficient management capacity: not enough time to develop each report, catch blockers early, or provide timely feedback.", correct: true },
      { text: "An ideal structure that maximises team output.", misconception: "Wide spans combined with IC work typically produce the opposite: reports who are technically supervised but practically unmanaged." },
      { text: "A necessary transition state during hyper-growth.", misconception: "Hyper-growth is a common cause but not a justification. The management deficit accumulates and causes problems later." },
      { text: "A sign that the reports are highly autonomous and need minimal oversight.", misconception: "Even highly autonomous reports need development, unblocking, and career guidance. A span of 14 makes this practically impossible with quality." }
     ],
     why: "Each direct report needs meaningful management attention. At 14, the math does not work without either sacrificing quality or the manager's individual work."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Calculate your current management attention", d: "Multiply the number of your direct reports by 1 hour per week (minimum effective one-on-one time). Add team meetings. Is the total compatible with your schedule? Where is the deficit?", xp: 10 },
    { level: "easy", t: "Assess each report's current needs", d: "For each direct report, write their current D-level (from situational leadership), their most important development goal, and how much management attention they currently need. Identify who is underserved.", xp: 20 },
    { level: "advanced", t: "Redesign your team structure", d: "If your span is too wide or too narrow, design an alternative structure: who could become a team lead, what work could be reduced or delegated, and what the org chart would look like with optimal spans.", xp: 40 }
   ]
  }
 ],

 counterView: "Much of the leadership canon was developed in US corporate contexts and imports poorly to other settings. The psychological safety research, primarily conducted in US and European hospitals and tech companies, may look different in high power-distance organisational cultures where respectful deference to hierarchy is a genuine cultural value rather than a symptom of fear. The first 90 days framework assumes you have 90 days. Many Indian startups and family businesses do not. The OKR system, evangelised by Silicon Valley, can produce gaming, bureaucracy, and a false sense of alignment without changing actual behaviour. And the entire manager-as-coach model assumes that individual development conversations are valued by the organisation. In many Indian firms, the title says manager but the reward system, culture, and time allocation say individual contributor. Applying imported frameworks without adapting them to context is one of the most common failure modes in Indian management development.",

 capabilities: [
  "Assess the psychological safety level of a team and run a norm-setting session to improve it.",
  "Deliver specific, observation-based feedback using the SBI framework to any colleague.",
  "Identify which direct reports should receive telling, coaching, supporting, or delegating leadership.",
  "Write an OKR set for a team that is ambitious, measurable, and connected to organisational goals.",
  "Run a high-quality one-on-one where the report's agenda dominates and feedback flows both ways.",
  "Use Watkins' first 90 days framework to diagnose a new leadership situation and prioritise learning.",
  "Apply the 70% rule to identify tasks ready for delegation and execute the handoff."
 ],

 cheatsheet: [
  "Psychological safety: reward the messenger. Share your own mistakes. Say I do not know when true.",
  "SBI feedback: situation, behaviour, impact. Specific and observable. Not character. Not verdict.",
  "Radical candor: care personally AND challenge directly. Both axes. Neither is optional.",
  "Delegation: 70% threshold. Delegate the outcome, not the process. Check milestones, not hours.",
  "OKRs: ambitious objective, measurable key results. 70 to 80% attainment is the target, not 100%.",
  "One-on-ones: the report's meeting. Their agenda. Shut up and listen. No status updates.",
  "First 90 days: diagnose the situation type before choosing the approach. Listen before acting.",
  "Span of control: 5 to 7 is typical for knowledge work. More than 10 with IC work is a deficit."
 ],

 roadmap: [
  { rank: "Novice",       focus: "Management basics",          do: "Read Kim Scott's Radical Candor. Set up weekly one-on-ones. Run your first SBI feedback.",                                                             milestone: "One structured one-on-one and one SBI feedback delivered.",                time: "2 weeks" },
  { rank: "Apprentice",   focus: "Feedback and safety",        do: "Run a psychological safety survey. Practice giving and receiving feedback regularly. Build the feedback habit in your team.",                             milestone: "Psychological safety survey completed and one norm discussed with the team.", time: "1 month" },
  { rank: "Practitioner", focus: "Delegation and goals",       do: "Apply the 70% rule. Write and run OKRs for your team for one quarter. Practice situational leadership.",                                                  milestone: "One successful full delegation. One quarter of OKRs completed with retrospective.", time: "3 months" },
  { rank: "Specialist",   focus: "Individual development",     do: "Build a development plan for each direct report. Coach from the situational leadership model. Improve your one-on-ones to the report's agenda.",          milestone: "Each report has a documented development plan. One promotion supported.", time: "6 months" },
  { rank: "Expert",       focus: "Leadership transition",      do: "Lead a team through a significant change. Apply Watkins' framework. Build managing up skills and manage across the hierarchy.",                           milestone: "A team successfully navigates a significant transition under your leadership.",  time: "1 year" },
  { rank: "Master",       focus: "Building leaders",           do: "Develop other managers. Build psychological safety as a team norm, not just a personal practice. Set culture, not just strategy.",                        milestone: "A manager you developed is independently effective with their own team.",      time: "2 years" },
  { rank: "Grandmaster",  focus: "Organisational leadership",  do: "Lead at a level where you influence culture and strategy. Build systems, not just relationships. Work on what you cannot see.",                           milestone: "An organisational culture change is measurable and sustained without your daily involvement.", time: "4 years" }
 ],

 resources: {
  free: [
   { name: "Edmondson's Psychological Safety Team Survey", what: "The original seven-item scale for measuring team psychological safety.", url: "", kind: "tool", weight: "primary", verify: true },
   { name: "Google's Project Aristotle Summary", what: "Google's research on what makes effective teams, with psychological safety as the primary finding.", url: "https://rework.withgoogle.com/guides/understanding-team-effectiveness", kind: "article", weight: "popular" },
   { name: "First Round Review: Management", what: "Practical management advice from experienced operators, covering one-on-ones, feedback, and hiring.", url: "https://review.firstround.com", kind: "article", weight: "popular" }
  ],
  paid: [
   { name: "Radical Candor", what: "Kim Scott 2017. The definitive guide to caring feedback and building candid cultures.", url: "", kind: "book", weight: "primary", price: "approx Rs. 600 on Amazon India", verify: true },
   { name: "The Fearless Organization", what: "Amy Edmondson 2018. The research behind psychological safety and how to build it.", url: "", kind: "book", weight: "primary", price: "approx Rs. 800 on Amazon India", verify: true },
   { name: "The First 90 Days", what: "Michael Watkins 2003. The framework for accelerating leadership transitions.", url: "", kind: "book", weight: "primary", price: "approx Rs. 700 on Amazon India", verify: true }
  ]
 },

 missions: [
  { t: "Run a psychological safety survey",  d: "Survey your team using Edmondson's scale. Share the aggregate results openly. Facilitate one conversation about what you could change.",                                                      xp: 60 },
  { t: "Give five SBI feedbacks in a week",  d: "Deliver five pieces of specific, observation-based feedback in one week using the SBI framework. At least two should be developmental (not just positive).",                                  xp: 70 },
  { t: "Complete a 90-day plan",            d: "Write and execute a 90-day plan for your current role or a new one: 30-day listening, 60-day early wins, 90-day credibility review. Present it to a mentor.",                                xp: 80 },
  { t: "Build a team OKR for one quarter",  d: "Write OKRs for your team for the next quarter. Run three weekly check-ins. Score the results at quarter end and write a retrospective.",                                                    xp: 80 },
  { t: "Delegate one task fully",           d: "Identify one significant task and delegate it end-to-end using the 70% rule. Do not take it back. After the deliverable, give SBI feedback on the execution.",                               xp: 60 },
  { t: "Invite upward feedback",            d: "Ask three people who report to you or work closely with you: 'What is one thing I do that makes your job harder?' Document and act on at least one response.",                              xp: 70 }
 ],

 quiz: [
  {
   q: "Amy Edmondson's research found that high psychological safety teams reported more errors. The correct explanation is…",
   options: [
    { text: "They were not making more errors but felt safe reporting them, surfacing information that low-safety teams hid.", correct: true },
    { text: "Higher safety led to lower standards, resulting in more actual errors.", misconception: "The research finding was that safety decoupled reporting from actual error rates. High-safety teams were the more competent teams." },
    { text: "Error reporting was a cultural norm in the hospitals studied, regardless of actual safety levels.", misconception: "Edmondson controlled for this. The variation in reporting was explained by safety climate, not by hospital culture uniformly." },
    { text: "The most experienced teams had both higher safety and more complex cases that generated more errors.", misconception: "The confounding of complexity was addressed in the research design. The safety-reporting relationship held after controlling for case complexity." }
   ],
   why: "The insight is that psychological safety determines what information surfaces to management, independent of what is actually happening."
  },
  {
   q: "In the SBI feedback model, the 'Behaviour' component should be…",
   options: [
    { text: "An observable, specific action rather than an interpreted motive or character trait.", correct: true },
    { text: "The most critical part of the feedback to ensure the recipient understands the seriousness.", misconception: "All three SBI components are necessary. The behaviour is specific because specificity enables action, not because criticism needs weight." },
    { text: "Framed in positive terms to reduce defensiveness.", misconception: "The SBI model does not require positive framing. It requires observable specificity. Critical feedback is fine in the behaviour component." },
    { text: "A summary of the impact the behaviour had on the team.", misconception: "Impact is the third component. Behaviour is the specific observable action, separate from its effect." }
   ],
   why: "Observable behaviour is what the recipient can change. Interpreted motives and character traits are what people argue with."
  },
  {
   q: "According to Watkins, the most dangerous mistake a new leader can make in the first 90 days is…",
   options: [
    { text: "Diagnosing the situation incorrectly and applying the wrong type of leadership approach as a result.", correct: true },
    { text: "Building relationships too early before demonstrating competence.", misconception: "Watkins recommends early relationship-building alongside diagnosis. The failure is misdiagnosis, not relationship-building." },
    { text: "Focusing on early wins instead of long-term strategy.", misconception: "Watkins explicitly recommends early wins in the first 90 days. They build credibility for longer-term changes." },
    { text: "Being too transparent with the team about the situation's challenges.", misconception: "Transparency is generally recommended. Situation misdiagnosis is the primary failure mode Watkins identifies." }
   ],
   why: "Each of the five situation types requires a different approach. Applying turnaround tactics to a sustaining success context, or vice versa, damages what was already working."
  },
  {
   q: "If an OKR team consistently achieves 100% of its key results every quarter, the standard OKR interpretation is…",
   options: [
    { text: "The objectives and key results are not ambitious enough. The expected attainment for well-calibrated OKRs is 70 to 80%.", correct: true },
    { text: "The team is operating at exceptional performance levels and should be rewarded.", misconception: "In the OKR framework, 100% attainment signals conservative targets, not exceptional performance." },
    { text: "The team has found the right level and should maintain this calibration.", misconception: "Consistent 100% attainment is a calibration problem, not a success signal. OKRs should stretch." },
    { text: "OKRs should only be measured qualitatively, not by percentage attainment.", misconception: "OKRs use key results precisely because they are measurable. The percentage attainment framework is central to how OKRs are designed." }
   ],
   why: "OKRs are designed with stretch targets. Doerr and Grove both recommend a 70 to 80% attainment rate as evidence that targets were properly ambitious."
  },
  {
   q: "In high power-distance organisations (common in India), psychological safety requires extra deliberate effort because…",
   options: [
    { text: "Hierarchy norms already suppress dissent. Without explicit signals from leaders, silence is the rational default for those in lower-status roles.", correct: true },
    { text: "Indian employees are less willing to give feedback than employees in other cultures.", misconception: "The issue is structural and normative, not individual willingness. Hierarchy suppresses transmission, not capability." },
    { text: "Family-owned businesses in India have stronger loyalty norms that prevent criticism.", misconception: "Loyalty norms are one factor but the psychological safety effect operates in corporate, public, and family-owned contexts through the same mechanism." },
    { text: "Power distance means managers are less open to feedback, making it genuinely more dangerous to give.", misconception: "While this can be true, framing the burden only on the organisation ignores that leader behaviour is the primary lever for creating safety." }
   ],
   why: "Where hierarchy is culturally encoded as the default, psychological safety must be explicitly and repeatedly signalled by those in power. It does not emerge from the structure."
  }
 ],

 flashcards: [
  { front: "What is psychological safety?", back: "Amy Edmondson's construct: the shared belief that the team is safe for interpersonal risk-taking. Speaking up, asking questions, and admitting mistakes without fear of punishment." },
  { front: "What is the SBI feedback model?", back: "Situation, Behaviour, Impact. A structured feedback approach that anchors criticism in observable facts rather than character judgements." },
  { front: "What are the four radical candor quadrants?", back: "Radical candor (care + challenge), ruinous empathy (care, no challenge), obnoxious aggression (challenge, no care), manipulative insincerity (neither)." },
  { front: "What is the 70% delegation rule?", back: "Delegate when someone can do the task at 70% of your quality. The development benefit and time freed outweigh the short-term quality gap." },
  { front: "What does OKR stand for?", back: "Objectives and Key Results. An ambitious qualitative objective paired with measurable key results that define what success looks like." },
  { front: "What is the expected OKR attainment rate?", back: "70 to 80%. Consistently hitting 100% means the targets were not ambitious enough." },
  { front: "Whose meeting is the one-on-one?", back: "The direct report's meeting. They set the agenda. The manager listens. No status updates." },
  { front: "What are Watkins' five leadership situation types?", back: "Startup, turnaround, accelerated growth, realignment, sustaining success. Each calls for a different leadership approach." },
  { front: "What is situational leadership's D4 level?", back: "High competence, high commitment. The appropriate style is delegating: low direction and low support. Trust them and get out of the way." },
  { front: "Why does high power-distance culture affect psychological safety?", back: "Hierarchy norms make dissent and bad news costly to share. Safety must be explicitly built by leaders, not assumed." }
 ],

 glossary: [
  { term: "Psychological safety", def: "Amy Edmondson's construct: shared belief that the team is safe for interpersonal risk-taking." },
  { term: "SBI", def: "Situation, Behaviour, Impact. A structured feedback model that anchors criticism in observable behaviour." },
  { term: "Radical candor", def: "Kim Scott's framework: caring personally and challenging directly simultaneously." },
  { term: "Ruinous empathy", def: "Caring personally but failing to challenge directly. Nice but withholding honest feedback." },
  { term: "OKRs", def: "Objectives and Key Results. Ambitious objectives paired with measurable key results. 70 to 80% attainment expected." },
  { term: "Situational leadership", def: "Hersey and Blanchard's model: leadership style should match the employee's development level for the specific task." },
  { term: "Span of control", def: "The number of direct reports a manager can effectively supervise. 5 to 7 is typical for knowledge work." },
  { term: "First 90 days", def: "Watkins' framework for leadership transitions: diagnose the situation type, listen first, secure early wins." },
  { term: "Power distance", def: "Hofstede's cultural dimension measuring acceptance of unequal power distribution. India scores high." },
  { term: "Delegation", def: "Handing off an outcome with appropriate authority and accountability, not just a task with instructions." },
  { term: "Managing up", def: "Proactively managing the relationship with your manager to ensure alignment, information flow, and access to decisions." },
  { term: "Turnaround", def: "One of Watkins' five situation types: a failing unit that requires rapid decisive intervention." }
 ],

 capstone: {
  t: "Lead a real team change using the full leadership toolkit",
  d: "Identify a real team challenge (safety problem, performance issue, unclear direction, or leadership transition). Apply at least four frameworks from this domain: psychological safety assessment, SBI feedback, OKRs, and situational leadership. Document the before state, the interventions, and the outcome after 90 days.",
  xp: 200
 }
};

export default d;
