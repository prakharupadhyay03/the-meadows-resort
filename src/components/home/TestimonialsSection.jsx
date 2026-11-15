import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Pause, Play } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonialsData';

export const TestimonialsSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsData.length;

  // Auto-cycle through reviews every 2.8 seconds (2-3s interval)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % total);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIdx((currentIdx - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIdx((currentIdx + 1) % total);
  };

  const current = testimonialsData[currentIdx];

  return (
    <section 
      className="py-20 md:py-28 bg-beige/60 text-charcoal border-t border-taupe/20 relative"
      aria-roledescription="carousel"
      aria-label="Guest Reviews Carousel"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          eyebrow="Guest Impressions"
          title="Echoes From Our Garden Sanctuary"
          description="Reflections from leisure travelers, heritage enthusiasts, and wedding guests who have experienced The Meadows."
        />

        {/* Testimonial Editorial Card with Hover/Drag-to-Pause */}
        <div
          className="mt-10 bg-ivory p-8 sm:p-12 md:p-14 rounded-sm border border-taupe/20 shadow-sm relative transition-all duration-300 hover:shadow-md cursor-default select-text"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          aria-live="polite"
        >
          {/* Subtle Pause State Pill */}
          <div 
            className={`absolute top-4 right-4 flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-luxury uppercase transition-all duration-300 ${
              isPaused 
                ? 'bg-sage-100 text-sage-700 opacity-100 border border-sage-300/60' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <Pause className="w-2.5 h-2.5" />
            <span>Paused</span>
          </div>

          <Quote className="w-12 h-12 text-taupe/30 mx-auto mb-6" />

          {/* Animated Review Content Container with fixed min-height to prevent layout shifts */}
          <div className="min-h-[220px] sm:min-h-[190px] md:min-h-[180px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Star Rating */}
                <div className="flex items-center justify-center space-x-1 text-taupe">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-taupe" />
                  ))}
                </div>

                {/* Quote Body */}
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-botanical font-normal leading-relaxed italic max-w-3xl mx-auto">
                  "{current.quote}"
                </blockquote>

                {/* Author Details & Verified Source */}
                <div className="pt-6 border-t border-taupe/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="text-center sm:text-left">
                    <span className="font-serif text-lg text-botanical font-medium block">
                      {current.author}
                    </span>
                    <span className="text-charcoal-muted font-light">
                      {current.location} • {current.stayType}
                    </span>
                  </div>

                  <div className="px-3 py-1 bg-beige rounded-full text-sage-600 font-medium tracking-luxury uppercase text-[10px] border border-taupe/30">
                    {current.source}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div 
          className="mt-8 flex items-center justify-center space-x-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-ivory border border-taupe/30 hover:bg-sage-500 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator with progress pulse */}
          <div className="flex items-center space-x-2">
            {testimonialsData.map((_, i) => {
              const isActive = i === currentIdx;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'w-8 bg-sage-600' 
                      : 'w-2 bg-taupe/40 hover:bg-taupe/70'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={isActive ? 'true' : 'false'}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-ivory border border-taupe/30 hover:bg-sage-500 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
