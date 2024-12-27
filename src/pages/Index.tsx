import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Timeline />
      
      <section className="bg-secondary relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10 overflow-hidden"
          >
            <AccordionItem value="who-is-myucat" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <path d="M12 17h.01"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary text-left">
                    Who/what is MyUCAT?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-1 pl-14">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      MyUCAT is a leading provider of UCAT preparation resources and medical school application support. We specialize in helping students achieve their dreams of entering medical and dental schools through comprehensive tutoring, strategic guidance, and proven preparation methods.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-48">
                    <img 
                      src="/lovable-uploads/4672534e-030c-4a2a-9b2f-9b6044d097a8.png" 
                      alt="MyUCAT Team Member"
                      className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3] animate-fade-in"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
            Any questions?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white px-12 py-6 text-lg rounded-full w-full sm:w-auto transition-all transform hover:scale-105"
              onClick={() => window.open('https://wa.me/447443341420', '_blank')}
            >
              WhatsApp us
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary-light px-12 py-6 text-lg rounded-full w-full sm:w-auto"
              onClick={() => window.open('https://uk.trustpilot.com/review/myucat.co.uk', '_blank')}
            >
              Testimonials
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;