import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Calendar, Zap, GraduationCap, Code2, FileText, BarChart3, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/public/StatCard";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[85vh] flex items-center overflow-hidden z-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-20 h-60 w-60 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-white/5 blur-2xl animate-pulse delay-500" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aDZ2Nmg2di02aC02djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            
            <h1 className="animate-fade-in font-serif text-3xl font-bold text-white md:text-5xl lg:text-6xl leading-tight mb-2">
              Ballari Institute of Technology & Management
            </h1>
            <h2 className="animate-fade-in font-serif text-2xl font-semibold text-white/90 md:text-4xl lg:text-5xl leading-tight">
              Master of{" "}
              <span className="text-gradient relative">
                Computer Applications
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8.5C50 3 150 1 299 8.5" stroke="hsl(43 74% 49%)" strokeWidth="3" strokeLinecap="round" className="animate-draw-line" />
                </svg>
              </span>
            </h2>
            
            <p className="mt-8 animate-slide-up text-lg text-white/80 md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              Shaping tomorrow's tech leaders through excellence in education,
              research, and innovation in computer science.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up">
              <Button className="btn-primary group h-14 px-8 text-base" size="lg" asChild>
                <Link to="/about-mca">
                  Explore Department
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Floating Icons */}
            <div className="mt-16 flex justify-center gap-8 opacity-60">
              <div className="floating-icon">
                <Code2 className="h-8 w-8 text-white/40" />
              </div>
              <div className="floating-icon delay-100">
                <GraduationCap className="h-8 w-8 text-white/40" />
              </div>
              <div className="floating-icon delay-200">
                <BookOpen className="h-8 w-8 text-white/40" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard
              value="250+"
              label="Students"
              icon={<Users className="h-6 w-6" />}
            />
            <StatCard
              value="10+"
              label="Faculty Members"
              icon={<BookOpen className="h-6 w-6" />}
            />
            <StatCard
              value="10+"
              label="Events Yearly"
              icon={<Calendar className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4">About Us</span>
              <h2 className="section-heading font-serif text-3xl font-bold text-foreground md:text-5xl">
                About Our Department
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                The Department of Master of Computer Applications (MCA) is
                committed to providing quality education in computer science and
                applications. Our curriculum is designed to meet industry
                standards while fostering innovation and research capabilities.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and
                strong industry connections, we prepare students for successful
                careers in the ever-evolving tech landscape.
              </p>
              <Button className="mt-8 h-12 px-6 group" variant="outline" asChild>
                <Link to="/about-mca">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 p-8 backdrop-blur-sm border border-border/50">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                      <GraduationCap className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <p className="text-lg font-medium text-foreground">Department Excellence</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Building Future Tech Leaders
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 blur-sm" />
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-sm" />
            </div>
          </div>
        </div>
      </section>


      {/* Quick Links */}
      <section className="bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Discover</span>
            <h2 className="section-heading mx-auto font-serif text-3xl font-bold text-foreground md:text-5xl">
              Explore More
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Discover our faculty, research activities, and upcoming events.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Our Faculty",
                description:
                  "Meet our experienced professors and researchers dedicated to your success.",
                link: "/faculty",
                icon: Users,
                gradient: "from-blue-500/10 to-indigo-500/10",
              },
              {
                title: "Research",
                description:
                  "Explore cutting-edge research in AI, ML, cybersecurity, and more.",
                link: "/research",
                icon: BookOpen,
                gradient: "from-amber-500/10 to-orange-500/10",
              },
              {
                title: "Events",
                description:
                  "Stay updated with workshops, seminars, and tech fests.",
                link: "/events",
                icon: Calendar,
                gradient: "from-emerald-500/10 to-teal-500/10",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="card-elevated group relative rounded-2xl bg-card p-8 border border-border/50 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                    <item.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-secondary">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
