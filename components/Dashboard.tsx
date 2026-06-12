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
  return { id: e.id, name: e.name, hue: e.hue, m: dom ? masteryPct(dom, p) : 0 };
 }), [domains, s.domainProgress]);

 const lp = levelProgress(s.xp);
 const rank = globalRank(s.xp);
 const due = dueNow(s.cards).length;

 // Surface capabilities for domains the user has actually touched. Cap based
 // on mastery so beginners do not get a wall of unearned statements.
 const capabilityLines = useMemo(() => {
  const lines: string[] = [];
  for (const e of DOMAIN_INDEX) {
   if (!s.startedDomains.includes(e.id)) continue;
   const dom = domains[e.id];
   if (!dom) continue;
   const p = s.domainProgress[e.id];
   const m = masteryPct(dom, p);
   const allowed = Math.max(1, Math.ceil(m * dom.capabilities.length));
   dom.capabilities.slice(0, allowed).forEach((c) => lines.push(c));
  }
  return lines.slice(0, 12);
 }, [domains, s.domainProgress, s.startedDomains]);
 const cardsReviewed = s.cards.reduce((sum, c) => sum + c.reps, 0);
 const calib = Math.round(((s.calibrationScore ?? 0) + 1) * 50);

 // Hide sections that show empty placeholders to a brand new user.
 const hasActivity = s.startedDomains.length > 0 || s.xp > 0;
 const hasHeatmapData = Object.keys(s.xpByDay ?? {}).length > 0;
 const hasQuizData = Object.values(s.domainProgress).some((d) => d.quizAnswered > 0);

 if (!hasActivity) {
  return (
   <div className="space-y-4 max-w-2xl mx-auto text-center mt-8">
    <h1 className="font-display text-3xl">Your Dashboard</h1>
    <p className="dim">Start any domain to populate this page. Once you open a concept, complete a mission, or review a card, your XP, streak, mastery radar, and achievements will live here.</p>
    <a href="/" className="btn">Browse domains</a>
   </div>
  );
 }

 return (
  <div className="space-y-5">
   <h1 className="font-display text-3xl">Mastery Dashboard</h1>

   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
    <Stat label="Total XP" value={`${s.xp}`} />
    <Stat label="Level" value={`L${lp.current} . ${rank.name}`} />
    <Stat label="Streak" value={`${s.currentStreak}🔥 best ${s.longestStreak}`} />
    <Stat label="Cards reviewed" value={`${cardsReviewed} (${due} due)`} />
   </div>

   {hasHeatmapData && (
    <section className="panel p-5">
     <h2 className="font-display text-xl mb-3">Activity, last 365 days</h2>
     <StreakHeatmap currentStreak={s.currentStreak} xpByDay={s.xpByDay ?? {}} />
    </section>
   )}

   <section className="panel p-5">
    <h2 className="font-display text-xl mb-3">Per-domain mastery</h2>
    <Radar values={masteries.map((m) => ({ label: m.name, value: m.m, hue: m.hue }))} />
   </section>

   <section className="panel p-5">
    <h2 className="font-display text-xl mb-3">Ranks</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
     {masteries.map((m) => (
      <li key={m.id} className="flex items-center justify-between border border-[color:var(--line)] rounded-xl p-3">
       <span className="font-medium">{m.name}</span>
       <span className="inline-flex items-center gap-2"><RankBadge rank={domainRank(m.m)} size="sm" /><span className="dim text-xs">{Math.round(m.m * 100)}%</span></span>
      </li>
     ))}
    </ul>
   </section>

   <section className="panel p-5">
    <h2 className="font-display text-xl mb-3">Achievements</h2>
    {s.achievements.length === 0
     ? <p className="dim text-sm">No achievements yet. Open a domain to earn your first.</p>
     : (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
       {s.achievements.map((a) => {
        const def = ACHIEVEMENTS.find((d) => d.id === a.id);
        return (
         <li key={a.id} className="panel p-3 flex items-start gap-3">
          <div className="text-2xl">{def?.icon ?? "🏅"}</div>
          <div className="flex-1 min-w-0">
           <p className="font-medium">{a.name}</p>
           <p className="dim text-sm">{a.desc}</p>
          </div>
         </li>
        );
       })}
      </ul>
     )}
    {s.achievements.length > 0 && s.achievements.length < ACHIEVEMENTS.length && (
     <p className="dim text-xs mt-3">{s.achievements.length} of {ACHIEVEMENTS.length} earned. Keep going.</p>
    )}
   </section>

   <section className="panel p-5">
    <h2 className="font-display text-xl mb-3">You can now</h2>
    {capabilityLines.length === 0
     ? <p className="dim text-sm">As you progress concepts, the things you can now explain or do show up here.</p>
     : (
      <ul className="space-y-1">
       {capabilityLines.map((c, i) => (
        <li key={i} className="text-sm flex items-start gap-2">
         <span className="hue mt-1">✓</span>
         <span>{c}</span>
        </li>
       ))}
      </ul>
     )}
   </section>

   {hasQuizData && (
    <section className="panel p-5">
     <h2 className="font-display text-xl mb-3">Calibration</h2>
     <p className="dim text-sm mb-2">
      Calibration measures how well your confidence on quizzes matches reality.
      The score sits between 0 and 100. Above 50 means you tend to be sure when right and uncertain when wrong (well calibrated).
      Below 50 means the opposite, the dangerous mix of sure but wrong.
     </p>
     <div className="h-3 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
      <div className="h-full" style={{ width: `${calib}%`, background: "var(--hue)", transition: "width .3s" }} />
     </div>
     <p className="text-xs dim mt-2">Your score, {calib} of 100.</p>
     <p className="text-xs dim mt-2">
      <strong>Why this matters.</strong> Confident and wrong is the most expensive failure mode in any field, from medicine to investing to engineering. Building the habit of registering uncertainty before you act is one of the most transferable upgrades on this app.
     </p>
    </section>
   )}
  </div>
 );
}

function Stat({ label, value }: { label: string; value: string }) {
 return (
  <div className="panel p-4">
   <p className="text-xs uppercase tracking-widest dim">{label}</p>
   <p className="font-display text-xl mt-1">{value}</p>
  </div>
 );
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
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Mastery radar" style={{ width: "100%", maxHeight: 420, color: "var(--ink)" }}>
   {grid.map((g) => <path key={g} d={ring(g)} fill="none" stroke="var(--line)" />)}
   {angles.map((a, i) => (
    <line key={i} x1={cx} y1={cy} x2={cx + R * Math.cos(a)} y2={cy + R * Math.sin(a)} stroke="var(--line)" />
   ))}
   <path d={polygon} fill="var(--hue)" fillOpacity="0.25" stroke="var(--hue)" />
   {pts.map((p, i) => (
    <g key={i}>
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
 );
}
