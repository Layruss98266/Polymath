import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "design_thinking",
 icon: "🎨",
 hue: "#8b5cf6",
 category: "Skills",
 name: "Design Thinking",
 tagline: "Solve the right problem, not just a problem",

 basics: "Design thinking is a structured approach to solving problems by deeply understanding the people who have them, generating many possible solutions before committing, and testing early with real users before building anything expensive. It prioritises empathy and iteration over assumption and certainty.",
 deepBasics: "Developed and formalised at IDEO and Stanford d.school, design thinking brings together disciplines: anthropology (ethnographic observation), engineering (rapid prototyping), and psychology (cognitive bias awareness). For India's Bharat market, voice-first, low-bandwidth, and feature-phone constraints are not edge cases. They are the dominant use case, and most problems look very different when you start from the actual user rather than the urban tech-savvy assumption.",
 whyItMatters: [
  "Most product failures are failures of problem definition, not execution. Teams build the wrong thing perfectly.",
  "Empathy mapping and user testing replace expensive assumptions with cheap evidence.",
  "The double diamond model gives non-designers a language for navigating complex problems.",
  "Designing for Bharat, 600 million people with feature phones and intermittent connectivity, requires methods that start from the real user."
 ],
 realWorldExample: "A health NGO in Rajasthan built a mobile app for rural health workers to track immunisation records. Six months in, adoption was 8%. A design thinking team ran empathy interviews with 12 ASHA workers and discovered: the app required 3G, which was unavailable in most villages. Workers carried feature phones, not smartphones. The interface was in English. And workers had to fill in 14 fields per child. Redesigning for offline-first, Hindi-first, 5-field data entry, and feature-phone compatibility drove adoption to 74% in two months. The technology was not the problem. The understanding of the user was.",

 mentors: [
  { name: "Tim Brown", for: "IDEO, design thinking as a methodology for innovation", work: "Change by Design (2009)" },
  { name: "Jake Knapp", for: "Design Sprint, five-day problem-solving framework", work: "Sprint (2016)" },
  { name: "Clayton Christensen", for: "Jobs to be done theory, why customers hire products", work: "Competing Against Luck (2016)" },
  { name: "Don Norman", for: "user-centred design, affordances, The Design of Everyday Things", work: "The Design of Everyday Things (1988, revised 2013)" }
 ],

 diagrams: [
  {
   kind: "flow",
   title: "Double Diamond Model",
   caption: "Two diamonds of diverge and converge. First diamond finds the right problem. Second diamond finds the right solution.",
   data: { steps: ["Discover (diverge)", "Define (converge)", "Develop (diverge)", "Deliver (converge)"] }
  },
  {
   kind: "cycle",
   title: "Design Sprint (Knapp 2016)",
   caption: "A five-day sprint to go from problem to tested prototype without building the real thing.",
   data: { nodes: ["Monday: Map", "Tuesday: Sketch", "Wednesday: Decide", "Thursday: Prototype", "Friday: Test"] }
  }
 ],

 synthesis: [
  { concept: "Empathy mapping", linksTo: "psychology", note: "Empathy mapping is applied cognitive perspective-taking. The same limits of empathy that psychology identifies show up in every user research session." },
  { concept: "Jobs to be done", linksTo: "marketing", note: "JTBD is the underlying theory of why people buy. Marketing builds on the same foundation but typically learns it later in the funnel." },
  { concept: "Prototyping", linksTo: "entrepreneurship", note: "The lean startup's MVP is a prototyping concept. Design thinking and lean startup share the test-before-you-build principle." },
  { concept: "User testing", linksTo: "data_science", note: "User testing generates qualitative data. The same principles of observation and bias awareness from quantitative research apply." }
 ],

 subdomains: [
  {
   id: "empathy",
   name: "Empathy and Research",
   intro: "Design thinking starts with understanding real people in their real context, not with assumptions. Empathy research is the foundation.",
   capabilities: [
    "Conduct a 30-minute contextual interview that reveals what a user says, does, thinks, and feels.",
    "Build an empathy map from interview notes in under an hour.",
    "Identify the gap between what users say they do and what they actually do."
   ]
  },
  {
   id: "problem_framing",
   name: "Problem Framing",
   intro: "A well-framed problem is half the solution. HMW questions and point-of-view statements turn observations into actionable design challenges.",
   capabilities: [
    "Write a point-of-view statement from empathy research.",
    "Generate five HMW questions from a single observation.",
    "Reframe a solution-shaped problem as a genuine human need."
   ]
  },
  {
   id: "ideation",
   name: "Ideation and Concept Development",
   intro: "Diverging wide before converging is the move most teams skip. The best solutions come from the far end of a large idea space.",
   capabilities: [
    "Run a 10-minute brainstorming session that generates at least 30 ideas without evaluation.",
    "Use affinity mapping to cluster ideas and find unexpected themes.",
    "Build a storyboard that shows a user's journey with a proposed solution."
   ]
  },
  {
   id: "prototyping_testing",
   name: "Prototyping and Testing",
   intro: "A prototype is a question made physical. The goal is to learn quickly and cheaply, before the cost of being wrong becomes high.",
   capabilities: [
    "Build a paper prototype in under two hours that is testable with real users.",
    "Run a five-person usability test and synthesise the findings into three key insights.",
    "Design for low-bandwidth and feature-phone constraints from the first prototype iteration."
   ]
  }
 ],

 concepts: [
  {
   t: "Empathy Mapping",
   subdomain: "empathy",
   definition: "A collaborative tool that synthesises user research into four quadrants capturing what a user says, thinks, does, and feels in a given context.",
   short: "What do they say, think, do, and feel? Four quadrants that surface what users cannot always tell you directly.",
   deep: "An empathy map is built from research data, observations, and interviews, not from assumptions. The four quadrants: Says (verbatim quotes from interviews), Does (observed behaviours and actions), Thinks (inferred thoughts and beliefs), Feels (emotional states). The gap between Says and Does is often the most revealing part: what people say they do and what they actually do are frequently different. For teams designing for Indian rural users, this gap is especially large, because unfamiliarity with researchers, politeness norms, and social desirability bias all shape what users say. Observation in context often reveals the truth that interviews miss.",
   status: "framework",
   reflect: "Think of a product or service you use daily. What do you say about it versus what you actually do with it? Is there a gap?",
   generic: "Think of talking to a friend who says they exercise every day but you have never seen them go to the gym. The empathy map is a way to capture both the story they tell and the reality you observe, and to look for what is hiding in the gap.",
   expert: "The empathy map was developed and popularised by Dave Gray and is widely used in design thinking curricula at IDEO and Stanford d.school. It synthesises ethnographic methods from anthropology into a practical workshop tool. The technique aligns with research on the say-do gap in consumer behaviour (Donoghue, 2000) and with limitations of self-report methodology in social science. Its validity depends heavily on research quality. A poorly conducted interview produces a misleading empathy map. The tool is a synthesis vehicle, not a substitute for rigorous research.",
   conceptQuiz: [
    {
     q: "The most important quadrant in an empathy map for surfacing hidden user needs is often…",
     options: [
      { text: "The gap between what users say and what they actually do.", correct: true },
      { text: "What they say, because users know their own needs best.", misconception: "Self-reported needs are often shaped by politeness, social desirability, and lack of awareness of actual behaviour." },
      { text: "What they feel, because emotion drives all behaviour.", misconception: "Feelings are important but the say-do gap is specifically where design assumptions tend to be wrong." },
      { text: "What they think, because beliefs determine actions.", misconception: "Inferred thoughts matter but they are also often rationalised after the fact. Observed behaviour is more reliable." }
     ],
     why: "People's stated behaviour and actual behaviour often diverge significantly. The gap is where the real design problem lives."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Fill an empathy map for yourself", d: "Pick a product you use daily. Fill in all four quadrants for yourself as a user: says, thinks, does, feels. Note any surprising gaps.", xp: 15 },
    { level: "easy", t: "Interview and map", d: "Interview one person about a product or service experience for 20 minutes. Build their empathy map from your notes. Identify the biggest say-do gap.", xp: 25 },
    { level: "advanced", t: "Contextual observation", d: "Observe someone using a product or service in their natural context for 30 minutes without intervening. Build an empathy map from observation only, then compare it to an interview.", xp: 45 }
   ]
  },
  {
   t: "Problem Framing (HMW)",
   subdomain: "problem_framing",
   fullForm: "How Might We",
   definition: "A question format that transforms observations about user problems into actionable design challenges. HMW questions are open enough to allow creative solutions but specific enough to guide ideation.",
   short: "How might we solve the real problem? Three words that turn an observation into a design challenge.",
   deep: "HMW questions were popularised by IDEO and P&G in the 1970s and are a cornerstone of design sprint methodology. The format is deliberate: 'How' assumes the problem is solvable. 'Might' removes the pressure to find the single right answer. 'We' makes it collaborative. A good HMW is neither too broad ('How might we improve healthcare?') nor too narrow ('How might we add a reminder notification?'). It sits in the middle, scoped to a real human need revealed by empathy research. For Bharat design challenges, HMW questions often reveal that the assumed user (urban, literate, smartphone-equipped) is not the actual user. Reframing around the actual user often changes the entire product direction.",
   status: "framework",
   reflect: "Take a problem you are currently working on. How was the problem first stated? Now reframe it as an HMW question starting from the user's actual experience. Is the question different?",
   conceptQuiz: [
    {
     q: "A well-formed HMW question should be…",
     options: [
      { text: "Specific enough to guide ideation but open enough to allow multiple solution approaches.", correct: true },
      { text: "As broad as possible to allow maximum creative freedom.", misconception: "Overly broad HMW questions produce unfocused brainstorms. The question should be scoped to a real human need." },
      { text: "A restatement of the proposed solution as a question.", misconception: "HMW questions should start from user needs, not from assumed solutions. Solution-shaped questions close off exploration." },
      { text: "Answerable with a yes or no.", misconception: "HMW questions are open-ended. They invite exploration, not binary answers." }
     ],
     why: "The HMW format works when it is scoped enough to be actionable but open enough to generate diverse ideas."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write five HMW questions", d: "Take one user observation from an interview or your own experience. Write five HMW questions that could address the underlying need. Make each one a different scope.", xp: 15 },
    { level: "easy", t: "Reframe a problem statement", d: "Take a problem from your current work that is stated as a solution ('we need to add a feature X'). Reframe it as an HMW question starting from the user need.", xp: 20 },
    { level: "advanced", t: "HMW to POV to ideation", d: "Build a full problem framing session: write a point-of-view statement from research, generate 10 HMW questions, and use the best three as prompts for a 20-minute ideation.", xp: 45 }
   ]
  },
  {
   t: "Ideation",
   subdomain: "ideation",
   definition: "The phase of design thinking dedicated to generating a large number of possible solutions before evaluating any of them, using methods like brainstorming, sketching, and analogical thinking.",
   short: "Generate many ideas before you evaluate any of them. Quantity first, quality from selection.",
   deep: "The core principle: separate idea generation from idea evaluation. When evaluation happens simultaneously with generation, the inner critic kills possibilities before they can be expressed or combined. Classic rules for a productive brainstorm: defer judgment, go for volume, build on others' ideas, encourage wild ideas, stay focused on the topic, one conversation at a time, be visual. The goal is 30 to 50 ideas in a session. The good ones often come at idea 25, when the obvious answers have been exhausted. Affinity mapping then clusters ideas to find unexpected patterns. For teams used to 'best idea wins' cultures, the instruction to generate deliberately bad ideas before good ones often unlocks creativity that was being suppressed.",
   status: "framework",
   reflect: "In the last group problem-solving session you were in, were ideas evaluated as they were proposed? How did that affect the range of ideas generated?",
   conceptQuiz: [
    {
     q: "The most important rule in a design thinking ideation session is…",
     options: [
      { text: "Defer judgment on ideas until the ideation phase is complete.", correct: true },
      { text: "Only propose ideas that are technically feasible with current resources.", misconception: "Constraining ideas to current feasibility during ideation kills creative options that might be made feasible later." },
      { text: "Build consensus during the session so the team agrees on the best idea.", misconception: "Consensus-seeking during ideation is a form of evaluation. It suppresses ideas that diverge from group preferences." },
      { text: "Ensure everyone speaks an equal number of times.", misconception: "Facilitation equity matters but the core principle is deferred judgment, not equal speaking time." }
     ],
     why: "Simultaneous evaluation and generation kills ideas before they can be expressed or evolved. Deferred judgment is what allows volume."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Crazy 8s exercise", d: "Fold a piece of paper into 8 sections. Set a timer for 8 minutes. Sketch one different solution idea per section. Do not evaluate while sketching.", xp: 15 },
    { level: "easy", t: "Run a team brainstorm", d: "Facilitate a 20-minute brainstorm session with at least three people on a real problem. Use the defer judgment and build on ideas rules. Count the total ideas generated.", xp: 25 },
    { level: "advanced", t: "Affinity mapping session", d: "After a brainstorm, write each idea on a sticky note or card. Group them by theme without judgment. Name the themes. Identify which theme has the most leverage on the original HMW question.", xp: 40 }
   ]
  },
  {
   t: "Prototyping",
   subdomain: "prototyping_testing",
   definition: "Creating low-fidelity, fast, cheap representations of a proposed solution to make an idea testable before significant resources are committed to building it.",
   short: "A prototype is a question made physical. Build cheap to learn fast.",
   deep: "The purpose of a prototype is not to show what the final product looks like. It is to make an assumption testable. A paper sketch of a mobile screen, a cardboard model of a service counter, a role-played script of a conversation: all are prototypes. The fidelity should match the stage of learning. In early discovery, paper prototypes beat high-fidelity Figma mockups because they invite honest feedback, 'this doesn't work' is easier to say about a pencil sketch than a polished design. The principle from IDEO: if a prototype feels too good to throw away, it is too high-fidelity for the stage of learning. For designing for Bharat, prototyping for offline use, for IVRS (interactive voice response) systems, and for feature phones requires a deliberate choice to not start with smartphones.",
   status: "settled",
   reflect: "Think of the last time you were about to build something significant. Could you have tested the core assumption first with a prototype that took a day instead of a month?",
   generic: "Think of a prototype like a cardboard box propped up in the shape of a car before you build the actual car. You sit in the cardboard, ask yourself if the seats are in the right place, adjust the cardboard, and only then commit to metal and glass. Prototyping is using cardboard to answer questions that would otherwise require metal.",
   expert: "Prototyping as a design methodology has roots in concurrent engineering (military aviation, 1950s) and was formally adopted into design thinking through IDEO's human-centred design curriculum. The principle aligns with the scientific method: the prototype is the physical form of a falsifiable hypothesis. Knapp's Sprint (2016) operationalises this as 'design a prototype on Thursday and test it on Friday.' Research on the value of prototyping in software contexts includes Beaudouin-Lafon and Mackay's work on sketching and early prototyping for software design. The settled status here applies to the principle of test-before-build; specific prototyping techniques vary in evidence quality.",
   conceptQuiz: [
    {
     q: "In design thinking, the appropriate fidelity of a prototype depends on…",
     options: [
      { text: "The stage of learning and what specific assumption is being tested.", correct: true },
      { text: "The technical skill of the design team.", misconception: "Low-fidelity prototypes are often better for early testing regardless of skill. High fidelity too early discourages honest feedback." },
      { text: "The budget available for the prototype.", misconception: "The design thinking principle is the opposite: spend less on prototypes and learn more. Budget is not the governing variable." },
      { text: "Whether the client will see it.", misconception: "Prototypes are for learning, not for showing clients. The audience shapes the framing, not the fidelity decision." }
     ],
     why: "The fidelity should match the learning question. Early-stage uncertainty needs cheap, quick experiments. Late-stage usability testing may need higher fidelity."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Paper prototype a mobile screen", d: "Draw a mobile screen on paper for a product idea you have. Make it good enough to explain but cheap enough to discard. Show it to one person and watch their reaction.", xp: 15 },
    { level: "easy", t: "Prototype an offline flow", d: "Design a paper prototype for a product that must work without internet access. How does the user flow change? What data must be stored locally?", xp: 25 },
    { level: "advanced", t: "Thursday prototype sprint", d: "Set aside one Thursday afternoon. Build a testable prototype of one assumption you have about a product or service in under four hours. Test it on Friday.", xp: 50 }
   ]
  },
  {
   t: "User Testing",
   subdomain: "prototyping_testing",
   definition: "The practice of observing real users interact with a prototype or product to identify usability problems and uncover unmet needs before building or scaling.",
   short: "Watch five people use your prototype. You will learn more in an hour than in a month of internal debate.",
   deep: "Jakob Nielsen's research suggests five users uncovers about 85% of usability problems in a system. More importantly, user testing reveals the gap between designer assumptions and user reality. The correct posture in a user test: give the user a task, shut up, and observe. Do not help, explain, or interpret. The moment you say 'what I meant was...' you have invalidated the test. The synthesis step, clustering observations into key insights, is where the real work happens. In India, recruiting the right users for testing is a specific challenge: urban tech workers are easy to recruit but often represent a narrow slice of the actual user population. Testing in Tier 2 and Tier 3 cities, or with users who use Hindi-first interfaces, requires extra effort and almost always changes the product.",
   status: "settled",
   reflect: "When did you last watch a real user try to use something you built or designed? What did they struggle with that you did not expect?",
   conceptQuiz: [
    {
     q: "Why does Nielsen suggest that five users is often enough for a usability test?",
     options: [
      { text: "Five users uncover approximately 85% of usability problems, and each additional user reveals diminishing new insights.", correct: true },
      { text: "More than five users makes the data too complex to synthesise.", misconception: "The argument is statistical, not practical. More users can always be useful but the marginal value decreases fast." },
      { text: "User testing is expensive and five is a cost compromise.", misconception: "The basis for five is the discovery curve for usability problems, not budget optimisation." },
      { text: "Five users are enough to achieve statistical significance.", misconception: "Usability testing is qualitative. Statistical significance requires much larger samples. Five is not a significance claim." }
     ],
     why: "The same problems tend to recur with multiple users. After five, you are mostly seeing the same problems again, not new ones."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Observe without speaking", d: "Give one person a task to complete using any app or product. Set a timer for 10 minutes. Do not speak. Only observe and take notes. What surprised you?", xp: 15 },
    { level: "easy", t: "Run a five-person test", d: "Recruit five people to test a prototype or existing product on one specific task. After each session, write three observations. After all five, find the two insights that appeared most often.", xp: 30 },
    { level: "advanced", t: "Test with non-urban users", d: "Design and conduct a user test with someone who does not primarily use English-language interfaces or who uses a feature phone. Document what changes in the task flow and insights.", xp: 50 }
   ]
  },
  {
   t: "Jobs to be Done",
   subdomain: "problem_framing",
   definition: "Clayton Christensen's framework that people do not buy products. They hire products to do a job for them. Understanding the job reveals what the real competition is.",
   short: "People hire products to do a job. Understanding the job, not the product, is where product strategy lives.",
   deep: "The classic example from Christensen: a fast food chain wanted to sell more milkshakes. Research on who bought milkshakes and why revealed that 40% of morning milkshake buyers were hiring the shake for a specific job: to make a long solo commute more interesting and to last until lunch without getting hungry. They were not choosing between shakes and burgers. They were choosing between shakes and bananas, breakfast bars, or coffee. The competition was different when viewed through the jobs lens. The product insight: make the shake thicker (lasts longer), more interesting (flavour variety), and easier to consume one-handed. Jobs to be done reframes product development from features to outcomes. For Indian market product design, the jobs lens often reveals that the functional job (store health records) is secondary to the social job (be respected by supervisors) and the emotional job (feel confident in my role).",
   status: "framework",
   reflect: "For a product you use daily, what job did you hire it to do? What other products were competing for that job when you first chose it?",
   generic: "You do not buy a drill because you want a drill. You buy it because you want a hole in the wall. And actually, you want the shelf that goes on the wall. Really, you want your books to be organised. The drill is several levels of abstraction away from the actual job. Understanding the actual job changes what you build.",
   expert: "Christensen, Hall, Dillon, and Duncan (2016) formalised the jobs-to-be-done framework, building on Christensen's earlier work on disruptive innovation. The framework draws on Levitt's marketing insight ('people want a quarter-inch hole, not a quarter-inch drill') and on von Hippel's lead user research. JTBD distinguishes between functional jobs (the task), emotional jobs (how the person wants to feel), and social jobs (how the person wants to be perceived). Critics note that the framework can be post-rationalised: almost any product can be described as doing a job. The methodological challenge is identifying the actual job before building, not after.",
   conceptQuiz: [
    {
     q: "The core insight of Jobs to be Done theory is that…",
     options: [
      { text: "People hire products to accomplish specific functional, emotional, and social outcomes, not for the products' features.", correct: true },
      { text: "Products should be designed to serve the most common use case.", misconception: "JTBD specifically challenges the feature-and-use-case framing. The job is the unit of analysis, not the use case." },
      { text: "Customer satisfaction surveys are the best way to understand product needs.", misconception: "JTBD is critical of traditional surveys for surfacing real jobs. Contextual interviews and observation are preferred." },
      { text: "You should compete by making the product cheaper.", misconception: "JTBD reveals who the real competition is, often not what was assumed. Competing on price is irrelevant if the job is misidentified." }
     ],
     why: "Understanding the job reveals what the product is really competing against, which is often very different from assumed competitors."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Identify the job", d: "Pick one product you use every day. Write the functional job, the emotional job, and the social job it is doing for you. Then write what you would use if this product did not exist.", xp: 15 },
    { level: "easy", t: "Interview for the job", d: "Interview three people who use a product you are interested in. Ask them when they first decided to use it, what they were trying to accomplish, and what they tried before. Identify the real job.", xp: 25 },
    { level: "advanced", t: "Reframe a product strategy", d: "Take a product roadmap or feature list you are familiar with. Reframe every feature as a job it helps the user accomplish. Identify features that do not serve any real job.", xp: 45 }
   ]
  },
  {
   t: "Affinity Mapping",
   subdomain: "ideation",
   definition: "A collaborative synthesis method where observations, ideas, or data points are written on individual cards and grouped by theme to find patterns that were not visible in the raw data.",
   short: "Write every observation on its own card, then find the patterns. Structure emerges from the data.",
   deep: "Affinity mapping is used in two places in design thinking: after user research (to synthesise observations into insights) and after ideation (to cluster ideas into themes). The process: every observation gets its own sticky note, without analysis or categorisation at capture time. Then the team silently groups related notes. Then they name the groups. The silence matters: verbal discussion during sorting imposes frameworks too early. Surprising groupings only emerge if the data is allowed to self-organise first. In design sprints, affinity mapping after user testing on Friday is how teams extract the three most important insights from five hours of observation in about 45 minutes.",
   status: "framework",
   reflect: "Think of the last time you had a large amount of user or customer feedback. How did you synthesise it? Did you impose categories first or let the patterns emerge?",
   conceptQuiz: [
    {
     q: "Why does affinity mapping typically happen in silence during the grouping phase?",
     options: [
      { text: "Verbal discussion during grouping imposes frameworks prematurely and prevents patterns from emerging organically.", correct: true },
      { text: "Silence prevents arguments about which group each note belongs to.", misconception: "Avoiding conflict is a secondary benefit. The primary reason is to prevent framework imposition." },
      { text: "Talking during grouping takes too long.", misconception: "Speed is not the reason. Silent grouping actually takes similar time to verbal grouping." },
      { text: "The team lead needs to observe the groupings without influence.", misconception: "Affinity mapping is a collaborative, not an observation-of-team exercise." }
     ],
     why: "Silence allows each person to follow the data rather than the loudest voice. Unexpected groupings only emerge when no framework is imposed verbally."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Affinity map a set of feedback", d: "Take 20 pieces of customer feedback (real or simulated). Write each on a separate card. Group them silently. Name the groups. What themes surprised you?", xp: 15 },
    { level: "easy", t: "Post-research synthesis", d: "After your next user interview, write every observation on a separate sticky note. Spend 20 minutes grouping them. Identify the three most important themes.", xp: 25 },
    { level: "advanced", t: "Sprint retrospective affinity map", d: "After a project or sprint, run an affinity mapping session on all team observations: what worked, what did not, what we learned. Use the themes to define one specific process change.", xp: 40 }
   ]
  },
  {
   t: "Storyboarding",
   subdomain: "ideation",
   definition: "A visual sequence of frames showing how a user interacts with a product or service over time, from recognising the problem through to achieving their goal.",
   short: "Show the user's journey as a story, frame by frame. Narrative makes assumptions visible.",
   deep: "Storyboarding comes from film production and was adapted into design thinking as a way to make a solution idea concrete before prototyping. A storyboard shows: the user in context, the problem they encounter, how they find or use the product, the key steps of the interaction, and the outcome. It is drawn simply (stick figures are fine) and walks through the scenario in six to eight frames. The value: storyboards make assumptions visible. When you try to draw how someone learns about your product, you are forced to be specific about the customer acquisition mechanism. When you draw the moment of problem recognition, you discover you had not thought about what triggers a user to seek a solution.",
   status: "framework",
   reflect: "For a product idea you have, could you draw in eight frames how a user goes from problem to solved? Which frame would you find hardest to draw and why?",
   conceptQuiz: [
    {
     q: "The primary value of storyboarding a product concept is…",
     options: [
      { text: "It forces specificity about the user's full journey, making hidden assumptions visible.", correct: true },
      { text: "It creates a visual presentation for stakeholders.", misconception: "Stakeholder presentation is a possible use but not the primary value of storyboarding in design thinking." },
      { text: "It tests whether the product can be built technically.", misconception: "Technical feasibility is not what a storyboard tests. It tests narrative coherence and assumption clarity." },
      { text: "It replaces the need for user research.", misconception: "Storyboarding communicates and tests an idea. It is not a substitute for understanding real users." }
     ],
     why: "Drawing the journey forces you to be specific about every step. Vague assumptions cannot survive the specificity of eight frames."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Storyboard a product idea", d: "Pick any product idea. Draw six frames showing a user's journey from problem to solution. Use stick figures. Do not polish. Just make the story specific.", xp: 15 },
    { level: "easy", t: "Identify the hardest frame", d: "Draw a storyboard for a product idea. Identify the frame that was hardest to draw. That is the assumption you have least clarity on. Write it as an assumption to test.", xp: 20 },
    { level: "advanced", t: "Storyboard three alternatives", d: "Draw three different storyboards for three different solution directions for the same problem. Present them to a team member and get their reaction without explaining which you prefer.", xp: 40 }
   ]
  },
  {
   t: "Design Sprints (Knapp 2016)",
   subdomain: "prototyping_testing",
   definition: "A five-day structured process for rapidly answering critical business questions through design, prototyping, and testing with real users.",
   short: "Five days from question to tested prototype. Compress months of work into a week.",
   deep: "Jake Knapp developed the sprint at Google Ventures and documented it in Sprint (2016). The structure: Monday (map the problem, pick a target), Tuesday (sketch diverse solution ideas), Wednesday (decide on one to prototype), Thursday (build a realistic but fake prototype), Friday (test with five users). The genius is the combination of speed and discipline: you do not code anything that is permanent. You build the minimum representation needed to answer one specific question. Most teams spend weeks debating ideas in meetings. The sprint forces a prototype in 24 hours and tests it in 24 more. The method works best for questions with binary answers (does this concept resonate?) and is less suited for incremental product refinement.",
   status: "framework",
   reflect: "What is the biggest open question in your current project? Could you answer it with a prototype and five user interviews in a week instead of months of development?",
   conceptQuiz: [
    {
     q: "The design sprint prototype on Thursday is built to…",
     options: [
      { text: "Answer one specific question with a realistic but non-functional representation.", correct: true },
      { text: "Become the foundation of the final product codebase.", misconception: "Sprint prototypes are explicitly designed to be thrown away after the test. Permanence defeats the purpose." },
      { text: "Impress stakeholders with a polished vision.", misconception: "Sprint prototypes are built for user testing, not stakeholder presentation. Sufficient fidelity is the goal, not polish." },
      { text: "Demonstrate technical feasibility.", misconception: "Sprint prototypes are intentionally not coded. They test concept resonance, not technical implementation." }
     ],
     why: "The sprint prototype is a question made physical. Its purpose is to generate user reactions that answer a specific business question."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Map a sprint question", d: "Identify the most important question your team needs to answer in the next month. Write it as a sprint question: 'Will users understand X?' or 'Does this concept solve Y?'", xp: 15 },
    { level: "easy", t: "Run a mini-sprint", d: "Use the sprint structure for one day: morning to sketch solutions, afternoon to decide and build a quick prototype, end of day to test with two people.", xp: 30 },
    { level: "advanced", t: "Run a full five-day sprint", d: "Assemble a team of four to six people and run a full design sprint on a real product question. Document each day's output and synthesise Friday's test insights into three actionable decisions.", xp: 80 }
   ]
  },
  {
   t: "Double Diamond Model",
   subdomain: "problem_framing",
   definition: "A design process framework from the UK Design Council that describes two phases of diverge-and-converge thinking: finding the right problem, then finding the right solution.",
   short: "Two diamonds. The first finds the right problem. The second finds the right solution. Most teams skip the first.",
   deep: "Developed by the UK Design Council in 2005, the double diamond describes four stages: Discover (diverge, explore the problem space, do not assume you know the problem), Define (converge, synthesise research into a clear problem statement), Develop (diverge, generate many possible solutions), Deliver (converge, test and refine the best solution). The model's insight is that problem definition is itself a design challenge. Most teams jump to develop and deliver without doing the first diamond properly. They end up with well-executed solutions to the wrong problem. In design for Bharat, skipping the first diamond is especially costly: problems that look obvious from a metro city office look completely different when researched in a Tier 3 town.",
   status: "framework",
   reflect: "In your current project, which diamond are you in? Is the problem statement fixed or still open? How did you arrive at it?",
   generic: "Imagine you find a dark room and are asked to illuminate it. You could spend weeks researching better bulbs. Or you could open the curtains. The first diamond is the process of figuring out whether the problem is 'better bulbs' or 'closed curtains' before you buy anything.",
   expert: "The UK Design Council published the double diamond in 2005 as a visual framework for design process. It synthesises existing models of design methodology including the reflective practitioner (Schon, 1983) and the design cycle from product design literature. The model has been extended and criticised: the actual design process is rarely a clean sequential flow through four stages, and many practitioners work in messier iterative cycles. Clune and Lockrey (2014) note that the model is most useful as a communication tool for non-designers, helping them understand why the team is deliberately not solving the problem yet.",
   conceptQuiz: [
    {
     q: "The key insight of the double diamond model is that…",
     options: [
      { text: "Problem definition requires its own diverge-and-converge cycle before solution development begins.", correct: true },
      { text: "Design is a linear process from research to final product.", misconception: "The double diamond is often implemented iteratively. The model describes modes of thinking, not a rigid sequence." },
      { text: "The second diamond (solution) is more important than the first (problem).", misconception: "The model specifically highlights that the first diamond is often skipped and that leads to solving the wrong problem." },
      { text: "User testing only happens in the delivery phase.", misconception: "User research happens throughout both diamonds. Testing prototypes in the second diamond does not mean users are absent from the first." }
     ],
     why: "The first diamond is what most teams skip. Without it, the second diamond solves the assumed problem instead of the real one."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit your problem statement", d: "Take the current problem statement from a project you are on. Ask: was this arrived at through research, or was it assumed? Write what research would be needed to validate it.", xp: 10 },
    { level: "easy", t: "First diamond research session", d: "For any product question you have, spend two hours in the first diamond only: observe, interview, and explore without deciding on the problem statement yet. What changes?", xp: 25 },
    { level: "advanced", t: "Full double diamond project", d: "Run a full double diamond on a real or hypothetical problem: discover through research, define through synthesis, develop through ideation, deliver through prototyping and testing. Document each stage.", xp: 80 }
   ]
  }
 ],

 counterView: "Design thinking has been called 'empathy theatre' by practitioners who have watched teams do elaborate user research that then gets ignored when stakeholders push their own agenda. The post-it note aesthetic of affinity mapping and the 'how might we' phrasing can give the illusion of user-centricity without the substance. In Indian technology companies, design thinking workshops sometimes run in parallel with product decisions that have already been made, providing retrospective cover for predetermined outcomes. The five-day sprint timeline was developed for a specific type of business question and frequently produces shallow prototypes when applied outside that context. The deepest critique: design thinking can become a ritual of empathy without changing the power structures that produce the problems in the first place.",

 capabilities: [
  "Conduct a contextual interview and build an empathy map from the observations.",
  "Write a point-of-view statement and generate five HMW questions from a single observation.",
  "Run a 20-minute brainstorming session that generates at least 30 ideas without evaluation.",
  "Build a paper prototype that is testable with real users in under two hours.",
  "Run a five-person usability test and synthesise findings into three key insights.",
  "Identify the job a product is being hired to do, including functional, emotional, and social dimensions.",
  "Storyboard a user journey in eight frames, making every assumption explicit."
 ],

 cheatsheet: [
  "Empathy map: says, thinks, does, feels. The say-do gap is where the real problem hides.",
  "HMW: open enough for creativity, specific enough to guide ideation. Not too broad, not too narrow.",
  "Brainstorm rule: defer judgment. Quantity before quality. Wild ideas are welcome.",
  "Prototype fidelity: match the learning stage. Paper beats Figma for early testing.",
  "User testing: give the task, shut up, observe. Do not help or explain.",
  "Five users: approximately 85% of usability problems surface with five users.",
  "Double diamond: first diamond finds the right problem. Most teams skip it.",
  "Design sprint: five days, one question, real user test on Friday. Throw the prototype away."
 ],

 roadmap: [
  { rank: "Novice",       focus: "Core methods",              do: "Read Sprint by Jake Knapp. Practice empathy mapping. Watch one IDEO design process video.",                                           milestone: "Build one empathy map from an interview. Write three HMW questions.",     time: "1 week" },
  { rank: "Apprentice",   focus: "Problem framing",           do: "Practice the full first diamond: research, empathy map, insight, HMW, POV statement.",                                               milestone: "Produce a validated problem statement from real user research.",           time: "3 weeks" },
  { rank: "Practitioner", focus: "Ideation and prototyping",  do: "Run brainstorms, practise Crazy 8s, build paper prototypes, run one usability test.",                                                milestone: "Build and test one paper prototype with five real users.",                 time: "6 weeks" },
  { rank: "Specialist",   focus: "Full design thinking process", do: "Run a complete double diamond on a real problem. Facilitate for others.",                                                         milestone: "Lead a team through a full double diamond. Document the output.",          time: "3 months" },
  { rank: "Expert",       focus: "Design sprints",            do: "Run a complete five-day sprint. Read Sprint and IDEO's Field Guide to Human-Centred Design.",                                         milestone: "Complete a sprint with a real team and a real business question.",         time: "6 months" },
  { rank: "Master",       focus: "Organisational application", do: "Embed design thinking into a product or service team's process. Build internal capability. Coach others.",                          milestone: "A team you coached runs a sprint without your facilitation.",              time: "1 year" },
  { rank: "Grandmaster",  focus: "Systems and Bharat design", do: "Apply design thinking to complex systems problems. Specialise in designing for users in Tier 2 and Tier 3 India.",                  milestone: "Design and deploy a product whose core user insight came from Bharat research.", time: "2 years" }
 ],

 resources: {
  free: [
   { name: "IDEO Design Kit", what: "Free human-centred design methods, activities, and case studies from IDEO.", url: "https://www.designkit.org", kind: "tool", weight: "primary" },
   { name: "Stanford d.school Design Thinking Bootcamp Bootleg", what: "Free PDF toolkit for the five-stage design thinking process.", url: "", kind: "article", weight: "primary", verify: true },
   { name: "Google Design Sprint Kit", what: "Free resources for running design sprints, including facilitation guides.", url: "https://designsprintkit.withgoogle.com", kind: "tool", weight: "popular" }
  ],
  paid: [
   { name: "Sprint", what: "Jake Knapp 2016. The definitive guide to five-day design sprints. Essential reading.", url: "", kind: "book", weight: "primary", price: "approx Rs. 600 on Amazon India", verify: true },
   { name: "The Design of Everyday Things", what: "Don Norman 1988, revised 2013. Foundational principles of user-centred design.", url: "", kind: "book", weight: "primary", price: "approx Rs. 700 on Amazon India", verify: true },
   { name: "Competing Against Luck", what: "Christensen 2016. The jobs-to-be-done framework explained with case studies.", url: "", kind: "book", weight: "secondary", price: "approx Rs. 700 on Amazon India", verify: true }
  ]
 },

 missions: [
  { t: "Run a full empathy interview",      d: "Interview one person for 30 minutes about a problem they have. Do not pitch any solution. Build an empathy map from your notes afterwards.",                           xp: 50 },
  { t: "Five-person usability test",        d: "Build a simple prototype or identify an existing product. Test it with five people using one specific task. Synthesise findings into three insights.",                  xp: 80 },
  { t: "Crazy 8s ideation session",         d: "Run a Crazy 8s session alone or with a team on a real problem. Generate at least 40 ideas in the session. Identify three worth prototyping.",                          xp: 60 },
  { t: "Design for Bharat constraint",      d: "Pick any digital product idea. Redesign it for offline-first, Hindi-first, feature-phone users. Document the specific changes you make and why.",                      xp: 70 },
  { t: "Mini design sprint",               d: "Run a one-day mini sprint: morning to sketch and decide, afternoon to prototype, end of day to test with two people. Document the key question you tested.",             xp: 80 },
  { t: "Jobs to be done product audit",    d: "Take a product you know well. Write the functional, emotional, and social jobs it does. Identify one feature that serves no real job and one job that has no feature.",   xp: 60 }
 ],

 quiz: [
  {
   q: "Which quadrant of the double diamond model do most teams skip, according to design thinking practitioners?",
   options: [
    { text: "The first diamond: discovering and defining the right problem.", correct: true },
    { text: "The second diamond: developing and delivering the solution.", misconception: "Teams rarely skip the solution phase. The problem definition phase is what gets skipped." },
    { text: "The delivery phase within the second diamond.", misconception: "Delivery is the most visible phase and rarely skipped, though it is often rushed." },
    { text: "The ideation phase within the second diamond.", misconception: "Ideation is a popular and commonly practised phase. Problem definition is the neglected one." }
   ],
   why: "Most teams start with an assumed problem and jump straight to solutions. The first diamond is the investment that prevents solving the wrong problem."
  },
  {
   q: "In user testing, why is the facilitator instructed not to help or explain when a user struggles?",
   options: [
    { text: "Helping invalidates the test by masking real usability problems the design must fix.", correct: true },
    { text: "It saves time to observe silently.", misconception: "Efficiency is not the reason. The silence protects the validity of what you observe." },
    { text: "Users prefer to work independently.", misconception: "User preference is irrelevant here. The test is not about user experience of the test session." },
    { text: "It is considered impolite to interfere.", misconception: "Politeness norms are irrelevant. The reason is methodological validity, not etiquette." }
   ],
   why: "The moment you explain, you have patched the problem without fixing it. The struggle is the data."
  },
  {
   q: "The Jobs to be Done framework identifies three dimensions of the job a product is hired for. Which of the following is NOT one of them?",
   options: [
    { text: "Technical job.", correct: true },
    { text: "Functional job.", misconception: "Functional job (the practical task) is one of the three core JTBD dimensions." },
    { text: "Emotional job.", misconception: "Emotional job (how the user wants to feel) is one of the three core JTBD dimensions." },
    { text: "Social job.", misconception: "Social job (how the user wants to be perceived) is one of the three core JTBD dimensions." }
   ],
   why: "JTBD identifies functional, emotional, and social jobs. 'Technical job' is not a standard JTBD dimension."
  },
  {
   q: "Why do design thinking practitioners recommend building prototypes at the lowest possible fidelity for the learning stage?",
   options: [
    { text: "Low-fidelity prototypes invite honest feedback because users feel less inhibited about criticising something that looks unfinished.", correct: true },
    { text: "Low-fidelity prototypes are always faster to build.", misconception: "Fidelity and speed are related but the primary reason for low fidelity is the quality of feedback it generates, not build speed." },
    { text: "High-fidelity prototypes are too expensive for early-stage teams.", misconception: "Cost is a consideration but not the primary rationale. The feedback quality argument is more fundamental." },
    { text: "Users cannot evaluate high-fidelity prototypes accurately.", misconception: "Users can evaluate high-fidelity prototypes. The problem is they often hesitate to criticise what looks finished." }
   ],
   why: "When a prototype looks polished, users feel the design is finalised and hesitate to suggest changes. Low fidelity signals that change is expected."
  },
  {
   q: "When designing for rural Indian users (Bharat), which constraint is most commonly underestimated by metro-based design teams?",
   options: [
    { text: "Intermittent or absent internet connectivity requiring offline-first design.", correct: true },
    { text: "Users' inability to use touchscreen interfaces.", misconception: "Touchscreen adoption is widespread even among rural users with feature phones. Connectivity is the harder constraint." },
    { text: "Preference for visual over text content.", misconception: "Visual preference matters but is not specific to Bharat in the same way connectivity constraints are." },
    { text: "Reluctance to use digital payment systems.", misconception: "UPI adoption is high even in rural India. Connectivity is the more binding constraint for app usability." }
   ],
   why: "Most products designed in metro cities assume persistent connectivity. In rural India, 3G and 4G coverage is intermittent. Offline-first design is not optional."
  }
 ],

 flashcards: [
  { front: "What are the four quadrants of an empathy map?", back: "Says, thinks, does, feels. The say-do gap is the most revealing area." },
  { front: "What does HMW stand for?", back: "How Might We. A question format that turns user observations into actionable design challenges." },
  { front: "What are the four stages of the double diamond?", back: "Discover, define, develop, deliver. Two diamonds of diverge-and-converge." },
  { front: "What is the sprint prototype built on Thursday for?", back: "To answer one specific question with a realistic but non-functional representation, tested with real users on Friday." },
  { front: "What are the three dimensions of a job in Jobs to be Done?", back: "Functional (the task), emotional (how they want to feel), social (how they want to be perceived)." },
  { front: "Why is silent grouping used in affinity mapping?", back: "To prevent verbal discussion from imposing frameworks before patterns can emerge organically from the data." },
  { front: "Why does Nielsen suggest five users for usability testing?", back: "Five users surface approximately 85% of usability problems. Marginal returns diminish rapidly after that." },
  { front: "What is the primary design constraint for Bharat products?", back: "Offline-first, low-bandwidth, feature-phone and Hindi-first design. Metro assumptions fail at scale." },
  { front: "What is the key rule of brainstorming in design thinking?", back: "Defer judgment. Separate generation from evaluation. Quantity before quality." },
  { front: "What does a storyboard make explicit?", back: "The user's full journey from problem recognition to resolution, frame by frame. Vague assumptions cannot survive specificity." }
 ],

 glossary: [
  { term: "Empathy map", def: "A synthesis tool with four quadrants: says, thinks, does, feels. Used to make user research findings shareable." },
  { term: "HMW", def: "How Might We. A question format for turning observations into design challenges." },
  { term: "Double diamond", def: "UK Design Council model: discover, define, develop, deliver. Two diverge-converge cycles." },
  { term: "Design sprint", def: "Jake Knapp's five-day process: map, sketch, decide, prototype, test." },
  { term: "Jobs to be done", def: "Christensen's framework: people hire products to accomplish functional, emotional, and social jobs." },
  { term: "Affinity mapping", def: "Grouping observations or ideas by theme to find patterns. Done silently to prevent framework imposition." },
  { term: "Prototype", def: "A low-fidelity, cheap, fast representation of a solution idea, built to make an assumption testable." },
  { term: "Usability test", def: "Observing real users complete a task with a prototype to uncover problems and needs." },
  { term: "Say-do gap", def: "The difference between what users report they do and what they actually do. Often the location of the real design problem." },
  { term: "POV statement", def: "Point of view. A one-sentence synthesis of who the user is, what they need, and why. The output of the first diamond." },
  { term: "Bharat", def: "In Indian product design, refers to users outside major metros, often with different device constraints, languages, and connectivity." },
  { term: "Crazy 8s", def: "An ideation exercise: eight sketched ideas in eight minutes. Forces divergence before convergence." }
 ],

 capstone: {
  t: "Run a complete design thinking project",
  d: "Choose a real problem in your community or organisation. Run the full double diamond: empathy interviews, affinity mapping, HMW questions, ideation, paper prototyping, and five-person user testing. Document every stage. Present your final insights and prototype concept.",
  xp: 200
 }
};

export default d;
