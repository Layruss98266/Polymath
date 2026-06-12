"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Brain, Search, BarChart3, Map } from "lucide-react";
import { useUserState } from "@/lib/state";
import { dueNow } from "@/lib/fsrs";
import { DOMAIN_INDEX } from "@/data/domains";

// Mobile bottom navigation. Visible only below the sm breakpoint, sticky to the bottom.
// 5 destinations: Home, Review (with due-count badge), Search, Dashboard, Skill map.
const ITEMS = [
 { href: "/",          label: "Home",   Icon: Home },
 { href: "/review",    label: "Review", Icon: Brain },
 { href: "/search",    label: "Search", Icon: Search },
 { href: "/dashboard", label: "Stats",  Icon: BarChart3 },
 { href: "/skill-map", label: "Map",    Icon: Map }
];

export function BottomNav() {
 const path = usePathname();
 const s = useUserState();
 const due = dueNow(s.cards).length;
 // When on a /domain/[id] page, tint the active-item color in that domain's
 // hue so the bar stays in sync with the rest of the page chrome.
 const domainHue = (() => {
  const m = path?.match(/^\/domain\/([^/?#]+)/);
  if (!m) return null;
  const d = DOMAIN_INDEX.find((x) => x.id === m[1]);
  return d?.hue ?? null;
 })();
 return (
  <nav
   aria-label="Mobile primary navigation"
   className="sm:hidden fixed bottom-0 left-0 right-0 z-30 border-t backdrop-blur-md"
   style={{
    background: "color-mix(in oklab, var(--bg) 88%, transparent)",
    borderColor: "var(--line)",
    paddingBottom: "env(safe-area-inset-bottom, 0px)",
    ...(domainHue ? ({ ["--hue" as any]: domainHue } as any) : {})
   }}
  >
   <ul className="grid grid-cols-5">
    {ITEMS.map(({ href, label, Icon }) => {
     const active = href === "/" ? path === "/" : (path === href || path?.startsWith(href + "/"));
     return (
      <li key={href}>
       <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className="flex flex-col items-center gap-1 pt-2 pb-1.5 text-[10px] relative"
        style={{ color: active ? "var(--hue)" : "var(--dim)" }}
       >
        <span className="relative">
         <Icon size={20} strokeWidth={active ? 2.25 : 1.75} />
         {href === "/review" && due > 0 && (
          <span
           className="absolute -top-1 -right-2 min-w-[14px] h-[14px] text-[8px] font-bold rounded-full px-1 flex items-center justify-center"
           style={{ background: "var(--hue)", color: "var(--hue-ink)" }}
          >{due}</span>
         )}
        </span>
        <span style={{ fontWeight: active ? 600 : 400 }}>{label}</span>
        <span
         aria-hidden="true"
         className="absolute bottom-0 h-[3px] w-7 rounded-full transition-opacity"
         style={{ background: "var(--hue)", opacity: active ? 1 : 0 }}
        />
       </Link>
      </li>
     );
    })}
   </ul>
  </nav>
 );
}
