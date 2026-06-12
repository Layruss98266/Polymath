"use client";
import { useMemo } from "react";
import { Flame, Zap, BookOpen, TrendingUp } from "lucide-react";
import { useUserState, useHydrated } from "@/lib/state";
import { todayKey } from "@/lib/streak";

// Compact "this week" card. Pulls a rolling 7-day window from xpByDay +
// a few derived metrics so the reader sees a real, small, weekly delta
// without paging into the full streak heatmap.

function dayKey(d: Date): string {
 return d.toISOString().slice(0, 10);
}

function lastNDayKeys(n: number): string[] {
 const today = new Date();
 const out: string[] = [];
 for (let i = n - 1; i >= 0; i--) {
  const d = new Date(today);
  d.setDate(today.getDate() - i);
  out.push(dayKey(d));
 }
 return out;
}

export function WeeklyDigest() {
 const s = useUserState();
 const hydrated = useHydrated();

 const stats = useMemo(() => {
  const weekKeys = lastNDayKeys(7);
  const prevKeys = lastNDayKeys(14).slice(0, 7);
  const xpThis = weekKeys.reduce((sum, k) => sum + (s.xpByDay?.[k] ?? 0), 0);
  const xpPrev = prevKeys.reduce((sum, k) => sum + (s.xpByDay?.[k] ?? 0), 0);
  const activeThis = weekKeys.filter((k) => (s.xpByDay?.[k] ?? 0) > 0).length;
  const bestDay = weekKeys.reduce<{ day: string; xp: number } | null>((best, k) => {
   const xp = s.xpByDay?.[k] ?? 0;
   if (!best || xp > best.xp) return { day: k, xp };
   return best;
  }, null);
  const delta = xpPrev === 0 ? null : Math.round(((xpThis - xpPrev) / Math.max(1, xpPrev)) * 100);
  return { xpThis, xpPrev, activeThis, bestDay, delta };
 }, [s.xpByDay]);

 if (!hydrated) return null;
 // Suppress if there's nothing to summarise yet.
 if (stats.xpThis === 0 && stats.xpPrev === 0) return null;

 const bestLabel = stats.bestDay && stats.bestDay.xp > 0
  ? new Date(stats.bestDay.day).toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" })
  : "no peak yet";
 const today = todayKey();

 return (
  <section className="panel p-4 sm:p-5" aria-label="This week">
   <header className="flex items-center justify-between mb-3 gap-2">
    <div className="flex items-center gap-2">
     <TrendingUp size={14} className="hue" />
     <p className="font-display text-sm uppercase tracking-widest">This week</p>
    </div>
    <p className="dim text-xs">{lastNDayKeys(1)[0] === today ? `to ${today}` : ""}</p>
   </header>
   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
    <Stat icon={<Zap size={14} />}      label="XP this week" value={`+${stats.xpThis}`} hint={stats.delta === null ? null : `${stats.delta >= 0 ? "+" : ""}${stats.delta}% vs last`} />
    <Stat icon={<Flame size={14} />}    label="Active days"  value={`${stats.activeThis} of 7`} hint={null} />
    <Stat icon={<BookOpen size={14} />} label="Best day"     value={stats.bestDay?.xp ? `+${stats.bestDay.xp}` : "—"} hint={bestLabel} />
    <Stat icon={<TrendingUp size={14} />} label="Streak"     value={`${s.currentStreak}d`} hint={s.longestStreak > s.currentStreak ? `best ${s.longestStreak}d` : null} />
   </div>
  </section>
 );
}

function Stat({ icon, label, value, hint }: { icon: React.ReactNode; label: string; value: string; hint: string | null }) {
 return (
  <div className="panel p-3" style={{ borderColor: "var(--line)" }}>
   <div className="flex items-center gap-2 dim text-[10px] uppercase tracking-widest">
    <span className="hue">{icon}</span>
    {label}
   </div>
   <div className="font-display text-2xl leading-none mt-1.5">{value}</div>
   {hint && <div className="dim text-[11px] mt-1">{hint}</div>}
  </div>
 );
}
