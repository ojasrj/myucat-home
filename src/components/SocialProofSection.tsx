import { Play, ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import trustpilotProof from "@/assets/trustpilot-proof.png";

const destinations = [
  "Medicine @ Oxford",
  "Medicine @ Imperial",
  "Medicine @ University College London",
  "Medicine @ Cambridge",
  "Dentistry @ King's College London",
  "Dentistry @ Manchester",
  "Medicine @ Bristol",
  "Medicine @ Barts and the London",
  "Medicine @ Edinburgh",
  "Medicine @ Birmingham"
];

const SocialProofSection = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-white py-16">
      <div className="container mx-auto px-6">
        {/* Trustpilot Badge - Actual Proof */}
        <div className="flex flex-col items-center justify-center mb-12">
          <a 
            href="https://uk.trustpilot.com/review/myucat.co.uk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <img 
              src={trustpilotProof} 
              alt="MyUCAT Trustpilot Rating - 5.0 stars with 555 reviews" 
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
            />
          </a>
          <p className="text-gray-600 mt-4">Based on <span className="font-semibold">500+ reviews</span> on Trustpilot</p>
        </div>

        {/* Outcome Destinations */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-primary mb-6">
            Our Students Routinely Obtain 4/4 Offers – Most Common Destinations Include:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {destinations.map((destination, index) => (
              <span 
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {destination}
              </span>
            ))}
          </div>
        </div>

        {/* Student Success Screenshots - Placeholder Grid */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-primary mb-6">Student Success Stories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <Card key={index} className="aspect-square bg-secondary/50 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="h-full flex flex-col items-center justify-center p-4">
                  <ImageIcon className="w-12 h-12 text-primary/30 mb-2" />
                  <p className="text-xs text-gray-500 text-center">Add student success screenshot</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Testimonials - Horizontal Scroll */}
        <div>
          <h3 className="text-center text-lg font-semibold text-primary mb-6">Video Testimonials</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Card 
                key={index} 
                className="min-w-[280px] md:min-w-[320px] aspect-video bg-gradient-to-br from-primary/5 to-primary/10 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors snap-center flex-shrink-0"
              >
                <CardContent className="h-full flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xs text-gray-500 text-center">Add video testimonial</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
