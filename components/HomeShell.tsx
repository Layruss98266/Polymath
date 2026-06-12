"use client";
import { ReactNode, useState } from "react";
import { useUserState } from "@/lib/state";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { HomeHero, HeroFeatures, HeroHow, HeroStats } from "./HomeHero";
import { LevelRing } from "./LevelRing";

// Home is the most-visited page. Decide what to show based on user maturity:
// - Fresh user: full marketing hero (hero, stats, features, how) + catalogue. No empty rituals.
// - Returning user: compact hero + concept of the day + continue + daily quest + catalogue.
// - Active user: compact hero + level ring + every ritual.
// All hidden sections can be revealed with a single "Show more" toggle.
type Tier = "fresh" | "returning" | "active";

export function HomeShell({
 hero, quote, conceptOfDay, continueLearning, dailyQuest, sessionPicker, focusTimer, domainGrid
}: {
 hero?: ReactNode; quote: ReactNode; conceptOfDay: ReactNode; continueLearning: ReactNode;
 dailyQuest: ReactNode; sessionPicker: ReactNode; focusTimer: ReactNode; domainGrid: ReactNode;
}) {
 const s = useUserState();
 const [expanded, setExpanded] = useState(false);

 const started = s.startedDomains.length;
 const xp = s.xp;
 const tier: Tier = started === 0 ? "fresh" : (started < 3 || xp < 100) ? "returning" : "active";

 const fresh = tier === "fresh";
 const showQuote          = !fresh || expanded;
 const showConceptOfDay   = (tier !== "fresh") || expanded;
 const showContinue       = started > 0;
 const showQuest          = started > 0 || expanded;
 const showSession        = tier === "active" || expanded;
 const showTimer          = tier === "active" || expanded;
 const showMarketingHero  = fresh && !expanded;
 const showRingSplit      = !fresh;

 return (
  <div className="space-y-6">
   {/* Marketing hero for fresh users: big and self contained. */}
   {showMarketingHero && (
    <>
     <HomeHero />
     <HeroStats />
     <HeroHow />
     <HeroFeatures />
    </>
   )}

   {/* Returning + active users get a compact hero with the level ring beside it. */}
   {showRingSplit && (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
     {hero ?? <HomeHero />}
     <LevelRing />
    </section>
   )}

   {fresh && (
    <section className="panel p-4 sm:p-5 flex items-start gap-3" style={{ borderColor: "var(--hue)" }}>
     <Sparkles size={18} className="hue mt-1 shrink-0" />
     <div className="text-sm">
      <p className="font-medium">First time? Pick a domain below.</p>
      <p className="dim mt-1">Open its Basics tab. Five minutes. The rest of the app turns on as you start learning.</p>
     </div>
    </section>
   )}

   {showQuote && quote}
   {showConceptOfDay && conceptOfDay}
   {showContinue && continueLearning}
   {showQuest && dailyQuest}
   {showSession && sessionPicker}
   {showTimer && focusTimer}

   <div id="domains" className="scroll-mt-20">
    {domainGrid}
   </div>

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
