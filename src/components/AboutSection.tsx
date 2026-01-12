import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, Award, Users } from "lucide-react";

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

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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

          {/* Right Column - MyUCAT Buddy System */}
          <div>
            <Card className="bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">MyUCAT Buddy™ System</h3>
                    <p className="text-white/80 text-sm">Our trademarked approach</p>
                  </div>
                </div>

                <p className="text-white/90 mb-6">
                  Research-backed methodology built on spaced repetition, peer support, and targeted mentorship for optimal learning outcomes.
                </p>

                <div className="space-y-3">
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
      </div>
    </section>
  );
};

export default AboutSection;
