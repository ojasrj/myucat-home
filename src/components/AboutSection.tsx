import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Award, Users, ExternalLink } from "lucide-react";

const features = [
  "Large expert-led group sessions covering the full syllabus in-depth",
  "Small group mentorship and practice with peers applying to similar universities",
  "Personalised feedback to identify and tackle individual weaknesses",
  "A motivating, collaborative environment for all"
];

const services = [
  "Small group & 1-1 UCAT support – exclusively with 3000+ & even 3400/3500+ top scorers",
  "Small group & 1-1 interview support – MMI, traditional panel & Oxbridge styles",
  "Strategic UCAS application guidance",
  "Personal statement support",
  "MMI mock interview circuits",
  "Exam-oriented 1-1 A Level & GCSE tuition"
];

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

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* About MyUCAT */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - About */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About MyUCAT
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                MyUCAT is a results-driven, evidence-based social enterprise supporting students through every step of the UK medical and dental application process.
              </p>
              
              <p>
                Our nationwide network of experienced tutors includes doctors and students from every UK medical and dental school. We remain true to our founding principles: offering unbeatable value and delivering unbeatable results.
              </p>
              
              <p>
                Our tutors have helped thousands of students gain offers to medical and dental schools across the country, including <strong>35+ offers to Oxbridge medicine in 2025 alone</strong>.
              </p>
              
              <div className="bg-secondary/50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-primary text-lg mb-4">We cover all aspects of admissions:</h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-primary font-medium mt-6">
                We don't want money to ever be a barrier to education. This includes FREE seminars & resources, in addition to affordable teaching sessions in small-group settings.
              </p>
            </div>
          </div>

          {/* Right Column - Our Programmes */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Our Programmes
              </h3>
              <p className="text-gray-600">
                Comprehensive courses designed to guide you through every stage of your application
              </p>
            </div>

            <div className="space-y-4">
              {programmes.map((programme, index) => (
                <Card 
                  key={index}
                  className="bg-white border-primary/10 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{programme.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary mb-1">{programme.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{programme.description}</p>
                        {programme.link && (
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary-dark"
                            onClick={() => window.open(programme.link, '_blank')}
                          >
                            Learn More
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                        {programme.medicalLink && programme.dentalLink && (
                          <div className="flex flex-wrap gap-2">
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary-dark"
                              onClick={() => window.open(programme.medicalLink, '_blank')}
                            >
                              Medical
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-primary text-primary hover:bg-primary-light"
                              onClick={() => window.open(programme.dentalLink, '_blank')}
                            >
                              Dental
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bespoke 1-1 Tuition */}
        <div className="mb-20">
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
                className="bg-secondary/30 border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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

        {/* MyUCAT Buddy System - Now at bottom */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">MyUCAT Buddy™ System</h3>
                  <p className="text-white/80 text-sm">Our trademarked approach</p>
                </div>
              </div>

              <p className="text-white/90 mb-6 text-center">
                Research-backed methodology built on spaced repetition, peer support, and targeted mentorship for optimal learning outcomes.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Backed Cards */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Card className="bg-secondary/30 border-primary/10">
              <CardContent className="p-4 text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-primary text-sm">Evidence-Based</h4>
                <p className="text-xs text-gray-600 mt-1">Proven methods</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-primary/10">
              <CardContent className="p-4 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-primary text-sm">Proven Results</h4>
                <p className="text-xs text-gray-600 mt-1">35+ Oxbridge offers</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30 border-primary/10">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-primary text-sm">Expert Guidance</h4>
                <p className="text-xs text-gray-600 mt-1">150+ tutors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;