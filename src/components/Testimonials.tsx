import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chidinma Eze",
    role: "Software Engineer at TechCorp",
    quote: "Secret Startups changed my life. Through their apprenticeship program, I landed my first tech job and now I'm earning 10x what I made before. The community support was incredible.",
    image: "CE",
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Founder, PayFlow",
    quote: "I went from learning to code to launching my own fintech startup in 18 months. The mentorship and resources here are unmatched. Now we're processing millions in transactions.",
    image: "OA",
  },
  {
    name: "Fatima Kamara",
    role: "Senior Frontend Developer",
    quote: "The education platform gave me skills that employers actually want. Within 6 months, I had multiple job offers. The focus on practical, real-world projects made all the difference.",
    image: "FK",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="bg-gradient-success bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real developers sharing how Secret Startups transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="border-2 hover:shadow-xl transition-all duration-300 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-sunrise flex items-center justify-center text-white font-bold text-xl mb-6">
                    {testimonial.image}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
