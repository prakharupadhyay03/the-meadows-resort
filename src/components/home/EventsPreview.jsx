import React, { useState } from 'react';
import { Calendar, Users, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { SeeMoreButton } from '../common/SeeMoreButton';
import { eventsData } from '../../data/eventsData';
import { resortInfo } from '../../data/resortInfo';

export const EventsPreview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-botanical text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          eyebrow="Celebrations & Conclaves"
          title="Grand Weddings on Meadows Greens &amp; Pillarless Conclave Halls"
          description="From grand weddings for up to 1,700 guests on the combined Meadows Greens and Poolside arena to executive symposiums in the column-free Frangipani Hall."
          theme="dark"
        />

        {/* 3 Flagship Venues Showcase */}
        <div id="events-venues-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {eventsData.venues.slice(0, 3).map((venue, idx) => (
            <div
              key={venue.id}
              className={`bg-botanical-deep/70 border border-white/10 rounded-sm overflow-hidden flex-col justify-between group hover:border-taupe/50 transition-colors ${
                idx >= 2 && !isExpanded ? 'hidden md:flex' : 'flex animate-fade-in'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-botanical">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-sage-500/90 text-white px-3 py-1 text-[10px] tracking-luxury uppercase font-medium">
                    {venue.type}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-taupe-light text-xs">
                    <Users className="w-3.5 h-3.5" />
                    <span>{venue.capacity}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-normal">
                    {venue.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-ivory/80 font-light leading-relaxed line-clamp-3">
                    {venue.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  to="/events"
                  variant="outlineWhite"
                  size="sm"
                  className="w-full text-center"
                >
                  Venue Specifications
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See More / Show Less Trigger */}
        <SeeMoreButton
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          labelMore="SEE ALL VENUES"
          labelLess="SHOW LESS"
          theme="dark"
          ariaControls="events-venues-grid"
          className="mt-6"
        />

        {/* Wedding / Event Services Banner */}
        <div className="mt-14 p-8 bg-botanical-deep/50 border border-taupe/30 rounded-sm grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-3 space-y-2">
            <div className="flex items-center space-x-2 text-taupe-light">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-luxury font-medium">Bespoke Destination Wedding Services</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-white">
              Planning a Destination Wedding or Corporate Offsite?
            </h4>
            <p className="text-xs sm:text-sm text-ivory/70 font-light max-w-2xl">
              Direct wedding desk assistance: <strong className="text-white">{resortInfo.phones.weddingsMobile}</strong> | Dedicated cottage room blocking across 48 units, grand regional catering, and full technical AV support.
            </p>
          </div>

          <div className="flex md:justify-end">
            <Button
              to="/events"
              variant="primary"
              size="md"
              icon={<Calendar className="w-4 h-4" />}
            >
              Event Enquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
