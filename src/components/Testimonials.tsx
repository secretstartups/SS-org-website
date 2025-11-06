import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chidinma Eze",
    role: "Software Engineer at TechCorp",
    quote: "Secret Startups changed my life. Through their apprenticeship program, I landed my first tech job and now I'm earning 10x what I made before. The community support was incredible.",
    initials: "CE",
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Founder, PayFlow",
    quote: "I went from learning to code to launching my own fintech startup in 18 months. The mentorship and resources here are unmatched. Now we're processing millions in transactions.",
    initials: "OA",
  },
  {
    name: "Fatima Kamara",
    role: "Senior Frontend Developer",
    quote: "The education platform gave me skills that employers actually want. Within 6 months, I had multiple job offers. The focus on practical, real-world projects made all the difference.",
    initials: "FK",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Testimonial Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="h-full border hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote className="w-10 h-10" />
                </div>

                <div className="relative">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mb-5">
                    {t.initials}
                  </div>

                  {/* Quote */}
                  <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed mb-5">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;