"use client";
import { useEffect, useRef, useState } from "react";
import { Zap, Award, Check } from "lucide-react";
import { useUserState, useHydrated } from "@/lib/state";

// Tiny toast system. Watches the user state and pops a brief card whenever:
// (1) XP increases (Zap with delta)
// (2) Achievements list grows (Award with name)
// (3) Mission count grows across any domain (Check with domain name)
// Auto-dismiss after 2.5s. Bottom-right on desktop, bottom-center on mobile.
// Capped at 3 visible at once.

type Toast = { id: number; icon: "xp" | "ach" | "mission"; text: string; sub?: string };

let _id = 0;

function Icon({ k }: { k: Toast["icon"] }) {
 switch (k) {
  case "xp":      return <Zap size={16} />;
  case "ach":     return <Award size={16} />;
  case "mission": return <Check size={16} />;
 }
}

export function Toaster() {
 const s = useUserState();
 const hydrated = useHydrated();
 const [toasts, setToasts] = useState<Toast[]>([]);
 const prev = useRef<{ xp: number; ach: number; missions: number } | null>(null);

 useEffect(() => {
  if (!hydrated) return;
  const missionsTotal = Object.values(s.domainProgress).reduce((sum, d) => sum + d.missionsDone.length, 0);
  const curr = { xp: s.xp, ach: s.achievements.length, missions: missionsTotal };
  const p = prev.current;
  prev.current = curr;
  if (!p) return; // first hydrated read, skip

  const fresh: Toast[] = [];
  if (curr.xp > p.xp) {
   fresh.push({ id: ++_id, icon: "xp", text: `+${curr.xp - p.xp} XP`, sub: `${s.xp} total` });
  }
  if (curr.ach > p.ach) {
   for (const a of s.achievements.slice(p.ach)) {
    fresh.push({ id: ++_id, icon: "ach", text: a.name, sub: a.desc });
   }
  }
  if (curr.missions > p.missions) {
   fresh.push({ id: ++_id, icon: "mission", text: "Mission complete", sub: "+XP earned" });
  }
  if (fresh.length === 0) return;
  setToasts((t) => [...t, ...fresh].slice(-3));
  const ids = fresh.map((f) => f.id);
  setTimeout(() => setToasts((t) => t.filter((x) => !ids.includes(x.id))), 2500);
 }, [s.xp, s.achievements.length, s.domainProgress, hydrated]);

 if (toasts.length === 0) return null;
 return (
  <div
   role="status"
   aria-live="polite"
   aria-atomic="false"
   aria-label="Notifications"
   className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 z-30 flex flex-col gap-2 pointer-events-none"
  >
   {toasts.map((t) => (
    <div key={t.id} className="panel px-3 py-2 flex items-center gap-2 text-sm" style={{ borderColor: "var(--hue)", minWidth: 200 }}>
     <span className="hue"><Icon k={t.icon} /></span>
     <span className="font-medium">{t.text}</span>
     {t.sub && <span className="dim text-xs ml-1">{t.sub}</span>}
    </div>
   ))}
  </div>
 );
}
