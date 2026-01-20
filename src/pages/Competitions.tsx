
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Trophy, BookOpen, Users } from "lucide-react";

const Competitions = () => {
  const essayTopics = [
    {
      category: "Medicine",
      topics: [
        "Choose an example of widely believed medical misinformation. Why does it spread, what is its impact, and how can it be addressed?",
        "Is overdiagnosis a greater challenge than underdiagnosis in modern medical practice? Discuss with reference to current practices and consequences.",
        "Why is personalised medicine important, and what are its potential implications for the future of healthcare?",
        "What do you consider to be the most important unsolved question in medicine right now, and why?"
      ]
    },
    {
      category: "Dentistry", 
      topics: [
        "Choose an example of widely believed misinformation about oral health. Why does it spread, what is its impact, and how can it be addressed?",
        "Is overdiagnosis a greater challenge than underdiagnosis in modern dental practice? Discuss with reference to current practices and consequences.",
        "Why is the personalisation of dental healthcare important, and what are its potential implications for the future of healthcare?",
        "What do you consider to be the most important unsolved question in dentistry right now, and why?"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Trophy className="text-primary w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                MyUCAT Competitions
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Showcase your critical thinking and win prizes while preparing for your medical or dental school applications
            </p>
          </div>
        </div>
      </section>

      {/* June 2025 Essay Competition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="text-primary w-6 h-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                June 2025 Essay Competition
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Test your analytical skills and demonstrate your understanding of critical healthcare topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {essayTopics.map((category, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <BookOpen className="text-primary w-5 h-5" />
                    <CardTitle className="text-2xl text-primary">
                      {category.category}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Choose one of the following essay topics:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="p-4 bg-secondary rounded-lg">
                        <p className="text-gray-700 leading-relaxed">
                          "{topic}"
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Competition Details */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary-light/30 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center flex items-center justify-center gap-2">
                <Users className="w-6 h-6" />
                Competition Details
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Word Limit</h4>
                  <p className="text-gray-600">1,500 words maximum</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Deadline</h4>
                  <p className="text-gray-600">June 30, 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Prizes</h4>
                  <p className="text-gray-600">To be announced</p>
                </div>
              </div>
              
              <Button 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=447356273785', '_blank')}
              >
                Get More Information
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Questions About Our Competitions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for more details about competition rules, judging criteria, and prizes.
          </p>
          <Button 
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=447356273785', '_blank')}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Competitions;
