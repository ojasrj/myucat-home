const FeaturedPhotos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for 3 photos - replace src with actual images */}
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Photo 1
            </div>
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Photo 2
            </div>
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Photo 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotos;
