import Link from "next/link";
export default function NotFound() {
 return (
  <div className="panel p-6">
   <h1 className="font-display text-2xl">Domain not found</h1>
   <p className="dim mt-2">That domain isn't in the catalogue yet.</p>
   <Link href="/" className="btn mt-4 inline-flex">Back to all domains</Link>
  </div>
 );
}
