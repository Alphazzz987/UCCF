import React from 'react';

interface MissionSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fadeInLeft">
            <div className="relative">
              <img
                src={imageUrl}
                alt="Our Mission"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 bg-orange-500 rounded-lg z-[-1]"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fadeInRight">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {title}
            </h2>
            
            <div className="text-gray-600 leading-relaxed mb-8 space-y-4">
              {description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;