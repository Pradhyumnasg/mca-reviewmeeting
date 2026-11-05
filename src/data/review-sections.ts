export const reviewSections = [
  { name: "2nd Sem Result Feedback", path: "/portal/2nd-sem-result", tone: "blue", description: "August 2026 SEE results, section summaries, and makeup examination feedback." },
  { name: "Syllabus Coverage", path: "/portal/syllabus-coverage", tone: "teal", description: "Third-semester teaching progress for Sections A and B, 27–31 October 2026." },
  { name: "IA Performance & Analytics", path: "/portal/attendance", tone: "amber", description: "Review internal assessment marks, attendance, and students needing support." },
  { name: "Faculty Feedback", path: "/portal/faculty-feedback", tone: "violet", description: "Explore teaching and campus evaluations and areas needing attention." },
  { name: "Research activities", path: "/portal/research", tone: "teal", description: "Review accepted and indexed papers across journal quartiles and conferences." },
  { name: "Roadmap", path: "/portal/roadmap", tone: "blue", description: "Welcoming the 2026–28 batch with inauguration, orientation, cultural experiences, and focused training." },
] as const;

export const navLinks = [{ name: "Agenda", path: "/portal/agenda" }, ...reviewSections];
