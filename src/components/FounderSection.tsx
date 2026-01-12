import { Award, CheckCircle, GraduationCap, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-white to-primary/5">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Meet the Founder: Ojas – Oxford Medic & the UK's Leading Admissions Expert
        </h2>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left Side - Photo & Credentials */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative mb-6">
              <img
                src="/lovable-uploads/19f2184e-3934-4879-bc0d-f1a2da819177.png"
                alt="Ojas - Founder of MyUCAT, Oxford Medical Student"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-3 -right-3 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">Oxford Medic</span>
              </div>
            </div>

            {/* Credential Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 text-sm">
                <Trophy className="w-4 h-4 mr-1" />
                2640/2700 UCAT
              </Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 text-sm">
                <GraduationCap className="w-4 h-4 mr-1" />
                4/4 Medical Offers
              </Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 text-sm">
                <Award className="w-4 h-4 mr-1" />
                SJT Band 1
              </Badge>
            </div>
          </div>

          {/* Right Side - Story Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible defaultValue="beginning" className="space-y-4">
              <AccordionItem value="beginning" className="border rounded-xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  The Beginning
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    MyUCAT started when I was just 17. Back then, it was only me - personally replying to every message, answering every question, and supporting students largely for free.
                  </p>
                  <p>
                    I had achieved the second-highest UCAT score in the UK at the time (2640/2700), including 900 in Quantitative Reasoning, 870 in Verbal Reasoning, 870 in Decision Making, and SJT Band 1. I went on to secure 4 out of 4 medical school offers. At a time when scores like this were exceptionally rare, I remained for a while the highest-scoring tutor in the country.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="why" className="border rounded-xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  Why I Started MyUCAT
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    My motivation came from my own experience of applying to medicine - I went through most of the process alone. While there were companies offering support, it was often generic, surface-level, and rooted in common sense rather than anything genuinely useful.
                  </p>
                  <p>
                    ChatGPT did not exist at the time, but today, students would be able to access most of the same from AI! There were polished websites and compelling marketing, but no genuinely top-scoring role models for students to learn from or aspire towards. I established MyUCAT to be different.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="philosophy" className="border rounded-xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  Our Philosophy
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  <p>
                    From the beginning, my aim was simple: everything had to be genuinely useful and evidence-based. That philosophy shaped resources like our strategic application guide and remains central to how we support students today.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="today" className="border rounded-xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  Where We Are Today
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    A lot has changed since those early days. We now support over 5,000 students each year and operate as a social enterprise with a team of more than 150 tutors. Every tutor is a leading expert in their area of the application process — from relatable medical students and qualified doctors to interview panellists, teachers, and educators from some of the UK's top schools. We take only the very best, and almost all of the highest-scoring tutors at Oxford, Cambridge, Imperial, and King's College London tutor with us — many of whom are former MyUCAT students themselves.
                  </p>
                  <p>
                    The results speak for themselves. Our students consistently outperform the competition by a wide margin, securing over 35 Oxbridge medicine offers in 2025 alone.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Results Stats Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">35+</div>
              <p className="text-lg opacity-90">Oxbridge Medicine Offers in 2025</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">99%+</div>
              <p className="text-lg opacity-90">Interview to Offer Conversion Rate</p>
              <p className="text-sm opacity-75 mt-1">2025 Medical Interview Programme</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
