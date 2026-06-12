"use client";
import Link from "next/link";
import { Github, Heart, ShieldCheck, WifiOff, Brain, ArrowUpRight, Award, Sparkles } from "lucide-react";

const NAV = {
 Catalogue: [
  { href: "/",          label: "Home" },
  { href: "/skill-map", label: "Skill Map" },
  { href: "/search",    label: "Search" }
 ],
 Practice: [
  { href: "/review",    label: "Review" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/my-list",   label: "My List" }
 ],
 App: [
  { href: "/about",     label: "About" },
  { href: "/settings",  label: "Settings" }
 ]
};

const TRUST = [
 { Icon: ShieldCheck, title: "No login, no tracking",         body: "Progress lives in your browser. No accounts, no analytics, no cookies for tracking." },
 { Icon: WifiOff,    title: "Works offline once loaded",     body: "Static export with manifest. Install to home screen on phone or desktop." },
 { Icon: Brain,      title: "FSRS spaced repetition",        body: "The same algorithm modern Anki uses. Cards resurface just before you forget." },
 { Icon: Award,      title: "Honest game loop",              body: "XP for real learning actions only. No FOMO push, no infinite scroll, no manipulative streaks." }
];

export function Footer() {
 return (
  <footer className="border-t mt-12 sm:mt-16 px-4 pb-6" style={{ borderColor: "var(--line)" }}>
   {/* Trust strip */}
   <section className="max-w-6xl mx-auto pt-10 pb-8">
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
     {TRUST.map((t, i) => (
      <li key={i} className="flex items-start gap-3">
       <span className="grid place-items-center w-9 h-9 rounded-xl shrink-0" style={{ background: "color-mix(in oklab, var(--hue) 12%, transparent)", color: "var(--hue)" }}>
        <t.Icon size={16} />
       </span>
       <div className="min-w-0">
        <p className="text-sm font-medium">{t.title}</p>
        <p className="dim text-xs mt-0.5 leading-relaxed">{t.body}</p>
       </div>
      </li>
     ))}
    </ul>
   </section>

   {/* Nav grid */}
   <section className="max-w-6xl mx-auto pt-8 grid grid-cols-1 sm:grid-cols-4 gap-8 border-t pb-8" style={{ borderColor: "var(--line)" }}>
    <div>
     <Link href="/" className="inline-flex items-center gap-1.5">
      <span className="grid place-items-center w-7 h-7 rounded-lg" style={{ background: "var(--hue)", color: "#0b0d1a" }}>
       <Sparkles size={14} />
      </span>
      <span className="font-display text-lg">POLYMATH</span>
     </Link>
     <p className="dim text-xs leading-relaxed mt-3 max-w-xs">A daily learning loop for real-world domains. Built on epistemic honesty and spaced repetition. No dark patterns.</p>
     <a
      href="https://github.com/Layruss98266/Polymath"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-xs mt-4 hover:underline"
     >
      <Github size={12} /> View source <ArrowUpRight size={11} />
     </a>
    </div>

    {(Object.entries(NAV) as [string, { href: string; label: string }[]][]).map(([heading, items]) => (
     <div key={heading}>
      <p className="section-eyebrow mb-3">{heading}</p>
      <ul className="space-y-2">
       {items.map((it) => (
        <li key={it.href}>
         <Link href={it.href} className="text-sm hover:underline inline-flex items-center gap-1">
          {it.label}
         </Link>
        </li>
       ))}
      </ul>
     </div>
    ))}
   </section>

   {/* Bottom strip. Minimal: project link, version note, license, a11y. */}
   <section className="max-w-6xl mx-auto pt-6 border-t flex flex-wrap items-center gap-x-4 gap-y-2 text-xs dim" style={{ borderColor: "var(--line)" }}>
    <span className="inline-flex items-center gap-1.5">
     <Heart size={11} className="hue" /> Built with care, MIT licensed.
    </span>
    <span className="inline-flex items-center gap-2">
     <span>v1.0</span>
     <span aria-hidden="true">·</span>
     <Link href="/about#accessibility" className="hover:underline">Accessibility statement</Link>
     <span aria-hidden="true">·</span>
     <span>Education, not advice.</span>
    </span>
    <a
     href="https://github.com/Layruss98266/Polymath"
     target="_blank"
     rel="noreferrer"
     className="ml-auto inline-flex items-center gap-1 hover:underline"
    >
     <Github size={11} /> Source <ArrowUpRight size={10} />
    </a>
   </section>
  </footer>
 );
}
