import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Developers from "@/components/Developers";
import Testimonials from "@/components/Testimonials";
import SignupCTA from "@/components/SignupCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Developers />
      <Testimonials />
      <SignupCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
