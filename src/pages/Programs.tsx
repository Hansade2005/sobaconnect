import React from 'react';
import { Heart, Target, Users, Globe, Lightbulb, BookOpen, Music, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: DollarSign,
      title: 'Poverty Alleviation & Economic Support',
      description: 'Providing access to information, referrals, skills training opportunities, and community resources aimed at reducing financial hardship and improving economic stability.',
      features: ['Financial literacy workshops', 'Job referral services', 'Emergency assistance programs', 'Economic opportunity access']
    },
    {
      icon: Users,
      title: 'Youth Development & Leadership',
      description: 'Empowering youth through mentorship, leadership development, educational support, and life-skills programming to prepare them for employment and civic participation.',
      features: ['Mentorship programs', 'Leadership training', 'Career guidance', 'Internship opportunities']
    },
    {
      icon: Lightbulb,
      title: 'Skills Development & Capacity Building',
      description: 'Delivering workshops and training programs that build employability, leadership capacity, and self-reliance among community members.',
      features: ['Professional development', 'Technical training', 'Communication skills', 'Entrepreneurship support']
    },
    {
      icon: Globe,
      title: 'Newcomer & Family Support',
      description: 'Supporting newcomers and families through orientation, referrals, community navigation, and access to essential social services to promote successful integration.',
      features: ['Integration support', 'Language assistance', 'Community orientation', 'Service referrals']
    },
    {
      icon: Heart,
      title: 'Mental Wellbeing & Social Inclusion',
      description: 'Promoting mental wellbeing and social inclusion through awareness sessions, peer engagement activities, and connection to appropriate community supports.',
      features: ['Mental health awareness', 'Peer support groups', 'Wellness activities', 'Resource connections']
    },
    {
      icon: BookOpen,
      title: 'Education & Lifelong Learning',
      description: 'Supporting academic success, career exploration, tutoring initiatives, and educational workshops that encourage lifelong learning.',
      features: ['Tutoring programs', 'Study groups', 'Educational workshops', 'Career exploration']
    },
    {
      icon: Target,
      title: 'Community Outreach & Civic Engagement',
      description: 'Encouraging active community participation through outreach initiatives, volunteerism, leadership development, and civic awareness activities.',
      features: ['Volunteer opportunities', 'Community events', 'Civic education', 'Leadership workshops']
    },
    {
      icon: Music,
      title: 'Cultural Preservation & Community Connection',
      description: 'Promoting cultural understanding, heritage education, and intercultural dialogue that strengthen belonging and community cohesion.',
      features: ['Cultural events', 'Heritage programs', 'Intercultural dialogue', 'Community gatherings']
    },
  ];

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h1>
          <p className="text-xl text-gray-300">8 comprehensive focus areas making real impact in the community</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="card group">
                  <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/40 transition-colors">
                    <Icon size={28} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Involved?</h2>
          <p className="text-lg text-gray-300 mb-8">Whether you want to participate in our programs, volunteer, or support our mission, we'd love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Contact Us</a>
            <a href="/donate" className="btn-secondary">Make a Donation</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;