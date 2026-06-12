"use client";
import Link from "next/link";
import { Compass, ArrowRight, ArrowUpRight } from "lucide-react";
import { PATHS } from "@/data/paths";
import { DOMAIN_INDEX } from "@/data/domains";

// Curated multi-domain Paths. Each row is a single-purpose card: name,
// tagline, the trail of domains in tiny tinted dots. Clicking lands on the
// first domain's concepts list.
export function FeaturedPaths() {
 return (
  <section aria-label="Curated paths">
   <header className="flex items-end justify-between gap-2 mb-4">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1.5">
      <Compass size={12} className="hue" aria-hidden="true" /> Curated paths
     </p>
     <h2 className="font-display text-xl sm:text-2xl mt-1.5">Pick a goal, follow the trail</h2>
    </div>
    <Link
     href="/my-list"
     className="dim text-xs hover:underline shrink-0 hidden sm:inline-flex items-center gap-1 min-h-[36px]"
    >
     See in My list <ArrowRight size={12} aria-hidden="true" />
    </Link>
   </header>
   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {PATHS.map((p) => {
     const first = DOMAIN_INDEX.find((d) => d.id === p.domains[0]);
     const href = first ? `/domain/${first.id}/concepts` : "/my-list";
     const trail = p.domains
      .map((id) => DOMAIN_INDEX.find((x) => x.id === id))
      .filter((d): d is NonNullable<typeof d> => !!d);
     return (
      <li key={p.id}>
       <Link
        href={href}
        className="panel lift p-5 block group relative overflow-hidden h-full"
        style={{ borderColor: `${p.hue}44` }}
       >
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: p.hue }} />
        <div className="flex items-start gap-3">
         <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: p.hue }}>
           {p.domains.length} domain path
          </p>
          <h3 className="font-display text-lg sm:text-xl mt-1 group-hover:underline">{p.name}</h3>
          <p className="dim text-sm mt-2 leading-relaxed line-clamp-2">{p.tagline}</p>
         </div>
         <ArrowUpRight size={16} className="dim shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
        </div>
        {/* Trail of domain dots. Names show on the larger tiles only. */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
         {trail.map((d, i) => (
          <span key={d.id} className="inline-flex items-center gap-1.5 dim">
           {i > 0 && <span aria-hidden="true" className="opacity-50">·</span>}
           <span aria-hidden="true">{d.icon}</span>
           <span>{d.name}</span>
          </span>
         ))}
        </div>
       </Link>
      </li>
     );
    })}
   </ul>
  </section>
 );
}
