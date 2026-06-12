import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StoreProvider } from "@/lib/state";
import { TopBar } from "@/components/TopBar";
import { OveruseNudge } from "@/components/OveruseNudge";
import { Onboarding } from "@/components/Onboarding";
import { Toaster } from "@/components/Toaster";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
 title: "POLYMATH. Learn anything, daily.",
 description:
  "A daily-habit learning app teaching dozens of real-world domains from absolute basics to mastery. Spaced repetition, real missions, real frameworks.",
 manifest: "/manifest.webmanifest"
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
     <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:btn">Skip to content</a>
     <TopBar />
     <main id="main" className="mx-auto max-w-6xl px-4 py-6 pb-24 sm:pb-6">{children}</main>
     <OveruseNudge />
     <Onboarding />
     <Toaster />
     <KeyboardShortcuts />
     <BottomNav />
     <Footer />
    </StoreProvider>
   </body>
  </html>
 );
}
