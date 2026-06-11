import type { Mentor } from "@/lib/types";

function initials(name: string) {
  return name.split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export function MentorStrip({ mentors }: { mentors: Mentor[] }) {
  return (
    <div className="panel p-4">
      <p className="text-xs uppercase tracking-widest dim mb-2">Stand on giants</p>
      <ul className="flex flex-wrap gap-3">
        {mentors.map((m) => (
          <li key={m.name} className="flex items-center gap-2 border border-[color:var(--line)] rounded-xl px-3 py-2">
            <div className="grid place-items-center w-9 h-9 rounded-full font-bold text-sm"
                 style={{ background: "var(--hue)", color: "#fff" }}>{initials(m.name)}</div>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-tight">{m.name}</p>
              <p className="text-xs dim leading-tight">{m.for}</p>
              <p className="text-[10px] dim leading-tight">{m.work}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
