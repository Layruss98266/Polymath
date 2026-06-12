import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Changelog",
 description: "What changed in Polymath and when.",
 alternates: { canonical: "/changelog" }
};

type ChangeEntry = {
 version: string;
 date: string;
 highlights: string[];
};

const ENTRIES: ChangeEntry[] = [
 {
  version: "Round 17",
  date: "2026-06-12",
  highlights: [
   "Design overhaul across all pages.",
   "5 new domains: Sales, Productivity, Design Thinking, Data Science, Leadership.",
   "New pages: Paths, Glossary, and Changelog.",
   "Richer negotiation and communication content."
  ]
 },
 {
  version: "Round 16",
  date: "2026-06-10",
  highlights: [
   "Persona-driven P0 fixes.",
   "WCAG 2.2 AA across all pages.",
   "SessionPicker moved above the fold.",
   "45-min dead preset removed. 15-min preset now routes to a new concept after review pool drains.",
   "Status badge legend added to Basics tab.",
   "FocusTimer now persists across sessions.",
   "16 negotiation and communication concepts enriched."
  ]
 },
 {
  version: "Round 15",
  date: "2026-05-28",
  highlights: [
   "5-persona UX and strategy review completed.",
   "Habit-loop attribution corrected.",
   "ai_ml GPT-5 claim softened.",
   "Citation precision pass: Gottman 5:1, Asch conformity, Bystander effect, OSC 2015.",
   "Basics cards shortened with Read-more toggle.",
   "Calibration now shows n count."
  ]
 },
 {
  version: "Round 14",
  date: "2026-05-15",
  highlights: [
   "P1 audit clearance.",
   "Accessibility batch: progressbar roles added, radar fallback list, heatmap role=img, flip-card aria-pressed.",
   "Confetti now respects reduced-motion override.",
   "Home catalogue visible by default."
  ]
 },
 {
  version: "Rounds 12 and 13",
  date: "2026-05-01",
  highlights: [
   "Route-segment refactor: every tab is now a real URL.",
   "Per-concept SEO pages with JSON-LD LearningResource.",
   "MegaMenu focus management improved.",
   "Command palette added.",
   "Mobile tab strip auto-scroll."
  ]
 }
];

export default function ChangelogPage() {
 return (
  <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
   <header className="space-y-2">
    <h1 className="text-3xl font-bold">Changelog</h1>
    <p className="dim text-base">
     What changed in Polymath and when. Newest first.
    </p>
   </header>

   {/* Timeline */}
   <ol className="space-y-0" aria-label="Release history">
    {ENTRIES.map((entry, i) => (
     <li key={entry.version} className="flex gap-5">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
       <span
        className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
        style={{ background: "var(--hue)" }}
        aria-hidden="true"
       />
       {i < ENTRIES.length - 1 && (
        <span
         className="w-px flex-1 mt-1"
         style={{ background: "var(--line)" }}
         aria-hidden="true"
        />
       )}
      </div>

      {/* Entry card */}
      <div className="panel p-4 mb-5 flex-1 space-y-3">
       <div className="flex items-center flex-wrap gap-3">
        <h2 className="font-semibold text-base">{entry.version}</h2>
        <span className="chip text-xs" aria-label={`Released on ${entry.date}`}>
         {entry.date}
        </span>
       </div>
       <ul className="space-y-1.5" aria-label={`Changes in ${entry.version}`}>
        {entry.highlights.map((h, j) => (
         <li key={j} className="dim text-sm flex gap-2">
          <span aria-hidden="true" className="mt-0.5" style={{ color: "var(--hue)" }}>+</span>
          <span>{h}</span>
         </li>
        ))}
       </ul>
      </div>
     </li>
    ))}
   </ol>
  </main>
 );
}
