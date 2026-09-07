import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-orange-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero />
        <Services />
        <Brands />
        <Features />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Call / WhatsApp Bottom Bar */}
      <StickyBottomBar />
    </div>
  );
}
