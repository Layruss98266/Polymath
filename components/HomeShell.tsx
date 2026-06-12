"use client";
import { ReactNode, useState } from "react";
import { useUserState } from "@/lib/state";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import { HubHero } from "./HubHero";
import { HubCatalogue } from "./HubCatalogue";
import { TodayCard } from "./TodayCard";
import { StartHereBento } from "./StartHereBento";
import { MoreForYouRow } from "./MoreForYouRow";
import { HomeStats } from "./HomeStats";
import { FeaturedPaths } from "./FeaturedPaths";
import { TrustStrip } from "./TrustStrip";
import { RecentActivityRail } from "./RecentActivityRail";
import { DOMAIN_INDEX } from "@/data/domains";

// Hub-style home. Visual hierarchy:
//   1. Hero (brand promise + search)
//   2. Returning-user context strip (Today + Recent) OR new-user stats
//   3. The catalogue (the product, given the most vertical real-estate)
//   4. Secondary surfaces (paths, recommendations, trust)
// Vertical rhythm uses two spacings: 40px between primary sections
// (space-y-10) and 24px between tight intra-section groupings.

export function HomeShell({
 quote, conceptOfDay, continueLearning, dailyQuest, sessionPicker, focusTimer
}: {
 quote: ReactNode; conceptOfDay: ReactNode; continueLearning: ReactNode;
 dailyQuest: ReactNode; sessionPicker: ReactNode; focusTimer: ReactNode;
}) {
 const s = useUserState();
 const [q, setQ] = useState("");
 const [expanded, setExpanded] = useState(false);
 // The catalogue is the product. Always-on. Persona-1 (Priya) flagged the
 // gate as a P0 and persona-2 (Rohit) agreed. The curated picks still sit
 // above as orientation, not a wall.
 const [showCatalogue, setShowCatalogue] = useState(true);
 const effectiveShowCatalogue = showCatalogue || q.trim().length > 0;

 const started = s.startedDomains.length;
 const xp = s.xp;
 const isReturning = started > 0;
 const isActive = started >= 3 || xp >= 100;

 return (
  <div className="space-y-10">
   <HubHero onSearch={setQ} />

   {/* First-time visitor: quiet scale line. Returning user: today numbers
       + the resume rail folded into a single context band. */}
   {!isReturning && <HomeStats />}

   {isReturning && (
    <div className="space-y-6">
     <TodayCard />
     {/* Combined resume context: one ritual pair, no duplicate
         "continue" + "recent" surfaces. */}
     <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3">
      {continueLearning}
      {conceptOfDay}
     </div>
     {sessionPicker}
     <RecentActivityRail />
    </div>
   )}

   {/* Curated orientation row. New users get the bento; returning users
       get the related-to-you recommendation. */}
   {!isReturning && <StartHereBento />}
   {isReturning && <MoreForYouRow />}

   {/* The product. Catalogue is the most-visited surface, so it sits
       directly under orientation with no extra section above it. */}
   <div id="all-domains" />
   {!effectiveShowCatalogue && (
    <div className="flex flex-col items-center gap-2 py-4">
     <button
      className="btn min-h-[44px] px-5"
      onClick={() => setShowCatalogue(true)}
      style={{ background: "var(--hue)", color: "var(--bg)", borderColor: "var(--hue)" }}
     >
      <Layers size={16} /> Browse all {DOMAIN_INDEX.length} domains
     </button>
     <p className="dim text-xs">Or use the Domains menu in the top bar at any time.</p>
    </div>
   )}
   {effectiveShowCatalogue && <HubCatalogue q={q} setQ={setQ} />}

   {/* Secondary surfaces below the catalogue. Curated paths first because
       they connect the catalogue to a goal. Trust strip sits last as quiet
       footer-adjacent context. */}
   <FeaturedPaths />

   {!isReturning && <TrustStrip />}

   {/* Optional ritual strip behind a single toggle so the page stays a hub */}
   <div className="flex justify-center pt-2">
    <button
     className="chip min-h-[36px] px-3"
     onClick={() => setExpanded((v) => !v)}
     aria-expanded={expanded}
    >
     {expanded ? <><ChevronUp size={12} /> Hide daily rituals</> : <><ChevronDown size={12} /> Show daily rituals</>}
    </button>
   </div>
   {expanded && (
    <div className="space-y-6">
     {quote}
     {!isReturning && conceptOfDay}
     {dailyQuest}
     {!isReturning && sessionPicker}
     {isActive && focusTimer}
    </div>
   )}
  </div>
 );
}
