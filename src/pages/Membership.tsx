import React, { useState } from 'react';
import { Check, Users } from 'lucide-react';
import { registerMember } from '../lib/api';

const Membership: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    sasse_graduation_year: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await registerMember({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        sasse_graduation_year: formData.sasse_graduation_year ? parseInt(formData.sasse_graduation_year) : undefined,
      });
      setSubmitted(true);
      setFormData({ full_name: '', email: '', phone: '', address: '', sasse_graduation_year: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
    setSubmitting(false);
  };

  const benefits = [
    'Access to exclusive member events',
    'Networking opportunities',
    'Priority registration for programs',
    'Member directory access',
    'Email updates and newsletters',
    'Community forum access',
    'Volunteer opportunities',
    'Mentorship programs',
  ];

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join SOBA Calgary</h1>
          <p className="text-xl text-gray-300">Become part of our community network</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Membership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mb-3">
                  <Check size={20} className="text-red-600" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Membership Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-white mb-2">Annual Fee</h3>
              <p className="text-2xl font-bold text-red-600">$50 CAD</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-white mb-2">Duration</h3>
              <p className="text-gray-400">1 Year</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-white mb-2">Members</h3>
              <p className="text-red-600 font-semibold">500+</p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="card">
            <h2 className="section-title mb-6">Registration Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="form-input"
              />
              <input
                type="number"
                placeholder="Sasse Graduation Year (Optional)"
                value={formData.sasse_graduation_year}
                onChange={(e) => setFormData({ ...formData, sasse_graduation_year: e.target.value })}
                className="form-input"
                min="1950"
                max={new Date().getFullYear()}
              />

              <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-4 mb-4">
                <p className="text-gray-300 text-sm">
                  ℹ️ Membership fee is $50 CAD annually. You'll receive a confirmation email with payment instructions.
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting || submitted}
                className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Users size={20} />
                {submitted ? 'Welcome to SOBA Calgary!' : submitting ? 'Processing...' : 'Complete Registration'}
              </button>

              {submitted && (
                <p className="text-green-400 text-center">Thank you for registering! Check your email for next steps.</p>
              )}
            </form>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="card">
                <h4 className="font-semibold text-white mb-2">When is the membership fee due?</h4>
                <p className="text-gray-400">After submitting your registration, you'll receive payment instructions via email with multiple payment options including credit card, e-transfer, and bank transfer.</p>
              </div>
              <div className="card">
                <h4 className="font-semibold text-white mb-2">Can I renew my membership?</h4>
                <p className="text-gray-400">Yes! Memberships renew annually. We'll send you a reminder before your membership expires.</p>
              </div>
              <div className="card">
                <h4 className="font-semibold text-white mb-2">What if I have more questions?</h4>
                <p className="text-gray-400">Contact us at sobacalgary@gmail.com or call +1 (403) 555-1234 and we'll be happy to help!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;