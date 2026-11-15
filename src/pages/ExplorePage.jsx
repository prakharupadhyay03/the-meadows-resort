import React from 'react';
import { 
  Navigation, 
  ExternalLink, 
  Clock, 
  Compass, 
  Info,
  Camera
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { exploreData } from '../data/exploreData';

export const ExplorePage = () => {
  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero with verified authentic Kailasa Temple photograph */}
      <PageHero
        title="Explore Maharashtra's Heritage"
        subtitle="Stay right on Ellora Road in Mitmita — skip city gridlock and arrive at ancient UNESCO rock monuments in minutes."
        eyebrow="Gateway to History"
        image="/images/explore/ellora-caves.jpg"
        breadcrumbs={[{ label: 'Explore Aurangabad' }]}
        height="tall"
      />

      {/* 2. Strategic Location Advantage Callout */}
      <section className="py-14 bg-botanical text-white border-b border-taupe/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center space-x-2 text-taupe-light">
                <Navigation className="w-4 h-4" />
                <span className="text-xs uppercase tracking-luxury font-semibold">The Strategic Advantage</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Why Experienced Travelers Choose The Meadows on Ellora Road
              </h2>
              <p className="text-sm text-ivory/80 font-light leading-relaxed">
                Most tourists staying in central Aurangabad lose 45 to 60 minutes navigating crowded city bottlenecks every morning. Located on the outer western flank at Mitmita, The Meadows places you directly on the smooth, scenic state highway leading to Ellora Caves and Daulatabad Fort.
              </p>
            </div>

            <div className="md:col-span-5 bg-botanical-deep/80 p-6 rounded-sm border border-white/10 space-y-2.5 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-taupe-light">Daulatabad Fort:</span>
                <span className="font-medium text-white">15 Minutes (12 km)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-taupe-light">Ellora Caves:</span>
                <span className="font-medium text-white">25 Minutes (24 km)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-taupe-light">Bibi Ka Maqbara:</span>
                <span className="font-medium text-white">15 Minutes (8 km)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-taupe-light">Panchakki (Water Mill):</span>
                <span className="font-medium text-white">12 Minutes (6 km)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-taupe-light">Grishneshwar Temple:</span>
                <span className="font-medium text-white">30 Minutes (26 km)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-taupe-light">Aurangabad Caves:</span>
                <span className="font-medium text-white">20 Minutes (11 km)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Attractions Guide */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        {exploreData.attractions.map((attraction, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article
              key={attraction.id}
              id={attraction.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image Column */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl bg-beige group">
                  <img
                    src={attraction.image}
                    alt={`Authentic architectural view of ${attraction.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-sm text-white px-3.5 py-1 text-xs tracking-luxury uppercase font-medium">
                    {attraction.designation}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <div className="flex items-center space-x-2 text-sage-600 text-xs font-semibold uppercase tracking-luxury mb-1">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{attraction.distance}</span>
                    <span>•</span>
                    <span>{attraction.driveTime}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
                    {attraction.name}
                  </h3>
                </div>

                <p className="text-base text-charcoal-muted font-light leading-relaxed">
                  {attraction.description}
                </p>

                {/* Architectural Highlight */}
                <div className="p-4 bg-beige/60 border-l-4 border-taupe rounded-sm space-y-1">
                  <span className="text-[10px] uppercase tracking-luxury text-taupe-dark font-semibold block">
                    Key Highlight:
                  </span>
                  <p className="text-xs text-botanical font-medium leading-relaxed">
                    {attraction.highlight}
                  </p>
                </div>

                {/* Practical Info Pill */}
                <div className="p-4 bg-ivory border border-taupe/20 rounded-sm space-y-1.5 text-xs text-charcoal-muted">
                  <div className="flex items-center space-x-2 text-charcoal">
                    <Clock className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                    <span><strong>Timings:</strong> {attraction.practicalInfo.timings}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-charcoal-muted pt-1">
                    <Info className="w-3.5 h-3.5 text-taupe shrink-0 mt-0.5" />
                    <span><strong>Insider Tip:</strong> {attraction.practicalInfo.tip}</span>
                  </div>
                </div>

                {/* Google Maps External Directions Link */}
                <div className="pt-2">
                  <a
                    href={attraction.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-semibold tracking-luxury uppercase text-sage-600 hover:text-botanical transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}

        {/* Legal Attribution Notice */}
        <div className="pt-8 border-t border-taupe/20 text-center">
          <p className="inline-flex items-center space-x-2 text-[11px] text-charcoal-muted/70 tracking-wider">
            <Camera className="w-3.5 h-3.5 text-sage-600" />
            <span>
              Destination photography sourced from verified public domain and Creative Commons licensed records via Wikimedia Commons &amp; District Tourism Archive.
            </span>
          </p>
        </div>
      </section>

      {/* 4. Chauffeur & Packed Hamper Service Banner */}
      <section className="py-20 bg-beige/60 border-t border-taupe/20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <Compass className="w-8 h-8 text-sage-600 mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
            Private Chauffeur &amp; Guided Excursions
          </h2>
          <p className="text-base text-charcoal-muted font-light leading-relaxed">
            Allow our front desk to arrange dedicated air-conditioned sedans with certified archaeological guides. For early sunrise departures to Ellora Caves or full-day excursions to Ajanta, chef-packed gourmet breakfast hampers can be readied at reception.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="md">
              Inquire With Concierge
            </Button>
            <Button to="/book" variant="outline" size="md">
              Book Stay &amp; Tour Package
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
