import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const primaryLinks = [
    { href: "https://www.guessandflag.co.uk/summer-programme", label: "UCAT", external: true },
    { href: "https://www.guessandflag.co.uk/interviews", label: "Interviews", external: true },
    { href: "https://www.guessandflag.co.uk/a-level-tuition", label: "A Levels", external: true },
  ];

  const nmdsLinks = [
    { href: "https://medsoc.myucat.co.uk", label: "About NMDS", external: true },
    { href: "https://medsoc.myucat.co.uk/events", label: "Events", external: true },
    { href: "/competitions", label: "Competitions", external: false },
    { href: "https://medsoc.myucat.co.uk/free-courses", label: "Free Courses", external: true },
  ];

  const moreLinks = [
    { href: "https://uk.trustpilot.com/review/myucat.co.uk", label: "Testimonials", external: true },
    { href: "https://www.guessandflag.co.uk/strategic-applications", label: "Strategic Guide", external: true },
  ];

  const allLinks = [...primaryLinks, ...nmdsLinks, ...moreLinks];

  const handleNavClick = (href: string, external: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (external) {
      window.open(href, '_blank');
    } else if (href.startsWith('#')) {
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

  const renderLink = (link: { href: string; label: string; external: boolean }) => {
    if (link.external) {
      return (
        <button
          key={link.href}
          onClick={() => handleNavClick(link.href, link.external)}
          className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm whitespace-nowrap"
        >
          {link.label}
        </button>
      );
    } else if (link.href.startsWith('#')) {
      return (
        <button
          key={link.href}
          onClick={() => handleNavClick(link.href, link.external)}
          className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm whitespace-nowrap"
        >
          {link.label}
        </button>
      );
    } else {
      return (
        <Link
          key={link.href}
          to={link.href}
          className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm whitespace-nowrap"
        >
          {link.label}
        </Link>
      );
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-primary hover:text-primary-dark transition-colors flex-shrink-0"
          >
            MyUCAT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {primaryLinks.map(renderLink)}
            
            {/* NMDS Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm">
                NMDS <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                {nmdsLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      if (link.external) {
                        window.open(link.href, '_blank');
                      } else {
                        window.location.href = link.href;
                      }
                    }}
                  >
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm">
                More <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                {moreLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      if (link.external) {
                        window.open(link.href, '_blank');
                      } else {
                        window.location.href = link.href;
                      }
                    }}
                  >
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Tablet Navigation - fewer items */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {primaryLinks.slice(0, 2).map(renderLink)}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm">
                More <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                {[primaryLinks[2], ...nmdsLinks, ...moreLinks].map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      if (link.external) {
                        window.open(link.href, '_blank');
                      } else {
                        window.location.href = link.href;
                      }
                    }}
                  >
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Contact Button - Desktop & Tablet */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open('https://wa.me/447443341420', '_blank')}
              className="bg-primary hover:bg-primary-dark text-white px-4 lg:px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 text-sm"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              {allLinks.map((link) => (
                link.external ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.external)}
                    className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium text-left px-4 py-3"
                  >
                    {link.label}
                  </button>
                ) : link.href.startsWith('#') ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, link.external)}
                    className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium text-left px-4 py-3"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium text-left px-4 py-3"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open('https://wa.me/447443341420', '_blank');
                  }}
                  className="bg-primary hover:bg-primary-dark text-white w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
