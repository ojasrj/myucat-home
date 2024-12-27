import { CheckCircle, BookOpen, Target, Users } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "GCSE & A-Levels",
    description: "Build strong academic foundations and choose the right subjects for medical school.",
  },
  {
    icon: Target,
    title: "UCAT & BMAT",
    description: "Expert preparation for medical admissions tests with proven strategies.",
  },
  {
    icon: CheckCircle,
    title: "Application Support",
    description: "Guidance on personal statements and school selection strategy.",
  },
  {
    icon: Users,
    title: "Interview Preparation",
    description: "Mock interviews and comprehensive preparation for MMI and panel interviews.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-secondary-dark mb-4">Your Path to Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We support you through every step of your medical school application journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-dark mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;