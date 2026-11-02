import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/common/PageHeader";
import report from "@/data/faculty-feedback.json";

const score = (value: number | null) => value === null ? "—" : value.toFixed(2);

const FacultyFeedback = () => {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const filteredData = report.teaching.filter((entry) => selectedSubject === "all" || entry.subjectCode === selectedSubject);

  return (
    <div>
      {/* Hero Section */}
      <PageHeader number="04" title="Faculty Feedback" description={`Teaching and campus evaluation · ${report.term} · Semester ${report.semester}, Section ${report.section}`} aside={<a href="/reports/faculty-feedback-semester-3-section-a.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary gap-3 shrink-0">View source PDF<ArrowUpRight size={16} /></a>} />
      {/* Content Section */}
      <div className="container px-4 md:px-8 pb-16 space-y-8">
        {/* Header Info */}
        <div className="flex flex-wrap gap-3 justify-between text-sm text-muted-foreground"><p>Department: Master of Computer Applications</p><p>Report dated {report.reportDate}</p></div>
        <p className="border-l-2 border-secondary bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">Scores and grade point averages are reproduced from the report. Numbered columns follow the PDF’s evaluation criteria. A dash means no score was provided.</p>
        <Card><CardHeader><div className="flex flex-wrap items-center justify-between gap-4"><CardTitle>Teaching Evaluation</CardTitle>
          {/* Filters */}
          <Select value={selectedSubject} onValueChange={setSelectedSubject}><SelectTrigger className="w-[200px]" aria-label="Filter by subject code"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All subject codes</SelectItem>{report.teaching.map((entry) => <SelectItem value={entry.subjectCode} key={entry.subjectCode}>{entry.subjectCode}</SelectItem>)}</SelectContent></Select>
        </div></CardHeader><CardContent>
          {/* Table */}
          <Table><TableHeader><TableRow><TableHead>Sl No</TableHead><TableHead>Subject Code</TableHead><TableHead>Faculty</TableHead>{Array.from({ length: 10 }, (_, i) => <TableHead key={i} className="text-center">{i + 1}</TableHead>)}<TableHead className="text-center">Grade Point Avg</TableHead></TableRow></TableHeader><TableBody>
            {filteredData.map((entry) => <TableRow key={entry.subjectCode}><TableCell>{entry.slNo}</TableCell><TableCell className="font-medium text-primary">{entry.subjectCode}</TableCell><TableCell className="min-w-[170px]">{entry.faculty}</TableCell>{entry.scores.map((value, i) => <TableCell className="text-center" key={i}>{score(value)}</TableCell>)}<TableCell className="text-center font-semibold text-primary">{score(entry.gradePointAvg)}</TableCell></TableRow>)}
          </TableBody></Table>
          {/* Summary */}
          <p className="mt-4 text-sm text-muted-foreground">Showing {filteredData.length} of {report.teaching.length} teaching evaluations · Semester {report.semester}, Section {report.section}</p>
        </CardContent></Card>
        <Card><CardHeader><CardTitle>Library and Office Evaluation</CardTitle></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Sl No</TableHead><TableHead>Name of the Section</TableHead>{Array.from({ length: 6 }, (_, i) => <TableHead className="text-center" key={i}>{i + 1}</TableHead>)}<TableHead className="text-center">Grade Point Avg</TableHead></TableRow></TableHeader><TableBody>{report.office.map((entry) => <TableRow key={entry.slNo}><TableCell>{entry.slNo}</TableCell><TableCell className="font-medium">{entry.name}</TableCell>{entry.scores.map((value, i) => <TableCell key={i} className="text-center">{score(value)}</TableCell>)}<TableCell className="text-center font-semibold text-primary">{score(entry.gradePointAvg)}</TableCell></TableRow>)}</TableBody></Table></CardContent></Card>
        <Card><CardHeader><CardTitle>General Evaluation</CardTitle></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Sl No</TableHead><TableHead>Name of the Section</TableHead><TableHead className="text-center">Grade Point Avg</TableHead></TableRow></TableHeader><TableBody>{report.general.map((entry) => <TableRow key={entry.slNo}><TableCell>{entry.slNo}</TableCell><TableCell className="font-medium">{entry.name}</TableCell><TableCell className="text-center font-semibold text-primary">{score(entry.gradePointAvg)}</TableCell></TableRow>)}</TableBody></Table></CardContent></Card>
      </div>
    </div>
  );
};
export default FacultyFeedback;
