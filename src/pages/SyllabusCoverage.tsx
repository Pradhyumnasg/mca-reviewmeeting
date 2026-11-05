import { useState } from "react";
import { ArrowUpRight, BookOpen, Check, Layers3 } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { syllabusReport } from "@/data/syllabus-coverage";

export default function SyllabusCoverage() {
  const [section, setSection] = useState("A");
  const subjects = syllabusReport.subjects.filter(subject => subject.section === section);
  const average = subjects.reduce((sum, subject) => sum + subject.total, 0) / subjects.length;

  return <div>
    {/* Hero Section */}
    <PageHeader number="02" title="Syllabus Coverage" description={`Semester ${syllabusReport.semester} · Weekly report · ${syllabusReport.period}`} aside={<a className="btn-secondary gap-2" href={syllabusReport.sourceUrl} target="_blank" rel="noopener noreferrer">View source report<ArrowUpRight size={16} /></a>} />
    {/* Content Section */}
    <section className="container px-4 md:px-8 pb-10 space-y-7">
      <div className="coverage-toolbar"><div><p className="eyebrow">Teaching progress</p><h2 className="text-2xl mt-2">Section {section} at a glance</h2></div><div className="segmented-control" role="group" aria-label="Select syllabus section">{["A", "B"].map(value => <button type="button" key={value} aria-pressed={section === value} onClick={() => setSection(value)}>Section {value}</button>)}</div></div>
      <div className="coverage-summary" aria-live="polite">
        <article className="coverage-highlight"><Layers3 size={22} /><p>Average total coverage</p><strong>{average.toFixed(1)}<span>%</span></strong><small>Simple average of four subjects</small></article>
        <article className="coverage-mini" data-tone="violet"><BookOpen size={22} /><strong>{subjects.length}</strong><p>Subjects tracked</p><small>Including project work</small></article>
      </div>
      {/* Bar Chart */}
      <div className="coverage-subjects">{subjects.map((subject, index) => <article key={subject.id} className="coverage-subject" data-tone={["blue", "teal", "violet", "amber"][index]}>
        <div className="coverage-subject-top"><span className="subject-index">0{index + 1}</span><span className="coverage-percent">{subject.total}<small>%</small></span></div>
        <h3>{subject.subject}</h3><p className="text-sm text-muted-foreground mt-2">{subject.faculty}</p>
        <div className="metric-track mt-6" role="meter" aria-label={`${subject.subject} total syllabus covered`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={subject.total}><div className="metric-fill" style={{ width: `${subject.total}%` }} /></div>
        <div className="flex justify-between text-xs mt-2 text-muted-foreground"><span>Total covered</span><span>{subject.remaining}% remaining</span></div>
        <div className="coverage-milestones"><p className="eyebrow">Coverage milestones</p><ol aria-label={`${subject.subject} coverage milestones`}>{[25, 50, 75, 100].map(marker => <li key={marker} className={subject.total >= marker ? "reached" : ""}><span className="milestone-dot" aria-hidden="true">{subject.total >= marker ? <Check size={13} /> : <span />}</span><span>{marker}%</span><span className="sr-only">{subject.total >= marker ? " reached" : " not yet reached"}</span></li>)}</ol><p className="milestone-next"><span>Next milestone <strong>{[25, 50, 75, 100].find(marker => marker > subject.total) ?? 100}%</strong></span><span>{Math.max(0, ([25, 50, 75, 100].find(marker => marker > subject.total) ?? 100) - subject.total)} percentage points away</span></p></div>
      </article>)}</div>
      {/* Radial Chart replaced by the report's exact weekly figures. */}
      <details className="coverage-details" open><summary>Weekly report details · Section {section}</summary><div className="result-table" tabIndex={0} role="region" aria-label="Syllabus report details, scroll horizontally for all columns"><Table><TableHeader><TableRow><TableHead>Subject</TableHead><TableHead>Hours got</TableHead><TableHead>Hours taken</TableHead><TableHead>Weekly planned</TableHead><TableHead>Weekly covered</TableHead><TableHead>Deviation</TableHead><TableHead>Total covered</TableHead><TableHead>Remaining</TableHead><TableHead>Remarks</TableHead></TableRow></TableHeader><TableBody>{subjects.map(subject => <TableRow key={subject.id}><TableCell className="min-w-48 font-medium">{subject.subject}</TableCell><TableCell>{subject.hoursGot}</TableCell><TableCell>{subject.hoursTaken}</TableCell><TableCell>{subject.planned}%</TableCell><TableCell>{subject.covered}%</TableCell><TableCell>{subject.deviation === null ? "—" : subject.deviation}</TableCell><TableCell>{subject.total}%</TableCell><TableCell>{subject.remaining}%</TableCell><TableCell className="min-w-44">{subject.remarks}</TableCell></TableRow>)}</TableBody></Table></div></details>
      <p className="text-xs leading-relaxed text-muted-foreground">Figures transcribed from the supplied weekly report. Dashes and zeroes in the deviation column are preserved. Three handwritten remarks are left in the source image because their wording is unclear.</p>
    </section>
  </div>;
}
