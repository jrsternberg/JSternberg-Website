import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={scrollToTop} className="text-xl font-semibold text-primary">
          Jordan Sternberg Consulting
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#clients" className="text-sm font-medium hover:text-primary transition-colors">
            Clients
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
