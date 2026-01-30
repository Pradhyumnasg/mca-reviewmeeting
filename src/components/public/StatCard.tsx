interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="group card-elevated relative flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-border/50 overflow-hidden transition-all duration-300 hover:border-secondary/30">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {icon && (
        <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/20">
          {icon}
        </div>
      )}
      <span className="relative font-serif text-4xl font-bold text-foreground md:text-5xl">
        {value}
      </span>
      <span className="relative mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

export default StatCard;
