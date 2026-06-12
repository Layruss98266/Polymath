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
  "You start spotting the supplement and superfood marketing, most of which is one study, one mouse, and a lot of profit margin.",
  "You stop spending your willpower on food. The right defaults make most decisions for you, automatically."
 ],
 realWorldExample: "In 2009, Brazilian researchers asked a deceptively simple question: how processed is this food? They built a four-level scale called NOVA. Level 1 is fruit, rice, eggs, basically untouched. Level 4 is the stuff with ingredient lists like a chemistry exam, most cereals, sodas, packaged snacks, instant noodles. Across many large studies, the more level-4 \"ultra-processed\" food a population eats, the worse the outcomes, weight gain, heart disease, mortality, even when calories and macros match. The lesson isn't \"eat clean.\" The lesson is: the more your food was assembled in a factory, the more careful you should be. Cook more. The rest mostly takes care of itself.",

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
  { t: "Calories: physics is still in charge",    short: "Long-term weight is governed by energy in vs energy out. No diet repeals thermodynamics.",                                                deep: "Every successful diet, keto, vegan, intermittent fasting, low-fat, Mediterranean, works for the same underlying reason: people end up eating less than they burn over time. The diet that works for you is the one you can sustain, because all of them have to obey the same physics. That doesn't make \"just eat less\" useful advice, food choice, satiety, hormones, and lifestyle dramatically affect whether you can sustain a deficit, and willpower runs out. But if any \"magic\" diet works, it's because it quietly lowered your intake, usually by cutting ultra-processed food. Knowing this protects you from the next confidently-sold metabolic miracle.",                                                                                                      status: "settled",  reflect: "Roughly, what are your maintenance calories per day? If you don't know, that's the next basic measurement." },
  { t: "Protein matters more than you think",     short: "Especially as you age. For muscle, satiety, and not feeling hungry every two hours.",                                                  deep: "Most adults eat enough protein to avoid clinical deficiency and not nearly enough for what they actually need. As you age, the body becomes less efficient at using dietary protein for muscle, so you actually need more, not less. A reasonable target for an active adult is 1.2 to 1.6 grams per kilogram of bodyweight per day, distributed across meals rather than dumped into one. The bonus: protein is the most satiating macro, meals with enough protein keep you genuinely full for longer, which makes everything else easier.",                                                                                                                                                                       status: "settled",  reflect: "Roughly how much protein did you eat yesterday? Was it spread across meals or concentrated in one?" },
  { t: "Ultra-processed food",             short: "The more your food was assembled in a factory, the more careful you should be with it.",                                                deep: "Brazilian researchers built a four-level scale called NOVA. Group 1 is whole foods, fruit, rice, lentils, eggs, milk. Group 4 is ultra-processed, most cereals, instant noodles, sodas, packaged snacks, with ingredient lists that read like a chemistry exam. Across many large studies, populations eating more Group 4 food have worse weight, cardiovascular, and mortality outcomes, even when calories and macros are matched. The combination of additives, low fibre, and engineered palatability seems to drive over-consumption. The fix isn't to eat \"clean\" or join a cult. It's to cook more, buy more single-ingredient foods, and stop pretending the granola bar is healthy because the box says so.",                                                                                 status: "settled",  reflect: "Honestly: what percent of your food this week came from a packet with more than five ingredients?" },
  { t: "Fibre and plant diversity",          short: "30+ different plants a week probably matters more than chasing any single macro.",                                                    deep: "Tim Spector and the ZOE team published a striking finding: people who eat 30 or more different plants a week have measurably more diverse gut microbiomes than people who eat 10 or fewer. The microbiome influences immunity, mood, weight regulation, and inflammation in ways we're still understanding. The advice is forgiving, spices, herbs, beans, seeds, fruits, vegetables, whole grains all count. You don't need exotic superfoods; you need variety. Aim to add one new plant to your shopping each week and the count climbs fast.",                                                                                                                                                                     status: "debated",  reflect: "How many different plants did you eat last week? Count herbs and spices. Most people are surprised by how low the number is." },
  { t: "Sugar isn't poison, but drinking your sugar is", short: "Whole fruit is fine. Sugary drinks are the most consistent loser.",                                                         deep: "Among all the diet debates, one finding survives almost every shift: sugar-sweetened beverages (sodas, sweet teas, most packaged juices) consistently correlate with worse weight, metabolic, and mortality outcomes. The reason is honest: they're calorie-dense without filling you up. A 500ml cola is roughly 200 calories of pure sugar that you don't notice. The same 200 calories from an apple come with fibre, water, and satiety, and you'd notice. The single easiest big move most people can make: stop drinking calories. Water, unsweetened tea, coffee. Whole fruit is fine.",                                                                                                                                                 status: "settled",  reflect: "Roughly, how many calories did you drink last week? Most people underestimate by half." },
  { t: "Saturated fat, red meat, and the noise",    short: "The headlines are louder than the actual effect sizes. The trend matters; the catastrophe doesn't exist.",                                       deep: "You've read \"red meat causes cancer\" or \"saturated fat will kill you.\" The decades-long debate, distilled honestly: replacing saturated fat with polyunsaturated fat modestly improves cardiovascular markers. Red, and especially processed, meat correlates with modestly worse outcomes. None of these are catastrophic. Almost none change your absolute risk by more than a few percentage points. So: a nudge in the lower-saturated-fat, less-processed-meat direction is supported by the evidence if cardiovascular risk matters to you. Treating every burger as a death sentence isn't. Read effect sizes, not headlines.",                                                                                                                             status: "debated",  reflect: "Where are you taking a confident dietary stance based on headlines rather than knowing the actual effect size?" },
  { t: "Hydration and electrolytes",          short: "Water and sodium are real. \"Eight glasses a day\" is folklore.",                                                             deep: "The \"drink eight glasses a day\" rule has no good scientific origin. For most people, ordinary thirst is a reasonable guide. Drinking past thirst doesn't seem to help, and over-hydration is occasionally dangerous (especially in endurance sports, diluting sodium too low matters). Where hydration genuinely matters: heavy training, hot climates, illness, and certain medical conditions. The hydration-influencer industry sells you a problem most people don't have. Drink when thirsty, drink more around exercise and heat, replace salt during long efforts. That's about it.",                                                                                                                                               status: "framework", reflect: "When did you last actually feel thirsty? When did you last drink water \"because you should\"?" },
  { t: "Spot food marketing on packaging",       short: "Front-of-pack health claims are marketing. The ingredient list is closer to the truth.",                                                deep: "\"Made with whole grains.\" \"No added sugar.\" \"High protein.\" \"Natural.\" \"Plant-based.\" \"Real fruit flavour.\" None of these phrases guarantee anything about the food being good for you, and most of them survived legal review because they technically mean very little. The honest test: flip the box over and read the ingredient list. The first three ingredients dominate. A long list of unfamiliar additives is a yellow flag. Even within \"organic,\" \"gluten-free,\" and \"plant-based,\" ultra-processed food is everywhere. The packaging is selling you a story. The back of the box tells you what's actually inside.",                                                                                                                       status: "settled",  reflect: "Take one packaged food you eat regularly. Read the front of the pack. Then read the back. How aligned are the two stories?" },
  {
   t: "Glycaemic load",
   subdomain: "quality",
   definition: "A measure combining how fast a food raises blood glucose (glycaemic index) with how much carbohydrate is in a realistic serving.",
   short: "How hard a real plate of this food actually hits your blood sugar, not how fast the sugar in it moves.",
   deep: "Glycaemic index (GI) tells you how fast 50 grams of carbohydrate from a food raises blood sugar. The catch: nobody eats based on 50 grams of carbohydrate. Watermelon has a high GI but you would need to eat a kilo to hit that carb dose, so its glycaemic load (GL) is low. White rice has a moderate GI but a normal Indian portion of two katoris easily delivers a high glycaemic load. GL is GI multiplied by the carbs in a typical serving, divided by 100. It is the more honest number for everyday eating. Pairing rice or roti with dal, vegetables, and a protein source flattens the curve further without dropping any food.",
   generic: "GI is like asking how fast a car can go. GL is asking how fast the cars you actually drive, on the roads you actually use, will go. The second number matters for your daily life.",
   expert: "GL = (GI x available carbohydrate per serving) / 100. Low GL is under 10, medium 11 to 19, high 20+. Atkinson et al. (2008) maintain the standard tables. Mixed meals, fibre, fat, protein, and food order all blunt postprandial glucose response. Useful for diabetes, prediabetes, and metabolic syndrome management; less critical for metabolically healthy active adults.",
   status: "framework",
   reflect: "Look at your usual lunch. Is the GL high mostly because of the food itself, or because of the portion size?",
   conceptQuiz: [
    {
     q: "Why is glycaemic load often more useful than glycaemic index?",
     options: [
      { text: "It accounts for how much you actually eat, not a fixed 50 gram carb dose.", correct: true },
      { text: "It ignores carbohydrate quality.", misconception: "GL still factors in GI; it does not ignore quality." },
      { text: "It only applies to refined sugars.", misconception: "GL applies to any carbohydrate containing food." },
      { text: "It is the same as calories.", misconception: "Calories and GL measure different things; many low GL foods are calorie dense." }
     ],
     why: "Realistic portion sizes vary widely, so multiplying by actual carbs per serving gives a more practical signal."
    },
    {
     q: "Two katoris of plain white rice at lunch has a high glycaemic load. Which change reduces the load most for an Indian household meal?",
     options: [
      { text: "Add dal, sabzi, and curd, and reduce the rice portion slightly.", correct: true },
      { text: "Switch to white bread.", misconception: "White bread is similar GL or higher; no improvement." },
      { text: "Drink a sweet lassi alongside.", misconception: "Adds more sugar and raises the load further." },
      { text: "Eat the rice faster.", misconception: "Speed of eating does not change the carbohydrate content." }
     ],
     why: "Mixed meals with fibre, protein, and fat blunt the glucose curve, and a smaller rice portion directly lowers the carb load."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Estimate one meal", d: "Pick one meal you ate today and roughly estimate whether its glycaemic load is low, medium, or high.", xp: 10 },
    { level: "easy", t: "Rebalance the plate", d: "Take one high GL meal in your week and rework it with smaller carb portion plus more dal, sabzi, or protein.", xp: 20 },
    { level: "advanced", t: "Week of reworked carbs", d: "For one week, rebuild every carb heavy meal toward lower glycaemic load and note energy and hunger changes after lunch.", xp: 40 }
   ]
  },
  {
   t: "Time restricted eating",
   subdomain: "habits",
   definition: "Limiting daily food intake to a consistent window of hours, typically 8 to 12, while fasting the rest of the time.",
   short: "Eat all your food inside a fixed daily window. Often helps, mostly because it quietly cuts grazing.",
   deep: "Time restricted eating (TRE) means picking a daily eating window, say 10 am to 6 pm, and not eating outside it. Water, plain tea, and coffee are fine. The honest evidence: TRE does help many people lose modest weight and improves some metabolic markers, but the bulk of the benefit comes from cutting late night snacking and grazing, not from anything magical about fasting itself. In an Indian context where dinner often runs to 10 pm and breakfast to 8 am, simply ending eating at 8 pm and starting at 10 am is a meaningful shift. It also aligns better with circadian rhythm. The fasting influencer industry oversells it; the modest, durable benefit is real.",
   generic: "Like closing the kitchen for the night. The fridge does not stop existing, but the door is shut, and you stop wandering in for handfuls of something every hour.",
   expert: "Reviewed by Patterson and Sears (2017), Cienfuegos et al. (2020). Modest weight loss (1 to 4 percent), some insulin sensitivity improvement, mixed effects on blood lipids. Most controlled trials show benefit driven primarily by reduced energy intake. Distinct from prolonged fasting or alternate day fasting. Caution for people with eating disorder history, pregnancy, type 1 diabetes, or on certain medications.",
   status: "debated",
   reflect: "What is your current first to last bite window on a typical day? Could you shrink it by two hours without much friction?",
   conceptQuiz: [
    {
     q: "What does most of the benefit of time restricted eating actually come from?",
     options: [
      { text: "Reduced total energy intake and less late night grazing.", correct: true },
      { text: "A unique fat burning state that only fasting can trigger.", misconception: "Controlled trials show benefits largely match the calorie reduction TRE induces." },
      { text: "Autophagy effects in humans at 12 hour fasts.", misconception: "Most autophagy claims rely on animal data and much longer fasts." },
      { text: "Permanent metabolic rate increase.", misconception: "No durable metabolic rate boost from typical TRE protocols." }
     ],
     why: "When trials match calories, TRE benefits shrink, suggesting reduced intake is the main mechanism."
    },
    {
     q: "Which person should be most cautious about adopting time restricted eating without medical guidance?",
     options: [
      { text: "Someone with a history of disordered eating or type 1 diabetes.", correct: true },
      { text: "A metabolically healthy adult who already skips breakfast.", misconception: "This person is essentially already doing TRE without issue." },
      { text: "Anyone over 30.", misconception: "Age alone is not a contraindication." },
      { text: "Someone who drinks coffee in the morning.", misconception: "Black coffee is generally compatible with TRE windows." }
     ],
     why: "Eating disorder history and conditions requiring stable feeding patterns are the well documented risk groups."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Measure your window", d: "Note the time of your first and last bite each day for three days.", xp: 10 },
    { level: "easy", t: "10 hour window", d: "Eat within a 10 hour window for one week, for example 10 am to 8 pm, and note hunger and energy.", xp: 20 },
    { level: "advanced", t: "Sustainable 12 hour rhythm", d: "Run a 12 hour eating window aligned to daylight for one month and record weight, sleep quality, and afternoon energy weekly.", xp: 40 }
   ]
  },
  {
   t: "Protein leverage hypothesis",
   subdomain: "basics",
   definition: "The idea that the body keeps eating until a protein target is hit, so low protein diets quietly drive overeating of carbs and fat.",
   short: "If your meal is protein light, your body keeps you hungry until you find more, often as extra carbs and fat.",
   deep: "Stephen Simpson and David Raubenheimer proposed that humans, like many animals, regulate intake to hit a protein target. If a meal is protein dilute, hunger persists and you eat more total food, mostly carbs and fat, to reach that target. This helps explain why ultra processed snacks, which are typically engineered to be high in fat and refined carbs but low in protein, drive overconsumption. In an Indian context, a meal of two rotis, sabzi, and rice is often only 10 to 15 grams of protein; the body responds by demanding more food rather than ending the meal. Adding dal, curd, paneer, eggs, or chicken to the same plate hits the protein target faster and naturally curbs total intake. The hypothesis is not universally accepted but is well supported in feeding trials.",
   generic: "Like a car that will not stop driving until the tank shows a certain amount of a specific fuel. If you keep pouring a thin mixture in, it just keeps driving and using more total liquid, not because it wants to, but because the gauge has not flipped.",
   expert: "Simpson and Raubenheimer (2005, 2014). Supported by controlled feeding studies (Gosby et al. 2011) showing that reducing protein from 15% to 10% of energy increased total energy intake by roughly 12% without subjects noticing. Mechanism proposed to involve FGF21 and amino acid sensing. Critiqued by Bray and others who emphasise palatability and reward pathways. Practical implication aligns with broader satiety research.",
   status: "debated",
   reflect: "Think of a meal last week where you kept snacking after. How much protein was on the plate? Could you fix the snacking by fixing the meal?",
   conceptQuiz: [
    {
     q: "According to the protein leverage hypothesis, what happens when meals are persistently low in protein?",
     options: [
      { text: "People eat more total food, mostly extra carbs and fat, chasing a protein target.", correct: true },
      { text: "People feel full sooner and eat less overall.", misconception: "The hypothesis predicts the opposite, ongoing hunger until protein is hit." },
      { text: "Protein needs disappear over time.", misconception: "Protein requirements are biologically maintained, not adaptable downward to deficient diets." },
      { text: "The body switches entirely to ketosis.", misconception: "Low protein does not automatically induce ketosis; that depends on carb and fat intake." }
     ],
     why: "Feeding trials show diluting protein leads to increased total intake to reach the protein target."
    },
    {
     q: "Which Indian lunch best applies the protein leverage idea to curb afternoon snacking?",
     options: [
      { text: "Smaller rice portion plus a generous serving of dal, paneer or chicken, and curd.", correct: true },
      { text: "Three rotis with aloo sabzi and a sweet lassi.", misconception: "Protein light and carb heavy, the pattern the hypothesis warns about." },
      { text: "A large plate of poha alone.", misconception: "Carb heavy and low protein; predicts more hunger later." },
      { text: "Maggi with a soft drink.", misconception: "Ultra processed, low protein, classic leverage failure case." }
     ],
     why: "Hitting protein early in the meal reduces the drive to keep eating later."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit one meal", d: "Estimate grams of protein in your largest meal yesterday and compare it to roughly 25 to 30 grams.", xp: 10 },
    { level: "easy", t: "Protein first plate", d: "For one week, build each main meal starting with a protein source, then add carbs and vegetables around it.", xp: 20 },
    { level: "advanced", t: "Compare two weeks", d: "Run one week at your normal protein intake and one week hitting 1.2 g/kg with protein at every meal, and log between meal snacking, hunger, and weight.", xp: 40 }
   ]
  },
  {
   t: "Caloric vs nutrient density",
   subdomain: "quality",
   definition: "Two ways of judging food, energy per gram (caloric density) versus vitamins, minerals, and fibre per calorie (nutrient density).",
   short: "Some foods pack lots of calories into small bites. Others pack lots of nutrition into few calories. Most plates need both.",
   deep: "Caloric density is calories per gram. Oil tops the chart at 9, nuts and cheese are dense, vegetables and fruit are low. Nutrient density flips the question: per calorie, how much actual vitamin, mineral, fibre, and protein are you getting. Spinach, dal, eggs, curd, and most vegetables are nutrient dense. Sugary drinks, refined oils, and most ultra processed snacks are calorically dense but nutrient poor, the worst combination. Useful application in India: a thali heavy on sabzi, dal, and curd with a moderate rice portion is naturally lower in caloric density and high in nutrients. The same plate with a bhujia topping, papad, and a sweet ends up calorie dense and nutritionally thinner. You do not need to count; you need to know which foods you are leaning on by default.",
   generic: "Like comparing a packed suitcase with bricks versus one with clothes. Both weigh the same, but only one is useful when you arrive. Caloric density is the weight, nutrient density is what is actually inside that you can use.",
   expert: "Caloric density typically measured as kcal/g; nutrient density via indices like NRF9.3 (Nutrient Rich Foods Index) or ANDI. Volumetric eating approaches (Rolls) leverage low caloric density to enhance satiety at lower total energy. Nutrient density correlates inversely with degree of processing, NOVA Group 4 foods skew low. Both useful, neither sufficient alone; trans fats can be nutrient dense by some calculations.",
   status: "framework",
   reflect: "Which three foods do you eat most often? Are they calorically dense, nutrient dense, both, or neither?",
   conceptQuiz: [
    {
     q: "Which food is the clearest example of high caloric density but low nutrient density?",
     options: [
      { text: "A sweetened cola.", correct: true },
      { text: "A bowl of dal.", misconception: "Dal is moderate caloric density and high nutrient density." },
      { text: "Spinach sabzi.", misconception: "Spinach is low caloric density and high nutrient density." },
      { text: "A boiled egg.", misconception: "Eggs are moderate caloric density and nutrient dense." }
     ],
     why: "Sugary drinks are pure energy with negligible vitamins, minerals, or fibre."
    },
    {
     q: "You want to feel full on fewer calories at lunch. Which swap helps most?",
     options: [
      { text: "Replace half the rice with extra sabzi and dal.", correct: true },
      { text: "Replace rice with the same volume of ghee.", misconception: "Ghee is far more calorie dense; total calories rise." },
      { text: "Skip vegetables to save chewing.", misconception: "Vegetables are the lowest caloric density part of the plate." },
      { text: "Add a sweet at the end.", misconception: "Adds calorie dense, low nutrient calories." }
     ],
     why: "Vegetables and dal add volume and nutrients without proportionally adding calories."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Sort your top ten", d: "List ten foods you eat most and tag each as high or low caloric density and high or low nutrient density.", xp: 10 },
    { level: "easy", t: "Half plate rule", d: "For one week, make half of your lunch and dinner plate vegetables, dal, or other low caloric density nutrient dense foods.", xp: 20 },
    { level: "advanced", t: "Density redesign", d: "Pick one calorie dense, nutrient poor food you eat often and replace it with a nutrient dense alternative for one month, logging hunger and weight changes.", xp: 40 }
   ]
  },
  {
   t: "NOVA food classification",
   subdomain: "quality",
   fullForm: "NOVA (not an acronym; Portuguese for new)",
   definition: "A four group taxonomy that categorises foods by degree of industrial processing, isolating ultra processed foods as group 4.",
   short: "Group 1 is whole food. Group 4 is ultra processed. The further you stay from group 4, the better most outcomes look.",
   deep: "Brazilian researchers led by Carlos Monteiro built NOVA in 2010 to separate foods by how much industrial processing went into them, not by macros. Group 1 is unprocessed or minimally processed (dal, rice, milk, fruit, eggs). Group 2 is culinary ingredients (oil, salt, sugar, ghee). Group 3 is processed foods (paneer, fresh roti, pickled vegetables). Group 4 is ultra processed (instant noodles, packaged biscuits, sweetened breakfast cereals, soft drinks, most chips), assembled from industrial substances and additives with long ingredient lists. Large cohort studies (French NutriNet Sante, UK Biobank, Brazilian ELSA Brasil) consistently link higher group 4 intake to weight gain, diabetes, cardiovascular disease, and all cause mortality, even after adjusting for total calories. The mechanism is debated: additives, hyper palatability, low fibre, and rapid eating speed all plausibly contribute. The practical rule: cook more, read ingredient lists, and let group 4 stay as the occasional treat rather than the daily default.",
   generic: "Like sorting your music library by who made it. Group 1 is the live recording, raw and direct. Group 4 is the heavily auto tuned, factory mixed pop track designed to be impossible to stop listening to. Both are music, but you would not feed yourself only the second kind.",
   expert: "Monteiro et al. (2010, 2019) Public Health Nutrition. NOVA: Group 1 unprocessed/minimally processed; Group 2 culinary ingredients; Group 3 processed foods; Group 4 ultra processed. Meta analyses (Lane et al. 2024, BMJ) associate each 10 percent increase in group 4 share with measurable rises in all cause mortality, cardiovascular events, and type 2 diabetes. ICMR NIN 2024 Dietary Guidelines for India explicitly warn against group 4 foods and recommend keeping them below 10 percent of daily calories. Criticisms: classification can be subjective, conflates many heterogeneous foods, and may correlate with other lifestyle markers. Still the strongest population level food framework available.",
   status: "settled",
   reflect: "Roughly what share of yesterday's calories came from NOVA group 4 foods? Be honest about the chai biscuits and packaged snacks.",
   conceptQuiz: [
    {
     q: "Which food is the clearest example of NOVA group 4?",
     options: [
      { text: "Packaged instant noodles with a flavour sachet.", correct: true },
      { text: "Boiled dal with rice.", misconception: "Dal and rice are group 1; combining at home does not move them to group 4." },
      { text: "Home made roti with ghee.", misconception: "Ghee is group 2 and roti from atta is group 3 at most." },
      { text: "Plain curd.", misconception: "Curd is minimally processed, group 1." }
     ],
     why: "Instant noodles are assembled from industrial substances with flavour enhancers, the defining traits of group 4."
    },
    {
     q: "Why do NOVA cohort studies still link group 4 foods to worse outcomes after controlling for calories?",
     options: [
      { text: "Processing changes satiety, fibre, and eating speed beyond pure energy content.", correct: true },
      { text: "Group 4 foods always contain more calories.", misconception: "Calories are controlled for; the residual effect remains." },
      { text: "Group 4 is an exclusively Indian phenomenon.", misconception: "It is global; the cohorts span Europe, Brazil, the UK, and the US." },
      { text: "It is a measurement error.", misconception: "Effects replicate across populations and methodologies." }
     ],
     why: "Engineered palatability, low fibre, and additive load shift intake and metabolism independent of total calories."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Tag your shelf", d: "Open your kitchen cupboards and tag each packet as NOVA 1, 2, 3, or 4 based on the ingredient list.", xp: 10 },
    { level: "easy", t: "Cut one group 4", d: "Pick one daily NOVA group 4 item (biscuit, soft drink, packaged snack) and replace it with a group 1 or 3 alternative for two weeks.", xp: 20 },
    { level: "advanced", t: "Below 20 percent rule", d: "For one month, keep NOVA group 4 calories under 20 percent of daily intake; log meals and energy levels each evening.", xp: 40 }
   ],
   diagram: {
    kind: "pyramid",
    title: "NOVA groups by share of diet",
    caption: "Build the base of the diet from unprocessed and minimally processed foods. Keep ultra-processed at the tip, not the foundation.",
    data: {
     levels: [
      "Group 4: Ultra-processed (rare)",
      "Group 3: Processed (small share)",
      "Group 2: Culinary ingredients (moderate)",
      "Group 1: Unprocessed / minimally processed (base)"
     ]
    }
   }
  },
  {
   t: "Satiety index",
   subdomain: "quality",
   definition: "A rating of foods by how full they make you feel per calorie, measured by tracking hunger after a standardised serving.",
   short: "Some foods quiet hunger for hours per calorie spent. Others leave you raiding the cupboard 90 minutes later.",
   deep: "In 1995 Susanna Holt and colleagues fed students 240 calorie portions of 38 common foods and then tracked their hunger over the next two hours. The results, published as the satiety index, were startling. Boiled potatoes scored 323 (white bread set as the baseline 100), while croissants barely cleared 47. Protein, fibre, water content, and volume all drove satiety up. Refined fats and sugars drove it down. The Indian translation is intuitive: dal chawal with sabzi keeps you full for hours; the same calories in fried snacks or biscuits leave you hungry by tea time. The satiety index does not tell you what is healthiest, it tells you which foods naturally limit overconsumption. For anyone trying to maintain a calorie deficit without constant willpower, choosing high satiety foods is the cheap behavioural win.",
   generic: "Like comparing two kinds of fuel for a long drive. One tank lasts 400 km, the other 80 km, even though they hold the same litres. You can refill the small one constantly, but the long range tank gets you there without thinking about the next stop.",
   expert: "Holt et al. (1995) European Journal of Clinical Nutrition. Satiety scores measured against an isocaloric (240 kcal) white bread reference set at 100. Top scorers: boiled potatoes (323), fish (225), oatmeal (209), oranges (202). Bottom scorers: croissants (47), cake (65), doughnuts (68). Driver variables: protein content, fibre, water, weight per calorie. Replicated and extended by Rolls (volumetric eating) and others. Limited by small original sample (n=11 to 13 per food) and short test window. Still a robust qualitative ranking confirmed by satiety meta analyses.",
   status: "framework",
   reflect: "Which three foods leave you genuinely full for 3 hours? Which three leave you hungry again within 90 minutes? Notice the pattern.",
   conceptQuiz: [
    {
     q: "Which food likely ranks highest on the satiety index per calorie?",
     options: [
      { text: "Boiled potatoes with a little salt.", correct: true },
      { text: "A croissant.", misconception: "Croissants scored near the bottom of the original Holt study." },
      { text: "Sweet biscuits with chai.", misconception: "High sugar refined carbs sit low on satiety." },
      { text: "A glass of cola.", misconception: "Liquid sugar provides almost no satiety." }
     ],
     why: "Volume, water, fibre, and modest protein make potatoes one of the most satiating foods per calorie."
    },
    {
     q: "Why does the satiety index matter for someone trying to lose weight?",
     options: [
      { text: "Choosing high satiety foods makes a calorie deficit easier without relying on willpower.", correct: true },
      { text: "It is the only thing that determines weight loss.", misconception: "Energy balance still rules; satiety just makes the deficit sustainable." },
      { text: "Low satiety foods are always unhealthy.", misconception: "Some low satiety foods (nuts, oils) are nutrient dense; the issue is overconsumption risk." },
      { text: "It guarantees a fast metabolism.", misconception: "Satiety affects intake, not basal metabolic rate." }
     ],
     why: "Hunger is the binding constraint in most diets; high satiety choices reduce that pressure."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Rank five foods", d: "Pick five foods you eat regularly and rank them by how long they keep you full per calorie.", xp: 10 },
    { level: "easy", t: "Swap one snack", d: "Replace one chronically unsatisfying snack (biscuits, namkeen) with a high satiety alternative (boiled egg, fruit, curd) for two weeks.", xp: 20 },
    { level: "advanced", t: "Satiety lunch protocol", d: "For one month, build every lunch from at least three of: protein source, fibre source, water rich vegetable, and log appetite at 4 pm.", xp: 40 }
   ],
   diagram: {
    kind: "bars",
    title: "Satiety index of common foods",
    caption: "Holt et al. 1995. White bread = 100. Higher = fuller per calorie. Protein, fibre, water and volume drive the score.",
    data: {
     items: [
      { label: "Boiled potato", value: 323 },
      { label: "Fish",          value: 225 },
      { label: "Oatmeal",       value: 209 },
      { label: "Apple",         value: 197 },
      { label: "White bread",   value: 100 },
      { label: "Cake",          value: 65 },
      { label: "Croissant",     value: 47 }
     ]
    }
   }
  },
  {
   t: "Microbial short chain fatty acids",
   subdomain: "quality",
   fullForm: "Short Chain Fatty Acids (SCFAs)",
   definition: "Acetate, propionate, and butyrate produced when gut bacteria ferment dietary fibre. Key signals regulating gut barrier integrity, inflammation, and metabolism.",
   short: "When your gut bugs eat fibre, they make signal molecules that talk to your immune system and your liver.",
   deep: "Most of what your gut microbiome does for you happens through SCFAs. Bacteria like Faecalibacterium prausnitzii and Roseburia ferment soluble fibre (from dal, oats, vegetables, fruit, whole grains) into acetate, propionate, and butyrate. Butyrate feeds the cells of your colon directly, tightens the gut barrier, and lowers inflammation. Propionate signals satiety to the brain and modulates liver glucose output. Acetate enters general circulation and influences metabolism. Tim Spector and the ZOE team make this concrete: people who eat 30 plus plant species a week produce a richer SCFA profile than those eating under 10. The Indian diet, done right with dal, sabzi, curd, and whole grains, is naturally good at this. Done wrong, with maida, sugar, and minimal vegetables, it starves the right bacteria and feeds inflammatory species. Add fermented foods (curd, idli, dosa batter, kanji) and you support both the bacteria and the metabolites they make.",
   generic: "Like a factory inside your gut where workers (the good bacteria) turn raw materials (fibre) into signals that run the rest of the building. Stop sending raw materials and the factory shuts down. Send variety and the factory hums.",
   expert: "Tim Spector (2023) Food for Life; Sonnenburg lab work on plant diversity. SCFAs: acetate (C2), propionate (C3), butyrate (C4). Butyrate is the preferred energy source for colonocytes, induces regulatory T cells, and strengthens tight junctions. Propionate activates GPR43 and influences hepatic gluconeogenesis. Low SCFA states correlate with dysbiosis, IBD, type 2 diabetes, and metabolic syndrome. ICMR NIN 2024 Dietary Guidelines for India: cap total fat at 30 percent of energy, free sugars under 5 percent, source protein from lentils, dairy, and legumes, and avoid NOVA group 4 ultra processed foods. Aim for 30 to 40 g dietary fibre per day from diverse plant sources.",
   status: "debated",
   reflect: "How many distinct plant species (count herbs and spices) did you eat last week? Most people are surprised by how low the number is.",
   conceptQuiz: [
    {
     q: "What primarily produces short chain fatty acids in the human gut?",
     options: [
      { text: "Bacterial fermentation of dietary fibre.", correct: true },
      { text: "Stomach acid breaking down protein.", misconception: "Stomach acid acts on protein in the small intestine, not the colon, and does not make SCFAs." },
      { text: "Liver metabolism of alcohol.", misconception: "Alcohol metabolism produces acetate but the colonic SCFA pool is microbial in origin." },
      { text: "Direct absorption from food.", misconception: "SCFAs are made by microbes, not eaten preformed in any meaningful amount." }
     ],
     why: "Fermentation of soluble fibre by colonic bacteria is the dominant source of acetate, propionate, and butyrate."
    },
    {
     q: "Which Indian meal pattern most strongly supports SCFA production?",
     options: [
      { text: "Dal, mixed vegetable sabzi, whole grain roti, and curd.", correct: true },
      { text: "Maida paratha with sweet tea and biscuits.", misconception: "Refined flour and sugar starve fibre fermenting bacteria." },
      { text: "Instant noodles and a soft drink.", misconception: "NOVA group 4 foods with minimal fibre; the opposite of what SCFA producers need." },
      { text: "Plain white rice with no sides.", misconception: "Low fibre, low diversity; little substrate for fermentation." }
     ],
     why: "Diverse fibre from legumes, vegetables, and whole grains plus fermented dairy feeds the SCFA producing community."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Count your plants", d: "Track every distinct plant species (herbs and spices count) you eat in a week.", xp: 10 },
    { level: "easy", t: "Add one fermented food", d: "Include one serving of curd, idli, dosa batter, or kanji daily for two weeks and note digestion and energy changes.", xp: 20 },
    { level: "advanced", t: "30 plants in 7 days", d: "Hit 30 different plant species in one week, three weeks in a row. Log species and any digestive or energy shifts.", xp: 40 }
   ]
  },
  {
   t: "Protein quality and DIAAS",
   subdomain: "basics",
   definition: "A measure of how well a protein's amino acid profile and digestibility match human needs, with DIAAS the modern gold standard scoring framework.",
   short: "Not all proteins are equal; whey scores high, wheat scores low, paneer and eggs sit in between.",
   deep: "Two foods can both list 20 grams of protein per serving and deliver very different usable amino acids to the body. DIAAS (Digestible Indispensable Amino Acid Score) was endorsed by the FAO in 2013 as the successor to PDCAAS. Whey scores around 1.10, milk protein 1.18, beef around 1.10, eggs 1.13, while wheat scores 0.40 and rice around 0.59. For Indian vegetarians relying heavily on wheat or rice plus a single dal, the protein quality story matters as much as the grams: each serving has lower DIAAS, so total intake needs to be higher to hit usable protein targets. Combining cereals with legumes (the rajma chawal model) improves the amino acid balance because their limiting amino acids complement each other.",
   generic: "Like construction materials. Two trucks may both carry one tonne, but if one tonne is missing the rebar your building needs, the load is not equivalent in usable terms.",
   expert: "Mathai et al (2017), DIAAS values for major foods. DIAAS measures true ileal digestibility per amino acid, addressing the PDCAAS upper truncation problem. ICMR NIN 2024 RDA for Indian adults: 0.83 g per kg bodyweight as safe protein, but advisory groups argue 1.0 to 1.2 g per kg for active adults. Indian National Nutrition Monitoring Bureau surveys show average protein intake meets quantity but quality is dominated by cereal protein with limiting lysine.",
   status: "framework",
   reflect: "If you eat mostly Indian vegetarian, how does the protein quality of your typical day stack up, are you hitting target grams from low DIAAS sources only?",
   conceptQuiz: [
    {
     q: "Why is DIAAS preferred over older PDCAAS?",
     options: [
      { text: "It measures true ileal digestibility per amino acid and does not cap scores at 1.0.", correct: true },
      { text: "It is cheaper to test.", misconception: "DIAAS testing is more expensive, not cheaper." },
      { text: "It only applies to plant proteins.", misconception: "DIAAS applies to all proteins; comparison is its strength." },
      { text: "It ignores digestibility.", misconception: "It explicitly measures digestibility at the ileal level." }
     ],
     why: "DIAAS captures both digestibility and amino acid limitation without truncating high quality scores, giving better comparison."
    },
    {
     q: "An Indian vegetarian relying mostly on chapati and rice can improve protein quality by...",
     options: [
      { text: "Combining cereals with legumes like dal or rajma in the same meal.", correct: true },
      { text: "Eating more rice alone.", misconception: "Rice and wheat are both low in lysine; more does not fix the gap." },
      { text: "Cutting out all dairy.", misconception: "Dairy is high DIAAS; removing it lowers protein quality." },
      { text: "Switching entirely to processed soy snacks.", misconception: "Processed soy snacks add salt and oil; whole soy or paneer is a better source." }
     ],
     why: "Cereal lysine deficit complements legume sulphur amino acid deficit, raising combined DIAAS toward animal protein levels."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Tag your protein sources", d: "List every protein source in your typical day and label each high (whey, paneer, egg, fish, chicken, soy) or lower (wheat, rice) DIAAS.", xp: 10 },
    { level: "easy", t: "Engineer one combo", d: "Build one meal per day that combines cereal plus legume, or include one dairy or egg source, to lift overall DIAAS.", xp: 20 },
    { level: "advanced", t: "Hit usable protein target", d: "Calculate usable protein per kg bodyweight at 1.2 g target. Adjust intake using DIAAS adjusted quantities until you consistently hit the number for 4 weeks.", xp: 40 }
   ]
  },
  {
   t: "Plant based protein adequacy",
   subdomain: "basics",
   definition: "The principle that a varied plant based diet can meet adult protein requirements when total intake and amino acid diversity are sufficient.",
   short: "Vegetarian and vegan diets can be protein adequate with enough quantity and the right mix.",
   deep: "Adult protein needs are around 0.83 to 1.2 g per kg bodyweight depending on activity. A 65 kg sedentary adult therefore needs about 55 to 80 g per day. The myth is that plants cannot provide this; the truth is they can but require attention. A typical day with 100 g paneer (18 g protein), 200 g dal (14 g), 100 g soya chunks dry (50 g rehydrated equivalent around 25 g), 50 g peanuts (12 g), and supporting cereals easily clears 80 g. Pure vegan diets need to lean harder on soy (tofu, soy chunks, edamame), legumes, and nuts, and may need slightly higher total grams because individual sources have lower DIAAS. ICMR NIN 2024 confirmed Indian vegetarian diets can meet protein needs, but average intake skews high on cereals and low on dense protein sources, leaving many in shortfall.",
   generic: "Like building a wall from many small bricks instead of one big stone slab. Both work, but the bricks need to be assembled deliberately, not piled randomly.",
   expert: "Position of Academy of Nutrition and Dietetics (Melina et al, 2016): properly planned vegetarian and vegan diets are nutritionally adequate. Soy protein (tofu, soy chunks) is the highest DIAAS plant source at around 0.91 to 1.0. Indian household consumption data shows pulses intake fell 60 g per capita per day in 1960 to under 50 g by 2020, while cereal share remained dominant. Sports nutrition research (Phillips, 2019) suggests slightly higher protein targets (1.6 to 2.0 g per kg) for resistance training, achievable on plant based diets with planning.",
   status: "settled",
   reflect: "On a typical day, do you hit 1 g per kg bodyweight from protein dense sources, or are you mostly counting cereal protein?",
   conceptQuiz: [
    {
     q: "What is the highest DIAAS plant protein commonly available in India?",
     options: [
      { text: "Soy in forms like tofu, soy chunks, and edamame.", correct: true },
      { text: "White rice.", misconception: "Rice DIAAS is among the lower plant proteins." },
      { text: "Cucumber.", misconception: "Cucumber is mostly water with negligible protein." },
      { text: "Coconut.", misconception: "Coconut is mostly fat, not a protein source." }
     ],
     why: "Soy protein scores near 1.0 on DIAAS, matching dairy and animal proteins for amino acid completeness."
    },
    {
     q: "A 70 kg active vegetarian adult should target roughly...",
     options: [
      { text: "84 to 112 g protein per day.", correct: true },
      { text: "20 to 30 g per day.", misconception: "Far below adult requirements even for sedentary individuals." },
      { text: "200 g per day.", misconception: "Far above what evidence supports for general health; unnecessary." },
      { text: "Protein needs do not apply to vegetarians.", misconception: "Protein requirements apply equally regardless of diet style." }
     ],
     why: "1.2 to 1.6 g per kg bodyweight for active adults yields the 84 to 112 g range."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Estimate your intake", d: "Log one typical day and calculate total protein in grams from a nutrition app or food chart.", xp: 10 },
    { level: "easy", t: "Add one dense source", d: "Add one dense plant protein source (tofu, soy chunks, sprouted moong, or paneer) daily for two weeks and recheck total.", xp: 20 },
    { level: "advanced", t: "Build a 1 g per kg week", d: "Plan and execute one week where every day clears 1 g protein per kg bodyweight from plant or plant plus dairy sources, logging actual intake.", xp: 40 }
   ]
  },
  {
   t: "Omega-3 vs omega-6 ratio",
   subdomain: "quality",
   definition: "The dietary ratio of omega-6 to omega-3 polyunsaturated fats, where modern diets skew heavily toward omega-6 and may promote chronic inflammation.",
   short: "Modern diets run roughly 15 to 25 omega-6 per omega-3; ancestral diets ran 1 to 4. Tilt the ratio.",
   deep: "Omega-6 fats (linoleic acid) come from sunflower, soybean, corn, and refined seed oils common in Indian kitchens and most processed foods. Omega-3 fats (ALA, EPA, DHA) come from flaxseed, walnuts, fatty fish, and chia. Both are essential, but they compete for the same elongation enzymes; an overflow of omega-6 crowds out omega-3 conversion, and the resulting metabolite balance leans pro inflammatory. Indian diets cooking in refined sunflower or soybean oil daily, plus packaged snacks fried in palm or refined oils, easily hit 20 to 1 ratios. The fix is dual: cut excessive seed oil intake (use mustard, ghee, peanut, or olive in moderate amounts), and add direct EPA and DHA from fatty fish twice a week or algal supplements for vegetarians.",
   generic: "Like balancing salt and sugar on a plate. Both have uses, but if salt drowns sugar, nothing tastes right. The ratio matters as much as the totals.",
   expert: "Simopoulos (2002) estimated ancestral ratios at 1 to 1 vs modern 16 to 1. ALA to EPA conversion in humans is inefficient (under 10 percent for ALA to EPA), making direct marine EPA and DHA important. Indian Council of Medical Research dietary fat guidelines recommend reducing PUFA omega-6 share. Mozaffarian and Wu (2011) systematic review supports cardioprotective effect of EPA and DHA. Algal omega-3 supplements at 250 to 500 mg combined EPA and DHA are valid for vegetarians.",
   status: "debated",
   reflect: "What oil do you cook in most days, and how often do you eat fatty fish, walnuts, flax, or chia?",
   conceptQuiz: [
    {
     q: "Why does the omega-6 to omega-3 ratio matter?",
     options: [
      { text: "They compete for the same enzymes, and an excess of omega-6 crowds out omega-3 metabolism, tilting toward pro inflammatory mediators.", correct: true },
      { text: "Omega-3 is toxic above 1 gram per day.", misconception: "Omega-3 is safe in normal dietary and supplement ranges." },
      { text: "Omega-6 is essential, omega-3 is not.", misconception: "Both are essential fatty acids by definition." },
      { text: "Ratio is irrelevant; only total fat matters.", misconception: "Mechanistic and observational evidence supports the ratio mattering for inflammation." }
     ],
     why: "Shared elongase and desaturase enzymes mean excess omega-6 suppresses omega-3 derived anti inflammatory mediators."
    },
    {
     q: "Which Indian vegetarian friendly source delivers direct EPA and DHA?",
     options: [
      { text: "Algal omega-3 supplements.", correct: true },
      { text: "Refined sunflower oil.", misconception: "Sunflower oil is dominantly omega-6, not omega-3." },
      { text: "Wheat flour.", misconception: "Wheat is not a meaningful source of omega-3." },
      { text: "Mustard oil only.", misconception: "Mustard oil has some ALA but not direct EPA or DHA." }
     ],
     why: "Algal oils are cultivated from microalgae and deliver direct EPA and DHA without fish."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit cooking oils", d: "List every oil in your kitchen and label dominant fatty acid (omega-6 heavy: sunflower, soy, corn; mixed: mustard, peanut, olive).", xp: 10 },
    { level: "easy", t: "Add an omega-3 source", d: "Add one omega-3 dense food daily for four weeks: tablespoon of flaxseed, handful of walnuts, or a fatty fish meal twice a week.", xp: 20 },
    { level: "advanced", t: "Cut seed oils strategically", d: "Replace refined seed oils with mustard, ghee, or peanut for home cooking, audit pantry processed foods, and either supplement with algal or fish EPA and DHA at 500 mg per day or hit 2 fatty fish meals per week. Track for 8 weeks.", xp: 40 }
   ]
  },
  {
   t: "Vitamin D and India context",
   subdomain: "quality",
   definition: "A fat soluble vitamin synthesised in skin from sunlight exposure and consumed in limited dietary sources, with widespread deficiency across the Indian population despite high sunlight availability.",
   short: "70 to 90 percent of urban Indians are vitamin D deficient despite the sun outside.",
   deep: "Vitamin D is critical for bone mineralisation, immune function, and muscle strength. Despite India sitting at low latitude with abundant sun, multiple large surveys show 70 to 90 percent of urban adults are deficient (serum 25-hydroxyvitamin D under 20 ng per ml). The reasons stack: melanin in Indian skin lowers UVB synthesis efficiency, urban office life keeps people indoors during peak UVB hours (10 am to 3 pm), full coverage clothing for cultural or sun avoidance reasons, and air pollution filtering UVB. Dietary sources are sparse: oily fish, egg yolk, fortified milk. The pragmatic protocol is to test serum 25-hydroxyvitamin D, supplement 60,000 IU per week for 8 weeks if deficient, then maintain at 1,000 to 2,000 IU per day. Re test annually.",
   generic: "Like a phone in a basement with good signal outside. The signal is there, but the walls and lifestyle keep blocking it. You either move into the open or use a booster.",
   expert: "Aparna et al (2018), endocrine society India survey showing 70 to 90 percent deficiency prevalence. AIIMS and ICMR endocrine guidelines recommend 25-hydroxy vitamin D status as best marker, with under 20 ng per ml deficiency, 20 to 30 insufficiency, 30 to 50 sufficient. ICMR NIN 2024 RDA: 600 IU per day for adults, but for established deficiency, 60,000 IU weekly for 8 weeks (Mithal protocol). Co supplementation with calcium where dietary calcium is low. Skin melanin reduces dermal D3 synthesis efficiency by approximately 5 fold compared to fair skin.",
   status: "settled",
   reflect: "When did you last test your serum vitamin D, and do you supplement systematically or only after symptoms?",
   conceptQuiz: [
    {
     q: "Why are urban Indians widely vitamin D deficient despite ample sunshine?",
     options: [
      { text: "Skin melanin, indoor lifestyle, full coverage clothing, and air pollution all reduce effective UVB exposure.", correct: true },
      { text: "Indian food is uniquely depleting.", misconception: "Diet plays a role but UVB synthesis is the dominant factor; the issue is exposure, not depletion." },
      { text: "Tropical climates produce different forms of vitamin D.", misconception: "The vitamin D produced is identical; the issue is quantity." },
      { text: "Indians genetically do not absorb vitamin D.", misconception: "Indians absorb vitamin D normally; synthesis at the skin level is reduced by melanin." }
     ],
     why: "Combined effects of melanin, indoor work, clothing, and pollution dramatically lower effective UVB conversion."
    },
    {
     q: "What is the best marker for assessing vitamin D status?",
     options: [
      { text: "Serum 25-hydroxyvitamin D.", correct: true },
      { text: "Serum calcium.", misconception: "Calcium often remains normal even in deficiency due to PTH compensation." },
      { text: "Serum 1,25-dihydroxyvitamin D.", misconception: "Active form is tightly regulated and does not reflect total body stores." },
      { text: "Phosphorus levels.", misconception: "Phosphorus is loosely related but not a direct marker." }
     ],
     why: "25-hydroxyvitamin D reflects body stores and is the consensus diagnostic marker."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Get tested", d: "Book a serum 25-hydroxyvitamin D test (typically 600 to 1500 rupees) and record the result.", xp: 10 },
    { level: "easy", t: "Correct deficiency", d: "If under 20 ng per ml, take 60,000 IU oral weekly for 8 weeks under physician guidance, then 1,000 to 2,000 IU per day.", xp: 20 },
    { level: "advanced", t: "Annual protocol", d: "Set an annual re test, maintain a daily 1,000 to 2,000 IU supplement, and add 15 minutes of midday sun on bare arms 3 times a week where possible.", xp: 40 }
   ]
  },
  {
   t: "Iron deficiency and India prevalence",
   subdomain: "quality",
   definition: "Insufficient body iron stores leading to impaired haemoglobin synthesis, the most common nutrient deficiency globally and especially severe in Indian women and children.",
   short: "Half of Indian women and children are anaemic, even with food on the plate.",
   deep: "NFHS 5 (2019 to 2021) data: 57 percent of Indian women aged 15 to 49 are anaemic; 67 percent of children under 5 are anaemic. The drivers are dietary (vegetarian diets lean on non heme iron which absorbs poorly), losses (menstruation), and high cereal phytate intake which inhibits iron absorption. Heme iron from meat absorbs at 15 to 35 percent; non heme from plants at 2 to 20 percent depending on inhibitors and enhancers. Vitamin C with the meal increases non heme iron absorption substantially; tea and coffee within 1 hour of meals cut absorption by half. Practical interventions: pair iron rich foods (dark leafy greens, jaggery, dates, lentils) with vitamin C (lemon, amla, citrus), drink tea between meals not with them, cook acidic foods in cast iron, and supplement under medical guidance when haemoglobin is below 12 g per dl for women, 13 for men.",
   generic: "Like trying to fill a leaky bucket with a small tap. Even when you put water in, much of it does not stay or arrives too slowly. You need both the right tap and the right bucket.",
   expert: "WHO defines anaemia at haemoglobin under 12 g per dl (non pregnant women) and under 13 g per dl (men). Ferritin under 30 ng per ml indicates iron deficiency even before anaemia. NFHS 5 documented worsening anaemia trends in India 2015 to 2021. POSHAN Abhiyaan and Anaemia Mukt Bharat programs roll out iron folic acid (IFA) supplementation. Phytates in unleavened wheat, polyphenols in tea and coffee, and calcium all inhibit non heme iron absorption; ascorbic acid is the dominant enhancer.",
   status: "settled",
   reflect: "Have you (or family members, particularly women) had a recent haemoglobin and ferritin check, and do meal patterns help or hinder iron absorption?",
   conceptQuiz: [
    {
     q: "What dietary pairing improves non heme iron absorption from a plant based meal?",
     options: [
      { text: "Vitamin C source like lemon, amla, or citrus with the meal.", correct: true },
      { text: "Tea or coffee right after the meal.", misconception: "Tannins in tea and coffee block iron absorption when consumed near meals." },
      { text: "Dairy with every iron rich meal.", misconception: "Calcium competes with iron absorption; useful at other times, not always at the iron meal." },
      { text: "High dose calcium supplements with the meal.", misconception: "Calcium inhibits iron absorption when taken together." }
     ],
     why: "Ascorbic acid reduces ferric iron to ferrous form and chelates inhibitors, improving non heme iron absorption substantially."
    },
    {
     q: "Even with normal haemoglobin, what marker reveals early iron deficiency?",
     options: [
      { text: "Serum ferritin below 30 ng per ml.", correct: true },
      { text: "Total cholesterol.", misconception: "Cholesterol does not reflect iron status." },
      { text: "Random blood sugar.", misconception: "Glucose does not reflect iron stores." },
      { text: "Vitamin B12 levels alone.", misconception: "B12 deficiency is a separate cause of anaemia, not an iron marker." }
     ],
     why: "Ferritin reflects body iron stores and falls before haemoglobin does, catching deficiency early."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Get a full iron panel", d: "Book a CBC plus ferritin and iron studies test (typically 700 to 1500 rupees) and note the results.", xp: 10 },
    { level: "easy", t: "Fix meal timing", d: "Move tea and coffee to between meals (at least 1 hour before or after iron rich meals) and add a vitamin C source to iron containing meals.", xp: 20 },
    { level: "advanced", t: "Treat if deficient", d: "If ferritin under 30 or haemoglobin below threshold, work with a physician on iron supplementation (oral 60 to 120 mg elemental iron with vitamin C, alternate days for better absorption), re test at 3 months.", xp: 40 }
   ]
  },
  {
   t: "Food labels India (FOPL)",
   subdomain: "myths",
   definition: "The system of front of pack and back of pack nutrition information, including ingredient lists, nutrient declarations, and emerging warning labels mandated by FSSAI.",
   short: "Read the back of pack, not the front. The big claims on the front are marketing; the label tells the truth.",
   deep: "Indian FSSAI rules require nutrition information per 100 g and per serve, ingredients in descending order of weight, and specific health claim restrictions. As of 2024 to 2025, FSSAI is moving toward Indian Nutrition Rating (INR), a star based front of pack labelling system, after years of debate over whether warning labels (Chile style) or stars would land. The traps to know: serving size manipulation (a 200 ml bottle declares per 100 ml so sugar looks halved), ingredient ordering (sugar split into glucose, fructose, dextrose, jaggery to push it down the list), and health halos (organic, no maida, immunity boosting). The reliable habit is: scan the ingredient list, count sugars including all aliases, check total sugar per 100 g (over 22 g is high for packaged food), check sodium (over 600 mg per 100 g is high), and ignore the front of pack entirely.",
   generic: "Like reading a job description versus the offer letter. The flashy ad sells the role; only the fine print tells you what you actually get.",
   expert: "FSSAI Regulation 2020 on Labelling and Display. The proposed Indian Nutrition Rating draws on Health Star Rating (Australia, New Zealand) and Nutri Score (France) models. WHO recommends warning label approach over star systems based on Chile and Mexico evidence showing better consumer response. The 22 g sugar per 100 g threshold maps to WHO's high sugar density cut off; 600 mg sodium per 100 g maps to high sodium for processed foods.",
   status: "settled",
   reflect: "Pick up any packaged item in your kitchen. Read the back of pack in detail. Did the front of pack accurately represent what is inside?",
   conceptQuiz: [
    {
     q: "What is the most reliable section of an Indian food label?",
     options: [
      { text: "The ingredient list and back of pack nutrition table per 100 g.", correct: true },
      { text: "The brand's claim on the front of pack.", misconception: "Front of pack is marketing; claims may be technically true but mislead in context." },
      { text: "The image of the food on the package.", misconception: "Images are stylised and unrelated to nutrient content." },
      { text: "The expiry date alone.", misconception: "Expiry matters for safety but says nothing about nutrition." }
     ],
     why: "Ingredients in descending weight order and per 100 g nutrient declarations are FSSAI mandated and standardised."
    },
    {
     q: "What is a common trick in serving size labelling?",
     options: [
      { text: "Declaring per 100 ml when the bottle holds 200 ml, halving apparent sugar.", correct: true },
      { text: "Always disclosing per total package.", misconception: "Per package disclosure is honest and not deceptive." },
      { text: "Listing in grams instead of millilitres.", misconception: "Unit choice itself is not deception; serving size manipulation is." },
      { text: "Using English instead of Hindi.", misconception: "Language is not a labelling trick by itself." }
     ],
     why: "Serving size manipulation lets brands report sugar and calories per artificially small portion, distorting perception of the full container."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Read 5 labels", d: "Pull 5 packaged items from your kitchen and read each back of pack, listing sugar per 100 g and sodium per 100 g.", xp: 10 },
    { level: "easy", t: "Reject misleading claims", d: "Identify one item you bought based on a front of pack claim (immunity, natural, no maida) where the back of pack contradicts the spirit. Remove it from regular purchases.", xp: 20 },
    { level: "advanced", t: "Build a pantry standard", d: "Set a household rule: no packaged item enters the pantry without back of pack check, sugar under 15 g per 100 g, sodium under 500 mg per 100 g, ingredient list under 8 items. Enforce for 8 weeks.", xp: 40 }
   ]
  }
 ],

 counterView: "Lots of confident diet books, keto, carnivore, plant-based-only, intermittent-fasting-fixes-everything, overreach the evidence. None has been shown to be uniquely superior over long horizons in well-controlled studies; most work as long as people stick to them, mostly by lowering total intake and reducing ultra-processed food. The 'sugar is poison' framing oversimplifies, whole-fruit sugar isn't equivalent to a soda. Also, much of nutrition epidemiology is observational, which means confounders are persistent. Treat any single dramatic dietary claim with suspicion; trust patterns that show up across many designs.",

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
  "Don't trust food packaging, read the ingredient list.",
  "Sugary drinks are the easiest win to drop.",
  "Any diet you can sustain beats a perfect one you can't."
 ],

 roadmap: [
  { rank: "Novice",    focus: "See what you actually eat, and cut the obvious losers",    do: "Track a week honestly, every meal, every drink. Cut sugary drinks (the easy win). Read three ingredient lists daily and start noticing patterns.",                                                                                             milestone: "You know what you actually eat (not what you think you eat) and you've stopped drinking calories.",                                 time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Hit a protein target and a plant variety target",       do: "Aim for 1.2 g/kg of protein daily. Aim for 25-30 different plants a week (herbs and spices count). Two simple targets to anchor everything else.",                                                                                                 milestone: "Protein hits the target most days, plant variety climbs week over week.",                                              time: "~1 month" },
  { rank: "Practitioner", focus: "Build a small cooking repertoire",               do: "Learn five simple meals you can repeat without thinking, built from mostly minimally-processed ingredients. The repertoire matters more than the recipes; you want defaults, not effort.",                                                                            milestone: "Cooking is the default behaviour. Ordering is the exception.",                                                    time: "~2-3 months" },
  { rank: "Specialist",  focus: "Tune to your actual goal",                    do: "Now that the basics are dialled in, adjust for what you specifically want, muscle gain, fat loss, athletic performance, a medical condition. Specifics, not influencer protocols.",                                                                               milestone: "Your eating supports your stated goal, and you can show why honestly.",                                               time: "~3-6 months" },
  { rank: "Expert",    focus: "Adjust seasonally, life-phase to life-phase",          do: "Your needs change as you age, as your sport changes, as your stress changes. Adjust the system you've built rather than blowing it up and rebuilding every six months.",                                                                                      milestone: "Sustainable across years, not just weeks. No yo-yo.",                                                         time: "~1 year+" },
  { rank: "Master",    focus: "Feed people you love well",                    do: "Cook well for family and friends. The way you eat becomes the way your household eats. Habits travel through dinners more than through lectures.",                                                                                                milestone: "Your household eats well by default. Future-you's kids inherit good habits without being told.",                                    time: "ongoing" },
  { rank: "Grandmaster", focus: "Teach without selling a diet",                  do: "Help others build sustainable eating. Don't push a protocol. Lead by example and answer questions honestly.",                                                                                                                    milestone: "People come to you for nutrition judgement and trust the answer because you're not selling them anything.",                              time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Harvard Nutrition Source",            what: "Genuinely good free nutrition info from the Walter Willett team.",     url: "https://nutritionsource.hsph.harvard.edu/",                     weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "ZOE podcast (Tim Spector)",            what: "Free episodes, evidence-based, microbiome-aware.",             url: "https://zoe.com/podcast",                              weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "WHO, healthy diet factsheets",         what: "Conservative, official, useful baseline.",                 url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",            weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "British Nutrition Foundation",          what: "Free, accessible nutrition science explainers.",              url: "https://www.nutrition.org.uk/",                           weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Marion Nestle, Food Politics blog",       what: "Honest food-industry critique, from the author.",              url: "https://www.foodpolitics.com/",                           verify: false, lastVerified: "2026-06" },
   { name: "Examine.com, nutrition pages",         what: "Evidence-graded summaries of foods + supplements.",             url: "https://examine.com/",                                weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "USDA FoodData Central",             what: "Free database of food composition (US).",                  url: "https://fdc.nal.usda.gov/",                             verify: false, lastVerified: "2026-06" },
   { name: "Michael Pollan, articles archive",       what: "Free essays from the popular food-writing classic.",            url: "https://michaelpollan.com/articles/",                         verify: false, lastVerified: "2026-06" },
   { name: "EAT-Lancet Commission summary (open)",      what: "Influential planetary-health diet framework.",               url: "https://eatforum.org/eat-lancet-commission/",                     verify: false, lastVerified: "2026-06" },
   { name: "Open Food Facts",                what: "Free, crowdsourced food-label database. Scan-and-check.",          url: "https://world.openfoodfacts.org/",                          verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "In Defense of Food, Michael Pollan",      what: "\"Eat food, not too much, mostly plants.\" Best general read.",       url: "https://michaelpollan.com/books/in-defense-of-food/",                price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "The Diet Myth, Tim Spector",          what: "Microbiome + plant diversity case.",                     url: "",                                          price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Food Politics, Marion Nestle",         what: "How the food industry shapes what 'healthy' means.",             url: "https://www.foodpolitics.com/",                           price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "How Not to Die, Michael Greger",        what: "Plant-forward case w/ extensive citations.",                 url: "https://nutritionfacts.org/book/how-not-to-die/",                  price: "verify", weight: "popular", verify: false, lastVerified: "2026-06" },
   { name: "The Omnivore's Dilemma, Michael Pollan",     what: "Where food comes from, deeply reported.",                  url: "https://michaelpollan.com/books/the-omnivores-dilemma/",               price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Salt Sugar Fat, Michael Moss",         what: "How processed-food companies engineer cravings.",              url: "",                                          price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Ultra-Processed People, Chris van Tulleken",  what: "Modern accessible take on NOVA Group 4.",                  url: "",                                          price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Spoon-Fed, Tim Spector",             what: "Twenty myths in nutrition, debunked.",                    url: "",                                          price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Why We Get Sick, Bikman / Why We Get Fat, Taubes", what: "Insulin-centric critiques. Read with debate caveats.",         url: "",                                          price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The China Study, Campbell",           what: "Influential, controversial. Read alongside its critics.",          url: "",                                          price: "verify", verify: false, lastVerified: "2026-06" }
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
   { text: "Anything cooked.", misconception: "Cooking is processing, not the issue. Ultra-processed = heavy industrial transformation." },
   { text: "Food heavily transformed industrially, often with additives uncommon at home.", correct: true },
   { text: "Anything in a package.", misconception: "Plain rice in a bag isn't ultra-processed; packaging isn't the criterion." },
   { text: "Junk food only.", misconception: "Some 'health' foods are also ultra-processed (e.g. many protein bars)." }
  ], why: "NOVA's criterion is industrial transformation + ingredients you wouldn't find at home, not 'processed at all' or 'junk only.'" },
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
  { front: "Plant diversity headline?", back: "Aim for 30+ different plants per week (herbs/spices count), tracks gut microbiome diversity." },
  { front: "Easiest health win in food?", back: "Stop drinking calories (sugary drinks, juices)." },
  { front: "Saturated fat, honest position?", back: "Replacing saturated with polyunsaturated modestly improves cardiovascular markers." },
  { front: "Are diet books reliable?", back: "Most overreach the evidence. Patterns across studies > confident single books." },
  { front: "What's the ingredient list rule?", back: "First 3 ingredients dominate. Long lists of unfamiliar additives are a yellow flag." }
 ],
 glossary: [
  { term: "Calorie", def: "Unit of energy. (Technically kilocalorie in everyday use.)" },
  { term: "Macro", def: "Macronutrient, protein, carbs, or fat." },
  { term: "Ultra-processed food", def: "NOVA Group 4, heavily industrially transformed food." },
  { term: "Fibre", def: "Plant-based carbohydrates the body doesn't digest; gut food + satiety." },
  { term: "Microbiome", def: "Community of microbes in/on the body, especially gut." },
  { term: "Glycaemic index", def: "How fast a food raises blood glucose. Real, but often overweighted in isolation." },
  { term: "Meta-analysis", def: "Combined statistical analysis of many studies." },
  { term: "Relative vs absolute risk", def: "Relative risk sounds bigger; absolute risk is what actually changes for you." },
  { term: "Glycaemic load", def: "Glycaemic index adjusted for serving size, a more realistic measure of blood sugar impact." },
  { term: "Time-restricted eating", def: "Eating only within a set daily window, often eight to ten hours." },
  { term: "Resistant starch", def: "Starch that escapes digestion in the small intestine and feeds gut bacteria." }
 ],

 safetyNote: "Educational, not medical / dietary advice. For specific conditions (diabetes, kidney issues, eating disorders, pregnancy, allergies, etc.), see a qualified clinician/dietitian before changing your diet."
};

export default d;
