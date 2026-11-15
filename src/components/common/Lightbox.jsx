import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Lightbox = ({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onIndexChange
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || !images.length) return null;

  const currentItem = images[currentIndex];
  const total = images.length;

  const handlePrev = (e) => {
    e?.stopPropagation();
    onIndexChange((currentIndex - 1 + total) % total);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    onIndexChange((currentIndex + 1) % total);
  };

  // Support both array of strings or array of objects with { image, title, caption }
  const imageUrl = typeof currentItem === 'string' ? currentItem : currentItem.image;
  const imageTitle = typeof currentItem === 'object' ? currentItem.title : '';
  const imageCaption = typeof currentItem === 'object' ? currentItem.caption : '';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close */}
      <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center text-white z-20" onClick={(e) => e.stopPropagation()}>
        <div className="font-sans text-xs tracking-luxury text-ivory/70">
          <span className="text-white font-medium">{currentIndex + 1}</span> / {total}
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      {total > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div 
        className="max-w-5xl max-h-[82vh] p-4 flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={imageTitle || "The Meadows Resort Gallery"}
          className="max-h-[72vh] max-w-full object-contain shadow-2xl transition-all duration-300 select-none"
        />

        {(imageTitle || imageCaption) && (
          <div className="mt-4 text-center text-white max-w-xl">
            {imageTitle && <h4 className="font-serif text-lg tracking-wide">{imageTitle}</h4>}
            {imageCaption && <p className="text-xs text-ivory/80 font-light mt-1">{imageCaption}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
