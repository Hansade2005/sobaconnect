import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with the SOBA Calgary team</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400 mb-2">+1 (403) 555-1234</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM</p>
            </div>

            {/* Email */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 mb-2">sobacalgary@gmail.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>

            {/* Address */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400 mb-2">Calgary, Alberta</p>
              <p className="text-sm text-gray-500">Canada</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="card">
              <h2 className="section-title mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  rows={5}
                  required
                />
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
                {submitted && <p className="text-green-400 text-center">Thank you! We'll get back to you soon.</p>}
              </form>
            </div>

            {/* Map and Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-red-600/10 to-red-600/5 border-red-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Response</h3>
                <p className="text-gray-300 mb-4">
                  We're committed to responding to all inquiries within 24 hours during business days.
                </p>
                <p className="text-sm text-gray-400">
                  For urgent matters, please call us directly during office hours.
                </p>
              </div>

              {/* Embedded Map */}
              <div className="card overflow-hidden">
                <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border border-gray-700">
                  <p className="text-gray-400 text-center">📍 Calgary, Alberta<br />Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;