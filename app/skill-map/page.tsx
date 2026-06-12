import { SkillMap } from "@/components/SkillMap";

export const metadata = {
 title: "Skill Map",
 description: "Catalogue grouped by category with a cross-domain connections graph showing how concepts link.",
 alternates: { canonical: "/skill-map" },
 robots: { index: false, follow: true }
};

export default function SkillMapPage() { return <SkillMap />; }
