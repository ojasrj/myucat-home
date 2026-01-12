import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const programmes = [
  {
    icon: "☀️",
    title: "Summer UCAT Programme",
    description: "A comprehensive, multi-month course to master the UCAT and personal statement, with a brief introduction in September to interview training.",
    link: "https://learn.myucat.co.uk/summer-programme"
  },
  {
    icon: "❄️",
    title: "Winter Interview Programme",
    description: "Targeted, university-specific preparation for medical and dental school interviews from October - January.",
    medicalLink: "https://learn.myucat.co.uk/medical-interview-programme",
    dentalLink: "https://learn.myucat.co.uk/dental-interview-programme"
  },
  {
    icon: "📚",
    title: "Year-Round A-Level Tutoring",
    description: "Combines the strengths of A* medical students and PGCE-qualified subject specialists with up to 20+ years of classroom teaching experience.",
    link: "https://learn.myucat.co.uk/a-level-tuition"
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
  },
  {
    icon: "📖",
    title: "A Level Tuition",
    description: "Expert one-on-one tutoring from A* medical student mentors or qualified teachers.",
    link: "https://learn.myucat.co.uk/a-level-1-1"
  }
];

const Programmes = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        {/* Main Programmes */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Programmes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive courses designed to guide you through every stage of your medical or dental school application
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {programmes.map((programme, index) => (
            <Card 
              key={index}
              className="bg-white border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{programme.icon}</div>
                <CardTitle className="text-xl text-primary">{programme.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{programme.description}</p>
                {programme.link && (
                  <Button
                    className="w-full bg-primary hover:bg-primary-dark"
                    onClick={() => window.open(programme.link, '_blank')}
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                )}
                {programme.medicalLink && programme.dentalLink && (
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-primary hover:bg-primary-dark"
                      onClick={() => window.open(programme.medicalLink, '_blank')}
                    >
                      Medical Programme
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary-light"
                      onClick={() => window.open(programme.dentalLink, '_blank')}
                    >
                      Dental Programme
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bespoke Services */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Bespoke 1-1 Tuition
          </h3>
          <p className="text-gray-600">
            Personalised support tailored to your individual needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bespokeServices.map((service, index) => (
            <Card 
              key={index}
              className="bg-white/80 border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h4 className="font-bold text-primary mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programmes;
