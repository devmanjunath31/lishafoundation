import { useState } from 'react';
import { X } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activityImages = [
    activity01, activity02, activity03, activity04, activity05,
    activity06, activity07, activity08, activity09, activity10,
    activity11, activity12, activity13, activity14, activity15,
    activity16, activity17, activity18, activity19, activity20,
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of transformation and community impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activityImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full pt-[100%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Activity ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
