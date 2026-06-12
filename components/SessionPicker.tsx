"use client";
import Link from "next/link";
import { Clock } from "lucide-react";
import { useUserState } from "@/lib/state";
import { DOMAIN_INDEX } from "@/data/domains";

// 5 / 15 / 45-min mode (§11C). Each links into a Review session w/ a duration hint.
export function SessionPicker() {
 const s = useUserState();
 const last = s.startedDomains.length ? s.startedDomains[s.startedDomains.length - 1] : DOMAIN_INDEX[0]?.id;
 const target = last ? `/domain/${last}` : "/";

 return (
  <div className="panel p-5">
   <div className="flex items-center gap-2 mb-3">
    <Clock size={16} className="hue" />
    <h3 className="font-display text-lg">Start a session</h3>
    <span className="dim text-xs">, fits your time, not the other way around</span>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <Link href={`/review?minutes=5`} className="panel p-4 hover:translate-y-[-1px] transition-transform">
     <p className="font-display text-2xl">5 min</p>
     <p className="dim text-sm">Due reviews only.</p>
    </Link>
    <Link href={`/review?minutes=15`} className="panel p-4 hover:translate-y-[-1px] transition-transform">
     <p className="font-display text-2xl">15 min</p>
     <p className="dim text-sm">Reviews + one new concept.</p>
    </Link>
    <Link href={target} className="panel p-4 hover:translate-y-[-1px] transition-transform">
     <p className="font-display text-2xl">45 min</p>
     <p className="dim text-sm">Deep dive: concept · quiz · mission.</p>
    </Link>
   </div>
  </div>
 );
}
