import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavigationItem } from '../types';

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-orange-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-5 md:py-2 relative w-full">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 w-full text-center">
            {items.map((item) => (
              <div key={item.id} className="relative group">
                {item.children ? (
                  <div className="flex items-center">
                    <button
                      className="flex items-center text-white hover:text-gray-100 px-3 py-2 font-medium"
                      onClick={() => toggleDropdown(item.id)}
                    >
                      {item.label}
                      <ChevronDown size={16} className="ml-1" />
                    </button>

                    {/* Desktop Dropdown */}
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 hidden group-hover:block top-full border-b-2 border-orange-500">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-left text-gray-700 hover:bg-orange-50 hover:text-orange-500 border-b border-gray-100 last:border-b-0"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-gray-100 px-3 py-2 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/donate"
              className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-2 rounded-md font-medium transition duration-300"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="absolute right-0 md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-500">
            {items.map((item) => (
              <div key={item.id}>
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-white hover:text-gray-100 hover:bg-orange-600 px-3 py-2 rounded-md font-medium"
                      onClick={() => toggleDropdown(item.id)}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    {activeDropdown === item.id && (
                      <div className="pl-4 space-y-1 mt-1 bg-white rounded-md shadow-inner">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-left text-gray-700 hover:bg-orange-50 hover:text-orange-500 border-b border-gray-100 last:border-b-0"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-orange-600"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-3">
              <Link
                to="/donate"
                className="block w-full text-center bg-white text-orange-500 hover:bg-gray-100 px-6 py-2 rounded-md font-medium transition duration-300"
                onClick={closeMenu}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;