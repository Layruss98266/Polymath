"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Brain, BarChart3, Map, Bookmark, Info, Settings, Compass, Layers, Sparkles } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";
import { useFocusTrap } from "@/lib/focusTrap";

// Spotlight-style command palette. Cmd/Ctrl+K opens. Filters across:
// - Pages (Review, Dashboard, Skill Map, My List, About, Settings, Search)
// - Domains (all 15 from the catalogue)
// - Actions (theme toggle, mute, etc are out of scope here, kept for later)
// Arrow keys navigate, Enter selects, Esc closes.

type Item =
 | { kind: "page";   id: string; label: string; sub: string; href: string;  Icon: typeof Search }
 | { kind: "domain"; id: string; label: string; sub: string; href: string;  hue: string; emoji: string };

const PAGES: { id: string; label: string; sub: string; href: string; Icon: typeof Search }[] = [
 { id: "review",    label: "Review",     sub: "FSRS spaced repetition",                  href: "/review",    Icon: Brain },
 { id: "dashboard", label: "Dashboard",  sub: "XP, streaks, mastery, achievements",      href: "/dashboard", Icon: BarChart3 },
 { id: "skill-map", label: "Skill Map",  sub: "Categories and connections",              href: "/skill-map", Icon: Map },
 { id: "my-list",   label: "My List",    sub: "Paths, bookmarks, reflections",           href: "/my-list",   Icon: Bookmark },
 { id: "search",    label: "Search page", sub: "Concepts and glossary search",            href: "/search",    Icon: Search },
 { id: "about",     label: "About",      sub: "How it works, principles, FAQ, privacy",  href: "/about",     Icon: Info },
 { id: "settings",  label: "Settings",   sub: "Theme, sound, save/load, reset",          href: "/settings",  Icon: Settings },
 { id: "home",      label: "Home",       sub: "Catalogue and rituals",                    href: "/",          Icon: Compass }
];

export function CommandPalette() {
 const router = useRouter();
 const [open, setOpen] = useState(false);
 const [q, setQ] = useState("");
 const [active, setActive] = useState(0);
 const listRef = useRef<HTMLUListElement>(null);
 const dialogRef = useRef<HTMLDivElement>(null);
 useFocusTrap(open, dialogRef);

 // Open on Cmd/Ctrl+K
 useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
   const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
   if (isCmdK) { e.preventDefault(); setOpen((v) => !v); }
   if (e.key === "Escape" && open) { e.preventDefault(); setOpen(false); }
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
 }, [open]);

 useEffect(() => {
  if (open) {
   setQ(""); setActive(0);
   const el = document.getElementById("cmdk-input") as HTMLInputElement | null;
   setTimeout(() => el?.focus(), 50);
  }
 }, [open]);

 const items = useMemo<Item[]>(() => {
  const ql = q.trim().toLowerCase();
  const pages: Item[] = PAGES
   .filter((p) => !ql || p.label.toLowerCase().includes(ql) || p.sub.toLowerCase().includes(ql))
   .map((p) => ({ kind: "page", ...p }));
  const domains: Item[] = DOMAIN_INDEX
   .filter((d) => !ql || d.name.toLowerCase().includes(ql) || d.tagline.toLowerCase().includes(ql) || d.category.toLowerCase().includes(ql))
   .map((d) => ({ kind: "domain" as const, id: d.id, label: d.name, sub: d.tagline, href: `/domain/${d.id}`, hue: d.hue, emoji: d.icon }));
  return [...pages, ...domains].slice(0, 30);
 }, [q]);

 useEffect(() => { setActive(0); }, [q]);

 const choose = (i: number) => {
  const it = items[i];
  if (!it) return;
  router.push(it.href as any);
  setOpen(false);
 };

 const onKeyInput = (e: React.KeyboardEvent) => {
  if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(items.length - 1, a + 1)); }
  if (e.key === "ArrowUp")   { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
  if (e.key === "Enter")     { e.preventDefault(); choose(active); }
 };

 useEffect(() => {
  if (!listRef.current) return;
  const el = listRef.current.querySelector(`[data-idx="${active}"]`) as HTMLElement | null;
  el?.scrollIntoView({ block: "nearest" });
 }, [active]);

 if (!open) return null;
 return (
  <div ref={dialogRef} className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[12vh]" role="dialog" aria-label="Command palette" aria-modal="true">
   <div className="absolute inset-0 anim-fade-in" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }} onClick={() => setOpen(false)} />
   <div className="relative surface w-full max-w-xl overflow-hidden anim-slide-up" style={{ boxShadow: "var(--shadow-pop)" }}>
    <div className="flex items-center gap-3 px-4 h-12" style={{ borderBottom: "1px solid var(--line)" }}>
     <Search size={16} className="dim shrink-0" />
     <label htmlFor="cmdk-input" className="sr-only">Type a command, page, or domain</label>
     <input
      id="cmdk-input"
      value={q}
      onChange={(e) => setQ(e.target.value)}
      onKeyDown={onKeyInput}
      placeholder="Jump to a page or a domain"
      className="bg-transparent outline-none flex-1 text-base"
      spellCheck={false}
      autoComplete="off"
      role="combobox"
      aria-expanded="true"
      aria-controls="cmdk-listbox"
      aria-autocomplete="list"
      aria-activedescendant={items[active] ? `cmdk-opt-${active}` : undefined}
     />
     <span className="kbd">esc</span>
    </div>
    <ul id="cmdk-listbox" ref={listRef} role="listbox" aria-label="Results" className="max-h-[60vh] overflow-y-auto p-1.5">
     {items.length === 0 && <li className="dim text-sm p-6 text-center">No matches. Try a different word.</li>}
     {items.map((it, i) => (
      <li key={`${it.kind}-${it.id}`}>
       <button
        id={`cmdk-opt-${i}`}
        role="option"
        aria-selected={i === active}
        data-idx={i}
        onMouseEnter={() => setActive(i)}
        onClick={() => choose(i)}
        className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 relative transition-colors"
        style={i === active ? { background: "var(--hue-soft)" } : {}}
       >
        {i === active && <span aria-hidden="true" className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r" style={{ background: "var(--hue)" }} />}
        {it.kind === "page" ? (
         <span className="grid place-items-center w-8 h-8 rounded-lg shrink-0 bg-hue-soft" style={{ color: "var(--hue)" }}>
          <it.Icon size={14} />
         </span>
        ) : (
         <span className="grid place-items-center w-8 h-8 rounded-lg shrink-0 text-base" style={{ background: `${it.hue}1f`, border: `1px solid ${it.hue}3a` }}>
          {it.emoji}
         </span>
        )}
        <span className="flex-1 min-w-0">
         <span className="block text-sm font-medium truncate">{it.label}</span>
         <span className="dim text-xs truncate block">{it.sub}</span>
        </span>
        <span className="section-eyebrow shrink-0">{it.kind === "page" ? "Page" : "Domain"}</span>
        {i === active && <ArrowRight size={12} className="hue shrink-0" />}
       </button>
      </li>
     ))}
    </ul>
    <div className="px-4 h-10 text-[11px] dim flex items-center gap-3" style={{ borderTop: "1px solid var(--line)" }}>
     <span className="inline-flex items-center gap-1.5"><Sparkles size={10} className="hue" /> <span className="kbd">cmd</span><span className="kbd">k</span> anywhere</span>
     <span className="ml-auto inline-flex items-center gap-3">
      <span className="inline-flex items-center gap-1"><span className="kbd">↑</span><span className="kbd">↓</span> navigate</span>
      <span className="inline-flex items-center gap-1"><span className="kbd">↵</span> open</span>
     </span>
    </div>
   </div>
  </div>
 );
}
