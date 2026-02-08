import React, { useState } from 'react';
import { Heart, Zap } from 'lucide-react';
import { submitDonation } from '../lib/api';

const Donate: React.FC = () => {
  const [donationData, setDonationData] = useState({
    name: '',
    email: '',
    amount: '',
    type: 'one_time',
    customAmount: '',
    recurringType: 'monthly',
    isAnonymous: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAmountSelect = (amount: string) => {
    setDonationData(prev => ({
      ...prev,
      amount,
      customAmount: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const finalAmount = donationData.customAmount || donationData.amount;
      await submitDonation(donationData.name, donationData.email, parseFloat(finalAmount), donationData.type);
      setSubmitted(true);
      setTimeout(() => {
        setDonationData({
          name: '',
          email: '',
          amount: '',
          type: 'one_time',
          customAmount: '',
          recurringType: 'monthly',
          isAnonymous: false,
          message: ''
        });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Donation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const presetAmounts = ['$25', '$50', '$100', '$250'];

  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Make a Difference</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your generous donation helps us empower the Calgary community
          </p>
          <div className="flex items-center justify-center gap-2 text-red-400">
            <Heart className="animate-pulse" size={24} />
            <span className="font-semibold">Every contribution counts</span>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Donation Form */}
            <div className="card">
              <h2 className="section-title mb-6">Your Donation</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Donation Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setDonationData(prev => ({ ...prev, type: 'one_time' }))}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          donationData.type === 'one_time'
                            ? 'border-red-600 bg-red-600/10 text-red-400'
                            : 'border-gray-600 text-gray-400 hover:border-gray-500'
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationData(prev => ({ ...prev, type: 'recurring' }))}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          donationData.type === 'recurring'
                            ? 'border-red-600 bg-red-600/10 text-red-400'
                            : 'border-gray-600 text-gray-400 hover:border-gray-500'
                        }`}
                      >
                        Recurring
                      </button>
                    </div>
                  </div>

                  {/* Recurring Type */}
                  {donationData.type === 'recurring' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Frequency
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setDonationData(prev => ({ ...prev, recurringType: 'monthly' }))}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            donationData.recurringType === 'monthly'
                              ? 'border-red-600 bg-red-600/10 text-red-400'
                              : 'border-gray-600 text-gray-400 hover:border-gray-500'
                          }`}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          onClick={() => setDonationData(prev => ({ ...prev, recurringType: 'annual' }))}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            donationData.recurringType === 'annual'
                              ? 'border-red-600 bg-red-600/10 text-red-400'
                              : 'border-gray-600 text-gray-400 hover:border-gray-500'
                          }`}
                        >
                          Annual
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount.replace('$', ''))}
                          className={`p-4 rounded-lg border-2 transition-all text-center ${
                            donationData.amount === amount.replace('$', '')
                              ? 'border-red-600 bg-red-600/10 text-red-400'
                              : 'border-gray-600 text-gray-400 hover:border-gray-500'
                          }`}
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="number"
                        placeholder="Other amount"
                        value={donationData.customAmount}
                        onChange={(e) => setDonationData(prev => ({
                          ...prev,
                          customAmount: e.target.value,
                          amount: ''
                        }))}
                        className="form-input pl-8"
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Personal Information
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={donationData.name}
                      onChange={(e) => setDonationData(prev => ({ ...prev, name: e.target.value }))}
                      className="form-input"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={donationData.email}
                      onChange={(e) => setDonationData(prev => ({ ...prev, email: e.target.value }))}
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Anonymous Donation */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={donationData.isAnonymous}
                      onChange={(e) => setDonationData(prev => ({ ...prev, isAnonymous: e.target.checked }))}
                      className="mr-3"
                    />
                    <label htmlFor="anonymous" className="text-sm text-gray-300">
                      Make this donation anonymous
                    </label>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Message (Optional)
                    </label>
                    <textarea
                      placeholder="Leave a message with your donation..."
                      value={donationData.message}
                      onChange={(e) => setDonationData(prev => ({ ...prev, message: e.target.value }))}
                      className="form-textarea"
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || (!donationData.amount && !donationData.customAmount)}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <Zap className="animate-spin" size={20} />
                    ) : (
                      <Heart size={20} />
                    )}
                    {loading ? 'Processing...' : `Donate ${donationData.amount || donationData.customAmount ? `$${donationData.amount || donationData.customAmount}` : ''}`}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-4">
                    Your generous donation has been received. A tax receipt will be emailed to you shortly.
                  </p>
                  <p className="text-sm text-gray-400">
                    Your support helps us continue our mission to empower the Calgary community.
                  </p>
                </div>
              )}
            </div>

            {/* Impact Information */}
            <div className="space-y-6">
              <div className="card bg-gradient-to-br from-red-600/10 to-red-600/5 border-red-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Heart size={16} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">$25</p>
                      <p className="text-sm text-gray-400">Provides school supplies for 1 child</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Heart size={16} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">$50</p>
                      <p className="text-sm text-gray-400">Funds mentorship program for 1 youth</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Heart size={16} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">$100</p>
                      <p className="text-sm text-gray-400">Supports 1 newcomer family orientation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Heart size={16} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">$250</p>
                      <p className="text-sm text-gray-400">Funds skills development workshop</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4">Tax Benefits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>All donations are tax-deductible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Tax receipts issued automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>100% of funds go to programs</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-gradient-to-br from-blue-600/10 to-blue-600/5 border-blue-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">Other Ways to Help</h3>
                <div className="space-y-3">
                  <Link to="/volunteer" className="w-full btn-secondary block text-center">
                    Become a Volunteer
                  </Link>
                  <Link to="/partnerships" className="w-full btn-secondary block text-center">
                    Corporate Partnerships
                  </Link>
                  <Link to="/fundraise" className="w-full btn-secondary block text-center">
                    Fundraise for SOBA Calgary
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;