import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

interface FooterProps {
  logo: string;
  contactInfo: {
    address: string;
    email: string;
    phone: string;
  };
  navigation: {
    category: string;
    links: { name: string; href: string }[];
  }[];
}

const Footer: React.FC<FooterProps> = ({ logo, contactInfo, navigation }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About & Contact */}
          <div className="space-y-6">
            <img
              src="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
              alt="Logo"
              className="h-12"
            />
            <p className="text-gray-400">
              Empowering communities through education, skill development, and
              healthcare to build a better future for all.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin
                  size={20}
                  className="text-orange-500 mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Phone
                  size={20}
                  className="text-orange-500 mr-3 flex-shrink-0"
                />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail
                  size={20}
                  className="text-orange-500 mr-3 flex-shrink-0"
                />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {navigation.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-bold mb-6 relative">
                {category.category}
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-orange-500"></span>
              </h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-orange-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on our work and impact.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Your Organization. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
