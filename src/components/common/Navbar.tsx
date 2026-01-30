import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, BarChart3, Users, FileText, BookOpen, MessageSquare, Award, Target } from "lucide-react";
import logo from "@/assets/bitm-logo.png";
import mcaLogo from "@/assets/mca-logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About MCA", path: "/about-mca" },
  { name: "Faculty", path: "/faculty" },
  { name: "Events", path: "/events" },
  { name: "Research", path: "/research" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src={logo} 
              alt="BITM - Ballari Institute of Technology & Management" 
              className="h-12 w-auto md:h-14 rounded-[50%]"
            />
            <img 
              src={mcaLogo} 
              alt="MCA Department Logo" 
              className="h-12 w-auto md:h-14 rounded-[50%]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active text-primary" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Review Meeting Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link flex items-center gap-1">
                  Review Meeting
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/portal/agenda" className="flex items-center gap-2 cursor-pointer">
                    <FileText className="h-4 w-4" />
                    Agenda
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/3rd-sem-result" className="flex items-center gap-2 cursor-pointer">
                    <Award className="h-4 w-4" />
                    3rd Sem Result Feedback
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/syllabus-coverage" className="flex items-center gap-2 cursor-pointer">
                    <BookOpen className="h-4 w-4" />
                    Syllabus Coverage
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/attendance" className="flex items-center gap-2 cursor-pointer">
                    <BarChart3 className="h-4 w-4" />
                    IA Performance & Analytics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/proctoring" className="flex items-center gap-2 cursor-pointer">
                    <Users className="h-4 w-4" />
                    Proctoring (Mentorship Info)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/faculty-feedback" className="flex items-center gap-2 cursor-pointer">
                    <MessageSquare className="h-4 w-4" />
                    Faculty Feedback
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/portal/roadmap" className="flex items-center gap-2 cursor-pointer">
                    <Target className="h-4 w-4" />
                    Roadmap
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Right Side - Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:bg-accent/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="animate-slide-up border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-4">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">Review Meeting</p>
                <Link
                  to="/portal/agenda"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <FileText className="h-4 w-4" />
                  Agenda
                </Link>
                <Link
                  to="/portal/3rd-sem-result"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <Award className="h-4 w-4" />
                  3rd Sem Result Feedback
                </Link>
                <Link
                  to="/portal/syllabus-coverage"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <BookOpen className="h-4 w-4" />
                  Syllabus Coverage
                </Link>
                <Link
                  to="/portal/attendance"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <BarChart3 className="h-4 w-4" />
                  IA Performance & Analytics
                </Link>
                <Link
                  to="/portal/proctoring"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <Users className="h-4 w-4" />
                  Proctoring (Mentorship Info)
                </Link>
                <Link
                  to="/portal/faculty-feedback"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <MessageSquare className="h-4 w-4" />
                  Faculty Feedback
                </Link>
                <Link
                  to="/portal/roadmap"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  <Target className="h-4 w-4" />
                  Roadmap
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
