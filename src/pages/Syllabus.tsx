import { FileText, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const syllabusFiles = [
  {
    title: "MCA 2024 Syllabus - 1st & 2nd Semester",
    description: "Complete syllabus for first and second semester MCA program (2024 batch)",
    filename: "BITM-MCA-2024-SYLLABUS-1st-2nd-Sem.pdf",
    path: "/documents/BITM-MCA-2024-SYLLABUS-1st-2nd-Sem.pdf",
  },
  {
    title: "Final Syllabus",
    description: "Complete MCA program syllabus document",
    filename: "FINAL_SYLLABUS.pdf",
    path: "/documents/FINAL_SYLLABUS.pdf",
  },
];

const Syllabus = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary mb-6">
            <BookOpen className="h-4 w-4" />
            Academic Resources
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            MCA <span className="text-gradient">Syllabus</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Download the official MCA program syllabus documents for all semesters
          </p>
        </div>
      </section>

      {/* Syllabus Documents */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {syllabusFiles.map((file, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{file.title}</CardTitle>
                      <CardDescription>{file.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <a href={file.path} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        View PDF
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href={file.path} download={file.filename}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Syllabus;
