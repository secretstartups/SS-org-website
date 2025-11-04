import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Page Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Success <span className="bg-gradient-success bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real developers sharing how Secret Startups transformed their careers and lives
            </p>
          </div>
        </section>

        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-6">Write Your Own Success Story</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have transformed their careers with Secret Startups
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Contact Us
                </Button>
              </Link>
              <a href="/#signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                  Start Your Journey
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

export default StoriesPage;
