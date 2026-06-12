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
   <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} onClick={() => setOpen(false)} />
   <div className="relative panel rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--line)" }}>
     <Search size={16} className="dim shrink-0" />
     <label htmlFor="cmdk-input" className="sr-only">Type a command, page, or domain</label>
     <input
      id="cmdk-input"
      value={q}
      onChange={(e) => setQ(e.target.value)}
      onKeyDown={onKeyInput}
      placeholder="Type a page or a domain..."
      className="bg-transparent outline-none flex-1 text-base"
      spellCheck={false}
      autoComplete="off"
      role="combobox"
      aria-expanded="true"
      aria-controls="cmdk-listbox"
      aria-autocomplete="list"
      aria-activedescendant={items[active] ? `cmdk-opt-${active}` : undefined}
     />
     <kbd className="chip font-mono text-[10px]">esc</kbd>
    </div>
    <ul id="cmdk-listbox" ref={listRef} role="listbox" aria-label="Results" className="max-h-[60vh] overflow-y-auto p-1.5">
     {items.length === 0 && <li className="dim text-sm p-4">No matches.</li>}
     {items.map((it, i) => (
      <li key={`${it.kind}-${it.id}`}>
       <button
        id={`cmdk-opt-${i}`}
        role="option"
        aria-selected={i === active}
        data-idx={i}
        onMouseEnter={() => setActive(i)}
        onClick={() => choose(i)}
        className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3"
        style={i === active ? { background: "color-mix(in oklab, var(--hue) 14%, transparent)" } : {}}
       >
        {it.kind === "page" ? (
         <span className="grid place-items-center w-8 h-8 rounded-lg shrink-0" style={{ background: "color-mix(in oklab, var(--hue) 14%, transparent)", color: "var(--hue)" }}>
          <it.Icon size={14} />
         </span>
        ) : (
         <span className="grid place-items-center w-8 h-8 rounded-lg shrink-0 text-lg" style={{ background: `${it.hue}1f`, border: `1px solid ${it.hue}3a` }}>
          {it.emoji}
         </span>
        )}
        <span className="flex-1 min-w-0">
         <span className="block text-sm font-medium truncate">{it.label}</span>
         <span className="dim text-xs truncate block">{it.sub}</span>
        </span>
        <span className="dim text-[10px] uppercase tracking-widest shrink-0">{it.kind === "page" ? "Page" : "Domain"}</span>
        {i === active && <ArrowRight size={12} className="hue shrink-0" />}
       </button>
      </li>
     ))}
    </ul>
    <div className="px-4 py-2 text-[11px] dim flex items-center gap-3" style={{ borderTop: "1px solid var(--line)" }}>
     <span><Sparkles size={10} className="hue inline" /> Press <kbd className="chip font-mono text-[10px]">cmd</kbd> + <kbd className="chip font-mono text-[10px]">k</kbd> anywhere</span>
     <span className="ml-auto inline-flex items-center gap-2">
      <kbd className="chip font-mono text-[10px]">↑↓</kbd> Navigate · <kbd className="chip font-mono text-[10px]">enter</kbd> Open
     </span>
    </div>
   </div>
  </div>
 );
}
