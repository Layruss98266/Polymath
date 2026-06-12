import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "psychology",
 icon: "🧠",
 hue: "#a78bfa",
 category: "Mind & Self",
 name: "Human Psychology",
 tagline: "Why people do what they do",

 basics: "Most of what you think of as \"deciding\" already happened before you noticed. Some part of your brain handled it in a tenth of a second, and the part of you that talks to itself in words showed up afterwards to take credit. Psychology is the careful study of this gap , between what we actually do and the stories we tell about why we did it. You can't think your way out of having biases. You can learn to spot them, especially the ones that are quietly costing you money, relationships, or sleep.",
 whyItMatters: [
  "You'll understand your own bad decisions before you start judging other people's.",
  "You'll spot manipulation , in ads, news, sales calls, family arguments , instead of just feeling sold.",
  "You'll build relationships, teams, and habits that work with human nature instead of fighting it.",
  "You'll stop misreading people so confidently. A lot of expensive mistakes start there."
 ],
 realWorldExample: "Supermarkets play slow music in the evening. Shoppers move slower, spend longer per aisle, and walk out with more in the trolley. Almost nobody notices the music while they're shopping. Almost everyone, if asked, would say \"I bought what I needed.\" The whole decision felt like choice from the inside, but a music director somewhere had already shifted the dial. That's psychology in one paragraph , the gap between what runs you and what you think is running you.",

 mentors: [
  { name: "Daniel Kahneman", for: "fast vs slow thinking, prospect theory", work: "Thinking, Fast and Slow (2011)" },
  { name: "Robert Cialdini", for: "the 6 principles of influence", work: "Influence (1984)" },
  { name: "Carol Dweck", for: "fixed vs growth mindset", work: "Mindset (2006)" },
  { name: "Solomon Asch", for: "conformity (the line experiments)", work: "Asch conformity experiments (1951)" },
  { name: "Robert Sapolsky", for: "biology of behaviour", work: "Behave (2017)" }
 ],

 diagrams: [
  { kind: "flow", title: "System 1 vs System 2 (Kahneman)", caption: "Two modes of thinking, constantly handing off.", data: { steps: ["Input", "System 1 (fast, automatic)", "Anomaly?", "System 2 (slow, effortful)", "Decision"] } },
  { kind: "cycle", title: "Habit loop (Duhigg)", caption: "Cue → routine → reward, learned and reinforced.", data: { nodes: ["Cue", "Craving", "Routine", "Reward"] } }
 ],

 synthesis: [
  { concept: "Social proof", linksTo: "marketing", note: "The same machinery a marketer uses on you is the one you've used on yourself a thousand times today." },
  { concept: "Anchoring", linksTo: "personal_finance", note: "Why the first price you see decides what feels expensive." }
 ],

 concepts: [
  { t: "System 1 vs System 2",        short: "You have two thinking modes. One's fast and runs the show. The other's slow and shows up late.",                                     deep: "Daniel Kahneman's framing: System 1 is fast, automatic, effortless , it sees a face and knows your friend is angry, before you've decided anything. System 2 is slow, careful, expensive , it's what kicks in when you balance a long bill or learn a new word. You feel like System 2 runs your life because it's the part of you that talks in sentences. It doesn't. System 1 handles 95% of your day; System 2 only gets called in when System 1 hits something it can't pattern-match. Most cognitive biases are System 1 quietly getting away with a wrong answer because System 2 never bothered to check.",                                                                                              status: "framework", reflect: "Name three decisions you made today that felt 'considered.' How much was actually System 1 dressed in a suit?" },
  { t: "Confirmation bias",          short: "You notice things that fit what you already believe. You barely notice things that don't.",                                        deep: "Pay attention next time you read the news on a topic you have strong opinions about. You'll find yourself nodding at the parts that fit your view, and skipping past or finding clever objections to the parts that don't. That's confirmation bias, and it's running in the background all the time , in how you read people, evaluate ideas, pick stocks, judge politicians. The only real defence is uncomfortable: actively look for the best version of the opposing case (called 'steelmanning'), not just the strawman version that's easy to dismiss.",                                                                                                                                     status: "settled",  reflect: "Pick one strong opinion of yours. What evidence would change it? If your honest answer is 'nothing,' that's a flag." },
  { t: "Anchoring",              short: "The first number you see drags everything else toward it.",                                                       deep: "If a shop sticks a sign on a jacket saying \"₹8,000 , now ₹4,999,\" you feel like you got a deal. Even though the jacket may have been on the rack at ₹4,999 the whole time. The original ₹8,000 number , even when it's fake , quietly drags your sense of what's fair. Anchoring works in salary negotiations, property deals, even in psychology experiments where the anchor is a random number from a wheel. The defence: before you walk into any negotiation, decide your own number in writing. The first number you see is rarely an accident.",                                                                                                                                         status: "settled",  reflect: "In your last big negotiation or purchase, what was the first number on the table? How did it shape what felt 'fair' afterwards?" },
  { t: "Loss aversion",            short: "Losses hurt about twice as much as the same-sized gains feel good.",                                                   deep: "Imagine you find ₹5,000 on the street. Pleasant. Now imagine you lose ₹5,000 from your wallet. That second feeling is about twice as bad. The maths is symmetric , your wealth changed by the same amount , but your brain isn't. Kahneman and Tversky's prospect theory: losses loom larger than equivalent gains. This one bias drives a huge amount of bad behaviour. People hold on to losing investments hoping to break even (they wouldn't have bought it today). They stay in jobs and relationships too long because leaving feels like a loss, even when staying is the bigger one. Reframing the choice in terms of opportunity cost (\"what am I giving up by not changing?\") helps balance the scale.",                                                                 status: "settled",  reflect: "Where in your life are you avoiding a small clear loss while paying a much bigger hidden one?" },
  { t: "Cialdini's six levers of influence",  short: "Reciprocity, commitment, social proof, authority, liking, scarcity. Once you know the names, you see them pulled on you every day.",                   deep: "Robert Cialdini spent decades watching salespeople, fundraisers, and cult leaders and found the same six tools come up again and again. Reciprocity (free gift before the ask), commitment (small yes before the big one), social proof (everyone else is doing it), authority (a person in a white coat said so), liking (we say yes to people we like), and scarcity (only three left at this price). None of them are evil on their own , the same tools build trust and run cons. The point isn't to never use them. The point is that once you can name them, the next time a sales pitch makes you feel oddly pressured, you'll spot exactly which lever is being pulled.",                                                                                 status: "framework", reflect: "Pick one ad today and try to name every Cialdini lever in it. How many do you spot?" },
  { t: "Fundamental attribution error",    short: "When someone else messes up, you blame their character. When you mess up, you blame the situation.",                                   deep: "A stranger cuts you off in traffic and you mutter \"what a rude driver.\" Two hours later you cut someone off and you think \"I had to , I was late.\" Same action, two completely different stories. We extend ourselves situational generosity that we don't extend to other people. Done quietly, over years, it corrodes relationships and teams , every bad behaviour from your colleague becomes evidence of who they are, while every bad behaviour from you is just bad luck. The fix is simple to describe and hard to do: extend the same situational read to the other side that you give yourself.",                                                                                                                 status: "settled",  reflect: "Replay your most recent conflict. What's the most generous situational read of the other person you could write down?" },
  { t: "Conformity (the Asch experiments)",  short: "Even on obvious questions, most of us will go along with the group rather than stand out.",                                        deep: "Solomon Asch put one volunteer in a room with several actors and showed them two lines, one obviously longer than the other. The actors all confidently said the shorter one was longer. Around three quarters of the real volunteers cracked at least once and agreed , even though the answer was visibly wrong. That was in a small room in the 1950s. Now scale it up to social media, work meetings, family WhatsApp groups, and ask why people don't speak up about things they know. The data is hopeful in one direction though: dissent gets dramatically easier as soon as one other person dissents first. Being the second person to push back is much easier than being the first. Be the first sometimes anyway.",                                                         status: "settled",  reflect: "When did you last stay silent about something you believed, just to fit in? What did that cost , you, or whoever was listening?" },
  { t: "Growth vs fixed mindset",       short: "Believing skill can be built changes how you respond to failure.",                                                     deep: "Carol Dweck's research, simplified: kids praised for being \"smart\" later avoided harder problems (failing might mean they aren't smart anymore). Kids praised for effort tried the harder problems and kept improving. The thing being praised determined how they handled future setbacks. Honesty caveat: some of the bigger Dweck claims didn't replicate cleanly when other labs tried them, and the world of pop \"growth mindset\" took it further than the data supports. But the core observation , that praising effort and strategy beats praising trait, in yourself and your kids , has held up well enough to use.",                                                                                                            status: "debated",  reflect: "How do you praise people you mentor , or your own kids, or yourself? Trait (\"you're so smart\") or process (\"I love how you tried X\")?" }
 ],

 counterView: "Much of pop psychology rests on small, hard-to-replicate studies. The 'replication crisis' (2010s) showed a lot of famous results , priming, power posing, ego depletion, parts of the marshmallow test , don't reliably reproduce. Treat any single fascinating study as a hypothesis, not a fact, and steelman the case that human behaviour is far more situational and culturally bound than the canonical American-undergraduate experiments suggest. Also note: Mehrabian's '7-38-55' rule is wildly misquoted , its real scope was inconsistent affect-communication, not all communication.",

 capabilities: [
  "Name the 6 Cialdini levers when you see them in an ad.",
  "Spot anchoring in a price tag and counter with your own number.",
  "Reframe a frustrating interaction using the fundamental attribution error.",
  "Tell a single replicated finding from a single dramatic study.",
  "Use process praise instead of trait praise."
 ],
 cheatsheet: [
  "System 1 runs most of the show. Don't trust your fluent intuitions on novel problems.",
  "Anchoring works on you. Pre-decide your number before exposure.",
  "Losses hurt ~2× gains. Reframe to opportunity cost.",
  "Six levers: reciprocity, commitment, social proof, authority, liking, scarcity.",
  "Praise process, not trait , even when talking to yourself."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Get the vocabulary in your head",        do: "Read Thinking, Fast and Slow and Cialdini's Influence. Don't try to apply anything yet , just get the names of the main biases and levers into your head so you can recognise them.",                                                      milestone: "You can name five common cognitive biases and three influence levers without notes.",                         time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Catch yourself in the act",            do: "Now that you have the names, keep a tiny bias log for 30 days. Each evening, write one bias you noticed in yourself that day. Not in your enemies , in you. You'll find patterns within a week.",                                                     milestone: "You catch your own biases while they're happening, not just in retrospect.",                             time: "~1 month" },
  { rank: "Practitioner", focus: "Use the tools without crossing the line",     do: "Apply social proof, commitment, framing to a real project , a fundraiser, a workplace pitch, a personal habit. Notice when you're using the same levers on yourself.",                                                                 milestone: "You can use influence consciously and ethically , and notice when you're about to cross into manipulation.",             time: "~2-3 months" },
  { rank: "Specialist",  focus: "Go deep in one tradition",             do: "Psychology is huge. Pick one branch , cognitive behavioural therapy, social psychology, behavioural economics, biology of behaviour , and read primary papers, not just popular books, in that branch.",                                                 milestone: "You know what's settled, what's debated, and what's pop-science overreach in your chosen branch.",                  time: "~6 months" },
  { rank: "Expert",    focus: "Read the field with healthy scepticism",     do: "Read every study with the replication crisis in mind. Look at sample size, pre-registration, effect size, who funded it. Learn to tell which findings will probably hold up and which probably won't.",                                                 milestone: "You can predict, with surprising accuracy, which dramatic new studies will fail to replicate.",                    time: "~1 year+" },
  { rank: "Master",    focus: "Apply across other domains",            do: "Connect what you've learned to marketing, negotiation, leadership, design, public policy. Psychology is a foundation for almost every people-facing field.",                                                                       milestone: "People in other fields ask you for the psychological lens that fits their problem.",                          time: "~2 years+" },
  { rank: "Grandmaster", focus: "Contribute or teach with nuance",         do: "Original research, teaching, or popular writing that respects the field's actual uncertainty rather than overclaiming.",                                                                                         milestone: "Other practitioners use your framings without noticing they came from you.",                              time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Sapolsky , Human Behavioral Biology (Stanford)",  what: "Full course on YouTube. Biology + psychology, beautifully taught.",   url: "https://www.youtube.com/playlist?list=PL150326949691B199",            verify: false, lastVerified: "2026-06" },
   { name: "Center for Open Science , replication",      what: "Read about what didn't replicate before quoting it.",          url: "https://www.cos.io/",                              verify: false, lastVerified: "2026-06" },
   { name: "You Are Not So Smart , David McRaney",       what: "Free podcast on biases, accessibly explained.",             url: "https://youarenotsosmart.com/",                         verify: false, lastVerified: "2026-06" },
   { name: "Daniel Kahneman , Nobel lecture (free PDF)",   what: "Direct from the source: prospect theory + heuristics.",         url: "https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/lecture/",   verify: false, lastVerified: "2026-06" },
   { name: "PsyArXiv , preprint archive",           what: "Read primary preprints before they reach pop articles.",         url: "https://psyarxiv.com/",                             verify: false, lastVerified: "2026-06" },
   { name: "Wikipedia , List of cognitive biases",      what: "Comprehensive index with citations to source studies.",         url: "https://en.wikipedia.org/wiki/List_of_cognitive_biases",             verify: false, lastVerified: "2026-06" },
   { name: "Robert Sapolsky , public lectures (YouTube)",   what: "More accessible single-talk format.",                  url: "https://www.youtube.com/results?search_query=Robert+Sapolsky",          verify: true, lastVerified: "2026-06" },
   { name: "Big Think , psychology channel",         what: "Short, expert-driven explainers.",                    url: "https://bigthink.com/psychology/",                        verify: false, lastVerified: "2026-06" },
   { name: "BPS Research Digest",               what: "British Psychological Society blog summarising new psychology research.", url: "https://digest.bps.org.uk/",                           verify: false, lastVerified: "2026-06" },
   { name: "Thinking, Fast and Slow , Kahneman (library)",   what: "The best general-audience book on biases.",               url: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",             verify: true, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Influence , Cialdini",              what: "The six levers in detail.",                       url: "https://www.influenceatwork.com/principles-of-persuasion/",           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Pre-Suasion , Cialdini",             what: "What happens before the ask. Companion to Influence.",          url: "https://www.influenceatwork.com/",                        price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Behave , Robert Sapolsky",            what: "Why we do what we do, from synapses to societies.",           url: "https://www.penguinrandomhouse.com/books/314463/behave-by-robert-m-sapolsky/",  price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Mindset , Carol Dweck",              what: "Growth vs fixed. Read the replication caveats alongside.",        url: "https://en.wikipedia.org/wiki/Mindset_(book)",                  price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Righteous Mind , Jonathan Haidt",       what: "Moral psychology of why decent people disagree.",            url: "https://righteousmind.com/",                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Predictably Irrational , Dan Ariely",       what: "Behavioural-economics intro w/ caveats post-replication.",         url: "https://danariely.com/books/predictably-irrational/",              price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Stumbling on Happiness , Daniel Gilbert",     what: "Why we mispredict what'll make us happy.",                url: "",                                        price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Happiness Hypothesis , Jonathan Haidt",    what: "Ancient wisdom vs modern psychology.",                  url: "https://righteousmind.com/",                           price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Thinking in Bets , Annie Duke",          what: "Decision-making under uncertainty, poker-trained.",           url: "",                                        price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Noise , Kahneman, Sibony, Sunstein",       what: "Why expert judgment varies wildly, and what to do about it.",      url: "",                                        price: "verify", verify: true, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "30-day bias log", d: "Each day, write one bias you caught in yourself. End of month, look for patterns.", xp: 60 },
  { t: "Name the lever", d: "Watch 5 ads or sales pages. For each, name the Cialdini lever(s) used.", xp: 30 },
  { t: "Anchor flip", d: "In your next negotiation, name your number first. Compare what happens to your usual approach.", xp: 40 },
  { t: "Steelman the opposite", d: "Pick a strong opinion you hold. Write the best version of the opposing case, in writing.", xp: 50 },
  { t: "Process praise", d: "For a week, replace 'you're so smart/talented' with 'I love how you tried X.' Notice the response.", xp: 30 }
 ],
 capstone: { t: "Run a personal experiment", d: "Pick one belief about yourself or others. Design a 2-week experiment that could falsify it. Run it. Report what changed.", xp: 200 },

 quiz: [
  { q: "Which of these best describes Kahneman's System 1?", options: [
   { text: "Conscious deliberation that runs every decision.", misconception: "That's System 2 , and it runs far less than we think." },
   { text: "Fast, automatic, mostly invisible , runs most decisions.", correct: true },
   { text: "Only emotions; logic lives elsewhere.", misconception: "System 1 includes pattern-matching and intuition, not just emotion." },
   { text: "A part of the brain you can turn off.", misconception: "It's always on , even when System 2 is engaged." }
  ], why: "System 1 = fast/automatic; System 2 = slow/effortful. Most decisions are System 1, with System 2 stepping in for anomalies.", testOut: true },
  { q: "Loss aversion means…", options: [
   { text: "We don't notice losses.", misconception: "Opposite , we feel them ~2× more than equivalent gains." },
   { text: "Losses feel about twice as bad as equivalent gains feel good.", correct: true },
   { text: "We refuse to invest because everything is a loss.", misconception: "It explains why people hold losing investments too long, not why they avoid all investing." },
   { text: "It applies only to money.", misconception: "It applies to status, relationships, time, and identity , anywhere we can lose." }
  ], why: "Prospect theory: pain of loss is roughly 2× pleasure of equivalent gain." },
  { q: "The Mehrabian '7-38-55' rule is best characterised as…", options: [
   { text: "A universally correct breakdown of communication.", misconception: "Misquoted , Mehrabian's data was narrow (inconsistent emotion words + tone + face), not all communication." },
   { text: "Wildly misquoted , its real scope was much narrower.", correct: true },
   { text: "Discredited entirely.", misconception: "Original work was sound; popular use isn't." },
   { text: "About IQ vs EQ.", misconception: "Different topic entirely." }
  ], why: "Mehrabian's numbers describe a specific lab setup about inconsistent affect, not the breakdown of all human communication." },
  { q: "After the replication crisis, the most defensible stance is…", options: [
   { text: "Trust no psychology study.", misconception: "Too strong , many findings did replicate." },
   { text: "Some classic findings didn't replicate; weight single dramatic studies less.", correct: true },
   { text: "Replication doesn't matter.", misconception: "It's the difference between knowledge and storytelling." },
   { text: "Only neuroscience is reliable.", misconception: "Neuroscience has had its own replication issues." }
  ], why: "A bunch of headline-grabbing studies didn't reproduce. Don't ditch the field , just stop quoting single small studies as settled fact." },
  { q: "The fundamental attribution error predicts that you'll likely…", options: [
   { text: "Blame your own bad behaviour on character.", misconception: "Opposite , we blame our own behaviour on circumstance." },
   { text: "Blame other people's bad behaviour on character and your own on circumstance.", correct: true },
   { text: "Treat everyone the same.", misconception: "If true, the error wouldn't have a name." },
   { text: "Only happens in conflict.", misconception: "Active in daily perception, not just conflict." }
  ], why: "We extend ourselves situational generosity we don't extend to others." }
 ],

 flashcards: [
  { front: "System 1 vs System 2?", back: "System 1 = fast/automatic; System 2 = slow/effortful. Most decisions are System 1." },
  { front: "What's confirmation bias?", back: "Noticing and remembering evidence that supports what you already believe." },
  { front: "How big is loss aversion?", back: "Losses feel ~2× as bad as equivalent gains feel good (prospect theory)." },
  { front: "Cialdini's 6 levers?", back: "Reciprocity, commitment, social proof, authority, liking, scarcity." },
  { front: "Fundamental attribution error?", back: "Blame others' character; blame your own circumstance." },
  { front: "Asch conformity headline?", back: "~75% of people conformed to obviously wrong group answers at least once." },
  { front: "What's the replication crisis?", back: "Lots of classic psychology findings didn't reproduce in larger, pre-registered studies. Be skeptical of single dramatic studies." },
  { front: "Process vs trait praise?", back: "Praising effort/strategy ('I love how you tried X') outperforms praising trait ('you're so smart')." }
 ],
 glossary: [
  { term: "Heuristic", def: "Mental shortcut that's fast but sometimes wrong." },
  { term: "Bias", def: "Systematic error in thinking, not random noise." },
  { term: "Prospect theory", def: "Kahneman/Tversky model: losses loom larger than gains." },
  { term: "Steelman", def: "The strongest possible version of an opposing argument." },
  { term: "Replication", def: "Re-running a study to see if the result holds up." },
  { term: "Conformity", def: "Adjusting behaviour to match a group, even against private judgment." },
  { term: "Attribution", def: "How we explain causes of behaviour , to character or to circumstance." },
  { term: "Anchoring", def: "First-number effect on subsequent estimates." }
 ]
};

export default d;
