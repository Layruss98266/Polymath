import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "tech",
 icon: "💻",
 hue: "#38bdf8",
 category: "Tech & Future",
 name: "Tech & Programming",
 tagline: "Speak to machines, build things",

 basics: "Programming is the strange art of writing instructions so precise that a machine, which has no common sense at all, can follow them and produce something useful. The syntax (the punctuation and grammar of any specific language) you can learn in a few weeks.",
 deepBasics: "The actual job is harder and slower: breaking fuzzy real-world problems into precise small steps, reading other people's code without your eyes glazing over, and shipping things that don't fall apart when a real user touches them. The good news, those underlying skills don't expire. Languages come and go, but knowing how to think like a programmer is a lifetime tool.",
 whyItMatters: [
  "Massive leverage. One person who codes can build things that used to need a team of ten.",
  "Modern jobs across every industry now expect you to read APIs, configs, and logs without panicking. Hiding from tech is no longer free.",
  "You can tell a good technical decision from a bad one even if you aren't an engineer full-time, which makes you better at almost any role.",
  "You can automate the boring parts of your own life. That alone is worth the price of admission."
 ],
 realWorldExample: "Type a URL into your browser and hit enter. In the next 200 milliseconds, your computer asks the internet's address book where this site lives (DNS lookup). It opens a secure phone line to that address (TCP and TLS). It says \"please send me the page\" (HTTP request). The server replies with a heap of HTML, which links to more files, fonts, images, JavaScript. Your browser fetches each, runs the JavaScript, paints the result, and you see something. Knowing the rough shape of this, not the wire-level detail, turns \"the internet is magic\" into \"this page is slow because the server's slow,\" or \"this site is loading too many images.\" Suddenly you can debug things the rest of the office can't.",

 mentors: [
  { name: "Alan Turing", for: "the theoretical foundation", work: "On Computable Numbers (1936)" },
  { name: "Edsger Dijkstra", for: "structured programming + clarity of thought", work: "Notes on Structured Programming (1972)" },
  { name: "Donald Knuth", for: "algorithms + the discipline of correctness", work: "The Art of Computer Programming" },
  { name: "Brian Kernighan", for: "the C language and how to teach programming", work: "K&R (1978)" },
  { name: "Martin Fowler", for: "refactoring + working with real codebases", work: "Refactoring (1999)" }
 ],

 diagrams: [
  { kind: "flow", title: "What happens when you type a URL", caption: "Each step is one place performance and security live.", data: { steps: ["DNS lookup", "TCP / TLS handshake", "HTTP request", "Server response", "Render"] } },
  { kind: "tree", title: "Data structures (rough map)", caption: "Pick the right shape for the operations you do most.", data: { root: "Data structures", children: [
   { label: "Array / List" },
   { label: "Hash Map" },
   { label: "Tree", children: [{ label: "BST" }, { label: "Heap" }] },
   { label: "Graph", children: [{ label: "Directed" }, { label: "Weighted" }] }
  ] } }
 ],

 synthesis: [
  { concept: "Iteration → debugging mindset", linksTo: "learning", note: "Same retrieval/feedback loop, just with a compiler giving the feedback." },
  { concept: "Tokens / compute / model", linksTo: "ai_ml", note: "The systems thinking transfers, APIs, latency, compute budgets all show up." }
 ],

 subdomains: [
  { id: "basics", name: "Language Basics", intro: "Variables, types, functions, control flow. The grammar every language reuses, so once you've got it in one, the next one is mostly vocabulary.", capabilities: ["Read unfamiliar code and predict what it does before running it.", "Write a small script end to end without copy-pasting from a tutorial.", "Pick the right loop, conditional, or function shape for the job."] },
  { id: "structures", name: "Data Structures", intro: "How you arrange data decides how fast and how cleanly your code runs. Arrays, hashmaps, trees, and queues each have a job they do best.", capabilities: ["Reach for a hashmap the moment you need O(1) lookup by key.", "Spot when a nested loop is hiding an O(n^2) bug on big inputs.", "Pick the right structure before writing the algorithm on top."] },
  { id: "workflow", name: "Workflow and Git", intro: "Version control, branches, reviews, and the discipline that keeps a team's code from melting into chaos. Boring on day one, lifesaving by month six.", capabilities: ["Recover from a botched merge or accidental commit without panic.", "Write a commit message a teammate can read six months later.", "Keep a feature branch short-lived and reviewable in under 400 lines."] },
  { id: "mindset", name: "Engineering Mindset", intro: "How senior engineers actually think: smaller iterations, clearer naming, fewer clever tricks. Boring code that ships beats clever code that breaks.", capabilities: ["Debug by forming a hypothesis and testing it, not by random edits.", "Choose the simpler design when two solutions are equally correct.", "Leave a codebase a little cleaner than you found it on every PR."] },
 ],

 concepts: [
  { t: "Variables, types, and control flow",   short: "Storage, decisions, and loops. Every language has these. Once you've got them, the rest is detail.",                                             deep: "Every programming language, no matter how trendy, gives you the same three primitives. A way to store a value with a name (a variable). A way to make a choice (if/else). A way to repeat work (for/while loops). Pick a friendly first language, Python or JavaScript, and burn these into your fingers until they're automatic. Syntax is the cheap part of programming; you can memorise it in a week. The real work is learning to break a fuzzy real-world problem into a sequence of tiny precise steps. That part takes years and never quite ends. Start with: \"can I write a 10-line script today that does one useful thing in my life?\" If the answer is yes, you can program, everything from here is scale.",                                                                                 status: "settled",  reflect: "Could you write a 10-line script today that did one useful thing for you? If not, that's the very first project, rename some files, send a daily reminder, anything." },
  { t: "Functions and composition",       short: "Name a thing once. Call it many times. Build big systems out of small named blocks.",                                                     deep: "A function is a named block of code you can re-use. Instead of writing the same 20 lines in three different places, you write them once, give them a name, and call them three times. The discipline behind the syntax is small but important: one function, one job. If a function does two things, split it. Code that follows this rule is readable months later by your future self. Code that doesn't becomes the spaghetti you avoid touching. Most senior engineers spend more time pulling tangles into clean small functions than writing brand new ones.",                                                                                                                                                      status: "settled",  reflect: "Open something you wrote six months ago. Can you still read it? Can you change one part without breaking three others?" },
  { t: "Data structures",             short: "Different shapes for different jobs. Lists hold order, hash maps hold lookups, trees hold hierarchy, graphs hold relationships.",                              deep: "Imagine you're organising your contacts. If you just need them in order, a list works. If you need to grab one by name instantly, a hash map (dictionary) is the right shape. If you need to capture an org chart, a tree. If you need who-knows-whom relationships, a graph. You don't have to memorise the internals of each; you do have to know which shape fits which kind of question, so you can reach for the right one. Most beginner code uses one shape (a list) for everything and grinds to a halt as soon as the data grows.",                                                                                                                                                                     status: "settled",  reflect: "Pick a problem you're working on. What's the natural shape, list, map, tree, graph? Are you using that shape?" },
  { t: "Algorithms and Big-O (the light version)", short: "You don't need the maths. You do need to feel when something will explode at scale.",                                                     deep: "You don't need to derive quicksort from scratch to ship products. You do need a working intuition: if you write a loop inside a loop that both iterate over the same list, the cost grows quadratically, fine on 10 items, broken on 10 million. That intuition is what Big-O notation captures. O(n) means cost grows in line with input size. O(n²) means it grows much faster than that. O(1) means it doesn't grow at all. Most of the time, picking the right data structure (which makes a lookup O(1) instead of O(n)) is more important than picking a clever algorithm.",                                                                                                                                                 status: "settled",  reflect: "Where in your code is a \"just iterate\" loop that would break if the data was 1,000× larger?" },
  { t: "What happens when you type a URL",     short: "DNS → connection → request → response → render. Knowing the rough sequence makes the web debuggable.",                                           deep: "Type a URL, hit enter, and a tiny choreography starts. Your computer asks the internet's address book (DNS) where the site lives. It opens a secure connection (TCP and TLS). It says \"please give me this page\" (HTTP request). The server responds with HTML. The browser reads the HTML, fetches every linked file (CSS, JavaScript, images, fonts), runs the JavaScript, lays out the page, and paints. Knowing this rough sequence is what lets you diagnose a slow website without guessing, is it slow because of network? Server? Too many images? JavaScript running too long? Suddenly the web isn't magic; it's a sequence of steps, each of which you can poke at.",                                                                                                 status: "settled",  reflect: "Pick the slowest website you use. Where in the sequence is it spending its time? Network, server, or render?" },
  { t: "Version control (Git)",          short: "Git tracks every change to your code, so you can experiment without fear.",                                                          deep: "Before Git, programmers emailed each other zip files and lost work constantly. Git records every change as a tiny snapshot, lets you label snapshots (commits), branch off into experiments without breaking the main line, and merge things back together. GitHub and GitLab are the websites where these histories live and collaboration happens. Use it from day one, even on personal projects, even alone. Commit early, commit often, write commit messages your future self will thank you for. \"fix\" as a commit message is fine until you're hunting a bug in code from two months ago, and then it isn't.",                                                                                                                               status: "settled",  reflect: "Do you use Git daily? If you don't yet, that's tonight's hour of learning. Pro Git book is free." },
  { t: "Debugging mindset",            short: "Read the actual error. Reproduce reliably. Change one thing at a time.",                                                           deep: "Most bugs are not exotic. Most bugs are: you misspelled something, you used the wrong variable, you assumed a value was there when it wasn't. The discipline that separates fast debuggers from slow ones is annoyingly small. First, actually read the error message, the whole thing, line by line, not skimmed. Half the time the message says exactly what's wrong. Second, reproduce the bug reliably so you can test fixes. Third, change one thing at a time so you know which change fixed it. Print statements are not embarrassing; \"console.log everywhere\" is what senior engineers do too. The myth that real programmers don't need to debug is just that, a myth.",                                                                                                 status: "framework", reflect: "When did you last spend 30 minutes lost in a bug, only to realise the error message had been telling you the answer the whole time?" },
  { t: "Reading code is more important than writing it", short: "Most of programming, in real jobs, is reading. Reading other people's code, and reading your own from three months ago.",                                deep: "Beginners assume programming is mostly typing. It isn't. In real jobs, most of your time is spent reading existing code, figuring out what someone else did, why they did it, how to safely change it. The skill compounds. The better you get at reading code, the faster you can contribute to a new codebase, the faster you can use libraries, the faster you can borrow good patterns from open source. Even with AI pair-programming taking over a lot of typing, reading critically is now more valuable, not less, somebody has to know whether the generated code is actually right.",                                                                                                                                             status: "framework", reflect: "Pick a small open-source project you use. Open its main file. How much makes sense on a first pass? That gap is the practice." },
  {
   t: "Idempotency",
   subdomain: "mindset",
   definition: "A property where running the same operation once or many times produces the same final result.",
   short: "Press the button five times. Same result as pressing it once.",
   deep: "When networks fail, requests get retried. If your code is not idempotent, a retried payment can charge a customer twice, a retried email can spam them, a retried database write can corrupt state. Idempotent design makes systems safe to retry. The trick is usually to identify each operation with a unique key, like a request ID or transaction ID, and ignore repeats. HTTP methods bake the idea in. GET, PUT, and DELETE are meant to be idempotent. POST is not. The same principle applies to deploy scripts, database migrations, and CLI tools, running them twice should not break anything that worked the first time.",
   generic: "An elevator button. You can mash it ten times in a panic, but the lift still only comes once. That is idempotency in action.",
   expert: "See HTTP RFC 9110 on idempotent methods, the Stripe idempotency-key pattern, and Kreps on exactly-once semantics in distributed systems via deduplication keys.",
   status: "settled",
   reflect: "Pick one script you wrote recently. If you run it twice in a row, does it do something harmful the second time? If yes, that is a bug waiting to bite.",
   conceptQuiz: [
    {
     q: "Which HTTP method is conventionally idempotent?",
     options: [
      { text: "PUT.", correct: true },
      { text: "POST.", misconception: "POST is generally not idempotent. Two POSTs can create two resources." },
      { text: "PATCH always.", misconception: "PATCH is not required to be idempotent, depends on the semantics." },
      { text: "CONNECT.", misconception: "CONNECT establishes a tunnel and is not described as idempotent." }
     ],
     why: "PUT replaces a resource with a given representation. Doing it twice leaves the same final state."
    },
    {
     q: "Best way to make a payment API safe under retries?",
     options: [
      { text: "Require the client to send a unique idempotency key on each logical payment.", correct: true },
      { text: "Trust the network and never retry.", misconception: "Networks fail. You will lose payments." },
      { text: "Always create a new charge for any incoming request.", misconception: "That is exactly the double-charge bug." },
      { text: "Use only GET for payments.", misconception: "GET should not have side effects." }
     ],
     why: "An idempotency key lets the server recognise duplicates and return the original result instead of charging twice."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Find a non-idempotent script", d: "Look at your shell or Python scripts. Pick one that breaks on second run. Describe what goes wrong.", xp: 10 },
    { level: "easy",     t: "Make it idempotent",          d: "Refactor that script so a second run is a no-op. Use existence checks, upserts, or a marker file.", xp: 20 },
    { level: "advanced", t: "Idempotency key endpoint",    d: "Build a small HTTP endpoint that accepts an Idempotency-Key header and returns the cached response on repeats. Test with curl.", xp: 40 }
   ]
  },
  {
   t: "CAP theorem",
   subdomain: "mindset",
   definition: "In a distributed data system that suffers network partitions, you can guarantee either consistency or availability, but not both at the same time.",
   short: "Network breaks. You either answer with maybe-stale data, or you refuse to answer. Pick one.",
   deep: "Eric Brewer's CAP theorem says a distributed system can offer at most two of three properties, consistency (every read sees the latest write), availability (every request gets a response), and partition tolerance (the system keeps working when the network drops messages between nodes). Since real networks always partition eventually, the real choice is between consistency and availability during a partition. Banks usually choose consistency, your ATM would rather say try again than show a stale balance. Social feeds usually choose availability, you see a slightly stale timeline rather than an error. Modern databases let you tune this per request. Knowing which side you are on for each feature is the actual design work.",
   generic: "Imagine two cashiers at opposite ends of a shop and the walkie-talkie between them dies. Either they stop selling until the line is back, or they keep selling and risk overselling. Pick one.",
   expert: "Brewer's CAP conjecture (2000), formalised by Gilbert and Lynch (2002). See also PACELC by Abadi which adds latency vs consistency in the no-partition case, and Kleppmann's Designing Data-Intensive Applications chapter 9.",
   status: "framework",
   reflect: "For the most important data in your current app, which would users prefer during a network glitch, a stale answer or no answer? Have you actually designed for that?",
   conceptQuiz: [
    {
     q: "During a network partition, an AP system will…",
     options: [
      { text: "Keep accepting reads and writes, accepting that some replicas may temporarily disagree.", correct: true },
      { text: "Refuse all requests until the partition heals.", misconception: "That describes a CP system, not AP." },
      { text: "Guarantee every node sees identical data.", misconception: "That is the consistency property, which AP sacrifices during partitions." },
      { text: "Shut down all replicas as a safety measure.", misconception: "Not what AP systems do." }
     ],
     why: "AP systems prioritise availability and partition tolerance, allowing temporary inconsistency."
    },
    {
     q: "Which use case is best suited to a CP design choice?",
     options: [
      { text: "Bank account balances and transfers.", correct: true },
      { text: "A social media like counter.", misconception: "Likes can tolerate brief inconsistency. Availability matters more." },
      { text: "A read-only blog cache.", misconception: "Read-only caches usually prioritise availability." },
      { text: "A real-time chat presence indicator.", misconception: "Presence is fine being slightly stale, availability wins." }
     ],
     why: "Money must not be created or lost during partitions. Better to refuse the transaction than risk inconsistent balances."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Classify three services",   d: "List three apps you use daily. Guess whether each prioritises C or A during network trouble, and why.", xp: 10 },
    { level: "easy",     t: "Read the Jepsen archive",   d: "Pick one database from jepsen.io. Read the summary and note which CAP tradeoff it actually makes under stress.", xp: 20 },
    { level: "advanced", t: "Design a tradeoff doc",     d: "For one feature in your project, write a one-page doc on whether it should be CP or AP, including expected partition behaviour and user impact.", xp: 40 }
   ]
  },
  {
   t: "Caching strategies",
   subdomain: "mindset",
   definition: "Keeping a copy of an expensive-to-fetch result in a faster, closer store so future reads can skip the work, with rules for when to invalidate or refresh it.",
   short: "Remember the answer so you do not have to ask again. Then figure out when the answer goes stale.",
   deep: "Almost every fast system is fast because of caching. The CPU caches RAM. The browser caches images. A CDN caches a website near your city. Redis caches database rows. The challenge is never adding a cache, it is invalidating one. Common patterns include cache-aside, where the app reads from cache and falls back to the database, then writes the result back, write-through, where every write updates cache and database together, and write-behind, where writes hit the cache first and flush to the database asynchronously. Each has different consistency and durability tradeoffs. Time-to-live and explicit invalidation handle staleness. The infamous saying, attributed to Phil Karlton, is that there are only two hard things in computer science, cache invalidation and naming things.",
   generic: "A barista who remembers your usual order. Faster than you reading the menu every time. But if you quietly switched to oat milk last week and never told them, the cache is wrong.",
   expert: "See cache-aside, read-through, write-through, write-behind, and refresh-ahead patterns. TTL plus event-driven invalidation. For hierarchies, see Designing Data-Intensive Applications by Kleppmann and CDN docs from Cloudflare or Fastly.",
   status: "framework",
   reflect: "In your last project, what was the slowest read path, and could a small cache with a sensible TTL have saved the user a second or two?",
   conceptQuiz: [
    {
     q: "Which cache pattern reads from the cache first, falls back to the database, and then populates the cache?",
     options: [
      { text: "Cache-aside, also called lazy loading.", correct: true },
      { text: "Write-through, every write hits cache and database together.", misconception: "Write-through is about writes, not the read fallback path." },
      { text: "Write-behind, writes queue in cache and flush asynchronously.", misconception: "Write-behind is about deferred writes, not reads." },
      { text: "Refresh-ahead, the cache refreshes itself before expiry.", misconception: "Refresh-ahead is proactive, not the on-miss read pattern." }
     ],
     why: "Cache-aside is the classic on-demand pattern, populate the cache only when something is asked for and missed."
    },
    {
     q: "What is usually the hardest part of running a cache in production?",
     options: [
      { text: "Knowing when to invalidate entries so users do not see stale data.", correct: true },
      { text: "Allocating enough memory for the cache.", misconception: "Memory sizing is real but routine compared to invalidation correctness." },
      { text: "Choosing between TCP and UDP for cache traffic.", misconception: "Transport protocol is rarely the hard call." },
      { text: "Picking a cache name.", misconception: "Funny line from the Karlton quote, but not the engineering challenge." }
     ],
     why: "Stale data from bad invalidation causes the worst caching bugs, wrong balances, wrong prices, wrong content."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot caches around you",   d: "List five caches in your daily computing, browser, CDN, OS file cache, app memory, autocomplete. Note the staleness risk in each.", xp: 10 },
    { level: "easy",     t: "Add a cache-aside",        d: "In one of your projects, wrap a slow function with a simple in-memory cache that expires entries after 60 seconds. Measure the speedup.", xp: 20 },
    { level: "advanced", t: "Design an invalidation",   d: "For a feature that mutates data, design an explicit invalidation plan, key naming, event triggers, fallback on cache miss. Document the consistency guarantee you give users.", xp: 40 }
   ]
  },
  {
   t: "ACID vs BASE",
   subdomain: "mindset",
   definition: "Two contrasting consistency philosophies for data systems, ACID guarantees strict, transactional correctness, while BASE accepts temporary inconsistency in exchange for availability and scale.",
   short: "ACID says always correct, even if slow. BASE says always answer, eventually correct.",
   deep: "Classical relational databases offer ACID transactions, atomicity (all or nothing), consistency (constraints hold before and after), isolation (concurrent transactions do not step on each other), durability (committed writes survive crashes). This is what you want for money, inventory, and anything where an inconsistent read costs the business. Many web-scale stores instead offer BASE, basically available, soft state, eventually consistent. You get massive horizontal scale and high availability, at the cost of users sometimes seeing a slightly stale read or two writers briefly disagreeing before convergence. Modern databases blur the line, Postgres can be tuned for replication lag, DynamoDB offers strongly consistent reads on request, Spanner gives global ACID with high cost. The actual job is matching the guarantee to the business risk per feature.",
   generic: "ACID is a bank teller who locks the drawer to count cash precisely before serving anyone else. BASE is a busy coffee shop that takes every order immediately and sorts out the receipts later.",
   expert: "ACID, Haerder and Reuter (1983). BASE, Brewer and the eBay engineering team via Pritchett's 2008 article on BASE. See Kleppmann's Designing Data-Intensive Applications chapters 7 and 9, and Google's Spanner paper for a strong-consistency global system.",
   status: "framework",
   reflect: "For each major write path in your current app, would users be more upset by a refused write or by a temporarily wrong read? Your answer per feature should drive ACID or BASE.",
   conceptQuiz: [
    {
     q: "Which property of ACID guarantees that a partially applied transaction is rolled back fully?",
     options: [
      { text: "Atomicity.", correct: true },
      { text: "Consistency.", misconception: "Consistency is about constraints and rules, not the all-or-nothing rollback itself." },
      { text: "Isolation.", misconception: "Isolation governs concurrent transactions not interfering with each other." },
      { text: "Durability.", misconception: "Durability is about surviving crashes after commit, not rollback semantics." }
     ],
     why: "Atomicity means either every operation in the transaction commits, or none of them do."
    },
    {
     q: "Which workload is the better fit for a BASE-style eventually consistent store?",
     options: [
      { text: "A globally distributed social feed where slight staleness is acceptable.", correct: true },
      { text: "A bank ledger tracking customer balances.", misconception: "Money requires strict consistency, classic ACID territory." },
      { text: "An airline seat reservation system.", misconception: "Double-booking seats is exactly what ACID prevents." },
      { text: "Inventory deduction for a flash sale.", misconception: "Risk of overselling under high concurrency, ACID or careful coordination is safer." }
     ],
     why: "Social feeds tolerate stale reads, and the throughput and availability benefits of BASE outweigh strict consistency."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Pick the right tool",      d: "List three features in any app you use. Decide ACID or BASE for each and write one sentence justifying the choice.", xp: 10 },
    { level: "easy",     t: "Read the BASE essay",      d: "Read Pritchett's BASE article. Summarise the three guarantees and one concrete example where BASE beats ACID.", xp: 20 },
    { level: "advanced", t: "Hybrid design doc",        d: "Sketch a system with both an ACID core, say payments in Postgres, and a BASE periphery, say activity feed in a NoSQL store. Document the data flow and consistency boundary between them.", xp: 40 }
   ]
  },
  {
   t: "Eventual consistency",
   subdomain: "mindset",
   definition: "A consistency model in distributed systems where, if no new writes are made, all replicas will eventually converge to the same value, but reads in between can return stale data.",
   short: "Replicas catch up eventually. Reads in the meantime might lie a little.",
   deep: "Strong consistency feels intuitive: every read returns the latest write. In a globally distributed system, enforcing that means waiting for cross-continent acknowledgements on every read or write, which kills latency and availability. Eventual consistency relaxes the rule: writes propagate asynchronously, and readers may briefly see old values, but the system guarantees convergence once writes stop. DynamoDB, Cassandra, S3, and most large-scale web infrastructure use it. The trick is to design for it. Idempotent operations, monotonic reads, last-writer-wins or CRDTs to merge conflicts, and user interfaces that tolerate the gap, your post showing up a few seconds later in someone else's feed is fine; a bank balance flickering between two values is not. Knowing where on this spectrum a feature lives is half of distributed systems design.",
   generic: "Imagine a group chat where everyone's phone refreshes at slightly different times. Eventually everyone sees the same messages, but for a few seconds you might be looking at different versions. That gap is eventual consistency.",
   expert: "Coined in operational form by Werner Vogels (CTO Amazon) in 2007 and shaped by Brewer's CAP theorem (2000) and the PACELC trade-off. See Dynamo paper (DeCandia et al. 2007), Kleppmann's Designing Data-Intensive Applications chapters 5 and 9, and conflict-free replicated data type (CRDT) research from Shapiro et al. for merge-safe convergence techniques.",
   status: "settled",
   reflect: "Pick one feature in an app you use daily. Is it strongly consistent or eventually consistent, and how would the user experience differ if it switched?",
   conceptQuiz: [
    {
     q: "Eventual consistency guarantees that, given no new writes:",
     options: [
      { text: "All replicas will eventually return the same value.", correct: true },
      { text: "All replicas return the same value within one millisecond.", misconception: "No fixed bound is promised, only eventual convergence." },
      { text: "Reads always reflect the latest write.", misconception: "That is strong consistency, the model being relaxed." },
      { text: "Writes never fail.", misconception: "Failure handling is a separate concern from the consistency model." }
     ],
     why: "Eventual consistency is precisely the convergence guarantee in the absence of new updates."
    },
    {
     q: "Which workload is the worst fit for an eventually consistent store?",
     options: [
      { text: "A bank account ledger where two ATMs may withdraw concurrently.", correct: true },
      { text: "Social media like counts.", misconception: "Stale counts for a few seconds are fine." },
      { text: "A blog comment feed.", misconception: "Comments showing up a moment later is acceptable." },
      { text: "DNS lookups.", misconception: "DNS itself is famously eventually consistent and works fine." }
     ],
     why: "Account balances need linearisability to avoid double spends; eventual consistency invites race conditions there."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Spot the model",          d: "Pick three features in any web app. Tag each as strong, causal, or eventual consistency based on its user-visible behaviour.", xp: 10 },
    { level: "easy",     t: "Read the Dynamo paper",   d: "Skim the Amazon Dynamo paper (2007). Note three techniques used to make eventual consistency safe in practice.", xp: 20 },
    { level: "advanced", t: "Build a CRDT counter",    d: "Implement a small G-counter or PN-counter CRDT in any language. Demonstrate that concurrent increments on two nodes merge correctly.", xp: 40 }
   ],
   diagram: {
    kind: "flow",
    title: "How replicas converge",
    caption: "Writes hit one replica, propagate asynchronously, and converge over time. The window of disagreement is the price of availability.",
    data: {
     steps: ["Client writes to Replica A", "A acks immediately", "A gossips to B and C", "Replicas disagree briefly", "All replicas converge"]
    }
   }
  },
  {
   t: "Big O complexity",
   subdomain: "mindset",
   definition: "Mathematical notation from Bachmann and Landau that describes how the runtime or memory of an algorithm grows as the input size grows toward infinity.",
   short: "How fast does the cost grow if the input doubles, triples, explodes?",
   deep: "Big O ignores constants and low-order terms and asks one question: as input size n grows, what shape does cost take? O(1) is constant regardless of n, a hash map lookup. O(log n) doubles the input but adds only a constant amount of work, binary search. O(n) scales linearly, scan a list. O(n log n) is the cost of good sorts. O(n squared) is two nested loops over the same data, which is fine on 100 items and lethal on 10 million. O(2 to the n) and O(n factorial) are the danger zone. The point is not to memorise notation but to feel, in your fingers, which choices will scale and which will explode. Sibling notations capture different bounds: Big Omega is a lower bound and Big Theta is a tight bound. In interviews and production both, Big O is the lingua franca for comparing algorithms before you ever write code.",
   generic: "Imagine doubling the size of a guest list. Setting one place takes the same time per guest (linear). Introducing every guest to every other guest grows much faster (quadratic). Big O is how engineers describe which kind of party they are throwing.",
   expert: "Bachmann (1894) and Landau (1909) introduced the notation; Knuth's Art of Computer Programming popularised it for algorithms. Formally, f(n) is O(g(n)) if there exist constants c and n_0 such that f(n) is at most c times g(n) for all n at least n_0. See CLRS chapter 3 for asymptotic notation including Omega and Theta, and the master theorem for analysing recursive algorithms.",
   status: "settled",
   reflect: "Pick the slowest loop in code you have written recently. What is its Big O, and what happens to its runtime if the data is a thousand times larger?",
   conceptQuiz: [
    {
     q: "A nested loop that pairs every element of a list of size n with every other element runs in:",
     options: [
      { text: "O(n squared).", correct: true },
      { text: "O(n).", misconception: "A single pass over n elements is linear; pairing all elements is not." },
      { text: "O(log n).", misconception: "Logarithmic growth comes from halving the problem each step, not pairing." },
      { text: "O(1).", misconception: "Constant time means no growth at all." }
     ],
     why: "Pairing every element with every other gives roughly n times n comparisons, hence quadratic growth."
    },
    {
     q: "Why is Big O usually more useful than measuring runtime on one input?",
     options: [
      { text: "It predicts how cost scales as inputs grow, independent of machine and constants.", correct: true },
      { text: "It tells you the exact number of nanoseconds the code takes.", misconception: "Big O ignores constants; absolute wall time depends on hardware." },
      { text: "It removes the need to profile real code.", misconception: "Profiling still matters; Big O is a complementary lens." },
      { text: "It guarantees the algorithm is correct.", misconception: "Complexity says nothing about correctness." }
     ],
     why: "Asymptotic analysis exposes scaling behaviour, which is what breaks systems at production volumes."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Classify three loops",    d: "Open code you wrote this month. Classify three loops as O(1), O(n), or O(n squared). Justify each in one line.", xp: 10 },
    { level: "easy",     t: "Big O cheat sheet",       d: "Build a one-page cheat sheet listing the Big O of common operations on arrays, hash maps, binary search trees, and heaps.", xp: 20 },
    { level: "advanced", t: "Optimise a real path",    d: "Take a slow function in your codebase. Profile it, identify the dominant Big O term, and rewrite it to a strictly better complexity class. Benchmark before and after.", xp: 40 }
   ],
   diagram: {
    kind: "curve",
    title: "Runtime vs input size for common complexity classes",
    caption: "O(1) and O(log n) shrug at scale. O(n squared) is fine on 100 items and lethal on a million. Pick the right shape before you write code.",
    data: {
     x: "Input size n",
     y: "Operations",
     series: [
      { label: "O(n^2)",    points: [[1, 1], [4, 16], [8, 64], [10, 100]] },
      { label: "O(n log n)", points: [[1, 0], [4, 8], [8, 24], [10, 33]] },
      { label: "O(n)",       points: [[1, 1], [4, 4], [8, 8], [10, 10]] },
      { label: "O(log n)",   points: [[1, 0], [4, 2], [8, 3], [10, 3.3]] },
      { label: "O(1)",       points: [[1, 1], [4, 1], [8, 1], [10, 1]] }
     ]
    }
   }
  },
  {
   t: "Distributed consensus",
   subdomain: "mindset",
   definition: "A class of protocols that lets a group of machines agree on a single value or order of events even when some nodes crash or messages are delayed, dropped, or reordered.",
   short: "How a cluster decides on one truth when some members might be lying, late, or dead.",
   deep: "Once you replicate state across multiple machines, you face the consensus problem: which write happened first, who is the current leader, what is the agreed configuration. Naive vote-counting fails because messages can be delayed and nodes can crash mid-vote. Paxos (Leslie Lamport, 1989, published 1998) was the first widely cited correct protocol, famous for being notoriously hard to understand. Raft (Ongaro and Ousterhout, 2014) was designed explicitly to be teachable and underpins etcd, Consul, and CockroachDB. Both tolerate up to f node failures with 2f plus 1 nodes; they elect a leader, replicate a log, and commit entries only when a majority acknowledges. Byzantine fault-tolerant variants like PBFT and HotStuff also handle nodes that lie, which is what blockchains lean on. Consensus is what makes a distributed system feel like a single coherent database to the user.",
   generic: "Imagine a committee scattered across the world by mail. Some letters get lost, some members nap, and they still have to agree on one budget. Consensus protocols are the rulebook that makes that possible.",
   expert: "Paxos (Lamport 1998, Part-Time Parliament; later Paxos Made Simple). Raft (Ongaro and Ousterhout 2014, In Search of an Understandable Consensus Algorithm). The FLP impossibility result (Fischer, Lynch, Paterson 1985) shows that no asynchronous consensus protocol can guarantee progress with even one faulty node; real systems sidestep this with partial synchrony assumptions and timeouts. See Kleppmann's Designing Data-Intensive Applications chapter 9 for a friendly tour.",
   status: "settled",
   reflect: "Which feature of an app you rely on quietly depends on a consensus protocol underneath, and what would the user experience be if that protocol failed to make progress for one minute?",
   conceptQuiz: [
    {
     q: "Raft and Paxos both tolerate up to f failures using how many nodes?",
     options: [
      { text: "2f plus 1.", correct: true },
      { text: "f plus 1.", misconception: "Insufficient to maintain a majority after f failures." },
      { text: "Exactly 3 nodes.", misconception: "3 nodes is a common case for f equals 1, not a general rule." },
      { text: "Any odd number works equally well.", misconception: "Numbers matter, not just parity; 2f plus 1 is the minimum for f failures." }
     ],
     why: "A strict majority of 2f plus 1 nodes guarantees a quorum even after f have failed."
    },
    {
     q: "What does the FLP impossibility result say about consensus?",
     options: [
      { text: "No deterministic protocol can guarantee both safety and progress in a purely asynchronous system with even one faulty node.", correct: true },
      { text: "Consensus is impossible in any system.", misconception: "Real systems with partial synchrony achieve consensus routinely." },
      { text: "Consensus needs no failure assumptions.", misconception: "Every protocol makes explicit assumptions about failures and timing." },
      { text: "Byzantine failures are easier than crash failures.", misconception: "Byzantine failures are strictly harder, requiring 3f plus 1 nodes." }
     ],
     why: "FLP (1985) rules out a fully asynchronous deterministic solution; practical protocols add timeouts to make progress probabilistically."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Read Raft visualisation", d: "Spend 20 minutes with the Raft interactive visualisation at thesecretlivesofdata.com. Note how leader election and log replication actually look.", xp: 10 },
    { level: "easy",     t: "Compare Paxos and Raft",  d: "Write a one-page comparison of Paxos and Raft on leader election, log replication, and pedagogical clarity. Cite one production system using each.", xp: 20 },
    { level: "advanced", t: "Run an etcd cluster",     d: "Spin up a 3-node etcd or CockroachDB cluster locally. Kill one node, observe leader election, and confirm reads and writes continue. Document the latency hit.", xp: 40 }
   ]
  },
  {
   t: "REST vs GraphQL",
   subdomain: "mindset",
   definition: "REST exposes resources at fixed URLs with HTTP verbs, while GraphQL exposes a single endpoint where clients query the exact shape of data they want.",
   short: "REST is a menu of dishes. GraphQL is a kitchen where you order the exact plate.",
   deep: "REST, popularised by Roy Fielding in his 2000 dissertation, structures an API around resources and standard HTTP verbs. Each resource has a URL, and operations are GET, POST, PUT, PATCH, DELETE. GraphQL, released by Facebook in 2015, takes a different approach. There is one POST endpoint and the client sends a query describing exactly which fields it wants from a typed schema. REST is simple to cache at HTTP layer, plays well with CDN, and is friendly to curl. GraphQL prevents over fetching and under fetching, useful when a mobile client wants only three fields of a deeply nested object. The trade is complexity, you need a schema, resolvers, and care with N+1 queries. Most large products end up with a mix, REST for public APIs and webhook receivers, GraphQL for product clients with rich UIs.",
   generic: "If you order from a fixed menu, the kitchen prepares one of a few set plates. If you walk into the kitchen and ask for two specific items, you get exactly that. Same food source, different ordering style.",
   expert: "Roy Fielding, Architectural Styles and the Design of Network based Software Architectures, 2000. GraphQL spec at graphql.org. See also Facebook's 2015 announcement and the DataLoader pattern for N+1 mitigation.",
   status: "framework",
   reflect: "Look at one mobile app you use daily. Would its data needs be better served by REST or by GraphQL? Why?",
   conceptQuiz: [
    {
     q: "A major advantage of GraphQL over REST is…",
     options: [
      { text: "Clients can request exactly the fields they need in one round trip.", correct: true },
      { text: "It is always faster than REST.", misconception: "Latency depends on resolver quality and caching, not the protocol." },
      { text: "It removes the need for authentication.", misconception: "GraphQL still needs auth." },
      { text: "It does not need a schema.", misconception: "A typed schema is central to GraphQL." }
     ],
     why: "Field selection avoids over fetching and under fetching on a single round trip."
    },
    {
     q: "Which is generally easier with REST than with GraphQL out of the box?",
     options: [
      { text: "HTTP layer caching using URLs and verbs.", correct: true },
      { text: "Avoiding the N+1 query problem.", misconception: "REST has its own N+1 issues; this is not its strength." },
      { text: "Selecting deeply nested partial responses.", misconception: "GraphQL excels here." },
      { text: "Schema introspection.", misconception: "Introspection is a GraphQL feature." }
     ],
     why: "GET requests with stable URLs cache naturally on CDNs and proxies."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Compare two endpoints", d: "Pick any public API. Write the same query as a REST call and as a GraphQL query. Compare payload sizes.", xp: 10 },
    { level: "easy",     t: "Build a tiny GraphQL", d: "Stand up a small GraphQL server with two types and three resolvers using Apollo or graphql-yoga.", xp: 20 },
    { level: "advanced", t: "Fight the N+1",        d: "Profile a GraphQL resolver suffering from N+1 queries. Add DataLoader and measure the latency improvement.", xp: 40 }
   ]
  },
  {
   t: "OAuth 2.0 authorisation flows",
   subdomain: "mindset",
   definition: "OAuth 2.0 is a delegated authorisation framework that lets a user grant a third party application limited access to a resource without sharing their password.",
   short: "Sign in with Google works because of OAuth 2.0 redirect flows and scopes.",
   deep: "OAuth 2.0, defined in RFC 6749 in 2012, separates the resource owner, client, authorisation server, and resource server. The most common flow today is Authorisation Code with PKCE, where the user is sent to the provider, logs in, approves scopes, and the app gets an authorisation code that it exchanges for an access token at the back channel. Older flows like Implicit and Resource Owner Password Credentials are deprecated because they leaked tokens or required the user to share passwords. For machine-to-machine work, the Client Credentials flow is used. Tokens are short lived and refreshed via a refresh token. Scopes describe what the token can do, like email read or files write. OAuth 2.0 is authorisation, not authentication. OpenID Connect adds an ID token on top to make authentication first class.",
   generic: "If a guest at your hotel needs the laundry brought up, you give the laundry guy a temporary card that opens only that one door, not your room key. OAuth tokens are that temporary card.",
   expert: "RFC 6749 OAuth 2.0, RFC 7636 PKCE, RFC 6750 Bearer Tokens. OAuth 2.1 draft consolidates current best practice. OpenID Connect Core 1.0 specification.",
   status: "debated",
   reflect: "When you last clicked sign in with Google, which scopes did the app ask for, and would you grant them again today?",
   conceptQuiz: [
    {
     q: "Which OAuth 2.0 flow is recommended today for a public mobile or single page app?",
     options: [
      { text: "Authorisation Code with PKCE.", correct: true },
      { text: "Implicit flow.", misconception: "Deprecated due to token leakage." },
      { text: "Resource Owner Password Credentials.", misconception: "Requires the user's password and is deprecated." },
      { text: "Client Credentials.", misconception: "For machine to machine only, no user." }
     ],
     why: "PKCE protects the code exchange in public clients where there is no client secret."
    },
    {
     q: "OAuth 2.0 is fundamentally about…",
     options: [
      { text: "Delegated authorisation, with authentication added by OpenID Connect.", correct: true },
      { text: "Authentication only.", misconception: "OAuth 2.0 alone does not assert who the user is." },
      { text: "Encryption of message payloads.", misconception: "TLS handles transport encryption." },
      { text: "Database access control.", misconception: "Out of scope for OAuth 2.0." }
     ],
     why: "OAuth 2.0 authorises actions; OIDC layers authentication on top."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Read a token",        d: "Sign into a small app with Google. Decode the ID token at jwt.io and identify the claims.", xp: 10 },
    { level: "easy",     t: "Implement PKCE",      d: "Build a single page app that performs Authorisation Code with PKCE against a public IdP like Auth0 or Keycloak.", xp: 20 },
    { level: "advanced", t: "Threat model",        d: "Threat model an OAuth 2.0 implementation for three risks, token theft, redirect URI hijack, and refresh token replay. Propose mitigations.", xp: 40 }
   ]
  },
  {
   t: "JWT basics and common pitfalls",
   subdomain: "mindset",
   definition: "JSON Web Tokens are compact signed claims, encoded as three base64url segments separated by dots, used to assert identity or authorisation across services.",
   short: "A JWT is a tamper evident slip of paper. Signed, not encrypted by default.",
   deep: "A JWT, defined in RFC 7519, has three parts. Header, payload, and signature. The header says which algorithm signs the token, like HS256 or RS256. The payload is a JSON object of claims, like sub, iss, exp, and any custom claim. The signature is computed over the first two parts with a secret or private key. Verifying a JWT means recomputing the signature and checking standard claims like expiry and issuer. JWTs are not encrypted by default, anyone with the token can read the payload by base64 decoding it. Common pitfalls include accepting the none algorithm, mixing HS256 and RS256 verification keys, storing tokens in localStorage with poor XSS hygiene, and forgetting that revocation is non trivial because JWTs are stateless. Short expiry plus refresh tokens are the usual pragmatic answer.",
   generic: "A movie ticket is a JWT. Anyone can read the seat number on it, but the perforation and stamp prove it came from the box office. Lose it, and whoever picks it up can use it.",
   expert: "RFC 7519 JWT, RFC 7515 JWS, RFC 7517 JWK. See OWASP JWT for Java cheatsheet and the 2015 alg=none vulnerability writeup by Tim McLean.",
   status: "debated",
   reflect: "If your application stores its JWT in localStorage, what would an attacker who runs script in your origin be able to do for the next 30 minutes?",
   conceptQuiz: [
    {
     q: "By default, a JWT is…",
     options: [
      { text: "Signed but not encrypted, so the payload is readable to anyone holding the token.", correct: true },
      { text: "Encrypted by default with AES.", misconception: "Encryption requires JWE, not JWS." },
      { text: "Stored on the server, never on the client.", misconception: "JWTs are typically sent to clients." },
      { text: "Useless without a database lookup.", misconception: "Statelessness is a core JWT property." }
     ],
     why: "JWS protects integrity, not confidentiality. Use JWE for encryption."
    },
    {
     q: "Which is a well known JWT security pitfall?",
     options: [
      { text: "Accepting tokens signed with alg=none.", correct: true },
      { text: "Using HTTPS for transport.", misconception: "Recommended, not a pitfall." },
      { text: "Verifying the exp claim.", misconception: "Required, not a pitfall." },
      { text: "Limiting custom claims.", misconception: "Reduces surface; not a pitfall." }
     ],
     why: "alg=none lets unsigned tokens pass verification on poorly implemented servers."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Decode a token",      d: "Take a sample JWT and decode each segment manually. Identify the algorithm, claims, and signature length.", xp: 10 },
    { level: "easy",     t: "Implement issuance",  d: "Write a Node or Python service that issues an HS256 JWT with 15 minute expiry and verifies it on a protected route.", xp: 20 },
    { level: "advanced", t: "Build revocation",    d: "Design a revocation strategy for short lived JWTs and longer lived refresh tokens. Include rotation and replay defence.", xp: 40 }
   ]
  },
  {
   t: "Public-key cryptography",
   subdomain: "mindset",
   definition: "Cryptosystems that use a mathematically linked key pair, a public key for encryption or verification and a private key for decryption or signing.",
   short: "Two keys. Share one, hide one. Magic on top.",
   deep: "Public-key cryptography solved the problem of agreeing on a shared secret over an untrusted channel. Diffie and Hellman published the idea in 1976. RSA followed in 1977 using factoring of large semiprimes. Elliptic curve cryptography, standardised in the 1990s, gives the same security at much smaller key sizes, an ECC 256 bit key is roughly as strong as an RSA 3072 bit key. Every TLS handshake uses public-key crypto to negotiate a session key, which is then used by symmetric ciphers like AES for bulk data. Signatures, like ECDSA or Ed25519, let anyone verify that a message came from the holder of the private key. Quantum computing threatens current public-key systems through Shor's algorithm, so post-quantum schemes like Kyber and Dilithium were standardised by NIST in 2024.",
   generic: "Imagine a padlock you can leave open on a noticeboard. Anyone can put a message inside a box and snap the padlock shut, but only you, who keeps the key at home, can open it.",
   expert: "Diffie and Hellman, New Directions in Cryptography, 1976. Rivest, Shamir, Adleman, 1977. NIST FIPS 203 for Kyber and FIPS 204 for Dilithium, 2024. See Schneier, Applied Cryptography, chapter 19.",
   status: "debated",
   reflect: "Pick one website you used today. Can you identify which key exchange and signature algorithms its TLS handshake used?",
   conceptQuiz: [
    {
     q: "A 256 bit ECC key offers security roughly equivalent to which RSA key size?",
     options: [
      { text: "About 3072 bits.", correct: true },
      { text: "About 256 bits.", misconception: "ECC is far stronger per bit than RSA." },
      { text: "About 512 bits.", misconception: "Underestimates ECC strength." },
      { text: "About 8192 bits.", misconception: "Overstates the gap." }
     ],
     why: "ECC needs much smaller keys than RSA for similar classical security."
    },
    {
     q: "Why does TLS use both public-key and symmetric cryptography?",
     options: [
      { text: "Public-key sets up a shared session key efficiently used by faster symmetric ciphers.", correct: true },
      { text: "Symmetric ciphers are required by law.", misconception: "Not a legal but a performance reason." },
      { text: "Public-key cannot encrypt any data.", misconception: "It can, but it is slow for bulk data." },
      { text: "Symmetric ciphers are needed for authentication.", misconception: "Authentication uses signatures, which are public-key." }
     ],
     why: "Public-key is slow per byte. Symmetric ciphers handle bulk data far faster."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Generate a key pair", d: "Use openssl to generate an Ed25519 key pair. Sign a small file and verify the signature.", xp: 10 },
    { level: "easy",     t: "TLS handshake trace", d: "Capture a TLS 1.3 handshake with Wireshark. Identify the key exchange and signature algorithms used.", xp: 20 },
    { level: "advanced", t: "Try post-quantum",    d: "Install a library with Kyber and Dilithium. Benchmark them against RSA and ECDSA for handshake latency and key size.", xp: 40 }
   ]
  },
  {
   t: "Rate limiting strategies",
   subdomain: "mindset",
   definition: "Techniques to cap the rate of requests a client or system can make in a given time window, protecting backends from overload and abuse.",
   short: "Bouncers for your API.",
   deep: "Rate limiting protects services from accidental and malicious traffic spikes. The four classic algorithms are fixed window, sliding window log, sliding window counter, and token bucket. Fixed window counts requests per minute but allows bursts at boundary crossings. Sliding window log keeps a per request timestamp and is exact but memory hungry. Sliding window counter approximates with a weighted blend of the current and previous fixed windows. Token bucket allows bursts up to bucket capacity while enforcing an average rate over time, ideal for APIs. Distributed rate limiting needs a shared store, typically Redis with INCR plus expiry or a Lua script. Common policies include per IP, per user, per route, and global. Responses use status 429 with Retry-After header. Done well, rate limiting also doubles as cost control for paid downstream APIs.",
   generic: "A water bottling plant runs at a steady speed even if a giant truck shows up. The conveyor belt is the bucket, the bottling rate is the token refill, the buffer is what saves you on busy days.",
   expert: "RFC 6585 HTTP 429. Stripe's engineering blog on token bucket for APIs. Cloudflare's writeup on counting in Redis. See also Tanenbaum and Wetherall, Computer Networks, chapter 5 on queueing.",
   status: "framework",
   reflect: "Pick the noisiest endpoint of any app you maintain. Which algorithm and dimension, per IP or per user, would best protect it without hurting honest users?",
   conceptQuiz: [
    {
     q: "Which algorithm naturally supports short bursts up to a configured capacity and a steady average rate?",
     options: [
      { text: "Token bucket.", correct: true },
      { text: "Fixed window counter.", misconception: "It limits per window, not steady rate plus burst." },
      { text: "Leaky bucket without overflow.", misconception: "Pure leaky bucket smooths out bursts, not what the question asks." },
      { text: "Random rejection only.", misconception: "Used in admission control, not rate limiting in this sense." }
     ],
     why: "Token bucket fills steadily and lets requests consume tokens, allowing bursts."
    },
    {
     q: "Which HTTP status code is standard for rate limited responses?",
     options: [
      { text: "429 Too Many Requests.", correct: true },
      { text: "403 Forbidden.", misconception: "Forbidden is about authorisation, not rate." },
      { text: "503 Service Unavailable.", misconception: "Used for outages, not throttling." },
      { text: "418 I'm a teapot.", misconception: "Not used for rate limiting." }
     ],
     why: "RFC 6585 specifies 429 Too Many Requests for this case."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Pick the bucket",       d: "Sketch a token bucket on paper with capacity 10 and refill 1 per second. Trace 30 seconds of mixed traffic.", xp: 10 },
    { level: "easy",     t: "Redis sliding window",  d: "Implement a sliding window counter in Redis using INCR and EXPIRE. Add 429 responses on overage.", xp: 20 },
    { level: "advanced", t: "Distributed token",     d: "Implement a distributed token bucket across three nodes with shared Redis and an atomic Lua script. Benchmark fairness under spike load.", xp: 40 }
   ]
  },
  {
   t: "Containerisation with Docker",
   subdomain: "mindset",
   definition: "A way to package an application and its dependencies into a portable image that runs in an isolated process called a container.",
   short: "Ship the kitchen with the meal so it tastes the same everywhere.",
   deep: "Containers use Linux kernel features, namespaces for isolation and cgroups for resource limits, to run processes that look like they have their own filesystem, network, and PID space. Docker, released in 2013, made these features easy with a layered image format. A Dockerfile is a script that builds an image step by step. Each step creates a layer cached for the next build. Images are pushed to a registry like Docker Hub or ECR. Containers start in seconds, are immutable, and run identically from a developer laptop to production. The big shift from virtual machines is that containers share the host kernel, so they are far lighter, megabytes not gigabytes. Good practice includes pinning base image versions, using multi stage builds to shrink final images, scanning for CVEs, and never running as root in the container.",
   generic: "A shipping container made global trade possible because the box has a standard size and any port can handle it. Software containers play the same role for code.",
   expert: "Docker overview at docs.docker.com. See cgroups and namespaces in the Linux kernel documentation. OCI image spec at github.com/opencontainers. See also Liz Rice, Container Security 2020.",
   status: "settled",
   reflect: "Look at the last image you pulled. How many layers, how big, and how much of it is base operating system you do not need?",
   conceptQuiz: [
    {
     q: "Which Linux kernel features primarily make container isolation possible?",
     options: [
      { text: "Namespaces and cgroups.", correct: true },
      { text: "iptables alone.", misconception: "Networking only, not isolation." },
      { text: "Systemd units alone.", misconception: "Not the isolation mechanism." },
      { text: "ext4 file system.", misconception: "A storage technology, not isolation." }
     ],
     why: "Namespaces isolate views of system resources, cgroups limit them."
    },
    {
     q: "A key advantage of containers over traditional virtual machines is…",
     options: [
      { text: "They share the host kernel and start in seconds with low overhead.", correct: true },
      { text: "They provide stronger isolation than VMs in every case.", misconception: "VMs typically have stronger isolation boundaries." },
      { text: "They do not need a base image.", misconception: "Containers are based on images." },
      { text: "They cannot be orchestrated.", misconception: "Kubernetes does exactly this." }
     ],
     why: "Sharing the kernel cuts the overhead of a full guest operating system."
    }
   ],
   conceptTasks: [
    { level: "basic",    t: "Hello container",       d: "Write a Dockerfile for a tiny Python or Node app. Build and run it locally.", xp: 10 },
    { level: "easy",     t: "Multi stage build",     d: "Refactor a build to a multi stage Dockerfile. Measure the size reduction in the final image.", xp: 20 },
    { level: "advanced", t: "Harden an image",       d: "Take a production image and harden it. Use a minimal base, scan with Trivy, drop capabilities, and run as a non root user.", xp: 40 }
   ]
  }
 ],

 counterView: "There's a popular framing that 'everyone should learn to code.' Take it seriously, then push back: programming is a discipline of patient debugging that not everyone enjoys, and there are many high-value skills that aren't programming. The 'learn-to-code-and-be-rich' bootcamp pipeline understates how much continuous learning the job takes. Also: post-AI-pair-programming, the value of typing syntax has fallen and the value of system design, debugging, and judgment has risen, bootcamps that haven't updated for that are training for shrinking work. And the 'self-taught' romanticism understates how lonely + inefficient pure-from-scratch learning is.",

 capabilities: [
  "Write a script that does one useful thing for you.",
  "Read an error message and bisect to find the cause.",
  "Use Git for version control (clone, commit, branch, merge).",
  "Pick the right data structure for a simple problem.",
  "Reason about why a web page is slow without guessing."
 ],
 cheatsheet: [
  "Pick one friendly language (Python or JS). Burn the basics in.",
  "Functions: one job each. If a function does two things, split it.",
  "Right data structure beats clever algorithm most of the time.",
  "Read errors. Reproduce reliably. Change one thing at a time.",
  "Git daily. Commit often. Write messages your future-self can read.",
  "Reading code > writing code."
 ],

 roadmap: [
  { rank: "Novice",    focus: "Pick one friendly language and build tiny things",    do: "Install Python or Node.js. Write \"Hello World.\" Then build five very small scripts that do real things in your life, rename a folder of photos, send a daily email, scrape one page. The point isn't the script. The point is feeling the muscle of \"problem → tiny code → it ran.\"",                                                 milestone: "You can write loops, functions, and basic file operations without looking each one up.",                                     time: "~1 month" },
  { rank: "Apprentice",  focus: "Ship one real thing other humans touch",          do: "Build one small real app, a personal tool, a tiny website, a script you share with a friend. Make it work end-to-end. Shipping is the skill that beginners undervalue and seniors revere.",                                                                                             milestone: "You've shipped one thing that at least one human other than you actually uses.",                                         time: "~2-3 months" },
  { rank: "Practitioner", focus: "Learn the foundations properly",              do: "Now go back and learn data structures, basic algorithms, version control (Git daily), and how to work with APIs. You'll suddenly understand why your earlier code felt clumsy.",                                                                                                 milestone: "You can pick the right tool for most small problems without flailing.",                                              time: "~3-6 months" },
  { rank: "Specialist",  focus: "Pick a stack and go deep",                 do: "Tech is huge. Pick one corner, web, mobile, data, DevOps, AI tooling, and go deep enough to ship in production. Build a portfolio of two or three real projects.",                                                                                                         milestone: "Your code is in production somewhere. It survives users without your hand-holding.",                                       time: "~6-12 months" },
  { rank: "Expert",    focus: "System design and scale",                  do: "Move past code-as-isolated-files to code-as-system. Understand caching, queues, databases under load, reliability, observability. Read the kind of book whose name has 'distributed' in it.",                                                                                             milestone: "You can scope and ship a non-trivial system that holds up under real traffic.",                                          time: "~1-2 years" },
  { rank: "Master",    focus: "Lead, architect, mentor",                  do: "Stop being the person who writes the most code. Become the person who shapes the codebase, mentors others, and designs the systems that outlive everyone's current project.",                                                                                                     milestone: "Your designs are still working three years later, after three team handovers.",                                          time: "~3-5 years+" },
  { rank: "Grandmaster", focus: "Shape how the craft is practised",             do: "Maintain meaningful open source. Write or speak about what you've learned. Influence how the next generation of engineers thinks about the work.",                                                                                                                  milestone: "Other engineers cite your code or your writing as part of how they learned.",                                            time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "CS50, Harvard (edX free audit)",        what: "The single best intro CS course.",                     url: "https://cs50.harvard.edu/x/",                     weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "MDN Web Docs",                  what: "The authoritative web platform reference. Free, deep, well-written.",    url: "https://developer.mozilla.org/",                    weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Python, official tutorial",           what: "Best free intro to Python from the source.",                url: "https://docs.python.org/3/tutorial/",                  weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Pro Git book (free)",              what: "Comprehensive Git, free, by Scott Chacon.",                 url: "https://git-scm.com/book/en/v2",                    weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "freeCodeCamp",                  what: "Free interactive curricula on web, JS, Python, data.",           url: "https://www.freecodecamp.org/",                     weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "The Odin Project",                what: "Free, opinionated full-stack web curriculum.",               url: "https://www.theodinproject.com/",                   verify: false, lastVerified: "2026-06" },
   { name: "Stack Overflow",                 what: "Q&A site. Read questions like a textbook.",                 url: "https://stackoverflow.com/",                      verify: false, lastVerified: "2026-06" },
   { name: "GitHub",                     what: "Where most modern open source lives. Browse + clone freely.",        url: "https://github.com/",                         verify: false, lastVerified: "2026-06" },
   { name: "Roadmap.sh (developer roadmaps)",         what: "Visual roadmaps for frontend, backend, devops, AI, etc.",         url: "https://roadmap.sh/",                         verify: false, lastVerified: "2026-06" },
   { name: "Real Python (free articles)",          what: "High-quality Python tutorials and references.",               url: "https://realpython.com/",                       verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Pragmatic Programmer, Hunt & Thomas",    what: "Best general 'become a better engineer' read.",               url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/", price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "Designing Data-Intensive Applications, Kleppmann", what: "The modern systems classic.",                       url: "https://dataintensive.net/",                     price: "verify", weight: "primary", verify: false, lastVerified: "2026-06" },
   { name: "A Philosophy of Software Design, John Ousterhout", what: "Slim and excellent on managing complexity.",               url: "https://web.stanford.edu/~ouster/cgi-bin/aposd.php",          price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Code Complete, Steve McConnell",         what: "Encyclopaedic engineering craft book.",                  url: "https://www.microsoftpressstore.com/store/code-complete-9780735619678", price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Refactoring, Martin Fowler",           what: "Disciplined improvement of existing code.",                 url: "https://martinfowler.com/books/refactoring.html",            price: "verify", weight: "secondary", verify: false, lastVerified: "2026-06" },
   { name: "Clean Code, Robert C. Martin",          what: "Influential, opinionated; read with critique in mind.",          url: "",                                    price: "verify", weight: "popular", verify: true, lastVerified: "2026-06" },
   { name: "The Mythical Man-Month, Brooks",         what: "Why adding people to late projects makes them later.",           url: "https://en.wikipedia.org/wiki/The_Mythical_Man-Month",          price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Cracking the Coding Interview, McDowell",    what: "Standard prep book for tech interviews.",                 url: "https://www.crackingthecodinginterview.com/",              price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Computer Systems: A Programmer's Perspective",  what: "Bryant & O'Hallaron, under-the-hood systems text.",            url: "https://csapp.cs.cmu.edu/",                      price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Eloquent JavaScript, Marijn Haverbeke",      what: "Excellent JS book; free online + paid print.",               url: "https://eloquentjavascript.net/",                    price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Pick a language", d: "Install Python or Node.js. Run your first 'Hello World'. Then a script that prints today's date.", xp: 20 },
  { t: "5 tiny scripts", d: "Build 5 small scripts that do one useful thing in your life. List them.", xp: 60 },
  { t: "Git on day 1", d: "Initialise a Git repo for one of your projects. Commit with real messages. Push to GitHub.", xp: 40 },
  { t: "Read an error properly", d: "Next time something errors, copy the full message, read it line by line, and find the actual cause before searching.", xp: 30 },
  { t: "Read someone else's code", d: "Pick a small open-source project you use. Read its main file. Note 3 things you didn't know.", xp: 40 }
 ],
 capstone: { t: "Ship one real thing", d: "Build and deploy one real thing that someone other than you uses, a personal tool, a website, a script that helps a friend. Write a 1-page lessons-learned.", xp: 200 },

 quiz: [
  { q: "What's the right first language for most beginners?", options: [
   { text: "C, closest to the machine.", misconception: "Powerful and educational eventually; brutal as a first language." },
   { text: "Python or JavaScript, friendly syntax, massive ecosystems.", correct: true },
   { text: "Assembly, start at the bottom.", misconception: "Pedagogically masochistic in 2026." },
   { text: "Haskell, train good habits.", misconception: "Educational, but the learning curve discourages most." }
  ], why: "Python and JS have friendly syntax, huge ecosystems, and let you ship real things fast.", testOut: true },
  { q: "You write a function that loops over a list and, inside, loops over the same list again. Roughly what scaling?", options: [
   { text: "Linear, O(n).", misconception: "Single loop is linear; nested is one order higher." },
   { text: "Quadratic, O(n²).", correct: true },
   { text: "Constant, O(1).", misconception: "Constant means independent of n; loops aren't." },
   { text: "Logarithmic, O(log n).", misconception: "Log requires halving each step, like binary search." }
  ], why: "Nested loops over the same input → O(n²). Fine at small n; breaks at large n." },
  { q: "Best first move when something breaks?", options: [
   { text: "Search the error message before reading it.", misconception: "You'll miss the cause and waste time. Read first." },
   { text: "Read the full error, then make a minimal reproducer.", correct: true },
   { text: "Start refactoring nearby code.", misconception: "Now you're debugging two problems instead of one." },
   { text: "Restart your computer.", misconception: "Sometimes works; doesn't teach you the cause." }
  ], why: "Read errors. Reproduce reliably. Change one thing at a time." },
  { q: "Why use version control (Git)?", options: [
   { text: "It backs up your code automatically.", misconception: "Backup is incidental; the real value is history + branching." },
   { text: "Track history, collaborate, experiment safely with branches.", correct: true },
   { text: "Required to use any language.", misconception: "You can program without Git; you just shouldn't." },
   { text: "Faster runtime.", misconception: "Git has no effect on runtime." }
  ], why: "Git's value: track every change, branch fearlessly, collaborate without overwriting each other." },
  { q: "What's the single biggest critique of 'everyone should learn to code'?", options: [
   { text: "Programming is hard for some people and not everyone enjoys patient debugging.", correct: true },
   { text: "Bootcamps are too cheap.", misconception: "Wrong direction; many are over-priced." },
   { text: "AI does it all now.", misconception: "Reading + judgment matter more after AI, not less." },
   { text: "Only PhDs should code.", misconception: "Strawman; lots of non-PhDs are excellent engineers." }
  ], why: "Like any craft, programming rewards a specific temperament. It's a great skill, not a one-size-fits-all path." }
 ],

 flashcards: [
  { front: "First-language pick?", back: "Python or JavaScript. Friendly syntax, massive ecosystems, real things you can ship." },
  { front: "Function discipline?", back: "One function, one job. If a function does two things, split it." },
  { front: "Big-O of a nested loop over the same list?", back: "O(n²), quadratic. Fine at small n; breaks at large n." },
  { front: "Web request rough sequence?", back: "DNS → TCP/TLS → HTTP request → server response → client render." },
  { front: "Why Git?", back: "Track history, collaborate, branch fearlessly. The standard." },
  { front: "First move when stuck?", back: "Read the actual error. Reproduce reliably. Change one thing at a time." },
  { front: "Most underrated skill?", back: "Reading code, including your own from 3 months ago." },
  { front: "Right data structure intuition?", back: "Lists for order, hash maps for fast lookup, trees for hierarchy, graphs for relationships." }
 ],
 glossary: [
  { term: "Variable", def: "A named place to store a value." },
  { term: "Function", def: "A named block of reusable code." },
  { term: "Big-O", def: "How cost grows with input size." },
  { term: "API", def: "Application Programming Interface, a contract for using a service." },
  { term: "Git", def: "Distributed version control system; the standard." },
  { term: "Commit", def: "A snapshot of your code at a moment in time, with a message." },
  { term: "Branch", def: "A separate line of development you can merge later." },
  { term: "Refactor", def: "Improving code structure without changing behaviour." },
  { term: "Idempotency", def: "Operation that yields the same result whether called once or many times." },
  { term: "ACID", def: "Atomicity, Consistency, Isolation, Durability, guarantees for reliable database transactions." },
  { term: "Race condition", def: "Bug where outcome depends on unpredictable timing of concurrent operations." }
 ]
};

export default d;
