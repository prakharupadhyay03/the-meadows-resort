import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Maximize, 
  Bed, 
  Eye, 
  Check, 
  Calendar, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Lightbox } from '../components/common/Lightbox';
import { roomsData } from '../data/roomsData';

export const RoomDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Find room by slug
  const room = roomsData.find(r => r.slug === slug);

  if (!room) {
    return (
      <div className="py-40 text-center px-6 bg-ivory text-charcoal">
        <h2 className="font-serif text-4xl text-botanical">Accommodation Not Found</h2>
        <p className="mt-4 text-charcoal-muted">The requested cottage or suite category does not exist.</p>
        <div className="mt-8">
          <Button to="/stay" variant="primary">Return to Accommodations</Button>
        </div>
      </div>
    );
  }

  // Find current room index for Next / Prev navigation
  const currentIndex = roomsData.findIndex(r => r.slug === slug);
  const prevRoom = roomsData[(currentIndex - 1 + roomsData.length) % roomsData.length];
  const nextRoom = roomsData[(currentIndex + 1) % roomsData.length];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title={room.title}
        subtitle={room.tagline}
        eyebrow={`Category: ${room.category}`}
        image={room.heroImage}
        breadcrumbs={[
          { label: 'Stay', link: '/stay' },
          { label: room.title }
        ]}
        height="tall"
      />

      {/* 2. Main Room Content & Gallery */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Image Showcase & Deep Details */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Gallery Showcase with Lightbox Trigger */}
            <div className="space-y-4">
              <div 
                className="relative aspect-[16/10] rounded-sm overflow-hidden bg-beige cursor-pointer group shadow-lg"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={room.gallery[activeImageIdx]}
                  alt={`${room.title} - View ${activeImageIdx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  className="absolute bottom-4 right-4 bg-botanical/90 backdrop-blur-sm text-white px-3.5 py-2 rounded-sm text-xs flex items-center space-x-2 shadow-md hover:bg-botanical transition-colors"
                  aria-label="Enlarge Image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Gallery</span>
                </button>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-4 gap-3">
                {room.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`aspect-[16/10] rounded-sm overflow-hidden bg-beige border-2 transition-all duration-200 ${
                      activeImageIdx === idx 
                        ? 'border-sage-500 shadow-md ring-2 ring-sage-200' 
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Room Overview & Architecture */}
            <div className="space-y-6">
              <div className="border-b border-taupe/20 pb-4">
                <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-1">
                  Space &amp; Architecture
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
                  Overview of the {room.title}
                </h2>
              </div>

              <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
                {room.overview}
              </p>

              {/* Verified Highlights Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {room.highlights.map((hl, idx) => (
                  <div key={idx} className="p-4 bg-beige/50 border border-taupe/20 rounded-sm">
                    <span className="text-[10px] tracking-luxury uppercase text-taupe-dark font-medium block">
                      {hl.label}
                    </span>
                    <span className="font-serif text-base text-botanical font-medium mt-1 block">
                      {hl.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Inclusions & Amenities */}
            <div className="space-y-6 pt-6 border-t border-taupe/20">
              <h3 className="font-serif text-2xl sm:text-3xl text-botanical font-normal">
                Curated Amenities &amp; Services
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {room.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-beige/30 rounded-sm border border-taupe/15">
                    <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-charcoal font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next / Previous Room Navigation */}
            <div className="pt-10 border-t border-taupe/20 flex items-center justify-between">
              <Link
                to={`/stay/${prevRoom.slug}`}
                className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-charcoal hover:text-sage-600 group"
              >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">{prevRoom.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>

              <Link
                to="/stay"
                className="text-xs uppercase tracking-luxury text-taupe-dark hover:text-botanical underline underline-offset-4"
              >
                All Accommodations
              </Link>

              <Link
                to={`/stay/${nextRoom.slug}`}
                className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-charcoal hover:text-sage-600 group"
              >
                <span className="hidden sm:inline">{nextRoom.title}</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Right Column: Room Facts & Quick Enquiry Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-beige/60 border border-taupe/30 p-8 rounded-sm shadow-md space-y-6">
              
              <div className="border-b border-taupe/20 pb-4">
                <span className="text-[10px] tracking-loose-luxury uppercase text-sage-600 block">
                  Reserve This Haven
                </span>
                <h3 className="font-serif text-2xl text-botanical font-medium mt-1">
                  {room.title}
                </h3>
                <p className="text-xs text-charcoal-muted mt-1">{room.priceEstimate}</p>
              </div>

              {/* Room Quick Specs */}
              <div className="space-y-3 text-xs text-charcoal">
                <div className="flex items-center justify-between py-1.5 border-b border-taupe/15">
                  <span className="flex items-center space-x-2 text-charcoal-muted">
                    <Maximize className="w-3.5 h-3.5 text-sage-600" />
                    <span>Living Area</span>
                  </span>
                  <span className="font-medium">{room.size}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-taupe/15">
                  <span className="flex items-center space-x-2 text-charcoal-muted">
                    <Users className="w-3.5 h-3.5 text-sage-600" />
                    <span>Occupancy</span>
                  </span>
                  <span className="font-medium">{room.occupancy}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-taupe/15">
                  <span className="flex items-center space-x-2 text-charcoal-muted">
                    <Bed className="w-3.5 h-3.5 text-sage-600" />
                    <span>Bed Configuration</span>
                  </span>
                  <span className="font-medium">{room.bed}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-taupe/15">
                  <span className="flex items-center space-x-2 text-charcoal-muted">
                    <Eye className="w-3.5 h-3.5 text-sage-600" />
                    <span>Orientation</span>
                  </span>
                  <span className="font-medium">{room.view}</span>
                </div>
              </div>

              {/* Direct Reservation CTA */}
              <div className="pt-2 space-y-3">
                <Button
                  to={`/book?room=${room.slug}`}
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book This Room
                </Button>

                <p className="text-[11px] text-charcoal-muted text-center font-light leading-snug">
                  Best rate assurance • Flexible reservation enquiry • No advance deposit charged online.
                </p>
              </div>

              {/* Direct Booking Guarantees */}
              <div className="pt-4 border-t border-taupe/20 space-y-2 text-xs text-charcoal-muted font-light">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>Direct booking concierge service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>Complimentary organic tea &amp; herbal drink</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Lightbox for gallery viewing */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={room.gallery}
        currentIndex={activeImageIdx}
        onIndexChange={setActiveImageIdx}
      />
    </div>
  );
};

export default RoomDetailPage;
