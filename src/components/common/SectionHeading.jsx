import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  alignment = 'center', // 'center' | 'left'
  theme = 'light',      // 'light' (on ivory/beige) | 'dark' (on deep botanical)
  className = '',
  titleClassName = '',
  hasDivider = true
}) => {
  const isCenter = alignment === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className={`flex items-center space-x-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className={`h-px w-6 ${isDark ? 'bg-taupe/60' : 'bg-sage-400'}`} />
          <span className={`text-[11px] md:text-xs font-semibold tracking-loose-luxury uppercase ${isDark ? 'text-taupe-light' : 'text-sage-600'}`}>
            {eyebrow}
          </span>
          <span className={`h-px w-6 ${isDark ? 'bg-taupe/60' : 'bg-sage-400'}`} />
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] ${isDark ? 'text-white' : 'text-botanical'} ${titleClassName}`}>
        {title}
      </h2>

      {hasDivider && (
        <div className={`flex items-center my-4 space-x-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <div className={`h-px w-10 ${isDark ? 'bg-taupe/40' : 'bg-taupe/50'}`} />
          <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-taupe' : 'bg-sage-500'}`} />
          <div className={`h-px w-10 ${isDark ? 'bg-taupe/40' : 'bg-taupe/50'}`} />
        </div>
      )}

      {description && (
        <p className={`mt-4 text-base md:text-lg font-light leading-relaxed ${isDark ? 'text-ivory/80' : 'text-charcoal-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
