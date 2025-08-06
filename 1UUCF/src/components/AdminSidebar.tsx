import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Home, Users, Image, BookOpen, GalleryVertical as Gallery, Mail, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: Home, label: 'Home Page', path: '/admin/home' },
  { icon: BookOpen, label: 'Programs', path: '/admin/programs' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: Image, label: 'Media', path: '/admin/media' },
  { icon: Gallery, label: 'Gallery', path: '/admin/gallery' },
  { icon: Mail, label: 'Contact', path: '/admin/contact' }
];

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => setIsCollapsed(true), 100);
  };

  return (
    <div 
      className={cn(
        "min-h-screen bg-white border-r border-gray-200 shadow-lg transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-100">
        {!isCollapsed && (
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      <nav className="p-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={cn(
                "w-full flex items-center gap-4 p-3 rounded-lg transition-colors mb-2",
                isActive 
                  ? "bg-orange-50 text-orange-600 font-medium" 
                  : "text-gray-600 hover:bg-gray-50",
                isCollapsed && "justify-center"
              )}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <span className="text-sm">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;