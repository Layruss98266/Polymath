import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "ai_ml",
  icon: "🤖",
  hue: "#6db5ff",
  category: "Tech & Future",
  name: "AI & Machine Learning",
  tagline: "Understand the machines rewriting everything",

  basics:
    "Machine learning is software that improves from examples instead of being told every rule. Modern AI — large language models, image models — is pattern-matching at massive scale: feed it oceans of data and it learns to predict the next word, pixel, or action. It isn't magic and it isn't conscious. Knowing how it actually works turns a black box into a power tool.",
  whyItMatters: [
    "Use AI tools 10× better once you know what they can and can't do.",
    "Spot hype, bias, and confident-but-wrong answers (hallucinations).",
    "AI literacy is becoming as basic as internet literacy.",
    "Most knowledge work is being re-priced — being on the right side of that matters."
  ],
  realWorldExample:
    "When you type a prompt, an LLM doesn't \"look up\" an answer — it predicts the most likely next chunk of text, one piece at a time, based on patterns in its training. That's why it writes a fluent paragraph and also states a wrong fact with total confidence: it's optimised for plausible, not for true.",

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
    { t: "Training vs inference",                     short: "Learning vs using.",                                              deep: "Training is the slow, expensive phase where the model adjusts millions/billions of parameters to fit data. Inference is the fast phase where you actually use the trained model. Your prompts hit inference; they don't teach the model.", status: "settled",   reflect: "Next time an LLM gets your name or last week's news wrong, ask: training cutoff, or this conversation never reached training data?" },
    { t: "Tokens",                                    short: "AI reads in chunks, not letters.",                                deep: "Text is split into tokens (~¾ of a word). Models predict the next token. This explains context limits, pricing per token, and why models miscount letters in a word — they don't see letters, they see tokens.",                                 status: "settled",   reflect: "Ask an LLM to count letters in a long unusual word. Why does it slip?" },
    { t: "Neural networks & parameters",              short: "Tunable knobs that store patterns.",                              deep: "Layers of simple math units; \"learning\" = nudging billions of weights so outputs match examples. Scale of parameters loosely tracks capability — but data quality, architecture, and training matter at least as much.",                          status: "settled",   reflect: "Why is \"more parameters = smarter\" only partly true?" },
    { t: "Supervised / unsupervised / RL",            short: "Three ways to learn.",                                            deep: "From labelled answers, from raw structure, or from reward signals. Modern chatbots blend pretraining (next-token) with reinforcement-learning from human feedback (RLHF) to align outputs with what humans rate as good.",                          status: "settled",   reflect: "Which learning style fits your own current learning problem?" },
    { t: "Hallucination",                             short: "Confident wrongness.",                                            deep: "Because models optimise for plausible text, they fabricate facts that look right. The fluency makes it worse — a confident wrong answer feels right. Always verify high-stakes outputs against a primary source.",                                status: "settled",   reflect: "When did an LLM most confidently mislead you? What signal could have warned you in advance?" },
    { t: "Bias & data quality",                       short: "Garbage in, bias out.",                                           deep: "Models inherit the biases and gaps of their training data. \"The model is objective\" is a myth — at best, it's average-of-internet, including the parts you'd cringe at.",                                                                       status: "settled",   reflect: "Where in your work are you assuming model output is neutral when it almost certainly carries a slant?" },
    { t: "Prompting",                                  short: "Clear input, better output.",                                    deep: "Specificity, examples (few-shot), role, constraints, and step-by-step instructions dramatically change results. Prompting is a real, learnable skill — and a closer cousin to technical writing than to magic incantations.",                  status: "framework", reflect: "Take a prompt you used yesterday. Add an example and a constraint. Compare." },
    { t: "Overfitting & generalisation",              short: "Memorising vs understanding.",                                    deep: "A model that memorises training data fails on new data. We hold out test data to check whether learning generalised. Same idea in life: knowing the answers on the practice exam isn't knowing the subject.",                                  status: "settled",   reflect: "Where in your own learning are you memorising vs generalising?" }
  ],

  counterView:
    "A serious counter-view from causality researchers (Judea Pearl) and several cognitive scientists: today's LLMs are statistical pattern-matchers, not understanders. They have no model of cause and effect, no persistent goals, and limited robustness off-distribution. Treating them as \"reasoning\" gets you in trouble — high-stakes decisions need verifiable sources, not vibes. Critics like Gary Marcus argue the field has overfit to scale and underfit to symbolic / causal foundations. You'll do better if you assume the model is a brilliant interpolator with no soul behind the words.",

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
    { rank: "Novice",       focus: "Demystify it",                do: "Watch 3Blue1Brown's neural-network series; use an LLM daily and notice its wins/fails.",                                       milestone: "You can explain training vs inference and what a token is.",                            time: "~1 week" },
    { rank: "Apprentice",   focus: "Prompt well",                 do: "Learn role / example / constraint prompting; build 3 useful personal workflows.",                                            milestone: "You reliably get good outputs and catch hallucinations.",                                time: "~2–3 weeks" },
    { rank: "Practitioner", focus: "Mental model of the math",     do: "Understand neural nets, gradient descent, train/test splits, RLHF at an intuitive level.",                                     milestone: "You can read an AI news story and call BS.",                                              time: "~1–2 months" },
    { rank: "Specialist",   focus: "Hands on code",                do: "Run notebooks; train a tiny model; call APIs; try fine-tuning or RAG on a real dataset.",                                       milestone: "You built something that uses ML.",                                                       time: "~2–3 months" },
    { rank: "Expert",       focus: "Pick a track",                 do: "Go deep in NLP, vision, or applied ML engineering; ship a real project users touch.",                                          milestone: "Portfolio project real users touch.",                                                     time: "~6 months" },
    { rank: "Master",       focus: "Systems & evaluation",         do: "MLOps, evaluation, safety, scaling, reading papers fluently.",                                                                milestone: "You can design and ship reliable ML systems in production.",                              time: "~1 year+" },
    { rank: "Grandmaster",  focus: "Frontier",                     do: "Original research, or architecting novel systems; contribute to the field publicly.",                                          milestone: "Others learn from your work.",                                                            time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "3Blue1Brown — Neural Networks series (YouTube)",                what: "The clearest visual intuition for how networks learn. Start here.",                                            url: "", verify: true, lastVerified: "2026-06" },
      { name: "Elements of AI (free course)",                                   what: "Gentle, non-technical intro to core concepts.",                                                                  url: "", verify: true, lastVerified: "2026-06" },
      { name: "Andrej Karpathy — \"Neural Networks: Zero to Hero\" (YouTube)",   what: "Build models from scratch with a leading researcher. Patient and rigorous.",                                     url: "", verify: true, lastVerified: "2026-06" },
      { name: "fast.ai — Practical Deep Learning",                              what: "Top-down — build real models fast, theory later.",                                                                url: "", verify: true, lastVerified: "2026-06" },
      { name: "Distill.pub archive",                                            what: "Beautiful explainers on hard ML ideas (archive — read what's there).",                                            url: "", verify: true, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "Andrew Ng — Machine Learning Specialisation (Coursera)",          what: "The classic structured on-ramp to the fundamentals.",                                                            url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "DeepLearning.AI short courses",                                  what: "Focused, practical modules on prompting, RAG, agents.",                                                          url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Hands-On Machine Learning — Aurélien Géron",                     what: "Go-to practical ML book with code; pairs theory with TensorFlow / scikit-learn.",                                   url: "", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Book of Why — Judea Pearl",                                  what: "The case for causality as the missing piece beyond pattern-matching.",                                              url: "", price: "verify", verify: true, lastVerified: "2026-06" }
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
