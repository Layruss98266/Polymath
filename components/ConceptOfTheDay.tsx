"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Lightbulb, ArrowRight } from "lucide-react";
import { useUserState, useTodayKey, useHydrated } from "@/lib/state";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";

// Picks a single concept across the user's started domains, deterministically
// rotating by date. Falls back to a random Core domain if no domain has been
// started yet. Tiny, single panel, designed to be a daily ritual.

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
  const pool = s.startedDomains.length > 0 ? s.startedDomains : DOMAIN_INDEX.slice(0, 15).map((d) => d.id);
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
 }, [hydrated, day, s.startedDomains.join(",")]);

 if (!data) return null;
 return (
  <section className="panel p-4 sm:p-5" style={{ borderColor: data.hue }}>
   <div className="flex items-start gap-3">
    <Lightbulb size={20} className="hue mt-1 shrink-0" />
    <div className="flex-1 min-w-0">
     <p className="text-xs uppercase tracking-widest dim">Concept of the day · {data.domainName}</p>
     <p className="font-display text-lg sm:text-xl mt-1">{data.title}</p>
     <p className="dim text-sm mt-1">{data.one}</p>
    </div>
    <Link href={`/domain/${data.domainId}/concepts/${data.conceptIndex}`} className="btn shrink-0 hidden sm:inline-flex">Open <ArrowRight size={14} /></Link>
   </div>
   <Link href={`/domain/${data.domainId}/concepts/${data.conceptIndex}`} className="btn sm:hidden mt-3 w-full justify-center">Open</Link>
  </section>
 );
}
