import { useEffect } from "react";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  useEffect(() => {
    // Load Elfsight script if embed code is added
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
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
          {/* 
            INSTRUCTIONS TO ADD YOUR INSTAGRAM FEED:
            1. Go to https://elfsight.com/instagram-feed-widget/ and create a free account
            2. Connect your Instagram account and customize your widget
            3. Copy the widget code (looks like: <div class="elfsight-app-xxxxx" data-elfsight-app-lazy></div>)
            4. Replace the placeholder div below with your widget code
          */}
          
          {/* Placeholder - Replace this with your Elfsight embed code */}
          <div className="bg-gray-100 rounded-2xl p-12 text-center">
            <Instagram className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Instagram Feed Coming Soon</h3>
            <p className="text-gray-500 mb-4">
              Add your Elfsight embed code to display your latest Instagram posts here.
            </p>
            <a
              href="https://elfsight.com/instagram-feed-widget/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Get your embed code →
            </a>
          </div>

          {/* Example: Uncomment and replace with your actual Elfsight widget code
          <div className="elfsight-app-YOUR-APP-ID" data-elfsight-app-lazy></div>
          */}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/myucat_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            Follow @myucat_
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
