"use client";
import type { Domain } from "@/lib/types";
import { Printer } from "lucide-react";

export function CheatsheetTab({ d }: { d: Domain }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="font-display text-xl flex-1">{d.name} — one-screen cheat-sheet</h2>
        <button className="btn" onClick={() => window.print()}><Printer size={14} /> Print</button>
      </div>
      <ul className="panel p-5 space-y-2 list-disc pl-7">
        {d.cheatsheet.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
      <div className="panel p-5">
        <p className="text-xs uppercase tracking-widest dim mb-2">Glossary</p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {d.glossary.map((g, i) => (
            <div key={i}>
              <dt className="font-medium">{g.term}</dt>
              <dd className="dim">{g.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
