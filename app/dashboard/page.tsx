import { Dashboard } from "@/components/Dashboard";

export const metadata = {
 title: "Dashboard",
 description: "Your XP, streak, mastery radar, achievements, and calibration score across every domain you have touched.",
 alternates: { canonical: "/dashboard" },
 robots: { index: false, follow: false }
};

export default function DashboardPage() { return <Dashboard />; }
