import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadDomain, findEntry } from "@/data/domains";
import { BasicsTab } from "@/components/tabs/BasicsTab";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
 const { id } = await params;
 const entry = findEntry(id);
 if (!entry) return { title: "Domain not found" };
 const title = `${entry.name}`;
 const description = `${entry.tagline}. Learn ${entry.name} from absolute basics to mastery, with concept quizzes, spaced repetition, and real-world tasks.`;
 return {
  title,
  description,
  alternates: { canonical: `/domain/${id}` },
  openGraph: { title, description, type: "article", url: `/domain/${id}` },
  twitter: { card: "summary_large_image", title, description }
 };
}

export default async function DomainBasicsPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 try {
  const domain = await loadDomain(id);
  return <BasicsTab d={domain} />;
 } catch {
  notFound();
 }
}
