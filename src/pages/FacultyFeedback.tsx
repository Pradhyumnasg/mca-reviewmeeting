import { useState } from "react";
import { MessageSquare } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeroBadge from "@/components/common/HeroBadge";

type FeedbackEntry = {
  slNo: number;
  subjectCode: string;
  subject: string;
  faculty: string;
  scores: (number | null)[];
  gradePointAvg: number;
  section: "A" | "B";
};

const feedbackData: FeedbackEntry[] = [
  // Section A - Extracted from screenshots (10-point scale)
  { slNo: 1, subjectCode: "MMC101", subject: "PSC", faculty: "Dr. Girish Kumar D", scores: [9.28, 9.59, 9.81, 9.91, 9.84, 9.78, 9.69, 9.66, 9.81, 9.53], gradePointAvg: 9.69, section: "A" },
  { slNo: 2, subjectCode: "MMC102", subject: "DMS", faculty: "Dr. M Pralhad", scores: [9.56, 8.63, 8.66, 8.28, 9.38, 8.41, 9.19, 8.69, 8.75, 8.69], gradePointAvg: 8.82, section: "A" },
  { slNo: 3, subjectCode: "MMC103", subject: "DBMS", faculty: "Sharvani Channappa", scores: [9.63, 9.25, 9.31, 9.03, 9.38, 8.84, 9.22, 9.34, 9.41, 9.44], gradePointAvg: 9.28, section: "A" },
  { slNo: 4, subjectCode: "MMC104", subject: "OS", faculty: "Jennifer S", scores: [9.84, 9.78, 9.84, 9.88, 9.94, 9.72, 9.78, 9.84, 9.84, 9.69], gradePointAvg: 9.82, section: "A" },
  { slNo: 5, subjectCode: "MMC105", subject: "WT", faculty: "SDN Hayath Ali", scores: [9.66, 9.69, 9.75, 9.75, 9.88, 9.63, 9.66, 9.63, 9.84, 9.53], gradePointAvg: 9.70, section: "A" },
  { slNo: 6, subjectCode: "MMCL106", subject: "DBMS Lab", faculty: "Subhashree D. C.", scores: [9.47, 9.25, 8.81, 9.13, 9.34, 9.22, 9.06, 9.06, 9.38, null], gradePointAvg: 9.19, section: "A" },
  { slNo: 7, subjectCode: "MRMI107", subject: "RM & IPR", faculty: "Prakash O S", scores: [9.32, 9.13, 9.10, 9.16, 9.29, 8.81, 9.00, 9.13, 9.23, 9.29], gradePointAvg: 9.15, section: "A" },
  
  // Section B (10-point scale)
  { slNo: 1, subjectCode: "MMC101", subject: "PSC", faculty: "SDN Hayath Ali", scores: [9.61, 9.35, 9.26, 9.13, 9.65, 9.16, 9.26, 9.32, 9.32, 9.48], gradePointAvg: 9.35, section: "B" },
  { slNo: 2, subjectCode: "MMC102", subject: "DMS", faculty: "Mr. Swamy J S T", scores: [9.84, 9.32, 9.45, 9.68, 9.68, 9.39, 9.58, 9.39, 9.35, 9.55], gradePointAvg: 9.52, section: "B" },
  { slNo: 3, subjectCode: "MMC103", subject: "DBMS", faculty: "Sharvani Channappa", scores: [9.45, 9.32, 8.97, 9.16, 9.29, 9.00, 8.94, 9.00, 9.42, 9.48], gradePointAvg: 9.20, section: "B" },
  { slNo: 4, subjectCode: "MMC104", subject: "OS", faculty: "Jennifer S", scores: [9.61, 9.55, 9.48, 9.48, 9.61, 9.23, 9.39, 9.39, 9.48, 9.32], gradePointAvg: 9.45, section: "B" },
  { slNo: 5, subjectCode: "MMC105", subject: "WT", faculty: "Sree Lakshmi", scores: [9.16, 9.29, 8.87, 9.16, 8.97, 8.94, 8.94, 8.65, 9.26, 9.13], gradePointAvg: 9.04, section: "B" },
  { slNo: 6, subjectCode: "MMCL106", subject: "DBMS Lab", faculty: "Subhashree D. C.", scores: [9.43, 9.27, 9.13, 9.17, 9.07, 9.07, 9.23, 9.23, 9.37, null], gradePointAvg: 9.22, section: "B" },
  { slNo: 7, subjectCode: "MRMI107", subject: "RM & IPR", faculty: "Dr. Girish Kumar D", scores: [8.90, 9.17, 9.21, 9.34, 9.38, 9.21, 9.41, 9.14, 9.41, 9.45], gradePointAvg: 9.26, section: "B" },
];

const subjects = ["All", "PSC", "DMS", "DBMS", "OS", "WT", "RM & IPR"];
const sections: ("A" | "B")[] = ["A", "B"];

const FacultyFeedback = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedSection, setSelectedSection] = useState<"A" | "B">("A");

  const filteredData = feedbackData.filter((entry) => {
    const subjectMatch = selectedSubject === "All" || entry.subject === selectedSubject;
    const sectionMatch = entry.section === selectedSection;
    return subjectMatch && sectionMatch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Faculty Feedback Report
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Teaching Evaluation - Odd Term 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header Info */}
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Department: Master of Computer Applications
              </h2>
              <p className="text-muted-foreground">Semester 1</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Subject:</span>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Section:</span>
              <Select value={selectedSection} onValueChange={(val) => setSelectedSection(val as "A" | "B")}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select Section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section} value={section}>
                      Section {section}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-lg border bg-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[60px]">Sl No</TableHead>
                  <TableHead className="w-[100px]">Code</TableHead>
                  <TableHead className="w-[80px]">Subject</TableHead>
                  <TableHead>Faculty</TableHead>
                  <TableHead className="w-[60px]">Section</TableHead>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <TableHead key={num} className="w-[50px] text-center">
                      {num}
                    </TableHead>
                  ))}
                  <TableHead className="w-[80px] text-center font-semibold">
                    GPA
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((entry, index) => (
                    <TableRow key={`${entry.section}-${entry.slNo}-${index}`}>
                      <TableCell className="font-medium">{entry.slNo}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {entry.subjectCode}
                      </TableCell>
                      <TableCell className="font-medium text-primary">
                        {entry.subject}
                      </TableCell>
                      <TableCell>{entry.faculty}</TableCell>
                      <TableCell className="text-center font-medium">
                        {entry.section}
                      </TableCell>
                      {entry.scores.map((score, scoreIndex) => (
                        <TableCell
                          key={scoreIndex}
                          className="text-center text-sm"
                        >
                          {score !== null ? score.toFixed(2) : "-"}
                        </TableCell>
                      ))}
                      <TableCell className="text-center font-semibold text-primary">
                        {entry.gradePointAvg.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={16}
                      className="h-24 text-center text-muted-foreground"
                    >
                      No feedback data found for the selected filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Summary */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredData.length} of {feedbackData.length} entries
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyFeedback;
