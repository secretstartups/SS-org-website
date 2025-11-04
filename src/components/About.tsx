import { Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-sunrise bg-clip-text text-transparent">Secret Startups</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We're building a thriving ecosystem that connects talented African developers with the opportunities, education, and resources they need to succeed in the global tech economy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all animate-fade-in border border-border">
            <div className="w-14 h-14 rounded-xl bg-gradient-sunrise flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to tech opportunities and empower African developers to build world-class products and companies.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all animate-fade-in border border-border" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-professional flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Who We Serve</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring and experienced developers across Africa who are ready to level up their skills, earn competitive wages, and make an impact.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all animate-fade-in border border-border" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-success flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A future where African developers lead innovation globally, building solutions that transform their communities and the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
