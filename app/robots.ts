import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
 return {
  rules: [
   {
    userAgent: "*",
    allow: "/",
    // Defence in depth alongside per-page robots: noindex on the personal
    // surfaces. Search and Share are also personal/contextual and have
    // nothing to offer search-engine crawlers.
    disallow: [
     "/api/",
     "/_next/",
     "/review",
     "/dashboard",
     "/skill-map",
     "/my-list",
     "/settings",
     "/share",
     "/search"
    ]
   }
  ],
  sitemap: "https://polymath.vercel.app/sitemap.xml"
 };
}
