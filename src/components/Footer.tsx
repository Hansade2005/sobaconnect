import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import { subscribeNewsletter } from '../lib/api';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('loading');
    try {
      await subscribeNewsletter(email);
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-950 to-black border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-gray-400">Subscribe to our newsletter for updates on programs, events, and community impact.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input flex-1"
                required
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {subscribeStatus === 'success' && <p className="col-span-full text-green-400">Thank you for subscribing!</p>}
            {subscribeStatus === 'error' && <p className="col-span-full text-red-400">Subscription failed. Please try again.</p>}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h4 className="text-white font-bold text-lg">SOBA Calgary</h4>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Strengthening communities through poverty reduction, youth development, and community engagement.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-red-600 transition-colors">Programs</Link></li>
              <li><Link to="/events" className="hover:text-red-600 transition-colors">Events</Link></li>
              <li><Link to="/news" className="hover:text-red-600 transition-colors">News & Blog</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/membership" className="hover:text-red-600 transition-colors">Become a Member</Link></li>
              <li><Link to="/donate" className="hover:text-red-600 transition-colors">Make a Donation</Link></li>
              <li><Link to="/gallery" className="hover:text-red-600 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-3">
                <Phone size={16} className="flex-shrink-0 text-red-600 mt-1" />
                <span>+1 (403) 555-1234</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="flex-shrink-0 text-red-600 mt-1" />
                <span>sobacalgary@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="flex-shrink-0 text-red-600 mt-1" />
                <span>Calgary, Alberta<br />Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-red-600" /> for Calgary Community
            </p>
            <p>&copy; 2026 SOBA Calgary. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-red-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
