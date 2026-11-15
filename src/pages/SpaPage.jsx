import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  Droplets, 
  Wind, 
  Clock, 
  Check, 
  Send, 
  Maximize2,
  ArrowRight
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Lightbox } from '../components/common/Lightbox';
import { spaData } from '../data/spaData';
import { resortInfo } from '../data/resortInfo';

export const SpaPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Spa appointment enquiry state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    therapy: 'Abhyanga Body Rejuvenation',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    guests: '1',
    healthNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Exhale Spa &amp; Wellness"
        subtitle="A sanctuary bathed in natural light filtering through high peaked glass domes, restoring harmony to mind, body, and soul."
        eyebrow="Sanctuary of Renewal"
        image={spaData.heroImage}
        breadcrumbs={[{ label: 'Spa & Wellness' }]}
        height="tall"
      />

      {/* 2. Wellness Philosophy & Atmosphere */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="The Exhale Concept"
              title="Light, Earth &amp; Ancient Botanical Healing"
              alignment="left"
              hasDivider={true}
            />

            <div className="space-y-4 text-charcoal-muted font-light leading-relaxed text-base md:text-lg">
              <p>
                The architectural soul of <strong className="font-medium text-botanical">Exhale Spa</strong> lies in its soaring peaked glass domes, which allow natural daylight to illuminate therapy suites with an organic, golden glow. 
              </p>
              <p>
                Crafted with warm untreated pine, woven wicker, and textured coir, the pavilion is naturally cooled by surrounding garden foliage. Soothing acoustic melodies, natural eucalyptus steam, and the subtle scent of fresh jasmine set an immediate tone of contemplative serenity.
              </p>
              <p>
                Our therapists combine classical Ayurvedic lineage with international holistic techniques, tailoring each session with unrefined cold-pressed oils, hand-ground herbs, and pure botanical extracts.
              </p>
            </div>

            <div className="p-4 bg-beige/60 border border-taupe/20 rounded-sm flex items-center space-x-3 text-xs">
              <Clock className="w-4 h-4 text-sage-600 shrink-0" />
              <div>
                <span className="font-semibold text-botanical">Operating Hours: </span>
                <span className="text-charcoal-muted">{spaData.hours}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-beige">
              <img
                src="/images/resort-gallery/spa/spa-03.jpg"
                alt="Exhale Spa Pavilion Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Facilities Grid */}
      <section className="py-20 bg-beige/40 border-y border-taupe/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Holistic Infrastructure"
            title="Designed for Deep Cellular Rest"
            description="Complementary wellness spaces created to enhance the restorative benefits of your therapy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {spaData.facilities.map((fac, idx) => (
              <div key={idx} className="bg-ivory rounded-sm overflow-hidden border border-taupe/20 luxury-card-hover flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/11] overflow-hidden bg-beige">
                    <img src={fac.image} alt={fac.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-serif text-lg text-botanical font-medium">{fac.title}</h4>
                    <p className="text-xs text-charcoal-muted font-light leading-relaxed">{fac.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categorized Spa Treatments Menu */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Therapeutic Repertoire"
          title="Verified Spa Therapies &amp; Healing Rituals"
          description="Select from classical Ayurvedic protocols, therapeutic massages, and botanical body scrubs utilizing natural ingredients."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center space-x-3 overflow-x-auto py-2 mb-12">
          {spaData.treatments.map((group, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 text-xs uppercase tracking-luxury font-medium transition-all duration-200 whitespace-nowrap rounded-sm ${
                activeCategory === idx
                  ? 'bg-botanical text-white shadow-sm'
                  : 'bg-beige/60 text-charcoal hover:bg-beige hover:text-botanical border border-taupe/20'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Treatments List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaData.treatments[activeCategory].items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-beige/30 p-8 rounded-sm border border-taupe/25 flex flex-col justify-between space-y-6 hover:border-sage-500 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-sage-600 font-medium">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-taupe" />
                </div>

                <h3 className="font-serif text-2xl text-botanical font-medium">
                  {item.name}
                </h3>

                <p className="text-xs tracking-wider uppercase text-taupe-dark font-medium">
                  {item.tagline}
                </p>

                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-taupe/20">
                <button
                  onClick={() => {
                    setFormData({ ...formData, therapy: item.name });
                    const el = document.getElementById('spa-enquiry-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-luxury uppercase text-sage-600 hover:text-botanical transition-colors"
                >
                  <span>Select For Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Wellness Gallery Strip */}
      <section className="py-16 bg-botanical text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-loose-luxury uppercase text-taupe-light block mb-2">
              Atmosphere
            </span>
            <h2 className="font-serif text-3xl text-white font-normal">
              Visuals of Exhale Sanctuary
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {spaData.gallery.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-sm overflow-hidden bg-botanical-deep group cursor-pointer"
                onClick={() => {
                  setActivePhotoIdx(idx);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={img}
                  alt={`Exhale Spa Scene ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Spa Appointment Enquiry Form */}
      <section id="spa-enquiry-section" className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Spa Reservations"
            title="Reserve Your Restorative Session"
            description="Due to personalized therapy preparation, we recommend booking spa sessions at least 3 hours in advance."
          />

          <div className="bg-beige/50 border border-taupe/30 p-8 sm:p-10 rounded-sm shadow-md mt-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-botanical">Appointment Request Received</h3>
                <p className="text-sm text-charcoal-muted font-light max-w-md mx-auto">
                  Thank you, {formData.name}. Our spa concierge will review slot availability for <strong>{formData.therapy}</strong> on {formData.date} and contact you to confirm.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-luxury text-sage-600 hover:text-botanical underline mt-4"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Meera Nair"
                      className="w-full bg-ivory border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. meera@example.com"
                      className="w-full bg-ivory border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-ivory border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                      Selected Therapy *
                    </label>
                    <select
                      value={formData.therapy}
                      onChange={(e) => setFormData({ ...formData, therapy: e.target.value })}
                      className="w-full bg-ivory border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                    >
                      <option value="Abhyanga Body Rejuvenation">Abhyanga Body Rejuvenation (75 Mins)</option>
                      <option value="Shirodhara Bliss">Shirodhara Bliss (60 Mins)</option>
                      <option value="Kizhi Herbal Poultice Therapy">Kizhi Herbal Poultice Therapy (60 Mins)</option>
                      <option value="Signature Exhale Aromatherapy">Signature Exhale Aromatherapy (60/90 Mins)</option>
                      <option value="Deep Tissue Muscle Recovery">Deep Tissue Muscle Recovery (60/90 Mins)</option>
                      <option value="Balinese Restorative Ritual">Balinese Restorative Ritual (60 Mins)</option>
                      <option value="Deccan Sandalwood & Almond Scrub">Deccan Sandalwood &amp; Almond Scrub (45 Mins)</option>
                      <option value="Neem & Multani Mitti Purifying Wrap">Neem &amp; Multani Mitti Wrap (45 Mins)</option>
                      <option value="Botanical Radiance Facial">Botanical Radiance Facial (60 Mins)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-ivory border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-ivory border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                      <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM – 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 07:30 PM)">Evening (04:00 PM – 07:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                    Health Conditions or Specific Focus Areas
                  </label>
                  <textarea
                    rows="3"
                    value={formData.healthNotes}
                    onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
                    placeholder="e.g. Lower back tension after hiking Daulatabad Fort, sensitive skin, etc."
                    className="w-full bg-ivory border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-charcoal-muted font-light">
                    Direct spa desk: <a href={`tel:${resortInfo.phones.primary}`} className="text-sage-600 underline font-medium">{resortInfo.phones.primary}</a>
                  </p>
                  <Button type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                    Submit Spa Request
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox for gallery photos */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={spaData.gallery}
        currentIndex={activePhotoIdx}
        onIndexChange={setActivePhotoIdx}
      />
    </div>
  );
};

export default SpaPage;
