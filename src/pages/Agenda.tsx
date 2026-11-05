import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { reviewSections } from "@/data/review-sections";

const Agenda = () => <div>
    <PageHeader number="01" title="Academic review agenda." description="Results, syllabus coverage, internal assessment, faculty feedback, research activities, and our roadmap." aside={<span className="eyebrow whitespace-nowrap">Meeting agenda</span>} />
  <div className="container px-4 md:px-8 pb-10">
    {/* Quick Links Grid */}
    {/* Agenda Points */}
    <div className="grid gap-4 sm:grid-cols-2">{reviewSections.map((point, index) => <Link key={point.path} to={point.path} data-tone={point.tone} className="agenda-card group"><span className="section-number">{String(index + 1).padStart(2, "0")}</span><ArrowUpRight className="float-right h-5 w-5" /><h3 className="font-semibold text-lg mt-5 mb-3">{point.name}</h3><p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p></Link>)}</div>
  </div>
</div>;
export default Agenda;
