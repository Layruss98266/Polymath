"use client";
import { useMemo } from "react";
import type { Domain } from "@/lib/types";
import { useUserState } from "@/lib/state";
import { masteryPct } from "@/lib/mastery";
import { domainRank } from "@/lib/xp";
import { RankBadge } from "../RankBadge";

// Stateless-ish header used on every page under /domain/[id]. Lives in the
// layout so all pages share one source of truth for the rank and mastery bar.
export function DomainHeader({ domain }: { domain: Domain }) {
 const s = useUserState();
 const dp = s.domainProgress[domain.id];
 const m = useMemo(() => masteryPct(domain, dp, s.conceptProgress), [domain, dp, s.conceptProgress]);
 const rank = useMemo(() => domainRank(m), [m]);

 return (
  <header className="panel p-4 sm:p-5">
   <div className="flex items-start gap-3 sm:gap-4">
    <div
     className="grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-3xl sm:text-4xl shrink-0"
     style={{ background: `${domain.hue}22`, border: `1px solid ${domain.hue}44` }}
    >
     {domain.icon}
    </div>
    <div className="flex-1 min-w-0">
     <p className="dim text-[11px] uppercase tracking-widest">{domain.category}</p>
     <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight truncate">{domain.name}</h1>
     <p className="dim text-sm mt-1 line-clamp-2">{domain.tagline}</p>
    </div>
    <div className="text-right shrink-0">
     <RankBadge rank={rank} size="md" showName={false} />
     <p className="text-[11px] dim mt-1">{rank}</p>
    </div>
   </div>
   <div className="mt-3">
    <div className="flex items-center justify-between text-[11px] dim mb-1">
     <span>Mastery</span>
     <span>{Math.round(m * 100)}%</span>
    </div>
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
     <div className="h-full" style={{ width: `${Math.round(m * 100)}%`, background: domain.hue, transition: "width .3s" }} />
    </div>
   </div>
  </header>
 );
}
