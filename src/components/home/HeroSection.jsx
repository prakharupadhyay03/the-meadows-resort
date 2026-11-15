import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Compass } from 'lucide-react';
import { Button } from '../common/Button';

const HERO_SLIDES = [
 {
    image: '/images/resort-gallery/resort/resort-17.png',
    alt: 'Private Pool Villas at The Meadows Resort & Spa',
    title: 'Private Pool Villas'
  },
  {
    image: '/images/resort-gallery/pool/pool-13.png',
    alt: 'The Oasis outdoor swimming pool framed by tropical palms and loungers',
    title: 'The Oasis Poolside Sanctuary'
  },
  {
    image: '/images/resort-gallery/resort/resort-01.png',
    alt: 'Verdant stone pathways winding between cottages at The Meadows Resort & Spa',
    title: '13-Acre Botanical Grounds'
  },
  {
    image: '/images/resort-gallery/garden/garden-02.png',
    alt: 'Tranquil lotus reflection pond and rustic timber bridge at The Meadows',
    title: 'Tranquil Lotus Reflection Ponds'
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through images every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const scrollToWelcome = () => {
    const welcomeEl = document.getElementById('welcome-section');
    if (welcomeEl) {
      welcomeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden bg-botanical-deep">
      {/* Background Slideshow with Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Cinematic Dual Gradient Overlay to maintain high luxury legibility */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/60 via-black/35 to-botanical-deep/90 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-12 md:mt-16">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-3 mb-6">
          <span className="h-px w-8 sm:w-12 bg-taupe" />
          <span className="text-xs sm:text-[13px] tracking-loose-luxury uppercase font-medium text-taupe-light">
            Mitmita • Chhatrapati Sambhajinagar
          </span>
          <span className="h-px w-8 sm:w-12 bg-taupe" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.08] tracking-tight text-white drop-shadow-md">
          Escape Into The Art <br className="hidden sm:inline" />
          <span className="italic font-normal">of Relaxation.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-light text-ivory/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
          An award-winning 13-acre sanctuary of tranquil botanical gardens, private cottages, and restorative wellness—nestled on the historic threshold to Ellora Caves.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Button
            to="/book"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-lg"
          >
            Book Your Stay
          </Button>

          <Button
            to="/stay"
            variant="outlineWhite"
            size="lg"
            icon={<Compass className="w-4 h-4" />}
            className="w-full sm:w-auto backdrop-blur-sm"
          >
            Explore Accommodations
          </Button>
        </div>
      </div>

      {/* Minimalist Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-10 hidden sm:flex items-center space-x-2">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 rounded-full focus:outline-none ${
              index === currentSlide
                ? 'w-8 bg-taupe-light shadow-sm'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Switch to hero slide ${index + 1}: ${slide.title}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToWelcome}
        className="absolute bottom-6 z-10 flex flex-col items-center text-white/70 hover:text-white transition-colors focus:outline-none group"
        aria-label="Scroll to welcome section"
      >
        <span className="text-[10px] tracking-loose-luxury uppercase mb-1.5 opacity-80 group-hover:opacity-100">
          Discover
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-taupe-light" />
      </button>
    </section>
  );
};

export default HeroSection;
