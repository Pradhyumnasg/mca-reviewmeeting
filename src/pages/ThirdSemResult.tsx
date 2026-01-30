import { Award, TrendingUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroBadge from "@/components/common/HeroBadge";

type ResultEntry = {
  slNo: number;
  subject: string;
  subjectCode: string;
  faculty: string;
  appeared: number;
  passed: number;
  failed: number;
};

const resultData: ResultEntry[] = [
  { slNo: 1, subject: "MACHINE LEARNING", subjectCode: "MMCA311A", faculty: "Mrs. Sharvani V", appeared: 40, passed: 39, failed: 1 },
  { slNo: 2, subject: "DEEP LEARNING", subjectCode: "MMCA311C", faculty: "Mr. Pradhyumn S G", appeared: 40, passed: 40, failed: 0 },
  { slNo: 3, subject: "COMPUTER VISION", subjectCode: "MMCA311D", faculty: "Mr. Prakash O S", appeared: 40, passed: 40, failed: 0 },
  { slNo: 4, subject: "DATA MINING & DATA WAREHOUSING", subjectCode: "MMCB311A", faculty: "Ms. M M Harshitha", appeared: 32, passed: 32, failed: 0 },
  { slNo: 5, subject: "SOCIAL MEDIA ANALYTICS", subjectCode: "MMCB311C", faculty: "Mrs. Subhashree D C", appeared: 32, passed: 32, failed: 0 },
  { slNo: 6, subject: "STATISTICAL ANALYSIS USING R", subjectCode: "MMCB311D", faculty: "Dr. SDN Hayath Ali", appeared: 32, passed: 32, failed: 0 },
  { slNo: 7, subject: "PROJECT WORK", subjectCode: "MPRJ384", faculty: "Mrs. Jennifer Mary S / Mr. Prakash O S / Ms. Sreelakshmi J", appeared: 73, passed: 73, failed: 0 },
];

const ThirdSemResult = () => {
  const totalAppeared = resultData.reduce((sum, r) => sum + r.appeared, 0);
  const totalPassed = resultData.reduce((sum, r) => sum + r.passed, 0);
  const totalFailed = resultData.reduce((sum, r) => sum + r.failed, 0);
  const overallPassPercentage = ((totalPassed / totalAppeared) * 100).toFixed(1);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            3rd Semester Result Feedback
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Badge className="bg-secondary/90 text-secondary-foreground text-2xl px-6 py-2 font-bold">
              97% Pass Rate
            </Badge>
          </div>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Subject-wise Performance Analysis - 3rd Semester MCA
          </p>
        </div>
      </section>


      {/* Table Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Subject-wise Result Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[60px]">S.N.</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead className="w-[120px]">Subject Code</TableHead>
                      <TableHead>Name of Staff</TableHead>
                      <TableHead className="w-[100px] text-center">No. Students Appeared</TableHead>
                      <TableHead className="w-[100px] text-center">No. Students Passed</TableHead>
                      <TableHead className="w-[100px] text-center">No. Students Failed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {resultData.map((entry) => (
                      <TableRow key={entry.slNo}>
                        <TableCell className="font-medium">{entry.slNo}</TableCell>
                        <TableCell className="font-medium text-primary">{entry.subject}</TableCell>
                        <TableCell className="text-muted-foreground">{entry.subjectCode}</TableCell>
                        <TableCell>{entry.faculty}</TableCell>
                        <TableCell className="text-center font-medium">{entry.appeared}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                            {entry.passed}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className={entry.failed > 0 ? "bg-red-500/10 text-red-600 border-red-500/30" : "bg-muted text-muted-foreground"}>
                            {entry.failed}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ThirdSemResult;
