
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

interface CTAButtonProps {
  text: string;
  to: string;
  variant?: "default" | "outline" | "secondary";
  className?: string;
  primary?: boolean;
  animated?: boolean;
}

const CTAButton = ({ 
  text, 
  to, 
  variant = "default", 
  className = "",
  primary = false,
  animated = false
}: CTAButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (animated && buttonRef.current) {
      setTimeout(() => {
        buttonRef.current?.classList.add('animate-pulse-ring');
      }, 1000);
    }
  }, [animated]);

  return (
    <Link to={to} className="relative group">
      <div 
        ref={buttonRef}
        className={`absolute -inset-2 rounded-full bg-blue-500/20 scale-0 transition-all group-hover:scale-100 duration-300 ${
          primary ? 'group-hover:animate-pulse-soft' : ''
        }`}
      ></div>
      <Button 
        variant={variant} 
        className={`
          ${variant === "default" ? "bg-infrazeo-blue hover:bg-blue-600" : ""} 
          rounded-full shadow-button hover:shadow-lg transition-all duration-300 
          transform hover:-translate-y-1 hover:scale-105 
          relative overflow-hidden ripple-effect
          ${className}
        `}
      >
        {primary && (
          <span className="absolute inset-0 w-full h-full">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></span>
          </span>
        )}
        {text}
      </Button>
    </Link>
  );
};

export default CTAButton;
