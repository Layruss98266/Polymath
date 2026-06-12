"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Brain, BarChart3, Map, Bookmark, GraduationCap, ChevronDown, ArrowRight } from "lucide-react";
import { useUserState } from "@/lib/state";
import { dueNow } from "@/lib/fsrs";

// Consolidates Review, Dashboard, Skill Map, My List under one "Practice" entry.
// Hover-friendly on desktop, click on touch, with proper close behaviour.

const ITEMS = [
 { href: "/review",    label: "Review",    desc: "Due flashcards across started domains",       Icon: Brain },
 { href: "/dashboard", label: "Dashboard", desc: "XP, mastery radar, achievements, calibration", Icon: BarChart3 },
 { href: "/skill-map", label: "Skill Map", desc: "Catalogue grouped by category, connections",   Icon: Map },
 { href: "/my-list",   label: "My List",   desc: "Paths, bookmarks, saved reflections",          Icon: Bookmark }
];

export function PracticeMenu() {
 const [open, setOpen] = useState(false);
 const triggerRef = useRef<HTMLButtonElement>(null);
 const panelRef = useRef<HTMLDivElement>(null);
 const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
 const s = useUserState();
 const due = dueNow(s.cards).length;

 const scheduleClose = () => {
  if (closeTimer.current) clearTimeout(closeTimer.current);
  closeTimer.current = setTimeout(() => setOpen(false), 180);
 };
 const cancelClose = () => {
  if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
 };

 useEffect(() => {
  if (!open) return;
  const onKey = (e: KeyboardEvent) => {
   if (e.key === "Escape") { setOpen(false); return; }
   if (!panelRef.current) return;
   const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]'));
   if (items.length === 0) return;
   const active = document.activeElement as HTMLElement | null;
   const idx = active ? items.indexOf(active) : -1;
   if (e.key === "ArrowDown") { e.preventDefault(); items[(idx + 1 + items.length) % items.length]?.focus(); }
   else if (e.key === "ArrowUp") { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
   else if (e.key === "Home") { e.preventDefault(); items[0]?.focus(); }
   else if (e.key === "End") { e.preventDefault(); items[items.length - 1]?.focus(); }
  };
  const onClickOutside = (e: MouseEvent) => {
   const t = e.target as Node;
   if (panelRef.current?.contains(t)) return;
   if (triggerRef.current?.contains(t)) return;
   setOpen(false);
  };
  document.addEventListener("keydown", onKey);
  document.addEventListener("mousedown", onClickOutside);
  return () => {
   document.removeEventListener("keydown", onKey);
   document.removeEventListener("mousedown", onClickOutside);
  };
 }, [open]);

 return (
  <div
   className="relative"
   onMouseEnter={() => { if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) { cancelClose(); setOpen(true); } }}
   onMouseLeave={() => { if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) scheduleClose(); }}
  >
   <button
    ref={triggerRef}
    type="button"
    aria-haspopup="menu"
    aria-expanded={open}
    aria-controls="polymath-practice-menu"
    onClick={() => setOpen((v) => !v)}
    className={`px-2.5 py-1.5 text-sm rounded-md inline-flex items-center gap-1.5 ${open ? "ring-1" : ""}`}
    style={open ? { color: "var(--hue)", borderColor: "var(--hue)" } : {}}
   >
    <GraduationCap size={14} className={open ? "hue" : "dim"} />
    <span>Practice</span>
    {due > 0 && (
     <span className="ml-1 inline-flex items-center justify-center min-w-[16px] h-[16px] text-[9px] font-bold rounded-full px-1" style={{ background: "var(--hue)", color: "#0b0d1a" }}>{due}</span>
    )}
    <ChevronDown size={12} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
   </button>

   {open && (
    <div
     id="polymath-practice-menu"
     ref={panelRef}
     role="menu"
     aria-label="Practice options"
     onMouseEnter={cancelClose}
     onMouseLeave={scheduleClose}
     className="absolute left-0 top-full mt-2 z-40 surface min-w-[320px] anim-slide-up"
    >
     <ul className="p-2">
      {ITEMS.map(({ href, label, desc, Icon }, idx) => (
       <li key={href}>
        <Link
         role="menuitem"
         href={href}
         onClick={() => setOpen(false)}
         className="flex items-start gap-3 px-3 py-2.5 rounded-xl group relative transition-colors"
         style={idx === 0 ? { background: "var(--hue-softer)" } : {}}
         onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--ink-soft)"; }}
         onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = idx === 0 ? "var(--hue-softer)" : "transparent"; }}
        >
         <span className="grid place-items-center w-9 h-9 rounded-lg shrink-0 bg-hue-soft" style={{ color: "var(--hue)" }}>
          <Icon size={15} />
         </span>
         <span className="flex-1 min-w-0">
          <span className="flex items-center gap-2">
           <span className="text-sm font-medium">{label}</span>
           {href === "/review" && due > 0 && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full btn-primary border">{due} due</span>
           )}
          </span>
          <span className="block dim text-xs mt-0.5 leading-snug">{desc}</span>
         </span>
         <ArrowRight size={13} className="dim mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
       </li>
      ))}
     </ul>
     <div className="px-3 py-2 border-t section-eyebrow flex items-center gap-2" style={{ borderColor: "var(--line)" }}>
      <span>Use arrow keys</span>
      <span className="kbd ml-auto">↑</span>
      <span className="kbd">↓</span>
     </div>
    </div>
   )}
  </div>
 );
}
