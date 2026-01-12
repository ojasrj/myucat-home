import trustpilotProof from "@/assets/trustpilot-proof.png";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.png";
import review4 from "@/assets/review-4.png";
import review5 from "@/assets/review-5.png";
import review6 from "@/assets/review-6.png";
import review7 from "@/assets/review-7.png";
import review8 from "@/assets/review-8.png";

const topDestinations = [
  "Medicine @ Oxford",
  "Medicine @ Imperial",
  "Medicine @ University College London",
  "Medicine @ Cambridge",
  "Dentistry @ King's College London",
  "Dentistry @ Manchester",
];

// Screenshots array
const screenshots = [review1, review2, review3, review4, review5, review6, review7, review8];

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
        <div className="mb-12 text-center">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Our Students Routinely Obtain 4/4 Offers
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We help students gain admission to every major UK medical and dental school — typically their first choice.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {topDestinations.map((destination, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
