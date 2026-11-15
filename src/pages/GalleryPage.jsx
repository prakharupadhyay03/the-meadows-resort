import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Lightbox } from '../components/common/Lightbox';
import { galleryCategories, galleryItems } from '../data/galleryData';

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Visual Impressions"
        subtitle="Explore the natural poetry, cottage architecture, and tranquil garden atmospheres of The Meadows."
        eyebrow="Resort Portfolio"
        image="/images/resort-gallery/resort/resort-01.jpg"
        breadcrumbs={[{ label: 'Gallery' }]}
        height="tall"
      />

      {/* 2. Category Filter Controls */}
      <section className="py-8 bg-ivory border-b border-taupe/20 sticky top-[73px] z-30 backdrop-blur-md bg-ivory/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-start lg:justify-center space-x-2 overflow-x-auto py-1 scrollbar-none">
          <div className="flex items-center space-x-2 text-taupe-dark text-xs uppercase tracking-luxury pr-3 border-r border-taupe/20 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Filter By:</span>
          </div>

          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-luxury font-medium transition-all duration-200 whitespace-nowrap rounded-sm shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-botanical text-white shadow-sm'
                  : 'bg-beige/50 text-charcoal hover:bg-beige hover:text-botanical border border-taupe/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Responsive Editorial Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-taupe/20 text-xs text-charcoal-muted">
          <span>
            Showing <strong className="text-charcoal font-medium">{filteredItems.length}</strong> photographs
          </span>
          <span className="text-[11px] uppercase tracking-luxury text-taupe-dark">
            Click any image to enlarge in full-screen view
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative bg-beige rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[16/11]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay with Editorial Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-deep/90 via-botanical-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[9px] uppercase tracking-loose-luxury text-taupe-light font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory/80 font-light mt-1 line-clamp-2">
                  {item.caption}
                </p>

                <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-taupe-light">
                  <span className="flex items-center space-x-1">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Lightbox</span>
                  </span>
                  <span>{idx + 1} / {filteredItems.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox modal with keyboard & touch navigation */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredItems}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
      />
    </div>
  );
};

export default GalleryPage;
