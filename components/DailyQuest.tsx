"use client";
import { useEffect, useMemo } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useActions, useTodayKey, useUserState } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";

// Deterministic daily seed → quest. Same day → same quest until done.
function pickQuest(dayKey: string, started: string[]) {
  const pool = started.length > 0 ? DOMAIN_INDEX.filter((d) => started.includes(d.id)) : DOMAIN_INDEX;
  let h = 0; for (let i = 0; i < dayKey.length; i++) h = ((h << 5) - h + dayKey.charCodeAt(i)) | 0;
  const idx = Math.abs(h) % pool.length;
  const kinds: ("read" | "mission" | "quiz" | "review")[] = ["read", "mission", "quiz", "review"];
  const kind = kinds[Math.abs(h >> 3) % kinds.length];
  return { day: dayKey, domainId: pool[idx].id, kind, done: false };
}

export function DailyQuest() {
  const s = useUserState();
  const a = useActions();
  const day = useTodayKey();

  const quest = useMemo(() => {
    if (!day) return null;
    if (s.dailyQuest?.day === day) return s.dailyQuest;
    return pickQuest(day, s.startedDomains);
  }, [day, s.dailyQuest, s.startedDomains]);

  useEffect(() => {
    if (!day || !quest) return;
    if (s.dailyQuest?.day !== day) a.refreshDailyQuest(quest);
  }, [day, quest, s.dailyQuest, a]);

  if (!quest || !day) return null;
  const domain = DOMAIN_INDEX.find((d) => d.id === quest.domainId);
  if (!domain) return null;

  const kindLabel = {
    read: `Read one concept in ${domain.name}`,
    mission: `Do one mission in ${domain.name}`,
    quiz: `Answer 3 quiz questions in ${domain.name}`,
    review: `Clear today's spaced-repetition review for ${domain.name}`
  }[quest.kind];

  return (
    <div className="panel p-4 flex items-start gap-3">
      <div className="rounded-full p-2" style={{ background: "var(--hue)", color: "#fff" }}>
        <Sparkles size={18} />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-widest dim">Daily quest · keep your streak</p>
        <p className="font-medium">{kindLabel}</p>
      </div>
      {quest.done ? (
        <span className="chip" style={{ color: "var(--good)" }}><CheckCircle2 size={14} /> Done</span>
      ) : (
        <button className="btn" onClick={() => a.completeDailyQuest()}>Mark done</button>
      )}
    </div>
  );
}
