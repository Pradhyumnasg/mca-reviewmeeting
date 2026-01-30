import { Link } from "react-router-dom";
import {
  BarChart3,
  Users,
  MessageSquare,
  FileText,
  BookOpen,
  Award,
  Target,
} from "lucide-react";
import HeroBadge from "@/components/common/HeroBadge";

const portalFeatures = [
  {
    title: "Agenda",
    icon: FileText,
    path: "/portal/agenda",
  },
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
    title: "Proctoring",
    icon: Users,
    path: "/portal/proctoring",
  },
  {
    title: "Feedback",
    icon: MessageSquare,
    path: "/portal/faculty-feedback",
  },
  {
    title: "Roadmap",
    icon: Target,
    path: "/portal/roadmap",
  },
];

const Portal = () => {
  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Review Meeting
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
            Access all review meeting resources and features
          </p>
          
          {/* Links Section */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {portalFeatures.map((feature) => (
              <Link
                key={feature.title}
                to={feature.path}
                className="group flex items-center justify-center gap-3 rounded-lg bg-white/10 px-6 py-4 text-lg font-medium text-primary-foreground/90 hover:bg-white/20 hover:text-primary-foreground transition-all"
              >
                <feature.icon className="h-5 w-5" />
                {feature.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;
