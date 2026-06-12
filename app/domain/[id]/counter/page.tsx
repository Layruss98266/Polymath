import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { CounterViewTab } from "@/components/tabs/CounterViewTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} counter view`,
  description: `Steelman the strongest case against the conventional wisdom in ${name}.`,
  alternates: { canonical: `/domain/${id}/counter` }
 };
}

export default async function CounterPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <CounterViewTab d={domain} />; } catch { notFound(); }
}
