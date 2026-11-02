import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { navLinks } from "@/components/common/Navbar";

const agendaPoints = [
  {
    title: "3rd Sem Result Feedback",
    description: "Not yet declared. Third-semester result feedback is on hold until the semester is completed and results are available.",
  },
  {
    title: "IA Performance & Analytics",
    description: "Review first internal assessment marks and attendance for academic year 2026–27: 110 students across AI/ML (64) and DataScience (46), using the complete 1st IA workbook.",
  },
  {
    title: "Attendance and performance review",
    description: "Identify students using the three filters below. Each filter compares attendance and marks within the same subject. IA marks are out of 50; absent and missing marks are excluded from numeric filters.",
    criteria: [
      "Good Attendance & Poor Performance: attendance >70% and IA marks <50% (below 25/50).",
      "Poor Attendance & Good Performance: attendance <50% and IA marks ≥60% (at least 30/50).",
      "Poor Attendance & Poor Performance: attendance <50% and IA marks <50% (below 25/50).",
    ],
  },
  {
    title: "Faculty Feedback",
    description: "Discuss the Semester 3, Section A report for Odd Term 2026: 7 teaching evaluations, 5 library and office evaluations, and 9 general evaluations. Review the reported scores and areas needing attention.",
  },
];

const reviewLinks = navLinks.filter((link) => link.path !== "/portal/agenda");

const Agenda = () => <div>
  <PageHeader number="01" title="Academic review agenda." description="Third-semester results, first internal assessment performance, attendance, and faculty feedback." aside={<span className="eyebrow whitespace-nowrap">Meeting agenda</span>} />
  <div className="container px-4 md:px-8 pb-16 grid lg:grid-cols-[.75fr_1.5fr] gap-10 lg:gap-20">
    <aside><div className="border-l-2 border-secondary pl-5 mb-8"><p className="eyebrow mb-4">Our purpose</p><h2 className="text-3xl leading-tight">Turn reflection<br />into progress.</h2><p className="text-muted-foreground text-sm leading-relaxed mt-4">Review internal assessment performance, identify students needing support, and discuss teaching and campus feedback.</p></div>
      {/* Quick Links Grid */}
      <div className="rounded-lg border bg-card p-5"><p className="eyebrow mb-3">Review sections</p>{reviewLinks.map((link) => <Link key={link.path} to={link.path} className="flex justify-between items-center gap-3 py-4 border-b last:border-0 text-sm hover:text-primary">{link.name}<ArrowUpRight size={16} className="shrink-0" /></Link>)}</div>
    </aside>
    {/* Agenda Points */}
    <div>{agendaPoints.map((point, index) => <article key={point.title} className="grid grid-cols-[2rem_1fr] md:grid-cols-[3rem_1fr] gap-4 py-7 first:pt-0 border-b"><span className="text-secondary font-serif text-2xl">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-semibold text-lg mb-3">{point.title}</h3><p className="text-muted-foreground leading-relaxed">{point.description}</p>{point.criteria && <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">{point.criteria.map((criterion) => <li key={criterion}>{criterion}</li>)}</ul>}</div></article>)}</div>
  </div>
</div>;
export default Agenda;
