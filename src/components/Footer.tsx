
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full translate-x-1/3 translate-y-1/2 blur-3xl"></div>
      
      <div className="container-custom relative fade-in-element">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0 group">
            <Link to="/" className="text-2xl font-bold font-poppins gradient-text bg-gradient-to-r from-blue-400 to-blue-600 inline-flex items-center">
              InfraZeo
              <span className="ml-1 w-5 h-5 rounded-full bg-blue-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={12} className="text-blue-300" />
              </span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">Infrastructure Meets Innovation</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 md:flex md:space-x-8">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white/50 after:transition-all hover:after:w-full">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white/50 after:transition-all hover:after:w-full">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white/50 after:transition-all hover:after:w-full">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white/50 after:transition-all hover:after:w-full">
                Terms
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-all bg-gray-800 p-2 rounded-full hover:scale-110 hover:shadow-lg hover:bg-gray-700 glow-on-hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@infrazeo.com" 
                className="text-gray-300 hover:text-white transition-all bg-gray-800 p-2 rounded-full hover:scale-110 hover:shadow-lg hover:bg-gray-700 glow-on-hover"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2025 InfraZeo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
