import React, { useState } from 'react';
import { Utensils, Coffee, Cake, Clock, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { SeeMoreButton } from '../common/SeeMoreButton';
import { diningData } from '../../data/diningData';

export const DiningPreview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-botanical text-ivory relative overflow-hidden">
      {/* Subtle organic decorative background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="Epicurean Journeys"
          title="Authentic Deccan Gastronomy, Poolside Café &amp; Artisan Bakery"
          description="From heirloom Marathwada curries and signature Maharashtrian thali at The Four Seasons to artisanal coffees by the pool at Marmalade and warm morning bakes at Simply Delicious."
          theme="dark"
        />

        {/* 3 Venues Showcase */}
        <div id="dining-venues-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {/* Venue 1: The Four Seasons */}
          <div className="bg-botanical-deep/80 border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-botanical">
                <img
                  src={diningData.venues[0].image}
                  alt={diningData.venues[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-sage-500 text-white px-3 py-1 text-[10px] tracking-luxury uppercase font-medium">
                  Restobar &amp; Fine Dining
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-taupe-light text-xs">
                  <Utensils className="w-4 h-4" />
                  <span>Deccan Specialties &amp; Thali</span>
                </div>

                <h3 className="font-serif text-2xl text-white font-normal">
                  {diningData.venues[0].name}
                </h3>

                <p className="text-xs sm:text-sm text-ivory/80 font-light leading-relaxed line-clamp-3">
                  {diningData.venues[0].description}
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs text-taupe-light">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Dinner: {diningData.venues[0].hours.dinner}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Button
                to="/dining#four-seasons"
                variant="outlineWhite"
                size="sm"
                className="w-full text-center"
              >
                Discover Menus
              </Button>
            </div>
          </div>

          {/* Venue 2: The Marmalade Café */}
          <div className="bg-botanical-deep/80 border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-botanical">
                <img
                  src={diningData.venues[1].image}
                  alt={diningData.venues[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-taupe text-white px-3 py-1 text-[10px] tracking-luxury uppercase font-medium">
                  Poolside Café
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-taupe-light text-xs">
                  <Coffee className="w-4 h-4" />
                  <span>Breakfast, Snacks &amp; Sips</span>
                </div>

                <h3 className="font-serif text-2xl text-white font-normal">
                  {diningData.venues[1].name}
                </h3>

                <p className="text-xs sm:text-sm text-ivory/80 font-light leading-relaxed line-clamp-3">
                  {diningData.venues[1].description}
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs text-taupe-light">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Open Daily: {diningData.venues[1].hours.allDay}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Button
                to="/dining#marmalade"
                variant="outlineWhite"
                size="sm"
                className="w-full text-center"
              >
                Explore Poolside Café
              </Button>
            </div>
          </div>

          {/* Venue 3: Simply Delicious Bakery - Collapsed on mobile, visible on desktop */}
          <div className={`bg-botanical-deep/80 border border-white/10 rounded-sm overflow-hidden flex-col justify-between group ${
            !isExpanded ? 'hidden md:flex' : 'flex animate-fade-in'
          }`}>
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-botanical">
                <img
                  src={diningData.venues[2].image}
                  alt={diningData.venues[2].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-sage-600 text-white px-3 py-1 text-[10px] tracking-luxury uppercase font-medium">
                  Artisan Bakery
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-taupe-light text-xs">
                  <Cake className="w-4 h-4" />
                  <span>Fresh Breads &amp; Cakes</span>
                </div>

                <h3 className="font-serif text-2xl text-white font-normal">
                  {diningData.venues[2].name}
                </h3>

                <p className="text-xs sm:text-sm text-ivory/80 font-light leading-relaxed line-clamp-3">
                  {diningData.venues[2].description}
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs text-taupe-light">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Baking Daily from 08:00 AM</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Button
                to="/dining#simply-delicious"
                variant="outlineWhite"
                size="sm"
                className="w-full text-center"
              >
                View Artisan Bakery
              </Button>
            </div>
          </div>

        </div>

        {/* Mobile See More / Show Less Trigger */}
        <SeeMoreButton
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          labelMore="SEE MORE DINING EXPERIENCES"
          labelLess="SHOW LESS"
          theme="dark"
          ariaControls="dining-venues-grid"
          className="mt-6"
        />

        {/* Bespoke Dining & Picnic Strip */}
        <div className={`mt-10 sm:mt-14 p-6 sm:p-8 bg-botanical-deep/50 border border-taupe/30 rounded-sm flex-col sm:flex-row items-center justify-between gap-6 ${
          !isExpanded ? 'hidden md:flex' : 'flex animate-fade-in'
        }`}>
          <div>
            <h4 className="font-serif text-xl text-white">Custom Excursion Picnic Hampers</h4>
            <p className="text-xs text-ivory/70 font-light mt-1 max-w-xl">
              Heading to Ellora Caves, Ajanta, or Daulatabad Fort? Our chefs prepare full picnic baskets with tableware, chilled beverages, and local delicacies.
            </p>
          </div>
          <Button to="/dining" variant="primary" size="sm">
            Explore Dining Repertoire
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiningPreview;
