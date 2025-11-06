import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Handshake, Target, Users, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartnerPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Partnership Request Sent!",
      description: "We'll get back to you within 48 hours.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  const benefits = [
    {
      icon: Target,
      title: "Mutual Growth",
      description: "Collaborate on initiatives that drive impact and innovation in the tech ecosystem."
    },
    {
      icon: Users,
      title: "Access to Talent",
      description: "Connect with a growing community of skilled developers ready to contribute."
    },
    {
      icon: Rocket,
      title: "Brand Visibility",
      description: "Showcase your organization to our engaged community of tech professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-professional mb-6">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Partner <span className="bg-gradient-professional bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate and innovative individual seeking collaborative partnerships to drive impactful projects forward.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={benefit.title}
                    className="border-2 hover:border-primary/50 hover:shadow-lg transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-gradient-professional flex items-center justify-center mb-4">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your partnership ideas..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Partnership Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerPage;
