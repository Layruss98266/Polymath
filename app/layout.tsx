import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POLYMATH — learn anything, daily",
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
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
