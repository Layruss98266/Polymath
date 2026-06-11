"use client";
import Link from "next/link";
import { useMemo } from "react";
import { useActions, useUserState } from "@/lib/state";
import { DOMAIN_INDEX, findEntry } from "@/data/domains";
import { PATHS } from "@/data/paths";

export function MyList() {
  const s = useUserState();
  const a = useActions();

  // Bookmarks come as `${domainId}:${conceptIndex}` strings. We can't render the
  // concept text without loading the domain — but we can link back to the tab.
  const bookmarks = s.bookmarks;
  const reflections = useMemo(() =>
    Object.entries(s.notes).filter(([k]) => k.endsWith(":reflect") && s.notes[k]?.trim().length > 0),
    [s.notes]);

  return (
    <div className="space-y-5">
      <h1 className="font-display text-3xl">My List</h1>

      <section className="panel p-5">
        <h2 className="font-display text-xl mb-3">Curated Paths</h2>
        <p className="dim text-sm mb-3">Multi-domain journeys with a capstone. Pick one when you want a focused arc, not just a single domain.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PATHS.map((p) => {
            const liveCount = p.domains.filter((id) => findEntry(id)).length;
            return (
              <li key={p.id} className="panel p-4" style={{ borderColor: p.hue }}>
                <p className="font-display text-lg">{p.name}</p>
                <p className="dim text-sm">{p.tagline}</p>
                <p className="text-xs mt-2">
                  Domains: {p.domains.map((id) => {
                    const e = findEntry(id);
                    return e ? <Link key={id} href={`/domain/${id}`} className="hue underline mr-2">{e.name}</Link> : <span key={id} className="dim mr-2">{id} (soon)</span>;
                  })}
                </p>
                <p className="text-xs dim mt-2">{liveCount}/{p.domains.length} domains live</p>
                <p className="text-xs mt-3"><strong>Capstone:</strong> {p.capstone}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="panel p-5">
        <h2 className="font-display text-xl mb-3">Bookmarks</h2>
        {bookmarks.length === 0
          ? <p className="dim text-sm">Bookmark a concept on any domain page to pin it here.</p>
          : (
            <ul className="space-y-2">
              {bookmarks.map((b) => {
                const [domainId, idx] = b.split(":");
                const e = findEntry(domainId);
                return (
                  <li key={b} className="flex items-center justify-between border border-[color:var(--line)] rounded-xl p-3">
                    <span>{e ? <Link href={`/domain/${domainId}`} className="hue underline">{e.name}</Link> : domainId} · concept #{Number(idx) + 1}</span>
                    <button className="btn" onClick={() => a.toggleBookmark(b)}>Remove</button>
                  </li>
                );
              })}
            </ul>
          )}
      </section>

      <section className="panel p-5">
        <h2 className="font-display text-xl mb-3">Reflections</h2>
        {reflections.length === 0
          ? <p className="dim text-sm">Your saved apply-to-your-life answers will appear here.</p>
          : (
            <ul className="space-y-2">
              {reflections.map(([k, v]) => {
                const [domainId, idx] = k.split(":");
                const e = findEntry(domainId);
                return (
                  <li key={k} className="panel p-3">
                    <p className="text-xs uppercase tracking-widest dim">{e?.name ?? domainId} · concept #{Number(idx) + 1}</p>
                    <p className="text-sm mt-1">{v}</p>
                  </li>
                );
              })}
            </ul>
          )}
      </section>
    </div>
  );
}
