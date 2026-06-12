"use client";
import { useEffect, useMemo, useState } from "react";
import { Brain, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useActions, useUserState, useHydrated } from "@/lib/state";
import { dueNow, newCard, grade, type Grade } from "@/lib/fsrs";
import { DOMAIN_INDEX, loadDomain, findEntry } from "@/data/domains";
import type { Domain } from "@/lib/types";
import { AlertTriangle } from "lucide-react";

type CardInPlay = { domainId: string; cardKey: string; front: string; back: string; due: number };

export function ReviewSession() {
 const s = useUserState();
 const hydrated = useHydrated();
 const a = useActions();
 const [domains, setDomains] = useState<Record<string, Domain>>({});
 const [flipped, setFlipped] = useState(false);
 const [i, setI] = useState(0);

 // Lazy-load the full Domain objects for every domain the user has started.
 useEffect(() => {
  if (!hydrated) return;
  const ids = s.startedDomains.length ? s.startedDomains : DOMAIN_INDEX.map((d) => d.id);
  let cancelled = false;
  Promise.all(ids.map(async (id) => {
   try { return [id, await loadDomain(id)] as const; } catch { return null; }
  })).then((entries) => {
   if (cancelled) return;
   const map: Record<string, Domain> = {};
   for (const e of entries) if (e) map[e[0]] = e[1];
   setDomains(map);
  });
  return () => { cancelled = true; };
 }, [hydrated, s.startedDomains.join(",")]);

 // Build the pool of due cards across all loaded domains.
 const pool = useMemo<CardInPlay[]>(() => {
  const now = Date.now();
  const items: CardInPlay[] = [];
  for (const dom of Object.values(domains)) {
   dom.flashcards.forEach((fc, idx) => {
    const key = `${dom.id}:${idx}`;
    const existing = s.cards.find((c) => c.cardKey === key);
    const sr = existing ?? newCard(key, dom.id);
    if (sr.due <= now) items.push({ domainId: dom.id, cardKey: key, front: fc.front, back: fc.back, due: sr.due });
   });
  }
  return items.sort((a, b) => a.due - b.due);
 }, [domains, s.cards]);

 const card = pool[i];

 const onGrade = (g: Grade) => {
  if (!card) return;
  const existing = s.cards.find((c) => c.cardKey === card.cardKey) ?? newCard(card.cardKey, card.domainId);
  const next = grade(existing, g);
  a.upsertCard(next);
  a.addXP(4, "review");
  setFlipped(false);
  setI((x) => x + 1);
 };

 // Surface the 5 concepts with the worst accuracy across all started domains.
 // Needs at least 2 attempts on the concept to count, so single bad guesses
 // do not dominate the list.
 const weakest = useMemo(() => {
  return s.conceptProgress
   .filter((c) => (c.attempts ?? 0) >= 2 && (c.accuracy ?? 0) < 0.6)
   .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
   .slice(0, 5);
 }, [s.conceptProgress]);

 const WeakBlock = () => (
  weakest.length > 0 ? (
   <div className="panel p-4 mb-3" style={{ borderColor: "var(--bad)" }}>
    <div className="flex items-center gap-2 mb-2">
     <AlertTriangle size={16} style={{ color: "var(--bad)" }} />
     <h3 className="font-display text-sm uppercase tracking-widest">Weakest concepts</h3>
    </div>
    <p className="dim text-sm mb-2">These are the concepts you have answered most wrongly across domains you have touched. The scheduler will give them more reps; open them and try the prediction prompt again.</p>
    <ul className="space-y-1">
     {weakest.map((w) => {
      const e = findEntry(w.domainId);
      return (
       <li key={`${w.domainId}-${w.conceptIndex}`} className="text-sm flex items-center gap-2">
        <span className="chip" style={{ background: "rgba(255,115,115,0.15)", color: "var(--bad)" }}>{Math.round((w.accuracy ?? 0) * 100)}%</span>
        <Link href={`/domain/${w.domainId}`} className="hue underline">{e?.name ?? w.domainId}</Link>
        <span className="dim">concept #{w.conceptIndex + 1}</span>
       </li>
      );
     })}
    </ul>
   </div>
  ) : null
 );

 if (!hydrated) return <p className="dim">Loading...</p>;

 if (pool.length === 0) {
  return (
   <>
    <WeakBlock />
    <div className="panel p-6 space-y-3">
    <div className="flex items-center gap-2">
     <Brain size={20} className="hue" />
     <h1 className="font-display text-2xl">Nothing due. Great.</h1>
    </div>
    <p>Nothing's due to review right now. The FSRS scheduler holds each card back until it'll actually stretch you. <em>Why this works:</em> retrieving an answer just as you're about to forget it is the most efficient form of practice we have.</p>
    <p className="dim text-sm">Open any domain's Flashcards tab to add new cards into the rotation.</p>
    <Link href="/" className="btn">Back to domains</Link>
    </div>
   </>
  );
 }

 if (i >= pool.length) {
  return (
   <div className="panel p-6 space-y-3">
    <h1 className="font-display text-2xl">Session complete 🎉</h1>
    <p>You reviewed {pool.length} card{pool.length === 1 ? "" : "s"}. Come back tomorrow , that's how spacing earns its keep.</p>
    <div className="flex gap-2">
     <button className="btn" onClick={() => { setI(0); setFlipped(false); }}><RefreshCw size={14} /> Review again</button>
     <Link href="/dashboard" className="btn">See dashboard</Link>
    </div>
   </div>
  );
 }

 const domain = DOMAIN_INDEX.find((d) => d.id === card.domainId);

 return (
  <div className="space-y-3" style={{ ["--hue" as any]: domain?.hue ?? "#ff6b5e" }}>
   <WeakBlock />
   <div className="flex items-center gap-2 text-sm dim">
    <Brain size={16} className="hue" />
    <span>{i + 1} / {pool.length}</span>
    <span>·</span>
    <span>{domain?.name ?? card.domainId}</span>
   </div>
   <article
    className="panel p-6 min-h-[200px]"
    role="button" tabIndex={0}
    onClick={() => setFlipped((f) => !f)}
    onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); } }}
   >
    <p className="text-xs uppercase tracking-widest dim mb-2">{flipped ? "Back" : "Front , click or press space to flip"}</p>
    <p className="text-lg font-medium">{flipped ? card.back : card.front}</p>
   </article>
   {flipped && (
    <div className="grid grid-cols-4 gap-2">
     <button className="btn" onClick={() => onGrade("again")}>Again</button>
     <button className="btn" onClick={() => onGrade("hard")}>Hard</button>
     <button className="btn" onClick={() => onGrade("good")}>Good</button>
     <button className="btn" onClick={() => onGrade("easy")}>Easy</button>
    </div>
   )}
   <p className="text-xs dim">
    FSRS schedules each card based on how easily you recalled it. Cards you rate <em>Again</em> resurface quickly; <em>Easy</em> ones wait days or weeks. That's not stinginess , it's spacing.
   </p>
  </div>
 );
}
