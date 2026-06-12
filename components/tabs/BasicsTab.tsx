import Link from "next/link";
import type { Domain } from "@/lib/types";
import { getChangelog } from "@/data/changelog";
import { findEntry } from "@/data/domains";
import { StatusLegend } from "@/components/StatusBadge";
import { ArrowRight, BookOpen, Sparkles, Link2, Layers, History } from "lucide-react";

// Basics tab is the first thing a learner reads. Treat it like an essay:
// a single column capped at ~65ch for comfortable line-length, considered
// paragraph rhythm, and section headings that read as chapters not widgets.
// The status legend is moved into a small panel of its own so it feels
// native to the page, not a footnote bolted under the lede.

function SectionHeader({
 eyebrow,
 title,
 icon: Icon
}: {
 eyebrow: string;
 title: string;
 icon: typeof BookOpen;
}) {
 return (
  <header className="flex items-center gap-3 mb-3">
   <span
    aria-hidden="true"
    className="grid place-items-center w-8 h-8 rounded-lg shrink-0"
    style={{ background: "var(--hue-soft)", color: "var(--hue)" }}
   >
    <Icon size={15} />
   </span>
   <div className="min-w-0">
    <p className="text-[10px] uppercase tracking-[0.16em] font-medium" style={{ color: "var(--dim)" }}>{eyebrow}</p>
    <h3 className="font-display text-lg sm:text-xl leading-tight">{title}</h3>
   </div>
  </header>
 );
}

export function BasicsTab({ d }: { d: Domain }) {
 const changes = getChangelog(d.id);
 const firstConcept = d.concepts[0];
 return (
  <div className="space-y-6 max-w-[65ch]">

   {/* Lede: the chapter opener. Larger first paragraph, considered spacing. */}
   <section className="panel p-6 sm:p-7">
    <p className="text-[11px] uppercase tracking-[0.16em] font-medium mb-2" style={{ color: "var(--dim)" }}>
     What is {d.name}
    </p>
    <h2 className="font-display text-2xl sm:text-3xl leading-tight mb-4">In short</h2>
    <p className="text-base sm:text-lg leading-relaxed">{d.basics}</p>
    {d.deepBasics && (
     <details className="mt-5 group">
      <summary
       className="cursor-pointer inline-flex items-center gap-2 text-sm font-medium select-none"
       style={{ color: "var(--hue)" }}
      >
       <BookOpen size={14} />
       <span className="group-open:hidden">Read the long version</span>
       <span className="hidden group-open:inline">Hide the long version</span>
      </summary>
      <p className="text-base leading-relaxed mt-4 pt-4 border-t" style={{ borderColor: "var(--line)" }}>
       {d.deepBasics}
      </p>
     </details>
    )}
    {firstConcept && (
     <Link
      href={`/domain/${d.id}/concepts/0`}
      className="btn btn-primary mt-6 inline-flex"
     >
      Start with concept #1: {firstConcept.t} <ArrowRight size={14} />
     </Link>
    )}
   </section>

   {/* Evidence-strength legend. Small dedicated card so the three states feel
       like a real key, not a sentence tucked under the lede. */}
   <aside
    className="rounded-2xl p-4"
    style={{ background: "var(--hue-softer)", border: "1px solid var(--line)" }}
    aria-label="How to read concept status"
   >
    <p className="text-[10px] uppercase tracking-[0.16em] font-medium mb-2.5" style={{ color: "var(--dim)" }}>
     How to read concept status
    </p>
    <StatusLegend />
   </aside>

   {/* Why it matters: numbered list, generous spacing, no bullet dots. */}
   <section className="panel p-6 sm:p-7">
    <SectionHeader eyebrow="Why bother" title="Why it matters" icon={Sparkles} />
    <ol className="space-y-3 mt-2">
     {d.whyItMatters.map((w, i) => (
      <li key={i} className="flex gap-3 leading-relaxed">
       <span
        className="font-display tabular-nums shrink-0 text-sm pt-0.5"
        style={{ color: "var(--hue)", minWidth: "1.5rem" }}
       >
        {String(i + 1).padStart(2, "0")}
       </span>
       <span className="text-base">{w}</span>
      </li>
     ))}
    </ol>
   </section>

   {/* Vivid example */}
   <section className="panel p-6 sm:p-7">
    <SectionHeader eyebrow="Make it concrete" title="A vivid example" icon={BookOpen} />
    <p className="text-base leading-relaxed">{d.realWorldExample}</p>
   </section>

   {/* Cross-domain links */}
   <section className="panel p-6 sm:p-7">
    <SectionHeader eyebrow="Polymath thread" title="Links to other domains" icon={Link2} />
    <ul className="space-y-3 mt-1">
     {d.synthesis.map((s, i) => {
      const target = findEntry(s.linksTo);
      return (
       <li key={i} className="text-sm sm:text-base leading-relaxed">
        <span className="font-medium" style={{ color: "var(--hue)" }}>{s.concept}</span>
        <span aria-hidden="true" style={{ color: "var(--dim)", margin: "0 0.5rem" }}>→</span>
        <Link
         href={`/domain/${s.linksTo}`}
         className="underline underline-offset-2 font-medium"
        >
         {target?.name ?? s.linksTo}
        </Link>
        <span className="block mt-0.5 text-sm" style={{ color: "var(--dim)" }}>{s.note}</span>
       </li>
      );
     })}
    </ul>
   </section>

   {d.subdomains && d.subdomains.length > 0 && (
    <section className="panel p-6 sm:p-7">
     <SectionHeader eyebrow="Map" title="Sub-domains in this area" icon={Layers} />
     <div className="flex flex-wrap gap-2 mt-1">
      {d.subdomains.map((sd) => <span key={sd.id} className="chip">{sd.name}</span>)}
     </div>
    </section>
   )}

   {changes.length > 0 && (
    <details className="panel p-5">
     <summary
      className="cursor-pointer text-sm font-medium inline-flex items-center gap-2 select-none"
      style={{ color: "var(--dim)" }}
     >
      <History size={14} /> Content changelog
     </summary>
     <ul className="mt-4 space-y-2 text-sm">
      {changes.map((c, i) => (
       <li key={i} className="flex gap-3">
        <span className="shrink-0 tabular-nums" style={{ color: "var(--dim)" }}>{c.date}</span>
        <span>{c.note}</span>
       </li>
      ))}
     </ul>
    </details>
   )}
  </div>
 );
}
