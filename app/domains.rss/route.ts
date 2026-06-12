import { DOMAIN_INDEX } from "@/data/domains";

const SITE = "https://polymath.vercel.app";

// Static RSS feed of every domain. Item ids are stable on domain id, so a feed
// reader will only flag genuinely new entries. lastBuildDate uses the build
// id to give a sensible "what's fresh" signal without needing a dynamic clock
// inside SSG.
export const dynamic = "force-static";

function xmlEscape(s: string): string {
 return s
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");
}

export async function GET() {
 const items = DOMAIN_INDEX.map((d) => `
    <item>
     <title>${xmlEscape(d.name)}</title>
     <link>${SITE}/domain/${d.id}</link>
     <guid isPermaLink="true">${SITE}/domain/${d.id}</guid>
     <category>${xmlEscape(d.category)}</category>
     <description>${xmlEscape(d.tagline)}</description>
    </item>`).join("");

 const buildId = process.env.NEXT_PUBLIC_BUILD_ID || "0";
 const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
 <channel>
  <title>Polymath domains</title>
  <link>${SITE}</link>
  <description>15 domains. Learn anything, daily.</description>
  <language>en-us</language>
  <generator>Polymath SSG. build ${xmlEscape(buildId)}</generator>${items}
 </channel>
</rss>`;

 return new Response(rss, {
  headers: {
   "content-type": "application/rss+xml; charset=utf-8",
   "cache-control": "public, max-age=600, s-maxage=86400"
  }
 });
}
