import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Page Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="bg-gradient-sunrise bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about Secret Startups? We're here to help you get started on your journey
            </p>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
