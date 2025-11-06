import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please enter your email and message.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setEmail("");
    setMessage("");
  };

  const faqs = [
    {
      question: "Is Secret Startups really free to join?",
      answer:
        "Yes! Joining is completely free. You get instant access to our community, learning resources, and job board. Some premium courses may have fees, but the core platform is free.",
    },
    {
      question: "Do I need prior experience to join?",
      answer:
        "No experience needed. We support developers at all levels — from beginners to experts — with tailored learning paths and opportunities.",
    },
    {
      question: "How do apprenticeships work?",
      answer:
        "Our paid apprenticeships connect you with real companies. You work on live projects, earn competitive wages, and gain experience. Companies pay through our platform.",
    },
    {
      question: "Can I access the platform from anywhere in Africa?",
      answer:
        "Yes! We serve developers across all African countries. We have members in over 40 nations and growing.",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-lg border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-32 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-medium"
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-7 pt-7 border-t border-border flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <span>support@secretstartups.com</span>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Frequently Asked Questions
              </h3>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border rounded-lg px-5"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:text-primary py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;