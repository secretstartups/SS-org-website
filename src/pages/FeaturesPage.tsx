import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Page Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-sunrise bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to accelerate your career and entrepreneurial journey in one powerful platform
            </p>
          </div>
        </section>

        <Features />
        
        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-6">Experience These Features Today</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get instant access to apprenticeships, education, community, and resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/developers">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Meet Our Developers
                </Button>
              </Link>
              <a href="/#signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
