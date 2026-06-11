"use client";
import { useEffect, useMemo, useState } from "react";
import type { Domain } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { masteryPct } from "@/lib/mastery";
import { domainRank } from "@/lib/xp";
import { BasicsTab } from "./tabs/BasicsTab";
import { DiagramTab } from "./tabs/DiagramTab";
import { ConceptsTab } from "./tabs/ConceptsTab";
import { RoadmapTab } from "./tabs/RoadmapTab";
import { ResourcesTab } from "./tabs/ResourcesTab";
import { MissionsTab } from "./tabs/MissionsTab";
import { QuizTab } from "./tabs/QuizTab";
import { FlashcardsTab } from "./tabs/FlashcardsTab";
import { CheatsheetTab } from "./tabs/CheatsheetTab";
import { CounterViewTab } from "./tabs/CounterViewTab";
import { MentorStrip } from "./MentorStrip";

const TABS = [
  "Basics", "Diagram", "Concepts", "Zero→Grandmaster",
  "Resources", "Missions", "Quiz", "Flashcards",
  "Cheat-sheet", "Counter-view"
] as const;
type Tab = typeof TABS[number];

export function DomainView({ domain }: { domain: Domain }) {
  const s = useUserState();
  const a = useActions();
  const [tab, setTab] = useState<Tab>("Basics");

  useEffect(() => { a.startDomain(domain.id); }, [domain.id, a]);

  const dp = s.domainProgress[domain.id];
  const m = useMemo(() => masteryPct(domain, dp), [domain, dp]);
  const rank = useMemo(() => domainRank(m), [m]);

  // Set the domain hue via inline CSS var so theme + accent both work everywhere on this page.
  const style = useMemo(() => ({ ["--hue" as any]: domain.hue }), [domain.hue]);

  return (
    <div className="space-y-5" style={style}>
      <header className="panel p-5 flex flex-wrap items-start gap-4">
        <div className="text-5xl">{domain.icon}</div>
        <div className="flex-1 min-w-[200px]">
          <p className="dim text-xs uppercase tracking-widest">{domain.category}</p>
          <h1 className="font-display text-3xl md:text-4xl">{domain.name}</h1>
          <p className="dim">{domain.tagline}</p>
        </div>
        <div className="text-right">
          <p className="text-xs dim">Your rank</p>
          <p className="font-display text-xl hue">{rank}</p>
          <p className="text-xs dim">{Math.round(m * 100)}% mastery</p>
        </div>
      </header>

      <MentorStrip mentors={domain.mentors} />

      {domain.safetyNote && (
        <div className="panel p-3 text-sm" style={{ borderColor: "var(--hue)" }}>
          <strong>Note: </strong><span className="dim">{domain.safetyNote}</span>
        </div>
      )}

      <nav className="flex flex-wrap gap-2" role="tablist">
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`chip ${tab === t ? "ring-1 hue" : ""}`}
            style={tab === t ? { borderColor: "var(--hue)" } : {}}
          >
            {t}
          </button>
        ))}
      </nav>

      <section role="tabpanel" className="space-y-4">
        {tab === "Basics" && <BasicsTab d={domain} />}
        {tab === "Diagram" && <DiagramTab d={domain} />}
        {tab === "Concepts" && <ConceptsTab d={domain} />}
        {tab === "Zero→Grandmaster" && <RoadmapTab d={domain} />}
        {tab === "Resources" && <ResourcesTab d={domain} />}
        {tab === "Missions" && <MissionsTab d={domain} />}
        {tab === "Quiz" && <QuizTab d={domain} />}
        {tab === "Flashcards" && <FlashcardsTab d={domain} />}
        {tab === "Cheat-sheet" && <CheatsheetTab d={domain} />}
        {tab === "Counter-view" && <CounterViewTab d={domain} />}
      </section>
    </div>
  );
}
