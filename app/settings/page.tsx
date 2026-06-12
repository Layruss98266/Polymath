import { SettingsView } from "@/components/SettingsView";

export const metadata = {
 title: "Settings",
 description: "Theme, sound, reset, and progress import/export.",
 alternates: { canonical: "/settings" },
 robots: { index: false, follow: false }
};

export default function SettingsPage() {
 return <SettingsView />;
}
