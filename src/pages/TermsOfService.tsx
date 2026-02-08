import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-850 border-b border-gray-800 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <FileText className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last Updated: February 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Use License */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
            <div className="space-y-4 text-gray-300">
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on SOBA Calgary's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose, or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>
          </section>

          {/* Membership */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Membership Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p className="font-semibold text-white">Membership Fee:</p>
              <p>Annual membership is $50 CAD. Payment is non-refundable. Membership renews automatically annually unless cancelled.</p>
              
              <p className="font-semibold text-white mt-4">Member Responsibilities:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Maintain accurate and current member profile information</li>
                <li>Comply with all organizational policies and guidelines</li>
                <li>Respect the rights and dignity of other members</li>
                <li>Use the member directory only for SOBA-approved purposes</li>
              </ul>
            </div>
          </section>

          {/* Donations */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Donations</h2>
            <div className="space-y-4 text-gray-300">
              <p>All donations to SOBA Calgary are voluntary and non-refundable. By making a donation, you acknowledge that:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Your donation will be used for the charitable purposes of SOBA Calgary</li>
                <li>You are authorized to make the donation with the payment method provided</li>
                <li>You will receive a tax receipt if SOBA Calgary obtains charitable status</li>
              </ul>
            </div>
          </section>

          {/* Events */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Event Registration & Attendance</h2>
            <div className="space-y-4 text-gray-300">
              <p>Event registrations are binding. Cancellations must be made at least 7 days before the event for refunds. SOBA Calgary reserves the right to cancel or reschedule events at any time and will provide reasonable notice.</p>
              <p className="mt-4">By registering for an event, you agree to abide by the code of conduct and any specific event guidelines provided.</p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              Unless otherwise stated, SOBA Calgary owns the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this for personal use subject to restrictions set in these terms and conditions.
            </p>
          </section>

          {/* User Content */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">7. User-Generated Content</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In these terms and conditions, "User-Generated Content" shall mean any audio, video, text, images or other material you choose to display on this website. By displaying User-Generated Content, you grant SOBA Calgary a non-exclusive, worldwide, irrevocable license to reproduce, adapt, modify, publish and distribute it in any media.
            </p>
            <p className="text-gray-300 leading-relaxed">
              User-Generated Content must not be illegal or unlawful, must not infringe any third party's rights, and must not be offensive or abusive.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              The information on this website is provided on an "as is" basis without any representations or warranties, express or implied. SOBA Calgary makes no representations or warranties in relation to this website or the information and materials provided.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="bg-red-600/20 border border-red-600/50 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Disclaimers</h2>
            <div className="space-y-4 text-gray-300">
              <p>SOBA Calgary will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special or consequential loss, or for any business losses, loss of revenue, income, profits or anticipated savings.</p>
              <p>The information provided on this website is for informational purposes only and should not be relied upon as professional advice.</p>
            </div>
          </section>

          {/* Contact for Violations */}
          <section className="bg-slate-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">10. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you believe that any Content on this website violates your intellectual property rights or these Terms of Service, please contact us immediately:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-semibold">Email:</span> sobacalgary@gmail.com</p>
              <p><span className="font-semibold">Phone:</span> +1 (403) 555-1234</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
