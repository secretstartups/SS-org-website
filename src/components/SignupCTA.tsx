import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, CheckCircle } from "lucide-react";

const SignupCTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing information",
        description: "Please enter your name and email.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Welcome aboard!",
      description: "Check your email for next steps.",
    });

    setName("");
    setEmail("");
  };

  const benefits = [
    "Exclusive startup apprenticeships",
    "Free courses & learning resources",
    "Connect with mentors and peers",
    "Early access to hidden opportunities",
  ];

  return (
    <section
      id="signup"
      className="py-20 bg-background"
      aria-labelledby="signup-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            <Sparkles className="w-4 h-4" />
            Join 10,000+ developers
          </div>

          {/* Heading */}
          <h2
            id="signup-heading"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Ready to Level Up?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Get instant access to apprenticeships, mentorship, and exclusive startup opportunities — all for free.
          </p>

          {/* Form Card */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg font-medium bg-primary hover:bg-primary/90"
              >
                Get Started Free
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Legal */}
            <p className="mt-8 text-xs text-muted-foreground text-center">
              By signing up, you agree to our{" "}
              <a href="#" className="underline hover:text-foreground">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-foreground">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupCTA;