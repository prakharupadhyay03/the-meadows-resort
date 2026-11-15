import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { exploreData } from '../../data/exploreData';

export const ExplorePreview = () => {
  const topAttractions = exploreData.attractions.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Prime Heritage Location"
          title="Stay Minutes From Maharashtra's Archaeological Wonders"
          description="Located on Ellora Road in Mitmita, The Meadows allows you to bypass congested city traffic and reach world-renowned historical sites in minutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {topAttractions.map((item) => (
            <div
              key={item.id}
              className="bg-beige/40 rounded-sm overflow-hidden border border-taupe/20 luxury-card-hover group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] tracking-luxury uppercase">
                    {item.designation}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-1.5 text-xs text-sage-600 font-medium">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{item.driveTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-botanical font-medium group-hover:text-sage-600 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-taupe/15 mt-2">
                <Button
                  to="/explore"
                  variant="ghost"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Explore Destination Guide
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            to="/explore"
            variant="outline"
            size="lg"
            icon={<MapPin className="w-4 h-4" />}
          >
            View Complete Destination Guide &amp; Itineraries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExplorePreview;
