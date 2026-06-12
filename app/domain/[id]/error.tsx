"use client";
import { useEffect } from "react";
import Link from "next/link";

// Domain-scoped error boundary. Keeps the layout chrome (header, tab bar,
// subdomain strip) visible so the user retains context, and lets them try
// the page again or jump back to /.
export default function DomainError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
 useEffect(() => {
  if (process.env.NODE_ENV !== "production") console.error("[domain] route error", error);
 }, [error]);

 return (
  <div className="panel p-5 text-sm space-y-3" style={{ borderColor: "var(--bad)" }}>
   <p className="font-medium" style={{ color: "var(--bad)" }}>This section ran into a problem.</p>
   <p className="dim">Try again, or pick a different tab from the menu above.</p>
   {error?.digest && <p className="dim text-[10px]">id: {error.digest}</p>}
   <div className="flex gap-2 flex-wrap">
    <button className="btn" onClick={reset}>Try again</button>
    <Link className="btn" href="/">Back to home</Link>
   </div>
  </div>
 );
}
