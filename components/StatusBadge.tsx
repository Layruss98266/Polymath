// Shared status badge for evidence-strength labels on concept rows and the
// concept detail header. Three states: settled (strong evidence, good color),
// debated (mixed evidence, bad color), framework (useful lens, neutral).
// Visually distinct via a colored dot plus tinted background, so a glance
// resolves the state without reading the label.

export type ConceptStatus = "settled" | "debated" | "framework";

const META: Record<ConceptStatus, { label: string; dot: string; bg: string; col: string; ring: string }> = {
 settled: {
  label: "settled",
  dot: "var(--good)",
  bg: "color-mix(in oklab, var(--good) 12%, transparent)",
  col: "var(--good)",
  ring: "color-mix(in oklab, var(--good) 40%, transparent)"
 },
 debated: {
  label: "debated",
  dot: "var(--bad)",
  bg: "color-mix(in oklab, var(--bad) 12%, transparent)",
  col: "var(--bad)",
  ring: "color-mix(in oklab, var(--bad) 40%, transparent)"
 },
 framework: {
  label: "framework",
  dot: "var(--ink)",
  bg: "color-mix(in oklab, var(--ink) 8%, transparent)",
  col: "var(--ink)",
  ring: "var(--line)"
 }
};

export function StatusBadge({ status, size = "md" }: { status: ConceptStatus; size?: "sm" | "md" }) {
 const m = META[status];
 const dotSize = size === "sm" ? 5 : 6;
 return (
  <span
   className="inline-flex items-center gap-1.5 rounded-full font-medium"
   style={{
    background: m.bg,
    color: m.col,
    border: `1px solid ${m.ring}`,
    padding: size === "sm" ? "2px 8px" : "3px 10px",
    fontSize: size === "sm" ? 10 : 11,
    letterSpacing: 0.2
   }}
   title={LABELS[status]}
  >
   <span
    aria-hidden="true"
    style={{ width: dotSize, height: dotSize, borderRadius: 999, background: m.dot, display: "inline-block" }}
   />
   {m.label}
  </span>
 );
}

const LABELS: Record<ConceptStatus, string> = {
 settled: "Strong evidence. Treat as fact.",
 debated: "Mixed evidence. Hold lightly.",
 framework: "Useful lens, not a fact."
};

export function StatusLegend() {
 return (
  <ul
   className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs"
   aria-label="Evidence-strength legend"
   style={{ color: "var(--dim)" }}
  >
   {(["settled", "debated", "framework"] as ConceptStatus[]).map((k) => (
    <li key={k} className="inline-flex items-center gap-2">
     <StatusBadge status={k} size="sm" />
     <span>{LABELS[k]}</span>
    </li>
   ))}
  </ul>
 );
}
