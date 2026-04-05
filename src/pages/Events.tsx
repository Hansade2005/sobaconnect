import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, X } from 'lucide-react';
import { getUpcomingEvents, registerForEvent } from '../lib/api';

interface Event {
  id?: string;
  event_name?: string;
  event_date?: string;
  event_time?: string;
  location?: string;
  description?: string;
  capacity?: number;
  registered_count?: number;
  event_fee?: number;
  status?: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registrationForm, setRegistrationForm] = useState({ name: '', email: '' });
  const [registering, setRegistering] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await getUpcomingEvents();
        if (Array.isArray(data)) setEvents(data);
      } catch (error) {
        console.error('Error loading events:', error);
      }
      setLoading(false);
    };
    loadEvents();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent?.id) return;

    setRegistering(true);
    try {
      await registerForEvent(selectedEvent.id, registrationForm.name, registrationForm.email);
      alert('Registration successful! Thank you for registering.');
      setSelectedEvent(null);
      setRegistrationForm({ name: '', email: '' });
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
    setRegistering(false);
  };

  const feastDayPhotos = [
    '/team/events/IMG_5493.jpg',
    '/team/events/IMG_5497.jpg',
    '/team/events/IMG_5498.jpg',
    '/team/events/IMG_5500.jpg',
    '/team/events/IMG_5501.jpg',
    '/team/events/IMG_5505.jpg',
    '/team/events/IMG_5506.jpg',
    '/team/events/IMG_5507.jpg',
    '/team/events/IMG_5509.jpg',
    '/team/events/IMG_5511.jpg',
    '/team/events/IMG_5513.jpg',
    '/team/events/IMG_5517.jpg',
    '/team/events/IMG_5520.jpg',
  ];

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-gray-300">Join us for community events, workshops, and learning opportunities</p>
        </div>
      </section>

      {/* Featured Past Event - St. Joseph Feast Day */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">Recent Event</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Saint Joseph Feast Day Celebration</h2>
            <p className="text-gray-400 text-lg">March 1, 2026</p>
          </div>

          {/* Event Flyer */}
          <div className="flex justify-center mb-8">
            <img
              src="/stfeastday.jpeg"
              alt="St. Joseph Feast Day Celebration Flyer"
              className="w-full max-w-2xl rounded-xl border border-gray-700 shadow-2xl"
            />
          </div>

          <div className="card mb-8">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-red-600" />
                Sunday, March 1, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-red-600" />
                2:30 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-red-600" />
                St. Mother Teresa Syro Malabar, 3311 49 St SW, Calgary, AB
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                On March 1st 2026, members of SOBA Calgary, alongside their families and members of the wider community, gathered in a spirit of faith, unity, and brotherhood to celebrate the Feast of Saint Joseph, the patron saint of Sasse.
              </p>
              <p>
                The event brought together Sobans and their families, creating a warm and meaningful atmosphere that reflected the strong bonds within the Soban community. Though modest in size, the gathering was rich in purpose—serving as a reminder of our shared values, traditions, and enduring heritage.
              </p>
              <p>
                The celebration was marked by moments of reflection, prayer, and fellowship. A keynote address delivered during the event emphasized the importance of leadership, humility, and service—virtues embodied by Saint Joseph and deeply rooted in the Soban identity.
              </p>
              <p>
                Under the leadership of President Ngwesse Ewane, SOBA Calgary continues to foster a sense of belonging and community among its members, even in diaspora. Events like this not only strengthen internal ties but also showcase the cultural and spiritual richness of Sasse tradition to the broader community.
              </p>
              <p>
                As we honor Saint Joseph, we are reminded of his guiding presence in our lives and the values he represents—faith, resilience, and quiet strength.
              </p>
              <p className="text-white font-semibold italic">
                May Saint Joseph always remain near to guide us. Happy Feast Day, Sobans!
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                Highlights: Holy Mass Singing by SOBA | Grand Offertory Procession by SOBA | Reception Sponsored by SOBA
              </p>
            </div>
          </div>

          {/* Event Photo Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Event Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {feastDayPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-700 hover:border-red-600 transition-all"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo}
                    alt={`St. Joseph Feast Day - Photo ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading events...</p>
            </div>
          ) : events.length > 0 ? (
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="card group">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-600/20 to-red-600/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl">📅</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{event.event_name}</h3>
                      <div className="space-y-2 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-red-600" />
                          {event.event_date}
                        </div>
                        {event.event_time && (
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-red-600" />
                            {event.event_time}
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-red-600" />
                            {event.location}
                          </div>
                        )}
                        {event.capacity && (
                          <div className="flex items-center gap-2">
                            <Users size={16} className="text-red-600" />
                            Capacity: {event.registered_count}/{event.capacity}
                          </div>
                        )}
                      </div>
                      {event.description && (
                        <p className="text-gray-300 mb-4">{event.description}</p>
                      )}
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="text-red-600 hover:text-red-500 font-semibold flex items-center gap-2 transition-colors"
                      >
                        Register Now <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No upcoming events at the moment.</p>
              <p className="text-gray-500 mt-2">Check back soon for exciting community events!</p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl max-w-md w-full p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Register for Event</h2>
            <p className="text-gray-300 mb-6">{selectedEvent.event_name}</p>
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={registrationForm.name}
                onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={registrationForm.email}
                onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                className="form-input"
                required
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={registering}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-semibold"
                >
                  {registering ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Photo Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={32} className="text-white" />
          </button>
          <img
            src={selectedPhoto}
            alt="Event photo"
            className="max-w-4xl max-h-[80vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Events;