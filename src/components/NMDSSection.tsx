import { Button } from "@/components/ui/button";
import { Users, Calendar, Trophy, GraduationCap, Globe, MessageCircle } from "lucide-react";

const NMDSSection = () => {
  const offerings = [
    {
      icon: Calendar,
      title: "Free Supercurricular Talks",
      description: "Weekly talks from doctors, dentists, and medical students on cutting-edge topics",
    },
    {
      icon: GraduationCap,
      title: "Virtual Work Experience",
      description: "Gain valuable insights into medicine and dentistry from home",
    },
    {
      icon: Trophy,
      title: "Competitions & Essay Prizes",
      description: "Showcase your skills and boost your application with prestigious awards",
    },
    {
      icon: Users,
      title: "Ambassador Programme",
      description: "Leadership opportunities and mentorship for aspiring medics",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Part of MyUCAT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            National Medical & Dental Society
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A free community dedicated to widening access to medicine and dentistry through enrichment activities, 
            competitions, and peer support for aspiring doctors and dentists.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900">Global</p>
            <p className="text-sm text-gray-600">Community</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900">5000+</p>
            <p className="text-sm text-gray-600">WhatsApp Members</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900">Weekly</p>
            <p className="text-sm text-gray-600">Free Events</p>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <offering.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{offering.title}</h3>
              <p className="text-gray-600 text-sm">{offering.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg rounded-full transition-all transform hover:scale-105"
            onClick={() => window.open('https://medsoc.myucat.co.uk/events', '_blank')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            View Upcoming Events
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary-light px-8 py-6 text-lg rounded-full"
            onClick={() => window.open('https://medsoc.myucat.co.uk', '_blank')}
          >
            Learn More About NMDS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NMDSSection;
