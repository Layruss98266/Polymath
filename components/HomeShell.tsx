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
 // Show all 15 domains only when the user explicitly asks for it. New users
 // see 4 curated picks instead, so the catalogue does not overwhelm.
 // If the user types in the hero search though, auto-open the catalogue so
 // the typing has somewhere to land.
 const [showCatalogue, setShowCatalogue] = useState(false);
 const effectiveShowCatalogue = showCatalogue || q.trim().length > 0;

 const started = s.startedDomains.length;
 const xp = s.xp;
 const isReturning = started > 0;
 const isActive = started >= 3 || xp >= 100;

 return (
  <div className="space-y-6">
   <HubHero onSearch={setQ} />

   {/* Tiny stats strip immediately under the hero so a first-time visitor sees
       the scale of the catalogue without being asked to click anywhere. */}
   {!isReturning && <HomeStats />}

   {/* Today-at-a-glance numbers. Self-hides for absolute first-time visitors. */}
   <TodayCard />

   {/* Light rituals appear automatically for returning users */}
   {isReturning && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
     {continueLearning}
     {conceptOfDay}
    </div>
   )}

   {/* Returning users: surface their last 4 opened concepts as a one-click
       Pick up where you left off rail. Self-hides if empty. */}
   {isReturning && <RecentActivityRail />}

   {/* Progressive disclosure: new users see 4 curated picks; returning users
       see a related-to-you row. The full catalogue stays one click away. */}
   {!isReturning && <StartHereBento />}
   {isReturning && <MoreForYouRow />}

   {/* Curated paths surface multi-domain learning bundles. Visible to
       everyone. The new user picks a goal; the returning user gets a nudge
       toward a new bundle they haven't started. */}
   <FeaturedPaths />

   <div id="all-domains" />
   {!effectiveShowCatalogue && (
    <div className="flex flex-col items-center gap-2 py-4">
     <button
      className="btn"
      onClick={() => setShowCatalogue(true)}
      style={{ background: "var(--hue)", color: "#0b0d1a", borderColor: "var(--hue)" }}
     >
      <Layers size={14} /> Browse all {DOMAIN_INDEX.length} domains
     </button>
     <p className="dim text-xs">Or use the Domains menu in the top bar at any time.</p>
    </div>
   )}
   {effectiveShowCatalogue && <HubCatalogue q={q} setQ={setQ} />}

   {/* Trust strip: what this app is and is not. Sets expectations near the
       bottom of the page so the reader doesn't have to dig into /about. */}
   {!isReturning && <TrustStrip />}

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
