"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";

// Returning-user recommendation row. Picks 3 related (same-category) and
// 1 wildcard. Reads as "here's where you could go next" rather than "where
// you've been". Distinct visual cue from RecentActivityRail.

export function MoreForYouRow() {
 const s = useUserState();
 const started = new Set(s.startedDomains);
 if (started.size === 0) return null;

 const startedCats = new Set(DOMAIN_INDEX.filter((d) => started.has(d.id)).map((d) => d.category));
 const candidates = DOMAIN_INDEX.filter((d) => !started.has(d.id));
 const related = candidates.filter((d) => startedCats.has(d.category));
 const wild = candidates.filter((d) => !startedCats.has(d.category));
 const picks = [...related.slice(0, 3), ...wild.slice(0, 1)].slice(0, 4);
 if (picks.length === 0) return null;

 return (
  <section aria-label="More for you">
   <header className="flex items-end justify-between gap-2 mb-4">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1.5">
      <Compass size={12} className="hue" aria-hidden="true" /> Recommended
     </p>
     <h2 className="font-display text-xl sm:text-2xl mt-1.5">Related to what you started</h2>
    </div>
    <Link
     href="#all-domains"
     className="dim text-xs hover:underline shrink-0 hidden sm:inline-flex items-center gap-1 min-h-[36px]"
    >
     Browse all <ArrowRight size={12} aria-hidden="true" />
    </Link>
   </header>
   <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
    {picks.map((d, i) => (
     <li key={d.id}>
      <Link
       href={`/domain/${d.id}`}
       className="panel lift p-4 block group h-full relative overflow-hidden"
       style={{ borderColor: `${d.hue}33` }}
      >
       <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px]" style={{ background: d.hue, opacity: 0.6 }} />
       <div className="flex items-center gap-3">
        <span
         aria-hidden="true"
         className="grid place-items-center w-10 h-10 rounded-xl text-xl shrink-0"
         style={{ background: `${d.hue}1f`, border: `1px solid ${d.hue}3a`, color: d.hue }}
        >{d.icon}</span>
        <div className="flex-1 min-w-0">
         <p className="text-sm font-medium truncate group-hover:underline">{d.name}</p>
         <p className="dim text-[10px] uppercase tracking-widest truncate">{i < 3 ? d.category : "Try something new"}</p>
        </div>
        <ArrowUpRight size={14} className="dim shrink-0" aria-hidden="true" />
       </div>
       <p className="dim text-xs mt-3 line-clamp-2 leading-relaxed">{d.tagline}</p>
      </Link>
     </li>
    ))}
   </ul>
  </section>
 );
}
