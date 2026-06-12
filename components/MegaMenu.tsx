"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Layers, Search, X, Sparkles, ArrowRight } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";

// Robust mega menu rebuild:
// - Fixed positioning under the trigger with viewport-aware right-edge anchor.
// - Backdrop dim overlay so the menu doesn't blend into the page.
// - Hover bridge (delayed close) so cursor can travel from trigger to menu.
// - Click-outside, Esc to close, search auto-focus.
// - Featured/popular row at top, full catalogue grouped by category below.

export function MegaMenu() {
 const [open, setOpen] = useState(false);
 const [q, setQ] = useState("");
 const triggerRef = useRef<HTMLButtonElement>(null);
 const panelRef = useRef<HTMLDivElement>(null);
 const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
 const s = useUserState();

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
  // Lock body scroll on mobile so the menu feels modal there.
  if (window.matchMedia("(max-width: 640px)").matches) document.body.style.overflow = "hidden";
  return () => {
   document.removeEventListener("keydown", onKey);
   document.removeEventListener("mousedown", onClickOutside);
   document.body.style.overflow = "";
  };
 }, [open]);

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

 const popular = useMemo(() => {
  const ids = ["psychology", "personal_finance", "ai_ml", "negotiation"];
  return ids.map((id) => DOMAIN_INDEX.find((d) => d.id === id)).filter(Boolean) as typeof DOMAIN_INDEX;
 }, []);

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
    onClick={() => setOpen((v) => !v)}
    className={`chip ${open ? "ring-1" : ""}`}
    style={open ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
   >
    <Layers size={14} className="hue" /> Domains
    <ChevronDown size={12} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
   </button>

   {open && (
    <>
     {/* Backdrop dimmer */}
     <div
      className="fixed inset-0 z-30"
      style={{ background: "rgba(0,0,0,0.5)", animation: "polymath-fade .15s ease-out" }}
      onClick={() => setOpen(false)}
      aria-hidden="true"
     />

     {/* Menu panel. Fixed positioned, centered on small screens, anchored to viewport on desktop. */}
     <div
      ref={panelRef}
      role="menu"
      aria-label="All domains"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
      className="fixed z-40 panel shadow-2xl rounded-2xl"
      style={{
       top: "60px",
       left: "50%",
       transform: "translateX(-50%)",
       width: "min(94vw, 880px)",
       maxHeight: "min(78vh, 640px)",
       overflow: "hidden",
       display: "flex",
       flexDirection: "column"
      }}
     >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex items-center gap-2" style={{ borderBottom: "1px solid var(--line)" }}>
       <Layers size={16} className="hue" />
       <h2 className="font-display text-base">Pick a domain</h2>
       <span className="dim text-xs ml-auto">{DOMAIN_INDEX.length} in the Core 15</span>
       <button className="btn !p-2" aria-label="Close" onClick={() => setOpen(false)}><X size={14} /></button>
      </div>

      {/* Search */}
      <div className="px-4 pt-3 pb-3">
       <div className="panel flex items-center gap-2 px-3 py-2" style={{ borderColor: q ? "var(--hue)" : "var(--line)" }}>
        <Search size={14} className="dim" />
        <label htmlFor="mega-filter" className="sr-only">Filter domains</label>
        <input
         id="mega-filter"
         autoFocus
         value={q}
         onChange={(e) => setQ(e.target.value)}
         placeholder="Filter by name, tagline, or category"
         className="bg-transparent outline-none flex-1 text-sm"
         spellCheck={false}
         autoComplete="off"
        />
        {q && <button className="chip" onClick={() => setQ("")}>Clear</button>}
       </div>
      </div>

      {/* Popular row (hidden when filtering) */}
      {!q && (
       <div className="px-4 pb-3">
        <p className="dim text-[11px] uppercase tracking-widest mb-2 inline-flex items-center gap-1">
         <Sparkles size={11} className="hue" /> Popular starting points
        </p>
        <div className="flex flex-wrap gap-2">
         {popular.map((d) => (
          <Link
           key={d.id}
           href={`/domain/${d.id}`}
           onClick={() => setOpen(false)}
           role="menuitem"
           className="chip"
           style={{ borderColor: `${d.hue}55` }}
          >
           <span aria-hidden="true">{d.icon}</span> {d.name}
          </Link>
         ))}
        </div>
       </div>
      )}

      {/* Scrollable groups */}
      <div className="px-4 pb-4 overflow-auto flex-1">
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
      </div>

      {/* Footer row */}
      <div className="px-4 py-3 flex flex-wrap items-center gap-2 text-xs dim" style={{ borderTop: "1px solid var(--line)" }}>
       <span>{q ? `${groups.reduce((sum, [, l]) => sum + l.length, 0)} match${groups.reduce((sum, [, l]) => sum + l.length, 0) === 1 ? "" : "es"}` : `${s.startedDomains.length} of ${DOMAIN_INDEX.length} touched by you`}</span>
       <Link href="/skill-map" className="ml-auto chip" onClick={() => setOpen(false)}>Skill Map <ArrowRight size={11} /></Link>
       <Link href="/search" className="chip" onClick={() => setOpen(false)}>Global search</Link>
      </div>
     </div>
    </>
   )}

   <style>{`
    @keyframes polymath-fade { from { opacity: 0; } to { opacity: 1; } }
   `}</style>
  </div>
 );
}
