import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "health",
  icon: "🫀",
  hue: "#f87171",
  category: "Body & Health",
  name: "Health, Longevity & How the Body Works",
  tagline: "Live longer, feel better — what's actually solid",

  basics: "Most of health is a small set of unglamorous habits — movement, sleep, food, social connection, not smoking, not abusing alcohol — that collectively change every disease risk that matters. Modern medicine is excellent at acute crises and surprisingly weak at chronic prevention; the gap is bridged by what you do daily. The science is noisier than influencer hot takes suggest, but the basics are robust.",
  whyItMatters: [
    "Almost every chronic disease (heart, diabetes, cancer, dementia) is shifted by the basics.",
    "You're a literate patient when you talk to doctors.",
    "You spot bad-science health claims (single studies, mouse models, supplement hype).",
    "Healthspan, not just lifespan — feeling well in your 70s is the actual goal."
  ],
  realWorldExample: "The 'Blue Zones' framing (areas with high centenarian rates) has been used to sell every food and lifestyle pitch under the sun. The honest picture is messier — diet matters, but so do strong social ties, low chronic stress, daily movement, and (in some Blue Zones) under-recorded ages. Pull the big robust lessons (move daily, eat mostly plants, sleep, belong to a community) and skip the diet-specific salesmanship.",

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
    { t: "VO₂max + cardio fitness", short: "The single most predictive lifestyle measure of longevity.", deep: "Cardio fitness (VO₂max) correlates strongly with all-cause mortality reduction across multiple large studies. Going from 'bottom quartile' to 'just above average' is a larger effect than most medications. Even moderate aerobic training (zone 2, 150+ min/week) moves it.", status: "settled", reflect: "When did you last get out of breath on purpose?" },
    { t: "Strength + muscle mass", short: "Muscle is metabolic insurance — and a major fall-risk reducer in later life.", deep: "Sarcopenia (age-related muscle loss) is one of the biggest predictors of frailty + falls + death over 65. Resistance training 2–3×/week pushes back the curve. Older people often think they shouldn't lift; the evidence says the opposite.", status: "settled", reflect: "What's your current strength baseline? Could you do 10 push-ups today?" },
    { t: "Sleep", short: "7–9 hours, consistent timing. Skimping kills focus, mood, recovery, and over time, lifespan.", deep: "Sleep is not 'rest' — it's active memory consolidation, hormonal regulation, and immune work. Chronic short sleep correlates with worse cardiovascular, metabolic, and cognitive outcomes. (Matthew Walker's book popularised this; some specific claims are critiqued, but the core is robust.)", status: "settled", reflect: "Average hours of sleep last week? Average bedtime variability?" },
    { t: "Food: mostly plants, enough protein, not too much", short: "Boring works.", deep: "The big robust pattern across most studies: vegetables/fruits/whole grains/legumes high, ultra-processed food low, enough protein (especially with age), don't smoke, alcohol minimal-to-zero. The specific 'best diet' debates matter less than the basics; most diets that fix the basics work.", status: "settled", reflect: "What % of your food this week was minimally processed?" },
    { t: "Social connection", short: "Loneliness is comparable to smoking in mortality risk in some studies.", deep: "Strong social ties show up in basically every longevity study. The Harvard Study of Adult Development's headline: relationships predict late-life health better than wealth, fame, or LDL cholesterol. Treat 'who do you call when something's wrong?' as a health metric.", status: "settled", reflect: "Who would you call at 3am if something went wrong? How long since you spoke?" },
    { t: "Chronic stress (Sapolsky)", short: "Acute stress is fine. Chronic stress chews you up.", deep: "Sapolsky's frame: the stress response evolved for short emergencies. Modern life makes it run constantly, which damages cardiovascular, immune, and cognitive function. Doesn't mean 'avoid all stress' — means avoid chronic unrelieved stress.", status: "settled", reflect: "Where in your life is the stress dial stuck on?" },
    { t: "Healthspan vs lifespan", short: "Live 90 years feeling like 60. Not 90 years feeling like 85.", deep: "Adding years isn't the only goal; quality of those years is the real one. The four horsemen Attia names (heart disease, cancer, neurodegenerative, metabolic) are the targets, because they shrink healthspan most.", status: "framework", reflect: "Picture yourself at 80. What do you want to still be able to do? What habit today supports that?" },
    { t: "Be a literate patient", short: "Ask doctors specific questions. Get second opinions. Read studies.", deep: "Modern medicine is excellent at acute crises and surprisingly weak at chronic prevention. You'll get better care if you can ask 'what's the effect size?' 'is that risk relative or absolute?' 'what's the alternative?' Doctors generally welcome it.", status: "framework", reflect: "Next appointment, write 3 specific questions before you go." }
  ],

  counterView: "Almost every confident health claim from a single book or podcast is at least partly wrong. Walker's 'Why We Sleep' has well-documented inaccuracies; many 'fasting cures everything' claims rest on mouse studies; 'sugar is poison' / 'red meat causes cancer' headlines usually move risk by a few percent, not 100. Healthspan-medicine voices (Attia, Sinclair) over-extrapolate from animal models more than they admit. The best honest position: trust the boring fundamentals (move, sleep, eat mostly plants, social ties, no smoking, low alcohol), discount any single hot claim, and update slowly when meta-analyses move.",

  capabilities: [
    "Do moderate cardio 150+ min/week — and notice your VO₂max improving.",
    "Run resistance training 2–3×/week without hurting yourself.",
    "Keep a consistent sleep schedule with average 7–9 hours.",
    "Spot ultra-processed food and reduce it without dieting.",
    "Ask doctors better questions (effect sizes, alternatives, second opinions)."
  ],
  cheatsheet: [
    "Move daily. Cardio + resistance + don't sit all day.",
    "Sleep 7–9 hours. Consistent timing.",
    "Eat mostly plants. Enough protein (esp. with age). Minimal ultra-processed.",
    "Don't smoke. Minimal alcohol.",
    "Maintain real friendships. Loneliness has real costs.",
    "Manage chronic stress. Acute stress is fine.",
    "Discount any single dramatic health claim."
  ],

  roadmap: [
    { rank: "Novice", focus: "Audit", do: "Track sleep, movement, food for 2 weeks. Don't change anything yet.", milestone: "You know your current baseline.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Move daily", do: "150 min/week of cardio + 2 resistance sessions. Build, don't overdo.", milestone: "Movement is a habit, not a sometimes-thing.", time: "~1–2 months" },
    { rank: "Practitioner", focus: "Fix sleep + food basics", do: "Consistent sleep window. Mostly-plants, less ultra-processed, enough protein.", milestone: "Sleep + food don't sabotage everything else.", time: "~3 months" },
    { rank: "Specialist", focus: "Stress + connection", do: "Build at least one daily stress-down practice. Schedule social connection.", milestone: "Your stress dial isn't stuck on.", time: "~6 months" },
    { rank: "Expert", focus: "Tune individual response", do: "Get key bloodwork (lipids, A1C, etc.). Adjust deliberately.", milestone: "You know your numbers + their trends.", time: "~1 year" },
    { rank: "Master", focus: "Long-horizon plan", do: "Think in decades. Healthspan plan w/ family + doctor input.", milestone: "Your plan goes out 20 years honestly.", time: "~2+ years" },
    { rank: "Grandmaster", focus: "Coach + give back", do: "Help others — without selling them anything.", milestone: "People around you benefit.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Peter Attia — The Drive (podcast + free articles)",   what: "Long-form, technical, accessible. Best general longevity-medicine intro.",            url: "https://peterattiamd.com/",                                                            verify: false, lastVerified: "2026-06" },
      { name: "WHO — physical activity guidelines",                  what: "Official, conservative, evidence-based baseline.",                                    url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",                    verify: false, lastVerified: "2026-06" },
      { name: "Harvard Nutrition Source",                            what: "Free, Walter Willett team — strong nutrition baseline.",                              url: "https://nutritionsource.hsph.harvard.edu/",                                            verify: false, lastVerified: "2026-06" },
      { name: "NIH — National Institutes of Health (US)",            what: "Free public-health information from primary US source.",                              url: "https://www.nih.gov/",                                                                  verify: false, lastVerified: "2026-06" },
      { name: "Examine.com (free pages)",                            what: "Evidence-graded summaries of supplements + interventions.",                            url: "https://examine.com/",                                                                  verify: false, lastVerified: "2026-06" },
      { name: "PubMed",                                                what: "Search primary biomedical research before believing podcasts.",                          url: "https://pubmed.ncbi.nlm.nih.gov/",                                                       verify: false, lastVerified: "2026-06" },
      { name: "Andrew Huberman — public lectures (YouTube)",          what: "Stanford neuroscientist; mix of solid + speculative — use w/ critique.",                url: "https://www.hubermanlab.com/",                                                          verify: true, lastVerified: "2026-06" },
      { name: "Sleep Foundation",                                      what: "Free reference on sleep stages, hygiene, disorders.",                                  url: "https://www.sleepfoundation.org/",                                                      verify: false, lastVerified: "2026-06" },
      { name: "Mayo Clinic — patient education",                     what: "Reliable plain-English explanations of conditions + treatments.",                      url: "https://www.mayoclinic.org/patient-care-and-health-information",                        verify: true, lastVerified: "2026-06" },
      { name: "Stronger by Science — Greg Nuckols",                   what: "Free, well-cited articles on strength training research.",                              url: "https://www.strongerbyscience.com/",                                                    verify: false, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Outlive — Peter Attia",                                what: "The four horsemen + the healthspan playbook.",                                          url: "https://peterattiamd.com/outlive/",                                                    price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Why Zebras Don't Get Ulcers — Sapolsky",              what: "Stress biology, beautifully written.",                                                 url: "https://en.wikipedia.org/wiki/Why_Zebras_Don%27t_Get_Ulcers",                          price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Being Mortal — Atul Gawande",                          what: "How medicine actually treats aging + dying — and what it gets wrong.",                  url: "https://atulgawande.com/book/being-mortal/",                                            price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Lifespan — David Sinclair",                            what: "Longevity science w/ caveats — read alongside critiques.",                              url: "",                                                                                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "How Not to Die — Michael Greger",                     what: "Plant-forward case w/ extensive citations; vegan-skewed.",                              url: "https://nutritionfacts.org/book/how-not-to-die/",                                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Comfort Crisis — Michael Easter",                  what: "On voluntary discomfort + modern softness.",                                            url: "",                                                                                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Why We Sleep — Matthew Walker",                        what: "Popular sleep book — sound core, specific claims critiqued.",                            url: "https://en.wikipedia.org/wiki/Why_We_Sleep",                                            price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Body — Bill Bryson",                                what: "Friendly, broad tour of human biology.",                                                url: "https://en.wikipedia.org/wiki/The_Body:_A_Guide_for_Occupants",                          price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Spark — John Ratey",                                    what: "Exercise + the brain. Practical + research-grounded.",                                  url: "",                                                                                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Atomic Habits — James Clear (cross-applies)",         what: "Behavior-change layer that makes the above stick.",                                     url: "https://jamesclear.com/atomic-habits",                                                  price: "verify", verify: false, lastVerified: "2026-06" }
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
      { text: "Refuse to eat that food.", misconception: "Often based on tiny shifts in absolute risk — overreaction is its own cost." },
      { text: "Switch to mouse studies.", misconception: "Mouse studies are even shakier for humans." }
    ], why: "Single dramatic claims are noisy. Meta-analyses + understanding absolute vs relative risk beat headlines." },
    { q: "Best evidence on resistance training over 60?", options: [
      { text: "Avoid it — risk of injury too high.", misconception: "The exact opposite — sarcopenia and falls are the bigger risk." },
      { text: "Do it 2–3×/week — reduces sarcopenia + fall risk, improves outcomes.", correct: true },
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
      { text: "Debunked entirely.", misconception: "Too strong — the headline is solid." },
      { text: "Mostly marketing.", misconception: "It's a popular science book by a credentialed researcher; some critique, not dismissal." }
    ], why: "Sleep matters — but the popular book has documented inaccuracies. Trust the core; verify the specifics." }
  ],

  flashcards: [
    { front: "Strongest single lifestyle predictor of longevity?", back: "Cardio fitness (VO₂max). Even modest improvements move all-cause mortality meaningfully." },
    { front: "Why does strength training matter over 60?", back: "Counters sarcopenia (muscle loss) + reduces fall risk + extends independence. Big predictor of late-life outcomes." },
    { front: "Recommended sleep duration?", back: "7–9 hours, consistent timing. Chronic short sleep correlates with worse cardio, metabolic, and cognitive outcomes." },
    { front: "Boring food guidance that holds up?", back: "Mostly plants, enough protein, minimal ultra-processed, don't smoke, alcohol minimal." },
    { front: "How big is loneliness as a health factor?", back: "Comparable to smoking in some mortality studies. Not optional." },
    { front: "Chronic vs acute stress?", back: "Acute stress is fine. Chronic unrelieved stress damages cardio/immune/cognitive systems (Sapolsky)." },
    { front: "Healthspan vs lifespan?", back: "Healthspan = years feeling well. Lifespan = years total. Goal is healthspan, then lifespan." },
    { front: "How to read 'X causes cancer' headlines?", back: "Check meta-analyses, absolute vs relative risk, effect size. Discount single dramatic claims." }
  ],
  glossary: [
    { term: "VO₂max", def: "Max rate of oxygen use — a key measure of cardio fitness." },
    { term: "Sarcopenia", def: "Age-related loss of muscle mass and strength." },
    { term: "Healthspan", def: "Years lived in good health, not just total years alive." },
    { term: "Ultra-processed food", def: "Food heavily transformed with industrial ingredients (Nova classification)." },
    { term: "Chronic stress", def: "Persistent activation of the stress response — damages multiple systems." },
    { term: "Relative risk", def: "Risk in one group vs another — sounds bigger than absolute risk." },
    { term: "Absolute risk", def: "Actual probability of an event in a population." },
    { term: "Meta-analysis", def: "Statistical combination of many studies — usually more reliable than any one." }
  ],

  safetyNote: "Educational, not medical advice. For symptoms, conditions, or before major lifestyle changes (especially with chronic conditions), talk to a qualified doctor. For emergencies in India, the standard number is 112."
};

export default d;
