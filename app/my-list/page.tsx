import { MyList } from "@/components/MyList";

export const metadata = {
 title: "My List",
 description: "Your curated Paths, bookmarks, and saved reflections.",
 alternates: { canonical: "/my-list" },
 robots: { index: false, follow: false }
};

export default function MyListPage() { return <MyList />; }
