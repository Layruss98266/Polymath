"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { Domain, QuizOption } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { DiagramView } from "@/components/Diagram";
import { StatusBadge } from "@/components/StatusBadge";
import { conceptPath, tabPath, subdomainPath } from "@/lib/tabs";
import {
 ArrowLeft, ArrowRight, BookOpen, Brain, CheckCircle2,
 AlertCircle, Bookmark, BookmarkCheck, Target, Lightbulb
} from "lucide-react";

// Single-concept canonical page. Owns the only h1 on the route. Same Predict,
// Read, Reflect, Check, Apply flow as the embedded ConceptsTab card, but with
// each stage rendered as a chapter: small hue icon + eyebrow + display heading.

type Mode = "beginner" | "expert";

function SectionHeader({
 eyebrow,
 title,
 icon: Icon,
 meta
}: {
 eyebrow: string;
 title: string;
 icon: typeof BookOpen;
 meta?: React.ReactNode;
}) {
 return (
  <header className="flex items-center gap-3 mb-3">
   <span
    aria-hidden="true"
    className="grid place-items-center w-8 h-8 rounded-lg shrink-0"
    style={{ background: "var(--hue-soft)", color: "var(--hue)" }}
   >
    <Icon size={15} />
   </span>
   <div className="min-w-0 flex-1">
    <p className="text-[10px] uppercase tracking-[0.16em] font-medium" style={{ color: "var(--dim)" }}>{eyebrow}</p>
    <h2 className="font-display text-lg sm:text-xl leading-tight">{title}</h2>
   </div>
   {meta && <div className="shrink-0">{meta}</div>}
  </header>
 );
}

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

 const conceptQuiz = concept?.conceptQuiz ?? [];
 const correctCount = Object.values(quizState).filter((s) => s.correct).length;

 const explanation = concept
  ? (mode === "expert" && concept.expert
   ? concept.expert
   : (concept.generic ?? concept.deep))
  : "";

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

 if (!concept) return <p style={{ color: "var(--dim)" }}>Concept not found.</p>;

 const pickAnswer = (qi: number, oi: number, correctIdx: number) => {
  if (quizState[qi]) return;
  const correct = oi === correctIdx;
  setQuizState((st) => ({ ...st, [qi]: { picked: oi, correct } }));
  a.recordQuizAnswer(domain.id, correct, true, conceptIdx, `${domain.id}:concept:${conceptIdx}:${qi}`);
 };

 return (
  <article className="space-y-10 max-w-3xl">

   {/* Breadcrumb */}
   <nav aria-label="Breadcrumb" className="text-xs flex items-center gap-2 flex-wrap" style={{ color: "var(--dim)" }}>
    <Link href={tabPath(domain.id, "concepts")} className="hover:underline">Concepts</Link>
    {concept.subdomain && domain.subdomains?.find((sd) => sd.id === concept.subdomain) && (
     <>
      <span aria-hidden="true">›</span>
      <Link href={subdomainPath(domain.id, concept.subdomain)} className="hover:underline">
       {domain.subdomains.find((sd) => sd.id === concept.subdomain)!.name}
      </Link>
     </>
    )}
    <span aria-hidden="true">›</span>
    <span className="font-medium" style={{ color: "var(--ink)" }}>{concept.t}</span>
   </nav>

   {/* Title block. Owns the page h1. */}
   <header className="space-y-4">
    <div className="flex items-start justify-between gap-4">
     <div className="flex-1 min-w-0 space-y-2">
      <div className="flex items-center gap-2 flex-wrap">
       <p className="text-[11px] uppercase tracking-[0.16em] font-medium tabular-nums" style={{ color: "var(--dim)" }}>
        Concept {String(conceptIdx + 1).padStart(2, "0")} of {String(domain.concepts.length).padStart(2, "0")}
       </p>
       <StatusBadge status={concept.status} size="sm" />
      </div>
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05]">{concept.t}</h1>
      {concept.fullForm && (
       <p className="text-sm" style={{ color: "var(--dim)" }}>({concept.fullForm})</p>
      )}
     </div>
     <button
      className="btn shrink-0 min-h-[44px]"
      onClick={() => a.toggleBookmark(`${domain.id}:${conceptIdx}`)}
      aria-pressed={bookmarked}
      title={bookmarked ? "Remove bookmark" : "Bookmark this concept"}
     >
      {bookmarked ? <BookmarkCheck size={14} className="hue" /> : <Bookmark size={14} />}
      <span className="sr-only">{bookmarked ? "Bookmarked" : "Bookmark"}</span>
     </button>
    </div>

    {concept.short && (
     <p className="text-lg sm:text-xl leading-relaxed max-w-[60ch]" style={{ color: "var(--ink)" }}>
      {concept.short}
     </p>
    )}

    {concept.definition && (
     <div
      className="rounded-xl p-4 sm:p-5"
      style={{ background: "var(--hue-softer)", borderLeft: "3px solid var(--hue)" }}
     >
      <p className="text-[10px] uppercase tracking-[0.16em] font-medium mb-1.5" style={{ color: "var(--hue)" }}>
       Definition
      </p>
      <p className="text-sm sm:text-base leading-relaxed">{concept.definition}</p>
     </div>
    )}
   </header>

   {/* Predict / Reveal */}
   {!revealed ? (
    <section className="panel p-6 sm:p-7 space-y-4">
     <SectionHeader eyebrow="Step 1" title="Predict first" icon={Lightbulb} />
     <label htmlFor="concept-prediction" className="block text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
      In one or two sentences, what do you think this concept means? Wrong is fine; the small struggle is what makes the answer stick.
     </label>
     <textarea
      id="concept-prediction"
      className="w-full panel p-3 text-sm leading-relaxed"
      rows={3}
      placeholder="Your guess..."
     />
     <div className="flex gap-2 flex-wrap pt-1">
      <button className="btn btn-primary min-h-[44px]" onClick={onReveal}>
       <BookOpen size={14} /> Reveal explanation
      </button>
      <button className="btn min-h-[44px]" onClick={onReveal}>Just show me</button>
     </div>
    </section>
   ) : (
    <>
     {/* Beginner / Expert. Single segmented control. */}
     {(concept.generic || concept.expert) && (
      <div
       className="inline-flex p-1 rounded-lg text-xs"
       style={{ background: "var(--line)" }}
       role="tablist"
       aria-label="Reading level"
      >
       <button
        role="tab"
        aria-selected={mode === "beginner"}
        onClick={() => setMode("beginner")}
        className="px-3 py-2 rounded-md font-medium min-h-[36px]"
        style={mode === "beginner"
         ? { background: "var(--hue)", color: "var(--hue-ink)" }
         : { color: "var(--dim)" }}
       >Beginner</button>
       <button
        role="tab"
        aria-selected={mode === "expert"}
        onClick={() => setMode("expert")}
        disabled={!concept.expert}
        className="px-3 py-2 rounded-md font-medium min-h-[36px]"
        style={mode === "expert"
         ? { background: "var(--hue)", color: "var(--hue-ink)" }
         : { color: concept.expert ? "var(--dim)" : "var(--line)" }}
       >Expert{!concept.expert && " (soon)"}</button>
      </div>
     )}

     {/* Explanation. Capped line-length for prose comfort. */}
     <section className="panel p-6 sm:p-8">
      <SectionHeader eyebrow="Step 2" title="The idea" icon={BookOpen} />
      <p className="text-base sm:text-lg leading-relaxed max-w-[65ch]">{explanation}</p>
     </section>

     {concept.diagram && (
      <section className="space-y-3">
       <p className="text-[10px] uppercase tracking-[0.16em] font-medium" style={{ color: "var(--dim)" }}>
        Diagram
       </p>
       <DiagramView diagram={concept.diagram} />
      </section>
     )}

     {/* Reflect */}
     <section
      className="rounded-2xl p-6 sm:p-7"
      style={{
       background: "color-mix(in oklab, var(--hue) 5%, transparent)",
       border: "1px solid var(--line)"
      }}
     >
      <SectionHeader eyebrow="Step 3" title="Apply to your life" icon={Brain} />
      <label htmlFor="concept-reflection" className="block text-sm sm:text-base mb-3 leading-relaxed max-w-[65ch]">
       {concept.reflect}
      </label>
      <textarea
       id="concept-reflection"
       className="w-full panel p-3 text-sm leading-relaxed"
       rows={3}
       defaultValue={reflection}
       onBlur={(e) => a.saveReflection(domain.id, conceptIdx, e.target.value)}
       placeholder="Your answer saves to your notes"
      />
      <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--dim)" }}>
       Saves on blur. Findable later in My List. Use <code>[[domain_id:N]]</code> to cross-link concepts.
      </p>
     </section>

     {/* Concept quiz */}
     {conceptQuiz.length > 0 && (
      <section className="space-y-4">
       <SectionHeader
        eyebrow="Step 4"
        title="Check yourself"
        icon={CheckCircle2}
        meta={
         <span className="text-xs tabular-nums" style={{ color: "var(--dim)" }}>
          {correctCount} of {conceptQuiz.length} correct
         </span>
        }
       />
       {conceptQuiz.map((q, qi) => {
        const correctIdx = q.options.findIndex((o) => "correct" in o && o.correct === true);
        const state = quizState[qi];
        return (
         <article key={qi} className="panel p-5 space-y-3">
          <p className="font-medium text-sm sm:text-base leading-snug">{q.q}</p>
          <ul className="space-y-2">
           {q.options.map((o, oi) => {
            const isCorrect = oi === correctIdx;
            const isPicked = state?.picked === oi;
            const submitted = !!state;
            const showCorrect = submitted && isCorrect;
            const showWrong = submitted && isPicked && !isCorrect;
            return (
             <li key={oi}>
              <button
               disabled={submitted}
               onClick={() => pickAnswer(qi, oi, correctIdx)}
               className="w-full text-left p-3 rounded-lg border text-sm flex items-start gap-3 min-h-[44px] transition-colors"
               style={{
                borderColor: showCorrect ? "var(--good)" : showWrong ? "var(--bad)" : "var(--line)",
                background: showCorrect
                 ? "color-mix(in oklab, var(--good) 8%, transparent)"
                 : showWrong
                  ? "color-mix(in oklab, var(--bad) 8%, transparent)"
                  : "var(--panel)"
               }}
              >
               <span
                aria-hidden="true"
                className="grid place-items-center w-6 h-6 rounded-md shrink-0 mt-0.5"
                style={{
                 background: showCorrect ? "var(--good)" : showWrong ? "var(--bad)" : "var(--line)",
                 color: showCorrect || showWrong ? "var(--hue-ink)" : "var(--ink)"
                }}
               >
                {showCorrect ? <CheckCircle2 size={13} /> : showWrong ? <AlertCircle size={13} /> : String.fromCharCode(65 + oi)}
               </span>
               <div className="flex-1 min-w-0">
                <p className="leading-relaxed">{o.text}</p>
                {showWrong && "misconception" in o && (
                 <p
                  role="alert"
                  className="text-xs mt-2 p-2.5 rounded-md leading-relaxed"
                  style={{
                   background: "color-mix(in oklab, var(--bad) 8%, transparent)",
                   borderLeft: "3px solid var(--bad)",
                   color: "var(--ink)"
                  }}
                 >
                  <span className="block uppercase tracking-wider text-[10px] font-semibold mb-1" style={{ color: "var(--bad)" }}>
                   Misconception
                  </span>
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
           <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>{q.why}</p>
          )}
         </article>
        );
       })}
      </section>
     )}

     {/* Tasks */}
     {concept.conceptTasks && concept.conceptTasks.length > 0 && (
      <section className="space-y-4">
       <SectionHeader
        eyebrow="Step 5"
        title="Apply it"
        icon={Target}
        meta={
         <span className="text-xs" style={{ color: "var(--dim)" }}>Basic to advanced</span>
        }
       />
       <ul className="space-y-2">
        {concept.conceptTasks.map((t, ti) => {
         const levelMeta = {
          basic:    { col: "var(--good)" },
          easy:     { col: "#60a5fa" },
          advanced: { col: "var(--hue)" }
         }[t.level];
         return (
          <li key={ti} className="panel p-4 flex items-start gap-3">
           <span
            className="chip uppercase tracking-wider text-[10px] font-medium shrink-0"
            style={{ color: levelMeta.col, borderColor: levelMeta.col, minWidth: 72, justifyContent: "center" }}
           >
            {t.level}
           </span>
           <div className="flex-1 min-w-0">
            <p className="font-medium text-sm sm:text-base leading-snug">{t.t}</p>
            <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--dim)" }}>{t.d}</p>
           </div>
           <span className="chip shrink-0 tabular-nums">+{t.xp} XP</span>
          </li>
         );
        })}
       </ul>
      </section>
     )}
    </>
   )}

   {/* Prev / Next */}
   <nav
    className="pt-6 flex items-center justify-between gap-3 border-t"
    style={{ borderColor: "var(--line)" }}
    aria-label="Concept navigation"
   >
    {siblings.prev ? (
     <Link className="btn min-h-[44px] max-w-[45%]" href={conceptPath(domain.id, siblings.prev.i)}>
      <ArrowLeft size={14} />
      <span className="truncate">{siblings.prev.c.t}</span>
     </Link>
    ) : <span />}
    {siblings.next ? (
     <Link
      className="btn btn-primary min-h-[44px] max-w-[55%]"
      href={conceptPath(domain.id, siblings.next.i)}
     >
      <span className="truncate">{siblings.next.c.t}</span>
      <ArrowRight size={14} />
     </Link>
    ) : (
     <Link className="btn min-h-[44px]" href={tabPath(domain.id, "concepts")}>Back to all concepts</Link>
    )}
   </nav>
  </article>
 );
}
