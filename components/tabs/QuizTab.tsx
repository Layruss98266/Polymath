"use client";
import { useState } from "react";
import type { Domain, QuizOption } from "@/lib/types";
import { useActions } from "@/lib/state";
import { CheckCircle2, AlertCircle, Sparkles, HelpCircle } from "lucide-react";

type Confidence = "guess" | "fairly" | "certain";

// Quiz tab: each question is a focused study moment. One question per card.
// Four options are obvious tap targets (full-width, p-4, 44px min height).
// The misconception alert is the pedagogical core: visually distinguished
// with a left rail and tinted background, not alarming. role="alert" preserved.

export function QuizTab({ d }: { d: Domain }) {
 return (
  <div className="space-y-6 max-w-[65ch]">
   <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
    Wrong answers explain the <em>specific</em> misconception they map to. That is where memory updates.
    Pick a confidence level before each answer; calibrated confidence is a real meta-skill.
   </p>
   {d.quiz.map((q, i) => <QuizCard key={i} d={d} idx={i} q={q} />)}
  </div>
 );
}

const CONF_META: Record<Confidence, { label: string; sub: string }> = {
 guess:   { label: "Guess",   sub: "leaning" },
 fairly:  { label: "Fairly",  sub: "confident" },
 certain: { label: "Certain", sub: "sure" }
};

function QuizCard({ d, idx, q }: { d: Domain; idx: number; q: Domain["quiz"][number] }) {
 const a = useActions();
 const [conf, setConf] = useState<Confidence | null>(null);
 const [picked, setPicked] = useState<number | null>(null);

 const correctIdx = q.options.findIndex((o) => "correct" in o && o.correct === true);
 const submitted = picked !== null;
 const right = picked === correctIdx;
 const calibrated = submitted && ((right && conf !== "guess") || (!right && conf === "guess"));

 function pick(i: number) {
  if (submitted) return;
  setPicked(i);
  const isRight = i === correctIdx;
  const isCalibrated = (isRight && conf !== "guess") || (!isRight && conf === "guess");
  a.recordQuizAnswer(d.id, isRight, isCalibrated, undefined, `${d.id}:quiz:${idx}`);
 }

 return (
  <article className="panel p-5 sm:p-6 space-y-5">
   {/* Question */}
   <div className="flex items-start gap-3">
    <span
     aria-hidden="true"
     className="grid place-items-center w-8 h-8 rounded-lg shrink-0 font-display tabular-nums text-sm"
     style={{ background: "var(--hue-soft)", color: "var(--hue)" }}
    >
     {idx + 1}
    </span>
    <p className="font-medium text-base sm:text-lg leading-snug flex-1 pt-0.5">{q.q}</p>
   </div>

   {/* Confidence */}
   {!submitted && (
    <div className="space-y-2">
     <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--dim)" }}>
      <HelpCircle size={12} /> <span>How sure are you</span>
     </div>
     <div className="flex flex-wrap gap-2">
      {(["guess", "fairly", "certain"] as Confidence[]).map((c) => {
       const meta = CONF_META[c];
       const active = conf === c;
       return (
        <button
         key={c}
         onClick={() => setConf(c)}
         className="px-3 py-2 rounded-lg text-sm min-h-[44px] inline-flex flex-col items-start leading-tight border transition-colors"
         style={
          active
           ? { borderColor: "var(--hue)", color: "var(--hue)", background: "var(--hue-soft)" }
           : { borderColor: "var(--line)", color: "var(--ink)" }
         }
         aria-pressed={active}
        >
         <span className="font-medium">{meta.label}</span>
         <span className="text-[11px]" style={{ color: active ? "var(--hue)" : "var(--dim)" }}>{meta.sub}</span>
        </button>
       );
      })}
      {q.testOut && (
       <span
        className="chip"
        style={{ background: "color-mix(in oklab, #60a5fa 14%, transparent)", color: "#60a5fa", borderColor: "#60a5fa" }}
        title="Get this right and the related concept is treated as already proven"
       >
        <Sparkles size={11} /> Test out
       </span>
      )}
     </div>
     {q.testOut && (
      <p className="text-xs leading-relaxed" style={{ color: "var(--dim)" }}>
       Pre assessment. If you already know this, answer correctly and the related concept gets marked as proven so you can skip the long read.
      </p>
     )}
    </div>
   )}

   {/* Options. 44px tap targets, full width, leading icon column. */}
   <ul className="space-y-2" role="radiogroup" aria-label="Answer options">
    {q.options.map((o, i) => {
     const isRight = i === correctIdx;
     const isPicked = i === picked;
     const showCorrect = submitted && isRight;
     const showWrong = submitted && isPicked && !isRight;
     const letter = String.fromCharCode(65 + i);
     return (
      <li key={i}>
       <button
        role="radio"
        aria-checked={isPicked}
        disabled={submitted}
        onClick={() => pick(i)}
        className="w-full text-left p-4 rounded-xl border transition-colors min-h-[44px] flex items-start gap-3"
        style={{
         borderColor: showCorrect ? "var(--good)"
                    : showWrong   ? "var(--bad)"
                    : "var(--line)",
         background: showCorrect ? "color-mix(in oklab, var(--good) 8%, transparent)"
                    : showWrong  ? "color-mix(in oklab, var(--bad) 8%, transparent)"
                    : "var(--panel)",
         opacity: submitted && !isRight && !isPicked ? 0.6 : 1
        }}
       >
        <span
         aria-hidden="true"
         className="grid place-items-center w-7 h-7 rounded-md shrink-0 text-xs font-display"
         style={{
          background: showCorrect ? "var(--good)" : showWrong ? "var(--bad)" : "var(--line)",
          color: showCorrect || showWrong ? "var(--hue-ink)" : "var(--ink)"
         }}
        >
         {showCorrect ? <CheckCircle2 size={14} /> : showWrong ? <AlertCircle size={14} /> : letter}
        </span>
        <div className="flex-1 min-w-0">
         <p className="text-sm sm:text-base leading-relaxed">{o.text}</p>
         {showWrong && "misconception" in o && (
          <p
           role="alert"
           className="text-xs mt-3 p-2.5 rounded-md leading-relaxed"
           style={{
            color: "var(--ink)",
            background: "color-mix(in oklab, var(--bad) 8%, transparent)",
            borderLeft: "3px solid var(--bad)"
           }}
          >
           <strong className="block uppercase tracking-wider text-[10px] mb-1" style={{ color: "var(--bad)" }}>
            Misconception
           </strong>
           {(o as Exclude<QuizOption, { correct: true }>).misconception}
          </p>
         )}
        </div>
       </button>
      </li>
     );
    })}
   </ul>

   {/* Footer feedback */}
   {submitted && (
    <div
     className="text-sm p-3 rounded-lg leading-relaxed"
     style={{
      background: right ? "color-mix(in oklab, var(--good) 8%, transparent)" : "color-mix(in oklab, var(--bad) 8%, transparent)",
      borderLeft: `3px solid ${right ? "var(--good)" : "var(--bad)"}`
     }}
    >
     <p style={{ color: right ? "var(--good)" : "var(--bad)" }} className="font-medium mb-1">
      {right ? "Right." : "Not quite."}
     </p>
     <p>{q.why}</p>
     {calibrated && (
      <p className="text-xs mt-2" style={{ color: "var(--dim)" }}>
       Nice calibration, {right ? "sure and right." : "you flagged uncertainty."}
      </p>
     )}
     {!calibrated && conf === "certain" && !right && (
      <p className="text-xs mt-2" style={{ color: "var(--bad)" }}>
       Confident and wrong, the most dangerous combo. Worth a re-read.
      </p>
     )}
    </div>
   )}
  </article>
 );
}
