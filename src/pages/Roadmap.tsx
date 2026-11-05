import PageHeader from "@/components/common/PageHeader";
import { CalendarDays, Compass, GraduationCap, Sparkles, Target } from "lucide-react";

const milestones = [
  { title: "A new beginning", label: "Batch inauguration", timing: "12 November 2026", icon: GraduationCap, tone: "blue", description: "Welcome the MCA batch of 2026–28 on 12 November 2026, marking the beginning of a new chapter in learning and professional growth." },
  { title: "Start with confidence", label: "10-day orientation", timing: "For the incoming batch", icon: Compass, tone: "teal", description: "Ten days of orientation will help incoming students understand the programme, settle into campus life, and begin their MCA journey with clarity and confidence." },
  { title: "Connect beyond the classroom", label: "Cultural experiences", timing: "Planned activities", icon: Sparkles, tone: "violet", description: "Cultural events will bring students together, encouraging creative expression, collaboration, and a strong sense of belonging within the department." },
  { title: "Build skills with purpose", label: "Focused student training", timing: "Planned training", icon: Target, tone: "amber", description: "Focused training will strengthen core skills through structured learning and practice, preparing students to approach academic and professional challenges with confidence." },
];

export default function Roadmap() {
  return <div>
    <PageHeader number="06" title="Roadmap" description="Welcoming the 2026–28 batch. Building the foundations for what comes next." />
    <div className="container px-4 md:px-8 pb-12">
      <section className="roadmap-intro" aria-labelledby="roadmap-intro-title"><div><p className="roadmap-cohort">MCA · Batch 2026–28</p><h2 id="roadmap-intro-title">A confident start.<br /><span>A purposeful journey.</span></h2><p>From the first welcome to focused skill development, every step is designed to help students learn, connect, and grow.</p></div><div className="roadmap-date"><CalendarDays size={21} aria-hidden="true" /><span>November</span><strong>12</strong><time dateTime="2026-11-12">2026 · Inauguration</time></div></section>
      <ol className="roadmap-timeline" aria-label="Plans for the new batch">{milestones.map((milestone, index) => <li key={milestone.label} data-tone={milestone.tone}><span className="roadmap-step" aria-hidden="true">0{index + 1}</span><article className="roadmap-milestone"><div className="roadmap-milestone-top"><span className="roadmap-icon"><milestone.icon size={23} aria-hidden="true" /></span><span className="roadmap-timing">{milestone.timing}</span></div><p className="eyebrow mt-5">{milestone.label}</p><h3>{milestone.title}</h3><p className="roadmap-description">{milestone.description}</p></article></li>)}</ol>
    </div>
  </div>;
}
