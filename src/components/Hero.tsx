import { Button } from "@/components/ui/button";
import { Award, Star, Users, CheckCircle, MessageCircle, Stethoscope } from "lucide-react";
import ToothIcon from "@/components/icons/ToothIcon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-secondary pt-20 pb-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
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
              <span className="text-sm font-medium text-primary-dark">150+ Expert Tutors</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            MyUCAT
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
            Evidence-based, results-oriented social enterprise for UK medical & dental admissions
          </p>

          <p className="text-lg text-primary-dark max-w-xl mx-auto">
            Your expert-led journey to medical or dental school begins today with our nationwide network of experienced tutors
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>UCAT Preparation</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Interview Training</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Personal Statements</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>A-Level Support</span>
            </div>
          </div>

          {/* PRIMARY CTA - Dominant */}
          <div className="pt-4">
            <p className="text-lg font-semibold text-primary-dark mb-4">
              Start with Free Expert Guidance
            </p>
            
            {/* Featured Group - UCAT 2026 Summer */}
            <a 
              href="https://chat.whatsapp.com/EOsY2wTUnFZ4g4iKmh1mcB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-8 text-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl rounded-full mb-4"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Join UCAT Group (2026 Summer)
              </Button>
            </a>
            
            <p className="text-sm text-gray-500 mb-4">Our most popular free advice group</p>
          </div>

          {/* Y13 Interview Groups */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="w-full text-sm text-gray-500 mb-2">Already applied? Join our Y13 interview prep groups:</p>
            <a 
              href="https://chat.whatsapp.com/JQs5u2s3V41KkogZZJfTOp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105 rounded-xl"
              >
                <Stethoscope className="mr-2 h-5 w-5" />
                Y13 Medicine Interviews
              </Button>
            </a>
            <a 
              href="https://chat.whatsapp.com/Gme9STBqQ8qL5acO9LACkV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105 rounded-xl"
              >
                <ToothIcon className="mr-2 h-5 w-5" />
                Y13 Dentistry Interviews
              </Button>
            </a>
          </div>

          <div className="pt-2">
            <Button
              variant="ghost"
              className="text-primary hover:bg-primary/10"
              onClick={() => window.open('https://www.guessandflag.co.uk/interviews', '_blank')}
            >
              Or book 1-1 mock interviews →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
