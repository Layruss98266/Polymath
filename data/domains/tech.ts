import type { Domain } from "@/lib/types";

const d: Domain = {
 id: "tech",
 icon: "💻",
 hue: "#38bdf8",
 category: "Tech & Future",
 name: "Tech & Programming",
 tagline: "Speak to machines, build things",

 basics: "Programming is the strange art of writing instructions so precise that a machine , which has no common sense at all , can follow them and produce something useful. The syntax (the punctuation and grammar of any specific language) you can learn in a few weeks. The actual job is harder and slower: breaking fuzzy real-world problems into precise small steps, reading other people's code without your eyes glazing over, and shipping things that don't fall apart when a real user touches them. The good news , those underlying skills don't expire. Languages come and go, but knowing how to think like a programmer is a lifetime tool.",
 whyItMatters: [
  "Massive leverage. One person who codes can build things that used to need a team of ten.",
  "Modern jobs across every industry now expect you to read APIs, configs, and logs without panicking. Hiding from tech is no longer free.",
  "You can tell a good technical decision from a bad one even if you aren't an engineer full-time , which makes you better at almost any role.",
  "You can automate the boring parts of your own life. That alone is worth the price of admission."
 ],
 realWorldExample: "Type a URL into your browser and hit enter. In the next 200 milliseconds, your computer asks the internet's address book where this site lives (DNS lookup). It opens a secure phone line to that address (TCP and TLS). It says \"please send me the page\" (HTTP request). The server replies with a heap of HTML, which links to more files , fonts, images, JavaScript. Your browser fetches each, runs the JavaScript, paints the result, and you see something. Knowing the rough shape of this , not the wire-level detail , turns \"the internet is magic\" into \"this page is slow because the server's slow,\" or \"this site is loading too many images.\" Suddenly you can debug things the rest of the office can't.",

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
  { concept: "Tokens / compute / model", linksTo: "ai_ml", note: "The systems thinking transfers , APIs, latency, compute budgets all show up." }
 ],

 concepts: [
  { t: "Variables, types, and control flow",   short: "Storage, decisions, and loops. Every language has these. Once you've got them, the rest is detail.",                                             deep: "Every programming language, no matter how trendy, gives you the same three primitives. A way to store a value with a name (a variable). A way to make a choice (if/else). A way to repeat work (for/while loops). Pick a friendly first language , Python or JavaScript , and burn these into your fingers until they're automatic. Syntax is the cheap part of programming; you can memorise it in a week. The real work is learning to break a fuzzy real-world problem into a sequence of tiny precise steps. That part takes years and never quite ends. Start with: \"can I write a 10-line script today that does one useful thing in my life?\" If the answer is yes, you can program , everything from here is scale.",                                                                                 status: "settled",  reflect: "Could you write a 10-line script today that did one useful thing for you? If not, that's the very first project , rename some files, send a daily reminder, anything." },
  { t: "Functions and composition",       short: "Name a thing once. Call it many times. Build big systems out of small named blocks.",                                                     deep: "A function is a named block of code you can re-use. Instead of writing the same 20 lines in three different places, you write them once, give them a name, and call them three times. The discipline behind the syntax is small but important: one function, one job. If a function does two things, split it. Code that follows this rule is readable months later by your future self. Code that doesn't becomes the spaghetti you avoid touching. Most senior engineers spend more time pulling tangles into clean small functions than writing brand new ones.",                                                                                                                                                      status: "settled",  reflect: "Open something you wrote six months ago. Can you still read it? Can you change one part without breaking three others?" },
  { t: "Data structures",             short: "Different shapes for different jobs. Lists hold order, hash maps hold lookups, trees hold hierarchy, graphs hold relationships.",                              deep: "Imagine you're organising your contacts. If you just need them in order, a list works. If you need to grab one by name instantly, a hash map (dictionary) is the right shape. If you need to capture an org chart, a tree. If you need who-knows-whom relationships, a graph. You don't have to memorise the internals of each; you do have to know which shape fits which kind of question, so you can reach for the right one. Most beginner code uses one shape (a list) for everything and grinds to a halt as soon as the data grows.",                                                                                                                                                                     status: "settled",  reflect: "Pick a problem you're working on. What's the natural shape , list, map, tree, graph? Are you using that shape?" },
  { t: "Algorithms and Big-O (the light version)", short: "You don't need the maths. You do need to feel when something will explode at scale.",                                                     deep: "You don't need to derive quicksort from scratch to ship products. You do need a working intuition: if you write a loop inside a loop that both iterate over the same list, the cost grows quadratically , fine on 10 items, broken on 10 million. That intuition is what Big-O notation captures. O(n) means cost grows in line with input size. O(n²) means it grows much faster than that. O(1) means it doesn't grow at all. Most of the time, picking the right data structure (which makes a lookup O(1) instead of O(n)) is more important than picking a clever algorithm.",                                                                                                                                                 status: "settled",  reflect: "Where in your code is a \"just iterate\" loop that would break if the data was 1,000× larger?" },
  { t: "What happens when you type a URL",     short: "DNS → connection → request → response → render. Knowing the rough sequence makes the web debuggable.",                                           deep: "Type a URL, hit enter, and a tiny choreography starts. Your computer asks the internet's address book (DNS) where the site lives. It opens a secure connection (TCP and TLS). It says \"please give me this page\" (HTTP request). The server responds with HTML. The browser reads the HTML, fetches every linked file (CSS, JavaScript, images, fonts), runs the JavaScript, lays out the page, and paints. Knowing this rough sequence is what lets you diagnose a slow website without guessing , is it slow because of network? Server? Too many images? JavaScript running too long? Suddenly the web isn't magic; it's a sequence of steps, each of which you can poke at.",                                                                                                 status: "settled",  reflect: "Pick the slowest website you use. Where in the sequence is it spending its time? Network, server, or render?" },
  { t: "Version control (Git)",          short: "Git tracks every change to your code, so you can experiment without fear.",                                                          deep: "Before Git, programmers emailed each other zip files and lost work constantly. Git records every change as a tiny snapshot, lets you label snapshots (commits), branch off into experiments without breaking the main line, and merge things back together. GitHub and GitLab are the websites where these histories live and collaboration happens. Use it from day one , even on personal projects, even alone. Commit early, commit often, write commit messages your future self will thank you for. \"fix\" as a commit message is fine until you're hunting a bug in code from two months ago, and then it isn't.",                                                                                                                               status: "settled",  reflect: "Do you use Git daily? If you don't yet, that's tonight's hour of learning. Pro Git book is free." },
  { t: "Debugging mindset",            short: "Read the actual error. Reproduce reliably. Change one thing at a time.",                                                           deep: "Most bugs are not exotic. Most bugs are: you misspelled something, you used the wrong variable, you assumed a value was there when it wasn't. The discipline that separates fast debuggers from slow ones is annoyingly small. First, actually read the error message , the whole thing, line by line, not skimmed. Half the time the message says exactly what's wrong. Second, reproduce the bug reliably so you can test fixes. Third, change one thing at a time so you know which change fixed it. Print statements are not embarrassing; \"console.log everywhere\" is what senior engineers do too. The myth that real programmers don't need to debug is just that , a myth.",                                                                                                 status: "framework", reflect: "When did you last spend 30 minutes lost in a bug , only to realise the error message had been telling you the answer the whole time?" },
  { t: "Reading code is more important than writing it", short: "Most of programming, in real jobs, is reading. Reading other people's code, and reading your own from three months ago.",                                deep: "Beginners assume programming is mostly typing. It isn't. In real jobs, most of your time is spent reading existing code , figuring out what someone else did, why they did it, how to safely change it. The skill compounds. The better you get at reading code, the faster you can contribute to a new codebase, the faster you can use libraries, the faster you can borrow good patterns from open source. Even with AI pair-programming taking over a lot of typing, reading critically is now more valuable, not less , somebody has to know whether the generated code is actually right.",                                                                                                                                             status: "framework", reflect: "Pick a small open-source project you use. Open its main file. How much makes sense on a first pass? That gap is the practice." }
 ],

 counterView: "There's a popular framing that 'everyone should learn to code.' Take it seriously, then push back: programming is a discipline of patient debugging that not everyone enjoys, and there are many high-value skills that aren't programming. The 'learn-to-code-and-be-rich' bootcamp pipeline understates how much continuous learning the job takes. Also: post-AI-pair-programming, the value of typing syntax has fallen and the value of system design, debugging, and judgment has risen , bootcamps that haven't updated for that are training for shrinking work. And the 'self-taught' romanticism understates how lonely + inefficient pure-from-scratch learning is.",

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
  { rank: "Novice",    focus: "Pick one friendly language and build tiny things",    do: "Install Python or Node.js. Write \"Hello World.\" Then build five very small scripts that do real things in your life , rename a folder of photos, send a daily email, scrape one page. The point isn't the script. The point is feeling the muscle of \"problem → tiny code → it ran.\"",                                                 milestone: "You can write loops, functions, and basic file operations without looking each one up.",                                     time: "~1 month" },
  { rank: "Apprentice",  focus: "Ship one real thing other humans touch",          do: "Build one small real app , a personal tool, a tiny website, a script you share with a friend. Make it work end-to-end. Shipping is the skill that beginners undervalue and seniors revere.",                                                                                             milestone: "You've shipped one thing that at least one human other than you actually uses.",                                         time: "~2-3 months" },
  { rank: "Practitioner", focus: "Learn the foundations properly",              do: "Now go back and learn data structures, basic algorithms, version control (Git daily), and how to work with APIs. You'll suddenly understand why your earlier code felt clumsy.",                                                                                                 milestone: "You can pick the right tool for most small problems without flailing.",                                              time: "~3-6 months" },
  { rank: "Specialist",  focus: "Pick a stack and go deep",                 do: "Tech is huge. Pick one corner , web, mobile, data, DevOps, AI tooling , and go deep enough to ship in production. Build a portfolio of two or three real projects.",                                                                                                         milestone: "Your code is in production somewhere. It survives users without your hand-holding.",                                       time: "~6-12 months" },
  { rank: "Expert",    focus: "System design and scale",                  do: "Move past code-as-isolated-files to code-as-system. Understand caching, queues, databases under load, reliability, observability. Read the kind of book whose name has 'distributed' in it.",                                                                                             milestone: "You can scope and ship a non-trivial system that holds up under real traffic.",                                          time: "~1-2 years" },
  { rank: "Master",    focus: "Lead, architect, mentor",                  do: "Stop being the person who writes the most code. Become the person who shapes the codebase, mentors others, and designs the systems that outlive everyone's current project.",                                                                                                     milestone: "Your designs are still working three years later, after three team handovers.",                                          time: "~3-5 years+" },
  { rank: "Grandmaster", focus: "Shape how the craft is practised",             do: "Maintain meaningful open source. Write or speak about what you've learned. Influence how the next generation of engineers thinks about the work.",                                                                                                                  milestone: "Other engineers cite your code or your writing as part of how they learned.",                                            time: "ongoing" }
 ],

 resources: {
  free: [
   { name: "CS50 , Harvard (edX free audit)",        what: "The single best intro CS course.",                     url: "https://cs50.harvard.edu/x/",                     verify: false, lastVerified: "2026-06" },
   { name: "MDN Web Docs",                  what: "The authoritative web platform reference. Free, deep, well-written.",    url: "https://developer.mozilla.org/",                    verify: false, lastVerified: "2026-06" },
   { name: "Python , official tutorial",           what: "Best free intro to Python from the source.",                url: "https://docs.python.org/3/tutorial/",                  verify: false, lastVerified: "2026-06" },
   { name: "Pro Git book (free)",              what: "Comprehensive Git, free, by Scott Chacon.",                 url: "https://git-scm.com/book/en/v2",                    verify: false, lastVerified: "2026-06" },
   { name: "freeCodeCamp",                  what: "Free interactive curricula on web, JS, Python, data.",           url: "https://www.freecodecamp.org/",                     verify: false, lastVerified: "2026-06" },
   { name: "The Odin Project",                what: "Free, opinionated full-stack web curriculum.",               url: "https://www.theodinproject.com/",                   verify: false, lastVerified: "2026-06" },
   { name: "Stack Overflow",                 what: "Q&A site. Read questions like a textbook.",                 url: "https://stackoverflow.com/",                      verify: false, lastVerified: "2026-06" },
   { name: "GitHub",                     what: "Where most modern open source lives. Browse + clone freely.",        url: "https://github.com/",                         verify: false, lastVerified: "2026-06" },
   { name: "Roadmap.sh (developer roadmaps)",         what: "Visual roadmaps for frontend, backend, devops, AI, etc.",         url: "https://roadmap.sh/",                         verify: false, lastVerified: "2026-06" },
   { name: "Real Python (free articles)",          what: "High-quality Python tutorials and references.",               url: "https://realpython.com/",                       verify: false, lastVerified: "2026-06" }
  ],
  paid: [
   { name: "The Pragmatic Programmer , Hunt & Thomas",    what: "Best general 'become a better engineer' read.",               url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/", price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Designing Data-Intensive Applications , Kleppmann", what: "The modern systems classic.",                       url: "https://dataintensive.net/",                     price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "A Philosophy of Software Design , John Ousterhout", what: "Slim and excellent on managing complexity.",               url: "https://web.stanford.edu/~ouster/cgi-bin/aposd.php",          price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Code Complete , Steve McConnell",         what: "Encyclopaedic engineering craft book.",                  url: "https://www.microsoftpressstore.com/store/code-complete-9780735619678", price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Refactoring , Martin Fowler",           what: "Disciplined improvement of existing code.",                 url: "https://martinfowler.com/books/refactoring.html",            price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Clean Code , Robert C. Martin",          what: "Influential, opinionated; read with critique in mind.",          url: "",                                    price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "The Mythical Man-Month , Brooks",         what: "Why adding people to late projects makes them later.",           url: "https://en.wikipedia.org/wiki/The_Mythical_Man-Month",          price: "verify", verify: true, lastVerified: "2026-06" },
   { name: "Cracking the Coding Interview , McDowell",    what: "Standard prep book for tech interviews.",                 url: "https://www.crackingthecodinginterview.com/",              price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Computer Systems: A Programmer's Perspective",  what: "Bryant & O'Hallaron , under-the-hood systems text.",            url: "https://csapp.cs.cmu.edu/",                      price: "verify", verify: false, lastVerified: "2026-06" },
   { name: "Eloquent JavaScript , Marijn Haverbeke",      what: "Excellent JS book; free online + paid print.",               url: "https://eloquentjavascript.net/",                    price: "verify", verify: false, lastVerified: "2026-06" }
  ]
 },

 missions: [
  { t: "Pick a language", d: "Install Python or Node.js. Run your first 'Hello World'. Then a script that prints today's date.", xp: 20 },
  { t: "5 tiny scripts", d: "Build 5 small scripts that do one useful thing in your life. List them.", xp: 60 },
  { t: "Git on day 1", d: "Initialise a Git repo for one of your projects. Commit with real messages. Push to GitHub.", xp: 40 },
  { t: "Read an error properly", d: "Next time something errors, copy the full message, read it line by line, and find the actual cause before searching.", xp: 30 },
  { t: "Read someone else's code", d: "Pick a small open-source project you use. Read its main file. Note 3 things you didn't know.", xp: 40 }
 ],
 capstone: { t: "Ship one real thing", d: "Build and deploy one real thing that someone other than you uses , a personal tool, a website, a script that helps a friend. Write a 1-page lessons-learned.", xp: 200 },

 quiz: [
  { q: "What's the right first language for most beginners?", options: [
   { text: "C , closest to the machine.", misconception: "Powerful and educational eventually; brutal as a first language." },
   { text: "Python or JavaScript , friendly syntax, massive ecosystems.", correct: true },
   { text: "Assembly , start at the bottom.", misconception: "Pedagogically masochistic in 2026." },
   { text: "Haskell , train good habits.", misconception: "Educational, but the learning curve discourages most." }
  ], why: "Python and JS have friendly syntax, huge ecosystems, and let you ship real things fast.", testOut: true },
  { q: "You write a function that loops over a list and, inside, loops over the same list again. Roughly what scaling?", options: [
   { text: "Linear , O(n).", misconception: "Single loop is linear; nested is one order higher." },
   { text: "Quadratic , O(n²).", correct: true },
   { text: "Constant , O(1).", misconception: "Constant means independent of n; loops aren't." },
   { text: "Logarithmic , O(log n).", misconception: "Log requires halving each step, like binary search." }
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
  ], why: "Like any craft, programming rewards a specific temperament. It's a great skill , not a one-size-fits-all path." }
 ],

 flashcards: [
  { front: "First-language pick?", back: "Python or JavaScript. Friendly syntax, massive ecosystems, real things you can ship." },
  { front: "Function discipline?", back: "One function, one job. If a function does two things, split it." },
  { front: "Big-O of a nested loop over the same list?", back: "O(n²) , quadratic. Fine at small n; breaks at large n." },
  { front: "Web request rough sequence?", back: "DNS → TCP/TLS → HTTP request → server response → client render." },
  { front: "Why Git?", back: "Track history, collaborate, branch fearlessly. The standard." },
  { front: "First move when stuck?", back: "Read the actual error. Reproduce reliably. Change one thing at a time." },
  { front: "Most underrated skill?", back: "Reading code , including your own from 3 months ago." },
  { front: "Right data structure intuition?", back: "Lists for order, hash maps for fast lookup, trees for hierarchy, graphs for relationships." }
 ],
 glossary: [
  { term: "Variable", def: "A named place to store a value." },
  { term: "Function", def: "A named block of reusable code." },
  { term: "Big-O", def: "How cost grows with input size." },
  { term: "API", def: "Application Programming Interface , a contract for using a service." },
  { term: "Git", def: "Distributed version control system; the standard." },
  { term: "Commit", def: "A snapshot of your code at a moment in time, with a message." },
  { term: "Branch", def: "A separate line of development you can merge later." },
  { term: "Refactor", def: "Improving code structure without changing behaviour." }
 ]
};

export default d;
