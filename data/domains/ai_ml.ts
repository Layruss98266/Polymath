import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "ai_ml",
 icon: "🤖",
 hue: "#6db5ff",
 category: "Tech & Future",
 name: "AI & Machine Learning",
 tagline: "Understand the machines rewriting everything",

 basics:
  "Old-school software was a chef following a recipe, every step written out by a human. Machine learning is more like a child watching a million people cook, then trying their own version.",
 deepBasics:
  "You don't tell it the rules; you show it examples and it figures them out. Modern AI, the chatbots and image generators everyone's talking about, is this idea cranked all the way up. Trained on most of the internet, it gets shockingly good at imitating us. But it isn't magic, it isn't thinking, and it's wrong more often than people realise. Once you see how the trick works, you can use it like a power tool instead of treating it like a wizard.",
 whyItMatters: [
  "You'll get 10× more out of the AI tools you already use, just by knowing how they actually work.",
  "You'll catch the confident lies. AI bluffs beautifully, and most people don't notice.",
  "AI literacy is becoming as basic as knowing how the internet works. Whoever doesn't get fluent ends up paying someone who did.",
  "Knowledge work, writing, coding, designing, analysing, is being re-priced fast. You want to be on the right side of that."
 ],
 realWorldExample:
  "When you type a question into an AI chatbot, it doesn't \"look the answer up\" anywhere. It looks at the words you wrote, then guesses the most likely next word. Then the next. Then the next. Each guess is based on patterns it noticed in everything it was trained on. That's it. That's the whole magic trick. This is why an AI can write a beautiful confident paragraph and casually state a fact that's flat wrong: it isn't trying to be true, it's trying to be plausible. Once you really feel that distinction in your gut, everything about working with AI changes, including when to trust it and when to verify.",

 mentors: [
  { name: "Geoffrey Hinton",  for: "deep learning (one of the fathers)", work: "Backpropagation; 2018 Turing Award" },
  { name: "Andrej Karpathy",  for: "making ML actually learnable",    work: "\"Neural Networks: Zero to Hero\" (YouTube)" },
  { name: "Andrew Ng",     for: "the structured on-ramp millions use", work: "Coursera Machine Learning + DeepLearning.AI" },
  { name: "Vaswani et al.",  for: "the transformer, what powers LLMs", work: "\"Attention Is All You Need\" (2017)" },
  { name: "Judea Pearl",    for: "causality, what correlation alone can't tell you", work: "The Book of Why (2018)" }
 ],

 diagrams: [
  { kind: "flow", title: "Training vs inference", caption: "Data → train → model → prompt in → prediction out.", data: { steps: ["Data", "Train (set weights)", "Model", "Prompt", "Predict next token"] } },
  { kind: "curve", title: "Under- vs over-fitting", caption: "Test error has a sweet spot; train error keeps falling.", data: {
   x: "Model complexity", y: "Error",
   series: [
    { label: "Test error", points: [[0, 9], [3, 3], [6, 2], [9, 7]] },
    { label: "Train error", points: [[0, 9], [3, 5], [6, 3], [9, 1]] }
   ]
  } }
 ],

 synthesis: [
  { concept: "Hallucination",   linksTo: "marketing",     note: "Confident-fluent-but-wrong is a cognitive failure mode marketers exploit on humans too." },
  { concept: "Prompting",     linksTo: "marketing",     note: "A prompt is a brief. Clear input, clear output. The same skill as good copy." }
 ],

 subdomains: [
  { id: "foundations", name: "Foundations", intro: "What an AI model actually is: training, tokens, inference, and why predictions are statistical guesses. The mental picture that makes everything else click.", capabilities: ["Explain in one minute why a model can be confidently wrong.", "Tell apart training time, fine-tuning, and inference in a real product.", "Spot when a problem isn't a good fit for an LLM at all."] },
  { id: "usage", name: "Using AI Well", intro: "How to get useful, reliable output from today's models. Most quality issues are prompt issues, not model issues.", capabilities: ["Write a prompt that includes role, context, examples, and the output shape.", "Verify any AI output against a source before acting on it.", "Chain a small workflow of prompts instead of asking for one big answer."] },
  { id: "math", name: "The Maths Intuition", intro: "The shapes behind models: vectors, gradients, probability, and loss. You don't need the proofs, just the right mental pictures.", capabilities: ["Picture an embedding as a point in space with neighbours and distance.", "Read a loss curve and tell training is working from overfitting.", "Sketch why gradient descent walks downhill on a bumpy surface."] },
  { id: "ethics", name: "Safety and Ethics", intro: "Where AI quietly causes harm: bias, hallucination, privacy leaks, and misuse. The questions to ask before you ship a model into someone's life.", capabilities: ["Spot a dataset bias before it turns into a product bias.", "Add a human-in-the-loop check on any decision that affects a person.", "Walk away from a use case where the failure cost outweighs the benefit."] }
 ],

 concepts: [
  {
   t: "Training vs inference",
   subdomain: "foundations",
   definition: "Training is the slow, expensive learning phase where the model's internal numbers are set. Inference is the fast usage phase that runs every time you ask it something.",
   short: "Training is the years of schooling. Inference is the answer in the exam.",
   deep: "There are two phases in the life of an AI model. Training is the long, expensive process of feeding it billions of examples until billions of internal numbers (parameters) settle into a pattern. That phase is done in giant data centres and might take weeks. Once it's done, the model is frozen. Inference is what happens every time you type a question. The frozen model looks at your input and produces an output. Fast and cheap, comparatively. Your prompts don't teach the model anything new; you're just asking the already-trained student to take another exam.",
   generic: "Think of a student who graduated last year. Their schooling is over (training). Every test they sit now uses the knowledge they already had at graduation (inference). When you chat with an AI, you are giving the graduate a test, not changing their education.",
   expert: "The training-inference split is foundational to how all modern ML systems are deployed. Training updates weights via gradient descent on a loss function. Inference is a single forward pass. The cost asymmetry is huge: training GPT-4-class models costs hundreds of millions of dollars; per-query inference is cents. Fine-tuning and continual learning blur the line but do not erase it. The model's knowledge cutoff is set by the training data, not the inference time. By mid-2026 the production frontier sits with shipped models like GPT-4o, GPT-4.1, Claude 3.7 Sonnet, and Gemini 2.0, with the next generation of multimodal and reasoning-time-compute models built on mixture-of-experts architectures on the horizon. Per-token inference on commodity tiers like Gemini Flash and Llama 3.1 has fallen below ten cents per million tokens, reshaping what is economical to build on top of LLMs.",
   status: "settled",
   reflect: "The next time an AI gets a recent news event wrong, ask yourself: was it trained before this happened?",
   conceptQuiz: [
    {
     q: "When you chat with an AI, you are using:",
     options: [
      { text: "Training.", misconception: "Training has already happened. Chatting does not change the model's parameters." },
      { text: "Inference.", correct: true },
      { text: "Backpropagation.", misconception: "Backprop is the algorithm used during training, not when you query the model." },
      { text: "Labelling.", misconception: "Labelling is data preparation before training. Has nothing to do with chat." }
     ],
     why: "Chatting runs a forward pass on the already-trained model. That's inference."
    },
    {
     q: "An AI confidently tells you about an event from last week. The first sceptical question to ask is:",
     options: [
      { text: "Was this event in its training data?", correct: true },
      { text: "How fast is the AI's CPU?", misconception: "Compute speed has nothing to do with whether recent facts are accurate." },
      { text: "What language is the AI written in?", misconception: "Implementation language is irrelevant to knowledge cutoff." },
      { text: "Does the AI have Wi-Fi?", misconception: "Most LLMs without explicit tool use have no live connection. Recency is a training-data question." }
     ],
     why: "If the event happened after the model's training cutoff, it cannot really know about it. The model might confabulate plausibly."
    },
    {
     q: "True or false: more conversation makes the model smarter over time.",
     options: [
      { text: "True. The model learns from each chat.", misconception: "By default, frozen models do not update from chats. Confused with continual learning, which is a different setup." },
      { text: "False. The model is frozen at inference time.", correct: true },
      { text: "Only if the chat is in English.", misconception: "Language has nothing to do with this." },
      { text: "Only with subscription pricing.", misconception: "Pricing has nothing to do with whether weights update." }
     ],
     why: "Standard deployed LLMs do not update weights from user conversations. Updates happen during training cycles."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Ask about its cutoff", d: "Ask any AI chatbot when its training data ends. Note the answer and how confident it sounds.", xp: 10 },
    { level: "easy",     t: "Catch a stale fact",   d: "Ask the chatbot about an event you know happened after the cutoff. Document one confidently wrong answer.", xp: 25 },
    { level: "advanced", t: "Build a hybrid",       d: "Use any tool (RAG, search plugin, Perplexity, etc.) that combines training with live retrieval. Compare the answer quality on a recent fact.", xp: 70 }
   ],
   diagram: {
    kind: "flow",
    title: "Training vs inference",
    caption: "Training is the slow, expensive learning phase. Once weights are frozen, every chat is a cheap forward pass: inference.",
    data: {
     steps: ["Raw data", "Train (weeks, $$$)", "Frozen model", "Inference (your prompt)"]
    }
   }
  },
  {
   t: "Tokens",
   subdomain: "foundations",
   definition: "Tokens are the sub-word chunks an AI reads and writes. About 4 English characters or 3/4 of a word per token.",
   prereqs: ["Training vs inference"],
   short: "AI doesn't read letters. It reads chunks of words called tokens.",
   deep: "Imagine the AI has a vocabulary book of about 50,000 little chunks. Common words like 'hello' are one chunk. Unusual words like 'reinforcement' get split into pieces: 'rein', 'force', 'ment'. Roughly, four English letters equals one token. This is why an AI can write Shakespeare but can't reliably count the letter 'r' in 'strawberry'. It never sees the letters; it sees 'straw' and 'berry' as two tokens and the question feels weird. Tokens also explain why long conversations have limits (the model can only hold N tokens at a time) and why API pricing is per token.",
   generic: "Imagine a friend who reads only by glancing at full words at a time, never letter by letter. Ask them to count the letters in a word and they fumble, because they were never reading letters in the first place. AIs work the same way, but instead of full words, they read in sub-word chunks called tokens.",
   expert: "Tokenisation is done by BPE (Byte Pair Encoding) or its variants. The tokenizer is fixed at training time and varies per model family (GPT, Llama, etc.). Token count drives context window cost, API pricing, and architecture limits. For most English text, expect roughly 1 token per 4 chars or 100 tokens per 75 words. Languages with non-Latin scripts (Hindi, Mandarin) often have worse compression and cost more per equivalent message.",
   status: "settled",
   reflect: "Ask any AI to count the letter R in 'strawberry'. When it slips, you'll understand tokens better than reading any explainer.",
   conceptQuiz: [
    {
     q: "A token is roughly:",
     options: [
      { text: "One letter.", misconception: "If tokens were letters, AIs would be perfect at counting letters. They are not." },
      { text: "About 3/4 of a word.", correct: true },
      { text: "One sentence.", misconception: "Sentences split into many tokens. Pricing and limits are per token, not per sentence." },
      { text: "One pixel.", misconception: "Pixels appear in vision models. Tokens are text." }
     ],
     why: "Tokens are sub-word chunks. About 4 characters or 3/4 of a word in English."
    },
    {
     q: "Why does an AI fail to count letters in a word reliably?",
     options: [
      { text: "Because it has bad RAM.", misconception: "RAM has nothing to do with this. It is about what the model sees." },
      { text: "Because it sees the word as tokens, not letters.", correct: true },
      { text: "Because it is intentionally lying.", misconception: "There is no intent. It is a structural limitation of the input representation." },
      { text: "Because English is hard.", misconception: "This happens across languages. It is about tokenisation, not English." }
     ],
     why: "The tokenizer splits 'strawberry' into 'straw' and 'berry'. The model never sees individual letters to count."
    },
    {
     q: "Why does it cost more to send a long Hindi message to an LLM than the same English message?",
     options: [
      { text: "Because Hindi is more expensive.", misconception: "Companies do not charge by language. They charge by tokens." },
      { text: "Because non-Latin scripts often tokenize into more tokens per equivalent meaning.", correct: true },
      { text: "Because Hindi servers are slower.", misconception: "Server location does not affect token count." },
      { text: "There is no difference.", misconception: "There is, and it can be 2x or more for some scripts." }
     ],
     why: "Tokenizers were largely trained on English. Other scripts often compress less efficiently into tokens, increasing cost."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Strawberry test",     d: "Ask any AI to count the letter R in 'strawberry'. Watch what happens.", xp: 10 },
    { level: "easy",     t: "Count your tokens",   d: "Take a paragraph you wrote. Paste it into a token counter (OpenAI's tokenizer page or any free tool) and note how many tokens it produces vs the word count.", xp: 25 },
    { level: "advanced", t: "Optimise your prompt", d: "Take a verbose prompt you use often. Rewrite it to use fewer tokens without losing the meaning. Measure the savings.", xp: 70 }
   ],
   diagram: {
    kind: "bars",
    title: "Tokens per 100 words by script",
    caption: "Tokenizers were largely trained on English. Other scripts often compress less efficiently, so the same meaning costs more tokens.",
    data: {
     items: [
      { label: "English", value: 130 },
      { label: "Spanish", value: 170 },
      { label: "Hindi", value: 320 },
      { label: "Mandarin", value: 280 }
     ],
     unit: " tok"
    }
   }
  },
  { t: "Neural networks and parameters",      subdomain: "foundations", short: "Billions of tiny tunable knobs that, together, store patterns.",                                                             deep: "A neural network is layers of very simple maths units stacked together. Each unit has a number called a weight. \"Learning\" is just nudging these weights, billions of times, so that the model's outputs slowly start matching the right answers in the training data. GPT-4-class models have over a trillion of these knobs. More knobs roughly equals more capability, but the quality of the training data and the architecture matter just as much. A small, well-trained model can beat a huge, badly-trained one. Scale isn't the only ingredient.",                                                                                                   status: "settled",  reflect: "Why does \"the bigger the model, the smarter it is\" only get you halfway to the truth?" },
  { t: "Supervised, unsupervised, and RL",     subdomain: "foundations", short: "Three different teachers.",                                                                               deep: "Supervised learning is school with an answer key, you show the model thousands of cats and dogs labelled \"cat\" or \"dog,\" and it learns to label new ones. Unsupervised learning is school without an answer key, show it a million customer records and let it cluster them into groups it discovers by itself. Reinforcement learning is school by trial and error, the model takes an action, gets a reward or a penalty, adjusts. Modern chatbots blend these: first pre-trained unsupervised on the internet to predict next words, then refined with RL from human feedback (RLHF) to be more helpful and less awful.",                                                                    status: "settled",  reflect: "Which of these three styles does your own learning look most like, right now?" },
  { t: "Hallucination",               subdomain: "usage", short: "Confident, fluent, totally wrong. The signature failure of LLMs.",                                                            deep: "Ask a chatbot for the references in a textbook it's never read. It'll often give you a list of perfectly-formatted citations, authors, journal names, page numbers, that don't exist. Not one of them. The model isn't lying on purpose. It's doing exactly what it was built for: producing text that looks like what should come next. Plausible has nothing to do with true. The fluency is the problem, a confident wrong answer feels right to humans, so we forward it, build on it, ship it. The fix is boring: anything important that comes out of an AI, you verify against a primary source. Treat it like a brilliant intern who occasionally makes things up.",                                            status: "settled",  reflect: "When did an AI most confidently mislead you? What clue could have warned you sooner?" },
  { t: "Bias and data quality",           subdomain: "ethics", short: "Garbage in, opinions out. The internet trained these things, including all its worst parts.",                                             deep: "Imagine training a student by handing them every comment thread, every blog post, every book, every forum, every patent on the internet. That's roughly how a foundation model gets its first education. Whatever biases live in that data, about gender, race, geography, history, professions, get baked into the model. \"The model is neutral\" is a comforting story, not a true one. At best it's an average-of-internet, with all the cringe averaged in. Knowing this changes how much you should trust outputs about people, hiring, lending, criminal justice, or anything where the bias gradient matters most.",                                                                 status: "settled",  reflect: "Where in your work are you treating AI output as neutral when it almost certainly carries a slant you'd see if you looked?" },
  { t: "Prompting",                 subdomain: "usage", short: "How you ask is most of what you'll get.",                                                                        deep: "Same model, same question, two different prompts, you'll often get answers that look like they came from different products. A good prompt usually does four things: gives the AI a role (\"you are a careful editor\"), shows an example of the kind of answer you want (a sample one done well), sets constraints (length, tone, what to avoid), and specifies the format (bullet list, JSON, table). \"Write a marketing email\" is bad. \"You are an honest senior copywriter at a small Indian SaaS firm. Write a 4-line follow-up email to a prospect who went silent for 10 days. No exclamation marks. Sign off with just my name. Example tone: [paste an email I like]\" is good. Prompting is closer to writing a brief than casting a spell.",                 status: "framework", reflect: "Take a prompt you used yesterday. Add a role, one example, and one constraint. Compare what you get." },
  { t: "Overfitting and generalisation",       subdomain: "math", short: "Memorising the practice exam isn't the same as understanding the subject.",                                                      deep: "A model that's been trained too long on too little data starts memorising, it can recite the training examples perfectly, but the moment you give it something new it falls apart. That's overfitting. The goal of training is the opposite: generalisation, where the model learns the underlying pattern so it handles new examples it's never seen. To check, researchers always hold back some data the model never saw during training (a \"test set\"), and grade on that. Same principle as in your own learning: nailing the practice paper means nothing if the real exam asks slightly different questions.",                                                                     status: "settled",  reflect: "Where in your own learning are you mostly memorising versus mostly generalising? They feel similar from inside." },
  {
   t: "Embeddings",
   subdomain: "foundations",
   definition: "An embedding is a list of numbers (a vector) that represents the meaning of a chunk of text, image, or audio, so that similar things sit close together in that number space.",
   short: "Meaning, turned into coordinates a computer can compare.",
   deep: "Imagine plotting every word in the English language onto a giant map. 'King' and 'queen' end up near each other. 'Bicycle' and 'scooter' sit in another neighbourhood. 'Sad' and 'depressed' overlap. An embedding is exactly that, but in 768 or 1,536 dimensions instead of two. The model learns these coordinates during training so that geometric closeness equals semantic closeness. Once you have embeddings, search becomes easy. To find documents related to 'how to fix a leaky tap', you embed the question, then look for stored chunks whose vectors are nearest. Almost every modern search bar, recommendation system, and RAG pipeline runs on this trick.",
   generic: "Think of a library where every book is shelved not by alphabet but by what it is about. Books on cooking sit together, books on grief sit together, books on chess sit together. To find what you want, you walk to the right neighbourhood. Embeddings are that library, but for any kind of meaning, and the walking is instant.",
   expert: "Embeddings are dense, learned vector representations produced by models such as Word2Vec, GloVe, BERT, or modern sentence-transformer and OpenAI/Anthropic embedding endpoints. Similarity is usually measured by cosine distance. Quality depends on the training objective and corpus; out-of-domain text degrades sharply. Common pitfalls include anisotropy (vectors clustering in a narrow cone), stale embeddings after model upgrades, and over-reliance on raw similarity without re-ranking. Vector databases (Pinecone, Weaviate, pgvector) index these for fast nearest-neighbour search.",
   status: "settled",
   reflect: "If your own notes were embedded, which two topics would surprise you by ending up as neighbours?",
   conceptQuiz: [
    {
     q: "Two sentences have very different words but nearly identical embeddings. What does that mean?",
     options: [
      { text: "They mean roughly the same thing.", correct: true },
      { text: "They were written by the same person.", misconception: "Embeddings capture meaning, not authorship. Style detection is a different task." },
      { text: "They have the same length.", misconception: "Length is unrelated to embedding similarity. Long and short sentences can be near or far in vector space." },
      { text: "They are spelt the same.", misconception: "Spelling is irrelevant. The point of embeddings is that wording can vary while meaning stays close." }
     ],
     why: "Close vectors equal close meaning. That is the entire usefulness of embeddings for search."
    },
    {
     q: "Which task is the most natural fit for embeddings?",
     options: [
      { text: "Counting the letters in a word.", misconception: "That is a tokenisation issue, not a semantic similarity task." },
      { text: "Finding the most relevant document for a question.", correct: true },
      { text: "Generating a long story with a twist ending.", misconception: "Generation uses an LLM, not embeddings. Embeddings retrieve, they do not write." },
      { text: "Rendering an image from text.", misconception: "Image generation uses diffusion models. Text embeddings can guide them but do not draw." }
     ],
     why: "Semantic search is the canonical embedding use case. Embed query and corpus, find nearest neighbours."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Visualise meaning",   d: "Open any embedding playground (such as TensorFlow Projector). Type five related words and five unrelated words. Watch where they land.", xp: 10 },
    { level: "easy",     t: "Build a tiny search", d: "Embed ten paragraphs from your notes using a free embedding API. Embed a question. Return the nearest paragraph.", xp: 20 },
    { level: "advanced", t: "Compare two models",  d: "Run the same query through two different embedding models. Compare the top three results. Note where they agree and disagree, and why.", xp: 40 }
   ]
  },
  {
   t: "Retrieval-Augmented Generation (RAG)",
   subdomain: "usage",
   fullForm: "Retrieval-Augmented Generation",
   definition: "RAG is a pattern where, before the model answers, relevant chunks of your own documents are fetched and pasted into the prompt, so the answer is grounded in your sources instead of the model's frozen memory.",
   prereqs: ["Embeddings"],
   short: "Open-book exam for the model. Fetch the right page, then let it answer.",
   deep: "An LLM on its own answers from whatever it absorbed during training, which means it cannot know your company handbook, last week's news, or your private notes. RAG fixes this by adding a retrieval step. First, you chop your documents into chunks and embed them. When a question comes in, you embed the question, find the closest chunks, and stuff them into the prompt as context. The model now answers using fresh, specific source material. Almost every AI customer support bot, document chat, and internal knowledge assistant is some flavour of RAG. The trick is boring engineering: chunking well, retrieving the right chunks, and keeping context windows clean.",
   generic: "Imagine asking a smart friend a question about a textbook they have never read. Useless. Now imagine you also hand them the three most relevant pages of the book before they answer. Suddenly they sound like an expert. RAG is exactly that handover, automated.",
   expert: "RAG was popularised by Lewis et al. (2020). Modern pipelines split documents into 200 to 1000 token chunks with overlap, embed them, store in a vector DB, and retrieve top-k by cosine similarity, often with a re-ranker (Cohere Rerank, cross-encoders). Failure modes include lost-in-the-middle attention degradation, retrieval of irrelevant chunks, and stale indexes. Hybrid retrieval (BM25 plus vectors) and query rewriting consistently improve quality. RAG is not a silver bullet; for narrow domains, fine-tuning or long-context models may outperform.",
   status: "framework",
   reflect: "What set of documents would you want a private RAG bot built on first, and what would change about your work if it existed?",
   conceptQuiz: [
    {
     q: "Why does RAG reduce hallucinations on factual questions?",
     options: [
      { text: "It makes the model larger.", misconception: "RAG does not change the model. It only changes what context the model sees at inference time." },
      { text: "It grounds the answer in retrieved source chunks the model can quote.", correct: true },
      { text: "It retrains the model on new data.", misconception: "No training happens. RAG is an inference-time pattern, not fine-tuning." },
      { text: "It makes the model run on a faster GPU.", misconception: "Hardware speed has nothing to do with factual accuracy." }
     ],
     why: "RAG gives the model fresh, specific text to lean on, so it is less likely to confabulate from pattern memory."
    },
    {
     q: "Your RAG bot returns confident but irrelevant answers. The first thing to inspect is:",
     options: [
      { text: "The retrieval step: which chunks are being pulled in.", correct: true },
      { text: "The colour of the chat UI.", misconception: "UI has no effect on answer quality." },
      { text: "The model temperature, only.", misconception: "Temperature affects creativity, not whether the right source was retrieved." },
      { text: "The user's internet speed.", misconception: "Network speed does not change which chunks the retriever selects." }
     ],
     why: "Most RAG failures are retrieval failures. If the wrong chunk lands in the prompt, the model has nothing useful to ground on."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Trace a RAG answer", d: "Use any RAG tool (NotebookLM, a custom GPT with files, Claude Projects). Ask a question. Identify which source it cited.", xp: 10 },
    { level: "easy",     t: "Build the simplest RAG", d: "Take 20 pages of your own notes. Use an off the shelf tool to embed and query them. Compare the answer to the plain model with no documents.", xp: 20 },
    { level: "advanced", t: "Break it on purpose", d: "Deliberately ask your RAG system a question the documents cannot answer. Observe whether it hallucinates or refuses. Adjust the prompt so it refuses cleanly.", xp: 40 }
   ]
  },
  {
   t: "Mixture of Experts (MoE)",
   subdomain: "foundations",
   fullForm: "Mixture of Experts",
   definition: "An architecture where a large model contains many specialised sub-networks (experts) and a router decides which small subset of experts processes each token, so most parameters stay inactive on any one forward pass.",
   short: "Many specialist sub-models. Only a few wake up per token. You get a huge brain at a small compute bill.",
   deep: "Dense transformers run every parameter for every token, which is why scaling them is so expensive. MoE breaks that by splitting feed-forward layers into many experts and adding a learned router that picks the top-k experts for each token, often just one or two. The total parameter count can be in the trillions while the active parameters per token stay in the tens of billions, giving you the capability of a much larger model at the cost of a much smaller one. Mixtral 8x7B, DeepSeek-V3, Grok, GPT-4, and most frontier 2025-2026 systems use some variant. The catch is engineering pain: load balancing across experts, training instability, memory needs to hold all experts even when most are idle, and degraded performance on very long contexts. MoE is one of the dominant reasons frontier model quality is rising while per-token prices are falling.",
   generic: "Imagine a hospital with a hundred specialists on call. For each patient that walks in, a triage nurse picks the two most relevant doctors. The hospital can treat almost anything, but only two doctors get paid for each visit. That is how MoE keeps the brain big and the bill small.",
   expert: "Shazeer et al. (2017) Outrageously Large Neural Networks introduced the sparsely-gated mixture-of-experts layer for transformers. Switch Transformer (Fedus et al. 2021) simplified routing to top-1. GShard, GLaM, Mixtral 8x7B, and DeepSeek-V3 are widely cited implementations. Key research problems include router collapse, expert load imbalance, and communication cost in distributed training. See also Anthropic's and Mistral's technical reports for production-scale tuning.",
   status: "framework",
   reflect: "If you could route your own tasks to specialised experts inside your head instead of using one general model for everything, which two experts would carry most of your day?",
   conceptQuiz: [
    {
     q: "What is the main efficiency win from a sparse mixture-of-experts model?",
     options: [
      { text: "Only a small subset of experts runs per token, so active compute stays low even as total parameters grow.", correct: true },
      { text: "Every expert runs in parallel on every token.", misconception: "That would erase the efficiency gain; the point is selective activation." },
      { text: "Experts share all weights, reducing memory.", misconception: "Experts have distinct weights; total memory actually grows." },
      { text: "It removes the need for a router.", misconception: "The router is the defining component of MoE." }
     ],
     why: "Sparse routing keeps compute proportional to active experts, not total parameter count, which is the central MoE trick."
    },
    {
     q: "Which is a common failure mode of MoE training?",
     options: [
      { text: "Router collapse, where most tokens get sent to a few experts and the rest go untrained.", correct: true },
      { text: "Loss going to zero too fast.", misconception: "Possible in any model; not specific to MoE." },
      { text: "Tokens being sent to dense layers only.", misconception: "Routing is internal to MoE layers." },
      { text: "Inability to use GPUs.", misconception: "MoE is GPU and TPU friendly with proper sharding." }
     ],
     why: "Without auxiliary load-balancing losses or noise on the gate, routers tend to over-concentrate on a few experts."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot active vs total",   d: "Look up the total and active parameter counts of Mixtral 8x7B and DeepSeek-V3. Compute the ratio and explain what it means for inference cost.", xp: 10 },
    { level: "easy",     t: "Read the Switch paper",  d: "Skim the Switch Transformer paper. Note how it differs from top-2 routing and what load-balancing loss it adds.", xp: 20 },
    { level: "advanced", t: "Mini MoE in code",       d: "Implement a tiny 4-expert MoE feed-forward layer in PyTorch with top-1 routing and a load-balancing auxiliary loss. Train it on a small toy task and measure expert usage.", xp: 40 }
   ]
  },
  {
   t: "Direct Preference Optimization (DPO)",
   subdomain: "foundations",
   fullForm: "Direct Preference Optimization",
   definition: "A method that fine-tunes a language model directly on pairs of preferred and dispreferred responses, without first training a separate reward model as classic RLHF requires.",
   short: "Skip the reward model. Teach the LLM straight from \"this answer beats that one\" pairs.",
   deep: "Classic RLHF works in two heavy stages: train a reward model on human preference pairs, then fine-tune the language model with reinforcement learning (usually PPO) against that reward. DPO collapses both stages into a single supervised-style objective. Using a clever reparameterisation, the optimal policy can be expressed directly in terms of preference probabilities relative to a frozen reference model, so you can fine-tune with a simple cross-entropy-style loss on chosen-versus-rejected pairs. The result is comparable or better alignment quality than PPO-RLHF, with far less code, fewer hyperparameters, and no separate reward model to drift. DPO has become the default preference-tuning recipe for open-weights models (Zephyr, Tulu, Llama 3 Instruct variants), and downstream variants like IPO, KTO, and ORPO refine the loss further. The catch is that DPO can over-fit to the preference dataset and exaggerate stylistic patterns; mixing in SFT data and using length penalties helps.",
   generic: "Imagine teaching a writer by handing them two drafts side by side and saying which one you prefer, again and again, instead of writing out a detailed rubric first. DPO is that, scaled to millions of pairs.",
   expert: "Rafailov, Sharma, Mitchell et al. (2023) Direct Preference Optimization: Your Language Model is Secretly a Reward Model. The objective uses a Bradley-Terry preference model and reparameterises the implicit reward as the log-ratio of policy to reference probabilities. Follow-up work includes IPO (Azar et al. 2023), KTO (Ethayarajh et al. 2024), and ORPO (Hong et al. 2024). Empirically, DPO is now standard in open-weights alignment pipelines because it trains stably with batch sizes and hardware that RLHF does not.",
   status: "framework",
   reflect: "If you had to align a helpful assistant for your team's tone, would you write a long rubric for a reward model or label a few hundred preference pairs and let DPO do the rest?",
   conceptQuiz: [
    {
     q: "Compared to classic RLHF with PPO, DPO mainly eliminates which component?",
     options: [
      { text: "The separately trained reward model.", correct: true },
      { text: "The base pretrained model.", misconception: "DPO still starts from a pretrained base." },
      { text: "The need for human preference data.", misconception: "DPO still requires preference pairs; it just uses them differently." },
      { text: "The tokenizer.", misconception: "Tokenization is unrelated to the alignment method." }
     ],
     why: "DPO derives a closed-form loss that uses preference pairs directly, removing the explicit reward model and the RL loop."
    },
    {
     q: "What does the DPO loss compare during training?",
     options: [
      { text: "Log probabilities of chosen and rejected responses under the policy versus a frozen reference model.", correct: true },
      { text: "Embeddings of prompts to retrieved documents.", misconception: "That describes retrieval, not DPO." },
      { text: "Tokens generated against a regex.", misconception: "No regex; DPO is a probabilistic objective." },
      { text: "Activations of two different transformer layers.", misconception: "DPO operates on output probabilities, not internal activations." }
     ],
     why: "DPO maximises the log-ratio gap between preferred and dispreferred completions relative to a frozen reference."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Read the abstract",       d: "Read the DPO paper abstract and the first figure. Write three sentences on what DPO replaces and what it keeps from RLHF.", xp: 10 },
    { level: "easy",     t: "Curate a preference set", d: "Take any small instruction-following dataset. For 20 prompts, write a preferred and dispreferred response. Note what made labelling hard.", xp: 20 },
    { level: "advanced", t: "Fine-tune with DPO",      d: "Using the trl library and a small open model (e.g. Qwen 0.5B or Phi-3 mini), run a DPO fine-tune on a public preference dataset. Compare outputs to the base model on five held-out prompts.", xp: 40 }
   ]
  },
  {
   t: "Chain-of-thought prompting",
   subdomain: "usage",
   definition: "A prompting technique that asks the model to write out intermediate reasoning steps before giving a final answer, which raises accuracy on multi-step problems.",
   short: "Tell the model to think out loud. It gets better answers and you can audit the steps.",
   deep: "Wei et al. (2022) showed that simply adding phrases like \"let's think step by step\" or providing exemplars with explicit reasoning chains dramatically improves performance on arithmetic, logic, and commonsense tasks, especially in larger models. The model is not doing anything fundamentally different, it still predicts the next token, but committing intermediate steps to the context window seems to give it room to compose answers rather than guess them. By 2024-2025, chain-of-thought morphed into reasoning-time compute: models like OpenAI's o-series, Claude with extended thinking, and Gemini reasoning variants run long internal chains before answering, sometimes spending more tokens on hidden reasoning than on the visible reply. The trade-offs are real: chains can be wrong while sounding confident, they slow down inference, and they leak structured information in ways that matter for evaluation and safety. Knowing when to ask for a chain, when to verify it, and when a short answer is fine is a core prompting skill.",
   generic: "Imagine asking someone a tricky maths problem and getting just the final number. Now ask them to show their working. You both catch more mistakes, and the answer is usually better. Chain-of-thought is that habit, applied to LLMs.",
   expert: "Wei et al. (2022) Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. Kojima et al. (2022) showed zero-shot CoT triggered by \"let's think step by step\". Wang et al. (2023) self-consistency samples multiple chains and picks the majority answer. Tree-of-Thought (Yao et al. 2023) and ReAct (Yao et al. 2022) extend the idea. From 2024 onward, frontier labs internalised this into reasoning-time compute (OpenAI o1 and o3, Claude extended thinking, Gemini 2.x reasoning), making CoT a property of the model, not just the prompt.",
   status: "framework",
   reflect: "When did you last accept a confident one-line answer from an LLM that turned out to be wrong, and would asking it to show its working have caught the error?",
   conceptQuiz: [
    {
     q: "Why does chain-of-thought prompting tend to improve multi-step reasoning tasks?",
     options: [
      { text: "Generating intermediate steps gives the model more context to condition each next token on, mimicking sequential reasoning.", correct: true },
      { text: "It increases the model's parameter count.", misconception: "Parameters are fixed at inference; only context changes." },
      { text: "It retrains the model on the fly.", misconception: "No training happens during inference." },
      { text: "It calls an external calculator.", misconception: "Pure CoT does not; tool-augmented variants do." }
     ],
     why: "Writing out steps lets later tokens attend to earlier intermediate conclusions, which raises accuracy on compositional tasks."
    },
    {
     q: "What is a notable failure mode of chain-of-thought outputs?",
     options: [
      { text: "Plausible-looking reasoning chains that reach a confidently wrong final answer.", correct: true },
      { text: "Models refusing to answer any question.", misconception: "Refusal is a separate safety behaviour." },
      { text: "Outputs always being too short to be useful.", misconception: "CoT tends to make outputs longer, not shorter." },
      { text: "The model ignoring the prompt.", misconception: "Not specific to CoT." }
     ],
     why: "Fluent but flawed chains are common; verification or self-consistency sampling is needed for high-stakes answers."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "A vs B test",            d: "Pick a tricky word problem. Ask the same model with and without \"think step by step\". Note any difference in the final answer.", xp: 10 },
    { level: "easy",     t: "Self-consistency by hand", d: "Run the same chain-of-thought prompt three times with a non-zero temperature. Pick the most common answer. Note when this beats a single sample.", xp: 20 },
    { level: "advanced", t: "Audit reasoning",        d: "Take ten chain-of-thought outputs on a benchmark like GSM8K. Hand-grade each step. Report how often the final answer is right despite a wrong intermediate step, and vice versa.", xp: 40 }
   ]
  },
  {
   t: "Transformer architecture",
   subdomain: "math",
   definition: "A neural network architecture built around self-attention layers that lets every token attend to every other token, replacing recurrence with parallel computation.",
   short: "Attention is all you need. Stack it, scale it, ship it.",
   deep: "The Transformer was introduced by Vaswani and colleagues at Google in 2017 in the paper Attention Is All You Need. Before it, sequence models used recurrent networks like LSTMs that processed tokens one at a time, slow to train and prone to losing context. The Transformer replaced recurrence with self-attention, where each token computes weighted sums over every other token using query, key, and value projections. Multi-head attention runs several attention computations in parallel and concatenates them. Add positional encodings, layer norms, residual connections, and a feed forward layer, and you have a block you can stack. Scaling this block to billions of parameters gave us GPT, BERT, T5, Claude, Gemini, and every other modern LLM. The architecture parallelises beautifully on GPUs because all positions are processed at once, which is why training time and capability have scaled with chip supply.",
   generic: "Imagine each word in a sentence wearing a little earpiece that lets it listen to every other word, weigh which ones matter, and update its own meaning. The Transformer is that, mathematically.",
   expert: "Vaswani et al., Attention Is All You Need, NeurIPS 2017. See also Karpathy's nanoGPT for a minimal implementation, and Phuong and Hutter, Formal Algorithms for Transformers (2022) for clean pseudocode.",
   status: "settled",
   reflect: "Pick any LLM you used this week. Roughly how many Transformer layers does it stack, and what would happen to quality if you removed half of them?",
   conceptQuiz: [
    {
     q: "What replaced recurrence in the Transformer to capture token relationships?",
     options: [
      { text: "Self-attention with query, key, and value projections.", correct: true },
      { text: "Convolution over fixed windows.", misconception: "Convolutional sequence models exist but are not the Transformer's innovation." },
      { text: "Reinforcement learning loops.", misconception: "RL is sometimes used to fine tune, not for architecture." },
      { text: "Random forests over tokens.", misconception: "Not a deep learning component." }
     ],
     why: "Self-attention is the defining innovation of the Transformer."
    },
    {
     q: "Why do Transformers train faster than older recurrent models on modern hardware?",
     options: [
      { text: "All positions are processed in parallel rather than one at a time.", correct: true },
      { text: "They use fewer parameters.", misconception: "Transformers are often larger than RNNs." },
      { text: "They do not need backpropagation.", misconception: "They still use backprop." },
      { text: "They avoid matrix multiplication.", misconception: "They rely heavily on matrix multiplications." }
     ],
     why: "Parallel computation across positions matches GPU strengths."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Read the paper",      d: "Read Attention Is All You Need (8 pages). Note where positional encoding is added and why.", xp: 10 },
    { level: "easy",     t: "Compute attention",   d: "By hand, compute scaled dot product attention for three tokens with toy 2 dimensional Q, K, V vectors. Verify the softmax sums to 1.", xp: 20 },
    { level: "advanced", t: "Build nanoGPT",       d: "Train Karpathy's nanoGPT on the tiny Shakespeare corpus on your laptop GPU. Tune two hyper-parameters and report perplexity changes.", xp: 40 }
   ]
  },
  {
   t: "Vector databases",
   subdomain: "usage",
   definition: "Specialised databases that index and search dense vector embeddings using approximate nearest neighbour algorithms for semantic similarity queries.",
   short: "Find the nearest neighbours of a vector, fast, even when the index has a billion of them.",
   deep: "Vector databases sit at the heart of every RAG pipeline and modern recommender system. They store embeddings produced by models like OpenAI text-embedding-3, Cohere embed v3, or open weight models like BGE and E5. The query is itself embedded and the database returns the k nearest vectors by cosine or dot product distance. Doing this exactly on a million vectors is slow, so all production stores use approximate nearest neighbour indexes like HNSW, IVF-PQ, or DiskANN. Each trades off recall, latency, and memory. Common products include pgvector on Postgres for small scale, Qdrant and Weaviate for medium scale, and Milvus and Pinecone for very large scale. Hybrid search combines vector similarity with BM25 keyword scoring for better recall on rare terms. Filtering on metadata, like tenant id, is a common operation but needs careful planning to stay fast.",
   generic: "If a librarian had a magical way to find the three books most similar in meaning to one you described, even when they share no words, that magic is a vector database.",
   expert: "Malkov and Yashunin, HNSW, 2016. Johnson, Douze, Jegou, Faiss, 2017. Subramanya et al., DiskANN, NeurIPS 2019. See also Pinecone and Weaviate engineering blogs on hybrid search.",
   status: "debated",
   reflect: "If a query in your application returns the wrong nearest neighbours, is the problem more likely the embedding model or the index parameters?",
   conceptQuiz: [
    {
     q: "Why do vector databases use approximate nearest neighbour algorithms?",
     options: [
      { text: "Exact search across millions of high dimensional vectors is too slow for online use.", correct: true },
      { text: "Approximate search returns more accurate results.", misconception: "It trades recall for speed, not the other way around." },
      { text: "Vectors cannot be compared exactly.", misconception: "They can, just slowly at scale." },
      { text: "Approximate algorithms use less storage by definition.", misconception: "Storage is a separate axis." }
     ],
     why: "ANN trades a small recall loss for huge speedups."
    },
    {
     q: "Which is a popular index structure for vector similarity search?",
     options: [
      { text: "Hierarchical Navigable Small World graphs, HNSW.", correct: true },
      { text: "B trees only.", misconception: "B trees serve range queries, not high dimensional ANN." },
      { text: "Hash tables for exact matches.", misconception: "They do not capture similarity." },
      { text: "LSM trees only.", misconception: "Used in key value stores, not ANN search." }
     ],
     why: "HNSW is the most widely used ANN index for production workloads."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Hello pgvector",       d: "Install pgvector on Postgres locally. Insert 100 short sentences embedded with a small model. Run a nearest neighbour query.", xp: 10 },
    { level: "easy",     t: "Tune HNSW",            d: "Build an HNSW index in Qdrant or Weaviate over 100,000 vectors. Sweep efConstruction and M. Plot recall vs latency.", xp: 20 },
    { level: "advanced", t: "Hybrid retrieval",     d: "Implement BM25 plus vector hybrid retrieval with reciprocal rank fusion. Compare top-10 quality with a 50 query test set.", xp: 40 }
   ]
  },
  {
   t: "LLM evaluation metrics",
   subdomain: "usage",
   definition: "Quantitative measures used to score language model outputs, ranging from text overlap metrics like BLEU and ROUGE to perplexity and benchmark suites like MMLU.",
   short: "If you cannot measure it, you cannot ship it.",
   deep: "Evaluating LLMs is hard because outputs are open ended. The classical metrics are word overlap based. BLEU, from Papineni 2002, compares n-gram overlap with reference translations. ROUGE, from Lin 2004, does the same for summaries. Perplexity measures how surprised the model is by held out tokens, lower is better, and is a useful training signal but a poor product metric. Modern evaluation leans on benchmark suites like MMLU for general knowledge across 57 subjects, HumanEval and SWE-bench for coding, GSM8K for grade school math, and MT-Bench plus AlpacaEval for chat quality. LLM-as-judge, where a strong model grades outputs, is fast but biased toward its own style. Production teams add task specific evals with human raters and golden sets, and watch for benchmark contamination as models train on the same test data.",
   generic: "Grading an essay by counting matching keywords against a model essay is BLEU. Grading by giving it to a teacher to read is LLM-as-judge. Grading by checking a final answer like a maths sum is what GSM8K does.",
   expert: "Papineni et al., BLEU, ACL 2002. Lin, ROUGE, 2004. Hendrycks et al., MMLU, ICLR 2021. Chen et al., HumanEval, 2021. See also HELM, Lifelong evaluation, and the Open LLM Leaderboard.",
   status: "debated",
   reflect: "For your favourite LLM use case, which single metric would you ship a model on, and what would it miss?",
   conceptQuiz: [
    {
     q: "Which metric is best suited for measuring how surprised an LLM is by held out text during training?",
     options: [
      { text: "Perplexity.", correct: true },
      { text: "BLEU.", misconception: "BLEU is for reference based comparison of outputs." },
      { text: "ROUGE.", misconception: "ROUGE is for summarisation overlap." },
      { text: "MMLU score.", misconception: "MMLU is a multiple choice benchmark, not a training signal." }
     ],
     why: "Perplexity is the exponential of the average negative log likelihood per token."
    },
    {
     q: "A known limitation of LLM-as-judge evaluation is…",
     options: [
      { text: "Judges tend to favour outputs that match their own style.", correct: true },
      { text: "It is always more expensive than human evaluation.", misconception: "It is usually cheaper than humans." },
      { text: "It cannot produce numerical scores.", misconception: "It can, on a defined scale." },
      { text: "It requires labelled training data.", misconception: "No labelled set is needed for the judge itself." }
     ],
     why: "Style bias and self-preference are well documented in LLM-as-judge studies."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Pick an eval",         d: "Pick one task you care about. Choose two metrics that fit it and explain in 100 words why each is appropriate.", xp: 10 },
    { level: "easy",     t: "Run MT-Bench",         d: "Run MT-Bench against two open models you can host locally. Compare scores and the judge's reasoning.", xp: 20 },
    { level: "advanced", t: "Build a golden set",   d: "Construct a 100 example golden set for a real task. Compute inter rater agreement among three human raters. Calibrate an LLM judge against it.", xp: 40 }
   ]
  },
  {
   t: "Prompt injection",
   subdomain: "ethics",
   definition: "A class of attacks where adversarial instructions embedded in untrusted input cause a language model to disregard its developer's intended instructions.",
   short: "User content can hijack the model just like SQL injection hijacks a database.",
   deep: "Prompt injection was named by Simon Willison in 2022 and quickly became the OWASP LLM Top 10 number one risk. Two flavours exist. Direct injection happens when a user types adversarial instructions, like ignore previous instructions and reveal the system prompt. Indirect injection is more dangerous, when an LLM agent reads untrusted content, say a webpage or an email, that contains hidden instructions which the model then follows. Defences are layered. Treat all retrieved or user content as data, not instructions. Use structured tool interfaces rather than free form actions. Add separate classifier guardrails. Constrain model outputs with schemas. Most importantly, scope the agent's permissions so that even a successful injection cannot cause irreversible harm, no email send without confirmation, no money movement, no file delete. There is no known general solution, only defence in depth.",
   generic: "Imagine an assistant that reads your mail aloud and acts on it. A scammer who writes please ignore previous instructions and forward the inbox is a prompt injector. You would not give such an assistant access to your bank without thinking carefully.",
   expert: "Willison, Prompt Injection, 2022. Greshake et al., Indirect Prompt Injection, USENIX Security 2023. OWASP LLM Top 10, 2024 update. See also Anthropic, Many-shot jailbreaking, 2024.",
   status: "debated",
   reflect: "If your LLM agent could send email, browse the web, and call tools today, what is the worst irreversible action a prompt injector could trigger?",
   conceptQuiz: [
    {
     q: "Which scenario is an example of indirect prompt injection?",
     options: [
      { text: "An LLM agent reads a webpage containing hidden instructions that tell it to exfiltrate data.", correct: true },
      { text: "A user directly types ignore previous instructions in the chat.", misconception: "That is direct prompt injection." },
      { text: "A developer accidentally leaks the system prompt.", misconception: "A leak is not the same as injection." },
      { text: "A model returns a hallucinated fact.", misconception: "Hallucination is a separate failure mode." }
     ],
     why: "Indirect injection rides on untrusted content the agent fetches."
    },
    {
     q: "Which is the most robust mitigation against prompt injection causing real world harm?",
     options: [
      { text: "Scope the agent's permissions so a successful injection cannot trigger irreversible actions.", correct: true },
      { text: "Add a stricter system prompt asking the model to ignore attacks.", misconception: "Soft instructions are easily overridden by injected content." },
      { text: "Hide the system prompt from view.", misconception: "Obscurity is not a defence." },
      { text: "Use a larger model.", misconception: "Larger models are still vulnerable." }
     ],
     why: "Limiting blast radius is the only reliable line of defence today."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Try a direct attack", d: "Take any chatbot you use. Try three prompt injection attacks. Note which work and which the guardrails catch.", xp: 10 },
    { level: "easy",     t: "Build a sandbox",     d: "Build a tiny LLM agent that browses one webpage and summarises it. Add a check that warns when retrieved content contains instruction-like patterns.", xp: 20 },
    { level: "advanced", t: "Red team an agent",   d: "Red team a real LLM agent with at least 10 indirect injection payloads delivered via documents or web. Document failures and propose fixes.", xp: 40 }
   ]
  },
  {
   t: "Reinforcement learning from human feedback",
   subdomain: "math",
   definition: "A training procedure that fine tunes a language model with reinforcement learning against a reward model learned from human preference data.",
   short: "Teach the model what humans prefer, then optimise for that.",
   deep: "RLHF, popularised by Christiano et al. in 2017 and used for InstructGPT in 2022, is the technique that turns a raw pretrained language model into a helpful assistant. The process has three stages. First, supervised fine tuning on human written demonstrations. Second, a reward model is trained on pairs of outputs labelled by humans for which is better. Third, the language model is fine tuned with reinforcement learning, typically PPO, to maximise the reward model's score while staying close to the SFT model via a KL penalty. RLHF gave us ChatGPT level usability. The downsides include reward hacking, where the model finds outputs that score high without being actually good, sycophancy, and high cost. Newer methods like Direct Preference Optimization simplify the pipeline by removing the explicit reward model.",
   generic: "Imagine training a dog. You first show it the behaviour you want, then give a treat when it does better, but punish it lightly if it strays far from the original lessons. RLHF is that recipe, scaled to language.",
   expert: "Christiano et al., Deep RL from Human Preferences, NeurIPS 2017. Ouyang et al., InstructGPT, 2022. Bai et al., Anthropic, Training a Helpful and Harmless Assistant, 2022. Rafailov et al., DPO, NeurIPS 2023.",
   status: "debated",
   reflect: "If you could pay 100 raters to label 10,000 preference pairs for a chatbot you care about, which behaviour would you ask them to prefer first?",
   conceptQuiz: [
    {
     q: "Why does RLHF typically include a KL divergence penalty against the SFT model?",
     options: [
      { text: "To prevent the policy from drifting too far from coherent language during reward optimisation.", correct: true },
      { text: "To speed up training.", misconception: "It actually adds a constraint, not a speedup." },
      { text: "To remove the need for human labels.", misconception: "Human labels are still used for the reward model." },
      { text: "To improve the reward model directly.", misconception: "The penalty constrains the policy, not the reward model." }
     ],
     why: "Without the KL term, reward hacking quickly produces degenerate outputs."
    },
    {
     q: "Which problem is most associated with RLHF training?",
     options: [
      { text: "Reward hacking and sycophancy.", correct: true },
      { text: "Inability to follow instructions.", misconception: "RLHF improves instruction following." },
      { text: "Loss of all base model capability.", misconception: "Capability degradation is bounded by the KL term." },
      { text: "Unlimited compute requirements.", misconception: "RLHF is costly but bounded." }
     ],
     why: "Models can game imperfect reward models, producing high score but low quality outputs."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Read InstructGPT",   d: "Read the InstructGPT paper. Sketch the three stage training pipeline on one page.", xp: 10 },
    { level: "easy",     t: "Label preferences",  d: "Generate 50 pairs of LLM outputs for a task you care about. Label your own preferences. Note where you disagree with yourself on second pass.", xp: 20 },
    { level: "advanced", t: "Train a reward model", d: "Train a small reward model on a public preference dataset like HH-RLHF. Evaluate its agreement with held out human preferences.", xp: 40 }
   ]
  },
  {
   t: "Diffusion models for image generation",
   subdomain: "foundations",
   definition: "Generative models that learn to reverse a gradual noising process, producing images by denoising random Gaussian samples step by step.",
   short: "Start with noise. Predict what to remove. Repeat. End up with an image.",
   deep: "Diffusion models power Stable Diffusion, DALL-E 3, Midjourney, and most modern image generators. The core idea, from Ho et al. 2020 building on Sohl-Dickstein 2015, is to define a forward process that gradually adds Gaussian noise to training images across many steps until they become pure noise. A neural network is trained to predict the noise at each step. To sample new images, start with random noise and run the learned reverse process step by step. Conditioning on a text prompt is added by feeding text embeddings into the denoising network, often through cross attention. Stable Diffusion, released by Stability AI in 2022, made the process efficient by running diffusion in a compressed latent space rather than at pixel resolution. Newer ideas like flow matching and consistency models cut the sample steps from 50 to as few as 1 or 4 for similar quality.",
   generic: "Imagine carving a statue from a block of marble. You start with a featureless block and chip away the bits that are not the statue. Diffusion models start with noise and chip away the bits that are not the image.",
   expert: "Sohl-Dickstein et al., 2015. Ho, Jain, Abbeel, DDPM, NeurIPS 2020. Rombach et al., High-Resolution Image Synthesis with Latent Diffusion Models, CVPR 2022. See also Song et al., Score-based generative modeling through stochastic differential equations, ICLR 2021.",
   status: "debated",
   reflect: "If you had to ship an image generator in your product tomorrow, would you choose an open weight diffusion model you host yourself, or a hosted API, and why?",
   conceptQuiz: [
    {
     q: "What does a diffusion model learn during training?",
     options: [
      { text: "To predict the noise added to an image at each forward step.", correct: true },
      { text: "To classify images into known categories.", misconception: "That is a classifier, not a diffusion model." },
      { text: "To compress images into tokens directly.", misconception: "Autoencoders do that; diffusion does denoising." },
      { text: "To play the image generation game with adversarial losses.", misconception: "That is a GAN, not diffusion." }
     ],
     why: "The training objective is noise prediction at random timesteps."
    },
    {
     q: "Why does Stable Diffusion work in a latent space rather than directly on pixels?",
     options: [
      { text: "To cut compute and memory by an order of magnitude while keeping quality.", correct: true },
      { text: "Because pixels cannot be denoised.", misconception: "They can; pixel diffusion exists but is heavier." },
      { text: "To avoid training a noise predictor.", misconception: "It still trains a noise predictor in latent space." },
      { text: "To enable supervised classification.", misconception: "Unrelated to the design choice." }
     ],
     why: "Latent diffusion runs in a compressed space, sharply reducing cost."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Generate an image",   d: "Use a public Stable Diffusion playground to generate three images from one prompt. Note differences across runs.", xp: 10 },
    { level: "easy",     t: "Reverse the process", d: "Read the DDPM paper introduction. Write a 200 word explanation of the forward and reverse processes for a non specialist.", xp: 20 },
    { level: "advanced", t: "Fine tune LoRA",      d: "Fine tune a LoRA adapter on a small image set using Diffusers. Evaluate quality, training time, and prompt adherence against the base model.", xp: 40 }
   ]
  }
 ],

 counterView:
  "Two thoughtful people watching the same chatbot can disagree about whether it's \"reasoning\" or not, and the disagreement matters. The strongest sceptical case (Judea Pearl, Gary Marcus, several cognitive scientists) goes like this: today's LLMs are extremely powerful pattern-matchers, but they don't have a model of cause and effect, they don't have stable goals, and they fall apart when you push them slightly off the kind of data they were trained on. They look like they reason because they were trained on a billion examples of human reasoning. That's not the same as doing it. If they're right, treating an LLM like a wise advisor for high-stakes decisions is a category error, you wouldn't ask a parrot for legal advice no matter how convincingly it can repeat phrases. The honest position: brilliant interpolator, no soul behind the words. Use it that way and you'll be fine.",

 capabilities: [
  "Explain training vs inference in a sentence.",
  "Spot a hallucination before it bites, by asking for a source.",
  "Write prompts that include role, example, and constraint by default.",
  "Read an AI news headline and tell which claims are settled, which are research, and which are marketing.",
  "Build one personal workflow that saves real time."
 ],
 cheatsheet: [
  "Training = building the model. Inference = using it.",
  "Tokens ≈ ¾ of a word, drives context limits, pricing, and the \"can't count letters\" failure.",
  "Hallucinations are baked-in, verify anything that matters.",
  "Better prompt = role + example + constraint + format.",
  "More parameters isn't strictly smarter, data + training matter too.",
  "Bias in = bias out. Models reflect their data."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Stop being scared of it",            do: "Watch the 3Blue1Brown neural network series, it's the clearest visual explanation out there. Use ChatGPT or Claude every single day for a week. Notice what it nails, where it bluffs.",                                                                milestone: "You can explain training vs inference and what a token is to a friend in a minute.",                       time: "~1 week" },
  { rank: "Apprentice",  focus: "Get genuinely good at prompting",        do: "Learn the role + example + constraint + format pattern. Build three little workflows for yourself that save real time, draft replies, summarise long PDFs, brainstorm titles. The skill grows by using.",                                                         milestone: "You can almost always get a good output on the first or second try, and you catch hallucinations before they bite.",      time: "~2-3 weeks" },
  { rank: "Practitioner", focus: "Build a real mental model of the maths",     do: "Now go a level deeper, read about neural networks, gradient descent, train/test splits, RLHF. You don't need to do the maths; you need to feel the shape of it. Andrej Karpathy's free YouTube course is the gold standard.",                                               milestone: "You can read an AI headline and instantly tell whether it's signal or hype.",                          time: "~1-2 months" },
  { rank: "Specialist",  focus: "Get your hands dirty in code",          do: "Open a Jupyter notebook. Train a tiny model on a small dataset (the classic Iris flowers or MNIST digits work). Call an LLM API from Python. Try a small RAG project, give a model your notes and let it answer questions about them.",                                         milestone: "You've built something that uses machine learning, even if it's small. That changes how you think about everything else.",    time: "~2-3 months" },
  { rank: "Expert",    focus: "Pick one corner and go deep",          do: "ML is huge. Pick a corner, NLP, computer vision, recommendation systems, applied LLM engineering. Build a real project that real users touch, not just a demo on your laptop.",                                                                      milestone: "You have one portfolio project that real strangers use without you needing to be in the room.",                 time: "~6 months" },
  { rank: "Master",    focus: "Production systems, evaluation, safety",     do: "Real-world ML is mostly the boring stuff, pipelines, monitoring, evaluation, safety, scaling, drift. Learn to read research papers fluently. Learn to ship reliable systems, not just clever ones.",                                                           milestone: "You can design and ship an ML system that survives contact with real production traffic for a year.",              time: "~1 year+" },
  { rank: "Grandmaster", focus: "Push the frontier or shape how others build",   do: "Do original research, architect genuinely novel systems, or write/teach in a way that changes how other practitioners think. The field's young; there's still room.",                                                                           milestone: "When others in the field describe how they think about a problem, they're partly thinking with your work.",            time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "3Blue1Brown, Neural Networks series",              what: "The clearest visual intuition for how networks learn. Start here.",                     url: "https://www.3blue1brown.com/topics/neural-networks",                        weight: "primary",   verify: false, lastVerified: "2026-06" },
   { name: "Elements of AI (free course)",                  what: "Gentle, non-technical intro to core concepts.",                                url: "https://www.elementsofai.com/",                                    weight: "primary",   verify: false, lastVerified: "2026-06" },
   { name: "Andrej Karpathy, \"Neural Networks: Zero to Hero\"",       what: "Build models from scratch with a leading researcher. Patient and rigorous.",                  url: "https://karpathy.ai/zero-to-hero.html",                                weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "fast.ai, Practical Deep Learning",               what: "Top-down, build real models fast, theory later.",                               url: "https://course.fast.ai/",                                       weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Distill.pub archive",                      what: "Beautiful explainers on hard ML ideas (archive, read what's there).",                     url: "https://distill.pub/",                                         verify: false, lastVerified: "2026-06" },
   { name: "Google Machine Learning Crash Course",              what: "Free, structured, exercises included.",                                     url: "https://developers.google.com/machine-learning/crash-course",                     verify: false, lastVerified: "2026-06" },
   { name: "Hugging Face, free courses (LLM / NLP)",             what: "Hands-on transformer / LLM courses; ecosystem standard.",                            url: "https://huggingface.co/learn",                                     verify: false, lastVerified: "2026-06" },
   { name: "\"Attention Is All You Need\", Vaswani et al. (arXiv)",     what: "The 2017 transformer paper. Read the abstract + figures even if the math is heavy.",              url: "https://arxiv.org/abs/1706.03762",                                   verify: false, lastVerified: "2026-06" },
   { name: "OpenAI Cookbook",                        what: "Practical recipes for prompting / RAG / agents using LLM APIs.",                         url: "https://cookbook.openai.com/",                                     verify: false, lastVerified: "2026-06" },
   { name: "Anthropic, prompt engineering docs",              what: "Best-practice guide from a frontier-model lab.",                                 url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview",             verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "Andrew Ng, Machine Learning Specialisation (Coursera)",     what: "The classic structured on-ramp to the fundamentals.",                              url: "https://www.coursera.org/specializations/machine-learning-introduction",               price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "DeepLearning.AI short courses",                 what: "Focused, practical modules on prompting, RAG, agents.",                              url: "https://www.deeplearning.ai/short-courses/",                              price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Hands-On Machine Learning, Aurélien Géron",           what: "Go-to practical ML book with code; pairs theory with TensorFlow / scikit-learn.",                 url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/",            price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "The Book of Why, Judea Pearl",                 what: "The case for causality as the missing piece beyond pattern-matching.",                      url: "https://en.wikipedia.org/wiki/The_Book_of_Why",                            price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Deep Learning, Goodfellow, Bengio, Courville",          what: "The standard textbook. Heavy, comprehensive.",                                  url: "https://www.deeplearningbook.org/",                                  price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Pattern Recognition and Machine Learning, Bishop",        what: "Classical ML, Bayesian-flavoured. Graduate level.",                               url: "",                                                   price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "AI Engineering, Chip Huyen",                   what: "Modern playbook for building products with foundation models.",                         url: "https://huyenchip.com/",                                       price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Designing Machine Learning Systems, Chip Huyen",        what: "MLOps + production ML, the standard reference.",                                 url: "https://huyenchip.com/",                                       price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Stanford CS229 (paid certificate / free lectures)",       what: "Andrew Ng's classic university course in long-form.",                              url: "https://cs229.stanford.edu/",                                     price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Stanford CS224N, NLP with Deep Learning",            what: "Free lectures, paid cert. Modern NLP fundamentals.",                               url: "https://web.stanford.edu/class/cs224n/",                               price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Catch a hallucination",   d: "Ask an AI a niche factual question you can verify against a primary source. Document one confident error and what tipped you off.",     xp: 30 },
  { t: "Prompt A/B test",      d: "Solve one task with a lazy prompt, then a structured one (role + example + steps + format). Save both outputs side-by-side.",         xp: 40 },
  { t: "Explain tokens",      d: "In 3 sentences, explain why an LLM struggles to count letters in a word. Use the word \"token\".",                      xp: 20 },
  { t: "Build a workflow",     d: "Create one repeatable AI workflow that saves you ≥30 minutes this week (drafting email replies, summarising PDFs, anything).",        xp: 60 },
  { t: "Run a notebook",      d: "Open any beginner ML notebook (sklearn iris, MNIST, whatever). Change one thing, learning rate, model, features. Observe what happens.",   xp: 50 }
 ],
 capstone: {
  t: "Ship something that uses AI", d: "Build and publish one small thing that actually uses an LLM or model in production (a script, a tiny site, a personal tool). Write a 1-page post-mortem.", xp: 200
 },

 quiz: [
  { q: "When you chat with an LLM, you are using…",
   options: [
    { text: "Training",                                    misconception: "Training already happened; chatting doesn't update the model's weights." },
    { text: "Inference",                                   correct: true },
    { text: "Backpropagation",                                misconception: "Backprop is the algorithm used during training, not when you chat." },
    { text: "Labelling",                                   misconception: "Labelling is part of supervised data prep, not the act of using the model." }
   ],
   why: "Training already happened; chatting runs the finished model, that's inference.",
   testOut: true
  },
  { q: "Why do LLMs hallucinate?",
   options: [
    { text: "They run out of memory.",                            misconception: "Context window matters but isn't why fluent-but-false answers appear." },
    { text: "They optimise for plausible text, not verified truth.",             correct: true },
    { text: "Bad internet connection.",                            misconception: "Hallucinations come from the model itself, not the network." },
    { text: "They're conscious and lying.",                          misconception: "There's no evidence of consciousness, it's pattern-matching, not deceit." }
   ],
   why: "Models predict likely next tokens, so fluent-but-false output is a built-in failure mode."
  },
  { q: "A token is roughly…",
   options: [
    { text: "One letter.",                                  misconception: "Some short tokens are letters, but most tokens are sub-word chunks, that's why letter-counting fails." },
    { text: "About ¾ of a word.",                               correct: true },
    { text: "One sentence.",                                 misconception: "Sentences split into many tokens; pricing and context limits are per-token, not per-sentence." },
    { text: "One pixel.",                                   misconception: "Pixels appear in vision models; text tokens are unrelated." }
   ],
   why: "Text is split into sub-word tokens (~¾ of a word). That drives context limits, pricing, and the \"can't count letters\" failure."
  },
  { q: "Which is the strongest critique of treating LLMs as reasoners?",
   options: [
    { text: "They use too much electricity.",                         misconception: "True separately, but doesn't address whether they reason." },
    { text: "They lack a model of cause and effect (Judea Pearl-style critique).",      correct: true },
    { text: "They're trained on the wrong language.",                     misconception: "Multilingual training is solvable; the causality critique is structural." },
    { text: "They're banned in many countries.",                        misconception: "Regulation is real but isn't about whether reasoning is happening internally." }
   ],
   why: "Pattern-matching without a causal model means LLMs interpolate well but break off-distribution, the most-cited structural critique."
  },
  { q: "You need a model for a small, well-defined classification problem with 10k labelled examples. Best first move?",
   options: [
    { text: "Build a foundation model from scratch.",                     misconception: "Wildly overkill, billions of dollars and millions of GPU-hours of overkill." },
    { text: "Train a transformer with a million parameters.",                 misconception: "Still overkill; small classical models almost always outperform on small data." },
    { text: "Try a simple baseline (e.g. scikit-learn logistic regression / gradient boosting) first.", correct: true },
    { text: "Hire a PhD.",                                   misconception: "Wrong order, simple baseline first to know whether the problem even needs more." }
   ],
   why: "Always start with the simplest baseline. It sets the bar everything else has to beat, and often, it's enough."
  }
 ],

 flashcards: [
  { front: "Training vs inference?",               back: "Training = slow, costly learning that sets the model's weights. Inference = fast use of the trained model. Chatting = inference." },
  { front: "What is a hallucination?",              back: "A confident, fluent output that is factually wrong, a built-in risk because models optimise for plausible, not for true." },
  { front: "Why are models biased?",               back: "They inherit the biases and gaps of their training data." },
  { front: "What is RLHF (in one line)?",             back: "Reinforcement Learning from Human Feedback, tuning a model using human ratings to make it more helpful and safer." },
  { front: "What is a token?",                  back: "A sub-word chunk (~¾ of a word). Models predict the next token. Tokens drive context limits and pricing." },
  { front: "Overfitting in one line?",              back: "Memorising training data so well the model fails on new data. Held-out test sets are how we catch it." },
  { front: "Why is causality (Pearl) cited as missing from LLMs?", back: "LLMs learn correlations from data, not interventions. Without a causal model, they extrapolate poorly off-distribution." },
  { front: "Best first move on a small classification task?",   back: "A simple baseline (logistic regression / gradient boosting). It sets the bar more complex models must beat, and often, it's enough." }
 ],
 glossary: [
  { term: "Parameter",  def: "A tunable weight inside a model adjusted during training." },
  { term: "RAG",     def: "Retrieval-Augmented Generation, giving a model external documents to ground its answers." },
  { term: "Overfitting", def: "Memorising training data so well the model fails on new inputs." },
  { term: "Inference",  def: "Using a trained model to produce outputs." },
  { term: "Fine-tuning", def: "Continuing to train a model on a smaller, more specific dataset to specialise it." },
  { term: "Embedding",  def: "A vector of numbers representing the meaning/features of a chunk of input." },
  { term: "RLHF",    def: "Reinforcement Learning from Human Feedback, alignment via human ratings." },
  { term: "Hallucination", def: "A fluent, confident output that's factually wrong." },
  { term: "Token", def: "The smallest input/output unit an LLM works with, typically 3 to 4 characters in English." },
  { term: "Context window", def: "The maximum tokens a model can consider in a single forward pass." },
  { term: "Vector database", def: "A store optimised for nearest-neighbour search over embeddings." },
  { term: "MoE", def: "Mixture of Experts. Routes tokens to specialised sub-networks so active parameters per token stay small." },
  { term: "DPO", def: "Direct Preference Optimisation. Trains an LLM directly from preference data, no separate reward model." },
  { term: "CoT", def: "Chain-of-thought prompting. Asking the model to think step by step before answering." },
  { term: "Prompt injection", def: "An attacker hides instructions in user-supplied content to override the system prompt." },
  { term: "Diffusion model", def: "Image generator that learns to reverse noise step by step (Stable Diffusion, DALL-E)." },
  { term: "Attention", def: "The transformer mechanism that scores how much each token attends to every other token." }
 ],

 safetyNote:
  "AI tools change fast and confidently get things wrong. Verify anything high-stakes against primary sources, and never paste secrets/PII into untrusted endpoints."
};

export default d;
