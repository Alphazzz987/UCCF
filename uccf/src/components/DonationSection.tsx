import React from 'react';
import { Heart } from 'lucide-react';

const DonationSection: React.FC = () => {
  return (
    <section id="donate" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart size={48} className="mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Your generous donation helps us continue our mission of empowering communities and changing lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:bg-opacity-20">
            <h3 className="text-2xl font-bold mb-2">$25</h3>
            <p className="mb-6">Provides educational materials for a child for one month</p>
            <a 
              href="#donate-25" 
              className="inline-block w-full py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Donate $25
            </a>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:bg-opacity-20 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-orange-600 px-4 py-1 rounded-full font-bold text-sm">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">$50</h3>
            <p className="mb-6">Sponsors skill training for a woman for one week</p>
            <a 
              href="#donate-50" 
              className="inline-block w-full py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Donate $50
            </a>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:bg-opacity-20">
            <h3 className="text-2xl font-bold mb-2">$100</h3>
            <p className="mb-6">Provides medical care for 5 people at a health camp</p>
            <a 
              href="#donate-100" 
              className="inline-block w-full py-3 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Donate $100
            </a>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#donate-custom" 
            className="inline-block py-3 px-8 bg-white text-orange-600 rounded-md font-medium hover:bg-gray-100 transition duration-300"
          >
            Custom Amount
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;