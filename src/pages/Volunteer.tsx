import React, { useState } from 'react';
import { Heart, Users, Calendar, CheckCircle, Send } from 'lucide-react';

const Volunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    availability: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const volunteerOpportunities = [
    {
      title: 'Event Support',
      description: 'Help organize and run community events, workshops, and cultural celebrations.',
      icon: <Calendar className="text-red-600" size={24} />,
      skills: ['Event Planning', 'Community Outreach', 'Logistics']
    },
    {
      title: 'Youth Mentorship',
      description: 'Guide and support young people in their personal and professional development.',
      icon: <Users className="text-red-600" size={24} />,
      skills: ['Mentoring', 'Youth Development', 'Communication']
    },
    {
      title: 'Administrative Support',
      description: 'Assist with office tasks, data entry, and program coordination.',
      icon: <CheckCircle className="text-red-600" size={24} />,
      skills: ['Organization', 'Data Management', 'Administration']
    }
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: [],
        availability: '',
        experience: '',
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
          <Heart className="mx-auto mb-6 text-red-600" size={64} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Become a Volunteer</h1>
          <p className="text-xl text-gray-300">Join our community and make a difference in Calgary</p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer diverse volunteer roles that allow you to contribute your skills and passion to our community programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{opportunity.title}</h3>
                <p className="text-gray-300 mb-4">{opportunity.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {opportunity.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h2 className="section-title mb-6">Apply to Volunteer</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
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

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                  required
                />

                <div>
                  <label className="block text-white font-medium mb-3">Areas of Interest</label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {volunteerOpportunities.map((opp, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(opp.title)}
                          onChange={() => handleInterestChange(opp.title)}
                          className="form-checkbox"
                        />
                        <span className="text-gray-300">{opp.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Availability</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="form-input"
                    required
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays-morning">Weekdays - Morning (9AM-12PM)</option>
                    <option value="weekdays-afternoon">Weekdays - Afternoon (1PM-5PM)</option>
                    <option value="weekdays-evening">Weekdays - Evening (6PM-9PM)</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Previous Volunteer Experience</label>
                  <textarea
                    placeholder="Tell us about your previous volunteer experience (optional)"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="form-textarea"
                    rows={3}
                  />
                </div>

                <textarea
                  placeholder="Tell us why you're interested in volunteering with SOBA Calgary"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  rows={4}
                  required
                />

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit Application
                </button>

                {submitted && (
                  <div className="text-center">
                    <p className="text-green-400 mb-2">Thank you for your interest!</p>
                    <p className="text-gray-400 text-sm">We'll review your application and get back to you within 3-5 business days.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Your Impact Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-300">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-300">People Helped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <p className="text-gray-300">Community Events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;