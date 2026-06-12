"use client";
import Link from "next/link";
import { useMemo } from "react";
import { Map, Sparkles, ArrowRight } from "lucide-react";
import { useUserState } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";
import { ConnectionsGraph } from "./ConnectionsGraph";

export function SkillMap() {
 const s = useUserState();
 const byCat = useMemo(() => {
  const m: Record<string, typeof DOMAIN_INDEX> = {};
  for (const d of DOMAIN_INDEX) (m[d.category] ??= []).push(d);
  return Object.entries(m);
 }, []);

 const touched = s.startedDomains.length;
 const total = DOMAIN_INDEX.length;

 return (
  <div className="space-y-5">
   {/* Hero */}
   <header className="space-y-2">
    <div className="flex items-center gap-2">
     <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
      <Map size={18} />
     </span>
     <p className="dim text-xs uppercase tracking-widest">The catalogue, mapped</p>
    </div>
    <h1 className="font-display text-3xl sm:text-4xl">Skill Map</h1>
    <p className="dim">Domains grouped by category. Touched ones glow. The point isn't to cover them all, it's to build a lattice across categories.</p>
    <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
     <span className="chip">{touched} of {total} touched</span>
     <span className="chip">{byCat.length} categories</span>
    </div>
   </header>

   {touched < 2 && (
    <section className="panel hero-glow p-5 sm:p-6 flex items-start gap-3">
     <Sparkles size={18} className="hue mt-1 shrink-0" />
     <div className="text-sm">
      <p className="font-medium">Connections graph unlocks at two domains.</p>
      <p className="dim mt-1">Open any second domain (Concepts tab, one reveal counts) and the cross-domain network appears here. It is the polymath payoff.</p>
     </div>
    </section>
   )}

   {touched >= 2 && <ConnectionsGraph />}

   <section className="space-y-4">
    {byCat.map(([cat, ds]) => {
     const catTouched = ds.filter((d) => s.startedDomains.includes(d.id)).length;
     return (
      <section key={cat} className="panel p-5">
       <header className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h2 className="font-display text-lg">{cat}</h2>
        <span className="dim text-xs">{catTouched} of {ds.length} touched</span>
       </header>
       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {ds.map((d) => {
         const isTouched = s.startedDomains.includes(d.id);
         return (
          <li key={d.id}>
           <Link
            href={`/domain/${d.id}`}
            className="panel lift block p-3 flex items-center gap-3"
            style={{
             borderColor: isTouched ? d.hue : "var(--line)",
             boxShadow: isTouched ? `0 0 22px ${d.hue}33` : undefined
            }}
            aria-label={`${d.name}${isTouched ? ", started" : ""}`}
           >
            <span className="text-2xl shrink-0" aria-hidden="true">{d.icon}</span>
            <span className="flex-1 min-w-0">
             <span className="block text-sm font-medium" style={{ color: isTouched ? d.hue : "var(--ink)" }}>{d.name}</span>
             <span className="dim text-xs truncate block">{d.tagline}</span>
            </span>
            <ArrowRight size={14} className="dim shrink-0" />
           </Link>
          </li>
         );
        })}
       </ul>
      </section>
     );
    })}
   </section>
  </div>
 );
}
