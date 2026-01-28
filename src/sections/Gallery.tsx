import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, ZoomIn } from 'lucide-react';

import activity01 from '../assets/images/activity/activity-01.jpg';
import activity02 from '../assets/images/activity/activity-02.jpg';
import activity03 from '../assets/images/activity/activity-03.jpg';
import activity04 from '../assets/images/activity/activity-04.jpg';
import activity05 from '../assets/images/activity/activity-05.jpg';
import activity06 from '../assets/images/activity/activity-06.jpg';
import activity07 from '../assets/images/activity/activity-07.jpg';
import activity08 from '../assets/images/activity/activity-08.jpg';
import activity09 from '../assets/images/activity/activity-09.jpg';
import activity10 from '../assets/images/activity/activity-10.jpg';
import activity11 from '../assets/images/activity/activity-11.jpg';
import activity12 from '../assets/images/activity/activity-12.jpg';
import activity13 from '../assets/images/activity/activity-13.jpg';
import activity14 from '../assets/images/activity/activity-14.jpg';
import activity15 from '../assets/images/activity/activity-15.jpg';
import activity16 from '../assets/images/activity/activity-16.jpg';
import activity17 from '../assets/images/activity/activity-17.jpg';
import activity18 from '../assets/images/activity/activity-18.jpg';
import activity19 from '../assets/images/activity/activity-19.jpg';
import activity20 from '../assets/images/activity/activity-20.jpg';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activityImages = [
    activity01, activity02, activity03, activity04, activity05,
    activity06, activity07, activity08, activity09, activity10,
    activity11, activity12, activity13, activity14, activity15,
    activity16, activity17, activity18, activity19, activity20,
  ];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? activityImages.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex, activityImages.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === activityImages.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex, activityImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera className="w-4 h-4" />
            Our Activities in Action
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Capturing moments of transformation, community impact, and the spirit of positive change
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {activityImages.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100">
                <img
                  src={img}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                {/* Image number badge */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {index + 1} / {activityImages.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        {/* <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Camera className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{activityImages.length}</p>
              <p className="text-sm text-gray-500">Photos</p>
            </div>
          </div>
        </div> */}

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            {/* Navigation - Previous */}
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Navigation - Next */}
            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Image container */}
            <div
              className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activityImages[selectedIndex]}
                alt={`Activity ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedIndex + 1} / {activityImages.length}
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-2 bg-black/30 backdrop-blur-sm p-2 rounded-xl max-w-[80vw] overflow-x-auto">
              {activityImages.map((img, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === selectedIndex
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-black/50 scale-110'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
