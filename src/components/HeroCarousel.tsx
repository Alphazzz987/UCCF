import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  slides: {
    id: string;
    imageUrl: string;
    title: string;
    description?: string;
  }[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              {slide.description && (
                <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fadeIn">
                  {slide.description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#donate"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium text-lg transition-all duration-300 animate-fadeIn animate-delay-200 transform hover:scale-105"
                >
                  Donate Now
                </a>
                <a
                  href="#volunteer"
                  className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium text-lg transition-all duration-300 animate-fadeIn animate-delay-300 transform hover:scale-105"
                >
                  Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white transition duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white transition duration-300"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;