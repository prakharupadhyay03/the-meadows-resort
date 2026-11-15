import React from 'react';
import { ArrowUp } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { WelcomeSection } from '../components/home/WelcomeSection';
import { AccommodationPreview } from '../components/home/AccommodationPreview';
import { DiningPreview } from '../components/home/DiningPreview';
import { SpaPreview } from '../components/home/SpaPreview';
import { ExperiencesPreview } from '../components/home/ExperiencesPreview';
import { EventsPreview } from '../components/home/EventsPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { BookingCTASection } from '../components/home/BookingCTASection';

export const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-ivory text-charcoal relative">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Welcome & Resort Story */}
      <WelcomeSection />

      {/* 3. Featured Accommodations */}
      <AccommodationPreview />

      {/* 4. Dining Experiences */}
      <DiningPreview />

      {/* 5. Spa & Wellness */}
      <SpaPreview />

      {/* 6. Resort Experiences */}
      <ExperiencesPreview />

      {/* 7. Events & Celebrations */}
      <EventsPreview />

      {/* 8. Genuine Guest Testimonials with Auto-Cycle and Hover-Pause */}
      <TestimonialsSection />

      {/* 9. Immersive Final Booking CTA */}
      <BookingCTASection />

      {/* 10. Downside Back to Top Arrow Bar */}
      <div className="bg-botanical-deep border-t border-white/10 py-6 text-center">
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center space-x-2.5 px-6 py-2.5 rounded-full border border-taupe-light/30 bg-botanical/80 hover:bg-sage-600 text-ivory text-xs tracking-luxury uppercase transition-all duration-300 group cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
          aria-label="Back to top"
        >
          <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </div>
          <span className="font-sans font-medium">Back to Top</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
