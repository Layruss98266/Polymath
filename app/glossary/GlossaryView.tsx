"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "./page";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getFirstLetter(term: string): string {
 const ch = term.trim().charAt(0).toUpperCase();
 return /[A-Z]/.test(ch) ? ch : "#";
}

type Props = {
 terms: GlossaryTerm[];
};

export function GlossaryView({ terms }: Props) {
 const [activeLetter, setActiveLetter] = useState<string | null>(null);

 const availableLetters = useMemo(
  () => new Set(terms.map((t) => getFirstLetter(t.term))),
  [terms]
 );

 const filtered = useMemo(
  () => activeLetter ? terms.filter((t) => getFirstLetter(t.term) === activeLetter) : terms,
  [terms, activeLetter]
 );

 // Group by first letter for display
 const grouped = useMemo(() => {
  const map = new Map<string, GlossaryTerm[]>();
  for (const term of filtered) {
   const letter = getFirstLetter(term.term);
   const arr = map.get(letter) ?? [];
   arr.push(term);
   map.set(letter, arr);
  }
  return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
 }, [filtered]);

 return (
  <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
   <header className="space-y-2">
    <h1 className="text-3xl font-bold">Glossary</h1>
    <p className="dim text-base">
     {terms.length} terms across {new Set(terms.map((t) => t.domainId)).size} domains.
     One-line definitions with links to the full concept.
    </p>
   </header>

   {/* A-Z filter */}
   <nav aria-label="Filter glossary by letter">
    <div className="flex flex-wrap gap-1.5">
     <button
      className="chip"
      aria-pressed={activeLetter === null}
      style={activeLetter === null ? { background: "var(--hue)", color: "#fff", borderColor: "var(--hue)" } : undefined}
      onClick={() => setActiveLetter(null)}
     >
      All
     </button>
     {ALPHABET.map((letter) => {
      const available = availableLetters.has(letter);
      const active = activeLetter === letter;
      return (
       <button
        key={letter}
        className="chip"
        aria-pressed={active}
        disabled={!available}
        style={
         active
          ? { background: "var(--hue)", color: "#fff", borderColor: "var(--hue)" }
          : !available
          ? { opacity: 0.3, cursor: "default" }
          : undefined
        }
        onClick={() => available ? setActiveLetter(letter) : undefined}
       >
        {letter}
       </button>
      );
     })}
    </div>
   </nav>

   {grouped.length === 0 && (
    <p className="dim text-sm">No terms found for this letter.</p>
   )}

   {grouped.map(([letter, letterTerms]) => (
    <section key={letter} aria-labelledby={`letter-${letter}`}>
     <h2
      id={`letter-${letter}`}
      className="text-xl font-bold mb-3 pb-1"
      style={{ borderBottom: "1px solid var(--line)" }}
     >
      {letter}
     </h2>
     <dl className="space-y-4">
      {letterTerms.map((item) => (
       <div key={`${item.domainId}-${item.conceptIndex}`} className="panel p-4 flex flex-col gap-1.5">
        <dt className="flex items-center gap-2 flex-wrap">
         <Link href={item.href} className="font-semibold hover:underline">
          {item.term}
         </Link>
         <span className="chip text-xs" aria-label={`From domain: ${item.domainName}`}>
          {item.domainIcon} {item.domainName}
         </span>
        </dt>
        <dd className="dim text-sm leading-relaxed">{item.short}</dd>
       </div>
      ))}
     </dl>
    </section>
   ))}
  </main>
 );
}
