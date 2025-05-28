
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#faqs", label: "FAQs", external: false },
    { href: "https://uk.trustpilot.com/review/myucat.co.uk", label: "Testimonials", external: true },
    { href: "https://www.guessandflag.co.uk/summer-programme", label: "UCAT", external: true },
    { href: "https://www.guessandflag.co.uk/interviews", label: "Interviews", external: true },
    { href: "https://www.guessandflag.co.uk/a-level-tuition", label: "A Levels", external: true },
    { href: "https://www.guessandflag.co.uk/strategic-applications", label: "Strategic Guide", external: true },
    { href: "/competitions", label: "Competitions", external: false }
  ];

  const handleNavClick = (href: string, external: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (external) {
      window.open(href, '_blank');
    } else if (href.startsWith('#')) {
      // Handle anchor links on the home page
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            MyUCAT
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.external ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.external)}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                ) : link.href.startsWith('#') ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.external)}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-primary p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Contact Button - Desktop */}
          {!isMobile && (
            <Button
              onClick={() => window.open('https://wa.me/447443341420', '_blank')}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </Button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.external ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.external)}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-left px-4 py-2"
                  >
                    {link.label}
                  </button>
                ) : link.href.startsWith('#') ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.external)}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-left px-4 py-2"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-left px-4 py-2"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://wa.me/447443341420', '_blank');
                }}
                className="bg-primary hover:bg-primary-dark text-white mx-4 mt-2"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
