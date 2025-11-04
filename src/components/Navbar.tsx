import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-sunrise bg-clip-text text-transparent">
              Secret Startups
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("features")}>
              Features
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("developers")}>
              Developers
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("testimonials")}>
              Stories
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
            <ThemeToggle />
            <Button 
              className="ml-4 bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection("signup")}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("about")}>
                About
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("features")}>
                Features
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("developers")}>
                Developers
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("testimonials")}>
                Stories
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
              <div className="flex items-center justify-start px-3 py-2">
                <span className="mr-3 text-sm font-medium">Theme:</span>
                <ThemeToggle />
              </div>
              <Button 
                className="bg-primary hover:bg-primary/90 justify-start"
                onClick={() => scrollToSection("signup")}
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
