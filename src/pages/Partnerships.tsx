import React, { useState } from 'react';
import { Handshake, Target, Award, Users, TrendingUp, Send } from 'lucide-react';

const Partnerships: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const partnershipTypes = [
    {
      title: 'Corporate Sponsorship',
      description: 'Financial support for our programs and events, with recognition opportunities.',
      icon: <Award className="text-red-600" size={24} />,
      benefits: ['Brand visibility', 'Community impact', 'Tax benefits', 'Networking opportunities']
    },
    {
      title: 'Employee Volunteering',
      description: 'Organized volunteer activities where your employees can contribute to our community.',
      icon: <Users className="text-red-600" size={24} />,
      benefits: ['Team building', 'CSR initiatives', 'Employee engagement', 'Community goodwill']
    },
    {
      title: 'In-Kind Donations',
      description: 'Contribute products, services, or expertise to support our community programs.',
      icon: <Handshake className="text-red-600" size={24} />,
      benefits: ['Cost-effective giving', 'Direct impact', 'Marketing opportunities', 'Business connections']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        partnershipType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Handshake className="mx-auto mb-6 text-red-600" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Corporate Partnerships</h1>
          <p className="text-xl text-gray-300">Partner with us to create lasting community impact</p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hands with SOBA Calgary to support our community initiatives and create meaningful change together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="card">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  {partnership.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{partnership.title}</h3>
                <p className="text-gray-300 mb-4">{partnership.description}</p>
                <div>
                  <h4 className="text-white font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-400 text-sm flex items-center">
                        <Target className="text-red-600 mr-2" size={12} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Form */}
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h2 className="section-title mb-6">Start a Partnership</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="form-input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Contact Person Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
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
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Type of Partnership</label>
                  <select
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="form-input"
                    required
                  >
                    <option value="">Select partnership type</option>
                    <option value="sponsorship">Corporate Sponsorship</option>
                    <option value="volunteering">Employee Volunteering Program</option>
                    <option value="in-kind">In-Kind Donations</option>
                    <option value="other">Other Partnership</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-3">Budget Range (Optional)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="form-input"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="over-25k">Over $25,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-3">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="form-input"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="long-term">Long-term partnership</option>
                    </select>
                  </div>
                </div>

                <textarea
                  placeholder="Tell us about your company and how you'd like to partner with SOBA Calgary"
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
                  Submit Partnership Inquiry
                </button>

                {submitted && (
                  <div className="text-center">
                    <p className="text-green-400 mb-2">Thank you for your interest!</p>
                    <p className="text-gray-400 text-sm">We'll review your partnership proposal and get back to you within 2-3 business days.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Success Stories</h2>
            <p className="text-xl text-gray-300">See how our corporate partners are making a difference</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-br from-green-600/10 to-green-600/5 border-green-600/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">TechCorp Solutions</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    "Partnering with SOBA Calgary has been incredibly rewarding. Our employee volunteering program has strengthened team bonds and given back to the community."
                  </p>
                  <p className="text-green-400 text-sm font-medium">- Sarah Johnson, HR Director</p>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-blue-600/10 to-blue-600/5 border-blue-600/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Calgary Bank Corp</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    "Our sponsorship of SOBA Calgary's youth programs has created lasting impact in our community while enhancing our corporate social responsibility goals."
                  </p>
                  <p className="text-blue-400 text-sm font-medium">- Michael Chen, Community Relations Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;