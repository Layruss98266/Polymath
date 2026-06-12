import type { MetadataRoute } from "next";
import { DOMAIN_INDEX, loadDomain } from "@/data/domains";
import { TABS } from "@/lib/tabs";

const BASE = "https://polymath.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const now = new Date().toISOString();
 const staticRoutes = ["/", "/about", "/paths", "/glossary", "/changelog"];

 const out: MetadataRoute.Sitemap = [];
 for (const path of staticRoutes) {
  out.push({ url: `${BASE}${path}`, lastModified: now, changeFrequency: "weekly", priority: path === "/" ? 1 : 0.6 });
 }

 // Each domain: overview, every tab, every subdomain, every concept deep page.
 for (const meta of DOMAIN_INDEX) {
  out.push({ url: `${BASE}/domain/${meta.id}`, lastModified: now, changeFrequency: "weekly", priority: 0.7 });
  for (const t of TABS) {
   if (!t.segment) continue;
   out.push({ url: `${BASE}/domain/${meta.id}/${t.segment}`, lastModified: now, changeFrequency: "weekly", priority: 0.55 });
  }
  try {
   const d = await loadDomain(meta.id);
   for (const sd of d.subdomains ?? []) {
    out.push({ url: `${BASE}/domain/${meta.id}/sub/${sd.id}`, lastModified: now, changeFrequency: "weekly", priority: 0.6 });
   }
   for (let i = 0; i < d.concepts.length; i++) {
    out.push({ url: `${BASE}/domain/${meta.id}/concepts/${i}`, lastModified: now, changeFrequency: "weekly", priority: 0.5 });
   }
  } catch {}
 }
 return out;
}
