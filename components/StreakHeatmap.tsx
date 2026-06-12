"use client";
import { useMemo } from "react";

// 365 day GitHub-style heatmap of XP earned per day. We do not currently
// store per-day XP history, so this renders a synthetic view derived from
// the current streak and totals. As an honest signal it shows the current
// streak window filled at the current intensity.
//
// Future improvement: log xpHistory in state for a real heatmap.

export function StreakHeatmap({ currentStreak, xpToday }: { currentStreak: number; xpToday: number }) {
 const days = 365;
 const cells = useMemo(() => {
  // Build last 365 days. Today is rightmost. Today shows intensity from xpToday.
  // Previous (streak - 1) days marked at lower intensity. Older days empty.
  const out: { date: string; level: 0 | 1 | 2 | 3 | 4 }[] = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
   const d = new Date(today);
   d.setDate(today.getDate() - i);
   let level: 0 | 1 | 2 | 3 | 4 = 0;
   if (i === 0) {
    // today: scale by xpToday
    if (xpToday > 0) level = (xpToday > 60 ? 4 : xpToday > 30 ? 3 : xpToday > 10 ? 2 : 1);
   } else if (i < currentStreak) {
    level = 2;
   }
   out.push({ date: d.toISOString().slice(0, 10), level });
  }
  return out;
 }, [currentStreak, xpToday]);

 const colors = {
  0: "var(--line)",
  1: "rgba(255,107,94,0.20)",
  2: "rgba(255,107,94,0.40)",
  3: "rgba(255,107,94,0.65)",
  4: "rgba(255,107,94,0.90)"
 } as const;

 // Group into weeks of 7 (columns), starting from the date of the leftmost cell.
 const cols: typeof cells[] = [];
 const startOfWeek = new Date(cells[0].date).getDay(); // 0 = Sunday
 // Pad the first week so weekdays align
 const padded: (typeof cells[number] | null)[] = Array(startOfWeek).fill(null).concat(cells);
 for (let i = 0; i < padded.length; i += 7) {
  cols.push(padded.slice(i, i + 7) as any);
 }

 return (
  <div className="overflow-x-auto no-scrollbar">
   <div className="inline-grid gap-[3px]" style={{ gridAutoFlow: "column", gridTemplateRows: "repeat(7, 10px)" }}>
    {cols.flatMap((col, ci) =>
     col.map((cell, ri) => (
      <span
       key={`${ci}-${ri}`}
       title={cell?.date ?? ""}
       style={{
        width: 10, height: 10, borderRadius: 2,
        background: cell ? colors[cell.level] : "transparent"
       }}
      />
     ))
    )}
   </div>
   <div className="flex items-center gap-2 mt-2 text-xs dim">
    <span>Less</span>
    {([0, 1, 2, 3, 4] as const).map((l) => (
     <span key={l} style={{ width: 10, height: 10, borderRadius: 2, display: "inline-block", background: colors[l] }} />
    ))}
    <span>More</span>
   </div>
  </div>
 );
}
