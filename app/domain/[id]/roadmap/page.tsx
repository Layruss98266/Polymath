import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { RoadmapTab } from "@/components/tabs/RoadmapTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} roadmap`,
  description: `Seven-stage roadmap from Novice to Grandmaster in ${name}, with milestones and time estimates.`,
  alternates: { canonical: `/domain/${id}/roadmap` }
 };
}

export default async function RoadmapPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <RoadmapTab d={domain} />; } catch { notFound(); }
}
