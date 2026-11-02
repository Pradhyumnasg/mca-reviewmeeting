import type { ReactNode } from "react";

export default function PageHeader({ number, title, description, aside }: { number: string; title: string; description: string; aside?: ReactNode }) {
  return <header className="page-header"><div className="container px-4 md:px-8"><div className="flex items-center gap-3 mb-7"><span className="section-number">{number}</span><span className="eyebrow">Department review / MCA</span></div><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-4xl"><h1>{title}</h1><p className="mt-5 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p></div>{aside}</div></div></header>;
}
