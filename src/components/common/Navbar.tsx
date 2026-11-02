import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bitm-logo.png";
import mcaLogo from "@/assets/mca-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export const navLinks = [
  { name: "Agenda", path: "/portal/agenda" },
  { name: "3rd Sem Result Feedback", path: "/portal/3rd-sem-result" },
  { name: "IA Performance & Analytics", path: "/portal/attendance" },
  { name: "Faculty Feedback", path: "/portal/faculty-feedback" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <header className="site-header">
    <div className="container px-4 md:px-8 py-4 md:py-6">
      {/* Logo */}
      <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3 md:gap-8" aria-label="Ballari Institute Of Technology & Management home">
        <img src={logo} alt="BITM" className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 shrink-0 rounded-full object-contain bg-white" />
        <div className="min-w-0 flex-1 text-center"><p className="text-base sm:text-2xl lg:text-4xl font-bold leading-tight tracking-tight">Ballari Institute Of Technology &amp; Management</p><p className="mt-2 text-[9px] sm:text-xs md:text-sm uppercase tracking-[.12em] text-muted-foreground">Department of Master of Computer Applications</p></div>
        <img src={mcaLogo} alt="MCA Department" className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 shrink-0 rounded-full object-contain bg-white" />
      </Link>
      <div className="mt-2 flex items-center justify-end gap-3"><ThemeToggle /><button aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)} className="lg:hidden h-10 w-10 grid place-items-center rounded-md border">{isOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </div>
    {/* Desktop Navigation */}
    <nav aria-label="Main navigation" className="hidden lg:block border-t"><div className="container px-8 flex justify-between gap-4">{navLinks.map((link, index) => <Link className={`review-nav-link ${location.pathname === link.path ? "active" : ""}`} aria-current={location.pathname === link.path ? "page" : undefined} key={link.path} to={link.path}><span className="text-[10px] opacity-50 tabular-nums">0{index + 1}</span>{link.name}</Link>)}</div></nav>
    {/* Mobile Navigation */}
    {isOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t px-4 pb-4">{navLinks.map((link, index) => <Link key={link.path} to={link.path} aria-current={location.pathname === link.path ? "page" : undefined} onClick={() => setIsOpen(false)} className={`flex items-center gap-4 py-4 border-b text-sm ${location.pathname === link.path ? "text-primary font-bold" : "text-foreground"}`}><span className="text-xs text-muted-foreground">0{index + 1}</span>{link.name}<ArrowUpRight size={16} className="ml-auto" /></Link>)}</nav>}
  </header>;
};
export default Navbar;
