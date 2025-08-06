import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Footer from '../../components/Footer';
import { footerNavigation, contactInfo } from '../../data/mockData';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      aspectRatio: '4/3',
      dimensions: '16x12',
      caption: 'Supporting education initiatives'
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/8613985/pexels-photo-8613985.jpeg',
      aspectRatio: '2/3',
      dimensions: '16x24',
      caption: 'Community engagement'
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/8613940/pexels-photo-8613940.jpeg',
      aspectRatio: '5/4',
      dimensions: '20x16',
      caption: 'Healthcare support'
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/8613919/pexels-photo-8613919.jpeg',
      aspectRatio: '2/3',
      dimensions: '20x30',
      caption: 'Youth empowerment'
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/8613466/pexels-photo-8613466.jpeg',
      aspectRatio: '5/4',
      dimensions: '20x16',
      caption: 'Rural development'
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/8613467/pexels-photo-8613467.jpeg',
      aspectRatio: '3/4',
      dimensions: '15x20',
      caption: 'Skill development'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Our Gallery</h1>
          <div className="flex items-center justify-center space-x-3 text-white">
            <a href="/" className="text-white hover:text-orange-500 transition-colors">Home</a>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Gallery</span>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium mb-1">{image.caption}</p>
                  <p className="text-white/80 text-sm">{image.dimensions}</p>
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

      {/* Footer */}
      <Footer 
        logo="https://unweanedchildcarefoundation.org/wp-content/uploads/2022/07/uccf-logo.png"
        contactInfo={contactInfo}
        navigation={footerNavigation}
      />
    </div>
  );
};

export default Gallery;