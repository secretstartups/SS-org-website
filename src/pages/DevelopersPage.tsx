import Navbar from "@/components/Navbar";
import Developers from "@/components/Developers";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DevelopersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Page Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-professional bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet talented developers from across Africa who are building amazing things with Secret Startups
            </p>
          </div>
        </section>

        <Developers />
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-6">Become Part of Our Community</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with developers, mentors, and entrepreneurs who will support your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/stories">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Read Success Stories
                </Button>
              </Link>
              <a href="/#signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14">
                  Join the Community
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

export default DevelopersPage;
