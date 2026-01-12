import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Sparkles, MessageCircle, Stethoscope } from "lucide-react";
import ToothIcon from "@/components/icons/ToothIcon";
import { useIsMobile } from "@/hooks/use-mobile";

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
  desktopDescription: "Free UCAT tips & peer support",
  link: "https://chat.whatsapp.com/EOsY2wTUnFZ4g4iKmh1mcB",
  color: "bg-green-500",
  badge: "Most Popular"
}, {
  icon: Stethoscope,
  title: "Medicine Interviews",
  description: "Interview prep for medical applicants",
  desktopDescription: "Interview prep for Y13 medical applicants",
  link: "https://chat.whatsapp.com/JQs5u2s3V41KkogZZJfTOp",
  color: "bg-blue-500",
  badge: null
}, {
  icon: ToothIcon,
  title: "Dentistry Interviews",
  description: "Interview prep for dental applicants",
  desktopDescription: "Interview prep for Y13 dental applicants",
  link: "https://chat.whatsapp.com/Gme9STBqQ8qL5acO9LACkV",
  color: "bg-purple-500",
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
  const isMobile = useIsMobile();

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

        {/* Free Community Groups */}
        <div className="mb-10 md:mb-16">
          {/* Mobile Version - Compact stacked cards */}
          {isMobile ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Free WhatsApp Groups</h3>
                  <p className="text-xs text-gray-600">Expert advice & peer support</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {whatsappGroups.map((group, index) => (
                  <a 
                    key={index} 
                    href={group.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
                  >
                    <div className={`w-10 h-10 rounded-lg ${group.color} flex items-center justify-center flex-shrink-0`}>
                      <group.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">{group.title}</h4>
                        {group.badge && (
                          <span className="bg-green-100 text-green-700 text-[10px] font-medium px-1.5 py-0.5 rounded-full flex-shrink-0">
                            {group.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{group.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ) : (
            /* Desktop Version - Elegant cards with more detail */
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Join Our Free Community</h3>
                <p className="text-gray-600">Connect with thousands of applicants and get free expert advice</p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                {whatsappGroups.map((group, index) => (
                  <a 
                    key={index} 
                    href={group.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 overflow-hidden"
                  >
                    {/* Background decoration */}
                    <div className={`absolute -right-6 -top-6 w-24 h-24 ${group.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
                    
                    {group.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                          {group.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className={`w-14 h-14 rounded-xl ${group.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <group.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{group.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{group.desktopDescription}</p>
                    
                    <div className="flex items-center justify-end">
                      <div className="flex items-center gap-1 text-green-600 font-medium text-sm group-hover:gap-2 transition-all">
                        Join
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Featured Programmes - Stacked on desktop, same on mobile */}
        <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12 max-w-3xl mx-auto">
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
