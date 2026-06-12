import { DailyQuest } from "@/components/DailyQuest";
import { DailyQuote } from "@/components/DailyQuote";
import { SessionPicker } from "@/components/SessionPicker";
import { DomainGrid } from "@/components/DomainGrid";
import { LevelRing } from "@/components/LevelRing";
import { FocusTimer } from "@/components/FocusTimer";
import { ContinueLearning } from "@/components/ContinueLearning";

export default function HomePage() {
 return (
  <div className="space-y-6">
   <section className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4">
    <div className="panel p-6 space-y-3">
     <p className="dim text-xs uppercase tracking-widest">A daily learning loop</p>
     <h1 className="font-display text-4xl md:text-5xl leading-tight">
      Learn anything.<br />Two minutes a day.
     </h1>
     <p className="dim max-w-xl">
      Real frameworks. Real ranked resources. Real-world missions. Spaced repetition.
      An honest game loop with <strong className="ink">no dark patterns</strong>. XP only for genuine learning actions.
     </p>
    </div>
    <LevelRing />
   </section>

   <DailyQuote />
   <ContinueLearning />
   <DailyQuest />
   <SessionPicker />
   <FocusTimer />
   <DomainGrid />
  </div>
 );
}
