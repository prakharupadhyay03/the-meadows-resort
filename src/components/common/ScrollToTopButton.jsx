import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating Scroll-To-Top Arrow Button
 * Appears when the user scrolls down past 320px and smoothly scrolls back to top when clicked.
 * Adheres strictly to the resort's botanical luxury aesthetic and uses Lucide React icons.
 */
export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 320px
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Back to Top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3.5 rounded-full bg-sage-600 hover:bg-botanical text-ivory shadow-xl border border-ivory/30 backdrop-blur-sm transition-all duration-300 ease-in-out cursor-pointer group focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
};

export default ScrollToTopButton;
