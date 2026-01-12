import trustpilotProof from "@/assets/trustpilot-proof.png";
import studentSuccessCollage from "@/assets/student-success-collage.png";
import successScreenshot1 from "@/assets/success-screenshot-1.png";
import successScreenshot2 from "@/assets/success-screenshot-2.png";
import successScreenshot3 from "@/assets/success-screenshot-3.png";
import successScreenshot4 from "@/assets/success-screenshot-4.png";
import successScreenshot5 from "@/assets/success-screenshot-5.png";
import successScreenshot6 from "@/assets/success-screenshot-6.png";
import successScreenshot7 from "@/assets/success-screenshot-7.png";
import successScreenshot8 from "@/assets/success-screenshot-8.png";
import successScreenshot9 from "@/assets/success-screenshot-9.png";
import successScreenshot10 from "@/assets/success-screenshot-10.png";
import successScreenshot11 from "@/assets/success-screenshot-11.png";

// Bento grid items with size configurations
const bentoItems = [
  { src: successScreenshot1, alt: "Student success story 1", size: "normal" },
  { src: successScreenshot2, alt: "Student success story 2", size: "tall" },
  { src: successScreenshot3, alt: "Student success story 3", size: "normal" },
  { src: successScreenshot4, alt: "Student success story 4", size: "normal" },
  { src: successScreenshot5, alt: "Student success story 5", size: "wide" },
  { src: successScreenshot6, alt: "Student success story 6", size: "normal" },
  { src: successScreenshot7, alt: "Student success story 7", size: "tall" },
  { src: successScreenshot8, alt: "Student success story 8", size: "normal" },
  { src: successScreenshot9, alt: "Student success story 9", size: "normal" },
  { src: successScreenshot10, alt: "Student success story 10", size: "wide" },
  { src: successScreenshot11, alt: "Student success story 11", size: "normal" },
];

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

const getSizeClasses = (size: string) => {
  switch (size) {
    case "tall":
      return "md:row-span-2";
    case "wide":
      return "md:col-span-2";
    case "large":
      return "md:col-span-2 md:row-span-2";
    default:
      return "";
  }
};

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

        {/* Student Success Stories - Bento Grid */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-primary mb-6">Student Success Stories</h3>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
            {bentoItems.slice(0, 5).map((item, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white ${getSizeClasses(item.size)}`}
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Center Collage - Featured */}
          <div className="flex justify-center my-6">
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <img 
                src={studentSuccessCollage} 
                alt="Student success messages and offer notifications" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
            {bentoItems.slice(5).map((item, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white ${getSizeClasses(item.size)}`}
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
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
