"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, ArrowRight, Award, Layers } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";
import { levelOf, globalRank, DOMAIN_RANKS, type DomainRank } from "@/lib/xp";
import { base64ToUtf8 } from "@/lib/save";

// Read-only public profile. Decodes a base64-encoded payload from the URL and
// renders a snapshot. The payload only carries XP and a domain-mastery map.
// No notes, no bookmarks, no quiz answers, no PII.

type Payload = {
 xp: number;
 // per-domain rank index, 0-6 mapping to Novice..Grandmaster
 r: Record<string, number>;
 t?: string;
};

function decodeRaw(raw: string): Payload | null {
 try {
  const json = base64ToUtf8(raw);
  const parsed = JSON.parse(json);
  if (typeof parsed.xp !== "number" || typeof parsed.r !== "object") return null;
  return parsed as Payload;
 } catch { return null; }
}

export function ShareView() {
 const sp = useSearchParams();
 const [decoded, setDecoded] = useState<Payload | null>(null);
 const raw = sp?.get("d") ?? "";

 useEffect(() => { setDecoded(raw ? decodeRaw(raw) : null); }, [raw]);

 type Row = { id: string; name: string; icon: string; hue: string; rank: DomainRank; rankIndex: number };
 const ranked = useMemo<Row[]>(() => {
  if (!decoded) return [];
  return Object.entries(decoded.r)
   .map(([id, ri]): Row | null => {
    const e = DOMAIN_INDEX.find((d) => d.id === id);
    if (!e) return null;
    const clamped = Math.max(0, Math.min(6, ri));
    return { id, name: e.name, icon: e.icon, hue: e.hue, rank: DOMAIN_RANKS[clamped], rankIndex: clamped };
   })
   .filter((x): x is Row => x !== null)
   .sort((a, b) => b.rankIndex - a.rankIndex);
 }, [decoded]);

 if (!raw) {
  return (
   <div className="max-w-2xl mx-auto space-y-4">
    <h1 className="font-display text-3xl">Polymath profile</h1>
    <p className="dim">This page renders a shared snapshot. The URL needs a <code>?d=</code> payload. Open Settings, generate a share link, then paste it.</p>
    <Link className="btn" href="/settings"><ArrowRight size={14} /> Open Settings</Link>
   </div>
  );
 }

 if (!decoded) {
  return (
   <div className="max-w-2xl mx-auto space-y-4">
    <h1 className="font-display text-3xl">Profile snapshot</h1>
    <div className="panel p-4" style={{ borderColor: "var(--bad)", color: "var(--bad)" }}>
     The share link looks invalid or corrupted. Ask the sender for a fresh one.
    </div>
   </div>
  );
 }

 const lvl = levelOf(decoded.xp);
 const rank = globalRank(decoded.xp);
 const top = ranked.slice(0, 3);
 const avgRankIndex = ranked.length > 0 ? ranked.reduce((s, r) => s + r.rankIndex, 0) / ranked.length : 0;

 return (
  <div className="max-w-3xl mx-auto space-y-6">
   {/* Hero card: this is what gets shared, so it sets the tone */}
   <header className="panel hero-glow p-6 sm:p-8 relative overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent, var(--hue), transparent)" }} aria-hidden="true" />
    <div className="flex items-start justify-between gap-4 flex-wrap">
     <div>
      <p className="dim text-xs uppercase tracking-widest flex items-center gap-2"><Sparkles size={12} className="hue" /> Polymath profile</p>
      <h1 className="font-display text-3xl sm:text-5xl mt-2 leading-tight">{decoded.t ? decoded.t : "A polymath in progress"}</h1>
      <p className="dim mt-2 text-sm">Read-only snapshot. Notes and personal data are not included.</p>
     </div>
     <div className="shrink-0 panel p-3 flex items-center gap-2" style={{ background: "color-mix(in oklab, var(--hue) 12%, transparent)", borderColor: "var(--hue)" }}>
      <Award size={16} className="hue" />
      <div>
       <p className="text-xs dim uppercase tracking-widest">Rank</p>
       <p className="font-display text-sm" style={{ color: "var(--hue)" }}>{rank.name}</p>
      </div>
     </div>
    </div>

    <div className="grid grid-cols-3 gap-3 mt-6">
     <div className="text-center">
      <p className="font-display text-4xl sm:text-5xl tabular-nums leading-none">{decoded.xp}</p>
      <p className="dim text-xs uppercase tracking-widest mt-1">XP</p>
     </div>
     <div className="text-center border-x border-[color:var(--line)]">
      <p className="font-display text-4xl sm:text-5xl tabular-nums leading-none">L{lvl}</p>
      <p className="dim text-xs uppercase tracking-widest mt-1">Level</p>
     </div>
     <div className="text-center">
      <p className="font-display text-4xl sm:text-5xl tabular-nums leading-none">{ranked.length}</p>
      <p className="dim text-xs uppercase tracking-widest mt-1">Domains</p>
     </div>
    </div>

    {rank.nextName && (
     <p className="dim text-xs mt-4 text-center">Next, {rank.nextName}{rank.nextAtLevel ? ` at L${rank.nextAtLevel}` : ""}.</p>
    )}
   </header>

   {/* Highlights: top 3 ranks */}
   {top.length > 0 && (
    <section className="space-y-3">
     <div className="flex items-center gap-2">
      <Award size={14} className="hue" />
      <h2 className="font-display text-lg">Highest ranks</h2>
     </div>
     <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {top.map((d, i) => (
       <li key={d.id} className="panel p-4 relative overflow-hidden" style={{ borderColor: d.hue }}>
        <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: d.hue }} aria-hidden="true" />
        <div className="flex items-center justify-between">
         <span className="text-3xl" aria-hidden="true">{d.icon}</span>
         <span className="font-display text-2xl dim tabular-nums">#{i + 1}</span>
        </div>
        <p className="font-medium mt-3 truncate">{d.name}</p>
        <p className="text-xs mt-0.5" style={{ color: d.hue }}>{d.rank}</p>
       </li>
      ))}
     </ul>
    </section>
   )}

   {/* Full domain ranks list */}
   <section className="panel p-5">
    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
     <div className="flex items-center gap-2">
      <Layers size={14} className="hue" />
      <h2 className="font-display text-lg">All domains touched</h2>
     </div>
     {ranked.length > 0 && (
      <span className="dim text-xs tabular-nums">avg rank index {avgRankIndex.toFixed(1)} of 6</span>
     )}
    </div>
    {ranked.length === 0 ? (
     <p className="dim">No domain progress yet on this profile.</p>
    ) : (
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {ranked.map((d) => (
       <li key={d.id} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: `color-mix(in oklab, ${d.hue} 5%, transparent)`, border: `1px solid color-mix(in oklab, ${d.hue} 30%, var(--line))` }}>
        <span className="text-xl shrink-0" aria-hidden="true">{d.icon}</span>
        <div className="flex-1 min-w-0">
         <p className="font-medium truncate text-sm">{d.name}</p>
         <p className="text-xs" style={{ color: d.hue }}>{d.rank}</p>
        </div>
        {/* Rank dots, 0-6 */}
        <div className="flex items-center gap-0.5 shrink-0" aria-hidden="true">
         {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} style={{ width: 5, height: 5, borderRadius: 999, background: i <= d.rankIndex ? d.hue : "var(--line)" }} />
         ))}
        </div>
       </li>
      ))}
     </ul>
    )}
   </section>

   <div className="panel p-4 sm:p-5 text-sm flex items-center gap-3 flex-wrap">
    <Sparkles size={16} className="hue shrink-0" />
    <span className="flex-1 min-w-0">Want one too? Start at <Link href="/" className="hue hover:underline font-medium">polymath</Link>. No login, runs offline, your notes stay in your browser.</span>
    <Link href="/" className="btn shrink-0">Start <ArrowRight size={14} /></Link>
   </div>
  </div>
 );
}
