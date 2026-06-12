"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Floating "back to top" button. Appears after scrolling past ~600px.
// Sits above the mobile BottomNav so it doesn't collide on small screens.
export function ScrollTopFab() {
 const [show, setShow] = useState(false);
 useEffect(() => {
  let ticking = false;
  const check = () => {
   const next = window.scrollY > 600;
   // Only re-render when crossing the threshold.
   setShow((cur) => (cur === next ? cur : next));
   ticking = false;
  };
  const onScroll = () => {
   if (ticking) return;
   ticking = true;
   requestAnimationFrame(check);
  };
  check();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, []);
 if (!show) return null;
 return (
  <button
   type="button"
   aria-label="Scroll to top"
   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
   className="fixed right-3 z-30 grid place-items-center w-10 h-10 rounded-full border shadow-lg backdrop-blur-md no-print"
   style={{
    bottom: "calc(env(safe-area-inset-bottom, 0px) + 72px)",
    background: "color-mix(in oklab, var(--bg) 90%, transparent)",
    borderColor: "var(--line)",
    color: "var(--hue)"
   }}
  >
   <ArrowUp size={16} />
  </button>
 );
}
