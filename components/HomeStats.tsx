import { DOMAIN_INDEX } from "@/data/domains";
import { QUOTES } from "@/data/quotes";
import { CONCEPT_COUNT_TOTAL } from "@/data/conceptStats";

// Quiet "this is real" strip for first-time visitors. Server-renderable.
// Numbers sit at equal weight: no hue accent on the value, hue lives on the
// small bar. Reads as confidence, not as a sales pitch.
export function HomeStats() {
 const domainCount = DOMAIN_INDEX.length;
 const quoteCount = QUOTES.length;
 return (
  <ul
   className="panel p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
   aria-label="At a glance"
  >
   <Stat value={String(domainCount)} label="Domains" sub="catalogued, India aware" />
   <Stat value={`${CONCEPT_COUNT_TOTAL}+`} label="Concepts" sub="enriched, cross-linked" />
   <Stat value={String(quoteCount)} label="Daily quotes" sub="real, attributed" />
   <Stat value="0" label="Login required" sub="state lives in your browser" />
  </ul>
 );
}

function Stat({ value, label, sub }: { value: string; label: string; sub: string }) {
 return (
  <li className="flex flex-col gap-1">
   <div className="flex items-center gap-2">
    <span aria-hidden="true" className="w-1 h-5 rounded-full" style={{ background: "var(--hue)" }} />
    <p className="font-display text-2xl sm:text-3xl leading-none">{value}</p>
   </div>
   <p className="text-[11px] uppercase tracking-widest dim mt-1">{label}</p>
   <p className="dim text-xs leading-tight">{sub}</p>
  </li>
 );
}
