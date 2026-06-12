"use client";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { PATHS } from "@/data/paths";
import { DOMAIN_INDEX } from "@/data/domains";

// Curated multi-domain Paths surfaced on the home page. Each path is a
// learning bundle that crosses several domains; clicking lands on the first
// domain in the bundle with a deep link to its concepts list.
export function FeaturedPaths() {
 return (
  <section aria-label="Curated paths">
   <header className="flex items-end justify-between gap-2 mb-3">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1">
      <Compass size={12} className="hue" /> Curated paths
     </p>
     <h2 className="font-display text-xl sm:text-2xl mt-1">Pick a goal, follow the trail</h2>
    </div>
    <Link href="/my-list" className="dim text-xs hover:underline shrink-0 hidden sm:inline-flex items-center gap-1">
     See in My list <ArrowRight size={12} />
    </Link>
   </header>
   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {PATHS.map((p) => {
     const first = DOMAIN_INDEX.find((d) => d.id === p.domains[0]);
     const href = first ? `/domain/${first.id}/concepts` : "/my-list";
     return (
      <li key={p.id}>
       <Link
        href={href}
        className="panel lift p-4 block relative overflow-hidden"
        style={{ borderColor: `${p.hue}44` }}
       >
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: p.hue }} />
        <p className="dim text-[10px] uppercase tracking-widest" style={{ color: p.hue }}>{p.domains.length} domain path</p>
        <h3 className="font-display text-base sm:text-lg mt-0.5">{p.name}</h3>
        <p className="dim text-sm mt-1 line-clamp-2">{p.tagline}</p>
        <div className="flex flex-wrap gap-1 mt-2">
         {p.domains.map((id) => {
          const d = DOMAIN_INDEX.find((x) => x.id === id);
          if (!d) return null;
          return <span key={id} className="chip text-[10px]">{d.icon} {d.name}</span>;
         })}
        </div>
       </Link>
      </li>
     );
    })}
   </ul>
  </section>
 );
}
