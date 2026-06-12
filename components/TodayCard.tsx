"use client";
import Link from "next/link";
import { useMemo } from "react";
import { Flame, Zap, Brain, ArrowRight, Calendar } from "lucide-react";
import { useUserState, useHydrated } from "@/lib/state";
import { dueNow } from "@/lib/fsrs";
import { todayKey } from "@/lib/streak";

// A glanceable "today" card for the home page. Pulls four numbers from the
// store: due-now review count, XP earned today, current streak, and whether
// today's daily quest is done. Renders zero chrome when the user is brand
// new so it doesn't drown out onboarding.

export function TodayCard() {
 const s = useUserState();
 const hydrated = useHydrated();

 const due = useMemo(() => dueNow(s.cards).length, [s.cards]);
 const today = todayKey();
 const xpToday = s.xpByDay?.[today] ?? 0;
 const questDone = s.dailyQuest?.day === today && s.dailyQuest?.done;

 if (!hydrated) return null;
 // Skip the card for absolute first-time visitors. The Onboarding panel does
 // the talking before they have any state worth summarising.
 if (s.startedDomains.length === 0 && s.xp === 0) return null;

 return (
  <section className="panel p-4 sm:p-5" aria-label="Today at a glance">
   <header className="flex items-center gap-2 mb-3">
    <Calendar size={14} className="dim" />
    <p className="dim text-xs uppercase tracking-widest">Today</p>
   </header>
   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
 const body = (
  <div className="panel p-3 flex flex-col gap-1.5" style={{ borderColor: "var(--line)" }}>
   <div className="flex items-center gap-2 dim text-[11px] uppercase tracking-widest">
    <span style={{ color: accent }}>{icon}</span>
    {label}
   </div>
   <div className="font-display text-2xl leading-none" style={{ color: accent }}>{value}</div>
   {href && hrefLabel && (
    <Link href={href} className="text-xs inline-flex items-center gap-1 mt-auto" style={{ color: accent }}>
     {hrefLabel} <ArrowRight size={11} />
    </Link>
   )}
  </div>
 );
 return body;
}
