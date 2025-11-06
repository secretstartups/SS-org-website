import { Briefcase, GraduationCap, Users2, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Briefcase,
    title: "Paid Apprenticeships",
    description:
      "Earn while you learn. Work on real projects with startups and get paid competitive rates.",
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description:
      "Curated courses, workshops, and learning paths tailored for African developers.",
  },
  {
    icon: Users2,
    title: "Vibrant Community",
    description:
      "Connect with peers, mentors, and founders. Collaborate, share, and grow together.",
  },
  {
    icon: Sparkles,
    title: "Startup Resources",
    description:
      "Launch your idea with funding intros, tools, mentorship, and investor access.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="h-full border hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;