import React, { useState } from 'react';
import { 
  Utensils, 
  Coffee, 
  Cake,
  Clock, 
  Sparkles, 
  Calendar, 
  Phone, 
  Check, 
  Send,
  Heart,
  ShoppingBag
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Lightbox } from '../components/common/Lightbox';
import { diningData } from '../data/diningData';
import { resortInfo } from '../data/resortInfo';

export const DiningPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    venue: 'four-seasons',
    date: '',
    time: 'dinner',
    guests: '2',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const foodPhotos = [
    {
      image: "/images/resort-gallery/restaurant/restaurant-01.jpg",
      title: "The Four Seasons Restobar Hall",
      caption: "Arched glass windows framing lush gardens and high ceilings."
    },
    {
      image: "/images/resort-gallery/dining/dining-01.jpg",
      title: "Regional Deccan Specialties & Maharashtrian Thali",
      caption: "Heirloom gravies, fresh bhakri, and slow-cooked earthen pot delicacies."
    },
    {
      image: "/images/resort-gallery/restaurant/restaurant-09.jpg",
      title: "The Marmalade Café by the Pool",
      caption: "Artisan coffee, morning breakfast spreads, and light continental fare."
    },
    {
      image: "/images/resort-gallery/restaurant/restaurant-11.jpg",
      title: "Simply Delicious Bakery Creations",
      caption: "Daily baked artisanal sourdough, French croissants, and custom celebration cakes."
    },
    {
      image: "/images/resort-gallery/wedding/wedding-40.jpg",
      title: "Candlelit Poolside Dining",
      caption: "Private romantic gazebo dinners beneath the Deccan night sky."
    },
    {
      image: "/images/resort-gallery/dining/dining-09.jpg",
      title: "Excursion Picnic Hampers",
      caption: "Freshly prepared picnic baskets with full tableware for Ellora & Ajanta trips."
    }
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Culinary Journeys"
        subtitle="Savor rich Deccan gastronomy, sunlit poolside sips, and freshly baked artisan breads nurtured by our 13-acre gardens."
        eyebrow="Dining, Bakery &amp; Restobar"
        image="/images/resort-gallery/restaurant/restaurant-01.jpg"
        breadcrumbs={[{ label: 'Dining' }]}
        height="tall"
      />

      {/* 2. Philosophy & Farm-to-Table Ethos */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Culinary Philosophy"
              title={diningData.philosophy.headline}
              alignment="left"
              hasDivider={true}
            />

            <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
              {diningData.philosophy.story}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-beige/50 border border-taupe/20 rounded-sm">
                <Sparkles className="w-4 h-4 text-sage-600 mb-2" />
                <h4 className="font-serif text-base text-botanical font-medium">Chemical-Free Herbs</h4>
                <p className="text-xs text-charcoal-muted font-light mt-1">
                  Fresh lemongrass, sweet basil, mint, and curry leaves plucked from our kitchen garden every morning.
                </p>
              </div>

              <div className="p-4 bg-beige/50 border border-taupe/20 rounded-sm">
                <Heart className="w-4 h-4 text-sage-600 mb-2" />
                <h4 className="font-serif text-base text-botanical font-medium">Deccan &amp; Nizami Heritage</h4>
                <p className="text-xs text-charcoal-muted font-light mt-1">
                  Heirloom recipes handed down through regional Marathwada cooks and slow-pot Dum cooking.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-xl bg-beige">
              <img
                src="/images/resort-gallery/dining/dining-01.jpg"
                alt="Culinary presentation at The Meadows"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Venue 1: The Four Seasons Restobar */}
      <section id="four-seasons" className="py-20 bg-botanical text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-taupe-light">
                <Utensils className="w-4 h-4" />
                <span className="text-xs tracking-loose-luxury uppercase font-semibold">Flagship Restobar</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
                {diningData.venues[0].name}
              </h2>

              <p className="text-sm tracking-wider uppercase text-taupe-light">
                {diningData.venues[0].tagline}
              </p>

              <p className="text-base text-ivory/80 font-light leading-relaxed">
                {diningData.venues[0].description}
              </p>

              {/* Verified Operating Hours */}
              <div className="p-5 bg-botanical-deep/80 border border-white/10 rounded-sm space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-taupe-light font-medium uppercase tracking-luxury">
                  <Clock className="w-4 h-4" />
                  <span>Operating Timings</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-ivory/80">
                  <div>
                    <span className="block font-medium text-white">Breakfast</span>
                    <span>{diningData.venues[0].hours.breakfast}</span>
                  </div>
                  <div>
                    <span className="block font-medium text-white">Lunch</span>
                    <span>{diningData.venues[0].hours.lunch}</span>
                  </div>
                  <div>
                    <span className="block font-medium text-white">Dinner</span>
                    <span>{diningData.venues[0].hours.dinner}</span>
                  </div>
                </div>
              </div>

              {/* Repertoire Highlights */}
              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase tracking-luxury text-taupe-light font-medium block">
                  Signature Selections:
                </span>
                <ul className="space-y-1.5 text-xs text-ivory/80">
                  {diningData.venues[0].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-sage-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-botanical-deep border border-white/10">
                <img
                  src={diningData.venues[0].image}
                  alt="The Four Seasons Dining Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Venue 2: The Marmalade Café */}
      <section id="marmalade" className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl bg-beige border border-taupe/20">
                <img
                  src={diningData.venues[1].image}
                  alt="The Marmalade Café"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-sage-600">
                <Coffee className="w-4 h-4" />
                <span className="text-xs tracking-loose-luxury uppercase font-semibold">Poolside Sanctuary</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical font-normal leading-tight">
                {diningData.venues[1].name}
              </h2>

              <p className="text-sm tracking-wider uppercase text-sage-600 font-medium">
                {diningData.venues[1].tagline}
              </p>

              <p className="text-base text-charcoal-muted font-light leading-relaxed">
                {diningData.venues[1].description}
              </p>

              <div className="p-4 bg-beige/60 border border-taupe/20 rounded-sm flex items-center space-x-3 text-xs">
                <Clock className="w-4 h-4 text-sage-600 shrink-0" />
                <div>
                  <span className="font-semibold text-botanical">Open Daily: </span>
                  <span className="text-charcoal-muted">{diningData.venues[1].hours.allDay}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase tracking-luxury text-taupe-dark font-medium block">
                  Café &amp; Bistro Specialties:
                </span>
                <ul className="space-y-1.5 text-xs text-charcoal-muted">
                  {diningData.venues[1].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Venue 3: Simply Delicious (In-House Bakery & Patisserie) */}
      <section id="simply-delicious" className="py-20 bg-beige/40 border-t border-taupe/20 text-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-taupe-dark">
                <Cake className="w-4 h-4" />
                <span className="text-xs tracking-loose-luxury uppercase font-semibold">Artisan Bakery &amp; Patisserie</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-botanical font-normal leading-tight">
                {diningData.venues[2].name}
              </h2>

              <p className="text-sm tracking-wider uppercase text-taupe-dark font-medium">
                {diningData.venues[2].tagline}
              </p>

              <p className="text-base text-charcoal-muted font-light leading-relaxed">
                {diningData.venues[2].description}
              </p>

              <div className="p-4 bg-ivory border border-taupe/20 rounded-sm flex items-center space-x-3 text-xs">
                <Clock className="w-4 h-4 text-sage-600 shrink-0" />
                <div>
                  <span className="font-semibold text-botanical">Fresh Bakes Daily: </span>
                  <span className="text-charcoal-muted">{diningData.venues[2].hours.allDay}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase tracking-luxury text-taupe-dark font-medium block">
                  Bakery Selections:
                </span>
                <ul className="space-y-1.5 text-xs text-charcoal-muted">
                  {diningData.venues[2].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl bg-beige border border-taupe/20">
                <img
                  src={diningData.venues[2].image}
                  alt="Simply Delicious Bakery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Bespoke Private Dining & Excursion Hampers */}
      <section className="py-20 bg-ivory border-y border-taupe/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Special Occasions &amp; Tours"
            title="Curated Dining Beyond the Table"
            description="From picnic hampers packed for Ellora Caves to candlelit poolside dining and 24-hour cottage room service."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {diningData.experiences.map((exp, idx) => (
              <div key={idx} className="bg-beige/40 rounded-sm overflow-hidden border border-taupe/20 luxury-card-hover">
                <div className="aspect-[16/10] overflow-hidden bg-beige">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-serif text-xl text-botanical font-medium">{exp.title}</h4>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Food & Ambiance Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-2">
            Culinary Visuals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
            Gourmet Moments at The Meadows
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {foodPhotos.map((photo, idx) => (
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

      {/* 8. Dining Reservation Enquiry Form */}
      <section className="py-20 bg-botanical text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reserve a Table"
            title="Dining &amp; Table Reservation Enquiry"
            description="Contact our F&amp;B concierge to reserve a table at The Four Seasons, order from Simply Delicious bakery, or organize a customized excursion picnic hamper."
            theme="dark"
          />

          <div className="mt-10 bg-botanical-deep/90 border border-white/10 p-8 sm:p-10 rounded-sm shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-sage-500/20 text-sage-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white">Dining Enquiry Received</h3>
                <p className="text-sm text-ivory/80 font-light max-w-md mx-auto">
                  Thank you, {formData.name}. Our restaurant manager will review availability for {formData.date} and confirm via phone or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-luxury text-taupe-light hover:text-white underline mt-4"
                >
                  Submit Another Enquiry
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
                      placeholder="e.g. Rajiv Sharma"
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
                      placeholder="e.g. rajiv@example.com"
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
                      Preferred Venue *
                    </label>
                    <select
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    >
                      <option value="four-seasons">The Four Seasons (Restobar &amp; Deccan Cuisine)</option>
                      <option value="marmalade">The Marmalade Café (Poolside)</option>
                      <option value="simply-delicious">Simply Delicious (Bakery &amp; Custom Cakes)</option>
                      <option value="candlelight">Private Poolside Candlelight Dinner</option>
                      <option value="picnic">Custom Excursion Picnic Hamper (Ellora / Ajanta)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-luxury text-taupe-light font-medium mb-2">
                    Dietary Requirements or Special Requests
                  </label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Jain food options, anniversary cake from Simply Delicious, quiet garden table..."
                    className="w-full bg-botanical border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-sage-400 rounded-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-ivory/60 font-light">
                    Direct inquiries: <a href={`tel:${resortInfo.phones.primary}`} className="text-taupe-light underline">{resortInfo.phones.primary}</a>
                  </p>
                  <Button type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                    Send Dining Enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox for food photos */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={foodPhotos}
        currentIndex={activePhotoIdx}
        onIndexChange={setActivePhotoIdx}
      />
    </div>
  );
};

export default DiningPage;
