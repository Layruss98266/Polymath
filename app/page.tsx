import { Suspense } from "react";
import { DailyQuest } from "@/components/DailyQuest";
import { DailyQuote } from "@/components/DailyQuote";
import { SessionPicker } from "@/components/SessionPicker";
import { DomainGrid } from "@/components/DomainGrid";
import { LevelRing } from "@/components/LevelRing";
import { FocusTimer } from "@/components/FocusTimer";
import { ContinueLearning } from "@/components/ContinueLearning";
import { ConceptOfTheDay } from "@/components/ConceptOfTheDay";
import { HomeShell } from "@/components/HomeShell";

export default function HomePage() {
 return (
  <HomeShell
   hero={(
    <section className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
     <div className="panel hero-glow p-6 sm:p-8 space-y-3 relative overflow-hidden">
      <p className="dim text-xs uppercase tracking-widest">A daily learning loop</p>
      <h1 className="font-display text-4xl md:text-5xl leading-tight">
       Learn anything.<br />Two minutes a day.
      </h1>
      <p className="dim max-w-xl">
       Real frameworks. Real ranked resources. Real-world missions. Spaced repetition.
       An honest game loop with <strong className="ink">no dark patterns</strong>.
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
       <span className="chip">15 Core domains</span>
       <span className="chip">7 mastery tiers</span>
       <span className="chip">FSRS spaced repetition</span>
      </div>
     </div>
     <LevelRing />
    </section>
   )}
   quote={<DailyQuote />}
   conceptOfDay={<ConceptOfTheDay />}
   continueLearning={<ContinueLearning />}
   dailyQuest={<DailyQuest />}
   sessionPicker={<SessionPicker />}
   focusTimer={<FocusTimer />}
   domainGrid={<DomainGrid />}
  />
 );
}
