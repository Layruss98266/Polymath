"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useUserState } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";

// Picks up to three most recently touched domains so the user can resume
// in one click. Hidden until at least one domain is touched.
export function ContinueLearning() {
 const s = useUserState();
 if (s.startedDomains.length === 0) return null;
 const recent = [...s.startedDomains].slice(-3).reverse();
 return (
  <section className="panel p-4">
   <p className="text-xs uppercase tracking-widest dim mb-2">Continue learning</p>
   <ul className="flex flex-wrap gap-2">
    {recent.map((id) => {
     const e = DOMAIN_INDEX.find((d) => d.id === id);
     if (!e) return null;
     return (
      <li key={id}>
       <Link href={`/domain/${id}`} className="panel px-3 py-2 inline-flex items-center gap-2 text-sm" style={{ borderColor: e.hue }}>
        <span className="text-lg">{e.icon}</span>
        <span>{e.name}</span>
        <ArrowRight size={14} className="hue" />
       </Link>
      </li>
     );
    })}
   </ul>
  </section>
 );
}
