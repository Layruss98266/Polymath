"use client";
import { useMemo, useState } from "react";
import { Search, Dice5, Sparkles, Grid3x3, List as ListIcon } from "lucide-react";
import Link from "next/link";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";
import { DomainCard } from "./DomainCard";

const CATEGORIES = Array.from(new Set(DOMAIN_INDEX.map((d) => d.category)));
// Featured spotlight rotates by date so the page feels fresh.
const FEATURED_POOL = ["psychology", "personal_finance", "ai_ml", "negotiation", "mental_models", "learning"];

type View = "grid" | "list";

function pickFeatured(): string {
 if (typeof window === "undefined") return FEATURED_POOL[0];
 const day = new Date().toISOString().slice(0, 10);
 let h = 0; for (let i = 0; i < day.length; i++) h = ((h << 5) - h + day.charCodeAt(i)) | 0;
 return FEATURED_POOL[Math.abs(h) % FEATURED_POOL.length];
}

export function DomainGrid() {
 const [q, setQ] = useState("");
 const [cat, setCat] = useState<string | "all">("all");
 const [view, setView] = useState<View>("grid");
 const s = useUserState();

 const featuredId = useMemo(() => pickFeatured(), []);
 const featured = DOMAIN_INDEX.find((d) => d.id === featuredId);

 const list = useMemo(() => {
  const ql = q.trim().toLowerCase();
  return DOMAIN_INDEX.filter((d) => {
   if (cat !== "all" && d.category !== cat) return false;
   if (!ql) return true;
   return d.name.toLowerCase().includes(ql) || d.tagline.toLowerCase().includes(ql) || d.category.toLowerCase().includes(ql);
  });
 }, [q, cat]);

 const random = () => {
  const d = DOMAIN_INDEX[Math.floor(Math.random() * DOMAIN_INDEX.length)];
  window.location.href = `/domain/${d.id}`;
 };

 const catCount = (c: string) => DOMAIN_INDEX.filter((d) => d.category === c).length;
 const touched = s.startedDomains.length;

 return (
  <section className="space-y-5">
   {/* Section header */}
   <header className="flex items-end justify-between gap-3 flex-wrap">
    <div>
     <p className="dim text-xs uppercase tracking-widest">The catalogue</p>
     <h2 className="font-display text-2xl sm:text-3xl mt-1">{DOMAIN_INDEX.length} domains. Pick where to start.</h2>
    </div>
    <div className="flex items-center gap-2 text-xs dim">
     <span>{touched} of {DOMAIN_INDEX.length} touched</span>
    </div>
   </header>

   {/* Featured spotlight + search column */}
   {featured && (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-3">
     <Link
      href={`/domain/${featured.id}`}
      className="panel lift relative overflow-hidden p-5 sm:p-6 block"
      style={{ ["--hue" as any]: featured.hue, borderColor: `${featured.hue}55` }}
     >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1" style={{ background: featured.hue }} />
      <span className="chip inline-flex" style={{ color: featured.hue, borderColor: `${featured.hue}55` }}>
       <Sparkles size={10} /> Featured today
      </span>
      <div className="mt-4 flex items-start gap-4">
       <span aria-hidden="true" className="grid place-items-center w-16 h-16 rounded-2xl text-4xl shrink-0" style={{ background: `${featured.hue}1f`, border: `1px solid ${featured.hue}3a`, color: featured.hue }}>
        {featured.icon}
       </span>
       <div className="flex-1 min-w-0">
        <p className="dim text-[10px] uppercase tracking-widest">{featured.category}</p>
        <h3 className="font-display text-xl sm:text-2xl leading-tight">{featured.name}</h3>
        <p className="dim text-sm mt-1">{featured.tagline}</p>
       </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
       <span className="chip">Core 15</span>
       <span className="chip">Rotates daily</span>
       <span className="chip">Open in two clicks</span>
      </div>
     </Link>

     {/* Search + quick actions */}
     <div className="space-y-3">
      <div className="panel flex items-center gap-2 px-3 py-2" style={{ borderColor: q ? "var(--hue)" : "var(--line)" }}>
       <Search size={14} className="dim" />
       <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter domains..."
        className="bg-transparent outline-none flex-1 text-sm"
        aria-label="Filter domains"
       />
       {q && <button className="chip" onClick={() => setQ("")}>Clear</button>}
      </div>
      <div className="grid grid-cols-2 gap-2">
       <button className="panel lift p-3 text-left" onClick={random}>
        <Dice5 size={16} className="hue" />
        <p className="font-medium text-sm mt-1">Surprise me</p>
        <p className="dim text-xs">Open a random domain</p>
       </button>
       <Link href="/skill-map" className="panel lift p-3 text-left block">
        <Grid3x3 size={16} className="hue" />
        <p className="font-medium text-sm mt-1">Skill Map</p>
        <p className="dim text-xs">All categories at a glance</p>
       </Link>
      </div>
     </div>
    </div>
   )}

   {/* Category pills + view toggle */}
   <div className="flex items-center gap-2 flex-wrap">
    <button
     className={`chip ${cat === "all" ? "ring-1" : ""}`}
     style={cat === "all" ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
     onClick={() => setCat("all")}
    >
     All <span className="dim ml-1">{DOMAIN_INDEX.length}</span>
    </button>
    {CATEGORIES.map((c) => (
     <button
      key={c}
      className={`chip ${cat === c ? "ring-1" : ""}`}
      style={cat === c ? { borderColor: "var(--hue)", color: "var(--hue)" } : {}}
      onClick={() => setCat(c)}
     >
      {c} <span className="dim ml-1">{catCount(c)}</span>
     </button>
    ))}
    <div className="ml-auto inline-flex panel p-0.5 text-xs">
     <button
      aria-pressed={view === "grid"}
      onClick={() => setView("grid")}
      className="px-2 py-1 rounded-md inline-flex items-center gap-1"
      style={view === "grid" ? { background: "rgba(255,255,255,0.06)", color: "var(--hue)" } : { color: "var(--dim)" }}
      aria-label="Grid view"
     ><Grid3x3 size={12} /></button>
     <button
      aria-pressed={view === "list"}
      onClick={() => setView("list")}
      className="px-2 py-1 rounded-md inline-flex items-center gap-1"
      style={view === "list" ? { background: "rgba(255,255,255,0.06)", color: "var(--hue)" } : { color: "var(--dim)" }}
      aria-label="List view"
     ><ListIcon size={12} /></button>
    </div>
   </div>

   {/* Result count */}
   <p className="dim text-xs">Showing {list.length} of {DOMAIN_INDEX.length}</p>

   {/* Grid or list */}
   {list.length === 0 ? (
    <p className="dim text-sm panel p-4">No matches. Try a different word or pick another category.</p>
   ) : view === "grid" ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
     {list.map((d) => (
      <DomainCard key={d.id} d={d} featured={d.id === featuredId} />
     ))}
    </div>
   ) : (
    <ul className="space-y-2">
     {list.map((d) => (
      <li key={d.id}>
       <Link
        href={`/domain/${d.id}`}
        className="panel lift p-3 sm:p-4 flex items-center gap-3"
        style={{ ["--hue" as any]: d.hue }}
       >
        <span aria-hidden="true" className="grid place-items-center w-11 h-11 rounded-xl text-2xl shrink-0" style={{ background: `${d.hue}1f`, border: `1px solid ${d.hue}3a`, color: d.hue }}>
         {d.icon}
        </span>
        <span className="flex-1 min-w-0">
         <span className="block text-sm font-medium truncate">{d.name}</span>
         <span className="dim text-xs truncate block">{d.tagline}</span>
        </span>
        <span className="chip dim hidden sm:inline-flex">{d.category}</span>
       </Link>
      </li>
     ))}
    </ul>
   )}

   <p className="dim text-xs">More categories listed in the spec arrive in later phases. The Core 15 are fully authored today.</p>
  </section>
 );
}
