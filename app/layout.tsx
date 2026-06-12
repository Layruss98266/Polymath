import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StoreProvider } from "@/lib/state";
import { TopBar } from "@/components/TopBar";
import { OveruseNudge } from "@/components/OveruseNudge";
import { Onboarding } from "@/components/Onboarding";

export const metadata: Metadata = {
 title: "POLYMATH , learn anything, daily",
 description:
  "A daily-habit learning app teaching dozens of real-world domains from absolute basics to mastery. Spaced repetition, real missions, real mentors."
};

export const viewport: Viewport = {
 themeColor: "#0b0d1a",
 width: "device-width",
 initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body>
    <StoreProvider>
     <TopBar />
     <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
     <OveruseNudge />
    <Onboarding />
     <footer className="mx-auto max-w-6xl px-4 py-10 text-xs dim">
      Resource names are real but editions/prices/links change , verify before buying.
      Built per <code>POLYMATH</code> v5 spec. Education, not advice , see each domain's safety note.
     </footer>
    </StoreProvider>
   </body>
  </html>
 );
}
