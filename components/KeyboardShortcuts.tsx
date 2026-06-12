"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Keyboard, X } from "lucide-react";

// Global keyboard shortcuts plus a "?" help overlay. Power user feature, kept
// minimal so it does not get in casual users' way. Ignored when the user is
// typing in an input or textarea, or holding a modifier key.

const ROUTES: { keys: string; label: string; href?: string }[] = [
 { keys: "G then H", label: "Go to Home",      href: "/" },
 { keys: "G then S", label: "Search",          href: "/search" },
 { keys: "G then R", label: "Review",          href: "/review" },
 { keys: "G then D", label: "Dashboard",       href: "/dashboard" },
 { keys: "G then M", label: "Skill map",       href: "/skill-map" },
 { keys: "G then L", label: "My list",         href: "/my-list" },
 { keys: "/",       label: "Open search input" },
 { keys: "?",       label: "Show this help" },
 { keys: "Esc",     label: "Close any overlay" }
];

export function KeyboardShortcuts() {
 const router = useRouter();
 const [open, setOpen] = useState(false);
 const [gPressed, setGPressed] = useState(false);

 useEffect(() => {
  const isTyping = () => {
   const el = document.activeElement;
   if (!el) return false;
   const tag = (el.tagName || "").toLowerCase();
   if (tag === "input" || tag === "textarea" || tag === "select") return true;
   if ((el as HTMLElement).isContentEditable) return true;
   return false;
  };

  let gTimer: ReturnType<typeof setTimeout> | null = null;

  const onKey = (e: KeyboardEvent) => {
   if (e.metaKey || e.ctrlKey || e.altKey) return;
   if (e.key === "Escape") { setOpen(false); setGPressed(false); return; }
   if (isTyping()) return;
   if (e.key === "?") { e.preventDefault(); setOpen((v) => !v); return; }
   if (e.key === "/") { e.preventDefault(); router.push("/search"); return; }

   // Two-key G then X navigation
   if (e.key === "g" || e.key === "G") {
    e.preventDefault();
    setGPressed(true);
    if (gTimer) clearTimeout(gTimer);
    gTimer = setTimeout(() => setGPressed(false), 900);
    return;
   }
   if (gPressed) {
    const map: Record<string, string> = { h: "/", s: "/search", r: "/review", d: "/dashboard", m: "/skill-map", l: "/my-list" };
    const dest = map[e.key.toLowerCase()];
    if (dest) {
     e.preventDefault();
     router.push(dest);
     setGPressed(false);
    }
   }
  };

  window.addEventListener("keydown", onKey);
  return () => { window.removeEventListener("keydown", onKey); if (gTimer) clearTimeout(gTimer); };
 }, [router, gPressed]);

 if (!open) return null;
 return (
  <div className="fixed inset-0 z-40 grid place-items-center p-4 anim-fade-in" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }} onClick={() => setOpen(false)}>
   <div className="surface p-6 max-w-md w-full anim-slide-up" role="dialog" aria-label="Keyboard shortcuts" onClick={(e) => e.stopPropagation()}>
    <div className="flex items-start gap-3 mb-4">
     <span className="grid place-items-center w-10 h-10 rounded-xl shrink-0 bg-hue-soft" style={{ color: "var(--hue)" }}>
      <Keyboard size={18} />
     </span>
     <div className="flex-1">
      <h2 className="font-display text-xl">Keyboard shortcuts</h2>
      <p className="dim text-xs mt-0.5">Tap any key while not typing in a field.</p>
     </div>
     <button className="btn !p-2" aria-label="Close" onClick={() => setOpen(false)}><X size={14} /></button>
    </div>
    <ul className="space-y-2.5 text-sm">
     {ROUTES.map((r, i) => (
      <li key={i} className="flex items-center justify-between gap-3">
       <span>{r.label}</span>
       <span className="kbd" style={{ fontSize: 11, height: 22, padding: "0 8px" }}>{r.keys}</span>
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
}
