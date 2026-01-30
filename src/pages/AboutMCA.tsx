import { Target, Eye, BookOpen, Award, Lightbulb, Users } from "lucide-react";
import HeroBadge from "@/components/common/HeroBadge";

const AboutMCA = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            About MCA Department
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Excellence in computer applications education since inception
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-heading text-center font-serif text-3xl font-bold text-foreground mx-auto">
              Vision & Mission
            </h2>
            
            {/* Vision */}
            <div className="mt-12 card-elevated rounded-xl bg-card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Vision
                </h3>
              </div>
              <p className="leading-relaxed text-muted-foreground text-lg">
                "To prepare students for the challenges of the future, while fostering innovation and advancing technology, through education"
              </p>
            </div>

            {/* Mission */}
            <div className="mt-6 card-elevated rounded-xl bg-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Mission
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground leading-relaxed">
                    To impart high-standard, value-based technical education in all aspects of Computer Applications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground leading-relaxed">
                    To cultivate ethical, motivated, and skilled postgraduates through a blend of theoretical knowledge and practical applications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground leading-relaxed">
                    To nurture proficient professionals among students, empowering them to serve society through research and innovation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading font-serif text-3xl font-bold text-foreground">
              Welcome to MCA
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The Master of Computer Applications (MCA) department is one of
                the premier departments committed to providing world-class
                education in computer science and applications. Established with
                a vision to create industry-ready professionals, our department
                has consistently maintained high academic standards.
              </p>
              <p>
                Our comprehensive curriculum is designed to bridge the gap
                between theoretical knowledge and practical application. We
                offer hands-on experience through state-of-the-art laboratories,
                industry projects, and internship opportunities with leading
                tech companies.
              </p>
              <p>
                The department boasts a team of highly qualified faculty members
                with extensive academic and industry experience. Their guidance
                ensures that students are well-prepared to face the challenges
                of the dynamic IT industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center font-serif text-3xl font-bold text-foreground mx-auto">
            Why Choose Us
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Industry-Aligned Curriculum",
                description:
                  "Curriculum designed in collaboration with industry experts to meet current market demands.",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description:
                  "Learn from experienced professors and industry practitioners with real-world expertise.",
              },
              {
                icon: Lightbulb,
                title: "Research Opportunities",
                description:
                  "Engage in cutting-edge research in AI, ML, Data Science, and emerging technologies.",
              },
              {
                icon: Award,
                title: "Excellent Placements",
                description:
                  "Strong placement record with top companies recruiting from our campus.",
              },
              {
                icon: Target,
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art labs, library, and computing facilities for hands-on learning.",
              },
              {
                icon: Eye,
                title: "Industry Connect",
                description:
                  "Regular workshops, seminars, and industry visits for practical exposure.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card-elevated rounded-xl bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading mx-auto font-serif text-3xl font-bold text-foreground">
              Program Outcomes
            </h2>
            <p className="mt-6 text-muted-foreground">
              Upon completion of the MCA program, students will be able to:
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl">
            <ul className="space-y-4">
              {[
                {
                  title: "Foundation Knowledge",
                  description: "Apply knowledge of mathematics, programming logic and coding fundamentals for solution architecture and problem solving."
                },
                {
                  title: "Problem Analysis",
                  description: "Identify, review formulate and analyse problems for primarily focusing on customer requirements using critical thinking frameworks."
                },
                {
                  title: "Development of Solutions",
                  description: "Design, develop and investigate problems with as an innovative approach for solutions incorporating ESG/SDG goals."
                },
                {
                  title: "Modern Tool Usage",
                  description: "Select, adapt and apply modern computational tools such as development of algorithms with an understanding of the limitations including human biases."
                },
                {
                  title: "Individual and Team Work",
                  description: "Function and communicate effectively as an individual or a team leader in diverse and multidisciplinary groups. Use methodologies such as agile."
                },
                {
                  title: "Project Management and Finance",
                  description: "Use the principles of project management such as scheduling, work breakdown structure and be conversant with the principles of Finance for profitable project management."
                },
                {
                  title: "Ethics",
                  description: "Commit to professional ethics in managing software projects with financial aspects. Learn to use new technologies for cyber security and insulate customers from malware."
                },
                {
                  title: "Life-long Learning",
                  description: "Change management skills and the ability to learn, keep up with contemporary technologies and ways of working."
                },
              ].map((outcome, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-lg bg-card p-5 shadow-sm"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">{outcome.title}</h4>
                    <p className="mt-1 text-muted-foreground">{outcome.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMCA;
