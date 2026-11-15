import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calendar, Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { resortInfo } from '../../data/resortInfo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer upon route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Lock body scroll and handle Escape key when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setDrawerOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [drawerOpen]);

  // Two-column navigation structure requested by user
  const leftColumnLinks = [
    { name: 'Home', path: '/' },
    { name: 'About The Meadows', path: '/about' },
    { name: 'Accommodation', path: '/stay' },
    { name: 'Dining', path: '/dining' },
    { name: 'Spa & Wellness', path: '/spa-wellness' },
    { name: 'Experiences', path: '/experiences' }
  ];

  const rightColumnLinks = [
    { name: 'Book Your Stay', path: '/book' },
    { name: 'Events & Celebrations', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Explore Aurangabad', path: '/explore' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Visual header styling
  const isSolid = !isHomePage || isScrolled;

  const headerBgClasses = isSolid
    ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-taupe/20 py-2 sm:py-3 md:py-3.5'
    : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent py-3 sm:py-4 md:py-5';

  const logoTheme = isSolid ? 'dark' : 'light';

  return (
    <>
      {/* ========================================================
          THREE-PART MINIMALIST RESPONSIVE HEADER
          [LEFT: Hamburger]  [CENTER: Viewport-Centered Logo]  [RIGHT: Book CTA]
         ======================================================== */}
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${headerBgClasses}`}>
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between w-full min-h-[48px] sm:min-h-[56px] md:min-h-[64px]">
            
            {/* 1. LEFT COLUMN: Minimalist Hamburger Menu */}
            <div className="flex items-center justify-start z-20 min-w-[40px]">
              <button
                onClick={() => setDrawerOpen(true)}
                className={`group flex items-center space-x-2 p-2 -ml-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-sage-500 transition-colors cursor-pointer select-none ${
                  isSolid
                    ? 'text-charcoal hover:text-sage-600'
                    : 'text-white/95 hover:text-white drop-shadow'
                }`}
                aria-label="Open Navigation Drawer"
                aria-expanded={drawerOpen}
              >
                {/* Minimalist 3-line bespoke luxury hamburger */}
                <div className="w-5 h-3.5 flex flex-col justify-between py-0.5" aria-hidden="true">
                  <span className={`h-[1.5px] w-5 transition-all duration-300 group-hover:w-4 ${
                    isSolid ? 'bg-charcoal group-hover:bg-sage-600' : 'bg-white'
                  }`} />
                  <span className={`h-[1.5px] w-3.5 transition-all duration-300 group-hover:w-5 ${
                    isSolid ? 'bg-charcoal group-hover:bg-sage-600' : 'bg-white'
                  }`} />
                  <span className={`h-[1.5px] w-5 transition-all duration-300 group-hover:w-3.5 ${
                    isSolid ? 'bg-charcoal group-hover:bg-sage-600' : 'bg-white'
                  }`} />
                </div>
                <span className="hidden md:inline-block text-[11px] font-sans tracking-[0.2em] uppercase font-medium select-none ml-1">
                  Menu
                </span>
              </button>
            </div>

            {/* 2. CENTER COLUMN: Mathematically Centered Logo Relative to Viewport */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-auto">
              <Logo 
                variant="responsive"
                theme={logoTheme} 
                className="transform transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* 3. RIGHT COLUMN: Book Action (Oval "Book" on Phone, "Book Your Stay" on Desktop) */}
            <div className="flex items-center justify-end z-20 min-w-[36px] sm:min-w-[40px]">
              <Link
                to="/book"
                className="group nav-book-btn focus:outline-none focus:ring-1 focus:ring-sage-400"
                aria-label="Book Your Stay at The Meadows"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/95 shrink-0 transition-transform group-hover:scale-110" />
                {/* Phone view: "Book" in oval shape */}
                <span className="nav-book-text-mobile">
                  Book
                </span>
                {/* Desktop view: "Book Your Stay" unchanged */}
                <span className="nav-book-text-desktop">
                  Book Your Stay
                </span>
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================
          SIDE NAVIGATION DRAWER (Slide in from LEFT)
          Inspired by The Manor Delhi + Botanical Luxury Identity
         ======================================================== */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Site Navigation">
            
            {/* Background Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Navigation Drawer Container */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 bottom-0 left-0 w-full sm:w-[480px] md:w-[540px] lg:w-[32vw] xl:w-[30vw] min-w-[320px] max-w-[620px] bg-ivory text-charcoal border-r border-taupe/20 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              
              {/* Drawer Top Bar: Official Logo + Minimal Close Icon */}
              <div className="p-6 sm:p-8 pb-4 flex items-center justify-between border-b border-taupe/20">
                <div onClick={() => setDrawerOpen(false)}>
                  <Logo theme="dark" variant="responsive" className="h-8 sm:h-9 w-auto" />
                </div>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 -mr-2 rounded-full text-charcoal hover:text-sage-600 hover:bg-beige/60 transition-colors focus:outline-none focus:ring-1 focus:ring-sage-500"
                  aria-label="Close Navigation Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Middle: Two-Column Navigation on Desktop, Clean Column on Mobile */}
              <div className="px-6 sm:px-8 py-6 sm:py-8 flex-grow">
                
                {/* Desktop 2-Column Layout (md:grid-cols-2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                  
                  {/* LEFT COLUMN */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-taupe-dark font-semibold block pb-2 opacity-80">
                      Resort Experience
                    </span>
                    <ul className="space-y-0.5">
                      {leftColumnLinks.map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={item.path}
                            onClick={() => setDrawerOpen(false)}
                            className={({ isActive }) =>
                              `group flex items-center justify-between py-2.5 sm:py-3 border-b border-taupe/15 transition-all duration-200 ${
                                isActive 
                                  ? 'text-sage-600 font-medium' 
                                  : 'text-charcoal hover:text-sage-600 hover:translate-x-1'
                              }`
                            }
                          >
                            <span className="font-serif text-lg sm:text-[19px] lg:text-[20px] leading-tight">
                              {item.name}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-sage-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="space-y-1 pt-4 md:pt-0">
                    <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-taupe-dark font-semibold block pb-2 opacity-80">
                      Plan &amp; Connect
                    </span>
                    <ul className="space-y-0.5">
                      {rightColumnLinks.map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={item.path}
                            onClick={() => setDrawerOpen(false)}
                            className={({ isActive }) =>
                              `group flex items-center justify-between py-2.5 sm:py-3 border-b border-taupe/15 transition-all duration-200 ${
                                isActive 
                                  ? 'text-sage-600 font-medium' 
                                  : 'text-charcoal hover:text-sage-600 hover:translate-x-1'
                              }`
                            }
                          >
                            <span className="font-serif text-lg sm:text-[19px] lg:text-[20px] leading-tight">
                              {item.name}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-sage-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Prominent Quick Action Button in Drawer */}
                <div className="mt-8 pt-4">
                  <Link
                    to="/book"
                    onClick={() => setDrawerOpen(false)}
                    className="w-full flex items-center justify-center space-x-2 bg-sage-500 hover:bg-sage-600 text-white py-3 px-6 text-xs uppercase tracking-luxury font-semibold transition-all duration-300 rounded-sm shadow-sm hover:shadow"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve A Cottage Online</span>
                  </Link>
                </div>

              </div>

              {/* Drawer Bottom: Brand Tagline, Verified Contacts & Socials */}
              <div className="p-6 sm:p-8 bg-beige/40 border-t border-taupe/20 space-y-4">
                <div>
                  <h4 className="font-serif text-sm text-botanical font-medium">
                    The Meadows Resort &amp; Spa
                  </h4>
                  <p className="text-[11px] text-charcoal-muted font-light mt-0.5">
                    An Award-Winning 13-Acre Botanical Eco-Sanctuary
                  </p>
                  <p className="text-[10px] text-taupe-dark tracking-wider uppercase mt-1">
                    Mitmita, Chhatrapati Sambhajinagar • Ellora Road
                  </p>
                </div>

                {/* Quick Contact Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-charcoal-muted pt-1">
                  <a 
                    href={`tel:${resortInfo.phones.primary}`} 
                    className="flex items-center space-x-1.5 hover:text-sage-600 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-sage-600 shrink-0" />
                    <span>{resortInfo.phones.primary}</span>
                  </a>
                  <a 
                    href={`mailto:${resortInfo.emails.reservations}`} 
                    className="flex items-center space-x-1.5 hover:text-sage-600 transition-colors truncate"
                  >
                    <Mail className="w-3 h-3 text-sage-600 shrink-0" />
                    <span className="truncate">{resortInfo.emails.reservations}</span>
                  </a>
                </div>

                {/* Social Channels */}
                <div className="pt-2 flex items-center justify-between border-t border-taupe/15 text-[11px] text-taupe-dark">
                  <span className="tracking-luxury uppercase text-[9px]">Follow Our Sanctuary</span>
                  <div className="flex items-center space-x-3">
                    <a
                      href={resortInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full hover:bg-beige hover:text-sage-600 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={resortInfo.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full hover:bg-beige hover:text-sage-600 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
