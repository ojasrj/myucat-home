import { CheckCircle, Users, Target, Award, Clock, BookOpen, TrendingUp, MessageCircle, GraduationCap, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UCATTutoring = () => {
  const packageFeatures = [
    "Structured weekly sessions",
    "Bespoke question strategy frameworks",
    "Mock analysis & score calibration",
    "Personalised revision planning",
    "Application-aligned mentoring",
  ];

  const serviceSteps = [
    { icon: Target, title: "Diagnostic assessment", description: "Comprehensive baseline evaluation" },
    { icon: BookOpen, title: "Strategy design", description: "Section-by-section approach" },
    { icon: TrendingUp, title: "Performance tracking", description: "Ongoing progress monitoring" },
    { icon: Award, title: "Tutor-led refinement", description: "Continuous feedback & adjustment" },
  ];

  const limitedCapacityPoints = [
    "Accept a limited number of new students each cycle",
    "Work exclusively through structured packages",
    "Decline applications where we cannot add meaningful value",
  ];

  const successStats = [
    { value: "3000+", label: "Average Student Score" },
    { value: "35+", label: "Oxbridge Offers 2025" },
    { value: "Top 1%", label: "Tutor Scores Nationally" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 text-sm">
              <Star className="w-4 h-4 mr-2" />
              Selective Admissions Programme
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Bespoke UCAT Preparation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              A selective, results-driven programme for students targeting top UK medical schools.
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We work with a limited number of students each cycle through structured packages only — no ad-hoc lessons.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              This is not standard UCAT tutoring
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MyUCAT offers a fully bespoke preparation service, designed for students aiming for{" "}
              <span className="font-semibold text-primary">3000+ scores</span> and{" "}
              <span className="font-semibold text-primary">Oxbridge / G5 outcomes</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We deliberately limit intake and only work with students who commit to a complete preparation package, 
              ensuring depth, accountability, and measurable progress.
            </p>
          </div>
        </div>
      </section>

      {/* How Our Service Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How our service works
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                We do not offer one-off lessons.
              </p>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Every student is onboarded into a tailored UCAT package, built around:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceSteps.map((step, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our UCAT Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our UCAT Packages
              </h2>
              <p className="text-muted-foreground">
                Packages typically include:
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 shadow-xl mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {packageFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-center border-t pt-6">
                  Packages are custom-built based on starting score, timeline, and target universities.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=447356273785&text=I%20would%20like%20to%20apply%20for%20a%20UCAT%20package', '_blank')}
              >
                Apply for a UCAT Package
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Applications are reviewed before acceptance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Capacity */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Limited Capacity by Design
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              To maintain the quality and intensity of our service, we:
            </p>
            <div className="space-y-4 max-w-xl mx-auto text-left">
              {limitedCapacityPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-white/80 mt-8 text-lg">
              This ensures every student receives the level of attention required for elite outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Results Produced by the MyUCAT System
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our tutors and students consistently achieve scores in the top 1% nationally, 
                including multiple Oxford and Cambridge offers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {successStats.map((stat, index) => (
                <Card key={index} className="bg-gradient-to-br from-secondary/50 to-primary/5 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/lovable-uploads/ojas-speaking.png"
                    alt="Ojas Rajkumar - MyUCAT Founder"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <Badge className="bg-primary/10 text-primary mb-4">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Programme Architect
                </Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Led by Ojas Rajkumar
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MyUCAT is led by Ojas Rajkumar, a medic at The Queen's College, Oxford, 
                  and one of the highest-scoring UCAT tutors globally.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The programme is designed around the same strategic frameworks used to guide 
                  3000+ students across elite medical admissions, prioritising repeatable success 
                  over generic teaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Initial Enquiries & Applications
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              If you're interested in joining MyUCAT, contact us to begin the application process.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=447356273785&text=I%20would%20like%20to%20apply%20for%20a%20UCAT%20package', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Apply via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MyUCAT. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default UCATTutoring;
