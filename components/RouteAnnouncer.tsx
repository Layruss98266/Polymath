"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Announces route changes to screen readers via a polite live region. Next.js
// 13+ App Router does not announce navigation by default the way the classic
// `next/router` did. Sighted users see the address bar change; non-sighted
// users get nothing without this component.
//
// Heuristic for the announcement label:
//  1. After paint, read the first <h1> in the document.
//  2. Fall back to the document title.
//  3. Fall back to the path string.
export function RouteAnnouncer() {
 const pathname = usePathname();
 const [msg, setMsg] = useState("");
 useEffect(() => {
  // Wait one tick so the new page's <h1> has mounted.
  const t = setTimeout(() => {
   const h1 = document.querySelector("main h1")?.textContent?.trim();
   const title = document.title?.trim();
   setMsg(h1 || title || (pathname ?? ""));
  }, 80);
  return () => clearTimeout(t);
 }, [pathname]);
 return (
  <div
   role="status"
   aria-live="polite"
   aria-atomic="true"
   className="sr-only"
  >
   {msg}
  </div>
 );
}
