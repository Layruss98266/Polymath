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
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
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
     <span className="ml-1 inline-flex items-center justify-center min-w-[16px] h-[16px] text-[9px] font-bold rounded-full px-1" style={{ background: "var(--hue)", color: "#fff" }}>{due}</span>
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
     className="absolute left-0 top-full mt-2 z-40 panel shadow-2xl rounded-2xl min-w-[300px]"
    >
     <ul className="p-1.5">
      {ITEMS.map(({ href, label, desc, Icon }) => (
       <li key={href}>
        <Link
         role="menuitem"
         href={href}
         onClick={() => setOpen(false)}
         className="flex items-start gap-3 px-3 py-2.5 rounded-lg group hover:bg-[color-mix(in_oklab,var(--ink)_4%,transparent)]"
        >
         <span className="grid place-items-center w-8 h-8 rounded-lg shrink-0" style={{ background: "color-mix(in oklab, var(--hue) 14%, transparent)", color: "var(--hue)" }}>
          <Icon size={14} />
         </span>
         <span className="flex-1 min-w-0">
          <span className="flex items-center gap-2">
           <span className="text-sm font-medium">{label}</span>
           {href === "/review" && due > 0 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "var(--hue)", color: "#fff" }}>{due} due</span>
           )}
          </span>
          <span className="block dim text-xs">{desc}</span>
         </span>
         <ArrowRight size={12} className="dim mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
       </li>
      ))}
     </ul>
    </div>
   )}
  </div>
 );
}
