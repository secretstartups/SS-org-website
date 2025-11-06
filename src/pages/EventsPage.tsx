import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  const events = {
    peerCodingJams: [
      {
        title: "Weekly Peer Coding Session",
        date: "Every Saturday",
        time: "10:00 AM - 2:00 PM",
        location: "Online",
        description: "Join fellow developers for collaborative coding sessions where we tackle real-world problems together."
      }
    ],
    hackathons: [
      {
        title: "SecretStartups Hackathon 2025",
        date: "March 15-17, 2025",
        time: "48 Hours",
        location: "Hybrid",
        description: "Build innovative solutions in teams. Prizes and mentorship opportunities for winners."
      }
    ],
    webinars: [
      {
        title: "DevOps is my culture, Agile is my Practice, Value is my Game",
        date: "June 30, 2024",
        time: "8:00 PM EAT",
        location: "Google Meet",
        description: "Learn about DevOps culture and agile practices from industry experts.",
        link: "https://lu.ma/m1m6y69k"
      }
    ]
  };

  const EventCard = ({ event, category }: { event: any; category: string }) => (
    <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <CardDescription className="space-y-2 mt-3">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{event.date} {event.time && `• ${event.time}`}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{event.description}</p>
        {event.link && (
          <Button asChild className="w-full">
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Page Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Community <span className="bg-gradient-professional bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our peer coding jams, hackathons, and learning sessions to accelerate your growth
            </p>
          </div>
        </section>

        {/* Peer Coding Jams */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Peer Coding Jams</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {events.peerCodingJams.map((event, index) => (
                  <EventCard key={index} event={event} category="Peer Coding" />
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
                <Calendar className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Hackathons</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {events.hackathons.map((event, index) => (
                  <EventCard key={index} event={event} category="Hackathon" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Webinars & Info Sessions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Webinars & Info Sessions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {events.webinars.map((event, index) => (
                  <EventCard key={index} event={event} category="Webinar" />
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
