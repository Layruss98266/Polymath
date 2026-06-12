import { ImageResponse } from "next/og";

// Static-rendered favicon. 32×32 with the Polymath P glyph on the brand hue.
// Replaces the missing /icon-192.png that the manifest used to claim.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
 return new ImageResponse(
  (
   <div
    style={{
     width: "100%",
     height: "100%",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     fontSize: 22,
     fontWeight: 800,
     background: "#ff6b5e",
     color: "#0b0d1a",
     borderRadius: 6
    }}
   >
    P
   </div>
  ),
  size
 );
}
