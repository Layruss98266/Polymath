"use client";
import { useState } from "react";
import type { Domain, Resource } from "@/lib/types";

export function ResourcesTab({ d }: { d: Domain }) {
  const [paid, setPaid] = useState(false);
  const list = paid ? d.resources.paid : d.resources.free;
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <button className={`chip ${!paid ? "ring-1" : ""}`} onClick={() => setPaid(false)}>Free ({d.resources.free.length})</button>
        <button className={`chip ${paid ? "ring-1" : ""}`} onClick={() => setPaid(true)}>Paid ({d.resources.paid.length})</button>
      </div>

      <ol className="space-y-2">
        {list.map((r, i) => <ResourceRow key={i} idx={i} r={r} />)}
      </ol>

      <p className="dim text-xs">Resources ranked best-first for someone starting from scratch. Links are real but editions/hosts/prices change — items flagged "check link" need extra verification.</p>
    </div>
  );
}

function ResourceRow({ r, idx }: { r: Resource; idx: number }) {
  return (
    <li className="panel p-3 flex flex-wrap items-start gap-3">
      <span className="chip">#{idx + 1}</span>
      <div className="flex-1 min-w-0">
        <p className="font-medium">{r.name}</p>
        <p className="text-sm dim">{r.what}</p>
        <div className="mt-1 flex flex-wrap gap-2 text-xs">
          {r.url
            ? <a href={r.url} target="_blank" rel="noreferrer" className="chip hue underline">open</a>
            : <span className="chip dim">no direct link yet</span>}
          {r.price && <span className="chip">{r.price}</span>}
          {r.verify && <span className="chip" title="Check the link before relying on it" style={{ color: "var(--bad)" }}>check link</span>}
          {r.lastVerified && <span className="chip dim">checked {r.lastVerified}</span>}
        </div>
      </div>
    </li>
  );
}
