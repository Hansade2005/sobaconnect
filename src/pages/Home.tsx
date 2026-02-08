import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, BookOpen, Lightbulb, Globe, Music } from 'lucide-react';
import { getUpcomingEvents, getBlogPosts } from '../lib/api';

interface Event {
  id?: string;
  event_name?: string;
  event_date?: string;
  location?: string;
}

interface BlogPost {
  id?: string;
  title?: string;
  excerpt?: string;
  featured_image_url?: string;
  published_date?: string;
}

const Home: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const events = await getUpcomingEvents();
        const posts = await getBlogPosts();
        if (Array.isArray(events)) setUpcomingEvents(events.slice(0, 3));
        if (Array.isArray(posts)) setBlogPosts(posts.slice(0, 3));
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  const programs = [
    { icon: DollarIcon, title: 'Poverty Alleviation', description: 'Economic support and financial literacy programs' },
    { icon: Users, title: 'Youth Development', description: 'Mentorship and leadership training for young professionals' },
    { icon: Lightbulb, title: 'Skills Development', description: 'Employment preparation and capacity building workshops' },
    { icon: Globe, title: 'Newcomer Support', description: 'Integration assistance and community navigation' },
    { icon: Heart, title: 'Mental Wellbeing', description: 'Mental health awareness and peer support activities' },
    { icon: BookOpen, title: 'Education', description: 'Academic support and lifelong learning initiatives' },
    { icon: Target, title: 'Civic Engagement', description: 'Community outreach and volunteer programs' },
    { icon: Music, title: 'Cultural Preservation', description: 'Heritage education and intercultural dialogue' },
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Program Participant',
      quote: 'SOBA Calgary completely transformed my life through their mentorship program. Highly recommend!',
      avatar: '/5.jpeg'
    },
    {
      name: 'James Okafor',
      role: 'Community Member',
      quote: 'The skills training helped me land my dream job. Forever grateful to this amazing organization.',
      avatar: '/6.jpeg'
    },
    {
      name: 'Maria Gonzalez',
      role: 'Volunteer',
      quote: 'Being part of SOBA Calgary has shown me the true meaning of community service.',
      avatar: '/7.jpeg'
    },
  ];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Strengthen Your <span className="gradient-text">Community</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                SOBA Calgary is dedicated to improving lives through poverty reduction, youth development, skills training, and community engagement programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programs" className="btn-primary flex items-center justify-center gap-2">
                  Explore Programs <ArrowRight size={20} />
                </Link>
                <Link to="/donate" className="btn-outline flex items-center justify-center gap-2">
                  Make a Donation <Heart size={20} />
                </Link>
              </div>

            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-600/5 rounded-2xl blur-3xl"></div>
              <img
                src="/7.jpeg"
                alt="SOBA Calgary Community"
                className="rounded-2xl border border-gray-700 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-6">
            To strengthen communities by supporting individuals, families, and youth through poverty reduction initiatives, education, mentorship, skills development, and community engagement programs.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Making real impact in 8 key community focus areas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="card group hover:shadow-xl hover:shadow-red-600/20">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/40 transition-colors">
                    <Icon size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 text-sm">{program.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/programs" className="btn-primary inline-flex items-center gap-2">
              View All Programs <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Join us for community building and learning opportunities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 animate-fade">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <div key={index} className="card">
                  <div className="w-full h-40 bg-gradient-to-br from-red-600/20 to-red-600/5 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-600 text-4xl">📅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{event.event_name}</h3>
                  <p className="text-sm text-gray-400 mb-1">📅 {event.event_date}</p>
                  <p className="text-sm text-gray-400 mb-4">📍 {event.location}</p>
                  <Link to="/events" className="text-red-600 hover:text-red-500 text-sm font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-400">No events available at the moment.</p>
              </div>
            )}
          </div>
          <div className="text-center mt-12">
            <Link to="/events" className="btn-primary inline-flex items-center gap-2">
              View All Events <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Latest News</h2>
            <p className="section-subtitle">Updates and stories from our community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 animate-fade">
            {blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <div key={index} className="card overflow-hidden">
                  {post.featured_image_url && (
                    <img src={post.featured_image_url} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  )}
                  <p className="text-xs text-red-600 font-semibold mb-2 uppercase">📰 News</p>
                  <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.published_date}</span>
                    <Link to="/news" className="text-red-600 hover:text-red-500">Read</Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-400">No news available at the moment.</p>
              </div>
            )}
          </div>
          <div className="text-center mt-12">
            <Link to="/news" className="btn-primary inline-flex items-center gap-2">
              View All News <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">Hear from our community members and beneficiaries</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 animate-fade">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-4 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-300 mb-8">Join our community and help us create lasting change in Calgary.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="btn-primary">
              Become a Member
            </Link>
            <Link to="/donate" className="btn-secondary">
              Support Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default Home;
