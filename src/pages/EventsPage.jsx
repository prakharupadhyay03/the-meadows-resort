import React, { useState } from 'react';
import { 
  Users, 
  Maximize, 
  Calendar, 
  Send, 
  Check, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Lightbox } from '../components/common/Lightbox';
import { eventsData } from '../data/eventsData';
import { resortInfo } from '../data/resortInfo';

export const EventsPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Event enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Destination Wedding',
    eventDate: '',
    expectedGuests: '250',
    preferredVenue: 'Meadows Greens (Main Lawn up to 1,500)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const eventPhotos = [
    {
      image: "/images/resort-gallery/wedding/wedding-06.jpg",
      title: "Meadows Greens Grand Wedding Celebration",
      caption: "Expansive manicured lawn accommodating up to 1,500 guests."
    },
    {
      image: "/images/resort-gallery/pool/pool-06.jpg",
      title: "Poolside + Meadows Greens Combined Arena",
      caption: "Mega celebration space hosting up to 1,700 guests."
    },
    {
      image: "/images/resort-gallery/meeting/meeting-04.jpg",
      title: "Frangipani Pillarless Banquet Hall",
      caption: "Column-free 181 sq.m indoor hall with warm acoustic paneling."
    },
    {
      image: "/images/resort-gallery/wedding/wedding-09.jpg",
      title: "Hibiscus Lawn Mehendi & Sangeet",
      caption: "Intimate lawn setup surrounded by blooming tropical shrubs."
    },
    {
      image: "/images/resort-gallery/meeting/meeting-10_bigl.jpg",
      title: "Water Colour Executive Boardroom",
      caption: "Quiet meeting suite for corporate conclaves of 40-50 delegates."
    },
    {
      image: "/images/resort-gallery/wedding/wedding-20.jpg",
      title: "Central Court Evening Cocktail Mixer",
      caption: "Poolside terrace ambiance with string illumination."
    }
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Events &amp; Celebrations"
        subtitle="Host unforgettable destination weddings and distinguished corporate conclaves across 13 acres of natural lawns and pillarless halls."
        eyebrow="Weddings, Banquets &amp; Conclaves"
        image="/images/resort-gallery/wedding/wedding-06.jpg"
        breadcrumbs={[{ label: 'Events' }]}
        height="tall"
      />

      {/* 2. Overview Statement & Direct Contacts */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <SectionHeading
            eyebrow="Grand Gatherings"
            title={eventsData.overview.title}
            description={eventsData.overview.description}
          />

          {/* Dedicated Wedding & Banquet Desk Strip */}
          <div className="p-6 bg-beige/60 border border-taupe/30 rounded-sm flex flex-col sm:flex-row items-center justify-around gap-4 text-xs">
            <div className="flex items-center space-x-2 text-botanical font-medium">
              <Phone className="w-4 h-4 text-sage-600" />
              <span>Weddings Desk: <a href={`tel:${resortInfo.phones.weddingsMobile}`} className="hover:underline font-semibold">{resortInfo.phones.weddingsMobile}</a></span>
            </div>
            <div className="flex items-center space-x-2 text-botanical font-medium">
              <Mail className="w-4 h-4 text-sage-600" />
              <span>Banquets: <a href={`mailto:${resortInfo.emails.banquets}`} className="hover:underline font-semibold">{resortInfo.emails.banquets}</a></span>
            </div>
            <div className="flex items-center space-x-2 text-botanical font-medium">
              <Mail className="w-4 h-4 text-sage-600" />
              <span>Weddings: <a href={`mailto:${resortInfo.emails.weddings}`} className="hover:underline font-semibold">{resortInfo.emails.weddings}</a></span>
            </div>
          </div>
        </div>

        {/* 4 Key Event Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {eventsData.services.map((srv, idx) => (
            <div key={idx} className="p-6 bg-beige/30 rounded-sm border border-taupe/20 space-y-3">
              <Sparkles className="w-5 h-5 text-sage-600" />
              <h4 className="font-serif text-lg text-botanical font-medium">{srv.title}</h4>
              <p className="text-xs text-charcoal-muted font-light leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Verified Venues Showcase */}
      <section className="py-20 bg-beige/30 border-y border-taupe/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-2">
              Verified Venue Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
              Distinctive Indoor Halls &amp; Outdoor Lawns
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted font-light max-w-2xl mx-auto mt-2">
              From pillarless banquet suites to sprawling outdoor greens hosting up to 1,700 guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventsData.venues.map((venue) => (
              <div
                key={venue.id}
                id={venue.id}
                className="bg-ivory border border-taupe/20 rounded-sm overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-beige group">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-sm text-white px-3 py-1 text-[11px] tracking-luxury uppercase">
                      {venue.type}
                    </div>
                  </div>

                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between text-xs text-charcoal-muted border-b border-taupe/15 pb-3">
                      <span className="flex items-center space-x-1.5 font-medium text-botanical">
                        <Users className="w-4 h-4 text-sage-600" />
                        <span>{venue.capacity}</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <Maximize className="w-4 h-4 text-sage-600" />
                        <span>{venue.area}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-botanical font-medium">
                      {venue.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                      {venue.description}
                    </p>

                    <div className="p-3 bg-beige/50 border border-taupe/20 rounded-sm">
                      <span className="text-[10px] uppercase tracking-luxury text-taupe-dark font-semibold block">
                        Recommended For:
                      </span>
                      <span className="text-xs text-botanical font-medium mt-0.5 block">
                        {venue.idealFor}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-taupe/15 mt-4">
                  <button
                    onClick={() => {
                      setFormData({ ...formData, preferredVenue: venue.name });
                      const el = document.getElementById('events-form-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-semibold text-sage-600 hover:text-botanical transition-colors"
                  >
                    <span>Enquire for {venue.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Event Gallery Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-2">
            Celebration Memories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
            Moments Under Deccan Stars
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {eventPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-sm overflow-hidden bg-beige group cursor-pointer"
              onClick={() => {
                setActivePhotoIdx(idx);
                setLightboxOpen(true);
              }}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white">
                <div>
                  <h4 className="font-serif text-sm font-medium">{photo.title}</h4>
                  <p className="text-[10px] text-ivory/80 font-light mt-0.5">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Complete Event Enquiry Form */}
      <section id="events-form-section" className="py-20 bg-botanical text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Plan Your Event"
            title="Celebration &amp; Conference Enquiry"
            description="Our dedicated events team in Chhatrapati Sambhajinagar and Mumbai will coordinate guest room blocking across our 48 cottages, bespoke catering menus, and technical setups."
            theme="dark"
          />

          <div className="bg-botanical-deep/90 border border-white/10 p-8 sm:p-10 rounded-sm shadow-2xl mt-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-sage-500/20 text-sage-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white">Event Enquiry Received</h3>
                <p className="text-sm text-ivory/80 font-light max-w-md mx-auto">
                  Thank you, {formData.name}. Our event planning team has received your enquiry for <strong>{formData.eventType}</strong> on {formData.eventDate}. We will review date availability and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-luxury text-taupe-light hover:text-white underline mt-4"
                >
                  Submit Another Event Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Patil"
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@example.com"
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    >
                      <option value="Destination Wedding">Destination Wedding (Multi-Day)</option>
                      <option value="Sangeet / Reception">Sangeet / Cocktail Reception</option>
                      <option value="Corporate Conference">Corporate Conference / Annual Meet</option>
                      <option value="Executive Board Meeting">Executive Board Retreat (Water Colour Hall)</option>
                      <option value="Birthday / Anniversary">Private Anniversary / Family Reunion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Target Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Expected Guest Count *
                    </label>
                    <input
                      type="number"
                      required
                      min="10"
                      max="2000"
                      value={formData.expectedGuests}
                      onChange={(e) => setFormData({ ...formData, expectedGuests: e.target.value })}
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Preferred Venue Space
                    </label>
                    <select
                      value={formData.preferredVenue}
                      onChange={(e) => setFormData({ ...formData, preferredVenue: e.target.value })}
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    >
                      <option value="Meadows Greens (Main Lawn up to 1,500)">Meadows Greens (Main Lawn up to 1,500)</option>
                      <option value="Poolside + Meadows Greens Combined (up to 1,700)">Poolside + Meadows Greens Combined (up to 1,700)</option>
                      <option value="Frangipani Hall (Pillarless Indoor Hall 175 theater)">Frangipani Hall (Pillarless Indoor Hall 175 theater)</option>
                      <option value="Water Colour Hall (Executive Boardroom 40-50)">Water Colour Hall (Executive Boardroom 40-50)</option>
                      <option value="Hibiscus Lawn (Intimate Lawn up to 200)">Hibiscus Lawn (Intimate Lawn up to 200)</option>
                      <option value="Central Court & Pool Terrace (up to 200)">Central Court &amp; Pool Terrace (up to 200)</option>
                      <option value="Garden Court & Magnolia Lawns (up to 100)">Garden Court &amp; Magnolia Lawns (up to 100)</option>
                      <option value="The Lotus Circle (up to 75)">The Lotus Circle (up to 75)</option>
                      <option value="Full Resort Buyout (All Venues + 48 Cottages)">Full Resort Buyout (All Venues + 48 Cottages)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your envisioned decor theme, catering preferences (e.g. Jain, Maharashtrian Thali, Global), and whether you need room blocking for outstation guests across our 48 cottages."
                    className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-ivory/60 font-light">
                    Direct weddings desk: <a href={`tel:${resortInfo.phones.weddingsMobile}`} className="text-taupe-light underline font-medium">{resortInfo.phones.weddingsMobile}</a>
                  </div>
                  <Button type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                    Submit Event Enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox for event photos */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={eventPhotos}
        currentIndex={activePhotoIdx}
        onIndexChange={setActivePhotoIdx}
      />
    </div>
  );
};

export default EventsPage;
