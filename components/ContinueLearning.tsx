"use client";
import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { useUserState } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";

// Up to three most recently touched domains, resume-in-one-click. Hidden
// until at least one domain is touched. Paired with ConceptOfTheDay in
// HomeShell so the two ritual surfaces share a row.
export function ContinueLearning() {
 const s = useUserState();
 if (s.startedDomains.length === 0) return null;
 const recent = [...s.startedDomains].slice(-3).reverse();
 const lastByDomain = s.lastConceptByDomain ?? {};
 return (
  <section className="panel p-4 sm:p-5 h-full" aria-label="Continue learning">
   <header className="flex items-center gap-2 mb-3">
    <Bookmark size={14} className="hue" aria-hidden="true" />
    <p className="text-[11px] uppercase tracking-widest dim">Continue learning</p>
   </header>
   <ul className="flex flex-wrap gap-2">
    {recent.map((id) => {
     const e = DOMAIN_INDEX.find((d) => d.id === id);
     if (!e) return null;
     const lastIdx = lastByDomain[id];
     const href = typeof lastIdx === "number" ? `/domain/${id}/concepts/${lastIdx}` : `/domain/${id}`;
     return (
      <li key={id}>
       <Link
        href={href}
        className="panel px-3 py-2 inline-flex items-center gap-2 text-sm min-h-[40px]"
        style={{ borderColor: `${e.hue}66` }}
       >
        <span aria-hidden="true" className="text-lg">{e.icon}</span>
        <span>{e.name}</span>
        <ArrowRight size={14} aria-hidden="true" style={{ color: e.hue }} />
       </Link>
      </li>
     );
    })}
   </ul>
  </section>
 );
}
