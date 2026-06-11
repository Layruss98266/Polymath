// Theme-aware SVG diagram component library.
// Every generator: uses currentColor / CSS vars only — no hard-coded colors.
// role="img" + <title>/<desc>, focusable groups for keyboard a11y.
import type { Diagram as D, DiagramKind } from "@/lib/types";

type Generator = (data: any) => React.ReactElement;

const titleId = (s: string) => `dgt_${s.replace(/[^a-z0-9]/gi, "")}`;
const descId  = (s: string) => `dgd_${s.replace(/[^a-z0-9]/gi, "")}`;

function Frame({
  title, desc, viewBox, children, maxH = 360
}: { title: string; desc: string; viewBox: string; children: React.ReactNode; maxH?: number }) {
  const tid = titleId(title); const did = descId(title);
  return (
    <svg
      role="img" aria-labelledby={`${tid} ${did}`}
      viewBox={viewBox} preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", maxHeight: maxH, color: "var(--ink)" }}
      className="diagram"
    >
      <title id={tid}>{title}</title>
      <desc id={did}>{desc}</desc>
      {children}
    </svg>
  );
}

// ---------- generators ----------

const funnel: Generator = (data: { stages: string[] }) => {
  const W = 600, H = 360, n = data.stages.length;
  const top = 80, bottom = 580;
  const rows = data.stages.map((label, i) => {
    const t = i / (n - 1 || 1);
    const tNext = (i + 1) / n;
    const wTop = top - (top - bottom) * 0 + 0; // unused
    const yTop = 30 + (H - 80) * (i / n);
    const yBot = 30 + (H - 80) * ((i + 1) / n);
    const widthTop = (W - 80) * (1 - t * 0.55);
    const widthBot = (W - 80) * (1 - tNext * 0.55);
    const cx = W / 2;
    const path = `M ${cx - widthTop / 2} ${yTop} L ${cx + widthTop / 2} ${yTop} L ${cx + widthBot / 2} ${yBot} L ${cx - widthBot / 2} ${yBot} Z`;
    return { path, label, yMid: (yTop + yBot) / 2 };
  });
  return (
    <Frame title="Funnel" desc="A funnel showing drop-off across stages." viewBox={`0 0 ${W} ${H}`}>
      {rows.map((r, i) => (
        <g key={i} tabIndex={0} aria-label={r.label}>
          <path d={r.path} fill="var(--hue)" opacity={0.18 + 0.12 * i} stroke="var(--line)" />
          <text x={W / 2} y={r.yMid + 5} textAnchor="middle" fontSize={16} fill="var(--ink)">{r.label}</text>
        </g>
      ))}
    </Frame>
  );
};

const pyramid: Generator = (data: { levels: string[] }) => {
  const W = 600, H = 360, n = data.levels.length;
  const apexX = W / 2, apexY = 20, baseY = H - 30, baseHalf = W / 2 - 40;
  const items = data.levels.slice().reverse().map((label, i) => {
    const t = i / n, tn = (i + 1) / n;
    const yTop = apexY + (baseY - apexY) * t;
    const yBot = apexY + (baseY - apexY) * tn;
    const halfTop = baseHalf * t;
    const halfBot = baseHalf * tn;
    const path = `M ${apexX - halfTop} ${yTop} L ${apexX + halfTop} ${yTop} L ${apexX + halfBot} ${yBot} L ${apexX - halfBot} ${yBot} Z`;
    return { path, label, yMid: (yTop + yBot) / 2 };
  });
  return (
    <Frame title="Pyramid" desc="Layered hierarchy from foundational to highest." viewBox={`0 0 ${W} ${H}`}>
      {items.map((it, i) => (
        <g key={i} tabIndex={0} aria-label={it.label}>
          <path d={it.path} fill="var(--hue)" opacity={0.15 + i * 0.1} stroke="var(--line)" />
          <text x={apexX} y={it.yMid + 5} textAnchor="middle" fontSize={15} fill="var(--ink)">{it.label}</text>
        </g>
      ))}
    </Frame>
  );
};

const cycle: Generator = (data: { nodes: string[] }) => {
  const W = 500, H = 360, cx = W / 2, cy = H / 2, r = 130;
  const n = data.nodes.length;
  const pts = data.nodes.map((label, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), label };
  });
  return (
    <Frame title="Cycle" desc="A self-reinforcing loop of stages." viewBox={`0 0 ${W} ${H}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--line)" strokeDasharray="4 4" />
      {pts.map((p, i) => {
        const next = pts[(i + 1) % n];
        return <line key={`l${i}`} x1={p.x} y1={p.y} x2={next.x} y2={next.y} stroke="var(--hue)" strokeWidth={1.5} markerEnd="url(#arr)" />;
      })}
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--hue)" />
        </marker>
      </defs>
      {pts.map((p, i) => (
        <g key={i} tabIndex={0} aria-label={p.label}>
          <circle cx={p.x} cy={p.y} r={32} fill="var(--panel)" stroke="var(--hue)" />
          <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize={12} fill="var(--ink)">{p.label}</text>
        </g>
      ))}
    </Frame>
  );
};

const flow: Generator = (data: { steps: string[] }) => {
  const W = 800, H = 160, n = data.steps.length;
  const boxW = (W - 40 - (n - 1) * 30) / n, boxH = 70, y = (H - boxH) / 2;
  return (
    <Frame title="Flow" desc="Ordered pipeline with arrows." viewBox={`0 0 ${W} ${H}`} maxH={200}>
      <defs>
        <marker id="farr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--hue)" />
        </marker>
      </defs>
      {data.steps.map((s, i) => {
        const x = 20 + i * (boxW + 30);
        return (
          <g key={i} tabIndex={0} aria-label={s}>
            <rect x={x} y={y} width={boxW} height={boxH} rx={12} fill="var(--panel)" stroke="var(--hue)" />
            <text x={x + boxW / 2} y={y + boxH / 2 + 5} textAnchor="middle" fontSize={14} fill="var(--ink)">{s}</text>
            {i < n - 1 && <line x1={x + boxW} y1={H / 2} x2={x + boxW + 28} y2={H / 2} stroke="var(--hue)" strokeWidth={2} markerEnd="url(#farr)" />}
          </g>
        );
      })}
    </Frame>
  );
};

const curve: Generator = (data: { x: string; y: string; series: { label: string; points: [number, number][] }[] }) => {
  const W = 600, H = 320, padL = 50, padR = 20, padT = 20, padB = 40;
  const allX = data.series.flatMap((s) => s.points.map((p) => p[0]));
  const allY = data.series.flatMap((s) => s.points.map((p) => p[1]));
  const xMin = Math.min(...allX), xMax = Math.max(...allX, xMin + 1);
  const yMin = Math.min(...allY, 0), yMax = Math.max(...allY, yMin + 1);
  const sx = (x: number) => padL + ((x - xMin) / (xMax - xMin)) * (W - padL - padR);
  const sy = (y: number) => H - padB - ((y - yMin) / (yMax - yMin)) * (H - padT - padB);
  return (
    <Frame title="Curve" desc="A line chart on axes." viewBox={`0 0 ${W} ${H}`}>
      <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--line)" />
      <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--line)" />
      <text x={(W) / 2} y={H - 8} textAnchor="middle" fontSize={12} fill="var(--dim)">{data.x}</text>
      <text x={14} y={H / 2} textAnchor="middle" fontSize={12} fill="var(--dim)" transform={`rotate(-90 14 ${H / 2})`}>{data.y}</text>
      {data.series.map((s, i) => {
        const d = s.points.map((p, j) => `${j === 0 ? "M" : "L"} ${sx(p[0])} ${sy(p[1])}`).join(" ");
        return (
          <g key={i} tabIndex={0} aria-label={s.label}>
            <path d={d} fill="none" stroke={i === 0 ? "var(--hue)" : "var(--ink)"} strokeWidth={2} opacity={i === 0 ? 1 : 0.55} />
            <text x={W - padR - 4} y={padT + 14 + i * 14} textAnchor="end" fontSize={12} fill="var(--dim)">{s.label}</text>
          </g>
        );
      })}
    </Frame>
  );
};

const quadrant: Generator = (data: { xAxis: [string, string]; yAxis: [string, string]; items: { label: string; x: number; y: number }[] }) => {
  const W = 500, H = 400, pad = 50;
  const xMid = W / 2, yMid = H / 2;
  return (
    <Frame title="Quadrant" desc="A 2x2 matrix with plotted items." viewBox={`0 0 ${W} ${H}`}>
      <line x1={pad} y1={yMid} x2={W - pad} y2={yMid} stroke="var(--line)" />
      <line x1={xMid} y1={pad} x2={xMid} y2={H - pad} stroke="var(--line)" />
      <text x={pad} y={H - 8} fontSize={12} fill="var(--dim)">{data.xAxis[0]}</text>
      <text x={W - pad} y={H - 8} textAnchor="end" fontSize={12} fill="var(--dim)">{data.xAxis[1]}</text>
      <text x={4} y={H - pad} fontSize={12} fill="var(--dim)">{data.yAxis[0]}</text>
      <text x={4} y={pad + 6} fontSize={12} fill="var(--dim)">{data.yAxis[1]}</text>
      {data.items.map((p, i) => (
        <g key={i} tabIndex={0} aria-label={p.label}>
          <circle cx={pad + p.x * (W - 2 * pad)} cy={H - pad - p.y * (H - 2 * pad)} r={7} fill="var(--hue)" />
          <text x={pad + p.x * (W - 2 * pad) + 10} y={H - pad - p.y * (H - 2 * pad) + 4} fontSize={12} fill="var(--ink)">{p.label}</text>
        </g>
      ))}
    </Frame>
  );
};

const spectrum: Generator = (data: { left: string; right: string; marker: number; note?: string }) => {
  const W = 600, H = 140;
  const x = 40 + Math.max(0, Math.min(1, data.marker)) * (W - 80);
  return (
    <Frame title="Spectrum" desc="A scale between two poles with a marker." viewBox={`0 0 ${W} ${H}`} maxH={160}>
      <line x1={40} y1={H / 2} x2={W - 40} y2={H / 2} stroke="var(--line)" strokeWidth={6} strokeLinecap="round" />
      <text x={40} y={H / 2 - 18} fontSize={13} fill="var(--dim)">{data.left}</text>
      <text x={W - 40} y={H / 2 - 18} textAnchor="end" fontSize={13} fill="var(--dim)">{data.right}</text>
      <circle cx={x} cy={H / 2} r={12} fill="var(--hue)" />
      {data.note && <text x={x} y={H / 2 + 36} textAnchor="middle" fontSize={12} fill="var(--ink)">{data.note}</text>}
    </Frame>
  );
};

const venn: Generator = (data: { sets: string[]; centre?: string }) => {
  const W = 500, H = 360;
  const r = 110, cx = W / 2, cy = H / 2 + 10;
  const cs = data.sets.slice(0, 3);
  const positions = cs.length === 2 ? [[cx - 60, cy], [cx + 60, cy]] : [[cx - 70, cy - 30], [cx + 70, cy - 30], [cx, cy + 60]];
  return (
    <Frame title="Venn" desc="Overlapping sets and their intersection." viewBox={`0 0 ${W} ${H}`}>
      {positions.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={r} fill="var(--hue)" fillOpacity={0.16} stroke="var(--hue)" />
      ))}
      {cs.map((label, i) => {
        const [x, y] = positions[i];
        return <text key={`t${i}`} x={x} y={y - r - 6} textAnchor="middle" fontSize={13} fill="var(--ink)">{label}</text>;
      })}
      {data.centre && <text x={cx} y={cy + 6} textAnchor="middle" fontSize={14} fill="var(--ink)" fontWeight="bold">{data.centre}</text>}
    </Frame>
  );
};

const tree: Generator = (data: { root: string; children: { label: string; children?: any[] }[] }) => {
  const W = 700, H = 360;
  const rootY = 40;
  const levelGap = 100;
  const items = data.children;
  const colW = (W - 40) / items.length;
  return (
    <Frame title="Tree" desc="Root and branches." viewBox={`0 0 ${W} ${H}`}>
      <g tabIndex={0} aria-label={data.root}>
        <rect x={W / 2 - 90} y={rootY} width={180} height={40} rx={10} fill="var(--panel)" stroke="var(--hue)" />
        <text x={W / 2} y={rootY + 25} textAnchor="middle" fontSize={14} fill="var(--ink)">{data.root}</text>
      </g>
      {items.map((c, i) => {
        const x = 20 + colW * (i + 0.5);
        const y = rootY + levelGap;
        return (
          <g key={i}>
            <line x1={W / 2} y1={rootY + 40} x2={x} y2={y} stroke="var(--line)" />
            <g tabIndex={0} aria-label={c.label}>
              <rect x={x - 70} y={y} width={140} height={36} rx={8} fill="var(--panel)" stroke="var(--line)" />
              <text x={x} y={y + 23} textAnchor="middle" fontSize={13} fill="var(--ink)">{c.label}</text>
            </g>
            {c.children?.map((sub, j) => {
              const sy = y + levelGap;
              const sx = x - 60 + j * 60;
              return (
                <g key={`s${j}`}>
                  <line x1={x} y1={y + 36} x2={sx} y2={sy} stroke="var(--line)" />
                  <g tabIndex={0} aria-label={sub.label}>
                    <rect x={sx - 45} y={sy} width={90} height={28} rx={6} fill="var(--panel)" stroke="var(--line)" />
                    <text x={sx} y={sy + 18} textAnchor="middle" fontSize={11} fill="var(--dim)">{sub.label}</text>
                  </g>
                </g>
              );
            })}
          </g>
        );
      })}
    </Frame>
  );
};

const bars: Generator = (data: { items: { label: string; value: number }[]; unit?: string }) => {
  const W = 600, H = 320, pad = 60, gap = 12;
  const max = Math.max(...data.items.map((i) => i.value), 1);
  const barW = (W - 2 * pad - gap * (data.items.length - 1)) / data.items.length;
  return (
    <Frame title="Bars" desc="Comparison bars." viewBox={`0 0 ${W} ${H}`}>
      {data.items.map((it, i) => {
        const x = pad + i * (barW + gap);
        const h = ((it.value / max) * (H - 2 * pad));
        const y = H - pad - h;
        return (
          <g key={i} tabIndex={0} aria-label={`${it.label}: ${it.value}${data.unit ?? ""}`}>
            <rect x={x} y={y} width={barW} height={h} rx={6} fill="var(--hue)" opacity={0.85} />
            <text x={x + barW / 2} y={H - pad + 18} textAnchor="middle" fontSize={12} fill="var(--dim)">{it.label}</text>
            <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize={12} fill="var(--ink)">{it.value}{data.unit ?? ""}</text>
          </g>
        );
      })}
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="var(--line)" />
    </Frame>
  );
};

const timeline: Generator = (data: { events: { when: string; what: string }[] }) => {
  const W = 800, H = 220;
  const padL = 40, padR = 40;
  const n = data.events.length;
  return (
    <Frame title="Timeline" desc="Events along an axis." viewBox={`0 0 ${W} ${H}`} maxH={260}>
      <line x1={padL} y1={H / 2} x2={W - padR} y2={H / 2} stroke="var(--line)" strokeWidth={2} />
      {data.events.map((e, i) => {
        const x = padL + (i / Math.max(1, n - 1)) * (W - padL - padR);
        const above = i % 2 === 0;
        return (
          <g key={i} tabIndex={0} aria-label={`${e.when} — ${e.what}`}>
            <circle cx={x} cy={H / 2} r={6} fill="var(--hue)" />
            <line x1={x} y1={H / 2} x2={x} y2={above ? 40 : H - 40} stroke="var(--line)" />
            <text x={x} y={above ? 30 : H - 24} textAnchor="middle" fontSize={12} fill="var(--ink)">{e.what}</text>
            <text x={x} y={above ? 14 : H - 8} textAnchor="middle" fontSize={11} fill="var(--dim)">{e.when}</text>
          </g>
        );
      })}
    </Frame>
  );
};

const sequence: Generator = (data: { actors: string[]; messages: { from: number; to: number; text: string }[] }) => {
  const W = 600, H = 320;
  const lanes = data.actors.length;
  const laneW = (W - 80) / lanes;
  return (
    <Frame title="Sequence" desc="Actors exchanging messages." viewBox={`0 0 ${W} ${H}`}>
      {data.actors.map((a, i) => {
        const x = 40 + i * laneW + laneW / 2;
        return (
          <g key={i}>
            <rect x={x - 60} y={20} width={120} height={32} rx={8} fill="var(--panel)" stroke="var(--hue)" />
            <text x={x} y={42} textAnchor="middle" fontSize={13} fill="var(--ink)">{a}</text>
            <line x1={x} y1={56} x2={x} y2={H - 20} stroke="var(--line)" strokeDasharray="4 4" />
          </g>
        );
      })}
      {data.messages.map((m, i) => {
        const fromX = 40 + m.from * laneW + laneW / 2;
        const toX = 40 + m.to * laneW + laneW / 2;
        const y = 80 + i * 40;
        return (
          <g key={`m${i}`} tabIndex={0} aria-label={m.text}>
            <line x1={fromX} y1={y} x2={toX} y2={y} stroke="var(--hue)" strokeWidth={1.5} markerEnd="url(#sarr)" />
            <text x={(fromX + toX) / 2} y={y - 6} textAnchor="middle" fontSize={12} fill="var(--ink)">{m.text}</text>
          </g>
        );
      })}
      <defs>
        <marker id="sarr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--hue)" />
        </marker>
      </defs>
    </Frame>
  );
};

const gauge: Generator = (data: { value: number; label?: string }) => {
  const W = 400, H = 240;
  const cx = W / 2, cy = H - 30, r = 130;
  const v = Math.max(0, Math.min(1, data.value));
  const a = Math.PI * (1 - v);
  const ex = cx + r * Math.cos(a);
  const ey = cy - r * Math.sin(a);
  const arc = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
  return (
    <Frame title="Gauge" desc="A value on a dial." viewBox={`0 0 ${W} ${H}`}>
      <path d={arc} fill="none" stroke="var(--line)" strokeWidth={14} strokeLinecap="round" />
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${ex} ${ey}`} fill="none" stroke="var(--hue)" strokeWidth={14} strokeLinecap="round" />
      <text x={cx} y={cy - 30} textAnchor="middle" fontSize={28} fill="var(--ink)">{Math.round(v * 100)}%</text>
      {data.label && <text x={cx} y={cy - 4} textAnchor="middle" fontSize={13} fill="var(--dim)">{data.label}</text>}
    </Frame>
  );
};

const network: Generator = (data: { nodes: string[]; edges: [number, number][] }) => {
  const W = 600, H = 380, cx = W / 2, cy = H / 2, r = 140;
  const pts = data.nodes.map((label, i) => {
    const a = (i / data.nodes.length) * 2 * Math.PI;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), label };
  });
  return (
    <Frame title="Network" desc="Knowledge graph of connected ideas." viewBox={`0 0 ${W} ${H}`}>
      {data.edges.map(([a, b], i) => (
        <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} stroke="var(--line)" />
      ))}
      {pts.map((p, i) => (
        <g key={i} tabIndex={0} aria-label={p.label}>
          <circle cx={p.x} cy={p.y} r={24} fill="var(--panel)" stroke="var(--hue)" />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize={11} fill="var(--ink)">{p.label}</text>
        </g>
      ))}
    </Frame>
  );
};

const labelled: Generator = (data: { callouts: { x: number; y: number; text: string }[] }) => {
  const W = 600, H = 320;
  return (
    <Frame title="Labelled" desc="A base shape with callouts." viewBox={`0 0 ${W} ${H}`}>
      <ellipse cx={W / 2} cy={H / 2} rx={180} ry={110} fill="var(--panel)" stroke="var(--hue)" />
      {data.callouts.map((c, i) => (
        <g key={i} tabIndex={0} aria-label={c.text}>
          <circle cx={c.x} cy={c.y} r={6} fill="var(--hue)" />
          <line x1={c.x} y1={c.y} x2={c.x + 60} y2={c.y - 30} stroke="var(--line)" />
          <text x={c.x + 64} y={c.y - 26} fontSize={12} fill="var(--ink)">{c.text}</text>
        </g>
      ))}
    </Frame>
  );
};

const GENERATORS: Record<DiagramKind, Generator> = {
  funnel, pyramid, cycle, flow, curve, quadrant, spectrum, venn,
  tree, network, bars, timeline, sequence, gauge, labelled
};

export function DiagramView({ diagram }: { diagram: D }) {
  const G = GENERATORS[diagram.kind];
  if (!G) return <p className="dim">[Diagram kind "{diagram.kind}" not supported yet]</p>;
  return (
    <figure className="space-y-2">
      <div className="panel p-4">
        {G(diagram.data)}
      </div>
      <figcaption className="text-sm dim">
        <span className="hue font-medium">{diagram.title}</span> — {diagram.caption}
      </figcaption>
    </figure>
  );
}
