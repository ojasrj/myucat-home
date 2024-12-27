import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Timeline />
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
            Any questions?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white px-12 py-6 text-lg rounded-full w-full sm:w-auto transition-all transform hover:scale-105"
              onClick={() => window.open('https://wa.me/+447878115057', '_blank')}
            >
              WhatsApp us
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary-light px-12 py-6 text-lg rounded-full w-full sm:w-auto"
              onClick={() => window.open('#testimonials', '_blank')}
            >
              Testimonials
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;