import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-secondary pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
          <Button
            variant="outline"
            className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-primary-dark text-sm font-medium"
            onClick={() => window.open('https://www.guessandflag.co.uk/interviews', '_blank')}
          >
            Book 1-1 Mock Interviews
          </Button>
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-dark leading-tight">
            MyUCAT Admissions Specialists
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An evidence-based approach to the university application process - your expert-led journey to medical or dental school begins today!
          </p>
          <p className="text-lg font-medium text-primary-dark mb-4">
            Start your journey by joining our free advice groups:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg transition-all transform hover:scale-105"
              onClick={() => window.open('https://chat.whatsapp.com/EYQbvty2opY4YWXqq0hXhC', '_blank')}
            >
              Medical Interviews
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary-light px-8 py-6 text-lg"
              onClick={() => window.open('https://chat.whatsapp.com/KFDV6tP2Fpo6ksGjTmNx5V', '_blank')}
            >
              Y12 UCAT Group
            </Button>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg transition-all transform hover:scale-105"
              onClick={() => window.open('https://chat.whatsapp.com/JYJO6RyCpKqCTuM1kaolcl', '_blank')}
            >
              Dental Interviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;