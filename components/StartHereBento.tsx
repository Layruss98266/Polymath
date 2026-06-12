"use client";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";

// Curated "start here" surface for first-time visitors. 4 broadly-useful
// domains shown as larger bento tiles so a new user has 4 obvious next clicks
// instead of staring at 15 catalogue rows. The full catalogue is one click
// away below the fold.

const PICKS = ["psychology", "personal_finance", "communication", "mental_models"];

export function StartHereBento() {
 const picks = PICKS
  .map((id) => DOMAIN_INDEX.find((d) => d.id === id))
  .filter((d): d is NonNullable<typeof d> => !!d);

 if (picks.length === 0) return null;

 return (
  <section aria-label="Start here">
   <header className="flex items-end justify-between gap-2 mb-3">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1">
      <Sparkles size={12} className="hue" /> Start here
     </p>
     <h2 className="font-display text-xl sm:text-2xl mt-1">Four good first picks</h2>
    </div>
    <Link href="#all-domains" className="dim text-xs hover:underline shrink-0 hidden sm:inline-flex items-center gap-1">
     Browse all {DOMAIN_INDEX.length} <ArrowRight size={12} />
    </Link>
   </header>
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {picks.map((d, i) => (
     <Link
      key={d.id}
      href={`/domain/${d.id}`}
      className="panel lift p-4 sm:p-5 block group relative overflow-hidden"
      style={{ borderColor: `${d.hue}44` }}
     >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: d.hue }} />
      <div className="flex items-start gap-3">
       <span
        aria-hidden="true"
        className="grid place-items-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl text-2xl sm:text-3xl shrink-0"
        style={{ background: `${d.hue}1f`, border: `1px solid ${d.hue}3a`, color: d.hue }}
       >
        {d.icon}
       </span>
       <div className="flex-1 min-w-0">
        <p className="dim text-[10px] uppercase tracking-widest">{d.category}</p>
        <h3 className="font-display text-base sm:text-lg leading-tight mt-0.5">{d.name}</h3>
        <p className="dim text-xs sm:text-sm mt-1 line-clamp-2">{d.tagline}</p>
       </div>
       <span className="dim text-[10px] uppercase tracking-widest hidden sm:inline">{["First", "Second", "Third", "Fourth"][i]}</span>
      </div>
     </Link>
    ))}
   </div>
   <Link href="#all-domains" className="sm:hidden dim text-xs hover:underline mt-3 inline-flex items-center gap-1">
    Browse all {DOMAIN_INDEX.length} domains <ArrowRight size={12} />
   </Link>
  </section>
 );
}
