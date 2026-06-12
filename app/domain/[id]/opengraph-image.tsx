import { ImageResponse } from "next/og";
import { DOMAIN_INDEX, findEntry } from "@/data/domains";

export const alt = "Polymath domain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Per-domain OG image. Pulls the domain's hue + name + icon + tagline so
// social previews actually differ per page. Pre-renders at build time as
// part of the per-domain SSG pass.
export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export default async function OG({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 const entry = findEntry(id) ?? { name: "Polymath", tagline: "Learn anything, daily.", hue: "#ff6b5e", icon: "🧭", category: "" };
 return new ImageResponse(
  (
   <div
    style={{
     width: "100%",
     height: "100%",
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     padding: "80px",
     background: `linear-gradient(135deg, #0b0d1a 0%, ${entry.hue}22 100%)`,
     color: "#f3f4f8",
     fontFamily: "system-ui, sans-serif"
    }}
   >
    <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32 }}>
     <div
      style={{
       width: 88,
       height: 88,
       borderRadius: 20,
       background: entry.hue,
       color: "#0b0d1a",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       fontSize: 52
      }}
     >{entry.icon}</div>
     <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 22, color: "#9aa0bf", letterSpacing: 4, textTransform: "uppercase" }}>{entry.category}</span>
      <span style={{ fontSize: 28, color: "#9aa0bf" }}>Polymath</span>
     </div>
    </div>
    <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.0, letterSpacing: -2, display: "flex", color: entry.hue }}>
     {entry.name}
    </div>
    <div style={{ marginTop: 28, fontSize: 36, color: "#e6e7ef", maxWidth: 1000, display: "flex", lineHeight: 1.2 }}>
     {entry.tagline}
    </div>
    <div style={{ marginTop: 48, fontSize: 22, color: "#9aa0bf", display: "flex", gap: 20 }}>
     <span>Basics to mastery</span>
     <span>·</span>
     <span>FSRS review</span>
     <span>·</span>
     <span>polymath.vercel.app/domain/{id}</span>
    </div>
   </div>
  ),
  size
 );
}
