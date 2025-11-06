import { Target, Users, Lightbulb, Linkedin, MessageCircle, Instagram, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const team = [
    { name: "Garron Kramer", role: "CEO and Founder" },
    { name: "Peter Okech", role: "Community Lead and Director" },
    { name: "Isirri Ibrahim", role: "Marketing Lead" },
    { name: "Brandon Odhaimbo", role: "Developer" },
    { name: "Silas Moracha", role: "Developer" },
    { name: "Solomon Uche", role: "Developer" }
  ];

  return (
    <div className="space-y-24">
      {/* Our Story */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Our <span className="bg-gradient-professional bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in July 2025, the SecretStartups team set out with a dream to bridge the skill gap in the market and drastically reduce learning time by connecting peers to learn from each other and become market-ready. Whether the goal is to secure employment, pursue freelancing, or turn a tech project into a business product, we provide the tools and environment to make it happen.
            </p>
            <p className="text-lg font-semibold text-primary mt-6">
              We are on a mission to accelerate 1,000+ developers into the market by 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-professional flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the skill gap by empowering developers to learn faster through peer-to-peer collaboration, equipping them with the tools, support, and real-world experience needed to become market-ready professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-professional flex items-center justify-center mb-4">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To build a global digital hub where learning is fast, collaborative, and practical — giving access to every developer to turn skills into income, impact, or innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Meet the <span className="bg-gradient-professional bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card 
                  key={member.name}
                  className="border hover:border-primary/50 hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-professional flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Follow <span className="bg-gradient-professional bg-clip-text text-transparent">Us</span>
            </h2>
            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="w-14 h-14 rounded-full bg-gradient-professional flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-full bg-gradient-professional flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-full bg-gradient-professional flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-full bg-gradient-professional flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <Music className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
