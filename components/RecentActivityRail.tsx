"use client";
import Link from "next/link";
import { useMemo } from "react";
import { History, ArrowRight } from "lucide-react";
import { useUserState, useHydrated } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";
import { conceptPath } from "@/lib/tabs";

// Last 4 concepts the learner has opened, newest first. Self-hides if the
// list is empty so first-time visitors do not see a sad zero-state.
export function RecentActivityRail() {
 const s = useUserState();
 const hydrated = useHydrated();

 const rows = useMemo(() => {
  // ConceptProgress doesn't carry a timestamp today, so we surface the most
  // recent items by tail of the array. Newer entries are appended.
  const opened = s.conceptProgress.filter((c) => c.opened);
  return opened.slice(-4).reverse().map((cp) => {
   const e = DOMAIN_INDEX.find((d) => d.id === cp.domainId);
   return e ? { id: cp.domainId, idx: cp.conceptIndex, name: e.name, hue: e.hue, icon: e.icon } : null;
  }).filter((x): x is { id: string; idx: number; name: string; hue: string; icon: string } => !!x);
 }, [s.conceptProgress]);

 if (!hydrated || rows.length === 0) return null;

 return (
  <section aria-label="Pick up where you left off">
   <header className="flex items-end justify-between gap-2 mb-3">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1">
      <History size={12} className="hue" /> Recent
     </p>
     <h2 className="font-display text-xl sm:text-2xl mt-1">Pick up where you left off</h2>
    </div>
    <Link href="/my-list" className="dim text-xs hover:underline shrink-0 hidden sm:inline-flex items-center gap-1">
     My list <ArrowRight size={12} />
    </Link>
   </header>
   <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
    {rows.map((r) => (
     <li key={`${r.id}-${r.idx}`}>
      <Link
       href={conceptPath(r.id, r.idx)}
       className="panel lift p-3 block"
       style={{ borderColor: `${r.hue}33` }}
      >
       <div className="flex items-center gap-2">
        <span aria-hidden="true" className="grid place-items-center w-8 h-8 rounded-lg text-base shrink-0" style={{ background: `${r.hue}1f`, border: `1px solid ${r.hue}3a`, color: r.hue }}>{r.icon}</span>
        <div className="flex-1 min-w-0">
         <p className="text-xs dim uppercase tracking-widest truncate">{r.name}</p>
         <p className="text-sm font-medium">Concept #{r.idx + 1}</p>
        </div>
       </div>
      </Link>
     </li>
    ))}
   </ul>
  </section>
 );
}
