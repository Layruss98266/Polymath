import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
 return (
  <div className="panel hero-glow p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4 mt-12">
   <Compass size={40} className="hue mx-auto" />
   <h1 className="font-display text-3xl">Off the map</h1>
   <p className="dim">The page you are looking for is not in this catalogue. The domain catalogue and the curated Paths are a much better starting point.</p>
   <div className="flex flex-wrap justify-center gap-2 pt-2">
    <Link href="/" className="btn"><ArrowLeft size={14} /> Back to Home</Link>
    <Link href="/search" className="btn">Search the catalogue</Link>
    <Link href="/skill-map" className="btn">See the Skill Map</Link>
   </div>
  </div>
 );
}
