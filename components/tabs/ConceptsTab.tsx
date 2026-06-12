"use client";
import { useMemo, useState } from "react";
import type { Domain, QuizOption } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import {
 ChevronLeft, ChevronRight, Bookmark, BookOpen, Brain, ListTree,
 Lightbulb, Layers, Target, CheckCircle2, X, AlertCircle
} from "lucide-react";

// Concepts tab rebuild:
// - Sidebar TOC on lg+ showing all concepts with status icons (locked, current, complete)
// - 5-stage progression indicator (Predict, Reveal, Reflect, Check, Apply)
// - Cleaner card hierarchy with dedicated sections per stage
// - Beginner/Expert toggle becomes a segmented control
// - Concept quiz uses radio-style options with calmer feedback
// - Tasks rendered with level badges and unlock states
// - Progress bar reflects stages-of-this-concept, not just position

function StatusBadge({ status }: { status: "settled" | "debated" | "framework" }) {
 const m = {
  settled:   { label: "settled",       bg: "rgba(102,224,163,0.15)", col: "var(--good)" },
  debated:   { label: "debated",       bg: "rgba(255,115,115,0.15)", col: "var(--bad)" },
  framework: { label: "one framework", bg: "rgba(255,255,255,0.08)", col: "var(--ink)" }
 } as const;
 const s = m[status];
 return <span className="chip" style={{ background: s.bg, color: s.col }}>{s.label}</span>;
}

type Stage = "predict" | "reveal" | "reflect" | "check" | "apply";

const STAGES: { id: Stage; label: string; Icon: typeof Lightbulb }[] = [
 { id: "predict", label: "Predict", Icon: Lightbulb },
 { id: "reveal",  label: "Read",    Icon: BookOpen },
 { id: "reflect", label: "Reflect", Icon: Brain },
 { id: "check",   label: "Check",   Icon: CheckCircle2 },
 { id: "apply",   label: "Apply",   Icon: Target }
];

export function ConceptsTab({ d }: { d: Domain }) {
 const s = useUserState();
 const a = useActions();
 const concepts = d.concepts;
 const [idx, setIdx] = useState(0);
 const [mode, setMode] = useState<"beginner" | "expert">("beginner");
 const [revealed, setRevealed] = useState(false);
 const [quizState, setQuizState] = useState<Record<number, { picked: number; correct: boolean }>>({});
 const [showTOC, setShowTOC] = useState(false);

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

 // Current stage
 const currentStage: Stage = !revealed ? "predict"
  : !reflection ? "reflect"
  : conceptQuiz.length > 0 && !quizPassed ? "check"
  : conceptTasks.length > 0 ? "apply"
  : "reveal";

 const explanation = mode === "expert" && concept.expert
  ? concept.expert
  : (concept.generic ?? concept.deep);
 const wordCount = explanation.split(/\s+/).length;
 const readMins = Math.max(1, Math.round(wordCount / 220));

 const goPrev = () => { if (idx > 0) { setIdx(idx - 1); resetPerConcept(); } };
 const goNext = () => { if (idx < concepts.length - 1) { setIdx(idx + 1); resetPerConcept(); } };
 const resetPerConcept = () => { setRevealed(false); setQuizState({}); setMode("beginner"); };

 const onReveal = () => {
  setRevealed(true);
  if (!opened) a.openConcept(d.id, idx);
 };

 const pickAnswer = (qi: number, oi: number, correctIdx: number) => {
  if (quizState[qi]) return;
  const correct = oi === correctIdx;
  setQuizState((st) => ({ ...st, [qi]: { picked: oi, correct } }));
  a.recordQuizAnswer(d.id, correct, true, idx);
 };

 // For TOC, determine each concept's state from store
 const tocStates = useMemo(() =>
  concepts.map((_, i) => {
   const cp = s.conceptProgress.find((p) => p.domainId === d.id && p.conceptIndex === i);
   if (i === idx) return "current";
   if (cp?.opened) return "complete";
   return "pending";
  }),
 [concepts, s.conceptProgress, d.id, idx]);

 // SubdomainHeader if defined
 const subdomain = concept.subdomain && d.subdomains?.find((sd) => sd.id === concept.subdomain);

 return (
  <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-6 -mx-4 sm:mx-0 sm:px-0">
   {/* Sidebar TOC on lg+ */}
   <aside className="hidden lg:block">
    <div className="sticky top-20">
     <p className="dim text-[10px] uppercase tracking-widest mb-2 px-1">Concepts ({concepts.length})</p>
     <ol className="space-y-0.5 max-h-[70vh] overflow-y-auto pr-2">
      {concepts.map((c, i) => {
       const state = tocStates[i];
       const isCurrent = state === "current";
       const isDone = state === "complete";
       return (
        <li key={i}>
         <button
          onClick={() => { setIdx(i); resetPerConcept(); }}
          className="w-full text-left px-2 py-1.5 rounded-md text-xs flex items-start gap-2"
          style={{ background: isCurrent ? "color-mix(in oklab, var(--hue) 14%, transparent)" : undefined, color: isCurrent ? "var(--hue)" : isDone ? "var(--good)" : "var(--ink)" }}
         >
          <span className="font-mono dim text-[10px] mt-0.5 shrink-0 w-4 text-right">{i + 1}</span>
          <span className="line-clamp-2 leading-snug">{c.t}</span>
         </button>
        </li>
       );
      })}
     </ol>
    </div>
   </aside>

   {/* Main column */}
   <div className="space-y-4 px-4 lg:px-0">
    {/* TOC toggle on mobile */}
    <div className="lg:hidden flex items-center justify-between">
     <button className="chip" onClick={() => setShowTOC(true)} aria-label="Show concept list">
      <ListTree size={12} /> Concept {idx + 1} of {concepts.length}
     </button>
     <button className="chip" onClick={() => a.toggleBookmark(bookmarkKey)} aria-pressed={bookmarked}>
      <Bookmark size={12} /> {bookmarked ? "Saved" : "Save"}
     </button>
    </div>

    {/* Mobile TOC sheet */}
    {showTOC && (
     <div className="lg:hidden fixed inset-0 z-30" role="dialog" aria-label="Concept list">
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setShowTOC(false)} />
      <div className="absolute bottom-0 left-0 right-0 panel rounded-t-2xl max-h-[80vh] overflow-y-auto p-4">
       <div className="flex items-center mb-3">
        <h3 className="font-display text-lg">Concepts in {d.name}</h3>
        <button className="btn !p-2 ml-auto" onClick={() => setShowTOC(false)} aria-label="Close"><X size={14} /></button>
       </div>
       <ol className="space-y-1">
        {concepts.map((c, i) => {
         const state = tocStates[i];
         const isCurrent = state === "current";
         const isDone = state === "complete";
         return (
          <li key={i}>
           <button
            onClick={() => { setIdx(i); resetPerConcept(); setShowTOC(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-start gap-3"
            style={{ background: isCurrent ? "color-mix(in oklab, var(--hue) 14%, transparent)" : undefined, color: isCurrent ? "var(--hue)" : isDone ? "var(--good)" : "var(--ink)" }}
           >
            <span className="font-mono dim text-xs mt-0.5 shrink-0 w-5 text-right">{i + 1}</span>
            <span>{c.t}</span>
           </button>
          </li>
         );
        })}
       </ol>
      </div>
     </div>
    )}

    {/* Concept header */}
    <header className="panel p-4 sm:p-5">
     <div className="flex items-start gap-3 flex-wrap">
      <div className="flex-1 min-w-0">
       {subdomain && <p className="dim text-[10px] uppercase tracking-widest mb-1">{subdomain.name}</p>}
       <h2 className="font-display text-2xl sm:text-3xl leading-tight">{concept.t}</h2>
       {concept.fullForm && <p className="dim text-sm mt-1">{concept.fullForm}</p>}
       {concept.short && <p className="text-sm mt-2 font-medium">{concept.short}</p>}
      </div>
      <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
       <StatusBadge status={concept.status} />
       <button
        className={`chip text-xs ${bookmarked ? "ring-1" : ""}`}
        onClick={() => a.toggleBookmark(bookmarkKey)}
        aria-pressed={bookmarked}
        style={bookmarked ? { color: "var(--hue)", borderColor: "var(--hue)" } : {}}
       >
        <Bookmark size={11} fill={bookmarked ? "currentColor" : "none"} />
        {bookmarked ? "Saved" : "Save"}
       </button>
       <span className="chip dim text-[10px]" title="Approximate read time">~{readMins} min</span>
      </div>
     </div>

     {/* Definition */}
     {concept.definition && (
      <div className="mt-3 text-sm leading-relaxed" style={{ borderLeft: "3px solid var(--hue)", paddingLeft: "0.75rem" }}>
       <span className="dim text-xs uppercase tracking-widest">Definition. </span>
       {concept.definition}
      </div>
     )}

     {/* Prereqs */}
     {concept.prereqs && concept.prereqs.length > 0 && (
      <div className="flex flex-wrap items-center gap-2 text-xs mt-3">
       <Layers size={11} className="dim" />
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
    </header>

    {/* Stage indicator */}
    <ol className="grid grid-cols-5 gap-1.5">
     {STAGES.map((st) => {
      const idx = STAGES.findIndex((x) => x.id === currentStage);
      const me = STAGES.findIndex((x) => x.id === st.id);
      const active = me === idx;
      const done = me < idx;
      return (
       <li key={st.id}>
        <div
         className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] sm:text-xs"
         style={{
          background: active ? "color-mix(in oklab, var(--hue) 14%, transparent)" : done ? "color-mix(in oklab, var(--good) 10%, transparent)" : "transparent",
          color: active ? "var(--hue)" : done ? "var(--good)" : "var(--dim)",
          border: `1px solid ${active ? "var(--hue)" : done ? "color-mix(in oklab, var(--good) 40%, transparent)" : "var(--line)"}`
         }}
         aria-current={active ? "step" : undefined}
        >
         <st.Icon size={11} className="shrink-0" />
         <span className="truncate hidden sm:inline">{st.label}</span>
        </div>
       </li>
      );
     })}
    </ol>

    {/* Stage body */}
    {!revealed ? (
     <section className="panel p-5 space-y-3">
      <header className="flex items-center gap-2">
       <Lightbulb size={16} className="hue" />
       <h3 className="font-display text-lg">Predict before you read</h3>
      </header>
      <p className="dim text-sm">In one or two sentences, what do you think this concept means? Wrong is fine; the small struggle is what makes the answer stick.</p>
      <textarea
       className="w-full panel p-3 text-sm"
       rows={3}
       placeholder="Your guess..."
       aria-label="Your prediction"
      />
      <div className="flex gap-2 flex-wrap">
       <button className="btn" onClick={onReveal} style={{ background: "var(--hue)", color: "#0b0d1a", borderColor: "var(--hue)" }}>
        <BookOpen size={14} /> Reveal explanation
       </button>
       <button className="btn" onClick={onReveal}>Just show me</button>
      </div>
     </section>
    ) : (
     <>
      {/* Beginner/Expert segmented */}
      {(concept.generic || concept.expert) && (
       <div className="inline-flex panel p-0.5 text-xs">
        <button
         onClick={() => setMode("beginner")}
         className="px-3 py-1.5 rounded-md"
         style={mode === "beginner" ? { background: "var(--hue)", color: "#0b0d1a" } : { color: "var(--dim)" }}
        >Beginner</button>
        <button
         onClick={() => setMode("expert")}
         disabled={!concept.expert}
         className="px-3 py-1.5 rounded-md"
         style={mode === "expert" ? { background: "var(--hue)", color: "#0b0d1a" } : { color: concept.expert ? "var(--dim)" : "var(--line)" }}
        >Expert{!concept.expert && " (soon)"}</button>
       </div>
      )}

      {/* Explanation */}
      <article className="panel p-5 sm:p-6 space-y-3 leading-relaxed">
       <p className="text-base">{explanation}</p>
      </article>

      {/* Reflect */}
      <section className="panel p-5" style={{ background: "color-mix(in oklab, var(--hue) 4%, transparent)" }}>
       <header className="flex items-center gap-2 mb-2">
        <Brain size={16} className="hue" />
        <h3 className="font-display text-lg">Apply to your life</h3>
       </header>
       <p className="text-sm mb-2">{concept.reflect}</p>
       <textarea
        className="w-full panel p-3 text-sm"
        rows={3}
        defaultValue={reflection}
        onBlur={(e) => a.saveReflection(d.id, idx, e.target.value)}
        placeholder="Your answer saves to your notes"
        aria-label="Your reflection"
       />
       <p className="dim text-xs mt-2">Saves on blur. Findable later in My List.</p>
      </section>

      {/* Concept quiz */}
      {conceptQuiz.length > 0 && (
       <section className="space-y-3">
        <header className="flex items-center gap-2">
         <CheckCircle2 size={16} className="hue" />
         <h3 className="font-display text-lg">Check yourself</h3>
         <span className="dim text-xs ml-auto">{correctCount} of {conceptQuiz.length} correct</span>
        </header>
        {conceptQuiz.map((q, qi) => {
         const correctIdx = q.options.findIndex((o) => "correct" in o && o.correct === true);
         const state = quizState[qi];
         return (
          <article key={qi} className="panel p-4 space-y-2">
           <p className="text-sm font-medium">{q.q}</p>
           <ul className="space-y-1.5" role="radiogroup">
            {q.options.map((o, oi) => {
             const isRight = oi === correctIdx;
             const isPicked = state?.picked === oi;
             return (
              <li key={oi}>
               <button
                role="radio"
                aria-checked={isPicked}
                disabled={!!state}
                onClick={() => pickAnswer(qi, oi, correctIdx)}
                className="w-full text-left p-3 text-sm rounded-lg border transition-colors"
                style={{
                 borderColor: state
                  ? (isRight ? "var(--good)" : isPicked ? "var(--bad)" : "var(--line)")
                  : "var(--line)",
                 background: state && isRight ? "color-mix(in oklab, var(--good) 10%, transparent)"
                          : state && isPicked && !isRight ? "color-mix(in oklab, var(--bad) 10%, transparent)"
                          : "var(--panel)",
                 opacity: state && !isRight && !isPicked ? 0.6 : 1
                }}
               >
                <div className="flex items-start gap-2">
                 <span className="w-4 h-4 rounded-full border mt-0.5 shrink-0 grid place-items-center" style={{ borderColor: state && isRight ? "var(--good)" : state && isPicked ? "var(--bad)" : "var(--line)" }}>
                  {state && isRight && <CheckCircle2 size={12} style={{ color: "var(--good)" }} />}
                  {state && isPicked && !isRight && <AlertCircle size={12} style={{ color: "var(--bad)" }} />}
                 </span>
                 <span>{o.text}</span>
                </div>
                {state && oi === state.picked && !state.correct && "misconception" in o && (
                 <p className="text-xs mt-2 ml-6" style={{ color: "var(--bad)" }}>
                  <strong>Why people pick this:</strong> {(o as Exclude<QuizOption, { correct: true }>).misconception}
                 </p>
                )}
               </button>
              </li>
             );
            })}
           </ul>
           {state && (
            <p className="text-xs mt-1 px-1" style={{ color: state.correct ? "var(--good)" : "var(--bad)" }}>
             {state.correct ? "Right." : "Not quite."} {q.why}
            </p>
           )}
          </article>
         );
        })}
       </section>
      )}

      {/* Tasks */}
      {conceptTasks.length > 0 && (
       <section className="space-y-3">
        <header className="flex items-center gap-2">
         <Target size={16} className="hue" />
         <h3 className="font-display text-lg">Try it</h3>
         <span className="dim text-xs ml-auto">
          {conceptTasks.filter((t) => t.level === "basic" || (t.level === "easy" && revealed) || (t.level === "advanced" && quizPassed)).length} of {conceptTasks.length} unlocked
         </span>
        </header>
        <ul className="space-y-2">
         {conceptTasks.map((t, ti) => {
          const unlocked = t.level === "basic" || (t.level === "easy" && revealed) || (t.level === "advanced" && quizPassed);
          const levelStyle = {
           basic:    { bg: "rgba(102,224,163,0.12)", col: "var(--good)" },
           easy:     { bg: "rgba(96,165,250,0.12)",  col: "#60a5fa" },
           advanced: { bg: "rgba(255,107,94,0.12)",  col: "var(--hue)" }
          }[t.level];
          return (
           <li key={ti} className="panel p-3 flex items-start gap-3" style={{ opacity: unlocked ? 1 : 0.5 }}>
            <span className="chip shrink-0" style={{ background: levelStyle.bg, color: levelStyle.col, minWidth: 72, justifyContent: "center" }}>{t.level}</span>
            <div className="flex-1 min-w-0">
             <p className="font-medium text-sm">{t.t}</p>
             <p className="dim text-sm mt-1">{t.d}</p>
            </div>
            <span className="chip shrink-0">+{t.xp} XP</span>
           </li>
          );
         })}
        </ul>
        {!quizPassed && conceptTasks.some((t) => t.level === "advanced") && (
         <p className="dim text-xs">Pass the check above to unlock the advanced task.</p>
        )}
       </section>
      )}
     </>
    )}

    {/* Navigation */}
    <nav className="flex items-center justify-between pt-3 gap-2">
     <button className="btn" disabled={idx === 0} onClick={goPrev}>
      <ChevronLeft size={14} /> Previous
     </button>
     <span className="dim text-xs">{idx + 1} / {concepts.length}</span>
     <button
      className="btn"
      style={!(idx === concepts.length - 1 || (conceptQuiz.length > 0 && !quizPassed)) ? { background: "var(--hue)", color: "#0b0d1a", borderColor: "var(--hue)" } : {}}
      disabled={idx === concepts.length - 1 || (conceptQuiz.length > 0 && !quizPassed)}
      onClick={goNext}
      title={conceptQuiz.length > 0 && !quizPassed ? "Answer the check above first" : undefined}
     >
      Next <ChevronRight size={14} />
     </button>
    </nav>
   </div>
  </div>
 );
}
