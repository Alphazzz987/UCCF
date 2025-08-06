import React, { useState, useEffect } from 'react';
import { Upload, Search, Edit2, Trash2, Check, X } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import { iconOptions, iconComponents } from '../../data/iconOptions';

interface Program {
  id: string;
  coverImage: string;
  coverStyle: 'cover' | 'contain' | 'fill';
  title: string;
  impact: {
    beneficiaries: number;
    locations: number;
    since: number;
  };
  overview: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  methodology: {
    points: string[];
    image: string;
    imageStyle: 'cover' | 'contain' | 'fill';
  };
  successStories: string[];
  gallery: {
    image: string;
    style: 'cover' | 'contain' | 'fill';
  }[];
}

const ProgramsPage = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'upload'>('posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: '1',
      coverImage: 'https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg',
      coverStyle: 'cover',
      title: 'Child Sponsorship Program',
      impact: {
        beneficiaries: 1000,
        locations: 12,
        since: 2020
      },
      overview: 'Supporting the education of underprivileged children with learning materials, scholarships, and digital education resources.',
      features: [
        {
          icon: 'Heart',
          title: 'Holistic Development',
          description: 'Focus on overall child development'
        },
        {
          icon: 'Book',
          title: 'Quality Education',
          description: 'Access to quality learning resources'
        },
        {
          icon: 'Users',
          title: 'Community Support',
          description: 'Engaging local communities'
        }
      ],
      methodology: {
        points: [
          'Regular assessment of educational needs',
          'Personalized learning plans',
          'Parent and community involvement',
          'Progress monitoring and evaluation'
        ],
        image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
        imageStyle: 'cover'
      },
      successStories: [
        'Story of Ravi from rural Karnataka',
        'Meena\'s journey to college education'
      ],
      gallery: [
        {
          image: 'https://images.pexels.com/photos/8613985/pexels-photo-8613985.jpeg',
          style: 'cover'
        },
        {
          image: 'https://images.pexels.com/photos/8613940/pexels-photo-8613940.jpeg',
          style: 'cover'
        }
      ]
    },
    {
      id: '2',
      coverImage: 'https://images.pexels.com/photos/7551755/pexels-photo-7551755.jpeg',
      coverStyle: 'cover',
      title: 'Women Empowerment',
      impact: {
        beneficiaries: 500,
        locations: 8,
        since: 2021
      },
      overview: 'Providing skill development training for women to help them become financially independent through tailoring, crafting, and entrepreneurship.',
      features: [
        {
          icon: 'Target',
          title: 'Skill Training',
          description: 'Practical skills for employment'
        },
        {
          icon: 'Rocket',
          title: 'Business Support',
          description: 'Entrepreneurship guidance'
        },
        {
          icon: 'Shield',
          title: 'Financial Literacy',
          description: 'Managing finances effectively'
        }
      ],
      methodology: {
        points: [
          'Hands-on skill training',
          'Business plan development',
          'Market linkage support',
          'Ongoing mentorship'
        ],
        image: 'https://images.pexels.com/photos/7551756/pexels-photo-7551756.jpeg',
        imageStyle: 'cover'
      },
      successStories: [
        'Lakshmi\'s successful tailoring business',
        'Shantha\'s handicraft enterprise'
      ],
      gallery: [
        {
          image: 'https://images.pexels.com/photos/7551757/pexels-photo-7551757.jpeg',
          style: 'cover'
        },
        {
          image: 'https://images.pexels.com/photos/7551758/pexels-photo-7551758.jpeg',
          style: 'cover'
        }
      ]
    },
    {
      id: '3',
      coverImage: 'https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg',
      coverStyle: 'cover',
      title: 'Medical Camps',
      impact: {
        beneficiaries: 2000,
        locations: 15,
        since: 2019
      },
      overview: 'Organizing free health checkups, consultations, and medicine distribution to communities with limited healthcare access.',
      features: [
        {
          icon: 'Heart',
          title: 'Free Healthcare',
          description: 'Access to medical services'
        },
        {
          icon: 'Users',
          title: 'Expert Doctors',
          description: 'Qualified medical professionals'
        },
        {
          icon: 'Shield',
          title: 'Medicine Support',
          description: 'Free medicine distribution'
        }
      ],
      methodology: {
        points: [
          'Regular health camps',
          'Preventive healthcare education',
          'Follow-up care',
          'Community health workers'
        ],
        image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
        imageStyle: 'cover'
      },
      successStories: [
        'Rural healthcare initiative success',
        'Preventive care impact story'
      ],
      gallery: [
        {
          image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
          style: 'cover'
        },
        {
          image: 'https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg',
          style: 'cover'
        }
      ]
    },
    {
      id: '4',
      coverImage: 'https://images.pexels.com/photos/8423171/pexels-photo-8423171.jpeg',
      coverStyle: 'cover',
      title: 'Scholarship Program',
      impact: {
        beneficiaries: 300,
        locations: 5,
        since: 2022
      },
      overview: 'Supporting talented students from disadvantaged backgrounds in pursuing higher education in medicine, engineering, and other fields.',
      features: [
        {
          icon: 'GraduationCap',
          title: 'Education Support',
          description: 'Financial assistance for studies'
        },
        {
          icon: 'Book',
          title: 'Mentorship',
          description: 'Guidance from professionals'
        },
        {
          icon: 'Target',
          title: 'Career Planning',
          description: 'Future career guidance'
        }
      ],
      methodology: {
        points: [
          'Merit-based selection',
          'Regular performance monitoring',
          'Career counseling',
          'Alumni network'
        ],
        image: 'https://images.pexels.com/photos/8613466/pexels-photo-8613466.jpeg',
        imageStyle: 'cover'
      },
      successStories: [
        'First-generation college graduate',
        'Medical student success story'
      ],
      gallery: [
        {
          image: 'https://images.pexels.com/photos/8613467/pexels-photo-8613467.jpeg',
          style: 'cover'
        },
        {
          image: 'https://images.pexels.com/photos/8613468/pexels-photo-8613468.jpeg',
          style: 'cover'
        }
      ]
    },
    {
      id: '5',
      coverImage: 'https://images.pexels.com/photos/7516380/pexels-photo-7516380.jpeg',
      coverStyle: 'cover',
      title: 'E-Learning Classes',
      impact: {
        beneficiaries: 800,
        locations: 10,
        since: 2021
      },
      overview: 'Providing digital learning opportunities for children in remote areas through online classes and educational technology.',
      features: [
        {
          icon: 'Laptop',
          title: 'Digital Access',
          description: 'Online learning platform'
        },
        {
          icon: 'Video',
          title: 'Interactive Classes',
          description: 'Engaging online sessions'
        },
        {
          icon: 'Book',
          title: 'Digital Library',
          description: 'Access to learning resources'
        }
      ],
      methodology: {
        points: [
          'Interactive online platform',
          'Regular assessments',
          'Parent involvement',
          'Technical support'
        ],
        image: 'https://images.pexels.com/photos/8613919/pexels-photo-8613919.jpeg',
        imageStyle: 'cover'
      },
      successStories: [
        'Remote learning success story',
        'Digital literacy achievement'
      ],
      gallery: [
        {
          image: 'https://images.pexels.com/photos/8613940/pexels-photo-8613940.jpeg',
          style: 'cover'
        },
        {
          image: 'https://images.pexels.com/photos/8613985/pexels-photo-8613985.jpeg',
          style: 'cover'
        }
      ]
    },
    {
      id: '6',
      coverImage: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
      coverStyle: 'cover',
      title: 'Community Development',
      impact: {
        beneficiaries: 5000,
        locations: 20,
        since: 2018
      },
      overview: 'Working with local communities to improve infrastructure, sanitation, and access to essential services.',
      features: [
        {
          icon: 'Home',
          title: 'Infrastructure',
          description: 'Community facilities'
        },
        {
          icon: 'Users',
          title: 'Community Engagement',
          description: 'Local participation'
        },
        {
          icon: 'Target',
          title: 'Sustainable Development',
          description: 'Long-term impact'
        }
      ],
      methodology: {
        points: [
          'Community needs assessment',
          'Participatory planning',
          'Local resource mobilization',
          'Impact monitoring'
        ],
        image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
        imageStyle: 'cover'
      },
      successStories: [
        'Village development success',
        'Community leadership story'
      ],
      gallery: [
        {
          image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg',
          style: 'cover'
        },
        {
          image: 'https://images.pexels.com/photos/6646920/pexels-photo-6646920.jpeg',
          style: 'cover'
        }
      ]
    }
  ]);
  const [currentProgram, setCurrentProgram] = useState<Program>({
    id: '',
    coverImage: '',
    coverStyle: 'cover',
    title: '',
    impact: {
      beneficiaries: 0,
      locations: 0,
      since: new Date().getFullYear(),
    },
    overview: '',
    features: Array(3).fill({
      icon: 'Heart',
      title: '',
      description: '',
    }),
    methodology: {
      points: Array(4).fill(''),
      image: '',
      imageStyle: 'cover',
    },
    successStories: ['', ''],
    gallery: Array(6).fill({
      image: '',
      style: 'cover',
    }),
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

  useEffect(() => {
    setActiveTab('posts');
    setSearchQuery('');
    setCurrentProgram({
      id: '',
      coverImage: '',
      coverStyle: 'cover',
      title: '',
      impact: {
        beneficiaries: 0,
        locations: 0,
        since: new Date().getFullYear(),
      },
      overview: '',
      features: Array(3).fill({
        icon: 'Heart',
        title: '',
        description: '',
      }),
      methodology: {
        points: Array(4).fill(''),
        image: '',
        imageStyle: 'cover',
      },
      successStories: ['', ''],
      gallery: Array(6).fill({
        image: '',
        style: 'cover',
      }),
    });
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

  const handleEdit = (program: Program) => {
    setCurrentProgram(program);
    setActiveTab('upload');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      setPrograms(prev => prev.filter(program => program.id !== id));
      showNotification('Program deleted successfully!', 'success');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    section?: string,
    index?: number,
    field?: string
  ) => {
    const { name, value } = e.target;

    if (section === 'impact') {
      setCurrentProgram(prev => ({
        ...prev,
        impact: {
          ...prev.impact,
          [name]: parseInt(value) || 0,
        },
      }));
    } else if (section === 'features' && typeof index === 'number') {
      const newFeatures = [...currentProgram.features];
      newFeatures[index] = {
        ...newFeatures[index],
        [field as string]: value,
      };
      setCurrentProgram(prev => ({
        ...prev,
        features: newFeatures,
      }));
    } else if (section === 'methodology' && typeof index === 'number') {
      const newPoints = [...currentProgram.methodology.points];
      newPoints[index] = value;
      setCurrentProgram(prev => ({
        ...prev,
        methodology: {
          ...prev.methodology,
          points: newPoints,
        },
      }));
    } else if (section === 'methodology-style') {
      setCurrentProgram(prev => ({
        ...prev,
        methodology: {
          ...prev.methodology,
          imageStyle: value as 'cover' | 'contain' | 'fill',
        },
      }));
    } else {
      setCurrentProgram(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: 'cover' | 'methodology' | 'gallery',
    index?: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    if (section === 'cover') {
      setCurrentProgram(prev => ({
        ...prev,
        coverImage: imageUrl,
      }));
    } else if (section === 'methodology') {
      setCurrentProgram(prev => ({
        ...prev,
        methodology: {
          ...prev.methodology,
          image: imageUrl,
        },
      }));
    } else if (section === 'gallery' && typeof index === 'number') {
      const newGallery = [...currentProgram.gallery];
      newGallery[index] = {
        ...newGallery[index],
        image: imageUrl,
      };
      setCurrentProgram(prev => ({
        ...prev,
        gallery: newGallery,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentProgram.id) {
      setPrograms(prev =>
        prev.map(program =>
          program.id === currentProgram.id ? currentProgram : program
        )
      );
      showNotification('Program updated successfully!', 'success');
    } else {
      setPrograms(prev => [
        ...prev,
        { ...currentProgram, id: Math.random().toString(36).substr(2, 9) }
      ]);
      showNotification('Program added successfully!', 'success');
    }
    setActiveTab('posts');
  };

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                setCurrentProgram({
                  id: '',
                  coverImage: '',
                  coverStyle: 'cover',
                  title: '',
                  impact: {
                    beneficiaries: 0,
                    locations: 0,
                    since: new Date().getFullYear(),
                  },
                  overview: '',
                  features: Array(3).fill({
                    icon: 'Heart',
                    title: '',
                    description: '',
                  }),
                  methodology: {
                    points: Array(4).fill(''),
                    image: '',
                    imageStyle: 'cover',
                  },
                  successStories: ['', ''],
                  gallery: Array(6).fill({
                    image: '',
                    style: 'cover',
                  }),
                });
              }}
              className={`py-4 px-2 relative ${
                activeTab === 'posts'
                  ? 'text-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200 text-sm font-medium`}
            >
              Active Programs
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
              {currentProgram.id ? 'Edit Program' : 'Add New Program'}
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
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-gray-300"
              />
            </div>
          )}
        </div>
      </div>

      {activeTab === 'posts' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <img
                  src={program.coverImage}
                  alt={program.title}
                  className={`w-full h-48 object-${program.coverStyle}`}
                />
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEdit(program)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Edit2 size={16} className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(program.id)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 line-clamp-2">{program.overview}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span>{program.impact.beneficiaries}+ beneficiaries</span>
                  <span>{program.impact.locations} locations</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'cover')}
                  className="hidden"
                  id="coverImage"
                />
                <label
                  htmlFor="coverImage"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  {currentProgram.coverImage ? (
                    <img
                      src={currentProgram.coverImage}
                      alt="Cover preview"
                      className={`w-full h-48 object-${currentProgram.coverStyle} rounded-lg`}
                    />
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
              <select
                value={currentProgram.coverStyle}
                onChange={(e) => handleInputChange(e, 'cover')}
                name="coverStyle"
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="cover">Cover</option>
                <option value="contain">Contain</option>
                <option value="fill">Fill</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={currentProgram.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beneficiaries
                </label>
                <input
                  type="number"
                  name="beneficiaries"
                  value={currentProgram.impact.beneficiaries}
                  onChange={(e) => handleInputChange(e, 'impact')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Locations
                </label>
                <input
                  type="number"
                  name="locations"
                  value={currentProgram.impact.locations}
                  onChange={(e) => handleInputChange(e, 'impact')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Since
                </label>
                <input
                  type="number"
                  name="since"
                  value={currentProgram.impact.since}
                  onChange={(e) => handleInputChange(e, 'impact')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Program Overview */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Program Overview
              </label>
              <textarea
                name="overview"
                value={currentProgram.overview}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
              <div className="space-y-4">
                {currentProgram.features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Icon
                      </label>
                      <div className="flex items-center gap-2">
                        <select
                          value={feature.icon}
                          onChange={(e) => handleInputChange(e, 'features', index, 'icon')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          {iconOptions.map((icon) => (
                            <option key={icon} value={icon}>{icon}</option>
                          ))}
                        </select>
                        {feature.icon && (
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                            {React.createElement(iconComponents[feature.icon as keyof typeof iconComponents], {
                              className: "w-6 h-6 text-orange-500"
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={feature.title}
                        onChange={(e) => handleInputChange(e, 'features', index, 'title')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <input
                        type="text"
                        value={feature.description}
                        onChange={(e) => handleInputChange(e, 'features', index, 'description')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Point {index + 1}
                      </label>
                      <input
                        type="text"
                        value={currentProgram.methodology.points[index]}
                        onChange={(e) => handleInputChange(e, 'methodology', index)}
                        className="w-full px-3 py-2 border border-gray-300 rounde
d-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Methodology Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'methodology')}
                      className="hidden"
                      id="methodology-image"
                    />
                    <label
                      htmlFor="methodology-image"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      {currentProgram.methodology.image ? (
                        <img
                          src={currentProgram.methodology.image}
                          alt="Methodology"
                          className={`w-full h-48 object-${currentProgram.methodology.imageStyle} rounded-lg`}
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
                  <select
                    value={currentProgram.methodology.imageStyle}
                    onChange={(e) => handleInputChange(e, 'methodology-style')}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="cover">Cover</option>
                    <option value="contain">Contain</option>
                    <option value="fill">Fill</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index}>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'gallery', index)}
                        className="hidden"
                        id={`gallery-image-${index}`}
                      />
                      <label
                        htmlFor={`gallery-image-${index}`}
                        className="flex flex-col items-center justify-center cursor-pointer"
                      >
                        {currentProgram.gallery[index]?.image ? (
                          <img
                            src={currentProgram.gallery[index].image}
                            alt={`Gallery ${index + 1}`}
                            className={`w-full h-48 object-${currentProgram.gallery[index].style} rounded-lg`}
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
                    <select
                      value={currentProgram.gallery[index]?.style || 'cover'}
                      onChange={(e) => {
                        const newGallery = [...currentProgram.gallery];
                        newGallery[index] = {
                          ...newGallery[index],
                          style: e.target.value as 'cover' | 'contain' | 'fill',
                        };
                        setCurrentProgram(prev => ({
                          ...prev,
                          gallery: newGallery,
                        }));
                      }}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="cover">Cover</option>
                      <option value="contain">Contain</option>
                      <option value="fill">Fill</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setActiveTab('posts')}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Save Program
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminLayout>
  );
};

export default ProgramsPage;