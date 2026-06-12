import type { Domain } from "@/lib/types";

const d: Domain = {
  id: "tech",
  icon: "💻",
  hue: "#38bdf8",
  category: "Tech & Future",
  name: "Tech & Programming",
  tagline: "Speak to machines, build things",

  basics: "Programming is the strange art of writing instructions so precise that a machine — which has no common sense at all — can follow them and produce something useful. The syntax (the punctuation and grammar of any specific language) you can learn in a few weeks. The actual job is harder and slower: breaking fuzzy real-world problems into precise small steps, reading other people's code without your eyes glazing over, and shipping things that don't fall apart when a real user touches them. The good news — those underlying skills don't expire. Languages come and go, but knowing how to think like a programmer is a lifetime tool.",
  whyItMatters: [
    "Massive leverage. One person who codes can build things that used to need a team of ten.",
    "Modern jobs across every industry now expect you to read APIs, configs, and logs without panicking. Hiding from tech is no longer free.",
    "You can tell a good technical decision from a bad one even if you aren't an engineer full-time — which makes you better at almost any role.",
    "You can automate the boring parts of your own life. That alone is worth the price of admission."
  ],
  realWorldExample: "Type a URL into your browser and hit enter. In the next 200 milliseconds, your computer asks the internet's address book where this site lives (DNS lookup). It opens a secure phone line to that address (TCP and TLS). It says \"please send me the page\" (HTTP request). The server replies with a heap of HTML, which links to more files — fonts, images, JavaScript. Your browser fetches each, runs the JavaScript, paints the result, and you see something. Knowing the rough shape of this — not the wire-level detail — turns \"the internet is magic\" into \"this page is slow because the server's slow,\" or \"this site is loading too many images.\" Suddenly you can debug things the rest of the office can't.",

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
    { concept: "Tokens / compute / model", linksTo: "ai_ml", note: "The systems thinking transfers — APIs, latency, compute budgets all show up." }
  ],

  concepts: [
    { t: "Variables, types, control flow", short: "Storage + decisions + loops.", deep: "Every language has names that hold values, conditionals (if/else), and ways to repeat (for/while). Pick a friendly first language (Python, JavaScript) and burn the basics in. Syntax is the cheap part; learning to think in steps is the work.", status: "settled", reflect: "Could you write a 10-line script today that did one useful thing for you? If not, that's the first project." },
    { t: "Functions + composition", short: "Name a thing once, call it many times.", deep: "Functions let you build bigger systems from smaller, named building blocks. The discipline of 'one function, one job' is most of what separates readable code from a tangle.", status: "settled", reflect: "Open code you wrote 6 months ago. Could you read it? What would you change?" },
    { t: "Data structures", short: "Right shape, right job.", deep: "Lists for ordering, hash maps for fast lookup, trees for hierarchy, graphs for relationships. You don't need to memorise; you do need to know what's good at what.", status: "settled", reflect: "Pick a problem you're solving. What data structure naturally fits it?" },
    { t: "Algorithms + Big-O (light)", short: "How does it scale?", deep: "You don't need to derive quicksort to ship products; you do need to know that nested loops over data scale badly and that the right data structure often beats a clever algorithm. Big-O notation describes how cost grows with input size.", status: "settled", reflect: "Where in your work is a 'just iterate' that would break at 10× the input?" },
    { t: "The shape of the web request", short: "Client → DNS → server → response → render.", deep: "Knowing the rough sequence of a request is what lets you debug latency, design APIs, and reason about security. Most 'magic' on the web is a particular step in this sequence.", status: "settled", reflect: "Where does your favourite slow site spend its time? Network? Server? Render?" },
    { t: "Version control (Git)", short: "Track history; collaborate without fear.", deep: "Git is the standard. Commit early, commit often, write commit messages your future-self can read. Branches let you experiment without breaking the main line. GitHub/GitLab are where the code lives.", status: "settled", reflect: "Do you use Git daily? If not, that's the next habit." },
    { t: "Debugging mindset", short: "Find the smallest reproducer. Read the error.", deep: "Most bugs are between the keyboard and the screen. The discipline: reproduce reliably, read the actual error message (don't skim), bisect the problem, change one thing at a time. Print statements are not embarrassing.", status: "framework", reflect: "When did you last waste 30 minutes by not reading the actual error message?" },
    { t: "Reading code > writing code", short: "Most of programming is reading.", deep: "The skill that compounds: reading other people's code, including your own from 3 months ago. Modern AI pair-programming has not changed this — if anything, it's raised the value of reading critically.", status: "framework", reflect: "Pick an open-source project you use. Read the main file. How much makes sense?" }
  ],

  counterView: "There's a popular framing that 'everyone should learn to code.' Take it seriously, then push back: programming is a discipline of patient debugging that not everyone enjoys, and there are many high-value skills that aren't programming. The 'learn-to-code-and-be-rich' bootcamp pipeline understates how much continuous learning the job takes. Also: post-AI-pair-programming, the value of typing syntax has fallen and the value of system design, debugging, and judgment has risen — bootcamps that haven't updated for that are training for shrinking work. And the 'self-taught' romanticism understates how lonely + inefficient pure-from-scratch learning is.",

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
    { rank: "Novice", focus: "First language", do: "Pick Python or JS. Build 5 tiny scripts that do real things in your life (rename files, scrape a page, send an email).", milestone: "You can write loops, functions, and basic file IO without looking it up every time.", time: "~1 month" },
    { rank: "Apprentice", focus: "Real project", do: "Build a real small app — a personal tool, a website, anything where you ship something usable.", milestone: "You shipped one thing other humans use.", time: "~2–3 months" },
    { rank: "Practitioner", focus: "Foundations", do: "Learn data structures, basic algorithms, version control, working with APIs.", milestone: "You can pick the right tool for most small problems.", time: "~3–6 months" },
    { rank: "Specialist", focus: "Pick a stack & ship", do: "Go deep in one ecosystem (web, mobile, data, devops, AI tooling). Build a portfolio.", milestone: "You ship in production. Your code holds up.", time: "~6–12 months" },
    { rank: "Expert", focus: "System design + scale", do: "Design real systems. Understand caching, queues, databases under load, reliability.", milestone: "You can scope and ship a non-trivial system.", time: "~1–2 years" },
    { rank: "Master", focus: "Lead + architect", do: "Lead teams. Mentor. Shape codebases that outlive you.", milestone: "Your designs hold up after 3 years and 3 team handovers.", time: "~3–5 years+" },
    { rank: "Grandmaster", focus: "Shape the craft", do: "Open-source meaningful projects, write/speak, shape how people build.", milestone: "Others cite your code or writing.", time: "ongoing" }
  ],

  resources: {
    free: [
      { name: "CS50 — Harvard (edX free audit)",                what: "The single best intro CS course.",                                          url: "https://cs50.harvard.edu/x/",                                          verify: false, lastVerified: "2026-06" },
      { name: "MDN Web Docs",                                   what: "The authoritative web platform reference. Free, deep, well-written.",       url: "https://developer.mozilla.org/",                                       verify: false, lastVerified: "2026-06" },
      { name: "Python — official tutorial",                     what: "Best free intro to Python from the source.",                                url: "https://docs.python.org/3/tutorial/",                                   verify: false, lastVerified: "2026-06" },
      { name: "Pro Git book (free)",                            what: "Comprehensive Git, free, by Scott Chacon.",                                 url: "https://git-scm.com/book/en/v2",                                       verify: false, lastVerified: "2026-06" },
      { name: "freeCodeCamp",                                   what: "Free interactive curricula on web, JS, Python, data.",                      url: "https://www.freecodecamp.org/",                                         verify: false, lastVerified: "2026-06" },
      { name: "The Odin Project",                               what: "Free, opinionated full-stack web curriculum.",                              url: "https://www.theodinproject.com/",                                      verify: false, lastVerified: "2026-06" },
      { name: "Stack Overflow",                                  what: "Q&A site. Read questions like a textbook.",                                 url: "https://stackoverflow.com/",                                            verify: false, lastVerified: "2026-06" },
      { name: "GitHub",                                          what: "Where most modern open source lives. Browse + clone freely.",                url: "https://github.com/",                                                  verify: false, lastVerified: "2026-06" },
      { name: "Roadmap.sh (developer roadmaps)",                 what: "Visual roadmaps for frontend, backend, devops, AI, etc.",                  url: "https://roadmap.sh/",                                                  verify: false, lastVerified: "2026-06" },
      { name: "Real Python (free articles)",                    what: "High-quality Python tutorials and references.",                              url: "https://realpython.com/",                                              verify: false, lastVerified: "2026-06" }
    ],
    paid: [
      { name: "The Pragmatic Programmer — Hunt & Thomas",        what: "Best general 'become a better engineer' read.",                             url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/", price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Designing Data-Intensive Applications — Kleppmann", what: "The modern systems classic.",                                              url: "https://dataintensive.net/",                                          price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "A Philosophy of Software Design — John Ousterhout", what: "Slim and excellent on managing complexity.",                              url: "https://web.stanford.edu/~ouster/cgi-bin/aposd.php",                    price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Code Complete — Steve McConnell",                 what: "Encyclopaedic engineering craft book.",                                    url: "https://www.microsoftpressstore.com/store/code-complete-9780735619678", price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Refactoring — Martin Fowler",                     what: "Disciplined improvement of existing code.",                                 url: "https://martinfowler.com/books/refactoring.html",                       price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Clean Code — Robert C. Martin",                   what: "Influential, opinionated; read with critique in mind.",                    url: "",                                                                       price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "The Mythical Man-Month — Brooks",                 what: "Why adding people to late projects makes them later.",                     url: "https://en.wikipedia.org/wiki/The_Mythical_Man-Month",                   price: "verify", verify: true, lastVerified: "2026-06" },
      { name: "Cracking the Coding Interview — McDowell",        what: "Standard prep book for tech interviews.",                                  url: "https://www.crackingthecodinginterview.com/",                            price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Computer Systems: A Programmer's Perspective",    what: "Bryant & O'Hallaron — under-the-hood systems text.",                       url: "https://csapp.cs.cmu.edu/",                                            price: "verify", verify: false, lastVerified: "2026-06" },
      { name: "Eloquent JavaScript — Marijn Haverbeke",           what: "Excellent JS book; free online + paid print.",                              url: "https://eloquentjavascript.net/",                                       price: "verify", verify: false, lastVerified: "2026-06" }
    ]
  },

  missions: [
    { t: "Pick a language", d: "Install Python or Node.js. Run your first 'Hello World'. Then a script that prints today's date.", xp: 20 },
    { t: "5 tiny scripts", d: "Build 5 small scripts that do one useful thing in your life. List them.", xp: 60 },
    { t: "Git on day 1", d: "Initialise a Git repo for one of your projects. Commit with real messages. Push to GitHub.", xp: 40 },
    { t: "Read an error properly", d: "Next time something errors, copy the full message, read it line by line, and find the actual cause before searching.", xp: 30 },
    { t: "Read someone else's code", d: "Pick a small open-source project you use. Read its main file. Note 3 things you didn't know.", xp: 40 }
  ],
  capstone: { t: "Ship one real thing", d: "Build and deploy one real thing that someone other than you uses — a personal tool, a website, a script that helps a friend. Write a 1-page lessons-learned.", xp: 200 },

  quiz: [
    { q: "What's the right first language for most beginners?", options: [
      { text: "C — closest to the machine.", misconception: "Powerful and educational eventually; brutal as a first language." },
      { text: "Python or JavaScript — friendly syntax, massive ecosystems.", correct: true },
      { text: "Assembly — start at the bottom.", misconception: "Pedagogically masochistic in 2026." },
      { text: "Haskell — train good habits.", misconception: "Educational, but the learning curve discourages most." }
    ], why: "Python and JS have friendly syntax, huge ecosystems, and let you ship real things fast.", testOut: true },
    { q: "You write a function that loops over a list and, inside, loops over the same list again. Roughly what scaling?", options: [
      { text: "Linear — O(n).", misconception: "Single loop is linear; nested is one order higher." },
      { text: "Quadratic — O(n²).", correct: true },
      { text: "Constant — O(1).", misconception: "Constant means independent of n; loops aren't." },
      { text: "Logarithmic — O(log n).", misconception: "Log requires halving each step, like binary search." }
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
    ], why: "Like any craft, programming rewards a specific temperament. It's a great skill — not a one-size-fits-all path." }
  ],

  flashcards: [
    { front: "First-language pick?", back: "Python or JavaScript. Friendly syntax, massive ecosystems, real things you can ship." },
    { front: "Function discipline?", back: "One function, one job. If a function does two things, split it." },
    { front: "Big-O of a nested loop over the same list?", back: "O(n²) — quadratic. Fine at small n; breaks at large n." },
    { front: "Web request rough sequence?", back: "DNS → TCP/TLS → HTTP request → server response → client render." },
    { front: "Why Git?", back: "Track history, collaborate, branch fearlessly. The standard." },
    { front: "First move when stuck?", back: "Read the actual error. Reproduce reliably. Change one thing at a time." },
    { front: "Most underrated skill?", back: "Reading code — including your own from 3 months ago." },
    { front: "Right data structure intuition?", back: "Lists for order, hash maps for fast lookup, trees for hierarchy, graphs for relationships." }
  ],
  glossary: [
    { term: "Variable", def: "A named place to store a value." },
    { term: "Function", def: "A named block of reusable code." },
    { term: "Big-O", def: "How cost grows with input size." },
    { term: "API", def: "Application Programming Interface — a contract for using a service." },
    { term: "Git", def: "Distributed version control system; the standard." },
    { term: "Commit", def: "A snapshot of your code at a moment in time, with a message." },
    { term: "Branch", def: "A separate line of development you can merge later." },
    { term: "Refactor", def: "Improving code structure without changing behaviour." }
  ]
};

export default d;
