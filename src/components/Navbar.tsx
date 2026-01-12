import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavLink {
  href: string;
  label: string;
  external: boolean;
}

interface NavCategory {
  label: string;
  links?: NavLink[];
  href?: string;
  isDropdown: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ucatLinks: NavLink[] = [
    { href: "https://learn.myucat.co.uk/summer-programme", label: "UCAT Summer Programme", external: true },
    { href: "https://learn.myucat.co.uk/ucat-1-1", label: "UCAT 1-1", external: true },
    { href: "https://learn.myucat.co.uk/ucat-resources", label: "UCAT Guides", external: true },
    { href: "https://questions.ucat.com/courses", label: "Free Courses", external: true },
    { href: "https://myucat.co.uk/pages/ucat-score-converter", label: "UCAT Score Calculator", external: true },
    { href: "https://questions.ucat.com/", label: "UCAT Question Bank (In Progress)", external: true },
    { href: "https://learn.myucat.co.uk/strategic-applications/ucat-score-comparison", label: "UCAT Score Comparison", external: true },
  ];

  const interviewLinks: NavLink[] = [
    { href: "https://learn.myucat.co.uk/medical-interview-programme", label: "Medical Interview Programme", external: true },
    { href: "https://learn.myucat.co.uk/dental-interview-programme", label: "Dental Interview Programme", external: true },
    { href: "https://learn.myucat.co.uk/dental-interview-programme/dental-school-interview-questions", label: "Dental Interview Guide", external: true },
    { href: "https://learn.myucat.co.uk/interviews", label: "Mock Interviews & 1-1 Lessons", external: true },
  ];

  const personalStatementLinks: NavLink[] = [
    { href: "https://learn.myucat.co.uk/summer-programme", label: "Personal Statement Editing", external: true },
    { href: "https://drive.google.com/file/u/0/d/1Rqsxn1pxXbFPD3GjjTRD1JG6w_Ut6ywx/view", label: "Personal Statement Guide", external: true },
    { href: "https://www.youtube.com/watch?v=_joYTWNIwUk", label: "Personal Statement Video", external: true },
  ];

  const freeResourcesLinks: NavLink[] = [
    { href: "https://questions.ucat.com/courses", label: "Course Portal", external: true },
    { href: "https://myucat.co.uk/pages/ucat-score-converter", label: "UCAT Score Calculator", external: true },
    { href: "https://questions.ucat.com/", label: "UCAT Question Bank (In Progress)", external: true },
    { href: "https://learn.myucat.co.uk/dental-interview-programme/dental-school-interview-questions", label: "Dental Interview Guide", external: true },
    { href: "https://drive.google.com/file/u/0/d/1Rqsxn1pxXbFPD3GjjTRD1JG6w_Ut6ywx/view", label: "Personal Statement Guide", external: true },
    { href: "https://learn.myucat.co.uk/strategic-applications", label: "Strategic Application Guide", external: true },
  ];

  const nmdsLinks: NavLink[] = [
    { href: "https://medsoc.myucat.co.uk/", label: "About", external: true },
    { href: "https://medsoc.myucat.co.uk/events", label: "Event Calendar", external: true },
    { href: "https://medsoc.myucat.co.uk/competitions", label: "Competitions", external: true },
  ];

  const navCategories: NavCategory[] = [
    { label: "UCAT", links: ucatLinks, isDropdown: true },
    { label: "Interview", links: interviewLinks, isDropdown: true },
    { label: "Strategic Application Guide", href: "https://learn.myucat.co.uk/strategic-applications", isDropdown: false },
    { label: "Personal Statement", links: personalStatementLinks, isDropdown: true },
    { label: "Free Resources", links: freeResourcesLinks, isDropdown: true },
    { label: "NMDS", links: nmdsLinks, isDropdown: true },
  ];

  const handleNavClick = (href: string, external: boolean) => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
    
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

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
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
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList className="gap-1">
              {navCategories.map((category) => (
                <NavigationMenuItem key={category.label}>
                  {category.isDropdown && category.links ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-primary hover:bg-gray-50 text-sm font-medium">
                        {category.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                        <ul className="w-[280px] p-2">
                          {category.links.map((link) => (
                            <li key={link.href + link.label}>
                              <NavigationMenuLink asChild>
                                <button
                                  onClick={() => handleNavClick(link.href, link.external)}
                                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
                                >
                                  {link.label}
                                </button>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <button
                      onClick={() => category.href && window.open(category.href, '_blank')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      {category.label}
                    </button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Tablet Navigation */}
          <NavigationMenu className="hidden md:flex xl:hidden">
            <NavigationMenuList className="gap-0.5">
              {navCategories.map((category) => (
                <NavigationMenuItem key={category.label}>
                  {category.isDropdown && category.links ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-primary hover:bg-gray-50 text-xs font-medium px-2">
                        {category.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                        <ul className="w-[250px] p-2">
                          {category.links.map((link) => (
                            <li key={link.href + link.label}>
                              <NavigationMenuLink asChild>
                                <button
                                  onClick={() => handleNavClick(link.href, link.external)}
                                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
                                >
                                  {link.label}
                                </button>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <button
                      onClick={() => category.href && window.open(category.href, '_blank')}
                      className="px-2 py-2 text-xs font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {category.label}
                    </button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button - Desktop & Tablet */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open('https://wa.me/447763980592', '_blank')}
              className="bg-primary hover:bg-primary-dark text-white px-3 lg:px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 text-xs lg:text-sm"
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
          <div className="md:hidden bg-white border-t border-gray-200 py-4 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navCategories.map((category) => (
                <div key={category.label}>
                  {category.isDropdown && category.links ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(category.label)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium text-left px-4 py-3"
                      >
                        {category.label}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openMobileDropdown === category.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {openMobileDropdown === category.label && (
                        <div className="bg-gray-50 py-2">
                          {category.links.map((link) => (
                            <button
                              key={link.href + link.label}
                              onClick={() => handleNavClick(link.href, link.external)}
                              className="w-full text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors duration-200 text-sm text-left px-6 py-2"
                            >
                              {link.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => category.href && handleNavClick(category.href, true)}
                      className="flex items-center w-full text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium text-left px-4 py-3"
                    >
                      {category.label}
                    </button>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open('https://wa.me/447763980592', '_blank');
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
