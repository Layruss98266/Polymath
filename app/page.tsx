import { DailyQuest } from "@/components/DailyQuest";
import { SessionPicker } from "@/components/SessionPicker";
import { DomainGrid } from "@/components/DomainGrid";
import { LevelRing } from "@/components/LevelRing";

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
            Real frameworks from the field's best minds, real ranked resources, real-world missions, spaced repetition, and an honest game loop.
            <strong className="ink"> No dark patterns.</strong> XP only for genuine learning actions.
          </p>
        </div>
        <LevelRing />
      </section>

      <DailyQuest />
      <SessionPicker />
      <DomainGrid />
    </div>
  );
}
