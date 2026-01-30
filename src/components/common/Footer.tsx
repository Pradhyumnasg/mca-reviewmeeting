import { Link } from "react-router-dom";
import { FileText, BookOpen, BarChart3, Users, MessageSquare, Award, Target } from "lucide-react";
import logo from "@/assets/bitm-logo.png";
import mcaLogo from "@/assets/mca-logo.png";

const Footer = () => {
  return (
    <footer className="hero-gradient mt-auto text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="BITM - Ballari Institute of Technology & Management" 
                className="h-12 w-auto rounded-[50%]"
              />
              <img 
                src={mcaLogo} 
                alt="MCA Department Logo" 
                className="h-12 w-auto rounded-[50%]"
              />
            </Link>
            <p className="text-sm text-white/80">
              Empowering future tech leaders with excellence in computer
              applications and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-mca"
                  className="text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  About MCA
                </Link>
              </li>
              <li>
                <Link
                  to="/faculty"
                  className="text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Review Meeting Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Review Meeting</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/portal/agenda"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  <FileText className="h-4 w-4" />
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  to="/portal/3rd-sem-result"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  <Award className="h-4 w-4" />
                  3rd Sem Result Feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/portal/syllabus-coverage"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  <BookOpen className="h-4 w-4" />
                  Syllabus Coverage
                </Link>
              </li>
              <li>
                <Link
                  to="/portal/attendance"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  <BarChart3 className="h-4 w-4" />
                  IA Performance & Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/portal/proctoring"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  <Users className="h-4 w-4" />
                  Proctoring
                </Link>
              </li>
              <li>
                <Link
                  to="/portal/faculty-feedback"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  <MessageSquare className="h-4 w-4" />
                  Faculty Feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/portal/roadmap"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  <Target className="h-4 w-4" />
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} MCA Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
