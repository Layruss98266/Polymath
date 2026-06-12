"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Map, Sparkles, ArrowRight, Compass, Flame } from "lucide-react";
import { useUserState, useHydrated } from "@/lib/state";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import type { Domain } from "@/lib/types";
import { masteryPct } from "@/lib/mastery";
import { dueNow } from "@/lib/fsrs";
import { ConnectionsGraph } from "./ConnectionsGraph";

export function SkillMap() {
 const s = useUserState();
 const hydrated = useHydrated();
 const [domains, setDomains] = useState<Record<string, Domain>>({});

 useEffect(() => {
  if (!hydrated) return;
  // Only load domains the user has actually touched so we can show
  // mastery and next-due counts without paying for all 30+ payloads.
  Promise.all(s.startedDomains.map(async (id) => {
   try { return [id, await loadDomain(id)] as const; } catch { return null; }
  })).then((entries) => {
   const map: Record<string, Domain> = {};
   for (const e of entries) if (e) map[e[0]] = e[1];
   setDomains(map);
  });
 }, [hydrated, s.startedDomains]);

 const byCat = useMemo(() => {
  const m: Record<string, typeof DOMAIN_INDEX> = {};
  for (const d of DOMAIN_INDEX) (m[d.category] ??= []).push(d);
  return Object.entries(m);
 }, []);

 const touched = s.startedDomains.length;
 const total = DOMAIN_INDEX.length;

 // Per-domain mastery + due count, keyed by domain id.
 const domainStats = useMemo(() => {
  const out: Record<string, { mastery: number; due: number }> = {};
  for (const id of s.startedDomains) {
   const dom = domains[id];
   const dp = s.domainProgress[id];
   const mastery = dom ? masteryPct(dom, dp, s.conceptProgress) : 0;
   const dueCount = dueNow(s.cards.filter((c) => c.domainId === id)).length;
   out[id] = { mastery, due: dueCount };
  }
  return out;
 }, [domains, s.domainProgress, s.conceptProgress, s.cards, s.startedDomains]);

 const totalDue = Object.values(domainStats).reduce((n, v) => n + v.due, 0);

 return (
  <div className="space-y-6">
   {/* Hero */}
   <header className="space-y-2">
    <div className="flex items-center gap-2">
     <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
      <Map size={18} />
     </span>
     <p className="dim text-xs uppercase tracking-widest">The catalogue, mapped</p>
    </div>
    <h1 className="font-display text-3xl sm:text-4xl">Skill Map</h1>
    <p className="dim">Domains grouped by category. Touched ones glow. The point is not to cover them all, it is to build a lattice across categories.</p>
    <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
     <span className="chip"><Map size={11} /> {touched} of {total} touched</span>
     <span className="chip"><Compass size={11} /> {byCat.length} categories</span>
     {totalDue > 0 && <Link href="/review" className="chip" style={{ color: "var(--hue)", borderColor: "var(--hue)" }}><Flame size={11} /> {totalDue} due now</Link>}
    </div>
   </header>

   {/* In-progress rail: navigation-first surface */}
   {touched > 0 && (
    <section className="space-y-3">
     <div className="flex items-end justify-between flex-wrap gap-2">
      <h2 className="font-display text-2xl">In progress</h2>
      <span className="dim text-xs">Mastery and next-due cards for the {touched} domain{touched === 1 ? "" : "s"} you have opened.</span>
     </div>
     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {s.startedDomains.map((id) => {
       const e = DOMAIN_INDEX.find((d) => d.id === id);
       if (!e) return null;
       const stat = domainStats[id] ?? { mastery: 0, due: 0 };
       const pct = Math.round(stat.mastery * 100);
       return (
        <li key={id}>
         <Link
          href={`/domain/${id}`}
          className="panel lift block p-4 relative overflow-hidden h-full"
          style={{ borderColor: e.hue, boxShadow: `0 0 22px ${e.hue}22` }}
          aria-label={`${e.name}, ${pct}% mastery, ${stat.due} cards due`}
         >
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: e.hue }} aria-hidden="true" />
          <div className="flex items-start gap-3">
           <span className="text-2xl shrink-0" aria-hidden="true">{e.icon}</span>
           <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate" style={{ color: e.hue }}>{e.name}</p>
            <p className="dim text-xs truncate">{e.tagline}</p>
           </div>
           {stat.due > 0 && (
            <span className="chip shrink-0" style={{ color: e.hue, borderColor: e.hue }} aria-hidden="true">{stat.due} due</span>
           )}
          </div>
          <div className="mt-3 flex items-center gap-2">
           <div className="h-1.5 rounded-full overflow-hidden flex-1" style={{ background: "var(--line)" }} aria-hidden="true">
            <div className="h-full" style={{ width: `${pct}%`, background: e.hue, transition: "width .3s" }} />
           </div>
           <span className="dim text-xs tabular-nums shrink-0">{pct}%</span>
          </div>
         </Link>
        </li>
       );
      })}
     </ul>
    </section>
   )}

   {touched < 2 && (
    <section className="panel hero-glow p-5 sm:p-6 flex items-start gap-3">
     <Sparkles size={18} className="hue mt-1 shrink-0" />
     <div className="text-sm">
      <p className="font-medium">Connections graph unlocks at two domains.</p>
      <p className="dim mt-1">Open any second domain (Concepts tab, one reveal counts) and the cross-domain network appears here. It is the polymath payoff.</p>
     </div>
    </section>
   )}

   {touched >= 2 && (
    <section className="space-y-3">
     <h2 className="font-display text-2xl">Connections</h2>
     <ConnectionsGraph />
    </section>
   )}

   {/* Catalogue, by category */}
   <section className="space-y-3">
    <h2 className="font-display text-2xl">Catalogue</h2>
    <div className="space-y-4">
     {byCat.map(([cat, ds]) => {
      const catTouched = ds.filter((d) => s.startedDomains.includes(d.id)).length;
      const catPct = Math.round((catTouched / ds.length) * 100);
      return (
       <section key={cat} className="panel p-5">
        <header className="flex items-center justify-between mb-4 flex-wrap gap-2">
         <h3 className="font-display text-lg">{cat}</h3>
         <div className="flex items-center gap-2">
          <span className="dim text-xs tabular-nums">{catTouched} of {ds.length}</span>
          <div className="h-1.5 w-20 rounded-full overflow-hidden" style={{ background: "var(--line)" }} aria-hidden="true">
           <div className="h-full" style={{ width: `${catPct}%`, background: "var(--hue)" }} />
          </div>
         </div>
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
              <span className="block text-sm font-medium truncate" style={{ color: isTouched ? d.hue : "var(--ink)" }}>{d.name}</span>
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
    </div>
   </section>
  </div>
 );
}
