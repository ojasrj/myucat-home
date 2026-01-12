import trustpilotProof from "@/assets/trustpilot-proof.png";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.png";
import review4 from "@/assets/review-4.png";
import review5 from "@/assets/review-5.png";
import review6 from "@/assets/review-6.png";
import review7 from "@/assets/review-7.png";
import { ImageIcon } from "lucide-react";

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

// Screenshots array - add more as they come in
const screenshots = [review1, review2, review3, review4, review5, review6, review7];
const placeholderCount = 1; // Remaining placeholders to fill 8 slots

const SocialProofSection = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-white py-16">
      <div className="container mx-auto px-6">
        {/* Trustpilot Badge */}
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

        {/* Student Success Stories Grid */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-primary mb-6">Student Success Stories</h3>
          
          {/* Grid - matches screenshot aspect ratio */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Actual screenshots */}
            {screenshots.map((src, index) => (
              <div 
                key={`screenshot-${index}`} 
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white"
              >
                <img 
                  src={src} 
                  alt={`Student review ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
            {/* Placeholder boxes - same aspect ratio as screenshots */}
            {Array.from({ length: placeholderCount }).map((_, index) => (
              <div 
                key={`placeholder-${index}`} 
                className="aspect-[540/270] rounded-xl overflow-hidden shadow-md bg-secondary/50 border-2 border-dashed border-primary/20 flex flex-col items-center justify-center hover:border-primary/40 transition-colors"
              >
                <ImageIcon className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-xs text-muted-foreground">Screenshot {screenshots.length + index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
