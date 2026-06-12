// Distinct visual treatment per mastery tier so Novice through Grandmaster
// are recognisable at a glance. Used on DomainCard, DomainView header,
// Dashboard rank list, and Skill Map.
import type { DomainRank } from "@/lib/xp";

const TIERS: Record<DomainRank, { color: string; gradient: string; glyph: string; aura: string }> = {
 Novice:       { color: "#9aa0bf", gradient: "linear-gradient(135deg, #5b6079, #9aa0bf)", glyph: "I",   aura: "rgba(154,160,191,0.18)" },
 Apprentice:   { color: "#86efac", gradient: "linear-gradient(135deg, #1f9d5b, #86efac)", glyph: "II",  aura: "rgba(134,239,172,0.22)" },
 Practitioner: { color: "#60a5fa", gradient: "linear-gradient(135deg, #2563eb, #60a5fa)", glyph: "III", aura: "rgba(96,165,250,0.26)" },
 Specialist:   { color: "#a78bfa", gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)", glyph: "IV",  aura: "rgba(167,139,250,0.30)" },
 Expert:       { color: "#fbbf24", gradient: "linear-gradient(135deg, #d97706, #fbbf24)", glyph: "V",   aura: "rgba(251,191,36,0.34)" },
 Master:       { color: "#fb7185", gradient: "linear-gradient(135deg, #be123c, #fb7185)", glyph: "VI",  aura: "rgba(251,113,133,0.36)" },
 Grandmaster:  { color: "#f472b6", gradient: "linear-gradient(135deg, #db2777, #f472b6, #fbbf24)", glyph: "VII", aura: "rgba(244,114,182,0.40)" }
};

export function RankBadge({ rank, size = "md", showName = true }: { rank: DomainRank; size?: "sm" | "md" | "lg"; showName?: boolean }) {
 const tier = TIERS[rank];
 const sizes = { sm: { box: 22, font: 9 }, md: { box: 32, font: 11 }, lg: { box: 44, font: 13 } } as const;
 const s = sizes[size];
 return (
  <span className="inline-flex items-center gap-2">
   <span
    aria-hidden="true"
    style={{
     width: s.box, height: s.box, borderRadius: 6,
     background: tier.gradient,
     boxShadow: `0 0 ${s.box / 2}px ${tier.aura}`,
     display: "grid", placeItems: "center",
     fontWeight: 800, fontSize: s.font, color: "#0b0d1a",
     letterSpacing: 0
    }}
   >{tier.glyph}</span>
   {showName && <span className="font-medium" style={{ color: tier.color }}>{rank}</span>}
  </span>
 );
}

export function rankColor(rank: DomainRank): string { return TIERS[rank].color; }
