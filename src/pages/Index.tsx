import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Download, Lightbulb, Users } from "lucide-react";
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
        <article className="agenda-card" data-tone="teal"><p className="eyebrow mb-3">Our vision</p><p className="text-muted-foreground leading-relaxed">To be a Centre of excellence in computer applications education, innovation, and research, nurturing competent and responsible professionals for sustainable digital transformation</p></article>
        <article className="agenda-card" data-tone="violet"><p className="eyebrow mb-3">Our mission</p><ul className="space-y-4 text-muted-foreground leading-relaxed"><li><strong className="text-foreground">M1:</strong> To provide quality education in computer applications through contemporary curriculum, innovative teaching-learning practices, and experiential learning.</li><li><strong className="text-foreground">M2:</strong> To develop students technical, professional, ethical, and lifelong learning skills through industry interaction, academic collaboration, and continuous skill development.</li><li><strong className="text-foreground">M3:</strong> To promote research, innovation, entrepreneurship, and technology-driven solutions for addressing societal and industry needs and supporting sustainable digital development.</li></ul></article>
        <a href="/documents/mca-vision-and-mission.docx" download className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><Download size={16} aria-hidden="true" />Download vision and mission document</a>
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
