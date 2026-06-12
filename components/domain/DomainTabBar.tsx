"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Brain, GraduationCap, MoreHorizontal, Lock } from "lucide-react";
import type { Domain } from "@/lib/types";
import { useUserState } from "@/lib/state";
import { masteryPct } from "@/lib/mastery";
import { TABS, tabPath, type TabGroup, type TabId } from "@/lib/tabs";

// Link-based tab bar. Active state comes from usePathname, not local state.
// Progressive disclosure (Discover/Practice/Reference) lives here.

function GroupIcon({ g }: { g: TabGroup }) {
 if (g === "discover")  return <BookOpen size={12} />;
 if (g === "practice")  return <Brain size={12} />;
 return <GraduationCap size={12} />;
}

// Returns the TabId for the current URL, or `null` when on a subdomain page
// (where no tab chip should be highlighted to avoid misleading the user).
function activeTabFromPath(domainId: string, pathname: string | null): TabId | null {
 if (!pathname) return "basics";
 const base = `/domain/${domainId}`;
 if (pathname === base) return "basics";
 const rest = pathname.startsWith(base + "/") ? pathname.slice(base.length + 1) : "";
 const first = rest.split("/")[0];
 if (first === "sub") return null; // subdomain pages do not own a tab
 const t = TABS.find((x) => x.segment === first);
 return t?.id ?? "basics";
}

export function DomainTabBar({ domain }: { domain: Domain }) {
 const s = useUserState();
 const pathname = usePathname();
 const active = activeTabFromPath(domain.id, pathname);
 const [showAll, setShowAll] = useState(false);
 const [overflowOpen, setOverflowOpen] = useState(false);
 const overflowRef = useRef<HTMLDivElement>(null);

 // Close overflow on outside click + Escape so the menu is dismissable
 // without a navigation.
 useEffect(() => {
  if (!overflowOpen) return;
  const onClick = (e: MouseEvent) => {
   if (overflowRef.current && !overflowRef.current.contains(e.target as Node)) setOverflowOpen(false);
  };
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOverflowOpen(false); };
  document.addEventListener("mousedown", onClick);
  document.addEventListener("keydown", onKey);
  return () => {
   document.removeEventListener("mousedown", onClick);
   document.removeEventListener("keydown", onKey);
  };
 }, [overflowOpen]);

 // Reset overflow when the user navigates away.
 useEffect(() => { setOverflowOpen(false); }, [pathname]);

 const dp = s.domainProgress[domain.id];
 const m = useMemo(() => masteryPct(domain, dp, s.conceptProgress), [domain, dp, s.conceptProgress]);
 const opened = dp?.conceptsOpened ?? 0;
 const total = domain.concepts.length;

 const unlocked = useMemo(() => {
  const set = new Set<TabId>();
  for (const t of TABS) if (t.unlock(m, opened, total)) set.add(t.id);
  return set;
 }, [m, opened, total]);

 const primary = useMemo(
  () => TABS.filter((t) => (t.group === "discover" || t.group === "practice") && (showAll || unlocked.has(t.id))),
  [showAll, unlocked]
 );
 const overflow = useMemo(
  () => TABS.filter((t) => t.group === "reference" && (showAll || unlocked.has(t.id))),
  [showAll, unlocked]
 );
 const lockedHidden = TABS.filter((t) => !unlocked.has(t.id));

 // Active state: subtle hue underline + filled text. Inactive: muted text.
 // This is more obvious than a ring outline and reads as a real tab strip
 // rather than a row of chips. 44px tap target via py-2.5 + line-height.
 const tabClass = "shrink-0 inline-flex items-center gap-1.5 px-3 py-2.5 text-sm rounded-lg transition-colors min-h-[44px]";

 return (
  <nav
   className="flex gap-1 overflow-x-auto no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap items-center border-b sm:border-b-0"
   style={{ borderColor: "var(--line)" }}
   aria-label="Domain sections"
  >
   {primary.map((t) => {
    const isActive = t.id === active;
    return (
     <Link
      key={t.id}
      href={tabPath(domain.id, t.id)}
      aria-current={isActive ? "page" : undefined}
      onClick={() => setOverflowOpen(false)}
      className={tabClass}
      style={
       isActive
        ? {
           color: "var(--hue)",
           background: "var(--hue-soft)",
           boxShadow: "inset 0 -2px 0 var(--hue)"
          }
        : { color: "var(--dim)" }
      }
     >
      <GroupIcon g={t.group} /> <span>{t.label}</span>
     </Link>
    );
   })}

   {overflow.length > 0 && (
    <div ref={overflowRef} className="relative shrink-0">
     <button
      className={tabClass}
      style={{ color: "var(--dim)" }}
      onClick={() => setOverflowOpen((v) => !v)}
      aria-expanded={overflowOpen}
      aria-haspopup="menu"
      aria-controls={`polymath-tab-overflow-${domain.id}`}
     >
      <MoreHorizontal size={12} /> More ({overflow.length})
     </button>
     {overflowOpen && (
      <div
       id={`polymath-tab-overflow-${domain.id}`}
       role="menu"
       className="absolute right-0 mt-2 panel p-2 z-20 min-w-[200px] shadow-xl"
      >
       {overflow.map((t) => {
        const isActive = t.id === active;
        return (
         <Link
          key={t.id}
          role="menuitem"
          href={tabPath(domain.id, t.id)}
          onClick={() => setOverflowOpen(false)}
          className="w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2"
          style={isActive ? { background: "rgba(255,255,255,0.04)", color: "var(--hue)" } : {}}
         >
          <GroupIcon g={t.group} /> {t.label}
         </Link>
        );
       })}
      </div>
     )}
    </div>
   )}

   {lockedHidden.length > 0 && !showAll && (
    <button
     className="chip shrink-0 ml-auto"
     style={{ color: "var(--dim)" }}
     title="Some tabs unlock as you progress. Click to show all."
     onClick={() => setShowAll(true)}
    >
     <Lock size={11} /> {lockedHidden.length} locked
    </button>
   )}
   {showAll && (
    <button className="chip shrink-0 ml-auto" style={{ color: "var(--dim)" }} onClick={() => setShowAll(false)}>Hide advanced</button>
   )}
  </nav>
 );
}
