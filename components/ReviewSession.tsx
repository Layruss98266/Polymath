"use client";
import { useEffect, useMemo, useState } from "react";
import { Brain, RefreshCw, AlertTriangle, ArrowRight, Sparkles, RotateCw } from "lucide-react";
import Link from "next/link";
import { useActions, useUserState, useHydrated } from "@/lib/state";
import { dueNow, newCard, grade, type Grade } from "@/lib/fsrs";
import { DOMAIN_INDEX, loadDomain, findEntry } from "@/data/domains";
import type { Domain } from "@/lib/types";

type CardInPlay = { domainId: string; cardKey: string; front: string; back: string; due: number };

export function ReviewSession() {
 const s = useUserState();
 const hydrated = useHydrated();
 const a = useActions();
 const [domains, setDomains] = useState<Record<string, Domain>>({});
 const [flipped, setFlipped] = useState(false);
 const [i, setI] = useState(0);
 const [startCount, setStartCount] = useState<number | null>(null);

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

 useEffect(() => {
  if (startCount === null && pool.length > 0) setStartCount(pool.length);
 }, [pool.length, startCount]);

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

 const weakest = useMemo(() => {
  return s.conceptProgress
   .filter((c) => (c.attempts ?? 0) >= 2 && (c.accuracy ?? 0) < 0.6)
   .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
   .slice(0, 5);
 }, [s.conceptProgress]);

 const WeakBlock = () => (
  weakest.length > 0 ? (
   <section className="panel p-4 sm:p-5" style={{ borderColor: "var(--bad)" }}>
    <header className="flex items-center gap-2 mb-3">
     <AlertTriangle size={16} style={{ color: "var(--bad)" }} />
     <h2 className="font-display text-sm uppercase tracking-widest">Weakest concepts</h2>
    </header>
    <p className="dim text-sm mb-3">Concepts you have answered most wrongly across started domains. The scheduler gives them more reps. Open and try the prediction prompt again.</p>
    <ul className="space-y-1.5">
     {weakest.map((w) => {
      const e = findEntry(w.domainId);
      return (
       <li key={`${w.domainId}-${w.conceptIndex}`} className="flex items-center gap-2 text-sm">
        <span className="chip" style={{ background: "rgba(255,115,115,0.15)", color: "var(--bad)", minWidth: 56, justifyContent: "center" }}>{Math.round((w.accuracy ?? 0) * 100)}%</span>
        <Link href={`/domain/${w.domainId}`} className="hue underline">{e?.name ?? w.domainId}</Link>
        <span className="dim">concept #{w.conceptIndex + 1}</span>
       </li>
      );
     })}
    </ul>
   </section>
  ) : null
 );

 const PageHero = ({ subtitle }: { subtitle: string }) => (
  <header className="space-y-1">
   <div className="flex items-center gap-2">
    <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
     <Brain size={18} />
    </span>
    <p className="dim text-xs uppercase tracking-widest">Spaced repetition</p>
   </div>
   <h1 className="font-display text-3xl sm:text-4xl">Review</h1>
   <p className="dim">{subtitle}</p>
  </header>
 );

 if (!hydrated) return <p className="dim">Loading...</p>;

 if (pool.length === 0) {
  const nothingStarted = s.startedDomains.length === 0;
  return (
   <div className="space-y-4">
    <PageHero subtitle={nothingStarted ? "Start a domain and your flashcards will land here." : "Nothing due right now. The scheduler is holding the next batch back so the practice actually stretches you."} />
    <WeakBlock />
    <section className="panel hero-glow p-6 sm:p-8 space-y-3">
     <div className="flex items-center gap-2">
      <Sparkles size={18} className="hue" />
      <h2 className="font-display text-xl">{nothingStarted ? "No cards in rotation yet" : "All caught up"}</h2>
     </div>
     {nothingStarted ? (
      <>
       <p>To start spaced repetition, open any domain and read at least one concept. Flashcards from the domains you have started will appear here, scheduled by FSRS.</p>
       <div className="flex flex-wrap gap-2 pt-1">
        <Link href="/" className="btn">Browse domains <ArrowRight size={14} /></Link>
        <Link href="/about" className="btn">How spacing works</Link>
       </div>
      </>
     ) : (
      <>
       <p>FSRS holds each card back until just before you would forget it. That tiny struggle is where memory actually forms.</p>
       <p className="dim text-sm">Open any domain's Flashcards tab to add new cards into the rotation.</p>
       <div className="flex flex-wrap gap-2 pt-1">
        <Link href="/" className="btn">Back to domains <ArrowRight size={14} /></Link>
        <Link href="/dashboard" className="btn">See dashboard</Link>
       </div>
      </>
     )}
    </section>
   </div>
  );
 }

 if (i >= pool.length) {
  const total = startCount ?? pool.length;
  return (
   <div className="space-y-4">
    <PageHero subtitle="Session complete. Come back tomorrow, that is how spacing earns its keep." />
    <section className="panel hero-glow p-6 sm:p-10 text-center space-y-3">
     <Sparkles size={28} className="hue mx-auto" />
     <h2 className="font-display text-2xl sm:text-3xl">Nicely done</h2>
     <p className="dim">You reviewed <strong className="ink">{total}</strong> card{total === 1 ? "" : "s"}. Each one will resurface later, harder ones sooner.</p>
     <div className="flex flex-wrap justify-center gap-2 pt-2">
      <button className="btn" onClick={() => { setI(0); setFlipped(false); setStartCount(null); }}><RefreshCw size={14} /> Review again</button>
      <Link href="/dashboard" className="btn">See dashboard <ArrowRight size={14} /></Link>
      <Link href="/" className="btn">Pick a new domain</Link>
     </div>
    </section>
   </div>
  );
 }

 const domain = DOMAIN_INDEX.find((d) => d.id === card.domainId);
 const total = startCount ?? pool.length;
 const progress = total > 0 ? ((i) / total) * 100 : 0;
 const domHue = domain?.hue ?? "#ff6b5e";

 // Color tokens per grade button. Theme-aware.
 const gradeStyles = {
  again: { color: "var(--bad)",  bg: "rgba(255,115,115,0.12)", label: "Again", sub: "less than 1 min" },
  hard:  { color: "#fbbf24",     bg: "rgba(251,191,36,0.12)",  label: "Hard",  sub: "minutes" },
  good:  { color: "var(--good)", bg: "rgba(102,224,163,0.14)", label: "Good",  sub: "days" },
  easy:  { color: "#60a5fa",     bg: "rgba(96,165,250,0.14)",  label: "Easy",  sub: "weeks" }
 } as const;

 return (
  <div className="space-y-4" style={{ ["--hue" as any]: domHue }}>
   <PageHero subtitle={`Card ${i + 1} of ${total}, from ${domain?.name ?? card.domainId}.`} />

   {/* Progress */}
   <div>
    <div className="flex items-center justify-between text-[11px] dim mb-1">
     <span>{i} done</span><span>{total - i} to go</span>
    </div>
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
     <div className="h-full" style={{ width: `${progress}%`, background: domHue, transition: "width .2s" }} />
    </div>
   </div>

   {/* Card */}
   <article
    className="panel relative overflow-hidden min-h-[220px] sm:min-h-[260px] cursor-pointer select-none"
    role="button"
    tabIndex={0}
    aria-label={flipped ? "Card back, click to flip to front" : "Card front, click to flip to back"}
    onClick={() => setFlipped((f) => !f)}
    onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); } }}
   >
    <div className="absolute inset-x-0 top-0 h-1" style={{ background: domHue }} aria-hidden="true" />
    <div className="p-6 sm:p-8 h-full flex flex-col">
     <div className="flex items-center justify-between mb-3">
      <span className="chip">{flipped ? "Answer" : "Question"}</span>
      <span className="dim text-xs flex items-center gap-1"><RotateCw size={11} /> click or space to flip</span>
     </div>
     <p className="font-display text-xl sm:text-2xl leading-relaxed text-balance">
      {flipped ? card.back : card.front}
     </p>
     <div className="mt-auto pt-4 text-xs dim flex items-center gap-2">
      <Link href={`/domain/${card.domainId}`} className="hover:underline">{domain?.name ?? card.domainId}</Link>
     </div>
    </div>
   </article>

   {/* Grading row */}
   {flipped ? (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
     {(["again", "hard", "good", "easy"] as Grade[]).map((g) => {
      const st = gradeStyles[g];
      return (
       <button
        key={g}
        onClick={() => onGrade(g)}
        className="panel p-3 text-left transition-transform hover:translate-y-[-1px]"
        style={{ borderColor: st.color, background: st.bg }}
       >
        <div className="font-display text-base" style={{ color: st.color }}>{st.label}</div>
        <div className="dim text-[11px] mt-0.5">{st.sub}</div>
       </button>
      );
     })}
    </div>
   ) : (
    <div className="panel p-3 text-center">
     <button className="text-sm dim hover:underline" onClick={() => setFlipped(true)}>Tap card or press space to reveal answer</button>
    </div>
   )}

   <p className="text-xs dim text-center">
    FSRS schedules each card based on how easily you recalled it. <em>Again</em> resurfaces in minutes, <em>Easy</em> waits weeks. That is spacing doing its job.
   </p>

   {weakest.length > 0 && (
    <details className="panel p-4">
     <summary className="cursor-pointer text-sm dim">Show weakest concepts ({weakest.length})</summary>
     <div className="mt-3"><WeakBlock /></div>
    </details>
   )}
  </div>
 );
}
