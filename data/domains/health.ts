import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "health",
 icon: "🫀",
 hue: "#f87171",
 category: "Body & Health",
 name: "Health, Longevity & How the Body Works",
 tagline: "Live longer, feel better, what's actually solid",

 basics: "Almost everything you need to do to live well into old age is unglamorous and free. Move your body, sleep enough, eat mostly plants, have people you can call at 3 am, don't smoke, don't drink much.",
 deepBasics: "Do those, and basically every chronic disease that matters, heart, diabetes, cancer, dementia, shifts in your favour. Modern medicine is fantastic at pulling you back from the brink and surprisingly bad at keeping you off it; that gap is bridged by what you do daily. The internet is full of confident influencers selling protocols and supplements, and the science is honestly noisier than they pretend. But the basics are rock solid. Start there.",
 whyItMatters: [
  "Almost every chronic disease that wrecks late life shifts in your favour from the basics alone.",
  "You become a literate patient, you can ask doctors better questions and catch wishful prescriptions.",
  "You stop falling for confident health claims (single studies, mouse models, expensive supplements with one trial behind them).",
  "The goal isn't just to live longer. It's to feel like yourself in your 70s. That's a different game."
 ],
 realWorldExample: "There's a popular idea you'll see everywhere called the \"Blue Zones\", five places (Okinawa, Sardinia, Ikaria, Nicoya, Loma Linda) where people supposedly live to 100 at extraordinary rates, and the books explain it with whichever diet the author is selling. The honest picture is messier. Diet matters, but so do strong social ties, daily walking, gardens to tend, faith communities, and (awkwardly) in some Blue Zones, sloppy record-keeping that overstated how old the centenarians actually were. The boring lessons survived the scrutiny, move every day, eat mostly plants, sleep, belong to a community. The exciting diet-of-the-month parts didn't. Pull the boring lessons out and ignore the rest.",

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

 subdomains: [
  { id: "movement", name: "Movement and Strength", intro: "Regular movement and resistance training are the single biggest levers for healthspan. Muscle and aerobic capacity protect almost every system you care about.", capabilities: ["Hit 150 minutes a week of moderate cardio without burning out.", "Train every major muscle group twice a week with progressive load.", "Sit less by breaking long desk blocks with short movement breaks."] },
  { id: "rest", name: "Sleep and Stress", intro: "Sleep is when your body and brain actually repair. Chronic stress without recovery quietly damages metabolism, mood, and immune function.", capabilities: ["Hold a consistent sleep and wake time within a 30-minute window.", "Cut caffeine after 2 pm and screens an hour before bed.", "Use a daily 10-minute downshift, walk, breath work, or meditation."] },
  { id: "food_health", name: "Food Patterns", intro: "The eating patterns that predict long-term health: mostly plants, enough protein, minimally processed. Specific diets matter less than the overall pattern.", capabilities: ["Build most meals around protein, vegetables, and whole carbs.", "Cap ultra-processed foods to a small share of your weekly intake.", "Hit a daily protein target of roughly 1.2 to 1.6 grams per kg of body weight."] },
  { id: "mindset", name: "Healthspan Mindset", intro: "Playing the long game: aiming for decades of good function, not a six-week transformation. Boring consistency beats heroic effort.", capabilities: ["Track one health metric monthly, not daily, to see trends not noise.", "Treat one bad week as data, not a reason to quit.", "Pick habits you can keep at 80 percent for years, not 100 percent for weeks."] },
 ],

 concepts: [
  { t: "VO₂max, cardio fitness",        short: "The single most predictive thing you can move for longevity. Bigger effect than most medications.",                                              deep: "VO₂max is a measure of how much oxygen your body can use during peak exercise. It tracks all-cause mortality more strongly than almost any other single lifestyle number across many large studies. The effect is genuinely huge, moving from the bottom quartile to just above average matters more than most pills your doctor will write you. The good news: it's movable. 150 minutes a week of moderate cardio (brisk walking, easy cycling, swimming where you can still hold a conversation) will move it. Twice that and add some harder intervals, you move it a lot. It's the single highest-leverage habit you can install in your 30s and 40s.",                                                                                                               status: "settled",  reflect: "When did you last actually get out of breath on purpose? If you can't remember this week, that's the first move." },
  { t: "Strength and muscle mass",        short: "Muscle is metabolic insurance now. In later life, it's the single biggest reason you don't fall.",                                               deep: "Sarcopenia is the medical word for the muscle loss that happens with age. It's also one of the single biggest predictors of late-life frailty, falls, and death over 65. The cruel irony: many older adults think lifting weights is dangerous and avoid it, which guarantees the muscle decline that actually makes them frail. The evidence is the opposite, resistance training twice or three times a week, even with very modest weights, dramatically slows the curve. Start now, regardless of age, regardless of where you're starting from. Future-you has fewer hospital visits because of it.",                                                                                                                                      status: "settled",  reflect: "What's your current strength baseline? Could you do 10 push-ups today? When did you last try?" },
  { t: "Sleep",                 short: "Seven to nine hours, mostly consistent timing. Skimping costs you focus, mood, and over years, lifespan.",                                          deep: "We used to call sleep 'rest,' as if the brain just powered down. It doesn't. During deep sleep, your brain is actively consolidating memories, regulating hormones, and clearing metabolic waste. Skip it consistently and the bill comes due, worse cardiovascular markers, higher diabetes risk, sharper cognitive decline. Matthew Walker's popular book Why We Sleep made the case famously; some of his specific claims have been credibly critiqued, but the core picture, that chronic short sleep is genuinely costly, is rock solid. The cheap fix is boring: a consistent bedtime, a screen-free hour before, a cool dark room.",                                                                                                                      status: "settled",  reflect: "Your average hours of sleep last week? How much did the bedtime vary?" },
  { t: "Food: mostly plants, enough protein, not too much", short: "The boring guidance is right. Specific diet debates matter much less than the basics.",                                             deep: "Across just about every long-term study and every cultural tradition that produces healthy old people, the same pattern shows up. Lots of vegetables, fruits, whole grains, and legumes. Minimal ultra-processed food. Enough protein, especially as you age. Don't smoke. Minimal alcohol. The internet sells you new diets every quarter, keto, carnivore, paleo, plant-based-only, intermittent fasting, and a lot of them work in the short term mainly because they reduce ultra-processed food and total calories. Get the basics right and the specific best-diet arguments matter much less than the people writing the books pretend.",                                                                                                                     status: "settled",  reflect: "Honestly: what percentage of your food this week was minimally processed?" },
  { t: "Social connection",            short: "Loneliness shortens life expectancy on a scale comparable to smoking. The data isn't subtle.",                                               deep: "Across decades of research, including the famous Harvard Study of Adult Development that followed people for 80+ years, the same uncomfortable finding keeps surfacing: the strength of your relationships predicts late-life health better than money, fame, or even cholesterol. Loneliness, measured as a risk factor, shows up in some studies at the same scale as smoking. The implication is that \"who do you call when something's wrong?\" is not a soft question, it's a hard health metric. The fix isn't optional, and it isn't quick. It's months and years of showing up for people, picking up the phone, and being someone others can call too.",                                                                                                             status: "settled",  reflect: "Who would you call at 3 a.m. if something went badly wrong? When did you last actually talk to that person?" },
  { t: "Chronic stress (Robert Sapolsky)",    short: "Short bursts of stress are fine. Constant, unrelieved stress is the slow grinder.",                                                     deep: "Sapolsky's frame: the stress response evolved for short emergencies. A zebra outruns a lion, then either gets eaten or returns to grazing, system on, system off. Humans turned this into a chronic baseline. The boss who's always disappointed, the inbox that never empties, the news cycle that's always alarming, the relationship that's never quite resolved, these keep the stress response running long after it stopped being useful. Over years, that chronic activation damages cardiovascular health, the immune system, and cognitive function. The job isn't to avoid all stress, you can't and shouldn't. It's to make sure your stress dial actually turns off sometimes.",                                                                                               status: "settled",  reflect: "Where in your life is the stress dial currently stuck on? When did it last get to go off?" },
  { t: "Healthspan vs lifespan",          short: "Living 90 years feeling like 60 is the actual goal. 90 years feeling like 85 isn't.",                                                    deep: "Most people think about longevity as years total. Peter Attia and others reframe it as healthspan: how long you stay functional, mobile, and clear-headed. Adding a decade of frailty to the end of your life isn't a win. What you're really targeting are the four conditions that shrink healthspan the most, heart disease, cancer, neurodegenerative disease, and metabolic disease. The boring fundamentals on this page reduce all four. The thing to picture isn't being 90. It's being 75 and still climbing stairs without thinking about it.",                                                                                                                                                                 status: "framework", reflect: "Picture yourself at 80. What specifically do you want to still be doing? What habit today supports that?" },
  { t: "Be a literate patient",          short: "Doctors are great at acute crises and surprisingly weak at chronic prevention. You have to know how to ask.",                                       deep: "Modern medicine can pull you back from a heart attack with extraordinary speed. It's much worse at the long, boring work of stopping you from having one in the first place. That gap is bridged by you, by being a patient who can ask the right questions. \"What's the effect size of this medication?\" \"Is that risk relative or absolute?\" \"What's the alternative?\" \"What would change if I waited three months?\" Doctors mostly welcome these questions because they get to practise actual medicine instead of defensive medicine. The patients who get the best care are the ones who arrive with three good questions written down.",                                                                                                                 status: "framework", reflect: "Next appointment, write three specific questions before you go. Notice how the conversation changes." },
  {
   t: "Zone 2 cardio",
   subdomain: "movement",
   definition: "Sustained aerobic exercise at an intensity where you can still hold a conversation but not sing, targeting roughly 60 to 70 percent of max heart rate.",
   short: "The boring walk or cycle where you can still talk in full sentences. Where most of your cardio hours should live.",
   deep: "Zone 2 is the intensity zone that builds your aerobic engine without beating you up. In India, a brisk evening walk in the colony, a flat cycle ride, or a slow jog where you can still talk to a friend all count. The honest target for most people is 150 to 180 minutes a week across three or four sessions, plus one harder interval session if you want to move your VO2 max faster. The cruel trick: most people exercise too hard for zone 2 and too easy for intervals, ending up in a no man's land that builds fitness slowly and burns them out fast. Slow down, talk while you move, and the numbers improve.",
   generic: "Like simmering a curry instead of frying it. The slow steady heat does work the burner cannot, the flavours deepen without burning anything, and you can keep it going much longer than a flame on high.",
   expert: "Defined by lactate threshold one (LT1), roughly the upper bound of fat oxidation as the dominant fuel source. Mitochondrial biogenesis, capillary density, and stroke volume adaptations dominate at this intensity. Polarised training research (Seiler) supports an 80/20 split of easy zone 2 to high intensity work for most amateur athletes.",
   status: "framework",
   reflect: "On your last cardio session, could you have spoken in full sentences? If you were gasping, you were probably not in zone 2.",
   conceptQuiz: [
    {
     q: "What is the simplest field test for zone 2 intensity?",
     options: [
      { text: "You can hold a conversation but not sing.", correct: true },
      { text: "Your heart rate hits maximum.", misconception: "That is anaerobic territory, not zone 2." },
      { text: "You feel completely fresh throughout.", misconception: "Too easy; zone 2 should feel like sustained mild effort, not a stroll." },
      { text: "You finish out of breath and dizzy.", misconception: "That indicates a much higher zone, often zone 4 or 5." }
     ],
     why: "The talk test maps closely to the upper end of zone 2 for most people without a heart rate monitor."
    },
    {
     q: "Why is most amateur cardio less effective than it could be?",
     options: [
      { text: "People exercise too hard for zone 2 and too easy for intervals.", correct: true },
      { text: "People exercise too long.", misconception: "Duration is rarely the limiting factor; intensity placement is." },
      { text: "Diet undoes all cardio gains.", misconception: "Diet matters, but it does not explain the no man's land pattern." },
      { text: "Indian weather makes cardio ineffective.", misconception: "Climate affects scheduling, not the underlying training response." }
     ],
     why: "The polarised approach, mostly easy plus a little very hard, beats grinding everything at moderate intensity."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Talk test walk", d: "Go for a 20 minute walk where you can still hold a conversation in full sentences.", xp: 10 },
    { level: "easy", t: "Three zone 2 sessions", d: "Complete three 30 to 40 minute zone 2 sessions this week using the talk test as your gauge.", xp: 20 },
    { level: "advanced", t: "Polarised week", d: "Run a week with about 80 percent of cardio time in zone 2 and one short high intensity interval session, and log the heart rate ranges.", xp: 40 }
   ]
  },
  {
   t: "Sleep architecture",
   subdomain: "rest",
   definition: "The structured pattern of sleep stages, light, deep, and REM, that cycles roughly every 90 minutes through the night.",
   short: "Sleep is not one thing. It is several stages doing different jobs, and skipping any of them shows up the next day.",
   deep: "A night of sleep is built from repeating cycles of about 90 minutes each, moving through light sleep, deep slow wave sleep, and REM sleep. Deep sleep, mostly in the first half of the night, handles physical recovery and memory consolidation. REM sleep, mostly in the second half, handles emotional processing and creative pattern matching. Going to bed at 2 am and waking at 7 am does not just give you fewer hours, it preferentially cuts the REM sleep clustered near morning. In India where late dinners and early office commutes are common, this asymmetry hits hard. Consistent timing protects the architecture more than total hours do, within reason.",
   generic: "Like a four course meal. If you skip the soup and the main course you did not just eat less, you missed entirely different things your body was expecting. Sleep works the same way, each stage feeds something different.",
   expert: "Stages N1, N2, N3 (slow wave sleep) and REM, classified by EEG, EOG, EMG patterns (AASM scoring). N3 dominates the first third of the night, REM lengthens in later cycles. Cutting sleep short truncates REM disproportionately. Walker, Why We Sleep, summarises the core science; specific extrapolations have been critiqued (Guzey, 2019).",
   status: "debated",
   reflect: "What does your typical bedtime to wake time window look like? Is it long enough and consistent enough for a full set of cycles?",
   conceptQuiz: [
    {
     q: "Roughly how long is one full sleep cycle?",
     options: [
      { text: "About 90 minutes.", correct: true },
      { text: "About 20 minutes.", misconception: "That is closer to a single light sleep segment, not a full cycle." },
      { text: "About 4 hours.", misconception: "Far too long; you would only get one or two cycles per night." },
      { text: "It varies randomly each night.", misconception: "Cycles are remarkably consistent across healthy adults." }
     ],
     why: "Roughly five cycles of about 90 minutes each make up a normal night."
    },
    {
     q: "If you sleep from 2 am to 7 am instead of 11 pm to 6 am, what suffers most?",
     options: [
      { text: "REM sleep, which clusters in the later cycles of the night.", correct: true },
      { text: "Deep slow wave sleep only.", misconception: "Deep sleep dominates the early cycles and is usually preserved by short late sleep, though still reduced." },
      { text: "Nothing, as long as total hours match.", misconception: "Late timing truncates REM disproportionately even when totals look similar." },
      { text: "Only N1 light sleep.", misconception: "N1 is the smallest stage and not the main casualty of late bedtimes." }
     ],
     why: "REM lengthens in later cycles, so cutting morning sleep removes REM more than deep sleep."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Log a week", d: "Note your bedtime and wake time for seven consecutive nights without trying to change anything.", xp: 10 },
    { level: "easy", t: "Fix the window", d: "Pick a consistent bedtime and wake time that gives you a seven to nine hour window, and hold it for fourteen days including weekends.", xp: 20 },
    { level: "advanced", t: "Protect the morning hours", d: "For two weeks, refuse any meeting, alarm, or activity that cuts your morning sleep window, and note daytime focus changes.", xp: 40 }
   ]
  },
  {
   t: "Heart rate variability",
   subdomain: "rest",
   definition: "The natural variation in time between consecutive heart beats, used as a window into autonomic nervous system balance and recovery.",
   short: "Not your heart rate, but how irregular it is at rest. Higher variation usually means better recovery and stress tolerance.",
   deep: "Your heart does not beat like a metronome. The gap between beats expands and contracts a little, mostly driven by the vagus nerve and the balance between sympathetic (fight or flight) and parasympathetic (rest and digest) systems. Higher heart rate variability (HRV) at rest is associated with better cardiovascular fitness, recovery, and resilience to stress. A late night, a heavy meal, alcohol, illness coming on, or a tough training day all tend to lower the next morning's HRV before you consciously notice anything is off. Wearables in India like the Mi Band, Apple Watch, Whoop, or Oura now make daily HRV tracking trivial. Used carefully it is an early warning system for overtraining, under sleeping, or running too hot for too long.",
   generic: "Like the suspension on a car over rough roads. A rigid suspension that does not flex transmits every bump to the frame and breaks things; a responsive suspension absorbs and adapts. A heart that varies its timing well is the responsive suspension; one that stays locked in rhythm is the rigid one under stress.",
   expert: "Quantified via time domain (RMSSD, SDNN) and frequency domain (HF, LF, LF/HF ratio) measures from RR interval data. RMSSD is the metric most consumer wearables report. Reflects vagal tone and autonomic balance. Confounded by age, posture, hydration, recent exercise, alcohol, and circadian phase. Useful as a within person trend, not for cross person comparison. Reviewed in Shaffer and Ginsberg (2017).",
   status: "framework",
   reflect: "When did you last have a string of low HRV mornings? What was actually going on in your week, sleep, alcohol, stress, training?",
   conceptQuiz: [
    {
     q: "What does higher resting HRV typically indicate?",
     options: [
      { text: "Better autonomic balance and recovery capacity.", correct: true },
      { text: "An irregular heartbeat that needs medical treatment.", misconception: "HRV is normal beat to beat variation, distinct from arrhythmia." },
      { text: "Higher cholesterol.", misconception: "HRV does not track lipid panels." },
      { text: "Lower VO2 max.", misconception: "HRV generally tracks positively with cardio fitness, not inversely." }
     ],
     why: "Higher HRV at rest reflects strong vagal tone and is associated with better recovery."
    },
    {
     q: "Which night is most likely to lower tomorrow morning's HRV?",
     options: [
      { text: "Three drinks at dinner followed by a 1 am bedtime.", correct: true },
      { text: "A calm 10 pm bedtime after a light dinner.", misconception: "This usually supports normal or elevated HRV." },
      { text: "An easy zone 2 walk before bed.", misconception: "Light evening movement generally does not depress HRV." },
      { text: "Reading a book in bed.", misconception: "Pre sleep reading is broadly neutral to positive for HRV." }
     ],
     why: "Alcohol and late bedtimes are two of the most reliable HRV depressors in consumer data."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Establish a baseline", d: "Wear a tracker or use a phone app to log morning HRV for seven consecutive days without changing anything else.", xp: 10 },
    { level: "easy", t: "Find your tells", d: "Identify the two largest behavioural drops in your HRV week, alcohol, late nights, intense training, or stress, and note them.", xp: 20 },
    { level: "advanced", t: "Train by readiness", d: "For two weeks, treat a sharply low HRV morning as a signal to swap a planned hard workout for zone 2 or rest, and note recovery and performance shifts.", xp: 40 }
   ]
  },
  {
   t: "NEAT, non exercise activity",
   subdomain: "movement",
   definition: "The energy you burn through all daily movement that is not formal exercise, walking, fidgeting, standing, climbing stairs, housework, commuting.",
   short: "The calories you spend just by not sitting still all day. Often larger than your gym session.",
   deep: "Non Exercise Activity Thermogenesis (NEAT) is the calories you burn doing everything that is not formal exercise. In Indian urban life with desk jobs, lifts in every apartment block, food delivery apps, and long commutes spent sitting, NEAT has quietly collapsed compared to a generation ago. A 45 minute gym session might burn 300 to 400 calories. A day spent walking to the market, taking stairs, standing while on calls, and doing housework can easily add another 500 to 800 on top of basal metabolism. James Levine's research at Mayo Clinic found NEAT differences of up to 2,000 calories a day between lean and overweight individuals with similar formal exercise. The leverage is enormous and underrated. You cannot out train a sedentary day, but you can out walk one.",
   generic: "Like a leaky tap versus a single bucket of water. The bucket is your workout, big and visible. The drip is your daily movement. Over a day the drip easily out volumes the bucket, and most people only think about the bucket.",
   expert: "Coined by James Levine. Component of total daily energy expenditure (TDEE) alongside BMR, TEF, and EAT (exercise activity). Highly variable between individuals (up to 2000 kcal per day per Levine et al. 2005). Sensitive to environment, occupation, and small interventions like standing desks and walking meetings. Step counts of 8,000 to 10,000 per day correlate with meaningful mortality risk reduction in recent meta analyses (Paluch et al. 2022).",
   status: "settled",
   reflect: "On a desk day with no workout, roughly how many steps do you take? When did you last actually look at the number?",
   conceptQuiz: [
    {
     q: "Why can NEAT matter more than a daily gym session for body composition?",
     options: [
      { text: "It is spread over many hours and can easily exceed the calories burned in a single workout.", correct: true },
      { text: "It triggers a unique fat burning hormone.", misconception: "No special hormone; the effect is from cumulative energy expenditure." },
      { text: "It only burns fat, never carbs.", misconception: "Substrate use depends on intensity, not whether it is NEAT or formal exercise." },
      { text: "It replaces the need for sleep.", misconception: "NEAT does not substitute for sleep or recovery." }
     ],
     why: "Cumulative low intensity movement over a 16 hour day can comfortably outweigh a 45 minute workout."
    },
    {
     q: "Which change most directly raises NEAT for an office worker in Bengaluru?",
     options: [
      { text: "Taking calls while walking and using stairs instead of the lift.", correct: true },
      { text: "Adding a creatine supplement.", misconception: "Creatine does not affect daily activity levels." },
      { text: "Sleeping an extra hour.", misconception: "Helpful for recovery but reduces waking activity time." },
      { text: "Switching coffee to green tea.", misconception: "Marginal at best on total daily energy expenditure." }
     ],
     why: "Walking calls and stairs add hundreds of calories of NEAT without needing a gym slot."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Measure a normal day", d: "Track step count and standing time for one ordinary work day without changing anything.", xp: 10 },
    { level: "easy", t: "Walking calls", d: "For one week, take every phone call longer than five minutes while walking, indoors or out.", xp: 20 },
    { level: "advanced", t: "8,000 step floor", d: "Hold a minimum of 8,000 steps per day for thirty consecutive days, including weekends, and log how energy and mood shift.", xp: 40 }
   ]
  },
  {
   t: "Apolipoprotein B (ApoB)",
   subdomain: "food_health",
   fullForm: "Apolipoprotein B (ApoB)",
   definition: "A direct count of the atherogenic lipoprotein particles in your blood, considered a stronger forecaster of cardiovascular risk than standard LDL cholesterol.",
   short: "Counts the actual bullets in your bloodstream that drive heart disease, not just how much cargo they carry.",
   deep: "Standard cholesterol panels report LDL cholesterol, the amount of cholesterol carried inside LDL particles. ApoB counts the particles themselves. One ApoB protein sits on every LDL, VLDL, IDL, and Lp(a) particle, so the number is a direct census of atherogenic lipoproteins. Peter Attia and Allan Sniderman make the case sharply: two people can have the same LDL cholesterol with very different particle counts, and the one with more particles has measurably higher cardiovascular risk. This particularly matters for South Asians, who carry elevated Lp(a) prevalence and often appear deceptively normal on LDL alone. The test costs roughly 800 to 1500 rupees in Indian metros and is now stocked by SRL, Thyrocare, Metropolis, and Apollo Diagnostics. Targets vary by risk: under 90 mg/dL for general population, under 60 to 80 mg/dL for those with family history or established disease.",
   generic: "Like counting the actual cars on a highway instead of the total tonnage of cargo. A hundred small cars and ten large trucks can move the same goods, but the traffic risk is very different. ApoB counts cars, LDL cholesterol counts cargo.",
   expert: "Sniderman et al. and Attia (2023 Outlive). ApoB measured by immunoassay; reflects particle number across LDL, VLDL, IDL, Lp(a). Stronger discriminant than LDL C in mendelian randomisation and meta analyses (Ference et al. 2017, Marston et al. 2022). Particularly informative in discordance cases: small dense LDL, hypertriglyceridemia, metabolic syndrome, where LDL C underestimates risk. South Asian relevance: elevated Lp(a) prevalence (around 25 percent) means LDL C alone misses substantial residual risk. Targets per recent lipid guidance: under 90 mg/dL primary prevention, under 65 mg/dL secondary prevention, under 50 mg/dL very high risk.",
   status: "framework",
   reflect: "When was your last lipid panel? Did it include ApoB, or only standard LDL C?",
   conceptQuiz: [
    {
     q: "Why does ApoB forecast cardiovascular risk better than LDL C in some patients?",
     options: [
      { text: "ApoB directly counts atherogenic particle number, while LDL C measures cholesterol cargo per particle.", correct: true },
      { text: "ApoB measures inflammation directly.", misconception: "Inflammation is a separate axis captured by hsCRP, not ApoB." },
      { text: "ApoB is the same as total cholesterol.", misconception: "Total cholesterol bundles HDL and other fractions, and is not particle counted." },
      { text: "ApoB is cheaper to test than LDL C.", misconception: "LDL C is usually cheaper; ApoB costs more but is more informative." }
     ],
     why: "Two patients with identical LDL C can have very different ApoB; the one with more particles has higher event risk."
    },
    {
     q: "Why is ApoB particularly relevant for South Asian patients?",
     options: [
      { text: "Higher Lp(a) prevalence and metabolic syndrome mean LDL C alone underestimates residual risk.", correct: true },
      { text: "South Asians have higher HDL by default.", misconception: "Generally the opposite, lower HDL is common." },
      { text: "ApoB is only made by South Asian livers.", misconception: "ApoB is universal; the population context is the issue." },
      { text: "Statins do not work in South Asians.", misconception: "Statins work; the point is that risk stratification needs ApoB." }
     ],
     why: "Discordant lipid profiles common in South Asians make particle counting more diagnostic than cholesterol content."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Find your last LDL C", d: "Pull up your most recent lipid panel and note your LDL C, triglycerides, and HDL.", xp: 10 },
    { level: "easy", t: "Add ApoB to next test", d: "Book an ApoB test (SRL, Thyrocare, Metropolis, or Apollo) at your next routine bloodwork.", xp: 20 },
    { level: "advanced", t: "Build a 6 month plan", d: "If ApoB is above target, build a 6 month plan covering diet, fibre, exercise, and a conversation with your doctor about statin therapy if family history warrants. Retest at 6 months.", xp: 40 }
   ],
   diagram: {
    kind: "bars",
    title: "ApoB target zones (mg/dL)",
    caption: "ApoB counts atherogenic particles directly. Optimal targets are far stricter than the LDL-C cutoffs most reports flag green.",
    data: {
     items: [
      { label: "Optimal",    value: 60 },
      { label: "Acceptable", value: 80 },
      { label: "Borderline", value: 100 },
      { label: "High risk",  value: 130 }
     ],
     unit: " mg/dL"
    }
   }
  },
  {
   t: "Sarcopenia",
   subdomain: "movement",
   definition: "Age related loss of skeletal muscle mass and strength, accelerating after the 40s and a primary driver of frailty, falls, and mortality in later life.",
   short: "The muscle melt that quietly starts in your 30s and ends as the reason older people fall and do not get up.",
   deep: "From around age 30, untrained adults lose 3 to 8 percent of muscle mass per decade, accelerating to over 1 percent per year past 60. Sarcopenia is the medical term, and it is one of the strongest independent predictors of late life frailty, falls, hospitalisations, and all cause mortality. The cruel irony: many older Indians believe lifting weights is dangerous and avoid it, which guarantees exactly the decline they fear. The WHO 2020 Guidelines on Physical Activity recommend muscle strengthening activities at least twice a week for all adults, with progressive resistance training emphasised for those over 65. The dose required is modest: two to three sessions per week of compound movements (squat, hinge, push, pull, carry) with progressive load, supported by 1.2 to 1.6 g/kg protein per day, will preserve and often increase muscle mass at any age. Resistance training is among the very few interventions proven to extend healthspan as effectively as it extends mobility.",
   generic: "Like a savings account that quietly leaks 1 to 2 percent a year if you do not top it up. By the time you notice the balance is critically low, climbing the stairs is the warning. The deposit is resistance training, and it works at any age you start.",
   expert: "Cruz Jentoft et al. (EWGSOP2) 2019 diagnostic criteria: low muscle strength (grip, chair stand) plus low muscle quantity (DXA, BIA) or quality. WHO 2020 Guidelines on Physical Activity and Sedentary Behaviour: muscle strengthening at moderate or higher intensity involving major muscle groups at least 2 days per week for adults; multicomponent training emphasising balance and strength at least 3 days per week for adults 65 plus. Protein requirement rises with age: 1.2 to 1.6 g/kg per day for healthy older adults (PROT AGE study group). Resistance training generates type II fibre hypertrophy and motor unit recruitment improvements within 8 to 12 weeks even in 70 plus year olds (Fiatarone et al. 1994 and later). Strongest evidence base for any single anti frailty intervention.",
   status: "settled",
   reflect: "Can you stand from a chair with your arms crossed, ten times in a row, without using your hands? When did you last actually try?",
   conceptQuiz: [
    {
     q: "Which intervention has the strongest evidence for preventing or reversing sarcopenia?",
     options: [
      { text: "Progressive resistance training, two to three sessions per week.", correct: true },
      { text: "Cardio only, like walking, with no resistance work.", misconception: "Walking is great for VO2max and NEAT but a weak stimulus for muscle hypertrophy." },
      { text: "Protein supplements alone, with no training.", misconception: "Protein supports training but does not build muscle without a mechanical stimulus." },
      { text: "Bed rest and avoiding effort to protect joints.", misconception: "Bed rest accelerates muscle loss; this is the exact opposite of what helps." }
     ],
     why: "Progressive resistance training is the only intervention with robust evidence for preserving and increasing muscle mass across ages."
    },
    {
     q: "Why does sarcopenia matter beyond appearance in later life?",
     options: [
      { text: "Low muscle mass and strength predict frailty, falls, and all cause mortality independent of other factors.", correct: true },
      { text: "It only matters for athletes.", misconception: "It matters most for non athletes, who lose muscle silently without training." },
      { text: "It only affects men.", misconception: "Sarcopenia affects both sexes; postmenopausal loss is particularly steep." },
      { text: "It is purely cosmetic.", misconception: "Muscle loss drives falls, fractures, hospitalisations, and earlier death." }
     ],
     why: "Multiple large cohorts show muscle mass and strength independently predict survival and functional independence in older adults."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Test your baseline", d: "Time a sit to stand test (rise from a chair 10 times without hands) and a 30 second push up count. Write the numbers down.", xp: 10 },
    { level: "easy", t: "Start two sessions a week", d: "Begin a 30 minute resistance session twice a week covering squat, hinge, push, pull, and carry patterns with bodyweight or light load.", xp: 20 },
    { level: "advanced", t: "Build a 12 week progressive plan", d: "Run a 12 week progressive resistance program with 2 to 3 sessions per week, log loads, and retest grip strength and sit to stand at week 12.", xp: 40 }
   ],
   diagram: {
    kind: "curve",
    title: "Muscle mass vs age",
    caption: "Untrained adults lose 3 to 8 percent of muscle per decade after 30. Resistance training flattens, and often reverses, the curve at any age.",
    data: {
     x: "Age (years)",
     y: "Muscle mass (relative)",
     series: [
      { label: "Untrained",            points: [[30, 100], [40, 95], [50, 88], [60, 78], [70, 65], [80, 50]] },
      { label: "Resistance training",  points: [[30, 100], [40, 102], [50, 100], [60, 95], [70, 88], [80, 80]] }
     ]
    }
   }
  },
  {
   t: "Resting heart rate",
   subdomain: "movement",
   definition: "The number of times the heart beats per minute when fully at rest, a basic marker of cardiovascular fitness and autonomic balance.",
   short: "Lower resting heart rate generally signals a more efficient heart and better cardio fitness.",
   deep: "A normal resting heart rate (RHR) for adults sits between 60 and 100 beats per minute. Trained endurance athletes often run 40 to 50. The number reflects how much blood your heart moves per beat (stroke volume): a fitter heart pushes more blood per stroke and needs fewer beats. RHR also responds to stress, sleep debt, caffeine, alcohol, illness, and overtraining. A steadily rising RHR over weeks despite the same training load often signals accumulated stress, poor sleep, or imminent illness. Most modern wearables measure RHR continuously. The most useful approach is to track your own baseline over months and treat sustained elevations of 5 to 10 beats above your norm as a flag to back off training and sleep more, not push harder. A persistent RHR above 80 in a sedentary adult correlates with higher cardiovascular risk.",
   generic: "Like the idle RPM of a well tuned car. Smooth engines idle low; engines under strain idle high or rough. The number tells you something about overall condition without flooring the pedal.",
   expert: "Large prospective cohorts (Copenhagen Male Study, NHANES) link RHR above 80 with elevated all cause and cardiovascular mortality, independent of fitness. Each 10 bpm increase in RHR raises CV mortality risk by roughly 10 to 15 percent. Mechanisms include sympathetic dominance, vagal withdrawal, and reduced HRV. Indian guidelines from the Cardiological Society of India highlight RHR as a low cost screening marker, especially relevant given the high prevalence of premature CAD in South Asians.",
   status: "debated",
   reflect: "Do you know your average resting heart rate over the past month, and has it trended in a particular direction?",
   conceptQuiz: [
    {
     q: "What does a chronically low resting heart rate in a healthy adult often indicate?",
     options: [
      { text: "Greater stroke volume and better cardiovascular fitness.", correct: true },
      { text: "Heart disease.", misconception: "Low RHR in trained healthy adults is generally a fitness marker, not pathology." },
      { text: "Dehydration.", misconception: "Dehydration usually raises heart rate, not lowers it." },
      { text: "Vitamin deficiency.", misconception: "RHR is not a direct marker of vitamin status." }
     ],
     why: "A fitter heart pumps more blood per beat, so the same cardiac output requires fewer beats per minute."
    },
    {
     q: "Your wearable shows your RHR has risen from a baseline of 58 to 68 for the past 5 days. The smartest interpretation is...",
     options: [
      { text: "A signal of accumulated stress, poor sleep, or impending illness; back off training and recover.", correct: true },
      { text: "A signal to train harder to compensate.", misconception: "Training harder when RHR is elevated typically worsens overtraining or illness." },
      { text: "Ignore it; wearables are unreliable.", misconception: "Wrist based RHR at rest is fairly accurate; sustained shifts deserve attention." },
      { text: "Increase caffeine intake.", misconception: "Caffeine raises RHR further; does not address the underlying signal." }
     ],
     why: "Sustained RHR elevation is one of the earliest noninvasive markers of overreach or pre clinical illness."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Measure your RHR", d: "For 5 mornings before getting out of bed, count your pulse for 60 seconds (or read from a wearable) and average it.", xp: 10 },
    { level: "easy", t: "Establish a baseline", d: "Track RHR daily for 30 days, calculate your weekly average, and identify your personal normal range.", xp: 20 },
    { level: "advanced", t: "Use it to train smarter", d: "When weekly average RHR rises 5 or more bpm above baseline, deload training by 30 percent and prioritise sleep until it returns. Run for 3 months and log each adjustment.", xp: 40 }
   ]
  },
  {
   t: "Strength training fundamentals (compound lifts)",
   subdomain: "movement",
   definition: "A foundational approach to building strength that centres on multi joint compound movements: squat, hinge, push, pull, and carry patterns loaded progressively.",
   short: "Five movement patterns, loaded progressively, build most of the strength you will ever need.",
   deep: "The five compound patterns are the squat (e.g. goblet squat, back squat), the hinge (deadlift, kettlebell swing), the push (overhead press, bench press, push up), the pull (pull up, row), and the loaded carry (farmer's carry). Together they train most of the body's musculature and the neural coordination that links it. A practical beginner template is 2 to 3 sessions per week, 3 to 4 exercises per session, 3 sets of 5 to 8 reps, increasing load when you complete all sets cleanly. Progressive overload (adding load, reps, or sets over weeks) is what drives adaptation. The biggest mistakes are skipping the basics for isolation machines, ignoring form (especially on the hinge), and not eating enough protein to support recovery. In India, finding a coach trained in barbell movements is the highest leverage early investment.",
   generic: "Like learning five basic recipes that cover every cuisine. Master those and you can cook a thousand meals; obsess over garnishes first and you starve.",
   expert: "Schoenfeld (2010) mechanistic review of hypertrophy: mechanical tension, metabolic stress, and muscle damage drive growth. Compound lifts maximise tension across multiple joints. Rippetoe's Starting Strength and Lyle McDonald's protocols emphasise novice linear progression on the basic lifts. ACSM and NSCA position stands support 2 to 3 sessions per week for general health, with 10 to 20 sets per major muscle group per week as a productive volume range. Indian Council of Sports and Conditioning Coaches is growing barbell coaching certification post 2020.",
   status: "settled",
   reflect: "Does your current training rotate through all five movement patterns, or are you stuck on a few favourites and ignoring the others?",
   conceptQuiz: [
    {
     q: "Why are compound lifts the foundation of strength training?",
     options: [
      { text: "They recruit multiple joints and muscle groups, training coordination and overall strength efficiently.", correct: true },
      { text: "They are easier than isolation exercises.", misconception: "Compound lifts are technically harder; they just deliver more per unit time." },
      { text: "They do not require recovery.", misconception: "Compound lifts demand significant recovery between sessions." },
      { text: "They build only the chest.", misconception: "By definition, compound lifts train many muscle groups, not just one." }
     ],
     why: "Multi joint movements load multiple muscle groups under high tension simultaneously, the most efficient stimulus."
    },
    {
     q: "What drives long term progress on strength training?",
     options: [
      { text: "Progressive overload: gradually increasing load, reps, or sets over time.", correct: true },
      { text: "Variety: changing exercises every session.", misconception: "Constant variety prevents the consistent progression needed to build adaptation." },
      { text: "Lifting only to failure every set.", misconception: "Constant failure training raises injury risk and impairs recovery for most lifters." },
      { text: "Using only machines.", misconception: "Machines have a role but cannot match free weight compound loading for general strength." }
     ],
     why: "The body adapts to consistent demand; without progressive increase in stimulus, adaptation plateaus."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Learn 5 patterns", d: "Watch instructional videos on the 5 compound patterns (squat, hinge, push, pull, carry) and practice each with bodyweight or light load for 15 minutes.", xp: 10 },
    { level: "easy", t: "Run a 3x5 template", d: "Set up a beginner template: 2 sessions per week, 3 sets of 5 reps on goblet squat, Romanian deadlift, overhead press, and row. Increase load when you hit all sets clean.", xp: 20 },
    { level: "advanced", t: "12 week progression", d: "Follow a structured 12 week novice linear progression (e.g. Starting Strength template), log every session, and retest 5 rep max on squat, deadlift, and press at week 12.", xp: 40 }
   ]
  },
  {
   t: "Sleep hygiene",
   subdomain: "rest",
   definition: "A set of behavioural and environmental practices that improve sleep onset, depth, and continuity by aligning with circadian and homeostatic systems.",
   short: "Cool, dark, quiet, consistent timing, no screens or caffeine late, beats every sleep pill.",
   deep: "The high yield habits are well established: keep the bedroom cool (around 18 to 20 C), dark (blackout curtains or eye mask), quiet (earplugs or white noise where needed), and reserved for sleep and sex only. Anchor your wake time across all 7 days (consistency matters more than total hours alone). Stop caffeine 8 to 10 hours before bed (its half life is 5 to 6 hours). Cut bright screens 60 minutes before bed or use warm light. Get 10 minutes of bright morning light outside to anchor circadian rhythm. Alcohol fragments sleep architecture, particularly REM, even if it helps you fall asleep; cap or skip it. In Indian metros, late dinner culture, mobile use in bed, and warm bedrooms in summer compound the problem. The fix is unglamorous but reliable; sleep medication is a poor substitute and usually masks the underlying issue.",
   generic: "Like preparing a runway for a plane to land. The plane lands well only if the runway is set up right. Sleep is the plane; hygiene is the runway.",
   expert: "AASM and NIH consensus guidelines on sleep hygiene. Walker, Why We Sleep (caveats on some claims). Hirshkowitz et al (2015) NSF sleep duration recommendations: 7 to 9 hours for adults. Cognitive Behavioural Therapy for Insomnia (CBT-I, Morin) is first line treatment for chronic insomnia, with sleep restriction and stimulus control as key components. Indian sleep research from AIIMS and NIMHANS documents rising sleep deficits in IT workforce.",
   status: "settled",
   reflect: "Of the high yield sleep hygiene items, which one are you currently violating most consistently?",
   conceptQuiz: [
    {
     q: "What is the single most impactful sleep hygiene practice?",
     options: [
      { text: "Consistent wake time, including weekends.", correct: true },
      { text: "Sleeping more hours on weekends to catch up.", misconception: "Inconsistent wake times disrupt circadian rhythm and worsen weekday sleep." },
      { text: "Drinking warm milk before bed.", misconception: "Mild benefit at best; consistency and environment dominate." },
      { text: "Taking sleeping pills.", misconception: "Pills mask the problem and have tolerance and side effect issues." }
     ],
     why: "Wake time anchors the circadian system; consistent wake time is the strongest entrainment signal."
    },
    {
     q: "Why does cutting caffeine after early afternoon matter?",
     options: [
      { text: "Its 5 to 6 hour half life means significant caffeine is still active at bedtime, delaying sleep onset and reducing deep sleep.", correct: true },
      { text: "Caffeine accumulates as fat.", misconception: "Caffeine does not accumulate as fat; it has a measurable half life." },
      { text: "Late caffeine improves deep sleep.", misconception: "Caffeine actively suppresses deep sleep when present at bedtime." },
      { text: "Caffeine has no half life.", misconception: "Caffeine has a clinically measurable 5 to 6 hour half life on average." }
     ],
     why: "Caffeine is an adenosine receptor antagonist; lingering levels delay sleep pressure recognition and impair deep sleep."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Audit your room", d: "Check your bedroom for temperature, darkness, noise, and screen exposure. List what is off.", xp: 10 },
    { level: "easy", t: "Fix three levers", d: "Implement three changes for two weeks: consistent wake time within 30 minutes, no caffeine after 2 pm, no bright screens 60 minutes before bed. Track sleep quality.", xp: 20 },
    { level: "advanced", t: "Full protocol month", d: "Run a full sleep hygiene protocol for 30 days: cool dark room, consistent wake, morning light exposure, no alcohol on weeknights, screens off at a fixed time. Track HRV and subjective rest scores.", xp: 40 }
   ]
  },
  {
   t: "Yoga and India context (asana types)",
   subdomain: "movement",
   definition: "An ancient Indian discipline integrating physical postures (asana), breath (pranayama), and meditation, with growing modern evidence for cardiometabolic and mental health benefits.",
   short: "Originated in India, now globally adopted; modern evidence supports cardiometabolic and mental health benefits.",
   deep: "Yoga in modern usage usually refers to asana practice plus breath work. Common Indian styles include Hatha (foundation), Ashtanga (vigorous fixed sequence), Iyengar (alignment with props), Vinyasa (flowing transitions), Sivananda (traditional 12 posture sequence), and Kundalini (breath plus mantra). Indian government has formalised yoga as a wellness intervention through the Ministry of AYUSH since 2014. Modern randomised trials (S-VYASA Bengaluru, AIIMS) document benefits in hypertension reduction, type 2 diabetes glycaemic control, low back pain, anxiety, and sleep. Mechanisms include vagal activation through slow breathing, isometric loading via held postures, and movement based meditation. The evidence is strongest for daily 30 to 60 minute practice over 8 to 12 weeks. Caveat: poor instruction risks injury, particularly to lower back and shoulders; learn from a qualified teacher initially.",
   generic: "Like learning a musical instrument tradition with many schools. The base notes and breathing techniques are shared; styles differ in tempo and structure.",
   expert: "S-VYASA (Swami Vivekananda Yoga Anusandhana Samsthana) research outputs on cardiometabolic effects. Pal et al (2014), yoga intervention reduces systolic and diastolic BP. Innes and Selfe (2016) systematic review on yoga for cardiometabolic syndrome. AYUSH Ministry promotes yoga as preventive intervention. Common asana classifications: standing (e.g. Tadasana, Trikonasana), seated (Padmasana), forward bends (Paschimottanasana), backbends (Bhujangasana), inversions (Sirsasana), twists, and balances.",
   status: "framework",
   reflect: "Do you practice yoga as a complete system (asana plus breath plus stillness) or only the postures, and how often per week?",
   conceptQuiz: [
    {
     q: "What does the strongest modern evidence support yoga as effective for?",
     options: [
      { text: "Lowering blood pressure, improving glycaemic control, and reducing low back pain.", correct: true },
      { text: "Curing all chronic diseases.", misconception: "Yoga complements but does not replace medical treatment for established disease." },
      { text: "Only weight loss.", misconception: "Weight loss benefits are modest; cardiometabolic and mental health benefits are stronger." },
      { text: "Replacing all medication.", misconception: "Yoga can complement medication but should not replace prescribed treatment without medical guidance." }
     ],
     why: "RCT evidence is strongest for cardiometabolic markers, pain, and mood, not curative claims."
    },
    {
     q: "What is the proposed primary mechanism by which slow yoga breathing benefits the cardiovascular system?",
     options: [
      { text: "Vagal nerve activation and shift toward parasympathetic balance.", correct: true },
      { text: "Direct effect on lung structure.", misconception: "Lung structure does not change measurably from yoga practice." },
      { text: "Increased blood sugar.", misconception: "Yoga lowers fasting glucose in diabetics, not raises it." },
      { text: "Mechanical compression of arteries.", misconception: "No direct vascular compression mechanism; effects are autonomic." }
     ],
     why: "Slow nasal breathing at 5 to 6 breaths per minute robustly activates vagal tone and shifts autonomic balance."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Try 5 days", d: "Follow a 20 minute beginner yoga video for 5 consecutive days, focusing on basic standing and seated postures plus 5 minutes of slow breathing.", xp: 10 },
    { level: "easy", t: "Pick a style", d: "Try Hatha, Iyengar, and Vinyasa once each, then commit to one style for 8 weeks at 3 sessions per week.", xp: 20 },
    { level: "advanced", t: "Full protocol", d: "Practice 45 minutes daily for 12 weeks under qualified instruction, including asana, pranayama, and 10 minutes of seated stillness. Track resting BP, HRV, and subjective stress at week 0, 6, 12.", xp: 40 }
   ]
  },
  {
   t: "Meditation evidence base",
   subdomain: "rest",
   definition: "A set of mental training practices (focused attention, open monitoring, loving kindness) shown in randomised trials to improve attention, emotional regulation, and stress markers.",
   short: "Real benefits exist for stress and attention, but the headline claims have been wildly oversold.",
   deep: "The strongest evidence supports mindfulness based stress reduction (MBSR, Jon Kabat-Zinn, 8 weeks) for stress, anxiety, chronic pain, and depressive relapse prevention (MBCT). Meta analyses (Goyal et al, 2014; Kuyken et al, 2016) confirm moderate effects on anxiety, depression, and pain, similar in magnitude to evidence based pharmacotherapy for these conditions. Daily 10 to 30 minute practice over 8 weeks produces measurable change. The science gets weaker when claims expand to enlightenment, IQ boosts, and curing disease. Modern neuroscience documents changes in attention networks and amygdala reactivity but not the dramatic structural changes early studies overstated. Indian Vipassana centres (Goenka tradition) and Art of Living courses run 10 day intensive retreats. Beginners are well served by free 10 to 15 minute guided sessions on apps; technique matters less than consistency.",
   generic: "Like learning to lift weights for the mind. Real strength comes from regular sessions, not the brand of dumbbell or the special pre workout drink.",
   expert: "Goyal et al (2014) JAMA Internal Medicine meta analysis: moderate evidence for anxiety, depression, pain. Kuyken et al (2016) meta analysis on MBCT preventing depressive relapse. Tang et al (2015) review on neural mechanisms. Long term meditators show changes in anterior cingulate and insula activity. Indian Vipassana lineage taught by S.N. Goenka popularised 10 day silent retreats globally. Caveats from Britton et al (2021) on adverse effects in some practitioners (anxiety, dissociation) under intensive practice without proper guidance.",
   status: "debated",
   reflect: "Have you tried daily meditation for at least 8 weeks, or are you judging the practice on a few attempts of a few minutes?",
   conceptQuiz: [
    {
     q: "What does the strongest meditation evidence support?",
     options: [
      { text: "Moderate improvements in anxiety, depression, and chronic pain via structured 8 week programs.", correct: true },
      { text: "Dramatic IQ increases.", misconception: "No robust evidence supports significant IQ changes from meditation." },
      { text: "Curing chronic disease entirely.", misconception: "Meditation can complement but not cure established disease." },
      { text: "No effects at all.", misconception: "Multiple meta analyses confirm meaningful, if moderate, effects." }
     ],
     why: "MBSR and MBCT RCTs produce moderate effect sizes on stress, anxiety, depression, and pain across diverse populations."
    },
    {
     q: "What does the evidence say about consistency vs technique in meditation practice?",
     options: [
      { text: "Consistency over weeks matters more than the specific technique chosen.", correct: true },
      { text: "Only specific Tibetan techniques work.", misconception: "No evidence supports one technique dominating across practitioners." },
      { text: "One long session per week is enough.", misconception: "Daily short practice outperforms occasional long practice." },
      { text: "Practice produces no measurable changes.", misconception: "Daily practice over 8 weeks produces measurable behavioural and neural changes." }
     ],
     why: "Daily practice over weeks produces neural adaptation; the specific style matters less than sustained engagement."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Sit 10 minutes", d: "Sit for 10 minutes with eyes closed, attention on breath, returning gently when distracted. Just one session.", xp: 10 },
    { level: "easy", t: "Run 8 weeks", d: "Use a free guided meditation app (Insight Timer, Smiling Mind) for 10 to 20 minutes daily for 8 weeks. Track adherence.", xp: 20 },
    { level: "advanced", t: "Attend a retreat", d: "Attend a 10 day Vipassana or 4 to 7 day retreat (Goenka centres in India are free, donation based), and run a daily 30 minute practice for 3 months afterward.", xp: 40 }
   ]
  },
  {
   t: "Preventive screening (India: thyroid, lipid, HbA1c after 30)",
   subdomain: "mindset",
   definition: "Routine asymptomatic blood and physical tests that detect cardiometabolic and endocrine disease early enough to alter trajectory, with particular relevance to South Asian risk profile.",
   short: "South Asians develop diabetes and heart disease earlier and at lower BMI; screening after 30 catches it early.",
   deep: "South Asians are at substantially elevated risk for type 2 diabetes, dyslipidaemia, and coronary artery disease, often presenting 5 to 10 years earlier than European populations and at lower BMI. The pragmatic Indian screening protocol after age 30: annual fasting glucose plus HbA1c (catches prediabetes early), full lipid profile including LDL-C and ApoB (LDL-C alone misses small dense particle risk), TSH (subclinical hypothyroidism is widely prevalent, especially in women), liver function (NAFLD prevalence is rising), and complete blood count plus ferritin. Every 3 to 5 years add ECG and at 40 plus consider a coronary calcium score for those with risk factors. Catching prediabetes (HbA1c 5.7 to 6.4) at 32 instead of full diabetes at 42 can avoid decades of vascular damage. The cost of a comprehensive annual panel runs 2,500 to 5,000 rupees in private labs.",
   generic: "Like an annual servicing for a car. You can keep driving without it, but problems caught early are cheap fixes; problems caught late are engine replacements.",
   expert: "ICMR INDIAB study documents diabetes prevalence at 11 percent and prediabetes at 15 percent in adults; large urban rural variation. Cardiological Society of India guidelines recommend LDL-C and ApoB based assessment. Indian Thyroid Society notes 10 percent prevalence of subclinical hypothyroidism, higher in women. INTERHEART study showed South Asians develop CAD 5 to 10 years earlier than Europeans. AIIMS preventive medicine guidelines support annual cardiometabolic panel post 30.",
   status: "settled",
   reflect: "When did you last get a full cardiometabolic panel done, and do you know your fasting glucose, HbA1c, LDL-C, and ApoB numbers?",
   conceptQuiz: [
    {
     q: "Why should South Asians start cardiometabolic screening earlier than other populations?",
     options: [
      { text: "South Asians develop diabetes and CAD 5 to 10 years earlier and at lower BMI thresholds.", correct: true },
      { text: "Indian climate makes everyone diabetic.", misconception: "Climate is not the driver; genetic and lifestyle factors are." },
      { text: "Screening is mandatory by law.", misconception: "There is no legal mandate; the reason is biological risk." },
      { text: "Lab tests are cheaper in India.", misconception: "Cost may be lower but is not the medical reason for earlier screening." }
     ],
     why: "South Asians have a documented earlier onset and lower BMI threshold for cardiometabolic disease."
    },
    {
     q: "What does HbA1c measure?",
     options: [
      { text: "Average blood glucose over roughly the past 3 months.", correct: true },
      { text: "Current blood sugar at the moment of test.", misconception: "Fasting or random glucose measures the moment; HbA1c averages 3 months." },
      { text: "Cholesterol level.", misconception: "HbA1c does not measure cholesterol." },
      { text: "Hydration status.", misconception: "HbA1c is not affected by hydration status." }
     ],
     why: "Glycated haemoglobin reflects average glucose exposure over the lifespan of red blood cells, roughly 90 to 120 days."
    }
   ],
   conceptTasks: [
    { level: "basic", t: "Book a basic panel", d: "Book a fasting glucose, HbA1c, lipid profile, and TSH at a NABL accredited lab. Record results.", xp: 10 },
    { level: "easy", t: "Build a tracker", d: "Add LDL-C, ApoB, ferritin, vitamin D, B12, and liver function to your annual panel. Build a spreadsheet tracking values year on year.", xp: 20 },
    { level: "advanced", t: "Act on the numbers", d: "For any flagged value (HbA1c above 5.7, LDL-C above 100, ApoB above 90, TSH above 4.5, vitamin D under 30), set a specific action plan with diet, exercise, or physician consult and re test at 3 to 6 months.", xp: 40 }
   ]
  }
 ],

 counterView: "Almost every confident health claim from a single book or podcast is at least partly wrong. Walker's 'Why We Sleep' has well-documented inaccuracies; many 'fasting cures everything' claims rest on mouse studies; 'sugar is poison' / 'red meat causes cancer' headlines usually move risk by a few percent, not 100. Healthspan-medicine voices (Attia, Sinclair) over-extrapolate from animal models more than they admit. The best honest position: trust the boring fundamentals (move, sleep, eat mostly plants, social ties, no smoking, low alcohol), discount any single hot claim, and update slowly when meta-analyses move.",

 capabilities: [
  "Do moderate cardio 150+ min/week, and notice your VO₂max improving.",
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
  { rank: "Novice",    focus: "See where you are before trying to change anything",      do: "For two weeks, just track, sleep hours, daily steps, rough weekly cardio and resistance minutes, what you eat. Don't change anything yet. Without a baseline, you can't tell whether anything you do is actually working.",                                                                     milestone: "You know your real current baseline across sleep, movement, and food. Some of it will surprise you.",                               time: "~2 weeks" },
  { rank: "Apprentice",  focus: "Make daily movement a habit, not an event",           do: "Hit 150 minutes a week of moderate cardio. Add two strength sessions. Build slowly; the injury at month two is the most common reason people quit. Bodyweight is fine to start.",                                                                                         milestone: "Movement happens on most days without you negotiating with yourself first.",                                            time: "~1-2 months" },
  { rank: "Practitioner", focus: "Fix sleep and food so they stop sabotaging everything else",   do: "Lock a consistent sleep window. Eat mostly minimally-processed food. Hit a real protein target. Don't drink your calories. These four moves underwrite everything else.",                                                                                             milestone: "Sleep and food are no longer the things undoing your effort everywhere else.",                                           time: "~3 months" },
  { rank: "Specialist",  focus: "Handle stress and connection like the health factors they are", do: "Add a daily practice that gets your nervous system off, walks, meditation, breath work, real downtime, whatever works for you. Deliberately schedule social connection. Loneliness is not a soft variable.",                                                                             milestone: "Your stress dial gets to turn off most days, and you talk to at least one person you love every week.",                               time: "~6 months" },
  { rank: "Expert",    focus: "Get your numbers; tune to your individual response",       do: "Get the key bloodwork, lipids, A1C, vitamin D, thyroid. Talk to a doctor about your actual numbers, not anyone's average. Adjust deliberately.",                                                                                                         milestone: "You know your numbers and their trend lines, not just your habits.",                                                 time: "~1 year" },
  { rank: "Master",    focus: "Think in decades, plan with family and doctor input",      do: "Write down a 10-to-20-year healthspan plan that survives meeting your future self. Bring family and a doctor into the planning.",                                                                                                                 milestone: "Your plan reaches honestly out to 20 years and your family knows what you care about.",                                       time: "~2+ years" },
  { rank: "Grandmaster", focus: "Help others without selling them anything",            do: "Teach the boring fundamentals to the people around you. Don't push protocols. Lead by being someone whose 60s look like other people's 40s.",                                                                                                           milestone: "The people around you are healthier because of how you've lived, not because of anything you sold them.",                             time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "Peter Attia, The Drive (podcast + free articles)",  what: "Long-form, technical, accessible. Best general longevity-medicine intro.",      url: "https://peterattiamd.com/",                              weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "WHO, physical activity guidelines",         what: "Official, conservative, evidence-based baseline.",                  url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",          weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Harvard Nutrition Source",              what: "Free, Walter Willett team, strong nutrition baseline.",               url: "https://nutritionsource.hsph.harvard.edu/",                      weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "NIH, National Institutes of Health (US)",      what: "Free public-health information from primary US source.",               url: "https://www.nih.gov/",                                 weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Examine.com (free pages)",              what: "Evidence-graded summaries of supplements + interventions.",              url: "https://examine.com/",                                 weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "PubMed",                        what: "Search primary biomedical research before believing podcasts.",             url: "https://pubmed.ncbi.nlm.nih.gov/",                            verify: false, lastVerified: "2026-06" },
   { name: "Andrew Huberman, public lectures (YouTube)",     what: "Stanford neuroscientist; mix of solid + speculative, use w/ critique.",        url: "https://www.hubermanlab.com/",                             verify: false, lastVerified: "2026-06" },
   { name: "Sleep Foundation",                   what: "Free reference on sleep stages, hygiene, disorders.",                 url: "https://www.sleepfoundation.org/",                           verify: false, lastVerified: "2026-06" },
   { name: "Mayo Clinic, patient education",           what: "Reliable plain-English explanations of conditions + treatments.",           url: "https://www.mayoclinic.org/patient-care-and-health-information",            verify: false, lastVerified: "2026-06" },
   { name: "Stronger by Science, Greg Nuckols",          what: "Free, well-cited articles on strength training research.",               url: "https://www.strongerbyscience.com/",                          verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Outlive, Peter Attia",                what: "The four horsemen + the healthspan playbook.",                     url: "https://peterattiamd.com/outlive/",                          price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Why Zebras Don't Get Ulcers, Sapolsky",       what: "Stress biology, beautifully written.",                         url: "https://en.wikipedia.org/wiki/Why_Zebras_Don%27t_Get_Ulcers",             price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Being Mortal, Atul Gawande",             what: "How medicine actually treats aging + dying, and what it gets wrong.",         url: "https://atulgawande.com/book/being-mortal/",                      price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Lifespan, David Sinclair",              what: "Longevity science w/ caveats, read alongside critiques.",               url: "",                                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "How Not to Die, Michael Greger",           what: "Plant-forward case w/ extensive citations; vegan-skewed.",               url: "https://nutritionfacts.org/book/how-not-to-die/",                    price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Comfort Crisis, Michael Easter",         what: "On voluntary discomfort + modern softness.",                      url: "",                                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Why We Sleep, Matthew Walker",            what: "Popular sleep book, sound core, specific claims critiqued.",              url: "https://en.wikipedia.org/wiki/Why_We_Sleep",                      price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "The Body, Bill Bryson",                what: "Friendly, broad tour of human biology.",                        url: "https://en.wikipedia.org/wiki/The_Body:_A_Guide_for_Occupants",             price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Spark, John Ratey",                  what: "Exercise + the brain. Practical + research-grounded.",                 url: "",                                            price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Atomic Habits, James Clear (cross-applies)",     what: "Behavior-change layer that makes the above stick.",                   url: "https://jamesclear.com/atomic-habits",                         price: "verify", verify: false, lastVerified: "2026-06" }
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
   { text: "Refuse to eat that food.", misconception: "Often based on tiny shifts in absolute risk, overreaction is its own cost." },
   { text: "Switch to mouse studies.", misconception: "Mouse studies are even shakier for humans." }
  ], why: "Single dramatic claims are noisy. Meta-analyses + understanding absolute vs relative risk beat headlines." },
  { q: "Best evidence on resistance training over 60?", options: [
   { text: "Avoid it, risk of injury too high.", misconception: "The exact opposite, sarcopenia and falls are the bigger risk." },
   { text: "Do it 2-3×/week, reduces sarcopenia + fall risk, improves outcomes.", correct: true },
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
   { text: "Debunked entirely.", misconception: "Too strong, the headline is solid." },
   { text: "Mostly marketing.", misconception: "It's a popular science book by a credentialed researcher; some critique, not dismissal." }
  ], why: "Sleep matters, but the popular book has documented inaccuracies. Trust the core; verify the specifics." }
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
  { term: "VO₂max", def: "Max rate of oxygen use, a key measure of cardio fitness." },
  { term: "Sarcopenia", def: "Age-related loss of muscle mass and strength." },
  { term: "Healthspan", def: "Years lived in good health, not just total years alive." },
  { term: "Ultra-processed food", def: "Food heavily transformed with industrial ingredients (Nova classification)." },
  { term: "Chronic stress", def: "Persistent activation of the stress response, damages multiple systems." },
  { term: "Relative risk", def: "Risk in one group vs another, sounds bigger than absolute risk." },
  { term: "Absolute risk", def: "Actual probability of an event in a population." },
  { term: "Meta-analysis", def: "Statistical combination of many studies, usually more reliable than any one." },
  { term: "HRV", def: "Heart rate variability, beat to beat variation, a proxy for recovery and stress." },
  { term: "NEAT", def: "Non exercise activity thermogenesis, calories burned through daily movement outside workouts." },
  { term: "Zone 2", def: "Steady aerobic effort where you can still talk, builds mitochondrial fitness." }
 ],

 safetyNote: "Educational, not medical advice. For symptoms, conditions, or before major lifestyle changes (especially with chronic conditions), talk to a qualified doctor. For emergencies in India, the standard number is 112."
};

export default d;
