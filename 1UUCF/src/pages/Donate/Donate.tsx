import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, CreditCard, Building2, Wallet, IndianRupee, QrCode } from 'lucide-react';
import Footer from '../../components/Footer';
import { footerNavigation, contactInfo } from '../../data/mockData';

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    pan: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const bankDetails = [
    {
      bankName: 'IDFC FIRST',
      branch: 'BANGALORE - ELECTRONIC CITY BRANCH',
      accountName: 'UNWEANED CHILD CARE FOUNDATION',
      accountNo: '10108793980',
      ifsc: 'IDFB0080189',
      swiftCode: 'IDFBINBBMUM',
      panCard: 'AABTU2304C',
      certificates: ['Unweaned-12A_10AC', '80G_Certificate']
    },
    {
      bankName: 'RBL Bank',
      branch: 'HRBR -LAYOUT BRANCH',
      accountName: 'UNWEANED CHILD CARE FOUNDATION',
      accountNo: '409002178753',
      ifsc: 'RATN0000369',
      panCard: 'AABTU2304C'
    }
  ];

  const upiDetails = {
    name: 'UNWEANED CHILD CARE FOUNDATION',
    handle: '9986645529161@paytm'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6646467/pexels-photo-6646467.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Support Our Cause</h1>
          <div className="flex items-center justify-center space-x-3 text-white">
            <a href="/" className="text-white hover:text-orange-500 transition-colors">Home</a>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Donate</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heart className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your generous donation helps us continue our mission of empowering communities and changing lives. Every contribution, no matter how small, makes a significant impact in creating positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Donation Details</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PAN Card Number
                  </label>
                  <input
                    type="text"
                    value={formData.pan}
                    onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Make Donation
                </button>
              </form>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-8">
            {/* IDFC FIRST Bank */}
            {bankDetails.map((bank, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-orange-500" />
                  <h3 className="text-2xl font-bold">{bank.bankName}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Account Name</p>
                    <p className="font-medium">{bank.accountName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Branch</p>
                    <p className="font-medium">{bank.branch}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="font-medium">{bank.accountNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">IFSC Code</p>
                    <p className="font-medium">{bank.ifsc}</p>
                  </div>
                  {bank.swiftCode && (
                    <div>
                      <p className="text-sm text-gray-500">SWIFT Code</p>
                      <p className="font-medium">{bank.swiftCode}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500">PAN Card</p>
                    <p className="font-medium">{bank.panCard}</p>
                  </div>
                  {bank.certificates && (
                    <div>
                      <p className="text-sm text-gray-500">Certificates</p>
                      <ul className="list-disc list-inside">
                        {bank.certificates.map((cert, i) => (
                          <li key={i} className="font-medium">{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* UPI Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <QrCode className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold">UPI Payment</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{upiDetails.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">UPI Handle</p>
                  <p className="font-medium">{upiDetails.handle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer 
        logo="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
        contactInfo={contactInfo}
        navigation={footerNavigation}
      />
    </div>
  );
};

export default Donate;