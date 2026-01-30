import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import HeroBadge from "@/components/common/HeroBadge";

const sectionAData = [
  { subject: "PSC", coverage: 66, fill: "hsl(142, 71%, 45%)" },
  { subject: "MATHS", coverage: 76, fill: "hsl(217, 91%, 60%)" },
  { subject: "DBMS", coverage: 70, fill: "hsl(48, 96%, 53%)" },
  { subject: "OS", coverage: 65, fill: "hsl(0, 0%, 62%)" },
  { subject: "WT", coverage: 63, fill: "hsl(25, 95%, 53%)" },
  { subject: "RM", coverage: 60, fill: "hsl(25, 95%, 53%)" },
  { subject: "WT LAB", coverage: 70, fill: "hsl(271, 91%, 65%)" },
  { subject: "DBMS LAB", coverage: 70, fill: "hsl(200, 18%, 40%)" },
];

const sectionBData = [
  { subject: "PSC", coverage: 64, fill: "hsl(142, 71%, 45%)" },
  { subject: "MATHS", coverage: 80, fill: "hsl(217, 91%, 60%)" },
  { subject: "DBMS", coverage: 74, fill: "hsl(48, 96%, 53%)" },
  { subject: "OS", coverage: 66, fill: "hsl(0, 0%, 62%)" },
  { subject: "WT", coverage: 68, fill: "hsl(25, 95%, 53%)" },
  { subject: "RM", coverage: 64, fill: "hsl(25, 95%, 53%)" },
  { subject: "WT LAB", coverage: 66, fill: "hsl(271, 91%, 65%)" },
  { subject: "DBMS LAB", coverage: 66, fill: "hsl(200, 18%, 40%)" },
];

const chartConfig = {
  coverage: {
    label: "Coverage %",
    color: "hsl(var(--primary))",
  },
};

const SyllabusCoverage = () => {
  const [selectedSection, setSelectedSection] = useState<"A" | "B">("A");
  const currentData = selectedSection === "A" ? sectionAData : sectionBData;
  const avgCoverage = Math.round(currentData.reduce((sum, d) => sum + d.coverage, 0) / currentData.length);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Syllabus Coverage
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            1st Semester Subject-wise Syllabus Coverage Analysis
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="A" className="w-full" onValueChange={(v) => setSelectedSection(v as "A" | "B")}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="A">Section A</TabsTrigger>
              <TabsTrigger value="B">Section B</TabsTrigger>
            </TabsList>

            <TabsContent value="A">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Section A - Coverage Bar Chart
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[350px]">
                      <BarChart data={sectionAData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="subject" type="category" width={80} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="coverage" radius={[0, 4, 4, 0]} fill="hsl(var(--primary))" />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Radial Chart */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-secondary" />
                      Section A - Coverage Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                          cx="50%"
                          cy="50%"
                          innerRadius="20%"
                          outerRadius="90%"
                          data={sectionAData}
                          startAngle={180}
                          endAngle={0}
                        >
                          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                          <RadialBar
                            background
                            dataKey="coverage"
                            cornerRadius={4}
                          />
                          <Legend
                            iconSize={10}
                            layout="horizontal"
                            verticalAlign="bottom"
                            wrapperStyle={{ paddingTop: 20 }}
                            formatter={(value, entry: any) => {
                              const item = sectionAData.find(d => d.subject === entry.payload.subject);
                              return `${item?.subject}: ${item?.coverage}%`;
                            }}
                          />
                          <ChartTooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-background border rounded-lg p-2 shadow-lg">
                                    <p className="font-medium">{payload[0].payload.subject}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Coverage: {payload[0].payload.coverage}%
                                    </p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-center text-lg font-semibold mt-4">
                      Average Coverage: <span className="text-primary">{Math.round(sectionAData.reduce((sum, d) => sum + d.coverage, 0) / sectionAData.length)}%</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="B">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Section B - Coverage Bar Chart
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[350px]">
                      <BarChart data={sectionBData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="subject" type="category" width={80} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="coverage" radius={[0, 4, 4, 0]} fill="hsl(var(--secondary))" />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Radial Chart */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-secondary" />
                      Section B - Coverage Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                          cx="50%"
                          cy="50%"
                          innerRadius="20%"
                          outerRadius="90%"
                          data={sectionBData}
                          startAngle={180}
                          endAngle={0}
                        >
                          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                          <RadialBar
                            background
                            dataKey="coverage"
                            cornerRadius={4}
                          />
                          <Legend
                            iconSize={10}
                            layout="horizontal"
                            verticalAlign="bottom"
                            wrapperStyle={{ paddingTop: 20 }}
                            formatter={(value, entry: any) => {
                              const item = sectionBData.find(d => d.subject === entry.payload.subject);
                              return `${item?.subject}: ${item?.coverage}%`;
                            }}
                          />
                          <ChartTooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-background border rounded-lg p-2 shadow-lg">
                                    <p className="font-medium">{payload[0].payload.subject}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Coverage: {payload[0].payload.coverage}%
                                    </p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-center text-lg font-semibold mt-4">
                      Average Coverage: <span className="text-secondary">{Math.round(sectionBData.reduce((sum, d) => sum + d.coverage, 0) / sectionBData.length)}%</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default SyllabusCoverage;
