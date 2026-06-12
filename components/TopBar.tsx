"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
 Flame, Zap, Brain, MoonStar, Sun, Volume2, VolumeX, Settings,
 Menu, X, ArrowRight, Search, Bookmark, Map, BarChart3, Info,
 Layers, Save
} from "lucide-react";
import { useActions, useUserState, useHydrated } from "@/lib/state";
import { levelProgress, globalRank } from "@/lib/xp";
import { dueNow } from "@/lib/fsrs";
import { exportCode, importCode } from "@/lib/save";
import { MegaMenu } from "./MegaMenu";
import { PracticeMenu } from "./PracticeMenu";

// Top bar:
// Left: logo + Domains mega menu + Practice dropdown (Review/Dashboard/Skill Map/My List) + About
// Right: compact stats pill + utility cluster + primary CTA
// Mobile: logo + hamburger drawer

type LinkItem = { href: string; label: string; Icon: typeof Brain };

const NAV: LinkItem[] = [
 { href: "/about", label: "About", Icon: Info }
];

export function TopBar() {
 const s = useUserState();
 const hydrated = useHydrated();
 const a = useActions();
 const path = usePathname();
 const [drawer, setDrawer] = useState(false);
 const [more, setMore] = useState(false);
 const [showSave, setShowSave] = useState(false);
 const moreRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!hydrated) return;
  document.documentElement.dataset.theme = s.theme;
 }, [s.theme, hydrated]);

 useEffect(() => { setDrawer(false); setMore(false); }, [path]);

 useEffect(() => {
  if (!more) return;
  const onClick = (e: MouseEvent) => { if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMore(false); };
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMore(false); };
  document.addEventListener("mousedown", onClick);
  document.addEventListener("keydown", onKey);
  return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
 }, [more]);

 const lp = useMemo(() => levelProgress(s.xp), [s.xp]);
 const rank = useMemo(() => globalRank(s.xp), [s.xp]);
 const due = useMemo(() => dueNow(s.cards).length, [s.cards]);

 const isActive = (href: string) => href === "/" ? path === "/" : (path === href || path?.startsWith(href + "/"));

 const StatsPill = () => (
  <div className="hidden md:flex items-center gap-3 panel px-3 py-1.5 text-xs" title={`Level ${lp.current} (${rank.name}), ${s.currentStreak} day streak, ${due} cards due`}>
   <span className="flex items-center gap-1"><Zap size={12} className="hue" /> {s.xp}</span>
   <span className="flex items-center gap-1"><Flame size={12} className="hue" /> {s.currentStreak}</span>
   <span className="flex items-center gap-1 dim">L{lp.current}</span>
  </div>
 );

 return (
  <header className="sticky top-0 z-30 backdrop-blur-md border-b" style={{ background: "color-mix(in oklab, var(--bg) 82%, transparent)", borderColor: "var(--line)" }}>
   <div className="mx-auto max-w-6xl px-3 sm:px-4 h-14 flex items-center gap-2 sm:gap-4">
    {/* Logo */}
    <Link href="/" className="font-display text-base sm:text-lg tracking-wide shrink-0 flex items-center gap-1">
     POLYMATH
    </Link>

    {/* Desktop nav cluster */}
    <div className="hidden sm:block shrink-0"><MegaMenu /></div>
    <div className="hidden md:block shrink-0"><PracticeMenu /></div>
    <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 ml-1">
     {NAV.map(({ href, label, Icon }) => {
      const active = isActive(href);
      return (
       <Link
        key={href}
        href={href}
        className="px-2.5 py-1.5 text-sm rounded-md inline-flex items-center gap-1.5 relative"
        style={{ color: active ? "var(--hue)" : "var(--ink)" }}
       >
        <Icon size={14} className={active ? "hue" : "dim"} />
        <span>{label}</span>
       </Link>
      );
     })}
    </nav>

    <div className="ml-auto flex items-center gap-2">
     <StatsPill />

     {/* Search shortcut */}
     <Link href="/search" className="btn !p-2" aria-label="Search"><Search size={14} /></Link>

     {/* More dropdown for utilities */}
     <div ref={moreRef} className="relative">
      <button
       type="button"
       aria-haspopup="menu"
       aria-expanded={more}
       className="btn !p-2 hidden sm:inline-flex"
       onClick={() => setMore((v) => !v)}
       aria-label="More options"
      >
       <Settings size={14} />
      </button>
      {more && (
       <div role="menu" className="absolute right-0 mt-2 panel shadow-2xl z-40 min-w-[220px] py-2">
        <button role="menuitem" className="w-full text-left px-4 py-2 text-sm inline-flex items-center gap-2 hover:opacity-80" onClick={() => { a.setTheme(s.theme === "dark" ? "light" : "dark"); }}>
         {s.theme === "dark" ? <Sun size={14} /> : <MoonStar size={14} />} {s.theme === "dark" ? "Light theme" : "Dark theme"}
        </button>
        <button role="menuitem" className="w-full text-left px-4 py-2 text-sm inline-flex items-center gap-2 hover:opacity-80" onClick={a.toggleMute}>
         {s.muteSound ? <VolumeX size={14} /> : <Volume2 size={14} />} {s.muteSound ? "Unmute sounds" : "Mute sounds"}
        </button>
        <button role="menuitem" className="w-full text-left px-4 py-2 text-sm inline-flex items-center gap-2 hover:opacity-80" onClick={() => { setMore(false); setShowSave(true); }}>
         <Save size={14} /> Save / Load
        </button>
        <button role="menuitem" className="w-full text-left px-4 py-2 text-sm inline-flex items-center gap-2 hover:opacity-80" onClick={() => { setMore(false); const ev = new KeyboardEvent("keydown", { key: "?" }); window.dispatchEvent(ev); }}>
         <kbd className="font-mono text-[10px]">?</kbd> Keyboard shortcuts
        </button>
        <div className="my-1 border-t" style={{ borderColor: "var(--line)" }} />
        <Link role="menuitem" href="/my-list" className="w-full text-left px-4 py-2 text-sm inline-flex items-center gap-2 hover:opacity-80" onClick={() => setMore(false)}>
         <Bookmark size={14} /> My List
        </Link>
        <Link role="menuitem" href="/settings" className="w-full text-left px-4 py-2 text-sm inline-flex items-center gap-2 hover:opacity-80" onClick={() => setMore(false)}>
         <Settings size={14} /> Settings
        </Link>
       </div>
      )}
     </div>

     {/* Primary CTA */}
     <Link
      href={s.startedDomains.length > 0 ? "/review" : "/#domains"}
      className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium shrink-0"
      style={{ background: "var(--hue)", color: "#0b0d1a" }}
     >
      {s.startedDomains.length > 0 ? <>Review <ArrowRight size={14} /></> : <>Start learning <ArrowRight size={14} /></>}
     </Link>

     {/* Mobile hamburger */}
     <button className="btn !p-2 sm:hidden" aria-label="Menu" onClick={() => setDrawer(true)}><Menu size={16} /></button>
    </div>
   </div>

   {/* Mobile drawer */}
   {drawer && (
    <div className="sm:hidden fixed inset-0 z-40" role="dialog" aria-label="Menu">
     <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} onClick={() => setDrawer(false)} />
     <div className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm panel rounded-none border-l p-4 overflow-y-auto" style={{ borderColor: "var(--line)" }}>
      <div className="flex items-center justify-between mb-4">
       <span className="font-display text-lg">POLYMATH</span>
       <button className="btn !p-2" aria-label="Close menu" onClick={() => setDrawer(false)}><X size={16} /></button>
      </div>
      <div className="panel px-3 py-2 flex items-center gap-3 text-sm mb-4">
       <span className="flex items-center gap-1"><Zap size={12} className="hue" /> {s.xp} XP</span>
       <span className="flex items-center gap-1"><Flame size={12} className="hue" /> {s.currentStreak}</span>
       <span className="dim ml-auto">L{lp.current}</span>
      </div>
      <nav className="space-y-1">
       <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm" style={isActive("/") ? { background: "rgba(255,255,255,0.05)", color: "var(--hue)" } : {}}>
        <Layers size={14} /> Home
       </Link>
       {NAV.map(({ href, label, Icon }) => (
        <Link
         key={href}
         href={href}
         className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
         style={isActive(href) ? { background: "rgba(255,255,255,0.05)", color: "var(--hue)" } : {}}
        >
         <Icon size={14} /> {label}
         {href === "/review" && due > 0 && (
          <span className="ml-auto inline-flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold rounded-full px-1" style={{ background: "var(--hue)", color: "#fff" }}>{due}</span>
         )}
        </Link>
       ))}
       <Link href="/search"   className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"><Search size={14} /> Search</Link>
       <Link href="/my-list"  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"><Bookmark size={14} /> My List</Link>
       <Link href="/settings" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"><Settings size={14} /> Settings</Link>
      </nav>
      <div className="mt-4 pt-4 border-t flex flex-wrap gap-2" style={{ borderColor: "var(--line)" }}>
       <button className="btn flex-1 justify-center" onClick={() => a.setTheme(s.theme === "dark" ? "light" : "dark")}>
        {s.theme === "dark" ? <><Sun size={14} /> Light</> : <><MoonStar size={14} /> Dark</>}
       </button>
       <button className="btn flex-1 justify-center" onClick={a.toggleMute}>
        {s.muteSound ? <><VolumeX size={14} /> Unmute</> : <><Volume2 size={14} /> Mute</>}
       </button>
      </div>
      <Link
       href={s.startedDomains.length > 0 ? "/review" : "/#domains"}
       className="mt-4 inline-flex w-full justify-center items-center gap-1 px-3 py-2.5 rounded-lg text-sm font-medium"
       style={{ background: "var(--hue)", color: "#0b0d1a" }}
      >
       {s.startedDomains.length > 0 ? <>Continue learning <ArrowRight size={14} /></> : <>Start learning <ArrowRight size={14} /></>}
      </Link>
     </div>
    </div>
   )}

   {showSave && <SaveLoadModal onClose={() => setShowSave(false)} />}
  </header>
 );
}

function SaveLoadModal({ onClose }: { onClose: () => void }) {
 const s = useUserState();
 const a = useActions();
 const [code, setCode] = useState("");
 const [err, setErr] = useState<string | null>(null);
 const exported = useMemo(() => exportCode(s), [s]);
 return (
  <div className="fixed inset-0 z-40 grid place-items-center p-4" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose}>
   <div className="panel p-5 max-w-xl w-full space-y-3" onClick={(e) => e.stopPropagation()}>
    <h3 className="font-display text-xl">Save / Load progress</h3>
    <p className="dim text-sm">Your progress is auto-saved locally. To move it to another device or browser, copy this code and paste it on the other side.</p>
    <label className="text-sm">Your save code</label>
    <textarea className="w-full h-24 panel p-2 text-xs" readOnly value={exported} />
    <button className="btn" onClick={() => navigator.clipboard.writeText(exported)}>Copy code</button>
    <hr className="border-[color:var(--line)]" />
    <label className="text-sm">Paste a code to restore</label>
    <textarea className="w-full h-24 panel p-2 text-xs" value={code} onChange={(e) => setCode(e.target.value)} />
    {err && <p className="text-sm" style={{ color: "var(--bad)" }}>{err}</p>}
    <div className="flex gap-2">
     <button className="btn" onClick={() => {
      try { a.importState(importCode(code)); setErr(null); onClose(); }
      catch (e: any) { setErr(e.message ?? "Invalid code"); }
     }}>Restore</button>
     <button className="btn" onClick={onClose}>Close</button>
    </div>
   </div>
  </div>
 );
}
