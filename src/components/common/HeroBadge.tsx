interface HeroBadgeProps { size?: "sm" | "default"; sticky?: boolean }
const HeroBadge = ({ size = "sm" }: HeroBadgeProps) => <div className={`mb-6 inline-flex items-center gap-3 uppercase tracking-[.2em] font-medium text-secondary ${size === "sm" ? "text-[10px]" : "text-xs"}`}><span className="h-px w-8 bg-current" />Excellence in Technology Education</div>;
export default HeroBadge;
