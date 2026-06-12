"use client";
import Link from "next/link";
import { Github, Heart, ShieldCheck, WifiOff, Zap } from "lucide-react";

const NAV = {
 Learn: [
  { href: "/",           label: "Home" },
  { href: "/skill-map",  label: "Skill Map" },
  { href: "/search",     label: "Search" },
  { href: "/my-list",    label: "My List" }
 ],
 Practice: [
  { href: "/review",     label: "Review" },
  { href: "/dashboard",  label: "Dashboard" }
 ],
 Tool: [
  { href: "/about",      label: "About" },
  { href: "/settings",   label: "Settings" }
 ]
};

const TRUST = [
 { Icon: ShieldCheck, text: "No login, no tracking" },
 { Icon: WifiOff,    text: "Works offline once loaded" },
 { Icon: Zap,        text: "FSRS spaced repetition" }
];

export function Footer() {
 return (
  <footer className="border-t mt-12 sm:mt-16 pt-10 pb-6 px-4" style={{ borderColor: "var(--line)" }}>
   <div className="max-w-6xl mx-auto space-y-8">
    {/* Trust strip */}
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
     {TRUST.map((t, i) => (
      <li key={i} className="flex items-center gap-2 dim">
       <t.Icon size={14} className="hue" /> {t.text}
      </li>
     ))}
    </ul>

    {/* Nav grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
     <div>
      <Link href="/" className="font-display text-lg block mb-2">POLYMATH</Link>
      <p className="dim text-xs leading-relaxed">A daily learning loop for real-world domains, built on epistemic honesty and spaced repetition. No dark patterns.</p>
     </div>
     {(Object.entries(NAV) as [string, { href: string; label: string }[]][]).map(([heading, items]) => (
      <div key={heading}>
       <p className="dim text-xs uppercase tracking-widest mb-3">{heading}</p>
       <ul className="space-y-2">
        {items.map((it) => (
         <li key={it.href}>
          <Link href={it.href} className="hover:underline">{it.label}</Link>
         </li>
        ))}
       </ul>
      </div>
     ))}
    </div>

    {/* Bottom strip */}
    <div className="pt-6 border-t flex flex-wrap items-center gap-3 text-xs dim" style={{ borderColor: "var(--line)" }}>
     <span>Resource names are real, but editions, prices, and links change. Verify before buying.</span>
     <span className="hidden sm:inline">.</span>
     <span>Education, not advice. See each domain's safety note.</span>
     <span className="ml-auto flex items-center gap-3">
      <a
       href="https://github.com/Layruss98266/Polymath"
       target="_blank"
       rel="noreferrer"
       className="inline-flex items-center gap-1 hover:underline"
       aria-label="View source on GitHub"
      ><Github size={12} /> Source</a>
      <span className="inline-flex items-center gap-1">Built with <Heart size={12} className="hue" /> · MIT</span>
     </span>
    </div>
   </div>
  </footer>
 );
}
