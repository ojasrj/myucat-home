import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Sparkles, MessageCircle, Stethoscope } from "lucide-react";
import ToothIcon from "@/components/icons/ToothIcon";

const programmes = [{
  icon: "☀️",
  title: "Summer UCAT Programme",
  description: "A comprehensive, multi-month course to master the UCAT and personal statement, with a brief introduction in September to interview training.",
  shortDescription: "Master the UCAT with our comprehensive course.",
  outcome: "From UCAT beginner → 3000+ scorer",
  link: "https://learn.myucat.co.uk/summer-programme",
  featured: true
}, {
  icon: "❄️",
  title: "Winter Interview Programme",
  description: "Targeted, university-specific preparation for medical and dental school interviews from October - January.",
  shortDescription: "University-specific interview preparation.",
  outcome: "From nervous → confident interviewer",
  medicalLink: "https://learn.myucat.co.uk/medical-interview-programme",
  dentalLink: "https://learn.myucat.co.uk/dental-interview-programme",
  featured: true
}, {
  icon: "📚",
  title: "Year-Round A-Level Tutoring",
  description: "2026 programme intake launching soon. Combines the strengths of A* medical students and PGCE-qualified subject specialists with up to 20+ years of classroom teaching experience.",
  shortDescription: "A* tutoring from medical students & qualified teachers.",
  outcome: "From struggling → A* grades",
  link: "https://learn.myucat.co.uk/a-level-tuition",
  featured: false
}];

const whatsappGroups = [{
  icon: MessageCircle,
  title: "UCAT Group (2026)",
  description: "Free UCAT tips & peer support",
  link: "https://chat.whatsapp.com/EOsY2wTUnFZ4g4iKmh1mcB",
  color: "from-green-500 to-green-600",
  badge: "Most Popular"
}, {
  icon: Stethoscope,
  title: "Medicine Interviews",
  description: "Interview prep for medical applicants",
  link: "https://chat.whatsapp.com/JQs5u2s3V41KkogZZJfTOp",
  color: "from-blue-500 to-blue-600",
  badge: null
}, {
  icon: ToothIcon,
  title: "Dentistry Interviews",
  description: "Interview prep for dental applicants",
  link: "https://chat.whatsapp.com/Gme9STBqQ8qL5acO9LACkV",
  color: "from-purple-500 to-purple-600",
  badge: null
}];

const bespokeServices = [{
  icon: "🎯",
  title: "UCAT Tuition",
  description: "Personalised one-on-one UCAT preparation.",
  link: "https://learn.myucat.co.uk/ucat-1-1"
}, {
  icon: "💬",
  title: "Interview Tuition",
  description: "Individual coaching for your target universities.",
  link: "https://learn.myucat.co.uk/interviews"
}, {
  icon: "✍️",
  title: "Personal Statement",
  description: "Expert guidance for your personal statement.",
  link: "https://learn.myucat.co.uk/personal-statements"
}];

const ProgrammesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Our Programmes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            Transform Your Application
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-2">
            Comprehensive courses for every stage of your application
          </p>
        </div>

        {/* Free Community Groups - Horizontal scroll on mobile */}
        <div className="mb-10 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-2 md:mb-3">Join Our Free Groups</h3>
          <p className="text-gray-600 text-center text-sm mb-6 md:mb-8">Get free expert advice and connect with fellow applicants</p>
          
          {/* Mobile: horizontal scroll, Desktop: grid */}
          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 max-w-4xl md:mx-auto snap-x snap-mandatory">
            {whatsappGroups.map((group, index) => (
              <a 
                key={index} 
                href={group.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[200px] md:min-w-0 snap-center flex-shrink-0"
              >
                {group.badge && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    {group.badge}
                  </span>
                )}
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-3 md:mb-4 mx-auto`}>
                  <group.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-center text-sm md:text-base mb-1 md:mb-2">{group.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 text-center">{group.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Programmes */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          {programmes.filter(p => p.featured).map((programme, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-primary/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-8 -top-8 w-24 md:w-32 h-24 md:h-32 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="text-3xl md:text-5xl">{programme.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                      {programme.title}
                    </h3>
                    {/* Short description on mobile, full on desktop */}
                    <p className="text-gray-600 text-sm md:text-base hidden md:block">{programme.description}</p>
                    <p className="text-gray-600 text-sm md:hidden">{programme.shortDescription}</p>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm font-semibold">{programme.outcome}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {programme.link && (
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary-dark text-white shadow-lg text-xs md:text-sm" 
                      onClick={() => window.open(programme.link, '_blank')}
                    >
                      Learn More
                      <ExternalLink className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  )}
                  {programme.medicalLink && programme.dentalLink && (
                    <>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary-dark text-white text-xs md:text-sm" 
                        onClick={() => window.open(programme.medicalLink, '_blank')}
                      >
                        Medical
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline" 
                        className="border-primary text-primary text-xs md:text-sm" 
                        onClick={() => window.open(programme.dentalLink, '_blank')}
                      >
                        Dental
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* A-Level Programme */}
        {programmes.filter(p => !p.featured).map((programme, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-r from-primary to-primary-dark rounded-2xl md:rounded-3xl p-5 md:p-8 mb-10 md:mb-16 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span className="text-4xl md:text-6xl">{programme.icon}</span>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-3xl font-bold mb-2">{programme.title}</h3>
                <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base max-w-2xl">{programme.shortDescription}</p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm font-semibold">{programme.outcome}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full">
                <span className="font-semibold text-white text-sm md:text-base">2026 Intake Soon!</span>
              </div>
            </div>
          </div>
        ))}

        {/* Bespoke 1-1 Tuition */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2">
            Bespoke 1-1 Tuition
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Personalised support for your individual needs
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {bespokeServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl md:rounded-2xl p-3 md:p-6 border border-primary/10 hover:shadow-xl transition-all duration-300 text-center"
            >
              <span className="text-2xl md:text-4xl block mb-2 md:mb-3">{service.icon}</span>
              <h4 className="font-bold text-primary text-xs md:text-base mb-1 md:mb-2">{service.title}</h4>
              <p className="text-gray-600 text-[10px] md:text-sm mb-2 md:mb-4 hidden md:block">{service.description}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary hover:bg-primary/10 text-[10px] md:text-sm p-1 md:p-2 h-auto" 
                onClick={() => window.open(service.link, '_blank')}
              >
                Learn More
                <ArrowRight className="ml-1 h-2 w-2 md:h-3 md:w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
