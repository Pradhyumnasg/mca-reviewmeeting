import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "./Navbar";

const Footer = () => <footer className="site-footer mt-auto"><div className="container px-4 md:px-8 py-12 md:py-16"><div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
  {/* Brand */}
  <div><p className="eyebrow text-inherit opacity-60">Ballari Institute of Technology &amp; Management</p><h2 className="mt-5 text-3xl md:text-4xl font-serif">Learning. Reflection.<br /><span className="text-[#ddaa86]">Progress.</span></h2><p className="mt-5 text-sm max-w-sm opacity-70 leading-relaxed">Master of Computer Applications.<br />A shared perspective on academic performance and the road ahead.</p></div>
  {/* Review Meeting Links */}
  <nav aria-label="Footer navigation" className="grid gap-1 content-start">{navLinks.map((link) => <Link key={link.path} to={link.path} className="flex items-center justify-between border-b border-white/15 py-3 text-sm hover:text-[#ddaa86] transition-colors">{link.name}<ArrowUpRight size={15} /></Link>)}</nav>
</div><div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap justify-between gap-3 text-xs opacity-60"><p>© {new Date().getFullYear()} MCA Department. All rights reserved.</p><p>BITM · Ballari, Karnataka</p></div></div></footer>;
export default Footer;
