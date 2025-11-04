import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignupCTA from "@/components/SignupCTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Users2, Sparkles, ArrowRight } from "lucide-react";
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
                  className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in h-full cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-${item.color === 'primary' ? 'sunrise' : item.color === 'accent' ? 'success' : 'professional'} flex items-center justify-center mb-4`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SignupCTA />
      <Footer />
    </div>
  );
};

export default Index;
