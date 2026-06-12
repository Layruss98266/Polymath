"use client";
import { useState } from "react";
import { Search, Sparkles, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";

// Compact hub-style hero. No long marketing pages. Tagline + one-line description,
// large search input, quick stats, and a featured domain pill row. Built to put
// the catalogue front-and-center the way a tool-hub directory does.

export function HubHero({ onSearch }: { onSearch?: (q: string) => void }) {
 const [q, setQ] = useState("");
 const s = useUserState();
 const touched = s.startedDomains.length;
 const total = DOMAIN_INDEX.length;

 // 6 quick-jump domains across categories. Different from FEATURED so the
 // hero is its own row of options.
 const quickJump = ["psychology", "ai_ml", "personal_finance", "negotiation", "communication", "mental_models"]
  .map((id) => DOMAIN_INDEX.find((d) => d.id === id))
  .filter(Boolean) as typeof DOMAIN_INDEX;

 return (
  <section className="relative">
   <div className="panel hero-glow p-6 sm:p-10 lg:p-12 relative overflow-hidden">
    {/* Eyebrow */}
    <div className="inline-flex items-center gap-2 chip mb-5">
     <Sparkles size={12} className="hue" />
     <span>15 Core domains, honest daily learning loop.</span>
    </div>

    {/* Big H1 */}
    <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
     The hub for <span className="hue">learning anything</span>, two minutes a day.
    </h1>

    <p className="dim text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
     Real frameworks. Real ranked resources. Real-world missions. Spaced repetition. No login, no dark patterns. Pick a domain and start.
    </p>

    {/* Big search input */}
    <form
     role="search"
     className="mt-6 panel flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 max-w-2xl"
     style={{ borderColor: q ? "var(--hue)" : "var(--line)" }}
     onSubmit={(e) => { e.preventDefault(); onSearch?.(q); }}
    >
     <Search size={18} className="dim shrink-0" />
     <input
      value={q}
      onChange={(e) => { setQ(e.target.value); onSearch?.(e.target.value); }}
      placeholder="Find a domain by name, tagline, or category..."
      className="bg-transparent outline-none flex-1 text-sm sm:text-base"
      aria-label="Filter the catalogue"
     />
     {q && (
      <button type="button" className="chip" onClick={() => { setQ(""); onSearch?.(""); }}>Clear</button>
     )}
     <Link href="/search" className="hidden sm:inline-flex chip" title="Global search across concepts and glossary">Global <ArrowRight size={11} /></Link>
    </form>

    {/* Stats strip */}
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-xs sm:text-sm dim">
     <span className="inline-flex items-center gap-1.5"><Layers size={14} className="hue" /> {total} domains</span>
     <span>·</span>
     <span>{touched} touched by you</span>
     <span>·</span>
     <span>FSRS spaced repetition</span>
     <span>·</span>
     <span>Works offline</span>
    </div>

    {/* Quick-jump pills */}
    <div className="mt-5">
     <p className="dim text-[11px] uppercase tracking-widest mb-2">Quick jump</p>
     <ul className="flex flex-wrap gap-2">
      {quickJump.map((d) => (
       <li key={d.id}>
        <Link href={`/domain/${d.id}`} className="chip" style={{ borderColor: `${d.hue}55` }}>
         <span aria-hidden="true">{d.icon}</span>
         <span>{d.name}</span>
        </Link>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </section>
 );
}
