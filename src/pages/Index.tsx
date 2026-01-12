import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofSection from "@/components/SocialProofSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import ReassuranceSection from "@/components/ReassuranceSection";

import ProgrammesSection from "@/components/ProgrammesSection";
import BuddySystemSection from "@/components/BuddySystemSection";
import FounderSection from "@/components/FounderSection";
import Timeline from "@/components/Timeline";
import NMDSSection from "@/components/NMDSSection";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle, Phone, CheckCircle } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProofSection />
      <UpcomingEvents />
      <ReassuranceSection />
      
      <ProgrammesSection />
      <BuddySystemSection />
      <FounderSection />
      
      <Timeline />
      <NMDSSection />
      <PhotoGallery />
      <Testimonials />

      {/* Final CTA - Decisive */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
            Whether you're at the start of your journey or polishing your application, MyUCAT is here to help you every step of the way.
          </p>
          
          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Trusted by 5,000+ students each year</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>500+ 5-star reviews</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-white/80 text-sm mb-2">Join our FREE advice groups:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base transition-all transform hover:scale-105 shadow-lg rounded-xl"
                onClick={() => window.open('https://chat.whatsapp.com/JQs5u2s3V41KkogZZJfTOp', '_blank')}
              >
                Y13 Medicine Interviews
              </Button>
              {/* Primary CTA - UCAT */}
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg transition-all transform hover:scale-105 shadow-xl rounded-full"
                onClick={() => window.open('https://chat.whatsapp.com/EOsY2wTUnFZ4g4iKmh1mcB', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                UCAT 2026 Summer
              </Button>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-5 text-base transition-all transform hover:scale-105 shadow-lg rounded-xl"
                onClick={() => window.open('https://chat.whatsapp.com/Gme9STBqQ8qL5acO9LACkV', '_blank')}
              >
                Y13 Dentistry Interviews
              </Button>
            </div>
            {/* Secondary CTA */}
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg mt-2"
              onClick={() => window.open('https://wa.me/447763980592', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Any questions?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white px-12 py-6 text-lg rounded-full transition-all transform hover:scale-105"
              onClick={() => window.open('https://wa.me/447763980592', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp us
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary-light px-12 py-6 text-lg rounded-full"
              onClick={() => window.open('https://uk.trustpilot.com/review/myucat.co.uk', '_blank')}
            >
              View Testimonials
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/myucat.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.tiktok.com/@my_ucat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <TikTokIcon size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/myucat/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Linkedin size={28} />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-12">
            © {new Date().getFullYear()} MyUCAT. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
