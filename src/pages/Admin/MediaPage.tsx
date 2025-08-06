import React, { useState, useEffect } from 'react';
import { Upload, Calendar, MapPin, Image as ImageIcon, Check, X, Edit2, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

interface MediaPost {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
  gallery: string[];
}

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'upload'>('posts');
  const [posts, setPosts] = useState<MediaPost[]>([
    {
      id: '1',
      title: 'Education Support Drive',
      date: '2024-03-15',
      venue: 'Rural School, Karnataka',
      description: 'Distributed educational materials to 200+ students',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      gallery: [
        'https://images.pexels.com/photos/8613985/pexels-photo-8613985.jpeg',
        'https://images.pexels.com/photos/8613940/pexels-photo-8613940.jpeg',
        'https://images.pexels.com/photos/8613919/pexels-photo-8613919.jpeg'
      ]
    },
    {
      id: '2',
      title: 'Health Camp',
      date: '2024-03-10',
      venue: 'Community Center, Bangalore',
      description: 'Free health checkups for 500+ individuals',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      gallery: [
        'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
        'https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg',
        'https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg'
      ]
    }
  ]);

  const [editingPost, setEditingPost] = useState<MediaPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    venue: '',
    description: '',
    coverImage: null as File | null,
    image1: null as File | null,
    image2: null as File | null,
    image3: null as File | null
  });

  // Reset state when navigating to this page
  useEffect(() => {
    setActiveTab('posts');
    setEditingPost(null);
    setFormData({
      title: '',
      date: '',
      venue: '',
      description: '',
      coverImage: null,
      image1: null,
      image2: null,
      image3: null
    });
  }, []);

  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [field]: file
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

  const handleEdit = (post: MediaPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      date: post.date,
      venue: post.venue,
      description: post.description,
      coverImage: null,
      image1: null,
      image2: null,
      image3: null
    });
    setActiveTab('upload');
  };

  const handleDelete = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(prev => prev.filter(post => post.id !== postId));
      showNotification('Post deleted successfully!', 'success');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: MediaPost = {
      id: editingPost?.id || Math.random().toString(36).substr(2, 9),
      title: formData.title,
      date: formData.date,
      venue: formData.venue,
      description: formData.description,
      image: formData.coverImage 
        ? URL.createObjectURL(formData.coverImage) 
        : (editingPost?.image || ''),
      gallery: [
        formData.image1 ? URL.createObjectURL(formData.image1) : '',
        formData.image2 ? URL.createObjectURL(formData.image2) : '',
        formData.image3 ? URL.createObjectURL(formData.image3) : '',
      ].filter(Boolean)
    };

    if (editingPost) {
      setPosts(prev => prev.map(post => 
        post.id === editingPost.id ? newPost : post
      ));
      showNotification('Post updated successfully!', 'success');
    } else {
      setPosts(prev => [newPost, ...prev]);
      showNotification('Post uploaded successfully!', 'success');
    }

    setFormData({
      title: '',
      date: '',
      venue: '',
      description: '',
      coverImage: null,
      image1: null,
      image2: null,
      image3: null
    });
    setEditingPost(null);
    setActiveTab('posts');
  };

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
        <div className="flex space-x-8">
          <button
            onClick={() => {
              setActiveTab('posts');
              setEditingPost(null);
              setFormData({
                title: '',
                date: '',
                venue: '',
                description: '',
                coverImage: null,
                image1: null,
                image2: null,
                image3: null
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
            {editingPost ? 'Edit Post' : 'Upload New Post'}
            {activeTab === 'upload' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"></div>
            )}
          </button>
        </div>
      </div>

      {activeTab === 'posts' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Edit2 size={16} className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{post.venue}</span>
                </div>
                <p className="text-gray-600 text-sm">{post.description}</p>
                
                {post.gallery.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {post.gallery.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'coverImage')}
                  className="hidden"
                  id="coverImage"
                  required={!editingPost}
                />
                <label
                  htmlFor="coverImage"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  {formData.coverImage ? (
                    <div className="relative w-full h-48">
                      <img
                        src={URL.createObjectURL(formData.coverImage)}
                        alt="Cover preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setFormData(prev => ({ ...prev, coverImage: null }));
                        }}
                        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : editingPost ? (
                    <div className="relative w-full h-48">
                      <img
                        src={editingPost.image}
                        alt="Current cover"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white">Click to change image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="w-12 h-12 text-gray-400" />
                      <span className="mt-2 text-sm text-gray-500">
                        Click to upload cover image
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
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { field: 'image1', label: 'Image 1' },
                { field: 'image2', label: 'Image 2' },
                { field: 'image3', label: 'Image 3' },
              ].map(({ field, label }, index) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, field)}
                      className="hidden"
                      id={field}
                    />
                    <label
                      htmlFor={field}
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      {formData[field as keyof typeof formData] ? (
                        <div className="relative w-full h-32">
                          <img
                            src={URL.createObjectURL(formData[field as keyof typeof formData] as File)}
                            alt={`${label} preview`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setFormData(prev => ({ ...prev, [field]: null }));
                            }}
                            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : editingPost && editingPost.gallery[index] ? (
                        <div className="relative w-full h-32">
                          <img
                            src={editingPost.gallery[index]}
                            alt={`Current ${label}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xs">Click to change</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <ImageIcon className="w-8 h-8 text-gray-400" />
                          <span className="mt-2 text-xs text-gray-500">
                            Upload image
                          </span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('posts');
                  setEditingPost(null);
                  setFormData({
                    title: '',
                    date: '',
                    venue: '',
                    description: '',
                    coverImage: null,
                    image1: null,
                    image2: null,
                    image3: null
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
                {editingPost ? 'Update Post' : 'Upload Post'}
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminLayout>
  );
};

export default MediaPage;