
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 backdrop-blur-md ${
        isScrolled ? "bg-infrazeo-blue/95 shadow-md py-2" : "bg-infrazeo-blue py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold font-poppins flex items-center relative group">
            <span className="absolute -inset-x-4 -inset-y-2 rounded-lg group-hover:bg-white/10 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="relative">InfraZeo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`header-link ${location.pathname === "/" ? "after:w-full" : ""}`}>
              Home
            </Link>
            <Link to="/solutions" className={`header-link ${location.pathname === "/solutions" ? "after:w-full" : ""}`}>
              Solutions
            </Link>
            <Link to="/how-it-works" className={`header-link ${location.pathname === "/how-it-works" ? "after:w-full" : ""}`}>
              How It Works
            </Link>
            <Link to="/about" className={`header-link ${location.pathname === "/about" ? "after:w-full" : ""}`}>
              About
            </Link>
            <Link to="/contact" className={`header-link ${location.pathname === "/contact" ? "after:w-full" : ""}`}>
              Contact
            </Link>
            <Link to="/book-demo">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                Book a Demo
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white py-2 px-4 hover:bg-blue-600/20 rounded-lg transition-colors duration-200">
                Home
              </Link>
              <Link to="/solutions" className="text-white py-2 px-4 hover:bg-blue-600/20 rounded-lg transition-colors duration-200">
                Solutions
              </Link>
              <Link to="/how-it-works" className="text-white py-2 px-4 hover:bg-blue-600/20 rounded-lg transition-colors duration-200">
                How It Works
              </Link>
              <Link to="/about" className="text-white py-2 px-4 hover:bg-blue-600/20 rounded-lg transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-white py-2 px-4 hover:bg-blue-600/20 rounded-lg transition-colors duration-200">
                Contact
              </Link>
              <Link to="/book-demo" className="bg-white text-infrazeo-blue py-2 px-4 rounded-lg text-center font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm">
                Book a Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
