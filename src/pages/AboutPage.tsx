import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <About />
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers building their future with Secret Startups
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/features">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Explore Features
                </Button>
              </Link>
              <a href="/#signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                  Join Now
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

export default AboutPage;
