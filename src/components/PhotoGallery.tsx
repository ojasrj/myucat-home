import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  // Placeholder images - these would be replaced with actual event photos
  const photos = [
    { id: 1, alt: "In-person tutoring session" },
    { id: 2, alt: "Group workshop event" },
    { id: 3, alt: "Medical school preparation class" },
    { id: 4, alt: "Interview practice session" },
    { id: 5, alt: "Team meeting" },
    { id: 6, alt: "Student success celebration" },
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Life at MyUCAT
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From online sessions to in-person workshops, see how our community learns and grows together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <Card 
              key={photo.id} 
              className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-primary/50"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <p className="text-sm text-primary/70 font-medium">{photo.alt}</p>
                <p className="text-xs text-gray-500 mt-1">Photo coming soon</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          📸 Photos from our events and sessions will be added here
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
