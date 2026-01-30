import { BookOpen, BarChart3, Users, MessageSquare, Award, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import HeroBadge from "@/components/common/HeroBadge";

const quickLinks = [
  {
    title: "3rd Sem Result Feedback",
    icon: Award,
    path: "/portal/3rd-sem-result",
  },
  {
    title: "Syllabus Coverage",
    icon: BookOpen,
    path: "/portal/syllabus-coverage",
  },
  {
    title: "IA Performance & Analytics",
    icon: BarChart3,
    path: "/portal/attendance",
  },
  {
    title: "Proctoring (Mentorship Info)",
    icon: Users,
    path: "/portal/proctoring",
  },
  {
    title: "Faculty Feedback",
    icon: MessageSquare,
    path: "/portal/faculty-feedback",
  },
  {
    title: "Roadmap",
    icon: Target,
    path: "/portal/roadmap",
  },
];

const agendaPoints = [
  "Provides a structured roadmap for the academic journey, aligning students and faculty with goals and timelines",
  "Clearly outlines key sessions, milestones, assessments, and activities for transparency from the start",
  "Integrates with the syllabus, attendance tracking, performance analytics, and mentorship support",
  "Helps learners plan effectively, stay on track, and engage meaningfully with their progress",
  "Serves as a centralized platform for managing coursework, evaluations, and feedback",
];

const Agenda = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <HeroBadge />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-left">
            Agenda
          </h1>
          
          {/* Agenda Points */}
          <div className="mb-12 space-y-4">
            {agendaPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 text-white/90">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Quick Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-6 py-4 rounded-lg text-white font-medium"
              >
                <link.icon className="h-5 w-5" />
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;
