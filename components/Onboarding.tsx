"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, X } from "lucide-react";
import { useActions, useUserState, useHydrated } from "@/lib/state";
import { useFocusTrap } from "@/lib/focusTrap";

// Skippable 20 second onboarding. Pick 2 to 3 goals, get a recommended starting
// domain and Path. Triggers automatically on first run; can be reopened later
// (not yet, but the data field is preserved).

type GoalOption = {
 id: string;
 label: string;
 recDomainId: string;
 recPath?: string;
};

// Order matters. First-gen Indian undergraduates search money and clarity
// first; the "manipulation" framing was a paranoia-flavoured lead and got
// re-worded plus moved down the list.
const GOALS: GoalOption[] = [
 { id: "money",        label: "Get my money in order",                recDomainId: "personal_finance", recPath: "money_from_zero" },
 { id: "think",        label: "Think more clearly",                    recDomainId: "mental_models",    recPath: "think_clearly" },
 { id: "communicate",  label: "Communicate so things land",            recDomainId: "communication" },
 { id: "learn",        label: "Learn anything faster",                 recDomainId: "learning" },
 { id: "ai",           label: "Use AI tools at 10x the level",         recDomainId: "ai_ml" },
 { id: "manipulation", label: "Spot manipulation in ads and arguments", recDomainId: "psychology",       recPath: "hard_to_manipulate" },
 { id: "negotiate",    label: "Negotiate without losing my voice",     recDomainId: "negotiation" },
 { id: "build",        label: "Build and sell something",              recDomainId: "entrepreneurship", recPath: "build_and_sell" },
 { id: "invest",       label: "Make my savings work for me",           recDomainId: "investing" },
 { id: "health",       label: "Take charge of my health",              recDomainId: "health" },
 { id: "code",         label: "Get fluent at programming",             recDomainId: "tech" },
 { id: "law",          label: "Understand my legal rights",            recDomainId: "law" }
];

export function Onboarding() {
 const s = useUserState();
 const hydrated = useHydrated();
 const a = useActions();
 const pathname = usePathname();
 const [picked, setPicked] = useState<string[]>([]);
 const [done, setDone] = useState(false);
 const dialogRef = useRef<HTMLDivElement>(null);
 const dialogOpen = hydrated && !s.onboarded && !done && pathname === "/";
 useFocusTrap(dialogOpen, dialogRef);

 // Escape skips onboarding. CommandPalette + SaveLoadModal already close on
 // Escape; without this Onboarding was the odd one out.
 useEffect(() => {
  if (!dialogOpen) return;
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") a.skipOnboarding(); };
  document.addEventListener("keydown", onKey);
  return () => document.removeEventListener("keydown", onKey);
 }, [dialogOpen, a]);

 if (!hydrated) return null;
 if (s.onboarded) return null;
 // Only show on the Home page so it does not interrupt a user who deep-linked to a domain.
 if (pathname && pathname !== "/") return null;

 const toggle = (id: string) => {
  setPicked((prev) => {
   if (prev.includes(id)) return prev.filter((p) => p !== id);
   if (prev.length >= 3) return prev;
   return [...prev, id];
  });
 };

 const recommendations = picked.map((id) => GOALS.find((g) => g.id === id)!).filter(Boolean);

 const finish = () => {
  a.completeOnboarding(picked.map((id) => GOALS.find((g) => g.id === id)?.label ?? id));
  // Pre-bookmark the recommended domain (or domains) so it shows up in My
  // List right after onboarding. First concept of each recommended domain.
  for (const id of picked) {
   const rec = GOALS.find((g) => g.id === id);
   if (!rec?.recDomainId) continue;
   a.toggleBookmark(`${rec.recDomainId}:0`);
  }
 };

 return (
  <div className="fixed inset-0 z-40 grid place-items-center p-4 anim-fade-in" style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}>
   <div className="surface p-6 sm:p-8 max-w-2xl w-full space-y-5 anim-slide-up" role="dialog" aria-label="Welcome" aria-modal="true" ref={dialogRef}>
    <div className="flex items-start gap-3">
     <span className="grid place-items-center w-11 h-11 rounded-xl shrink-0 bg-hue-soft" style={{ color: "var(--hue)" }}>
      <Sparkles size={20} />
     </span>
     <div className="flex-1">
      <p className="section-eyebrow">Welcome</p>
      <h2 className="font-display text-2xl mt-1">Polymath</h2>
      <p className="dim text-sm mt-1 leading-relaxed">Twenty seconds. Pick the things you would actually like to change. We will point you to where to start.</p>
     </div>
     <button className="btn !p-2" aria-label="Skip" onClick={a.skipOnboarding}><X size={14} /></button>
    </div>

    {!done ? (
     <>
      <p className="text-sm">Pick up to three goals. Tap any to toggle.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
       {GOALS.map((g) => {
        const on = picked.includes(g.id);
        return (
         <li key={g.id}>
          <button
           onClick={() => toggle(g.id)}
           aria-pressed={on}
           className="w-full text-left panel p-3 text-sm transition-colors"
           style={on ? { borderColor: "var(--hue)", background: "var(--hue-soft)", color: "var(--hue)" } : {}}
          >
           {g.label}
          </button>
         </li>
        );
       })}
      </ul>
      <div className="flex flex-wrap items-center gap-2 pt-2">
       <button className="btn btn-primary" onClick={() => setDone(true)} disabled={picked.length === 0}>See where to start</button>
       <button className="btn btn-ghost" onClick={a.skipOnboarding}>Skip for now</button>
       <span className="dim text-xs ml-auto">{picked.length} of 3 picked</span>
      </div>
     </>
    ) : (
     <>
      <p className="text-sm">Here is where to start, given what you picked.</p>
      <ul className="space-y-2">
       {recommendations.map((r) => (
        <li key={r.id} className="panel p-3">
         <p className="section-eyebrow">{r.label}</p>
         <div className="flex flex-wrap gap-2 mt-2">
          <Link href={`/domain/${r.recDomainId}`} onClick={finish} className="btn btn-primary">Open domain</Link>
          {r.recPath && <Link href={`/my-list?highlight=${r.recPath}`} onClick={finish} className="btn">See the curated Path</Link>}
         </div>
        </li>
       ))}
      </ul>
      <div className="flex gap-2 pt-2">
       <button className="btn btn-primary" onClick={finish}>Done</button>
       <button className="btn btn-ghost" onClick={() => setDone(false)}>Back</button>
      </div>
     </>
    )}
   </div>
  </div>
 );
}
