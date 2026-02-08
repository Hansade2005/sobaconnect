import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, title: 'Community Workshop', category: 'Events', image: 'https://api.a0.dev/assets/image?text=Community%20Workshop&aspect=1:1&seed=gal1' },
    { id: 2, title: 'Youth Mentorship', category: 'Programs', image: 'https://api.a0.dev/assets/image?text=Youth%20Mentorship&aspect=1:1&seed=gal2' },
    { id: 3, title: 'Volunteer Day', category: 'Volunteers', image: 'https://api.a0.dev/assets/image?text=Volunteer%20Day&aspect=1:1&seed=gal3' },
    { id: 4, title: 'Skills Training', category: 'Programs', image: 'https://api.a0.dev/assets/image?text=Skills%20Training&aspect=1:1&seed=gal4' },
    { id: 5, title: 'Community Gathering', category: 'Events', image: 'https://api.a0.dev/assets/image?text=Community%20Gathering&aspect=1:1&seed=gal5' },
    { id: 6, title: 'Cultural Event', category: 'Culture', image: 'https://api.a0.dev/assets/image?text=Cultural%20Event&aspect=1:1&seed=gal6' },
    { id: 7, title: 'Leadership Program', category: 'Programs', image: 'https://api.a0.dev/assets/image?text=Leadership%20Program&aspect=1:1&seed=gal7' },
    { id: 8, title: 'Impact Story', category: 'Success', image: 'https://api.a0.dev/assets/image?text=Impact%20Story&aspect=1:1&seed=gal8' },
  ];

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-300">Highlights from our community events and programs</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-700 hover:border-red-600 transition-all"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-red-400 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={32} className="text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-4xl max-h-[80vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;