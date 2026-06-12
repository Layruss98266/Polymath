"use client";
import { useMemo } from "react";

// 365 day GitHub-style heatmap. Real per-day XP if available from xpByDay, falls back
// to the streak-window approximation for users who have no logged history yet.

export function StreakHeatmap({
 currentStreak,
 xpByDay = {}
}: {
 currentStreak: number;
 xpByDay?: Record<string, number>;
}) {
 const days = 365;
 const cells = useMemo(() => {
  const out: { date: string; level: 0 | 1 | 2 | 3 | 4; xp: number }[] = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
   const d = new Date(today);
   d.setDate(today.getDate() - i);
   const key = d.toISOString().slice(0, 10);
   const xp = xpByDay[key] ?? 0;
   let level: 0 | 1 | 2 | 3 | 4 = 0;
   if (xp > 0) {
    level = xp >= 80 ? 4 : xp >= 40 ? 3 : xp >= 15 ? 2 : 1;
   } else if (i < currentStreak && Object.keys(xpByDay).length === 0) {
    // No history yet, fall back to current-streak coloring
    level = 2;
   }
   out.push({ date: key, level, xp });
  }
  return out;
 }, [currentStreak, xpByDay]);

 const colors = {
  0: "var(--line)",
  1: "rgba(255,107,94,0.22)",
  2: "rgba(255,107,94,0.42)",
  3: "rgba(255,107,94,0.65)",
  4: "rgba(255,107,94,0.90)"
 } as const;

 const startOfWeek = new Date(cells[0].date).getDay();
 const padded: (typeof cells[number] | null)[] = Array(startOfWeek).fill(null).concat(cells);
 const cols: (typeof cells[number] | null)[][] = [];
 for (let i = 0; i < padded.length; i += 7) {
  cols.push(padded.slice(i, i + 7));
 }

 const total = Object.values(xpByDay).reduce((sum, v) => sum + v, 0);
 const active = Object.values(xpByDay).filter((v) => v > 0).length;

 return (
  <div className="overflow-x-auto no-scrollbar">
   <div className="inline-grid gap-[3px]" style={{ gridAutoFlow: "column", gridTemplateRows: "repeat(7, 10px)" }}>
    {cols.flatMap((col, ci) =>
     col.map((cell, ri) => (
      <span
       key={`${ci}-${ri}`}
       title={cell ? `${cell.date}: ${cell.xp} XP` : ""}
       aria-label={cell ? `${cell.date}: ${cell.xp} XP` : "padding"}
       style={{
        width: 10, height: 10, borderRadius: 2,
        background: cell ? colors[cell.level] : "transparent"
       }}
      />
     ))
    )}
   </div>
   <div className="flex items-center justify-between mt-2 text-xs dim flex-wrap gap-2">
    <span>{active} active days in the last 365. {total} XP logged.</span>
    <span className="flex items-center gap-1">
     Less
     {([0, 1, 2, 3, 4] as const).map((l) => (
      <span key={l} style={{ width: 10, height: 10, borderRadius: 2, display: "inline-block", background: colors[l] }} />
     ))}
     More
    </span>
   </div>
  </div>
 );
}
