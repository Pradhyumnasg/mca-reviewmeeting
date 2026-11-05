import { useState } from "react";
import { Download, Search } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import source from "@/data/see-results.json";

type SubjectResult = { cie: number | null; see: number | string | null; total: number | null; grade: string };
type StudentResult = { usn: string; name: string; reportedFailedSubjects: number | string; subjects: Record<string, SubjectResult> };
const original = source.original as StudentResult[];
const makeup = source.makeup as StudentResult[];
const passRate = (entry: typeof source.summary) => ((entry.fcd + entry.fc) / entry.appeared * 100).toFixed(2);
const outstanding = (grade?: string) => grade === "F" || grade === "X";

export default function SecondSemResult() {
  const [sitting, setSitting] = useState("makeup");
  const [query, setQuery] = useState("");
  const records = sitting === "makeup" ? makeup : original;
  const filtered = records.filter(student => `${student.usn} ${student.name}`.toLowerCase().includes(query.trim().toLowerCase()));
  const subjectCounts = source.subjects.map(subject => ({
    ...subject,
    before: original.filter(student => outstanding(student.subjects[subject.code]?.grade)).length,
    after: makeup.filter(student => outstanding(student.subjects[subject.code]?.grade)).length,
  }));
  const maxCount = Math.max(...subjectCounts.map(subject => subject.before), 1);

  return <div>
    <PageHeader number="01" title="2nd Sem Result Feedback" description={`SEE result analysis · ${source.period}`} aside={<a href="/documents/2nd-sem-see-result-analysis.xlsx" download className="btn-secondary gap-2"><Download size={17} />Download Excel workbook</a>} />
    <div className="container px-4 md:px-8 pb-12 space-y-8">
      <div className="result-summary-grid">
        {[
          { label: "Students appeared", value: source.summary.appeared, tone: "blue" },
          { label: "First class with distinction", value: source.summary.fcd, tone: "teal" },
          { label: "Students with failures", value: source.summary.failed, tone: "amber" },
          { label: "Overall pass rate", value: `${passRate(source.summary)}%`, tone: "violet" },
        ].map(metric => <div key={metric.label} data-tone={metric.tone} className="agenda-card result-stat"><p className="text-sm text-muted-foreground">{metric.label}</p><p className="text-4xl font-semibold tracking-tight mt-3">{metric.value}</p></div>)}
      </div>

      <section aria-labelledby="section-results" className="space-y-4">
        <h2 id="section-results" className="text-2xl">Section results</h2>
        <div className="grid sm:grid-cols-2 gap-4">{source.sections.map((section, index) => <article key={section.label} data-tone={index === 0 ? "blue" : "teal"} className="agenda-card">
          <div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-lg">{section.label}</h3><span className="text-2xl font-semibold">{passRate(section)}%</span></div>
          <p className="text-sm text-muted-foreground mt-2 mb-4">{section.fcd + section.fc} passed of {section.appeared} appeared</p>
          <div className="metric-track" aria-hidden="true"><div className="metric-fill" style={{ width: `${passRate(section)}%` }} /></div>
          <dl className="grid grid-cols-3 gap-3 mt-5 text-sm"><div><dt className="text-muted-foreground">FCD</dt><dd className="text-lg font-semibold">{section.fcd}</dd></div><div><dt className="text-muted-foreground">First class</dt><dd className="text-lg font-semibold">{section.fc}</dd></div><div><dt className="text-muted-foreground">Failed</dt><dd className="text-lg font-semibold">{section.failed}</dd></div></dl>
        </article>)}</div>
        <p className="text-xs leading-relaxed text-muted-foreground">Section B pass rate is calculated as 47 ÷ 57 = 82.46%. The workbook’s AVERAGE!O13 formula uses 56 and reports 83.93%; its student and appeared totals both show 57. The original file is preserved.</p>
      </section>

      <section className="rounded-xl border p-5 sm:p-6" aria-labelledby="subject-results">
        <h2 id="subject-results" className="text-2xl">Subject outcomes after makeup</h2>
        <p className="text-sm text-muted-foreground mt-2">Outstanding subject records before and after the makeup examination. Original records include grades F and X.</p>
        <div className="flex flex-wrap gap-5 text-xs my-5"><span className="chart-key"><i className="bg-[hsl(var(--tone-amber))]" />Original</span><span className="chart-key"><i className="bg-[hsl(var(--tone-teal))]" />After makeup</span></div>
        <ul className="space-y-5">{subjectCounts.map(subject => <li key={subject.code}>
          <div className="flex flex-wrap justify-between gap-2 mb-2 text-sm"><span className="font-medium">{subject.name}</span><span className="text-muted-foreground">{subject.before} original / {subject.after} after makeup</span></div>
          <div className="space-y-1.5" aria-hidden="true"><div className="metric-track" data-tone="amber"><div className="metric-fill" style={{ width: `${subject.before / maxCount * 100}%` }} /></div><div className="metric-track" data-tone="teal"><div className="metric-fill" style={{ width: `${subject.after / maxCount * 100}%` }} /></div></div>
        </li>)}</ul>
      </section>

      <section aria-labelledby="student-results" className="space-y-4 min-w-0">
        <h2 id="student-results" className="text-2xl">Student result records</h2>
        <p className="text-sm text-muted-foreground">The RESULT sheet tracks 19 students across both sittings, not the full 108-student roster. Blank subjects are unlisted, not zero. AB and grade X are preserved as recorded. One failure-count note includes a first-semester DMS backlog.</p>
        <div className="grid grid-cols-2 max-w-md rounded-lg bg-muted p-1 gap-1" role="group" aria-label="Examination sitting">{[{ value: "original", label: "Original results" }, { value: "makeup", label: "After makeup" }].map(option => <button key={option.value} type="button" aria-pressed={sitting === option.value} onClick={() => setSitting(option.value)} className={`rounded-md px-3 py-2 text-sm font-medium ${sitting === option.value ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{option.label}</button>)}</div>
        <div className="relative max-w-md"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input className="pl-9" aria-label="Search result records by name or USN" placeholder="Search name or USN" value={query} onChange={event => setQuery(event.target.value)} /></div>
        <p className="text-xs text-muted-foreground" aria-live="polite">Showing {filtered.length} of {records.length} records · {sitting === "makeup" ? "After makeup" : "Original results"}</p>
        <div className="result-table rounded-xl border" tabIndex={0} role="region" aria-label="Student results, scroll horizontally for all subjects">
          <Table><TableHeader><TableRow><TableHead>Student</TableHead><TableHead>Reported subjects failed</TableHead>{source.subjects.map(subject => <TableHead key={subject.code}><span title={subject.name}>{subject.code}</span><span className="block normal-case tracking-normal text-[10px] font-normal">CIE / SEE / Total / Grade</span></TableHead>)}</TableRow></TableHeader><TableBody>
            {filtered.length === 0 ? <TableRow><TableCell colSpan={source.subjects.length + 2} className="text-center py-8">No matching student records.</TableCell></TableRow> : filtered.map(student => <TableRow key={student.usn}><TableCell className="min-w-48"><p className="font-medium">{student.name}</p><p className="text-xs text-muted-foreground mt-1">{student.usn}</p></TableCell><TableCell className="min-w-36">{student.reportedFailedSubjects}</TableCell>{source.subjects.map(subject => {
              const result = student.subjects[subject.code];
              return <TableCell key={subject.code} className="whitespace-nowrap">{result ? <span className={outstanding(result.grade) ? "text-[hsl(var(--tone-amber))]" : "text-[hsl(var(--tone-teal))]"}>{result.cie ?? "—"} / {result.see ?? "—"} / {result.total ?? "—"} / <strong>{result.grade}</strong></span> : <span className="text-muted-foreground">—</span>}</TableCell>;
            })}</TableRow>)}
          </TableBody></Table>
        </div>
        <details className="text-sm text-muted-foreground"><summary className="cursor-pointer font-medium">Subject code key</summary><ul className="mt-3 space-y-2">{source.subjects.map(subject => <li key={subject.code}><strong>{subject.code}</strong> — {subject.name}</li>)}</ul></details>
      </section>
    </div>
  </div>;
}
