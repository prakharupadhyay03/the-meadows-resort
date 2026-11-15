import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Brand Logo Component for The Meadows Resort & Spa
 * Renders the authentic resort emblem (rising sun arch, rolling meadow hills, green leaf)
 * with the official typography "THE MEADOWS RESORT & SPA".
 *
 * Supports:
 * - 'dark' theme: Official deep botanical green & warm taupe (for ivory/beige/light backgrounds)
 * - 'light' theme: Luminous crisp white & warm gold (for dark hero/footer backgrounds)
 * - 'responsive' variant: Auto-scales cleanly across mobile, tablet, and desktop viewports
 * - 'mark' variant: Emblem-only icon (sun arch, hills, leaf)
 */
export const Logo = ({
  theme = 'dark', // 'light' (for dark/hero backgrounds) | 'dark' (for ivory/beige backgrounds)
  variant = 'responsive', // 'responsive' | 'horizontal' | 'vertical' | 'mark'
  className = '',
  linkTo = '/'
}) => {
  const isLight = theme === 'light';
  const isMark = variant === 'mark';

  // Select appropriate official logo asset
  const logoSrc = isMark
    ? (isLight ? '/images/logo/the-meadows-emblem-white.png' : '/images/logo/the-meadows-emblem.png')
    : (isLight ? '/images/logo/the-meadows-logo-white.png' : '/images/logo/the-meadows-logo.png');

  // Responsive height classes:
  // Mobile: h-7 sm:h-8 (fits cleanly inside the mobile navbar without squeezing or overlapping)
  // Desktop: md:h-10 lg:h-12
  let sizeClasses = 'h-7 xs:h-8 sm:h-9 md:h-10 lg:h-12 w-auto max-w-[140px] xs:max-w-[160px] sm:max-w-[185px] md:max-w-[220px]';

  if (variant === 'mark') {
    sizeClasses = 'h-6 xs:h-7 sm:h-8 md:h-9 w-auto';
  } else if (variant === 'horizontal') {
    sizeClasses = 'h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-[200px] md:max-w-[240px]';
  }

  const content = (
    <div className={`group inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="The Meadows Resort & Spa"
        className={`${sizeClasses} object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]`}
        loading="eager"
      />
    </div>
  );

  if (linkTo) {
    return (
      <Link 
        to={linkTo} 
        className="inline-flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-sage-400 rounded-xs" 
        aria-label="The Meadows Resort & Spa Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
