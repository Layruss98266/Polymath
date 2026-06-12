"use client";
import type { Domain } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { Check, Circle, Target } from "lucide-react";

// Missions are real-world tasks, not features. Render them as a checklist:
// a generous tap target on the left toggles done, the task title and notes
// fill the body, the XP reward sits as a quiet meta on the right.

export function MissionsTab({ d }: { d: Domain }) {
 const s = useUserState();
 const a = useActions();
 const dp = s.domainProgress[d.id];
 const isDone = (i: number) => dp?.missionsDone.includes(i) ?? false;
 const doneCount = d.missions.filter((_, i) => isDone(i)).length;
 const total = d.missions.length;
 const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

 return (
  <div className="space-y-6 max-w-[65ch]">
   {/* Progress header */}
   <header className="flex items-center gap-3">
    <span
     aria-hidden="true"
     className="grid place-items-center w-9 h-9 rounded-lg shrink-0"
     style={{ background: "var(--hue-soft)", color: "var(--hue)" }}
    >
     <Target size={16} />
    </span>
    <div className="flex-1 min-w-0">
     <p className="text-[10px] uppercase tracking-[0.16em] font-medium" style={{ color: "var(--dim)" }}>
      Real-world practice
     </p>
     <h2 className="font-display text-xl sm:text-2xl leading-tight">
      Missions <span className="tabular-nums" style={{ color: "var(--dim)" }}>{doneCount} / {total}</span>
     </h2>
    </div>
    <span className="text-sm tabular-nums font-medium" style={{ color: "var(--hue)" }}>{pct}%</span>
   </header>
   <div
    className="h-1.5 rounded-full overflow-hidden -mt-3"
    style={{ background: "var(--line)" }}
    role="progressbar"
    aria-valuenow={pct}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="Missions completed"
   >
    <div className="h-full" style={{ width: `${pct}%`, background: "var(--hue)", transition: "width .3s ease" }} />
   </div>

   <ol className="space-y-3">
    {d.missions.map((m, i) => {
     const done = isDone(i);
     return (
      <li
       key={i}
       className="panel p-4 sm:p-5 flex items-start gap-4"
       style={{
        opacity: done ? 0.7 : 1,
        background: done ? "color-mix(in oklab, var(--good) 5%, var(--panel))" : "var(--panel)"
       }}
      >
       {/* Checkbox / toggle. 44x44 tap target. */}
       <button
        className="grid place-items-center w-11 h-11 rounded-lg shrink-0 transition-colors"
        onClick={() => { if (!done) a.completeMission(d.id, i, m.xp); }}
        disabled={done}
        aria-pressed={done}
        aria-label={done ? `Mission ${i + 1} complete` : `Mark mission ${i + 1} done`}
        style={
         done
          ? { background: "var(--good)", color: "var(--hue-ink)", border: "1px solid var(--good)" }
          : { border: "1.5px dashed var(--line)", color: "var(--dim)" }
        }
       >
        {done ? <Check size={18} strokeWidth={2.5} /> : <Circle size={16} />}
       </button>

       <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
         <p
          className="font-display tabular-nums text-xs shrink-0"
          style={{ color: "var(--dim)" }}
         >
          M{String(i + 1).padStart(2, "0")}
         </p>
         <p
          className="font-medium text-base leading-snug"
          style={{ textDecoration: done ? "line-through" : "none", textDecorationColor: "var(--dim)" }}
         >
          {m.t}
         </p>
        </div>
        <p className="text-sm leading-relaxed mt-1.5" style={{ color: "var(--dim)" }}>{m.d}</p>
       </div>

       <span
        className="chip shrink-0 tabular-nums"
        style={{ color: done ? "var(--good)" : "var(--hue)", borderColor: done ? "var(--good)" : "var(--hue)" }}
       >
        +{m.xp} XP
       </span>
      </li>
     );
    })}
   </ol>
  </div>
 );
}
