"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, Layers, BookOpen, FileText, ArrowRight, Sparkles } from "lucide-react";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import type { Domain } from "@/lib/types";
import { conceptPath, tabPath } from "@/lib/tabs";

// Global search. Domain names + taglines + categories, concept titles + short
// + deep + definition + generic, glossary terms + defs. Loads domain payloads
// the first time a non-empty query needs them.

type Hit =
 | { kind: "domain";   domainId: string; domainName: string; hue: string; title: string; snippet: string }
 | { kind: "concept";  domainId: string; domainName: string; hue: string; title: string; snippet: string; conceptIndex: number }
 | { kind: "glossary"; domainId: string; domainName: string; hue: string; title: string; snippet: string };

function highlight(text: string, q: string) {
 if (!q.trim()) return text;
 const ql = q.trim().toLowerCase();
 const idx = text.toLowerCase().indexOf(ql);
 if (idx < 0) return text;
 return (
  <>{text.slice(0, idx)}<mark style={{ background: "color-mix(in oklab, var(--hue) 30%, transparent)", color: "inherit", padding: "0 .15em", borderRadius: 3 }}>{text.slice(idx, idx + ql.length)}</mark>{text.slice(idx + ql.length)}</>
 );
}

const HISTORY_KEY = "polymath:search-history";
const HISTORY_MAX = 10;

function readHistory(): string[] {
 if (typeof window === "undefined") return [];
 try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch { return []; }
}
function writeHistory(items: string[]) {
 if (typeof window === "undefined") return;
 try { localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, HISTORY_MAX))); } catch {}
}

export function SearchView() {
 const [q, setQ] = useState("");
 // Debounced query. Filter and the heavy domain fan-out both key off this,
 // so the user can type without triggering 6 loadDomain() calls per keystroke.
 const [debouncedQ, setDebouncedQ] = useState("");
 const [loaded, setLoaded] = useState<Record<string, Domain>>({});
 const [history, setHistory] = useState<string[]>([]);

 useEffect(() => { setHistory(readHistory()); }, []);

 useEffect(() => {
  const t = setTimeout(() => setDebouncedQ(q), 150);
  return () => clearTimeout(t);
 }, [q]);

 // Persist any query worth remembering. 3+ chars, dedupe, most-recent first.
 useEffect(() => {
  const v = debouncedQ.trim();
  if (v.length < 3) return;
  setHistory((cur) => {
   const next = [v, ...cur.filter((x) => x.toLowerCase() !== v.toLowerCase())].slice(0, HISTORY_MAX);
   writeHistory(next);
   return next;
  });
 }, [debouncedQ]);

 const clearHistory = () => { setHistory([]); writeHistory([]); };

 useEffect(() => {
  // Only fan out the domain payloads when the query is meaningful. Below 3
  // chars we still filter against the static index, but skip the network.
  if (debouncedQ.trim().length < 3) return;
  const need = DOMAIN_INDEX.filter((d) => !loaded[d.id]);
  if (need.length === 0) return;
  let cancelled = false;
  Promise.all(need.map(async (d) => {
   try { return [d.id, await loadDomain(d.id)] as const; } catch { return null; }
  })).then((entries) => {
   if (cancelled) return;
   const next: Record<string, Domain> = { ...loaded };
   for (const e of entries) if (e) next[e[0]] = e[1];
   setLoaded(next);
  });
  return () => { cancelled = true; };
 // loaded intentionally excluded to avoid re-running when we set it
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [debouncedQ]);

 const hits = useMemo<Hit[]>(() => {
  const ql = debouncedQ.trim().toLowerCase();
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
    if (blob.includes(ql)) out.push({ kind: "concept", domainId: e.id, domainName: e.name, hue: e.hue, title: c.t, snippet: c.short, conceptIndex: ci });
   });
   d.glossary.forEach((g) => {
    if (g.term.toLowerCase().includes(ql) || g.def.toLowerCase().includes(ql)) {
     out.push({ kind: "glossary", domainId: e.id, domainName: e.name, hue: e.hue, title: g.term, snippet: g.def });
    }
   });
  }
  return out.slice(0, 80);
 }, [debouncedQ, loaded]);

 const grouped = useMemo(() => ({
  domains: hits.filter((h) => h.kind === "domain"),
  concepts: hits.filter((h) => h.kind === "concept"),
  glossary: hits.filter((h) => h.kind === "glossary")
 }), [hits]);

 const QUICK = ["psychology", "compounding", "anchoring", "AI", "marketing", "calibration"];

 return (
  <div className="space-y-5 max-w-3xl mx-auto">
   {/* Page hero */}
   <header className="space-y-2">
    <div className="flex items-center gap-2">
     <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
      <Search size={18} />
     </span>
     <p className="dim text-xs uppercase tracking-widest">Find anything</p>
    </div>
    <h1 className="font-display text-3xl sm:text-4xl">Search</h1>
    <p className="dim">Across domains, concepts, and glossary terms. Type to filter live.</p>
   </header>

   {/* Big search input */}
   <div className="panel flex items-center gap-3 px-4 py-3" style={{ borderColor: q ? "var(--hue)" : "var(--line)" }}>
    <Search size={18} className="dim" />
    <input
     autoFocus
     value={q}
     onChange={(e) => setQ(e.target.value)}
     placeholder="Try compounding, anchoring, hallucination, BATNA..."
     className="bg-transparent outline-none flex-1 text-base"
     aria-label="Search query"
    />
    {q && (
     <button className="chip" onClick={() => setQ("")} aria-label="Clear search">Clear</button>
    )}
    <kbd className="hidden sm:inline-flex chip font-mono text-[10px]">esc</kbd>
   </div>

   {/* Empty state */}
   {!q.trim() && (
    <section className="space-y-3">
     <div className="panel hero-glow p-5 sm:p-6 flex items-start gap-3">
      <Sparkles size={18} className="hue mt-1 shrink-0" />
      <div>
       <p className="font-medium">Looking for a term, concept, or whole domain?</p>
       <p className="dim text-sm mt-1">Start typing above. Domain names show up first, then concepts (after each domain loads on first non-empty query), then glossary.</p>
      </div>
     </div>
     {history.length > 0 && (
      <div>
       <div className="flex items-center justify-between mb-2">
        <p className="dim text-xs uppercase tracking-widest">Recent searches</p>
        <button className="dim text-xs hover:underline" onClick={clearHistory}>Clear</button>
       </div>
       <ul className="flex flex-wrap gap-2">
        {history.map((t) => (
         <li key={t}><button className="chip" onClick={() => setQ(t)}>{t}</button></li>
        ))}
       </ul>
      </div>
     )}
     <div>
      <p className="dim text-xs uppercase tracking-widest mb-2">Try one of these</p>
      <ul className="flex flex-wrap gap-2">
       {QUICK.map((t) => (
        <li key={t}><button className="chip" onClick={() => setQ(t)}>{t}</button></li>
       ))}
      </ul>
     </div>
    </section>
   )}

   {/* No matches */}
   {q.trim() && hits.length === 0 && (
    <div className="panel p-5 text-sm dim">
     No matches yet. Concept search needs each domain to load once; try again in a moment, or check spelling.
    </div>
   )}

   {/* Results */}
   {grouped.domains.length > 0 && (
    <section className="space-y-2">
     <h2 className="text-xs uppercase tracking-widest dim flex items-center gap-2"><Layers size={12} /> Domains ({grouped.domains.length})</h2>
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {grouped.domains.map((h, i) => (
       <li key={i}>
        <Link href={`/domain/${h.domainId}`} className="panel lift block p-3" style={{ borderColor: h.hue }}>
         <p className="font-medium">{highlight(h.title, q)}</p>
         <p className="dim text-sm">{highlight(h.snippet, q)}</p>
         <p className="text-xs mt-1 inline-flex items-center gap-1" style={{ color: h.hue }}>Open <ArrowRight size={12} /></p>
        </Link>
       </li>
      ))}
     </ul>
    </section>
   )}

   {grouped.concepts.length > 0 && (
    <section className="space-y-2">
     <h2 className="text-xs uppercase tracking-widest dim flex items-center gap-2"><BookOpen size={12} /> Concepts ({grouped.concepts.length})</h2>
     <ul className="space-y-2">
      {grouped.concepts.map((h, i) => (
       <li key={i}>
        <Link href={conceptPath(h.domainId, h.conceptIndex)} className="panel lift block p-3">
         <p className="font-medium">{highlight(h.title, q)}</p>
         <p className="dim text-xs">in {h.domainName}</p>
         <p className="text-sm mt-1">{highlight(h.snippet, q)}</p>
        </Link>
       </li>
      ))}
     </ul>
    </section>
   )}

   {grouped.glossary.length > 0 && (
    <section className="space-y-2">
     <h2 className="text-xs uppercase tracking-widest dim flex items-center gap-2"><FileText size={12} /> Glossary ({grouped.glossary.length})</h2>
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {grouped.glossary.map((h, i) => (
       <li key={i}>
        <Link href={tabPath(h.domainId, "concepts")} className="panel lift block p-3">
         <p className="font-medium">{highlight(h.title, q)}</p>
         <p className="dim text-xs">in {h.domainName}</p>
         <p className="text-sm mt-1">{highlight(h.snippet, q)}</p>
        </Link>
       </li>
      ))}
     </ul>
    </section>
   )}
  </div>
 );
}
