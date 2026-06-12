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
import { RankBadge } from "./RankBadge";
import { BookOpen, Brain, GraduationCap, MoreHorizontal, Lock } from "lucide-react";

type Tab =
 | "Basics" | "Concepts" | "Quiz" | "Flashcards"
 | "Diagram" | "Roadmap" | "Resources" | "Missions"
 | "Cheatsheet" | "Counter";

// Three groups, surfaced progressively. Tabs unlock as the learner progresses,
// so a first time visitor sees Basics + Concepts only and is not overwhelmed.
// A "Show all" toggle lets power users override.
type Group = "Discover" | "Practice" | "Reference";
const GROUPS: { id: Tab; group: Group; label: string; unlock: (m: number, opened: number, total: number) => boolean }[] = [
 // Discover
 { id: "Basics",     group: "Discover",  label: "Basics",     unlock: () => true },
 { id: "Concepts",   group: "Discover",  label: "Concepts",   unlock: () => true },
 { id: "Diagram",    group: "Discover",  label: "Diagram",    unlock: (m, o)    => o >= 1 || m >= 0.10 },
 // Practice
 { id: "Quiz",       group: "Practice",  label: "Quiz",       unlock: (m, o)    => o >= 1 || m >= 0.05 },
 { id: "Flashcards", group: "Practice",  label: "Flashcards", unlock: (m, o)    => o >= 2 || m >= 0.10 },
 { id: "Missions",   group: "Practice",  label: "Missions",   unlock: (m, o, t) => o >= Math.ceil(t * 0.3) || m >= 0.20 },
 // Reference
 { id: "Roadmap",    group: "Reference", label: "Roadmap",    unlock: (m, o)    => o >= 1 || m >= 0.05 },
 { id: "Resources",  group: "Reference", label: "Resources",  unlock: (m, o)    => o >= 1 || m >= 0.05 },
 { id: "Cheatsheet", group: "Reference", label: "Cheat sheet",unlock: (m, o, t) => o >= Math.ceil(t * 0.5) || m >= 0.30 },
 { id: "Counter",    group: "Reference", label: "Counter view",unlock:(m, o, t) => o >= Math.ceil(t * 0.5) || m >= 0.30 }
];

function GroupIcon({ g }: { g: Group }) {
 if (g === "Discover")  return <BookOpen size={12} />;
 if (g === "Practice")  return <Brain size={12} />;
 return <GraduationCap size={12} />;
}

export function DomainView({ domain }: { domain: Domain }) {
 const s = useUserState();
 const a = useActions();
 const [tab, setTab] = useState<Tab>("Basics");
 const [showAll, setShowAll] = useState(false);
 const [overflowOpen, setOverflowOpen] = useState(false);

 useEffect(() => { a.startDomain(domain.id); }, [domain.id, a]);

 const dp = s.domainProgress[domain.id];
 const m = useMemo(() => masteryPct(domain, dp), [domain, dp]);
 const rank = useMemo(() => domainRank(m), [m]);
 const opened = dp?.conceptsOpened ?? 0;
 const totalConcepts = domain.concepts.length;

 const style = useMemo(() => ({ ["--hue" as any]: domain.hue }), [domain.hue]);

 const unlocked = useMemo(() => {
  const set = new Set<Tab>();
  for (const t of GROUPS) if (t.unlock(m, opened, totalConcepts)) set.add(t.id);
  return set;
 }, [m, opened, totalConcepts]);

 // Show only Discover by default and Practice once practice unlocks; Reference
 // lives behind a "More" overflow chip unless showAll is on.
 const primary = useMemo(() => GROUPS.filter((t) => (t.group === "Discover" || t.group === "Practice") && (showAll || unlocked.has(t.id))), [showAll, unlocked]);
 const overflow = useMemo(() => GROUPS.filter((t) => t.group === "Reference" && (showAll || unlocked.has(t.id))), [showAll, unlocked]);
 const lockedHidden = GROUPS.filter((t) => !unlocked.has(t.id));

 // Make sure the active tab stays valid as unlocks shift
 useEffect(() => {
  if (!unlocked.has(tab) && !showAll) setTab("Basics");
 }, [unlocked, tab, showAll]);

 const Panel = () => {
  switch (tab) {
   case "Basics":     return <BasicsTab d={domain} />;
   case "Concepts":   return <ConceptsTab d={domain} />;
   case "Quiz":       return <QuizTab d={domain} />;
   case "Flashcards": return <FlashcardsTab d={domain} />;
   case "Diagram":    return <DiagramTab d={domain} />;
   case "Roadmap":    return <RoadmapTab d={domain} />;
   case "Resources":  return <ResourcesTab d={domain} />;
   case "Missions":   return <MissionsTab d={domain} />;
   case "Cheatsheet": return <CheatsheetTab d={domain} />;
   case "Counter":    return <CounterViewTab d={domain} />;
  }
 };

 return (
  <div className="space-y-4" style={style}>
   {/* Header: cleaner, accent on rank, mastery as progress bar */}
   <header className="panel p-4 sm:p-5">
    <div className="flex items-start gap-3 sm:gap-4">
     <div className="grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-3xl sm:text-4xl shrink-0" style={{ background: `${domain.hue}22`, border: `1px solid ${domain.hue}44` }}>
      {domain.icon}
     </div>
     <div className="flex-1 min-w-0">
      <p className="dim text-[11px] uppercase tracking-widest">{domain.category}</p>
      <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight truncate">{domain.name}</h1>
      <p className="dim text-sm mt-1 line-clamp-2">{domain.tagline}</p>
     </div>
     <div className="text-right shrink-0">
      <RankBadge rank={rank} size="md" showName={false} />
      <p className="text-[11px] dim mt-1">{rank}</p>
     </div>
    </div>
    {/* Mastery bar */}
    <div className="mt-3">
     <div className="flex items-center justify-between text-[11px] dim mb-1">
      <span>Mastery</span><span>{Math.round(m * 100)}%</span>
     </div>
     <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
      <div className="h-full" style={{ width: `${Math.round(m * 100)}%`, background: domain.hue, transition: "width .3s" }} />
     </div>
    </div>
   </header>

   {domain.safetyNote && (
    <div className="panel p-3 text-sm" style={{ borderColor: "var(--hue)" }}>
     <strong>Note. </strong><span className="dim">{domain.safetyNote}</span>
    </div>
   )}

   {/* Tabs: primary visible, Reference behind More, locked items hidden but counted */}
   <nav className="flex gap-2 overflow-x-auto no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap items-center" role="tablist" aria-label="Domain sections">
    {primary.map((t) => (
     <button
      key={t.id}
      role="tab"
      aria-selected={tab === t.id}
      onClick={() => { setTab(t.id); setOverflowOpen(false); }}
      className={`chip shrink-0 ${tab === t.id ? "ring-1" : ""}`}
      style={tab === t.id ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
     >
      <GroupIcon g={t.group} /> {t.label}
     </button>
    ))}

    {overflow.length > 0 && (
     <div className="relative shrink-0">
      <button
       className="chip"
       onClick={() => setOverflowOpen((v) => !v)}
       aria-expanded={overflowOpen}
       aria-haspopup="menu"
      >
       <MoreHorizontal size={12} /> More ({overflow.length})
      </button>
      {overflowOpen && (
       <div role="menu" className="absolute right-0 mt-2 panel p-2 z-20 min-w-[200px] shadow-xl">
        {overflow.map((t) => (
         <button
          key={t.id}
          role="menuitem"
          onClick={() => { setTab(t.id); setOverflowOpen(false); }}
          className="w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2"
          style={tab === t.id ? { background: "rgba(255,255,255,0.04)", color: "var(--hue)" } : {}}
         >
          <GroupIcon g={t.group} /> {t.label}
         </button>
        ))}
       </div>
      )}
     </div>
    )}

    {lockedHidden.length > 0 && !showAll && (
     <button
      className="chip dim shrink-0 ml-auto"
      title="Some tabs unlock as you progress. Click to show all."
      onClick={() => setShowAll(true)}
     >
      <Lock size={11} /> {lockedHidden.length} locked
     </button>
    )}
    {showAll && (
     <button className="chip dim shrink-0 ml-auto" onClick={() => setShowAll(false)}>Hide advanced</button>
    )}
   </nav>

   {/* Tiny hint for the very first state */}
   {opened === 0 && tab === "Basics" && (
    <p className="dim text-xs">More sections unlock as you start opening Concepts. Or hit <em>{lockedHidden.length} locked</em> to show everything now.</p>
   )}

   <section role="tabpanel"><Panel /></section>
  </div>
 );
}
