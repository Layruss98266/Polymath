import Link from "next/link";
import type { Domain } from "@/lib/types";
import { getChangelog } from "@/data/changelog";
import { findEntry } from "@/data/domains";

export function BasicsTab({ d }: { d: Domain }) {
 const changes = getChangelog(d.id);
 const firstConcept = d.concepts[0];
 return (
  <div className="space-y-4">
   <div className="panel p-5">
    <h2 className="font-display text-xl mb-2">What is {d.name}?</h2>
    <p>{d.basics}</p>
    {firstConcept && (
     <Link
      href={`/domain/${d.id}/concepts/0`}
      className="btn mt-4 inline-flex"
      style={{ background: "var(--hue)", color: "#0b0d1a", borderColor: "var(--hue)" }}
     >
      Start with concept #1: {firstConcept.t}
     </Link>
    )}
   </div>
   <div className="panel p-5">
    <h3 className="font-display text-lg mb-2">Why it matters</h3>
    <ul className="space-y-2 list-disc pl-5">
     {d.whyItMatters.map((w, i) => <li key={i}>{w}</li>)}
    </ul>
   </div>
   <div className="panel p-5">
    <h3 className="font-display text-lg mb-2">A vivid example</h3>
    <p>{d.realWorldExample}</p>
   </div>
   <div className="panel p-5">
    <p className="text-xs uppercase tracking-widest dim mb-2">Cross-domain links</p>
    <ul className="space-y-1">
     {d.synthesis.map((s, i) => {
      const target = findEntry(s.linksTo);
      return (
       <li key={i} className="text-sm">
        <span className="hue font-medium">{s.concept}</span> {" -> "} <Link href={`/domain/${s.linksTo}`} className="underline">{target?.name ?? s.linksTo}</Link> <span className="dim">. {s.note}</span>
       </li>
      );
     })}
    </ul>
   </div>

   {d.subdomains && d.subdomains.length > 0 && (
    <div className="panel p-5">
     <p className="text-xs uppercase tracking-widest dim mb-2">Sub-domains in this area</p>
     <div className="flex flex-wrap gap-2">
      {d.subdomains.map((sd) => <span key={sd.id} className="chip">{sd.name}</span>)}
     </div>
    </div>
   )}

   {changes.length > 0 && (
    <details className="panel p-5">
     <summary className="cursor-pointer text-sm dim">Content changelog</summary>
     <ul className="mt-3 space-y-2 text-sm">
      {changes.map((c, i) => (
       <li key={i} className="flex gap-3">
        <span className="dim shrink-0">{c.date}</span>
        <span>{c.note}</span>
       </li>
      ))}
     </ul>
    </details>
   )}
  </div>
 );
}
