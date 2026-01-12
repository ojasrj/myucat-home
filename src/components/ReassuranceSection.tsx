import { Shield, TrendingUp, Heart, Coins } from "lucide-react";

const reassurances = [
  {
    icon: Shield,
    title: "Evidence-Based",
    description: "Proven strategies backed by research and real results"
  },
  {
    icon: TrendingUp,
    title: "Results-Oriented",
    description: "35+ Oxbridge offers and 500+ 5-star reviews in 2025"
  },
  {
    icon: Heart,
    title: "Social Enterprise",
    description: "Committed to widening access to medical education"
  },
  {
    icon: Coins,
    title: "Affordable Excellence",
    description: "Unbeatable value without compromising quality"
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
          <p className="text-gray-600">Trusted by thousands of aspiring medics and dentists</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
