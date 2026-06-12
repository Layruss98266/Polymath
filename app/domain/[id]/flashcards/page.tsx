import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { FlashcardsTab } from "@/components/tabs/FlashcardsTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} flashcards`,
  description: `FSRS spaced-repetition flashcards for ${name}.`,
  alternates: { canonical: `/domain/${id}/flashcards` }
 };
}

export default async function FlashcardsPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <FlashcardsTab d={domain} />; } catch { notFound(); }
}
