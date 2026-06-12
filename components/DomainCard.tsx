"use client";
import Link from "next/link";
import { useUserState } from "@/lib/state";
import { domainRank } from "@/lib/xp";
import { RankBadge } from "./RankBadge";
import type { DomainEntry } from "@/data/domains";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Tool-hub style card: top icon tile in the domain hue, name, tagline (clamped),
// status chips at the bottom (rank if touched, Core 15 tag, Featured tag for
// spotlight), hover lifts the whole card with a subtle hue ring.
// Used by DomainGrid and Featured panels.

export function DomainCard({ d, featured }: { d: DomainEntry; featured?: boolean }) {
 const s = useUserState();
 const dp = s.domainProgress[d.id];
 const started = !!dp;
 const masteryRough = dp
  ? Math.min(1, dp.conceptsOpened * 0.1 + dp.missionsDone.length * 0.1 + dp.quizAnswered * 0.05 + dp.flashcardsGraduated * 0.05)
  : 0;
 const rank = domainRank(masteryRough);

 return (
  <Link
   href={`/domain/${d.id}`}
   className="panel lift block p-4 sm:p-5 group relative overflow-hidden"
   style={{ ["--hue" as any]: d.hue, borderColor: started ? `${d.hue}55` : "var(--line)" }}
  >
   {/* Top accent stripe */}
   <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px]" style={{ background: d.hue, opacity: started ? 1 : 0.35 }} />

   <div className="flex items-start gap-3">
    {/* Tinted icon tile */}
    <span
     aria-hidden="true"
     className="grid place-items-center w-12 h-12 rounded-xl text-2xl shrink-0"
     style={{ background: `${d.hue}1f`, border: `1px solid ${d.hue}3a`, color: d.hue }}
    >
     {d.icon}
    </span>
    <div className="flex-1 min-w-0">
     <p className="dim text-[10px] uppercase tracking-widest truncate">{d.category}</p>
     <h3 className="font-display text-base sm:text-lg leading-tight truncate group-hover:underline">{d.name}</h3>
    </div>
    <ArrowUpRight size={16} className="dim shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
   </div>

   <p className="text-sm mt-3 dim line-clamp-2 leading-relaxed">{d.tagline}</p>

   <div className="mt-4 flex items-center gap-2 flex-wrap text-xs">
    {started ? <RankBadge rank={rank} size="sm" /> : <span className="chip dim">New to you</span>}
    {d.core && <span className="chip">Core 15</span>}
    {featured && <span className="chip" style={{ color: d.hue, borderColor: `${d.hue}55` }}><Sparkles size={10} /> Featured</span>}
   </div>
  </Link>
 );
}
