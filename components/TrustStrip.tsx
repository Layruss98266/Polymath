import { Lock, EyeOff, ShieldCheck, Coins } from "lucide-react";

// "What this app is and is not" strip. Single panel band, four quiet
// columns with hairline dividers. No card-per-claim noise. Reads as a
// footer-adjacent statement of values, not a feature list.
export function TrustStrip() {
 const ITEMS = [
  {
   Icon: Lock,
   title: "No login",
   body: "Progress lives in your browser. No account, no email."
  },
  {
   Icon: EyeOff,
   title: "No analytics",
   body: "No trackers, no pixels, no session replays."
  },
  {
   Icon: ShieldCheck,
   title: "Per-claim status",
   body: "Settled, debated, or framework. We say so."
  },
  {
   Icon: Coins,
   title: "Free, no upsell",
   body: "No paywall planned. Paid resources are tagged."
  }
 ];
 return (
  <section aria-label="What this app is" className="space-y-3">
   <p className="dim text-[11px] uppercase tracking-widest">Quietly different</p>
   <div
    className="panel grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden"
    style={{ background: "var(--line)" }}
   >
    {ITEMS.map(({ Icon, title, body }) => (
     <article
      key={title}
      className="p-4 sm:p-5 flex flex-col gap-2"
      style={{ background: "var(--panel)" }}
     >
      <Icon size={16} className="hue" aria-hidden="true" />
      <p className="font-medium text-sm">{title}</p>
      <p className="dim text-xs leading-relaxed">{body}</p>
     </article>
    ))}
   </div>
   <p className="dim text-xs">
    Open-source, MIT licensed.{" "}
    <a
     href="https://github.com/Layruss98266/Polymath"
     target="_blank"
     rel="noopener noreferrer"
     className="underline hover:opacity-80"
    >Verify on GitHub</a>.
   </p>
  </section>
 );
}
