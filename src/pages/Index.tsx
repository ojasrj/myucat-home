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
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-primary">Unparalleled expertise in medical and dental admissions</h4>
                      
                      <div className="space-y-4 text-gray-600">
                        <p>
                          MyUCAT was initially founded by Ojas Rajkumar to share his secrets after exceptional success in the admissions game:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Medical student at University of Oxford</li>
                          <li>One of the highest-scoring tutors ever (3470, SJT 1)</li>
                          <li className="ml-4">Formerly the highest – many of my students surpassed me in 2023-24 and are now on track to join as tutors!</li>
                          <li>Offers from 4/4 medical schools: Oxford, Imperial, KCL, Birmingham</li>
                          <li>Personally assisted several thousand students from across the world with applying to UK institutions</li>
                        </ul>
                        
                        <p>
                          Over the years, MyUCAT has grown from his personal project to a hand-picked, nationwide network of experienced tutors, including doctors and students from every UK medical and dental school. Ojas continues to take an active role at the head of the team and we remain true to our founding principles: offering unbeatable value and delivering unbeatable results. We design specific, evidence-based strategies to ensure that all students are able to secure a coveted place.
                        </p>
                        
                        <div>
                          <p className="font-semibold mb-2">We cover all aspects of medical & dental school admissions:</p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>MMI Mock Interview Circuits</li>
                            <li>1-1 University Specific: Oxbridge, Panel, MMI interview preparation sessions</li>
                            <li>1-1 UCAT Tuition exclusively with top 3000+ scorers (unlike any other UK company)</li>
                            <li>Exam-oriented A Level tuition</li>
                          </ul>
                        </div>
                        
                        <p>
                          We don't want money to ever be a barrier to education and seek to be as accessible as possible. This includes through a variety of FREE seminars & resources, in addition to affordable teaching sessions in small-group settings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-32">
                    <img 
                      src="/lovable-uploads/4672534e-030c-4a2a-9b2f-9b6044d097a8.png" 
                      alt="MyUCAT Team Member"
                      className="rounded-lg shadow-md w-full h-auto object-cover aspect-[3/4] animate-fade-in"
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