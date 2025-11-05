import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 100px on homepage, always show on other pages
      if (location.pathname === "/") {
        setIsVisible(window.scrollY > 100);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-sunrise bg-clip-text text-transparent">
              Secret Startups
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/about">
              <Button 
                variant="ghost"
                className={isActive("/about") ? "bg-muted" : ""}
              >
                About
              </Button>
            </Link>
            <Link to="/features">
              <Button 
                variant="ghost"
                className={isActive("/features") ? "bg-muted" : ""}
              >
                Features
              </Button>
            </Link>
            <Link to="/developers">
              <Button 
                variant="ghost"
                className={isActive("/developers") ? "bg-muted" : ""}
              >
                Developers
              </Button>
            </Link>
            <Link to="/stories">
              <Button 
                variant="ghost"
                className={isActive("/stories") ? "bg-muted" : ""}
              >
                Stories
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="ghost"
                className={isActive("/contact") ? "bg-muted" : ""}
              >
                Contact
              </Button>
            </Link>
            <ThemeToggle />
            <a href="/#signup">
              <Button className="ml-4 bg-primary hover:bg-primary/90">
                Join Now
              </Button>
            </a>
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
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="ghost" 
                  className={`justify-start w-full ${isActive("/about") ? "bg-muted" : ""}`}
                >
                  About
                </Button>
              </Link>
              <Link to="/features" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="ghost" 
                  className={`justify-start w-full ${isActive("/features") ? "bg-muted" : ""}`}
                >
                  Features
                </Button>
              </Link>
              <Link to="/developers" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="ghost" 
                  className={`justify-start w-full ${isActive("/developers") ? "bg-muted" : ""}`}
                >
                  Developers
                </Button>
              </Link>
              <Link to="/stories" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="ghost" 
                  className={`justify-start w-full ${isActive("/stories") ? "bg-muted" : ""}`}
                >
                  Stories
                </Button>
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="ghost" 
                  className={`justify-start w-full ${isActive("/contact") ? "bg-muted" : ""}`}
                >
                  Contact
                </Button>
              </Link>
              <div className="flex items-center justify-start px-3 py-2">
                <span className="mr-3 text-sm font-medium">Theme:</span>
                <ThemeToggle />
              </div>
              <a href="/#signup" onClick={() => setIsOpen(false)}>
                <Button className="bg-primary hover:bg-primary/90 justify-start w-full">
                  Join Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
