
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button 
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? 'visible' : ''} group relative overflow-hidden`}
      aria-label="Back to top"
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 rounded-full transition-opacity duration-300"></span>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-50 animate-pulse-ring"></span>
      <ArrowUp 
        size={24} 
        className="group-hover:animate-bounce-subtle transition-transform duration-300"
      />
    </button>
  );
};

export default BackToTop;
