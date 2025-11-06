import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

const EventsPage = () => {
  const events = {
    peerCodingJams: [
      {
        title: "Weekly Peer Coding Session",
        date: "Every Saturday",
        time: "10:00 AM - 2:00 PM",
        location: "Online (Discord)",
        description:
          "Collaborate with peers on real-world projects. Perfect for skill-building and networking.",
      },
    ],
    hackathons: [
      {
        title: "SecretStartups Hackathon 2025",
        date: "March 15–17, 2025",
        time: "48-Hour Challenge",
        location: "Hybrid (Online + Nairobi)",
        description:
          "Build, ship, and pitch your idea. Top teams win mentorship and startup funding intros.",
      },
    ],
    webinars: [
      {
        title: "DevOps Culture, Agile Practice, Value Delivery",
        date: "June 30, 2024",
        time: "8:00 PM EAT",
        location: "Google Meet",
        description:
          "Learn how top teams deliver value faster with DevOps and Agile — live with Q&A.",
        link: "https://lu.ma/m1m6y69k",
      },
    ],
  };

  const EventCard = ({
    event,
    category,
  }: {
    event: any;
    category: string;
  }) => (
    <Card className="h-full flex flex-col border hover:border-primary/50 hover:shadow-md transition-all duration-200">
      <CardHeader className="flex-1 pb-3">
        <div className="flex justify-between items-start mb-3">
          <Badge
            variant="outline"
            className="text-xs font-medium bg-primary/10 text-primary border-primary/20"
          >
            {category}
          </Badge>
        </div>

        <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>

        <CardDescription className="space-y-2 mt-3 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>
              {event.date}
              {event.time && (
                <span className="text-muted-foreground/80"> • {event.time}</span>
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {event.description}
        </p>

        {event.link ? (
          <Button asChild className="w-full mt-auto">
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1"
            >
              Register Now
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        ) : (
          <Button disabled variant="secondary" className="w-full mt-auto">
            Recurring Event
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-16">
        {/* Hero Header */}
        <header className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Community Events
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn, build, and grow with peer coding jams, hackathons, and expert-led webinars.
            </p>
          </div>
        </header>

        {/* Peer Coding Jams */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Peer Coding Jams
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {events.peerCodingJams.map((event, i) => (
                  <EventCard key={i} event={event} category="Weekly" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hackathons */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Hackathons
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {events.hackathons.map((event, i) => (
                  <EventCard key={i} event={event} category="Hackathon" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Webinars */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-7 h-7 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Webinars & Info Sessions
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {events.webinars.map((event, i) => (
                  <EventCard key={i} event={event} category="Webinar" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;