"use client";
import { useEffect, useMemo, useState } from "react";
import { useUserState, useHydrated } from "@/lib/state";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import type { Domain } from "@/lib/types";
import { masteryPct } from "@/lib/mastery";
import { domainRank, globalRank, levelProgress } from "@/lib/xp";
import { RankBadge } from "./RankBadge";
import { dueNow } from "@/lib/fsrs";
import { ACHIEVEMENTS } from "@/data/achievements";
import { StreakHeatmap } from "./StreakHeatmap";
import { WeeklyDigest } from "./WeeklyDigest";
import { BarChart3, Sparkles, ArrowRight, Flame, Zap, Target, BookOpen } from "lucide-react";
import Link from "next/link";
import { todayKey } from "@/lib/streak";

export function Dashboard() {
 const s = useUserState();
 const hydrated = useHydrated();
 const [domains, setDomains] = useState<Record<string, Domain>>({});

 useEffect(() => {
  if (!hydrated) return;
  Promise.all(DOMAIN_INDEX.map(async (d) => {
   try { return [d.id, await loadDomain(d.id)] as const; } catch { return null; }
  })).then((entries) => {
   const map: Record<string, Domain> = {};
   for (const e of entries) if (e) map[e[0]] = e[1];
   setDomains(map);
  });
 }, [hydrated]);

 const masteries = useMemo(() => DOMAIN_INDEX.map((e) => {
  const dom = domains[e.id];
  const p = s.domainProgress[e.id];
  return { id: e.id, name: e.name, hue: e.hue, m: dom ? masteryPct(dom, p, s.conceptProgress) : 0 };
 }), [domains, s.domainProgress, s.conceptProgress]);

 const lp = levelProgress(s.xp);
 const rank = globalRank(s.xp);
 const due = dueNow(s.cards).length;
 const xpToday = (s.xpByDay ?? {})[todayKey()] ?? 0;

 const capabilityLines = useMemo(() => {
  const lines: string[] = [];
  for (const e of DOMAIN_INDEX) {
   if (!s.startedDomains.includes(e.id)) continue;
   const dom = domains[e.id];
   if (!dom) continue;
   const p = s.domainProgress[e.id];
   const m = masteryPct(dom, p, s.conceptProgress);
   const allowed = Math.max(1, Math.ceil(m * dom.capabilities.length));
   dom.capabilities.slice(0, allowed).forEach((c) => lines.push(c));
  }
  return lines.slice(0, 12);
 }, [domains, s.domainProgress, s.startedDomains, s.conceptProgress]);
 const cardsReviewed = s.cards.reduce((sum, c) => sum + c.reps, 0);
 const calib = Math.round(((s.calibrationScore ?? 0) + 1) * 50);
 const quizCount = (s.quizSeen ?? []).length;

 const hasActivity = s.startedDomains.length > 0 || s.xp > 0;
 const hasHeatmapData = Object.keys(s.xpByDay ?? {}).length > 0;
 const hasQuizData = Object.values(s.domainProgress).some((d) => d.quizAnswered > 0);

 const PageHero = ({ subtitle }: { subtitle: string }) => (
  <header className="space-y-2">
   <div className="flex items-center gap-2">
    <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
     <BarChart3 size={18} />
    </span>
    <p className="dim text-xs uppercase tracking-widest">Your progress</p>
   </div>
   <h1 className="font-display text-3xl sm:text-4xl">Dashboard</h1>
   <p className="dim">{subtitle}</p>
  </header>
 );

 if (!hasActivity) {
  return (
   <div className="space-y-6">
    <PageHero subtitle="Start a domain to populate this page." />
    <section className="panel hero-glow p-6 sm:p-10 text-center space-y-3">
     <Sparkles size={28} className="hue mx-auto" />
     <h2 className="font-display text-2xl">Nothing here yet</h2>
     <p className="dim max-w-xl mx-auto">Once you open a concept, complete a mission, or review a card, your XP, streak, mastery radar, calibration, and achievements will live here.</p>
     <div className="flex flex-wrap justify-center gap-2 pt-2">
      <Link href="/" className="btn">Browse domains <ArrowRight size={14} /></Link>
      <Link href="/about" className="btn">Read methodology</Link>
     </div>
    </section>
   </div>
  );
 }

 const lvlPct = Math.round((lp.pct ?? 0) * 100);

 return (
  <div className="space-y-6">
   <PageHero subtitle={`L${lp.current}, ${rank.name}. ${s.startedDomains.length} domain${s.startedDomains.length === 1 ? "" : "s"} touched. ${due} card${due === 1 ? "" : "s"} due now.`} />

   {/* Hero band: today's XP + streak get prominence */}
   <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <div className="panel hero-glow p-6 lg:col-span-2 relative overflow-hidden">
     <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
       <p className="dim text-xs uppercase tracking-widest flex items-center gap-2"><Zap size={12} className="hue" /> Today</p>
       <p className="font-display text-5xl sm:text-6xl mt-2 leading-none">+{xpToday}<span className="dim text-xl ml-2">XP</span></p>
       <p className="dim text-sm mt-2">Total {s.xp} XP, L{lp.current}, {rank.name}.</p>
      </div>
      <div className="text-right">
       <p className="dim text-xs uppercase tracking-widest flex items-center gap-2 justify-end"><Flame size={12} className="hue" /> Streak</p>
       <p className="font-display text-4xl sm:text-5xl mt-2 leading-none">{s.currentStreak}<span className="dim text-base ml-1">d</span></p>
       <p className="dim text-sm mt-2">best {s.longestStreak}d</p>
      </div>
     </div>
     {/* Level progress */}
     {Number.isFinite(lvlPct) && (
      <div className="mt-5">
       <div className="flex items-center justify-between text-xs dim mb-1.5">
        <span>L{lp.current}</span>
        <span>{lvlPct}% to L{(lp.current ?? 0) + 1}</span>
       </div>
       <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
        <div className="h-full" style={{ width: `${lvlPct}%`, background: "var(--hue)", transition: "width .3s" }} />
       </div>
      </div>
     )}
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
     <MiniStat icon={<Target size={14} />} label="Due now" value={`${due}`} hint={due > 0 ? "ready to review" : "nothing pending"} href="/review" />
     <MiniStat icon={<BookOpen size={14} />} label="Cards reviewed" value={`${cardsReviewed}`} hint={`${s.cards.length} in deck`} />
    </div>
   </section>

   <WeeklyDigest />

   {/* Mastery + heatmap as a balanced pair on wide screens */}
   <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
    <div className="panel p-5 lg:col-span-3">
     <div className="flex items-center justify-between mb-3 gap-2">
      <h2 className="font-display text-xl">Mastery radar</h2>
      <span className="dim text-xs">{masteries.filter((m) => m.m > 0).length} of {masteries.length} active</span>
     </div>
     <Radar values={masteries.map((m) => ({ label: m.name, value: m.m, hue: m.hue }))} />
    </div>
    <div className="panel p-5 lg:col-span-2 flex flex-col">
     <h2 className="font-display text-xl mb-3">Ranks</h2>
     <ul className="space-y-2 flex-1">
      {masteries.map((m) => (
       <li key={m.id} className="flex items-center justify-between gap-2 p-2.5 rounded-lg" style={{ background: m.m > 0 ? "color-mix(in oklab, " + m.hue + " 6%, transparent)" : "transparent" }}>
        <span className="font-medium text-sm truncate" style={{ color: m.m > 0 ? m.hue : "var(--ink)" }}>{m.name}</span>
        <span className="inline-flex items-center gap-2 shrink-0">
         <RankBadge rank={domainRank(m.m)} size="sm" />
         <span className="dim text-xs tabular-nums">{Math.round(m.m * 100)}%</span>
        </span>
       </li>
      ))}
     </ul>
    </div>
   </section>

   {hasHeatmapData && (
    <section className="panel p-5">
     <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
      <h2 className="font-display text-xl">Activity, last 365 days</h2>
      <span className="dim text-xs">Each square is a day. Brighter is more XP.</span>
     </div>
     <StreakHeatmap currentStreak={s.currentStreak} xpByDay={s.xpByDay ?? {}} />
    </section>
   )}

   {hasQuizData && (
    <section className="panel p-5">
     <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
      <h2 className="font-display text-xl">Calibration</h2>
      <span className="chip tabular-nums">{calib} of 100</span>
     </div>
     <p className="dim text-sm mb-3">
      Calibration measures how well your confidence on quizzes matches reality. Above 50 means you tend to be sure when right and uncertain when wrong (well calibrated). Below 50 means the dangerous mix of sure but wrong.
     </p>
     <div
      className="h-3 rounded-full overflow-hidden relative"
      style={{ background: "var(--line)" }}
      role="progressbar"
      aria-valuenow={calib}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Calibration score"
     >
      <div className="h-full" style={{ width: `${calib}%`, background: "var(--hue)", transition: "width .3s" }} />
      {/* 50 marker */}
      <div className="absolute top-0 bottom-0" style={{ left: "50%", width: 1, background: "color-mix(in oklab, var(--ink) 40%, transparent)" }} aria-hidden="true" />
     </div>
     <p className="text-xs dim mt-2">Your score, {calib} of 100 (n={quizCount} quizzes).{quizCount < 20 ? " Comes online at n=20." : ""}</p>
     <p className="text-xs dim mt-2">
      <strong>Why this matters.</strong> Confident and wrong is the most expensive failure mode in any field, from medicine to investing to engineering. Building the habit of registering uncertainty before you act is one of the most transferable upgrades on this app.
     </p>
    </section>
   )}

   <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div className="panel p-5">
     <div className="flex items-center justify-between mb-3 gap-2">
      <h2 className="font-display text-xl">Achievements</h2>
      <span className="dim text-xs tabular-nums">{s.achievements.length} of {ACHIEVEMENTS.length}</span>
     </div>
     {s.achievements.length === 0
      ? <p className="dim text-sm">No achievements yet. Open a domain to earn your first.</p>
      : (
       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {s.achievements.map((a) => {
         const def = ACHIEVEMENTS.find((d) => d.id === a.id);
         return (
          <li key={a.id} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 5%, transparent)", border: "1px solid var(--line)" }}>
           <div className="text-2xl shrink-0" aria-hidden="true">{def?.icon ?? "🏅"}</div>
           <div className="flex-1 min-w-0">
            <p className="font-medium text-sm">{a.name}</p>
            <p className="dim text-xs">{a.desc}</p>
           </div>
          </li>
         );
        })}
       </ul>
      )}
    </div>

    <div className="panel p-5">
     <h2 className="font-display text-xl mb-3">You can now</h2>
     {capabilityLines.length === 0
      ? <p className="dim text-sm">As you progress concepts, the things you can now explain or do show up here.</p>
      : (
       <ul className="space-y-1.5">
        {capabilityLines.map((c, i) => (
         <li key={i} className="text-sm flex items-start gap-2">
          <span className="hue mt-0.5 shrink-0" aria-hidden="true">✓</span>
          <span>{c}</span>
         </li>
        ))}
       </ul>
      )}
    </div>
   </section>
  </div>
 );
}

function MiniStat({ icon, label, value, hint, href }: { icon: React.ReactNode; label: string; value: string; hint?: string; href?: string }) {
 const body = (
  <div className="panel p-4 h-full flex flex-col justify-between">
   <div className="flex items-center gap-2 dim text-[10px] uppercase tracking-widest">
    <span className="hue">{icon}</span>
    {label}
   </div>
   <div>
    <p className="font-display text-3xl leading-none mt-2 tabular-nums">{value}</p>
    {hint && <p className="dim text-xs mt-1">{hint}</p>}
   </div>
  </div>
 );
 return href ? <Link href={href} className="block focus:outline-none">{body}</Link> : body;
}

function Radar({ values }: { values: { label: string; value: number; hue: string }[] }) {
 const n = Math.max(3, values.length);
 const W = 480, H = 380, cx = W / 2, cy = H / 2 + 10, R = 140;
 const angles = Array.from({ length: n }, (_, i) => (i / n) * 2 * Math.PI - Math.PI / 2);
 const grid = [0.2, 0.4, 0.6, 0.8, 1.0];
 const pts = values.map((v, i) => {
  const a = angles[i];
  const r = R * Math.max(0, Math.min(1, v.value));
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), label: v.label, hue: v.hue, a };
 });
 const ring = (frac: number) => angles.map((a, i) => `${i === 0 ? "M" : "L"} ${cx + R * frac * Math.cos(a)} ${cy + R * frac * Math.sin(a)}`).join(" ") + " Z";
 const polygon = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

 return (
  <>
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Mastery radar" style={{ width: "100%", maxHeight: 420, color: "var(--ink)" }}>
   {grid.map((g) => <path key={g} d={ring(g)} fill="none" stroke="var(--line)" />)}
   {angles.map((a, i) => (
    <line key={i} x1={cx} y1={cy} x2={cx + R * Math.cos(a)} y2={cy + R * Math.sin(a)} stroke="var(--line)" />
   ))}
   <path d={polygon} fill="var(--hue)" fillOpacity="0.22" stroke="var(--hue)" strokeWidth={1.5} />
   {pts.map((p, i) => (
    <g key={i} aria-label={`${p.label}: ${Math.round(values[i].value * 100)} percent`}>
     <circle cx={p.x} cy={p.y} r={4} fill={p.hue} />
     <text
      x={cx + (R + 18) * Math.cos(p.a)}
      y={cy + (R + 18) * Math.sin(p.a)}
      textAnchor={Math.cos(p.a) > 0.2 ? "start" : Math.cos(p.a) < -0.2 ? "end" : "middle"}
      fontSize={11}
      fill="var(--ink)"
     >{p.label}</text>
    </g>
   ))}
  </svg>
  <div className="sr-only">
   <ul>
    {values.map((v, i) => (
     <li key={i}>{v.label}: {Math.round(v.value * 100)}%</li>
    ))}
   </ul>
  </div>
  </>
 );
}
