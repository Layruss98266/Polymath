import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "law",
 icon: "⚖️",
 hue: "#fcd34d",
 category: "World & Knowledge",
 name: "Law & Legal Basics",
 tagline: "How rules work, so they don't surprise you",

 basics: "Law is the official rulebook a society uses to decide who has which rights, how disputes get sorted out, and how power gets channelled. You don't need a law degree to live well , but you do need a rough map. Most everyday legal disasters happen to people who didn't know what they were signing, or didn't know what they were entitled to. The shape of contracts, the difference between criminal and civil cases, your basic rights, when to suck it up and when to pay a real lawyer , that's the literacy. With it, most contracts you sign in your life stop being scary. Without it, you're trusting that everyone you deal with has your interests at heart, which is a brave assumption.",
 whyItMatters: [
  "You can read a rental agreement, a job offer, an insurance policy without being quietly trapped by it.",
  "You know roughly what your rights are when stopped, when arrested, when a service company refuses a refund.",
  "You spot the moments when \"I'll just handle it myself\" is fine , and the moments when paying for one hour of a lawyer's time is the cheapest insurance you'll ever buy.",
  "You vote, you read the news, you debate policy with actual structure in mind, not vibes."
 ],
 realWorldExample: "A friend was buying a flat in India. The deal had \"sold as is\" buried in the small print. He signed because the broker was friendly and he wanted to move in next month. Six months later, he discovered the building had unresolved municipal issues that became his problem, legally and financially. Years of dispute, lakhs of rupees, hundreds of hours of stress , all to save what would have been a one-hour conversation with a property lawyer before signing. That asymmetry , small cost to check, huge cost to fix , is the recurring lesson of practical law. Most legal pain comes from skipping the boring check.",

 mentors: [
  { name: "Oliver Wendell Holmes Jr.", for: "the realist tradition , law as prediction of what courts will do", work: "The Path of the Law (1897)" },
  { name: "H.L.A. Hart", for: "modern analytical jurisprudence", work: "The Concept of Law (1961)" },
  { name: "Ronald Dworkin", for: "law as interpretation; rights as trumps", work: "Taking Rights Seriously (1977)" },
  { name: "B.R. Ambedkar", for: "the architect of the Indian Constitution + a foundational rights thinker", work: "Constituent Assembly debates; constitutional drafting" },
  { name: "Cass Sunstein", for: "law + behavioural economics", work: "Nudge (with Thaler, 2008)" }
 ],

 diagrams: [
  { kind: "tree", title: "Branches of law (rough map)", caption: "Most everyday issues live in 1-2 of these branches.", data: { root: "Law", children: [
   { label: "Criminal", children: [{ label: "Offences" }, { label: "Procedure" }] },
   { label: "Civil", children: [{ label: "Contract" }, { label: "Tort" }, { label: "Property" }] },
   { label: "Constitutional" },
   { label: "Family" },
   { label: "Tax + Regulatory" }
  ] } },
  { kind: "flow", title: "IRAC reasoning", caption: "A law-school workhorse for analysing any case.", data: { steps: ["Issue", "Rule", "Analysis", "Conclusion"] } }
 ],

 synthesis: [
  { concept: "Decision under uncertainty", linksTo: "mental_models", note: "Reading a contract is a special case of second-order thinking." },
  { concept: "Negotiation", linksTo: "negotiation", note: "Most contracts are negotiated agreements , same skills apply." }
 ],

 subdomains: [
  { id: "foundations", name: "Foundations" },
  { id: "contracts", name: "Contracts and Civil" },
  { id: "rights", name: "Rights and Constitution" },
  { id: "practical", name: "Practical Action" },
 ],

 concepts: [
  { t: "Civil vs criminal",              short: "Criminal is the state versus you. Civil is you versus someone else, almost always about money.",                                             deep: "These are two different systems running on different rules. Criminal cases are the state (or the government) prosecuting someone for breaking a public rule , theft, assault, fraud. The stakes are usually liberty; the standard of proof is high (\"beyond reasonable doubt\"); the accused doesn't have to prove innocence. Civil cases are private parties arguing , broken contracts, accidents, defamation, property disputes. The stakes are usually money; the standard of proof is lower (\"on the balance of probabilities\" , basically, more likely than not). The same incident can spawn both: a car accident can lead to criminal charges (rash driving) and a separate civil case (you suing the driver for hospital bills).",                                                                                                                             status: "settled",  reflect: "The last legal story in the news you paid attention to , was it criminal or civil? They follow completely different rules." },
  { t: "Contract = offer + acceptance + consideration", short: "A promise the law will help enforce. It needs three small ingredients.",                                                       deep: "Almost every adult interaction is a contract underneath. A job offer (offer) you accept (acceptance) in exchange for salary (consideration). A rental agreement. An insurance policy. The terms of service on every app. The law generally enforces what's written , not what was meant, not what was implied over coffee. So the boring habit pays huge dividends: read what you sign before you sign it. Especially the bits in the small print. \"I'll trust them\" is a sentence said before most preventable legal disasters.",                                                                                                                                                                                                                                 status: "settled",  reflect: "Take one contract you signed in the last year. Could you state its key obligations from memory? If not, that's where to look first." },
  { t: "Rights and duties come paired",        short: "Every right someone has is a duty someone else owes. A right on its own is half a story.",                                                deep: "Your right to privacy isn't a force of nature , it's a duty on other people (and the state) not to peek. Your right to free speech is the state's duty not to silence you. Your right to a refund is the seller's duty to give it back. Once you see the pairing, constitutional and policy debates become much clearer , half of the argument is always about whose duty it is to deliver the right, and what happens when they don't. A right with no one obliged to honour it is just a wish in legal clothing.",                                                                                                                                                                                                                                         status: "framework", reflect: "Pick a right you care about deeply. Whose duty does it imply? Is that duty likely to be honoured in your real-world situation?" },
  { t: "Burden of proof and standard of proof",    short: "Who has to prove what, and how convincingly. Get this wrong and you misunderstand most legal news.",                                         deep: "Two different questions sit underneath any legal case. The burden of proof asks who has to show that something is true. The standard of proof asks how convincingly. In criminal trials, the prosecution carries the burden and the standard is \"beyond reasonable doubt\" , a high bar, deliberately, because the consequence is liberty. The accused doesn't have to prove anything. In civil cases, the person bringing the case has the burden, and the standard is \"on the balance of probabilities\" , more likely than not. A lot of public arguments about famous cases miss this: \"why didn't they convict?\" often has a perfectly good answer, and that answer is the burden-and-standard combination.",                                                                                                                                         status: "settled",  reflect: "Pick a famous trial you've followed in the news. Who had the burden of proof? What standard did they have to meet? Does the outcome make more sense now?" },
  { t: "IRAC reasoning",                short: "Issue. Rule. Analysis. Conclusion. The basic structure of every clean legal argument.",                                                 deep: "Every law school in the English-speaking world teaches the same template for writing about legal problems. Start with the issue , what specifically is in dispute? Find the relevant rule from statute or precedent. Apply the rule to the facts of this specific case (the analysis). Reach a conclusion. The reason it works isn't magic , it forces you not to skip steps. You can use the same four-step structure for any well-reasoned written argument, legal or not. It's how good lawyers think on paper; it's also how good policy memos and well-argued blog posts are structured.",                                                                                                                                                                                                     status: "framework", reflect: "Take any dispute , work, personal, public , and try to IRAC it on paper. The structure reveals where you've been hand-waving." },
  { t: "Constitutional law (India)",          short: "Fundamental rights, separation of powers, basic-structure doctrine. The skeleton of the system.",                                           deep: "India's Constitution is the longest national constitution in the world. The chapter most people should know is the Fundamental Rights chapter (Articles 14 to 32) , equality before the law, freedom of speech and expression, life and personal liberty, religious freedom, protection against arbitrary arrest, the right to approach the Supreme Court directly to enforce these (Article 32, the writ petition). The Constitution also separates power between executive, legislature, and judiciary. And the Supreme Court has developed the basic-structure doctrine , Parliament can amend the Constitution but can't amend away its core features. Knowing the rights chapter alone is high-leverage civic literacy.",                                                                                                                                       status: "settled",  reflect: "Can you name three fundamental rights in your country, and when each was last seriously debated in court? If not, that's the next hour's reading." },
  { t: "Family and personal law",            short: "Marriage, inheritance, custody, succession. The most personal corner of the legal system.",                                              deep: "Family law varies dramatically across jurisdictions and (in India) across personal laws , different rules for Hindus, Muslims, Christians, Parsis, depending on the matter. Marital rights, succession, custody, maintenance , these matter enormously to real life and almost nobody prepares properly until something goes wrong. The least sexy and most valuable single move most adults can make: write a will, sort nominees on every account, get clarity on which personal law applies to you and what its rules are. \"We'll figure it out\" is not a plan. Your family knowing what you want is.",                                                                                                                                                                                                 status: "framework", reflect: "Do you have a will? If you don't, do you actually know who would inherit if something happened to you tomorrow?" },
  { t: "When to do it yourself vs hire a lawyer",    short: "If the downside of being wrong is bigger than an hour of legal fees, hire the lawyer.",                                                deep: "DIY legal work has gotten easier , templates online, official government portals, AI tools that can summarise documents. For low-stakes, repeated-pattern stuff (a basic rental agreement, a simple consumer complaint), this is fine. For everything else , buying property, divorce, major business contracts, employment disputes, criminal matters, anything cross-border , the cost asymmetry strongly favours paying for an hour of a real lawyer's time. An hour of a competent lawyer in India might cost ₹3,000 to ₹15,000. The downside of the wrong outcome on a property deal can be lakhs. Run the asymmetry honestly and stop trying to be clever.",                                                                                                                                                                     status: "framework", reflect: "Is there a \"I'll handle it myself\" decision in your life where the downside, if you're wrong, is much bigger than a few hours of legal fees?" }
 ],

 counterView: "Two honest critiques. (1) Law students are often taught that legal reasoning is more determinate than it is , in practice, judges have wide discretion, and outcomes depend heavily on which court, which judge, and what political environment. The 'realist' tradition (Holmes) names this; it's worth taking seriously. (2) The framing that 'everyone should know their rights' undersells how punishing it is to enforce them , knowing you have a right is different from being able to spend the time, money, and emotional energy to assert it. Especially in jurisdictions with slow courts (India's case backlog is famous), a lot of formally enforceable rights are de facto unenforceable for the average person.",

 capabilities: [
  "Read a standard contract and identify the key obligations.",
  "Distinguish civil from criminal in everyday news.",
  "Apply IRAC to a real dispute on paper.",
  "Know when to DIY a legal task vs hire someone.",
  "Write a basic will (or know you should, today)."
 ],
 cheatsheet: [
  "Civil = you vs someone (money). Criminal = state vs you (liberty).",
  "Contract = offer + acceptance + consideration. Read what you sign.",
  "Standard of proof: criminal 'beyond reasonable doubt' / civil 'balance of probabilities.'",
  "Rights and duties always come paired.",
  "When in doubt: 1 hour with a lawyer.",
  "Write a will. Today is better than tomorrow."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Get the basic vocabulary",               do: "Learn the difference between civil and criminal, the elements of a contract, the fundamental rights of your country. Spend a couple of hours on PRS India or a friendly explainer.",                                                                                 milestone: "You can read a legal news story and follow what's actually happening without confusion.",                                     time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Stop signing things you haven't read",          do: "For one month, don't sign or click-to-agree on anything significant without skimming the terms. You'll be surprised how often you spot something worth pushing back on.",                                                                                         milestone: "You catch at least one trap in a contract you would otherwise have signed without thinking.",                                     time: "~1 month" },
  { rank: "Practitioner", focus: "Get civically literate",                  do: "Read your country's fundamental rights chapter end-to-end. Read summaries of five major constitutional cases. The Supreme Court Observer (India) or equivalent is excellent free reading.",                                                                                 milestone: "You can name your rights and at least one leading case that shaped them.",                                             time: "~2-3 months" },
  { rank: "Specialist",  focus: "Sort your own estate",                   do: "Write a will using an official template (or with a lawyer if your situation is complex). Sort nominees on every account. Understand the inheritance regime that applies to you.",                                                                                     milestone: "If something happened to you tomorrow, your family wouldn't be shocked by the legal complexity.",                                 time: "~3-6 months" },
  { rank: "Expert",    focus: "Build a small trusted lawyer network",           do: "Find a property lawyer, an employment lawyer, and a tax-savvy CA you trust , before you need them. Have their numbers in your phone.",                                                                                                         milestone: "When something legal happens, you know who to call before the panic sets in.",                                           time: "~1 year+" },
  { rank: "Master",    focus: "Real advocacy or policy work",               do: "Engage in actual civic work , file an RTI, support public-interest litigation, work on a policy issue you care about. The system runs better when literate citizens engage.",                                                                                      milestone: "You've moved a real outcome , even small , for people beyond yourself.",                                              time: "~2+ years" },
  { rank: "Grandmaster", focus: "Shape structures, not just outcomes",            do: "Lead an NGO, a firm, or a reform effort that changes how the rules actually work in your area.",                                                                                                                             milestone: "Your work has changed structures, not just individual cases.",                                                   time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "India Code (government legal portal)",    what: "Free, official text of central + state laws.",                    url: "https://www.indiacode.nic.in/",                            verify: false, lastVerified: "2026-06" },
   { name: "PRS Legislative Research",          what: "Free, non-partisan explainers on Indian bills + laws.",               url: "https://prsindia.org/",                                verify: false, lastVerified: "2026-06" },
   { name: "Supreme Court Observer (SCO)",        what: "Accessible reporting on Indian constitutional cases.",                url: "https://www.scobserver.in/",                             verify: false, lastVerified: "2026-06" },
   { name: "Cornell LII (US)",              what: "Free, comprehensive US legal reference.",                       url: "https://www.law.cornell.edu/",                            verify: false, lastVerified: "2026-06" },
   { name: "FindLaw (US, free articles)",         what: "Plain-English explanations of US legal topics.",                    url: "https://www.findlaw.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "Indian Kanoon , free case search",      what: "Searchable database of Indian court judgments.",                   url: "https://indiankanoon.org/",                              verify: false, lastVerified: "2026-06" },
   { name: "Bar & Bench (India legal news)",        what: "Free legal news + analysis on Indian cases.",                     url: "https://www.barandbench.com/",                            verify: false, lastVerified: "2026-06" },
   { name: "LiveLaw (India legal news)",         what: "Free, current legal reporting.",                            url: "https://www.livelaw.in/",                               verify: false, lastVerified: "2026-06" },
   { name: "NALSAR / NLU OpenCourseWare (where available)", what: "Free Indian law-school lectures and materials.",                    url: "https://www.nalsar.ac.in/",                              verify: true, lastVerified: "2026-06" },
   { name: "Constitution of India (full text, govt)",   what: "Free official PDF + translations.",                          url: "https://legislative.gov.in/constitution-of-india/",                  verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Concept of Law , H.L.A. Hart",      what: "Foundational jurisprudence. Dense but rewarding.",                  url: "https://en.wikipedia.org/wiki/The_Concept_of_Law",                   price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Constitutional Law , M.P. Jain",       what: "Standard Indian constitutional-law text.",                      url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Nudge , Thaler & Sunstein",          what: "Behavioural law/economics , choice architecture meets policy.",            url: "https://en.wikipedia.org/wiki/Nudge_(book)",                      price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Rule of Law , Tom Bingham",        what: "Compact, lucid case for rule-of-law principles.",                   url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Taking Rights Seriously , Ronald Dworkin",  what: "Rights as trumps; law as interpretation.",                      url: "https://en.wikipedia.org/wiki/Taking_Rights_Seriously",                price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Path of the Law , Holmes (essay)",    what: "Foundational realist essay, also free if you search.",                url: "https://en.wikipedia.org/wiki/The_Path_of_the_Law",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "India After Gandhi , Ramachandra Guha",   what: "Political-history context for Indian constitutional law.",              url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Working a Democratic Constitution , Granville Austin", what: "Definitive study of Indian constitutional working.",              url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Transformative Constitution , Gautam Bhatia", what: "Modern Indian constitutional theory.",                       url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Law's Empire , Ronald Dworkin",        what: "Law as interpretation; deeper Dworkin.",                       url: "",                                           price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Read your last contract", d: "Pull up your most recent rental/job/insurance contract. Read every clause. Note 3 obligations.", xp: 40 },
  { t: "Write a will", d: "Use an official template + draft a basic will. Get it witnessed (jurisdiction rules vary). Yes, today.", xp: 80 },
  { t: "Name your rights", d: "Write your country's fundamental rights from memory. Check against the actual list.", xp: 30 },
  { t: "IRAC a dispute", d: "Pick a real or hypothetical dispute. Apply IRAC on paper.", xp: 40 },
  { t: "Build a lawyer network", d: "Get the name + number of one lawyer you'd call for property, employment, or family matters. Just one.", xp: 40 }
 ],
 capstone: { t: "Personal legal house-in-order", d: "Get your basics sorted , will, nominees, key contracts read, lawyer contact for each big domain. One-page index of where everything lives.", xp: 200 },

 quiz: [
  { q: "Burden of proof in a criminal case rests on…", options: [
   { text: "The defendant.", misconception: "Common misunderstanding. The accused isn't required to prove innocence." },
   { text: "The prosecution , beyond reasonable doubt.", correct: true },
   { text: "Both equally.", misconception: "Not in criminal , the burden is asymmetric." },
   { text: "The judge.", misconception: "Judge decides; prosecution proves." }
  ], why: "Criminal: prosecution must prove beyond reasonable doubt. The accused doesn't have to prove innocence.", testOut: true },
  { q: "Standard of proof in a civil case is…", options: [
   { text: "Beyond reasonable doubt.", misconception: "That's criminal , much higher bar." },
   { text: "Preponderance / balance of probabilities (more likely than not).", correct: true },
   { text: "Absolute certainty.", misconception: "Not used in any common standard." },
   { text: "The accused's call.", misconception: "Standards are set by law, not by the accused." }
  ], why: "Civil: plaintiff wins if it's more likely than not. Lower bar than criminal." },
  { q: "A binding contract requires…", options: [
   { text: "Notarisation only.", misconception: "Notarisation is often not required for validity (varies by jurisdiction)." },
   { text: "Offer, acceptance, and consideration (something exchanged).", correct: true },
   { text: "Lawyers on both sides.", misconception: "Not required, though smart for big deals." },
   { text: "An advance payment.", misconception: "Payment is one form of consideration; not the only one." }
  ], why: "The three classical elements: offer + acceptance + consideration. Read what you sign." },
  { q: "Which is the strongest critique of 'everyone should just know their rights'?", options: [
   { text: "Rights don't exist.", misconception: "Strong overshoot." },
   { text: "Knowing the right is different from being able to enforce it , courts are slow + expensive.", correct: true },
   { text: "Rights are universal.", misconception: "Not in practice across jurisdictions." },
   { text: "Lawyers don't matter.", misconception: "Opposite , they often matter most." }
  ], why: "Formal rights and de facto enforceability are different things. In slow-court jurisdictions, the gap is huge." },
  { q: "When should you almost always pay for legal advice?", options: [
   { text: "Buying property; major contracts; family matters with assets; employment disputes.", correct: true },
   { text: "Never.", misconception: "Cost asymmetry favours paying for most of these." },
   { text: "Only criminal cases.", misconception: "Civil + transactional decisions can cost more than criminal mistakes." },
   { text: "Only after a problem appears.", misconception: "Prevention is much cheaper than litigation." }
  ], why: "Cost asymmetry: an hour of a lawyer is usually trivial vs the downside of getting these wrong." }
 ],

 flashcards: [
  { front: "Civil vs criminal , one line each?", back: "Civil = you vs someone, usually about money. Criminal = state vs you, usually about liberty. Different burdens of proof." },
  { front: "Standard of proof in criminal vs civil?", back: "Criminal: beyond reasonable doubt. Civil: balance of probabilities (more likely than not)." },
  { front: "Three elements of a contract?", back: "Offer + acceptance + consideration (something exchanged)." },
  { front: "IRAC?", back: "Issue, Rule, Analysis, Conclusion , standard legal reasoning template." },
  { front: "Rights without duties?", back: "Don't exist , every right implies someone else's duty to respect it." },
  { front: "Fundamental rights (India, broad)?", back: "Articles 14-32 , equality, free speech, life + liberty, protection against arbitrary detention, religious freedom + right to constitutional remedies." },
  { front: "What's basic-structure doctrine?", back: "Indian Supreme Court principle that Parliament can't amend the Constitution in a way that destroys its 'basic structure.'" },
  { front: "When DIY legal vs hire?", back: "DIY low-stakes, repeated patterns. Hire for property, family, big contracts, employment, criminal, cross-border." }
 ],
 glossary: [
  { term: "Civil law", def: "Disputes between parties, usually about rights and money." },
  { term: "Criminal law", def: "State vs individuals for offences against society." },
  { term: "Contract", def: "Legally enforceable agreement (offer + acceptance + consideration)." },
  { term: "Tort", def: "Civil wrong causing harm (negligence, defamation, etc.)." },
  { term: "Burden of proof", def: "Who has to prove the claim." },
  { term: "Standard of proof", def: "How convincingly they must prove it." },
  { term: "IRAC", def: "Issue, Rule, Analysis, Conclusion , legal reasoning template." },
  { term: "Writ", def: "Court order , in India, fundamental rights enforceable under Article 32 / 226." }
 ],

 safetyNote: "Educational, not legal advice. Laws vary by country and change. For real legal stakes , property, family, employment, contracts, anything criminal , consult a qualified lawyer in your jurisdiction. In India, start with official portals (India Code, SCO India) and a registered advocate for matters of consequence."
};

export default d;
