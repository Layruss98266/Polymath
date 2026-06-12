import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { CheatsheetTab } from "@/components/tabs/CheatsheetTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} cheat sheet`,
  description: `One-page printable handout for ${name}. The bare-minimum knowledge worth carrying.`,
  alternates: { canonical: `/domain/${id}/cheatsheet` }
 };
}

export default async function CheatsheetPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <CheatsheetTab d={domain} />; } catch { notFound(); }
}
