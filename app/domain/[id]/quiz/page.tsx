import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry, DOMAIN_INDEX } from "@/data/domains";
import { QuizTab } from "@/components/tabs/QuizTab";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 const name = entry?.name ?? id;
 return {
  title: `${name} quiz`,
  description: `Misconception-mapped quiz for ${name}, with confidence calibration.`,
  alternates: { canonical: `/domain/${id}/quiz` }
 };
}

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try { const domain = await loadDomain(id); return <QuizTab d={domain} />; } catch { notFound(); }
}
