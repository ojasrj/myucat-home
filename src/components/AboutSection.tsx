import { CheckCircle } from "lucide-react";

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
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            About MyUCAT
          </h2>
          
          <div className="space-y-4 text-gray-600 text-center mb-8">
            <p className="text-lg">
              MyUCAT is a results-driven, evidence-based social enterprise supporting students through every step of the UK medical and dental application process.
            </p>
            
            <p>
              Our nationwide network of experienced tutors includes doctors and students from every UK medical and dental school. We remain true to our founding principles: offering unbeatable value and delivering unbeatable results.
            </p>
            
            <p>
              Our tutors have helped thousands of students gain offers to medical and dental schools across the country, including <strong>35+ offers to Oxbridge medicine in 2025 alone</strong>.
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-2xl p-8">
            <h3 className="font-bold text-primary text-lg mb-6 text-center">We cover all aspects of admissions:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/80 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-primary font-medium mt-8 text-center">
            We don't want money to ever be a barrier to education. This includes FREE seminars & resources, in addition to affordable teaching sessions in small-group settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
