import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "law",
 icon: "⚖️",
 hue: "#fcd34d",
 category: "World & Knowledge",
 name: "Law & Legal Basics",
 tagline: "How rules work, so they don't surprise you",

 basics: "Law is the official rulebook a society uses to decide who has which rights, how disputes get sorted out, and how power gets channelled. You don't need a law degree to live well, but you do need a rough map. Most everyday legal disasters happen to people who didn't know what they were signing, or didn't know what they were entitled to. The shape of contracts, the difference between criminal and civil cases, your basic rights, when to suck it up and when to pay a real lawyer, that's the literacy. With it, most contracts you sign in your life stop being scary. Without it, you're trusting that everyone you deal with has your interests at heart, which is a brave assumption.",
 whyItMatters: [
  "You can read a rental agreement, a job offer, an insurance policy without being quietly trapped by it.",
  "You know roughly what your rights are when stopped, when arrested, when a service company refuses a refund.",
  "You spot the moments when \"I'll just handle it myself\" is fine, and the moments when paying for one hour of a lawyer's time is the cheapest insurance you'll ever buy.",
  "You vote, you read the news, you debate policy with actual structure in mind, not vibes."
 ],
 realWorldExample: "A friend was buying a flat in India. The deal had \"sold as is\" buried in the small print. He signed because the broker was friendly and he wanted to move in next month. Six months later, he discovered the building had unresolved municipal issues that became his problem, legally and financially. Years of dispute, lakhs of rupees, hundreds of hours of stress, all to save what would have been a one-hour conversation with a property lawyer before signing. That asymmetry, small cost to check, huge cost to fix, is the recurring lesson of practical law. Most legal pain comes from skipping the boring check.",

 mentors: [
  { name: "Oliver Wendell Holmes Jr.", for: "the realist tradition, law as prediction of what courts will do", work: "The Path of the Law (1897)" },
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
  { concept: "Negotiation", linksTo: "negotiation", note: "Most contracts are negotiated agreements, same skills apply." }
 ],

 subdomains: [
  { id: "foundations", name: "Foundations" },
  { id: "contracts", name: "Contracts and Civil" },
  { id: "rights", name: "Rights and Constitution" },
  { id: "practical", name: "Practical Action" },
 ],

 concepts: [
  { t: "Civil vs criminal",              short: "Criminal is the state versus you. Civil is you versus someone else, almost always about money.",                                             deep: "These are two different systems running on different rules. Criminal cases are the state (or the government) prosecuting someone for breaking a public rule, theft, assault, fraud. The stakes are usually liberty; the standard of proof is high (\"beyond reasonable doubt\"); the accused doesn't have to prove innocence. Civil cases are private parties arguing, broken contracts, accidents, defamation, property disputes. The stakes are usually money; the standard of proof is lower (\"on the balance of probabilities\", basically, more likely than not). The same incident can spawn both: a car accident can lead to criminal charges (rash driving) and a separate civil case (you suing the driver for hospital bills).",                                                                                                                             status: "settled",  reflect: "The last legal story in the news you paid attention to, was it criminal or civil? They follow completely different rules." },
  { t: "Contract = offer + acceptance + consideration", short: "A promise the law will help enforce. It needs three small ingredients.",                                                       deep: "Almost every adult interaction is a contract underneath. A job offer (offer) you accept (acceptance) in exchange for salary (consideration). A rental agreement. An insurance policy. The terms of service on every app. The law generally enforces what's written, not what was meant, not what was implied over coffee. So the boring habit pays huge dividends: read what you sign before you sign it. Especially the bits in the small print. \"I'll trust them\" is a sentence said before most preventable legal disasters.",                                                                                                                                                                                                                                 status: "settled",  reflect: "Take one contract you signed in the last year. Could you state its key obligations from memory? If not, that's where to look first." },
  { t: "Rights and duties come paired",        short: "Every right someone has is a duty someone else owes. A right on its own is half a story.",                                                deep: "Your right to privacy isn't a force of nature, it's a duty on other people (and the state) not to peek. Your right to free speech is the state's duty not to silence you. Your right to a refund is the seller's duty to give it back. Once you see the pairing, constitutional and policy debates become much clearer, half of the argument is always about whose duty it is to deliver the right, and what happens when they don't. A right with no one obliged to honour it is just a wish in legal clothing.",                                                                                                                                                                                                                                         status: "framework", reflect: "Pick a right you care about deeply. Whose duty does it imply? Is that duty likely to be honoured in your real-world situation?" },
  { t: "Burden of proof and standard of proof",    short: "Who has to prove what, and how convincingly. Get this wrong and you misunderstand most legal news.",                                         deep: "Two different questions sit underneath any legal case. The burden of proof asks who has to show that something is true. The standard of proof asks how convincingly. In criminal trials, the prosecution carries the burden and the standard is \"beyond reasonable doubt\", a high bar, deliberately, because the consequence is liberty. The accused doesn't have to prove anything. In civil cases, the person bringing the case has the burden, and the standard is \"on the balance of probabilities\", more likely than not. A lot of public arguments about famous cases miss this: \"why didn't they convict?\" often has a perfectly good answer, and that answer is the burden-and-standard combination.",                                                                                                                                         status: "settled",  reflect: "Pick a famous trial you've followed in the news. Who had the burden of proof? What standard did they have to meet? Does the outcome make more sense now?" },
  { t: "IRAC reasoning",                short: "Issue. Rule. Analysis. Conclusion. The basic structure of every clean legal argument.",                                                 deep: "Every law school in the English-speaking world teaches the same template for writing about legal problems. Start with the issue, what specifically is in dispute? Find the relevant rule from statute or precedent. Apply the rule to the facts of this specific case (the analysis). Reach a conclusion. The reason it works isn't magic, it forces you not to skip steps. You can use the same four-step structure for any well-reasoned written argument, legal or not. It's how good lawyers think on paper; it's also how good policy memos and well-argued blog posts are structured.",                                                                                                                                                                                                     status: "framework", reflect: "Take any dispute, work, personal, public, and try to IRAC it on paper. The structure reveals where you've been hand-waving." },
  { t: "Constitutional law (India)",          short: "Fundamental rights, separation of powers, basic-structure doctrine. The skeleton of the system.",                                           deep: "India's Constitution is the longest national constitution in the world. The chapter most people should know is the Fundamental Rights chapter (Articles 14 to 32), equality before the law, freedom of speech and expression, life and personal liberty, religious freedom, protection against arbitrary arrest, the right to approach the Supreme Court directly to enforce these (Article 32, the writ petition). The Constitution also separates power between executive, legislature, and judiciary. And the Supreme Court has developed the basic-structure doctrine, Parliament can amend the Constitution but can't amend away its core features. Knowing the rights chapter alone is high-leverage civic literacy.",                                                                                                                                       status: "settled",  reflect: "Can you name three fundamental rights in your country, and when each was last seriously debated in court? If not, that's the next hour's reading." },
  { t: "Family and personal law",            short: "Marriage, inheritance, custody, succession. The most personal corner of the legal system.",                                              deep: "Family law varies dramatically across jurisdictions and (in India) across personal laws, different rules for Hindus, Muslims, Christians, Parsis, depending on the matter. Marital rights, succession, custody, maintenance, these matter enormously to real life and almost nobody prepares properly until something goes wrong. The least sexy and most valuable single move most adults can make: write a will, sort nominees on every account, get clarity on which personal law applies to you and what its rules are. \"We'll figure it out\" is not a plan. Your family knowing what you want is.",                                                                                                                                                                                                 status: "framework", reflect: "Do you have a will? If you don't, do you actually know who would inherit if something happened to you tomorrow?" },
  { t: "When to do it yourself vs hire a lawyer",    short: "If the downside of being wrong is bigger than an hour of legal fees, hire the lawyer.",                                                deep: "DIY legal work has gotten easier, templates online, official government portals, AI tools that can summarise documents. For low-stakes, repeated-pattern stuff (a basic rental agreement, a simple consumer complaint), this is fine. For everything else, buying property, divorce, major business contracts, employment disputes, criminal matters, anything cross-border, the cost asymmetry strongly favours paying for an hour of a real lawyer's time. An hour of a competent lawyer in India might cost ₹3,000 to ₹15,000. The downside of the wrong outcome on a property deal can be lakhs. Run the asymmetry honestly and stop trying to be clever.",                                                                                                                                                                     status: "framework", reflect: "Is there a \"I'll handle it myself\" decision in your life where the downside, if you're wrong, is much bigger than a few hours of legal fees?" },
  {
   t: "Mens rea and actus reus",
   subdomain: "foundations",
   definition: "A criminal offence usually needs a guilty act (actus reus) together with a guilty mind (mens rea).",
   short: "Doing the bad thing is half. Meaning to do it is the other half.",
   deep: "Indian criminal law, like most common-law systems, generally requires two ingredients before it punishes you. There must be a prohibited act or omission (actus reus), and there must be a particular mental state behind it (mens rea), like intention, knowledge, or recklessness. If you push someone and they fall, that is an act. Whether it is assault, culpable homicide, or just an accident depends on what was going on in your head. The Indian Penal Code (now Bharatiya Nyaya Sanhita) bakes this into most offences by using words like \"intentionally\", \"knowingly\", or \"voluntarily\". A few offences are strict liability (food safety, certain regulatory crimes) where intent does not matter, but those are the exception.",
   generic: "If a kid breaks a vase, the parent asks two questions. Did you break it? And did you mean to? The law mostly asks the same two questions before it punishes.",
   expert: "Latin maxim: actus non facit reum nisi mens sit rea. See BNS 2023 (formerly IPC) sections that explicitly require intention or knowledge, and Indian SC discussion in cases like State of Maharashtra v. M.H. George (1965) on strict liability exceptions. From 1 July 2024, India's IPC, CrPC, and Indian Evidence Act were replaced by the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA), though pending pre-2024 matters continue to be tried under the colonial-era codes.",
   status: "settled",
   reflect: "Think of a recent dispute you read about. Which part is the act, and which part is the mental state being argued about?",
   conceptQuiz: [
    {
     q: "For most Indian criminal offences, conviction needs which combination?",
     options: [
      { text: "A prohibited act together with the required mental state.", correct: true },
      { text: "Only a prohibited act, regardless of intent.", misconception: "True only for strict-liability offences, which are exceptional." },
      { text: "Only a guilty thought, even without action.", misconception: "Thought alone is not punished without an act or attempt." },
      { text: "A motive plus a confession.", misconception: "Motive helps prove intent but is not itself a required element." }
     ],
     why: "Standard criminal liability needs actus reus and mens rea together. Strict-liability offences are a narrow exception."
    },
    {
     q: "Which scenario is most likely to be charged as culpable homicide rather than a simple accident?",
     options: [
      { text: "A driver who swerves to avoid a child and accidentally hits a wall.", misconception: "No intention or knowledge of likely death. Closer to accident." },
      { text: "A person who fires a gun into a crowded market knowing people are likely to die.", correct: true },
      { text: "A doctor whose patient dies despite standard care.", misconception: "Without negligence or knowledge of likely death, this is not culpable homicide." },
      { text: "A pedestrian who slips and knocks someone over.", misconception: "No requisite mental state, this is an accident." }
     ],
     why: "Firing into a crowd shows the knowledge that death is likely, satisfying the mens rea for culpable homicide."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the two ingredients", d: "Pick any crime in the news. Write one sentence each on the act and the alleged mental state.", xp: 10 },
    { level: "easy",     t: "IPC vs BNS word hunt",     d: "Find three sections in the BNS that use the words intentionally, knowingly, or voluntarily. Note what changes if you remove that word.", xp: 20 },
    { level: "advanced", t: "Strict liability survey",  d: "List three Indian strict-liability offences (food safety, environmental, or motor laws). Explain why society accepts no-intent punishment there.", xp: 40 }
   ]
  },
  {
   t: "Precedent and stare decisis",
   subdomain: "foundations",
   definition: "Courts generally follow the reasoned decisions of higher courts in similar cases, so that law stays predictable.",
   short: "What the bigger court already decided binds the smaller court in similar facts.",
   deep: "In India, Article 141 of the Constitution says the law declared by the Supreme Court is binding on all courts within India. High Court decisions bind subordinate courts in their state. The doctrine is called stare decisis, Latin for \"let the decision stand\". The binding part is the ratio decidendi, the reasoning the case actually turned on, not every sentence the judge wrote. Other remarks (obiter dicta) are persuasive but not binding. Precedent gives the system predictability. Without it, every traffic ticket could be re-argued from first principles. With it, lawyers can advise clients with reasonable confidence about what a court will probably do.",
   generic: "If your older sibling already got grounded for sneaking out, you have a pretty good idea what happens if you try the same thing. Courts work the same way.",
   expert: "Article 141, Constitution of India. See Bengal Immunity v. State of Bihar (1955) on the Supreme Court's own power to depart from precedent, and Kesavananda Bharati (1973) for an example of a binding constitutional ratio. Pre-2024 criminal precedents under the IPC, CrPC, and Indian Evidence Act continue to govern pending cases, while matters initiated on or after 1 July 2024 are read alongside the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA).",
   status: "settled",
   reflect: "When you read about a Supreme Court judgment, do you try to identify the ratio, or do you treat the whole judgment as equally binding?",
   conceptQuiz: [
    {
     q: "Under Article 141, Supreme Court of India decisions are binding on…",
     options: [
      { text: "All courts within the territory of India.", correct: true },
      { text: "Only High Courts, not lower courts.", misconception: "Article 141 binds all courts, not just High Courts." },
      { text: "Only the parties to the case.", misconception: "Res judicata binds parties. Precedent binds future courts too." },
      { text: "Only courts that agree with the reasoning.", misconception: "Binding precedent does not depend on agreement." }
     ],
     why: "Article 141 makes Supreme Court law binding on every court in India."
    },
    {
     q: "Which part of a judgment is strictly binding as precedent?",
     options: [
      { text: "Every line the judge wrote.", misconception: "Many remarks are obiter, persuasive but not binding." },
      { text: "The ratio decidendi, the legal principle the case actually turned on.", correct: true },
      { text: "The headnote written by the reporter.", misconception: "Headnotes are editorial summaries, not law." },
      { text: "The dissenting opinion.", misconception: "Dissents are influential but not binding precedent." }
     ],
     why: "Only the ratio decidendi binds future courts. Obiter dicta are persuasive at best."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the ratio",         d: "Read a one-page summary of any Supreme Court judgment on SCObserver. Write the ratio in one sentence.", xp: 10 },
    { level: "easy",     t: "Trace a line of cases",  d: "Pick a doctrine like the right to privacy. List the three or four cases that built it up, in order.", xp: 20 },
    { level: "advanced", t: "Overruling exercise",    d: "Find one case where the Indian Supreme Court overruled an earlier decision. Explain why the court felt free to depart from precedent.", xp: 40 }
   ]
  },
  {
   t: "Public interest litigation (PIL)",
   subdomain: "rights",
   definition: "A relaxed-locus-standi route in Indian higher courts where any public-spirited person can move the court on behalf of those who cannot approach it themselves.",
   short: "Anyone with a clean motive can knock on the High Court or Supreme Court door for someone else.",
   deep: "PIL is a uniquely Indian innovation that grew in the late 1970s and 1980s under judges like P.N. Bhagwati and V.R. Krishna Iyer. Normally, only an affected person can move a court. In a PIL, the Supreme Court or a High Court relaxes this rule and lets a citizen, journalist, or NGO petition on behalf of prisoners, bonded labourers, slum dwellers, or anyone whose fundamental rights are at risk and who cannot reach the court themselves. PILs have led to landmark outcomes on environmental pollution (M.C. Mehta), sexual harassment at the workplace (Vishaka), and prison reforms (Hussainara Khatoon). The flip side is misuse, frivolous or political PILs that clog dockets, which is why courts now screen them and sometimes impose costs on abusers.",
   generic: "Imagine a neighbourhood watch member calling the municipal office because an elderly woman down the road cannot climb the stairs herself. The complainant is not personally hurt, but is allowed to speak up. PIL is that, in court form.",
   expert: "Article 32 and Article 226 of the Constitution of India. See S.P. Gupta v. Union of India (1981) for the locus standi relaxation, and Bandhua Mukti Morcha v. Union of India (1984). Modern guidelines on filtering frivolous PILs come from State of Uttaranchal v. Balwant Singh Chaufal (2010).",
   status: "framework",
   reflect: "If you noticed a clear constitutional wrong affecting people who cannot speak for themselves, would you know which court to approach and under which article?",
   conceptQuiz: [
    {
     q: "Which constitutional articles are the main route for PIL in India?",
     options: [
      { text: "Articles 32 and 226.", correct: true },
      { text: "Articles 14 and 19 only.", misconception: "These are substantive rights, not the procedural route to the court." },
      { text: "Article 21 alone.", misconception: "Article 21 is often the right enforced, but PIL is filed under 32 or 226." },
      { text: "Article 370.", misconception: "Unrelated to PIL jurisdiction." }
     ],
     why: "Article 32 lets a citizen approach the Supreme Court directly, and Article 226 lets one approach a High Court. PILs use these writ jurisdictions."
    },
    {
     q: "Which case is widely credited with formally relaxing locus standi for PIL in India?",
     options: [
      { text: "S.P. Gupta v. Union of India (1981).", correct: true },
      { text: "Kesavananda Bharati (1973).", misconception: "Important for basic-structure doctrine, not PIL locus standi." },
      { text: "ADM Jabalpur (1976).", misconception: "Habeas corpus during Emergency, not PIL standing." },
      { text: "Maneka Gandhi (1978).", misconception: "Expanded Article 21 due process, not PIL standing as such." }
     ],
     why: "S.P. Gupta explicitly allowed any member of the public acting bona fide to move the court for those unable to do so."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Read one PIL summary",     d: "Open SCObserver or LiveLaw and read a one-page summary of any landmark PIL. Write one sentence on who filed it and what changed.", xp: 10 },
    { level: "easy",     t: "Compare 32 vs 226",        d: "List two differences between approaching the Supreme Court under Article 32 and a High Court under Article 226 for a PIL.", xp: 20 },
    { level: "advanced", t: "Draft a mock PIL outline", d: "Pick a real local issue, say polluted lake or unsafe school. Outline a PIL with prayer, affected class, fundamental right invoked, and respondents. Two pages.", xp: 40 }
   ]
  },
  {
   t: "Natural justice",
   subdomain: "rights",
   definition: "Two minimum procedural duties on any authority taking a decision against you, hear the other side, and do not be a judge in your own cause.",
   short: "Before they punish you, they must hear you out, and the person deciding must not be the person you fought with.",
   deep: "Natural justice is the unwritten common-law backbone behind a lot of Indian administrative law. The first rule, audi alteram partem, says no one should be condemned unheard, you must be told the charge, given the evidence, and given a fair chance to respond. The second, nemo judex in causa sua, says the decision-maker must not have a personal interest or bias. Even in disciplinary proceedings at a workplace, a college expulsion, a tax show-cause notice, or an order under a regulatory statute, courts will quash decisions that violated these rules. Maneka Gandhi v. Union of India (1978) folded natural justice into Article 21, meaning a procedure depriving someone of life or liberty must also be fair and reasonable, not just on the books.",
   generic: "Imagine a school principal expelling a student without ever asking the student what happened, and the principal happens to be the parent of the student who complained. Both rules of natural justice are broken at once.",
   expert: "Common law principles audi alteram partem and nemo judex in causa sua. See A.K. Kraipak v. Union of India (1969) extending natural justice to administrative actions, and Maneka Gandhi v. Union of India (1978) tying procedural fairness to Article 21.",
   status: "settled",
   reflect: "Think of the last time an authority, employer, college, bank, took a decision against you. Were you given notice, evidence, and a real hearing, or was it presented as a done deal?",
   conceptQuiz: [
    {
     q: "Which Latin maxim captures the rule against bias in decision-making?",
     options: [
      { text: "Nemo judex in causa sua.", correct: true },
      { text: "Audi alteram partem.", misconception: "That is the right to be heard, the other limb of natural justice." },
      { text: "Res ipsa loquitur.", misconception: "A negligence inference rule, unrelated to natural justice." },
      { text: "Stare decisis.", misconception: "Precedent doctrine, not bias." }
     ],
     why: "Nemo judex in causa sua, no one shall be a judge in their own cause, is the rule against bias."
    },
    {
     q: "Which Indian case tied procedural fairness under natural justice to Article 21 of the Constitution?",
     options: [
      { text: "Maneka Gandhi v. Union of India (1978).", correct: true },
      { text: "Kesavananda Bharati (1973).", misconception: "That case is about basic structure of the Constitution." },
      { text: "Vishaka v. State of Rajasthan (1997).", misconception: "Laid down sexual harassment guidelines, not procedural fairness under Article 21 directly." },
      { text: "Indra Sawhney (1992).", misconception: "Concerned reservations, not procedural fairness under Article 21." }
     ],
     why: "Maneka Gandhi read fair procedure into the phrase procedure established by law in Article 21, embedding natural justice."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the missing limb",     d: "Recall any disciplinary decision you have heard about. Note whether notice, hearing, and an unbiased decider were all present.", xp: 10 },
    { level: "easy",     t: "Show-cause anatomy",        d: "Find a sample show-cause notice online. Mark which elements satisfy audi alteram partem, charge, evidence, time to reply.", xp: 20 },
    { level: "advanced", t: "Draft a reply",             d: "Take a hypothetical office disciplinary notice. Draft a one-page reply that flags any natural justice violation and requests a fair re-hearing.", xp: 40 }
   ]
  },
  {
   t: "Basic structure doctrine",
   subdomain: "rights",
   definition: "An Indian Supreme Court doctrine that Parliament's amending power under Article 368 cannot alter the essential or core features of the Constitution.",
   short: "Parliament can amend the Constitution, but it cannot rewrite its soul.",
   deep: "In Kesavananda Bharati v. State of Kerala (1973), a 13-judge bench of the Supreme Court held by a 7-6 majority that while Parliament has wide power to amend the Constitution, it cannot damage its basic structure. The court never gave a closed list, but over time features like the supremacy of the Constitution, the rule of law, separation of powers, judicial review, federalism, secularism, and free and fair elections have been recognised as part of it. The doctrine has been used to strike down constitutional amendments, including parts of the 39th and 42nd Amendments, and was reaffirmed in Minerva Mills (1980) and Indira Nehru Gandhi v. Raj Narain (1975). Critics call it judicial overreach; defenders call it the last line of defence against majoritarian capture of the Constitution itself.",
   generic: "Imagine a club where the members can change the rules by vote, but they can never vote to abolish the club itself or to make one member dictator. That last protected core is the basic structure.",
   expert: "Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225. See also Indira Nehru Gandhi v. Raj Narain (1975), Minerva Mills v. Union of India (1980), and I.R. Coelho v. State of Tamil Nadu (2007), which extended basic structure review to laws placed in the Ninth Schedule after 1973.",
   status: "framework",
   reflect: "If a future Parliament passed an amendment that ended judicial review, would you want a court to be able to strike it down? Your answer reveals what you think of the basic structure doctrine.",
   conceptQuiz: [
    {
     q: "Which case is the foundational authority for the basic structure doctrine in India?",
     options: [
      { text: "Kesavananda Bharati v. State of Kerala (1973).", correct: true },
      { text: "Golaknath v. State of Punjab (1967).", misconception: "Golaknath restricted amendment of fundamental rights but was overruled on that point by Kesavananda." },
      { text: "ADM Jabalpur (1976).", misconception: "Habeas corpus during Emergency, not basic structure." },
      { text: "Shankari Prasad (1951).", misconception: "Held amendments could touch fundamental rights, the opposite stance." }
     ],
     why: "Kesavananda Bharati first articulated that Parliament's amending power has implied limits, the basic structure of the Constitution."
    },
    {
     q: "Which of the following has the Supreme Court recognised as part of the basic structure?",
     options: [
      { text: "Judicial review and the rule of law.", correct: true },
      { text: "Any provision Parliament chooses to label essential.", misconception: "Parliament does not get to define basic structure, the judiciary identifies it case by case." },
      { text: "Only the Preamble, nothing else.", misconception: "The Preamble is one source, not the whole content." },
      { text: "Only directive principles.", misconception: "Directive principles are not enforceable and are not, on their own, basic structure." }
     ],
     why: "Across Kesavananda, Indira Nehru Gandhi, Minerva Mills, and later cases, the court repeatedly recognised judicial review and the rule of law as core features."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "List the core features", d: "Write down five features the Supreme Court has explicitly recognised as part of the basic structure. Cite one case for each.", xp: 10 },
    { level: "easy",     t: "Read a summary",         d: "Read SCObserver's one-page summary of Kesavananda Bharati. Note the bench size, the split, and the key holding.", xp: 20 },
    { level: "advanced", t: "Stress-test the doctrine", d: "Pick one critique of basic structure (counter-majoritarian, vague, judge-made). Write a two-page response defending or attacking the doctrine on its own terms.", xp: 40 }
   ],
   diagram: {
    kind: "tree",
    title: "Basic features recognised by the Supreme Court",
    caption: "Parliament can amend the Constitution but cannot abrogate its basic structure. The Court has, case by case, populated what that core includes.",
    data: {
     root: "Basic Structure",
     children: [
      { label: "Supremacy of Constitution" },
      { label: "Rule of law" },
      { label: "Judicial review" },
      { label: "Separation of powers" },
      { label: "Federalism" },
      { label: "Secularism" },
      { label: "Free and fair elections" }
     ]
    }
   }
  },
  {
   t: "Alternative dispute resolution (ADR)",
   subdomain: "practical",
   fullForm: "Alternative Dispute Resolution",
   definition: "A set of out-of-court mechanisms, mainly arbitration, mediation, and conciliation, used to resolve civil and commercial disputes without going through a full trial.",
   short: "Settle outside court. Faster, cheaper, often quieter.",
   deep: "Indian courts are famously congested, with millions of cases pending. ADR is the parallel track: arbitration, where parties pick a private adjudicator whose award is enforceable like a court decree; mediation, where a neutral helps both sides negotiate a settlement; and conciliation, a softer cousin of mediation governed by statute. The Arbitration and Conciliation Act, 1996 (amended in 2015, 2019, and 2021) is the backbone of arbitration in India, and the Mediation Act, 2023 now gives mediated settlements direct enforceability. Most modern commercial contracts include an arbitration clause. The trade-offs are real, faster and more confidential than litigation, but limited appeals, costly arbitrators in international matters, and sometimes weaker discovery. Knowing what your contract says about ADR before a dispute breaks out is one of the highest-leverage legal habits.",
   generic: "Two neighbours arguing over a leaking pipe could either go to court for a year or sit down with a respected third neighbour for an afternoon and split the cost of the plumber. ADR is the second option, made formal.",
   expert: "Arbitration and Conciliation Act 1996; Mediation Act 2023; Section 89 of the CPC 1908 on court-annexed ADR. Key cases include Bharat Aluminium v. Kaiser Aluminium (2012) on seat versus venue, and Vidya Drolia v. Durga Trading (2020) on arbitrability. New Delhi International Arbitration Centre and Mumbai Centre for International Arbitration are domestic institutional venues; SIAC and LCIA are common offshore picks for cross-border contracts.",
   status: "framework",
   reflect: "Pull up the last commercial contract you signed. Does it have an arbitration clause? Do you know the seat, the rules, and the language of arbitration it specifies?",
   conceptQuiz: [
    {
     q: "Which Indian statute is the primary framework for arbitration?",
     options: [
      { text: "Arbitration and Conciliation Act, 1996.", correct: true },
      { text: "Civil Procedure Code, 1908 alone.", misconception: "CPC section 89 references ADR but is not the primary arbitration statute." },
      { text: "Indian Contract Act, 1872.", misconception: "Governs contracts generally, not the arbitration process." },
      { text: "Specific Relief Act, 1963.", misconception: "Concerns remedies for specific performance, not arbitration procedure." }
     ],
     why: "The 1996 Act, amended several times, is the statutory backbone of Indian arbitration and conciliation."
    },
    {
     q: "Which is a real trade-off of choosing arbitration over court litigation?",
     options: [
      { text: "Faster, more private, but with very limited grounds for appeal of the award.", correct: true },
      { text: "Always cheaper in every case.", misconception: "Institutional and international arbitration can be expensive, sometimes more than litigation." },
      { text: "Awards are not enforceable without filing a fresh suit.", misconception: "Domestic awards are enforceable like a decree under section 36 of the 1996 Act." },
      { text: "Arbitration cannot be used for commercial disputes in India.", misconception: "Commercial disputes are precisely the most common arbitration matter." }
     ],
     why: "Speed and confidentiality are real, but appellate review of arbitral awards is narrow under sections 34 and 37."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find the clause",          d: "Pull any commercial contract you have signed. Locate and read the dispute resolution clause. Note seat, rules, and language.", xp: 10 },
    { level: "easy",     t: "Compare three options",    d: "In a one-page table, compare litigation, arbitration, and mediation on cost, speed, confidentiality, and enforceability for an Indian commercial dispute.", xp: 20 },
    { level: "advanced", t: "Draft an arbitration clause", d: "Draft a clean, two-paragraph arbitration clause for a hypothetical SaaS contract between an Indian seller and a Singapore buyer. Specify seat, rules, and number of arbitrators.", xp: 40 }
   ],
   diagram: {
    kind: "flow",
    title: "Escalation ladder of dispute resolution",
    caption: "Most commercial contracts walk up this ladder. Each rung trades a little informality for a little more binding power.",
    data: {
     steps: ["Direct negotiation", "Mediation / conciliation", "Arbitration", "Court litigation", "Appeal"]
    }
   }
  },
  {
   t: "Right to Information (RTI)",
   subdomain: "rights",
   fullForm: "Right to Information",
   definition: "A statutory right enabling any Indian citizen to request information held by public authorities and to receive a reply within a fixed time, subject to narrow exemptions.",
   short: "You can ask the government for its own records, on paper, and it has to answer.",
   deep: "The Right to Information Act, 2005 gives every citizen a low-cost route to records held by central, state, and local authorities, including most bodies substantially funded by the government. You file a short application, pay a nominal fee, and the public information officer must respond within thirty days, or forty-eight hours if life and liberty are at stake. Exemptions exist for national security, cabinet papers, and certain personal information, but they are narrowly drawn and reviewable by Information Commissions. RTI has been used to expose ration shop diversions, audit MGNREGA wages, and surface conflicts of interest. The Digital Personal Data Protection Act 2023 narrowed the personal-information exemption, a change that civil society organisations have criticised. RTI is one of the most direct citizen tools the Indian system offers, and most people never use it.",
   generic: "Imagine your housing society had to show you the books any time you asked, with only a few clearly listed secrets. RTI is that, applied to most of the Indian state.",
   expert: "Right to Information Act 2005. See section 4 on proactive disclosure, section 6 on filing, section 8 on exemptions, and section 19 on appeals. Notable cases include CBSE v. Aditya Bandopadhyay (2011) on exam evaluation records and Subhash Chandra Agarwal v. CPIO Supreme Court (2019) bringing the office of the Chief Justice within RTI. The 2023 DPDP Act amended section 8(1)(j) to expand the personal-information exemption.",
   status: "settled",
   reflect: "Is there a specific public decision, road project, school admission list, hospital budget, where an RTI from you might actually shift something? If yes, why have you not filed it?",
   conceptQuiz: [
    {
     q: "Under the RTI Act, the default time limit for a public authority to respond is:",
     options: [
      { text: "30 days from receipt of the request.", correct: true },
      { text: "90 days.", misconception: "Too long. The Act is deliberately tight on time." },
      { text: "1 year.", misconception: "Would defeat the point of the Act." },
      { text: "No fixed limit.", misconception: "The Act sets explicit timelines including 48 hours where life or liberty is at stake." }
     ],
     why: "Section 7 of the RTI Act sets the standard 30-day window, with a 48-hour rule for life-and-liberty matters."
    },
    {
     q: "Which body hears second appeals under the RTI Act?",
     options: [
      { text: "The Central or State Information Commission.", correct: true },
      { text: "The High Court directly.", misconception: "High Courts can hear writ petitions later, but second appeals lie with the Information Commission." },
      { text: "The Supreme Court of India.", misconception: "Not the first port of call for an RTI appeal." },
      { text: "The Prime Minister's Office.", misconception: "The executive does not hear RTI appeals." }
     ],
     why: "Section 19 routes first appeals within the public authority and second appeals to the Central or State Information Commission."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find a PIO",            d: "Identify the public information officer of any one government department in your city. Note their address and the application format.", xp: 10 },
    { level: "easy",     t: "File one RTI",          d: "File a small RTI on a public matter, road repair status, school enrolment data, a local budget head. Track the response.", xp: 20 },
    { level: "advanced", t: "Use the data",          d: "Take an RTI response, your own or a published one, and write a 500-word note that connects the data to a real public outcome.", xp: 40 }
   ]
  },
  {
   t: "Standard of proof, criminal vs civil",
   subdomain: "foundations",
   definition: "Criminal cases require proof beyond reasonable doubt, while civil cases require proof on the balance of probabilities.",
   short: "Criminal needs near certainty. Civil needs more likely than not.",
   deep: "Indian criminal law inherits the common law standard that the prosecution must prove every element of the offence beyond reasonable doubt. This is a deliberately high bar because the consequence is loss of liberty. The accused need not prove innocence. In civil cases such as a contract dispute or a tort claim, the plaintiff only needs to show that their version is more probable than not, often called preponderance of probabilities. So the same set of facts can lose a murder trial yet win a wrongful death civil suit, as happened with O.J. Simpson in the United States. In India, the Bharatiya Sakshya Adhiniyam 2023 carries forward these distinct standards from the old Evidence Act 1872.",
   generic: "If a friend is accused of stealing your phone, you would demand near certainty before calling them a thief in public, but you might still ask them to pay for a replacement if it seems likely they took it.",
   expert: "See Woolmington v. DPP (1935) for the golden thread of criminal proof, and Indian SC in Vijayee Singh v. State of UP (1990). Civil standard cited in Dhanvantrai v. State of Maharashtra. The Bharatiya Sakshya Adhiniyam 2023 sections 101 to 114 carry forward burden rules from Evidence Act 1872 sections 101 to 114.",
   status: "settled",
   reflect: "Pick a famous acquittal. Was the failure to convict really evidence of innocence, or just the high criminal standard doing its job?",
   conceptQuiz: [
    {
     q: "In an Indian criminal trial, who bears the burden of proof and to what standard?",
     options: [
      { text: "Prosecution, beyond reasonable doubt.", correct: true },
      { text: "Accused, on the balance of probabilities.", misconception: "Accused does not have to prove innocence in a normal criminal trial." },
      { text: "Prosecution, on the balance of probabilities.", misconception: "That is the civil standard, not the criminal one." },
      { text: "Judge, by independent inquiry.", misconception: "Indian courts are adversarial, not inquisitorial." }
     ],
     why: "The state must prove every element of the crime beyond reasonable doubt."
    },
    {
     q: "Why can the same facts lose a murder trial but win a civil wrongful death suit?",
     options: [
      { text: "The standards of proof are different.", correct: true },
      { text: "Civil judges are biased toward plaintiffs.", misconception: "Not the legal reason. Standards differ by design." },
      { text: "Criminal courts ignore circumstantial evidence.", misconception: "They consider it but weigh it under a stricter standard." },
      { text: "Civil cases need no evidence at all.", misconception: "They need evidence, just to a lower standard." }
     ],
     why: "Beyond reasonable doubt is a much higher bar than balance of probabilities."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the standard",     d: "Find one news report of an acquittal. Identify whether the court spoke of reasonable doubt or balance of probabilities.", xp: 10 },
    { level: "easy",     t: "Same facts, two trials", d: "Pick any high-profile case where both a criminal and a civil claim arose. Compare the outcomes and explain them by the standards.", xp: 20 },
    { level: "advanced", t: "Sakshya Adhiniyam map",  d: "Map five sections of the Bharatiya Sakshya Adhiniyam 2023 dealing with burden of proof against the corresponding sections of the Evidence Act 1872.", xp: 40 }
   ]
  },
  {
   t: "Digital Personal Data Protection Act 2023",
   subdomain: "rights",
   definition: "India's first dedicated personal data protection statute, regulating how digital personal data is collected, processed, stored, and shared.",
   short: "Consent, purpose limits, and a Data Protection Board for personal data in India.",
   deep: "The Digital Personal Data Protection Act 2023, often called DPDPA, fills a long gap in Indian privacy law after the Puttaswamy judgment recognised privacy as a fundamental right in 2017. The Act applies to digital personal data processed in India, and also to processing outside India if it relates to offering goods or services to Indians. The core duties on a Data Fiduciary include obtaining clear consent, processing only for the stated purpose, providing notice, allowing users to access, correct, and erase their data, and reporting breaches. Significant Data Fiduciaries face extra obligations such as appointing a Data Protection Officer. Enforcement sits with the Data Protection Board of India, with penalties up to two hundred and fifty crore rupees per instance. The Act draws on GDPR ideas but is lighter on data subject rights and gives wide carve-outs to the State.",
   generic: "If a shop wants your phone number to deliver a parcel, it should ask clearly, use it only for that delivery, and forget it afterwards. DPDPA tries to put that intuition into law for digital services.",
   expert: "Digital Personal Data Protection Act 2023, sections 4 to 11 on duties, sections 18 to 27 on the Board, schedule on penalties. See Justice K.S. Puttaswamy v. Union of India (2017) 10 SCC 1 for the constitutional grounding. Draft Rules issued in January 2025 detail consent managers and breach reporting timelines.",
   status: "debated",
   reflect: "Of the five most recent apps you installed, how many gave you a clear, plain-language notice of what data they collect and why?",
   conceptQuiz: [
    {
     q: "Which body is the primary enforcement authority under the DPDPA 2023?",
     options: [
      { text: "Data Protection Board of India.", correct: true },
      { text: "Reserve Bank of India.", misconception: "RBI handles banking data, not the general DPDPA regime." },
      { text: "Ministry of Home Affairs.", misconception: "Not the enforcement body for DPDPA." },
      { text: "Competition Commission of India.", misconception: "CCI handles antitrust, not data protection." }
     ],
     why: "The DPDPA creates a dedicated Data Protection Board with adjudicatory powers."
    },
    {
     q: "What is the maximum penalty for a serious breach under DPDPA 2023?",
     options: [
      { text: "Up to 250 crore rupees per instance.", correct: true },
      { text: "Up to 1 lakh rupees only.", misconception: "Penalties under DPDPA are far higher than that." },
      { text: "Only criminal imprisonment, no fines.", misconception: "DPDPA penalties are civil monetary penalties." },
      { text: "Tied to GDPR fines automatically.", misconception: "DPDPA penalties are set domestically." }
     ],
     why: "The schedule sets a ceiling of 250 crore rupees per instance for major contraventions."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Read a privacy notice", d: "Pick one Indian app and read its privacy notice. Identify the data fiduciary, purposes, and your rights as listed.", xp: 10 },
    { level: "easy",     t: "Compare with GDPR",     d: "Write a one-page note comparing three DPDPA duties with their GDPR equivalents. Note where DPDPA is lighter.", xp: 20 },
    { level: "advanced", t: "Draft a DPIA outline",  d: "Draft a one-page Data Protection Impact Assessment for a fictional Indian fintech app. Cover lawful basis, risks, and mitigations.", xp: 40 }
   ]
  },
  {
   t: "Writ jurisdiction, Article 32 vs Article 226",
   subdomain: "rights",
   definition: "Article 32 lets a person move the Supreme Court directly to enforce fundamental rights, while Article 226 lets one move a High Court for fundamental and other legal rights.",
   short: "Article 32 is narrow but powerful. Article 226 is wider and closer to home.",
   deep: "The Constitution gives Indian courts five classic writs borrowed from English law, habeas corpus, mandamus, prohibition, certiorari, and quo warranto. Article 32 itself is a fundamental right, called the heart and soul of the Constitution by Ambedkar, but it can be invoked only for the enforcement of fundamental rights. Article 226 is broader, a High Court can issue writs for fundamental rights and for any other legal right, against any authority within its territorial jurisdiction. In practice, most writ litigation begins in the High Courts because of geography, faster listing, and the wider scope. The Supreme Court has occasionally cautioned against bypassing the High Court route under Article 226 to land directly in the Supreme Court under Article 32.",
   generic: "Think of two complaint windows in a government office. One is small and only handles a few kinds of complaints but the decision is final. The other handles many kinds and is closer to your house. Most people use the second window first.",
   expert: "Articles 32 and 226 of the Constitution of India. See Romesh Thappar v. State of Madras (1950) on Article 32, Bandhua Mukti Morcha (1984) on PIL within Article 32, and ABL International v. Export Credit Guarantee Corporation (2004) on the contractual scope of Article 226.",
   status: "settled",
   reflect: "If a state authority is violating both a fundamental right and a contractual right, which writ jurisdiction is the smarter first stop?",
   conceptQuiz: [
    {
     q: "Article 32 can be invoked for the enforcement of which rights?",
     options: [
      { text: "Only fundamental rights in Part III of the Constitution.", correct: true },
      { text: "Any legal right, including contractual rights.", misconception: "That is the scope of Article 226, not Article 32." },
      { text: "Only statutory rights under central laws.", misconception: "Article 32 is tied to fundamental rights, not all statutes." },
      { text: "Only rights against the Union government.", misconception: "It applies against any state action infringing fundamental rights." }
     ],
     why: "Article 32 is itself a fundamental right limited to enforcement of Part III rights."
    },
    {
     q: "A key difference between Article 32 and Article 226 is that Article 226…",
     options: [
      { text: "Covers both fundamental and other legal rights and is exercised by High Courts.", correct: true },
      { text: "Is exercised only by the Supreme Court.", misconception: "Article 226 is High Court jurisdiction." },
      { text: "Is narrower than Article 32.", misconception: "Article 226 is broader, not narrower." },
      { text: "Cannot issue writs of habeas corpus.", misconception: "Article 226 covers all five writs." }
     ],
     why: "Article 226 is wider in scope and is exercised by the High Courts."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Name the five writs", d: "Write a one-line description of each of the five writs and one Indian case where it was issued.", xp: 10 },
    { level: "easy",     t: "Pick the right court", d: "Take three hypothetical fact patterns. For each, decide whether Article 32 or Article 226 is the better first stop and why.", xp: 20 },
    { level: "advanced", t: "Track a writ journey", d: "Read one recent High Court writ that travelled to the Supreme Court. Summarise how the relief changed across the two courts.", xp: 40 }
   ]
  },
  {
   t: "Anticipatory bail under BNSS",
   subdomain: "practical",
   definition: "A pre-arrest direction by a Court of Session or High Court that an accused be released on bail if arrested for a non-bailable offence.",
   short: "Bail you can get before the police come knocking.",
   deep: "Anticipatory bail is now contained in section 482 of the Bharatiya Nagarik Suraksha Sanhita 2023, which replaced section 438 of the Code of Criminal Procedure 1973 from 1 July 2024. A person who fears arrest on accusation of a non-bailable offence may apply to the Court of Session or the High Court for a direction that, in the event of arrest, they be released on bail. The court considers the nature and gravity of the accusation, the applicant's antecedents, the likelihood of fleeing, and whether the accusation appears to be aimed at injuring or humiliating the applicant. The Supreme Court in Sushila Aggarwal v. State (NCT of Delhi) 2020 clarified that anticipatory bail need not be of a fixed duration and can in appropriate cases continue till the end of trial. Police often demand cooperation with investigation as a condition.",
   generic: "If you are reasonably sure someone will file a complaint to embarrass you, you can ask a court in advance for a promise that you will not be locked up while the truth is being sorted out.",
   expert: "Section 482, Bharatiya Nagarik Suraksha Sanhita 2023 (earlier section 438 CrPC 1973). See Gurbaksh Singh Sibbia v. State of Punjab (1980) for foundational principles and Sushila Aggarwal v. State (NCT of Delhi) (2020) 5 SCC 1 for duration. The Mukesh Singh v. State (NCT of Delhi) 2020 line continues to govern conditions.",
   status: "debated",
   reflect: "If a relative said they expect a false FIR over a property dispute, would you know which court to approach and under which section today?",
   conceptQuiz: [
    {
     q: "Anticipatory bail in India is currently governed by which provision?",
     options: [
      { text: "Section 482 of the Bharatiya Nagarik Suraksha Sanhita 2023.", correct: true },
      { text: "Section 438 of the CrPC 1973, still in force as the only provision.", misconception: "CrPC was repealed for new matters from 1 July 2024 by BNSS." },
      { text: "Section 41A of the CrPC only.", misconception: "Section 41A deals with notice of appearance, not anticipatory bail." },
      { text: "Article 22 of the Constitution.", misconception: "Article 22 deals with arrest safeguards, not anticipatory bail." }
     ],
     why: "BNSS section 482 has replaced CrPC section 438 for matters initiated from 1 July 2024."
    },
    {
     q: "Per Sushila Aggarwal (2020), an order of anticipatory bail…",
     options: [
      { text: "Need not be limited to a fixed period and can continue till end of trial.", correct: true },
      { text: "Must always lapse at the filing of charge-sheet.", misconception: "The Constitution Bench expressly held otherwise." },
      { text: "Can never include conditions of cooperation with investigation.", misconception: "Such conditions are routinely imposed." },
      { text: "Is only available from the Supreme Court.", misconception: "It is available from the Sessions Court or High Court." }
     ],
     why: "The Constitution Bench held that an anticipatory bail order can ordinarily extend till conclusion of trial."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "BNSS vs CrPC numbers", d: "List the BNSS section numbers that correspond to CrPC 437, 438, and 439. Note any drafting changes.", xp: 10 },
    { level: "easy",     t: "Read Sibbia",          d: "Read a summary of Gurbaksh Singh Sibbia (1980). Note the five guiding principles for anticipatory bail.", xp: 20 },
    { level: "advanced", t: "Draft an application", d: "Draft a one-page anticipatory bail application for a fictional false 420 BNS case. Include facts, grounds, and proposed conditions.", xp: 40 }
   ]
  },
  {
   t: "Insolvency and Bankruptcy Code 2016",
   subdomain: "contracts",
   definition: "A unified Indian law for time-bound resolution or liquidation of insolvent companies, partnerships, and individuals.",
   short: "One framework, a strict clock, and a creditor-led committee that decides the fate of a stressed business.",
   deep: "The Insolvency and Bankruptcy Code 2016, called the IBC, consolidated a tangle of older laws like SICA and Section 22 of the Companies Act into a single time-bound process. When a corporate debtor defaults beyond one crore rupees, a financial creditor, operational creditor, or the debtor itself can approach the National Company Law Tribunal. If admitted, an interim resolution professional takes control, a Committee of Creditors is formed, and a resolution plan must be approved within 330 days, failing which liquidation follows. The Supreme Court in Swiss Ribbons v. Union of India (2019) upheld the Code as a paradigm shift from debtor-in-possession to creditor-in-control. Recovery rates have improved compared to the pre-IBC era, though delays in resolution timelines and haircuts on operational creditors remain hot debates.",
   generic: "If a shop owner cannot pay her suppliers, the IBC is like a court appointed referee who freezes the shop, calls all the lenders into a room, and forces a fast decision: either someone takes over the shop with a clear plan, or the shop is sold off and the money is distributed by rank.",
   expert: "Insolvency and Bankruptcy Code 2016, sections 7, 9, 10 for triggers, section 30 for resolution plans, section 53 for waterfall. See Swiss Ribbons v. Union of India (2019) 4 SCC 17 and Essar Steel India Limited (2020) 8 SCC 531 on creditor primacy.",
   status: "debated",
   reflect: "If a mid-size company in your city was admitted to CIRP today, who in the value chain would lose the most and why?",
   conceptQuiz: [
    {
     q: "Under the IBC, who controls the corporate debtor once a CIRP is admitted?",
     options: [
      { text: "An insolvency professional acting under the Committee of Creditors.", correct: true },
      { text: "The existing promoters continue in full control.", misconception: "IBC is creditor-in-control, not debtor-in-possession." },
      { text: "The Registrar of Companies.", misconception: "RoC has no operational control during CIRP." },
      { text: "The Reserve Bank of India.", misconception: "RBI regulates banks, not CIRPs." }
     ],
     why: "Once admitted, an IP runs the company under the supervision of the CoC."
    },
    {
     q: "What is the outer time limit for completion of CIRP including extensions and litigation?",
     options: [
      { text: "330 days.", correct: true },
      { text: "90 days.", misconception: "Far shorter than the actual ceiling." },
      { text: "Five years.", misconception: "Much longer than the IBC contemplates." },
      { text: "No time limit.", misconception: "The Code is explicitly time-bound." }
     ],
     why: "Section 12 sets the outer limit at 330 days including litigation."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Trigger thresholds",   d: "Note the current minimum default thresholds for financial and operational creditors to file under sections 7 and 9.", xp: 10 },
    { level: "easy",     t: "Walk the waterfall",   d: "Draw the section 53 liquidation waterfall on one page. Mark where workers, secured creditors, and the government sit.", xp: 20 },
    { level: "advanced", t: "Case study",           d: "Pick one resolved case such as Essar Steel or Bhushan Steel. Summarise the haircut, recovery, and timeline against the IBC's promise.", xp: 40 }
   ]
  },
  {
   t: "Lok Adalats and pre-litigation settlement",
   subdomain: "practical",
   definition: "Statutory people's courts under the Legal Services Authorities Act 1987 that settle pending or pre-litigation disputes through compromise with binding effect.",
   short: "A free, fast, no-appeal forum that converts a compromise into a court decree.",
   deep: "Lok Adalats are a uniquely Indian access-to-justice device. Constituted under the Legal Services Authorities Act 1987, they have the powers of a civil court for limited purposes and can take up matters either pending in a court or at the pre-litigation stage if parties consent. The award of a Lok Adalat is deemed a decree of a civil court and is final, no appeal lies against it. They are especially effective for bank recovery cases up to small amounts, motor accident claims, matrimonial disputes other than divorce, and utility bill disputes. National Lok Adalats are held quarterly and settle lakhs of cases in a single day. The trade-off is that the settlement must be acceptable to both sides, so coercion or imbalance in bargaining power can pass off as compromise.",
   generic: "Imagine the village panchayat plus a stamp from the civil court. You and the other side talk, agree to a number, and walk out with a binding paper, no judgment, no appeal, no second guessing.",
   expert: "Legal Services Authorities Act 1987, sections 19 to 22. See State of Punjab v. Jalour Singh (2008) on the scope of Lok Adalat jurisdiction, and NALSA circulars on pre-litigation Lok Adalats for bank dues.",
   status: "framework",
   reflect: "If you had a small consumer dispute under 25,000 rupees stuck for months, would a Lok Adalat actually save you time and money compared to a regular court?",
   conceptQuiz: [
    {
     q: "An award passed by a Lok Adalat is…",
     options: [
      { text: "Deemed a decree of a civil court and final, with no appeal.", correct: true },
      { text: "Open to appeal before the High Court within 30 days.", misconception: "No appeal lies under section 21 of the LSA Act." },
      { text: "A mere recommendation, not legally binding.", misconception: "It is statutorily binding once parties consent." },
      { text: "Binding only on private parties, not on government bodies.", misconception: "It binds both, once they have consented to the settlement." }
     ],
     why: "Section 21 of the Legal Services Authorities Act 1987 makes the award final."
    },
    {
     q: "Which type of matter is typically NOT suitable for Lok Adalat resolution?",
     options: [
      { text: "A serious non-compoundable criminal offence such as murder.", correct: true },
      { text: "A small bank loan recovery dispute.", misconception: "Routinely resolved in Lok Adalats." },
      { text: "A motor accident compensation claim.", misconception: "A staple of Lok Adalats." },
      { text: "A simple matrimonial maintenance dispute.", misconception: "Often resolved through Lok Adalats." }
     ],
     why: "Lok Adalats deal with compoundable and compromisable matters, not serious offences against the state."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find the next one",   d: "Look up the schedule of the next National Lok Adalat in your state on NALSA's website. Note the categories listed.", xp: 10 },
    { level: "easy",     t: "Mock settlement",     d: "Draft a one-page mock Lok Adalat settlement for a 50,000 rupee consumer dispute. Include the terms and signatures block.", xp: 20 },
    { level: "advanced", t: "Pros and cons memo",  d: "Write a 500-word memo evaluating Lok Adalats for credit card recovery. Cover speed, costs, fairness, and bargaining power concerns.", xp: 40 }
   ]
  }
 ],

 counterView: "Two honest critiques. (1) Law students are often taught that legal reasoning is more determinate than it is, in practice, judges have wide discretion, and outcomes depend heavily on which court, which judge, and what political environment. The 'realist' tradition (Holmes) names this; it's worth taking seriously. (2) The framing that 'everyone should know their rights' undersells how punishing it is to enforce them, knowing you have a right is different from being able to spend the time, money, and emotional energy to assert it. Especially in jurisdictions with slow courts (India's case backlog is famous), a lot of formally enforceable rights are de facto unenforceable for the average person.",

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
  { rank: "Expert",    focus: "Build a small trusted lawyer network",           do: "Find a property lawyer, an employment lawyer, and a tax-savvy CA you trust, before you need them. Have their numbers in your phone.",                                                                                                         milestone: "When something legal happens, you know who to call before the panic sets in.",                                           time: "~1 year+" },
  { rank: "Master",    focus: "Real advocacy or policy work",               do: "Engage in actual civic work, file an RTI, support public-interest litigation, work on a policy issue you care about. The system runs better when literate citizens engage.",                                                                                      milestone: "You've moved a real outcome, even small, for people beyond yourself.",                                              time: "~2+ years" },
  { rank: "Grandmaster", focus: "Shape structures, not just outcomes",            do: "Lead an NGO, a firm, or a reform effort that changes how the rules actually work in your area.",                                                                                                                             milestone: "Your work has changed structures, not just individual cases.",                                                   time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "India Code (government legal portal)",    what: "Free, official text of central + state laws.",                    url: "https://www.indiacode.nic.in/",                            weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "PRS Legislative Research",          what: "Free, non-partisan explainers on Indian bills + laws.",               url: "https://prsindia.org/",                                weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Supreme Court Observer (SCO)",        what: "Accessible reporting on Indian constitutional cases.",                url: "https://www.scobserver.in/",                             weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Cornell LII (US)",              what: "Free, comprehensive US legal reference.",                       url: "https://www.law.cornell.edu/",                            verify: false, lastVerified: "2026-06" },
   { name: "FindLaw (US, free articles)",         what: "Plain-English explanations of US legal topics.",                    url: "https://www.findlaw.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "Indian Kanoon, free case search",      what: "Searchable database of Indian court judgments.",                   url: "https://indiankanoon.org/",                              weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Bar & Bench (India legal news)",        what: "Free legal news + analysis on Indian cases.",                     url: "https://www.barandbench.com/",                            verify: false, lastVerified: "2026-06" },
   { name: "LiveLaw (India legal news)",         what: "Free, current legal reporting.",                            url: "https://www.livelaw.in/",                               verify: false, lastVerified: "2026-06" },
   { name: "NALSAR / NLU OpenCourseWare (where available)", what: "Free Indian law-school lectures and materials.",                    url: "https://www.nalsar.ac.in/",                              verify: false, lastVerified: "2026-06" },
   { name: "Constitution of India (full text, govt)",   what: "Free official PDF + translations.",                          url: "https://legislative.gov.in/constitution-of-india/",                  weight: "primary", verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Concept of Law, H.L.A. Hart",      what: "Foundational jurisprudence. Dense but rewarding.",                  url: "https://en.wikipedia.org/wiki/The_Concept_of_Law",                   price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Constitutional Law, M.P. Jain",       what: "Standard Indian constitutional-law text.",                      url: "",                                           price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Nudge, Thaler & Sunstein",          what: "Behavioural law/economics, choice architecture meets policy.",            url: "https://en.wikipedia.org/wiki/Nudge_(book)",                      price: "verify", weight: "popular", verify: false, lastVerified: "2026-06" },
   { name: "The Rule of Law, Tom Bingham",        what: "Compact, lucid case for rule-of-law principles.",                   url: "",                                           price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Taking Rights Seriously, Ronald Dworkin",  what: "Rights as trumps; law as interpretation.",                      url: "https://en.wikipedia.org/wiki/Taking_Rights_Seriously",                price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Path of the Law, Holmes (essay)",    what: "Foundational realist essay, also free if you search.",                url: "https://en.wikipedia.org/wiki/The_Path_of_the_Law",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "India After Gandhi, Ramachandra Guha",   what: "Political-history context for Indian constitutional law.",              url: "",                                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Working a Democratic Constitution, Granville Austin", what: "Definitive study of Indian constitutional working.",              url: "",                                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Transformative Constitution, Gautam Bhatia", what: "Modern Indian constitutional theory.",                       url: "",                                           price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Law's Empire, Ronald Dworkin",        what: "Law as interpretation; deeper Dworkin.",                       url: "",                                           price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Read your last contract", d: "Pull up your most recent rental/job/insurance contract. Read every clause. Note 3 obligations.", xp: 40 },
  { t: "Write a will", d: "Use an official template + draft a basic will. Get it witnessed (jurisdiction rules vary). Yes, today.", xp: 80 },
  { t: "Name your rights", d: "Write your country's fundamental rights from memory. Check against the actual list.", xp: 30 },
  { t: "IRAC a dispute", d: "Pick a real or hypothetical dispute. Apply IRAC on paper.", xp: 40 },
  { t: "Build a lawyer network", d: "Get the name + number of one lawyer you'd call for property, employment, or family matters. Just one.", xp: 40 }
 ],
 capstone: { t: "Personal legal house-in-order", d: "Get your basics sorted, will, nominees, key contracts read, lawyer contact for each big domain. One-page index of where everything lives.", xp: 200 },

 quiz: [
  { q: "Burden of proof in a criminal case rests on…", options: [
   { text: "The defendant.", misconception: "Common misunderstanding. The accused isn't required to prove innocence." },
   { text: "The prosecution, beyond reasonable doubt.", correct: true },
   { text: "Both equally.", misconception: "Not in criminal, the burden is asymmetric." },
   { text: "The judge.", misconception: "Judge decides; prosecution proves." }
  ], why: "Criminal: prosecution must prove beyond reasonable doubt. The accused doesn't have to prove innocence.", testOut: true },
  { q: "Standard of proof in a civil case is…", options: [
   { text: "Beyond reasonable doubt.", misconception: "That's criminal, much higher bar." },
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
   { text: "Knowing the right is different from being able to enforce it, courts are slow + expensive.", correct: true },
   { text: "Rights are universal.", misconception: "Not in practice across jurisdictions." },
   { text: "Lawyers don't matter.", misconception: "Opposite, they often matter most." }
  ], why: "Formal rights and de facto enforceability are different things. In slow-court jurisdictions, the gap is huge." },
  { q: "When should you almost always pay for legal advice?", options: [
   { text: "Buying property; major contracts; family matters with assets; employment disputes.", correct: true },
   { text: "Never.", misconception: "Cost asymmetry favours paying for most of these." },
   { text: "Only criminal cases.", misconception: "Civil + transactional decisions can cost more than criminal mistakes." },
   { text: "Only after a problem appears.", misconception: "Prevention is much cheaper than litigation." }
  ], why: "Cost asymmetry: an hour of a lawyer is usually trivial vs the downside of getting these wrong." }
 ],

 flashcards: [
  { front: "Civil vs criminal, one line each?", back: "Civil = you vs someone, usually about money. Criminal = state vs you, usually about liberty. Different burdens of proof." },
  { front: "Standard of proof in criminal vs civil?", back: "Criminal: beyond reasonable doubt. Civil: balance of probabilities (more likely than not)." },
  { front: "Three elements of a contract?", back: "Offer + acceptance + consideration (something exchanged)." },
  { front: "IRAC?", back: "Issue, Rule, Analysis, Conclusion, standard legal reasoning template." },
  { front: "Rights without duties?", back: "Don't exist, every right implies someone else's duty to respect it." },
  { front: "Fundamental rights (India, broad)?", back: "Articles 14-32, equality, free speech, life + liberty, protection against arbitrary detention, religious freedom + right to constitutional remedies." },
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
  { term: "IRAC", def: "Issue, Rule, Analysis, Conclusion, legal reasoning template." },
  { term: "Writ", def: "Court order, in India, fundamental rights enforceable under Article 32 / 226." },
  { term: "Habeas corpus", def: "Writ requiring a detained person be produced in court to test legality of detention." },
  { term: "Stare decisis", def: "Principle that courts follow precedent from prior similar rulings for consistency." },
  { term: "Mens rea", def: "Guilty mind, the mental intent element required for most criminal offences." }
 ],

 safetyNote: "Educational, not legal advice. Laws vary by country and change. For real legal stakes, property, family, employment, contracts, anything criminal, consult a qualified lawyer in your jurisdiction. In India, start with official portals (India Code, SCO India) and a registered advocate for matters of consequence."
};

export default d;
