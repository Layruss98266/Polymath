import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "ai_ml",
  icon: "🤖",
  hue: "#6db5ff",
  category: "Tech & Future",
  name: "AI & Machine Learning",
  tagline: "Understand the machines rewriting everything",

  basics:
    "Old-school software was a chef following a recipe — every step written out by a human. Machine learning is more like a child watching a million people cook, then trying their own version. You don't tell it the rules; you show it examples and it figures them out. Modern AI — the chatbots and image generators everyone's talking about — is this idea cranked all the way up. Trained on most of the internet, it gets shockingly good at imitating us. But it isn't magic, it isn't thinking, and it's wrong more often than people realise. Once you see how the trick works, you can use it like a power tool instead of treating it like a wizard.",
  whyItMatters: [
    "You'll get 10× more out of the AI tools you already use, just by knowing how they actually work.",
    "You'll catch the confident lies. AI bluffs beautifully — and most people don't notice.",
    "AI literacy is becoming as basic as knowing how the internet works. Whoever doesn't get fluent ends up paying someone who did.",
    "Knowledge work — writing, coding, designing, analysing — is being re-priced fast. You want to be on the right side of that."
  ],
  realWorldExample:
    "When you type a question into an AI chatbot, it doesn't \"look the answer up\" anywhere. It looks at the words you wrote, then guesses the most likely next word. Then the next. Then the next. Each guess is based on patterns it noticed in everything it was trained on. That's it. That's the whole magic trick. This is why an AI can write a beautiful confident paragraph and casually state a fact that's flat wrong: it isn't trying to be true, it's trying to be plausible. Once you really feel that distinction in your gut, everything about working with AI changes — including when to trust it and when to verify.",

  mentors: [
    { name: "Geoffrey Hinton",   for: "deep learning (one of the fathers)", work: "Backpropagation; 2018 Turing Award" },
    { name: "Andrej Karpathy",   for: "making ML actually learnable",       work: "\"Neural Networks: Zero to Hero\" (YouTube)" },
    { name: "Andrew Ng",         for: "the structured on-ramp millions use",  work: "Coursera Machine Learning + DeepLearning.AI" },
    { name: "Vaswani et al.",    for: "the transformer — what powers LLMs",  work: "\"Attention Is All You Need\" (2017)" },
    { name: "Judea Pearl",       for: "causality — what correlation alone can't tell you", work: "The Book of Why (2018)" }
  ],

  diagrams: [
    { kind: "flow", title: "Training vs inference", caption: "Data → train → model → prompt in → prediction out.", data: { steps: ["Data", "Train (set weights)", "Model", "Prompt", "Predict next token"] } },
    { kind: "curve", title: "Under- vs over-fitting", caption: "Test error has a sweet spot; train error keeps falling.", data: {
      x: "Model complexity", y: "Error",
      series: [
        { label: "Test error",  points: [[0, 9], [3, 3], [6, 2], [9, 7]] },
        { label: "Train error", points: [[0, 9], [3, 5], [6, 3], [9, 1]] }
      ]
    } }
  ],

  synthesis: [
    { concept: "Hallucination",      linksTo: "marketing",         note: "Confident-fluent-but-wrong is a cognitive failure mode marketers exploit on humans, too." },
    { concept: "Prompting",          linksTo: "marketing",         note: "A prompt is a brief. Clear input → clear output — the same skill as good copy." }
  ],

  concepts: [
    { t: "Training vs inference",                     short: "Training is the years of schooling. Inference is the answer in the exam.",                                                                                                              deep: "There are two phases in the life of an AI model. Training is the long, expensive process of feeding it billions of examples until billions of internal numbers (parameters) settle into a pattern. That phase is done in giant data centres and might take weeks. Once it's done, the model is frozen. Inference is what happens every time you type a question — the frozen model looks at your input and produces an output. Fast and cheap, comparatively. Your prompts don't teach the model anything new; you're just asking the already-trained student to take another exam.",                                                                                                                                                            status: "settled",   reflect: "The next time an AI gets a recent news event wrong, ask yourself: was it trained before this happened?" },
    { t: "Tokens",                                    short: "AI doesn't read letters. It reads chunks of words called tokens.",                                                                                                                       deep: "Imagine the AI has a vocabulary book of about 50,000 little chunks. Common words like \"hello\" are one chunk. Unusual words like \"reinforcement\" get split into pieces: \"rein\", \"force\", \"ment\". Roughly, four English letters ≈ one token. This is why an AI can write Shakespeare but can't reliably count the letter \"r\" in \"strawberry\" — it never sees the letters; it sees \"straw\" and \"berry\" as two tokens and the question feels weird. Tokens also explain why long conversations have limits (the model can only hold N tokens at a time) and why API pricing is per token.",                                                                                                                                                          status: "settled",   reflect: "Ask any AI to count the letter R in \"strawberry\". When it slips, you'll understand tokens better than reading any explainer." },
    { t: "Neural networks and parameters",            short: "Billions of tiny tunable knobs that, together, store patterns.",                                                                                                                          deep: "A neural network is layers of very simple maths units stacked together. Each unit has a number called a weight. \"Learning\" is just nudging these weights, billions of times, so that the model's outputs slowly start matching the right answers in the training data. GPT-4-class models have over a trillion of these knobs. More knobs roughly equals more capability — but the quality of the training data and the architecture matter just as much. A small, well-trained model can beat a huge, badly-trained one. Scale isn't the only ingredient.",                                                                                                                                                                                                      status: "settled",   reflect: "Why does \"the bigger the model, the smarter it is\" only get you halfway to the truth?" },
    { t: "Supervised, unsupervised, and RL",          short: "Three different teachers.",                                                                                                                                                              deep: "Supervised learning is school with an answer key — you show the model thousands of cats and dogs labelled \"cat\" or \"dog,\" and it learns to label new ones. Unsupervised learning is school without an answer key — show it a million customer records and let it cluster them into groups it discovers by itself. Reinforcement learning is school by trial and error — the model takes an action, gets a reward or a penalty, adjusts. Modern chatbots blend these: first pre-trained unsupervised on the internet to predict next words, then refined with RL from human feedback (RLHF) to be more helpful and less awful.",                                                                                                                                       status: "settled",   reflect: "Which of these three styles does your own learning look most like, right now?" },
    { t: "Hallucination",                             short: "Confident, fluent, totally wrong. The signature failure of LLMs.",                                                                                                                       deep: "Ask a chatbot for the references in a textbook it's never read. It'll often give you a list of perfectly-formatted citations — authors, journal names, page numbers — that don't exist. Not one of them. The model isn't lying on purpose. It's doing exactly what it was built for: producing text that looks like what should come next. Plausible has nothing to do with true. The fluency is the problem — a confident wrong answer feels right to humans, so we forward it, build on it, ship it. The fix is boring: anything important that comes out of an AI, you verify against a primary source. Treat it like a brilliant intern who occasionally makes things up.",                                                                                       status: "settled",   reflect: "When did an AI most confidently mislead you? What clue could have warned you sooner?" },
    { t: "Bias and data quality",                     short: "Garbage in, opinions out. The internet trained these things — including all its worst parts.",                                                                                          deep: "Imagine training a student by handing them every comment thread, every blog post, every book, every forum, every patent on the internet. That's roughly how a foundation model gets its first education. Whatever biases live in that data — about gender, race, geography, history, professions — get baked into the model. \"The model is neutral\" is a comforting story, not a true one. At best it's an average-of-internet, with all the cringe averaged in. Knowing this changes how much you should trust outputs about people, hiring, lending, criminal justice, or anything where the bias gradient matters most.",                                                                                                                                  status: "settled",   reflect: "Where in your work are you treating AI output as neutral when it almost certainly carries a slant you'd see if you looked?" },
    { t: "Prompting",                                  short: "How you ask is most of what you'll get.",                                                                                                                                                deep: "Same model, same question, two different prompts — you'll often get answers that look like they came from different products. A good prompt usually does four things: gives the AI a role (\"you are a careful editor\"), shows an example of the kind of answer you want (a sample one done well), sets constraints (length, tone, what to avoid), and specifies the format (bullet list, JSON, table). \"Write a marketing email\" is bad. \"You are an honest senior copywriter at a small Indian SaaS firm. Write a 4-line follow-up email to a prospect who went silent for 10 days. No exclamation marks. Sign off with just my name. Example tone: [paste an email I like]\" is good. Prompting is closer to writing a brief than casting a spell.",                                  status: "framework", reflect: "Take a prompt you used yesterday. Add a role, one example, and one constraint. Compare what you get." },
    { t: "Overfitting and generalisation",             short: "Memorising the practice exam isn't the same as understanding the subject.",                                                                                                            deep: "A model that's been trained too long on too little data starts memorising — it can recite the training examples perfectly, but the moment you give it something new it falls apart. That's overfitting. The goal of training is the opposite: generalisation, where the model learns the underlying pattern so it handles new examples it's never seen. To check, researchers always hold back some data the model never saw during training (a \"test set\"), and grade on that. Same principle as in your own learning: nailing the practice paper means nothing if the real exam asks slightly different questions.",                                                                                                                                          status: "settled",   reflect: "Where in your own learning are you mostly memorising versus mostly generalising? They feel similar from inside." }
  ],

  counterView:
    "Two thoughtful people watching the same chatbot can disagree about whether it's \"reasoning\" or not — and the disagreement matters. The strongest sceptical case (Judea Pearl, Gary Marcus, several cognitive scientists) goes like this: today's LLMs are extremely powerful pattern-matchers, but they don't have a model of cause and effect, they don't have stable goals, and they fall apart when you push them slightly off the kind of data they were trained on. They look like they reason because they were trained on a billion examples of human reasoning. That's not the same as doing it. If they're right, treating an LLM like a wise advisor for high-stakes decisions is a category error — you wouldn't ask a parrot for legal advice no matter how convincingly it can repeat phrases. The honest position: brilliant interpolator, no soul behind the words. Use it that way and you'll be fine.",

  capabilities: [
    "Explain training vs inference in a sentence.",
    "Spot a hallucination before it bites — by asking for a source.",
    "Write prompts that include role, example, and constraint by default.",
    "Read an AI news headline and tell which claims are settled, which are research, and which are marketing.",
    "Build one personal workflow that saves real time."
  ],
  cheatsheet: [
    "Training = building the model. Inference = using it.",
    "Tokens ≈ ¾ of a word — drives context limits, pricing, and the \"can't count letters\" failure.",
    "Hallucinations are baked-in — verify anything that matters.",
    "Better prompt = role + example + constraint + format.",
    "More parameters isn't strictly smarter — data + training matter too.",
    "Bias in = bias out. Models reflect their data."
  ],

  roadmap: [
    { rank: "Novice",       focus: "Stop being scared of it",                       do: "Watch the 3Blue1Brown neural network series — it's the clearest visual explanation out there. Use ChatGPT or Claude every single day for a week. Notice what it nails, where it bluffs.",                                                                                                                                milestone: "You can explain training vs inference and what a token is to a friend in a minute.",                                              time: "~1 week" },
    { rank: "Apprentice",   focus: "Get genuinely good at prompting",                do: "Learn the role + example + constraint + format pattern. Build three little workflows for yourself that save real time — draft replies, summarise long PDFs, brainstorm titles. The skill grows by using.",                                                                                                                  milestone: "You can almost always get a good output on the first or second try, and you catch hallucinations before they bite.",            time: "~2–3 weeks" },
    { rank: "Practitioner", focus: "Build a real mental model of the maths",         do: "Now go a level deeper — read about neural networks, gradient descent, train/test splits, RLHF. You don't need to do the maths; you need to feel the shape of it. Andrej Karpathy's free YouTube course is the gold standard.",                                                                                              milestone: "You can read an AI headline and instantly tell whether it's signal or hype.",                                                    time: "~1–2 months" },
    { rank: "Specialist",   focus: "Get your hands dirty in code",                   do: "Open a Jupyter notebook. Train a tiny model on a small dataset (the classic Iris flowers or MNIST digits work). Call an LLM API from Python. Try a small RAG project — give a model your notes and let it answer questions about them.",                                                                                  milestone: "You've built something that uses machine learning, even if it's small. That changes how you think about everything else.",        time: "~2–3 months" },
    { rank: "Expert",       focus: "Pick one corner and go deep",                    do: "ML is huge. Pick a corner — NLP, computer vision, recommendation systems, applied LLM engineering. Build a real project that real users touch, not just a demo on your laptop.",                                                                                                                                            milestone: "You have one portfolio project that real strangers use without you needing to be in the room.",                                  time: "~6 months" },
    { rank: "Master",       focus: "Production systems, evaluation, safety",         do: "Real-world ML is mostly the boring stuff — pipelines, monitoring, evaluation, safety, scaling, drift. Learn to read research papers fluently. Learn to ship reliable systems, not just clever ones.",                                                                                                                      milestone: "You can design and ship an ML system that survives contact with real production traffic for a year.",                            time: "~1 year+" },
    { rank: "Grandmaster",  focus: "Push the frontier or shape how others build",     do: "Do original research, architect genuinely novel systems, or write/teach in a way that changes how other practitioners think. The field's young; there's still room.",                                                                                                                                                      milestone: "When others in the field describe how they think about a problem, they're partly thinking with your work.",                       time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "3Blue1Brown — Neural Networks series",                            what: "The clearest visual intuition for how networks learn. Start here.",                                          url: "https://www.3blue1brown.com/topics/neural-networks",                                                verify: false, lastVerified: "2026-06" },
      { name: "Elements of AI (free course)",                                   what: "Gentle, non-technical intro to core concepts.",                                                                url: "https://www.elementsofai.com/",                                                                       verify: false, lastVerified: "2026-06" },
      { name: "Andrej Karpathy — \"Neural Networks: Zero to Hero\"",             what: "Build models from scratch with a leading researcher. Patient and rigorous.",                                   url: "https://karpathy.ai/zero-to-hero.html",                                                               verify: false, lastVerified: "2026-06" },
      { name: "fast.ai — Practical Deep Learning",                              what: "Top-down — build real models fast, theory later.",                                                              url: "https://course.fast.ai/",                                                                              verify: false, lastVerified: "2026-06" },
      { name: "Distill.pub archive",                                            what: "Beautiful explainers on hard ML ideas (archive — read what's there).",                                          url: "https://distill.pub/",                                                                                 verify: false, lastVerified: "2026-06" },
      { name: "Google Machine Learning Crash Course",                            what: "Free, structured, exercises included.",                                                                          url: "https://developers.google.com/machine-learning/crash-course",                                          verify: false, lastVerified: "2026-06" },
      { name: "Hugging Face — free courses (LLM / NLP)",                         what: "Hands-on transformer / LLM courses; ecosystem standard.",                                                       url: "https://huggingface.co/learn",                                                                          verify: false, lastVerified: "2026-06" },
      { name: "\"Attention Is All You Need\" — Vaswani et al. (arXiv)",          what: "The 2017 transformer paper. Read the abstract + figures even if the math is heavy.",                            url: "https://arxiv.org/abs/1706.03762",                                                                     verify: false, lastVerified: "2026-06" },
      { name: "OpenAI Cookbook",                                                what: "Practical recipes for prompting / RAG / agents using LLM APIs.",                                                 url: "https://cookbook.openai.com/",                                                                          verify: false, lastVerified: "2026-06" },
      { name: "Anthropic — prompt engineering docs",                            what: "Best-practice guide from a frontier-model lab.",                                                                 url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview",                          verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Andrew Ng — Machine Learning Specialisation (Coursera)",          what: "The classic structured on-ramp to the fundamentals.",                                                            url: "https://www.coursera.org/specializations/machine-learning-introduction",                              price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "DeepLearning.AI short courses",                                  what: "Focused, practical modules on prompting, RAG, agents.",                                                           url: "https://www.deeplearning.ai/short-courses/",                                                           price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Hands-On Machine Learning — Aurélien Géron",                     what: "Go-to practical ML book with code; pairs theory with TensorFlow / scikit-learn.",                                  url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/",                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Book of Why — Judea Pearl",                                  what: "The case for causality as the missing piece beyond pattern-matching.",                                            url: "https://en.wikipedia.org/wiki/The_Book_of_Why",                                                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Deep Learning — Goodfellow, Bengio, Courville",                   what: "The standard textbook. Heavy, comprehensive.",                                                                   url: "https://www.deeplearningbook.org/",                                                                    price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Pattern Recognition and Machine Learning — Bishop",               what: "Classical ML, Bayesian-flavoured. Graduate level.",                                                              url: "",                                                                                                     price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "AI Engineering — Chip Huyen",                                     what: "Modern playbook for building products with foundation models.",                                                  url: "https://huyenchip.com/",                                                                              price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Designing Machine Learning Systems — Chip Huyen",                what: "MLOps + production ML, the standard reference.",                                                                 url: "https://huyenchip.com/",                                                                              price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Stanford CS229 (paid certificate / free lectures)",              what: "Andrew Ng's classic university course in long-form.",                                                            url: "https://cs229.stanford.edu/",                                                                          price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Stanford CS224N — NLP with Deep Learning",                       what: "Free lectures, paid cert. Modern NLP fundamentals.",                                                              url: "https://web.stanford.edu/class/cs224n/",                                                              price: "verify", verify: false, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Catch a hallucination",     d: "Ask an AI a niche factual question you can verify against a primary source. Document one confident error and what tipped you off.",          xp: 30 },
    { t: "Prompt A/B test",           d: "Solve one task with a lazy prompt, then a structured one (role + example + steps + format). Save both outputs side-by-side.",                 xp: 40 },
    { t: "Explain tokens",            d: "In 3 sentences, explain why an LLM struggles to count letters in a word. Use the word \"token\".",                                            xp: 20 },
    { t: "Build a workflow",          d: "Create one repeatable AI workflow that saves you ≥30 minutes this week (drafting email replies, summarising PDFs, anything).",                xp: 60 },
    { t: "Run a notebook",            d: "Open any beginner ML notebook (sklearn iris, MNIST, whatever). Change one thing — learning rate, model, features. Observe what happens.",     xp: 50 }
  ],
  capstone: {
    t: "Ship something that uses AI", d: "Build and publish one small thing that actually uses an LLM or model in production (a script, a tiny site, a personal tool). Write a 1-page post-mortem.", xp: 200
  },

  quiz: [
    { q: "When you chat with an LLM, you are using…",
      options: [
        { text: "Training",                                                                       misconception: "Training already happened; chatting doesn't update the model's weights." },
        { text: "Inference",                                                                      correct: true },
        { text: "Backpropagation",                                                                misconception: "Backprop is the algorithm used during training, not when you chat." },
        { text: "Labelling",                                                                      misconception: "Labelling is part of supervised data prep, not the act of using the model." }
      ],
      why: "Training already happened; chatting runs the finished model — that's inference.",
      testOut: true
    },
    { q: "Why do LLMs hallucinate?",
      options: [
        { text: "They run out of memory.",                                                        misconception: "Context window matters but isn't why fluent-but-false answers appear." },
        { text: "They optimise for plausible text, not verified truth.",                          correct: true },
        { text: "Bad internet connection.",                                                       misconception: "Hallucinations come from the model itself, not the network." },
        { text: "They're conscious and lying.",                                                   misconception: "There's no evidence of consciousness — it's pattern-matching, not deceit." }
      ],
      why: "Models predict likely next tokens, so fluent-but-false output is a built-in failure mode."
    },
    { q: "A token is roughly…",
      options: [
        { text: "One letter.",                                                                    misconception: "Some short tokens are letters, but most tokens are sub-word chunks — that's why letter-counting fails." },
        { text: "About ¾ of a word.",                                                              correct: true },
        { text: "One sentence.",                                                                  misconception: "Sentences split into many tokens; pricing and context limits are per-token, not per-sentence." },
        { text: "One pixel.",                                                                     misconception: "Pixels appear in vision models; text tokens are unrelated." }
      ],
      why: "Text is split into sub-word tokens (~¾ of a word). That drives context limits, pricing, and the \"can't count letters\" failure."
    },
    { q: "Which is the strongest critique of treating LLMs as reasoners?",
      options: [
        { text: "They use too much electricity.",                                                 misconception: "True separately, but doesn't address whether they reason." },
        { text: "They lack a model of cause and effect (Judea Pearl-style critique).",            correct: true },
        { text: "They're trained on the wrong language.",                                          misconception: "Multilingual training is solvable; the causality critique is structural." },
        { text: "They're banned in many countries.",                                                misconception: "Regulation is real but isn't about whether reasoning is happening internally." }
      ],
      why: "Pattern-matching without a causal model means LLMs interpolate well but break off-distribution — the most-cited structural critique."
    },
    { q: "You need a model for a small, well-defined classification problem with 10k labelled examples. Best first move?",
      options: [
        { text: "Build a foundation model from scratch.",                                          misconception: "Wildly overkill — billions of dollars and millions of GPU-hours of overkill." },
        { text: "Train a transformer with a million parameters.",                                  misconception: "Still overkill; small classical models almost always outperform on small data." },
        { text: "Try a simple baseline (e.g. scikit-learn logistic regression / gradient boosting) first.", correct: true },
        { text: "Hire a PhD.",                                                                     misconception: "Wrong order — simple baseline first to know whether the problem even needs more." }
      ],
      why: "Always start with the simplest baseline. It sets the bar everything else has to beat — and often, it's enough."
    }
  ],

  flashcards: [
    { front: "Training vs inference?",                              back: "Training = slow, costly learning that sets the model's weights. Inference = fast use of the trained model. Chatting = inference." },
    { front: "What is a hallucination?",                            back: "A confident, fluent output that is factually wrong — a built-in risk because models optimise for plausible, not for true." },
    { front: "Why are models biased?",                              back: "They inherit the biases and gaps of their training data." },
    { front: "What is RLHF (in one line)?",                          back: "Reinforcement Learning from Human Feedback — tuning a model using human ratings to make it more helpful and safer." },
    { front: "What is a token?",                                    back: "A sub-word chunk (~¾ of a word). Models predict the next token. Tokens drive context limits and pricing." },
    { front: "Overfitting in one line?",                            back: "Memorising training data so well the model fails on new data. Held-out test sets are how we catch it." },
    { front: "Why is causality (Pearl) cited as missing from LLMs?", back: "LLMs learn correlations from data, not interventions. Without a causal model, they extrapolate poorly off-distribution." },
    { front: "Best first move on a small classification task?",     back: "A simple baseline (logistic regression / gradient boosting). It sets the bar more complex models must beat — and often, it's enough." }
  ],
  glossary: [
    { term: "Parameter",   def: "A tunable weight inside a model adjusted during training." },
    { term: "RAG",         def: "Retrieval-Augmented Generation — giving a model external documents to ground its answers." },
    { term: "Overfitting", def: "Memorising training data so well the model fails on new inputs." },
    { term: "Inference",   def: "Using a trained model to produce outputs." },
    { term: "Fine-tuning", def: "Continuing to train a model on a smaller, more specific dataset to specialise it." },
    { term: "Embedding",   def: "A vector of numbers representing the meaning/features of a chunk of input." },
    { term: "RLHF",        def: "Reinforcement Learning from Human Feedback — alignment via human ratings." },
    { term: "Hallucination", def: "A fluent, confident output that's factually wrong." }
  ],

  safetyNote:
    "AI tools change fast and confidently get things wrong. Verify anything high-stakes against primary sources, and never paste secrets/PII into untrusted endpoints."
};

export default d;
