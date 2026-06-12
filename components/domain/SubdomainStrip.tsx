"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Domain } from "@/lib/types";
import { subdomainPath } from "@/lib/tabs";

// Horizontal pills under the tab bar that link to each subdomain page. Only
// renders when the domain declares at least one subdomain.
export function SubdomainStrip({ domain }: { domain: Domain }) {
 const pathname = usePathname();
 const subs = domain.subdomains ?? [];
 if (subs.length === 0) return null;

 const counts: Record<string, number> = {};
 for (const c of domain.concepts) {
  if (c.subdomain) counts[c.subdomain] = (counts[c.subdomain] ?? 0) + 1;
 }

 return (
  <nav aria-label="Subdomains" className="flex gap-1.5 overflow-x-auto no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap">
   {subs.map((sub) => {
    const path = subdomainPath(domain.id, sub.id);
    const isActive = pathname === path;
    const n = counts[sub.id] ?? 0;
    return (
     <Link
      key={sub.id}
      href={path}
      aria-current={isActive ? "page" : undefined}
      className={`chip text-xs shrink-0 ${isActive ? "ring-1" : ""}`}
      style={isActive ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
     >
      {sub.name}
      {n > 0 && <span className="dim ml-1">({n})</span>}
     </Link>
    );
   })}
  </nav>
 );
}
