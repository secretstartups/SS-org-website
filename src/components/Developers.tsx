import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Github, Linkedin } from "lucide-react";

const developers = [
  {
    name: "Amara Okafor",
    role: "Full Stack Developer",
    location: "Lagos, Nigeria",
    bio: "Specializing in React and Node.js. Passionate about building scalable web applications that solve real-world problems.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    name: "Kwame Mensah",
    role: "Mobile Developer",
    location: "Accra, Ghana",
    bio: "iOS and Android expert with 5+ years experience. Love creating intuitive mobile experiences that users love.",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    name: "Zainab Hassan",
    role: "UI/UX Designer & Frontend Dev",
    location: "Nairobi, Kenya",
    bio: "Blending design and code to create beautiful, accessible user interfaces. Advocate for inclusive design practices.",
    skills: ["Figma", "React", "Tailwind", "Accessibility"],
  },
  {
    name: "Tendai Moyo",
    role: "DevOps Engineer",
    location: "Harare, Zimbabwe",
    bio: "Infrastructure automation enthusiast. Building robust CI/CD pipelines and cloud architectures for startups.",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
  },
];

const Developers = () => {
  return (
    <section id="developers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-professional bg-clip-text text-transparent">Talented Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real people building amazing things with the support of our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <Card 
              key={dev.name} 
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{dev.name}</h3>
                    <p className="text-primary font-medium mb-2">{dev.role}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {dev.location}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{dev.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {dev.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
