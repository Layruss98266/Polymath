import { ImageResponse } from "next/og";

// Apple touch icon: rendered statically so we don't need a PNG on disk.
// 180×180 matches the size Apple devices prefer.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
 return new ImageResponse(
  (
   <div
    style={{
     width: "100%",
     height: "100%",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     fontSize: 120,
     fontWeight: 800,
     background: "#ff6b5e",
     color: "#0b0d1a",
     borderRadius: 36
    }}
   >
    P
   </div>
  ),
  size
 );
}
