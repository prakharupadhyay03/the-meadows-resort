import React, { useState } from 'react';
import { Award, Feather, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import { SeeMoreButton } from '../common/SeeMoreButton';
import { resortInfo } from '../../data/resortInfo';

export const WelcomeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="welcome-section" className="py-20 md:py-28 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Welcome to The Meadows"
              title="Where Deccan Heritage Meets An Untouched Sylvan Sanctuary"
              alignment="left"
              hasDivider={true}
              className="mb-6"
            />

            <div className="text-charcoal-muted font-light leading-relaxed text-base md:text-lg">
              <p>
                Conceived in the historic village of Mitmita on the road to Ellora, 
                <strong className="font-normal text-botanical"> The Meadows Resort &amp; Spa</strong> was envisioned as an expansive breath of fresh air—a low-rise botanical retreat that turns away from conventional multi-storey concrete hotels in favor of private garden cottages.
              </p>
            </div>

            {/* Read More / Read Less trigger for mobile */}
            <SeeMoreButton
              isExpanded={isExpanded}
              onToggle={() => setIsExpanded(!isExpanded)}
              labelMore="READ MORE"
              labelLess="READ LESS"
              ariaControls="welcome-extended-content"
              className="!pt-0 !pb-2 text-left"
            />

            {/* Extended editorial content: Collapsed on mobile, fully visible on desktop */}
            <div
              id="welcome-extended-content"
              className={`space-y-6 ${isExpanded ? 'block animate-fade-in' : 'hidden md:block'}`}
            >
              <div className="text-charcoal-muted font-light leading-relaxed text-base md:text-lg">
                <p>
                  Across 13 undulating acres, native banyan, neem, and gulmohar trees provide natural cooling and shade. The grounds shelter over 50 native bird species, resident peacocks, and tranquil lotus ponds fed by eco-friendly rainwater harvesting and water recycling systems.
                </p>
              </div>

              {/* Verified Architectural Award Card */}
              <div className="p-6 bg-beige/60 border-l-4 border-sage-500 rounded-sm space-y-2">
                <div className="flex items-center space-x-2 text-sage-600">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="text-xs tracking-luxury uppercase font-semibold">
                    National Accolade
                  </span>
                </div>
                <h3 className="font-serif text-lg text-botanical font-medium">
                  IIA National Award for Best Landscape Design
                </h3>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  Awarded across all three categories by the Journal of the Indian Institute of Architects for cultivating a thriving tropical microclimate in Maharashtra's Deccan belt.
                </p>
              </div>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-sage-100 text-sage-600 shrink-0">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-botanical font-medium">Eco-Conscious Haven</h4>
                    <p className="text-xs text-charcoal-muted font-light mt-0.5">Solar-assisted power, chemical-free irrigation, and organic kitchen farming.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-taupe/20 text-taupe-dark shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-botanical font-medium">Total Verandah Privacy</h4>
                    <p className="text-xs text-charcoal-muted font-light mt-0.5">48 detached cottages and thematic suites with personal shaded sit-outs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button to="/about" variant="primary" size="md">
                Discover Our Heritage
              </Button>
            </div>
          </div>

          {/* Right Column: Asymmetric Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="img-zoom-container rounded-sm shadow-xl aspect-[4/5] bg-beige">
                <img
                  src="/images/resort-gallery/resort/resort-01.jpg"
                  alt="Authentic cottage stone walkways surrounded by lush lawns at The Meadows Resort"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>

              {/* Secondary Floating Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-3/5 aspect-square rounded-sm shadow-2xl border-4 border-ivory overflow-hidden bg-beige">
                <img
                  src="/images/resort-gallery/garden/garden-01.jpg"
                  alt="Authentic lotus pond and reflection walkway at The Meadows Resort"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-botanical text-white px-5 py-4 rounded-sm shadow-lg text-center">
                <span className="font-serif text-2xl font-light block">13</span>
                <span className="text-[9px] uppercase tracking-luxury text-taupe-light block">Acres of Flora</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
