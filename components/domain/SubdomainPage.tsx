"use client";
import Link from "next/link";
import { useMemo } from "react";
import type { Domain } from "@/lib/types";
import { conceptPath, tabPath } from "@/lib/tabs";
import { useUserState } from "@/lib/state";
import { Brain, BookOpen, ArrowRight, GraduationCap, FileText } from "lucide-react";

export function SubdomainPage({ domain, subdomainId }: { domain: Domain; subdomainId: string }) {
 const s = useUserState();
 const concepts = useMemo(
  () => domain.concepts.map((c, i) => ({ c, i })).filter(({ c }) => c.subdomain === subdomainId),
  [domain.concepts, subdomainId]
 );
 const glossary = useMemo(() => domain.glossary, [domain.glossary]);
 const resources = useMemo(() => {
  const all = [...domain.resources.free, ...domain.resources.paid];
  return all.filter((r) => r.subdomains?.includes(subdomainId));
 }, [domain.resources, subdomainId]);

 const sub = domain.subdomains?.find((sd) => sd.id === subdomainId);
 if (!sub) {
  return (
   <div className="panel p-5 text-sm dim">
    Subdomain not found. <Link href={tabPath(domain.id, "basics")} className="hue underline">Back to {domain.name}</Link>.
   </div>
  );
 }

 const opened = new Set(
  s.conceptProgress.filter((c) => c.domainId === domain.id && c.opened).map((c) => c.conceptIndex)
 );

 return (
  <div className="space-y-5">
   <header className="space-y-2">
    <p className="dim text-[11px] uppercase tracking-widest">Subdomain</p>
    <h2 className="font-display text-2xl sm:text-3xl">{sub.name}</h2>
    {sub.intro && <p className="dim leading-relaxed max-w-prose">{sub.intro}</p>}
    {sub.capabilities && sub.capabilities.length > 0 && (
     <ul className="text-sm space-y-1 mt-3 max-w-prose">
      {sub.capabilities.map((cap, i) => (
       <li key={i} className="flex items-start gap-2"><GraduationCap size={14} className="hue mt-0.5 shrink-0" /> <span>{cap}</span></li>
      ))}
     </ul>
    )}
   </header>

   {concepts.length === 0 ? (
    <div className="panel p-5 text-sm dim">No concepts in this subdomain yet. They will appear as the domain grows.</div>
   ) : (
    <section className="space-y-2">
     <header className="flex items-center gap-2">
      <BookOpen size={16} className="hue" />
      <h3 className="font-display text-lg">Concepts ({concepts.length})</h3>
     </header>
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {concepts.map(({ c, i }) => (
       <li key={i}>
        <Link href={conceptPath(domain.id, i)} className="panel lift p-3 block">
         <div className="flex items-start justify-between gap-2">
          <p className="font-medium">{c.t}</p>
          {opened.has(i) && <span className="chip text-[10px] hue shrink-0">opened</span>}
         </div>
         <p className="dim text-xs mt-1 line-clamp-2">{c.definition ?? c.short}</p>
         <p className="hue text-xs mt-2 inline-flex items-center gap-1">Open <ArrowRight size={11} /></p>
        </Link>
       </li>
      ))}
     </ul>
    </section>
   )}

   {resources.length > 0 && (
    <section className="space-y-2">
     <header className="flex items-center gap-2">
      <FileText size={16} className="hue" />
      <h3 className="font-display text-lg">Resources tagged for {sub.name}</h3>
     </header>
     <ul className="space-y-2">
      {resources.map((r, i) => (
       <li key={i} className="panel p-3">
        <p className="font-medium">{r.name}</p>
        <p className="dim text-sm">{r.what}</p>
        <div className="mt-1 flex flex-wrap gap-2 text-xs">
         {r.url ? <a href={r.url} target="_blank" rel="noreferrer" className="chip hue underline">open</a> : <span className="chip dim">no direct link yet</span>}
         {r.weight && <span className="chip">{r.weight}</span>}
        </div>
       </li>
      ))}
     </ul>
    </section>
   )}

   <section className="space-y-2">
    <header className="flex items-center gap-2">
     <Brain size={16} className="hue" />
     <h3 className="font-display text-lg">All {domain.name} glossary</h3>
     <Link href={tabPath(domain.id, "basics")} className="dim text-xs ml-auto hover:underline">Back to overview</Link>
    </header>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
     {glossary.slice(0, 12).map((g, i) => (
      <li key={i} className="panel p-3">
       <p className="font-medium text-sm">{g.term}</p>
       <p className="dim text-xs mt-1">{g.def}</p>
      </li>
     ))}
    </ul>
   </section>
  </div>
 );
}
