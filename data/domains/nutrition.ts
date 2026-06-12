import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "nutrition",
 icon: "🥗",
 hue: "#86efac",
 category: "Body & Health",
 name: "Nutrition & Food Science",
 tagline: "Eat well without the noise",

 basics: "Nutrition is one of the loudest fields in science, and most of that noise is wrong. Every month a new study, a new podcast, a new diet book tells you the opposite of the last one. Eat fat. Don't. Carbs are evil. No they aren't. Cut everything. Eat everything raw. The boring, deeply unsexy truth that survives every shift of fashion is: eat mostly plants you'd recognise as plants (less stuff that came out of a factory), get enough protein, don't drink your sugary calories, don't smoke, and keep alcohol low. That's it. Get the basics right and the specific best-diet arguments matter way less than the internet pretends.",
 whyItMatters: [
  "What you eat shapes your energy, mood, sleep quality, weight, and basically every major disease risk you'll meet.",
  "Most diets \"work\" for a few months and then quietly stop. The durable answer is unsexy because anything sexy can't last decades.",
  "You start spotting the supplement and superfood marketing , most of which is one study, one mouse, and a lot of profit margin.",
  "You stop spending your willpower on food. The right defaults make most decisions for you, automatically."
 ],
 realWorldExample: "In 2009, Brazilian researchers asked a deceptively simple question: how processed is this food? They built a four-level scale called NOVA. Level 1 is fruit, rice, eggs , basically untouched. Level 4 is the stuff with ingredient lists like a chemistry exam , most cereals, sodas, packaged snacks, instant noodles. Across many large studies, the more level-4 \"ultra-processed\" food a population eats, the worse the outcomes , weight gain, heart disease, mortality , even when calories and macros match. The lesson isn't \"eat clean.\" The lesson is: the more your food was assembled in a factory, the more careful you should be. Cook more. The rest mostly takes care of itself.",

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

 subdomains: [
  { id: "basics", name: "Macro Basics" },
  { id: "quality", name: "Food Quality" },
  { id: "myths", name: "Myths and Marketing" },
  { id: "habits", name: "Sustainable Habits" },
 ],

 concepts: [
  { t: "Calories: physics is still in charge",    short: "Long-term weight is governed by energy in vs energy out. No diet repeals thermodynamics.",                                                deep: "Every successful diet , keto, vegan, intermittent fasting, low-fat, Mediterranean , works for the same underlying reason: people end up eating less than they burn over time. The diet that works for you is the one you can sustain, because all of them have to obey the same physics. That doesn't make \"just eat less\" useful advice , food choice, satiety, hormones, and lifestyle dramatically affect whether you can sustain a deficit, and willpower runs out. But if any \"magic\" diet works, it's because it quietly lowered your intake, usually by cutting ultra-processed food. Knowing this protects you from the next confidently-sold metabolic miracle.",                                                                                                      status: "settled",  reflect: "Roughly, what are your maintenance calories per day? If you don't know, that's the next basic measurement." },
  { t: "Protein matters more than you think",     short: "Especially as you age. For muscle, satiety, and not feeling hungry every two hours.",                                                  deep: "Most adults eat enough protein to avoid clinical deficiency and not nearly enough for what they actually need. As you age, the body becomes less efficient at using dietary protein for muscle , so you actually need more, not less. A reasonable target for an active adult is 1.2 to 1.6 grams per kilogram of bodyweight per day, distributed across meals rather than dumped into one. The bonus: protein is the most satiating macro , meals with enough protein keep you genuinely full for longer, which makes everything else easier.",                                                                                                                                                                       status: "settled",  reflect: "Roughly how much protein did you eat yesterday? Was it spread across meals or concentrated in one?" },
  { t: "Ultra-processed food",             short: "The more your food was assembled in a factory, the more careful you should be with it.",                                                deep: "Brazilian researchers built a four-level scale called NOVA. Group 1 is whole foods , fruit, rice, lentils, eggs, milk. Group 4 is ultra-processed , most cereals, instant noodles, sodas, packaged snacks, with ingredient lists that read like a chemistry exam. Across many large studies, populations eating more Group 4 food have worse weight, cardiovascular, and mortality outcomes , even when calories and macros are matched. The combination of additives, low fibre, and engineered palatability seems to drive over-consumption. The fix isn't to eat \"clean\" or join a cult. It's to cook more, buy more single-ingredient foods, and stop pretending the granola bar is healthy because the box says so.",                                                                                 status: "settled",  reflect: "Honestly: what percent of your food this week came from a packet with more than five ingredients?" },
  { t: "Fibre and plant diversity",          short: "30+ different plants a week probably matters more than chasing any single macro.",                                                    deep: "Tim Spector and the ZOE team published a striking finding: people who eat 30 or more different plants a week have measurably more diverse gut microbiomes than people who eat 10 or fewer. The microbiome influences immunity, mood, weight regulation, and inflammation in ways we're still understanding. The advice is forgiving , spices, herbs, beans, seeds, fruits, vegetables, whole grains all count. You don't need exotic superfoods; you need variety. Aim to add one new plant to your shopping each week and the count climbs fast.",                                                                                                                                                                     status: "debated",  reflect: "How many different plants did you eat last week? Count herbs and spices. Most people are surprised by how low the number is." },
  { t: "Sugar isn't poison , but drinking your sugar is", short: "Whole fruit is fine. Sugary drinks are the most consistent loser.",                                                         deep: "Among all the diet debates, one finding survives almost every shift: sugar-sweetened beverages (sodas, sweet teas, most packaged juices) consistently correlate with worse weight, metabolic, and mortality outcomes. The reason is honest: they're calorie-dense without filling you up. A 500ml cola is roughly 200 calories of pure sugar that you don't notice. The same 200 calories from an apple come with fibre, water, and satiety , and you'd notice. The single easiest big move most people can make: stop drinking calories. Water, unsweetened tea, coffee. Whole fruit is fine.",                                                                                                                                                 status: "settled",  reflect: "Roughly, how many calories did you drink last week? Most people underestimate by half." },
  { t: "Saturated fat, red meat, and the noise",    short: "The headlines are louder than the actual effect sizes. The trend matters; the catastrophe doesn't exist.",                                       deep: "You've read \"red meat causes cancer\" or \"saturated fat will kill you.\" The decades-long debate, distilled honestly: replacing saturated fat with polyunsaturated fat modestly improves cardiovascular markers. Red , and especially processed , meat correlates with modestly worse outcomes. None of these are catastrophic. Almost none change your absolute risk by more than a few percentage points. So: a nudge in the lower-saturated-fat, less-processed-meat direction is supported by the evidence if cardiovascular risk matters to you. Treating every burger as a death sentence isn't. Read effect sizes, not headlines.",                                                                                                                             status: "debated",  reflect: "Where are you taking a confident dietary stance based on headlines rather than knowing the actual effect size?" },
  { t: "Hydration and electrolytes",          short: "Water and sodium are real. \"Eight glasses a day\" is folklore.",                                                             deep: "The \"drink eight glasses a day\" rule has no good scientific origin. For most people, ordinary thirst is a reasonable guide. Drinking past thirst doesn't seem to help, and over-hydration is occasionally dangerous (especially in endurance sports , diluting sodium too low matters). Where hydration genuinely matters: heavy training, hot climates, illness, and certain medical conditions. The hydration-influencer industry sells you a problem most people don't have. Drink when thirsty, drink more around exercise and heat, replace salt during long efforts. That's about it.",                                                                                                                                               status: "framework", reflect: "When did you last actually feel thirsty? When did you last drink water \"because you should\"?" },
  { t: "Spot food marketing on packaging",       short: "Front-of-pack health claims are marketing. The ingredient list is closer to the truth.",                                                deep: "\"Made with whole grains.\" \"No added sugar.\" \"High protein.\" \"Natural.\" \"Plant-based.\" \"Real fruit flavour.\" None of these phrases guarantee anything about the food being good for you, and most of them survived legal review because they technically mean very little. The honest test: flip the box over and read the ingredient list. The first three ingredients dominate. A long list of unfamiliar additives is a yellow flag. Even within \"organic,\" \"gluten-free,\" and \"plant-based,\" ultra-processed food is everywhere. The packaging is selling you a story. The back of the box tells you what's actually inside.",                                                                                                                       status: "settled",  reflect: "Take one packaged food you eat regularly. Read the front of the pack. Then read the back. How aligned are the two stories?" }
 ],

 counterView: "Lots of confident diet books , keto, carnivore, plant-based-only, intermittent-fasting-fixes-everything , overreach the evidence. None has been shown to be uniquely superior over long horizons in well-controlled studies; most work as long as people stick to them, mostly by lowering total intake and reducing ultra-processed food. The 'sugar is poison' framing oversimplifies , whole-fruit sugar isn't equivalent to a soda. Also, much of nutrition epidemiology is observational, which means confounders are persistent. Treat any single dramatic dietary claim with suspicion; trust patterns that show up across many designs.",

 capabilities: [
  "Estimate your maintenance calories.",
  "Hit a target protein intake daily without obsession.",
  "Spot ultra-processed food and reduce it by half without dieting.",
  "Read a nutrition label and ingredient list intelligently.",
  "Cook 3-5 simple meals you actually like."
 ],
 cheatsheet: [
  "Mostly plants. Enough protein. Don't drink your calories.",
  "30+ plants/week beats counting macros for most.",
  "Ultra-processed food is the consistent loser.",
  "Don't trust food packaging , read the ingredient list.",
  "Sugary drinks are the easiest win to drop.",
  "Any diet you can sustain beats a perfect one you can't."
 ],

 roadmap: [
  { rank: "Novice",    focus: "See what you actually eat, and cut the obvious losers",    do: "Track a week honestly , every meal, every drink. Cut sugary drinks (the easy win). Read three ingredient lists daily and start noticing patterns.",                                                                                             milestone: "You know what you actually eat (not what you think you eat) and you've stopped drinking calories.",                                 time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Hit a protein target and a plant variety target",       do: "Aim for 1.2 g/kg of protein daily. Aim for 25-30 different plants a week (herbs and spices count). Two simple targets to anchor everything else.",                                                                                                 milestone: "Protein hits the target most days, plant variety climbs week over week.",                                              time: "~1 month" },
  { rank: "Practitioner", focus: "Build a small cooking repertoire",               do: "Learn five simple meals you can repeat without thinking , built from mostly minimally-processed ingredients. The repertoire matters more than the recipes; you want defaults, not effort.",                                                                            milestone: "Cooking is the default behaviour. Ordering is the exception.",                                                    time: "~2-3 months" },
  { rank: "Specialist",  focus: "Tune to your actual goal",                    do: "Now that the basics are dialled in, adjust for what you specifically want , muscle gain, fat loss, athletic performance, a medical condition. Specifics, not influencer protocols.",                                                                               milestone: "Your eating supports your stated goal , and you can show why honestly.",                                               time: "~3-6 months" },
  { rank: "Expert",    focus: "Adjust seasonally, life-phase to life-phase",          do: "Your needs change as you age, as your sport changes, as your stress changes. Adjust the system you've built rather than blowing it up and rebuilding every six months.",                                                                                      milestone: "Sustainable across years, not just weeks. No yo-yo.",                                                         time: "~1 year+" },
  { rank: "Master",    focus: "Feed people you love well",                    do: "Cook well for family and friends. The way you eat becomes the way your household eats. Habits travel through dinners more than through lectures.",                                                                                                milestone: "Your household eats well by default. Future-you's kids inherit good habits without being told.",                                    time: "ongoing" },
  { rank: "Grandmaster", focus: "Teach without selling a diet",                  do: "Help others build sustainable eating. Don't push a protocol. Lead by example and answer questions honestly.",                                                                                                                    milestone: "People come to you for nutrition judgement and trust the answer because you're not selling them anything.",                              time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Harvard Nutrition Source",            what: "Genuinely good free nutrition info from the Walter Willett team.",     url: "https://nutritionsource.hsph.harvard.edu/",                     verify: false, lastVerified: "2026-06" },
   { name: "ZOE podcast (Tim Spector)",            what: "Free episodes, evidence-based, microbiome-aware.",             url: "https://zoe.com/podcast",                              verify: false, lastVerified: "2026-06" },
   { name: "WHO , healthy diet factsheets",         what: "Conservative, official, useful baseline.",                 url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",            verify: false, lastVerified: "2026-06" },
   { name: "British Nutrition Foundation",          what: "Free, accessible nutrition science explainers.",              url: "https://www.nutrition.org.uk/",                           verify: false, lastVerified: "2026-06" },
   { name: "Marion Nestle , Food Politics blog",       what: "Honest food-industry critique, from the author.",              url: "https://www.foodpolitics.com/",                           verify: false, lastVerified: "2026-06" },
   { name: "Examine.com , nutrition pages",         what: "Evidence-graded summaries of foods + supplements.",             url: "https://examine.com/",                                verify: false, lastVerified: "2026-06" },
   { name: "USDA FoodData Central",             what: "Free database of food composition (US).",                  url: "https://fdc.nal.usda.gov/",                             verify: false, lastVerified: "2026-06" },
   { name: "Michael Pollan , articles archive",       what: "Free essays from the popular food-writing classic.",            url: "https://michaelpollan.com/articles/",                         verify: false, lastVerified: "2026-06" },
   { name: "EAT-Lancet Commission summary (open)",      what: "Influential planetary-health diet framework.",               url: "https://eatforum.org/eat-lancet-commission/",                     verify: false, lastVerified: "2026-06" },
   { name: "Open Food Facts",                what: "Free, crowdsourced food-label database. Scan-and-check.",          url: "https://world.openfoodfacts.org/",                          verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "In Defense of Food , Michael Pollan",      what: "\"Eat food, not too much, mostly plants.\" Best general read.",       url: "https://michaelpollan.com/books/in-defense-of-food/",                price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Diet Myth , Tim Spector",          what: "Microbiome + plant diversity case.",                     url: "",                                          price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Food Politics , Marion Nestle",         what: "How the food industry shapes what 'healthy' means.",             url: "https://www.foodpolitics.com/",                           price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "How Not to Die , Michael Greger",        what: "Plant-forward case w/ extensive citations.",                 url: "https://nutritionfacts.org/book/how-not-to-die/",                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Omnivore's Dilemma , Michael Pollan",     what: "Where food comes from, deeply reported.",                  url: "https://michaelpollan.com/books/the-omnivores-dilemma/",               price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Salt Sugar Fat , Michael Moss",         what: "How processed-food companies engineer cravings.",              url: "",                                          price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Ultra-Processed People , Chris van Tulleken",  what: "Modern accessible take on NOVA Group 4.",                  url: "",                                          price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Spoon-Fed , Tim Spector",             what: "Twenty myths in nutrition, debunked.",                    url: "",                                          price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Why We Get Sick , Bikman / Why We Get Fat , Taubes", what: "Insulin-centric critiques. Read with debate caveats.",         url: "",                                          price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The China Study , Campbell",           what: "Influential, controversial. Read alongside its critics.",          url: "",                                          price: "verify", verify: true, lastVerified: "2026-06" }
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
   { text: "Anything cooked.", misconception: "Cooking is processing , not the issue. Ultra-processed = heavy industrial transformation." },
   { text: "Food heavily transformed industrially, often with additives uncommon at home.", correct: true },
   { text: "Anything in a package.", misconception: "Plain rice in a bag isn't ultra-processed; packaging isn't the criterion." },
   { text: "Junk food only.", misconception: "Some 'health' foods are also ultra-processed (e.g. many protein bars)." }
  ], why: "NOVA's criterion is industrial transformation + ingredients you wouldn't find at home , not 'processed at all' or 'junk only.'" },
  { q: "Adequate protein for most active adults (rough)?", options: [
   { text: "0.5 g/kg.", misconception: "Below baseline; insufficient even for sedentary." },
   { text: "1.2-1.6 g/kg.", correct: true },
   { text: "3 g/kg.", misconception: "Higher than evidence supports for most; rarely needed." },
   { text: "10% of calories regardless of weight.", misconception: "Body weight is a better anchor for active adults." }
  ], why: "1.2-1.6 g/kg is a reasonable target for active adults; higher for endurance athletes and older adults." },
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
  { front: "Reasonable protein target for active adults?", back: "About 1.2-1.6 g/kg of body weight daily, distributed across meals." },
  { front: "Ultra-processed food, NOVA-style?", back: "Heavily industrially transformed food with additives uncommon at home. Correlates w/ worse outcomes independent of calories." },
  { front: "Plant diversity headline?", back: "Aim for 30+ different plants per week (herbs/spices count) , tracks gut microbiome diversity." },
  { front: "Easiest health win in food?", back: "Stop drinking calories (sugary drinks, juices)." },
  { front: "Saturated fat , honest position?", back: "Replacing saturated with polyunsaturated modestly improves cardiovascular markers." },
  { front: "Are diet books reliable?", back: "Most overreach the evidence. Patterns across studies > confident single books." },
  { front: "What's the ingredient list rule?", back: "First 3 ingredients dominate. Long lists of unfamiliar additives are a yellow flag." }
 ],
 glossary: [
  { term: "Calorie", def: "Unit of energy. (Technically kilocalorie in everyday use.)" },
  { term: "Macro", def: "Macronutrient , protein, carbs, or fat." },
  { term: "Ultra-processed food", def: "NOVA Group 4 , heavily industrially transformed food." },
  { term: "Fibre", def: "Plant-based carbohydrates the body doesn't digest; gut food + satiety." },
  { term: "Microbiome", def: "Community of microbes in/on the body, especially gut." },
  { term: "Glycaemic index", def: "How fast a food raises blood glucose. Real, but often overweighted in isolation." },
  { term: "Meta-analysis", def: "Combined statistical analysis of many studies." },
  { term: "Relative vs absolute risk", def: "Relative risk sounds bigger; absolute risk is what actually changes for you." }
 ],

 safetyNote: "Educational, not medical / dietary advice. For specific conditions (diabetes, kidney issues, eating disorders, pregnancy, allergies, etc.), see a qualified clinician/dietitian before changing your diet."
};

export default d;
