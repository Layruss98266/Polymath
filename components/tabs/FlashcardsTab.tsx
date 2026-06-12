"use client";
import { useMemo, useState } from "react";
import type { Domain } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { grade, newCard, type Grade } from "@/lib/fsrs";

export function FlashcardsTab({ d }: { d: Domain }) {
 const s = useUserState();
 const a = useActions();
 const [i, setI] = useState(0);
 const [flipped, setFlipped] = useState(false);

 // Build / fetch SR cards on demand.
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
  return <p className="dim">All cards for this domain shown. Hit Review in the top bar for cross-domain spaced practice.</p>;
 }

 const card = d.flashcards[i];
 const sr = cardForIndex(i);

 const gradeAndNext = (g: Grade) => {
  const next = grade(sr, g);
  a.upsertCard(next);
  setFlipped(false);
  setI((x) => x + 1);
 };

 return (
  <div className="space-y-3">
   <div className="flex items-center gap-2 text-sm dim">
    <span>{i + 1} / {d.flashcards.length}</span>
    <span>·</span>
    <span>{due} due now in this domain</span>
   </div>
   <article className="panel p-6 min-h-[180px]" onClick={() => setFlipped((f) => !f)} role="button" tabIndex={0}>
    <p className="text-xs uppercase tracking-widest dim mb-2">{flipped ? "Back" : "Front, tap to flip"}</p>
    <p className="text-lg font-medium">{flipped ? card.back : card.front}</p>
   </article>
   {flipped && (
    <div className="grid grid-cols-4 gap-2">
     <button className="btn" onClick={() => gradeAndNext("again")}>Again</button>
     <button className="btn" onClick={() => gradeAndNext("hard")}>Hard</button>
     <button className="btn" onClick={() => gradeAndNext("good")}>Good</button>
     <button className="btn" onClick={() => gradeAndNext("easy")}>Easy</button>
    </div>
   )}
   <p className="text-xs dim">
    FSRS (what modern Anki uses) schedules each card's next review based on how easily you recalled it. Spacing + retrieval is the most effective combo we have. <em>Why this works.</em>
   </p>
  </div>
 );
}
