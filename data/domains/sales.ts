import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "sales",
 icon: "🤝",
 hue: "#22c55e",
 category: "Career",
 name: "Sales",
 tagline: "Help people buy what they actually need",

 basics: "Sales is the discipline of understanding what someone truly wants to achieve, then showing them how your product or service gets them there. It is not about pressure or persuasion tricks. It is about asking the right questions, listening more than you talk, and only selling when there is genuine fit.",
 deepBasics: "In India's B2B market, relationships precede contracts. Procurement moves slowly, involves multiple stakeholders, and trust is built over chai before any paperwork appears. Understanding buying psychology, pipeline health, and the difference between revenue activity and revenue results separates top performers from the rest.",
 whyItMatters: [
  "Every job involves selling, whether it is your ideas in a meeting, a raise to your manager, or a product to a customer.",
  "Understanding the buyer's journey protects you from being manipulated as a buyer yourself.",
  "Pipeline discipline is what separates salespeople who hit quota from those who panic every quarter-end.",
  "B2B SaaS in India is growing fast. Sales skills compound enormously in this environment."
 ],
 realWorldExample: "A SaaS founder in Bengaluru had a product that genuinely solved a finance team's problem. He kept losing deals to cheaper competitors. When he switched from demo-first to discovery-first, he started every call with 20 minutes of questions about reconciliation pain. By the time he showed the product, the CFO was already sold, because the founder had named the problem more precisely than the CFO could. Win rate went from 18% to 41% in two quarters. That is consultative selling at work.",

 mentors: [
  { name: "Neil Rackham", for: "SPIN Selling, research-backed B2B sales methodology", work: "SPIN Selling (1988)" },
  { name: "Matthew Dixon and Brent Adamson", for: "challenger sale model, teaching and tailoring instead of relationship-building", work: "The Challenger Sale (2011)" },
  { name: "Aaron Ross", for: "predictable revenue, outbound SDR model, pipeline building", work: "Predictable Revenue (2011)" },
  { name: "Jeb Blount", for: "fanatical prospecting, pipeline discipline", work: "Fanatical Prospecting (2015)" }
 ],

 diagrams: [
  {
   kind: "funnel",
   title: "B2B Sales Funnel",
   caption: "Every deal moves through stages. Conversion rates at each gate tell you where your process breaks.",
   data: { stages: ["Prospecting", "Discovery Call", "Demo/Proposal", "Negotiation", "Closed Won"] }
  },
  {
   kind: "quadrant",
   title: "SPIN Question Types",
   caption: "Four question types that move a buyer from awareness to urgency. Situation and Problem questions uncover pain. Implication and Need-payoff questions amplify it.",
   data: {
    axes: { x: "Specificity", y: "Buyer Urgency Created" },
    points: [
     { label: "Situation", x: 20, y: 10 },
     { label: "Problem", x: 40, y: 30 },
     { label: "Implication", x: 60, y: 70 },
     { label: "Need-Payoff", x: 80, y: 90 }
    ]
   }
  }
 ],

 synthesis: [
  { concept: "Consultative selling", linksTo: "psychology", note: "Active listening and mirroring are the same tools a therapist uses. In sales they build trust fast." },
  { concept: "Pipeline management", linksTo: "entrepreneurship", note: "Forecasting revenue is the same discipline as forecasting startup runway. Both require honest stage-exit criteria." },
  { concept: "Negotiation on price", linksTo: "negotiation", note: "Price negotiation is just a special case of the broader negotiation playbook. BATNA and anchoring are the same." },
  { concept: "Customer success vs sales", linksTo: "marketing", note: "Retention and expansion revenue are the post-sale phase of a customer lifecycle that marketing started." }
 ],

 subdomains: [
  {
   id: "discovery",
   name: "Discovery and Qualification",
   intro: "Most deals are won or lost in discovery. Asking the right questions before any pitch separates top performers from demo-mongers.",
   capabilities: [
    "Run a 30-minute discovery call that uncovers the real business problem before you open a slide.",
    "Qualify a deal using BANT or MEDDIC so you stop chasing deals that will never close.",
    "Ask implication questions that make the prospect feel the cost of inaction."
   ]
  },
  {
   id: "pipeline",
   name: "Pipeline and Forecasting",
   intro: "A pipeline is only useful if stage definitions are honest and exit criteria are clear. Most pipelines are wish lists.",
   capabilities: [
    "Define stage-exit criteria for each pipeline stage so deals do not hide in the wrong bucket.",
    "Calculate your own win rate, average deal size, and sales cycle length from your CRM data.",
    "Build a bottom-up forecast that your VP will trust."
   ]
  },
  {
   id: "closing",
   name: "Closing and Negotiation",
   intro: "Closing is not a trick. It is the logical consequence of a well-run discovery and a genuine fit. Pressure tactics fail in repeat-business markets.",
   capabilities: [
    "Ask for the business without being apologetic or aggressive.",
    "Handle a price objection without caving on margin unnecessarily.",
    "Use a mutual action plan to keep a late-stage deal from going dark."
   ]
  },
  {
   id: "metrics",
   name: "Sales Metrics and Operations",
   intro: "Numbers tell you where the process is leaking. CAC, LTV, and win rate are the three you cannot ignore.",
   capabilities: [
    "Calculate CAC and LTV for your product and determine whether the ratio is sustainable.",
    "Identify the stage in your pipeline with the worst conversion and prioritise fixing it.",
    "Set activity metrics (calls, meetings, demos) that actually predict revenue outcomes."
   ]
  }
 ],

 concepts: [
  {
   t: "Consultative Selling",
   subdomain: "discovery",
   definition: "A sales approach that prioritises diagnosing the buyer's problem before prescribing a solution, mirroring how a doctor works.",
   short: "Ask before you pitch. Understand the problem first, then show how you solve it.",
   deep: "Consultative selling flips the traditional sales script. Instead of leading with product features, you lead with questions. The goal of the first call is to understand the buyer's world well enough to articulate their problem better than they can. When you do that, the product pitch almost sells itself, because you have already established credibility and trust. In India's enterprise sales environment, this matters doubly. Decision-makers at large firms have heard every pitch. What they have not heard is someone who genuinely understands their operations. Discovery is where deals are won.",
   status: "settled",
   reflect: "In your last three sales conversations, did you spend more time talking or more time listening?",
   generic: "Think of it like visiting a good doctor. They ask questions before prescribing anything. A bad doctor just pushes the medication they have. Consultative selling is being the good doctor.",
   expert: "The consultative model was formalised by Mack Hanan in Consultative Selling (1970) and later reinforced by Rackham's SPIN research (1988), which found that high-value B2B sales correlated with question density, not feature-benefit statements. Dixon and Adamson's Challenger Sale (2011) added a wrinkle: top performers teach buyers something they did not know about their own business, rather than just diagnosing. Both models agree on the core principle: understand before you pitch.",
   conceptQuiz: [
    {
     q: "What distinguishes consultative selling from traditional selling?",
     options: [
      { text: "The salesperson diagnoses the buyer's problem before presenting a solution.", correct: true },
      { text: "The salesperson leads with a product demo to show value quickly.", misconception: "Demo-first is the traditional approach that consultative selling replaces." },
      { text: "The salesperson offers the lowest possible price to win the deal.", misconception: "Consultative selling is about value, not price competition." },
      { text: "The salesperson relies on a script to handle objections consistently.", misconception: "Scripted approaches contradict the adaptive, listening-first nature of consultative selling." }
     ],
     why: "Consultative selling is defined by diagnosis before prescription. The order matters."
    },
    {
     q: "In India's B2B enterprise sales, consultative selling is especially valuable because…",
     options: [
      { text: "Decision-makers respond to trusted advisors who understand their operations, not pitches.", correct: true },
      { text: "Indian buyers are price-sensitive and consultative selling lowers the price.", misconception: "Consultative selling typically justifies higher prices, not lower ones." },
      { text: "Sales cycles are very short, so quick demos are necessary.", misconception: "Indian enterprise procurement cycles are typically longer, not shorter." },
      { text: "Product features are more important than relationships in India.", misconception: "The reverse is closer to the truth in most large Indian organisations." }
     ],
     why: "Relationships and trust drive enterprise B2B in India. Deep discovery builds both."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write a discovery question bank", d: "Write 10 open-ended discovery questions for a product or service you sell or might sell. Focus on problem, impact, and urgency.", xp: 15 },
    { level: "easy", t: "Run a diagnosis-only call", d: "In your next sales conversation, commit to asking questions for the first 20 minutes before showing anything. Record what you learned that you would have missed.", xp: 25 },
    { level: "advanced", t: "Build a problem hypothesis", d: "Before a key meeting, write a one-paragraph hypothesis of the prospect's problem using publicly available information. Use the call to test and refine it.", xp: 45 }
   ]
  },
  {
   t: "The SPIN Framework",
   subdomain: "discovery",
   fullForm: "Situation, Problem, Implication, Need-Payoff",
   definition: "A research-backed questioning sequence for complex sales that moves a buyer from vague awareness of a problem to a felt need to solve it.",
   short: "Four question types that move a buyer from 'we're fine' to 'we need this now.'",
   deep: "Neil Rackham studied 35,000 sales calls over 12 years and found a pattern: successful complex B2B sales used a specific sequence of questions. Situation questions gather facts (how many people are on your team?). Problem questions surface pain (where does the current process break down?). Implication questions amplify the cost of the problem (what happens to your quarterly close if that keeps happening?). Need-Payoff questions help the buyer articulate the value of a solution (if you could fix that, what would it be worth?). The sequence works because it moves the buyer through a logical emotional arc: from neutral to concerned to motivated.",
   status: "settled",
   reflect: "In your last sales conversation, which of the four SPIN question types did you use most? Which did you skip?",
   generic: "Imagine a doctor first asking about your life (situation), then asking where it hurts (problem), then asking what your life looks like if the pain keeps getting worse (implication), then asking what life would feel like if it were fixed (need-payoff). You would leave that conversation desperate for the prescription.",
   expert: "Rackham's SPIN data from Huthwaite International remains one of the few large-sample empirical studies in B2B sales methodology (1988). Key finding: in small sales, benefit statements increased closes; in large, complex sales, they either had no effect or decreased success. Problem and Implication questions did the heavy lifting. Implication questions were the most correlated with success and the most neglected by average performers. The framework has been critiqued for being retrospectively fitted to call transcripts, though its practical utility in large-ticket B2B is widely accepted.",
   conceptQuiz: [
    {
     q: "Which SPIN question type is most correlated with success in complex B2B sales, according to Rackham's research?",
     options: [
      { text: "Implication questions", correct: true },
      { text: "Situation questions", misconception: "Situation questions are necessary but gathering facts alone does not create urgency." },
      { text: "Need-Payoff questions", misconception: "Need-Payoff questions close the loop but Implication questions create the emotional urgency they depend on." },
      { text: "Problem questions", misconception: "Problem questions surface pain but do not amplify it. Implication questions do the amplification." }
     ],
     why: "Implication questions multiply the felt cost of the problem. They are the step most sellers skip."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Map the SPIN sequence", d: "For a product you know well, write one example of each SPIN question type. Check that your implication question truly amplifies the cost of inaction.", xp: 15 },
    { level: "easy", t: "SPIN role play", d: "With a colleague, do a 15-minute mock discovery call. The buyer is told to say 'things are fine.' Use SPIN questions to surface a real pain they did not open with.", xp: 25 },
    { level: "advanced", t: "Score a real call", d: "Record or recall a recent sales call. Tag each question as S, P, I, or N. Calculate the ratio and note where implication questions were missing.", xp: 40 }
   ]
  },
  {
   t: "Objection Handling",
   subdomain: "closing",
   definition: "The skill of responding to a buyer's stated concerns in a way that either resolves them or reveals that they signal deeper unvoiced issues.",
   short: "Objections are not rejections. Most are requests for more information or signs of hidden concerns.",
   deep: "The worst response to an objection is a counter-argument. Arguing makes the buyer defensive. The better response is to acknowledge, explore, then respond. 'I understand that price is a concern. Can I ask what you're comparing us to?' gets you more information. The real issue is often not the stated objection. 'It's too expensive' usually means 'I don't see enough value' or 'I haven't gotten sign-off from my boss yet.' Experienced sellers hear what is behind the objection, not just the surface words. In Indian enterprise sales, objections often come late and in indirect language. Learning to read them is a cultural skill as much as a sales skill.",
   status: "framework",
   reflect: "Think of the last time someone objected to something you proposed. Did you argue back, or did you ask a question to understand the real concern?",
   conceptQuiz: [
    {
     q: "When a prospect says 'It's too expensive,' the best first move is…",
     options: [
      { text: "Ask a question to understand what they are comparing the price to or what value they expect.", correct: true },
      { text: "Immediately offer a discount to remove the barrier.", misconception: "Discounting before understanding the objection trains buyers to use price objections to extract discounts." },
      { text: "List all the features that justify the price.", misconception: "Feature-dumping is a counter-argument that makes the buyer defensive rather than curious." },
      { text: "Tell them your product is actually cheap compared to the competition.", misconception: "Comparison statements without context are rarely persuasive and can feel dismissive." }
     ],
     why: "Asking a question turns an objection into a conversation. You cannot handle what you do not understand."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Build an objection map", d: "List the five most common objections you hear. For each, write what the real underlying concern might be.", xp: 15 },
    { level: "easy", t: "Acknowledge before responding", d: "In your next three conversations involving resistance, practice saying 'I understand' or 'That makes sense' before you respond. Notice the difference in tone.", xp: 20 },
    { level: "advanced", t: "Roleplay the hardest objection", d: "Have a colleague throw your three hardest objections at you back-to-back. Record the session and review your response quality.", xp: 40 }
   ]
  },
  {
   t: "Pipeline Management",
   subdomain: "pipeline",
   definition: "The practice of tracking deals across defined stages with honest stage-exit criteria and using aggregate pipeline data to forecast revenue.",
   short: "Your pipeline is only useful if the stages are honest. Most are wish lists.",
   deep: "A pipeline without stage-exit criteria is a list of hopes. For a deal to move from 'Discovery' to 'Proposal,' something verifiable should have happened: a decision-maker was identified, a pain was confirmed, a budget signal was received. Without criteria, deals accumulate in late stages like sediment, making the forecast useless and making the seller feel busy without being productive. Pipeline hygiene means regularly removing stale deals, re-qualifying dormant ones, and keeping only deals that have a clear path to close. In Indian B2B, where procurement cycles are long and relationships warm slowly, pipeline discipline is what prevents the feast-or-famine cycle.",
   status: "framework",
   reflect: "Look at your current pipeline. How many deals have not moved in more than 30 days? What is your honest probability on each of them?",
   conceptQuiz: [
    {
     q: "The most important element that makes a sales pipeline useful for forecasting is…",
     options: [
      { text: "Clear, verifiable stage-exit criteria for each stage.", correct: true },
      { text: "A large number of deals at every stage.", misconception: "Volume without quality and honest stage placement produces inaccurate forecasts." },
      { text: "Deals weighted by gut feeling on close probability.", misconception: "Subjective probability without stage-exit criteria is the core problem, not the solution." },
      { text: "Updating the CRM daily to show activity.", misconception: "Activity logging is hygiene, not the factor that makes the pipeline forecastable." }
     ],
     why: "Stage-exit criteria make the pipeline honest. Without them, deals sit wherever the seller wants them to sit."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Define stage-exit criteria", d: "For each stage in your sales process, write one verifiable thing that must have happened for a deal to qualify for that stage.", xp: 15 },
    { level: "easy", t: "Pipeline audit", d: "Review every deal in your current pipeline. Remove any that have no scheduled next step or that have been stale for more than 45 days. Note what you lost by keeping them.", xp: 25 },
    { level: "advanced", t: "Build a forecast model", d: "Using your last 20 closed deals, calculate your actual conversion rate by stage. Build a simple spreadsheet model to forecast next quarter from current pipeline.", xp: 50 }
   ]
  },
  {
   t: "Discovery Calls",
   subdomain: "discovery",
   definition: "A structured first conversation designed to qualify a prospect and understand their situation, pain, and decision process before any proposal.",
   short: "The first call is for listening, not pitching. Its job is diagnosis, not persuasion.",
   deep: "A great discovery call answers four questions: What is the prospect actually trying to achieve? What is stopping them now? Who makes the decision and what does their process look like? What does success look like and what would it be worth? Most sellers rush to demo because showing the product feels productive. It is not. A demo without discovery is a gamble. You have no idea what to emphasise. Discovery calls also qualify: does the prospect have budget, authority, a real need, and a realistic timeline? Wasting a full sales cycle on a deal that was never closeable is the biggest time-cost in B2B sales.",
   status: "settled",
   reflect: "In your last discovery call, could you articulate the prospect's top three pain points afterwards without looking at your notes?",
   conceptQuiz: [
    {
     q: "The primary goal of a discovery call is to…",
     options: [
      { text: "Understand the prospect's problem, situation, and buying process before proposing anything.", correct: true },
      { text: "Give the prospect a quick product overview so they can decide if they are interested.", misconception: "Product-first leads to demos for unqualified prospects and misses the diagnosis step." },
      { text: "Close the deal or at least get a strong buying signal in the first call.", misconception: "Rushing to a close without understanding the buyer produces low-quality wins and high churn." },
      { text: "Build rapport by talking about things unrelated to the product.", misconception: "Rapport is valuable but is not the goal. Discovery without understanding is small talk, not selling." }
     ],
     why: "Discovery is diagnosis. You cannot prescribe without understanding the problem first."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write a discovery call outline", d: "Create a one-page discovery call guide with four sections: context questions, pain questions, impact questions, and next-step criteria.", xp: 15 },
    { level: "easy", t: "Post-call debrief", d: "After your next discovery call, write down without looking at notes: the prospect's top pain, their decision process, and the key next step. How much do you actually know?", xp: 20 },
    { level: "advanced", t: "Build a qualification scorecard", d: "Create a 10-question qualification scorecard using BANT or MEDDIC criteria. Score your last five prospects and compare scores to outcomes.", xp: 45 }
   ]
  },
  {
   t: "Social Selling",
   subdomain: "pipeline",
   definition: "Using social platforms, primarily LinkedIn, to research prospects, build credibility, and initiate conversations before a formal sales outreach.",
   short: "Warm outreach beats cold. Social selling gets you in the door before you knock.",
   deep: "Social selling is not spamming LinkedIn connections with pitch messages. It is building a presence that makes prospects come to you or at least recognise your name when you reach out. It includes: sharing genuinely useful content in your category, engaging thoughtfully on prospects' posts, using connection networks to get warm introductions, and doing enough pre-call research that your outreach is specific and relevant. In India's growing SaaS and enterprise ecosystem, LinkedIn has become a meaningful sales channel, especially for mid-market deals where a warm intro from a mutual connection shortens cycles significantly.",
   status: "framework",
   reflect: "When a prospect Googles your name, what do they find? Does it give them a reason to trust you before the first call?",
   conceptQuiz: [
    {
     q: "What makes social selling different from social media marketing?",
     options: [
      { text: "Social selling uses platforms to build individual credibility and initiate specific targeted relationships, not broadcast to everyone.", correct: true },
      { text: "Social selling uses paid advertising to reach prospects at scale.", misconception: "Paid social is marketing. Social selling is a one-to-one relationship-building practice." },
      { text: "Social selling is primarily about posting thought-leadership content.", misconception: "Content is one component but the core is specific engagement and relationship initiation." },
      { text: "Social selling only works on LinkedIn.", misconception: "LinkedIn is the dominant B2B platform but the method applies on Twitter and WhatsApp groups in certain industries." }
     ],
     why: "The distinction is one-to-one relationship initiation versus one-to-many broadcast. Both matter but they are different skills."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit your LinkedIn profile", d: "Review your LinkedIn headline, about section, and recent activity. Does it communicate value to your target buyers, or is it a resume for recruiters?", xp: 10 },
    { level: "easy", t: "Engage before you pitch", d: "For five prospects you plan to reach out to next week, engage meaningfully with one piece of their recent content before sending any message.", xp: 20 },
    { level: "advanced", t: "Build a content calendar", d: "Commit to posting two pieces of genuinely useful content per week for one month, targeted at your buyer persona. Track profile views, connection requests, and inbound messages.", xp: 40 }
   ]
  },
  {
   t: "Closing Techniques",
   subdomain: "closing",
   definition: "The set of approaches used to move a qualified buyer to a final decision, ranging from direct asks to conditional and summary closes.",
   short: "Closing is not a trick. It is asking for the business when you have earned the right to ask.",
   deep: "The myth of the slick closer is mostly harmful. Pressure tactics damage trust and produce buyer's remorse, which leads to cancellations and poor retention. In consultative B2B sales, a close is simply the logical conclusion of a well-run discovery and proposal process. The most effective closes are simple: 'Based on what we've discussed, does this solve the problem?' or 'What would need to be true for us to move forward this month?' The assumptive close, the trial close, and the summary close all have their place, but all require that the buyer's objections have been genuinely addressed first. In Indian enterprise sales, the paperwork and legal review phases are long, so closing a commercial decision in principle early and then managing procurement separately is a common and effective pattern.",
   status: "framework",
   reflect: "When did you last ask explicitly for the business? Did you, or did you wait for the buyer to bring it up?",
   conceptQuiz: [
    {
     q: "In consultative B2B selling, the most effective closing approach is…",
     options: [
      { text: "A direct question asking for the decision once all objections have been addressed.", correct: true },
      { text: "Creating artificial urgency with a limited-time discount to force a decision.", misconception: "Artificial urgency damages trust and attracts the wrong buyers. It also trains buyers to wait for discounts." },
      { text: "Assuming the sale and sending a contract without asking.", misconception: "Assumptive closes skip consent and can feel presumptuous, damaging the relationship." },
      { text: "Waiting for the buyer to bring up the next step to avoid pressure.", misconception: "Waiting hands control to the buyer and is often read as disinterest or lack of confidence." }
     ],
     why: "A direct ask after genuine objection resolution is both respectful and effective. The deal has been earned, not manufactured."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Write three close questions", d: "Write three ways to ask for the business without using pressure or urgency tricks. Read them aloud. Do they feel natural?", xp: 10 },
    { level: "easy", t: "Use a mutual action plan", d: "Create a one-page mutual action plan for a current late-stage deal. Include steps for both sides and shared timelines.", xp: 25 },
    { level: "advanced", t: "Track your close rate", d: "For the next two months, log every deal you ask for the business on. Track close rate and time from ask to decision. Look for patterns.", xp: 40 }
   ]
  },
  {
   t: "Customer Success vs Sales",
   subdomain: "metrics",
   definition: "The distinction between acquiring new customers (sales) and ensuring existing customers achieve their goals so they renew and expand (customer success).",
   short: "Selling gets the contract. Customer success keeps it and grows it. Both are revenue functions.",
   deep: "In SaaS and subscription businesses, acquisition without retention destroys economics. A customer who churns after one year costs you the entire CAC and generates no LTV. Customer success is the function that ensures customers actually achieve the outcome they bought the product for, not just that they are paying invoices. The line between sales and customer success matters: sales owns new logos and initial expansion conversations, customer success owns adoption, health scores, and renewal. The handoff between them, what was promised during sales versus what was delivered, is where most SaaS churn begins. Getting this right is a cross-functional discipline.",
   status: "settled",
   reflect: "In your last three customer interactions after a deal closed, did the customer feel the value you promised them? How would you know?",
   conceptQuiz: [
    {
     q: "In a SaaS business, customer success exists primarily to…",
     options: [
      { text: "Ensure customers achieve the outcome they bought the product for, driving retention and expansion.", correct: true },
      { text: "Handle support tickets and technical issues.", misconception: "Support is reactive to problems. Customer success is proactive about outcomes. Both exist but they are different functions." },
      { text: "Upsell customers on higher-tier plans.", misconception: "Expansion revenue is an outcome of customer success but not its primary mission. Outcome achievement drives expansion, not upsell campaigns." },
      { text: "Reduce the workload of the sales team post-close.", misconception: "Customer success is a business function in its own right, not a support function for sales." }
     ],
     why: "Retention and expansion flow from customers achieving real outcomes. That is the job of customer success."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Define success for a customer", d: "Take one current customer. Write down what success looks like for them in 90 days, in their language, not yours.", xp: 10 },
    { level: "easy", t: "Audit the sales-to-CS handoff", d: "Interview a customer success manager in your org (or yourself if you play both roles). What information is consistently missing from the sales handoff? Fix one thing.", xp: 25 },
    { level: "advanced", t: "Build a health score", d: "Design a simple customer health score for a product you know. Use three to five measurable signals. Run it on your top 10 accounts and see who is at risk.", xp: 45 }
   ]
  },
  {
   t: "Sales Metrics: CAC, LTV, and Win Rate",
   subdomain: "metrics",
   fullForm: "Customer Acquisition Cost, Lifetime Value, Win Rate",
   definition: "The three fundamental quantitative measures of sales efficiency: how much it costs to acquire a customer, how much revenue that customer generates over their lifetime, and what percentage of qualified opportunities close.",
   short: "Three numbers every salesperson should know cold: how much you spend to get a customer, how much they are worth, and how often you win.",
   deep: "CAC (Customer Acquisition Cost) is total sales and marketing spend divided by new customers acquired in the same period. LTV (Lifetime Value) is average revenue per customer multiplied by average customer lifetime. The LTV:CAC ratio should be at least 3:1 for a healthy business model. Win rate is closed-won deals divided by total qualified opportunities. These three numbers are the foundation of sales planning and investor conversations. In India's B2B SaaS market, CAC can be misleadingly low when founders are doing sales themselves (zero salary cost counted), so founders should model fully-loaded CAC as they plan to scale.",
   status: "settled",
   reflect: "Do you know your own CAC, LTV, and win rate? If not, what data do you need to calculate them and what would the answer tell you?",
   conceptQuiz: [
    {
     q: "If your LTV:CAC ratio is 1.2:1, what does that indicate?",
     options: [
      { text: "The business is spending almost as much to acquire a customer as that customer generates, which is unsustainable.", correct: true },
      { text: "The business is highly capital-efficient and acquiring customers cheaply.", misconception: "A ratio below 3 is generally considered unhealthy. 1.2 means almost no margin above acquisition cost." },
      { text: "The win rate is too low and needs to improve.", misconception: "Win rate affects CAC but LTV:CAC is about the economics of what a customer is worth relative to what they cost to acquire." },
      { text: "The business should reduce price to increase LTV.", misconception: "Reducing price reduces LTV. The goal is to either reduce CAC or increase LTV or both." }
     ],
     why: "LTV:CAC below 3 means the unit economics are weak. The business is burning money acquiring customers that do not generate enough return."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Calculate your CAC", d: "Add up all sales and marketing spend in the last 12 months. Divide by new customers acquired. That is your CAC. Compare it to your average deal size.", xp: 15 },
    { level: "easy", t: "Calculate your LTV:CAC ratio", d: "Estimate your average customer lifetime in months and multiply by average monthly revenue per customer to get LTV. Divide by CAC. Is the ratio above 3?", xp: 25 },
    { level: "advanced", t: "Build a unit economics model", d: "Build a spreadsheet that models CAC, LTV, payback period, and break-even month for your product at three different churn rate scenarios.", xp: 50 }
   ]
  },
  {
   t: "Negotiating on Price",
   subdomain: "closing",
   definition: "The specific skill of holding or defending price during a sales negotiation while preserving the relationship and the perceived value of the product.",
   short: "Every discount you give without a concession in return trains the buyer to always push for more.",
   deep: "Price negotiation in B2B is a game of perceived value, anchoring, and precedent. The first principle: never give a discount without getting something in return (longer contract, more seats, earlier payment, a reference). Unilateral concessions train the buyer to always start with a discount request. The second principle: defend price by returning to value, not by justifying cost. 'Our price is high because it eliminates the problem that costs your team 10 hours a week, which at your billing rate is Rs. 80,000 per month' is a better response than listing features. In Indian enterprise procurement, price negotiation is cultural and expected. Building room into your initial proposal to allow for a perceived win is legitimate and common.",
   status: "framework",
   reflect: "In your last price negotiation, did you give something up without getting anything in return? What would you do differently?",
   conceptQuiz: [
    {
     q: "When a buyer asks for a 20% discount, the best response is…",
     options: [
      { text: "Ask what they can offer in return, such as a longer contract or faster payment, before moving on price.", correct: true },
      { text: "Offer 10% as a compromise to show goodwill.", misconception: "Splitting the difference without getting a concession still trains buyers to anchor high and always push." },
      { text: "Refuse all discounts and risk losing the deal.", misconception: "Rigid refusal ignores legitimate budget constraints. The goal is mutual value exchange, not price defense for its own sake." },
      { text: "Remove features to lower the price.", misconception: "Descoping to meet price signals low value and sets a precedent for scope cuts rather than resolving the value gap." }
     ],
     why: "Anchoring the discount conversation to a concession exchange changes the frame from 'vendor discount' to 'value trade.'"
    }
   ],
   conceptTasks: [
    { level: "basic", t: "List what you can trade", d: "Write five non-price concessions you could offer in exchange for a discount request: faster start, reference call, case study, longer contract, etc.", xp: 10 },
    { level: "easy", t: "Practice a value justification", d: "For your product, write a three-sentence value justification that quantifies the problem solved in the buyer's terms. Practice saying it aloud.", xp: 20 },
    { level: "advanced", t: "Debrief a price negotiation", d: "After your next deal that involved price negotiation, write a post-mortem: What was the initial ask? What did you give? What did you get in return? What would you change?", xp: 40 }
   ]
  }
 ],

 counterView: "Most sales advice is written by and for extroverted, aggressive personality types. The 'always be closing' culture produces high turnover, buyer resentment, and short-term thinking. Research consistently shows that the best long-term salespeople, especially in high-value B2B markets, are those who build genuine expertise in the buyer's domain and earn trust over time. They do not close hard. They create situations where not buying becomes the stranger choice. The entire edifice of scripted objection handling and high-pressure closing is built for one-time transactions, not for the repeat-business, referral-driven reality of most professional sales.",

 capabilities: [
  "Run a discovery call that uncovers the real business problem in 30 minutes.",
  "Use SPIN questions to move a buyer from 'we're fine' to 'we need to fix this.'",
  "Build a pipeline with honest stage-exit criteria that produces a credible forecast.",
  "Handle a price objection by asking for a concession rather than caving on margin.",
  "Calculate CAC, LTV, and win rate for any product you sell.",
  "Ask for the business confidently without pressure or apology.",
  "Distinguish between a sales objection and a genuine disqualifying factor."
 ],

 cheatsheet: [
  "Discovery before demo: ask before you pitch. You cannot prescribe without diagnosing.",
  "SPIN order: Situation, Problem, Implication, Need-Payoff. Implication does the heavy lifting.",
  "Stage-exit criteria: each pipeline stage needs a verifiable thing that must have happened.",
  "Objection first move: ask a question, do not argue. 'What are you comparing us to?'",
  "Price concession rule: never give without getting. Longer contract, earlier payment, or reference.",
  "LTV:CAC should be at least 3:1. Below that, the unit economics are broken.",
  "Close directly: 'Based on what we discussed, does this solve the problem? Can we move forward?'",
  "Mutual action plan: shared next steps with dates. Deals that go dark have no MAP."
 ],

 roadmap: [
  { rank: "Novice",       focus: "Sales fundamentals",        do: "Read Rackham's SPIN Selling. Learn what a discovery call is and why it comes before a demo.",                                     milestone: "Run one full discovery call without pitching.",                           time: "2 weeks" },
  { rank: "Apprentice",   focus: "Discovery and qualification", do: "Build a discovery question bank. Learn BANT or MEDDIC. Practice active listening.",                                             milestone: "Qualify five prospects and disqualify two of them honestly.",             time: "4 weeks" },
  { rank: "Practitioner", focus: "Full sales cycle",           do: "Run deals from discovery through close. Build your first pipeline. Track win rate.",                                             milestone: "Close three deals end-to-end. Know your win rate.",                      time: "3 months" },
  { rank: "Specialist",   focus: "Pipeline and metrics",       do: "Add stage-exit criteria. Calculate CAC and LTV. Build a forecast model.",                                                        milestone: "Produce a quarter-end forecast accurate to within 20%.",                  time: "6 months" },
  { rank: "Expert",       focus: "Enterprise B2B",             do: "Learn multi-stakeholder selling and champion development. Run a deal with five-plus decision-makers.",                            milestone: "Close a deal requiring C-suite sign-off.",                               time: "1 year" },
  { rank: "Master",       focus: "Sales strategy and hiring",  do: "Build a repeatable sales playbook. Hire and coach a junior rep using your methodology.",                                         milestone: "A rep you coached hits their target using your system.",                  time: "2 years" },
  { rank: "Grandmaster",  focus: "Revenue architecture",       do: "Design the entire revenue function: sales, customer success, and the handoff between them. Align with product and marketing.", milestone: "Lead a revenue organisation that hits plan for four consecutive quarters.", time: "3 plus years" }
 ],

 resources: {
  free: [
   { name: "SPIN Selling Summary", what: "Core concepts from Rackham's research on B2B sales.", url: "", kind: "article", verify: true },
   { name: "HubSpot Sales Blog", what: "Practical sales tactics, templates, and frameworks.", url: "https://blog.hubspot.com/sales", kind: "article", weight: "popular" },
   { name: "30 Minutes to President's Club Podcast", what: "Tactical sales conversations with top enterprise sellers.", url: "", kind: "podcast", verify: true }
  ],
  paid: [
   { name: "SPIN Selling", what: "Neil Rackham's research-backed methodology for complex B2B sales. Core reading.", url: "", kind: "book", weight: "primary", price: "approx Rs. 700 on Amazon India", verify: true },
   { name: "The Challenger Sale", what: "Dixon and Adamson's research on what separates top performers. Teach, tailor, take control.", url: "", kind: "book", weight: "primary", price: "approx Rs. 800 on Amazon India", verify: true },
   { name: "Fanatical Prospecting", what: "Jeb Blount on pipeline discipline and outbound consistency.", url: "", kind: "book", weight: "secondary", price: "approx Rs. 700 on Amazon India", verify: true }
  ]
 },

 missions: [
  { t: "Run a pure discovery call",            d: "Have a 30-minute conversation with a prospect or colleague playing buyer. Do not pitch once. End with a clear problem statement you both agree on.",                             xp: 50 },
  { t: "Build your sales metrics dashboard",   d: "Calculate your CAC, LTV, and win rate from real data. Put them in a simple spreadsheet. If you do not have data, define what data you would collect.",                           xp: 60 },
  { t: "Write a qualification scorecard",       d: "Build a 10-point qualification scorecard using BANT or MEDDIC. Score your current pipeline with it. Disqualify any deal that scores below 5.",                                  xp: 70 },
  { t: "Handle a price negotiation without caving", d: "In your next price discussion, ask for a concession before you move on price. Write down what you asked for and what you received.",                                        xp: 60 },
  { t: "Build a sales playbook page",          d: "Write a one-page playbook entry for one product you sell: ideal customer profile, three discovery questions, common objections and responses, and close criteria.",               xp: 80 },
  { t: "Pipeline audit",                       d: "Review your entire pipeline. Remove every deal with no next step or that has been stale more than 45 days. Write down why each stale deal stalled.",                              xp: 50 }
 ],

 quiz: [
  {
   q: "In SPIN Selling, which question type is most correlated with closing complex B2B deals?",
   options: [
    { text: "Implication questions", correct: true },
    { text: "Situation questions", misconception: "Situation questions gather facts but do not create urgency or emotional momentum." },
    { text: "Need-Payoff questions", misconception: "Need-Payoff questions are valuable closers but depend on Implication questions having done the emotional work first." },
    { text: "Problem questions", misconception: "Problem questions surface pain but Implication questions amplify it. Amplification is what creates urgency to act." }
   ],
   why: "Rackham's research showed that Implication questions, which multiply the felt cost of the problem, were the strongest predictor of success in large complex sales."
  },
  {
   q: "A healthy LTV:CAC ratio in a SaaS business is generally considered to be at least…",
   options: [
    { text: "3:1", correct: true },
    { text: "1:1", misconception: "At 1:1, you are spending as much to acquire customers as they are worth. That is breakeven at best, with no room for overhead or growth." },
    { text: "10:1", misconception: "10:1 is excellent but unrealistic as a minimum threshold. It may also signal under-investment in growth." },
    { text: "1.5:1", misconception: "Below 3:1, the unit economics are generally considered weak for a scalable SaaS business." }
   ],
   why: "3:1 is the widely accepted minimum threshold for healthy SaaS unit economics. It provides enough margin to fund operations and growth after acquisition cost."
  },
  {
   q: "When a buyer says 'we need to think about it,' the best sales response is…",
   options: [
    { text: "Ask what specifically needs to be resolved before they can decide.", correct: true },
    { text: "Give them a week and follow up with a check-in email.", misconception: "Following up without understanding the hesitation produces the same conversation again, not a decision." },
    { text: "Offer a discount to make the decision easier.", misconception: "Discounting in response to vague hesitation destroys margin without solving the actual concern." },
    { text: "Accept that the deal is lost and move on.", misconception: "'Think about it' is rarely a rejection. It usually signals an unresolved concern that a question can surface." }
   ],
   why: "Asking what needs to be resolved converts a vague stall into a specific, workable objection."
  },
  {
   q: "The primary purpose of stage-exit criteria in a sales pipeline is…",
   options: [
    { text: "To ensure deals only advance when specific verifiable conditions have been met, making the forecast honest.", correct: true },
    { text: "To slow down the sales process and ensure thoroughness.", misconception: "Stage-exit criteria are about accuracy, not speed. They prevent wishful-thinking placement, not thoroughness." },
    { text: "To give the CRM more data fields to fill in.", misconception: "CRM fields are the mechanism but the purpose is forecast accuracy, not data collection." },
    { text: "To make it easier to fire underperforming salespeople.", misconception: "Stage criteria are a forecasting and coaching tool, not a performance management device." }
   ],
   why: "Without verifiable exit criteria, deals sit wherever the seller wants them to sit. The forecast becomes fiction."
  },
  {
   q: "In Indian B2B enterprise sales, which approach is most effective for building initial trust?",
   options: [
    { text: "Leading with deep questions about the buyer's business before any product mention.", correct: true },
    { text: "Sending a detailed product brochure before the first meeting.", misconception: "Brochure-first positions you as a vendor, not an advisor. Indian enterprise buyers respond to relationship signals, not collateral." },
    { text: "Offering a discounted pilot to lower the barrier to entry.", misconception: "Pilots without trust often lead to analysis paralysis. Trust precedes the pilot in Indian enterprise culture." },
    { text: "Emphasising that your company is a global brand.", misconception: "Brand recognition helps but local credibility and the quality of the relationship matter more in Indian enterprise decisions." }
   ],
   why: "In Indian enterprise culture, relationships and trust precede contracts. Deep, curious questions signal genuine interest and build advisor credibility faster than any pitch."
  }
 ],

 flashcards: [
  { front: "What does SPIN stand for?", back: "Situation, Problem, Implication, Need-Payoff. A questioning sequence for complex B2B sales developed by Neil Rackham." },
  { front: "What is CAC?", back: "Customer Acquisition Cost. Total sales and marketing spend divided by new customers acquired in the same period." },
  { front: "What is the minimum healthy LTV:CAC ratio?", back: "3:1. Below this, unit economics are generally unsustainable for a scalable business." },
  { front: "What is consultative selling?", back: "Diagnosing the buyer's problem before prescribing a solution. Question-first, solution-second." },
  { front: "What are stage-exit criteria?", back: "Verifiable conditions that must be met for a deal to advance to the next pipeline stage. They make forecasts honest." },
  { front: "What is a mutual action plan?", back: "A shared document listing the steps, owners, and dates both buyer and seller must complete for the deal to close. Prevents deals going dark." },
  { front: "What is win rate?", back: "Closed-won deals divided by total qualified opportunities, expressed as a percentage." },
  { front: "What is the first move when a buyer asks for a discount?", back: "Ask for something in return before moving on price: a longer contract, earlier payment, a reference, or expanded scope." },
  { front: "What is BANT?", back: "Budget, Authority, Need, Timeline. A qualification framework for assessing whether a prospect is worth pursuing." },
  { front: "What is the difference between customer success and sales?", back: "Sales acquires new customers. Customer success ensures existing customers achieve their goals, driving retention and expansion." }
 ],

 glossary: [
  { term: "CAC", def: "Customer Acquisition Cost. Total sales and marketing spend divided by customers acquired." },
  { term: "LTV", def: "Lifetime Value. Revenue a customer generates over their entire relationship with the company." },
  { term: "Win rate", def: "Percentage of qualified opportunities that close as won deals." },
  { term: "SPIN", def: "Situation, Problem, Implication, Need-Payoff. Rackham's questioning framework for B2B sales." },
  { term: "BANT", def: "Budget, Authority, Need, Timeline. A sales qualification framework." },
  { term: "MEDDIC", def: "Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion. An enterprise qualification framework." },
  { term: "Pipeline", def: "The set of active deals at various stages of the sales process, used for forecasting." },
  { term: "Mutual Action Plan", def: "A shared checklist of steps and dates that both buyer and seller must complete to close a deal." },
  { term: "Discovery call", def: "A structured early conversation to understand the prospect's situation, pain, and buying process." },
  { term: "Champion", def: "An internal advocate at the prospect company who believes in your solution and helps you navigate their organisation." },
  { term: "Churn", def: "The rate at which customers cancel or do not renew. High churn destroys LTV." },
  { term: "Stage-exit criteria", def: "Verifiable conditions that must be met before a deal advances to the next pipeline stage." }
 ],

 capstone: {
  t: "Build a complete sales playbook",
  d: "Create a full sales playbook for a real or hypothetical product: ideal customer profile, discovery question bank, SPIN question examples, qualification scorecard, common objections with responses, close approach, and CAC and LTV model. Present it as if onboarding a new salesperson.",
  xp: 200
 }
};

export default d;
