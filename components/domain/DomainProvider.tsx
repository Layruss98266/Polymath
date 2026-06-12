"use client";
import { useEffect } from "react";
import { useActions } from "@/lib/state";

// Marks the domain as "started" on first mount of any tab page. Keeps that
// side-effect out of every individual tab component.
export function DomainProvider({ domainId, children }: { domainId: string; children: React.ReactNode }) {
 const a = useActions();
 useEffect(() => { a.startDomain(domainId); }, [domainId, a]);
 return <>{children}</>;
}
