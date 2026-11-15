import React from 'react';
import { Calendar, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { resortInfo } from '../../data/resortInfo';

export const BookingCTASection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-botanical-deep text-white overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/resort-gallery/wedding/wedding-14.jpg"
          alt="The Meadows Resort Landscape at Twilight"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-botanical-deep via-botanical-deep/85 to-botanical/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 text-taupe-light mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-loose-luxury font-medium">Your Sylvan Retreat Awaits</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight">
          Begin Your Journey into Peace &amp; Natural Splendor
        </h2>

        <p className="mt-6 text-base sm:text-lg text-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
          Reserve your private cottage at The Meadows Resort &amp; Spa. Enjoy direct booking privileges, personalized concierge assistance, and effortless access to Ellora Caves.
        </p>

        {/* Direct Booking Perks */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory/70">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-sage-400" />
            <span>Best Direct Rate Assurance</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Complimentary Herbal Welcome Elixir</span>
          <span className="hidden sm:inline">•</span>
          <span>Early Check-in Priority (Subject to Availability)</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/book"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-xl"
          >
            Book Your Stay Online
          </Button>

          <a
            href={`tel:${resortInfo.phones.primary}`}
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/40 text-white hover:bg-white/10 transition-colors uppercase text-xs tracking-luxury font-semibold w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-taupe-light" />
            <span>Call {resortInfo.phones.primary}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCTASection;
