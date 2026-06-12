"use client";
import Link from "next/link";
import { Clock } from "lucide-react";

// 5 / 15-min mode (§11C). Each links into a Review session w/ a duration hint.
// The 45-min preset was removed: it routed to a domain root with no scripted
// review -> new-concept -> mission flow, so it advertised something the app
// did not deliver. 15-min is highlighted as the recommended default.
export function SessionPicker() {
 return (
  <div className="panel p-5">
   <div className="flex items-center gap-2 mb-3">
    <Clock size={16} className="hue" />
    <h3 className="font-display text-lg">Start a session</h3>
    <span className="dim text-xs">, fits your time, not the other way around</span>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <Link href={`/review?minutes=5`} className="panel p-4 hover:translate-y-[-1px] transition-transform">
     <p className="font-display text-2xl">5 min</p>
     <p className="dim text-sm">Due reviews only.</p>
    </Link>
    <Link
     href={`/review?minutes=15`}
     className="panel p-4 hover:translate-y-[-1px] transition-transform"
     style={{ borderColor: "var(--hue)", background: "color-mix(in oklab, var(--hue) 12%, transparent)" }}
     aria-label="Start a 15 minute session, recommended"
    >
     <div className="flex items-center gap-2">
      <p className="font-display text-2xl">15 min</p>
      <span className="chip" style={{ background: "var(--hue)", color: "#0b0d1a", borderColor: "var(--hue)" }}>Recommended</span>
     </div>
     <p className="dim text-sm">Reviews + one new concept.</p>
    </Link>
   </div>
  </div>
 );
}
