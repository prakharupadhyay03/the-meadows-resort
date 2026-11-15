import React, { useState } from 'react';
import { Sparkles, Sun, Droplets, Wind, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { SeeMoreButton } from '../common/SeeMoreButton';
import { spaData } from '../../data/spaData';

export const SpaPreview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Primary Image */}
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-beige">
                <img
                  src={spaData.heroImage}
                  alt="Exhale Spa and Wellness Sanctuary"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Inset Detail Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-sm overflow-hidden shadow-2xl border-4 border-ivory bg-beige">
                <img
                  src="/images/resort-gallery/spa/spa-03.jpg"
                  alt="Authentic glass dome therapy suite at Exhale Spa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Quote Tag */}
              <div className="absolute top-6 left-6 bg-ivory/90 backdrop-blur-md p-4 rounded-sm border border-taupe/30 max-w-xs shadow-md">
                <p className="font-serif text-sm italic text-botanical">
                  "Bathed in gentle daylight pouring through peaked glass domes."
                </p>
                <span className="text-[10px] tracking-luxury uppercase text-sage-600 block mt-1">
                  Exhale Wellness Philosophy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Amenities */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <SectionHeading
              eyebrow="Holistic Rejuvenation"
              title="Exhale Spa: Where Natural Daylight Meets Ancient Healing"
              alignment="left"
              hasDivider={true}
              className="mb-6"
            />

            <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
              Designed around soothing earth-toned pine wood, natural wicker, and organic coir accents, <strong className="font-medium text-botanical">Exhale Spa</strong> offers a sanctuary for the senses. High peaked glass domes filter soft Deccan sunlight, creating an uplifting aura for deep cellular rest.
            </p>

            {/* Feature Icons Grid: Top 2 visible on mobile, remaining 2 expandable */}
            <div id="spa-highlights-grid" className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-beige/50 border border-taupe/20 rounded-sm">
                <Sun className="w-5 h-5 text-sage-600 mb-2" />
                <h4 className="font-serif text-base text-botanical font-medium">Glass-Dome Light</h4>
                <p className="text-xs text-charcoal-muted font-light mt-1">Natural light architecture providing peaceful illumination.</p>
              </div>

              <div className="p-4 bg-beige/50 border border-taupe/20 rounded-sm">
                <Droplets className="w-5 h-5 text-sage-600 mb-2" />
                <h4 className="font-serif text-base text-botanical font-medium">Ayurvedic Abhyanga</h4>
                <p className="text-xs text-charcoal-muted font-light mt-1">Warm medicated herbal oils to pacify fatigue and restore vital balance.</p>
              </div>

              <div className={`p-4 bg-beige/50 border border-taupe/20 rounded-sm ${!isExpanded ? 'hidden md:block' : 'block animate-fade-in'}`}>
                <Wind className="w-5 h-5 text-sage-600 mb-2" />
                <h4 className="font-serif text-base text-botanical font-medium">Steam &amp; Cedar Sauna</h4>
                <p className="text-xs text-charcoal-muted font-light mt-1">Eucalyptus herbal steam room and purifying dry cedar heat.</p>
              </div>

              <div className={`p-4 bg-beige/50 border border-taupe/20 rounded-sm ${!isExpanded ? 'hidden md:block' : 'block animate-fade-in'}`}>
                <Sparkles className="w-5 h-5 text-sage-600 mb-2" />
                <h4 className="font-serif text-base text-botanical font-medium">Outdoor Jacuzzi</h4>
                <p className="text-xs text-charcoal-muted font-light mt-1">Heated whirlpool hydrotherapy surrounded by tropical foliage.</p>
              </div>
            </div>

            {/* Mobile See More / Show Less Trigger */}
            <SeeMoreButton
              isExpanded={isExpanded}
              onToggle={() => setIsExpanded(!isExpanded)}
              labelMore="SEE ALL HIGHLIGHTS"
              labelLess="SHOW LESS"
              ariaControls="spa-highlights-grid"
              className="!pt-1 !pb-0 text-left"
            />

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button to="/spa-wellness" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Therapies &amp; Rituals
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Book Spa Appointment
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpaPreview;
