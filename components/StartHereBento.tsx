"use client";
import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";

// Curated "start here" surface for first-time visitors. Asymmetric bento
// so a new user feels they're being given an entry, not asked to choose
// between equally-weighted options. First pick is the hero tile, the rest
// are quiet supporting tiles.

const PICKS = ["psychology", "personal_finance", "communication", "mental_models"];

export function StartHereBento() {
 const picks = PICKS
  .map((id) => DOMAIN_INDEX.find((d) => d.id === id))
  .filter((d): d is NonNullable<typeof d> => !!d);

 if (picks.length === 0) return null;
 const [hero, ...rest] = picks;

 return (
  <section aria-label="Start here">
   <header className="flex items-end justify-between gap-2 mb-4">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1.5">
      <Sparkles size={12} className="hue" aria-hidden="true" /> Start here
     </p>
     <h2 className="font-display text-xl sm:text-2xl mt-1.5">Four good first picks</h2>
    </div>
    <Link
     href="#all-domains"
     className="dim text-xs hover:underline shrink-0 hidden sm:inline-flex items-center gap-1 min-h-[36px]"
    >
     Browse all {DOMAIN_INDEX.length} <ArrowRight size={12} aria-hidden="true" />
    </Link>
   </header>

   <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-3">
    {/* Hero tile */}
    <Link
     href={`/domain/${hero.id}`}
     className="panel lift p-5 sm:p-6 block group relative overflow-hidden"
     style={{ borderColor: `${hero.hue}55` }}
    >
     <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: hero.hue }} />
     <div className="flex items-start gap-4">
      <span
       aria-hidden="true"
       className="grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-3xl sm:text-4xl shrink-0"
       style={{ background: `${hero.hue}1f`, border: `1px solid ${hero.hue}3a`, color: hero.hue }}
      >
       {hero.icon}
      </span>
      <div className="flex-1 min-w-0">
       <p className="dim text-[10px] uppercase tracking-widest">{hero.category} · First pick</p>
       <h3 className="font-display text-xl sm:text-2xl leading-tight mt-1 group-hover:underline">{hero.name}</h3>
       <p className="dim text-sm mt-2 leading-relaxed">{hero.tagline}</p>
      </div>
      <ArrowUpRight size={18} className="dim shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
     </div>
    </Link>

    {/* Supporting trio stacked on desktop, grid on mobile */}
    <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
     {rest.map((d) => (
      <li key={d.id}>
       <Link
        href={`/domain/${d.id}`}
        className="panel lift p-3 sm:p-4 block group h-full"
        style={{ borderColor: `${d.hue}33` }}
       >
        <div className="flex items-center gap-3">
         <span
          aria-hidden="true"
          className="grid place-items-center w-10 h-10 rounded-xl text-xl shrink-0"
          style={{ background: `${d.hue}1f`, border: `1px solid ${d.hue}3a`, color: d.hue }}
         >
          {d.icon}
         </span>
         <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate group-hover:underline">{d.name}</p>
          <p className="dim text-[10px] uppercase tracking-widest truncate">{d.category}</p>
         </div>
         <ArrowUpRight size={14} className="dim shrink-0" aria-hidden="true" />
        </div>
       </Link>
      </li>
     ))}
    </ul>
   </div>

   <Link
    href="#all-domains"
    className="sm:hidden dim text-xs hover:underline mt-3 inline-flex items-center gap-1 min-h-[36px]"
   >
    Browse all {DOMAIN_INDEX.length} domains <ArrowRight size={12} aria-hidden="true" />
   </Link>
  </section>
 );
}
