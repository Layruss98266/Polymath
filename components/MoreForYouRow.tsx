"use client";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";

// For returning users only. Surfaces 4 UNSTARTED domains from the same
// categories as the user's started domains, plus 1-2 wildcards from other
// categories, so the recommendation feels related but expands range.

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
   <header className="flex items-end justify-between gap-2 mb-3">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1">
      <Compass size={12} className="hue" /> More for you
     </p>
     <h2 className="font-display text-xl sm:text-2xl mt-1">Related to what you started</h2>
    </div>
    <Link href="#all-domains" className="dim text-xs hover:underline shrink-0 hidden sm:inline-flex items-center gap-1">
     Browse all <ArrowRight size={12} />
    </Link>
   </header>
   <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
    {picks.map((d) => (
     <li key={d.id}>
      <Link
       href={`/domain/${d.id}`}
       className="panel lift p-3 block"
       style={{ borderColor: `${d.hue}33` }}
      >
       <div className="flex items-center gap-2">
        <span
         aria-hidden="true"
         className="grid place-items-center w-9 h-9 rounded-xl text-lg shrink-0"
         style={{ background: `${d.hue}1f`, border: `1px solid ${d.hue}3a`, color: d.hue }}
        >{d.icon}</span>
        <div className="flex-1 min-w-0">
         <p className="text-sm font-medium truncate">{d.name}</p>
         <p className="dim text-[10px] uppercase tracking-widest">{d.category}</p>
        </div>
       </div>
       <p className="dim text-xs mt-2 line-clamp-2">{d.tagline}</p>
      </Link>
     </li>
    ))}
   </ul>
  </section>
 );
}
