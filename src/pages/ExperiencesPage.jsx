import React from 'react';
import { 
  Check, 
  Compass, 
  MapPin, 
  Calendar, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { experiencesData } from '../data/experiencesData';

export const ExperiencesPage = () => {
  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Resort Experiences"
        subtitle="Slow down, reconnect with nature, and explore 13 acres of unhurried tropical beauty."
        eyebrow="Living the Sanctuary"
        image="/images/resort-gallery/pool/pool-06.jpg"
        breadcrumbs={[{ label: 'Experiences' }]}
        height="tall"
      />

      {/* 2. Intro Statement */}
      <section className="py-14 bg-beige/40 border-b border-taupe/20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block">
            The Leisure of Stillness
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
            An Unhurried Pace Across 13 Botanical Acres
          </h2>
          <p className="text-base text-charcoal-muted font-light leading-relaxed">
            At The Meadows, activities are thoughtfully crafted around relaxation and contemplation rather than noisy commercial stimulation. Whether spending the afternoon floating in our palm-fringed swimming pool, spotting peacocks on the morning trails, or exploring the monumental rock carvings of Ellora, every moment feels deliberate and restorative.
          </p>
        </div>
      </section>

      {/* 3. Large Image-Based Experiences Showcase */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        {experiencesData.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={exp.id}
              id={exp.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image Column */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-xl bg-beige group">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-sm text-white px-3.5 py-1 text-xs tracking-luxury uppercase font-medium">
                    {exp.category}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-2">
                    {exp.category}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
                    {exp.title}
                  </h3>
                  <p className="text-xs uppercase tracking-luxury text-taupe-dark font-medium mt-1">
                    {exp.tagline}
                  </p>
                </div>

                <p className="text-base text-charcoal-muted font-light leading-relaxed">
                  {exp.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2 border-t border-taupe/20">
                  <ul className="space-y-2 text-xs text-charcoal-muted">
                    {exp.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <Check className="w-3.5 h-3.5 text-sage-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.id === 'heritage-concierge' && (
                  <div className="pt-2">
                    <Button to="/explore" variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                      View Destination Guide
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. Experience Planning CTA */}
      <section className="py-20 bg-botanical text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <Sparkles className="w-8 h-8 text-taupe-light mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Plan Your Personal Escape to The Meadows
          </h2>
          <p className="text-base text-ivory/80 font-light leading-relaxed">
            Our concierge team is at your disposal to coordinate airport arrivals from Chhatrapati Sambhaji Maharaj Airport, reserve private poolside tables, and prepare custom heritage itineraries.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button to="/book" variant="primary" size="lg" icon={<Calendar className="w-4 h-4" />}>
              Reserve Your Stay
            </Button>
            <Button to="/contact" variant="outlineWhite" size="lg">
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;
