import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Competitions from "./pages/Competitions";
import InterviewPractice from "./pages/InterviewPractice";
import InterviewAdmin from "./pages/InterviewAdmin";
import UCATTutoring from "./pages/UCATTutoring";
import PasswordProtect from "./components/PasswordProtect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route 
            path="/interview-practice" 
            element={
              <PasswordProtect>
                <InterviewPractice />
              </PasswordProtect>
            } 
          />
          <Route 
            path="/interview-admin" 
            element={
              <PasswordProtect>
                <InterviewAdmin />
              </PasswordProtect>
            } 
          />
          <Route 
            path="/ucat-tutoring" 
            element={
              <PasswordProtect storageKey="ucat_tutoring_access">
                <UCATTutoring />
              </PasswordProtect>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
