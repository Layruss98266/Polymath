"use client";
import { useMemo, useState } from "react";
import type { Domain } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { grade, newCard, type Grade } from "@/lib/fsrs";
import { RotateCw, Sparkles } from "lucide-react";

// Daily flip card. Visual goals: the card feels premium and quiet so the
// content is the hero. Grade buttons are distinct without becoming a rainbow,
// each one shows an interval hint so the user learns the spacing schedule.

const GRADE_META: Record<Grade, { label: string; sub: string; color: string }> = {
 again: { label: "Again", sub: "< 1 min",   color: "var(--bad)" },
 hard:  { label: "Hard",  sub: "minutes",   color: "#fbbf24" },
 good:  { label: "Good",  sub: "days",      color: "var(--good)" },
 easy:  { label: "Easy",  sub: "weeks",     color: "#60a5fa" }
};

export function FlashcardsTab({ d }: { d: Domain }) {
 const s = useUserState();
 const a = useActions();
 const [i, setI] = useState(0);
 const [flipped, setFlipped] = useState(false);

 const cardForIndex = (idx: number) => {
  const key = `${d.id}:${idx}`;
  const existing = s.cards.find((c) => c.cardKey === key);
  return existing ?? newCard(key, d.id);
 };

 const due = useMemo(() => {
  const now = Date.now();
  return d.flashcards
   .map((_, idx) => ({ idx, c: cardForIndex(idx) }))
   .filter((x) => x.c.due <= now).length;
 }, [d.flashcards, s.cards, d.id]);

 if (i >= d.flashcards.length) {
  return (
   <div className="panel p-6 text-center space-y-2 max-w-[65ch]">
    <Sparkles size={20} className="hue mx-auto" />
    <p>All cards for this domain shown. Hit Review in the top bar for cross-domain spaced practice.</p>
   </div>
  );
 }

 const card = d.flashcards[i];
 const sr = cardForIndex(i);

 const [busy, setBusy] = useState(false);
 const gradeAndNext = (g: Grade) => {
  if (busy) return;
  setBusy(true);
  const next = grade(sr, g);
  a.upsertCard(next);
  setFlipped(false);
  setI((x) => x + 1);
  setTimeout(() => setBusy(false), 50);
 };

 const pct = Math.round((i / d.flashcards.length) * 100);

 return (
  <div className="space-y-6 max-w-[65ch]">
   {/* Meta strip */}
   <div className="flex items-center justify-between text-sm" style={{ color: "var(--dim)" }}>
    <span className="tabular-nums">Card {i + 1} of {d.flashcards.length}</span>
    <span className="chip tabular-nums" style={{ color: "var(--hue)", borderColor: "var(--hue)" }}>
     {due} due
    </span>
   </div>
   <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
    <div className="h-full" style={{ width: `${pct}%`, background: "var(--hue)", transition: "width .25s ease" }} />
   </div>

   {/* The card. A hue rail along the top + a face/back chip cue. */}
   <article
    className="panel relative overflow-hidden min-h-[220px] sm:min-h-[260px] cursor-pointer select-none"
    onClick={() => setFlipped((f) => !f)}
    onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); } }}
    role="button"
    tabIndex={0}
    aria-pressed={flipped}
    aria-label={flipped ? "Card back, click to flip to front" : "Card front, click to flip to back"}
   >
    <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--hue)" }} aria-hidden="true" />
    <div className="p-6 sm:p-8 flex flex-col h-full">
     <div className="flex items-center justify-between mb-4">
      <span
       className="chip uppercase tracking-[0.14em] text-[10px] font-medium"
       style={flipped ? { color: "var(--hue)", borderColor: "var(--hue)" } : {}}
      >
       {flipped ? "Answer" : "Question"}
      </span>
      <span className="text-[11px] inline-flex items-center gap-1" style={{ color: "var(--dim)" }}>
       <RotateCw size={11} /> tap to flip
      </span>
     </div>
     <p className="font-display text-xl sm:text-2xl leading-relaxed text-balance">
      {flipped ? card.back : card.front}
     </p>
    </div>
   </article>

   {/* Grading row. Distinct color per grade, but tied together as one panel. */}
   {flipped ? (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
     {(["again", "hard", "good", "easy"] as Grade[]).map((g) => {
      const meta = GRADE_META[g];
      return (
       <button
        key={g}
        className="p-3 rounded-xl border text-left transition-transform hover:translate-y-[-1px] disabled:opacity-60 min-h-[64px]"
        disabled={busy}
        onClick={() => gradeAndNext(g)}
        style={{
         borderColor: meta.color,
         background: `color-mix(in oklab, ${meta.color} 8%, transparent)`
        }}
       >
        <div className="font-display text-base" style={{ color: meta.color }}>{meta.label}</div>
        <div className="text-[11px] tabular-nums" style={{ color: "var(--dim)" }}>{meta.sub}</div>
       </button>
      );
     })}
    </div>
   ) : (
    <button
     className="panel p-3 text-center w-full text-sm hover:opacity-80 transition-opacity"
     style={{ color: "var(--dim)" }}
     onClick={() => setFlipped(true)}
    >
     Tap card or press space to reveal answer
    </button>
   )}

   <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>
    FSRS (what modern Anki uses) schedules each card's next review based on how easily you recalled it. Spacing plus retrieval is the most effective combo we have. <em>Why this works.</em>
   </p>
  </div>
 );
}
