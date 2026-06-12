import { ImageResponse } from "next/og";

export const alt = "Polymath. Learn anything, daily.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
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
     background: "linear-gradient(135deg, #0b0d1a 0%, #141831 100%)",
     color: "#f3f4f8",
     fontFamily: "system-ui, sans-serif"
    }}
   >
    <div
     style={{
      width: 64,
      height: 64,
      borderRadius: 16,
      background: "#ff6b5e",
      color: "#0b0d1a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 36,
      marginBottom: 24
     }}
    >P</div>
    <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, display: "flex", flexDirection: "column" }}>
     <span>Learn anything.</span>
     <span style={{ color: "#ff6b5e" }}>Two minutes a day.</span>
    </div>
    <div style={{ marginTop: 32, fontSize: 28, color: "#9aa0bf", maxWidth: 900, display: "flex" }}>
     A daily learning loop for real-world domains. FSRS spaced repetition. Honest game loop. No dark patterns.
    </div>
    <div style={{ marginTop: 40, fontSize: 20, color: "#9aa0bf", display: "flex", gap: 24 }}>
     <span>15 Core domains</span>
     <span>·</span>
     <span>411 daily quotes</span>
     <span>·</span>
     <span>polymath.vercel.app</span>
    </div>
   </div>
  ),
  size
 );
}
