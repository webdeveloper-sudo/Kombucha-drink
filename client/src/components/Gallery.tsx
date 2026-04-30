import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from './ui/Heading';
import bgbottles from "../assets/images/bg/ginger-mint-lemon.webp";


// Import all images explicitly for Vite bundling
import img1 from '../assets/images/gallery/insta-posters/insta-postersimage1.webp';
import img2 from '../assets/images/gallery/insta-posters/insta-postersimage2.webp';
import img3 from '../assets/images/gallery/insta-posters/insta-postersimage3.webp';
import img4 from '../assets/images/gallery/insta-posters/insta-postersimage4.webp';
import img5 from '../assets/images/gallery/insta-posters/insta-postersimage5.webp';
import img6 from '../assets/images/gallery/insta-posters/insta-postersimage6.webp';
import img7 from '../assets/images/gallery/insta-posters/insta-postersimage7.webp';
import img8 from '../assets/images/gallery/insta-posters/insta-postersimage8.webp';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showAll, setShowAll] = useState(false);

  // Reset zoom when changing image or opening modal
  useEffect(() => {
    setZoomLevel(1);
  }, [selectedIndex]);

  // Modal handlers
  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 3)); // Max zoom 3x
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5)); // Min zoom 0.5x
  };
  
  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  const visibleImages = showAll ? images : images.slice(0, 6);

  return (
    <section className="py-20 relative" style={{
        backgroundImage: `url(${bgbottles})`,
 
        backgroundPosition: "center",
        borderTopLeftRadius: "60px",
        borderBottomRightRadius: "20px",
      }}>
              <div className="absolute inset-0 bg-white/76"></div>

      <div className="container mx-auto  relative z-10">
        <Heading 
          title1="Our" 
          title2="Gallery" 
          subtitle="Explore" 
          textAlignment="center" 
          titleColor="text-gray-800" 
          subtitleColor="text-gray-800"
        />

        {/* 3-Column Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mx-auto">
          <AnimatePresence>
            {visibleImages.map((src) => {
              const originalIndex = images.indexOf(src);
              return (
                <motion.div 
                  key={src} 
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  layout
                  className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer aspect-square"
                  onClick={() => openModal(originalIndex)}
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${originalIndex + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        <motion.div layout className="flex justify-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex flex-col items-center gap-1"
          >
            <div className="px-8 py-3 bg-white shadow-sm border border-gray-200 rounded-full font-heading font-bold text-gray-800 tracking-wider uppercase text-sm hover:shadow-md hover:border-gold/50 transition-all duration-300">
              {showAll ? "Close Gallery" : "Show More"}
            </div>
            <div className={`mt-1 text-gold transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Controls Bar */}
          <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
            <button onClick={handleZoomOut} className="text-white/70 hover:text-white transition-colors" title="Zoom Out">
              <ZoomOut size={28} />
            </button>
            <button onClick={handleResetZoom} className="text-white/70 hover:text-white transition-colors text-sm font-bold tracking-widest border border-white/20 px-3 py-1 rounded-full uppercase" title="Reset Zoom">
              {Math.round(zoomLevel * 100)}%
            </button>
            <button onClick={handleZoomIn} className="text-white/70 hover:text-white transition-colors" title="Zoom In">
              <ZoomIn size={28} />
            </button>
            <div className="w-px h-6 bg-white/20 mx-2" />
            <button onClick={closeModal} className="text-white hover:text-brand-purple transition-colors bg-white/10 rounded-full p-2" title="Close">
              <X size={28} />
            </button>
          </div>

          {/* Navigation Prev */}
          <button 
            className="absolute left-6 text-white hover:text-brand-purple transition-colors bg-white/10 hover:bg-white/20 rounded-full p-4 z-[110]"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image Container with Zoom */}
          <div className="overflow-hidden max-w-5xl max-h-[80vh] w-full flex justify-center items-center px-4 md:px-24">

            <img 
              src={images[selectedIndex]} 
              alt={`Expanded view ${selectedIndex + 1}`}
              className="max-h-[80vh] max-w-full object-contain transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoomLevel})` }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </div>

          {/* Navigation Next */}
          <button 
            className="absolute right-6 text-white hover:text-brand-purple transition-colors bg-white/10 hover:bg-white/20 rounded-full p-4 z-[110]"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 tracking-widest font-bold text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
