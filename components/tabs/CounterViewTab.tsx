import type { Domain } from "@/lib/types";
import { Shield } from "lucide-react";

export function CounterViewTab({ d }: { d: Domain }) {
 return (
  <div className="panel p-5 space-y-3">
   <div className="flex items-center gap-2">
    <Shield size={16} className="hue" />
    <h2 className="font-display text-xl">The strongest counter-argument</h2>
   </div>
   <p className="dim text-sm">
    We steelman the case against this domain's conventional wisdom , labelling certainty honestly is rarer (and more valuable) than another confident summary.
   </p>
   <p>{d.counterView}</p>
  </div>
 );
}
