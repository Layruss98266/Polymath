"use client";
import Link from "next/link";
import { useMemo } from "react";
import { useUserState } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";

export function SkillMap() {
 const s = useUserState();
 const byCat = useMemo(() => {
  const m: Record<string, typeof DOMAIN_INDEX> = {};
  for (const d of DOMAIN_INDEX) (m[d.category] ??= []).push(d);
  return Object.entries(m);
 }, []);

 return (
  <div className="space-y-5">
   <h1 className="font-display text-3xl">Skill Map</h1>
   <p className="dim text-sm">Domains grouped by category. Touched domains glow, the goal isn't to cover them all, but to build a useful lattice across categories.</p>
   {byCat.map(([cat, ds]) => (
    <section key={cat} className="panel p-5">
     <h2 className="font-display text-lg mb-3">{cat}</h2>
     <div className="flex flex-wrap gap-2">
      {ds.map((d) => {
       const touched = s.startedDomains.includes(d.id);
       return (
        <Link
         key={d.id}
         href={`/domain/${d.id}`}
         className="border rounded-xl px-3 py-2 flex items-center gap-2"
         style={{
          borderColor: touched ? d.hue : "var(--line)",
          boxShadow: touched ? `0 0 16px ${d.hue}40` : "none"
         }}
         aria-label={`${d.name}${touched ? " (started)" : ""}`}
        >
         <span className="text-xl">{d.icon}</span>
         <span className="text-sm">{d.name}</span>
        </Link>
       );
      })}
     </div>
    </section>
   ))}
  </div>
 );
}
