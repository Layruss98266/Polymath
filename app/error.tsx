"use client";
import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
 useEffect(() => {
  if (process.env.NODE_ENV !== "production") console.error(error);
 }, [error]);

 return (
  <div className="panel p-8 text-center max-w-2xl mx-auto space-y-4 mt-12" style={{ borderColor: "var(--bad)" }}>
   <AlertTriangle size={40} style={{ color: "var(--bad)" }} className="mx-auto" />
   <h1 className="font-display text-2xl">Something went wrong</h1>
   <p className="dim">Your progress is saved locally; nothing was lost. Try again, or go back to Home.</p>
   <div className="flex flex-wrap justify-center gap-2 pt-2">
    <button className="btn" onClick={() => reset()}><RotateCcw size={14} /> Try again</button>
    <Link href="/" className="btn">Back to Home</Link>
   </div>
   {process.env.NODE_ENV !== "production" && (
    <pre className="text-left text-xs panel p-3 overflow-auto mt-4" style={{ color: "var(--bad)" }}>{error.message}</pre>
   )}
  </div>
 );
}
