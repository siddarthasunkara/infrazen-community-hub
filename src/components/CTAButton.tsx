
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
        className={`${variant === "default" ? "bg-infrazen-blue hover:bg-blue-600" : ""} ${className}`}
      >
        {text}
      </Button>
    </Link>
  );
};

export default CTAButton;
