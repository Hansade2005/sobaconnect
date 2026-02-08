import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, title: 'Community Workshop', category: 'Events', image: '/1.jpeg' },
    { id: 2, title: 'Youth Mentorship', category: 'Programs', image: '/2.jpeg' },
    { id: 3, title: 'Volunteer Day', category: 'Volunteers', image: '/3.jpeg' },
    { id: 4, title: 'Skills Training', category: 'Programs', image: '/4.jpeg' },
    { id: 5, title: 'Community Gathering', category: 'Events', image: '/5.jpeg' },
    { id: 6, title: 'Cultural Event', category: 'Culture', image: '/6.jpeg' },
    { id: 7, title: 'Leadership Program', category: 'Programs', image: '/7.jpeg' },
    { id: 8, title: 'Impact Story', category: 'Success', image: '/8.jpeg' },
    { id: 9, title: 'Community Outreach', category: 'Events', image: '/9.jpeg' },
    { id: 10, title: 'Youth Development', category: 'Programs', image: '/10.jpeg' },
    { id: 11, title: 'Cultural Celebration', category: 'Culture', image: '/11.jpeg' },
    { id: 12, title: 'Volunteer Training', category: 'Volunteers', image: '/12.jpeg' },
    { id: 13, title: 'Success Story', category: 'Success', image: '/13.jpeg' },
    { id: 14, title: 'Team Building', category: 'Events', image: '/14.jpeg' },
    { id: 15, title: 'Mentorship Session', category: 'Programs', image: '/15.jpeg' },
    { id: 16, title: 'Community Service', category: 'Volunteers', image: '/16.jpeg' },
    { id: 17, title: 'Cultural Heritage', category: 'Culture', image: '/17.jpeg' },
    { id: 18, title: 'Achievement Celebration', category: 'Success', image: '/18.jpeg' },
    { id: 19, title: 'Workshop Session', category: 'Programs', image: '/19.jpeg' },
    { id: 20, title: 'Community Event', category: 'Events', image: '/20.jpeg' },
    { id: 21, title: 'Volunteer Appreciation', category: 'Volunteers', image: '/21.jpeg' },
    { id: 22, title: 'Cultural Festival', category: 'Culture', image: '/22.jpeg' },
    { id: 23, title: 'Success Milestone', category: 'Success', image: '/23.jpeg' },
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

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SOBA CALGARY: LAUNCH PARTY</h2>
            <p className="text-xl text-gray-300">Watch our official launch event video</p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/Fn60tQ9Es2I"
              title="SOBA CALGARY: LAUNCH PARTY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
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