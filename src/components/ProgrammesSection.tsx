import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Sparkles, MessageCircle, Stethoscope } from "lucide-react";
import ToothIcon from "@/components/icons/ToothIcon";

const programmes = [
  {
    icon: "☀️",
    title: "Summer UCAT Programme",
    description: "A comprehensive, multi-month course to master the UCAT and personal statement, with a brief introduction in September to interview training.",
    outcome: "From UCAT beginner → 3000+ scorer",
    link: "https://learn.myucat.co.uk/summer-programme",
    featured: true
  },
  {
    icon: "❄️",
    title: "Winter Interview Programme",
    description: "Targeted, university-specific preparation for medical and dental school interviews from October - January.",
    outcome: "From nervous → confident interviewer",
    medicalLink: "https://learn.myucat.co.uk/medical-interview-programme",
    dentalLink: "https://learn.myucat.co.uk/dental-interview-programme",
    featured: true
  },
  {
    icon: "📚",
    title: "Year-Round A-Level Tutoring",
    description: "2026 programme intake launching soon. Combines the strengths of A* medical students and PGCE-qualified subject specialists with up to 20+ years of classroom teaching experience.",
    outcome: "From struggling → A* grades",
    link: "https://learn.myucat.co.uk/a-level-tuition",
    featured: false
  }
];

const whatsappGroups = [
  {
    icon: MessageCircle,
    title: "UCAT Group (2026 Summer)",
    description: "Free UCAT tips, strategies & peer support",
    link: "https://chat.whatsapp.com/EOsY2wTUnFZ4g4iKmh1mcB",
    color: "from-green-500 to-green-600",
    badge: "Most Popular"
  },
  {
    icon: Stethoscope,
    title: "Y13 Medicine Interviews",
    description: "Interview prep for medical applicants",
    link: "https://chat.whatsapp.com/JQs5u2s3V41KkogZZJfTOp",
    color: "from-blue-500 to-blue-600",
    badge: null
  },
  {
    icon: ToothIcon,
    title: "Y13 Dentistry Interviews",
    description: "Interview prep for dental applicants",
    link: "https://chat.whatsapp.com/Gme9STBqQ8qL5acO9LACkV",
    color: "from-purple-500 to-purple-600",
    badge: null
  }
];

const bespokeServices = [
  {
    icon: "🎯",
    title: "UCAT Tuition",
    description: "Personalised one-on-one UCAT preparation with our highest scoring tutors.",
    link: "https://learn.myucat.co.uk/ucat-1-1"
  },
  {
    icon: "💬",
    title: "Interview Tuition",
    description: "Individual interview coaching tailored to your target universities.",
    link: "https://learn.myucat.co.uk/interviews"
  },
  {
    icon: "✍️",
    title: "Personal Statement",
    description: "Expert guidance to refine your personal statement for your chosen universities.",
    link: "https://learn.myucat.co.uk/personal-statements"
  }
];

const ProgrammesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our Programmes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Transform Your Application
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive courses designed to guide you through every stage of your application
          </p>
        </div>

        {/* Free Community Groups */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-3">Join Our Free Community Groups</h3>
          <p className="text-gray-600 text-center mb-8">Get free expert advice and connect with fellow applicants</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whatsappGroups.map((group, index) => (
              <a
                key={index}
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {group.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {group.badge}
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <group.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-center mb-2">{group.title}</h4>
                <p className="text-sm text-gray-600 text-center">{group.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Programmes - Innovative Card Design */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {programmes.filter(p => p.featured).map((programme, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative element */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{programme.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                      {programme.title}
                    </h3>
                    <p className="text-gray-600">{programme.description}</p>
                  </div>
                </div>
                
                {/* Outcome Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-2 rounded-full mb-6">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">{programme.outcome}</span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  {programme.link && (
                    <Button
                      className="bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all group/btn"
                      onClick={() => window.open(programme.link, '_blank')}
                    >
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  )}
                  {programme.medicalLink && programme.dentalLink && (
                    <>
                      <Button
                        className="bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all"
                        onClick={() => window.open(programme.medicalLink, '_blank')}
                      >
                        Medical
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                        onClick={() => window.open(programme.dentalLink, '_blank')}
                      >
                        Dental
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* A-Level Programme - Full Width */}
        {programmes.filter(p => !p.featured).map((programme, index) => (
          <div 
            key={index}
            className="group bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 mb-16 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <span className="text-6xl">{programme.icon}</span>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{programme.title}</h3>
                <p className="text-white/80 mb-4 max-w-2xl">Combines the strengths of A* medical students and PGCE-qualified subject specialists with up to 20+ years of classroom teaching experience.</p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">{programme.outcome}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold text-white">2026 intake launching soon</span>
              </div>
            </div>
          </div>
        ))}

        {/* Bespoke 1-1 Tuition */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Bespoke 1-1 Tuition
          </h3>
          <p className="text-gray-600">
            Personalised support tailored to your individual needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bespokeServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <span className="text-4xl block mb-3">{service.icon}</span>
              <h4 className="font-bold text-primary mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all"
                onClick={() => window.open(service.link, '_blank')}
              >
                Learn More
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
