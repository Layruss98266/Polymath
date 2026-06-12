"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Bookmark, Compass, NotebookPen, ArrowRight, Sparkles } from "lucide-react";
import { useActions, useUserState } from "@/lib/state";
import { findEntry } from "@/data/domains";
import { PATHS } from "@/data/paths";
import { conceptPath } from "@/lib/tabs";

export function MyList() {
 const s = useUserState();
 const a = useActions();
 const sp = useSearchParams();
 const highlight = sp?.get("highlight") ?? null;
 const highlightRef = useRef<HTMLLIElement>(null);

 // Scroll the highlighted path into view on first paint. Used by Onboarding's
 // "See the curated Path" button, which now passes ?highlight=<pathId>.
 useEffect(() => {
  if (!highlight) return;
  const t = setTimeout(() => {
   highlightRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 200);
  return () => clearTimeout(t);
 }, [highlight]);

 const reflections = useMemo(() =>
  Object.entries(s.notes).filter(([k]) => k.endsWith(":reflect") && s.notes[k]?.trim().length > 0),
  [s.notes]
 );

 return (
  <div className="space-y-6">
   {/* Hero */}
   <header className="space-y-2">
    <div className="flex items-center gap-2">
     <span className="grid place-items-center w-9 h-9 rounded-xl" style={{ background: "color-mix(in oklab, var(--hue) 18%, transparent)", color: "var(--hue)" }}>
      <Bookmark size={18} />
     </span>
     <p className="dim text-xs uppercase tracking-widest">Bookmarks, paths, and reflections</p>
    </div>
    <h1 className="font-display text-3xl sm:text-4xl">My List</h1>
    <p className="dim">Curated multi-domain Paths, concepts you bookmarked, and the apply-to-your-life answers you saved.</p>
   </header>

   {/* Paths */}
   <section className="space-y-3">
    <div className="flex items-end justify-between flex-wrap gap-2">
     <div className="flex items-center gap-2">
      <Compass size={16} className="hue" />
      <h2 className="font-display text-2xl">Curated Paths</h2>
     </div>
     <span className="dim text-xs">{PATHS.length} multi-domain journeys</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
     {PATHS.map((p) => {
      const live = p.domains.filter((id) => findEntry(id));
      const liveCount = live.length;
      const isHighlighted = p.id === highlight;
      return (
       <li
        key={p.id}
        ref={isHighlighted ? highlightRef : undefined}
        className={`panel lift p-5 relative overflow-hidden ${isHighlighted ? "ring-2" : ""}`}
        style={{ borderColor: p.hue, ...(isHighlighted ? { boxShadow: `0 0 0 2px ${p.hue}aa` } : {}) }}
       >
        <div className="absolute inset-x-0 top-0 h-1" style={{ background: p.hue }} />
        <p className="font-display text-lg mt-1">{p.name}</p>
        <p className="dim text-sm mt-1">{p.tagline}</p>
        <ul className="flex flex-wrap gap-1.5 mt-3">
         {p.domains.map((id) => {
          const e = findEntry(id);
          return e ? (
           <li key={id}>
            <Link href={`/domain/${id}`} className="chip"><span>{e.icon}</span> {e.name}</Link>
           </li>
          ) : (
           <li key={id}><span className="chip dim">{id} (soon)</span></li>
          );
         })}
        </ul>
        <div className="flex items-center justify-between mt-3 text-xs dim">
         <span>{liveCount} of {p.domains.length} domains live</span>
        </div>
        <details className="mt-3">
         <summary className="cursor-pointer text-sm dim hover:underline">Capstone challenge</summary>
         <p className="text-sm mt-2">{p.capstone}</p>
        </details>
       </li>
      );
     })}
    </ul>
   </section>

   {/* Bookmarks */}
   <section className="space-y-3">
    <div className="flex items-end justify-between flex-wrap gap-2">
     <div className="flex items-center gap-2">
      <Bookmark size={16} className="hue" />
      <h2 className="font-display text-2xl">Bookmarks</h2>
     </div>
     <span className="dim text-xs">{s.bookmarks.length} pinned</span>
    </div>
    {s.bookmarks.length === 0 ? (
     <div className="panel hero-glow p-5 sm:p-6 flex items-start gap-3">
      <Sparkles size={18} className="hue mt-1 shrink-0" />
      <div className="text-sm">
       <p className="font-medium">No bookmarks yet.</p>
       <p className="dim mt-1">Open any concept on a domain page and tap the bookmark chip to pin it here.</p>
      </div>
     </div>
    ) : (
     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {s.bookmarks.map((b) => {
       const [domainId, idx] = b.split(":");
       const e = findEntry(domainId);
       return (
        <li key={b} className="group panel lift p-3 flex items-center gap-3 relative" style={{ borderLeft: `3px solid ${e?.hue ?? "var(--line)"}` }}>
         <Link href={conceptPath(domainId, Number(idx))} className="flex items-center gap-3 min-w-0 flex-1">
          <span className="text-xl shrink-0" aria-hidden="true">{e?.icon ?? "📌"}</span>
          <span className="min-w-0">
           <span className="block text-sm font-medium truncate" style={{ color: e?.hue ?? "var(--ink)" }}>{e?.name ?? domainId}</span>
           <span className="dim text-xs">Concept #{Number(idx) + 1}</span>
          </span>
         </Link>
         <div className="flex items-center gap-1 shrink-0 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transition-opacity">
          <Link href={conceptPath(domainId, Number(idx))} className="chip" aria-label={`Open ${e?.name ?? domainId} concept ${Number(idx) + 1}`}>Open <ArrowRight size={11} /></Link>
          <button className="chip" onClick={() => a.toggleBookmark(b)} aria-label={`Remove bookmark ${e?.name ?? domainId} concept ${Number(idx) + 1}`}>Remove</button>
         </div>
        </li>
       );
      })}
     </ul>
    )}
   </section>

   {/* Reflections */}
   <section className="space-y-3">
    <div className="flex items-end justify-between flex-wrap gap-2">
     <div className="flex items-center gap-2">
      <NotebookPen size={16} className="hue" />
      <h2 className="font-display text-2xl">Reflections</h2>
     </div>
     <span className="dim text-xs">{reflections.length} saved</span>
    </div>
    {reflections.length > 0 && (
     <p className="dim text-xs">Cross-link concepts inside a reflection with <code>[[domain_id:N]]</code>. Example: <code>[[psychology:0]]</code>.</p>
    )}
    {reflections.length === 0 ? (
     <div className="panel p-5 sm:p-6 flex items-start gap-3">
      <Sparkles size={18} className="hue mt-1 shrink-0" />
      <div className="text-sm">
       <p className="font-medium">No reflections yet.</p>
       <p className="dim mt-1">Each concept ends with an "apply to your life" prompt. Anything you write there saves as a note and lives here.</p>
      </div>
     </div>
    ) : (
     <ul className="space-y-2">
      {reflections.map(([k, v]) => {
       const [domainId, idx] = k.split(":");
       const e = findEntry(domainId);
       return (
        <li key={k} className="panel p-4">
         <div className="flex items-center justify-between gap-2 mb-1">
          <p className="text-xs uppercase tracking-widest dim">
           {e?.name ?? domainId} · concept #{Number(idx) + 1}
          </p>
          <Link href={conceptPath(domainId, Number(idx))} className="dim text-xs hover:underline inline-flex items-center gap-1">Open <ArrowRight size={11} /></Link>
         </div>
         <p className="text-sm leading-relaxed">{renderLinkedNote(v ?? "")}</p>
        </li>
       );
      })}
     </ul>
    )}
   </section>
  </div>
 );
}

// Render `[[domain_id]]` and `[[domain_id:N]]` markers in reflection text
// as in-app links. Markers that don't resolve render as plain text.
function renderLinkedNote(text: string): React.ReactNode {
 const parts: React.ReactNode[] = [];
 const re = /\[\[([a-z_]+)(?::(\d+))?\]\]/g;
 let last = 0;
 let m: RegExpExecArray | null;
 let i = 0;
 while ((m = re.exec(text)) !== null) {
  if (m.index > last) parts.push(text.slice(last, m.index));
  const id = m[1];
  const ci = m[2] ? Number(m[2]) : null;
  const e = findEntry(id);
  if (!e) {
   parts.push(m[0]);
  } else {
   const href = ci !== null ? conceptPath(id, ci) : `/domain/${id}`;
   const label = ci !== null ? `${e.name} #${ci + 1}` : e.name;
   parts.push(<Link key={`l${i++}`} href={href} className="hue underline">{label}</Link>);
  }
  last = m.index + m[0].length;
 }
 if (last < text.length) parts.push(text.slice(last));
 return parts;
}
