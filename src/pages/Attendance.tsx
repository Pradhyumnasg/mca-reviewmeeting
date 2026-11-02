import { useState } from "react";
import { Users, BookOpen, TrendingUp, AlertTriangle, Search } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";
import source from "@/data/ia-analysis.json";

import { matchesPerformance, performanceFilters, type SubjectRecord } from "@/lib/ia-filters";
type Student = { usn: string; name: string; subjects: Record<string, SubjectRecord> };
const students = source.students as Student[];
const marksBands = ["≤18 marks", ">18–29 marks", "≥30 marks", "Absent"];
const attendanceBands = ["≤25%", ">25–50%", ">50–74%", "≥75%"];
const colors = ["#a35241", "#c49356", "#347969", "#8b9290"];
const chartConfig = {
  low: { label: marksBands[0], color: colors[0] },
  middle: { label: marksBands[1], color: colors[1] },
  high: { label: marksBands[2], color: colors[2] },
  absent: { label: marksBands[3], color: colors[3] },
};
const marksClass = (marks: SubjectRecord["marks"]) =>
  marks === "AB" ? "bg-muted text-muted-foreground" : typeof marks !== "number" ? "" :
  marks <= 18 ? "bg-red-500/10 text-red-600" : marks <= 29 ? "bg-amber-500/10 text-amber-600" : "bg-green-500/10 text-green-600";

const Attendance = () => {
  const [specialisation, setSpecialisation] = useState("AI/ML");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [pieSubject, setPieSubject] = useState("ml");
  const subjects = source.subjects.filter((s) => s.specialisation === specialisation);
  const chartSubjects = subjects.filter((s) => s.missingMarks < s.total || s.missingAttendance < s.total);
  const currentStudents = students.filter((s) => subjects.some((subject) => s.subjects[subject.key]));
  const selectedSubject = chartSubjects.find((s) => s.key === pieSubject) || chartSubjects[0];
  const hasRecord = (student: Student, predicate: (record: SubjectRecord) => boolean) =>
    subjects.some((subject) => predicate(student.subjects[subject.key] || {}));
  const filteredStudents = currentStudents.filter((student) => {
    if (!`${student.name} ${student.usn}`.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (filter in performanceFilters) return hasRecord(student, (s) => matchesPerformance(s, filter, source.maxMarks));
    if (filter === "lowMarks") return hasRecord(student, (s) => typeof s.marks === "number" && s.marks <= 18);
    if (filter === "middleMarks") return hasRecord(student, (s) => typeof s.marks === "number" && s.marks > 18 && s.marks <= 29);
    if (filter === "lowAttendance") return hasRecord(student, (s) => s.att !== undefined && s.att < 75);
    if (filter === "absent") return hasRecord(student, (s) => s.marks === "AB");
    return true;
  });
  const absentCount = currentStudents.filter((s) => hasRecord(s, (r) => r.marks === "AB")).length;
  const lowAttendanceCount = currentStudents.filter((s) => hasRecord(s, (r) => r.att !== undefined && r.att < 75)).length;
  const barData = chartSubjects.map((s) => ({ subject: s.label, low: s.marks[0], middle: s.marks[1], high: s.marks[2], absent: s.marks[3] }));
  const pieData = attendanceBands.map((name, index) => ({ name, value: selectedSubject.attendance[index] }));
  const record = (value: SubjectRecord = {}) => <div className={`space-y-1 rounded-md p-2 ${matchesPerformance(value, filter, source.maxMarks) ? "bg-secondary/10 ring-1 ring-secondary/50" : ""}`}><Badge variant="outline" className={marksClass(value.marks)}>MA: {value.marks ?? "—"}{typeof value.marks === "number" ? `/${source.maxMarks}` : ""}</Badge><p className="text-xs text-muted-foreground">ATT: {value.att === undefined ? "—" : `${value.att}%`}</p></div>;

  return (
    <div className="min-h-screen">
      <PageHeader number="03" title="Performance, in perspective." description="IA Performance & Analytics · Third semester · First internal assessment · 2026–27" />
      <div className="container mx-auto px-4 md:px-8 pb-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">Source: {source.source}</p>
          <Select value={specialisation} onValueChange={(value) => { setSpecialisation(value); setPieSubject(value === "AI/ML" ? "ml" : "dmdw"); }}>
            <SelectTrigger className="w-[180px] bg-background" aria-label="Specialisation"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="AI/ML">AI/ML</SelectItem><SelectItem value="DataScience">DataScience</SelectItem></SelectContent>
          </Select>
        </div>
        <p className="mb-8 border-l-2 border-secondary bg-muted/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">Complete AI/ML and DataScience rosters from both workbook sheets. IA marks use a maximum of 50. Performance filters match attendance and marks within the same subject; a student appears when any subject matches. AB and missing marks are excluded from numeric performance filters. Project values are blank in the workbook.</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Students", value: subjects[0].total, Icon: Users },
            { label: "Student Records Imported", value: currentStudents.length, Icon: BookOpen },
            { label: "Students with ATT <75%", value: lowAttendanceCount, Icon: TrendingUp },
            { label: "Students Absent in Any Subject", value: absentCount, Icon: AlertTriangle },
          ].map(({ label, value, Icon }) => <Card key={label} className="bg-card border-border"><CardContent className="p-6"><div className="flex flex-col items-start gap-5"><Icon className="h-5 w-5 text-secondary shrink-0" /><div><p className="text-sm text-muted-foreground">{label}</p><p className="text-4xl font-serif font-normal mt-3">{value}</p></div></div></CardContent></Card>)}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-border"><CardHeader><CardTitle>Subject-wise Marks Distribution</CardTitle></CardHeader><CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full"><BarChart data={barData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="subject" /><YAxis allowDecimals={false} /><ChartTooltip content={<ChartTooltipContent />} /><Legend />{Object.entries(chartConfig).map(([key, config]) => <Bar key={key} dataKey={key} name={config.label} stackId="students" fill={config.color} />)}</BarChart></ChartContainer>
            <p className="mt-3 text-xs text-muted-foreground">Counts calculated from imported student records. Project is omitted from charts because all its values are missing.</p>
          </CardContent></Card>
          <Card className="bg-card border-border"><CardHeader><div className="flex flex-wrap items-center justify-between gap-3"><CardTitle>Attendance Distribution</CardTitle><Select value={selectedSubject.key} onValueChange={setPieSubject}><SelectTrigger className="w-[140px]" aria-label="Attendance subject"><SelectValue /></SelectTrigger><SelectContent>{chartSubjects.map((s) => <SelectItem value={s.key} key={s.key}>{s.label}</SelectItem>)}</SelectContent></Select></div></CardHeader><CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full"><PieChart><Pie data={pieData} dataKey="value" nameKey="name" outerRadius={85} label={({ value }) => value > 0 ? `${value}` : ""}>{pieData.map((d, i) => <Cell key={d.name} fill={["#a35241", "#c49356", "#7b9c96", "#347969"][i]} />)}</Pie><ChartTooltip content={<ChartTooltipContent />} /><Legend /></PieChart></ChartContainer>
            <p className="mt-3 text-xs text-muted-foreground">{selectedSubject.title}: {selectedSubject.total} students. Labels show counts.</p>
          </CardContent></Card>
        </div>

        <Card className="mb-8 bg-card border-border"><CardHeader><CardTitle>Calculated Subject Summary</CardTitle></CardHeader><CardContent><div className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Measure</TableHead>{subjects.map((s) => <TableHead key={s.key} className="text-center" title={s.title}>{s.label}</TableHead>)}</TableRow></TableHeader><TableBody>
          {marksBands.map((band, i) => <TableRow key={band}><TableCell>{band}</TableCell>{subjects.map((s) => <TableCell key={s.key} className="text-center">{s.marks[i]}</TableCell>)}</TableRow>)}
          {attendanceBands.map((band, i) => <TableRow key={band}><TableCell>Attendance {band}</TableCell>{subjects.map((s) => <TableCell key={s.key} className="text-center">{s.attendance[i]}</TableCell>)}</TableRow>)}
          <TableRow><TableCell>Missing marks</TableCell>{subjects.map((s) => <TableCell key={s.key} className="text-center">{s.missingMarks}</TableCell>)}</TableRow>
          <TableRow><TableCell>Missing attendance</TableCell>{subjects.map((s) => <TableCell key={s.key} className="text-center">{s.missingAttendance}</TableCell>)}</TableRow>
          <TableRow className="font-semibold"><TableCell>Total students</TableCell>{subjects.map((s) => <TableCell key={s.key} className="text-center">{s.total}</TableCell>)}</TableRow>
        </TableBody></Table></div></CardContent></Card>

        <details className="mb-8 rounded-lg border bg-card p-5"><summary className="cursor-pointer font-medium">Original workbook summary counts</summary><p className="my-4 text-sm text-muted-foreground">Labels and counts are reproduced as supplied. Charts above use individual records.</p><Table><TableHeader><TableRow><TableHead>Workbook measure</TableHead>{subjects.map((subject) => <TableHead key={subject.key}>{subject.label}</TableHead>)}</TableRow></TableHeader><TableBody>{source.reportedSummaries.filter((row) => row.specialisation === specialisation).map((row) => <TableRow key={row.label}><TableCell>{row.label}</TableCell>{subjects.map((subject) => <TableCell key={subject.key}>{row.values[subject.key] ?? "—"}</TableCell>)}</TableRow>)}</TableBody></Table></details>

        {/* Filters and Table */}
        <Card className="bg-card border-border"><CardHeader><div className="flex flex-col md:flex-row gap-4 justify-between"><CardTitle>Student Records</CardTitle><div className="flex flex-wrap gap-3">
          <Select value={filter} onValueChange={setFilter}><SelectTrigger className="w-full sm:w-[350px]" aria-label="Filter student records"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All students</SelectItem>{Object.entries(performanceFilters).map(([key, label]) => <SelectItem key={key} value={key}>{label}</SelectItem>)}<SelectItem value="lowMarks">Marks ≤18</SelectItem><SelectItem value="middleMarks">Marks &gt;18 and ≤29</SelectItem><SelectItem value="lowAttendance">Attendance below 75%</SelectItem><SelectItem value="absent">Absent in any subject</SelectItem></SelectContent></Select>
          <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input aria-label="Search by name or USN" placeholder="Search by name or USN…" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 w-[250px]" /></div>
        </div></div></CardHeader><CardContent>
          {filter in performanceFilters && <p className="mb-5 rounded-md bg-muted/50 p-4 text-sm">{filter === "goodAttendancePoorPerformance" ? "Attendance >70% and IA marks <50% (below 25/50)." : filter === "poorAttendanceGoodPerformance" ? "Attendance <50% and IA marks ≥60% (at least 30/50)." : "Attendance <50% and IA marks <50% (below 25/50)."} Matching subject cells are highlighted. AB and missing marks do not qualify.</p>}
          <Tabs defaultValue="table"><TabsList className="mb-4"><TabsTrigger value="table">Table View</TabsTrigger><TabsTrigger value="cards">Card View</TabsTrigger></TabsList>
            <TabsContent value="table"><div className="rounded-md border overflow-x-auto"><Table><TableHeader><TableRow><TableHead>USN</TableHead><TableHead>Name</TableHead>{subjects.map((s) => <TableHead key={s.key} className="text-center" title={s.title}>{s.label}</TableHead>)}</TableRow></TableHeader><TableBody>{filteredStudents.map((student) => <TableRow key={student.usn}><TableCell className="font-mono text-xs">{student.usn}</TableCell><TableCell className="font-medium">{student.name}</TableCell>{subjects.map((s) => <TableCell className="text-center" key={s.key}>{record(student.subjects[s.key])}</TableCell>)}</TableRow>)}</TableBody></Table></div></TabsContent>
            <TabsContent value="cards"><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{filteredStudents.map((student) => <Card key={student.usn} className="bg-background/50"><CardContent className="p-4"><p className="font-semibold">{student.name}</p><p className="mb-4 text-xs text-muted-foreground font-mono">{student.usn}</p><div className="grid grid-cols-2 gap-2 text-center">{subjects.map((s) => <div key={s.key} className="rounded bg-muted/50 p-2"><p className="mb-2 text-xs font-semibold">{s.label}</p>{record(student.subjects[s.key])}</div>)}</div></CardContent></Card>)}</div></TabsContent>
          </Tabs>
          <p className="mt-4 text-sm text-muted-foreground">Showing {filteredStudents.length} of {currentStudents.length} students in the workbook for {specialisation}. MA = marks; ATT = attendance.</p>
          {!filteredStudents.length && <p className="mt-3">No matching records.</p>}
        </CardContent></Card>
      </div>
    </div>
  );
};
export default Attendance;
