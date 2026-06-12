"use client";
import { useMemo } from "react";
import type { Domain } from "@/lib/types";
import { useUserState } from "@/lib/state";
import { masteryPct } from "@/lib/mastery";
import { domainRank } from "@/lib/xp";
import { RankBadge } from "../RankBadge";

// Stateless-ish header used on every page under /domain/[id]. Lives in the
// layout so all pages share one source of truth for the rank and mastery bar.
// Composition: a hue-tinted icon tile on the left anchors the identity. The
// eyebrow (category), name, and tagline form a single typographic column.
// The rank sits in a quiet column on the right. The mastery bar spans the
// full width below the row so the progress reads as the page-wide truth.

export function DomainHeader({ domain }: { domain: Domain }) {
 const s = useUserState();
 const dp = s.domainProgress[domain.id];
 const m = useMemo(() => masteryPct(domain, dp, s.conceptProgress), [domain, dp, s.conceptProgress]);
 const rank = useMemo(() => domainRank(m), [m]);
 const pct = Math.round(m * 100);

 return (
  <header
   className="panel p-5 sm:p-6"
   style={{ ["--hue" as string]: domain.hue }}
  >
   <div className="flex items-start gap-4 sm:gap-5">
    <div
     aria-hidden="true"
     className="grid place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl text-4xl sm:text-5xl shrink-0"
     style={{
      background: `linear-gradient(135deg, ${domain.hue}26, ${domain.hue}10)`,
      border: `1px solid ${domain.hue}44`,
      boxShadow: `inset 0 1px 0 ${domain.hue}1a`
     }}
    >
     {domain.icon}
    </div>
    <div className="flex-1 min-w-0">
     <p
      className="text-[11px] uppercase tracking-[0.16em] font-medium truncate"
      style={{ color: "var(--dim)" }}
     >
      {domain.category}
     </p>
     <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] mt-1 truncate">
      {domain.name}
     </h2>
     <p
      className="text-sm sm:text-base mt-2 leading-relaxed line-clamp-2 max-w-[60ch]"
      style={{ color: "var(--dim)" }}
     >
      {domain.tagline}
     </p>
    </div>
    <div className="hidden sm:flex flex-col items-end gap-1 shrink-0 pt-1">
     <RankBadge rank={rank} size="md" showName={false} />
     <p className="text-[11px]" style={{ color: "var(--dim)" }}>{rank}</p>
    </div>
   </div>

   {/* Mastery rail. Full-width below the identity row so the progress is the
       single page-wide truth, not a small inline meter. */}
   <div className="mt-5">
    <div className="flex items-center justify-between text-[11px] mb-1.5" style={{ color: "var(--dim)" }}>
     <span className="uppercase tracking-[0.14em] font-medium">Mastery</span>
     <span className="tabular-nums" style={{ color: "var(--ink)" }}>{pct}%</span>
    </div>
    <div
     className="h-2 rounded-full overflow-hidden"
     style={{ background: "var(--line)" }}
     role="progressbar"
     aria-valuenow={pct}
     aria-valuemin={0}
     aria-valuemax={100}
     aria-label={`${domain.name} mastery`}
    >
     <div
      className="h-full rounded-full"
      style={{
       width: `${pct}%`,
       background: `linear-gradient(90deg, ${domain.hue}cc, ${domain.hue})`,
       transition: "width .35s ease"
      }}
     />
    </div>
   </div>

   {/* Mobile rank row: hidden on sm+ where it lives in the identity row */}
   <div className="sm:hidden flex items-center gap-2 mt-3">
    <RankBadge rank={rank} size="sm" showName={false} />
    <span className="text-xs" style={{ color: "var(--dim)" }}>{rank}</span>
   </div>
  </header>
 );
}
