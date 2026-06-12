import { DOMAIN_INDEX } from "@/data/domains";
import { QUOTES } from "@/data/quotes";
import { CONCEPT_COUNT_TOTAL } from "@/data/conceptStats";

// Tiny hero strip surfacing the three numbers that say "this is real"
// without bragging. Server-renderable: no client state. Reads three static
// imports so the stat always matches reality.
export function HomeStats() {
 const domainCount = DOMAIN_INDEX.length;
 const quoteCount = QUOTES.length;
 return (
  <ul
   className="flex items-stretch gap-2 sm:gap-3 flex-wrap"
   aria-label="At a glance"
  >
   <Stat label="domains" value={String(domainCount)} sub="catalogued, India aware" />
   <Stat label="concepts" value={`${CONCEPT_COUNT_TOTAL}+`} sub="enriched + cross linked" />
   <Stat label="daily quotes" value={String(quoteCount)} sub="real, attributed, no fakes" />
   <Stat label="login required" value="0" sub="all state is in your browser" />
  </ul>
 );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
 return (
  <li className="panel px-3 py-2 flex-1 min-w-[140px]">
   <p className="font-display text-xl sm:text-2xl leading-none hue">{value}</p>
   <p className="dim text-[10px] uppercase tracking-widest mt-1">{label}</p>
   <p className="dim text-[11px] mt-1 leading-tight">{sub}</p>
  </li>
 );
}
