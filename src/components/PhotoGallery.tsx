import { Card } from "@/components/ui/card";
import lifeClassroom1 from "@/assets/life-classroom-1.jpg";
import lifeTutoring from "@/assets/life-tutoring.jpg";
import lifeDentalEvent from "@/assets/life-dental-event.jpg";
import lifeMmiPractice from "@/assets/life-mmi-practice.jpg";
import lifeClassroom2 from "@/assets/life-classroom-2.jpg";
import lifeLectureHall from "@/assets/life-lecture-hall.jpg";

const PhotoGallery = () => {
  const photos = [
    { id: 1, src: lifeClassroom1, alt: "Students learning in classroom session" },
    { id: 2, src: lifeTutoring, alt: "One-on-one tutoring session" },
    { id: 3, src: lifeDentalEvent, alt: "Dental interview preparation event" },
    { id: 4, src: lifeMmiPractice, alt: "MMI rotation practice session" },
    { id: 5, src: lifeClassroom2, alt: "Group workshop in progress" },
    { id: 6, src: lifeLectureHall, alt: "Students in lecture hall" },
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
              className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
