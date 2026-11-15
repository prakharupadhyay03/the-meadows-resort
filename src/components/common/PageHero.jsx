import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const PageHero = ({
  title,
  subtitle,
  eyebrow,
  image,
  breadcrumbs = [],
  height = 'medium', // 'medium' (h-72 to h-96) | 'tall' (h-[500px])
  children
}) => {
  const heightClasses = height === 'tall' 
    ? 'min-h-[460px] md:min-h-[520px]' 
    : 'min-h-[380px] md:min-h-[420px]';

  return (
    <section className={`relative flex items-end pb-14 pt-32 ${heightClasses} bg-botanical overflow-hidden`}>
      {/* Background Image with refined luxury tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-botanical-deep via-botanical/65 to-black/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center space-x-2 text-xs font-sans tracking-luxury uppercase text-ivory/70">
          <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-taupe-light" />
              {crumb.link ? (
                <Link to={crumb.link} className="hover:text-white transition-colors duration-200">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {eyebrow && (
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-px w-6 bg-taupe/80" />
            <span className="text-xs font-semibold tracking-loose-luxury uppercase text-taupe-light">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] max-w-4xl tracking-tight text-white drop-shadow-sm">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg md:text-xl font-light text-ivory/90 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
};

export default PageHero;
