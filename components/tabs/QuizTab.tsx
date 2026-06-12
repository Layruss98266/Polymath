"use client";
import { useState } from "react";
import type { Domain, QuizOption } from "@/lib/types";
import { useActions } from "@/lib/state";

type Confidence = "guess" | "fairly" | "certain";

export function QuizTab({ d }: { d: Domain }) {
 return (
  <div className="space-y-4">
   <p className="dim text-sm">
    Wrong answers explain the <em>specific</em> misconception they map to, that's where memory updates.
    Pick a confidence level before each answer; calibrated confidence is a real meta-skill.
   </p>
   {d.quiz.map((q, i) => <QuizCard key={i} d={d} idx={i} q={q} />)}
  </div>
 );
}

function QuizCard({ d, idx, q }: { d: Domain; idx: number; q: Domain["quiz"][number] }) {
 const a = useActions();
 const [conf, setConf] = useState<Confidence | null>(null);
 const [picked, setPicked] = useState<number | null>(null);

 const correctIdx = q.options.findIndex((o) => "correct" in o && o.correct === true);
 const submitted = picked !== null;
 const chosen = picked !== null ? q.options[picked] : null;
 const right = picked === correctIdx;
 // Calibration "good" = right & (fairly/certain), or wrong & guess.
 const calibrated = submitted && ((right && conf !== "guess") || (!right && conf === "guess"));

 function pick(i: number) {
  if (submitted) return;
  setPicked(i);
  a.recordQuizAnswer(d.id, i === correctIdx, calibrated);
 }

 return (
  <article className="panel p-4 space-y-3">
   <p className="font-medium">{q.q}</p>

   {!submitted && (
    <div className="flex flex-wrap gap-2 text-sm">
     <span className="dim self-center">How sure?</span>
     {(["guess", "fairly", "certain"] as Confidence[]).map((c) => (
      <button key={c} className={`chip ${conf === c ? "ring-1" : ""}`} onClick={() => setConf(c)}>{c}</button>
     ))}
     {q.testOut && (
      <span className="chip" style={{ background: "rgba(96,165,250,0.15)", color: "#60a5fa" }} title="Get this right and the related concept is treated as already proven">Test out</span>
     )}
    </div>
   )}
   {q.testOut && !submitted && (
    <p className="dim text-xs">Pre assessment. If you already know this, answer correctly and the related concept gets marked as proven so you can skip the long read.</p>
   )}

   <ul className="space-y-2">
    {q.options.map((o, i) => (
     <li key={i}>
      <button
       disabled={submitted}
       onClick={() => pick(i)}
       className={`w-full text-left panel p-3 ${submitted ? (i === correctIdx ? "ring-1" : i === picked ? "opacity-80" : "opacity-60") : ""}`}
       style={submitted && i === correctIdx ? { borderColor: "var(--good)" } : submitted && i === picked ? { borderColor: "var(--bad)" } : {}}
      >
       <p className="text-sm">{o.text}</p>
       {submitted && i === picked && !right && "misconception" in o && (
        <p className="text-xs mt-1" style={{ color: "var(--bad)" }}>
         <strong>Misconception:</strong> {(o as Exclude<QuizOption, { correct: true }>).misconception}
        </p>
       )}
      </button>
     </li>
    ))}
   </ul>

   {submitted && (
    <div className="space-y-1">
     <p className="text-sm" style={{ color: right ? "var(--good)" : "var(--bad)" }}>
      {right ? "Right." : "Not quite."} {q.why}
     </p>
     {calibrated && <p className="text-xs dim">Nice calibration, {right ? "sure and right." : "you flagged uncertainty."}</p>}
     {!calibrated && conf === "certain" && !right && <p className="text-xs" style={{ color: "var(--bad)" }}>Confident-and-wrong, the most dangerous combo. Worth a re-read.</p>}
    </div>
   )}
  </article>
 );
}
