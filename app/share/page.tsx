import { Suspense } from "react";
import type { Metadata } from "next";
import { ShareView } from "@/components/ShareView";

export const metadata: Metadata = {
 title: "Polymath profile",
 description: "A read-only snapshot of progress shared from Polymath.",
 robots: { index: false, follow: false }
};

export default function SharePage() {
 return (
  <Suspense fallback={null}>
   <ShareView />
  </Suspense>
 );
}
