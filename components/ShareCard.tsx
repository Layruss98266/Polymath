"use client";
import { useRef, useState } from "react";
import { Share2, Download } from "lucide-react";
import { useUserState } from "@/lib/state";
import { levelOf, levelProgress, globalRank, domainRank } from "@/lib/xp";
import { DOMAIN_INDEX } from "@/data/domains";
import { shallowMasteryPct, SHARE_RANK_DEFAULT_TOTALS } from "@/lib/shareRank";

// Render a shareable PNG of the user's progress using an offscreen canvas.
// Lazy: only constructs the canvas on demand. Lives in Settings.

export function ShareCard() {
 const s = useUserState();
 const [busy, setBusy] = useState(false);
 const canvasRef = useRef<HTMLCanvasElement>(null);

 const generate = async () => {
  setBusy(true);
  try {
   const canvas = canvasRef.current || document.createElement("canvas");
   canvas.width = 1200;
   canvas.height = 630;
   const ctx = canvas.getContext("2d");
   if (!ctx) throw new Error("canvas unavailable");

   // Background gradient
   const grad = ctx.createLinearGradient(0, 0, 1200, 630);
   grad.addColorStop(0, "#0b0d1a");
   grad.addColorStop(1, "#141831");
   ctx.fillStyle = grad;
   ctx.fillRect(0, 0, 1200, 630);

   // Coral accent block
   ctx.fillStyle = "#ff6b5e";
   ctx.fillRect(80, 80, 56, 56);
   ctx.fillStyle = "#0b0d1a";
   ctx.font = "bold 36px system-ui";
   ctx.textBaseline = "middle";
   ctx.textAlign = "center";
   ctx.fillText("P", 108, 110);

   // Title
   ctx.fillStyle = "#f3f4f8";
   ctx.font = "bold 48px system-ui";
   ctx.textAlign = "left";
   ctx.textBaseline = "alphabetic";
   const lp = levelProgress(s.xp);
   const rank = globalRank(s.xp);
   ctx.fillText(`Level ${lp.current} . ${rank.name}`, 160, 120);

   ctx.fillStyle = "#9aa0bf";
   ctx.font = "24px system-ui";
   ctx.fillText("My Polymath progress", 160, 150);

   // Stats row
   const stats = [
    { n: String(s.xp), label: "XP" },
    { n: String(s.currentStreak), label: "day streak" },
    { n: String(s.startedDomains.length), label: "domains touched" },
    { n: String(s.cards.reduce((sum, c) => sum + c.reps, 0)), label: "cards reviewed" }
   ];
   stats.forEach((st, i) => {
    const x = 80 + i * 270;
    const y = 250;
    ctx.fillStyle = "#ff6b5e";
    ctx.font = "bold 72px system-ui";
    ctx.fillText(st.n, x, y);
    ctx.fillStyle = "#9aa0bf";
    ctx.font = "20px system-ui";
    ctx.fillText(st.label, x, y + 32);
   });

   // Top 3 domains by mastery. Uses the shared shallow estimator so the
   // ShareCard, the Settings share link, and the Dashboard all agree on rank.
   const ranks = DOMAIN_INDEX
    .filter((d) => s.startedDomains.includes(d.id))
    .map((d) => {
     const dp = s.domainProgress[d.id];
     const m = shallowMasteryPct(dp, SHARE_RANK_DEFAULT_TOTALS);
     return { d, m, rank: domainRank(m) };
    })
    .sort((a, b) => b.m - a.m)
    .slice(0, 3);

   ctx.fillStyle = "#9aa0bf";
   ctx.font = "20px system-ui";
   ctx.fillText("Top domains", 80, 380);

   ranks.forEach((r, i) => {
    const y = 410 + i * 50;
    ctx.fillStyle = r.d.hue;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(80, y, 36, 36, 8) : ctx.rect(80, y, 36, 36);
    ctx.fill();
    ctx.fillStyle = "#f3f4f8";
    ctx.font = "24px system-ui";
    ctx.textBaseline = "middle";
    ctx.fillText(r.d.name, 130, y + 18);
    ctx.fillStyle = "#9aa0bf";
    ctx.font = "18px system-ui";
    ctx.fillText(`${r.rank}, ${Math.round(r.m * 100)}%`, 130 + 360, y + 18);
   });

   // Footer
   ctx.fillStyle = "#9aa0bf";
   ctx.font = "18px system-ui";
   ctx.textAlign = "left";
   ctx.textBaseline = "alphabetic";
   ctx.fillText("polymath.vercel.app", 80, 580);
   ctx.textAlign = "right";
   ctx.fillText("Learn anything, two minutes a day.", 1120, 580);

   const blob: Blob | null = await new Promise((res) => canvas.toBlob(res, "image/png"));
   if (!blob) throw new Error("blob");
   const url = URL.createObjectURL(blob);
   const link = document.createElement("a");
   link.href = url;
   link.download = `polymath-card-L${lp.current}.png`;
   link.click();
   URL.revokeObjectURL(url);
  } finally {
   setBusy(false);
  }
 };

 return (
  <div className="space-y-2 pt-2">
   <label className="text-sm">Shareable progress card</label>
   <p className="dim text-xs">A 1200x630 PNG with your level, XP, streak, and top 3 domains. Generated locally, never uploaded.</p>
   <button className="btn" onClick={generate} disabled={busy}><Share2 size={14} /> {busy ? "Rendering..." : "Generate share card"}</button>
   <canvas ref={canvasRef} style={{ display: "none" }} />
  </div>
 );
}
