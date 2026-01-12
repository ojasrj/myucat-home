import { Play, ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import trustpilotProof from "@/assets/trustpilot-proof.png";
import studentSuccessCollage from "@/assets/student-success-collage.png";

const destinations = [
  "Medicine @ Oxford",
  "Medicine @ Imperial",
  "Medicine @ University College London",
  "Medicine @ Cambridge",
  "Dentistry @ King's College London",
  "Dentistry @ Manchester",
  "Medicine @ Manchester",
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

        {/* Student Success Stories Section */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-primary mb-6">Student Success Stories</h3>
          
          {/* Video Testimonials Row - Top */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide mb-6">
            {[1, 2, 3].map((_, index) => (
              <Card 
                key={index} 
                className="min-w-[260px] md:min-w-[300px] aspect-video bg-gradient-to-br from-primary/5 to-primary/10 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors snap-center flex-shrink-0"
              >
                <CardContent className="h-full flex flex-col items-center justify-center p-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                    <Play className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-xs text-gray-500 text-center">Add video testimonial</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Collage with Testimonial Columns */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch mb-6">
            {/* Left Two Columns */}
            <div className="flex flex-row gap-3 lg:w-[30%]">
              <div className="flex flex-col gap-3 flex-1">
                {[1, 2, 3].map((_, index) => (
                  <Card key={index} className="flex-1 min-h-[100px] bg-secondary/50 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="h-full flex flex-col items-center justify-center p-2">
                      <ImageIcon className="w-6 h-6 text-primary/30 mb-1" />
                      <p className="text-[10px] text-gray-500 text-center">Add screenshot</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {[1, 2, 3].map((_, index) => (
                  <Card key={index} className="flex-1 min-h-[100px] bg-secondary/50 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="h-full flex flex-col items-center justify-center p-2">
                      <ImageIcon className="w-6 h-6 text-primary/30 mb-1" />
                      <p className="text-[10px] text-gray-500 text-center">Add screenshot</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Center - Success Collage (smaller) */}
            <div className="lg:w-[40%]">
              <img 
                src={studentSuccessCollage} 
                alt="Student success messages and offer notifications" 
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Right Two Columns */}
            <div className="flex flex-row gap-3 lg:w-[30%]">
              <div className="flex flex-col gap-3 flex-1">
                {[1, 2, 3].map((_, index) => (
                  <Card key={index} className="flex-1 min-h-[100px] bg-secondary/50 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="h-full flex flex-col items-center justify-center p-2">
                      <ImageIcon className="w-6 h-6 text-primary/30 mb-1" />
                      <p className="text-[10px] text-gray-500 text-center">Add screenshot</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {[1, 2, 3].map((_, index) => (
                  <Card key={index} className="flex-1 min-h-[100px] bg-secondary/50 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="h-full flex flex-col items-center justify-center p-2">
                      <ImageIcon className="w-6 h-6 text-primary/30 mb-1" />
                      <p className="text-[10px] text-gray-500 text-center">Add screenshot</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Video Testimonials Row - Bottom */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3].map((_, index) => (
              <Card 
                key={index} 
                className="min-w-[260px] md:min-w-[300px] aspect-video bg-gradient-to-br from-primary/5 to-primary/10 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors snap-center flex-shrink-0"
              >
                <CardContent className="h-full flex flex-col items-center justify-center p-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                    <Play className="w-7 h-7 text-primary" />
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
