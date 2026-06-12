"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Layers, Search } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";

// Domain mega menu. Opens on the Domains chip in the top bar. Groups the full
// catalogue by category, shows each domain as icon + name + tagline. Search
// box at the top filters live. Touched domains get a colored side stripe.
// Hover-friendly on desktop; click-toggle on touch. Esc and outside-click close.
// Keyboard: open with Enter or Space on the trigger; arrow keys are not bound
// but tab order is correct.

export function MegaMenu() {
 const [open, setOpen] = useState(false);
 const [q, setQ] = useState("");
 const rootRef = useRef<HTMLDivElement>(null);
 const s = useUserState();

 useEffect(() => {
  if (!open) return;
  const onClickOutside = (e: MouseEvent) => {
   if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
  };
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
  document.addEventListener("mousedown", onClickOutside);
  document.addEventListener("keydown", onKey);
  return () => {
   document.removeEventListener("mousedown", onClickOutside);
   document.removeEventListener("keydown", onKey);
  };
 }, [open]);

 // Reset query when closing so the menu opens fresh next time.
 useEffect(() => { if (!open) setQ(""); }, [open]);

 const groups = useMemo(() => {
  const ql = q.trim().toLowerCase();
  const filtered = ql
   ? DOMAIN_INDEX.filter((d) => d.name.toLowerCase().includes(ql) || d.tagline.toLowerCase().includes(ql) || d.category.toLowerCase().includes(ql))
   : DOMAIN_INDEX;
  const byCat: Record<string, typeof DOMAIN_INDEX> = {};
  for (const d of filtered) (byCat[d.category] ??= []).push(d);
  return Object.entries(byCat);
 }, [q]);

 return (
  <div
   ref={rootRef}
   className="relative"
   onMouseEnter={() => { if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) setOpen(true); }}
   onMouseLeave={() => { if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) setOpen(false); }}
  >
   <button
    type="button"
    aria-haspopup="menu"
    aria-expanded={open}
    onClick={() => setOpen((v) => !v)}
    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); } }}
    className={`chip ${open ? "ring-1" : ""}`}
    style={open ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
   >
    <Layers size={14} className="hue" /> Domains <ChevronDown size={12} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
   </button>

   {open && (
    <div
     role="menu"
     aria-label="All domains"
     className="absolute left-0 sm:left-auto sm:right-0 mt-2 z-40 panel shadow-2xl"
     style={{
      width: "min(92vw, 760px)",
      maxHeight: "min(70vh, 540px)",
      overflow: "auto"
     }}
    >
     {/* Search */}
     <div className="sticky top-0 z-10 px-3 pt-3 pb-2" style={{ background: "var(--panel)", borderBottom: "1px solid var(--line)" }}>
      <div className="flex items-center gap-2 panel px-2 py-1">
       <Search size={14} className="dim" />
       <input
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter domains by name, tagline, or category"
        className="bg-transparent outline-none flex-1 text-sm"
        aria-label="Filter domains"
       />
       {q && <button className="chip" onClick={() => setQ("")}>Clear</button>}
      </div>
     </div>

     {/* Groups */}
     <div className="px-3 pb-3 pt-2">
      {groups.length === 0 && <p className="dim text-sm p-3">No matches. Try a different word.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
       {groups.map(([cat, list]) => (
        <section key={cat}>
         <p className="dim text-[11px] uppercase tracking-widest px-2 mb-1">{cat}</p>
         <ul className="space-y-1">
          {list.map((d) => {
           const touched = s.startedDomains.includes(d.id);
           return (
            <li key={d.id}>
             <Link
              role="menuitem"
              href={`/domain/${d.id}`}
              onClick={() => setOpen(false)}
              className="flex items-start gap-2.5 px-2 py-2 rounded-lg group"
              style={{ borderLeft: `3px solid ${touched ? d.hue : "transparent"}` }}
             >
              <span className="text-xl mt-0.5 shrink-0" aria-hidden="true">{d.icon}</span>
              <span className="flex-1 min-w-0">
               <span className="block text-sm font-medium group-hover:underline" style={{ color: touched ? d.hue : "var(--ink)" }}>{d.name}</span>
               <span className="block dim text-[11px] truncate">{d.tagline}</span>
              </span>
             </Link>
            </li>
           );
          })}
         </ul>
        </section>
       ))}
      </div>

      {/* Footer row inside the menu */}
      <div className="mt-3 pt-3 flex flex-wrap items-center gap-3 text-xs dim" style={{ borderTop: "1px solid var(--line)" }}>
       <span>{DOMAIN_INDEX.length} domains in the Core 15. Click any to start.</span>
       <Link href="/skill-map" className="ml-auto chip" onClick={() => setOpen(false)}>Open Skill Map</Link>
       <Link href="/search" className="chip" onClick={() => setOpen(false)}>Global search</Link>
      </div>
     </div>
    </div>
   )}
  </div>
 );
}
