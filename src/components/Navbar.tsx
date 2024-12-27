import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">MedPrep</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#process" className="text-gray-700 hover:text-primary transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button className="bg-primary hover:bg-primary-dark text-white transition-colors">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;