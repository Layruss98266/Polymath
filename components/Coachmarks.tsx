"use client";
import { useEffect, useState } from "react";
import { X, ArrowRight, ArrowLeft, Sparkles, Search, Layers, GraduationCap, Keyboard } from "lucide-react";
import { useUserState, useActions, useHydrated } from "@/lib/state";
import { usePathname } from "next/navigation";

// Lightweight, dismissible tour for first-time visitors who finished onboarding
// but haven't touched any domain yet. Shows once at the bottom right with
// next / previous / skip. Stores done flag in localStorage so it doesn't keep
// reappearing.

const STEPS = [
 { Icon: Layers,      title: "Domains menu",      body: "Hover the Domains chip in the top bar to pop the full catalogue, grouped by category." },
 { Icon: GraduationCap, title: "Practice menu",   body: "The Practice dropdown holds Review, Dashboard, Skill Map, and My List in one place." },
 { Icon: Search,      title: "Quick search",      body: "Press / to jump to global search. Or Cmd+K to open the command palette from anywhere." },
 { Icon: Keyboard,    title: "Shortcuts",         body: "Press ? to see all keyboard shortcuts. G+H for Home, G+R for Review, and so on." },
 { Icon: Sparkles,    title: "Pick a domain below", body: "Open any concept. Two minutes. The rest of the app turns on as you go." }
];

const STORAGE_KEY = "polymath:coachmarks-done";

export function Coachmarks() {
 const s = useUserState();
 const a = useActions();
 const hydrated = useHydrated();
 const pathname = usePathname();
 const [i, setI] = useState(0);
 const [open, setOpen] = useState(false);

 useEffect(() => {
  if (!hydrated) return;
  if (pathname !== "/") return;
  if (!s.onboarded) return;
  if (s.startedDomains.length > 0) return;
  try {
   if (localStorage.getItem(STORAGE_KEY) === "1") return;
  } catch {}
  // small delay so the page settles first
  const t = setTimeout(() => setOpen(true), 600);
  return () => clearTimeout(t);
 }, [hydrated, s.onboarded, s.startedDomains.length, pathname]);

 const finish = () => {
  setOpen(false);
  try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
 };

 if (!open) return null;
 const step = STEPS[i];
 const Icon = step.Icon;
 return (
  <div role="dialog" aria-label="Quick tour" className="fixed bottom-4 right-4 z-30 panel p-4 max-w-sm" style={{ borderColor: "var(--hue)" }}>
   <div className="flex items-start gap-3">
    <span className="grid place-items-center w-9 h-9 rounded-xl shrink-0" style={{ background: "color-mix(in oklab, var(--hue) 14%, transparent)", color: "var(--hue)" }}>
     <Icon size={16} />
    </span>
    <div className="flex-1 min-w-0">
     <p className="dim text-[10px] uppercase tracking-widest">Tour {i + 1} of {STEPS.length}</p>
     <p className="font-display text-base mt-0.5">{step.title}</p>
     <p className="dim text-sm mt-1 leading-relaxed">{step.body}</p>
    </div>
    <button className="btn !p-1.5" aria-label="Skip tour" onClick={finish}><X size={12} /></button>
   </div>
   <div className="flex items-center justify-between gap-2 mt-3">
    <div className="flex gap-1">
     {STEPS.map((_, k) => (
      <span key={k} className="h-1 w-4 rounded-full" style={{ background: k <= i ? "var(--hue)" : "var(--line)" }} aria-hidden="true" />
     ))}
    </div>
    <div className="flex gap-1.5">
     <button className="btn !px-2" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} aria-label="Previous"><ArrowLeft size={12} /></button>
     {i < STEPS.length - 1 ? (
      <button className="btn" onClick={() => setI((v) => v + 1)}>Next <ArrowRight size={12} /></button>
     ) : (
      <button className="btn" style={{ background: "var(--hue)", color: "#0b0d1a", borderColor: "var(--hue)" }} onClick={finish}>Got it</button>
     )}
    </div>
   </div>
  </div>
 );
}
