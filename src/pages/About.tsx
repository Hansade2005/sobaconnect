import React from 'react';
import { Users, Target, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  const leadershipTeam = [
    { name: 'Ngwesse Ewane', position: 'President', image: 'https://api.a0.dev/assets/image?text=NE&aspect=1:1&seed=ngwesse' },
    { name: 'Obi Elvis', position: 'Secretary', image: 'https://api.a0.dev/assets/image?text=OE&aspect=1:1&seed=obi' },
    { name: 'Ekane Ngulle', position: 'Financial Secretary', image: 'https://api.a0.dev/assets/image?text=EN&aspect=1:1&seed=ekane' },
    { name: 'Ateba Macossendi', position: 'Public Relations Officer', image: 'https://api.a0.dev/assets/image?text=AM&aspect=1:1&seed=ateba' },
  ];

  const values = [
    { icon: Heart, title: 'Community First', description: 'We prioritize the well-being of the communities we serve' },
    { icon: Shield, title: 'Integrity', description: 'We operate with honesty, transparency, and ethical standards' },
    { icon: Users, title: 'Inclusion', description: 'We welcome and empower people from all backgrounds' },
    { icon: Target, title: 'Excellence', description: 'We deliver quality programs with measurable impact' },
  ];

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About SOBA Calgary</h1>
          <p className="text-xl text-gray-300">Building stronger communities through empowerment, education, and engagement</p>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 rounded-xl border border-gray-800 p-8 mb-12">
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-300 mb-4">
              SOBA Calgary (Sasse Old Boys Association Network) is a community-based, non-governmental, non-profit organization committed to improving the social, economic, and overall well-being of individuals and families in Calgary and beyond.
            </p>
            <p className="text-gray-300 mb-4">
              Founded on principles of community solidarity and mutual support, SOBA Calgary has grown into a vital force for positive change, offering diverse programs and services that address the real needs of our community members.
            </p>
            <p className="text-gray-300">
              We are volunteer-led and focused on delivering inclusive, community-driven programs that address social and economic issues and promote long-term resilience and empowerment.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="section-title text-2xl mb-4">Mission Statement</h3>
              <p className="text-gray-300">
                To strengthen communities by supporting individuals, families, and youth through poverty reduction initiatives, education, mentorship, skills development, and community engagement programs.
              </p>
            </div>
            <div className="card">
              <h3 className="section-title text-2xl mb-4">Vision</h3>
              <p className="text-gray-300">
                A vibrant, inclusive community where all individuals and families have access to opportunities for economic stability, education, personal growth, and meaningful participation in civic life.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h2 className="section-title text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="card text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="card text-center">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-red-600 font-semibold">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-8">Governance & Accountability</h2>
          <div className="card">
            <p className="text-gray-300 mb-4">
              SOBA Calgary is governed by a volunteer executive and committee structure that provides strategic direction, financial oversight, and accountability.
            </p>
            <p className="text-gray-300 mb-4">
              The organization operates with documented policies, ethical standards, and transparent decision-making processes to ensure responsible stewardship of public and grant funding.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-4">Our Commitment</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Transparent financial reporting and regular audits</li>
              <li>✓ Adherence to ethical standards and best practices</li>
              <li>✓ Regular community feedback and evaluation</li>
              <li>✓ Compliance with all regulatory requirements</li>
              <li>✓ Responsible stewardship of all funding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-300">Families Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-300">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">8</div>
              <p className="text-gray-300">Program Areas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">$$$</div>
              <p className="text-gray-300">Community Investment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
