import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "law",
  icon: "⚖️",
  hue: "#fcd34d",
  category: "World & Knowledge",
  name: "Law & Legal Basics",
  tagline: "How rules work, so they don't surprise you",

  basics: "Law is the official rulebook a society uses to decide who has which rights, how disputes get sorted out, and how power gets channelled. You don't need a law degree to live well — but you do need a rough map. Most everyday legal disasters happen to people who didn't know what they were signing, or didn't know what they were entitled to. The shape of contracts, the difference between criminal and civil cases, your basic rights, when to suck it up and when to pay a real lawyer — that's the literacy. With it, most contracts you sign in your life stop being scary. Without it, you're trusting that everyone you deal with has your interests at heart, which is a brave assumption.",
  whyItMatters: [
    "You can read a rental agreement, a job offer, an insurance policy without being quietly trapped by it.",
    "You know roughly what your rights are when stopped, when arrested, when a service company refuses a refund.",
    "You spot the moments when \"I'll just handle it myself\" is fine — and the moments when paying for one hour of a lawyer's time is the cheapest insurance you'll ever buy.",
    "You vote, you read the news, you debate policy with actual structure in mind, not vibes."
  ],
  realWorldExample: "A friend was buying a flat in India. The deal had \"sold as is\" buried in the small print. He signed because the broker was friendly and he wanted to move in next month. Six months later, he discovered the building had unresolved municipal issues that became his problem, legally and financially. Years of dispute, lakhs of rupees, hundreds of hours of stress — all to save what would have been a one-hour conversation with a property lawyer before signing. That asymmetry — small cost to check, huge cost to fix — is the recurring lesson of practical law. Most legal pain comes from skipping the boring check.",

  mentors: [
    { name: "Oliver Wendell Holmes Jr.", for: "the realist tradition — law as prediction of what courts will do", work: "The Path of the Law (1897)" },
    { name: "H.L.A. Hart", for: "modern analytical jurisprudence", work: "The Concept of Law (1961)" },
    { name: "Ronald Dworkin", for: "law as interpretation; rights as trumps", work: "Taking Rights Seriously (1977)" },
    { name: "B.R. Ambedkar", for: "the architect of the Indian Constitution + a foundational rights thinker", work: "Constituent Assembly debates; constitutional drafting" },
    { name: "Cass Sunstein", for: "law + behavioural economics", work: "Nudge (with Thaler, 2008)" }
  ],

  diagrams: [
    { kind: "tree", title: "Branches of law (rough map)", caption: "Most everyday issues live in 1–2 of these branches.", data: { root: "Law", children: [
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
    { concept: "Negotiation", linksTo: "negotiation", note: "Most contracts are negotiated agreements — same skills apply." }
  ],

  concepts: [
    { t: "Civil vs criminal", short: "Criminal: state vs you. Civil: you vs someone else (usually about money).", deep: "Different burdens of proof, remedies, and stakes. Criminal needs 'beyond reasonable doubt'; civil needs 'balance of probabilities' (preponderance / on the balance of probabilities). The same factual incident can spawn both — e.g. an accident can be both criminal and civil.", status: "settled", reflect: "Was the most recent legal news you read criminal or civil? Different rules entirely." },
    { t: "Contract = offer + acceptance + consideration", short: "A promise the law will help enforce.", deep: "Universally: a contract needs an offer, acceptance, and something exchanged (consideration). Most adult life is contracts: employment, rent, insurance, terms of service. Read what you sign — courts mostly enforce what's written.", status: "settled", reflect: "Pick one contract you signed in the last year. Could you state its key obligations from memory?" },
    { t: "Rights and duties are linked", short: "Every right implies someone else's duty.", deep: "Your right to privacy is someone else's duty not to peek. Your right to free speech is the state's duty not to silence. This pairing helps you read constitutional debates more clearly — a 'right' on its own is half an analysis.", status: "framework", reflect: "Pick a right you care about. Whose duty does it imply? Is that duty likely to be honoured?" },
    { t: "Burden + standard of proof", short: "Who has to prove what, and how convincingly.", deep: "In criminal cases, the prosecution proves beyond reasonable doubt; the accused doesn't have to prove innocence. In civil cases, plaintiff proves on the balance of probabilities. Misunderstanding this is one of the most common public-debate mistakes about legal cases.", status: "settled", reflect: "Pick a famous case in the news. Who had the burden? What was the standard?" },
    { t: "IRAC", short: "Issue → Rule → Analysis → Conclusion.", deep: "Law school's main reasoning template. Identify the issue, find the relevant rule, apply the rule to the facts, conclude. Useful far outside law for clear written argument.", status: "framework", reflect: "Take a dispute (real or hypothetical) and IRAC it on paper." },
    { t: "Constitutional law (India-specific)", short: "Fundamental rights, structure of government, basic-structure doctrine.", deep: "India's Constitution guarantees fundamental rights (Articles 14–32), separates powers between executive, legislature, and judiciary, and has a 'basic structure' doctrine the Supreme Court uses to prevent amendments that destroy core features. Knowing the rights chapter and the writ petitions (Article 32) is high-leverage civic literacy.", status: "settled", reflect: "Can you name three fundamental rights in your country? When were they last debated in court?" },
    { t: "Family + personal law", short: "Marriage, inheritance, custody — often the most personal corner of the system.", deep: "Family law varies dramatically across jurisdictions and (in India) across personal laws. Marital, succession, and custody rules matter enormously and almost everyone underprepares. Write a will, get clarity on succession, and don't let 'we'll figure it out' be the plan.", status: "framework", reflect: "Do you have a will? If not, do you know who inherits if you died tomorrow?" },
    { t: "When to hire a lawyer", short: "If the cost of the wrong outcome > the cost of an hour with a real lawyer, hire one.", deep: "DIY legal work has gotten easier — templates, AI, official portals. It's right for low-stakes, repeated-pattern situations. It's wrong for property, marriage/divorce, major contracts, employment disputes, criminal matters, and anything cross-border. The asymmetry usually favours paying for an hour.", status: "framework", reflect: "Is there a 'I'll handle it myself' decision in your life where the downside is much bigger than an hour of legal fees?" }
  ],

  counterView: "Two honest critiques. (1) Law students are often taught that legal reasoning is more determinate than it is — in practice, judges have wide discretion, and outcomes depend heavily on which court, which judge, and what political environment. The 'realist' tradition (Holmes) names this; it's worth taking seriously. (2) The framing that 'everyone should know their rights' undersells how punishing it is to enforce them — knowing you have a right is different from being able to spend the time, money, and emotional energy to assert it. Especially in jurisdictions with slow courts (India's case backlog is famous), a lot of formally enforceable rights are de facto unenforceable for the average person.",

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
    { rank: "Novice", focus: "Vocabulary", do: "Learn civil/criminal, contract basics, fundamental rights of your country.", milestone: "You can read legal news without getting confused.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Daily defences", do: "Read every contract you sign. Don't 'click to agree' without skimming.", milestone: "You catch 1+ trap in your contracts.", time: "~1 month" },
    { rank: "Practitioner", focus: "Constitutional + civic", do: "Read your country's fundamental rights chapter + 5 major cases.", milestone: "You can name your rights + a leading case.", time: "~2–3 months" },
    { rank: "Specialist", focus: "Personal estate", do: "Write a will. Sort nominees. Understand your inheritance regime.", milestone: "Your affairs wouldn't shock your family.", time: "~3–6 months" },
    { rank: "Expert", focus: "Hire well", do: "Build a small lawyer network you trust — for property, employment, tax.", milestone: "You know who to call before a crisis.", time: "~1 year+" },
    { rank: "Master", focus: "Advocacy / policy", do: "Engage in real legal/policy advocacy — RTI, public interest litigation, civic work.", milestone: "You move outcomes for others.", time: "~2+ years" },
    { rank: "Grandmaster", focus: "Build / lead", do: "Lead an NGO / law firm / reform effort that shapes how rules work.", milestone: "Your work changes structures.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "India Code (government legal portal)",        what: "Free, official text of central + state laws.",                                       url: "https://www.indiacode.nic.in/",                                                       verify: false, lastVerified: "2026-06" },
      { name: "PRS Legislative Research",                    what: "Free, non-partisan explainers on Indian bills + laws.",                              url: "https://prsindia.org/",                                                                verify: false, lastVerified: "2026-06" },
      { name: "Supreme Court Observer (SCO)",                what: "Accessible reporting on Indian constitutional cases.",                                url: "https://www.scobserver.in/",                                                          verify: false, lastVerified: "2026-06" },
      { name: "Cornell LII (US)",                            what: "Free, comprehensive US legal reference.",                                              url: "https://www.law.cornell.edu/",                                                        verify: false, lastVerified: "2026-06" },
      { name: "FindLaw (US, free articles)",                  what: "Plain-English explanations of US legal topics.",                                       url: "https://www.findlaw.com/",                                                            verify: false, lastVerified: "2026-06" },
      { name: "Indian Kanoon — free case search",            what: "Searchable database of Indian court judgments.",                                      url: "https://indiankanoon.org/",                                                            verify: false, lastVerified: "2026-06" },
      { name: "Bar & Bench (India legal news)",               what: "Free legal news + analysis on Indian cases.",                                         url: "https://www.barandbench.com/",                                                        verify: false, lastVerified: "2026-06" },
      { name: "LiveLaw (India legal news)",                  what: "Free, current legal reporting.",                                                       url: "https://www.livelaw.in/",                                                              verify: false, lastVerified: "2026-06" },
      { name: "NALSAR / NLU OpenCourseWare (where available)", what: "Free Indian law-school lectures and materials.",                                       url: "https://www.nalsar.ac.in/",                                                            verify: true, lastVerified: "2026-06" },
      { name: "Constitution of India (full text, govt)",     what: "Free official PDF + translations.",                                                    url: "https://legislative.gov.in/constitution-of-india/",                                    verify: false, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "The Concept of Law — H.L.A. Hart",            what: "Foundational jurisprudence. Dense but rewarding.",                                   url: "https://en.wikipedia.org/wiki/The_Concept_of_Law",                                     price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Constitutional Law — M.P. Jain",              what: "Standard Indian constitutional-law text.",                                            url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Nudge — Thaler & Sunstein",                   what: "Behavioural law/economics — choice architecture meets policy.",                       url: "https://en.wikipedia.org/wiki/Nudge_(book)",                                           price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Rule of Law — Tom Bingham",               what: "Compact, lucid case for rule-of-law principles.",                                     url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Taking Rights Seriously — Ronald Dworkin",    what: "Rights as trumps; law as interpretation.",                                            url: "https://en.wikipedia.org/wiki/Taking_Rights_Seriously",                                price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Path of the Law — Holmes (essay)",        what: "Foundational realist essay, also free if you search.",                                url: "https://en.wikipedia.org/wiki/The_Path_of_the_Law",                                    price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "India After Gandhi — Ramachandra Guha",      what: "Political-history context for Indian constitutional law.",                            url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Working a Democratic Constitution — Granville Austin", what: "Definitive study of Indian constitutional working.",                            url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Transformative Constitution — Gautam Bhatia", what: "Modern Indian constitutional theory.",                                              url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Law's Empire — Ronald Dworkin",               what: "Law as interpretation; deeper Dworkin.",                                              url: "",                                                                                      price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Read your last contract", d: "Pull up your most recent rental/job/insurance contract. Read every clause. Note 3 obligations.", xp: 40 },
    { t: "Write a will", d: "Use an official template + draft a basic will. Get it witnessed (jurisdiction rules vary). Yes, today.", xp: 80 },
    { t: "Name your rights", d: "Write your country's fundamental rights from memory. Check against the actual list.", xp: 30 },
    { t: "IRAC a dispute", d: "Pick a real or hypothetical dispute. Apply IRAC on paper.", xp: 40 },
    { t: "Build a lawyer network", d: "Get the name + number of one lawyer you'd call for property, employment, or family matters. Just one.", xp: 40 }
  ],
  capstone: { t: "Personal legal house-in-order", d: "Get your basics sorted — will, nominees, key contracts read, lawyer contact for each big domain. One-page index of where everything lives.", xp: 200 },

  quiz: [
    { q: "Burden of proof in a criminal case rests on…", options: [
      { text: "The defendant.", misconception: "Common misunderstanding. The accused isn't required to prove innocence." },
      { text: "The prosecution — beyond reasonable doubt.", correct: true },
      { text: "Both equally.", misconception: "Not in criminal — the burden is asymmetric." },
      { text: "The judge.", misconception: "Judge decides; prosecution proves." }
    ], why: "Criminal: prosecution must prove beyond reasonable doubt. The accused doesn't have to prove innocence.", testOut: true },
    { q: "Standard of proof in a civil case is…", options: [
      { text: "Beyond reasonable doubt.", misconception: "That's criminal — much higher bar." },
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
      { text: "Knowing the right is different from being able to enforce it — courts are slow + expensive.", correct: true },
      { text: "Rights are universal.", misconception: "Not in practice across jurisdictions." },
      { text: "Lawyers don't matter.", misconception: "Opposite — they often matter most." }
    ], why: "Formal rights and de facto enforceability are different things. In slow-court jurisdictions, the gap is huge." },
    { q: "When should you almost always pay for legal advice?", options: [
      { text: "Buying property; major contracts; family matters with assets; employment disputes.", correct: true },
      { text: "Never.", misconception: "Cost asymmetry favours paying for most of these." },
      { text: "Only criminal cases.", misconception: "Civil + transactional decisions can cost more than criminal mistakes." },
      { text: "Only after a problem appears.", misconception: "Prevention is much cheaper than litigation." }
    ], why: "Cost asymmetry: an hour of a lawyer is usually trivial vs the downside of getting these wrong." }
  ],

  flashcards: [
    { front: "Civil vs criminal — one line each?", back: "Civil = you vs someone, usually about money. Criminal = state vs you, usually about liberty. Different burdens of proof." },
    { front: "Standard of proof in criminal vs civil?", back: "Criminal: beyond reasonable doubt. Civil: balance of probabilities (more likely than not)." },
    { front: "Three elements of a contract?", back: "Offer + acceptance + consideration (something exchanged)." },
    { front: "IRAC?", back: "Issue, Rule, Analysis, Conclusion — standard legal reasoning template." },
    { front: "Rights without duties?", back: "Don't exist — every right implies someone else's duty to respect it." },
    { front: "Fundamental rights (India, broad)?", back: "Articles 14–32 — equality, free speech, life + liberty, protection against arbitrary detention, religious freedom + right to constitutional remedies." },
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
    { term: "IRAC", def: "Issue, Rule, Analysis, Conclusion — legal reasoning template." },
    { term: "Writ", def: "Court order — in India, fundamental rights enforceable under Article 32 / 226." }
  ],

  safetyNote: "Educational, not legal advice. Laws vary by country and change. For real legal stakes — property, family, employment, contracts, anything criminal — consult a qualified lawyer in your jurisdiction. In India, start with official portals (India Code, SCO India) and a registered advocate for matters of consequence."
};

export default d;
