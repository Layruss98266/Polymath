"use client";
import { ReactNode, useState } from "react";
import { useUserState } from "@/lib/state";
import { ChevronDown, ChevronUp } from "lucide-react";
import { HubHero } from "./HubHero";
import { HubCatalogue } from "./HubCatalogue";

// Hub-style home. Hero, catalogue, optional rituals strip. No long marketing
// landing here, that lives on /about.

export function HomeShell({
 quote, conceptOfDay, continueLearning, dailyQuest, sessionPicker, focusTimer
}: {
 quote: ReactNode; conceptOfDay: ReactNode; continueLearning: ReactNode;
 dailyQuest: ReactNode; sessionPicker: ReactNode; focusTimer: ReactNode;
}) {
 const s = useUserState();
 const [q, setQ] = useState("");
 const [expanded, setExpanded] = useState(false);

 const started = s.startedDomains.length;
 const xp = s.xp;
 const isReturning = started > 0;
 const isActive = started >= 3 || xp >= 100;

 return (
  <div className="space-y-6">
   <HubHero onSearch={setQ} />

   {/* Light rituals appear automatically for returning users */}
   {isReturning && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
     {continueLearning}
     {conceptOfDay}
    </div>
   )}

   <HubCatalogue q={q} setQ={setQ} />

   {/* Optional ritual strip behind a single toggle so the page stays a hub */}
   <div className="flex justify-center pt-2">
    <button className="chip" onClick={() => setExpanded((v) => !v)}>
     {expanded ? <><ChevronUp size={12} /> Hide daily rituals</> : <><ChevronDown size={12} /> Show daily rituals</>}
    </button>
   </div>
   {expanded && (
    <div className="space-y-4">
     {quote}
     {!isReturning && conceptOfDay}
     {dailyQuest}
     {isActive && sessionPicker}
     {isActive && focusTimer}
    </div>
   )}
  </div>
 );
}
