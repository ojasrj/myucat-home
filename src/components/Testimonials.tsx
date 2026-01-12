import { Card, CardContent } from "@/components/ui/card";
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import reviewCollageTop from "@/assets/review-collage-top.png";
import reviewWide from "@/assets/review-wide.png";

const testimonials = [
  {
    text: "Hands down best company you can work with. Achieved my own dream of a Cambridge offer and couldn't have done it alone. These guys provide so much support and make the whole process seem a lot less daunting.",
    author: "Student L.J., UK",
    source: "Trustpilot",
    link: "https://uk.trustpilot.com/review/myucat.co.uk"
  },
  {
    text: "4/4 med offers from Imperial, UCL, KCL AND SGUL!! Been with Ojas and his course through every step from UCAT, interviews and now A-levels and I couldn't have done it without his and the amazing tutors' help :)",
    author: "Student N.P., Qatar",
    source: "Trustpilot",
    link: "https://uk.trustpilot.com/review/myucat.co.uk"
  },
  {
    text: "MyUCAT is 100% the way to go if you want to invest in a comparably more affordable yet delivers A** quality in everything they do. Cannot thank them enough for helping me to secure an offer to read Medicine at Oxford!!",
    author: "Student A.A., UK",
    source: "Trustpilot",
    link: "https://uk.trustpilot.com/review/myucat.co.uk"
  },
  {
    text: "Had interview tuition and mocks from MyUCAT. Was very accurate and close to the real thing. Managed to get all 4 offers back for medicine and now am off to UCL for medicine. Special thanks to Sid for helping out!",
    author: "Student Y.Y., UK",
    source: "Google Reviews",
    link: "https://www.google.com/maps/place/MyUCAT/@51.5014765,-0.3136451,17z"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of successful applicants who trusted MyUCAT for their medical and dental school journey
          </p>
        </div>

        {/* Top collage - above testimonial cards */}
        <div className="mb-6 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
          <img 
            src={reviewCollageTop} 
            alt="Student success messages collage"
            className="w-full h-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white to-secondary/30 border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-primary text-sm">
                    – {testimonial.author}
                  </p>
                  <a 
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-primary transition-colors"
                  >
                    {testimonial.source}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video testimonials section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Video Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="aspect-video bg-gradient-to-br from-secondary to-primary/10 rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <p className="text-primary/60 font-medium">Video {index}</p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom collage - below testimonial cards */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
          <img 
            src={reviewWide} 
            alt="Student success messages collage"
            className="w-full h-auto"
          />
        </div>

        <div className="text-center">
          <Button
            className="bg-primary hover:bg-primary-dark text-white px-10 py-6 text-lg transition-all transform hover:scale-105"
            onClick={() => window.open('https://uk.trustpilot.com/review/myucat.co.uk', '_blank')}
          >
            <Star className="mr-2 h-5 w-5" />
            View All 500+ Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
