import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Heart, Calendar } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-50 rounded-lg p-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-5">
              <div className="text-2xl font-semibold text-gray-800">3,521</div>
              <div className="text-sm font-medium text-gray-500">Total Users</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-50 rounded-lg p-3">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-5">
              <div className="text-2xl font-semibold text-gray-800">28</div>
              <div className="text-sm font-medium text-gray-500">Programs</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-50 rounded-lg p-3">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-5">
              <div className="text-2xl font-semibold text-gray-800">$12,875</div>
              <div className="text-sm font-medium text-gray-500">Donations</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-orange-50 rounded-lg p-3">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-5">
              <div className="text-2xl font-semibold text-gray-800">15</div>
              <div className="text-sm font-medium text-gray-500">Events</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Recent Activities
          </h3>
          <div className="divide-y divide-gray-200">
            <div className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    New user registration
                  </p>
                  <p className="text-sm text-gray-500">
                    John Doe joined the platform
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">5m ago</span>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-purple-50 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    New donation received
                  </p>
                  <p className="text-sm text-gray-500">
                    $500 donated by Sarah Smith
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">1h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;