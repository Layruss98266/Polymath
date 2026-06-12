"use client";
import { useMemo, useState } from "react";
import type { Domain, Resource, ResourceKind } from "@/lib/types";
import { Video, FileText, BookOpen, GraduationCap, Mic, Wrench } from "lucide-react";

const KIND_ICON: Record<ResourceKind, { icon: typeof Video; label: string; color: string }> = {
 video:   { icon: Video,         label: "Video",   color: "#fb7185" },
 article: { icon: FileText,      label: "Article", color: "#60a5fa" },
 book:    { icon: BookOpen,      label: "Book",    color: "#fbbf24" },
 course:  { icon: GraduationCap, label: "Course",  color: "#34d399" },
 podcast: { icon: Mic,           label: "Podcast", color: "#a78bfa" },
 tool:    { icon: Wrench,        label: "Tool",    color: "#f472b6" }
};

const KINDS: ResourceKind[] = ["video", "article", "course", "book", "podcast", "tool"];

// Infer the kind from the resource name if it has not been explicitly tagged
// (most existing resources predate the kind field). Pure heuristic. Falls
// back to article.
function inferKind(r: Resource): ResourceKind {
 if (r.kind) return r.kind;
 const n = r.name.toLowerCase();
 if (n.includes("youtube") || n.includes("ted") || n.includes("video") || n.includes("playlist") || n.includes("lecture")) return "video";
 if (n.includes("podcast") || n.includes("the drive") || n.includes("invest like the best") || n.includes("invest like")) return "podcast";
 if (n.includes("course") || n.includes("coursera") || n.includes("edx") || n.includes("masterclass") || n.includes("specialisation") || n.includes("specialization")) return "course";
 if (n.includes("blog") || n.includes("essay") || n.includes("article") || n.includes("wiki") || n.includes("post") || n.includes(".com") || n.includes(".org")) return "article";
 if (n.includes("anki") || n.includes("app")) return "tool";
 return "book";
}

export function ResourcesTab({ d }: { d: Domain }) {
 const [paid, setPaid] = useState(false);
 const [filter, setFilter] = useState<ResourceKind | "all">("all");

 const list = useMemo(() => {
  const base = paid ? d.resources.paid : d.resources.free;
  const tagged = base.map((r) => ({ ...r, _kind: inferKind(r) }));
  if (filter === "all") return tagged;
  return tagged.filter((r) => r._kind === filter);
 }, [paid, filter, d.resources.free, d.resources.paid]);

 const counts = useMemo(() => {
  const c: Record<ResourceKind, number> = { video: 0, article: 0, course: 0, book: 0, podcast: 0, tool: 0 };
  const base = paid ? d.resources.paid : d.resources.free;
  for (const r of base) c[inferKind(r)]++;
  return c;
 }, [paid, d.resources.free, d.resources.paid]);

 return (
  <div className="space-y-3">
   <div className="flex gap-2 flex-wrap">
    <button className={`chip ${!paid ? "ring-1" : ""}`} onClick={() => setPaid(false)}>Free ({d.resources.free.length})</button>
    <button className={`chip ${paid ? "ring-1" : ""}`} onClick={() => setPaid(true)}>Paid ({d.resources.paid.length})</button>
   </div>

   <div className="flex gap-2 flex-wrap text-xs">
    <button className={`chip ${filter === "all" ? "ring-1" : ""}`} onClick={() => setFilter("all")}>All</button>
    {KINDS.map((k) => {
     const meta = KIND_ICON[k];
     const Icon = meta.icon;
     return (
      <button key={k} className={`chip ${filter === k ? "ring-1" : ""}`} onClick={() => setFilter(k)} style={filter === k ? { borderColor: meta.color } : {}}>
       <Icon size={12} style={{ color: meta.color }} /> {meta.label} ({counts[k]})
      </button>
     );
    })}
   </div>

   <ol className="space-y-2">
    {list.map((r, i) => <ResourceRow key={i} idx={i} r={r} kind={(r as any)._kind as ResourceKind} />)}
    {list.length === 0 && <p className="dim text-sm">Nothing in that filter yet.</p>}
   </ol>

   <p className="dim text-xs">Resources ranked best first for someone starting from scratch. Links are real but editions, hosts, and prices change. Items flagged "check link" need extra verification.</p>
  </div>
 );
}

function ResourceRow({ r, idx, kind }: { r: Resource; idx: number; kind: ResourceKind }) {
 const meta = KIND_ICON[kind];
 const Icon = meta.icon;
 return (
  <li className="panel p-3 flex flex-wrap items-start gap-3">
   <span className="chip">#{idx + 1}</span>
   <span className="chip" style={{ background: `${meta.color}22`, color: meta.color }} title={meta.label}>
    <Icon size={12} /> {meta.label}
   </span>
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
