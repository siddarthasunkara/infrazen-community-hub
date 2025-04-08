
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  text: string;
  to: string;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

const CTAButton = ({ text, to, variant = "default", className = "" }: CTAButtonProps) => {
  return (
    <Link to={to}>
      <Button 
        variant={variant} 
        className={`
          ${variant === "default" ? "bg-infrazeo-blue hover:bg-blue-600" : ""} 
          rounded-full shadow-button hover:shadow-lg transition-all duration-300 
          transform hover:-translate-y-1 hover:scale-105 
          ${className}
        `}
      >
        {text}
      </Button>
    </Link>
  );
};

export default CTAButton;
