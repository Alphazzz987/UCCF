import React, { useState, useEffect } from 'react';
import { Upload, Search, Edit2, Trash2, Check, X } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  style: 'contain' | 'cover' | 'fill';
}

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'upload'>('posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: '1',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      title: 'Education Support Drive',
      style: 'cover'
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/8613985/pexels-photo-8613985.jpeg',
      title: 'Community Engagement',
      style: 'cover'
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/8613940/pexels-photo-8613940.jpeg',
      title: 'Healthcare Support',
      style: 'cover'
    },
    {
      id: '4',
      image: 'https://images.pexels.com/photos/8613919/pexels-photo-8613919.jpeg',
      title: 'Youth Empowerment',
      style: 'cover'
    },
    {
      id: '5',
      image: 'https://images.pexels.com/photos/8613466/pexels-photo-8613466.jpeg',
      title: 'Rural Development',
      style: 'cover'
    },
    {
      id: '6',
      image: 'https://images.pexels.com/photos/8613467/pexels-photo-8613467.jpeg',
      title: 'Skill Development',
      style: 'cover'
    }
  ]);
  const [currentItem, setCurrentItem] = useState<GalleryItem>({
    id: '',
    image: '',
    title: '',
    style: 'cover'
  });
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
    setActiveTab('posts');
    setSearchQuery('');
    setCurrentItem({
      id: '',
      image: '',
      title: '',
      style: 'cover'
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCurrentItem(prev => ({
        ...prev,
        image: imageUrl
      }));
    }
  };

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

  const handleEdit = (item: GalleryItem) => {
    setCurrentItem(item);
    setActiveTab('upload');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setGalleryItems(prev => prev.filter(item => item.id !== id));
      showNotification('Item deleted successfully!', 'success');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentItem.id) {
      setGalleryItems(prev =>
        prev.map(item =>
          item.id === currentItem.id ? currentItem : item
        )
      );
      showNotification('Item updated successfully!', 'success');
    } else {
      setGalleryItems(prev => [
        ...prev,
        { ...currentItem, id: Math.random().toString(36).substr(2, 9) }
      ]);
      showNotification('Item added successfully!', 'success');
    }
    setActiveTab('posts');
    setCurrentItem({
      id: '',
      image: '',
      title: '',
      style: 'cover'
    });
  };

  const filteredItems = galleryItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg text-white ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {notification.type === 'success' ? (
            <Check size={20} />
          ) : (
            <X size={20} />
          )}
          {notification.message}
        </div>
      )}

      <div className="mb-8 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setActiveTab('posts');
                setCurrentItem({
                  id: '',
                  image: '',
                  title: '',
                  style: 'cover'
                });
              }}
              className={`py-4 px-2 relative ${
                activeTab === 'posts'
                  ? 'text-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200 text-sm font-medium`}
            >
              Active Posts
              {activeTab === 'posts' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`py-4 px-2 relative ${
                activeTab === 'upload'
                  ? 'text-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200 text-sm font-medium`}
            >
              {currentItem.id ? 'Edit Post' : 'Upload New Post'}
              {activeTab === 'upload' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"></div>
              )}
            </button>
          </div>
          
          {activeTab === 'posts' && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none h-4 w-4" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-gray-300"
              />
            </div>
          )}
        </div>
      </div>

      {activeTab === 'posts' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-48 object-${item.style}`}
                />
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Edit2 size={16} className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="gallery-image"
                />
                <label
                  htmlFor="gallery-image"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  {currentItem.image ? (
                    <img
                      src={currentItem.image}
                      alt="Preview"
                      className={`w-full h-48 object-${currentItem.style} rounded-lg`}
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="w-12 h-12 text-gray-400" />
                      <span className="mt-2 text-sm text-gray-500">
                        Click to upload image
                      </span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={currentItem.title}
                onChange={(e) => setCurrentItem(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image Style
              </label>
              <select
                value={currentItem.style}
                onChange={(e) => setCurrentItem(prev => ({ 
                  ...prev, 
                  style: e.target.value as 'contain' | 'cover' | 'fill' 
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="contain">Contain</option>
                <option value="cover">Cover</option>
                <option value="fill">Fill</option>
              </select>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('posts');
                  setCurrentItem({
                    id: '',
                    image: '',
                    title: '',
                    style: 'cover'
                  });
                }}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {currentItem.id ? 'Update' : 'Upload'}
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminLayout>
  );
};

export default GalleryPage;