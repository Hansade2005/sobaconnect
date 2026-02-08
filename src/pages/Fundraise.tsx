import React, { useState } from 'react';
import { Target, Users, Calendar, Trophy, Heart, Send } from 'lucide-react';

const Fundraise: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fundraiserType: '',
    goal: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const fundraiserTypes = [
    {
      title: 'Personal Fundraising',
      description: 'Create your own fundraising campaign to support SOBA Calgary programs.',
      icon: <Heart className="text-red-600" size={24} />,
      benefits: ['Flexible goals', 'Personal story', 'Community support', 'Tax receipts']
    },
    {
      title: 'Event Fundraising',
      description: 'Organize community events like walks, runs, or charity dinners.',
      icon: <Calendar className="text-red-600" size={24} />,
      benefits: ['Team building', 'Community engagement', 'Fun activities', 'Measurable impact']
    },
    {
      title: 'Challenge Fundraising',
      description: 'Take on personal challenges like fitness goals or creative projects.',
      icon: <Target className="text-red-600" size={24} />,
      benefits: ['Motivational', 'Personal achievement', 'Social sharing', 'Inspiring others']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        fundraiserType: '',
        goal: '',
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
          <Trophy className="mx-auto mb-6 text-red-600" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fundraise for SOBA Calgary</h1>
          <p className="text-xl text-gray-300">Turn your passion into action and help build stronger communities</p>
        </div>
      </section>

      {/* Fundraiser Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Fundraising Options</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from various fundraising methods that match your interests and help SOBA Calgary serve our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {fundraiserTypes.map((fundraiser, index) => (
              <div key={index} className="card">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  {fundraiser.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{fundraiser.title}</h3>
                <p className="text-gray-300 mb-4">{fundraiser.description}</p>
                <div>
                  <h4 className="text-white font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {fundraiser.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-400 text-sm flex items-center">
                        <Users className="text-red-600 mr-2" size={12} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Fundraising Form */}
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h2 className="section-title mb-6">Start Your Fundraiser</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Type of Fundraiser</label>
                  <select
                    value={formData.fundraiserType}
                    onChange={(e) => setFormData({ ...formData, fundraiserType: e.target.value })}
                    className="form-input"
                    required
                  >
                    <option value="">Select fundraiser type</option>
                    <option value="personal">Personal Fundraising Campaign</option>
                    <option value="event">Community Event</option>
                    <option value="challenge">Personal Challenge</option>
                    <option value="other">Other Fundraising Idea</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-3">Fundraising Goal</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="form-input"
                      required
                    >
                      <option value="">Select goal amount</option>
                      <option value="500">$500</option>
                      <option value="1000">$1,000</option>
                      <option value="2500">$2,500</option>
                      <option value="5000">$5,000</option>
                      <option value="10000">$10,000+</option>
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
                      <option value="1-month">1 month</option>
                      <option value="3-months">3 months</option>
                      <option value="6-months">6 months</option>
                      <option value="1-year">1 year</option>
                    </select>
                  </div>
                </div>

                <textarea
                  placeholder="Tell us about your fundraising idea, why you're passionate about SOBA Calgary's mission, and how you plan to reach your goal"
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
                  Submit Fundraising Idea
                </button>

                {submitted && (
                  <div className="text-center">
                    <p className="text-green-400 mb-2">Thank you for your enthusiasm!</p>
                    <p className="text-gray-400 text-sm">We'll review your fundraising idea and get back to you within 2-3 business days with next steps.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fundraiser Success Stories</h2>
            <p className="text-xl text-gray-300">Inspiring stories from our community fundraisers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-br from-purple-600/10 to-purple-600/5 border-purple-600/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sarah's Marathon Challenge</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    "I ran a marathon to raise funds for SOBA Calgary's youth programs. The community support was incredible, and we exceeded our $5,000 goal!"
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-purple-400 font-medium">Raised: $6,200</span>
                    <span className="text-gray-400">Goal: $5,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-orange-600/10 to-orange-600/5 border-orange-600/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Community Bake Sale</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    "Our neighborhood organized a bake sale that brought together over 50 families. We raised $2,800 for SOBA Calgary's cultural programs."
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-orange-400 font-medium">Raised: $2,800</span>
                    <span className="text-gray-400">Goal: $2,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">How We Support Our Fundraisers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Guidance & Support</h3>
              <p className="text-gray-300">We provide templates, marketing materials, and ongoing support throughout your campaign.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Recognition</h3>
              <p className="text-gray-300">Top fundraisers receive special recognition and featured stories on our website and social media.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300">Join a network of passionate fundraisers working together to create positive change.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fundraise;