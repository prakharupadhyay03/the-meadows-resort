import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  ExternalLink, 
  ChevronDown,
  Building,
  Heart,
  Sparkles
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { resortInfo } from '../data/resortInfo';

export const ContactPage = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Reservations',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What are the resort check-in and check-out timings?",
      a: "Standard check-in begins at 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out is subject to room availability on the date of arrival/departure and can be requested via our front desk."
    },
    {
      q: "How far is The Meadows from Ellora Caves and Daulatabad Fort?",
      a: "The Meadows is located directly on Ellora Road in Mitmita. Daulatabad Fort is only 12 km (approx. 15 minutes), and Ellora Caves is approx. 24 km (25-30 minutes), allowing you to skip city traffic entirely."
    },
    {
      q: "What are the closest transit hubs to the resort?",
      a: "Aurangabad Railway Station is approx. 9 km (18-20 minutes). Chhatrapati Sambhaji Maharaj Airport (IXU) is approx. 15 km (25-30 minutes). Our concierge can arrange dedicated chauffeur airport/station pick-ups upon request."
    },
    {
      q: "Are the cottages smoke-free?",
      a: "Yes. In keeping with our wellness and nature sanctuary ethos, all 48 cottages and thematic suites are strictly 100% non-smoking environments to ensure pure indoor air quality."
    },
    {
      q: "What are the operating hours for the swimming pool and Exhale Spa?",
      a: "The Oasis outdoor swimming pool is open daily from 07:00 AM to 07:00 PM. Exhale Spa operates from 08:00 AM to 08:00 PM. We recommend booking spa therapies at least 3 hours prior."
    },
    {
      q: "Do you offer pure vegetarian and Jain culinary options?",
      a: "Yes, absolutely. The Four Seasons restaurant and banquet culinary team takes immense care in preparing authentic pure vegetarian, Jain (without onion/garlic/root vegetables), and dietary-specific preparations, including our signature Maharashtrian Thali."
    }
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Connect With Us"
        subtitle="Our hospitality team in Chhatrapati Sambhajinagar and Mumbai is available 24/7 to assist with room reservations, weddings, and excursions."
        eyebrow="Contact &amp; Location"
        image="/images/resort-gallery/resort/resort-01.jpg"
        breadcrumbs={[{ label: 'Contact' }]}
        height="tall"
      />

      {/* 2. Contact Information Grid & Form */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Verified Departmental Contacts & Corporate Office */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-2">
                Resort Details
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
                Direct Contact Directory
              </h2>
              <p className="text-sm text-charcoal-muted font-light mt-3 leading-relaxed">
                Situated in peaceful Mitmita on the historic highway to Ellora. Reach out directly to our specialized departmental desks.
              </p>
            </div>

            {/* Departmental Cards */}
            <div className="space-y-4 text-xs">
              {/* Resort Address */}
              <div className="p-5 bg-beige/50 border border-taupe/20 rounded-sm flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-serif text-base text-botanical font-medium">Resort Address</h4>
                  <p className="text-charcoal-muted font-light leading-relaxed">
                    {resortInfo.address}
                  </p>
                  <a
                    href={resortInfo.socialLinks.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sage-600 hover:text-botanical font-semibold uppercase tracking-luxury text-[11px] pt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Reservations Desk */}
              <div className="p-5 bg-beige/50 border border-taupe/20 rounded-sm flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <div className="space-y-1 w-full">
                  <div className="flex justify-between items-center">
                    <h4 className="font-serif text-base text-botanical font-medium">Room Reservations</h4>
                    <span className="text-[10px] text-sage-600 uppercase tracking-luxury font-semibold">24/7 Desk</span>
                  </div>
                  <p className="text-charcoal font-medium">
                    Mobile: <a href={`tel:${resortInfo.phones.primary}`} className="hover:text-sage-600">{resortInfo.phones.primary}</a> / <a href={`tel:${resortInfo.phones.secondary}`} className="hover:text-sage-600">{resortInfo.phones.secondary}</a>
                  </p>
                  <p className="text-charcoal-muted">
                    Email: <a href={`mailto:${resortInfo.emails.reservations}`} className="underline hover:text-sage-600">{resortInfo.emails.reservations}</a>
                  </p>
                </div>
              </div>

              {/* Weddings & Banquets Desk */}
              <div className="p-5 bg-beige/50 border border-taupe/20 rounded-sm flex items-start space-x-3.5">
                <Heart className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <div className="space-y-1 w-full">
                  <h4 className="font-serif text-base text-botanical font-medium">Weddings &amp; Banquets</h4>
                  <p className="text-charcoal font-medium">
                    Weddings Direct: <a href={`tel:${resortInfo.phones.weddingsMobile}`} className="hover:text-sage-600">{resortInfo.phones.weddingsMobile}</a>
                  </p>
                  <p className="text-charcoal-muted">
                    Weddings Email: <a href={`mailto:${resortInfo.emails.weddings}`} className="underline hover:text-sage-600">{resortInfo.emails.weddings}</a>
                  </p>
                  <p className="text-charcoal-muted">
                    Banquets Email: <a href={`mailto:${resortInfo.emails.banquets}`} className="underline hover:text-sage-600">{resortInfo.emails.banquets}</a>
                  </p>
                </div>
              </div>

              {/* Exhale Spa & Fitness */}
              <div className="p-5 bg-beige/50 border border-taupe/20 rounded-sm flex items-start space-x-3.5">
                <Sparkles className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-serif text-base text-botanical font-medium">Exhale Spa &amp; Wellness</h4>
                  <p className="text-charcoal">
                    Spa Desk: <a href={`tel:${resortInfo.phones.secondary}`} className="hover:text-sage-600">{resortInfo.phones.secondary}</a>
                  </p>
                  <p className="text-charcoal-muted">
                    Email: <a href={`mailto:${resortInfo.emails.spa}`} className="underline hover:text-sage-600">{resortInfo.emails.spa}</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Visual Embed / Frame */}
            <div className="rounded-sm overflow-hidden border border-taupe/30 shadow-md aspect-[16/9] bg-beige relative">
              <iframe
                title="The Meadows Resort & Spa Location Map"
                src="https://maps.google.com/maps?q=The+Meadows+Resort+and+Spa+Aurangabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Message Form & Mumbai Corporate Office */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-ivory border border-taupe/30 p-8 sm:p-12 rounded-sm shadow-lg">
              <div className="border-b border-taupe/20 pb-4 mb-6">
                <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-1">
                  Online Inquiries
                </span>
                <h3 className="font-serif text-3xl text-botanical font-normal">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted font-light mt-1">
                  Select your department of interest. Our team in Mitmita or Mumbai will respond within a few hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-botanical">Message Transmitted</h4>
                  <p className="text-sm text-charcoal-muted font-light max-w-md mx-auto">
                    Thank you, {formData.name}. We have received your inquiry for the <strong>{formData.department}</strong> department. A representative will contact you at {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-luxury text-sage-600 hover:text-botanical underline mt-4"
                  >
                    Send Another Message
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
                        placeholder="e.g. Ananya Sen"
                        className="w-full bg-beige/30 border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
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
                        placeholder="e.g. ananya@example.com"
                        className="w-full bg-beige/30 border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
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
                        className="w-full bg-beige/30 border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Department Destination *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full bg-beige/30 border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      >
                        <option value="Reservations">Room Reservations (reservations@)</option>
                        <option value="Weddings">Weddings Desk (weddings@)</option>
                        <option value="Banquets">Banquets &amp; Conclaves (banquets@)</option>
                        <option value="Spa">Exhale Spa (spa@)</option>
                        <option value="Dining">The Four Seasons &amp; Marmalade Dining</option>
                        <option value="General">General Inquiries / Management (info@)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any specific dates, questions, or assistance required..."
                      className="w-full bg-beige/30 border border-taupe/40 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-charcoal-muted font-light">
                      Protected by resort privacy guidelines. No spam.
                    </p>
                    <Button type="submit" variant="primary" size="md" icon={<Send className="w-4 h-4" />}>
                      Transmit Message
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Mumbai Corporate Office */}
            <div className="p-6 bg-botanical-deep text-white rounded-sm border border-white/10 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-taupe-light">
                  <Building className="w-4 h-4 text-taupe-light shrink-0" />
                  <span className="font-serif text-sm font-medium uppercase tracking-luxury">Mumbai Corporate Office</span>
                </div>
                <p className="text-xs text-ivory/80 font-light leading-relaxed max-w-md">
                  {resortInfo.corporateOffice.address}
                </p>
              </div>
              <div className="shrink-0 text-xs text-taupe-light sm:text-right border-t sm:border-t-0 sm:border-l border-white/15 pt-3 sm:pt-0 sm:pl-5">
                <span className="block text-[10px] uppercase tracking-luxury text-taupe-light/70 font-semibold mb-1">Direct Telephones</span>
                <a href="tel:+912266548361" className="hover:underline text-ivory font-medium block">
                  {resortInfo.corporateOffice.phones}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-beige/40 border-t border-taupe/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guest Clarity"
            title="Frequently Asked Questions"
            description="Helpful practical details for planning your arrival and peaceful stay at The Meadows."
          />

          <div className="space-y-4 mt-12">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div 
                  key={idx}
                  className="bg-ivory border border-taupe/20 rounded-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-botanical font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-sage-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-charcoal-muted font-light leading-relaxed border-t border-taupe/15 mt-1 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
