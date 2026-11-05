import PageHeader from "@/components/common/PageHeader";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

const activities = [
  { title: "Patent publications", target: 4, achieved: 2, icon: Award, tone: "amber" },
  { title: "Paper publications in Scopus-indexed conferences / journals", target: 10, achieved: 10, icon: BookOpen, tone: "violet" },
  { title: "FDP / workshops for faculty", target: 10, achieved: 12, icon: Users, tone: "teal" },
  { title: "Workshops for students", target: 6, achieved: 3, icon: GraduationCap, tone: "blue" },
];

const count = (value: number) => String(value).padStart(2, "0");

export default function Roadmap() {
  return <div>
    <PageHeader number="06" title="Roadmap" description="Department targets and achievements · January–December 2026" />
    <section className="container px-4 md:px-8 pb-12" aria-labelledby="annual-targets">
      <div className="mb-6">
        <p className="eyebrow">MCA · Annual progress</p>
        <h2 id="annual-targets" className="text-2xl mt-2">Research, development and student learning</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {activities.map(activity => {
          const percent = Math.round(activity.achieved / activity.target * 100);
          return <article key={activity.title} data-tone={activity.tone} className="agenda-card flex flex-col">
            <activity.icon size={26} className="mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-6">{activity.title}</h3>
            <dl className="grid grid-cols-2 gap-4 mt-auto mb-5">
              <div><dt className="text-sm text-muted-foreground">Target</dt><dd className="text-3xl font-semibold mt-1">{count(activity.target)}</dd></div>
              <div><dt className="text-sm text-muted-foreground">Achieved</dt><dd className="text-3xl font-semibold mt-1">{count(activity.achieved)}</dd></div>
            </dl>
            <div className="metric-track" aria-hidden="true"><div className="metric-fill" style={{ width: `${Math.min(percent, 100)}%` }} /></div>
            <p className="text-sm mt-3 text-muted-foreground">{percent}% of target achieved{activity.achieved > activity.target ? ` · ${activity.achieved - activity.target} above target` : ""}</p>
          </article>;
        })}
      </div>
    </section>
  </div>;
}
