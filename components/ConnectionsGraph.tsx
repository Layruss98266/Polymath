"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import type { Domain } from "@/lib/types";
import { Network } from "lucide-react";

// SVG cross-domain connections graph. Each Core domain is a node, placed on a
// circle. Edges are pulled from each domain's synthesis array (a synthesis
// link in domain A pointing at domain B becomes an edge A -> B). The graph is
// theme-aware via CSS variables.

export function ConnectionsGraph() {
 const [domains, setDomains] = useState<Record<string, Domain>>({});
 const [hover, setHover] = useState<string | null>(null);

 useEffect(() => {
  Promise.all(DOMAIN_INDEX.map(async (d) => {
   try { return [d.id, await loadDomain(d.id)] as const; } catch { return null; }
  })).then((entries) => {
   const map: Record<string, Domain> = {};
   for (const e of entries) if (e) map[e[0]] = e[1];
   setDomains(map);
  });
 }, []);

 const W = 720, H = 520, cx = W / 2, cy = H / 2 + 6, R = Math.min(W, H) * 0.38;

 const placed = useMemo(() => {
  const n = DOMAIN_INDEX.length;
  return DOMAIN_INDEX.map((d, i) => {
   const a = (i / n) * 2 * Math.PI - Math.PI / 2;
   return { ...d, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
  });
 }, [cx, cy, R]);

 const edges = useMemo(() => {
  const out: { from: string; to: string; note: string }[] = [];
  for (const e of DOMAIN_INDEX) {
   const d = domains[e.id];
   if (!d) continue;
   for (const link of d.synthesis ?? []) {
    if (DOMAIN_INDEX.some((x) => x.id === link.linksTo)) {
     out.push({ from: e.id, to: link.linksTo, note: link.note });
    }
   }
  }
  return out;
 }, [domains]);

 const lookup = (id: string) => placed.find((p) => p.id === id)!;

 const hoverEdges = hover ? edges.filter((e) => e.from === hover || e.to === hover) : [];

 return (
  <section className="panel p-5">
   <div className="flex items-center gap-2 mb-3">
    <Network size={16} className="hue" />
    <h2 className="font-display text-xl">Connections</h2>
    <span className="dim text-xs ml-auto">{edges.length} cross-domain links</span>
   </div>
   <p className="dim text-sm mb-3">Hover or tap a domain to see what it connects to. This is the polymath payoff: ideas from one field showing up in another.</p>
   <div className="overflow-x-auto no-scrollbar">
    <svg
     viewBox={`0 0 ${W} ${H}`}
     role="img"
     aria-label="Cross-domain connections graph"
     style={{ width: "100%", maxHeight: 540, color: "var(--ink)" }}
    >
     <defs>
      <marker id="garr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
       <path d="M0,0 L10,5 L0,10 z" fill="var(--hue)" />
      </marker>
     </defs>
     {/* All edges, dim, behind nodes */}
     {edges.map((e, i) => {
      const a = lookup(e.from); const b = lookup(e.to);
      const dim = hover && !(e.from === hover || e.to === hover);
      return (
       <line
        key={i}
        x1={a.x} y1={a.y} x2={b.x} y2={b.y}
        stroke={dim ? "var(--line)" : "var(--hue)"}
        strokeWidth={hover && (e.from === hover || e.to === hover) ? 1.4 : 0.7}
        opacity={dim ? 0.5 : 0.85}
       />
      );
     })}
     {/* Nodes */}
     {placed.map((p) => {
      const active = hover === p.id || (hover && edges.some((e) => (e.from === hover && e.to === p.id) || (e.to === hover && e.from === p.id)));
      return (
       <g
        key={p.id}
        tabIndex={0}
        aria-label={p.name}
        onMouseEnter={() => setHover(p.id)}
        onMouseLeave={() => setHover(null)}
        onFocus={() => setHover(p.id)}
        onBlur={() => setHover(null)}
        style={{ cursor: "pointer" }}
       >
        <circle cx={p.x} cy={p.y} r={active ? 22 : 18} fill="var(--panel)" stroke={p.hue} strokeWidth={active ? 2.5 : 1.5} />
        <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize={12} fill="var(--ink)">{p.icon}</text>
        <text x={p.x} y={p.y + 36} textAnchor="middle" fontSize={10} fill={active ? p.hue : "var(--dim)"}>{p.name.split(" ")[0]}</text>
       </g>
      );
     })}
    </svg>
   </div>
   {hover && hoverEdges.length > 0 && (
    <ul className="mt-3 space-y-1 text-sm">
     {hoverEdges.slice(0, 5).map((e, i) => (
      <li key={i}>
       <Link href={`/domain/${e.from === hover ? e.to : e.from}`} className="hue underline">
        {(DOMAIN_INDEX.find((d) => d.id === (e.from === hover ? e.to : e.from)))?.name}
       </Link>
       <span className="dim"> . {e.note}</span>
      </li>
     ))}
    </ul>
   )}
  </section>
 );
}
