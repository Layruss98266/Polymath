import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { MissionsTab } from "@/components/tabs/MissionsTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} missions`,
  description: `Real-world missions for ${name}. Small experiments that take an idea from the page into your week.`,
  alternates: { canonical: `/domain/${id}/missions` }
 };
}

export default async function MissionsPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <MissionsTab d={domain} />; } catch { notFound(); }
}
