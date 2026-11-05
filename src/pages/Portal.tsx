import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import HeroBadge from "@/components/common/HeroBadge";
import { navLinks } from "@/data/review-sections";

const Portal = () => {
  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Review Meeting
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-white/80">
            Access all review meeting resources and features
          </p>
          
          {/* Links Section */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {navLinks.map((feature) => (
              <Link
                key={feature.name}
                to={feature.path}
                className="group flex items-center justify-center gap-3 rounded-lg bg-white/10 px-6 py-4 text-lg font-medium text-white/90 hover:bg-white/20 hover:text-white transition-all"
              >
                <ArrowUpRight className="h-5 w-5" />
                {feature.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;
