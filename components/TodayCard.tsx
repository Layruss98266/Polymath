"use client";
import Link from "next/link";
import { useMemo } from "react";
import { Flame, Zap, Brain, ArrowRight, Calendar } from "lucide-react";
import { useUserState, useHydrated } from "@/lib/state";
import { dueNow } from "@/lib/fsrs";
import { todayKey } from "@/lib/streak";

// Glanceable Today strip for returning users. One outer panel, no nested
// panels. Each stat is a flat cell separated by dividers so the eye reads
// it as a single band, not four floating cards.

export function TodayCard() {
 const s = useUserState();
 const hydrated = useHydrated();

 const due = useMemo(() => dueNow(s.cards).length, [s.cards]);
 const today = todayKey();
 const xpToday = s.xpByDay?.[today] ?? 0;
 const questDone = s.dailyQuest?.day === today && s.dailyQuest?.done;

 if (!hydrated) return null;
 if (s.startedDomains.length === 0 && s.xp === 0) return null;

 return (
  <section className="panel p-4 sm:p-5" aria-label="Today at a glance">
   <header className="flex items-center gap-2 mb-4">
    <Calendar size={14} className="dim" aria-hidden="true" />
    <p className="dim text-[11px] uppercase tracking-widest">Today</p>
   </header>
   <div
    className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-lg"
    style={{ background: "var(--line)" }}
   >
    <Stat
     icon={<Brain size={14} />}
     label="Due to review"
     value={String(due)}
     accent={due > 0 ? "var(--hue)" : "var(--dim)"}
     href={due > 0 ? "/review" : undefined}
     hrefLabel="Open"
    />
    <Stat
     icon={<Zap size={14} />}
     label="XP today"
     value={`+${xpToday}`}
     accent={xpToday > 0 ? "var(--good)" : "var(--dim)"}
    />
    <Stat
     icon={<Flame size={14} />}
     label="Streak"
     value={`${s.currentStreak}d`}
     accent={s.currentStreak > 0 ? "var(--hue)" : "var(--dim)"}
    />
    <Stat
     icon={<ArrowRight size={14} />}
     label="Daily quest"
     value={questDone ? "Done" : (s.dailyQuest ? "Open" : "Set up")}
     accent={questDone ? "var(--good)" : "var(--hue)"}
    />
   </div>
  </section>
 );
}

function Stat({ icon, label, value, accent, href, hrefLabel }: {
 icon: React.ReactNode;
 label: string;
 value: string;
 accent: string;
 href?: string;
 hrefLabel?: string;
}) {
 return (
  <div className="p-3 flex flex-col gap-1.5" style={{ background: "var(--panel)" }}>
   <div className="flex items-center gap-2 dim text-[10px] uppercase tracking-widest">
    <span style={{ color: accent }} aria-hidden="true">{icon}</span>
    {label}
   </div>
   <div className="font-display text-2xl leading-none" style={{ color: accent }}>{value}</div>
   {href && hrefLabel && (
    <Link
     href={href}
     className="text-xs inline-flex items-center gap-1 mt-auto min-h-[20px]"
     style={{ color: accent }}
    >
     {hrefLabel} <ArrowRight size={11} aria-hidden="true" />
    </Link>
   )}
  </div>
 );
}
