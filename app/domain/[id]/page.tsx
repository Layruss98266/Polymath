import { notFound } from "next/navigation";
import { loadDomain, DOMAIN_INDEX } from "@/data/domains";
import { DomainView } from "@/components/DomainView";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export default async function DomainPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try {
  const domain = await loadDomain(id);
  return <DomainView domain={domain} />;
 } catch {
  notFound();
 }
}
