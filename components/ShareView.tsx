"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, ArrowRight } from "lucide-react";
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

 type Row = { id: string; name: string; icon: string; hue: string; rank: DomainRank };
 const ranked = useMemo<Row[]>(() => {
  if (!decoded) return [];
  return Object.entries(decoded.r)
   .map(([id, ri]): Row | null => {
    const e = DOMAIN_INDEX.find((d) => d.id === id);
    if (!e) return null;
    return { id, name: e.name, icon: e.icon, hue: e.hue, rank: DOMAIN_RANKS[Math.max(0, Math.min(6, ri))] };
   })
   .filter((x): x is Row => x !== null);
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

 return (
  <div className="max-w-3xl mx-auto space-y-6">
   <header className="panel p-6 hero-glow">
    <p className="dim text-xs uppercase tracking-widest">Polymath profile</p>
    <h1 className="font-display text-3xl sm:text-4xl mt-1">{decoded.t ? decoded.t : "A polymath in progress"}</h1>
    <p className="dim mt-2">Read-only snapshot. Notes and personal data are not included.</p>
    <div className="grid grid-cols-3 gap-3 mt-4 text-center">
     <div className="panel p-3"><div className="font-display text-2xl">{decoded.xp}</div><div className="dim text-xs uppercase tracking-widest">XP</div></div>
     <div className="panel p-3"><div className="font-display text-2xl">L{lvl}</div><div className="dim text-xs uppercase tracking-widest">Level</div></div>
     <div className="panel p-3"><div className="font-display text-xs uppercase tracking-widest hue">{rank.name}</div><div className="dim text-[10px] mt-1">{rank.nextName ? `next: ${rank.nextName}` : "max rank"}</div></div>
    </div>
   </header>

   <section className="panel p-5">
    <h2 className="font-display text-lg mb-3">Domains touched</h2>
    {ranked.length === 0 ? (
     <p className="dim">No domain progress yet on this profile.</p>
    ) : (
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {ranked.map((d) => (
       <li key={d.id} className="panel p-3 flex items-center gap-3" style={{ borderColor: d.hue }}>
        <span className="text-xl">{d.icon}</span>
        <div className="flex-1 min-w-0">
         <p className="font-medium truncate">{d.name}</p>
         <p className="text-xs" style={{ color: d.hue }}>{d.rank}</p>
        </div>
       </li>
      ))}
     </ul>
    )}
   </section>

   <div className="panel p-4 text-sm dim flex items-center gap-2">
    <Sparkles size={14} className="hue" /> Want one too? Start at <Link href="/" className="hue hover:underline">polymath.vercel.app</Link>. No login, runs offline, your notes stay in your browser.
   </div>
  </div>
 );
}
