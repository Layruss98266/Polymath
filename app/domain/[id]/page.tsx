import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, DOMAIN_INDEX, findEntry } from "@/data/domains";
import { DomainView } from "@/components/DomainView";

export function generateStaticParams() {
 return DOMAIN_INDEX.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 if (!entry) return { title: "Domain not found · Polymath" };
 const title = `${entry.name} · Polymath`;
 const description = `${entry.tagline}. Learn ${entry.name} from absolute basics to mastery, with concept quizzes, spaced repetition, and real-world tasks.`;
 return {
  title,
  description,
  openGraph: { title, description, type: "article" },
  twitter:   { card: "summary_large_image", title, description }
 };
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
