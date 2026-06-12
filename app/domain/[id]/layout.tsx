import { Suspense } from "react";
import { notFound } from "next/navigation";
import { loadDomain, DOMAIN_INDEX } from "@/data/domains";
import { DomainHeader } from "@/components/domain/DomainHeader";
import { DomainTabBar } from "@/components/domain/DomainTabBar";
import { SubdomainStrip } from "@/components/domain/SubdomainStrip";
import { DomainProvider } from "@/components/domain/DomainProvider";
import { TabQueryRedirect } from "@/components/domain/TabQueryRedirect";

// Shared chrome for every page under /domain/[id]/...
// Children receive: header, safety note, tab bar, subdomain strip, then the
// page-specific content. The store starts the domain on first mount via
// DomainProvider so the original useEffect from DomainView is preserved.

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export default async function DomainLayout({
 params,
 children
}: {
 params: Promise<{ id: string }>;
 children: React.ReactNode;
 }) {
 const { id } = await params;
 let domain;
 try { domain = await loadDomain(id); } catch { notFound(); }

 const style = { ["--hue" as string]: domain.hue } as React.CSSProperties;

 return (
  <DomainProvider domainId={domain.id}>
   <Suspense fallback={null}>
    <TabQueryRedirect domainId={domain.id} />
   </Suspense>
   <div className="space-y-4" style={style}>
    <DomainHeader domain={domain} />

    {domain.safetyNote && (
     <div className="panel p-3 text-sm" style={{ borderColor: "var(--hue)" }}>
      <strong>Note. </strong>
      <span className="dim">{domain.safetyNote}</span>
     </div>
    )}

    <DomainTabBar domain={domain} />
    <SubdomainStrip domain={domain} />

    <section>{children}</section>
   </div>
  </DomainProvider>
 );
}
