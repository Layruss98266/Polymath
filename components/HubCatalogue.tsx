"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Dice5, Grid3x3, List as ListIcon, ArrowRight, ArrowUpRight, Sparkles, X } from "lucide-react";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";
import { DomainCard } from "./DomainCard";

const CATEGORIES = Array.from(new Set(DOMAIN_INDEX.map((d) => d.category)));
const FEATURED_POOL = ["psychology", "personal_finance", "ai_ml", "negotiation", "mental_models", "learning"];

function pickFeatured() {
 if (typeof window === "undefined") return FEATURED_POOL[0];
 // Local-time day so the rotation flips at the user's midnight, not UTC.
 const d = new Date();
 const day = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
 let h = 0; for (let i = 0; i < day.length; i++) h = ((h << 5) - h + day.charCodeAt(i)) | 0;
 return FEATURED_POOL[Math.abs(h) % FEATURED_POOL.length];
}

export function HubCatalogue({ q, setQ }: { q: string; setQ: (v: string) => void }) {
 const [cat, setCat] = useState<string | "all">("all");
 const [view, setView] = useState<"grid" | "list">("grid");
 const s = useUserState();
 const featuredId = useMemo(() => pickFeatured(), []);
 const featured = DOMAIN_INDEX.find((d) => d.id === featuredId);

 const filtered = useMemo(() => {
  const ql = q.trim().toLowerCase();
  return DOMAIN_INDEX.filter((d) => {
   if (cat !== "all" && d.category !== cat) return false;
   if (!ql) return true;
   return d.name.toLowerCase().includes(ql) || d.tagline.toLowerCase().includes(ql) || d.category.toLowerCase().includes(ql);
  });
 }, [q, cat]);

 const grouped = useMemo(() => {
  const m: Record<string, typeof DOMAIN_INDEX> = {};
  for (const d of filtered) (m[d.category] ??= []).push(d);
  return Object.entries(m);
 }, [filtered]);

 const random = () => {
  const d = DOMAIN_INDEX[Math.floor(Math.random() * DOMAIN_INDEX.length)];
  window.location.href = `/domain/${d.id}`;
 };

 const catCount = (c: string) => DOMAIN_INDEX.filter((d) => d.category === c).length;
 const isFiltered = q.trim().length > 0 || cat !== "all";
 const showFeaturedBand = featured && cat === "all" && !q.trim();

 return (
  <section className="space-y-6" aria-label="Domain catalogue">
   {/* Section header. Larger type because this is the centerpiece. */}
   <header className="flex items-end justify-between gap-3 flex-wrap">
    <div>
     <p className="dim text-[11px] uppercase tracking-widest flex items-center gap-1.5">
      <Grid3x3 size={12} className="hue" aria-hidden="true" /> The catalogue
     </p>
     <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl mt-1.5 tracking-tight">
      {DOMAIN_INDEX.length} domains. Pick where to start.
     </h2>
    </div>
    <div className="inline-flex panel p-0.5 text-xs" role="group" aria-label="View mode">
     <button
      aria-pressed={view === "grid"}
      onClick={() => setView("grid")}
      className="px-3 py-2 rounded-md inline-flex items-center gap-1 min-h-[36px]"
      style={view === "grid" ? { background: "rgba(127,127,127,0.12)", color: "var(--hue)" } : { color: "var(--dim)" }}
      aria-label="Grid view"
     ><Grid3x3 size={14} aria-hidden="true" /></button>
     <button
      aria-pressed={view === "list"}
      onClick={() => setView("list")}
      className="px-3 py-2 rounded-md inline-flex items-center gap-1 min-h-[36px]"
      style={view === "list" ? { background: "rgba(127,127,127,0.12)", color: "var(--hue)" } : { color: "var(--dim)" }}
      aria-label="List view"
     ><ListIcon size={14} aria-hidden="true" /></button>
    </div>
   </header>

   {/* Featured spotlight + quick actions. Only when no filter is on. */}
   {showFeaturedBand && featured && (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3">
     <Link
      href={`/domain/${featured.id}`}
      className="panel lift relative overflow-hidden p-5 sm:p-6 block group"
      style={{ ["--hue" as any]: featured.hue, borderColor: `${featured.hue}55` }}
     >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: featured.hue }} />
      <span
       className="chip inline-flex"
       style={{ color: featured.hue, borderColor: `${featured.hue}55` }}
      >
       <Sparkles size={10} aria-hidden="true" /> Featured today
      </span>
      <div className="mt-4 flex items-start gap-4">
       <span
        aria-hidden="true"
        className="grid place-items-center w-16 h-16 rounded-2xl text-4xl shrink-0"
        style={{ background: `${featured.hue}1f`, border: `1px solid ${featured.hue}3a`, color: featured.hue }}
       >
        {featured.icon}
       </span>
       <div className="flex-1 min-w-0">
        <p className="dim text-[10px] uppercase tracking-widest">{featured.category}</p>
        <h3 className="font-display text-xl sm:text-2xl leading-tight group-hover:underline">{featured.name}</h3>
        <p className="dim text-sm mt-1">{featured.tagline}</p>
       </div>
       <ArrowUpRight size={18} className="dim shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs">
       <span className="chip">Open in two clicks</span>
       <span
        className="ml-auto inline-flex items-center gap-1 font-medium"
        style={{ color: featured.hue }}
       >Start <ArrowRight size={12} aria-hidden="true" /></span>
      </div>
     </Link>

     <div className="grid grid-cols-2 gap-2">
      <button className="panel lift p-4 text-left min-h-[88px]" onClick={random}>
       <Dice5 size={18} className="hue" aria-hidden="true" />
       <p className="font-medium text-sm mt-2">Surprise me</p>
       <p className="dim text-xs mt-0.5">Open a random domain</p>
      </button>
      <Link href="/skill-map" className="panel lift p-4 text-left block min-h-[88px]">
       <Grid3x3 size={18} className="hue" aria-hidden="true" />
       <p className="font-medium text-sm mt-2">Skill map</p>
       <p className="dim text-xs mt-0.5">All categories at a glance</p>
      </Link>
      <Link href="/review" className="panel lift p-4 text-left block min-h-[88px]">
       <Sparkles size={18} className="hue" aria-hidden="true" />
       <p className="font-medium text-sm mt-2">Review</p>
       <p className="dim text-xs mt-0.5">Due flashcards across started domains</p>
      </Link>
      <Link href="/my-list" className="panel lift p-4 text-left block min-h-[88px]">
       <ListIcon size={18} className="hue" aria-hidden="true" />
       <p className="font-medium text-sm mt-2">My list</p>
       <p className="dim text-xs mt-0.5">Paths, bookmarks, reflections</p>
      </Link>
     </div>
    </div>
   )}

   {/* Sticky filter bar. Stays available while scrolling through 15
       domains so the user can switch category without scrolling back up.
       sticky + top offset that clears the TopBar height. */}
   <div
    className="sticky top-[64px] z-10 -mx-1 px-1 py-2 backdrop-blur-sm"
    style={{ background: "color-mix(in oklab, var(--bg) 88%, transparent)" }}
   >
    <div className="flex items-center gap-2 flex-wrap text-xs">
     <button
      className="chip min-h-[36px]"
      style={cat === "all" ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
      aria-pressed={cat === "all"}
      onClick={() => setCat("all")}
     >
      All <span className="dim ml-1">{DOMAIN_INDEX.length}</span>
      {cat === "all" && <span className="sr-only">. Currently selected.</span>}
     </button>
     {CATEGORIES.map((c) => (
      <button
       key={c}
       className="chip min-h-[36px]"
       style={cat === c ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
       aria-pressed={cat === c}
       onClick={() => setCat(c)}
      >
       {c} <span className="dim ml-1">{catCount(c)}</span>
       {cat === c && <span className="sr-only">. Currently selected.</span>}
      </button>
     ))}
     {isFiltered && (
      <button
       className="chip ml-auto min-h-[36px]"
       onClick={() => { setQ(""); setCat("all"); }}
      >
       <X size={11} aria-hidden="true" /> Reset
      </button>
     )}
    </div>
    <p className="dim text-xs mt-2">
     Showing {filtered.length} of {DOMAIN_INDEX.length}
     {q.trim() ? <> for &quot;{q}&quot;</> : null}
     {cat !== "all" ? <> in {cat}</> : null}.
    </p>
   </div>

   {/* Empty state with actionable Reset */}
   {filtered.length === 0 && (
    <div className="panel p-8 text-center">
     <p className="font-display text-lg">No matches.</p>
     <p className="dim text-sm mt-1">Try a different word, or clear the filter.</p>
     <button
      className="btn mt-4 min-h-[44px]"
      onClick={() => { setQ(""); setCat("all"); }}
      style={{ background: "var(--hue)", color: "var(--bg)", borderColor: "var(--hue)" }}
     >
      <X size={14} aria-hidden="true" /> Reset filter
     </button>
    </div>
   )}

   {/* Grouped grid (default) or flat list */}
   {filtered.length > 0 && view === "grid" && (
    <div className="space-y-8">
     {grouped.map(([catName, items]) => (
      <section key={catName} className="space-y-3">
       <header className="flex items-baseline justify-between gap-2 pb-2 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="flex items-baseline gap-3">
         <span aria-hidden="true" className="inline-block w-1 h-4 rounded-full" style={{ background: items[0]?.hue ?? "var(--hue)" }} />
         <h3 className="font-display text-lg sm:text-xl">{catName}</h3>
        </div>
        <span className="dim text-xs">{items.length} domain{items.length === 1 ? "" : "s"}</span>
       </header>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((d) => (
         <DomainCard key={d.id} d={d} featured={d.id === featuredId} />
        ))}
       </div>
      </section>
     ))}
    </div>
   )}

   {filtered.length > 0 && view === "list" && (
    <ul className="space-y-2">
     {filtered.map((d) => (
      <li key={d.id}>
       <Link
        href={`/domain/${d.id}`}
        className="panel lift p-3 sm:p-4 flex items-center gap-3 min-h-[68px]"
        style={{ ["--hue" as any]: d.hue }}
       >
        <span
         aria-hidden="true"
         className="grid place-items-center w-11 h-11 rounded-xl text-2xl shrink-0"
         style={{ background: `${d.hue}1f`, border: `1px solid ${d.hue}3a`, color: d.hue }}
        >
         {d.icon}
        </span>
        <span className="flex-1 min-w-0">
         <span className="block text-sm font-medium truncate">{d.name}</span>
         <span className="dim text-xs truncate block">{d.tagline}</span>
        </span>
        <span className="chip dim hidden sm:inline-flex">{d.category}</span>
        <ArrowUpRight size={14} className="dim shrink-0" aria-hidden="true" />
       </Link>
      </li>
     ))}
    </ul>
   )}
  </section>
 );
}
