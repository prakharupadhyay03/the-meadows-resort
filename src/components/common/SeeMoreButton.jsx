import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * SeeMoreButton - Contextual responsive expandable trigger
 * Designed specifically for mobile optimization while preserving desktop full view.
 * Uses The Meadows luxury palette (Sage Green #517B65, Ivory, Beige, Taupe).
 */
export const SeeMoreButton = ({
  isExpanded,
  onToggle,
  labelMore = 'SEE MORE',
  labelLess = 'SHOW LESS',
  theme = 'light', // 'light' for ivory/beige sections, 'dark' for botanical deep sections
  className = '',
  ariaControls
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`text-center md:hidden pt-4 pb-2 ${className}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={ariaControls}
        className={`inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-luxury uppercase transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-sage-400 active:scale-95 cursor-pointer ${
          isDark
            ? 'bg-white/10 hover:bg-white/15 text-ivory border-white/20 hover:border-white/30'
            : 'bg-ivory hover:bg-beige/60 text-botanical border-taupe/40 hover:border-sage-500 shadow-sm'
        }`}
      >
        <span>{isExpanded ? labelLess : labelMore}</span>
        {isExpanded ? (
          <ChevronUp className="w-3.5 h-3.5 text-sage-500 transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-sage-500 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};

export default SeeMoreButton;
