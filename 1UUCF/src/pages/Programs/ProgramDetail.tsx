import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Heart, Target, CheckCircle, ArrowRight, X } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Program } from '../../types';
import Footer from '../../components/Footer';
import { footerNavigation, contactInfo } from '../../data/mockData';

interface ProgramDetailProps {
  programs: Program[];
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ programs }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const program = programs.find(p => p.id === id);

  if (!program) {
    return <div>Program not found</div>;
  }

  const galleryImages = program.gallery || [
    {
      id: '1',
      imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      caption: 'Supporting education initiatives'
    },
    {
      id: '2',
      imageUrl: 'https://images.pexels.com/photos/8613985/pexels-photo-8613985.jpeg',
      caption: 'Community engagement programs'
    },
    {
      id: '3',
      imageUrl: 'https://images.pexels.com/photos/8613940/pexels-photo-8613940.jpeg',
      caption: 'Skills development workshops'
    },
    {
      id: '4',
      imageUrl: 'https://images.pexels.com/photos/8613919/pexels-photo-8613919.jpeg',
      caption: 'Healthcare support services'
    },
    {
      id: '5',
      imageUrl: 'https://images.pexels.com/photos/8613466/pexels-photo-8613466.jpeg',
      caption: 'Youth empowerment activities'
    },
    {
      id: '6',
      imageUrl: 'https://images.pexels.com/photos/8613467/pexels-photo-8613467.jpeg',
      caption: 'Rural development projects'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${program.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <button
              onClick={() => navigate(-1)}
              className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
            >
              <ArrowLeft size={24} />
              <span>Back</span>
            </button>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              {program.title}
            </h1>
            <div className="flex justify-center gap-8 text-lg animate-fadeInUp">
              <div className="flex items-center gap-2">
                <Users className="text-orange-400" />
                <span>1000+ Beneficiaries</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-orange-400" />
                <span>12 Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-orange-400" />
                <span>Since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="text-orange-500" />
              Program Overview
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Community Focus",
                description: "Building stronger communities through collaborative efforts and local partnerships"
              },
              {
                icon: Target,
                title: "Sustainable Impact",
                description: "Creating lasting change through long-term solutions and capacity building"
              },
              {
                icon: Heart,
                title: "Holistic Approach",
                description: "Addressing multiple aspects of development for comprehensive growth"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Methodology Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Methodology
              </h2>
              <div className="space-y-4">
                {[
                  "Comprehensive needs assessment and community engagement",
                  "Evidence-based intervention strategies",
                  "Regular monitoring and evaluation",
                  "Capacity building and skill development"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-500/10 rounded-xl transform rotate-3" />
                <img
                  src={program.imageUrl}
                  alt="Our Methodology"
                  className="relative rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((story) => (
              <div key={story} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/661${story}154/pexels-photo-661${story}154.jpeg`}
                  alt={`Success Story ${story}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Transforming Lives</h3>
                  <p className="text-gray-600 mb-4">
                    Read about how our program has made a significant impact in the lives of our beneficiaries.
                  </p>
                  <Link to="/media" className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2">
                    Read Full Story
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-lg">Active Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-lg">Years of Service</div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our visual journey through photographs that capture the essence of our work and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(image.imageUrl)}
              >
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption && (
                      <p className="text-sm">{image.caption}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Get Involved Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. There are multiple ways you can contribute to our mission.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Donate",
                description: "Support our work with a financial contribution",
                action: "Donate Now",
                link: "/donate"
              },
              {
                title: "Volunteer",
                description: "Share your time and skills with our community",
                action: "Join Us",
                link: "/volunteers"
              },
              {
                title: "Contact",
                description: "Get in touch to learn more about our work",
                action: "Contact Us",
                link: "/contact"
              }
            ].map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <Link
                  to={option.link}
                  className="inline-block px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  {option.action}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Have Questions?</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Get in touch with our team to learn more about this program and how you can get involved.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <Footer 
        logo="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
        contactInfo={contactInfo}
        navigation={footerNavigation}
      />
    </div>
  );
};

export default ProgramDetail;