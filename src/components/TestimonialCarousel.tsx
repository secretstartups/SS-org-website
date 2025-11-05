import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";

const testimonials = [
  {
    name: "Amara Okafor",
    role: "Full Stack Developer",
    company: "TechCorp Africa",
    content: "Secret Startups changed my life. I went from teaching myself to code to landing a paid apprenticeship at a leading tech company in just 6 months!",
    rating: 5,
    image: testimonial1
  },
  {
    name: "Kwame Mensah",
    role: "Frontend Engineer",
    company: "Digital Ventures",
    content: "The community support here is incredible. I've connected with mentors who've guided me through complex projects and helped me grow exponentially.",
    rating: 5,
    image: testimonial2
  },
  {
    name: "Fatima Hassan",
    role: "Mobile Developer",
    company: "AppSolutions Ltd",
    content: "I found my dream job through this platform! The apprenticeship program gave me real-world experience that made all the difference in interviews.",
    rating: 5,
    image: testimonial3
  },
  {
    name: "Thabo Ndlovu",
    role: "DevOps Engineer",
    company: "CloudScale Africa",
    content: "The educational resources are top-notch. I learned cutting-edge technologies and best practices that helped me stand out in the job market.",
    rating: 5,
    image: testimonial4
  },
  {
    name: "Zainab Kamara",
    role: "UI/UX Designer",
    company: "DesignHub",
    content: "Being part of this community opened doors I never knew existed. The network and opportunities here are simply unmatched!",
    rating: 5,
    image: testimonial5
  }
];

const TestimonialCarousel = () => {
  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplayPlugin]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  
                  <p className="text-sm leading-relaxed mb-6 flex-grow text-foreground">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default TestimonialCarousel;
