import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "health",
 icon: "🫀",
 hue: "#f87171",
 category: "Body & Health",
 name: "Health, Longevity & How the Body Works",
 tagline: "Live longer, feel better , what's actually solid",

 basics: "Almost everything you need to do to live well into old age is unglamorous and free. Move your body, sleep enough, eat mostly plants, have people you can call at 3 am, don't smoke, don't drink much. Do those, and basically every chronic disease that matters , heart, diabetes, cancer, dementia , shifts in your favour. Modern medicine is fantastic at pulling you back from the brink and surprisingly bad at keeping you off it; that gap is bridged by what you do daily. The internet is full of confident influencers selling protocols and supplements, and the science is honestly noisier than they pretend. But the basics are rock solid. Start there.",
 whyItMatters: [
  "Almost every chronic disease that wrecks late life shifts in your favour from the basics alone.",
  "You become a literate patient , you can ask doctors better questions and catch wishful prescriptions.",
  "You stop falling for confident health claims (single studies, mouse models, expensive supplements with one trial behind them).",
  "The goal isn't just to live longer. It's to feel like yourself in your 70s. That's a different game."
 ],
 realWorldExample: "There's a popular idea you'll see everywhere called the \"Blue Zones\" , five places (Okinawa, Sardinia, Ikaria, Nicoya, Loma Linda) where people supposedly live to 100 at extraordinary rates, and the books explain it with whichever diet the author is selling. The honest picture is messier. Diet matters, but so do strong social ties, daily walking, gardens to tend, faith communities, and (awkwardly) in some Blue Zones, sloppy record-keeping that overstated how old the centenarians actually were. The boring lessons survived the scrutiny , move every day, eat mostly plants, sleep, belong to a community. The exciting diet-of-the-month parts didn't. Pull the boring lessons out and ignore the rest.",

 mentors: [
  { name: "Peter Attia", for: "longevity medicine, evidence-based", work: "Outlive (2023)" },
  { name: "Walter Willett", for: "decades of nutritional epidemiology", work: "Harvard Nurses' Health Study leadership" },
  { name: "Robert Sapolsky", for: "stress biology", work: "Why Zebras Don't Get Ulcers (1994)" },
  { name: "Matthew Walker", for: "sleep science (with caveats)", work: "Why We Sleep (2017)" },
  { name: "Atul Gawande", for: "how medicine actually works", work: "Being Mortal (2014)" }
 ],

 diagrams: [
  { kind: "labelled", title: "Major body systems", caption: "Rough mental map. Knowing the players makes the symptoms less mysterious.", data: { callouts: [
   { x: 200, y: 150, text: "Brain / nervous system" },
   { x: 320, y: 170, text: "Heart + circulation" },
   { x: 220, y: 200, text: "Lungs" },
   { x: 350, y: 220, text: "Liver" },
   { x: 250, y: 240, text: "Gut + microbiome" }
  ] } },
  { kind: "bars", title: "Effect size on all-cause mortality (rough)", caption: "Rough lifestyle factors and their typical effect on mortality risk.", data: { items: [
   { label: "Smoking (vs none)", value: 80 },
   { label: "VO₂max (top vs bottom)", value: 60 },
   { label: "Heavy alcohol", value: 30 },
   { label: "Obesity (vs normal)", value: 25 },
   { label: "Sedentary", value: 20 }
  ], unit: "% risk diff (rough)" } }
 ],

 synthesis: [
  { concept: "Sleep + consolidation", linksTo: "learning", note: "Sleep does memory consolidation; it's not 'rest.'" },
  { concept: "Behaviour > strategy", linksTo: "investing", note: "Same pattern: simple habits you keep beat clever ones you don't." }
 ],

 concepts: [
  { t: "VO₂max , cardio fitness",        short: "The single most predictive thing you can move for longevity. Bigger effect than most medications.",                                              deep: "VO₂max is a measure of how much oxygen your body can use during peak exercise. It tracks all-cause mortality more strongly than almost any other single lifestyle number across many large studies. The effect is genuinely huge , moving from the bottom quartile to just above average matters more than most pills your doctor will write you. The good news: it's movable. 150 minutes a week of moderate cardio (brisk walking, easy cycling, swimming where you can still hold a conversation) will move it. Twice that and add some harder intervals, you move it a lot. It's the single highest-leverage habit you can install in your 30s and 40s.",                                                                                                               status: "settled",  reflect: "When did you last actually get out of breath on purpose? If you can't remember this week, that's the first move." },
  { t: "Strength and muscle mass",        short: "Muscle is metabolic insurance now. In later life, it's the single biggest reason you don't fall.",                                               deep: "Sarcopenia is the medical word for the muscle loss that happens with age. It's also one of the single biggest predictors of late-life frailty, falls, and death over 65. The cruel irony: many older adults think lifting weights is dangerous and avoid it, which guarantees the muscle decline that actually makes them frail. The evidence is the opposite , resistance training twice or three times a week, even with very modest weights, dramatically slows the curve. Start now, regardless of age, regardless of where you're starting from. Future-you has fewer hospital visits because of it.",                                                                                                                                      status: "settled",  reflect: "What's your current strength baseline? Could you do 10 push-ups today? When did you last try?" },
  { t: "Sleep",                 short: "Seven to nine hours, mostly consistent timing. Skimping costs you focus, mood, and over years, lifespan.",                                          deep: "We used to call sleep 'rest,' as if the brain just powered down. It doesn't. During deep sleep, your brain is actively consolidating memories, regulating hormones, and clearing metabolic waste. Skip it consistently and the bill comes due , worse cardiovascular markers, higher diabetes risk, sharper cognitive decline. Matthew Walker's popular book Why We Sleep made the case famously; some of his specific claims have been credibly critiqued, but the core picture , that chronic short sleep is genuinely costly , is rock solid. The cheap fix is boring: a consistent bedtime, a screen-free hour before, a cool dark room.",                                                                                                                      status: "settled",  reflect: "Your average hours of sleep last week? How much did the bedtime vary?" },
  { t: "Food: mostly plants, enough protein, not too much", short: "The boring guidance is right. Specific diet debates matter much less than the basics.",                                             deep: "Across just about every long-term study and every cultural tradition that produces healthy old people, the same pattern shows up. Lots of vegetables, fruits, whole grains, and legumes. Minimal ultra-processed food. Enough protein, especially as you age. Don't smoke. Minimal alcohol. The internet sells you new diets every quarter , keto, carnivore, paleo, plant-based-only, intermittent fasting , and a lot of them work in the short term mainly because they reduce ultra-processed food and total calories. Get the basics right and the specific best-diet arguments matter much less than the people writing the books pretend.",                                                                                                                     status: "settled",  reflect: "Honestly: what percentage of your food this week was minimally processed?" },
  { t: "Social connection",            short: "Loneliness shortens life expectancy on a scale comparable to smoking. The data isn't subtle.",                                               deep: "Across decades of research , including the famous Harvard Study of Adult Development that followed people for 80+ years , the same uncomfortable finding keeps surfacing: the strength of your relationships predicts late-life health better than money, fame, or even cholesterol. Loneliness, measured as a risk factor, shows up in some studies at the same scale as smoking. The implication is that \"who do you call when something's wrong?\" is not a soft question , it's a hard health metric. The fix isn't optional, and it isn't quick. It's months and years of showing up for people, picking up the phone, and being someone others can call too.",                                                                                                             status: "settled",  reflect: "Who would you call at 3 a.m. if something went badly wrong? When did you last actually talk to that person?" },
  { t: "Chronic stress (Robert Sapolsky)",    short: "Short bursts of stress are fine. Constant, unrelieved stress is the slow grinder.",                                                     deep: "Sapolsky's frame: the stress response evolved for short emergencies. A zebra outruns a lion, then either gets eaten or returns to grazing , system on, system off. Humans turned this into a chronic baseline. The boss who's always disappointed, the inbox that never empties, the news cycle that's always alarming, the relationship that's never quite resolved , these keep the stress response running long after it stopped being useful. Over years, that chronic activation damages cardiovascular health, the immune system, and cognitive function. The job isn't to avoid all stress , you can't and shouldn't. It's to make sure your stress dial actually turns off sometimes.",                                                                                               status: "settled",  reflect: "Where in your life is the stress dial currently stuck on? When did it last get to go off?" },
  { t: "Healthspan vs lifespan",          short: "Living 90 years feeling like 60 is the actual goal. 90 years feeling like 85 isn't.",                                                    deep: "Most people think about longevity as years total. Peter Attia and others reframe it as healthspan: how long you stay functional, mobile, and clear-headed. Adding a decade of frailty to the end of your life isn't a win. What you're really targeting are the four conditions that shrink healthspan the most , heart disease, cancer, neurodegenerative disease, and metabolic disease. The boring fundamentals on this page reduce all four. The thing to picture isn't being 90. It's being 75 and still climbing stairs without thinking about it.",                                                                                                                                                                 status: "framework", reflect: "Picture yourself at 80. What specifically do you want to still be doing? What habit today supports that?" },
  { t: "Be a literate patient",          short: "Doctors are great at acute crises and surprisingly weak at chronic prevention. You have to know how to ask.",                                       deep: "Modern medicine can pull you back from a heart attack with extraordinary speed. It's much worse at the long, boring work of stopping you from having one in the first place. That gap is bridged by you , by being a patient who can ask the right questions. \"What's the effect size of this medication?\" \"Is that risk relative or absolute?\" \"What's the alternative?\" \"What would change if I waited three months?\" Doctors mostly welcome these questions because they get to practise actual medicine instead of defensive medicine. The patients who get the best care are the ones who arrive with three good questions written down.",                                                                                                                 status: "framework", reflect: "Next appointment, write three specific questions before you go. Notice how the conversation changes." }
 ],

 counterView: "Almost every confident health claim from a single book or podcast is at least partly wrong. Walker's 'Why We Sleep' has well-documented inaccuracies; many 'fasting cures everything' claims rest on mouse studies; 'sugar is poison' / 'red meat causes cancer' headlines usually move risk by a few percent, not 100. Healthspan-medicine voices (Attia, Sinclair) over-extrapolate from animal models more than they admit. The best honest position: trust the boring fundamentals (move, sleep, eat mostly plants, social ties, no smoking, low alcohol), discount any single hot claim, and update slowly when meta-analyses move.",

 capabilities: [
  "Do moderate cardio 150+ min/week , and notice your VO₂max improving.",
  "Run resistance training 2-3×/week without hurting yourself.",
  "Keep a consistent sleep schedule with average 7-9 hours.",
  "Spot ultra-processed food and reduce it without dieting.",
  "Ask doctors better questions (effect sizes, alternatives, second opinions)."
 ],
 cheatsheet: [
  "Move daily. Cardio + resistance + don't sit all day.",
  "Sleep 7-9 hours. Consistent timing.",
  "Eat mostly plants. Enough protein (esp. with age). Minimal ultra-processed.",
  "Don't smoke. Minimal alcohol.",
  "Maintain real friendships. Loneliness has real costs.",
  "Manage chronic stress. Acute stress is fine.",
  "Discount any single dramatic health claim."
 ],

 roadmap: [
  { rank: "Novice",    focus: "See where you are before trying to change anything",      do: "For two weeks, just track , sleep hours, daily steps, rough weekly cardio and resistance minutes, what you eat. Don't change anything yet. Without a baseline, you can't tell whether anything you do is actually working.",                                                                     milestone: "You know your real current baseline across sleep, movement, and food. Some of it will surprise you.",                               time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Make daily movement a habit, not an event",           do: "Hit 150 minutes a week of moderate cardio. Add two strength sessions. Build slowly; the injury at month two is the most common reason people quit. Bodyweight is fine to start.",                                                                                         milestone: "Movement happens on most days without you negotiating with yourself first.",                                            time: "~1-2 months" },
  { rank: "Practitioner", focus: "Fix sleep and food so they stop sabotaging everything else",   do: "Lock a consistent sleep window. Eat mostly minimally-processed food. Hit a real protein target. Don't drink your calories. These four moves underwrite everything else.",                                                                                             milestone: "Sleep and food are no longer the things undoing your effort everywhere else.",                                           time: "~3 months" },
  { rank: "Specialist",  focus: "Handle stress and connection like the health factors they are", do: "Add a daily practice that gets your nervous system off , walks, meditation, breath work, real downtime, whatever works for you. Deliberately schedule social connection. Loneliness is not a soft variable.",                                                                             milestone: "Your stress dial gets to turn off most days, and you talk to at least one person you love every week.",                               time: "~6 months" },
  { rank: "Expert",    focus: "Get your numbers; tune to your individual response",       do: "Get the key bloodwork , lipids, A1C, vitamin D, thyroid. Talk to a doctor about your actual numbers, not anyone's average. Adjust deliberately.",                                                                                                         milestone: "You know your numbers and their trend lines, not just your habits.",                                                 time: "~1 year" },
  { rank: "Master",    focus: "Think in decades, plan with family and doctor input",      do: "Write down a 10-to-20-year healthspan plan that survives meeting your future self. Bring family and a doctor into the planning.",                                                                                                                 milestone: "Your plan reaches honestly out to 20 years and your family knows what you care about.",                                       time: "~2+ years" },
  { rank: "Grandmaster", focus: "Help others without selling them anything",            do: "Teach the boring fundamentals to the people around you. Don't push protocols. Lead by being someone whose 60s look like other people's 40s.",                                                                                                           milestone: "The people around you are healthier because of how you've lived, not because of anything you sold them.",                             time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Peter Attia , The Drive (podcast + free articles)",  what: "Long-form, technical, accessible. Best general longevity-medicine intro.",      url: "https://peterattiamd.com/",                              verify: false, lastVerified: "2026-06" },
   { name: "WHO , physical activity guidelines",         what: "Official, conservative, evidence-based baseline.",                  url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",          verify: false, lastVerified: "2026-06" },
   { name: "Harvard Nutrition Source",              what: "Free, Walter Willett team , strong nutrition baseline.",               url: "https://nutritionsource.hsph.harvard.edu/",                      verify: false, lastVerified: "2026-06" },
   { name: "NIH , National Institutes of Health (US)",      what: "Free public-health information from primary US source.",               url: "https://www.nih.gov/",                                 verify: false, lastVerified: "2026-06" },
   { name: "Examine.com (free pages)",              what: "Evidence-graded summaries of supplements + interventions.",              url: "https://examine.com/",                                 verify: false, lastVerified: "2026-06" },
   { name: "PubMed",                        what: "Search primary biomedical research before believing podcasts.",             url: "https://pubmed.ncbi.nlm.nih.gov/",                            verify: false, lastVerified: "2026-06" },
   { name: "Andrew Huberman , public lectures (YouTube)",     what: "Stanford neuroscientist; mix of solid + speculative , use w/ critique.",        url: "https://www.hubermanlab.com/",                             verify: true, lastVerified: "2026-06" },
   { name: "Sleep Foundation",                   what: "Free reference on sleep stages, hygiene, disorders.",                 url: "https://www.sleepfoundation.org/",                           verify: false, lastVerified: "2026-06" },
   { name: "Mayo Clinic , patient education",           what: "Reliable plain-English explanations of conditions + treatments.",           url: "https://www.mayoclinic.org/patient-care-and-health-information",            verify: true, lastVerified: "2026-06" },
   { name: "Stronger by Science , Greg Nuckols",          what: "Free, well-cited articles on strength training research.",               url: "https://www.strongerbyscience.com/",                          verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Outlive , Peter Attia",                what: "The four horsemen + the healthspan playbook.",                     url: "https://peterattiamd.com/outlive/",                          price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Why Zebras Don't Get Ulcers , Sapolsky",       what: "Stress biology, beautifully written.",                         url: "https://en.wikipedia.org/wiki/Why_Zebras_Don%27t_Get_Ulcers",             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Being Mortal , Atul Gawande",             what: "How medicine actually treats aging + dying , and what it gets wrong.",         url: "https://atulgawande.com/book/being-mortal/",                      price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Lifespan , David Sinclair",              what: "Longevity science w/ caveats , read alongside critiques.",               url: "",                                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "How Not to Die , Michael Greger",           what: "Plant-forward case w/ extensive citations; vegan-skewed.",               url: "https://nutritionfacts.org/book/how-not-to-die/",                    price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Comfort Crisis , Michael Easter",         what: "On voluntary discomfort + modern softness.",                      url: "",                                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Why We Sleep , Matthew Walker",            what: "Popular sleep book , sound core, specific claims critiqued.",              url: "https://en.wikipedia.org/wiki/Why_We_Sleep",                      price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Body , Bill Bryson",                what: "Friendly, broad tour of human biology.",                        url: "https://en.wikipedia.org/wiki/The_Body:_A_Guide_for_Occupants",             price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Spark , John Ratey",                  what: "Exercise + the brain. Practical + research-grounded.",                 url: "",                                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Atomic Habits , James Clear (cross-applies)",     what: "Behavior-change layer that makes the above stick.",                   url: "https://jamesclear.com/atomic-habits",                         price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Track the baseline", d: "For 2 weeks, log sleep hours, daily steps, and a rough estimate of weekly cardio + resistance minutes.", xp: 40 },
  { t: "150 minutes", d: "Hit 150 minutes of moderate cardio for one week. Walking briskly counts.", xp: 50 },
  { t: "2 strength sessions", d: "Do 2 resistance sessions this week. Bodyweight is fine to start.", xp: 50 },
  { t: "Sleep window", d: "Set a consistent bedtime/wake-up for 14 days. Note how week 2 feels vs week 1.", xp: 50 },
  { t: "Call someone", d: "Call (not text) one person you care about this week.", xp: 30 }
 ],
 capstone: { t: "1-year health plan", d: "Write a 1-page healthspan plan w/ specific cardio, resistance, sleep, food, and social targets. Review quarterly.", xp: 200 },

 quiz: [
  { q: "Which single measure is most predictive of all-cause mortality, lifestyle-side?", options: [
   { text: "Body Mass Index.", misconception: "BMI is a crude tool, especially in athletic or older populations." },
   { text: "Cardio fitness (VO₂max).", correct: true },
   { text: "Cholesterol.", misconception: "Important for cardiovascular specifically; less powerful as a single all-cause signal." },
   { text: "Caloric intake.", misconception: "Matters at extremes; doesn't predict mortality on its own well." }
  ], why: "Cardio fitness (VO₂max) is one of the strongest single lifestyle predictors of all-cause mortality.", testOut: true },
  { q: "How should you treat 'this one food causes cancer' headlines?", options: [
   { text: "Believe them.", misconception: "Most are based on small relative-risk increases on weak data." },
   { text: "Discount any single dramatic claim; check meta-analyses + effect sizes.", correct: true },
   { text: "Refuse to eat that food.", misconception: "Often based on tiny shifts in absolute risk , overreaction is its own cost." },
   { text: "Switch to mouse studies.", misconception: "Mouse studies are even shakier for humans." }
  ], why: "Single dramatic claims are noisy. Meta-analyses + understanding absolute vs relative risk beat headlines." },
  { q: "Best evidence on resistance training over 60?", options: [
   { text: "Avoid it , risk of injury too high.", misconception: "The exact opposite , sarcopenia and falls are the bigger risk." },
   { text: "Do it 2-3×/week , reduces sarcopenia + fall risk, improves outcomes.", correct: true },
   { text: "Only cardio matters at that age.", misconception: "Cardio matters; strength matters too, especially for falls + frailty." },
   { text: "Only with a personal trainer.", misconception: "Trainers help, but not strictly required." }
  ], why: "Sarcopenia is one of the biggest predictors of frailty + falls + death over 65. Strength training pushes back the curve." },
  { q: "Loneliness as a health factor?", options: [
   { text: "Negligible compared to diet.", misconception: "Multiple studies put it in the range of major risk factors." },
   { text: "Comparable to smoking in some mortality studies.", correct: true },
   { text: "Only matters for elderly.", misconception: "Effects across age groups." },
   { text: "Made up.", misconception: "Heavy multi-decade evidence." }
  ], why: "Social connection shows up in basically every longevity study. Loneliness's mortality effect is large." },
  { q: "Walker's 'Why We Sleep' is best characterised as…", options: [
   { text: "Settled science across all claims.", misconception: "Several specific claims have been credibly critiqued." },
   { text: "Core claim (sleep matters) is robust; some specifics are critiqued.", correct: true },
   { text: "Debunked entirely.", misconception: "Too strong , the headline is solid." },
   { text: "Mostly marketing.", misconception: "It's a popular science book by a credentialed researcher; some critique, not dismissal." }
  ], why: "Sleep matters , but the popular book has documented inaccuracies. Trust the core; verify the specifics." }
 ],

 flashcards: [
  { front: "Strongest single lifestyle predictor of longevity?", back: "Cardio fitness (VO₂max). Even modest improvements move all-cause mortality meaningfully." },
  { front: "Why does strength training matter over 60?", back: "Counters sarcopenia (muscle loss) + reduces fall risk + extends independence. Big predictor of late-life outcomes." },
  { front: "Recommended sleep duration?", back: "7-9 hours, consistent timing. Chronic short sleep correlates with worse cardio, metabolic, and cognitive outcomes." },
  { front: "Boring food guidance that holds up?", back: "Mostly plants, enough protein, minimal ultra-processed, don't smoke, alcohol minimal." },
  { front: "How big is loneliness as a health factor?", back: "Comparable to smoking in some mortality studies. Not optional." },
  { front: "Chronic vs acute stress?", back: "Acute stress is fine. Chronic unrelieved stress damages cardio/immune/cognitive systems (Sapolsky)." },
  { front: "Healthspan vs lifespan?", back: "Healthspan = years feeling well. Lifespan = years total. Goal is healthspan, then lifespan." },
  { front: "How to read 'X causes cancer' headlines?", back: "Check meta-analyses, absolute vs relative risk, effect size. Discount single dramatic claims." }
 ],
 glossary: [
  { term: "VO₂max", def: "Max rate of oxygen use , a key measure of cardio fitness." },
  { term: "Sarcopenia", def: "Age-related loss of muscle mass and strength." },
  { term: "Healthspan", def: "Years lived in good health, not just total years alive." },
  { term: "Ultra-processed food", def: "Food heavily transformed with industrial ingredients (Nova classification)." },
  { term: "Chronic stress", def: "Persistent activation of the stress response , damages multiple systems." },
  { term: "Relative risk", def: "Risk in one group vs another , sounds bigger than absolute risk." },
  { term: "Absolute risk", def: "Actual probability of an event in a population." },
  { term: "Meta-analysis", def: "Statistical combination of many studies , usually more reliable than any one." }
 ],

 safetyNote: "Educational, not medical advice. For symptoms, conditions, or before major lifestyle changes (especially with chronic conditions), talk to a qualified doctor. For emergencies in India, the standard number is 112."
};

export default d;
