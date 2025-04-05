
import { GraduationCap, ClipboardCheck, Target, Handshake } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "GCSEs & A Levels",
    description: "Expert-led support from our experienced team of A* tutors and qualified teachers.",
    Icon: GraduationCap,
    align: "left",
    buttons: [
      { label: "1-1 Tutoring", href: "https://www.guessandflag.co.uk/a-level-1-1" },
      { label: "A Level Group Lessons", href: "https://www.guessandflag.co.uk/a-level-tuition" },
    ],
  },
  {
    number: 2,
    title: "UCAT",
    description: "Our proven-strategies and 3400+ tutors: updated to the new UCAT format for 2025!",
    Icon: ClipboardCheck,
    align: "right",
    buttons: [
      { label: "Free UCAT Course", href: "https://questions.ucat.com/courses" },
      { label: "UCAT Programme", href: "https://www.guessandflag.co.uk/summer-programme" },
      { label: "1-1 Tutoring", href: "https://www.guessandflag.co.uk/ucat-1-1" },
      { label: "Question Bank", href: "https://questions.ucat.com/" },
      { label: "Score Calculator", href: "https://myucat.co.uk/pages/ucat-score-converter" },
    ],
  },
  {
    number: 3,
    title: "UCAS Applications",
    description: "Support with the new UCAS statement & with applying strategically in 2025.",
    Icon: Target,
    align: "left",
    buttons: [
      { label: "Strategic Applications", href: "https://www.guessandflag.co.uk/strategic-applications" },
      { label: "Personal Statement", href: "https://www.guessandflag.co.uk/personal-statements" },
    ],
  },
  {
    number: 4,
    title: "Interviews",
    description: "University-specific support for Oxbridge, MMI & traditional panel format by our mentoring team of doctors, dentists & experienced medical/dental interview tutors.",
    Icon: Handshake,
    align: "right",
    buttons: [
      { label: "1-1 Interviews", href: "https://www.guessandflag.co.uk/interviews" },
      { label: "Dental Course", href: "https://www.guessandflag.co.uk/dental-interview-programme" },
      { label: "Medical Course", href: "https://www.guessandflag.co.uk/medical-interview-programme" },
    ],
  },
];

const Timeline = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Your Path to Medical/Dental Success
        </h2>
        
        <div className="relative">
          {!isMobile && (
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary/30 border-dashed" />
          )}
          
          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex ${isMobile ? 'flex-col items-start gap-4' : `items-center ${step.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}`}>
                  <div className={`${isMobile ? 'absolute -left-5' : 'absolute left-1/2 transform -translate-x-1/2'}`}>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div 
                    className={`
                      ${isMobile ? 'ml-8 w-[calc(100%-2rem)]' : `w-1/2 ${step.align === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}
                    `}
                  >
                    <div className="glass-card p-6 rounded-lg shadow-lg space-y-4">
                      <h3 className="text-2xl font-bold text-primary-dark">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      
                      <div className={`flex flex-wrap gap-2 mt-4 ${step.align === 'left' && !isMobile ? 'justify-end' : 'justify-start'}`}>
                        {step.buttons.map((button, buttonIndex) => (
                          <Button
                            key={buttonIndex}
                            variant="outline"
                            size="sm"
                            className="bg-white hover:bg-primary hover:text-white transition-colors"
                            onClick={() => window.open(button.href, '_blank')}
                          >
                            {button.label}
                          </Button>
                        ))}
                      </div>

                      {isMobile && (
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-4">
                          <step.Icon className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {!isMobile && (
                    <div className={`w-1/2 ${step.align === 'left' ? 'pl-8' : 'pr-8'} flex ${step.align === 'left' ? 'justify-start' : 'justify-end'}`}>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
