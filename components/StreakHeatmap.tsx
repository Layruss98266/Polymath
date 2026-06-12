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
   const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
   const xp = xpByDay[key] ?? 0;
   let level: 0 | 1 | 2 | 3 | 4 = 0;
   if (xp > 0) {
    level = xp >= 80 ? 4 : xp >= 40 ? 3 : xp >= 15 ? 2 : 1;
   } else if (i < currentStreak && Object.keys(xpByDay).length === 0) {
    level = 2;
   }
   out.push({ date: key, level, xp });
  }
  return out;
 }, [currentStreak, xpByDay]);

 // Color ramp: transparent base -> hue. Uses color-mix so it tracks --hue
 // automatically across themes. Dark + light theme parity.
 const colors = {
  0: "color-mix(in oklab, var(--ink) 7%, transparent)",
  1: "color-mix(in oklab, var(--hue) 22%, transparent)",
  2: "color-mix(in oklab, var(--hue) 45%, transparent)",
  3: "color-mix(in oklab, var(--hue) 70%, transparent)",
  4: "var(--hue)"
 } as const;

 const startOfWeek = new Date(cells[0].date).getDay();
 const padded: (typeof cells[number] | null)[] = Array(startOfWeek).fill(null).concat(cells);
 const cols: (typeof cells[number] | null)[][] = [];
 for (let i = 0; i < padded.length; i += 7) {
  cols.push(padded.slice(i, i + 7));
 }

 const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 const monthLabels = cols.map((col, ci) => {
  const first = col.find((c) => c !== null);
  if (!first) return null;
  const m = new Date(first.date).getMonth();
  if (ci === 0) return MONTH_NAMES[m];
  const prevCol = cols[ci - 1].find((c) => c !== null);
  if (!prevCol) return MONTH_NAMES[m];
  return new Date(prevCol.date).getMonth() === m ? null : MONTH_NAMES[m];
 });

 const total = Object.values(xpByDay).reduce((sum, v) => sum + v, 0);
 const active = Object.values(xpByDay).filter((v) => v > 0).length;

 // Weekday labels: Mon / Wed / Fri at rows 1, 3, 5 (Sun=0).
 const WEEKDAY: Record<number, string> = { 1: "Mon", 3: "Wed", 5: "Fri" };

 const CELL = 11;
 const GAP = 3;

 return (
  <div className="overflow-x-auto no-scrollbar" role="img" aria-label={`Activity heatmap: ${active} active days, ${total} XP earned in the last 365 days`}>
   <div className="inline-flex gap-2 items-start">
    {/* Weekday letter column */}
    <div className="inline-grid pt-[14px]" style={{ gridTemplateRows: `repeat(7, ${CELL}px)`, rowGap: GAP }} aria-hidden="true">
     {[0, 1, 2, 3, 4, 5, 6].map((row) => (
      <span key={row} className="dim text-[9px] tracking-widest" style={{ lineHeight: `${CELL}px`, height: CELL, minWidth: 18 }}>
       {WEEKDAY[row] ?? ""}
      </span>
     ))}
    </div>

    <div>
     {/* Month labels */}
     <div className="inline-grid mb-1" style={{ gridAutoFlow: "column", gridTemplateColumns: `repeat(${cols.length}, ${CELL}px)`, columnGap: GAP }} aria-hidden="true">
      {monthLabels.map((m, ci) => (
       <span key={ci} className="dim text-[9px] uppercase tracking-widest" style={{ minWidth: CELL, height: 11, whiteSpace: "nowrap" }}>{m ?? ""}</span>
      ))}
     </div>

     {/* Cells */}
     <div className="inline-grid" style={{ gridAutoFlow: "column", gridTemplateRows: `repeat(7, ${CELL}px)`, gap: GAP }}>
      {cols.flatMap((col, ci) =>
       col.map((cell, ri) => (
        <span
         key={`${ci}-${ri}`}
         title={cell ? `${cell.date}: ${cell.xp} XP` : ""}
         aria-hidden="true"
         style={{
          width: CELL, height: CELL, borderRadius: 3,
          background: cell ? colors[cell.level] : "transparent",
          border: cell ? "1px solid color-mix(in oklab, var(--ink) 4%, transparent)" : "none"
         }}
        />
       ))
      )}
     </div>
    </div>
   </div>

   <div className="flex items-center justify-between mt-3 text-xs dim flex-wrap gap-2">
    <span>{active} active days in the last 365. {total} XP logged.</span>
    <span className="flex items-center gap-1">
     Less
     {([0, 1, 2, 3, 4] as const).map((l) => (
      <span key={l} style={{ width: CELL, height: CELL, borderRadius: 3, display: "inline-block", background: colors[l], border: "1px solid color-mix(in oklab, var(--ink) 4%, transparent)" }} />
     ))}
     More
    </span>
   </div>
  </div>
 );
}
