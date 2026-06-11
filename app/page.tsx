export default function HomePage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="dim text-xs uppercase tracking-widest">Phase 0 · scaffold</p>
        <h1 className="font-display text-4xl md:text-5xl">POLYMATH</h1>
        <p className="dim max-w-2xl">
          Learn anything — daily. Engine, domains and screens are coming online phase by phase. See{" "}
          <code>PROGRESS.md</code> for the live build status.
        </p>
      </header>
      <div className="panel p-6">
        <p>Scaffolding complete. Next: engine core (schema, FSRS, XP, persistence).</p>
      </div>
    </section>
  );
}
