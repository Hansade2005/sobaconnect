import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900/80 backdrop-blur-md border-b border-gray-800 z-50 animate-slide-down">
      {/* Top bar with contact info */}
      <div className="bg-slate-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-xs sm:text-sm text-gray-400">
          <div className="flex gap-4">
            <a href="tel:+14035551234" className="flex items-center gap-2 hover:text-red-600 transition-colors">
              <Phone size={14} /> +1 (403) 555-1234
            </a>
            <a href="mailto:sobacalgary@gmail.com" className="flex items-center gap-2 hover:text-red-600 transition-colors hidden sm:flex">
              <Mail size={14} /> sobacalgary@gmail.com
            </a>
          </div>
          <div className="text-gray-500">SOBA Calgary - Community First</div>
        </div>
      </div>

      {/* Main header */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg">SOBA Calgary</h1>
              <p className="text-gray-400 text-xs">Community Network</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-red-600 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-red-600 transition-colors text-sm font-medium">
              About
            </Link>
            <Link to="/programs" className="text-gray-300 hover:text-red-600 transition-colors text-sm font-medium">
              Programs
            </Link>
            <Link to="/events" className="text-gray-300 hover:text-red-600 transition-colors text-sm font-medium">
              Events
            </Link>
            <Link to="/news" className="text-gray-300 hover:text-red-600 transition-colors text-sm font-medium">
              News
            </Link>
            <Link to="/gallery" className="text-gray-300 hover:text-red-600 transition-colors text-sm font-medium">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-red-600 transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/membership" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors">
              Join
            </Link>
            <Link to="/donate" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-slide-down">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-red-600 hover:bg-slate-800 rounded-lg transition-colors">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-red-600 hover:bg-slate-800 rounded-lg transition-colors">
              About
            </Link>
            <Link to="/programs" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-red-600 hover:bg-slate-800 rounded-lg transition-colors">
              Programs
            </Link>
            <Link to="/events" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-red-600 hover:bg-slate-800 rounded-lg transition-colors">
              Events
            </Link>
            <Link to="/news" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-red-600 hover:bg-slate-800 rounded-lg transition-colors">
              News
            </Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-red-600 hover:bg-slate-800 rounded-lg transition-colors">
              Gallery
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-red-600 hover:bg-slate-800 rounded-lg transition-colors">
              Contact
            </Link>
            <div className="flex gap-2 pt-2">
              <Link to="/membership" onClick={() => setIsMenuOpen(false)} className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors text-center">
                Join
              </Link>
              <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors text-center">
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
