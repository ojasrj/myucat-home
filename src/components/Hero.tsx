import { Button } from "@/components/ui/button";
import { Award, Star, Users, CheckCircle, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-secondary pt-16 md:pt-20 pb-16 md:pb-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-secondary/50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-5 md:space-y-8 animate-fade-in">
          {/* Trust Badges - Different content on mobile vs desktop */}
          {/* Mobile badges */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-2.5 py-1.5 rounded-full shadow-sm border border-primary/10">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary-dark">35+ Oxbridge Med in '25</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-2.5 py-1.5 rounded-full shadow-sm border border-primary/10">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary-dark">1000s+ Med/Dent Entries</span>
            </div>
          </div>
          
          {/* Desktop badges */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-primary/10">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary-dark">35+ Oxbridge Offers 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-primary/10">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-primary-dark">500+ 5-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-primary/10">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary-dark">Helped 1000s+ Enter Med/Dent</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-primary leading-tight">
            MyUCAT
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium px-2">
            Evidence-based, results-oriented social enterprise for UK medical & dental admissions
          </p>

          <p className="text-base md:text-lg text-primary-dark max-w-xl mx-auto px-2">
            Your expert-led journey to medical or dental school begins today
          </p>

          {/* Service tags - simplified on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 px-2">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
              <span>UCAT</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
              <span>Interviews</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
              <span>Personal Statements</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
              <span>A-Levels</span>
            </div>
          </div>

          {/* PRIMARY CTA */}
          <div className="pt-2 md:pt-4">
            <p className="text-base md:text-lg font-semibold text-primary-dark mb-3 md:mb-4">
              Start with Free Expert Guidance
            </p>
            
            <a 
              href="https://chat.whatsapp.com/EOsY2wTUnFZ4g4iKmh1mcB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl rounded-full mb-3 md:mb-4"
              >
                <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Join UCAT Group (2026)
              </Button>
            </a>
            
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Our most popular free advice group</p>
          </div>

          <div className="pt-3 md:pt-4 border-t border-gray-200 mt-4 md:mt-6">
            <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">Already applied? Prepare for interviews:</p>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white text-sm"
              onClick={() => window.open('https://www.guessandflag.co.uk/interviews', '_blank')}
            >
              Book 1-1 Mock Interviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
