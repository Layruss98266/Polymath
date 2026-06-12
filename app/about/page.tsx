import { AboutView } from "@/components/AboutView";

export const metadata = {
 title: "About",
 description: "How Polymath works, what it believes about learning, and the honest limits of the app.",
 alternates: { canonical: "/about" }
};

export default function AboutPage() {
 return <AboutView />;
}
