import React, { useState } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { SeeMoreButton } from '../common/SeeMoreButton';
import { experiencesData } from '../../data/experiencesData';

export const ExperiencesPreview = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Show 4 flagship experiences on home page
  const featured = experiencesData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-beige/50 text-charcoal border-t border-taupe/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Resort Life"
          title="Curated Moments Across 13 Botanical Acres"
          description="From refreshing morning laps in the azure swimming pool to walking paths sheltering over 50 native bird species and blooming lotus ponds."
        />

        <div id="experiences-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {featured.map((exp, idx) => (
            <div 
              key={exp.id}
              className={`bg-ivory rounded-sm overflow-hidden border border-taupe/20 luxury-card-hover group flex-col justify-between ${
                idx >= 2 && !isExpanded ? 'hidden md:flex' : 'flex animate-fade-in'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] tracking-luxury uppercase font-medium">
                    {exp.category}
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <h3 className="font-serif text-2xl text-botanical font-medium group-hover:text-sage-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs tracking-wide uppercase text-taupe-dark font-medium">
                    {exp.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 flex items-center justify-between border-t border-taupe/15 mt-2">
                <Button
                  to="/experiences"
                  variant="ghost"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Experience
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See More / Show Less Trigger */}
        <SeeMoreButton
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          labelMore="SEE ALL EXPERIENCES"
          labelLess="SHOW LESS"
          ariaControls="experiences-grid"
          className="mt-6"
        />

        <div className="text-center mt-10 md:mt-14">
          <Button
            to="/experiences"
            variant="outline"
            size="lg"
            icon={<Compass className="w-4 h-4" />}
          >
            Explore All Resort Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesPreview;
