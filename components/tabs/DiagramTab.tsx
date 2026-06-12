import type { Domain } from "@/lib/types";
import { DiagramView } from "@/components/Diagram";

export function DiagramTab({ d }: { d: Domain }) {
 return (
  <div className="space-y-5">
   {d.diagrams.map((diag, i) => <DiagramView key={i} diagram={diag} />)}
  </div>
 );
}
