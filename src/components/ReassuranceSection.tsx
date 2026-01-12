import { GraduationCap, Lightbulb, Trophy, Heart } from "lucide-react";

const reassurances = [
  {
    icon: GraduationCap,
    title: "Expert-led",
    description: "Classes taught by carefully selected experts, including top university students, former interview panellists, and PGCE-qualified teachers nationwide."
  },
  {
    icon: Lightbulb,
    title: "Evidence-informed",
    description: "Strategies shaped by educational research and real admissions outcomes."
  },
  {
    icon: Trophy,
    title: "Proven at the highest level",
    description: "Consistent success with 1000s of offers each year at leading medical & dental schools."
  },
  {
    icon: Heart,
    title: "Access-focused",
    description: "High-quality support alongside extensive free resources and events."
  }
];

const ReassuranceSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            You're in Safe Hands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reassurances.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-transparent hover:from-secondary transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
