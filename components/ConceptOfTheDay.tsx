"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Lightbulb, ArrowRight } from "lucide-react";
import { useUserState, useTodayKey, useHydrated } from "@/lib/state";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";

// Picks a single concept across the user's started domains, deterministically
// rotating by date. Falls back to a random Core domain if no domain has been
// started yet. Pairs visually with ContinueLearning in HomeShell.

function pickIndex(seed: string, n: number) {
 let h = 0;
 for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
 return Math.abs(h) % Math.max(1, n);
}

export function ConceptOfTheDay() {
 const s = useUserState();
 const hydrated = useHydrated();
 const day = useTodayKey();
 const [data, setData] = useState<{ domainId: string; conceptIndex: number; domainName: string; hue: string; title: string; one: string } | null>(null);

 useEffect(() => {
  if (!hydrated || !day) return;
  const pool = s.startedDomains.length > 0 ? s.startedDomains : DOMAIN_INDEX.map((d) => d.id);
  const di = pickIndex(day, pool.length);
  const domainId = pool[di];
  const entry = DOMAIN_INDEX.find((d) => d.id === domainId);
  if (!entry) return;
  let cancelled = false;
  loadDomain(domainId).then((d) => {
   if (cancelled) return;
   const ci = pickIndex(day + ":" + domainId, d.concepts.length);
   const c = d.concepts[ci];
   const oneLine = c.definition ?? c.short ?? c.deep.split(/[.!?]/)[0];
   setData({ domainId, conceptIndex: ci, domainName: entry.name, hue: entry.hue, title: c.t, one: oneLine });
  }).catch(() => {});
  return () => { cancelled = true; };
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [hydrated, day, s.startedDomains]);

 if (!data) return null;
 return (
  <section
   className="panel p-4 sm:p-5 h-full relative overflow-hidden"
   style={{ borderColor: `${data.hue}66` }}
   aria-label="Concept of the day"
  >
   <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: data.hue }} />
   <header className="flex items-center gap-2 mb-3">
    <Lightbulb size={14} className="hue" aria-hidden="true" />
    <p className="text-[11px] uppercase tracking-widest dim">Concept of the day · {data.domainName}</p>
   </header>
   <div className="flex items-start gap-3">
    <div className="flex-1 min-w-0">
     <p className="font-display text-lg sm:text-xl leading-tight">{data.title}</p>
     <p className="dim text-sm mt-2 leading-relaxed line-clamp-3">{data.one}</p>
    </div>
    <Link
     href={`/domain/${data.domainId}/concepts/${data.conceptIndex}`}
     className="btn shrink-0 hidden sm:inline-flex min-h-[40px]"
    >Open <ArrowRight size={14} aria-hidden="true" /></Link>
   </div>
   <Link
    href={`/domain/${data.domainId}/concepts/${data.conceptIndex}`}
    className="btn sm:hidden mt-3 w-full justify-center min-h-[44px]"
   >Open <ArrowRight size={14} aria-hidden="true" /></Link>
  </section>
 );
}
