import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { ConceptsTab } from "@/components/tabs/ConceptsTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} concepts`,
  description: `Every core concept in ${name}, explained in plain language with a 5-stage Predict, Read, Reflect, Check, Apply flow.`,
  alternates: { canonical: `/domain/${id}/concepts` }
 };
}

export default async function ConceptsPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try {
  const domain = await loadDomain(id);
  return <ConceptsTab d={domain} />;
 } catch { notFound(); }
}
