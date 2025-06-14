import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react"; // Import the Phone icon

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-bold font-poppins gradient-text bg-gradient-to-r from-blue-400 to-blue-600">
              InfraZeo Technologies
            </Link>
            <p className="text-gray-400 mt-2 text-sm">Infrastructure Meets Innovation</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 md:flex md:space-x-8">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/infrazeo/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hello@infrazeo.com" 
                className="text-gray-300 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover-lift"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919063625533"  // Link to the mobile number
                className="text-gray-300 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover-lift"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2025 InfraZeo Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
