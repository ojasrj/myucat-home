import { useEffect } from "react";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  useEffect(() => {
    // Load Elfsight script
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Instagram className="w-4 h-4" />
            Follow Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Instagram
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest content, tips, and success stories from our community.
          </p>
        </div>

        {/* Instagram Widget Container */}
        <div className="max-w-6xl mx-auto">
          <div className="elfsight-app-c740ac95-ed52-4a09-ac86-98bbfdcaee76" data-elfsight-app-lazy></div>
        </div>

        {/* Follow Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/myucat.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            Follow @myucat.co.uk
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
