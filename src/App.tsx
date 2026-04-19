import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Disclaimer from "./pages/Disclaimer";
import CastleGrayskull from "./pages/projects/CastleGrayskull";
import Part1ReferenceImages from "./pages/projects/Part1ReferenceImages";
import Part2StructureMapping from "./pages/projects/Part2StructureMapping";
import Part3FinalBuild from "./pages/projects/Part3FinalBuild";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/castle-grayskull" element={<CastleGrayskull />} />
          <Route
            path="/projects/castle-grayskull/part-1-reference-images"
            element={<Part1ReferenceImages />}
          />
          <Route
            path="/projects/castle-grayskull/part-2-structure-mapping"
            element={<Part2StructureMapping />}
          />
          <Route
            path="/projects/castle-grayskull/part-3-final-build"
            element={<Part3FinalBuild />}
          />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
