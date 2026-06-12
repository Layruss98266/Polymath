"use client";
import { useMemo, useState } from "react";
import { Search, Dice5 } from "lucide-react";
import Link from "next/link";
import { DOMAIN_INDEX } from "@/data/domains";
import { DomainCard } from "./DomainCard";

const CATEGORIES = Array.from(new Set(DOMAIN_INDEX.map((d) => d.category)));

export function DomainGrid() {
 const [q, setQ] = useState("");
 const [cat, setCat] = useState<string | "all">("all");

 const list = useMemo(() => {
  const ql = q.trim().toLowerCase();
  return DOMAIN_INDEX.filter((d) => {
   if (cat !== "all" && d.category !== cat) return false;
   if (!ql) return true;
   return (
    d.name.toLowerCase().includes(ql) ||
    d.tagline.toLowerCase().includes(ql) ||
    d.category.toLowerCase().includes(ql)
   );
  });
 }, [q, cat]);

 const random = () => {
  const d = DOMAIN_INDEX[Math.floor(Math.random() * DOMAIN_INDEX.length)];
  window.location.href = `/domain/${d.id}`;
 };

 return (
  <section className="space-y-4">
   <div className="flex flex-wrap items-center gap-2">
    <div className="panel flex items-center gap-2 px-3 py-2 flex-1 min-w-[180px]">
     <Search size={14} className="dim" />
     <input
      value={q}
      onChange={(e) => setQ(e.target.value)}
      placeholder="Search domains, concepts, terms…"
      className="bg-transparent outline-none flex-1 text-sm"
      aria-label="Search"
     />
    </div>
    <button className="btn" onClick={random}><Dice5 size={14} /> Surprise me</button>
   </div>

   <div className="flex flex-wrap gap-2">
    <button className={`chip ${cat === "all" ? "ring-1" : ""}`} onClick={() => setCat("all")}>All</button>
    {CATEGORIES.map((c) => (
     <button key={c} className={`chip ${cat === c ? "ring-1" : ""}`} onClick={() => setCat(c)}>{c}</button>
    ))}
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {list.map((d) => <DomainCard key={d.id} d={d} />)}
    {list.length === 0 && <p className="dim">No matches , try a different filter.</p>}
   </div>

   <p className="dim text-xs">
    Showing {list.length} domains. More coming as the catalogue (§3) grows past the Core 15.
    See the <Link href="/dashboard" className="hue underline">dashboard</Link> for mastery.
   </p>
  </section>
 );
}
