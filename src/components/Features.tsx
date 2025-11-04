import { Briefcase, GraduationCap, Users2, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Briefcase,
    title: "Paid Apprenticeships",
    description: "Get hands-on experience with real companies while earning competitive wages. Learn from industry experts and build your portfolio.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description: "Access curated courses, workshops, and learning paths designed for African developers. From fundamentals to advanced topics.",
    color: "accent",
  },
  {
    icon: Users2,
    title: "Vibrant Community",
    description: "Connect with thousands of developers, mentors, and entrepreneurs. Collaborate on projects, share knowledge, and grow together.",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Startup Resources",
    description: "Launch your own venture with access to funding opportunities, mentorship, tools, and a network of investors and advisors.",
    color: "primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="bg-gradient-sunrise bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Four powerful pillars designed to accelerate your career and entrepreneurial journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-${feature.color === 'primary' ? 'sunrise' : feature.color === 'accent' ? 'success' : 'professional'} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
