import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Maximize, 
  Bed, 
  Eye, 
  Check, 
  ArrowRight, 
  Calendar,
  Sparkles,
  Wifi,
  Coffee,
  Wind
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { roomsData } from '../data/roomsData';

export const StayPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Accommodations (6)' },
    { id: 'Cottage', label: 'Garden Cottages' },
    { id: 'Luxury Suite', label: 'Luxury Suites' },
    { id: 'Thematic Suite', label: 'Thematic Suites' }
  ];

  const filteredRooms = activeFilter === 'all'
    ? roomsData
    : roomsData.filter(room => room.category === activeFilter);

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Cottages &amp; Thematic Suites"
        subtitle="48 detached sanctuaries framed by rolling lawns, private sit-out verandahs, and peaceful water ponds."
        eyebrow="Sanctuary of Rest"
        image="/images/resort-gallery/cottage/cottage-01.jpg"
        breadcrumbs={[{ label: 'Stay' }]}
        height="tall"
      />

      {/* 2. Intro Statement */}
      <section className="py-14 bg-beige/40 border-b border-taupe/20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block">
            Nature-Immersed Hospitality
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
            Low-Rise Privacy, Shaded Porches &amp; Fresh Botanical Air
          </h2>
          <p className="text-base text-charcoal-muted font-light leading-relaxed">
            All 48 units at The Meadows are detached, ground-level structures designed to offer total acoustic privacy and immersion in greenery. In keeping with our wellness ethos, every room is strictly non-smoking, opens onto personal open-air sitting spaces, and is serviced with natural herbal amenities.
          </p>

          {/* Key Standard Inclusions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs text-charcoal">
            <div className="p-3 bg-ivory rounded-sm border border-taupe/20 flex flex-col items-center text-center space-y-1">
              <Wind className="w-4 h-4 text-sage-600" />
              <span className="font-medium">Climate Control</span>
              <span className="text-[10px] text-charcoal-muted font-light">Individual A/C</span>
            </div>
            <div className="p-3 bg-ivory rounded-sm border border-taupe/20 flex flex-col items-center text-center space-y-1">
              <Wifi className="w-4 h-4 text-sage-600" />
              <span className="font-medium">High-Speed Wi-Fi</span>
              <span className="text-[10px] text-charcoal-muted font-light">Fiber optic access</span>
            </div>
            <div className="p-3 bg-ivory rounded-sm border border-taupe/20 flex flex-col items-center text-center space-y-1">
              <Coffee className="w-4 h-4 text-sage-600" />
              <span className="font-medium">Craft Tea &amp; Coffee</span>
              <span className="text-[10px] text-charcoal-muted font-light">Organic herbal infusions</span>
            </div>
            <div className="p-3 bg-ivory rounded-sm border border-taupe/20 flex flex-col items-center text-center space-y-1">
              <Sparkles className="w-4 h-4 text-sage-600" />
              <span className="font-medium">Herbal Toiletries</span>
              <span className="text-[10px] text-charcoal-muted font-light">Natural botanical care</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="py-8 bg-ivory border-b border-taupe/15 sticky top-[73px] z-30 backdrop-blur-md bg-ivory/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center space-x-2 sm:space-x-4 overflow-x-auto py-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 sm:px-6 py-2.5 text-xs uppercase tracking-luxury font-medium transition-all duration-200 whitespace-nowrap rounded-sm ${
                activeFilter === cat.id
                  ? 'bg-botanical text-white shadow-sm'
                  : 'bg-beige/50 text-charcoal hover:bg-beige hover:text-botanical border border-taupe/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Detailed Rooms Showcase */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        {filteredRooms.map((room, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={room.id}
              id={room.slug}
              className="bg-ivory border border-taupe/20 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Image Section */}
                <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'} bg-beige overflow-hidden group`}>
                  <img
                    src={room.heroImage}
                    alt={room.title}
                    className="w-full h-full min-h-[340px] md:min-h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-sm text-white px-3.5 py-1.5 text-xs tracking-luxury uppercase font-medium">
                    {room.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-ivory/90 backdrop-blur-sm px-3 py-1.5 text-[11px] font-sans tracking-wider text-charcoal font-medium border border-taupe/30">
                    {room.priceEstimate}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-5">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-taupe/15 text-xs text-charcoal-muted">
                      <div className="flex items-center space-x-2">
                        <Maximize className="w-4 h-4 text-sage-600" />
                        <div>
                          <span className="block font-medium text-charcoal">{room.size}</span>
                          <span className="text-[10px]">Living Area</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-sage-600" />
                        <div>
                          <span className="block font-medium text-charcoal">{room.occupancy}</span>
                          <span className="text-[10px]">Ideal Occupancy</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bed className="w-4 h-4 text-sage-600" />
                        <div>
                          <span className="block font-medium text-charcoal">{room.bed}</span>
                          <span className="text-[10px]">Bed Layout</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-sage-600" />
                        <div>
                          <span className="block font-medium text-charcoal truncate">{room.view}</span>
                          <span className="text-[10px]">Verandah View</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl text-botanical font-medium">
                        {room.title}
                      </h3>
                      <p className="text-xs uppercase tracking-luxury text-sage-600 font-semibold mt-1">
                        {room.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                      {room.overview}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-sans tracking-luxury uppercase text-taupe-dark font-semibold block">
                        Verified Room Inclusions:
                      </span>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-charcoal-muted">
                        {room.features.slice(0, 4).map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-sage-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-8 border-t border-taupe/15 mt-6 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      to={`/stay/${room.slug}`}
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      View Details &amp; Gallery
                    </Button>

                    <Button
                      to={`/book?room=${room.slug}`}
                      variant="primary"
                      size="sm"
                      className="w-full sm:w-auto"
                      icon={<Calendar className="w-3.5 h-3.5" />}
                    >
                      Enquire For Room
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 5. Booking Enquiry Banner */}
      <section className="py-20 bg-beige/60 border-t border-taupe/20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
            Need Assistance Selecting Your Cottage?
          </h2>
          <p className="mt-4 text-base text-charcoal-muted font-light leading-relaxed">
            Our reservations team can assist with cottage placement near the pool, quiet pond-facing accommodations, or family suite adjoining options.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/book" variant="primary" size="lg">
              Submit Reservation Enquiry
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StayPage;
