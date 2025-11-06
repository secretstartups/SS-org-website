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
        {/* Hero Header */}
        <header className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl 4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Powerful Features
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to land apprenticeships, learn in-demand skills, and connect with startups — all in one place.
            </p>
          </div>
        </header>

        {/* Main Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Features />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Start Building Your Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of developers already growing with Secret Startups — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/developers" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full px-8 h-14 text-lg font-medium border-muted-foreground/30 hover:bg-accent/10"
                >
                  Meet the Community
                </Button>
              </Link>

              <a href="/#signup" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 px-8 h-14 text-lg font-medium flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
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