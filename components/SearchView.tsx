"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, Layers, BookOpen, FileText } from "lucide-react";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import type { Domain } from "@/lib/types";

// Global search across domain names + taglines, concept titles + short
// descriptions, and glossary terms. Lazy loads each domain the first time
// the search needs it, then caches in memory.

type Hit =
 | { kind: "domain";   domainId: string; domainName: string; hue: string; title: string; snippet: string }
 | { kind: "concept";  domainId: string; domainName: string; hue: string; title: string; snippet: string; conceptIndex: number }
 | { kind: "glossary"; domainId: string; domainName: string; hue: string; title: string; snippet: string };

export function SearchView() {
 const [q, setQ] = useState("");
 const [loaded, setLoaded] = useState<Record<string, Domain>>({});

 // Pre warm with the index. Domain payloads load on the first non empty query.
 useEffect(() => {
  if (!q.trim()) return;
  const need = DOMAIN_INDEX.filter((d) => !loaded[d.id]);
  if (need.length === 0) return;
  Promise.all(need.map(async (d) => {
   try { return [d.id, await loadDomain(d.id)] as const; } catch { return null; }
  })).then((entries) => {
   const next: Record<string, Domain> = { ...loaded };
   for (const e of entries) if (e) next[e[0]] = e[1];
   setLoaded(next);
  });
 }, [q]);

 const hits = useMemo<Hit[]>(() => {
  const ql = q.trim().toLowerCase();
  if (!ql) return [];
  const out: Hit[] = [];

  for (const e of DOMAIN_INDEX) {
   if (e.name.toLowerCase().includes(ql) || e.tagline.toLowerCase().includes(ql) || e.category.toLowerCase().includes(ql)) {
    out.push({ kind: "domain", domainId: e.id, domainName: e.name, hue: e.hue, title: e.name, snippet: e.tagline });
   }
  }

  for (const e of DOMAIN_INDEX) {
   const d = loaded[e.id];
   if (!d) continue;
   d.concepts.forEach((c, ci) => {
    const blob = `${c.t} ${c.short} ${c.deep} ${c.definition ?? ""} ${c.generic ?? ""}`.toLowerCase();
    if (blob.includes(ql)) {
     out.push({ kind: "concept", domainId: e.id, domainName: e.name, hue: e.hue, title: c.t, snippet: c.short, conceptIndex: ci });
    }
   });
   d.glossary.forEach((g) => {
    if (g.term.toLowerCase().includes(ql) || g.def.toLowerCase().includes(ql)) {
     out.push({ kind: "glossary", domainId: e.id, domainName: e.name, hue: e.hue, title: g.term, snippet: g.def });
    }
   });
  }
  return out.slice(0, 80);
 }, [q, loaded]);

 const grouped = useMemo(() => ({
  domains: hits.filter((h) => h.kind === "domain"),
  concepts: hits.filter((h) => h.kind === "concept"),
  glossary: hits.filter((h) => h.kind === "glossary")
 }), [hits]);

 return (
  <div className="space-y-4">
   <h1 className="font-display text-3xl">Search</h1>
   <div className="panel flex items-center gap-2 px-3 py-2">
    <Search size={16} className="dim" />
    <input
     autoFocus
     value={q}
     onChange={(e) => setQ(e.target.value)}
     placeholder="Search domains, concepts, glossary..."
     className="bg-transparent outline-none flex-1 text-sm"
     aria-label="Search"
    />
   </div>
   {!q.trim() && <p className="dim text-sm">Type to search across domain names, concepts, and glossary terms.</p>}
   {q.trim() && hits.length === 0 && <p className="dim text-sm">No matches yet. Concept search needs each domain to load once; try again in a moment.</p>}

   {grouped.domains.length > 0 && (
    <section className="space-y-2">
     <h2 className="text-sm uppercase tracking-widest dim flex items-center gap-2"><Layers size={14} /> Domains ({grouped.domains.length})</h2>
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {grouped.domains.map((h, i) => (
       <li key={i} className="panel p-3" style={{ borderColor: h.hue }}>
        <Link href={`/domain/${h.domainId}`} className="block">
         <p className="font-medium">{h.title}</p>
         <p className="dim text-sm">{h.snippet}</p>
        </Link>
       </li>
      ))}
     </ul>
    </section>
   )}

   {grouped.concepts.length > 0 && (
    <section className="space-y-2">
     <h2 className="text-sm uppercase tracking-widest dim flex items-center gap-2"><BookOpen size={14} /> Concepts ({grouped.concepts.length})</h2>
     <ul className="space-y-2">
      {grouped.concepts.map((h, i) => (
       <li key={i} className="panel p-3">
        <Link href={`/domain/${h.domainId}`} className="block">
         <p className="font-medium">{h.title}</p>
         <p className="dim text-xs">in {h.domainName}</p>
         <p className="text-sm mt-1">{h.snippet}</p>
        </Link>
       </li>
      ))}
     </ul>
    </section>
   )}

   {grouped.glossary.length > 0 && (
    <section className="space-y-2">
     <h2 className="text-sm uppercase tracking-widest dim flex items-center gap-2"><FileText size={14} /> Glossary ({grouped.glossary.length})</h2>
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {grouped.glossary.map((h, i) => (
       <li key={i} className="panel p-3">
        <Link href={`/domain/${h.domainId}`} className="block">
         <p className="font-medium">{h.title}</p>
         <p className="dim text-xs">in {h.domainName}</p>
         <p className="text-sm mt-1">{h.snippet}</p>
        </Link>
       </li>
      ))}
     </ul>
    </section>
   )}
  </div>
 );
}
