import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Clock, 
  ExternalLink,
  Instagram,
  Facebook,
  Building,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { Logo } from './Logo';
import { resortInfo } from '../../data/resortInfo';
import { roomsData } from '../../data/roomsData';

export const Footer = () => {
  // Mobile accordion state (null = all collapsed by default)
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (key) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <footer className="bg-botanical text-ivory/80 pt-12 md:pt-20 pb-10 border-t border-taupe/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ========================================================
            DESKTOP FOOTER (Visible on md and above)
            Preserves 100% of existing rich 5-column layout
            ======================================================== */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1 & 2: Brand Story, Award & Mumbai Office */}
          <div className="lg:col-span-2 space-y-6">
            <Logo theme="light" />
            
            <p className="text-sm font-light leading-relaxed text-ivory/80 max-w-sm">
              An award-winning 13-acre eco-friendly luxury sanctuary on Ellora Road in Mitmita, Chhatrapati Sambhajinagar. 48 detached low-rise cottages and serene lotus reflection ponds on the gateway to Ellora Caves.
            </p>

            {/* Verified Award Badge */}
            <div className="p-4 bg-botanical-deep/60 border border-taupe/30 rounded-sm max-w-sm">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-taupe-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm text-white font-medium">
                    National Award for Best Landscape Design
                  </h4>
                  <p className="text-xs text-ivory/70 mt-1 font-light leading-snug">
                    Won across all 3 categories by the Journal of the Indian Institute of Architects (IIA) for pioneering ecological flora preservation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mumbai Corporate Office Note */}
            <div className="text-xs text-ivory/70 space-y-1">
              <div className="flex items-center space-x-1.5 text-taupe-light">
                <Building className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-luxury">Mumbai Sales Office:</span>
              </div>
              <p className="leading-relaxed">
                Dhiraj Chambers, 1st Floor, 9 Hazarimal Somani Marg, Mumbai 400001
              </p>
              <p className="text-taupe-light">
                Tel: +91 22 2207 3014 / +91 22 6654 8361
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-4">
              <span className="text-xs font-sans tracking-luxury uppercase text-taupe-light">Follow Us</span>
              <div className="flex space-x-3 text-ivory hover:text-white">
                <a
                  href={resortInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={resortInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white tracking-wide border-b border-taupe/30 pb-2 inline-block">
              Explore Resort
            </h4>
            <ul className="space-y-2.5 text-xs font-sans tracking-wider uppercase">
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">About Our Story</Link>
              </li>
              <li>
                <Link to="/stay" className="hover:text-white transition-colors duration-200">Cottages &amp; Suites</Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-white transition-colors duration-200">The Four Seasons &amp; Marmalade</Link>
              </li>
              <li>
                <Link to="/spa-wellness" className="hover:text-white transition-colors duration-200">Exhale Spa &amp; Wellness</Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-white transition-colors duration-200">Resort Experiences</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors duration-200">Weddings &amp; Conclaves</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors duration-200">Visual Gallery</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors duration-200">Explore Aurangabad</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Accommodation Direct Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white tracking-wide border-b border-taupe/30 pb-2 inline-block">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-xs font-sans tracking-wider text-ivory/80">
              {roomsData.map((room) => (
                <li key={room.id}>
                  <Link 
                    to={`/stay/${room.slug}`}
                    className="hover:text-white transition-colors duration-200 flex items-center justify-between group"
                  >
                    <span>{room.title}</span>
                    <ArrowRight className="w-3 h-3 text-taupe-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/book" className="text-taupe-light font-medium tracking-luxury uppercase text-[11px] hover:text-white underline underline-offset-4">
                  Reservation Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Verified Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white tracking-wide border-b border-taupe/30 pb-2 inline-block">
              Contact &amp; Location
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-taupe-light shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">The Meadows Resort &amp; Spa</p>
                  <p className="text-ivory/70 mt-0.5">
                    {resortInfo.address}
                  </p>
                  <a
                    href={resortInfo.socialLinks.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-taupe-light hover:text-white mt-1 underline underline-offset-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <Phone className="w-4 h-4 text-taupe-light shrink-0" />
                <div>
                  <a href={`tel:${resortInfo.phones.primary}`} className="hover:text-white block font-medium">
                    Resort: {resortInfo.phones.primary}
                  </a>
                  <a href={`tel:${resortInfo.phones.weddingsMobile}`} className="hover:text-white block text-taupe-light text-[11px]">
                    Weddings: {resortInfo.phones.weddingsMobile}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-taupe-light shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`mailto:${resortInfo.emails.reservations}`} className="hover:text-white block">
                    {resortInfo.emails.reservations}
                  </a>
                  <a href={`mailto:${resortInfo.emails.weddings}`} className="hover:text-white block text-taupe-light text-[11px]">
                    {resortInfo.emails.weddings}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-1 text-ivory/70">
                <Clock className="w-4 h-4 text-taupe-light shrink-0" />
                <span>Check-in: {resortInfo.timings.checkIn} | Check-out: {resortInfo.timings.checkOut}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            MOBILE FOOTER (Visible on screens < md)
            Compact, organized accordion groups to minimize scrolling
            ======================================================== */}
        <div className="block md:hidden pb-8 space-y-6">
          
          {/* A. Brand Area: Compact Logo & Short 2-Line Description */}
          <div className="space-y-3 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Logo theme="light" />
            </div>
            <p className="text-xs font-light leading-relaxed text-ivory/75 max-w-sm mx-auto sm:mx-0">
              An award-winning 13-acre eco-friendly luxury sanctuary on Ellora Road in Mitmita, Chhatrapati Sambhajinagar.
            </p>
          </div>

          {/* B. Quick Links Accordion Groups (Collapsed by default) */}
          <div className="border-t border-b border-white/10 divide-y divide-white/10">
            
            {/* Group 1: EXPLORE */}
            <div>
              <button
                type="button"
                onClick={() => toggleAccordion('explore')}
                aria-expanded={openAccordion === 'explore'}
                aria-controls="footer-accordion-explore"
                className="w-full py-3.5 flex items-center justify-between text-left text-xs uppercase tracking-luxury text-white font-medium focus:outline-none"
              >
                <span>Explore Resort</span>
                <ChevronDown className={`w-4 h-4 text-taupe-light transition-transform duration-300 ${openAccordion === 'explore' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'explore' && (
                <ul id="footer-accordion-explore" className="pb-4 space-y-2 text-xs text-ivory/80 uppercase tracking-wider pl-1 animate-fade-in">
                  <li><Link to="/" className="hover:text-white transition-colors block py-1">Home</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors block py-1">About Our Story</Link></li>
                  <li><Link to="/stay" className="hover:text-white transition-colors block py-1">Cottages &amp; Suites</Link></li>
                  <li><Link to="/dining" className="hover:text-white transition-colors block py-1">Dining Repertoire</Link></li>
                  <li><Link to="/experiences" className="hover:text-white transition-colors block py-1">Resort Experiences</Link></li>
                </ul>
              )}
            </div>

            {/* Group 2: WELLNESS & EVENTS */}
            <div>
              <button
                type="button"
                onClick={() => toggleAccordion('wellness')}
                aria-expanded={openAccordion === 'wellness'}
                aria-controls="footer-accordion-wellness"
                className="w-full py-3.5 flex items-center justify-between text-left text-xs uppercase tracking-luxury text-white font-medium focus:outline-none"
              >
                <span>Wellness &amp; Events</span>
                <ChevronDown className={`w-4 h-4 text-taupe-light transition-transform duration-300 ${openAccordion === 'wellness' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'wellness' && (
                <ul id="footer-accordion-wellness" className="pb-4 space-y-2 text-xs text-ivory/80 uppercase tracking-wider pl-1 animate-fade-in">
                  <li><Link to="/spa-wellness" className="hover:text-white transition-colors block py-1">Exhale Spa &amp; Wellness</Link></li>
                  <li><Link to="/events" className="hover:text-white transition-colors block py-1">Weddings &amp; Conclaves</Link></li>
                  <li><Link to="/gallery" className="hover:text-white transition-colors block py-1">Visual Gallery</Link></li>
                  <li><Link to="/explore" className="hover:text-white transition-colors block py-1">Explore Aurangabad</Link></li>
                </ul>
              )}
            </div>

            {/* Group 3: CONTACT & DIRECTIONS */}
            <div>
              <button
                type="button"
                onClick={() => toggleAccordion('contact')}
                aria-expanded={openAccordion === 'contact'}
                aria-controls="footer-accordion-contact"
                className="w-full py-3.5 flex items-center justify-between text-left text-xs uppercase tracking-luxury text-white font-medium focus:outline-none"
              >
                <span>Contact &amp; Location</span>
                <ChevronDown className={`w-4 h-4 text-taupe-light transition-transform duration-300 ${openAccordion === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'contact' && (
                <div id="footer-accordion-contact" className="pb-4 space-y-3 text-xs text-ivory/80 pl-1 animate-fade-in leading-relaxed">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-taupe-light shrink-0 mt-0.5" />
                    <span>{resortInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-taupe-light shrink-0" />
                    <a href={`tel:${resortInfo.phones.primary}`} className="hover:text-white">
                      {resortInfo.phones.primary}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-taupe-light shrink-0" />
                    <a href={`mailto:${resortInfo.emails.reservations}`} className="hover:text-white">
                      {resortInfo.emails.reservations}
                    </a>
                  </div>
                  <div className="pt-1">
                    <a
                      href={resortInfo.socialLinks.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-taupe-light hover:text-white underline underline-offset-2 uppercase tracking-luxury text-[10px]"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* C. Social Media: Single Horizontal Row */}
          <div className="flex items-center justify-center space-x-4 pt-1">
            <span className="text-xs font-sans tracking-luxury uppercase text-taupe-light">Follow Us</span>
            <div className="flex space-x-3 text-ivory hover:text-white">
              <a
                href={resortInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={resortInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            COPYRIGHT & DEVELOPER CREDIT (Desktop & Mobile)
            ======================================================== */}
        <div className="pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/60 space-y-3 md:space-y-0 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} The Meadows Resort &amp; Spa. All Rights Reserved.
          </p>
          <div className="hidden md:flex items-center space-x-6 text-[11px] tracking-luxury uppercase">
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link to="/book" className="hover:text-white transition-colors">Direct Booking Enquiry</Link>
            <span className="text-taupe-light">Mitmita, Chhatrapati Sambhajinagar</span>
          </div>
        </div>

        {/* Clickable Developer Credit for ThinkBuild (Desktop & Mobile) */}
        <div className="pt-3 text-center text-xs text-ivory/55">
          <span>Developed &amp; Maintained by </span>
          <a
            href="https://www.thinkbuild.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-taupe-light hover:text-white transition-colors underline underline-offset-4 font-medium focus:outline-none focus:ring-1 focus:ring-sage-400"
          >
            ThinkBuild
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
