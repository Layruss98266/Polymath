"use client";
import Link from "next/link";
import { useUserState } from "@/lib/state";
import { domainRank } from "@/lib/xp";
import type { DomainEntry } from "@/data/domains";

export function DomainCard({ d }: { d: DomainEntry }) {
  const s = useUserState();
  const dp = s.domainProgress[d.id];
  // Rough mastery from progress alone (real % needs the full domain object; close enough for the card).
  const started = !!dp;
  const masteryRough = dp ? Math.min(1, (dp.conceptsOpened * 0.1 + dp.missionsDone.length * 0.1 + dp.quizAnswered * 0.05 + dp.flashcardsGraduated * 0.05)) : 0;
  const rank = domainRank(masteryRough);

  return (
    <Link
      href={`/domain/${d.id}`}
      className="panel p-4 block hover:translate-y-[-2px] transition-transform"
      style={{ ["--hue" as any]: d.hue }}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{d.icon}</div>
        <div className="flex-1 min-w-0">
          <p className="font-display text-base leading-tight truncate">{d.name}</p>
          <p className="dim text-xs uppercase tracking-wider">{d.category}</p>
          <p className="text-sm mt-1 line-clamp-2">{d.tagline}</p>
          <div className="mt-3 flex items-center gap-2 text-xs">
            <span className="chip" style={{ color: d.hue }}>{started ? rank : "Untouched"}</span>
            {d.core && <span className="chip">Core 15</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
