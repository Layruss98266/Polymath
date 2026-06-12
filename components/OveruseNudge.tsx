"use client";
import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

// §11C anti-overuse: after ~45 minutes of an open session, a gentle nudge.
// No FOMO, no dark patterns. Dismissible. Resets if you actually leave.
export function OveruseNudge() {
 const [show, setShow] = useState(false);

 useEffect(() => {
  const start = Date.now();
  const tick = setInterval(() => {
   if (document.hidden) return;
   if (Date.now() - start > 45 * 60 * 1000) setShow(true);
  }, 60 * 1000);
  return () => clearInterval(tick);
 }, []);

 if (!show) return null;
 return (
  <div className="fixed bottom-4 right-4 panel p-4 max-w-sm z-30" style={{ borderColor: "var(--hue)" }} role="status">
   <div className="flex items-start gap-3">
    <Coffee size={18} className="hue mt-0.5" />
    <div className="flex-1 text-sm">
     <p className="font-medium">You've been at this ~45 minutes.</p>
     <p className="dim mt-1">Breaks help memory consolidate, your next review will probably be sharper after one.</p>
     <div className="flex gap-2 mt-2">
      <button className="btn" onClick={() => setShow(false)}>Five more minutes</button>
      <button className="btn" onClick={() => setShow(false)}>Got it</button>
     </div>
    </div>
   </div>
  </div>
 );
}
