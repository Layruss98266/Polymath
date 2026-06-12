import { ReviewSession } from "@/components/ReviewSession";

export const metadata = {
 title: "Review",
 description: "FSRS-scheduled spaced repetition across every domain you have touched.",
 alternates: { canonical: "/review" },
 robots: { index: false, follow: false }
};

export default function ReviewPage() { return <ReviewSession />; }
