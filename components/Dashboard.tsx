"use client";
import { useEffect, useMemo, useState } from "react";
import { useUserState, useHydrated } from "@/lib/state";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import type { Domain } from "@/lib/types";
import { masteryPct } from "@/lib/mastery";
import { domainRank, globalRank, levelProgress } from "@/lib/xp";
import { dueNow } from "@/lib/fsrs";

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
 const cardsReviewed = s.cards.reduce((sum, c) => sum + c.reps, 0);
 const calib = Math.round(((s.calibrationScore ?? 0) + 1) * 50);

 return (
  <div className="space-y-5">
   <h1 className="font-display text-3xl">Mastery Dashboard</h1>

   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
    <Stat label="Total XP" value={`${s.xp}`} />
    <Stat label="Level" value={`L${lp.current} · ${rank.name}`} />
    <Stat label="Streak" value={`${s.currentStreak}🔥 (best ${s.longestStreak})`} />
    <Stat label="Cards reviewed" value={`${cardsReviewed} (${due} due)`} />
   </div>

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
       <span className="chip" style={{ color: m.hue }}>{domainRank(m.m)} · {Math.round(m.m * 100)}%</span>
      </li>
     ))}
    </ul>
   </section>

   <section className="panel p-5">
    <h2 className="font-display text-xl mb-3">Achievements</h2>
    {s.achievements.length === 0
     ? <p className="dim text-sm">No achievements yet , open a domain to earn your first.</p>
     : (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
       {s.achievements.map((a) => (
        <li key={a.id} className="panel p-3">
         <p className="font-medium">{a.name}</p>
         <p className="dim text-sm">{a.desc}</p>
        </li>
       ))}
      </ul>
     )}
   </section>

   <section className="panel p-5">
    <h2 className="font-display text-xl mb-3">Calibration</h2>
    <p className="dim text-sm mb-2">A rough score of how well your confidence on quizzes tracks reality. 50 = neutral, &gt;50 = well-calibrated, &lt;50 = mis-calibrated.</p>
    <div className="h-3 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
     <div className="h-full" style={{ width: `${calib}%`, background: "var(--hue)" }} />
    </div>
    <p className="text-xs dim mt-2">Confident-and-wrong is the most expensive combination. Better to be sure when right and uncertain when wrong.</p>
   </section>
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
