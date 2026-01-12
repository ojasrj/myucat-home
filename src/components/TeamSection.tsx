import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Ojas Rajkumar",
    role: "MyUCAT Founder",
    detail: "Oxford Medicine, 4/4 Offers, 3470 UCAT",
    image: "/lovable-uploads/19f2184e-3934-4879-bc0d-f1a2da819177.png"
  },
  {
    name: "Dr Kaninika",
    role: "Interview Expert",
    detail: "Academic Clinician & Uni Lecturer",
    image: "/lovable-uploads/39345bd9-e9b8-45ab-b31a-25022f65cbe5.png"
  },
  {
    name: "Akshita",
    role: "UCAT Expert",
    detail: "Imperial Medicine, 3490 UCAT",
    image: "/lovable-uploads/5c69af02-1586-464f-86e6-08aeac947687.png"
  },
  {
    name: "Ikram",
    role: "A Level Chemistry",
    detail: "Qualified PGCE Teacher, Nottingham Graduate Medicine",
    image: "/lovable-uploads/47025685-fa2e-4dff-aa08-824cfdb6ee9a.png"
  },
  {
    name: "Tim",
    role: "A Level Biology",
    detail: "Retired Teacher with 20+ Years Experience",
    image: "/lovable-uploads/f03a3ac2-947c-417f-9de8-d93bab18693b.png"
  }
];

const stats = [
  { icon: Users, value: "150+", label: "Expert Tutors" },
  { icon: Award, value: "35+", label: "Oxbridge Offers in 2025" },
  { icon: BookOpen, value: "500+", label: "5-Star Reviews" },
];

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-secondary/20 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Each element of the application process is taught by the absolute best of the best. 
            Here's a sample of our 150+ nationally-ranked tutors from across the UK.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid - Reduced to 5 members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-white border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <CardContent className="p-4 text-center">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                  </div>
                </div>
                <h3 className="font-bold text-primary text-sm">{member.name}</h3>
                <p className="text-xs text-gray-600 font-medium">{member.role}</p>
                <p className="text-xs text-gray-500 mt-1 leading-tight">{member.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Team Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
            onClick={() => window.open('https://wa.me/447763980592?text=I%20would%20like%20to%20learn%20more%20about%20your%20tutors', '_blank')}
          >
            View Full Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
