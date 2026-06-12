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
  <div className="fixed bottom-4 right-4 left-4 sm:left-auto surface p-4 sm:max-w-sm z-30 anim-slide-up" style={{ borderColor: "var(--hue)" }} role="status">
   <div className="flex items-start gap-3">
    <span className="grid place-items-center w-9 h-9 rounded-xl shrink-0 bg-hue-soft" style={{ color: "var(--hue)" }}>
     <Coffee size={16} />
    </span>
    <div className="flex-1 text-sm min-w-0">
     <p className="font-medium">You have been at this about 45 minutes.</p>
     <p className="dim mt-1 leading-relaxed">Breaks help memory consolidate. Your next review will probably feel sharper after one.</p>
     <div className="flex gap-2 mt-3">
      <button className="btn" onClick={() => setShow(false)}>Five more</button>
      <button className="btn btn-primary" onClick={() => setShow(false)}>Got it</button>
     </div>
    </div>
   </div>
  </div>
 );
}
