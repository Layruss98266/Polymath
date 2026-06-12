"use client";
import { Quote as QuoteIcon } from "lucide-react";
import { useTodayKey } from "@/lib/state";
import { dailyQuote } from "@/data/quotes";

export function DailyQuote() {
 const day = useTodayKey();
 if (!day) return null;
 const q = dailyQuote(day);
 return (
  <aside className="panel p-5">
   <div className="flex items-start gap-3">
    <QuoteIcon size={20} className="hue mt-1 shrink-0" />
    <div className="flex-1 min-w-0">
     <p className="text-xs uppercase tracking-widest dim">Quote of the day</p>
     <blockquote className="mt-1 text-base sm:text-lg leading-relaxed">{q.text}</blockquote>
     <p className="dim text-sm mt-2">{q.by}{q.work ? `, ${q.work}` : ""}</p>
    </div>
   </div>
  </aside>
 );
}
