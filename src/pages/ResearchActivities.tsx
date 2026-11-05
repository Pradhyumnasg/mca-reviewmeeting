import PageHeader from "@/components/common/PageHeader";
import { researchGroups } from "@/data/research-activities";

export default function ResearchActivities() {
  return <div>
    <PageHeader number="05" title="Research activities" description="Journal and conference papers by acceptance and indexing status." />
    <section className="container px-4 md:px-8 pb-12 space-y-6">
      {researchGroups.map(group => {
        const total = group.items.reduce((sum, item) => sum + item.count, 0);
        let position = 0;
        const segments = group.items.map(item => {
          const start = position;
          position += item.count / total * 100;
          return `hsl(var(--tone-${item.tone})) ${start}% ${position}%`;
        });
        return <article key={group.title} data-tone={group.tone} className="research-panel agenda-card">
          <div className="flex flex-wrap justify-between gap-3 items-start mb-8"><h2 className="text-2xl sm:text-3xl">{group.title}</h2><span className="research-total">{total} papers</span></div>
          <div className="research-visual">
            <div className="research-donut" style={{ background: `conic-gradient(${segments.join(", ")})` }} aria-hidden="true"><div><strong>{total}</strong><span>papers</span></div></div>
            <ul className="space-y-6 min-w-0">{group.items.map(item => <li key={item.label} data-tone={item.tone}>
              <div className="flex justify-between items-center gap-4 mb-2"><span className="font-semibold">{item.label}</span><span className="text-lg font-bold tabular-nums">{item.count} <span className="text-sm font-normal text-muted-foreground">{item.count === 1 ? "paper" : "papers"}</span></span></div>
              <div className="metric-track" aria-hidden="true"><div className="metric-fill" style={{ width: `${item.count / 6 * 100}%` }} /></div>
            </li>)}</ul>
          </div>
        </article>;
      })}
    </section>
  </div>;
}
