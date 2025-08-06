import React, { useState, useEffect } from 'react';
import { Save, MapPin, Mail, Phone, Clock } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  workingHours: {
    weekdays: string;
    saturday: string;
  };
}

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    location: '65/5 Parapanna Agrahara, Electronic City, Bengaluru, Karnataka 560100',
    email: 'info@organization.org',
    phone: '+91 9986645529',
    workingHours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      saturday: 'Saturday: 9:00 AM - 1:00 PM'
    }
  });

  const [isEditing, setIsEditing] = useState<keyof ContactInfo | null>(null);
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success'
  });

  // Reset state when navigating to this page
  useEffect(() => {
    setIsEditing(null);
  }, []);

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({
      show: true,
      message,
      type
    });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleSave = (field: keyof ContactInfo) => {
    // Here you would typically save to a backend
    showNotification('Contact information updated successfully!', 'success');
    setIsEditing(null);
  };

  return (
    <AdminLayout>
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {notification.message}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-medium">Location</h3>
                </div>
                <button
                  onClick={() => setIsEditing('location')}
                  className="text-orange-500 hover:text-orange-600"
                >
                  Edit
                </button>
              </div>
              {isEditing === 'location' ? (
                <div className="space-y-4">
                  <textarea
                    value={contactInfo.location}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows={3}
                  />
                  <button
                    onClick={() => handleSave('location')}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              ) : (
                <p className="text-gray-600">{contactInfo.location}</p>
              )}
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-medium">Email</h3>
                </div>
                <button
                  onClick={() => setIsEditing('email')}
                  className="text-orange-500 hover:text-orange-600"
                >
                  Edit
                </button>
              </div>
              {isEditing === 'email' ? (
                <div className="space-y-4">
                  <input
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleSave('email')}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              ) : (
                <p className="text-gray-600">{contactInfo.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-medium">Phone</h3>
                </div>
                <button
                  onClick={() => setIsEditing('phone')}
                  className="text-orange-500 hover:text-orange-600"
                >
                  Edit
                </button>
              </div>
              {isEditing === 'phone' ? (
                <div className="space-y-4">
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleSave('phone')}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              ) : (
                <p className="text-gray-600">{contactInfo.phone}</p>
              )}
            </div>

            {/* Working Hours */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-medium">Working Hours</h3>
                </div>
                <button
                  onClick={() => setIsEditing('workingHours')}
                  className="text-orange-500 hover:text-orange-600"
                >
                  Edit
                </button>
              </div>
              {isEditing === 'workingHours' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weekdays
                    </label>
                    <input
                      type="text"
                      value={contactInfo.workingHours.weekdays}
                      onChange={(e) => setContactInfo(prev => ({
                        ...prev,
                        workingHours: {
                          ...prev.workingHours,
                          weekdays: e.target.value
                        }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Saturday
                    </label>
                    <input
                      type="text"
                      value={contactInfo.workingHours.saturday}
                      onChange={(e) => setContactInfo(prev => ({
                        ...prev,
                        workingHours: {
                          ...prev.workingHours,
                          saturday: e.target.value
                        }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={() => handleSave('workingHours')}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-gray-600">{contactInfo.workingHours.weekdays}</p>
                  <p className="text-gray-600">{contactInfo.workingHours.saturday}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContactPage;