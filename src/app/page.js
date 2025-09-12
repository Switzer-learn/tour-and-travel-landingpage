import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  HeroSection,
  WhyChooseUsSection,
  FeaturedToursSection,
  GallerySection,
  AccommodationTransportSection,
  TestimonialsSection,
  BookingCTASection,
  Footer
} from '@/components/sections';

export default function Home() {
  return (
    <div data-theme="bali" className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <WhyChooseUsSection />
        <section id="tours">
          <FeaturedToursSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <AccommodationTransportSection />
        <section id="about">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <BookingCTASection />
        </section>
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
