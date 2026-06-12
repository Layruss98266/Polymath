"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Brain, Award, WifiOff, Sparkles, Globe, Github, Star, CheckCircle2, BookOpen, Compass } from "lucide-react";
import { useUserState } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";

export function HomeHero() {
 const s = useUserState();
 const isFresh = s.startedDomains.length === 0;

 return (
  <section className="relative">
   <div className="panel hero-glow p-6 sm:p-12 lg:p-16 relative overflow-hidden">
    <div className="max-w-4xl">
     <div className="inline-flex items-center gap-2 chip mb-5">
      <Sparkles size={12} className="hue" />
      <span>15 Core domains. Real frameworks. Honest game loop.</span>
     </div>

     <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
      Learn anything.
      <br />
      <span className="hue">Two minutes a day.</span>
     </h1>

     <p className="dim text-base sm:text-lg lg:text-xl max-w-2xl mt-5 leading-relaxed">
      A daily learning loop for the world's most useful domains, from Marketing to Mental Models to AI. Spaced repetition, real-world missions, calibrated quizzes, epistemic honesty. <strong className="ink">No dark patterns.</strong>
     </p>

     <div className="flex flex-wrap gap-3 mt-7">
      <a
       href="#domains"
       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm sm:text-base font-medium"
       style={{ background: "var(--hue)", color: "#0b0d1a" }}
      >
       {isFresh ? "Pick your first domain" : "Browse all domains"} <ArrowRight size={16} />
      </a>
      <Link
       href="/about"
       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm sm:text-base font-medium panel"
      >
       How it works
      </Link>
      <a
       href="https://github.com/Layruss98266/Polymath"
       target="_blank"
       rel="noreferrer"
       className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm panel"
      >
       <Github size={14} /> Source
      </a>
     </div>

     <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-xs sm:text-sm dim">
      <li className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="hue" /> No login</li>
      <li className="inline-flex items-center gap-1.5"><WifiOff size={14} className="hue" /> Works offline</li>
      <li className="inline-flex items-center gap-1.5"><Brain size={14} className="hue" /> FSRS spaced repetition</li>
      <li className="inline-flex items-center gap-1.5"><Award size={14} className="hue" /> 21 honest achievements</li>
      <li className="inline-flex items-center gap-1.5"><Globe size={14} className="hue" /> India-localised</li>
     </ul>
    </div>
   </div>
  </section>
 );
}

export function HeroStats() {
 const STATS = [
  { n: "15",  label: "Core domains",      sub: "across 6 categories" },
  { n: "7",   label: "Mastery tiers",     sub: "Novice to Grandmaster" },
  { n: "15",  label: "SVG diagram kinds", sub: "theme-aware, accessible" },
  { n: "411", label: "Daily quotes",      sub: "real, attributed" }
 ];
 return (
  <section className="panel p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center">
   {STATS.map((s, i) => (
    <div key={i} className="border-r last:border-r-0 sm:border-r-[1px] pr-3 last:pr-0" style={{ borderColor: "var(--line)" }}>
     <p className="font-display text-3xl sm:text-4xl tracking-tight">{s.n}</p>
     <p className="text-xs mt-1">{s.label}</p>
     <p className="dim text-[10px] sm:text-xs mt-0.5">{s.sub}</p>
    </div>
   ))}
  </section>
 );
}

export function HeroHow() {
 const STEPS = [
  { n: "01", title: "Pick a domain",            body: "From the catalogue below or via the goal-led onboarding." },
  { n: "02", title: "Open one concept",         body: "Two minutes. Predict, reveal, reflect, save your note." },
  { n: "03", title: "Check yourself",           body: "A 3 to 5 question concept quiz with misconception feedback." },
  { n: "04", title: "Come back tomorrow",       body: "FSRS pulls due cards across every domain you have touched." }
 ];
 return (
  <section>
   <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
    <div>
     <p className="dim text-xs uppercase tracking-widest">How it works</p>
     <h2 className="font-display text-2xl sm:text-3xl mt-1">The loop in four steps.</h2>
    </div>
    <Link href="/about" className="chip">Read methodology <ArrowRight size={12} /></Link>
   </div>
   <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    {STEPS.map((s) => (
     <li key={s.n} className="panel p-5 relative overflow-hidden">
      <p className="font-mono text-xs hue absolute right-4 top-3 opacity-60">{s.n}</p>
      <p className="font-display text-lg pr-10">{s.title}</p>
      <p className="dim text-sm mt-1">{s.body}</p>
     </li>
    ))}
   </ol>
  </section>
 );
}

export function HeroFeatures() {
 const F = [
  { Icon: Brain,       title: "Test first, not read first", body: "Every concept opens with a prediction. The small struggle to recall is where memory actually forms." },
  { Icon: Award,       title: "Calibrated confidence",      body: "Quizzes ask how sure you are. Confident-and-wrong, the most expensive mistake, gets surfaced." },
  { Icon: Sparkles,    title: "Concept quizzes that teach", body: "Wrong answers map to the specific misconception they represent, with the precise fix shown." },
  { Icon: ShieldCheck, title: "Epistemic honesty",          body: "Per-claim status badges. Steelman counter-views. Resources flagged with lastVerified dates." }
 ];
 return (
  <section>
   <div className="mb-4">
    <p className="dim text-xs uppercase tracking-widest">Why this works</p>
    <h2 className="font-display text-2xl sm:text-3xl mt-1">Built on what the learning research actually says.</h2>
   </div>
   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {F.map((f, i) => (
     <li key={i} className="panel p-5">
      <div className="grid place-items-center w-9 h-9 rounded-xl mb-3" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
       <f.Icon size={18} />
      </div>
      <p className="font-display text-lg">{f.title}</p>
      <p className="dim text-sm mt-1 leading-relaxed">{f.body}</p>
     </li>
    ))}
   </ul>
  </section>
 );
}

export function HeroCategories() {
 // Roll DOMAIN_INDEX up to its 6 categories so the landing previews the catalogue without dumping all 15 cards.
 const groups = new Map<string, { count: number; sample: typeof DOMAIN_INDEX }>();
 for (const d of DOMAIN_INDEX) {
  const g = groups.get(d.category) ?? { count: 0, sample: [] as any };
  g.count++;
  if (g.sample.length < 4) (g.sample as any).push(d);
  groups.set(d.category, g);
 }
 const arr = Array.from(groups.entries());
 return (
  <section>
   <div className="mb-4">
    <p className="dim text-xs uppercase tracking-widest">The catalogue</p>
    <h2 className="font-display text-2xl sm:text-3xl mt-1">Fifteen Core domains, grouped by what they help you do.</h2>
   </div>
   <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {arr.map(([cat, g]) => (
     <li key={cat} className="panel p-5">
      <p className="font-display text-lg mb-2">{cat}</p>
      <ul className="flex flex-wrap gap-2 text-xs">
       {g.sample.map((d) => (
        <li key={d.id}>
         <Link href={`/domain/${d.id}`} className="chip">
          <span>{d.icon}</span> {d.name}
         </Link>
        </li>
       ))}
      </ul>
      <p className="dim text-xs mt-3">{g.count} domain{g.count > 1 ? "s" : ""} in this category</p>
     </li>
    ))}
   </ul>
   <div className="mt-4 text-center">
    <a href="#domains" className="chip">Jump to the full catalogue <ArrowRight size={12} /></a>
   </div>
  </section>
 );
}

export function HeroPrinciples() {
 const P = [
  { Icon: CheckCircle2, title: "XP only for real learning actions", body: "Never for time on screen. Never for empty taps." },
  { Icon: CheckCircle2, title: "Streak with a grace day",           body: "One missed day shouldn't nuke a long streak." },
  { Icon: CheckCircle2, title: "No FOMO, no infinite scroll",       body: "No guilt copy, no push notifications, no synthetic urgency." },
  { Icon: CheckCircle2, title: "Anti-overuse nudge",                body: "After about 45 minutes of an open session, a gentle reminder. Breaks help memory consolidate." }
 ];
 return (
  <section className="panel p-6 sm:p-8">
   <div className="mb-4">
    <p className="dim text-xs uppercase tracking-widest">Built ethically</p>
    <h2 className="font-display text-2xl sm:text-3xl mt-1">An honest game loop. No dark patterns.</h2>
   </div>
   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {P.map((p, i) => (
     <li key={i} className="flex items-start gap-3">
      <p.Icon size={18} className="hue mt-0.5 shrink-0" />
      <div>
       <p className="font-medium text-sm">{p.title}</p>
       <p className="dim text-sm">{p.body}</p>
      </div>
     </li>
    ))}
   </ul>
  </section>
 );
}

export function HeroFinalCTA() {
 return (
  <section className="panel hero-glow p-8 sm:p-12 text-center space-y-3">
   <Star size={24} className="hue mx-auto" />
   <h2 className="font-display text-2xl sm:text-3xl">Open one concept today.</h2>
   <p className="dim max-w-xl mx-auto">That is the whole ask. The rest of the app, achievements, spaced repetition, the dashboard, turns on as you go.</p>
   <div className="flex flex-wrap justify-center gap-2 pt-2">
    <a href="#domains" className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "var(--hue)", color: "#0b0d1a" }}>
     Pick a domain <ArrowRight size={14} />
    </a>
    <Link href="/skill-map" className="btn"><Compass size={14} /> See the Skill Map</Link>
    <Link href="/about" className="btn"><BookOpen size={14} /> Read the methodology</Link>
   </div>
  </section>
 );
}
