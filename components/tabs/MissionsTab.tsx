"use client";
import type { Domain } from "@/lib/types";
import { useActions, useUserState } from "@/lib/state";
import { Check } from "lucide-react";

export function MissionsTab({ d }: { d: Domain }) {
 const s = useUserState();
 const a = useActions();
 const dp = s.domainProgress[d.id];
 const done = (i: number) => dp?.missionsDone.includes(i);
 return (
  <ol className="space-y-2">
   {d.missions.map((m, i) => (
    <li key={i} className={`panel p-4 flex items-start gap-3 ${done(i) ? "opacity-70" : ""}`}>
     <div className="flex-1">
      <p className="font-medium">{m.t}</p>
      <p className="text-sm dim mt-1">{m.d}</p>
     </div>
     <div className="text-right space-y-2">
      <span className="chip">+{m.xp} XP</span>
      {done(i)
       ? <p className="chip" style={{ color: "var(--good)" }}><Check size={12} /> done</p>
       : <button className="btn" onClick={() => a.completeMission(d.id, i, m.xp)}>Mark done</button>}
     </div>
    </li>
   ))}
  </ol>
 );
}
