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
      
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            <AccordionItem value="who-is-myucat">
              <AccordionTrigger className="text-xl font-semibold text-primary">
                Who/what is MyUCAT?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                MyUCAT is a leading provider of UCAT preparation resources and medical school application support. We specialize in helping students achieve their dreams of entering medical and dental schools through comprehensive tutoring, strategic guidance, and proven preparation methods.
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