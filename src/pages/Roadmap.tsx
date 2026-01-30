import { Target, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeroBadge from "@/components/common/HeroBadge";

type RoadmapItem = {
  activity: string;
  target: number;
  achieved: number;
  color: string;
};

const roadmapData: RoadmapItem[] = [
  { activity: "Patent Publications", target: 4, achieved: 0, color: "bg-orange-500" },
  { activity: "Publications of Paper in Scopus Indexed Conference / Journal", target: 10, achieved: 0, color: "bg-purple-500" },
  { activity: "FDP / Workshops (Faculty)", target: 10, achieved: 1, color: "bg-green-500" },
  { activity: "Workshops for Students", target: 6, achieved: 0, color: "bg-blue-500" },
];

const Roadmap = () => {
  const totalTarget = roadmapData.reduce((sum, item) => sum + item.target, 0);
  const totalAchieved = roadmapData.reduce((sum, item) => sum + item.achieved, 0);
  const overallProgress = Math.round((totalAchieved / totalTarget) * 100);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Department Roadmap
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Annual Targets & Achievements - Jan - Dec 2026
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Total Targets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{totalTarget}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Total Achieved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">{totalAchieved}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Overall Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">{overallProgress}%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Table */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Activity Targets - Jan - Dec 2026
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="min-w-[250px]">Name of the Activity</TableHead>
                      <TableHead className="w-[120px] text-center">Target</TableHead>
                      <TableHead className="w-[120px] text-center">Achieved</TableHead>
                      <TableHead className="w-[200px] text-center">Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roadmapData.map((item) => {
                      const progress = item.target > 0 ? Math.round((item.achieved / item.target) * 100) : 0;
                      return (
                        <TableRow key={item.activity}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${item.color}`} />
                              <span className="font-medium">{item.activity}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-bold text-lg px-4">
                              {item.target.toString().padStart(2, "0")}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge 
                              variant="outline" 
                              className={`font-bold text-lg px-4 ${
                                item.achieved > 0 
                                  ? "bg-green-500/10 text-green-600 border-green-500/30" 
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {item.achieved.toString().padStart(2, "0")}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={progress} 
                                className={`h-2 flex-1 ${progress > 0 ? "[&>div]:bg-green-500" : ""}`} 
                              />
                              <span className={`text-sm w-12 ${progress > 0 ? "text-green-600 font-medium" : "text-muted-foreground"}`}>{progress}%</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {/* Summary Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {roadmapData.map((item) => {
                  const progress = item.target > 0 ? Math.round((item.achieved / item.target) * 100) : 0;
                  return (
                    <Card key={item.activity} className="bg-background/50 border-border/50">
                      <CardContent className="p-4">
                        <div className={`w-full h-1 rounded-full mb-3 ${item.color}`} />
                        <p className="text-sm font-medium text-foreground mb-2 line-clamp-2">{item.activity}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{item.achieved}/{item.target}</span>
                          <Badge variant="outline" className={progress > 0 ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}>
                            {progress}%
                          </Badge>
                        </div>
                        <Progress value={progress} className="h-1 mt-2" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
