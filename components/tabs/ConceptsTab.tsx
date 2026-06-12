"use client";
import { useMemo, useState } from "react";
import type { Domain, QuizOption } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { ChevronLeft, ChevronRight, Bookmark, BookOpen, Brain } from "lucide-react";

// Single concept at a time. Order is by subdomain (if any), then prereqs, then author order.
// Each concept screen walks the learner through: title plus full form, definition, prereqs,
// Beginner or Expert toggle, prediction, reveal, reflect, concept quiz (must score to advance),
// concept tasks (basic, easy, advanced). Domain wide quiz lives separately under the Quiz tab.

function StatusBadge({ status }: { status: "settled" | "debated" | "framework" }) {
 const m = {
  settled:   { label: "settled",       bg: "rgba(102,224,163,0.15)", col: "var(--good)" },
  debated:   { label: "debated",       bg: "rgba(255,115,115,0.15)", col: "var(--bad)" },
  framework: { label: "one framework", bg: "rgba(255,255,255,0.08)", col: "var(--ink)" }
 } as const;
 const s = m[status];
 return <span className="chip" style={{ background: s.bg, color: s.col }}>{s.label}</span>;
}

export function ConceptsTab({ d }: { d: Domain }) {
 const s = useUserState();
 const a = useActions();
 const concepts = d.concepts;
 const [idx, setIdx] = useState(0);
 const [mode, setMode] = useState<"beginner" | "expert">("beginner");
 const [revealed, setRevealed] = useState(false);
 const [quizState, setQuizState] = useState<Record<number, { picked: number; correct: boolean }>>({});

 const concept = concepts[idx];
 const opened = s.conceptProgress.find((p) => p.domainId === d.id && p.conceptIndex === idx)?.opened;
 const bookmarkKey = `${d.id}:${idx}`;
 const bookmarked = s.bookmarks.includes(bookmarkKey);
 const reflectionKey = `${d.id}:${idx}:reflect`;
 const reflection = s.notes[reflectionKey] ?? "";

 const conceptQuiz = concept.conceptQuiz ?? [];
 const conceptTasks = concept.conceptTasks ?? [];
 const answered = Object.keys(quizState).length;
 const correctCount = Object.values(quizState).filter((q) => q.correct).length;
 const quizPassed = conceptQuiz.length === 0 || (answered >= conceptQuiz.length && correctCount / conceptQuiz.length >= 0.6);

 const explanation = mode === "expert" && concept.expert
  ? concept.expert
  : (concept.generic ?? concept.deep);

 const goPrev = () => { setIdx(Math.max(0, idx - 1)); resetPerConcept(); };
 const goNext = () => { setIdx(Math.min(concepts.length - 1, idx + 1)); resetPerConcept(); };
 const resetPerConcept = () => { setRevealed(false); setQuizState({}); setMode("beginner"); };

 const onReveal = () => {
  setRevealed(true);
  if (!opened) a.openConcept(d.id, idx);
 };

 const pickAnswer = (qi: number, oi: number, correctIdx: number) => {
  if (quizState[qi]) return;
  const correct = oi === correctIdx;
  setQuizState((s) => ({ ...s, [qi]: { picked: oi, correct } }));
  a.recordQuizAnswer(d.id, correct, true);
 };

 return (
  <div className="space-y-4">
   {/* Header strip with position and bookmark */}
   <div className="flex items-center gap-3 flex-wrap">
    <span className="chip">Concept {idx + 1} of {concepts.length}</span>
    {concept.subdomain && <span className="chip dim">{concept.subdomain}</span>}
    <StatusBadge status={concept.status} />
    <div className="ml-auto flex gap-2">
     <button className="chip" onClick={() => a.toggleBookmark(bookmarkKey)} aria-pressed={bookmarked}>
      <Bookmark size={12} /> {bookmarked ? "Bookmarked" : "Bookmark"}
     </button>
    </div>
   </div>

   {/* Progress bar */}
   <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
    <div className="h-full" style={{ width: `${((idx + 1) / concepts.length) * 100}%`, background: "var(--hue)", transition: "width .2s" }} />
   </div>

   {/* Concept title and full form */}
   <header className="panel p-5 space-y-2">
    <h2 className="font-display text-2xl">{concept.t}</h2>
    {concept.fullForm && <p className="dim text-sm">{concept.fullForm}</p>}
    {concept.definition && (
     <div className="text-sm" style={{ borderLeft: "3px solid var(--hue)", paddingLeft: "0.75rem" }}>
      <span className="dim text-xs uppercase tracking-widest">Definition. </span>
      {concept.definition}
     </div>
    )}
    {concept.prereqs && concept.prereqs.length > 0 && (
     <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="dim">Helps to have seen first:</span>
      {concept.prereqs.map((p, i) => {
       const target = concepts.findIndex((c) => c.t === p);
       return (
        <button key={i} className="chip" onClick={() => { if (target >= 0) { setIdx(target); resetPerConcept(); } }}>
         {p}
        </button>
       );
      })}
     </div>
    )}
    <p className="font-medium mt-2">{concept.short}</p>
   </header>

   {/* Beginner vs Expert toggle, prediction, reveal */}
   {!revealed ? (
    <div className="panel p-5 space-y-3">
     <p className="text-sm dim">
      Before reading the full explanation, write what you think this concept means in one or two sentences.
      The small struggle to recall is where the learning actually happens.
     </p>
     <textarea
      className="w-full panel p-3 text-sm"
      rows={2}
      placeholder="Your guess. Wrong is fine. Try anyway."
     />
     <div className="flex gap-2 flex-wrap">
      <button className="btn" onClick={onReveal}><BookOpen size={14} /> Reveal explanation</button>
      <button className="btn" onClick={onReveal}>Just show me</button>
     </div>
    </div>
   ) : (
    <>
     {/* Beginner or Expert mode toggle, only if expert version exists */}
     {(concept.generic || concept.expert) && (
      <div className="flex gap-2 text-sm">
       <button className={`chip ${mode === "beginner" ? "ring-1" : ""}`} onClick={() => setMode("beginner")}>Beginner</button>
       <button className={`chip ${mode === "expert" ? "ring-1" : ""}`} onClick={() => setMode("expert")} disabled={!concept.expert}>
        Expert {!concept.expert && <span className="dim">(soon)</span>}
       </button>
      </div>
     )}

     {/* The explanation */}
     <article className="panel p-5 space-y-3">
      <p>{explanation}</p>
     </article>

     {/* Apply to your life */}
     <div className="panel p-4" style={{ background: "rgba(255,255,255,0.02)" }}>
      <p className="text-xs uppercase tracking-widest dim mb-1">Apply to your life</p>
      <p className="text-sm">{concept.reflect}</p>
      <textarea
       className="w-full panel p-2 text-sm mt-2"
       rows={2}
       value={reflection}
       defaultValue={reflection}
       onBlur={(e) => a.saveReflection(d.id, idx, e.target.value)}
       placeholder="Your answer saves to your notes."
      />
     </div>

     {/* Concept quiz, 3 to 5 items, must score to advance */}
     {conceptQuiz.length > 0 && (
      <section className="space-y-2">
       <div className="flex items-center gap-2">
        <Brain size={14} className="hue" />
        <h3 className="font-display text-lg">Check yourself</h3>
        <span className="dim text-xs">{correctCount} of {conceptQuiz.length} correct so far</span>
       </div>
       {conceptQuiz.map((q, qi) => {
        const correctIdx = q.options.findIndex((o) => "correct" in o && o.correct === true);
        const state = quizState[qi];
        return (
         <article key={qi} className="panel p-4 space-y-2">
          <p className="text-sm font-medium">{q.q}</p>
          <ul className="space-y-1">
           {q.options.map((o, oi) => (
            <li key={oi}>
             <button
              disabled={!!state}
              onClick={() => pickAnswer(qi, oi, correctIdx)}
              className={`w-full text-left panel p-2 text-sm ${state ? (oi === correctIdx ? "ring-1" : oi === state.picked ? "opacity-80" : "opacity-60") : ""}`}
              style={state && oi === correctIdx ? { borderColor: "var(--good)" } : state && oi === state.picked ? { borderColor: "var(--bad)" } : {}}
             >
              {o.text}
              {state && oi === state.picked && !state.correct && "misconception" in o && (
               <p className="text-xs mt-1" style={{ color: "var(--bad)" }}>
                <strong>Why people pick this:</strong> {(o as Exclude<QuizOption, { correct: true }>).misconception}
               </p>
              )}
             </button>
            </li>
           ))}
          </ul>
          {state && <p className="text-xs" style={{ color: state.correct ? "var(--good)" : "var(--bad)" }}>{state.correct ? "Right." : "Not quite."} {q.why}</p>}
         </article>
        );
       })}
      </section>
     )}

     {/* Tasks ladder. Basic visible from reveal. Advanced visible only after passing the quiz. */}
     {conceptTasks.length > 0 && (
      <section className="space-y-2">
       <h3 className="font-display text-lg">Try it</h3>
       <ul className="space-y-2">
        {conceptTasks.filter((t) => t.level === "basic" || (t.level === "easy" && revealed) || (t.level === "advanced" && quizPassed)).map((t, ti) => (
         <li key={ti} className="panel p-3 flex items-start gap-3">
          <span className="chip" style={{ background: t.level === "basic" ? "rgba(102,224,163,0.15)" : t.level === "easy" ? "rgba(96,165,250,0.15)" : "rgba(255,107,94,0.15)" }}>{t.level}</span>
          <div className="flex-1">
           <p className="font-medium text-sm">{t.t}</p>
           <p className="dim text-sm mt-1">{t.d}</p>
          </div>
          <span className="chip">+{t.xp} XP</span>
         </li>
        ))}
       </ul>
       {!quizPassed && conceptTasks.some((t) => t.level === "advanced") && (
        <p className="dim text-xs">Pass the check above to unlock the advanced task.</p>
       )}
      </section>
     )}
    </>
   )}

   {/* Navigation */}
   <nav className="flex items-center justify-between pt-2">
    <button className="btn" disabled={idx === 0} onClick={goPrev}><ChevronLeft size={14} /> Previous</button>
    <span className="dim text-sm">{idx + 1} / {concepts.length}</span>
    <button
     className="btn"
     disabled={idx === concepts.length - 1 || (conceptQuiz.length > 0 && !quizPassed)}
     onClick={goNext}
     title={conceptQuiz.length > 0 && !quizPassed ? "Answer the check above first" : undefined}
    >
     Next <ChevronRight size={14} />
    </button>
   </nav>
  </div>
 );
}
