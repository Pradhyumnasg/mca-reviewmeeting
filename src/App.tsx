import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import AboutMCA from "./pages/AboutMCA";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import Research from "./pages/Research";
import Portal from "./pages/Portal";
import Proctoring from "./pages/Proctoring";
import Agenda from "./pages/Agenda";
import Syllabus from "./pages/Syllabus";
import Attendance from "./pages/Attendance";
import FacultyFeedback from "./pages/FacultyFeedback";
import ThirdSemResult from "./pages/ThirdSemResult";
import SyllabusCoverage from "./pages/SyllabusCoverage";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about-mca" element={<AboutMCA />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/events" element={<Events />} />
              <Route path="/research" element={<Research />} />
              <Route path="/portal" element={<Portal />} />
              <Route path="/portal/agenda" element={<Agenda />} />
              <Route path="/portal/syllabus" element={<Syllabus />} />
              <Route path="/portal/syllabus-coverage" element={<SyllabusCoverage />} />
              <Route path="/portal/3rd-sem-result" element={<ThirdSemResult />} />
              <Route path="/portal/attendance" element={<Attendance />} />
              <Route path="/portal/proctoring" element={<Proctoring />} />
              <Route path="/portal/faculty-feedback" element={<FacultyFeedback />} />
              <Route path="/portal/roadmap" element={<Roadmap />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
