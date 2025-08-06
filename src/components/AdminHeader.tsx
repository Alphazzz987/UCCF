import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/admin/dashboard':
        return 'Dashboard Overview';
      case '/admin/home':
        return 'Home Page Settings';
      case '/admin/users':
        return 'User Management';
      case '/admin/media':
        return 'Media Library';
      case '/admin/programs':
        return 'Our Programs';
      case '/admin/gallery':
        return 'Gallery Management';
      case '/admin/contact':
        return 'Contact Settings';
      default:
        return 'Dashboard Overview';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">{getPageTitle()}</h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="bg-white text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;