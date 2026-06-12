"use client";
import { useMemo } from "react";
import { useUserState } from "@/lib/state";
import { globalRank, levelProgress } from "@/lib/xp";

export function LevelRing() {
 const s = useUserState();
 const lp = useMemo(() => levelProgress(s.xp), [s.xp]);
 const rank = useMemo(() => globalRank(s.xp), [s.xp]);
 const r = 70;
 const c = 2 * Math.PI * r;
 const off = c * (1 - lp.pct);

 return (
  <div className="panel p-5 flex flex-col items-center text-center">
   <svg viewBox="0 0 200 200" style={{ width: 180, color: "var(--ink)" }} role="img" aria-label={`Level ${lp.current}`}>
    <circle cx="100" cy="100" r={r} fill="none" stroke="var(--line)" strokeWidth="12" />
    <circle
     cx="100" cy="100" r={r}
     fill="none" stroke="var(--hue)" strokeWidth="12"
     strokeDasharray={c} strokeDashoffset={off}
     strokeLinecap="round" transform="rotate(-90 100 100)"
    />
    <text x="100" y="92" textAnchor="middle" fontSize="36" fill="var(--ink)" fontWeight="600">L{lp.current}</text>
    <text x="100" y="118" textAnchor="middle" fontSize="12" fill="var(--dim)">{lp.into} / {lp.nextAt} XP</text>
   </svg>
   <p className="mt-2 font-medium">{rank.name}</p>
   {rank.nextName && <p className="dim text-xs">Next: {rank.nextName} @ L{rank.nextAtLevel}</p>}
   <p className="dim text-xs mt-3">Streak {s.currentStreak}🔥 · longest {s.longestStreak}</p>
  </div>
 );
}
