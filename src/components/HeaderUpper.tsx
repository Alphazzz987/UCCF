import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface HeaderUpperProps {
  logo: string;
  email: string;
  phone: string;
}

const HeaderUpper: React.FC<HeaderUpperProps> = ({ logo, email, phone }) => {
  return (
    <div className="bg-white text-gray-800 py-2 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Text */}
          <div className="flex items-center space-x-4">
            <a href="/" className="block">
              <img 
                src="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </a>
            {/* Show this text only on small screens */}
           <div className="block md:hidden text-lg font-extrabold text-gray-700 whitespace-nowrap">
  Unweaned Childcare Foundation
</div>
          </div>

          {/* Contact and Social Info (Hidden on small screens) */}
          <div className="hidden md:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Email Info Box */}
            <div className="flex items-center">
              <div className="mr-3 text-orange-500">
                <Mail size={24} />
              </div>
              <div>
                <div className="font-bold text-sm uppercase">EMAIL</div>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm md:text-base"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Phone Info Box */}
            <div className="flex items-center">
              <div className="mr-3 text-orange-500">
                <Phone size={24} />
              </div>
              <div>
                <div className="font-bold text-sm uppercase">CALL NOW</div>
                <a
                  href={`tel:${phone}`}
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm md:text-base"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:opacity-80 transition-opacity"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/unweanedchildcarefoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:opacity-80 transition-opacity"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-80 transition-opacity"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:opacity-80 transition-opacity"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUpper;
