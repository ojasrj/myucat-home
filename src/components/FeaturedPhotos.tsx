import featuredClassroom from "@/assets/featured-classroom.jpg";
import featuredPresentation from "@/assets/featured-presentation.jpg";
import featuredStudents from "@/assets/featured-students.jpg";

const FeaturedPhotos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={featuredClassroom} 
              alt="Students in classroom workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={featuredPresentation} 
              alt="Dentistry presentation at Manchester Conference Centre" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={featuredStudents} 
              alt="Students giving thumbs up at event" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotos;
