import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignupCTA from "@/components/SignupCTA";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Users2, Sparkles, ArrowRight, Code2, Rocket, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-professional mb-4">
                <Users2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-primary">500+</div>
              <div className="text-lg font-semibold mb-2">Members</div>
              <p className="text-muted-foreground text-sm">Connect with other community members sharing knowledge and expertise.</p>
              <Link to="/developers" className="text-primary hover:underline text-sm mt-2 inline-block">Visit community →</Link>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-professional mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-primary">5+</div>
              <div className="text-lg font-semibold mb-2">Events</div>
              <p className="text-muted-foreground text-sm">Build knowledge and skills to boost in a team with peers to help you accelerate into market.</p>
              <Link to="/events" className="text-primary hover:underline text-sm mt-2 inline-block">View calendar →</Link>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-professional mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-primary">2</div>
              <div className="text-lg font-semibold mb-2">Partners</div>
              <p className="text-muted-foreground text-sm">We collaborate with like-minded individuals, communities and organisations to give you a worthwhile experience that will build your tech career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-professional bg-clip-text text-transparent">Partners</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold">SkillyMe</h3>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold">TechHut</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-professional bg-clip-text text-transparent">Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Peer-to-peer learning", icon: Users2 },
              { title: "Track-specific learning", icon: GraduationCap },
              { title: "Mentorship tracks", icon: Users2 },
              { title: "Career readiness", icon: Briefcase }
            ].map((solution, index) => (
              <Card 
                key={solution.title}
                className="group border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-professional flex items-center justify-center mb-3">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Community Feedback */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Community <span className="bg-gradient-professional bg-clip-text text-transparent">Feedback</span>
            </h2>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      <SignupCTA />
      <Footer />
    </div>
  );
};

export default Index;
