import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="African developers collaborating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-vibrant opacity-10 mix-blend-overlay" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-vibrant text-white mb-6 animate-scale-in shadow-glow">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-semibold">Empowering African Developers</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-[1.1]">
            Build Your Future in
            <span className="block bg-gradient-sunrise bg-clip-text text-transparent mt-2">
              Tech & Startups
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Connect with paid apprenticeships, world-class education, a vibrant community, and the resources you need to launch your career or startup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-sunrise hover:opacity-90 text-lg px-10 h-16 shadow-glow hover:shadow-glow-accent transition-all text-white font-semibold group"
              onClick={scrollToSignup}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 h-16 border-2 hover:border-primary hover:bg-primary/10 hover:shadow-glow transition-all"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['🚀', '💻', '🌟', '⚡'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-vibrant flex items-center justify-center border-2 border-background">
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Join 10,000+ developers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">500+ opportunities available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
