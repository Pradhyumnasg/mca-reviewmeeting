import { Zap } from "lucide-react";

interface HeroBadgeProps {
  size?: "sm" | "default";
  sticky?: boolean;
}

const HeroBadge = ({ size = "sm", sticky = true }: HeroBadgeProps) => {
  if (sticky) {
    return (
      <div className="sticky top-16 z-40 w-full flex justify-center py-3 hero-gradient backdrop-blur-sm border-b border-white/10">
        <div 
          className={`inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 font-medium text-secondary animate-fade-in ${
            size === "sm" ? "text-xs" : "text-sm"
          }`}
        >
          <Zap className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
          <span>Excellence in Technology Education</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 font-medium text-secondary backdrop-blur-sm animate-fade-in ${
        size === "sm" ? "text-xs" : "text-sm"
      }`}
    >
      <Zap className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      <span>Excellence in Technology Education</span>
    </div>
  );
};

export default HeroBadge;
