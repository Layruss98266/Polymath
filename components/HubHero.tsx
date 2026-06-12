"use client";
import { useState } from "react";
import { Search, Sparkles, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";
import { DOMAIN_INDEX } from "@/data/domains";
import { useUserState } from "@/lib/state";

// Hub hero. Carries the brand promise: 15 domains, two minutes a day,
// honest. Type scale is the load-bearing element. Search sits below the H1
// as the primary action; the eyebrow + tagline + stats are quiet support.

export function HubHero({ onSearch }: { onSearch?: (q: string) => void }) {
 const [q, setQ] = useState("");
 const s = useUserState();
 const touched = s.startedDomains.length;
 const total = DOMAIN_INDEX.length;

 // 6 quick-jump domains across categories.
 const quickJump = ["psychology", "ai_ml", "personal_finance", "negotiation", "communication", "mental_models"]
  .map((id) => DOMAIN_INDEX.find((d) => d.id === id))
  .filter(Boolean) as typeof DOMAIN_INDEX;

 const SUB_TAGLINES: Record<string, string> = {
  psychology: "why people act",
  ai_ml: "what LLMs really do",
  personal_finance: "save, invest, retire calmly",
  negotiation: "claim and create value",
  communication: "be heard, be clear",
  mental_models: "how smart people think",
  marketing: "attention, persuasion, distribution"
 };

 return (
  <section className="relative">
   <div className="panel hero-glow p-6 sm:p-10 lg:p-14 relative overflow-hidden">
    {/* Eyebrow */}
    <div className="inline-flex items-center gap-2 chip mb-6">
     <Sparkles size={12} className="hue" />
     <span>15 core domains, honest daily learning loop</span>
    </div>

    {/* Big H1, tighter tracking, larger top end */}
    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
     The hub for <span className="hue">learning anything</span>, two minutes a day.
    </h1>

    <p className="dim text-base sm:text-lg max-w-2xl mt-5 leading-relaxed">
     Real frameworks. Ranked resources. Real-world missions. Spaced repetition. No login, no dark patterns. Pick a domain and start.
    </p>

    {/* Search row. Primary action sits inside the input as a filled button
        so a first-time visitor sees an obvious next click. The input itself
        is the secondary action: typing filters the catalogue below. */}
    <form
     role="search"
     className="mt-8 flex flex-col sm:flex-row items-stretch gap-2 max-w-2xl"
     onSubmit={(e) => { e.preventDefault(); onSearch?.(q); }}
    >
     <div
      className="panel flex items-center gap-3 px-4 py-3 flex-1 min-h-[52px]"
      style={{ borderColor: q ? "var(--hue)" : "var(--line)" }}
     >
      <label htmlFor="hub-search" className="sr-only">Filter the catalogue by name, tagline, or category</label>
      <Search size={18} className="dim shrink-0" aria-hidden="true" />
      <input
       id="hub-search"
       type="search"
       value={q}
       onChange={(e) => { setQ(e.target.value); onSearch?.(e.target.value); }}
       placeholder="Find a domain by name, tagline, or category"
       className="bg-transparent outline-none flex-1 text-sm sm:text-base"
       autoComplete="off"
       spellCheck={false}
      />
      {q && (
       <button
        type="button"
        className="chip min-h-[32px]"
        onClick={() => { setQ(""); onSearch?.(""); }}
        aria-label="Clear filter"
       >Clear</button>
      )}
     </div>
     <a
      href="#all-domains"
      className="btn min-h-[52px] px-5 justify-center text-sm font-medium"
      style={{ background: "var(--hue)", color: "var(--bg)", borderColor: "var(--hue)" }}
     >
      <Layers size={16} aria-hidden="true" /> Browse {total} domains
     </a>
    </form>

    {/* Stats line. Quiet, single row, no inflated emphasis. */}
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-xs sm:text-sm dim">
     <span className="inline-flex items-center gap-1.5"><Layers size={13} className="hue" aria-hidden="true" /> {total} domains</span>
     <span aria-hidden="true">·</span>
     <span>{touched > 0 ? `${touched} touched by you` : "Start anywhere"}</span>
     <span aria-hidden="true">·</span>
     <span>Daily 5-min reviews</span>
     <span aria-hidden="true">·</span>
     <span>Works offline</span>
     <span aria-hidden="true">·</span>
     <span>India context, localised</span>
    </div>

    {/* Quick-jump pills. Slightly larger touch target on mobile. */}
    <div className="mt-8">
     <p className="dim text-[11px] uppercase tracking-widest mb-3">Quick jump</p>
     <ul className="flex flex-wrap gap-2">
      {quickJump.map((d) => {
       const sub = SUB_TAGLINES[d.id];
       const tip = sub ? `${d.name}: ${sub}` : d.name;
       return (
        <li key={d.id}>
         <Link
          href={`/domain/${d.id}`}
          className="chip min-h-[36px] px-3"
          title={tip}
         >
          <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: d.hue }} />
          <span aria-hidden="true">{d.icon}</span>
          <span>{d.name}</span>
         </Link>
        </li>
       );
      })}
      <li>
       <Link href="/search" className="chip min-h-[36px] px-3 dim" title="Global search across concepts and glossary">
        Global search <ArrowRight size={11} aria-hidden="true" />
       </Link>
      </li>
     </ul>
    </div>
   </div>
  </section>
 );
}
