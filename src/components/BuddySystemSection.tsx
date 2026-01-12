import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, BookOpen, Award, Zap } from "lucide-react";

const features = [
  "Large expert-led group sessions covering the full syllabus in-depth",
  "Small group mentorship and practice with peers applying to similar universities",
  "Personalised feedback to identify and tackle individual weaknesses",
  "A motivating, collaborative environment for all"
];

const BuddySystemSection = () => {
  return (
    <section className="bg-gradient-to-b from-secondary/30 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Why Our Students Outperform Others
          </h2>
          <p className="text-gray-600">Our research-backed methodology delivers exceptional results</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">MyUCAT Buddy™ System</h3>
                  <p className="text-white/80 text-sm">Our trademarked approach</p>
                </div>
              </div>

              <p className="text-white/90 mb-8 text-center max-w-2xl mx-auto text-lg">
                Research-backed methodology built on spaced repetition, peer support, and targeted mentorship for optimal learning outcomes.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Backed Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <Card className="bg-white border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-primary">Evidence-Based</h4>
                <p className="text-sm text-gray-600 mt-1">Proven methods</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-primary">Proven Results</h4>
                <p className="text-sm text-gray-600 mt-1">35+ Oxbridge offers</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-primary">Expert Guidance</h4>
                <p className="text-sm text-gray-600 mt-1">150+ tutors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuddySystemSection;
