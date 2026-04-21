import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    // Latest event photos (April 2026)
    { id: 201, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/event-new-1.jpeg' },
    { id: 202, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/event-new-2.jpeg' },
    { id: 203, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/event-new-3.jpeg' },
    { id: 204, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/event-new-4.jpeg' },
    { id: 205, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/event-new-5.jpeg' },
    { id: 206, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/event-new-6.jpeg' },
    { id: 207, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/event-new-7.jpeg' },
    // St. Joseph Feast Day - earlier photos
    { id: 101, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5493.jpg' },
    { id: 102, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5497.jpg' },
    { id: 103, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5498.jpg' },
    { id: 104, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5500.jpg' },
    { id: 105, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5501.jpg' },
    { id: 106, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5505.jpg' },
    { id: 107, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5506.jpg' },
    { id: 108, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5507.jpg' },
    { id: 109, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5509.jpg' },
    { id: 110, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5511.jpg' },
    { id: 111, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5513.jpg' },
    { id: 112, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5517.jpg' },
    { id: 113, title: 'St. Joseph Feast Day', category: 'St. Joseph Feast Day', image: '/team/events/IMG_5520.jpg' },
    // SOBA community photos
    { id: 24, title: 'SOBA Community Moment', category: 'Events', image: '/team/gallery/gallery-1.jpeg' },
    { id: 25, title: 'SOBA Fellowship', category: 'Events', image: '/team/gallery/gallery-2.jpeg' },
    { id: 26, title: 'SOBA Gathering', category: 'Events', image: '/team/gallery/gallery-3.jpeg' },
    { id: 27, title: 'SOBA Celebration', category: 'Events', image: '/team/gallery/gallery-4.jpeg' },
    { id: 28, title: 'SOBA Together', category: 'Events', image: '/team/gallery/gallery-5.jpeg' },
    { id: 29, title: 'SOBA Unity', category: 'Events', image: '/team/gallery/gallery-6.jpeg' },
    { id: 30, title: 'SOBA Highlights', category: 'Events', image: '/team/gallery/gallery-7.jpeg' },
    { id: 31, title: 'SOBA Memories', category: 'Events', image: '/team/gallery/gallery-8.jpeg' },
    // Other photos
    { id: 1, title: 'Community Workshop', category: 'Events', image: '/1.jpeg' },
    { id: 2, title: 'Youth Mentorship', category: 'Programs', image: '/2.jpeg' },
    { id: 5, title: 'Community Gathering', category: 'Events', image: '/5.jpeg' },
    { id: 6, title: 'Cultural Event', category: 'Culture', image: '/6.jpeg' },
    { id: 7, title: 'Leadership Program', category: 'Programs', image: '/7.jpeg' },
    { id: 9, title: 'Community Outreach', category: 'Events', image: '/9.jpeg' },
    { id: 11, title: 'Cultural Celebration', category: 'Culture', image: '/11.jpeg' },
    { id: 14, title: 'Team Building', category: 'Events', image: '/14.jpeg' },
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