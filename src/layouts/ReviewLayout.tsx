import { useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, Award, BookOpen, ChartColumn, MessageSquare, FlaskConical, Route } from "lucide-react";
import { reviewSections } from "@/data/review-sections";

const sectionIcons = [Award, BookOpen, ChartColumn, MessageSquare, FlaskConical, Route];

export default function ReviewLayout() {
  const { pathname } = useLocation();
  const content = useRef<HTMLDivElement>(null);
  const previousPath = useRef(pathname);
  useEffect(() => {
    if (previousPath.current !== pathname) {
      content.current?.focus({ preventScroll: true });
      content.current?.scrollIntoView({ block: "start", behavior: "instant" });
      previousPath.current = pathname;
    }
  }, [pathname]);
  return <div className="review-layout">
    <aside className="review-sidebar">
      <div className="review-purpose"><p className="eyebrow mb-4">Our purpose</p><h2 className="text-3xl leading-tight">Turn reflection<br />into progress.</h2><p className="text-muted-foreground text-sm leading-relaxed mt-4">Review internal assessment performance, identify students needing support, and discuss teaching and campus feedback.</p></div>
      <nav className="agenda-nav" aria-label="Review agenda">
        <Link to="/portal/agenda" className="eyebrow agenda-heading" aria-current={pathname === "/portal/agenda" ? "page" : undefined}>Agenda / Overview</Link>
        <div className="agenda-links">{reviewSections.map((section, index) => { const Icon = sectionIcons[index]; return <NavLink key={section.path} to={section.path} data-tone={section.tone} className={({ isActive }) => `agenda-link${isActive ? " active" : ""}`}><span className="agenda-icon"><Icon size={17} aria-hidden="true" /></span><span>{section.name}</span><ArrowUpRight size={15} className="shrink-0 ml-auto" /></NavLink>; })}</div>
      </nav>
    </aside>
    <div ref={content} tabIndex={-1} className="review-content" data-tone={reviewSections.find(section => section.path === pathname)?.tone || "blue"}><Outlet /></div>
  </div>;
}
