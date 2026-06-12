import { Lock, EyeOff, ShieldCheck, Coins } from "lucide-react";

// "What this app is and is not" strip near the bottom of home. Sets
// expectations explicitly so the reader doesn't have to dig into /about.
export function TrustStrip() {
 const ITEMS = [
  {
   Icon: Lock,
   title: "No login",
   body: "Your progress lives in this browser. There is no account to create, no email to give up."
  },
  {
   Icon: EyeOff,
   title: "No analytics",
   body: "We don't run trackers, page-view pixels, or session replays. Nothing leaves your machine."
  },
  {
   Icon: ShieldCheck,
   title: "Per-claim status badges",
   body: "Every concept is labelled settled, debated, or framework. We say when something is contested."
  },
  {
   Icon: Coins,
   title: "Free, no upsell",
   body: "There is no paywall and no plan to add one. Paid resources we recommend are clearly tagged."
  }
 ];
 return (
  <section aria-label="What this app is" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
   {ITEMS.map(({ Icon, title, body }) => (
    <article key={title} className="panel p-3">
     <Icon size={14} className="hue mb-2" />
     <p className="font-medium text-sm">{title}</p>
     <p className="dim text-xs mt-1 leading-relaxed">{body}</p>
    </article>
   ))}
  </section>
 );
}
