import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { ResourcesTab } from "@/components/tabs/ResourcesTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} resources`,
  description: `Ranked free and paid resources for ${name}: books, articles, courses, videos. Each tagged primary, secondary, or popular.`,
  alternates: { canonical: `/domain/${id}/resources` }
 };
}

export default async function ResourcesPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <ResourcesTab d={domain} />; } catch { notFound(); }
}
