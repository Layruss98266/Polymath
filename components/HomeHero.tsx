"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Brain, Award, WifiOff, Sparkles, Globe } from "lucide-react";
import { useUserState } from "@/lib/state";

// Hero section assembly for Home. Shown above the catalogue. Pieces are
// conditionally rendered by HomeShell tier. The hero itself sits at the top.

export function HomeHero() {
 const s = useUserState();
 const isFresh = s.startedDomains.length === 0;

 return (
  <section className="relative">
   <div className="panel hero-glow p-6 sm:p-10 lg:p-14 relative overflow-hidden">
    <p className="dim text-xs uppercase tracking-widest mb-3">A daily learning loop</p>
    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-4xl">
     Learn anything.<br />
     <span className="hue">Two minutes a day.</span>
    </h1>
    <p className="dim text-base sm:text-lg max-w-2xl mt-4">
     Real frameworks. Real ranked resources. Real-world missions. Spaced repetition.
     {" "}An honest game loop with <strong className="ink">no dark patterns</strong>. XP only for genuine learning actions.
    </p>

    <div className="flex flex-wrap gap-2 mt-6">
     <a href="#domains" className="btn">{isFresh ? "Pick a domain" : "Browse domains"} <ArrowRight size={14} /></a>
     <Link href="/about" className="btn">How it works</Link>
    </div>

    <ul className="flex flex-wrap gap-2 mt-6 text-xs">
     <li className="chip"><ShieldCheck size={12} className="hue" /> No login</li>
     <li className="chip"><WifiOff size={12} className="hue" /> Works offline</li>
     <li className="chip"><Brain size={12} className="hue" /> FSRS spaced repetition</li>
     <li className="chip"><Award size={12} className="hue" /> 21 honest achievements</li>
     <li className="chip"><Globe size={12} className="hue" /> India localised</li>
    </ul>
   </div>
  </section>
 );
}

export function HeroFeatures() {
 const FEATURES = [
  { Icon: Brain,       title: "Test first, not read first", body: "Every concept opens with a prediction prompt. The small struggle to recall is what builds memory." },
  { Icon: Award,       title: "Calibrated confidence",      body: "Quizzes ask how sure you are. Confident-and-wrong, the most expensive mistake, gets surfaced." },
  { Icon: Sparkles,    title: "Concept quizzes that teach", body: "Wrong answers map to the specific misconception they represent, with the precise fix shown." },
  { Icon: ShieldCheck, title: "Epistemic honesty",          body: "Per-claim status badges. Steelman counter-views per domain. Real ranked resources with lastVerified dates." }
 ];
 return (
  <section className="space-y-3">
   <p className="dim text-xs uppercase tracking-widest">Why this works</p>
   <h2 className="font-display text-2xl sm:text-3xl">Built on what the learning research actually says.</h2>
   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
    {FEATURES.map((f, i) => (
     <li key={i} className="panel p-5">
      <f.Icon size={18} className="hue" />
      <p className="font-display text-lg mt-2">{f.title}</p>
      <p className="dim text-sm mt-1">{f.body}</p>
     </li>
    ))}
   </ul>
  </section>
 );
}

export function HeroHow() {
 const STEPS = [
  { n: "01", title: "Pick a domain", body: "From the catalogue below or via the onboarding goals." },
  { n: "02", title: "Open one concept", body: "Two minute action. Predict, reveal, reflect, save your note." },
  { n: "03", title: "Check yourself", body: "A 3 to 5 question concept quiz with misconception feedback." },
  { n: "04", title: "Come back tomorrow", body: "FSRS pulls due cards across every domain you have touched." }
 ];
 return (
  <section className="space-y-3">
   <p className="dim text-xs uppercase tracking-widest">The loop in four steps</p>
   <h2 className="font-display text-2xl sm:text-3xl">Daily, durable, and a little bit addictive.</h2>
   <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
    {STEPS.map((s) => (
     <li key={s.n} className="panel p-5">
      <p className="font-mono text-xs hue">{s.n}</p>
      <p className="font-display text-lg mt-1">{s.title}</p>
      <p className="dim text-sm mt-1">{s.body}</p>
     </li>
    ))}
   </ol>
  </section>
 );
}

export function HeroStats() {
 const STATS = [
  { n: "15", label: "Core domains" },
  { n: "7",  label: "Mastery tiers" },
  { n: "15", label: "SVG diagram kinds" },
  { n: "411",label: "Daily quotes" }
 ];
 return (
  <section className="panel p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
   {STATS.map((s, i) => (
    <div key={i}>
     <p className="font-display text-3xl sm:text-4xl">{s.n}</p>
     <p className="dim text-xs mt-1">{s.label}</p>
    </div>
   ))}
  </section>
 );
}
