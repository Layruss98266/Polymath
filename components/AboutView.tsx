import Link from "next/link";
import { Sparkles, ShieldCheck, Brain, Award, Compass, BookOpen, CheckCircle2, AlertTriangle, ArrowRight, Github, Lock } from "lucide-react";

const PRINCIPLES = [
 {
  Icon: ShieldCheck,
  title: "No dark patterns",
  body: "XP is awarded only for real learning actions: opening a concept, writing a reflection, completing a mission, answering with calibrated confidence. Never for time on screen or empty taps."
 },
 {
  Icon: Award,
  title: "Per-claim epistemic honesty",
  body: "Every concept declares whether it is settled, debated, or one framework. Every domain ships a steelman counter-view. Resources carry verify and lastVerified flags so stale links are obvious."
 },
 {
  Icon: Brain,
  title: "Test first, not read first",
  body: "Opening a concept shows a prediction prompt before the explanation. The small struggle to recall is what builds memory. Open book reading feels productive and rarely sticks."
 },
 {
  Icon: Compass,
  title: "Real ranked resources",
  body: "Books, courses, podcasts, articles, and tools are ranked best-first for a scratch starter. No invented titles, no hallucinated URLs. Where a link is uncertain, it stays empty and flagged."
 }
];

const HOW = [
 { n: 1, title: "Pick a domain", body: "From the catalogue or via the goal-led onboarding. Each domain is a self-contained ladder from absolute basics to mastery." },
 { n: 2, title: "Open one concept", body: "A two minute action. Predict, reveal, reflect. Concepts open one at a time, with a Beginner or Expert toggle." },
 { n: 3, title: "Check yourself", body: "Concept quizzes use misconception-mapped wrong answers, so picking incorrectly teaches you the exact false belief to fix." },
 { n: 4, title: "Apply it", body: "A basic, easy, and advanced task ladder per concept. Advanced unlocks only after passing the check." },
 { n: 5, title: "Space the review", body: "Flashcards from every domain you have touched feed an FSRS scheduler. Cards resurface just as you would forget them." },
 { n: 6, title: "Watch the lattice", body: "Cross-domain synthesis links surface on each domain and as a network on the Skill Map. The polymath payoff is the connections." }
];

const FAQ = [
 {
  q: "Is this another flashcard app?",
  a: "No. Flashcards are one of seven tools per domain. Real frameworks, real authorities, real ranked resources, missions in the world, and an honest game loop sit alongside spaced repetition."
 },
 {
  q: "Do I need an account?",
  a: "No. Progress is stored locally in your browser using IndexedDB with a localStorage fallback. To move progress to another device, copy your save code or download a JSON from Settings."
 },
 {
  q: "Does it work offline?",
  a: "Once loaded, yes. The app is a static Next.js export with no required server APIs. A PWA manifest is shipped so you can install it to your home screen."
 },
 {
  q: "How honest are the resources?",
  a: "Resource names are real. Where we are not certain about a URL or price, it is flagged verify:true with the link blank. lastVerified dates are shown in the UI so you can tell what is stale."
 },
 {
  q: "What is the philosophy on biases?",
  a: "Where a popular claim is contested (Mehrabian 7-38-55, the 10,000 hour rule, Walker's sleep claims, Love Languages, Byron Sharp vs classic positioning), we carry the caveat alongside the claim instead of pretending it is settled."
 },
 {
  q: "Why is some content localised to India?",
  a: "HOME_COUNTRY is set to India for finance, legal, and health hooks. The universal concepts apply everywhere; specific portals, regulators, and rules use Indian defaults."
 },
 {
  q: "Can I export my data?",
  a: "Yes. Settings has a base64 save code, a JSON download, and a JSON upload. Resetting progress keeps your theme and sound preferences. Wiping clears everything."
 }
];

const SAFETY = [
 { Icon: AlertTriangle, label: "Finance, Investing, Crypto", text: "Education only, not financial advice. Past performance is not future returns." },
 { Icon: AlertTriangle, label: "Health, Nutrition, Fitness, Sleep", text: "Educational, not medical advice. For symptoms or conditions, consult a qualified clinician." },
 { Icon: AlertTriangle, label: "Law", text: "Universal concepts only. Laws vary by country. For real stakes consult a qualified lawyer in your jurisdiction." },
 { Icon: AlertTriangle, label: "Mental Health", text: "Supportive and de-stigmatising. Not a substitute for professional care. Reach out to a qualified professional or local helpline if you are struggling." }
];

export function AboutView() {
 return (
  <div className="space-y-10 max-w-5xl mx-auto">
   {/* Hero */}
   <section className="panel hero-glow p-6 sm:p-10 space-y-4">
    <p className="dim text-xs uppercase tracking-widest">About Polymath</p>
    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">A daily learning loop. Built for depth, not dopamine.</h1>
    <p className="dim text-base sm:text-lg max-w-3xl">Polymath teaches dozens of real-world domains from absolute basics to mastery, wrapped in an honest game loop. No login, no tracking, no manipulative streak bait. Open it, learn one concept, close it, come back tomorrow.</p>
    <div className="flex flex-wrap gap-2 pt-2">
     <Link href="/" className="btn">Browse domains <ArrowRight size={14} /></Link>
     <a href="https://github.com/Layruss98266/Polymath" target="_blank" rel="noreferrer" className="btn"><Github size={14} /> Source on GitHub</a>
    </div>
   </section>

   {/* Principles */}
   <section className="space-y-3">
    <h2 className="font-display text-2xl">Principles</h2>
    <p className="dim">Four ideas the whole app is shaped around.</p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
     {PRINCIPLES.map((p) => (
      <li key={p.title} className="panel p-5">
       <div className="flex items-center gap-2 mb-2">
        <p.Icon size={18} className="hue" />
        <h3 className="font-display text-lg">{p.title}</h3>
       </div>
       <p className="dim text-sm">{p.body}</p>
      </li>
     ))}
    </ul>
   </section>

   {/* How it works */}
   <section className="space-y-3">
    <h2 className="font-display text-2xl">How learning happens here</h2>
    <p className="dim">Six steps, repeated daily. Each one is a small thing on its own.</p>
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
     {HOW.map((h) => (
      <li key={h.n} className="panel p-5">
       <div className="flex items-center gap-3 mb-2">
        <span className="grid place-items-center w-8 h-8 rounded-lg font-display text-sm font-bold" style={{ background: "var(--hue)", color: "#0b0d1a" }}>{h.n}</span>
        <h3 className="font-display text-lg">{h.title}</h3>
       </div>
       <p className="dim text-sm">{h.body}</p>
      </li>
     ))}
    </ol>
   </section>

   {/* The honest game loop */}
   <section className="panel p-6 sm:p-8 space-y-4">
    <h2 className="font-display text-2xl">The honest game loop</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
     <li className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="hue mt-0.5 shrink-0" /> XP only for real learning actions. Never for time spent.</li>
     <li className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="hue mt-0.5 shrink-0" /> Streak with one auto-applied grace day. One missed day shouldn't nuke a long streak.</li>
     <li className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="hue mt-0.5 shrink-0" /> No FOMO notifications, no push, no infinite scroll, no guilt copy.</li>
     <li className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="hue mt-0.5 shrink-0" /> Anti-overuse nudge after about 45 minutes. Breaks help memory consolidate.</li>
     <li className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="hue mt-0.5 shrink-0" /> 21 achievements with auto-evaluation. No fake milestones, no synthetic urgency.</li>
     <li className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="hue mt-0.5 shrink-0" /> 7 mastery tiers per domain with distinct gradients. Real progression based on actual completion.</li>
    </ul>
   </section>

   {/* What is in the box */}
   <section className="space-y-3">
    <h2 className="font-display text-2xl">What is in the box</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
     <li className="panel p-4"><p className="font-display text-3xl">15</p><p className="dim text-xs mt-1">Core domains</p></li>
     <li className="panel p-4"><p className="font-display text-3xl">10</p><p className="dim text-xs mt-1">Tabs per domain</p></li>
     <li className="panel p-4"><p className="font-display text-3xl">15</p><p className="dim text-xs mt-1">SVG diagram kinds</p></li>
     <li className="panel p-4"><p className="font-display text-3xl">7</p><p className="dim text-xs mt-1">Mastery tiers</p></li>
     <li className="panel p-4"><p className="font-display text-3xl">21</p><p className="dim text-xs mt-1">Achievements</p></li>
     <li className="panel p-4"><p className="font-display text-3xl">411</p><p className="dim text-xs mt-1">Daily quotes</p></li>
     <li className="panel p-4"><p className="font-display text-3xl">4</p><p className="dim text-xs mt-1">Curated Paths</p></li>
     <li className="panel p-4"><p className="font-display text-3xl">FSRS</p><p className="dim text-xs mt-1">Spaced repetition</p></li>
    </ul>
   </section>

   {/* Methodology */}
   <section className="panel p-6 sm:p-8 space-y-3">
    <h2 className="font-display text-2xl">Methodology</h2>
    <p className="dim">Every concept walks through the same flow: definition, prereqs, prediction, reveal, reflect, check, apply.</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
     <div className="panel p-4">
      <p className="text-xs uppercase tracking-widest dim mb-1">Retrieval first</p>
      <p className="text-sm">A prediction prompt appears before the explanation. Even a wrong guess primes the encoding of the correct answer.</p>
     </div>
     <div className="panel p-4">
      <p className="text-xs uppercase tracking-widest dim mb-1">Calibrated confidence</p>
      <p className="text-sm">Quiz answers ask how sure you are before revealing. Confident-and-wrong, the most expensive failure mode, is surfaced.</p>
     </div>
     <div className="panel p-4">
      <p className="text-xs uppercase tracking-widest dim mb-1">Misconception mapped</p>
      <p className="text-sm">Wrong quiz options carry the specific false belief that explains why a learner would pick them, and the precise fix.</p>
     </div>
    </div>
   </section>

   {/* Safety */}
   <section className="space-y-3">
    <h2 className="font-display text-2xl">Safety and disclaimers</h2>
    <p className="dim">Four areas where we are explicit about what this app is and is not.</p>
    <ul className="space-y-2">
     {SAFETY.map((s) => (
      <li key={s.label} className="panel p-4 flex items-start gap-3" style={{ borderColor: "var(--bad)" }}>
       <s.Icon size={18} style={{ color: "var(--bad)" }} className="mt-0.5 shrink-0" />
       <div>
        <p className="font-medium text-sm">{s.label}</p>
        <p className="dim text-sm">{s.text}</p>
       </div>
      </li>
     ))}
    </ul>
   </section>

   {/* Tech stack */}
   <section className="panel p-6 sm:p-8 space-y-3">
    <h2 className="font-display text-2xl">Under the hood</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> Next.js 15 App Router with React 19 and TypeScript strict</li>
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> Tailwind CSS with CSS-variable theming (dark, light, forced-colors)</li>
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> Dexie on IndexedDB with localStorage fallback, versioned migrations</li>
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> ts-fsrs scheduler (the algorithm modern Anki uses)</li>
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> Zod schema validated at build, so a missing field fails the build loudly</li>
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> Lazy-loaded domains, dynamic imports per domain</li>
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> 15 inline SVG diagram generators, currentColor and CSS vars, no external images</li>
     <li className="flex items-start gap-2"><BookOpen size={14} className="hue mt-0.5 shrink-0" /> canvas-confetti gated on prefers-reduced-motion</li>
    </ul>
   </section>

   {/* Privacy */}
   <section className="panel p-6 sm:p-8 space-y-3" style={{ borderColor: "var(--good)" }}>
    <div className="flex items-center gap-2">
     <Lock size={18} style={{ color: "var(--good)" }} />
     <h2 className="font-display text-2xl">Privacy</h2>
    </div>
    <p>No login, no accounts, no analytics, no cookies for tracking, no third-party scripts. Your progress lives in IndexedDB in your browser, with a localStorage fallback. The only network request the app needs is the initial page load from Vercel's CDN. The site does not phone home.</p>
    <ul className="text-sm dim space-y-1 list-disc pl-6">
     <li>No personal data is collected, transmitted, or stored on any server.</li>
     <li>Your XP, streaks, reflections, bookmarks, and flashcard schedules all live locally.</li>
     <li>The Save / Load and Settings pages let you export a portable JSON file or a base64 code, both 100% client-side.</li>
     <li>Wipe in Settings clears the local store. Uninstalling the browser or clearing site data removes everything.</li>
     <li>The PWA manifest is shipped so you can install the app, but no service worker is currently registered. Once one is, it will only cache the build assets for offline use.</li>
    </ul>
   </section>

   {/* FAQ */}
   <section className="space-y-3">
    <h2 className="font-display text-2xl">Frequently asked</h2>
    <ul className="space-y-2">
     {FAQ.map((f, i) => (
      <li key={i} className="panel p-4">
       <details>
        <summary className="cursor-pointer font-medium">{f.q}</summary>
        <p className="dim text-sm mt-2">{f.a}</p>
       </details>
      </li>
     ))}
    </ul>
   </section>

   {/* Closing CTA */}
   <section className="panel hero-glow p-6 sm:p-10 text-center space-y-3">
    <Sparkles size={28} className="hue mx-auto" />
    <h2 className="font-display text-2xl sm:text-3xl">Two minutes a day. Real learning.</h2>
    <p className="dim max-w-xl mx-auto">Open a domain. Pick one concept. Predict, reveal, reflect. That is the loop. Everything else, achievements, spaced repetition, the dashboard, turns on as you go.</p>
    <div className="flex flex-wrap justify-center gap-2 pt-2">
     <Link href="/" className="btn">Browse domains <ArrowRight size={14} /></Link>
     <Link href="/skill-map" className="btn">See the Skill Map</Link>
    </div>
   </section>
  </div>
 );
}
