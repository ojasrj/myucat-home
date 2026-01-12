import trustpilotProof from "@/assets/trustpilot-proof.png";
import studentSuccessCollage from "@/assets/student-success-collage.png";
import successScreenshot1 from "@/assets/success-screenshot-1.png";
import successScreenshot2 from "@/assets/success-screenshot-2.png";
import successScreenshot3 from "@/assets/success-screenshot-3.png";
import successScreenshot4 from "@/assets/success-screenshot-4.png";
import successScreenshot5 from "@/assets/success-screenshot-5.png";
import successScreenshot6 from "@/assets/success-screenshot-6.png";
import successScreenshot7 from "@/assets/success-screenshot-7.png";

const topRowScreenshots = [successScreenshot1, successScreenshot2, successScreenshot3, successScreenshot4];
const bottomRowScreenshots = [successScreenshot5, successScreenshot6, successScreenshot7];

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
          
          {/* Top Row - Screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {topRowScreenshots.map((screenshot, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
                <img 
                  src={screenshot} 
                  alt={`Student success story ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Center - Success Collage (smaller, cropped) */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={studentSuccessCollage} 
                alt="Student success messages and offer notifications" 
                className="w-full h-64 md:h-80 object-cover object-center"
              />
            </div>
          </div>

          {/* Bottom Row - Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bottomRowScreenshots.map((screenshot, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
                <img 
                  src={screenshot} 
                  alt={`Student success story ${index + 5}`}
                  className="w-full h-auto object-cover"
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
