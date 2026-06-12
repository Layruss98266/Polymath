"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { Domain, QuizOption } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { DiagramView } from "@/components/Diagram";
import { conceptPath, tabPath, subdomainPath } from "@/lib/tabs";
import {
 ArrowLeft, ArrowRight, BookOpen, Brain, CheckCircle2,
 AlertCircle, Bookmark, BookmarkCheck, BadgeCheck
} from "lucide-react";

// Single-concept canonical page. Same Predict, Read, Reflect, Check, Apply
// flow as the embedded ConceptsTab card, but with its own URL so users can
// link to "this exact idea." Subdomain-aware prev/next nav.

type Mode = "beginner" | "expert";

export function ConceptDeepPage({ domain, conceptIdx }: { domain: Domain; conceptIdx: number }) {
 const s = useUserState();
 const a = useActions();
 const [revealed, setRevealed] = useState(false);
 const [mode, setMode] = useState<Mode>("beginner");
 const [quizState, setQuizState] = useState<Record<number, { picked: number; correct: boolean }>>({});
 const concept = domain.concepts[conceptIdx];

 const reflectionKey = `${domain.id}:${conceptIdx}:reflect`;
 const reflection = s.notes[reflectionKey] ?? "";
 const opened = !!s.conceptProgress.find((c) => c.domainId === domain.id && c.conceptIndex === conceptIdx)?.opened;
 const bookmarked = s.bookmarks.includes(`${domain.id}:${conceptIdx}`);

 const onReveal = () => {
  setRevealed(true);
  if (!opened) a.openConcept(domain.id, conceptIdx);
 };

 const conceptQuiz = concept.conceptQuiz ?? [];
 const correctCount = Object.values(quizState).filter((s) => s.correct).length;

 const explanation = mode === "expert" && concept.expert
  ? concept.expert
  : (concept.generic ?? concept.deep);

 // Sibling navigation. Prefer same-subdomain neighbours. Falls back to the
 // global prev/next concept when the subdomain is exhausted at either end,
 // so a linear reader does not dead-end at subdomain boundaries.
 const siblings = useMemo(() => {
  const subId = concept?.subdomain;
  const sameSub = subId
   ? domain.concepts.map((c, i) => ({ c, i })).filter(({ c }) => c.subdomain === subId)
   : domain.concepts.map((c, i) => ({ c, i }));
  const here = sameSub.findIndex(({ i }) => i === conceptIdx);
  const all = domain.concepts.map((c, i) => ({ c, i }));
  const prevInSub = here > 0 ? sameSub[here - 1] : null;
  const nextInSub = here < sameSub.length - 1 ? sameSub[here + 1] : null;
  const prevGlobal = conceptIdx > 0 ? all[conceptIdx - 1] : null;
  const nextGlobal = conceptIdx < all.length - 1 ? all[conceptIdx + 1] : null;
  return {
   prev: prevInSub ?? prevGlobal,
   next: nextInSub ?? nextGlobal,
   crossedSubdomain: (!prevInSub && !!prevGlobal) || (!nextInSub && !!nextGlobal)
  };
 }, [domain.concepts, concept?.subdomain, conceptIdx]);

 if (!concept) return <p className="dim">Concept not found.</p>;

 const pickAnswer = (qi: number, oi: number, correctIdx: number) => {
  if (quizState[qi]) return;
  const correct = oi === correctIdx;
  setQuizState((st) => ({ ...st, [qi]: { picked: oi, correct } }));
  a.recordQuizAnswer(domain.id, correct, true, conceptIdx, `${domain.id}:concept:${conceptIdx}:${qi}`);
 };

 return (
  <article className="space-y-5 max-w-3xl">
   {/* Breadcrumb */}
   <nav aria-label="Breadcrumb" className="text-xs dim flex items-center gap-2 flex-wrap">
    <Link href={tabPath(domain.id, "concepts")} className="hover:underline">Concepts</Link>
    {concept.subdomain && domain.subdomains?.find((sd) => sd.id === concept.subdomain) && (
     <>
      <span>›</span>
      <Link href={subdomainPath(domain.id, concept.subdomain)} className="hover:underline">
       {domain.subdomains.find((sd) => sd.id === concept.subdomain)!.name}
      </Link>
     </>
    )}
    <span>›</span>
    <span className="font-medium" style={{ color: "var(--ink)" }}>{concept.t}</span>
   </nav>

   {/* Title */}
   <header className="space-y-2">
    <div className="flex items-start justify-between gap-3">
     <div className="flex-1 min-w-0">
      <h1 className="font-display text-3xl sm:text-4xl leading-tight">{concept.t}</h1>
      {concept.fullForm && <p className="dim text-sm mt-1">({concept.fullForm})</p>}
     </div>
     <button
      className="btn shrink-0"
      onClick={() => a.toggleBookmark(`${domain.id}:${conceptIdx}`)}
      aria-pressed={bookmarked}
      title={bookmarked ? "Remove bookmark" : "Bookmark this concept"}
     >
      {bookmarked ? <BookmarkCheck size={14} className="hue" /> : <Bookmark size={14} />}
      <span className="sr-only">{bookmarked ? "Bookmarked" : "Bookmark"}</span>
     </button>
    </div>
    <p className="dim text-sm">Concept #{conceptIdx + 1} of {domain.concepts.length}</p>
    <p className="text-base">{concept.short}</p>
    {concept.definition && (
     <p className="panel p-3 text-sm" style={{ borderColor: "var(--hue)" }}>
      <strong>Definition. </strong>{concept.definition}
     </p>
    )}
   </header>

   {/* Predict / Reveal */}
   {!revealed ? (
    <section className="panel p-5 space-y-3">
     <header className="flex items-center gap-2">
      <Brain size={16} className="hue" />
      <h2 className="font-display text-lg">Predict first</h2>
     </header>
     <label htmlFor="concept-prediction" className="dim text-sm block">In one or two sentences, what do you think this concept means? Wrong is fine; the small struggle is what makes the answer stick.</label>
     <textarea
      id="concept-prediction"
      className="w-full panel p-3 text-sm"
      rows={3}
      placeholder="Your guess..."
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
     {/* Beginner / Expert */}
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

     <section className="panel p-5 sm:p-6 leading-relaxed">
      <p className="text-base">{explanation}</p>
     </section>

     {concept.diagram && (
      <div>
       <div className="dim text-[10px] uppercase tracking-widest mb-2">Diagram</div>
       <DiagramView diagram={concept.diagram} />
      </div>
     )}

     {/* Reflect */}
     <section className="panel p-5" style={{ background: "color-mix(in oklab, var(--hue) 4%, transparent)" }}>
      <header className="flex items-center gap-2 mb-2">
       <Brain size={16} className="hue" />
       <h2 className="font-display text-lg">Apply to your life</h2>
      </header>
      <label htmlFor="concept-reflection" className="text-sm mb-2 block">{concept.reflect}</label>
      <textarea
       id="concept-reflection"
       className="w-full panel p-3 text-sm"
       rows={3}
       defaultValue={reflection}
       onBlur={(e) => a.saveReflection(domain.id, conceptIdx, e.target.value)}
       placeholder="Your answer saves to your notes"
      />
      <p className="dim text-xs mt-2">Saves on blur. Findable later in My List. Use <code>[[domain_id:N]]</code> to cross-link concepts.</p>
     </section>

     {/* Concept quiz */}
     {conceptQuiz.length > 0 && (
      <section className="space-y-3">
       <header className="flex items-center gap-2">
        <CheckCircle2 size={16} className="hue" />
        <h2 className="font-display text-lg">Check yourself</h2>
        <span className="dim text-xs ml-auto">{correctCount} of {conceptQuiz.length} correct</span>
       </header>
       {conceptQuiz.map((q, qi) => {
        const correctIdx = q.options.findIndex((o) => "correct" in o && o.correct === true);
        const state = quizState[qi];
        return (
         <article key={qi} className="panel p-4 space-y-2">
          <p className="font-medium text-sm">{q.q}</p>
          <ul className="space-y-1.5">
           {q.options.map((o, oi) => {
            const isCorrect = oi === correctIdx;
            const isPicked = state?.picked === oi;
            const submitted = !!state;
            return (
             <li key={oi}>
              <button
               disabled={submitted}
               onClick={() => pickAnswer(qi, oi, correctIdx)}
               className="w-full text-left panel p-2.5 text-sm flex items-start gap-2"
               style={
                submitted && isCorrect ? { borderColor: "var(--good)" } :
                submitted && isPicked ? { borderColor: "var(--bad)" } : {}
               }
              >
               {submitted && isCorrect && <BadgeCheck size={14} style={{ color: "var(--good)" }} />}
               {submitted && isPicked && !isCorrect && <AlertCircle size={14} style={{ color: "var(--bad)" }} />}
               <div className="flex-1 min-w-0">
                <p>{o.text}</p>
                {submitted && isPicked && !isCorrect && "misconception" in o && (
                 <p role="alert" className="text-xs mt-1" style={{ color: "var(--bad)" }}>
                  {(o as Exclude<QuizOption, { correct: true }>).misconception}
                 </p>
                )}
               </div>
              </button>
             </li>
            );
           })}
          </ul>
          {state && (
           <p className="text-xs dim">{q.why}</p>
          )}
         </article>
        );
       })}
      </section>
     )}

     {/* Tasks */}
     {concept.conceptTasks && concept.conceptTasks.length > 0 && (
      <section className="space-y-3">
       <header className="flex items-center gap-2">
        <CheckCircle2 size={16} className="hue" />
        <h2 className="font-display text-lg">Apply it. Basic to advanced</h2>
       </header>
       <ul className="space-y-2">
        {concept.conceptTasks.map((t, ti) => (
         <li key={ti} className="panel p-3">
          <p className="text-xs dim uppercase tracking-widest">{t.level} . +{t.xp} XP</p>
          <p className="font-medium mt-1">{t.t}</p>
          <p className="dim text-sm">{t.d}</p>
         </li>
        ))}
       </ul>
      </section>
     )}
    </>
   )}

   {/* Prev / Next */}
   <nav className="pt-4 flex items-center justify-between gap-2 border-t" style={{ borderColor: "var(--line)" }}>
    {siblings.prev ? (
     <Link className="btn" href={conceptPath(domain.id, siblings.prev.i)}>
      <ArrowLeft size={14} /> {siblings.prev.c.t}
     </Link>
    ) : <span />}
    {siblings.next ? (
     <Link className="btn" href={conceptPath(domain.id, siblings.next.i)} style={{ background: "var(--hue)", color: "#0b0d1a", borderColor: "var(--hue)" }}>
      {siblings.next.c.t} <ArrowRight size={14} />
     </Link>
    ) : (
     <Link className="btn" href={tabPath(domain.id, "concepts")}>Back to all concepts</Link>
    )}
   </nav>
  </article>
 );
}
