import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "nutrition",
  icon: "🥗",
  hue: "#86efac",
  category: "Body & Health",
  name: "Nutrition & Food Science",
  tagline: "Eat well without the noise",

  basics: "Nutrition is one of the noisiest fields — single studies, mouse models, and influencer hot takes get more attention than the boring robust picture. The boring picture: eat mostly minimally-processed plants, get enough protein, don't drink your calories, avoid smoking, alcohol minimal. Specific 'best diet' debates matter less than these.",
  whyItMatters: [
    "What you eat affects energy, mood, sleep, weight, every major disease risk.",
    "Most weight-loss diets work briefly; the durable answer is unsexy.",
    "Spot supplement / superfood / diet marketing — most of it is bad science.",
    "Make food choices without exhausting your willpower."
  ],
  realWorldExample: "Brazil's NOVA classification asked a simple question: how processed is this food? Across many large studies, ultra-processed food intake correlates with weight gain, worse cardiometabolic markers, and higher mortality — independent of macros. The lesson isn't 'eat clean'; it's 'the more a food was assembled in a factory, the more cautious you should be.'",

  mentors: [
    { name: "Walter Willett", for: "decades of nutritional epidemiology", work: "Nurses' Health Study leadership" },
    { name: "Marion Nestle", for: "honest food-industry critique", work: "Food Politics (2002)" },
    { name: "Michael Pollan", for: "popular food writing with substance", work: "In Defense of Food (2008)" },
    { name: "Tim Spector", for: "microbiome + food diversity", work: "The Diet Myth (2015)" },
    { name: "Carlos Monteiro", for: "the NOVA ultra-processed-food framework", work: "NOVA classification" }
  ],

  diagrams: [
    { kind: "bars", title: "Rough macro split by gram → calorie", caption: "Energy density: carbs/protein are 4 kcal/g; fat is 9 kcal/g; alcohol is 7.", data: { items: [
      { label: "Carbs", value: 4 }, { label: "Protein", value: 4 }, { label: "Fat", value: 9 }, { label: "Alcohol", value: 7 }
    ], unit: " kcal/g" } },
    { kind: "pyramid", title: "Eat-this-most → eat-this-least (rough)", caption: "Most diets that work cluster around this rough shape.", data: { levels: ["Ultra-processed", "Red/processed meat", "Refined grains/sugar", "Whole grains/legumes", "Veg/fruit/whole foods"] } }
  ],

  synthesis: [
    { concept: "Mostly plants", linksTo: "health", note: "Same recommendation; nutrition is one lever inside the larger health picture." },
    { concept: "Marketing → health claims", linksTo: "marketing", note: "Most food labels are positioning before they're nutrition." }
  ],

  concepts: [
    { t: "Calories: thermodynamics is still in charge", short: "Energy balance is the underlying law; specific macros tune behaviour.", deep: "Long-term weight is broadly governed by calories in vs out. That doesn't mean 'just eat less' is good advice — food choice, satiety, hormones, and lifestyle dramatically affect whether you can sustain a deficit. But no diet repeals physics; if any 'magic' diet works, it's because it lowered your intake.", status: "settled", reflect: "Do you know your rough maintenance calories? If not, that's the next baseline." },
    { t: "Protein matters more than you think", short: "Especially with age — for muscle, satiety, metabolic health.", deep: "Most adults under-eat protein, especially as they age. ~0.8 g/kg is the bare-minimum 'no deficiency' target; 1.2–1.6 g/kg is closer to optimal for active adults and the elderly. Protein is also the most satiating macro — distributes hunger better across the day.", status: "settled", reflect: "Rough protein intake yesterday? Distribute it across meals?" },
    { t: "Ultra-processed food", short: "The more it was assembled in a factory, the more cautious you should be.", deep: "NOVA Group 4 ('ultra-processed') correlates with worse outcomes in many large studies, even controlling for calories and macros. The food matrix, additives, and palatability seem to drive over-consumption. The boring fix: cook more, choose minimally processed ingredients.", status: "settled", reflect: "What % of your food this week was minimally processed?" },
    { t: "Fibre + plant diversity", short: "30+ different plants/week matters more than counting any single macro.", deep: "Tim Spector and team: gut microbiome diversity tracks plant diversity. People eating 30+ different plants a week have notably different (better) microbiomes than those eating <10. Fibre is the unsexy big lever.", status: "debated", reflect: "How many different plants did you eat last week? (Spices and herbs count.)" },
    { t: "Sugar isn't poison — but liquid sugar is a problem", short: "Whole fruit is fine; sugary drinks are the consistent loser.", deep: "Sugar-sweetened beverages (and most fruit juices) consistently correlate with worse outcomes. They're calorie-dense without satiating. Whole fruit ≠ same problem. The fast simple fix that beats most 'diets': stop drinking calories.", status: "settled", reflect: "How many calories did you drink last week?" },
    { t: "Saturated fat, red meat, and the noise", short: "Effect sizes are smaller than the headlines.", deep: "Decades of debate. The honest picture from meta-analyses: replacing saturated fat with polyunsaturated fat modestly improves cardiovascular markers; red and especially processed meat correlate with modestly worse outcomes. None of these are catastrophic — but the trend is consistent and worth a nudge if cardiovascular risk matters to you.", status: "debated", reflect: "Where are you taking a strong dietary stance based on confident headlines rather than effect sizes?" },
    { t: "Hydration + electrolytes", short: "Water and sodium are real; '8 glasses a day' is folklore.", deep: "Thirst is a reasonable signal for most. Heavy training and hot climates change the math — salt and water replacement matter. The marketing-driven 'always be hydrating' culture is mostly noise; the actual deficit cases (athletes, hot work, illness) are real.", status: "framework", reflect: "When did you last actually feel thirsty? When did you last drink water 'because you should'?" },
    { t: "Spot food marketing", short: "Health claims on packaging are marketing, not science.", deep: "'Made with whole grains,' 'no added sugar,' 'high protein,' 'natural,' 'plant-based' — none guarantee a good food. Read the ingredient list (first 3 ingredients dominate); be wary of long lists of things you can't pronounce. Even within 'organic' or 'gluten-free,' ultra-processed exists.", status: "settled", reflect: "Pick the front of one packaged food. Now read the back. How aligned are they?" }
  ],

  counterView: "Lots of confident diet books — keto, carnivore, plant-based-only, intermittent-fasting-fixes-everything — overreach the evidence. None has been shown to be uniquely superior over long horizons in well-controlled studies; most work as long as people stick to them, mostly by lowering total intake and reducing ultra-processed food. The 'sugar is poison' framing oversimplifies — whole-fruit sugar isn't equivalent to a soda. Also, much of nutrition epidemiology is observational, which means confounders are persistent. Treat any single dramatic dietary claim with suspicion; trust patterns that show up across many designs.",

  capabilities: [
    "Estimate your maintenance calories.",
    "Hit a target protein intake daily without obsession.",
    "Spot ultra-processed food and reduce it by half without dieting.",
    "Read a nutrition label and ingredient list intelligently.",
    "Cook 3–5 simple meals you actually like."
  ],
  cheatsheet: [
    "Mostly plants. Enough protein. Don't drink your calories.",
    "30+ plants/week beats counting macros for most.",
    "Ultra-processed food is the consistent loser.",
    "Don't trust food packaging — read the ingredient list.",
    "Sugary drinks are the easiest win to drop.",
    "Any diet you can sustain beats a perfect one you can't."
  ],

  roadmap: [
    { rank: "Novice", focus: "Audit + cut the obvious", do: "Track a week honestly. Cut sugary drinks. Read 3 ingredient lists daily.", milestone: "You know what you eat and stopped drinking calories.", time: "~2 weeks" },
    { rank: "Apprentice", focus: "Protein + plants", do: "Hit a real protein target. Add 5 new plants a week.", milestone: "Protein + diversity are reliable.", time: "~1 month" },
    { rank: "Practitioner", focus: "Cook a small repertoire", do: "Learn 5 simple repeatable meals you like.", milestone: "Default behaviour is cooking, not ordering.", time: "~2–3 months" },
    { rank: "Specialist", focus: "Tune to goal", do: "Adjust for muscle gain, cut, sport, health condition.", milestone: "Diet supports your specific goal honestly.", time: "~3–6 months" },
    { rank: "Expert", focus: "Long-term sustainable", do: "Adjust seasonally, by life phase. No yo-yo.", milestone: "Sustainable for years, not weeks.", time: "~1 year+" },
    { rank: "Master", focus: "Family + culture", do: "Cook well for people you love. Pass it on.", milestone: "Your household eats well by default.", time: "ongoing" },
    { rank: "Grandmaster", focus: "Teach", do: "Help others without selling them a diet.", milestone: "Others rely on your judgement.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "Harvard Nutrition Source",                       what: "Genuinely good free nutrition info from the Walter Willett team.",         url: "https://nutritionsource.hsph.harvard.edu/",                                          verify: false, lastVerified: "2026-06" },
      { name: "ZOE podcast (Tim Spector)",                       what: "Free episodes, evidence-based, microbiome-aware.",                          url: "https://zoe.com/podcast",                                                            verify: false, lastVerified: "2026-06" },
      { name: "WHO — healthy diet factsheets",                  what: "Conservative, official, useful baseline.",                                  url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",                       verify: false, lastVerified: "2026-06" },
      { name: "British Nutrition Foundation",                    what: "Free, accessible nutrition science explainers.",                            url: "https://www.nutrition.org.uk/",                                                      verify: false, lastVerified: "2026-06" },
      { name: "Marion Nestle — Food Politics blog",             what: "Honest food-industry critique, from the author.",                            url: "https://www.foodpolitics.com/",                                                      verify: false, lastVerified: "2026-06" },
      { name: "Examine.com — nutrition pages",                  what: "Evidence-graded summaries of foods + supplements.",                          url: "https://examine.com/",                                                                verify: false, lastVerified: "2026-06" },
      { name: "USDA FoodData Central",                          what: "Free database of food composition (US).",                                    url: "https://fdc.nal.usda.gov/",                                                          verify: false, lastVerified: "2026-06" },
      { name: "Michael Pollan — articles archive",              what: "Free essays from the popular food-writing classic.",                        url: "https://michaelpollan.com/articles/",                                                 verify: false, lastVerified: "2026-06" },
      { name: "EAT-Lancet Commission summary (open)",            what: "Influential planetary-health diet framework.",                              url: "https://eatforum.org/eat-lancet-commission/",                                         verify: false, lastVerified: "2026-06" },
      { name: "Open Food Facts",                                what: "Free, crowdsourced food-label database. Scan-and-check.",                    url: "https://world.openfoodfacts.org/",                                                   verify: false, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "In Defense of Food — Michael Pollan",            what: "\"Eat food, not too much, mostly plants.\" Best general read.",              url: "https://michaelpollan.com/books/in-defense-of-food/",                                price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "The Diet Myth — Tim Spector",                    what: "Microbiome + plant diversity case.",                                         url: "",                                                                                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Food Politics — Marion Nestle",                  what: "How the food industry shapes what 'healthy' means.",                          url: "https://www.foodpolitics.com/",                                                      price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "How Not to Die — Michael Greger",                what: "Plant-forward case w/ extensive citations.",                                  url: "https://nutritionfacts.org/book/how-not-to-die/",                                    price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "The Omnivore's Dilemma — Michael Pollan",         what: "Where food comes from, deeply reported.",                                    url: "https://michaelpollan.com/books/the-omnivores-dilemma/",                              price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Salt Sugar Fat — Michael Moss",                  what: "How processed-food companies engineer cravings.",                            url: "",                                                                                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Ultra-Processed People — Chris van Tulleken",    what: "Modern accessible take on NOVA Group 4.",                                    url: "",                                                                                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Spoon-Fed — Tim Spector",                         what: "Twenty myths in nutrition, debunked.",                                       url: "",                                                                                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Why We Get Sick — Bikman / Why We Get Fat — Taubes", what: "Insulin-centric critiques. Read with debate caveats.",                  url: "",                                                                                    price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The China Study — Campbell",                     what: "Influential, controversial. Read alongside its critics.",                    url: "",                                                                                    price: "verify", verify: true, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Drop liquid sugar", d: "For 2 weeks, no sugary drinks (incl. juices). Water/tea/coffee unsweetened.", xp: 50 },
    { t: "Protein target", d: "Hit ~1.2 g/kg protein daily for one week. Note satiety vs your normal week.", xp: 50 },
    { t: "30 plants/week", d: "Aim for 30 different plants in one week. (Spices, herbs count.) Track them.", xp: 50 },
    { t: "Cook 3 meals", d: "Cook 3 meals from minimally processed ingredients this week. Repeat them.", xp: 50 },
    { t: "Label literacy", d: "Pick 3 packaged foods you eat. Read each ingredient list. Note any surprises.", xp: 30 }
  ],
  capstone: { t: "Sustainable eating plan", d: "Write a 1-page sustainable eating plan: how you eat on a normal day + a busy day + a social one. Reread it monthly. Adjust without dieting.", xp: 200 },

  quiz: [
    { q: "Most reliable single dietary change for general health?", options: [
      { text: "Going keto.", misconception: "Works for some; not the most evidence-backed broad change." },
      { text: "Stop drinking calories (sugary drinks, juices).", correct: true },
      { text: "Eat only organic.", misconception: "Organic is a production category, not a nutrition guarantee." },
      { text: "Take more supplements.", misconception: "Supplements have mostly small, narrow effects." }
    ], why: "Sugar-sweetened beverages consistently correlate with worse outcomes and are calorie-dense without satiating.", testOut: true },
    { q: "Ultra-processed food (NOVA Group 4) is best characterised as…", options: [
      { text: "Anything cooked.", misconception: "Cooking is processing — not the issue. Ultra-processed = heavy industrial transformation." },
      { text: "Food heavily transformed industrially, often with additives uncommon at home.", correct: true },
      { text: "Anything in a package.", misconception: "Plain rice in a bag isn't ultra-processed; packaging isn't the criterion." },
      { text: "Junk food only.", misconception: "Some 'health' foods are also ultra-processed (e.g. many protein bars)." }
    ], why: "NOVA's criterion is industrial transformation + ingredients you wouldn't find at home — not 'processed at all' or 'junk only.'" },
    { q: "Adequate protein for most active adults (rough)?", options: [
      { text: "0.5 g/kg.", misconception: "Below baseline; insufficient even for sedentary." },
      { text: "1.2–1.6 g/kg.", correct: true },
      { text: "3 g/kg.", misconception: "Higher than evidence supports for most; rarely needed." },
      { text: "10% of calories regardless of weight.", misconception: "Body weight is a better anchor for active adults." }
    ], why: "1.2–1.6 g/kg is a reasonable target for active adults; higher for endurance athletes and older adults." },
    { q: "Best evidence on saturated fat?", options: [
      { text: "It's neutral; old guidance was wrong.", misconception: "Some old guidance was overstated; replacing it with polyunsaturated still modestly helps cardiovascular markers." },
      { text: "Replacing saturated with polyunsaturated fat modestly improves cardiovascular markers.", correct: true },
      { text: "All fats are equal.", misconception: "Different effects across types." },
      { text: "Eat as much as possible.", misconception: "Not what the evidence shows." }
    ], why: "Meta-analyses support modest cardiovascular benefits from the swap." },
    { q: "Best way to spot food-industry marketing?", options: [
      { text: "Trust 'made with whole grains.'", misconception: "Marketing claim; often a product with mostly refined grain has a sliver of whole." },
      { text: "Read the ingredient list and ignore the front of the package.", correct: true },
      { text: "Trust 'natural.'", misconception: "Not a regulated, meaningful term." },
      { text: "Believe celebrity endorsements.", misconception: "Useful for marketing, useless for nutrition." }
    ], why: "Front-of-package claims are marketing. The ingredient list is closer to the truth." }
  ],

  flashcards: [
    { front: "Energy values of macros?", back: "Carbs 4 kcal/g, protein 4, fat 9, alcohol 7." },
    { front: "Reasonable protein target for active adults?", back: "About 1.2–1.6 g/kg of body weight daily, distributed across meals." },
    { front: "Ultra-processed food, NOVA-style?", back: "Heavily industrially transformed food with additives uncommon at home. Correlates w/ worse outcomes independent of calories." },
    { front: "Plant diversity headline?", back: "Aim for 30+ different plants per week (herbs/spices count) — tracks gut microbiome diversity." },
    { front: "Easiest health win in food?", back: "Stop drinking calories (sugary drinks, juices)." },
    { front: "Saturated fat — honest position?", back: "Replacing saturated with polyunsaturated modestly improves cardiovascular markers." },
    { front: "Are diet books reliable?", back: "Most overreach the evidence. Patterns across studies > confident single books." },
    { front: "What's the ingredient list rule?", back: "First 3 ingredients dominate. Long lists of unfamiliar additives are a yellow flag." }
  ],
  glossary: [
    { term: "Calorie", def: "Unit of energy. (Technically kilocalorie in everyday use.)" },
    { term: "Macro", def: "Macronutrient — protein, carbs, or fat." },
    { term: "Ultra-processed food", def: "NOVA Group 4 — heavily industrially transformed food." },
    { term: "Fibre", def: "Plant-based carbohydrates the body doesn't digest; gut food + satiety." },
    { term: "Microbiome", def: "Community of microbes in/on the body, especially gut." },
    { term: "Glycaemic index", def: "How fast a food raises blood glucose. Real, but often overweighted in isolation." },
    { term: "Meta-analysis", def: "Combined statistical analysis of many studies." },
    { term: "Relative vs absolute risk", def: "Relative risk sounds bigger; absolute risk is what actually changes for you." }
  ],

  safetyNote: "Educational, not medical / dietary advice. For specific conditions (diabetes, kidney issues, eating disorders, pregnancy, allergies, etc.), see a qualified clinician/dietitian before changing your diet."
};

export default d;
