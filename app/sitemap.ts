import type { MetadataRoute } from "next";
import { DOMAIN_INDEX } from "@/data/domains";

const BASE = "https://polymath.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
 const now = new Date().toISOString();
 const staticRoutes = ["/", "/about", "/review", "/dashboard", "/skill-map", "/my-list", "/search", "/settings"];
 const domainRoutes = DOMAIN_INDEX.map((d) => `/domain/${d.id}`);
 return [...staticRoutes, ...domainRoutes].map((path) => ({
  url: `${BASE}${path}`,
  lastModified: now,
  changeFrequency: "weekly",
  priority: path === "/" ? 1 : 0.7
 }));
}
