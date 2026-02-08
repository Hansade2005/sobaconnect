import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-850 border-b border-gray-800 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: February 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              SOBA Calgary ("we," "our," or "us") operates the SOBA Calgary website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          {/* Data Collection */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Information Collection and Use</h2>
            <div className="space-y-4 text-gray-300">
              <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Personal Data:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Usage Data:</h3>
                <p>We may also collect information on how the service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</p>
              </div>
            </div>
          </section>

          {/* PIPEDA Compliance */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">PIPEDA Compliance</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SOBA Calgary is committed to complying with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA). We collect, use, and disclose personal information only for purposes that a reasonable person would consider appropriate.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>You have the right to request access to your personal information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>You have the right to request correction of inaccurate information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>You have the right to request deletion of your information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>You can opt out of marketing communications at any time</span>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Security of Data</h2>
            <p className="text-gray-300 leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              SOBA Calgary will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-red-600/20 border border-red-600/50 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-semibold">Email:</span> sobacalgary@gmail.com</p>
              <p><span className="font-semibold">Phone:</span> +1 (403) 555-1234</p>
              <p><span className="font-semibold">Address:</span> Calgary, Alberta, Canada</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
