import type { Domain } from "@/lib/types";

export function BasicsTab({ d }: { d: Domain }) {
  return (
    <div className="space-y-4">
      <div className="panel p-5">
        <h2 className="font-display text-xl mb-2">What is {d.name}?</h2>
        <p>{d.basics}</p>
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
          {d.synthesis.map((s, i) => (
            <li key={i} className="text-sm">
              <span className="hue font-medium">{s.concept}</span> → <a href={`/domain/${s.linksTo}`} className="underline">{s.linksTo}</a> · <span className="dim">{s.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
