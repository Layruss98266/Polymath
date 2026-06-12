export default function Loading() {
 return (
  <div className="space-y-5 animate-pulse">
   <div className="panel p-5 flex flex-wrap items-start gap-4">
    <div className="w-16 h-16 rounded-xl" style={{ background: "var(--line)" }} />
    <div className="flex-1 min-w-[200px] space-y-2">
     <div className="h-3 w-20 rounded" style={{ background: "var(--line)" }} />
     <div className="h-8 w-3/4 rounded" style={{ background: "var(--line)" }} />
     <div className="h-3 w-1/2 rounded" style={{ background: "var(--line)" }} />
    </div>
    <div className="space-y-2">
     <div className="h-3 w-16 rounded" style={{ background: "var(--line)" }} />
     <div className="h-8 w-24 rounded" style={{ background: "var(--line)" }} />
    </div>
   </div>
   <div className="flex flex-wrap gap-2">
    {Array.from({ length: 8 }).map((_, i) => (
     <div key={i} className="h-7 w-20 rounded-full" style={{ background: "var(--line)" }} />
    ))}
   </div>
   <div className="panel p-5 space-y-3">
    <div className="h-5 w-40 rounded" style={{ background: "var(--line)" }} />
    <div className="h-3 w-full rounded" style={{ background: "var(--line)" }} />
    <div className="h-3 w-5/6 rounded" style={{ background: "var(--line)" }} />
    <div className="h-3 w-3/4 rounded" style={{ background: "var(--line)" }} />
   </div>
  </div>
 );
}
