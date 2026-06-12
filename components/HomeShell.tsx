"use client";
import { ReactNode, useState } from "react";
import { useUserState } from "@/lib/state";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { HomeHero, HeroFeatures, HeroHow, HeroStats, HeroCategories, HeroPrinciples, HeroFinalCTA } from "./HomeHero";
import { LevelRing } from "./LevelRing";

type Tier = "fresh" | "returning" | "active";

export function HomeShell({
 quote, conceptOfDay, continueLearning, dailyQuest, sessionPicker, focusTimer, domainGrid
}: {
 quote: ReactNode; conceptOfDay: ReactNode; continueLearning: ReactNode;
 dailyQuest: ReactNode; sessionPicker: ReactNode; focusTimer: ReactNode; domainGrid: ReactNode;
}) {
 const s = useUserState();
 const [expanded, setExpanded] = useState(false);

 const started = s.startedDomains.length;
 const xp = s.xp;
 const tier: Tier = started === 0 ? "fresh" : (started < 3 || xp < 100) ? "returning" : "active";

 const fresh = tier === "fresh";

 // For returning + active users we collapse the marketing strip and surface their rituals.
 if (!fresh) {
  return (
   <div className="space-y-6">
    <section className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
     <HomeHero />
     <LevelRing />
    </section>
    {quote}
    {conceptOfDay}
    {continueLearning}
    {dailyQuest}
    {tier === "active" && sessionPicker}
    {tier === "active" && focusTimer}
    <div id="domains" className="scroll-mt-20">{domainGrid}</div>
   </div>
  );
 }

 // Fresh user: full landing experience.
 return (
  <div className="space-y-10 sm:space-y-12">
   <HomeHero />

   <HeroStats />

   <HeroHow />

   <HeroFeatures />

   <HeroCategories />

   <HeroPrinciples />

   {/* First-time hint sits just above the catalogue */}
   <section className="panel p-4 sm:p-5 flex items-start gap-3" style={{ borderColor: "var(--hue)" }}>
    <Sparkles size={18} className="hue mt-1 shrink-0" />
    <div className="text-sm">
     <p className="font-medium">Ready? Pick a domain below.</p>
     <p className="dim mt-1">Open its Basics tab. Five minutes. The rest of the app, daily quest, spaced repetition, achievements, turns on as you start learning.</p>
    </div>
   </section>

   <div id="domains" className="scroll-mt-20 space-y-3">
    {domainGrid}
   </div>

   {/* Optional daily rituals for the curious fresh visitor */}
   {expanded && (
    <div className="space-y-4">
     {quote}
     {conceptOfDay}
     {dailyQuest}
     {sessionPicker}
     {focusTimer}
    </div>
   )}
   <div className="flex justify-center">
    <button className="chip" onClick={() => setExpanded((v) => !v)}>
     {expanded ? <><ChevronUp size={12} /> Hide daily rituals</> : <><ChevronDown size={12} /> Preview the daily rituals</>}
    </button>
   </div>

   <HeroFinalCTA />
  </div>
 );
}
