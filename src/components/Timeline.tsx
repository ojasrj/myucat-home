import { GraduationCap, ClipboardCheck, Target, Handshake } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Academics: GCSEs, A Levels & IB",
    description: "Build strong academic foundations and choose the right subjects for medical school.",
    Icon: GraduationCap,
    align: "left",
  },
  {
    number: 2,
    title: "UCAT & BMAT",
    description: "Expert preparation for medical admissions tests with proven strategies.",
    Icon: ClipboardCheck,
    align: "right",
  },
  {
    number: 3,
    title: "Strategic Application",
    description: "Comprehensive guidance on personal statements and school selection strategy.",
    Icon: Target,
    align: "left",
  },
  {
    number: 4,
    title: "Interview",
    description: "Professional preparation for MMI and panel interviews with experienced mentors.",
    Icon: Handshake,
    align: "right",
  },
];

const Timeline = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Your Path to Medical/Dental Success
        </h2>
        
        <div className="relative">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primary/30 border-dashed" />
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center ${step.align === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${step.align === 'left' ? 'text-right pr-16' : 'text-left pl-16'}`}>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-primary-dark">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-1/2 ${step.align === 'left' ? 'pl-16' : 'pr-16'} flex ${step.align === 'left' ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <step.Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
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