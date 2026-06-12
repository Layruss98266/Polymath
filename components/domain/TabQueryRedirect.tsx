"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { legacyTabRedirect } from "@/lib/tabs";

// One-time client-side redirect from /domain/[id]?tab=concepts (old shape)
// to /domain/[id]/concepts (new shape). Lives in the domain layout so it
// catches every entry point. Runs once per mount.
export function TabQueryRedirect({ domainId }: { domainId: string }) {
 const sp = useSearchParams();
 const router = useRouter();
 const tab = sp?.get("tab") ?? null;
 useEffect(() => {
  if (!tab) return;
  const dest = legacyTabRedirect(domainId, tab);
  if (dest) router.replace(dest);
 }, [domainId, tab, router]);
 return null;
}
