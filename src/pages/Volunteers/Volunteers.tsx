import React, { useEffect } from 'react';
import { ArrowRight, Heart, Users, Calendar, MapPin, CheckCircle, Send } from 'lucide-react';
import Footer from '../../components/Footer';
import { footerNavigation, contactInfo } from '../../data/mockData';

const Volunteers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Join Our Volunteer Team</h1>
          <div className="flex items-center justify-center space-x-3 text-white">
            <a href="/" className="text-white hover:text-orange-500 transition-colors">Home</a>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Volunteers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heart className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Join Unweaned Child Care Foundation and share your ideas, thoughts and experience to bring smiles to underprivileged children and provide support to those who need a helping hand towards health progress and economic progress.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Program Development",
              description: "Get involved in developing support programs that make a real difference in communities."
            },
            {
              icon: Calendar,
              title: "Community Outreach",
              description: "Help communicate our services to families and prioritize community needs."
            },
            {
              icon: Heart,
              title: "Fundraising",
              description: "Contribute creative fundraising ideas and help organize successful campaigns."
            }
          ].map((opportunity, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <opportunity.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{opportunity.title}</h3>
              <p className="text-gray-600">{opportunity.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-orange-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Make a meaningful impact in children's lives",
              "Gain valuable experience in social work",
              "Be part of a passionate community",
              "Flexible time commitments",
              "Professional development opportunities",
              "Network with like-minded individuals"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Become a Volunteer</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="community">Community Outreach</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about yourself and why you'd like to volunteer..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </div>
            </form>
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

export default Volunteers;