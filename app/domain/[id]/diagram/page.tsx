import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { DiagramTab } from "@/components/tabs/DiagramTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} diagrams`,
  description: `Theme-aware SVG diagrams that visualise core ${name} ideas.`,
  alternates: { canonical: `/domain/${id}/diagram` }
 };
}

export default async function DiagramPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <DiagramTab d={domain} />; } catch { notFound(); }
}
