import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Lightbulb, Users } from "lucide-react";
import campus from "@/assets/college-building.webp";

const Index = () => <div className="home-page">
  <div className="container px-4 md:px-8 pt-6 flex justify-end"><Link className="text-sm font-semibold text-primary inline-flex items-center gap-3 shrink-0" to="/about-mca">Meet the department<ArrowUpRight size={16} /></Link></div>
  {/* Hero Section */}
  <section className="container px-4 md:px-8 pt-6 pb-10"><div className="home-hero">
    <div className="home-hero-copy"><p className="hero-label"><span />MCA · Academic review</p><h1>Ideas into<br /><span>impact.</span></h1><p className="hero-description">A closer look at how we learn, teach, and move forward. Explore the progress shaping our department.</p><div className="hero-actions"><Link to="/portal/agenda" className="hero-cta">Explore the agenda<ArrowUpRight size={22} /></Link><Link to="/portal/attendance" className="hero-text-link">View IA analytics<ArrowRight size={17} /></Link></div><div className="hero-footnote"><span>Learning</span><span>Research</span><span>Progress</span></div></div>
    <div className="hero-visual"><div className="hero-orbit" aria-hidden="true" /><figure className="campus-card"><img src={campus} alt="Ballari Institute of Technology and Management campus" /><figcaption><span>Our campus</span><strong>BITM, Ballari</strong></figcaption></figure></div>
  </div></section>
  {/* Stats Section */}
  <section className="container px-4 md:px-8"><div className="home-stats">{[["250+", "Students", "blue"], ["10+", "Faculty members", "teal"], ["10+", "Events yearly", "amber"]].map(([value, label, tone]) => <div key={label} data-tone={tone}><p>{value}</p><span>{label}</span><ArrowUpRight aria-hidden="true" size={24} /></div>)}</div></section>
  {/* Department Information */}
  <section className="container px-4 md:px-8 py-14 md:py-20" aria-labelledby="department-heading">
    <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
      <div><p className="eyebrow">Our department</p><h2 id="department-heading" className="text-4xl md:text-5xl mt-5">Master of Computer Applications</h2><p className="mt-6 text-muted-foreground leading-relaxed">The MCA department at BITM combines computer science foundations with practical application. Students build their skills through laboratory work, industry projects, and internship opportunities.</p><p className="mt-4 text-muted-foreground leading-relaxed">Faculty guide students in programming, problem solving, and research in AI, machine learning, and data science.</p><Link to="/about-mca" className="btn-primary inline-flex gap-3 mt-7">Explore the department<ArrowRight size={17} /></Link></div>
      <div className="space-y-5">
        <article className="agenda-card" data-tone="teal"><p className="eyebrow mb-3">Our vision</p><h3 className="text-xl font-semibold mb-3">Education for the challenges ahead.</h3><p className="text-muted-foreground leading-relaxed">To prepare students for the challenges of the future, while fostering innovation and advancing technology, through education.</p></article>
        <article className="agenda-card" data-tone="violet"><p className="eyebrow mb-3">Our mission</p><ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5"><li>Impart high-standard, value-based technical education in Computer Applications.</li><li>Develop ethical, motivated, and skilled postgraduates through theory and practical learning.</li><li>Empower professionals to serve society through research and innovation.</li></ul></article>
      </div>
    </div>
    <div className="grid gap-5 md:grid-cols-3 mt-10">{[
      { icon: BookOpen, title: "Applied learning", description: "Connect classroom concepts with hands-on laboratory work and industry projects.", tone: "blue" },
      { icon: Users, title: "Faculty guidance", description: "Learn with faculty who bring academic and industry experience to the classroom.", tone: "amber" },
      { icon: Lightbulb, title: "Research and innovation", description: "Explore AI, machine learning, data science, and emerging technologies.", tone: "teal" },
    ].map(item => <article key={item.title} data-tone={item.tone} className="agenda-card"><item.icon className="h-6 w-6 mb-4 text-[hsl(var(--section-tone))]" /><h3 className="font-semibold text-lg mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></article>)}</div>
  </section>
  {/* About Preview */}
  <section className="container px-4 md:px-8 pb-16"><div className="border-t pt-8 flex flex-col md:flex-row justify-between gap-6"><p className="max-w-2xl text-muted-foreground leading-relaxed">Ballari Institute of Technology &amp; Management. Quality education in computer science and applications, with experienced faculty and a commitment to innovation.</p></div></section>
</div>;
export default Index;
