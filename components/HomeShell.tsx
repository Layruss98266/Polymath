"use client";
import { ReactNode, useState } from "react";
import { useUserState } from "@/lib/state";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

// Home is the most-visited page. Decide what to show based on user maturity:
// - Fresh user: hero + catalogue only. Hide rituals that have no context yet.
// - Returning user: + concept of the day + continue learning + daily quest.
// - Active user: + session picker + focus timer (Pomodoro is heavy for casuals).
// All sections that are hidden by default can be revealed via a single "Show more" toggle.
type Tier = "fresh" | "returning" | "active";

export function HomeShell({
 hero, quote, conceptOfDay, continueLearning, dailyQuest, sessionPicker, focusTimer, domainGrid
}: {
 hero: ReactNode; quote: ReactNode; conceptOfDay: ReactNode; continueLearning: ReactNode;
 dailyQuest: ReactNode; sessionPicker: ReactNode; focusTimer: ReactNode; domainGrid: ReactNode;
}) {
 const s = useUserState();
 const [expanded, setExpanded] = useState(false);

 const started = s.startedDomains.length;
 const xp = s.xp;
 const tier: Tier = started === 0 ? "fresh" : (started < 3 || xp < 100) ? "returning" : "active";

 const fresh = tier === "fresh";
 const showQuote = !fresh || expanded;
 const showConceptOfDay = (tier !== "fresh") || expanded;
 const showContinue = started > 0;
 const showQuest = started > 0 || expanded;
 const showSession = tier === "active" || expanded;
 const showTimer = tier === "active" || expanded;

 return (
  <div className="space-y-6">
   {hero}

   {fresh && (
    <section className="panel p-4 sm:p-5 flex items-start gap-3" style={{ borderColor: "var(--hue)" }}>
     <Sparkles size={18} className="hue mt-1 shrink-0" />
     <div className="text-sm">
      <p className="font-medium">First time? Pick a domain that interests you below.</p>
      <p className="dim mt-1">Open its Basics tab. Five minutes. The rest of the app (daily quest, spaced repetition, achievements) will turn on as you start learning.</p>
     </div>
    </section>
   )}

   {showQuote && quote}
   {showConceptOfDay && conceptOfDay}
   {showContinue && continueLearning}
   {showQuest && dailyQuest}
   {showSession && sessionPicker}
   {showTimer && focusTimer}

   {domainGrid}

   {/* Single expand toggle for everything hidden under the maturity rule */}
   {(fresh || tier === "returning") && (
    <div className="flex justify-center">
     <button className="chip" onClick={() => setExpanded((v) => !v)}>
      {expanded ? <><ChevronUp size={12} /> Show less</> : <><ChevronDown size={12} /> Show daily rituals</>}
     </button>
    </div>
   )}
  </div>
 );
}
