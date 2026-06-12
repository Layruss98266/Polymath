import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "negotiation",
 icon: "🤝",
 hue: "#fb7185",
 category: "People & Influence",
 name: "Negotiation & Persuasion",
 tagline: "Reach agreement without losing yourself",

 basics: "Negotiation isn't smooth talking or sneaky tricks. It's the boring, careful work of finding a deal that's better for both sides than walking away with nothing. The single biggest mistake people make is fighting about positions (\"I want ₹X\") instead of asking about interests (why each side actually wants what they're asking for). Once you separate those two things, deals that looked impossible start to feel obvious. You're not trying to win. You're trying to find the version of the deal where both of you walk out lighter than you walked in.",
 whyItMatters: [
  "Your salary, your rent, your deadline, your boundary with a difficult relative, all negotiations, all the time.",
  "Most people massively under-negotiate. A 10% higher starting salary, compounded across a career, is more money than most lottery winners take home.",
  "You get better outcomes without setting the relationship on fire, because long-term trust is part of the win.",
  "You spot bad-faith tactics when they're aimed at you, instead of feeling weirdly cornered after the meeting."
 ],
 realWorldExample: "Two sisters are fighting over the last orange in the fruit bowl. They both want it. They settle for the classic compromise, cut it in half. One sister squeezes her half for juice and throws away the peel. The other grates her half for the peel to bake a cake, and throws away the fruit. They both got half of what they wanted. If either of them had asked the other \"why do you want the orange?\", they'd both have walked away with twice as much. That's the entire trick: positions are what people say they want; interests are why. Trade on interests and almost every deal gets bigger.",

 mentors: [
  { name: "Fisher & Ury", for: "principled negotiation, BATNA", work: "Getting to Yes (1981)" },
  { name: "Chris Voss", for: "tactical empathy + calibrated questions", work: "Never Split the Difference (2016)" },
  { name: "Stuart Diamond", for: "small steps, emotion-aware", work: "Getting More (2010)" },
  { name: "Robert Cialdini", for: "influence levers in negotiation context", work: "Influence (1984)" }
 ],

 diagrams: [
  { kind: "spectrum", title: "Position vs interest", caption: "Surface position is rarely the real interest. Trade on interest.", data: { left: "Position (\"$50k\")", right: "Interest (\"financial security + growth path\")", marker: 0.7, note: "Trade on interests, not positions" } },
  { kind: "quadrant", title: "ZOPA with BATNA", caption: "Zone of Possible Agreement sits between each side's walk-away.", data: { xAxis: ["Their BATNA", "Their target"], yAxis: ["Your BATNA", "Your target"], items: [{ label: "ZOPA", x: 0.55, y: 0.55 }, { label: "No deal", x: 0.1, y: 0.1 }] } }
 ],

 synthesis: [
  { concept: "Anchoring", linksTo: "psychology", note: "First-number bias is the most powerful single tool in negotiation." },
  { concept: "Specificity", linksTo: "communication", note: "Specific asks land. 'A fair raise' doesn't." }
 ],

 subdomains: [
  { id: "foundations", name: "Foundations", intro: "The mental setup before any negotiation: knowing your BATNA, your number, and what the other side actually wants. Most deals are won or lost before they begin.", capabilities: ["Define your walkaway number in writing before the conversation starts.", "Identify your BATNA and the other side's BATNA, honestly.", "Separate your real interests from the position you opened with."] },
  { id: "tactics", name: "Tactics", intro: "The moves that shift outcomes at the table: anchoring, silence, calibrated questions, trades. Small craft choices compound into big swings.", capabilities: ["Anchor first when you have good information and let them open when you do not.", "Use silence after an offer instead of rushing to fill it.", "Ask open how and what questions instead of yes or no questions."] },
  { id: "emotion", name: "Emotion and Empathy", intro: "Negotiation is mostly emotional. Reading the other side, naming what they feel, and lowering tension does more than any clever line.", capabilities: ["Label the other side's emotion out loud to drain its heat.", "Mirror the last few words they said to draw out more information.", "Stay calm when the other side gets loud; the louder one usually loses."] },
  { id: "ethics", name: "Win-Win and Ethics", intro: "The best long-term negotiators leave the other side glad they made the deal. Short-term wins by deception cost you the next ten deals.", capabilities: ["Find a trade where both sides give up something they value less.", "Refuse a tactic you would not want used on you tomorrow.", "Walk away from a deal you would have to lie to close."] },
 ],

 concepts: [
  { t: "BATNA",                 short: "Your Best Alternative To a Negotiated Agreement. Whatever you'll do if this deal falls through.",                                               deep: "Fisher and Ury's most important single idea. Your power at any negotiating table isn't your patience or your charm, it's your BATNA, the option you can walk to if this deal collapses. If your BATNA is \"go home and have a stressful conversation with my landlord,\" you're weak. If your BATNA is \"take the offer from the other company that's still on my desk,\" you're strong, and the other side can usually feel it. The best work in negotiation happens before you sit down: actually improving your BATNA. Get a second offer. Save up enough buffer to walk away. Then enter the room.",                                                                                                                               status: "framework", reflect: "What's your BATNA in your most live negotiation right now? If you can't answer in a sentence, that's the prep gap." },
  { t: "Positions versus interests",       short: "What they're demanding vs. why they want it.",                                                                         deep: "A position is the thing being asked for: \"I want ₹15 lakh.\" An interest is the reason underneath: \"I want financial security and a clear path to a senior role.\" Positions are narrow, you fight about them until someone moves. Interests are wide, there are usually five different ways to satisfy each one. The orange-sisters story works because once you ask why, suddenly there's a deal nobody saw. Almost every stuck negotiation is two people arguing about positions while their actual interests are perfectly compatible.",                                                                                                                                                             status: "framework", reflect: "Pick a recent stuck negotiation. What was the position on each side? Now ask 'why?' What's the interest underneath?" },
  { t: "ZOPA, Zone of Possible Agreement",   short: "The overlap between each side's acceptable ranges. If there's no overlap, there's no deal.",                                                 deep: "You're willing to sell your scooter for at least ₹30,000. The buyer is willing to pay up to ₹35,000. The ZOPA, the Zone of Possible Agreement, is the strip between ₹30,000 and ₹35,000. Any number in there is a deal both of you can live with. The whole negotiation is just figuring out where, in that strip, you land. If your minimum is higher than their maximum, there's no ZOPA, and no amount of clever talking will fix it. A surprising number of failed negotiations aren't disagreements; they're cases where nobody realised there was no overlap in the first place.",                                                                                                                                            status: "settled",  reflect: "Think about your last negotiation. Did you ever try to figure out where the ZOPA was? Could you have, with the right questions?" },
  { t: "Anchoring (the first number on the table)", short: "Whoever puts the first number out drags everything toward it.",                                                               deep: "Research is consistent here, including with experienced negotiators: the first specific number named in a negotiation pulls the whole conversation toward it, even when both sides know it's a starting position. You've heard \"never make the first offer\", that's not quite right. The smarter rule is: if you have a real information advantage (you've researched the market, you know the comparable salaries), make the first offer high and confident. If you don't, let them anchor, and then negotiate from there. Either way, the first number is doing a lot of work, so don't let it be a random number you didn't think about.",                                                                                                             status: "settled",  reflect: "When did anchoring last get used on you? What number would you have brought to the table first if you'd prepared?" },
  { t: "Tactical empathy (Chris Voss)",     short: "Name the emotion you sense in the other side. It defuses faster than arguing against it.",                                                   deep: "Chris Voss spent decades as the FBI's lead international hostage negotiator and brought the techniques to business. The biggest single move he teaches is the verbal label: \"It seems like you're under a lot of pressure to close this quarter.\" Naming what the other side is feeling does something almost magical, it tells them you actually heard them, defuses the heat, and often gets them to correct you or say more than they meant to. The technique is invisible if you do it cleanly. It works because most of us spend negotiations talking; almost nobody is listening enough to name what's underneath.",                                                                                                                         status: "framework", reflect: "Try labeling once today in any conversation: \"It seems like…\" Watch what happens to the other person's posture." },
  { t: "Calibrated questions",          short: "\"How am I supposed to do that?\" beats \"no\" almost every time.",                                                               deep: "Voss's other big move. When someone makes a demand you can't meet, the instinct is to refuse, and refusing puts the other side in a corner where they fight back. A calibrated question does the same job from a different angle. \"How am I supposed to do that with the budget I have?\" \"What would you do in my position?\" \"What's driving the timeline?\" The problem ends up in their lap instead of yours, they don't feel shut down, and you've quietly gathered information. The trick is asking real questions, not passive-aggressive ones disguised as questions.",                                                                                                                                               status: "framework", reflect: "Where could you replace a hard \"no\" with \"how am I supposed to do that?\" this week?" },
  { t: "The mirror",               short: "Repeat the last few words they said, as a question. They keep talking.",                                                             deep: "Almost invisible, almost free. The other side says \"…and we just don't see a path to that number this quarter.\" You say, gently: \"…this quarter?\" Nine times out of ten, they fill the silence and explain more than they meant to. You learn what's actually driving them without asking a single direct question. It works because humans are deeply uncomfortable with silence, and a small open question is irresistible. Try it for a week in normal conversations and you'll be surprised how often it cracks something open.",                                                                                                                                                                 status: "framework", reflect: "Try the mirror on your next conversation. Count how many times the other person fills the silence with something useful." },
  { t: "Win-win, or you didn't really win",   short: "If they walk out bitter, the next round is going to cost you.",                                                                 deep: "One-shot deals are rare. Most of your real negotiations, with bosses, vendors, partners, family, are part of a long sequence. A \"win\" where the other side walks out feeling cheated quietly costs you their cooperation, their referrals, and their willingness to negotiate again. The actual measure of a good outcome is: did you get a fair share of the value, and is the relationship intact? Track both. If either tanks, you didn't really win, you just borrowed a result from the future.",                                                                                                                                                                                 status: "framework", reflect: "Pick a 'win' you had recently. Is the relationship intact six months later? Did they come back to deal with you again?" },
  {
   t: "Logrolling, trading across issues",
   subdomain: "tactics",
   definition: "Trading concessions across multiple issues so each side gets what it values most.",
   short: "You care about price, they care about timing. Trade on the difference.",
   deep: "Most negotiations have more than one variable on the table, price, timing, scope, payment terms, exclusivity, warranty. Logrolling is the move of finding issues where you and the other side weight things differently, then trading. You don't care much about a two-week delay; they care a lot. They don't care about an extra year of warranty; you care a lot. So you trade: they get the delay, you get the warranty. Both sides feel they won, because they each gave up something cheap to them and received something expensive to them. Single-issue haggling almost always leaves money on the table. The first move is widening the table.",
   generic: "Imagine swapping lunchboxes. You hate the sandwich but love the cookie. Your friend loves the sandwich but doesn't want the cookie. A straight 50-50 split makes both of you sad. Swapping the whole sandwich for the whole cookie makes both of you happy. Negotiation works the same way when there is more than one thing on the table.",
   expert: "Studied formally as integrative bargaining (Walton and McKersie, 1965; Pruitt, 1981). Requires multi-issue scope, asymmetric preferences, and information sharing sufficient to reveal priorities without giving up your reservation values. The Fisher and Ury \"expand the pie\" injunction operationalises through logrolling plus contingent contracts. Risk: premature disclosure of priorities can be exploited by a positional counterpart, so pair with cautious reciprocal disclosure.",
   status: "framework",
   reflect: "What's a second issue you could put on the table in your next negotiation that you barely care about, but they might?",
   conceptQuiz: [
    {
     q: "Logrolling works best when…",
     options: [
      { text: "Each side ranks the issues differently.", correct: true },
      { text: "Both sides want the exact same thing.", misconception: "Identical priorities leave nothing to trade; logrolling needs asymmetry." },
      { text: "There is only one issue on the table.", misconception: "Single-issue negotiation cannot be logrolled by definition." },
      { text: "Both sides hide all their preferences.", misconception: "Some cautious disclosure is required for trades to surface." }
     ],
     why: "The trade only creates value when each side values the issues differently."
    },
    {
     q: "What is the first practical move to enable logrolling?",
     options: [
      { text: "Widen the table by adding more issues to discuss.", correct: true },
      { text: "Cut the price by 10 percent up front.", misconception: "Unilateral concession on one issue is the opposite of trading across issues." },
      { text: "Refuse to share any priorities.", misconception: "Total opacity prevents you and the counterpart from finding trades." },
      { text: "Walk away to anchor low.", misconception: "Walking away is a BATNA move, not a logrolling move." }
     ],
     why: "Logrolling needs multiple issues, so the first step is naming more variables you both care about."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "List the issues",       d: "Write down five negotiable variables in your next deal beyond price.", xp: 10 },
    { level: "easy",     t: "Rank both sides",       d: "Rank each issue by how much you care, then guess the other side's ranking.", xp: 20 },
    { level: "advanced", t: "Propose a real trade",  d: "Offer a concession on your low-rank issue in exchange for theirs in a live deal.", xp: 40 }
   ],
   diagram: {
    kind: "flow",
    title: "Logrolling across issues",
    caption: "Each side concedes on what it values less and wins what it values more, expanding total value instead of splitting one number.",
    data: {
     steps: ["List issues", "Rank by value (each side)", "Trade low-rank for high-rank", "Joint gains > 50/50 split"]
    }
   }
  },
  {
   t: "Reactive devaluation",
   subdomain: "emotion",
   definition: "The tendency to discount a proposal simply because the other side offered it.",
   short: "The moment they suggest it, it sounds worse than it actually is.",
   deep: "Reactive devaluation is a quiet psychological bias studied by Lee Ross and others at Stanford. The same proposal, judged on paper, looks reasonable. The moment the rival side offers it, the brain quietly downgrades it. People assume that anything the other side is willing to give must be worth less than they thought, or that there must be a catch. It explains why negotiations stall on offers that, objectively, both sides would accept if they had imagined them on their own. Two practical antidotes: route the proposal through a neutral third party, or invite the other side to help build the option so it feels co-authored, not handed over.",
   generic: "Picture trading lunch snacks at school. The chips look great until the kid you don't like offers them, then suddenly they look stale. Nothing changed about the chips. The same thing happens with offers in negotiation: the proposal feels worse because of who handed it to you.",
   expert: "Demonstrated experimentally in Ross and Stillinger (1991) using Cold War arms-reduction proposals identical in substance but attributed to different sources. Mechanism overlaps with naive realism and motivated reasoning. Mitigations include single-text procedure (Camp David model), mediator-driven framing, and contingent contracts that let the counterpart co-design terms before commitment.",
   status: "settled",
   reflect: "When did you last reject an offer the moment it came from someone you didn't trust? Would the same offer have sounded fine from a friend?",
   conceptQuiz: [
    {
     q: "Reactive devaluation predicts that…",
     options: [
      { text: "An identical proposal feels worse when the rival side offers it.", correct: true },
      { text: "People always overvalue their own ideas.", misconception: "Related to endowment bias, but reactive devaluation is specifically about who is offering, not who owns." },
      { text: "Offers get better the longer you wait.", misconception: "Delay can change anchoring but is not the mechanism here." },
      { text: "Mediators have no effect on outcomes.", misconception: "The bias is one of the main reasons neutral mediators help." }
     ],
     why: "The bias attaches to the source of the offer, not its substance."
    },
    {
     q: "Which move best reduces reactive devaluation in practice?",
     options: [
      { text: "Co-author the proposal with the other side so it feels jointly built.", correct: true },
      { text: "Restate your position more loudly.", misconception: "Volume reinforces opposition rather than dissolving it." },
      { text: "Refuse to discuss the proposal until they apologise.", misconception: "Adds friction without changing the source-bias problem." },
      { text: "Hide the proposal until the last minute.", misconception: "Surprise tends to increase suspicion, not lower it." }
     ],
     why: "Co-authoring or third-party framing neutralises the source signal that drives the bias."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the bias",          d: "Recall one offer you dismissed quickly. Reassess it as if a friend had proposed it.", xp: 10 },
    { level: "easy",     t: "Reframe through neutral", d: "Have a colleague present your next offer to a sceptical counterpart and note the response.", xp: 20 },
    { level: "advanced", t: "Co-build the option",    d: "In a live negotiation, ask the other side to help draft the terms before you commit.", xp: 40 }
   ]
  },
  {
   t: "Splitting the difference trap",
   subdomain: "tactics",
   definition: "Settling on the midpoint of two numbers as a quick fairness ritual that usually leaves value on the table.",
   short: "Meeting in the middle feels fair, and often costs both sides real money.",
   deep: "Chris Voss named his book Never Split the Difference because the midpoint move is a habit, not a strategy. Two people throw out numbers, the midpoint sounds even, both sign. The problem is that midpoint says nothing about who valued what, what trades were available, or whether either side was anchoring high to be pulled to a target. Splitting also rewards whoever anchored more aggressively, since their starting number drags the midpoint toward them. The discipline is to slow down, ask why each number was offered, and surface a trade across issues instead of a numeric average. A vendor splitting the difference on price might happily extend payment terms by 30 days instead, which costs them little and helps you a lot.",
   generic: "Imagine two kids splitting a pizza. One wants the cheesy middle, the other only eats crust. Cutting it down the middle gives each kid half of what they want and half of what they do not. Trading slices for crusts gives each kid everything they wanted. Splitting is the lazy cut.",
   expert: "Voss (2016) builds on Raiffa's analytic critique of midpoint heuristics. The midpoint is the dominant equilibrium only under symmetric Nash bargaining assumptions, which rarely hold once issues are unbundled. In practice, midpoint settlement is correlated with single-issue framing, time pressure, and weak BATNA on at least one side. Mitigations: structured agenda with multiple issues, contingent contracts, and explicit reservation-value disclosure where trust allows.",
   status: "framework",
   reflect: "When did you last split the difference because it felt fair? What second issue could you have traded instead?",
   conceptQuiz: [
    {
     q: "The main problem with splitting the difference is that…",
     options: [
      { text: "It ignores other issues that could be traded for greater joint value.", correct: true },
      { text: "It is mathematically impossible to compute.", misconception: "The math is trivial, the issue is strategic, not arithmetic." },
      { text: "It always favours the buyer.", misconception: "The midpoint can favour either side depending on anchors." },
      { text: "It is illegal in most jurisdictions.", misconception: "There is no legal issue with midpoint settlement." }
     ],
     why: "Splitting freezes the conversation on price and skips the broader trade space."
    },
    {
     q: "Who benefits most when both sides default to splitting the difference?",
     options: [
      { text: "The side that anchored most aggressively in the opening.", correct: true },
      { text: "The side with the weaker BATNA.", misconception: "Weaker BATNA usually loses, regardless of midpoint." },
      { text: "Neither side, the outcome is always neutral.", misconception: "Anchors bias the midpoint, so outcomes are rarely neutral." },
      { text: "Whoever offered first the lower number.", misconception: "Lower openings often hurt the offerer; aggressive anchors drag the midpoint." }
     ],
     why: "Whichever side anchored further from a fair value pulls the midpoint toward them."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Catch the split",       d: "Recall one negotiation where you split the difference. Write down what else was on the table you ignored.", xp: 10 },
    { level: "easy",     t: "Add a second issue",    d: "In your next price discussion, propose trading on timing or terms instead of meeting in the middle.", xp: 20 },
    { level: "advanced", t: "Run a no-split round",  d: "Conduct a live negotiation where you refuse the midpoint and unbundle at least three issues for trade.", xp: 40 }
   ]
  },
  {
   t: "Black Swan rule (Voss)",
   subdomain: "foundations",
   definition: "Hunting for the unknown unknowns that, once surfaced, change the entire shape of the deal.",
   short: "The one fact you do not know yet is usually the fact that unlocks the deal.",
   deep: "Chris Voss borrows Nassim Taleb's term for high-impact unknowns and applies it to the negotiating table. Most deals have at least one hidden fact that, if you knew it, would change your strategy completely. The vendor needs to close before quarter-end. The buyer has internal politics that make a particular feature non-negotiable. The decision actually rests with someone not in the room. Voss argues you cannot find these by asking direct questions, the counterpart will not volunteer them. You find them through patient open-ended questions, careful listening for tonal shifts, and meeting in person where possible. Once a black swan surfaces, the right move is usually to re-anchor the entire conversation around it, not to file it away politely.",
   generic: "Picture haggling over a used bike. The seller seems stubborn on price. You eventually ask why they are selling, and they say they are moving abroad next week. That detail was a black swan. Now you know the real deadline, and the price is suddenly more flexible. You did not pry, you just listened.",
   expert: "Voss and Raz (2016) define the three categories of information in negotiation: known knowns, known unknowns, and unknown unknowns (black swans). The framework draws on Rumsfeld's epistemology and Taleb's tail-risk framing. Practical heuristics: in-person discovery, calibrated questions that invite narrative, and explicit tracking of motivation, deadline, and authority gaps. Common failure mode: confirmation bias that filters out black swans because they threaten the working hypothesis of the deal.",
   status: "framework",
   reflect: "In your current negotiation, what is the one fact about their side you do not know that would change everything? How could you surface it without asking directly?",
   conceptQuiz: [
    {
     q: "A black swan in Voss's framework is best described as…",
     options: [
      { text: "An unknown fact that, once surfaced, reshapes the deal.", correct: true },
      { text: "A scripted concession you offer at the end.", misconception: "Concessions are tactical moves, not informational discoveries." },
      { text: "Any number the other side refuses to accept.", misconception: "A refusal is a position, not a hidden fact." },
      { text: "A rare type of negotiation contract.", misconception: "The term refers to information, not a contract form." }
     ],
     why: "Black swans are the high-impact unknown unknowns that change the strategy when revealed."
    },
    {
     q: "Which technique is most likely to surface a black swan?",
     options: [
      { text: "Open-ended calibrated questions and in-person observation.", correct: true },
      { text: "Sending a long email with every direct question listed.", misconception: "Direct interrogation prompts guarded answers, not revelations." },
      { text: "Pressuring the other side with deadlines.", misconception: "Pressure narrows disclosure rather than expanding it." },
      { text: "Avoiding any small talk to stay on topic.", misconception: "Small talk is often where black swans accidentally surface." }
     ],
     why: "Patient open questions and presence let the counterpart volunteer the fact you could not have asked about."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "List the unknowns",     d: "Write the three things about the other side's situation you most wish you knew before the next meeting.", xp: 10 },
    { level: "easy",     t: "Ask one open question", d: "In your next conversation, ask one calibrated open question whose answer could change the deal.", xp: 20 },
    { level: "advanced", t: "Run a discovery meet",  d: "Hold an in-person discovery meeting with no agenda except listening, and document any surfaced black swans.", xp: 40 }
   ]
  },
  {
   t: "Multi-party negotiation dynamics",
   subdomain: "tactics",
   definition: "The strategic interactions, coalition formation, vote trading, and blocking minorities that emerge once three or more parties negotiate simultaneously.",
   short: "Add a third party and the math, the politics, and the etiquette all change.",
   deep: "Two-party negotiation is a line between you and them. Add a third party and you get a triangle, with sides that can quietly gang up. Multi-party tables run on different physics. Coalitions form before the meeting starts, often informally. Vote trading lets parties swap support on issues they care about asymmetrically. Blocking minorities can kill a deal without ever proposing one, simply by refusing to move. The skilled multi-party negotiator counts coalitions before counting votes, identifies the pivotal swing party, and structures the agenda so easy issues build momentum before hard ones split the room. The single biggest mistake newcomers make is treating each bilateral conversation in isolation, when in fact every side conversation is being reported back across the table.",
   generic: "Picture four roommates deciding where to order dinner. Two already messaged before the meeting and agreed on pizza. The third hates pizza but loves the fourth roommate, who is neutral. The pizza pair wins not because pizza is best, but because they pre-built a coalition. Multi-party tables work the same way, the deal is half done before everyone sits down.",
   expert: "Studied by Raiffa (1982) and Susskind on consensus building. Key constructs: Shapley value for fair credit allocation, blocking minority thresholds in formal voting systems (EU Council, corporate boards), and logrolling across parties rather than issues. Failure modes include cycling (Condorcet paradox), pivotal-player capture, and side-payment leakage. Practical heuristics: pre-meeting bilateral mapping, single-text procedure to converge a draft, and explicit coalition disclosure norms where culture permits.",
   status: "framework",
   reflect: "In your next multi-party meeting, who has already talked to whom before the room assembles? If you do not know, you are already behind the parties who do.",
   conceptQuiz: [
    {
     q: "A blocking minority in a multi-party negotiation can…",
     options: [
      { text: "Prevent a deal from forming without ever proposing one of its own.", correct: true },
      { text: "Only block deals it has formally voted on twice.", misconception: "Blocking power often operates by refusal alone, no formal vote needed." },
      { text: "Force the majority to accept any counter-offer.", misconception: "Blocking prevents action; it does not force the other side to accept terms." },
      { text: "Exist only in two-party negotiations.", misconception: "Blocking minorities are a strictly multi-party phenomenon." }
     ],
     why: "Refusal to move is itself a tactic; blocking minorities use it to veto without proposing."
    },
    {
     q: "Vote trading across multiple parties works best when…",
     options: [
      { text: "Parties weight different issues asymmetrically.", correct: true },
      { text: "All parties weight every issue identically.", misconception: "Identical weights leave nothing to trade across parties." },
      { text: "Only one issue is on the table.", misconception: "Single-issue tables cannot support trades by definition." },
      { text: "No party is willing to disclose any priority.", misconception: "Trades require some cautious disclosure to surface." }
     ],
     why: "Asymmetric priorities create the room for parties to trade support on issues they value differently."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Map the parties",        d: "List every party in your next multi-party negotiation and their likely top issue.", xp: 10 },
    { level: "easy",     t: "Count coalitions",       d: "Identify which two parties are most likely to pre-align, and which third party is the swing vote.", xp: 20 },
    { level: "advanced", t: "Run a coalition strategy", d: "Hold pre-meeting bilateral conversations to build a coalition before the full session, then run the room with that map.", xp: 40 }
   ],
   diagram: {
    kind: "tree",
    title: "Coalition map in a multi-party deal",
    caption: "Three or more parties rarely negotiate as equals. Coalitions and swing votes emerge fast; map them before the room opens.",
    data: {
     root: "Negotiation (5 parties)",
     children: [
      { label: "Coalition A", children: [{ label: "Party 1" }, { label: "Party 2" }] },
      { label: "Coalition B", children: [{ label: "Party 3" }, { label: "Party 4" }] },
      { label: "Swing vote",  children: [{ label: "Party 5" }] }
     ]
    }
   }
  },
  {
   t: "Reservation point",
   subdomain: "foundations",
   definition: "The worst deal you would still say yes to before walking away to your BATNA.",
   short: "Your last acceptable number. Cross it and you should leave.",
   deep: "The reservation point is the precise number, or set of terms, below which you should reject the deal and walk to your BATNA. People confuse it with their target (what they hope for) or their first offer (what they ask for). It is neither. It is your floor. A buyer with a BATNA of buying a similar flat at 80 lakh has a reservation point near 80 lakh, anything above that is worse than walking. Writing the reservation point down before the meeting protects you from the live emotional pull to accept whatever the room wants. The clearest sign a negotiator has not done the prep is that they cannot tell you their reservation number when asked privately.",
   generic: "Imagine selling your old phone. You decide before posting it that 6,000 rupees is the lowest you would accept, because below that you would rather keep it as a backup. A buyer offers 5,500. You walk. That 6,000 is your reservation point. It is the line you wrote down before your feelings could vote.",
   expert: "Formalised in Raiffa (1982) and central to the Harvard PON curriculum. Distinct from aspiration (target) and from BATNA value, the reservation point is the indifference threshold between this deal and the outside option, adjusted for transaction costs and risk preferences. Common errors: confusing first offer with reservation, anchoring the reservation to the counterpart's number, and updating the reservation upward during the meeting under social pressure.",
   status: "settled",
   reflect: "What is the exact number below which you walk in your most live negotiation? If you cannot write it in one line, you do not have a reservation point yet.",
   conceptQuiz: [
    {
     q: "The reservation point is best described as…",
     options: [
      { text: "The worst deal you would still accept before walking to your BATNA.", correct: true },
      { text: "Your ideal outcome if everything goes well.", misconception: "That is the aspiration or target, not the floor." },
      { text: "The first number you say in the room.", misconception: "First offers are usually well above the reservation point." },
      { text: "The other side's expected counter-offer.", misconception: "Their counter is a guess about them; the reservation is your floor." }
     ],
     why: "Reservation is the indifference line between deal and walk."
    },
    {
     q: "Why write the reservation point down before the meeting?",
     options: [
      { text: "To resist live emotional pressure to drift upward during the talk.", correct: true },
      { text: "To share it with the other side as a sign of trust.", misconception: "Sharing your floor usually anchors the deal to it." },
      { text: "Because the law requires it.", misconception: "No legal requirement applies." },
      { text: "To prove to your boss you are flexible.", misconception: "Flexibility is not the purpose; protection is." }
     ],
     why: "The pre-commit document blocks in-the-room drift."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write the floor",      d: "For your next negotiation, write one sentence stating your reservation point in concrete terms.", xp: 10 },
    { level: "easy",     t: "Stress test it",       d: "Ask a trusted friend whether your reservation point reflects your BATNA honestly, and adjust if not.", xp: 20 },
    { level: "advanced", t: "Hold the line live",   d: "In a real negotiation, refuse any offer below the pre-committed reservation point, then write a short note on what tempted you to drift.", xp: 40 }
   ]
  },
  {
   t: "Distributive vs integrative bargaining",
   subdomain: "foundations",
   definition: "Two basic modes of negotiation: distributive splits a fixed pie, integrative grows it through trades across issues.",
   short: "Splitting a fixed pie versus baking a bigger one together.",
   deep: "Distributive bargaining is the classic single-issue haggle, you both want the highest price you can get from one number. Every rupee you win the other side loses, and the only levers are anchoring, patience, and walk-away credibility. Integrative bargaining, by contrast, treats the negotiation as a search for trades across multiple issues, where each side gives up something cheap to them in exchange for something valuable. Almost every real-world deal has integrative potential hiding inside, salary plus equity plus start date plus title, or price plus warranty plus payment terms. Beginners pick the distributive frame by default and leave value on the table. The discipline is to widen the scope to multiple issues before settling on numbers.",
   generic: "Imagine two kids arguing over a chocolate bar. The distributive mode is to cut it in half and both leave a little annoyed. The integrative mode is to ask why each kid wants it. If one wants the chocolate and the other wants the wrapper for a collection, they both walk away with everything they wanted.",
   expert: "Formalised by Walton and McKersie (1965) and Pruitt (1981). Distributive moves include opening anchors, concession patterns, and information control. Integrative moves include logrolling, contingent contracts, and post-settlement settlements. The Harvard Negotiation Project (Fisher and Ury, 1981) argued that most distributive framings are unforced errors driven by positional thinking. Failure mode: opening integrative talks without confirming basic ZOPA, which leads to creative trades on a deal that has no overlap to start with.",
   status: "framework",
   reflect: "Look at your next negotiation. Are there issues beyond the headline number you could put on the table to make it integrative?",
   conceptQuiz: [
    {
     q: "Distributive bargaining is best characterised as…",
     options: [
      { text: "A single-issue split of a fixed pie where one side's gain is the other side's loss.", correct: true },
      { text: "Always unethical and to be avoided.", misconception: "It is a mode, not a moral failure." },
      { text: "Trading across multiple issues with different priorities.", misconception: "That describes integrative bargaining." },
      { text: "Refusing to negotiate at all.", misconception: "Refusal is a walk-away, not a bargaining mode." }
     ],
     why: "Distributive bargaining treats the pie as fixed."
    },
    {
     q: "Integrative bargaining requires…",
     options: [
      { text: "Multiple issues with asymmetric priorities between the parties.", correct: true },
      { text: "Both sides agreeing on every issue from the start.", misconception: "Agreement up front leaves nothing to trade." },
      { text: "Only one variable on the table.", misconception: "Single-variable deals cannot be integrative by definition." },
      { text: "Total opacity about priorities.", misconception: "Some cautious disclosure is needed to find trades." }
     ],
     why: "Without asymmetry across multiple issues, integrative trades cannot form."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the mode",        d: "For your next negotiation, label whether you are framing it as distributive or integrative.", xp: 10 },
    { level: "easy",     t: "Add an issue",          d: "Add at least one extra issue to a single-issue negotiation and propose a trade across it.", xp: 20 },
    { level: "advanced", t: "Convert a haggle",       d: "Take a live single-issue haggle, surface three additional issues, and reach a deal that scores higher for both sides than the original split.", xp: 40 }
   ]
  },
  {
   t: "Coalition building",
   subdomain: "tactics",
   definition: "The pre-meeting work of aligning a subset of parties to act together so the room tips in a particular direction.",
   short: "Most multi-party deals are won in the hallway, not the room.",
   deep: "Coalition building is the quiet work of identifying which parties share enough interest to act together, then locking in that alignment before the formal session starts. A founder seeking board approval rarely waits until the meeting to make her case, she meets each director one by one, finds the two who will champion her, and walks in with three votes already promised. The same logic governs union talks, EU council votes, and family decisions about elder care. The skill has three parts: mapping each party's top interest, identifying the pivotal swing party whose support flips the room, and offering them something small but real to lock in their support. The most common rookie mistake is treating each conversation as separate, when every side meeting is being reported back across the table.",
   generic: "Imagine four flatmates deciding whether to renew the lease. Before the house meeting, two of them text each other and agree to renew. They quietly check what the third needs, a slightly lower share of the bill, and offer it. By the time the meeting starts, three out of four already lean yes. The fourth flatmate is surprised, but the coalition decided the outcome before anyone sat down.",
   expert: "Theorised in Raiffa (1982) and Susskind's consensus-building work. Key constructs: minimum winning coalition (Riker, 1962), pivotal player identification using the Banzhaf or Shapley-Shubik power index, and side-payment feasibility. Distinct from logrolling, coalition building is about who, not what. Failure modes include coalition betrayal mid-session, public versus private commitment gaps, and over-promising side payments that cannot be delivered.",
   status: "framework",
   reflect: "In your next multi-party meeting, who has already spoken to whom? If you do not know, you are already behind the parties who do.",
   conceptQuiz: [
    {
     q: "The pivotal party in a coalition is the one whose support…",
     options: [
      { text: "Flips the room from losing to winning when added to the existing coalition.", correct: true },
      { text: "Talks the loudest in the meeting.", misconception: "Volume is not the same as decisive support." },
      { text: "Holds the formal chair role.", misconception: "The chair may or may not be pivotal depending on votes." },
      { text: "Has the highest salary in the group.", misconception: "Compensation is unrelated to coalition power." }
     ],
     why: "Pivotal support is defined by its decisive effect on the outcome."
    },
    {
     q: "Why is bilateral pre-meeting work often more important than the meeting itself?",
     options: [
      { text: "Commitments and trust form privately before the room assembles.", correct: true },
      { text: "Formal meetings prohibit any real discussion.", misconception: "Real discussion happens in both venues; the private one usually sets the frame." },
      { text: "Side conversations are stronger because they are recorded.", misconception: "They are usually not recorded; that is part of their utility." },
      { text: "Coalitions are illegal in formal sessions.", misconception: "No such prohibition exists in standard negotiation contexts." }
     ],
     why: "The room ratifies what the bilateral work decided."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Map the room",          d: "List every party in your next multi-party negotiation and their top likely interest.", xp: 10 },
    { level: "easy",     t: "Identify the pivot",    d: "Identify the swing party whose support flips your side, and one small thing you could offer them.", xp: 20 },
    { level: "advanced", t: "Run the bilaterals",    d: "Conduct three pre-meeting bilateral conversations, document the soft commitments, and run the formal session with a pre-built coalition.", xp: 40 }
   ]
  },
  {
   t: "Cultural negotiation differences",
   subdomain: "emotion",
   definition: "Systematic variations in how cultures handle directness, time, hierarchy, and relationship before a deal can close.",
   short: "The same move means different things in different rooms.",
   deep: "A direct ask that signals confidence in New York can read as rude in Tokyo. A long warm-up that builds trust in Riyadh can read as time-wasting in Berlin. Cultural differences are not stereotypes, they are statistical tendencies on dimensions like directness, polychronic versus monochronic time, power distance, and relationship-first versus task-first framing. Erin Meyer's culture map maps eight such axes, and a Dutch buyer negotiating with an Indian supplier is dancing across most of them. The discipline is not to abandon your own style but to widen your range, slow down when relationships matter, and ask explicit questions about the other side's decision process rather than assume yours is universal. The single most common mistake is interpreting silence, hierarchy, or polite agreement through your own cultural defaults.",
   generic: "Imagine bargaining at a market in your home city. You haggle hard and walk away with a good price, and nobody is upset. Try the same move at a market in a place where bargaining is also a relationship dance, and the seller may quietly refuse to deal with you again. The number was fine. The pace and the warmth were the problem.",
   expert: "Erin Meyer's culture map (2014) operationalises eight axes including communicating, evaluating, persuading, leading, deciding, trusting, disagreeing, and scheduling. Brett's Negotiating Globally (2014) adds dispute-resolution norms. Failure modes: stereotyping individuals, ignoring within-culture variance, and treating English fluency as a sign of Western negotiation defaults.",
   status: "framework",
   reflect: "Where on the directness axis do you sit by default? Where does your most important counterpart sit? Where could that mismatch quietly hurt the deal?",
   conceptQuiz: [
    {
     q: "Erin Meyer's culture map argues that…",
     options: [
      { text: "Cultures vary systematically on axes like directness and time orientation that affect negotiation behaviour.", correct: true },
      { text: "All cultures negotiate identically once translated.", misconception: "The whole point of the map is to highlight systematic differences." },
      { text: "Culture is irrelevant once people speak the same language.", misconception: "Language fluency does not erase decision-style differences." },
      { text: "Stereotypes are reliable predictors of individual behaviour.", misconception: "The map describes tendencies, not individual destiny." }
     ],
     why: "The map measures average tendencies across eight behavioural dimensions."
    },
    {
     q: "Which is the most common cross-cultural negotiation mistake?",
     options: [
      { text: "Interpreting the other side's silence or politeness through your own cultural defaults.", correct: true },
      { text: "Speaking the local language fluently.", misconception: "Fluency helps; the issue is reading non-verbal cues correctly." },
      { text: "Bringing a written agenda to the meeting.", misconception: "Agendas can help; they are not the central mistake." },
      { text: "Wearing formal clothing.", misconception: "Dress codes are minor compared to decision-style misreadings." }
     ],
     why: "Cultural defaults bias how silence, hierarchy, and politeness are read."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Map yourself",          d: "Place yourself on three of Meyer's eight axes in writing.", xp: 10 },
    { level: "easy",     t: "Map the counterpart",   d: "Estimate the counterpart's position on the same three axes and identify the largest gap.", xp: 20 },
    { level: "advanced", t: "Adjust live",          d: "In a real cross-cultural negotiation, deliberately adjust pace and directness toward the counterpart's style, and document what changed.", xp: 40 }
   ]
  },
  {
   t: "Difficult conversations",
   subdomain: "emotion",
   definition: "A structured way to handle high-stakes emotional conversations by separating the what-happened story, the feelings, and the identity stakes.",
   short: "Every hard talk has three conversations stacked inside it.",
   deep: "Stone, Patton, and Heen's Harvard Negotiation Project framework names the move most people miss: every difficult conversation contains three layers. The what-happened layer is the dispute about facts and blame. The feelings layer is the unspoken hurt, fear, or anger that drives the room. The identity layer is the threat each side feels to their sense of being competent, good, or worthy. Most arguments collapse because the speakers fight on the what-happened layer while the real heat lives in the other two. The discipline is to surface all three, name the feelings without weaponising them, and acknowledge the identity stake instead of triggering it. A manager firing an employee who frames it as a feedback failure on her own part will land it gently, the same conversation framed as the employee being inadequate will explode.",
   generic: "Imagine telling a friend their behaviour at a party hurt you. If you argue only about who said what, you both leave angry. If you also say how it made you feel, and acknowledge that you are not calling them a bad person, the same conversation lands very differently. The facts did not change. The other two layers got named.",
   expert: "Stone, Patton, and Heen (1999) at the Harvard Negotiation Project synthesise from Rogerian therapy, Fisher and Ury, and adult development theory. Core moves: shift from blame to contribution, separate intent from impact, and use the and stance. Distinct from non-violent communication (Rosenberg) in emphasising identity work explicitly. Common failure mode: collapsing into apology that concedes facts rather than feelings, or weaponising feelings as accusations dressed in I statements.",
   status: "framework",
   reflect: "In your last hard conversation, did you fight on facts while feelings and identity went unspoken? Which of the three layers carried the actual heat?",
   conceptQuiz: [
    {
     q: "The three conversations inside every difficult conversation are…",
     options: [
      { text: "What happened, feelings, and identity.", correct: true },
      { text: "Facts, evidence, and arguments.", misconception: "Those are all parts of one layer; the framework names three different layers." },
      { text: "Past, present, and future.", misconception: "Temporal slicing is not the layered model here." },
      { text: "Buyer, seller, and mediator.", misconception: "Those are parties, not conversational layers." }
     ],
     why: "Stone, Patton, and Heen name what-happened, feelings, and identity as the three layers."
    },
    {
     q: "Why do most difficult conversations collapse?",
     options: [
      { text: "The speakers fight on the what-happened layer while the heat lives in feelings and identity.", correct: true },
      { text: "Both sides agree on every fact too quickly.", misconception: "Quick agreement on facts does not cause the collapse." },
      { text: "There is no documented evidence.", misconception: "Lack of evidence is a sub-issue, not the central failure mode." },
      { text: "The conversation lasts too long.", misconception: "Length is not the structural problem the model addresses." }
     ],
     why: "Surface the feelings and identity layers or the talk explodes on the wrong axis."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the three",        d: "Recall your last hard conversation and write one sentence for each of the three layers as you experienced them.", xp: 10 },
    { level: "easy",     t: "Practice the shift",    d: "In a moderate conversation, deliberately name a feeling without weaponising it and observe the response.", xp: 20 },
    { level: "advanced", t: "Run a real one",        d: "Plan and hold a real difficult conversation using the three-layer frame, then write a post-mortem on which layer carried the heat.", xp: 40 }
   ]
  },
  {
   t: "Pre-commitment",
   subdomain: "tactics",
   definition: "Binding yourself in advance to a position or limit so the other side cannot pressure you off it during the meeting.",
   short: "Tie your own hands before the room can untie them.",
   deep: "Pre-commitment is the move of writing down, publicising, or contractually fixing a limit before the negotiation, so that future-you cannot drift under in-the-room pressure. Odysseus tying himself to the mast is the classic example, he knew the sirens would tempt him, so he removed his ability to comply. A buyer who tells the seller that her board has approved a maximum of 1 crore and cannot be overruled has pre-committed, and the seller's pressure stops at that wall. Pre-commitment also operates internally, writing down your reservation point before the meeting and refusing to update it in the moment. The trick works because credible commitment shifts the bargaining frontier, even if the limit is one you could in principle relax. The risk is that an over-tight pre-commitment can kill a deal that would have been worth taking.",
   generic: "Imagine going to a sale with a strict budget written on a sticky note in your wallet. When the shop tries to upsell you, you point at the sticky note and say honestly, that is all I can spend today. The note did not change your wallet. It changed your ability to say no in the moment.",
   expert: "Schelling (1960) formalised credible commitment in The Strategy of Conflict, showing that visibly binding oneself can dominate an apparently weaker position. Variants include third-party authority limits, public announcements, escrow structures, and contractual penalties. Distinct from bluffing because the commitment must be verifiable. Failure modes: over-rigid pre-commitments that prevent value-creating trades and pre-commitments that the counterpart correctly infers are theatre rather than real constraints.",
   status: "framework",
   reflect: "What pre-commitment could you make before your next negotiation that would protect you from in-the-room drift without killing the deal?",
   conceptQuiz: [
    {
     q: "Pre-commitment shifts the bargaining frontier because…",
     options: [
      { text: "A visibly binding constraint reduces your ability to concede, which the counterpart must accept.", correct: true },
      { text: "It makes you look more friendly.", misconception: "It often does the opposite; friendliness is not the mechanism." },
      { text: "It increases the chance of an integrative trade.", misconception: "Pre-commitment can sometimes block trades, not enable them." },
      { text: "It signals weakness to the other side.", misconception: "Credible commitment signals strength via reduced flexibility." }
     ],
     why: "Schelling showed that reduced flexibility, visibly demonstrated, strengthens position."
    },
    {
     q: "The main risk of pre-commitment is…",
     options: [
      { text: "Killing a deal that would have been worth taking with more flexibility.", correct: true },
      { text: "Making the other side trust you more.", misconception: "More trust is usually a benefit, not a risk." },
      { text: "Forcing the other side to share their reservation point.", misconception: "Pre-commitment does not extract their floor." },
      { text: "Increasing your own walk-away cost.", misconception: "It does the opposite by making walking the default if the limit is breached." }
     ],
     why: "Rigidity is the cost of credibility; sometimes the deal would have been worth bending."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Write the limit",       d: "Write one pre-commitment in advance of your next negotiation, in one clear sentence.", xp: 10 },
    { level: "easy",     t: "Make it visible",       d: "Communicate the pre-commitment to a third party (manager, partner) who can hold you to it.", xp: 20 },
    { level: "advanced", t: "Use it under pressure", d: "Deploy the pre-commitment in a live negotiation and write a post-mortem on whether it protected the deal or killed value.", xp: 40 }
   ]
  }
 ],

 counterView: "Cialdini-style 'influence techniques' aren't neutral. There's a real ethical line between making your case clearly (good) and using cognitive levers against someone who'd refuse if they noticed (manipulative). Also: tactical-empathy-as-Voss-style-script can curdle into theatre if not anchored to genuine respect. The 'always make the first offer' / 'never make the first offer' debates are over-stated, the real answer is 'depends on your information advantage,' which is a less satisfying soundbite. Finally, negotiation training overweights one-shot deals; most of your real negotiations are repeated, and the relationship is part of the outcome.",

 capabilities: [
  "Identify your BATNA and theirs before any real negotiation.",
  "Separate positions from interests in a 30-second conversation.",
  "Make the first offer when you have an info advantage; not when you don't.",
  "Use labels and calibrated questions instead of hard 'no.'",
  "Walk away gracefully when there's no ZOPA."
 ],
 cheatsheet: [
  "Power = your BATNA. Improve it before the table.",
  "Trade interests, not positions.",
  "If you have info, anchor first. If not, let them.",
  "'How am I supposed to do that?' > 'no.'",
  "Label emotions. Mirror last 3 words.",
  "If they leave bitter, you didn't win."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Get the vocabulary",              do: "Read Getting to Yes (Fisher & Ury) and Never Split the Difference (Voss). One classic, one modern. Don't try to apply anything yet, get the names in your head first.",                                                                                 milestone: "You can name BATNA, ZOPA, anchoring, labels, and mirrors from memory and explain what each does.",                         time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Install a real prep ritual",           do: "For every real negotiation from now on, before you start, write down four things in a notebook: your BATNA, your target, your walk-away, your guess at theirs. Most people skip this step and improvise. You won't.",                                                         milestone: "You feel calmer entering negotiations because the prep document is doing half the work for you.",                         time: "~1 month" },
  { rank: "Practitioner", focus: "Use the small tools in low-stakes places",    do: "Practise labels and mirrors in tiny everyday situations, returns to a shop, scheduling with a vendor, asking for a small discount. Low stakes is where you learn the moves without panic.",                                                                      milestone: "Labels and mirrors come out of your mouth naturally even when you're slightly stressed.",                              time: "~2-3 months" },
  { rank: "Specialist",  focus: "Run one real high-stakes negotiation deliberately", do: "Pick one upcoming negotiation that genuinely matters, salary, a vendor contract, a property deal. Prep it fully in writing. Run it. Do an honest post-mortem afterwards.",                                                                             milestone: "You moved a real number using your method, and you can describe in writing what worked and what didn't.",                     time: "~6 months" },
  { rank: "Expert",    focus: "Multi-party and cross-cultural",         do: "Most real negotiations have more than two parties, three vendors, multiple stakeholders, cross-cultural dynamics. Learn to hold a table where the variables and the etiquette both shift.",                                                                     milestone: "You can run a complex multi-party negotiation without losing the thread.",                                     time: "~1 year+" },
  { rank: "Master",    focus: "Coach others through their own deals",      do: "Help other people prep and run their negotiations. Watching other people's situations sharpens your own framework.",                                                                                                         milestone: "The people you coach close better deals than they would have without you.",                                     time: "~2 years+" },
  { rank: "Grandmaster", focus: "Mediate, build, or write the playbook",      do: "Mediation, scholarship, or large-deal practice that shapes outcomes for hundreds of others.",                                                                                                                    milestone: "When people in your industry have a genuinely hard table, your name comes up.",                                   time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Harvard Program on Negotiation (PON), blog",     what: "PON publishes rigorous, free articles + research summaries.",             url: "https://www.pon.harvard.edu/category/daily/",         weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Chris Voss, public talks (YouTube)",         what: "Free way to absorb the core moves.",                          url: "https://www.youtube.com/results?search_query=Chris+Voss+negotiation", weight: "primary", verify: true, lastVerified: "2026-06" },
   { name: "MasterClass, Chris Voss preview clips (YouTube)",   what: "Free trailers + select clips from the paid course.",                 url: "https://www.youtube.com/@MasterClass",             verify: true, lastVerified: "2026-06" },
   { name: "Wikipedia, BATNA",                  what: "Compact reference + sources for the core concept.",                  url: "https://en.wikipedia.org/wiki/Best_alternative_to_a_negotiated_agreement", verify: false, lastVerified: "2026-06" },
   { name: "Stanford Online, Negotiation samplers",        what: "Some free sampler lessons; full courses paid.",                    url: "https://online.stanford.edu/",                 verify: false, lastVerified: "2026-06" },
   { name: "FBI Crisis Negotiation Unit articles",         what: "Public articles + Behavioral Change Stairway Model.",                 url: "https://leb.fbi.gov/topics/crisis-negotiation",         weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Negotiate Anything, podcast (Kwame Christian)",    what: "Free, regular interviews on negotiation craft.",                    url: "https://americannegotiationinstitute.com/podcasts/",      verify: false, lastVerified: "2026-06" },
   { name: "Black Swan Group, blog (Chris Voss's company)",    what: "Articles + breakdowns from Voss's team.",                       url: "https://www.blackswanltd.com/blog",               weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Adam Grant, Give and Take TED talk",         what: "Negotiation through the lens of reciprocity styles.",                 url: "https://www.ted.com/speakers/adam_grant",            verify: false, lastVerified: "2026-06" },
   { name: "Getting to Yes, Fisher & Ury (library)",       what: "The original classic.",                                 url: "https://en.wikipedia.org/wiki/Getting_to_Yes",         weight: "popular", verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Getting to Yes, Fisher & Ury",            what: "Principled negotiation, BATNA, interests vs positions.",                url: "https://en.wikipedia.org/wiki/Getting_to_Yes",         price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Never Split the Difference, Chris Voss",       what: "Tactical empathy + labels + calibrated questions.",                  url: "https://www.blackswanltd.com/",                 price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Getting More, Stuart Diamond",            what: "Emotion-aware, small-steps approach.",                         url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Influence, Robert Cialdini",             what: "Six levers used in negotiation contexts.",                       url: "https://www.influenceatwork.com/",                price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Bargaining for Advantage, G. Richard Shell",     what: "Academic Wharton classic, well-organised.",                      url: "",                                price: "verify", weight: "secondary", verify: true, lastVerified: "2026-06" },
   { name: "Beyond Reason, Roger Fisher & Daniel Shapiro",    what: "Emotions in negotiation, from the Getting to Yes lineage.",              url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Power of a Positive No, William Ury",       what: "Saying no without losing the relationship.",                      url: "https://williamury.com/",                    price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Negotiation Genius, Malhotra & Bazerman",       what: "Harvard professors; behavioural + practical.",                     url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Difficult Conversations, Stone/Patton/Heen",     what: "Adjacent skill, having the hard talk before the negotiation.",             url: "",                                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "MasterClass, Chris Voss",               what: "Voss's full video course on negotiation.",                       url: "https://www.masterclass.com/classes/chris-voss-teaches-the-art-of-negotiation", price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Map your BATNA", d: "Pick one live negotiation. Write your BATNA, target, walk-away, and your guess at theirs.", xp: 40 },
  { t: "Label once", d: "In any conversation today, say 'It seems like…' and label an emotion. Note the response.", xp: 30 },
  { t: "Calibrated question", d: "Replace one 'no' with 'how am I supposed to do that?' Note what happens.", xp: 30 },
  { t: "Mirror experiment", d: "Repeat someone's last 1-3 words as a question. Count how often they elaborate.", xp: 30 },
  { t: "Ask for one discount", d: "Politely ask for a 5-10% discount on something today. Note the result. (Real-world stakes, low pressure.)", xp: 50 }
 ],
 capstone: { t: "Run a real negotiation with method", d: "Pick one real upcoming negotiation (salary, contract, vendor). Prep BATNA/ZOPA/interests in writing. Run it. Do a written post-mortem on outcome + relationship.", xp: 200 },

 quiz: [
  { q: "What's your BATNA?", options: [
   { text: "Best Alternative To a Negotiated Agreement.", correct: true },
   { text: "Best Acceptable Target Number Amount.", misconception: "Made-up acronym; not the term." },
   { text: "Your minimum acceptable offer.", misconception: "Close, but BATNA is your outside option, not your floor in this deal." },
   { text: "Their best offer.", misconception: "That's their target, not your BATNA." }
  ], why: "Your BATNA is what you'll do if this deal fails, it sets your real power and walk-away.", testOut: true },
  { q: "ZOPA stands for…", options: [
   { text: "Zone of Possible Agreement, overlap between both sides' acceptable ranges.", correct: true },
   { text: "Zero Other Party Agreement.", misconception: "Not a real term." },
   { text: "Zone of Personal Anchoring.", misconception: "Made up." },
   { text: "Zoning of Pricing Allowance.", misconception: "Made up." }
  ], why: "ZOPA is the overlap between each side's acceptable range. No overlap = no deal." },
  { q: "Voss's 'calibrated question' is best characterised as…", options: [
   { text: "Open-ended 'how/what' question that puts the problem in their lap without confrontation.", correct: true },
   { text: "Yes/no question to force a commitment.", misconception: "Closed questions trigger resistance; calibrated questions soften." },
   { text: "Same as a leading question.", misconception: "Leading questions are coercive; calibrated questions are open." },
   { text: "A question with a specific dollar amount.", misconception: "Specific anchors are useful; that isn't what 'calibrated' means here." }
  ], why: "'How am I supposed to do that?' makes the other side own the constraint without you saying no." },
  { q: "Should you make the first offer?", options: [
   { text: "Never, it always anchors you down.", misconception: "Anchoring usually drags toward the first number; making it first can favour you with info." },
   { text: "Always, it always works in your favour.", misconception: "Too strong; bad first offers anchor the wrong direction." },
   { text: "When you have a real information advantage. Otherwise, let them.", correct: true },
   { text: "Only at the very end.", misconception: "First offers anchor the whole conversation, so 'end' defeats the purpose." }
  ], why: "Anchoring is real and powerful, use it when you have info; let them anchor when you don't." },
  { q: "You closed a great deal but the other side feels burned. What's true?", options: [
   { text: "You won. Move on.", misconception: "Most relationships are repeated games, burning them loses future deals." },
   { text: "In a repeat game, you probably didn't win, relationship is part of outcome.", correct: true },
   { text: "Their feelings don't matter.", misconception: "Even ethically, feelings predict whether they come back." },
   { text: "Negotiation is zero-sum, always.", misconception: "Most negotiations are positive-sum if interests are surfaced." }
  ], why: "Track outcome and relationship together. A bitter counterparty usually costs you more than the deal won." }
 ],

 flashcards: [
  { front: "BATNA?", back: "Best Alternative To a Negotiated Agreement, your fallback if the deal fails. Power proportional to it." },
  { front: "ZOPA?", back: "Zone of Possible Agreement, overlap between each side's acceptable ranges. No overlap = no deal." },
  { front: "Position vs interest?", back: "Position is what they demand. Interest is why. Trade on interests, not positions." },
  { front: "Anchoring in negotiation?", back: "First number drags the conversation. Anchor first if you have info; let them anchor if you don't." },
  { front: "Tactical empathy?", back: "Label the emotion you sense ('It seems like you're under pressure to close…'). Defuses + opens information." },
  { front: "Calibrated question?", back: "Open 'how/what' question that puts the problem in their lap. 'How am I supposed to do that?' beats 'no.'" },
  { front: "The mirror?", back: "Literally repeat the last 1-3 words as a question. They keep talking; you learn more." },
  { front: "Win-win logic?", back: "In repeat games, relationship is part of outcome. A win that burns the counterparty usually loses long-run." }
 ],
 glossary: [
  { term: "BATNA", def: "Best Alternative To a Negotiated Agreement." },
  { term: "ZOPA", def: "Zone of Possible Agreement, overlap of acceptable ranges." },
  { term: "Anchor", def: "First number that biases the negotiation range." },
  { term: "Label", def: "Voss-style verbal acknowledgment of the other side's emotion." },
  { term: "Mirror", def: "Repeating the last 1-3 words to invite elaboration." },
  { term: "Position", def: "What someone is asking for on the surface." },
  { term: "Interest", def: "Why they're asking for it." },
  { term: "Principled negotiation", def: "Fisher & Ury's method, focus on interests, generate options, use objective criteria." }
 ]
};

export default d;
