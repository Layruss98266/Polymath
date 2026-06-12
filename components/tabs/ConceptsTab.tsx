"use client";
import { useState } from "react";
import type { Domain } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";

// Test-first reveal (§11C): user predicts/recalls before the explanation appears.
// Status badges + reflect prompts inline.

function StatusBadge({ status }: { status: "settled" | "debated" | "framework" }) {
 const map = {
  settled:  { label: "settled",    bg: "rgba(102,224,163,0.15)", col: "var(--good)" },
  debated:  { label: "debated",    bg: "rgba(255,115,115,0.15)", col: "var(--bad)" },
  framework: { label: "one framework", bg: "rgba(255,255,255,0.08)", col: "var(--ink)" }
 } as const;
 const m = map[status];
 return <span className="chip" style={{ background: m.bg, color: m.col }}>{m.label}</span>;
}

export function ConceptsTab({ d }: { d: Domain }) {
 return (
  <div className="space-y-3">
   <p className="dim text-sm">
    Each concept opens with a quick prediction prompt before the explanation , that small struggle to recall is where the learning actually happens.
    <em> Generation effect, Bjork.</em>
   </p>
   {d.concepts.map((c, i) => <ConceptRow key={i} d={d} idx={i} />)}
  </div>
 );
}

function ConceptRow({ d, idx }: { d: Domain; idx: number }) {
 const c = d.concepts[idx];
 const s = useUserState();
 const a = useActions();
 const [revealed, setRevealed] = useState(false);
 const [reflection, setReflection] = useState(s.notes[`${d.id}:${idx}:reflect`] ?? "");

 const opened = s.conceptProgress.find((p) => p.domainId === d.id && p.conceptIndex === idx)?.opened;
 const bookmarkKey = `${d.id}:${idx}`;
 const bookmarked = s.bookmarks.includes(bookmarkKey);

 return (
  <article className="panel p-4 space-y-3">
   <header className="flex flex-wrap items-center gap-2">
    <h3 className="font-display text-lg flex-1">{c.t}</h3>
    <StatusBadge status={c.status} />
    <button className="chip" onClick={() => a.toggleBookmark(bookmarkKey)} aria-pressed={bookmarked}>
     {bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
    </button>
   </header>

   {!revealed ? (
    <div className="space-y-3">
     <p className="text-sm dim">
      Before you read , in one sentence, what do you think <strong>{c.t}</strong> means?
     </p>
     <textarea
      className="w-full panel p-3 text-sm"
      rows={2}
      placeholder="Your guess (no wrong answers , the struggle is the point)…"
     />
     <div className="flex gap-2">
      <button
       className="btn"
       onClick={() => {
        setRevealed(true);
        if (!opened) a.openConcept(d.id, idx);
       }}
      >Reveal explanation</button>
      <button className="btn" onClick={() => setRevealed(true)}>Just show me</button>
     </div>
    </div>
   ) : (
    <div className="space-y-3">
     <p className="font-medium">{c.short}</p>
     <p>{c.deep}</p>
     <div className="panel p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
      <p className="text-xs uppercase tracking-widest dim">Apply to your life</p>
      <p className="text-sm mb-2">{c.reflect}</p>
      <textarea
       className="w-full panel p-2 text-sm"
       rows={2}
       value={reflection}
       onChange={(e) => setReflection(e.target.value)}
       placeholder="Your answer (saves to Notes)…"
      />
      <button className="btn mt-2" onClick={() => a.saveReflection(d.id, idx, reflection)}>Save reflection</button>
     </div>
    </div>
   )}
  </article>
 );
}
