import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
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

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-gray-300">Join us for community events, workshops, and learning opportunities</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
    </div>
  );
};

export default Events;