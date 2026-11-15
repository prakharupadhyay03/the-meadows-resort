import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Maximize, ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { SeeMoreButton } from '../common/SeeMoreButton';
import { roomsData } from '../../data/roomsData';

export const AccommodationPreview = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Show 3 flagship room types on the homepage
  const featuredRooms = roomsData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-beige/40 text-charcoal border-y border-taupe/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Sanctuary of Rest"
          title="Stay in Nature-Immersed Cottages &amp; Suites"
          description="Designed to offer complete acoustic tranquility and privacy. Each independent cottage and thematic suite is enveloped by tropical flora and features its own shaded verandah."
        />

        {/* Accommodation Cards Grid */}
        <div id="accommodations-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {featuredRooms.map((room, idx) => (
            <div 
              key={room.id}
              className={`bg-ivory rounded-sm overflow-hidden border border-taupe/20 luxury-card-hover flex-col justify-between group ${
                idx >= 2 && !isExpanded ? 'hidden md:flex' : 'flex animate-fade-in'
              }`}
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <img
                    src={room.heroImage}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] tracking-luxury uppercase font-medium">
                    {room.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs text-taupe-dark">
                    <span className="flex items-center space-x-1">
                      <Maximize className="w-3.5 h-3.5" />
                      <span>{room.size}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{room.occupancy}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-botanical font-medium group-hover:text-sage-600 transition-colors">
                    <Link to={`/stay/${room.slug}`}>{room.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed line-clamp-3">
                    {room.overview}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="pt-2 border-t border-taupe/15 space-y-1.5 text-xs text-charcoal-muted">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-sage-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 md:p-7 pt-0 flex items-center justify-between border-t border-taupe/15 mt-4">
                <Link
                  to={`/stay/${room.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-luxury uppercase text-sage-600 hover:text-botanical transition-colors"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Button
                  to="/book"
                  variant="primary"
                  size="sm"
                >
                  Enquire
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See More / Show Less Trigger */}
        <SeeMoreButton
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          labelMore="SEE ALL ACCOMMODATIONS"
          labelLess="SHOW LESS"
          ariaControls="accommodations-grid"
          className="mt-6"
        />

        {/* View All Accommodation CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Button
            to="/stay"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All 48 Cottages &amp; Suites
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationPreview;
