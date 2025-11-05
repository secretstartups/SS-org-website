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
  const quickLinks = [
    {
      icon: Briefcase,
      title: "Paid Apprenticeships",
      description: "Get hands-on experience with real companies while earning competitive wages.",
      link: "/features",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Access curated courses and learning paths designed for African developers.",
      link: "/features",
      color: "accent",
    },
    {
      icon: Users2,
      title: "Community",
      description: "Connect with thousands of developers, mentors, and entrepreneurs.",
      link: "/developers",
      color: "secondary",
    },
    {
      icon: Sparkles,
      title: "Success Stories",
      description: "Read how developers transformed their careers with Secret Startups.",
      link: "/stories",
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-vibrant opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Code2, value: "10K+", label: "Active Developers", color: "text-primary" },
              { icon: Rocket, value: "500+", label: "Opportunities", color: "text-secondary" },
              { icon: TrendingUp, value: "100+", label: "Partner Startups", color: "text-accent" },
              { icon: Globe, value: "25+", label: "African Countries", color: "text-primary" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-vibrant mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-sunrise bg-clip-text text-transparent">Choose Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to accelerate your tech career in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {quickLinks.map((item, index) => (
              <Link key={item.title} to={item.link}>
                <Card 
                  className="group border-2 hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in h-full cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <CardHeader className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-${item.color === 'primary' ? 'sunrise' : item.color === 'accent' ? 'success' : 'professional'} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 hover:border-primary hover:shadow-glow transition-all">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="bg-gradient-success bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from developers who transformed their careers with Secret Startups
            </p>
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
