"use client";
import type { Domain } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";

export function RoadmapTab({ d }: { d: Domain }) {
 const s = useUserState();
 const a = useActions();
 const dp = s.domainProgress[d.id];
 const capstoneDone = dp?.capstoneDone;

 return (
  <div className="space-y-4">
   <ol className="space-y-3">
    {d.roadmap.map((r, i) => (
     <li key={r.rank} className="panel p-4">
      <div className="flex flex-wrap items-baseline gap-3">
       <span className="chip hue" style={{ borderColor: "var(--hue)" }}>{i + 1} · {r.rank}</span>
       <span className="dim text-xs">{r.time}</span>
      </div>
      <p className="font-medium mt-2">{r.focus}</p>
      <p className="text-sm mt-1"><strong>Do: </strong>{r.do}</p>
      <p className="text-sm dim mt-1"><strong>Milestone: </strong>{r.milestone}</p>
     </li>
    ))}
   </ol>

   <div className="panel p-5">
    <p className="text-xs uppercase tracking-widest dim">You'll be able to…</p>
    <ul className="mt-2 space-y-1 list-disc pl-5">
     {d.capabilities.map((cap, i) => <li key={i}>{cap}</li>)}
    </ul>
   </div>

   {d.capstone && (
    <div className="panel p-5 border" style={{ borderColor: "var(--hue)" }}>
     <p className="text-xs uppercase tracking-widest dim">Boss challenge , earn Grandmaster</p>
     <h3 className="font-display text-lg mt-1">{d.capstone.t}</h3>
     <p className="text-sm mt-1">{d.capstone.d}</p>
     <div className="flex items-center gap-2 mt-3">
      <span className="chip">+{d.capstone.xp} XP</span>
      {capstoneDone ? (
       <span className="chip" style={{ color: "var(--good)" }}>✓ Completed</span>
      ) : (
       <button className="btn" onClick={() => a.completeCapstone(d.id)}>Mark capstone done</button>
      )}
     </div>
    </div>
   )}
  </div>
 );
}
